import { promises as fs, existsSync } from "fs";
import { dirname, join } from "path";
import { Config } from "conventional-changelog-config-spec";
import { compare, prerelease as getPrereleaseComponent } from "semver";
import * as logging from "../logging";
import { exec, execCapture } from "../util";

export interface BumpOptions {
  /**
   * The name of a .json file to set `version`.
   */
  readonly versionFile: string;

  /**
   * The name of the changelog file to generate.
   */
  readonly changelog: string;

  /**
   * Use a pre-release suffix.
   * @default - normal versioning
   */
  readonly prerelease?: string;

  /**
   * For cases where the merge strategy is fast-forward without "squash commits", same commit might need to be
   * released with different prerelese components like alpha, beta during the lifecycle. Setting this variable will
   * allow releasing the same commit on multiple branches.
   *
   * @default false
   */
  readonly releaseSameCommitOnDifferentBranch?: boolean;

  /**
   * Defines the major version line. This is used to select the latest version
   * and also enforce that new major versions are not released accidentally.
   *
   * Can not be set together with `minMajorVersion`.
   *
   * @default - any version is supported
   */
  readonly majorVersion?: number;

  /**
   * Defines the minimal major version. This is used if you want to start with
   * a specific major version, and increment from there on.
   * This can be useful to set to 1, as breaking changes before the 1.x major
   * release are not incrementing the major version number.
   *
   * Can not be set together with `majorVersion`.
   *
   * @default - No minimum version is being enforced
   */
  readonly minMajorVersion?: number;

  /**
   * The name of a file which will include the output version number (a text file).
   *
   * Relative to cwd.
   *
   * @example ".version.txt"
   */
  readonly bumpFile: string;

  /**
   * The name of the file which will include the release tag (a text file).
   *
   * Relative to cwd.
   *
   * @example ".releasetag.txt"
   */
  readonly releaseTagFile: string;

  /**
   * The prefix applied to release tags. Bumps will be made based on the latest
   * version found with this prefix.
   */
  readonly tagPrefix?: string;

  /**
   * Conguration values that would append to versionrc file or overwrite values
   * coming to that from default one.
   */
  readonly versionrcOptions?: Config;
}

/**
 * Resolves the latest version from git tags and uses `standard-version` to bump
 * to the next version based on commits.
 *
 * This expects `standard-version` to be installed in the path.
 *
 * @param cwd working directory (git repository)
 * @param options options
 */
