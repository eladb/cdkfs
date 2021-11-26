import { Component } from '../component';
import { Project } from '../project';
import { Dependabot, DependabotOptions } from './dependabot';
import { Mergify, MergifyOptions } from './mergify';
import { PullRequestTemplate } from './pr-template';
import { PullRequestLint, PullRequestLintOptions } from './pull-request-lint';
import { GithubWorkflow } from './workflows';

export interface GitHubOptions {
  /**
   * Whether mergify should be enabled on this repository or not.
   *
   * @default true
   */
  readonly mergify?: boolean;

  /**
   * Options for Mergify.
   *
   * @default - default options
   */
  readonly mergifyOptions?: MergifyOptions;

  /**
   * Enables GitHub workflows. If this is set to `false`, workflows will not be created.
   *
   * @default true
   */
  readonly workflows?: boolean;

  /**
   * Add a workflow that performs basic checks for pull requests, like
   * validating that PRs follow Conventional Commits.
   *
   * @default true
   */
  readonly pullRequestLint?: boolean;

  /**
   * Options for configuring a pull request linter.
   *
   * @default - see defaults in `PullRequestLintOptions`
   */
  readonly pullRequestLintOptions?: PullRequestLintOptions;
}

export class GitHub extends Component {
  /**
   * The `Mergify` configured on this repository. This is `undefined` if Mergify
   * was not enabled when creating the repository.
   */
  public readonly mergify?: Mergify;

  /**
   * Are workflows enabled?
   */
  public readonly workflowsEnabled: boolean;

  public constructor(project: Project, options: GitHubOptions = {}) {
    super(project);

    this.workflowsEnabled = options.workflows ?? true;

    if (options.mergify ?? true) {
      this.mergify = new Mergify(this, options.mergifyOptions);
    }

    if (options.pullRequestLint ?? true) {
      new PullRequestLint(this, options.pullRequestLintOptions);
    }
  }

  /**
   * All workflows.
   */
  public get workflows(): GithubWorkflow[] {
    const isWorkflow = (c: Component): c is GithubWorkflow => c instanceof GithubWorkflow;
    return this.project.components.filter(isWorkflow).sort((w1, w2) => w1.name.localeCompare(w2.name));
  }

  /**
   * Adds a workflow to the project.
   * @param name Name of the workflow
   * @returns a GithubWorkflow instance
   */
  public addWorkflow(name: string) {
    const workflow = new GithubWorkflow(this, name);
    return workflow;
  }

  public addPullRequestTemplate(...content: string[]) {
    return new PullRequestTemplate(this, { lines: content });
  }

  public addDependabot(options?: DependabotOptions) {
    return new Dependabot(this, options);
  }

  /**
   * Finds a GitHub workflow by name. Returns `undefined` if the workflow cannot be found.
   * @param name The name of the GitHub workflow
   */
  public tryFindWorkflow(name: string): undefined | GithubWorkflow {
    return this.workflows.find(w => w.name === name);
  }
}
