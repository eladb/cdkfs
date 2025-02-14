// @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions

import { GroupRunnerOptions } from "../runner-options";

export interface CommonJobDefinition {
  /**
   * The name of the job displayed on GitHub.
   */
  readonly name?: string;

  /**
   * Identifies any jobs that must complete successfully before this job will
   * run. It can be a string or array of strings. If a job fails, all jobs
   * that need it are skipped unless the jobs use a conditional expression
   * that causes the job to continue.
   */
  readonly needs?: string[];

  /**
   * You can modify the default permissions granted to the GITHUB_TOKEN, adding
   * or removing access as required, so that you only allow the minimum required
   * access.
   *
   * Use `{ contents: READ }` if your job only needs to clone code.
   *
   * This is intentionally a required field since it is required in order to
   * allow workflows to run in GitHub repositories with restricted default
   * access.
   *
   * @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token
   */
  readonly permissions: JobPermissions;

  /**
   * Concurrency ensures that only a single job or workflow using the same
   * concurrency group will run at a time. A concurrency group can be any
   * string or expression. The expression can use any context except for the
   * secrets context.
   *
   * @experimental
   */
  readonly concurrency?: unknown;

  /**
   * You can use the if conditional to prevent a job from running unless a
   * condition is met. You can use any supported context and expression to
   * create a conditional.
   */
  readonly if?: string;

  /**
   * A strategy creates a build matrix for your jobs. You can define different
   * variations to run each job in.
   */
  readonly strategy?: JobStrategy;
}

/**
 * A GitHub Workflow Job calling a reusable workflow
 *
 */
export interface JobCallingReusableWorkflow extends CommonJobDefinition {
  /**
   * The location and version of a reusable workflow file to run as a job.
   */
  readonly uses: string;

  /**
   * When a job is used to call a reusable workflow, you can use with to
   * provide a map of inputs that are passed to the called workflow.
   *
   * Allowed expression contexts: `github`, and `needs`.
   */
  readonly with?: Record<string, string | boolean>;

  /**
   * When a job is used to call a reusable workflow, you can use secrets to
   * provide a map of secrets that are passed to the called workflow.
   *
   * Use the 'inherit' keyword to pass all the calling workflow's secrets to the called workflow
   */
  readonly secrets?: string | Record<string, string>;
}

/**
 * A GitHub Workflow job definition.
 */
export interface Job extends CommonJobDefinition {
  /**
   * The type of machine to run the job on. The machine can be either a
   * GitHub-hosted runner or a self-hosted runner.
   *
   * @example ["ubuntu-latest"]
   */
  readonly runsOn?: string[];

  /**
   * Github Runner Group selection options
   * @description Defines a target Runner Group by name and/or labels
   * @throws {Error} if both `runsOn` and `runsOnGroup` are specified
   */
  readonly runsOnGroup?: GroupRunnerOptions;

  /**
   * A job contains a sequence of tasks called steps. Steps can run commands,
   * run setup tasks, or run an action in your repository, a public repository,
   * or an action published in a Docker registry. Not all steps run actions,
   * but all actions run as a step. Each step runs in its own process in the
   * runner environment and has access to the workspace and filesystem.
   * Because steps run in their own process, changes to environment variables
   * are not preserved between steps. GitHub provides built-in steps to set up
   * and complete a job.
   */
  readonly steps: JobStep[];

  /**
   * The environment that the job references. All environment protection rules
   * must pass before a job referencing the environment is sent to a runner.
   *
   * @see https://docs.github.com/en/actions/reference/environments
   */
  readonly environment?: unknown;

  /**
   * A map of outputs for a job. Job outputs are available to all downstream
   * jobs that depend on this job.
   */
  readonly outputs?: Record<string, JobStepOutput>;

  /**
   * A map of environment variables that are available to all steps in the
   * job. You can also set environment variables for the entire workflow or an
   * individual step.
   */
  readonly env?: Record<string, string>;

  /**
   * A map of default settings that will apply to all steps in the job. You
   * can also set default settings for the entire workflow.
   */
  readonly defaults?: JobDefaults;

  /**
   * The maximum number of minutes to let a job run before GitHub
   * automatically cancels it.
   *
   * @default 360
   */
  readonly timeoutMinutes?: number;

