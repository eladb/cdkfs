import { Component } from '../component';
import { TaskWorkflow } from '../github';
import { Job, JobPermission, JobStep } from '../github/workflows-model';
import { Project } from '../project';
import { Task } from '../tasks';
import { Version } from '../version';
import { Publisher } from './publisher';

const BUILD_JOBID = 'release';
const GIT_REMOTE_STEPID = 'git_remote';
const LATEST_COMMIT_OUTPUT = 'latest_commit';

/**
 * Project options for release.
 */
export interface ReleaseProjectOptions {
  /**
   * Automatically release new versions every commit to one of branches in `releaseBranches`.
   * @default true
   */
  readonly releaseEveryCommit?: boolean;

  /**
    * CRON schedule to trigger new releases.
    *
    * @default - no scheduled releases
    */
  readonly releaseSchedule?: string;

  /**
   * A directory which will contain artifacts to be published to npm.
   *
   * @default "dist"
   */
  readonly artifactsDirectory?: string;

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
   * Version requirement of `jsii-release` which is used to publish modules to npm.
   * @default "latest"
   */
  readonly jsiiReleaseVersion?: string;

  /**
   * Steps to execute after build as part of the release workflow.
   * @default []
   */
  readonly postBuildSteps?: JobStep[];

  /**
   * Checks that after build there are no modified files on git.
   * @default true
   */
  readonly antitamper?: boolean;

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
    * Bump versions from the default branch as pre-releases (e.g. "beta",
    * "alpha", "pre").
    *
    * @default - normal semantic versions
    */
  readonly prerelease?: string;

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
  readonly failureIssue?: boolean;

  /**
   * The label to apply to issues indicating publish failures.
   * Only applies if `failureIssue` is true.
   *
   * @default "failed-release"
   */
  readonly failureIssueLabel?: string;
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
}

/**
 * Manages releases (currently through GitHub workflows).
 *
 * By default, no branches are released. To add branches, call `addBranch()`.
 */
export class Release extends Component {
  /**
   * Package publisher.
   */
  public readonly publisher: Publisher;

  private readonly buildTask: Task;
  private readonly version: Version;
  private readonly postBuildSteps: JobStep[];
  private readonly antitamper: boolean;
  private readonly artifactsDirectory: string;
  private readonly versionFile: string;
  private readonly releaseSchedule?: string;
  private readonly releaseEveryCommit: boolean;
  private readonly preBuildSteps: JobStep[];
  private readonly containerImage?: string;
  private readonly branches = new Array<ReleaseBranch>();
  private readonly jobs: Record<string, Job> = {};
  private readonly defaultBranch: ReleaseBranch;

