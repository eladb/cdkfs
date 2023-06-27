import * as path from "path";
import { Publisher } from "./publisher";
import { ReleaseTrigger } from "./release-trigger";
import { Component } from "../component";
import { GitHub, GitHubProject, GithubWorkflow, TaskWorkflow } from "../github";
import {
  BUILD_ARTIFACT_NAME,
  PERMISSION_BACKUP_FILE,
} from "../github/constants";
import {
  Job,
  JobPermission,
  JobPermissions,
  JobStep,
} from "../github/workflows-model";
import { Task } from "../task";
import { Version } from "../version";

const BUILD_JOBID = "release";
const GIT_REMOTE_STEPID = "git_remote";
const LATEST_COMMIT_OUTPUT = "latest_commit";

type BranchHook = (branch: string) => void;

/**
 * Project options for release.
 */
export interface ReleaseProjectOptions {
  /**
   * Automatically release new versions every commit to one of branches in `releaseBranches`.
   *
   * @default true
   *
   * @deprecated Use `releaseTrigger: ReleaseTrigger.continuous()` instead
   */
  readonly releaseEveryCommit?: boolean;

  /**
   * For cases where the merge strategy is fast-forward without "squash commits", same commit might need to be
   * released with different prerelese components like alpha, beta during the lifecycle. Setting this variable will
   * allow releasing the same commit on multiple branches.
   *
   * @default false
   */
  readonly releaseSameCommitOnDifferentBranch?: boolean;

  /**
   * CRON schedule to trigger new releases.
   *
   * @default - no scheduled releases
   *
   * @deprecated Use `releaseTrigger: ReleaseTrigger.scheduled()` instead
   */
  readonly releaseSchedule?: string;

  /**
   * The release trigger to use.
   *
   * @default - Continuous releases (`ReleaseTrigger.continuous()`)
   */
  readonly releaseTrigger?: ReleaseTrigger;

  /**
   * A set of workflow steps to execute in order to setup the workflow
   * container.
   */
  readonly releaseWorkflowSetupSteps?: JobStep[];

  /**
   * Container image to use for GitHub workflows.
   *
   * @default - default image
   */
  readonly workflowContainerImage?: string;

  /**
   * Version requirement of `publib` which is used to publish modules to npm.
   * @default "latest"
   */
  readonly jsiiReleaseVersion?: string;

  /**
   * Steps to execute after build as part of the release workflow.
   * @default []
   */
  readonly postBuildSteps?: JobStep[];

  /**
   * Major version to release from the default branch.
   *
   * If this is specified, we bump the latest version of this major version line.
   * If not specified, we bump the global latest version.
   *
   * @default - Major version is not enforced.
   */
  readonly majorVersion?: number;

  /**
   * Minimal Major version to release
   *
   *
   * This can be useful to set to 1, as breaking changes before the 1.x major
   * release are not incrementing the major version number.
   *
   * Can not be set together with `majorVersion`.
   *
   * @default - No minimum version is being enforced
   */
  readonly minMajorVersion?: number;

  /**
   * Bump versions from the default branch as pre-releases (e.g. "beta",
   * "alpha", "pre").
   *
   * @default - normal semantic versions
   */
  readonly prerelease?: string;

  /**
   * The npmDistTag to use when publishing from the default branch.
   *
   * To set the npm dist-tag for release branches, set the `npmDistTag` property
   * for each branch.
   *
   * @default "latest"
   */
  readonly npmDistTag?: string;

  /**
   * The name of the default release workflow.
   *
   * @default "Release"
   */
  readonly releaseWorkflowName?: string;

  /**
   * Defines additional release branches. A workflow will be created for each
   * release branch which will publish releases from commits in this branch.
   * Each release branch _must_ be assigned a major version number which is used
   * to enforce that versions published from that branch always use that major
   * version. If multiple branches are used, the `majorVersion` field must also
   * be provided for the default branch.
   *
   * @default - no additional branches are used for release. you can use
   * `addBranch()` to add additional branches.
   */
  readonly releaseBranches?: { [name: string]: BranchOptions };

  /**
   * Create a github issue on every failed publishing task.
   *
   * @default false
   */
  readonly releaseFailureIssue?: boolean;