  /**
   * Prevents a workflow run from failing when a job fails. Set to true to
   * allow a workflow run to pass when this job fails.
   */
  readonly continueOnError?: boolean;

  /**
   * A container to run any steps in a job that don't already specify a
   * container. If you have steps that use both script and container actions,
   * the container actions will run as sibling containers on the same network
   * with the same volume mounts.
   */
  readonly container?: ContainerOptions;

  /**
   * Used to host service containers for a job in a workflow. Service
   * containers are useful for creating databases or cache services like Redis.
   * The runner automatically creates a Docker network and manages the life
   * cycle of the service containers.
   */
  readonly services?: Record<string, ContainerOptions>;

  /**
   * Tools required for this job.
   * Translates into `actions/setup-xxx` steps at the beginning of the job.
   */
  readonly tools?: Tools;
}

/**
 * Supported tools.
 */
export interface Tools {
  /**
   * Setup java (corretto distribution).
   * @default - not installed
   */
  readonly java?: ToolRequirement;

  /**
   * Setup python.
   * @default - not installed
   */
  readonly python?: ToolRequirement;

  /**
   * Setup golang.
   * @default - not installed
   */
  readonly go?: ToolRequirement;

  /**
   * Setup node.js
   * @default - not installed
   */
  readonly node?: ToolRequirement;

  /**
   * Setup .NET Core
   * @default - not installed
   */
  readonly dotnet?: ToolRequirement;

  /**
   * Setup rust toolchain
   * @default - not installed
   */
  readonly rust?: ToolRequirement;

  /**
   * Setup additional custom tools
   * @default - no custom tools are added
   */
  readonly custom?: ITool[];
}

/**
 * Custom setup steps to configure a tool in a workflow job.
 */
export interface ITool {
  setupSteps(): JobStep[];
}

/**
 * Version requirement for tools.
 */
export interface ToolRequirement {
  readonly version: string;
}

/**
 * The available scopes and access values for workflow permissions. If you
 * specify the access for any of these scopes, all those that are not
 * specified are set to `JobPermission.NONE`, instead of the default behavior
 * when none is specified.
 */
export interface JobPermissions {
  readonly actions?: JobPermission;
  readonly checks?: JobPermission;
  readonly contents?: JobPermission;
  readonly deployments?: JobPermission;
  readonly idToken?: JobPermission;
  readonly issues?: JobPermission;
  readonly discussions?: JobPermission;
  readonly packages?: JobPermission;
  readonly pages?: JobPermission;
  readonly pullRequests?: JobPermission;
  readonly repositoryProjects?: JobPermission;
  readonly securityEvents?: JobPermission;
  readonly statuses?: JobPermission;
}

/**
 * The permissions available to a GitHub App.
 *
 * Typically a token for a GitHub App has all the available scopes/permissions available to the app
 * itself; however, a more limited set of permissions can be specified. When permissions are provided,
 * **only** the specified permissions are granted to the token.
 *
 * @see https://docs.github.com/en/rest/apps/apps?apiVersion=2022-11-28#create-an-installation-access-token-for-an-app
 */
export interface AppPermissions {
  readonly actions?: AppPermission;
  readonly administration?: AppPermission;
  readonly checks?: AppPermission;
  readonly contents?: AppPermission;
  readonly deployments?: AppPermission;
  readonly environments?: AppPermission;
  readonly issues?: AppPermission;
  readonly metadata?: AppPermission;
  readonly packages?: AppPermission;
  readonly pages?: AppPermission;
  readonly pullRequests?: AppPermission;
  readonly repositoryAnnouncementBanners?: AppPermission;
  readonly repositoryHooks?: AppPermission;
  readonly repositoryProject?: AppPermission;
  readonly secretScanningAlerts?: AppPermission;
  readonly secrets?: AppPermission;
  readonly securityEvents?: AppPermission;
  readonly singleFile?: AppPermission;
  readonly statuses?: AppPermission;
  readonly vulnerabilityAlerts?: AppPermission;
  readonly workflows?: AppPermission;
  readonly members?: AppPermission;
  readonly organizationAdministration?: AppPermission;
  readonly organizationCustomRoles?: AppPermission;
  readonly organizationAnnouncementBanners?: AppPermission;
  readonly organizationHooks?: AppPermission;
  readonly organizationPlan?: AppPermission;
  readonly organizationProjects?: AppPermission;
  readonly organizationPackages?: AppPermission;
  readonly organizationSecrets?: AppPermission;
  readonly organizationSelfHostedRunners?: AppPermission;
  readonly organizationUserBlocking?: AppPermission;
  readonly teamDiscussions?: AppPermission;
}

