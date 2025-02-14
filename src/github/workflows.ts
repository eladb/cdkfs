import { extname } from "node:path";
import { snake } from "case";
import { GitHubActionsProvider } from "./actions-provider";
import { GitHub } from "./github";
import { GithubCredentials } from "./github-credentials";
import * as workflows from "./workflows-model";
import { resolve } from "../_resolve";
import { Component } from "../component";
import { deepMerge, kebabCaseKeys } from "../util";
import { YamlFile } from "../yaml";

/**
 * Options for `concurrency`.
 */
export interface ConcurrencyOptions {
  /**
   * Concurrency group controls which workflow runs will share the same concurrency limit.
   * For example, if you specify `${{ github.workflow }}-${{ github.ref }}`, workflow runs triggered
   * on the same branch cannot run concurrenty, but workflows runs triggered on different branches can.
   *
   * @default - ${{ github.workflow }}
   *
   * @see https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-concurrency#example-concurrency-groups
   */
  readonly group?: string;

  /**
   * When a workflow is triggered while another one (in the same group) is running, should GitHub cancel
   * the running workflow?
   *
   * @default false
   */
  readonly cancelInProgress?: boolean;
}

/**
 * Options for `GithubWorkflow`.
 */
export interface GithubWorkflowOptions {
  /**
   * Force the creation of the workflow even if `workflows` is disabled in `GitHub`.
   *
   * @default false
   */
  readonly force?: boolean;

  /**
   * Enable concurrency limitations. Use `concurrencyOptions` to configure specific non default values.
   *
   * @default false
   */
  readonly limitConcurrency?: boolean;

  /**
   * Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. Currently in beta.
   *
   * @default - { group: ${{ github.workflow }}, cancelInProgress: false }
   *
   * @see https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#concurrency
   */
  readonly concurrencyOptions?: ConcurrencyOptions;

  /**
   * Set a custom file name for the workflow definition file. Must include either a .yml or .yaml file extension.
   *
   * Use this option to set a file name for the workflow file, that is different than the display name.
   *
   * @example "build-new.yml"
   * @example "my-workflow.yaml"
   *
   * @default - a path-safe version of the workflow name plus the .yml file ending, e.g. build.yml
   */
  readonly fileName?: string;
}

/**
 * Workflow for GitHub.
 *
 * A workflow is a configurable automated process made up of one or more jobs.
 *
 * @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
 */
export class GithubWorkflow extends Component {
  /**
   * The name of the workflow. GitHub displays the names of your workflows under your repository's
   * "Actions" tab.
   * @see https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#name
   */
  public readonly name: string;

  /**
   * The concurrency configuration of the workflow. undefined means no concurrency limitations.
   */
  public readonly concurrency?: ConcurrencyOptions;

  /**
   * The workflow YAML file. May not exist if `workflowsEnabled` is false on `GitHub`.
   */
  public readonly file: YamlFile | undefined;

  /**
   * GitHub API authentication method used by projen workflows.
   */
  public readonly projenCredentials: GithubCredentials;

  /**
   * The name for workflow runs generated from the workflow. GitHub displays the
   * workflow run name in the list of workflow runs on your repository's
   * "Actions" tab. If `run-name` is omitted or is only whitespace, then the run
   * name is set to event-specific information for the workflow run. For
   * example, for a workflow triggered by a `push` or `pull_request` event, it
   * is set as the commit message.
   *
   * This value can include expressions and can reference `github` and `inputs`
   * contexts.
   */
  public runName?: string;

  private actions: GitHubActionsProvider;
  private events: workflows.Triggers = {};
  private jobs: Record<
    string,
    workflows.Job | workflows.JobCallingReusableWorkflow
  > = {};

  /**
   * @param github The GitHub component of the project this workflow belongs to.
   * @param name The name of the workflow, displayed under the repository's "Actions" tab.
   * @param options Additional options to configure the workflow.
   */
  constructor(
    github: GitHub,
    name: string,
    options: GithubWorkflowOptions = {}
  ) {
    super(github.project, `${new.target.name}#${name}`);

    const defaultConcurrency: ConcurrencyOptions = {
      cancelInProgress: false,
      group: "${{ github.workflow }}",
    };

    this.name = name;
    this.concurrency = options.limitConcurrency
      ? (deepMerge([
          defaultConcurrency,
          options.concurrencyOptions,
        ]) as ConcurrencyOptions)
      : undefined;
    this.projenCredentials = github.projenCredentials;
    this.actions = github.actions;

    const workflowsEnabled = github.workflowsEnabled || options.force;

    if (workflowsEnabled) {
      const fileName = options.fileName ?? `${name.toLocaleLowerCase()}.yml`;
      const extension = extname(fileName).toLowerCase();

      if (![".yml", ".yaml"].includes(extension)) {
        throw new Error(
          `GitHub Workflow files must have either a .yml or .yaml file extension, got: ${fileName}`
        );
      }

      this.file = new YamlFile(this.project, `.github/workflows/${fileName}`, {
        obj: () => this.renderWorkflow(),
        // GitHub needs to read the file from the repository in order to work.
        committed: true,
      });
    }
  }