  /**
   * The label to apply to issues indicating publish failures.
   * Only applies if `releaseFailureIssue` is true.
   *
   * @default "failed-release"
   */
  readonly releaseFailureIssueLabel?: string;

  /**
   * Automatically add the given prefix to release tags.
   * Useful if you are releasing on multiple branches with overlapping
   * version numbers.
   *
   * Note: this prefix is used to detect the latest tagged version
   * when bumping, so if you change this on a project with an existing version
   * history, you may need to manually tag your latest release
   * with the new prefix.
   *
   * @default "v"
   */
  readonly releaseTagPrefix?: string;

  /**
   * Custom configuration used when creating changelog with standard-version package.
   * Given values either append to default configuration or overwrite values in it.
   *
   * @default - standard configuration applicable for GitHub repositories
   */
  readonly versionrcOptions?: Record<string, any>;

  /**
   * Github Runner selection labels
   * @default ["ubuntu-latest"]
   */
  readonly workflowRunsOn?: string[];

  /**
   * Define publishing tasks that can be executed manually as well as workflows.
   *
   * Normally, publishing only happens within automated workflows. Enable this
   * in order to create a publishing task for each publishing activity.
   *
   * @default false
   */
  readonly publishTasks?: boolean;

  /**
   * Instead of actually publishing to package managers, just print the publishing command.
   *
   * @default false
   */
  readonly publishDryRun?: boolean;
}

/**
 * Options for `Release`.
 */
export interface ReleaseOptions extends ReleaseProjectOptions {
  /**
   * The task to execute in order to create the release artifacts. Artifacts are
   * expected to reside under `artifactsDirectory` (defaults to `dist/`) once
   * build is complete.
   */
  readonly task: Task;

  /**
   * A name of a .json file to set the `version` field in after a bump.
   *
   * @example "package.json"
   */
  readonly versionFile: string;

  /**
   * The default branch name to release from.
   *
   * Use `majorVersion` to restrict this branch to only publish releases with a
   * specific major version.
   *
   * You can add additional branches using `addBranch()`.
   */
  readonly branch: string;

  /**
   * Create a GitHub release for each release.
   *
   * @default true
   */
  readonly githubRelease?: boolean;

  /**
   * A directory which will contain build artifacts.
   *
   * @default "dist"
   */
  readonly artifactsDirectory: string;

  /**
   * Node version to setup in GitHub workflows if any node-based CLI utilities
   * are needed. For example `publib`, the CLI projen uses to publish releases,
   * is an npm library.
   *
   * @default 16.x
   */
  readonly workflowNodeVersion?: string;

  /**
   * Permissions granted to the release workflow job
   * @default `{ contents: JobPermission.WRITE }`
   */
  readonly workflowPermissions?: JobPermissions;
}

/**
 * Manages releases (currently through GitHub workflows).
 *
 * By default, no branches are released. To add branches, call `addBranch()`.
 */
export class Release extends Component {
  public static readonly ANTI_TAMPER_CMD =
    "git diff --ignore-space-at-eol --exit-code";
  /**
   * Returns the `Release` component of a project or `undefined` if the project
   * does not have a Release component.
   */
  public static of(project: GitHubProject): Release | undefined {
    const isRelease = (c: Component): c is Release => c instanceof Release;
    return project.components.find(isRelease);
  }

  /**
   * Package publisher.
   */
  public readonly publisher: Publisher;

  private readonly buildTask: Task;
  private readonly version: Version;
  private readonly postBuildSteps: JobStep[];
  private readonly versionFile: string;
  private readonly releaseTrigger: ReleaseTrigger;
  private readonly preBuildSteps: JobStep[];
  private readonly containerImage?: string;
  private readonly _branches = new Array<ReleaseBranch>();
  private readonly jobs: Record<string, Job> = {};
  private readonly defaultBranch: ReleaseBranch;
  private readonly github?: GitHub;
  private readonly workflowRunsOn?: string[];
  private readonly workflowPermissions: JobPermissions;

  private readonly _branchHooks: BranchHook[];

  /**
   * Location of build artifacts.
   */
  public readonly artifactsDirectory: string;

