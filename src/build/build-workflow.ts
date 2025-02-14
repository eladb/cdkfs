import * as path from "path";
import { Task } from "..";
import { Component } from "../component";
import {
  GitHub,
  GithubWorkflow,
  GitIdentity,
  workflows,
  WorkflowSteps,
} from "../github";
import {
  BUILD_ARTIFACT_NAME,
  DEFAULT_GITHUB_ACTIONS_USER,
  PERMISSION_BACKUP_FILE,
} from "../github/constants";
import { ensureNotHiddenPath } from "../github/private/util";
import { WorkflowActions } from "../github/workflow-actions";
import {
  Job,
  JobPermission,
  JobPermissions,
  JobStep,
  Tools,
  Triggers,
} from "../github/workflows-model";
import { NodeProject } from "../javascript";
import { Project } from "../project";
import { GroupRunnerOptions, filteredRunsOnOptions } from "../runner-options";
import {
  BUILD_JOBID,
  DEFAULT_ARTIFACTS_DIRECTORY,
  NOT_FORK,
  PULL_REQUEST_REF,
  PULL_REQUEST_REPOSITORY,
  SELF_MUTATION_CONDITION,
  SELF_MUTATION_HAPPENED_OUTPUT,
  SELF_MUTATION_STEP,
} from "./private/consts";
import { workflowNameForProject } from "../util/name";
import { ensureRelativePathStartsWithDot } from "../util/path";

export interface BuildWorkflowCommonOptions {
  /**
   * Name of the buildfile (e.g. "build" becomes "build.yml").
   *
   * @default "build"
   */
  readonly name?: string;

  /**
   * Steps to execute before the build.
   * @default []
   */
  readonly preBuildSteps?: JobStep[];

  /**
   * Build workflow triggers
   * @default "{ pullRequest: {}, workflowDispatch: {} }"
   */
  readonly workflowTriggers?: Triggers;

  /**
   * Permissions granted to the build job
   * To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`
   * @default `{ contents: JobPermission.WRITE }`
   */
  readonly permissions?: JobPermissions;
}

export interface BuildWorkflowOptions extends BuildWorkflowCommonOptions {
  /**
   * The task to execute in order to build the project.
   */
  readonly buildTask: Task;

  /**
   * A name of a directory that includes build artifacts.
   * @default "dist"
   */
  readonly artifactsDirectory?: string;

  /**
   * The container image to use for builds.
   * @default - the default workflow container
   */
  readonly containerImage?: string;

  /**
   * Automatically update files modified during builds to pull-request branches.
   * This means that any files synthesized by projen or e.g. test snapshots will
   * always be up-to-date before a PR is merged.
   *
   * Implies that PR builds do not have anti-tamper checks.
   *
   * This is enabled by default only if `githubTokenSecret` is set. Otherwise it
   * is disabled, which implies that file changes that happen during build will
   * not be pushed back to the branch.
   *
   * @default true
   */
  readonly mutableBuild?: boolean;

  /**
   * Steps to execute after build.
   * @default []
   */
  readonly postBuildSteps?: JobStep[];

  /**
   * Git identity to use for the workflow.
   * @default - default identity
   */
  readonly gitIdentity?: GitIdentity;

  /**
   * Build environment variables.
   * @default {}
   */
  readonly env?: { [key: string]: string };

  /**
   * Github Runner selection labels
   * @default ["ubuntu-latest"]
   * @description Defines a target Runner by labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOn?: string[];

  /**
   * Github Runner Group selection options
   * @description Defines a target Runner Group by name and/or labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOnGroup?: GroupRunnerOptions;

  /**
   * Tools required for this job.
   * Translates into `actions/setup-xxx` steps at the beginning of the job.
   * @default - none
   */
  readonly tools?: Tools;
}

export class BuildWorkflow extends Component {
  /**
   * Name of generated github workflow
   */
  public readonly name: string;

  private readonly postBuildSteps: JobStep[];
  private readonly preBuildSteps: JobStep[];
  private readonly gitIdentity: GitIdentity;
  private readonly buildTask: Task;
  private readonly github: GitHub;
  private readonly workflow: GithubWorkflow;
  private readonly artifactsDirectory: string;

  private readonly _postBuildJobs: string[] = [];

  constructor(project: Project, options: BuildWorkflowOptions) {
    super(project);

    const github = GitHub.of(this.project.root);
    if (!github) {
      throw new Error(
        "BuildWorkflow is currently only supported for GitHub projects"
      );
    }

    this.github = github;
    this.preBuildSteps = options.preBuildSteps ?? [];
    this.postBuildSteps = options.postBuildSteps ?? [];
    this.gitIdentity = options.gitIdentity ?? DEFAULT_GITHUB_ACTIONS_USER;
    this.buildTask = options.buildTask;
    this.artifactsDirectory =
      options.artifactsDirectory ?? DEFAULT_ARTIFACTS_DIRECTORY;
    ensureNotHiddenPath(this.artifactsDirectory, "artifactsDirectory");
    this.name = options.name ?? workflowNameForProject("build", this.project);
    const mutableBuilds = options.mutableBuild ?? true;

    this.workflow = new GithubWorkflow(github, this.name);
    this.workflow.on(
      options.workflowTriggers ?? {
        pullRequest: {},
        workflowDispatch: {}, // allow manual triggering
      }
    );

    this.addBuildJob(options);

    if (mutableBuilds) {
      this.addSelfMutationJob(options);
    }

    if (project instanceof NodeProject) {
      project.addPackageIgnore(PERMISSION_BACKUP_FILE);
    }
  }

