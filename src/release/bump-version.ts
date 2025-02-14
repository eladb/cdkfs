import { promises as fs, existsSync } from "fs";
import { dirname, join } from "path";
import { Config } from "conventional-changelog-config-spec";
import { compare, inc, ReleaseType } from "semver";
import * as logging from "../logging";
import { exec, execCapture, execOrUndefined } from "../util";
import { ReleasableCommits } from "../version";

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
   * Defines the minor version line. This is used to select the latest version
   * and also enforce that new minor versions are not released accidentally.
   *
   * @default - any version is supported
   */
  readonly minorVersion?: number;

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
   * Configuration values that would append to versionrc file or overwrite values
   * coming to that from default one.
   */
  readonly versionrcOptions?: Config;

  /**
   * A shell command to list all release commits since the latest tag.
   *
   * A new release will be initiated, if the number of returned commits is greater than zero.
   *
   * `$LATEST_TAG` will be replaced with the actual latest tag for the given prefix.
   *
   * @default "git log --oneline $LATEST_TAG..HEAD"
   */
  readonly releasableCommits?: string;

  /**
   * The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.
   *
   * This can be any compatible package version, including the deprecated `standard-version@9`.
   *
   * @default "commit-and-tag-version@12"
   */
  readonly bumpPackage?: string;

  /**
   * A shell command to control the next version to release.
   *
   * If present, this shell command will be run before the bump is executed, and
   * it determines what version to release. It will be executed in the following
   * environment:
   *
   * - Working directory: the project directory.
   * - `$VERSION`: the current version. Looks like `1.2.3`.
   * - `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
   *
   * The command should print one of the following to `stdout`:
   *
   * - Nothing: the next version number will be determined based on commit history.
   * - `x.y.z`: the next version number will be `x.y.z`.
   * - `major|minor|patch`: the next version number will be the current version number
   *   with the indicated component bumped.
   *
   * This setting cannot be specified together with `minMajorVersion`; the invoked
   * script can be used to achieve the effects of `minMajorVersion`.
   *
   * @default - The next version will be determined based on the commit history and project settings.
   */
  readonly nextVersionCommand?: string;

  /**
   * Append a version suffix at the end of the version string
   *
   * This can be used to generate fake version numbers for pre-release
   * integration testing.
   *
   * Example: if the current version is `1.2.3`, the generated version can be
   * something like `1.2.4-test.0`, which is guaranteed to never conflict with
   * any other (real) version, even if `1.2.4` is released in the mean time.
   *
   * @default - No suffix
   */
  readonly forceSuffix?: string;
}

/**
 * Resolves the latest version from git tags and uses `commit-and-tag-version` to bump
 * to the next version based on commits.
 *
 * This expects `commit-and-tag-version` to be installed in the path.
 *
 * @param cwd working directory (git repository)
 * @param options options
 */