/**
 * Access level for workflow permission scopes.
 */
export enum JobPermission {
  /** Read-only access */
  READ = "read",

  /** Read-write access */
  WRITE = "write",

  /** No access at all */
  NONE = "none",
}

/**
 * The permissions available for an access token for a GitHub App.
 */
export enum AppPermission {
  /** Read-only access */
  READ = "read",
  /** Read-write access */
  WRITE = "write",
  /**
   * Read-write and admin access.
   *
   * Not all permissions support `admin`.
   */
  ADMIN = "admin",
}

/**
 * An output binding for a job.
 */
export interface JobStepOutput {
  /**
   * The ID of the step that exposes the output.
   */
  readonly stepId: string;

  /**
   * The name of the job output that is being bound.
   */
  readonly outputName: string;
}

/**
 * Default settings for all steps in the job.
 */
export interface JobDefaults {
  /** Default run settings. */
  readonly run?: RunSettings;
}

/**
 * Run settings for a job.
 */
export interface RunSettings {
  /**
   * Which shell to use for running the step.
   *
   * @example "bash"
   */
  readonly shell?: string;

  /**
   * Working directory to use when running the step.
   */
  readonly workingDirectory?: string;
}

/**
 * Fields that describe the How, Why, When, and Who of a Step.
 * These fields can have none present, but can be present on every Step, and have no effect on one another.
 *
 * This stands in contrast to the Command (non-Configuration) fields, which are mutually exclusive, and describe the What.
 */
export interface StepConfiguration {
  /**
   * A unique identifier for the step. You can use the id to reference the
   * step in contexts.
   */
  readonly id?: string;

  /**
   * You can use the if conditional to prevent a job from running unless a
   * condition is met. You can use any supported context and expression to
   * create a conditional.
   */
  readonly if?: string;

  /**
   * A name for your step to display on GitHub.
   */
  readonly name?: string;

  /**
   * Sets environment variables for steps to use in the runner environment.
   * You can also set environment variables for the entire workflow or a job.
   */
  readonly env?: Record<string, string>;

  /**
   * Specifies a working directory for a step.
   * Overrides a job's working directory.
   */
  readonly workingDirectory?: string;
}

/**
 * This contains the fields that are common amongst both:
 * - JobStep, which is a step that is part of a Job in Github Actions. This is by far the most common use case.
 * - The metadata file `action.yaml` that is used to define an Action when you are creating one. As in, if you were creating an Action to be used in a JobStep.
 * There is some overlap between the two, and this captures that overlap.
 *
 * @see https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
 */
export interface Step extends StepConfiguration {
  /**
   * Selects an action to run as part of a step in your job. An action is a
   * reusable unit of code. You can use an action defined in the same
   * repository as the workflow, a public repository, or in a published Docker
   * container image.
   */
  readonly uses?: string;

  /**
   * Runs command-line programs using the operating system's shell. If you do
   * not provide a name, the step name will default to the text specified in
   * the run command.
   */
  readonly run?: string;

  /**
   * A map of the input parameters defined by the action. Each input parameter
   * is a key/value pair. Input parameters are set as environment variables.
   * The variable is prefixed with INPUT_ and converted to upper case.
   */
  readonly with?: Record<string, any>;
}

/**
 * These settings are unique to a JobStep from the fields contained within the metadata action.yaml file present in when creating a new GitHub Action.
 * These fields are not present in action.yml, but are in JobStep, which are using when creating workflows.
 */
export interface JobStepConfiguration extends StepConfiguration {
  /**
   * Prevents a job from failing when a step fails. Set to true to allow a job
   * to pass when this step fails.
   */
  readonly continueOnError?: boolean;

  /**
   * The maximum number of minutes to run the step before killing the process.
   */
  readonly timeoutMinutes?: number;
}

