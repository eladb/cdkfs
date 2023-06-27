/**
 * Resolves the latest version from git tags and uses `standard-version` to bump
 * to the next version based on commits.
 *
 * This expects `standard-version` to be installed in the path.
 *
 * Environment variables:
 *
 * - OUTFILE: (required) the name of the JSON output file (the "version" field
 *   will be updated with the latest version)
 * - PRERELEASE: (optional) a prerelease tag to use (e.g. "beta")
 * - MAJOR: major version number NN to filter (tags are filtered by "vNN."
 *   prefix). if not specified, the last major version is selected
 * - MIN_MAJOR: minimum major version number to use
 * - CHANGELOG: name of changelog file to create
 * - RELEASE_TAG_PREFIX: (optional) a prefix to apply to the release tag
 *
 */
import { bump, BumpOptions } from "./bump-version";
import * as logging from "../logging";

const versionFile = process.env.OUTFILE;
const prerelease = process.env.PRERELEASE;
const releaseSameCommitOnDifferentBranch =
  process.env.RELEASE_SAME_COMMIT_ON_DIFFERENT_BRANCH;
const major = process.env.MAJOR;
const minMajor = process.env.MIN_MAJOR;
const changelog = process.env.CHANGELOG;
const bumpFile = process.env.BUMPFILE;
const releaseTagFile = process.env.RELEASETAG;
const prefix = process.env.RELEASE_TAG_PREFIX;
const versionrcOptions = process.env.VERSIONRCOPTIONS;

if (!versionFile) {
  throw new Error("OUTFILE is required");
}

if (!changelog) {
  throw new Error("CHANGELOG is required");
}

if (!bumpFile) {
  throw new Error("BUMPFILE is required");
}

if (!releaseTagFile) {
  throw new Error("RELEASETAG is required");
}

const majorVersion =
  major == null || major === "" ? undefined : parseInt(major);
if (Number.isNaN(majorVersion)) {
  throw new Error(`MAJOR must be a number: ${majorVersion}`);
}

const minMajorVersion =
  minMajor == null || minMajor === "" ? undefined : parseInt(minMajor);
if (Number.isNaN(minMajorVersion)) {
  throw new Error(`minMajor must be a number: ${minMajorVersion}`);
}

const opts: BumpOptions = {
  versionFile: versionFile,
  changelog: changelog,
  majorVersion: majorVersion,
  minMajorVersion: minMajorVersion,
  prerelease: prerelease,
  releaseSameCommitOnDifferentBranch:
    releaseSameCommitOnDifferentBranch === "true" ? true : false,
  bumpFile: bumpFile,
  releaseTagFile: releaseTagFile,
  tagPrefix: prefix,
  // doesn't work with long customization
  versionrcOptions: JSON.parse(versionrcOptions ?? "{}"),
};
logging.debug(opts);

bump(process.cwd(), opts).catch((e: Error) => {
  console.log(e.stack);
  process.exit(1);
});