  /**
   * Add events to triggers the workflow.
   *
   * @param events The event(s) to trigger the workflow.
   */
  public on(events: workflows.Triggers) {
    this.events = {
      ...this.events,
      ...events,
    };
  }

  /**
   * Adds a single job to the workflow.
   * @param id The job name (unique within the workflow)
   * @param job The job specification
   */
  public addJob(
    id: string,
    job: workflows.Job | workflows.JobCallingReusableWorkflow
  ): void {
    this.addJobs({ [id]: job });
  }

  /**
   * Add jobs to the workflow.
   *
   * @param jobs Jobs to add.
   */
  public addJobs(
    jobs: Record<string, workflows.Job | workflows.JobCallingReusableWorkflow>
  ) {
    verifyJobConstraints(jobs);

    this.jobs = {
      ...this.jobs,
      ...jobs,
    };
  }

  /**
   * Get a single job from the workflow.
   * @param id The job name (unique within the workflow)
   */
  public getJob(
    id: string
  ): workflows.Job | workflows.JobCallingReusableWorkflow {
    return this.jobs[id];
  }

  /**
   * Updates a single job to the workflow.
   * @param id The job name (unique within the workflow)
   */
  public updateJob(
    id: string,
    job: workflows.Job | workflows.JobCallingReusableWorkflow
  ) {
    this.updateJobs({ [id]: job });
  }

  /**
   * Updates jobs for this worklow
   * Does a complete replace, it does not try to merge the jobs
   *
   * @param jobs Jobs to update.
   */
  public updateJobs(
    jobs: Record<string, workflows.Job | workflows.JobCallingReusableWorkflow>
  ) {
    verifyJobConstraints(jobs);

    const newJobIds = Object.keys(jobs);
    const updatedJobs = Object.entries(this.jobs).map(([jobId, job]) => {
      if (newJobIds.includes(jobId)) {
        return [jobId, jobs[jobId]];
      }
      return [jobId, job];
    });
    this.jobs = {
      ...Object.fromEntries(updatedJobs),
    };
  }

  /**
   * Removes a single job to the workflow.
   * @param id The job name (unique within the workflow)
   */
  public removeJob(id: string) {
    const updatedJobs = Object.entries(this.jobs).filter(
      ([jobId]) => jobId !== id
    );
    this.jobs = {
      ...Object.fromEntries(updatedJobs),
    };
  }

  private renderWorkflow() {
    return {
      name: this.name,
      "run-name": this.runName,
      on: snakeCaseKeys(this.events),
      concurrency: this.concurrency
        ? {
            group: this.concurrency?.group,
            "cancel-in-progress": this.concurrency.cancelInProgress,
          }
        : undefined,
      jobs: renderJobs(this.jobs, this.actions),
    };
  }
}

function snakeCaseKeys<T = unknown>(obj: T): T {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(snakeCaseKeys) as any;
  }

  const result: Record<string, unknown> = {};
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v === "object" && v != null) {
      v = snakeCaseKeys(v);
    }
    result[snake(k)] = v;
  }
  return result as any;
}

