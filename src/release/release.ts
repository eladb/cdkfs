import { Component } from '../component';
import { workflows, GithubWorkflow } from '../github';
import { Project } from '../project';
import { Publisher } from '../publisher';
import { Task } from '../tasks';
import { Version } from '../version';

const BUILD_JOBID = 'release';

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
  readonly releaseWorkflowSetupSteps?: workflows.JobStep[];

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
  readonly postBuildSteps?: workflows.JobStep[];

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

  private readonly task: Task;
  private readonly version: Version;
  private readonly postBuildSteps: workflows.JobStep[];
  private readonly antitamper: boolean;
  private readonly artifactDirectory: string;
  private readonly versionFile: string;
  private readonly releaseSchedule?: string;
  private readonly releaseEveryCommit: boolean;
  private readonly preBuildSteps: workflows.JobStep[];
  private readonly containerImage?: string;
  private readonly branches = new Array<ReleaseBranch>();
  private readonly jobs: Record<string, workflows.Job> = {};
  private readonly defaultBranch: ReleaseBranch;

  constructor(project: Project, options: ReleaseOptions) {
    super(project);

    if (Array.isArray(options.releaseBranches)) {
      throw new Error('"releaseBranches" is no longer an array. See type annotations');
    }

    this.task = options.task;
    this.preBuildSteps = options.releaseWorkflowSetupSteps ?? [];
    this.postBuildSteps = options.postBuildSteps ?? [];
    this.antitamper = options.antitamper ?? true;
    this.artifactDirectory = options.artifactsDirectory ?? 'dist';
    this.versionFile = options.versionFile;
    this.releaseSchedule = options.releaseSchedule;
    this.releaseEveryCommit = options.releaseEveryCommit ?? true;
    this.containerImage = options.workflowContainerImage;

    this.version = new Version(project, {
      versionFile: options.versionFile,
    });

    this.publisher = new Publisher(project, {
      artifactName: this.artifactDirectory,
      buildJobId: BUILD_JOBID,
      jsiiReleaseVersion: options.jsiiReleaseVersion,
    });

    // add the default branch
    this.defaultBranch = {
      name: options.branch,
      prerelease: options.prerelease,
      majorVersion: options.majorVersion,
      workflowName: options.releaseWorkflowName ?? 'Release',
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
  public addJobs(jobs: Record<string, workflows.Job>) {
    for (const [name, job] of Object.entries(jobs)) {
      this.jobs[name] = job;
    }
  }

  // render a workflow per branch and all the jobs to it
  public preSynthesize() {
    for (const branch of this.branches) {
      const workflow = this.createWorkflow(branch);
      workflow.addJobs(this.publisher.render());
      workflow.addJobs(this.jobs);
    }
  }

  private createWorkflow(branch: ReleaseBranch): GithubWorkflow {
    const github = this.project.github;
    if (!github) { throw new Error('no github support'); }

    const workflowName = branch.workflowName ?? `release-${branch.name}`;

    // to avoid race conditions between two commits trying to release the same
    // version, we check if the head sha is identical to the remote sha. if
    // not, we will skip the release and just finish the build.
    const gitRemoteStep = 'git_remote';
    const latestCommitOutput = 'latest_commit';
    const noNewCommits = `\${{ steps.${gitRemoteStep}.outputs.${latestCommitOutput} == github.sha }}`;

    const steps = new Array<workflows.JobStep>();

    // check out sources.
    steps.push({
      name: 'Checkout',
      uses: 'actions/checkout@v2',
      with: {
        // we must use 'fetch-depth=0' in order to fetch all tags
        // otherwise tags are not checked out
        'fetch-depth': 0,
      },
    });

    // sets git identity so we can push later
    steps.push({
      name: 'Set git identity',
      run: [
        'git config user.name "Automation"',
        'git config user.email "github-actions@github.com"',
      ].join('\n'),
    });

    steps.push(...this.preBuildSteps ?? []);

    const env: Record<string, string> = {};

    if (branch.majorVersion !== undefined) {
      env.MAJOR = branch.majorVersion.toString();
    }

    if (branch.prerelease) {
      env.PRERELEASE = branch.prerelease;
    }

    steps.push({
      name: 'Bump to next version',
      run: this.project.runTaskCommand(this.version.bumpTask),
      env: Object.keys(env).length ? env : undefined,
    });

    // run the main build task
    steps.push({
      name: this.task.name,
      run: this.project.runTaskCommand(this.task),
    });

    // run post-build steps
    steps.push(...this.postBuildSteps);

    // create a backup of the version JSON file (e.g. package.json) because we
    // are going to revert the bump and we need the version number in order to
    // create the github release.
    const versionJsonBackup = `${this.versionFile}.bak.json`;
    steps.push({
      name: 'Backup version file',
      run: `cp -f ${this.versionFile} ${versionJsonBackup}`,
    });

    // revert the bump so anti-tamper will not fail
    steps.push({
      name: 'Unbump',
      run: this.project.runTaskCommand(this.version.unbumpTask),
    });

    // anti-tamper check (fails if there were changes to committed files)
    // this will identify any non-committed files generated during build (e.g. test snapshots)
    if (this.antitamper) {
      steps.push({
        name: 'Anti-tamper check',
        run: 'git diff --ignore-space-at-eol --exit-code',
      });
    }

    // check if new commits were pushed to the repo while we were building.
    // if new commits have been pushed, we will cancel this release
    steps.push({
      name: 'Check for new commits',
      id: gitRemoteStep,
      run: `echo ::set-output name=${latestCommitOutput}::"$(git ls-remote origin -h \${{ github.ref }} | cut -f1)"`,
    });

    // create a github release
    const getVersion = `v$(node -p \"require(\'./${versionJsonBackup}\').version\")`;
    steps.push({
      name: 'Create release',
      if: noNewCommits,
      run: [
        `gh release create ${getVersion}`,
        `-F ${this.version.changelogFile}`,
        `-t ${getVersion}`,
      ].join(' '),
      env: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
    });

    steps.push({
      name: 'Upload artifact',
      if: noNewCommits,
      uses: 'actions/upload-artifact@v2.1.1',
      with: {
        name: this.artifactDirectory,
        path: this.artifactDirectory,
      },
    });

    const workflow = github.addWorkflow(workflowName);

    // determine release triggers
    workflow.on({
      schedule: this.releaseSchedule ? [{ cron: this.releaseSchedule }] : undefined,
      push: (this.releaseEveryCommit) ? { branches: [branch.name] } : undefined,
      workflowDispatch: {}, // allow manual triggering
    });

    // add main build job
    workflow.addJobs({
      [BUILD_JOBID]: {
        runsOn: 'ubuntu-latest',
        container: this.containerImage ? { image: this.containerImage } : undefined,
        env: {
          CI: 'true',
          RELEASE: 'true',
        },
        permissions: {
          contents: workflows.JobPermission.WRITE,
        },
        steps: steps,
      },
    });

    return workflow;
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