  constructor(project: GitHubProject, options: ReleaseOptions) {
    super(project);

    if (Array.isArray(options.releaseBranches)) {
      throw new Error(
        '"releaseBranches" is no longer an array. See type annotations'
      );
    }

    this.github = project.github;
    this.buildTask = options.task;
    this.preBuildSteps = options.releaseWorkflowSetupSteps ?? [];
    this.postBuildSteps = options.postBuildSteps ?? [];
    this.artifactsDirectory = options.artifactsDirectory ?? "dist";
    this.versionFile = options.versionFile;
    this.releaseTrigger = options.releaseTrigger ?? ReleaseTrigger.continuous();
    this.containerImage = options.workflowContainerImage;
    this.workflowRunsOn = options.workflowRunsOn;
    this.workflowPermissions = {
      contents: JobPermission.WRITE,
      ...options.workflowPermissions,
    };
    this._branchHooks = [];

    /**
     * Use manual releases with no changelog if releaseEveryCommit is explicitly
     * disabled and no other trigger is set.
     *
     * TODO: Remove this when releaseEveryCommit and releaseSchedule are removed
     */
    if (
      !(
        (options.releaseEveryCommit ?? true) ||
        options.releaseSchedule ||
        options.releaseTrigger
      )
    ) {
      this.releaseTrigger = ReleaseTrigger.manual({ changelog: false });
    }

    if (options.releaseSchedule) {
      this.releaseTrigger = ReleaseTrigger.scheduled({
        schedule: options.releaseSchedule,
      });
    }

    this.version = new Version(project, {
      versionInputFile: this.versionFile,
      artifactsDirectory: this.artifactsDirectory,
      versionrcOptions: options.versionrcOptions,
      tagPrefix: options.releaseTagPrefix,
    });

    this.publisher = new Publisher(project, {
      artifactName: this.artifactsDirectory,
      condition: `needs.${BUILD_JOBID}.outputs.${LATEST_COMMIT_OUTPUT} == github.sha`,
      buildJobId: BUILD_JOBID,
      jsiiReleaseVersion: options.jsiiReleaseVersion,
      failureIssue: options.releaseFailureIssue,
      failureIssueLabel: options.releaseFailureIssueLabel,
      workflowRunsOn: options.workflowRunsOn,
      publishTasks: options.publishTasks,
      dryRun: options.publishDryRun,
      workflowNodeVersion: options.workflowNodeVersion,
      workflowContainerImage: options.workflowContainerImage,
    });

    const githubRelease = options.githubRelease ?? true;
    if (githubRelease) {
      this.publisher.publishToGitHubReleases({
        changelogFile: path.posix.join(
          this.artifactsDirectory,
          this.version.changelogFileName
        ),
        versionFile: path.posix.join(
          this.artifactsDirectory,
          this.version.versionFileName
        ),
        releaseTagFile: path.posix.join(
          this.artifactsDirectory,
          this.version.releaseTagFileName
        ),
      });
    }

    // add the default branch (we need the internal method which does not require majorVersion)
    this.defaultBranch = this._addBranch(options.branch, {
      prerelease: options.prerelease,
      releaseSameCommitOnDifferentBranch:
        options.releaseSameCommitOnDifferentBranch,
      majorVersion: options.majorVersion,
      minMajorVersion: options.minMajorVersion,
      workflowName: options.releaseWorkflowName ?? "release",
      tagPrefix: options.releaseTagPrefix,
      npmDistTag: options.npmDistTag,
    });

    for (const [name, opts] of Object.entries(options.releaseBranches ?? {})) {
      this.addBranch(name, opts);
    }
  }

  /**
   * Add a hook that should be run for every branch (including those that will
   * be added by future `addBranch` calls).
   * @internal
   */
  public _forEachBranch(hook: BranchHook) {
    for (const branch of this._branches) {
      hook(branch.name);
    }
    this._branchHooks.push(hook);
  }

  /**
   * Adds a release branch.
   *
   * It is a git branch from which releases are published. If a project has more than one release
   * branch, we require that `majorVersion` is also specified for the primary branch in order to
   * ensure branches always release the correct version.
   *
   * @param branch The branch to monitor (e.g. `main`, `v2.x`)
   * @param options Branch definition
   */
  public addBranch(branch: string, options: BranchOptions) {
    this._addBranch(branch, options);

    // run all branch hooks
    for (const hook of this._branchHooks) {
      hook(branch);
    }
  }

