import { dirname, join } from 'path';
import { mkdirp, pathExists, readFile, remove, writeFile } from 'fs-extra';
import * as logging from '../logging';
import { exec, execCapture } from '../util';

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
   * @default - any version is supported
   */
  readonly majorVersion?: number;

  /**
   * The name of a file which will include the output version number (a text file).
   *
   * Relative to cwd.
   *
   * @example `.version.txt`
   */
  readonly bumpFile: string;
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
  const changelogFile = join(cwd, options.changelog);
  const bumpFile = join(cwd, options.bumpFile);

  await mkdirp(dirname(bumpFile));
  await mkdirp(dirname(changelogFile));

  const { latest, firstRelease } = determineLatestTag(cwd, major, prerelease);

  const content = await tryReadVersionFile(versionFile);

  // update version
  content.version = latest;

  logging.info(`Update ${versionFile} to latest resolved version: ${latest}`);
  await writeFile(versionFile, JSON.stringify(content, undefined, 2));

  // check if the latest commit already has a version tag
  const currentTags = execCapture('git tag --points-at HEAD', { cwd }).toString('utf8').split('\n');
  logging.info(`Tags listed on current commit: ${currentTags}`);

  let skipBump = false;

  if (currentTags.includes(`v${latest}`)) {
    logging.info('Skipping bump...');
    skipBump = true;

    // delete the existing tag (locally)
    // if we don't do this, standard-version generates an empty changelog
    exec(`git tag --delete v${latest}`, { cwd });
  }

  // create a standard-version configuration file
  const rcfile = join(cwd, '.versionrc.json');
  await writeFile(rcfile, JSON.stringify({
    packageFiles: [{
      filename: versionFile,
      type: 'json',
    }],
    bumpFiles: [{
      filename: versionFile,
      type: 'json',
    }],
    commitAll: false,
    infile: changelogFile,
    prerelease: prerelease,
    header: '',
    skip: {
      commit: true,
      tag: true,
      bump: skipBump,
    },
  }, undefined, 2));

  const cmd = ['npx', 'standard-version@^9'];
  if (firstRelease) {
    cmd.push('--first-release');
  }

  exec(cmd.join(' '), { cwd });

  // add the tag back if it was previously removed
  if (currentTags.includes(`v${latest}`)) {
    exec(`git tag v${latest}`, { cwd });
  }

  await remove(rcfile);

  const newVersion = (await tryReadVersionFile(versionFile)).version;
  if (!newVersion) {
    throw new Error(`bump failed: ${versionFile} does not have a version set`);
  }

  // if MAJOR is defined, ensure that the new version is within the same major version
  if (major) {
    if (!newVersion.startsWith(`${major}.`)) {
      throw new Error(`bump failed: this branch is configured to only publish v${major} releases - bump resulted in ${newVersion}`);
    }
  }

  await writeFile(bumpFile, newVersion);
}

async function tryReadVersionFile(versionFile: string) {
  if (!(await pathExists(versionFile))) {
    return {};
  }

  return JSON.parse(await readFile(versionFile, 'utf8'));
}

/**
 * Determines the latest release tag.
 * @param major (optional) A major version line to select from
 * @param prerelease (optional) A pre-release suffix.
 * @returns the latest tag, and whether it is the first release or not
 */
function determineLatestTag(cwd: string, major: number | undefined, prerelease: string | undefined): { latest: string; firstRelease: boolean } {
  // filter only tags for this major version if specified (start  with "vNN.").
  const prefix = major ? `v${major}.*` : 'v*';

  const listGitTags = [
    'git',
    '-c "versionsort.suffix=-"', // makes sure pre-release versions are listed after the primary version
    'tag',
    '--sort="-version:refname"', // sort as versions and not lexicographically
    '--list',
    `"${prefix}"`,
  ].join(' ');

  const stdout = execCapture(listGitTags, { cwd }).toString('utf8');

  let tags = stdout?.split('\n');

  // if "pre" is set, filter versions that end with "-PRE.ddd".
  if (prerelease) {
    tags = tags.filter(x => new RegExp(`-${prerelease}\.[0-9]+$`).test(x));
  }

  tags = tags.filter(x => x);

  // if a pre-release tag is used, then add it to the initial version
  let firstRelease = false;
  let latest;

  if (tags.length > 0) {
    latest = tags[0];
  } else {
    const initial = `v${major ?? 0}.0.0`;
    latest = prerelease ? `${initial}-${prerelease}.0` : initial;
    firstRelease = true;
  }

  // remove "v" prefix (if exists)
  if (latest.startsWith('v')) {
    latest = latest.substr(1);
  }

  return { latest, firstRelease };
}