/**
 * JobSteps run as part of a GitHub Workflow Job.
 *
 * @see https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps
 */
export interface JobStep extends Step, JobStepConfiguration {}

/**
 * A strategy creates a build matrix for your jobs. You can define different
 * variations to run each job in.
 */
export interface JobStrategy {
  /**
   * You can define a matrix of different job configurations. A matrix allows
   * you to create multiple jobs by performing variable substitution in a
   * single job definition. For example, you can use a matrix to create jobs
   * for more than one supported version of a programming language, operating
   * system, or tool. A matrix reuses the job's configuration and creates a
   * job for each matrix you configure.
   *
   * A job matrix can generate a maximum of 256 jobs per workflow run. This
   * limit also applies to self-hosted runners.
   */
  readonly matrix?: JobMatrix;

  /**
   * When set to true, GitHub cancels all in-progress jobs if any matrix job
   * fails. Default: true
   */
  readonly failFast?: boolean;

  /**
   * The maximum number of jobs that can run simultaneously when using a
   * matrix job strategy. By default, GitHub will maximize the number of jobs
   * run in parallel depending on the available runners on GitHub-hosted
   * virtual machines.
   */
  readonly maxParallel?: number;
}

type JobMatrixValue = string | boolean | number;

/**
 * A job matrix.
 */
export interface JobMatrix {
  /**
   * Each option you define in the matrix has a key and value. The keys you
   * define become properties in the matrix context and you can reference the
   * property in other areas of your workflow file. For example, if you define
   * the key os that contains an array of operating systems, you can use the
   * matrix.os property as the value of the runs-on keyword to create a job
   * for each operating system.
   */
  readonly domain?: Record<string, JobMatrixValue[]>;

  /**
   * You can add additional configuration options to a build matrix job that
   * already exists. For example, if you want to use a specific version of npm
   * when the job that uses windows-latest and version 8 of node runs, you can
   * use include to specify that additional option.
   */
  readonly include?: Array<Record<string, JobMatrixValue>>;

  /**
   * You can remove a specific configurations defined in the build matrix
   * using the exclude option. Using exclude removes a job defined by the
   * build matrix.
   */
  readonly exclude?: Array<Record<string, JobMatrixValue>>;
}

/**
 * Options pertaining to container environments.
 */
export interface ContainerOptions {
  /**
   * The Docker image to use as the container to run the action. The value can
   * be the Docker Hub image name or a registry name.
   */
  readonly image: string;

  /**
   * f the image's container registry requires authentication to pull the
   * image, you can use credentials to set a map of the username and password.
   * The credentials are the same values that you would provide to the docker
   * login command.
   */
  readonly credentials?: ContainerCredentials;

  /**
   * Sets a map of environment variables in the container.
   */
  readonly env?: Record<string, string>;

  /**
   * Sets an array of ports to expose on the container.
   */
  readonly ports?: number[];

  /**
   * Sets an array of volumes for the container to use. You can use volumes to
   * share data between services or other steps in a job. You can specify
   * named Docker volumes, anonymous Docker volumes, or bind mounts on the
   * host.
   *
   * To specify a volume, you specify the source and destination path:
   * `<source>:<destinationPath>`.
   */
  readonly volumes?: string[];

  /**
   * Additional Docker container resource options.
   *
   * @see https://docs.docker.com/engine/reference/commandline/create/#options
   */
  readonly options?: string[];
}

/**
 * Credentials to use to authenticate to Docker registries.
 */
export interface ContainerCredentials {
  /** The username. */
  readonly username: string;

  /** The password. */
  readonly password: string;
}

/**
 * The set of available triggers for GitHub Workflows.
 *
 * @see https://docs.github.com/en/actions/reference/events-that-trigger-workflows
 */
export interface Triggers {
  //#region Scheduled events
  /**
   * You can schedule a workflow to run at specific UTC times using POSIX cron
   * syntax. Scheduled workflows run on the latest commit on the default or
   * base branch. The shortest interval you can run scheduled workflows is
   * once every 5 minutes.
   *
   * @see https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07
   */
  readonly schedule?: CronScheduleOptions[];
  //#endregion

  //#region Manual events
  /**
   * You can configure custom-defined input properties, default input values,
   * and required inputs for the event directly in your workflow. When the
   * workflow runs, you can access the input values in the github.event.inputs
   * context.
   */
  readonly workflowDispatch?: WorkflowDispatchOptions;