function renderJobs(
  jobs: Record<string, workflows.Job | workflows.JobCallingReusableWorkflow>,
  actions: GitHubActionsProvider
) {
  const result: Record<string, unknown> = {};
  for (const [name, job] of Object.entries(jobs)) {
    result[name] = renderJob(job);
  }
  return result;

  /** @see https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions */
  function renderJob(
    job: workflows.Job | workflows.JobCallingReusableWorkflow
  ) {
    const steps = new Array<workflows.JobStep>();

    // https://docs.github.com/en/actions/using-workflows/reusing-workflows#supported-keywords-for-jobs-that-call-a-reusable-workflow
    if ("uses" in job) {
      return {
        name: job.name,
        needs: arrayOrScalar(job.needs),
        if: job.if,
        permissions: kebabCaseKeys(job.permissions),
        concurrency: job.concurrency,
        uses: job.uses,
        with: job.with,
        secrets: job.secrets,
        strategy: renderJobStrategy(job.strategy),
      };
    }

    if (job.tools) {
      steps.push(...setupTools(job.tools));
    }

    const userDefinedSteps = kebabCaseKeys(resolve(job.steps), false);
    steps.push(...userDefinedSteps);

    return {
      name: job.name,
      needs: arrayOrScalar(job.needs),
      "runs-on": arrayOrScalar(job.runsOnGroup) ?? arrayOrScalar(job.runsOn),
      permissions: kebabCaseKeys(job.permissions),
      environment: job.environment,
      concurrency: job.concurrency,
      outputs: renderJobOutputs(job.outputs),
      env: job.env,
      defaults: kebabCaseKeys(job.defaults),
      if: job.if,
      steps: steps.map(renderStep),
      "timeout-minutes": job.timeoutMinutes,
      strategy: renderJobStrategy(job.strategy),
      "continue-on-error": job.continueOnError,
      container: job.container,
      services: job.services,
    };
  }

  function renderJobOutputs(output: workflows.Job["outputs"]) {
    if (output == null) {
      return undefined;
    }

    const rendered: Record<string, string> = {};
    for (const [name, { stepId, outputName }] of Object.entries(output)) {
      rendered[name] = `\${{ steps.${stepId}.outputs.${outputName} }}`;
    }
    return rendered;
  }

  function renderJobStrategy(strategy: workflows.Job["strategy"]) {
    if (strategy == null) {
      return undefined;
    }

    const rendered: Record<string, unknown> = {
      "max-parallel": strategy.maxParallel,
      "fail-fast": strategy.failFast,
    };

    if (strategy.matrix) {
      const matrix: Record<string, unknown> = {
        include: strategy.matrix.include,
        exclude: strategy.matrix.exclude,
      };
      for (const [key, values] of Object.entries(
        strategy.matrix.domain ?? {}
      )) {
        if (key in matrix) {
          // A domain key was set to `include`, or `exclude`:
          throw new Error(`Illegal job strategy matrix key: ${key}`);
        }
        matrix[key] = values;
      }
      rendered.matrix = matrix;
    }

    return rendered;
  }

  function renderStep(step: workflows.JobStep) {
    return {
      name: step.name,
      id: step.id,
      if: step.if,
      uses: step.uses && actions.get(step.uses),
      env: step.env,
      run: step.run,
      with: step.with,
      "continue-on-error": step.continueOnError,
      "timeout-minutes": step.timeoutMinutes,
      "working-directory": step.workingDirectory,
    };
  }
}

function arrayOrScalar<T>(arr: T | T[] | undefined): T | T[] | undefined {
  if (!Array.isArray(arr)) {
    return arr;
  }
  if (arr == null || arr.length === 0) {
    return arr;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr;
}

function setupTools(tools: workflows.Tools) {
  const steps: workflows.JobStep[] = [];

  if (tools.java) {
    steps.push({
      uses: "actions/setup-java@v4",
      with: { distribution: "corretto", "java-version": tools.java.version },
    });
  }

  if (tools.node) {
    steps.push({
      uses: "actions/setup-node@v4",
      with: { "node-version": tools.node.version },
    });
  }

  if (tools.python) {
    steps.push({
      uses: "actions/setup-python@v5",
      with: { "python-version": tools.python.version },
    });
  }

  if (tools.go) {
    steps.push({
      uses: "actions/setup-go@v5",
      with: { "go-version": tools.go.version },
    });
  }

  if (tools.dotnet) {
    steps.push({
      uses: "actions/setup-dotnet@v4",
      with: { "dotnet-version": tools.dotnet.version },
    });
  }

  if (tools.rust) {
    steps.push({
      uses: "actions-rust-lang/setup-rust-toolchain@v1",
      with: { toolchain: tools.rust.version },
    });
  }

  if (tools.custom) {
    const customSteps = tools.custom.flatMap((tool) => tool.setupSteps());
    steps.push(...customSteps);
  }

  return steps;
}

function verifyJobConstraints(
  jobs: Record<string, workflows.Job | workflows.JobCallingReusableWorkflow>
) {
  // verify that job has a "permissions" statement to ensure workflow can
  // operate in repos with default tokens set to readonly
  for (const [id, job] of Object.entries(jobs)) {
    if (!job.permissions) {
      throw new Error(
        `${id}: all workflow jobs must have a "permissions" clause to ensure workflow can operate in restricted repositories`
      );
    }
  }
}