  private addBuildJob(options: BuildWorkflowOptions) {
    const projectPathRelativeToRoot = path.relative(
      this.project.root.outdir,
      this.project.outdir
    );
    const jobConfig: workflows.Job = {
      ...filteredRunsOnOptions(options.runsOn, options.runsOnGroup),
      container: options.containerImage
        ? { image: options.containerImage }
        : undefined,
      env: {
        CI: "true",
        ...options.env,
      },
      permissions: {
        contents: JobPermission.WRITE,
        ...options.permissions,
      },
      defaults: this.project.parent // is subproject,
        ? {
            run: {
              workingDirectory: ensureRelativePathStartsWithDot(
                projectPathRelativeToRoot
              ),
            },
          }
        : undefined,
      steps: (() => this.renderBuildSteps(projectPathRelativeToRoot)) as any,
      outputs: {
        [SELF_MUTATION_HAPPENED_OUTPUT]: {
          stepId: SELF_MUTATION_STEP,
          outputName: SELF_MUTATION_HAPPENED_OUTPUT,
        },
      },
    };

    this.workflow.addJob(BUILD_JOBID, jobConfig);
  }

  /**
   * Returns a list of job IDs that are part of the build.
   */
  public get buildJobIds(): string[] {
    return [BUILD_JOBID, ...this._postBuildJobs];
  }

  /**
   * Adds steps that are executed after the build.
   * @param steps The job steps
   */
  public addPostBuildSteps(...steps: JobStep[]): void {
    this.postBuildSteps.push(...steps);
  }

  /**
   * Adds another job to the build workflow which is executed after the build
   * job succeeded.
   *
   * Jobs are executed _only_ if the build did NOT self mutate. If the build
   * self-mutate, the branch will either be updated or the build will fail (in
   * forks), so there is no point in executing the post-build job.
   *
   * @param id The id of the new job
   * @param job The job specification
   */
  public addPostBuildJob(id: string, job: Job) {
    const steps = [];

    steps.push(
      {
        name: "Download build artifacts",
        uses: "actions/download-artifact@v4",
        with: {
          name: BUILD_ARTIFACT_NAME,
          path: this.artifactsDirectory,
        },
      },
      {
        name: "Restore build artifact permissions",
        continueOnError: true,
        run: [
          `cd ${this.artifactsDirectory} && setfacl --restore=${PERMISSION_BACKUP_FILE}`,
        ].join("\n"),
      }
    );

    steps.push(...(job.steps ?? []));

    this.workflow.addJob(id, {
      needs: [BUILD_JOBID],
      // only run if build did not self-mutate
      if: `\${{ !${SELF_MUTATION_CONDITION} }}`,
      ...job,
      steps: steps,
    });

    // add to the list of build job IDs
    this._postBuildJobs.push(id);
  }

  /**
   * Run a task as a job within the build workflow which is executed after the
   * build job succeeded.
   *
   * The job will have access to build artifacts and will install project
   * dependencies in order to be able to run any commands used in the tasks.
   *
   * Jobs are executed _only_ if the build did NOT self mutate. If the build
   * self-mutate, the branch will either be updated or the build will fail (in
   * forks), so there is no point in executing the post-build job.
   *
   * @param options Specify tools and other options
   */
  public addPostBuildJobTask(
    task: Task,
    options: AddPostBuildJobTaskOptions = {}
  ) {
    this.addPostBuildJobCommands(
      `post-build-${task.name}`,
      [`${this.project.projenCommand} ${task.name}`],
      {
        checkoutRepo: true,
        installDeps: true,
        tools: options.tools,
        ...filteredRunsOnOptions(options.runsOn, options.runsOnGroup),
      }
    );
  }