  /**
   * You can use the GitHub API to trigger a webhook event called
   * repository_dispatch when you want to trigger a workflow for activity that
   * happens outside of GitHub.
   */
  readonly repositoryDispatch?: RepositoryDispatchOptions;
  //#endregion

  //#region Workflow reuse events
  /**
   * Can be called from another workflow
   * @see https://docs.github.com/en/actions/learn-github-actions/reusing-workflows
   */
  readonly workflowCall?: WorkflowCallOptions;
  //#endregion

  //#region Webhook events
  /**
   * Runs your workflow anytime the branch_protection_rule event occurs.
   */
  readonly branchProtectionRule?: BranchProtectionRuleOptions;

  /**
   * Runs your workflow anytime the check_run event occurs.
   */
  readonly checkRun?: CheckRunOptions;

  /**
   * Runs your workflow anytime the check_suite event occurs.
   */
  readonly checkSuite?: CheckSuiteOptions;

  /**
   * Runs your workflow anytime someone creates a branch or tag, which
   * triggers the create event.
   */
  readonly create?: CreateOptions;

  /**
   * Runs your workflow anytime someone deletes a branch or tag, which
   * triggers the delete event.
   */
  readonly delete?: DeleteOptions;

  /**
   * Runs your workflow anytime someone creates a deployment, which triggers
   * the deployment event. Deployments created with a commit SHA may not have
   * a Git ref.
   */
  readonly deployment?: DeploymentOptions;

  /**
   * Runs your workflow anytime a third party provides a deployment status,
   * which triggers the deployment_status event. Deployments created with a
   * commit SHA may not have a Git ref.
   */
  readonly deploymentStatus?: DeploymentStatusOptions;

  /**
   * Runs your workflow anytime the discussion event occurs. More than one activity type triggers this event.
   * @see https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions
   */
  readonly discussion?: DiscussionOptions;

  /**
   * Runs your workflow anytime the discussion_comment event occurs. More than one activity type triggers this event.
   * @see https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions
   */
  readonly discussionComment?: DiscussionCommentOptions;

  /**
   * Runs your workflow anytime when someone forks a repository, which
   * triggers the fork event.
   */
  readonly fork?: ForkOptions;

  /**
   * Runs your workflow when someone creates or updates a Wiki page, which
   * triggers the gollum event.
   */
  readonly gollum?: GollumOptions;

  /**
   * Runs your workflow anytime the issue_comment event occurs.
   */
  readonly issueComment?: IssueCommentOptions;

  /**
   * Runs your workflow anytime the issues event occurs.
   */
  readonly issues?: IssuesOptions;

  /**
   * Runs your workflow anytime the label event occurs.
   */
  readonly label?: LabelOptions;

  /**
   * Runs your workflow when a pull request is added to a merge queue, which
   * adds the pull request to a merge group.
   *
   * @stability experimental
   */
  readonly mergeGroup?: MergeGroupOptions;

  /**
   * Runs your workflow anytime the milestone event occurs.
   */
  readonly milestone?: MilestoneOptions;

  /**
   * Runs your workflow anytime someone pushes to a GitHub Pages-enabled
   * branch, which triggers the page_build event.
   */
  readonly pageBuild?: PageBuildOptions;

  /**
   * Runs your workflow anytime the project event occurs.
   */
  readonly project?: ProjectOptions;

  /**
   * Runs your workflow anytime the project_card event occurs.
   */
  readonly projectCard?: ProjectCardOptions;

  /**
   * Runs your workflow anytime the project_column event occurs.
   */
  readonly projectColumn?: ProjectColumnOptions;

  /**
   * Runs your workflow anytime someone makes a private repository public,
   * which triggers the public event.
   */
  readonly public?: PublicOptions;

  /**
   * Runs your workflow anytime the pull_request event occurs.
   */
  readonly pullRequest?: PullRequestOptions;

  /**
   * Runs your workflow anytime the pull_request_review event occurs.
   */
  readonly pullRequestReview?: PullRequestReviewOptions;