export async function bump(cwd: string, options: BumpOptions) {
  const versionFile = join(cwd, options.versionFile);
  const prerelease = options.prerelease;
  const major = options.majorVersion;
  const minMajorVersion = options.minMajorVersion;
  const prefix = options.tagPrefix ?? "";
  const bumpFile = join(cwd, options.bumpFile);
  const changelogFile = join(cwd, options.changelog);
  const releaseTagFile = join(cwd, options.releaseTagFile);
  if (major && minMajorVersion) {
    throw new Error(
      `minMajorVersion and majorVersion cannot be used together.`
    );
  }

  await fs.mkdir(dirname(bumpFile), { recursive: true });
  await fs.mkdir(dirname(changelogFile), { recursive: true });
  await fs.mkdir(dirname(releaseTagFile), { recursive: true });

  const { latestVersion, latestTag, isFirstRelease } = determineLatestTag({
    cwd,
    major,
    prerelease,
    prefix,
  });

  const { contents, newline } = await tryReadVersionFile(versionFile);

  // update version
  contents.version = latestVersion;

  logging.info(
    `Update ${versionFile} to latest resolved version: ${latestVersion}`
  );
  await fs.writeFile(
    versionFile,
    JSON.stringify(contents, undefined, 2) + (newline ? "\n" : "")
  );

  // check if the latest commit already has a version tag
  const currentTags = execCapture("git tag --points-at HEAD", { cwd })
    .toString("utf8")
    .split("\n");
  logging.info(`Tags listed on current commit: ${currentTags}`);

  let skipBump = false;

  /**
   * Skip the bump only if the current commit is already tagged within the same branch
   */
  if (
    currentTags.includes(latestTag) &&
    !allowReleaseSameCommit(
      latestTag,
      options.prerelease,
      options.releaseSameCommitOnDifferentBranch
    )
  ) {
    logging.info("Skipping bump...");
    skipBump = true;

    // delete the existing tag (locally)
    // if we don't do this, standard-version generates an empty changelog
    exec(`git tag --delete ${latestTag}`, { cwd });
  }

  // create a standard-version configuration file
  const rcfile = join(cwd, ".versionrc.json");
  await generateVersionrcFile(
    rcfile,
    versionFile,
    changelogFile,
    skipBump,
    prerelease,
    options.versionrcOptions
  );

  const cmd = ["npx", "standard-version@^9"];
  if (isFirstRelease) {
    cmd.push("--first-release");
  }
  if (prefix) {
    cmd.push(`--tag-prefix ${prefix}v`);
  }
  if (minMajorVersion) {
    const [majorVersion] = latestVersion.split(".");
    const majorVersionNumber = parseInt(majorVersion, 10);
    if (majorVersionNumber < minMajorVersion) {
      cmd.push(`--release-as ${minMajorVersion}.0.0`);
    }
  }

  exec(cmd.join(" "), { cwd });

  // add the tag back if it was previously removed
  if (
    currentTags.includes(latestTag) &&
    !allowReleaseSameCommit(
      latestTag,
      options.prerelease,
      options.releaseSameCommitOnDifferentBranch
    )
  ) {
    exec(`git tag ${latestTag}`, { cwd });
  }

  await fs.rm(rcfile, { force: true, recursive: true });

  const newVersion = (await tryReadVersionFile(versionFile)).version;
  if (!newVersion) {
    throw new Error(`bump failed: ${versionFile} does not have a version set`);
  }

  // if MAJOR is defined, ensure that the new version is within the same major version
  if (major) {
    if (!newVersion.startsWith(`${major}.`)) {
      throw new Error(
        `bump failed: this branch is configured to only publish v${major} releases - bump resulted in ${newVersion}`
      );
    }
  }

  await fs.writeFile(bumpFile, newVersion);

  const newTag = `${prefix}v${newVersion}`;
  await fs.writeFile(releaseTagFile, newTag);
}

async function tryReadVersionFile(
  versionFile: string
): Promise<{ contents: any; version?: string; newline: boolean }> {
  if (!existsSync(versionFile)) {
    return { contents: {}, newline: true };
  }
  const raw = await fs.readFile(versionFile, "utf-8");
  const contents = JSON.parse(raw);

  return {
    contents,
    version: contents.version,
    newline: raw.endsWith("\n"),
  };
}

interface LatestTagOptions {
  /**
   * Working directory of the git repository.
   */
  readonly cwd: string;
  /**
   * Major version to select from.
   */
  readonly major?: number;
  /**
   * A pre-release suffix.
   */
  readonly prerelease?: string;
  /**
   * A prefix applied to all tags.
   */
  readonly prefix: string;
}

function generateVersionrcFile(
  rcfile: string,
  versionFile: string,
  changelogFile: string,
  skipBump: boolean,
  prerelease?: string,
  configOptions?: Config
) {
  return fs.writeFile(
    rcfile,
    JSON.stringify(
      {
        ...{
          packageFiles: [
            {
              filename: versionFile,
              type: "json",
            },
          ],
          bumpFiles: [
            {
              filename: versionFile,
              type: "json",
            },
          ],
          commitAll: false,
          infile: changelogFile,
          prerelease: prerelease,
          header: "",
          skip: {
            commit: true,
            tag: true,
            bump: skipBump,
          },
          ...configOptions,
        },
      },
      undefined,
      2
    )
  );
}

/**
 * Determines the latest release tag.
 * @param major (optional) A major version line to select from
 * @param prerelease (optional) A pre-release suffix.
 * @returns the latest tag, and whether it is the first release or not
 */