  /**
   * Adds a release branch.
   *
   * It is a git branch from which releases are published. If a project has more than one release
   * branch, we require that `majorVersion` is also specified for the primary branch in order to
   * ensure branches always release the correct version.
   *
   * @param branch The branch to monitor (e.g. `main`, `v2.x`)
   * @param options Branch definition
   */
  private _addBranch(
    branch: string,
    options: Partial<BranchOptions>
  ): ReleaseBranch {
    if (this._branches.find((b) => b.name === branch)) {
      throw new Error(`The release branch ${branch} is already defined`);
    }

    // if we add a branch, we require that the default branch will also define a
    // major version.
    if (
      this.defaultBranch &&
      options.majorVersion &&
      this.defaultBranch.majorVersion === undefined
    ) {
      throw new Error(
        'you must specify "majorVersion" for the default branch when adding multiple release branches'
      );
    }

    const releaseBranch: ReleaseBranch = {
      name: branch,
      ...options,
      workflow: this.createWorkflow(branch, options),
    };

    this._branches.push(releaseBranch);

    return releaseBranch;
  }

  public preSynthesize() {
    for (const branch of this._branches) {
      if (!branch.workflow) {
        continue;
      }

      branch.workflow.addJobs(
        this.publisher._renderJobsForBranch(branch.name, branch)
      );
      branch.workflow.addJobs(this.jobs);
    }
  }

  /**
   * Adds jobs to all release workflows.
   * @param jobs The jobs to add (name => job)
   */
  public addJobs(jobs: Record<string, Job>) {
    for (const [name, job] of Object.entries(jobs)) {
      this.jobs[name] = job;
    }
  }

  /**
   * Retrieve all release branch names
   */
  public get branches(): string[] {
    return this._branches.map((b) => b.name);
  }