  /**
   * Runs your workflow anytime a comment on a pull request's unified diff is
   * modified, which triggers the pull_request_review_comment event.
   */
  readonly pullRequestReviewComment?: PullRequestReviewCommentOptions;

  /**
   * This event runs in the context of the base of the pull request, rather
   * than in the merge commit as the pull_request event does. This prevents
   * executing unsafe workflow code from the head of the pull request that
   * could alter your repository or steal any secrets you use in your workflow.
   * This event allows you to do things like create workflows that label and
   * comment on pull requests based on the contents of the event payload.
   *
   * WARNING: The `pull_request_target` event is granted read/write repository
   * token and can access secrets, even when it is triggered from a fork.
   * Although the workflow runs in the context of the base of the pull request,
   * you should make sure that you do not check out, build, or run untrusted
   * code from the pull request with this event. Additionally, any caches
   * share the same scope as the base branch, and to help prevent cache
   * poisoning, you should not save the cache if there is a possibility that
   * the cache contents were altered.
   *
   * @see https://securitylab.github.com/research/github-actions-preventing-pwn-requests
   */
  readonly pullRequestTarget?: PullRequestTargetOptions;

  /**
   * Runs your workflow when someone pushes to a repository branch, which
   * triggers the push event.
   */
  readonly push?: PushOptions;

  /**
   * Runs your workflow anytime a package is published or updated.
   */
  readonly registryPackage?: RegistryPackageOptions;

  /**
   * Runs your workflow anytime the release event occurs.
   */
  readonly release?: ReleaseOptions;

  /**
   * Runs your workflow anytime the status of a Git commit changes, which
   * triggers the status event.
   */
  readonly status?: StatusOptions;

  /**
   * Runs your workflow anytime the watch event occurs.
   */
  readonly watch?: WatchOptions;

  /**
   * This event occurs when a workflow run is requested or completed, and
   * allows you to execute a workflow based on the finished result of another
   * workflow. A workflow run is triggered regardless of the result of the
   * previous workflow.
   */
  readonly workflowRun?: WorkflowRunOptions;
  //#endregion
}

/**
 * CRON schedule options.
 */
export interface CronScheduleOptions {
  /**
   * @see https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07
   */
  readonly cron: string;
}

/**
 * Repository dispatch options.
 */
export interface RepositoryDispatchOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: string[];
}

/**
 * Branch Protection Rule options
 */
export interface BranchProtectionRuleOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "edited" | "deleted">;
}

/**
 * Check run options.
 */
export interface CheckRunOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    "create" | "rerequested" | "completed" | "requested_action"
  >;
}

/**
 * Check suite options
 */
export interface CheckSuiteOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"completed" | "requested" | "rerequested">;
}

/**
 * Discussion options
 */
export interface DiscussionOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    | "created"
    | "edited"
    | "transferred"
    | "pinned"
    | "unpinned"
    | "labeled"
    | "unlabeled"
    | "locked"
    | "unlocked"
    | "category_changed"
    | "answered"
    | "unanswered"
  >;
}

/**
 * Discussion comment options
 */
export interface DiscussionCommentOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "edited" | "deleted">;
}

/**
 * Issue comment options
 */
export interface IssueCommentOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "edited" | "deleted">;
}

/**
 * Issues options
 */
export interface IssuesOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    | "opened"
    | "edited"
    | "deleted"
    | "transferred"
    | "pinned"
    | "unpinned"
    | "closed"
    | "reopened"
    | "assigned"
    | "unassigned"
    | "labeled"
    | "unlabeled"
    | "locked"
    | "unlocked"
    | "milestoned"
    | "demilestoned"
  >;
}

/**
 * Label options
 */
export interface LabelOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "edited" | "deleted">;
}

/**
 * Merge group options.
 *
 * @stability experimental
 */
export interface MergeGroupOptions {
  /**
   * When using the merge_group events, you can configure a workflow
   * to run on specific base branches. If not specified, all branches will
   * trigger the workflow.
   */
  readonly branches?: string[];
}

/**
 * Milestone options
 */
export interface MilestoneOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    "created" | "closed" | "opened" | "edited" | "deleted"
  >;
}

/**
 * Project options
 */
export interface ProjectOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    "created" | "updated" | "closed" | "reopened" | "edited" | "deleted"
  >;
}

/**
 * Project card options
 */