function determineLatestTag(options: LatestTagOptions): {
  latestVersion: string;
  latestTag: string;
  isFirstRelease: boolean;
} {
  const { cwd, major, prerelease, prefix } = options;

  // filter only tags for this prefix and major version if specified (start with "vNN.").
  const prefixFilter =
    major !== undefined ? `${prefix}v${major}.*` : `${prefix}v*`;

  const listGitTags = [
    "git",
    '-c "versionsort.suffix=-"', // makes sure pre-release versions are listed after the primary version
    "tag",
    '--sort="-version:refname"', // sort as versions and not lexicographically
    "--list",
    `"${prefixFilter}"`,
  ].join(" ");

  const stdout = execCapture(listGitTags, { cwd }).toString("utf8");

  let tags = stdout?.split("\n");

  // if prerelease is set and there are existing prerelease tags, filter versions that end with "-PRE.ddd".
  const prereleaseTags = tags.filter((x) =>
    new RegExp(`-${prerelease}\.[0-9]+$`).test(x)
  );
  if (prerelease && prereleaseTags.length > 0) {
    /**
     * Cover the following case specifically
     * 1 - v1.0.0
     * 2 - v1.0.1-beta.0
     * 3 - v1.0.1-beta.1
     * 4 - v1.0.1
     * 5 - now publish a new release on the prerelease branch
     *    by setting the latestTag as v1.0.1 instead of v1.0.1-beta.1
     */
    const releaseTags = tags.filter((x) =>
      new RegExp(`^v([0-9]+)\.([0-9]+)\.([0-9]+)$`).test(x)
    );
    if (
      releaseTags &&
      releaseTags.length > 0 &&
      compare(releaseTags[0], prereleaseTags[0]) === 1
    ) {
      tags = releaseTags;
    } else {
      tags = prereleaseTags;
    }
  }

  tags = tags.filter((x) => x);

  // if a pre-release tag is used, then add it to the initial version
  let isFirstRelease = false;
  let latestTag;

  if (tags.length > 0) {
    latestTag = tags[0];
  } else {
    const initial = `${prefix}v${major ?? 0}.0.0`;
    latestTag = prerelease ? `${initial}-${prerelease}.0` : initial;
    isFirstRelease = true;
  }

  // remove tag prefix (if exists)
  let latestVersion = latestTag;
  if (prefix && latestVersion.startsWith(prefix)) {
    latestVersion = latestVersion.substr(prefix.length);
  }

  // remove "v" prefix (if exists)
  if (latestVersion.startsWith("v")) {
    latestVersion = latestVersion.substr(1);
  }

  return { latestVersion, latestTag, isFirstRelease };
}

/**
 * Determines if release is allowed to be performed even if the previous release has the same commit. This should be allowed only
 *
 * 1. If it is specifically requested by the project through the options, by default it is false
 * 2. Based on the version
 *  2.1 If this is a regular release, the previous release on the same commit should not be a regular release as well
 *  2.2 If this is a prerelease, prerelease component ( alpha, beta, etc... ) of this prerelse should be different from the previous release
 *
 * This does not allow to release the same version multiple times with the same components. For example, you cannot perform multiple releases with on the same commit.
 *
 * But based on the configuration, it can allow the same commit to be released as v1.0.0-alpha.0 => v1.0.0-beta.0 ==> v1.0.0
 *
 * @param latestTag on the repository
 * @param prerelease component of the current release such as alpha, beta, etc...
 * @returns if the latest commit on this repository has the same prerelease component with the current release( both alpha, both beta) or if both are regular releases.
 */
function allowReleaseSameCommit(
  latestTag: string,
  prerelease?: string,
  releaseSameCommitOnDifferentBranch?: boolean
) {
  // get the prerelease component(alpha, beta, pre) of the latestTag determined. Returns null if this is a regular release
  const latestTagPrerelease = getPrereleaseComponent(latestTag);

  return (
    releaseSameCommitOnDifferentBranch && // if global configuration allows releasing same commit on different branches
    !(
      (
        prerelease && // If we are bumping a prerelease now
        latestTagPrerelease && // and the latest tag was also a prerelease
        latestTagPrerelease[0] === prerelease
      ) // and the latest tag has the same prerelease component(alpha, beta, pre) as this prerelease
    ) &&
    !(!prerelease && !latestTagPrerelease) // If we are bumping a regular release( example: 1.0.5) now and also latest release was a regular release
  );
}