  constructor(project: Project, options: ReleaseOptions) {
    super(project);

    if (Array.isArray(options.releaseBranches)) {
      throw new Error('"releaseBranches" is no longer an array. See type annotations');
    }

    this.buildTask = options.task;
    this.preBuildSteps = options.releaseWorkflowSetupSteps ?? [];
    this.postBuildSteps = options.postBuildSteps ?? [];
    this.antitamper = options.antitamper ?? true;
    this.artifactsDirectory = options.artifactsDirectory ?? 'dist';
    this.versionFile = options.versionFile;
    this.releaseSchedule = options.releaseSchedule;
    this.releaseEveryCommit = options.releaseEveryCommit ?? true;
    this.containerImage = options.workflowContainerImage;

    this.version = new Version(project, {
      versionInputFile: this.versionFile,
      artifactsDirectory: this.artifactsDirectory,
    });

    this.publisher = new Publisher(project, {
      artifactName: this.artifactsDirectory,
      condition: `needs.${BUILD_JOBID}.outputs.${LATEST_COMMIT_OUTPUT} == github.sha`,
      buildJobId: BUILD_JOBID,
      jsiiReleaseVersion: options.jsiiReleaseVersion,
      issueOnFail: options.failureIssue,
      issueOnFailLabel: options.failureIssueLabel,
    });

    const githubRelease = options.githubRelease ?? true;
    if (githubRelease) {
      this.publisher.publishToGitHubReleases({
        changelogFile: this.version.changelogFileName,
        versionFile: this.version.versionFileName,
      });
    }

    // add the default branch
    this.defaultBranch = {
      name: options.branch,
      prerelease: options.prerelease,
      majorVersion: options.majorVersion,
      workflowName: options.releaseWorkflowName ?? 'release',
    };

    this.branches.push(this.defaultBranch);

    for (const [name, opts] of Object.entries(options.releaseBranches ?? {})) {
      this.addBranch(name, opts);
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
  public addBranch(branch: string, options: BranchOptions) {
    if (this.branches.find(b => b.name === branch)) {
      throw new Error(`The release branch ${branch} is already defined`);
    }

    // if we add a branch, we require that the default branch will also define a
    // major version.
    if (this.defaultBranch.majorVersion === undefined) {
      throw new Error('you must specify "majorVersion" for the default branch when adding multiple release branches');
    }

    this.branches.push({
      name: branch,
      ...options,
    });
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

  // render a workflow per branch and all the jobs to it
  public preSynthesize() {
    for (const branch of this.branches) {
      const workflow = this.createWorkflow(branch);
      if (workflow) {
        workflow.addJobs(this.publisher.render());
        workflow.addJobs(this.jobs);
      }
    }
  }

  /**
   * @returns a workflow or `undefined` if github integration is disabled.
   */
  private createWorkflow(branch: ReleaseBranch): TaskWorkflow | undefined {
    const workflowName = branch.workflowName ?? `release-${branch.name}`;

    // to avoid race conditions between two commits trying to release the same
    // version, we check if the head sha is identical to the remote sha. if
    // not, we will skip the release and just finish the build.
    const noNewCommits = `\${{ steps.${GIT_REMOTE_STEPID}.outputs.${LATEST_COMMIT_OUTPUT} == github.sha }}`;

    // The arrays are being cloned to avoid accumulating values from previous branches
    const preBuildSteps = [...this.preBuildSteps];

    const env: Record<string, string> = {
      RELEASE: 'true',
    };

    if (branch.majorVersion !== undefined) {
      env.MAJOR = branch.majorVersion.toString();
    }

    if (branch.prerelease) {
      env.PRERELEASE = branch.prerelease;
    }

    // the "release" task prepares a release but does not publish anything. the
    // output of the release task is: `dist`, `.version.txt`, and
    // `.changelog.md`. this is what publish tasks expect.

    // if this is the release for "main" or "master", just call it "release".
    // otherwise, "release:BRANCH"
    const releaseTaskName = (branch.name === 'main' || branch.name === 'master') ? 'release' : `release:${branch.name}`;
    const releaseTask = this.project.addTask(releaseTaskName, {
      description: `Prepare a release from "${branch.name}" branch`,
      env,
    });

    releaseTask.exec(`rm -fr ${this.artifactsDirectory}`);
    releaseTask.spawn(this.version.bumpTask);
    releaseTask.spawn(this.buildTask);
    releaseTask.spawn(this.version.unbumpTask);

    // anti-tamper check (fails if there were changes to committed files)
    // this will identify any non-committed files generated during build (e.g. test snapshots)
    if (this.antitamper) {
      releaseTask.exec('git diff --ignore-space-at-eol --exit-code');
    }

    const postBuildSteps = [...this.postBuildSteps];

    // check if new commits were pushed to the repo while we were building.
    // if new commits have been pushed, we will cancel this release
    postBuildSteps.push({
      name: 'Check for new commits',
      id: GIT_REMOTE_STEPID,
      run: `echo ::set-output name=${LATEST_COMMIT_OUTPUT}::"$(git ls-remote origin -h \${{ github.ref }} | cut -f1)"`,
    });

    postBuildSteps.push({
      name: 'Upload artifact',
      if: noNewCommits,
      uses: 'actions/upload-artifact@v2.1.1',
      with: {
        name: this.artifactsDirectory,
        path: this.artifactsDirectory,
      },
    });

    if (this.project.github) {
      return new TaskWorkflow(this.project.github, {
        name: workflowName,
        jobId: BUILD_JOBID,
        outputs: {
          latest_commit: {
            stepId: GIT_REMOTE_STEPID,
            outputName: LATEST_COMMIT_OUTPUT,
          },
        },
        triggers: {
          schedule: this.releaseSchedule ? [{ cron: this.releaseSchedule }] : undefined,
          push: (this.releaseEveryCommit) ? { branches: [branch.name] } : undefined,
        },
        container: this.containerImage ? { image: this.containerImage } : undefined,
        env: {
          CI: 'true',
        },
        permissions: {
          contents: JobPermission.WRITE,
        },
        checkoutWith: {
          // we must use 'fetch-depth=0' in order to fetch all tags
          // otherwise tags are not checked out
          'fetch-depth': 0,
        },
        preBuildSteps,
        task: releaseTask,
        postBuildSteps,
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
   * Bump the version as a pre-release tag.
   *
   * @default - normal releases
   */
  readonly prerelease?: string;
}

interface ReleaseBranch extends Partial<BranchOptions> {
  readonly name: string;
}