export interface ProjectCardOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    "created" | "moved" | "converted" | "edited" | "deleted"
  >;
}

/**
 * Probject column options
 */
export interface ProjectColumnOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "updated" | "moved" | "deleted">;
}

/**
 * Pull request options
 */
export interface PullRequestOptions extends PushOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    | "assigned"
    | "unassigned"
    | "labeled"
    | "unlabeled"
    | "opened"
    | "edited"
    | "closed"
    | "reopened"
    | "synchronize"
    | "ready_for_review"
    | "locked"
    | "unlocked"
    | "review_requested"
    | "review_request_removed"
  >;
}

/**
 * Pull request review options
 */
export interface PullRequestReviewOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"submitted" | "edited" | "dismissed">;
}

/**
 * Pull request review comment options
 */
export interface PullRequestReviewCommentOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"created" | "edited" | "deleted">;
}

/**
 * Pull request target options.
 */
export interface PullRequestTargetOptions extends PushOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    | "assigned"
    | "unassigned"
    | "labeled"
    | "unlabeled"
    | "opened"
    | "edited"
    | "closed"
    | "reopened"
    | "synchronize"
    | "ready_for_review"
    | "locked"
    | "unlocked"
    | "review_requested"
    | "review_request_removed"
  >;
}

/**
 * Options for push-like events.
 */
export interface PushOptions {
  /**
   * When using the push, pull_request and pull_request_target events, you can configure a workflow
   * to run on specific branches or tags. For a pull_request event, only
   * branches and tags on the base are evaluated. If you define only tags or
   * only branches, the workflow won't run for events affecting the undefined
   * Git ref.
   *
   * @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet
   */
  readonly branches?: string[];

  /**
   * When using the push, pull_request and pull_request_target events, you can configure a workflow
   * to run on specific branches or tags. For a pull_request event, only
   * branches and tags on the base are evaluated. If you define only tags or
   * only branches, the workflow won't run for events affecting the undefined
   * Git ref.
   *
   * @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet
   */
  readonly tags?: string[];

  /**
   * When using the push, pull_request and pull_request_target events, you can configure a workflow
   * to run when at least one file does not match paths-ignore or at least one
   * modified file matches the configured paths. Path filters are not
   * evaluated for pushes to tags.
   *
   * @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet
   */
  readonly paths?: string[];
}

/**
 * Registry package options
 */
export interface RegistryPackageOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"published" | "updated">;
}

/**
 * Release options
 */
export interface ReleaseOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<
    | "published"
    | "unpublished"
    | "created"
    | "edited"
    | "deleted"
    | "prereleased"
    | "released"
  >;
}

/**
 * Watch options
 */
export interface WatchOptions {
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"started">;
}

/**
 * Workflow run options
 */
export interface WorkflowRunOptions {
  /**
   * Which workflow to trigger on.
   *
   * @defaults - any workflows
   */
  readonly workflows?: Array<string>;
  /**
   * Which activity types to trigger on.
   *
   * @defaults - all activity types
   */
  readonly types?: Array<"completed" | "requested">;
  /**
   * Which branches or branch-ignore to limit the trigger to.
   *
   * @defaults - no branch limits
   */
  readonly branches?: Array<string>;
}

//#region Empty Options (future-proofing the API)
/**
 * The Workflow dispatch event accepts no options.
 */
export interface WorkflowDispatchOptions {}

/**
 * The Workflow Call event accepts no options.
 */
export interface WorkflowCallOptions {}

/**
 * The Create event accepts no options.
 */
export interface CreateOptions {}

/**
 * The Delete event accepts no options.
 */
export interface DeleteOptions {}

/**
 * The Deployment event accepts no options.
 */
export interface DeploymentOptions {}

/**
 * The Deployment status event accepts no options.
 */
export interface DeploymentStatusOptions {}

/**
 * The Fork event accepts no options.
 */
export interface ForkOptions {}

/**
 * The Gollum event accepts no options.
 */
export interface GollumOptions {}

/**
 * The Page build event accepts no options.
 */
export interface PageBuildOptions {}

/**
 * The Public event accepts no options.
 */
export interface PublicOptions {}

/**
 * The Status event accepts no options.
 */
export interface StatusOptions {}
//#endregion