  /**
   * Run a sequence of commands as a job within the build workflow which is
   * executed after the build job succeeded.
   *
   * Jobs are executed _only_ if the build did NOT self mutate. If the build
   * self-mutate, the branch will either be updated or the build will fail (in
   * forks), so there is no point in executing the post-build job.
   *
   * @param options Specify tools and other options
   */
  public addPostBuildJobCommands(
    id: string,
    commands: string[],
    options?: AddPostBuildJobCommandsOptions
  ) {
    const steps = [];

    if (options?.checkoutRepo) {
      steps.push(
        WorkflowSteps.checkout({
          with: {
            ref: PULL_REQUEST_REF,
            repository: PULL_REQUEST_REPOSITORY,
            ...(this.github.downloadLfs ? { lfs: true } : {}),
          },
        })
      );
    }

    if (
      options?.checkoutRepo &&
      options?.installDeps &&
      this.project instanceof NodeProject
    ) {
      steps.push({
        name: "Install dependencies",
        run: `${this.project.package.installCommand}`,
      });
    }

    steps.push({ run: commands.join("\n") });

    this.addPostBuildJob(id, {
      permissions: {
        contents: JobPermission.READ,
      },
      tools: options?.tools,
      ...filteredRunsOnOptions(options?.runsOn, options?.runsOnGroup),
      steps,
    });
  }

  private addSelfMutationJob(options: BuildWorkflowOptions) {
    this.workflow.addJob("self-mutation", {
      ...filteredRunsOnOptions(options.runsOn, options.runsOnGroup),
      permissions: {
        contents: JobPermission.WRITE,
      },
      tools: options.tools,
      needs: [BUILD_JOBID],
      if: `always() && ${SELF_MUTATION_CONDITION} && ${NOT_FORK}`,
      steps: [
        ...this.workflow.projenCredentials.setupSteps,
        ...WorkflowActions.checkoutWithPatch({
          // we need to use a PAT so that our push will trigger the build workflow
          token: this.workflow.projenCredentials.tokenRef,
          ref: PULL_REQUEST_REF,
          repository: PULL_REQUEST_REPOSITORY,
          lfs: this.github.downloadLfs,
        }),
        WorkflowSteps.setupGitIdentity({ gitIdentity: this.gitIdentity }),
        {
          name: "Push changes",
          env: {
            PULL_REQUEST_REF,
          },
          run: [
            "git add .",
            'git commit -s -m "chore: self mutation"',
            `git push origin HEAD:$PULL_REQUEST_REF`,
          ].join("\n"),
        },
      ],
    });
  }

  /**
   * Called (lazily) during synth to render the build job steps.
   */
  private renderBuildSteps(projectPathRelativeToRoot: string): JobStep[] {
    return [
      WorkflowSteps.checkout({
        with: {
          ref: PULL_REQUEST_REF,
          repository: PULL_REQUEST_REPOSITORY,
          ...(this.github.downloadLfs ? { lfs: true } : {}),
        },
      }),

      ...this.preBuildSteps,

      {
        name: this.buildTask.name,
        run: this.github.project.runTaskCommand(this.buildTask),
      },

      ...this.postBuildSteps,

      // check for mutations and upload a git patch file as an artifact
      ...WorkflowActions.uploadGitPatch({
        stepId: SELF_MUTATION_STEP,
        outputName: SELF_MUTATION_HAPPENED_OUTPUT,
        mutationError:
          "Files were changed during build (see build log). If this was triggered from a fork, you will need to update your branch.",
      }),

      // upload the build artifact only if we have post-build jobs (otherwise, there's no point)
      ...(this._postBuildJobs.length == 0
        ? []
        : [
            {
              name: "Backup artifact permissions",
              continueOnError: true,
              run: `cd ${this.artifactsDirectory} && getfacl -R . > ${PERMISSION_BACKUP_FILE}`,
            },
            WorkflowSteps.uploadArtifact({
              with: {
                name: BUILD_ARTIFACT_NAME,
                path: this.project.parent
                  ? `${projectPathRelativeToRoot}/${this.artifactsDirectory}`
                  : this.artifactsDirectory,
              },
            }),
          ]),
    ];
  }
}

/**
 * Options for `BuildWorkflow.addPostBuildJobTask`
 */
export interface AddPostBuildJobTaskOptions {
  /**
   * Tools that should be installed before the task is run.
   */
  readonly tools?: Tools;

  /**
   * Github Runner selection labels
   * @default ["ubuntu-latest"]
   * @description Defines a target Runner by labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOn?: string[];

  /**
   * Github Runner Group selection options
   * @description Defines a target Runner Group by name and/or labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOnGroup?: GroupRunnerOptions;
}

/**
 * Options for `BuildWorkflow.addPostBuildJobCommands`
 */
export interface AddPostBuildJobCommandsOptions {
  /**
   * Tools that should be installed before the commands are run.
   */
  readonly tools?: Tools;

  /**
   * Check out the repository at the pull request branch before commands are
   * run.
   *
   * @default false
   */
  readonly checkoutRepo?: boolean;

  /**
   * Install project dependencies before running commands. `checkoutRepo` must
   * also be set to true.
   *
   * Currently only supported for `NodeProject`.
   *
   * @default false
   */
  readonly installDeps?: boolean;

  /**
   * Github Runner selection labels
   * @default ["ubuntu-latest"]
   * @description Defines a target Runner by labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOn?: string[];

  /**
   * Github Runner Group selection options
   * @description Defines a target Runner Group by name and/or labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOnGroup?: GroupRunnerOptions;
}