  /**
   * @returns a workflow or `undefined` if github integration is disabled.
   */
  private createWorkflow(
    branchName: string,
    branch: Partial<BranchOptions>
  ): TaskWorkflow | undefined {
    const workflowName = branch.workflowName ?? `release-${branchName}`;

    // to avoid race conditions between two commits trying to release the same
    // version, we check if the head sha is identical to the remote sha. if
    // not, we will skip the release and just finish the build.
    const noNewCommits = `\${{ steps.${GIT_REMOTE_STEPID}.outputs.${LATEST_COMMIT_OUTPUT} == github.sha }}`;

    // The arrays are being cloned to avoid accumulating values from previous branches
    const preBuildSteps = [...this.preBuildSteps];

    const env: Record<string, string> = {
      RELEASE: "true",
    };

    if (branch.majorVersion !== undefined) {
      env.MAJOR = branch.majorVersion.toString();
    }

    if (branch.minMajorVersion !== undefined) {
      if (branch.majorVersion !== undefined) {
        throw new Error(
          `minMajorVersion and majorVersion cannot be used together.`
        );
      }

      env.MIN_MAJOR = branch.minMajorVersion.toString();
    }

    if (branch.prerelease) {
      env.PRERELEASE = branch.prerelease;
    }

    if (branch.releaseSameCommitOnDifferentBranch) {
      env.RELEASE_SAME_COMMIT_ON_DIFFERENT_BRANCH = `${branch.releaseSameCommitOnDifferentBranch}`;
    }

    if (branch.tagPrefix) {
      env.RELEASE_TAG_PREFIX = branch.tagPrefix;
    }

    // the "release" task prepares a release but does not publish anything. the
    // output of the release task is: `dist`, `.version.txt`, and
    // `.changelog.md`. this is what publish tasks expect.

    // if this is the release for "main" or "master", just call it "release".
    // otherwise, "release:BRANCH"
    const releaseTaskName =
      branchName === "main" || branchName === "master"
        ? "release"
        : `release:${branchName}`;
    const releaseTask = this.project.addTask(releaseTaskName, {
      description: `Prepare a release from "${branchName}" branch`,
      env,
    });

    releaseTask.exec(`rm -fr ${this.artifactsDirectory}`);
    releaseTask.spawn(this.version.bumpTask);
    releaseTask.spawn(this.buildTask);
    releaseTask.spawn(this.version.unbumpTask);

    // anti-tamper check (fails if there were changes to committed files)
    // this will identify any non-committed files generated during build (e.g. test snapshots)
    releaseTask.exec(Release.ANTI_TAMPER_CMD);

    if (this.releaseTrigger.isManual) {
      const publishTask = this.publisher.publishToGit({
        changelogFile: path.posix.join(
          this.artifactsDirectory,
          this.version.changelogFileName
        ),
        versionFile: path.posix.join(
          this.artifactsDirectory,
          this.version.versionFileName
        ),
        releaseTagFile: path.posix.join(
          this.artifactsDirectory,
          this.version.releaseTagFileName
        ),
        projectChangelogFile: this.releaseTrigger.changelogPath,
        gitBranch: branchName,
        gitPushCommand: this.releaseTrigger.gitPushCommand,
      });

      releaseTask.spawn(publishTask);
    }

    const postBuildSteps = [...this.postBuildSteps];

    // check if new commits were pushed to the repo while we were building.
    // if new commits have been pushed, we will cancel this release
    postBuildSteps.push({
      name: "Check for new commits",
      id: GIT_REMOTE_STEPID,
      run: `echo "${LATEST_COMMIT_OUTPUT}=$(git ls-remote origin -h \${{ github.ref }} | cut -f1)" >> $GITHUB_OUTPUT`,
    });

    postBuildSteps.push(
      {
        name: "Backup artifact permissions",
        if: noNewCommits,
        continueOnError: true,
        run: `cd ${this.artifactsDirectory} && getfacl -R . > ${PERMISSION_BACKUP_FILE}`,
      },
      {
        name: "Upload artifact",
        if: noNewCommits,
        uses: "actions/upload-artifact@v3",
        with: {
          name: BUILD_ARTIFACT_NAME,
          path: this.artifactsDirectory,
        },
      }
    );

    if (this.github && !this.releaseTrigger.isManual) {
      return new TaskWorkflow(this.github, {
        name: workflowName,
        jobId: BUILD_JOBID,
        outputs: {
          latest_commit: {
            stepId: GIT_REMOTE_STEPID,
            outputName: LATEST_COMMIT_OUTPUT,
          },
        },
        triggers: {
          schedule: this.releaseTrigger.schedule
            ? [{ cron: this.releaseTrigger.schedule }]
            : undefined,
          push: this.releaseTrigger.isContinuous
            ? { branches: [branchName] }
            : undefined,
        },
        container: this.containerImage
          ? { image: this.containerImage }
          : undefined,
        env: {
          CI: "true",
        },
        permissions: this.workflowPermissions,
        checkoutWith: {
          // we must use 'fetch-depth=0' in order to fetch all tags
          // otherwise tags are not checked out
          "fetch-depth": 0,
        },
        preBuildSteps,
        task: releaseTask,
        postBuildSteps,
        runsOn: this.workflowRunsOn,
      });
    } else {
      return undefined;
    }
  }
}

/**
 * Options for a release branch.
 */
export interface BranchOptions {
  /**
   * The name of the release workflow.
   * @default "release-BRANCH"
   */
  readonly workflowName?: string;

  /**
   * The major versions released from this branch.
   */
  readonly majorVersion: number;

  /**
   * The minimum major version to release.
   */
  readonly minMajorVersion?: number;

  /**
   * Bump the version as a pre-release tag.
   *
   * @default - normal releases
   */
  readonly prerelease?: string;

  /**
   * Automatically add the given prefix to release tags.
   * Useful if you are releasing on multiple branches with overlapping
   * version numbers.
   *
   * Note: this prefix is used to detect the latest tagged version
   * when bumping, so if you change this on a project with an existing version
   * history, you may need to manually tag your latest release
   * with the new prefix.
   *
   * @default - no prefix
   */
  readonly tagPrefix?: string;

  /**
   * The npm distribution tag to use for this branch.
   *
   * @default "latest"
   */
  readonly npmDistTag?: string;

  /**
   * For cases where the merge strategy is fast-forward without "squash commits", same commit might need to be
   * released with different prerelese components like alpha, beta during the lifecycle. Setting this variable will
   * allow releasing the same commit on multiple branches.
   *
   * @default false
   */
  readonly releaseSameCommitOnDifferentBranch?: boolean;
}

interface ReleaseBranch extends Partial<BranchOptions> {
  readonly workflow?: GithubWorkflow;
  readonly name: string;
}
