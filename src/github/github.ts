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

  private readonly _workflows: { [name: string]: GithubWorkflow };

  public constructor(project: Project, options: GitHubOptions = {}) {
    super(project);

    this.workflowsEnabled = options.workflows ?? true;
    this._workflows = {};

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
  public get workflows() {
    return Object.values(this._workflows);
  }

  /**
   * Adds a workflow to the project.
   * @param name Name of the workflow
   * @returns a GithubWorkflow instance
   */
  public addWorkflow(name: string) {
    if (this._workflows[name]) {
      throw new Error(`A workflow with the name ${name} already exists.`);
    }
    const workflow = new GithubWorkflow(this, name);
    this._workflows[name] = workflow;
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
    return this._workflows[name];
  }
}