export async function bump(cwd: string, options: BumpOptions) {
  const versionFile = join(cwd, options.versionFile);
  const prerelease = options.prerelease;
  const major = options.majorVersion;
  const minor = options.minorVersion;
  const minMajorVersion = options.minMajorVersion;
  const prefix = options.tagPrefix ?? "";
  const bumpFile = join(cwd, options.bumpFile);
  const changelogFile = join(cwd, options.changelog);
  const releaseTagFile = join(cwd, options.releaseTagFile);
  const bumpPackage = options.bumpPackage ?? "commit-and-tag-version@^12";

  if (major && minMajorVersion) {
    throw new Error(
      `minMajorVersion and majorVersion cannot be used together.`
    );
  }
  if (options.nextVersionCommand && minMajorVersion) {
    throw new Error(
      `minMajorVersion and nextVersionCommand cannot be used together.`
    );
  }
  if (minor && !major) {
    throw new Error(`minorVersion and majorVersion must be used together.`);
  }

  await fs.mkdir(dirname(bumpFile), { recursive: true });
  await fs.mkdir(dirname(changelogFile), { recursive: true });
  await fs.mkdir(dirname(releaseTagFile), { recursive: true });

  const { latestVersion, latestTag, isFirstRelease } = determineLatestTag({
    cwd,
    major,
    minor,
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

  // check for commits since the last release tag
  let skipBump = false;

  // First Release is never skipping bump
  if (!isFirstRelease) {
    const findCommits = (
      options.releasableCommits ?? ReleasableCommits.everyCommit().cmd
    ).replace("$LATEST_TAG", latestTag);
    const commitsSinceLastTag = execOrUndefined(findCommits, { cwd })?.split(
      "\n"
    );
    const numCommitsSinceLastTag = commitsSinceLastTag?.length ?? 0;
    logging.info(
      `Number of commits since ${latestTag}: ${numCommitsSinceLastTag}`
    );

    // Nothing to release right now
    if (numCommitsSinceLastTag === 0) {
      logging.info("Skipping bump...");
      skipBump = true;

      // delete the existing tag (locally)
      // if we don't do this, commit-and-tag-version generates an empty changelog
      exec(`git tag --delete ${latestTag}`, { cwd });
    }
  }

  // Determine what version to release as
  let releaseAs: string | undefined;
  if (minMajorVersion) {
    const [majorVersion] = latestVersion.split(".");
    const majorVersionNumber = parseInt(majorVersion, 10);
    if (majorVersionNumber < minMajorVersion) {
      releaseAs = `${minMajorVersion}.0.0`;
    }
  } else if (options.nextVersionCommand) {
    const nextVersion = execCapture(options.nextVersionCommand, {
      cwd,
      modEnv: {
        VERSION: latestVersion,
        ...(latestTag ? { LATEST_TAG: latestTag } : {}),
      },
    })
      .toString()
      .trim();

    if (nextVersion) {
      // Calculate the next version
      if (isReleaseType(nextVersion)) {
        releaseAs = inc(latestVersion, nextVersion)?.toString();
      } else if (isFullVersionString(nextVersion)) {
        releaseAs = nextVersion;
      } else {
        throw new Error(
          `nextVersionCommand "${options.nextVersionCommand}" returned invalid version: ${nextVersion}`
        );
      }

      // Don't need to validate if the final version is within the expected declared major.minor range,
      // if given. That is done below after bumping.
    }
  }

  // create a commit-and-tag-version configuration file
  const rcfile = join(cwd, ".versionrc.json");
  await generateVersionrcFile(
    rcfile,
    versionFile,
    changelogFile,
    skipBump,
    prerelease,
    options.versionrcOptions
  );

  const cmd = ["npx", bumpPackage];
  if (isFirstRelease && !minMajorVersion) {
    cmd.push("--first-release");
  }
  if (prefix) {
    cmd.push(`--tag-prefix ${prefix}v`);
  }
  if (releaseAs) {
    cmd.push(`--release-as ${releaseAs}`);
  }

  exec(cmd.join(" "), { cwd });

  // add the tag back if it was previously removed
  if (skipBump) {
    exec(`git tag ${latestTag}`, { cwd });
  }

  await fs.rm(rcfile, { force: true, recursive: true });

  const updatedVersionFile = await tryReadVersionFile(versionFile);
  let newVersion = updatedVersionFile.version;
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
  if (minor) {
    if (!newVersion.startsWith(`${major}.${minor}`)) {
      throw new Error(
        `bump failed: this branch is configured to only publish v${major}.${minor} releases - bump resulted in ${newVersion}`
      );
    }
  }

  // Apply a forced suffix if given
  if (options.forceSuffix) {
    let suffix = options.forceSuffix;
    if (!suffix.match(/^-/)) suffix = `-${suffix}`;
    if (!suffix.match(/\d$/)) suffix += ".0";
    newVersion = `${newVersion}${suffix}`;
    updatedVersionFile.contents.version = newVersion;

    const updatedContents =
      JSON.stringify(updatedVersionFile.contents, undefined, 2) +
      (updatedVersionFile.newline ? "\n" : "");
    await fs.writeFile(versionFile, updatedContents, "utf-8");
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
   * Minor version to select from.
   */
  readonly minor?: number;
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
  const { cwd, major, minor, prerelease, prefix } = options;

  // filter only tags for this prefix and major version if specified (start with "vNN.").
  let prefixFilter: string;
  if (major !== undefined && minor !== undefined) {
    prefixFilter = `${prefix}v${major}.${minor}.*`;
  } else if (major !== undefined) {
    prefixFilter = `${prefix}v${major}.*`;
  } else {
    prefixFilter = `${prefix}v*`;
  }

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
    const initial = `${prefix}v${major ?? 0}.${minor ?? 0}.0`;
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
    latestVersion = latestVersion.substring(1);
  }

  return { latestVersion, latestTag, isFirstRelease };
}

function isReleaseType(nextVersion: string): nextVersion is ReleaseType {
  // We are not recognizing all of them yet. That's fine for now.
  return !!nextVersion.match(/^(major|minor|patch)$/);
}

function isFullVersionString(nextVersion: string) {
  return nextVersion.match(/^\d+\.\d+\.\d+(-[^\s]+)?$/);
}
