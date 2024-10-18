import { GitHub } from "./github";
import { Component } from "../component";
import { snakeCaseKeys } from "../util";
import { YamlFile } from "../yaml";

/**
 * See github.com/app/settings for details
 */
export const REPOSITORY_TOPICS = "projen-managed";

/////////////////////////// L1

/**
 * See https://docs.github.com/en/rest/reference/repos#update-a-repository for all available settings.
 */
export interface L1Repository {
  /**
   * The name of the repository. Changing this will rename the repository.
   */
  readonly name?: string;
  /**
   * A short description of the repository that will show up on GitHub
   */
  readonly description?: string;
  /**
   * A URL with more information about the repository
   */
  readonly homepage?: string;
  /**
   * A comma-separated list of topics to set on the repository
   */
  readonly topics?: string;
  /**
   * Either `true` to make the repository private, or `false` to make it public.
   * @default - false
   */
  readonly private?: boolean;
  /**
   * Either `true` to enable issues for this repository, `false` to disable them.
   *
   * @default true We default to using Renovate, so we need issues.
   */
  readonly has_issues?: boolean;
  /**
   * Either `true` to enable projects for this repository, or `false` to disable them.
   * If projects are disabled for the organization, passing `true` will cause an API error.
   *
   * @default true We us projects to track library updates
   */
  readonly has_projects?: boolean;
  /**
   * Either `true` to enable the wiki for this repository, `false` to disable it.
   * @default - false
   */
  readonly has_wiki?: boolean;
  /**
   * Either `true` to enable downloads for this repository, `false` to disable them.
   * @default - false
   */
  readonly has_downloads?: boolean;
  /**
   * Updates the default branch for this repository.
   * @default 'main'
   */
  readonly default_branch?: string;
  /**
   * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
   * @default true we generally prefer squash merges with Conventional Commits to drive SemVer.
   */
  readonly allow_squash_merge?: boolean;
  /**
   * Either `true` to allow merging pull requests with a merge commit, or `false`
   * to prevent merging pull requests with merge commits.
   * @default - false
   */
  readonly allow_merge_commit?: boolean;
  /**
   * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
   * @default - false
   */
  readonly allow_rebase_merge?: boolean;
  /**
   * Either `true` to enable automatic deletion of branches on merge, or `false` to disable
   * @default true
   */
  readonly delete_branch_on_merge?: boolean;
  /**
   * Either `true` to enable automated security fixes, or `false` to disable automated security fixes.
   * @default - false
   */
  readonly enable_automated_security_fixes?: boolean;
  /**
   * Either `true` to enable vulnerability alerts, or `false` to disable vulnerability alerts.
   * @default - false
   */
  readonly enable_vulnerability_alerts?: boolean;
}

export interface L1Label {
  readonly name: string;
  /**
   * Example `color: CC0000`
   * If including a `#`, make sure to wrap it with quotes!
   * For example `color: "'#336699'"`
   */
  readonly color?: string;
  readonly description?: string;
  readonly new_name?: string;
}

export interface L1Milestone {
  readonly title: string;
  readonly description: string;
  /**
   * The state of the milestone. Either `open` or `closed`
   */
  readonly state: string;
}

export interface L1Collaborator {
  readonly username: string;
  /**
   * Note: `permission` is only valid on organization-owned repositories.
   * The permission to grant the collaborator. Can be one of:
   * * `pull` - can pull, but not push to or administer this repository.
   * * `push` - can pull and push, but not administer this repository.
   * * `admin` - can pull, push and administer this repository.
   * * `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
   * * `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
   */
  readonly permission: string;
}

export interface L1Team {
  readonly name: string;
  /**
   * The permission to grant the team. Can be one of:
   * * `pull` - can pull, but not push to or administer this repository.
   * * `push` - can pull and push, but not administer this repository.
   * * `admin` - can pull, push and administer this repository.
   * * `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
   * * `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
   */
  readonly permission: string;
}

/**
 * Specify which users and teams can dismiss pull request reviews.
 * Pass an empty dismissal_restrictions object to disable.
 * User and team dismissal_restrictions are only available for organization-owned repositories.
 * Omit this parameter for personal repositories.
 */
export interface L1PullRequestDismissalRestrictions {
  readonly users: string[];
  readonly teams: string[];
}

/**
 *
 */
export interface L1PullRequestReview {
  /**
   * The number of approvals required. (1-6)
   */
  readonly required_approving_review_count?: number;
  /**
   * Dismiss approved reviews automatically when a new commit is pushed.
   */
  readonly dismiss_stale_reviews?: boolean;
  /**
   * Blocks merge until code owners have reviewed.
   */
  readonly require_code_owner_reviews?: boolean;
  /**
   * Specify which users and teams can dismiss pull request reviews.
   * Pass an empty dismissal_restrictions object to disable.
   * User and team dismissal_restrictions are only available for organization-owned repositories.
   * Omit this parameter for personal repositories.
   */
  readonly dismissal_restrictions?: L1PullRequestDismissalRestrictions;
}

/**
 * Required.
 * Require status checks to pass before merging.
 * Set to null to disable
 */
export interface L1PullRequestRequiredStatusChecks {
  /**
   * Required.
   * Require branches to be up to date before merging.
   */
  readonly strict?: boolean;
  /**
   * Required.
   * The list of status checks to require in order to merge into this branch
   */
  readonly contexts: string[];
}

/**
 * Required.
 * Restrict who can push to this branch.
 * Team and user restrictions are only available for organization-owned repositories.
 * Set to null to disable.
 */
export interface L1PullRequestPushRestrictions {
  apps: string[];
  users: string[];
  teams: string[];
}

/**
 * Branch Protection settings.
 * Set to null to disable.
 */
export interface L1BranchProtection {
  /**
   * Required.
   * Require at least one approving review on a pull request, before merging.
   * Set to null to disable.
   */
  readonly required_pull_request_reviews: L1PullRequestReview;
  /**
   * Required.
   * Require status checks to pass before merging.
   * Set to null to disable
   */
  readonly required_status_checks: L1PullRequestRequiredStatusChecks;
  /**
   * Required.
   * Enforce all configured restrictions for administrators.
   * Set to true to enforce required status checks for repository administrators.
   * Set to null to disable.
   */
  readonly enforce_admins?: boolean;
  /**
   * Prevent merge commits from being pushed to matching branches
   */
  readonly required_linear_history?: boolean;
  /**
   * Required.
   * Restrict who can push to this branch.
   * Team and user restrictions are only available for organization-owned repositories.
   * Set to null to disable.
   */
  readonly restrictions: L1PullRequestPushRestrictions;
}

export interface IL1Branches {
  readonly name: string;
  /**
   * https://docs.github.com/en/rest/reference/repos#update-branch-protection
   * Branch Protection settings. Set to null to disable
   */
  readonly protection?: L1BranchProtection;
}

export interface IL1Options {
  /**
   * Repository specific settings.
   */
  readonly repository?: L1Repository;
  /**
   * Labels: define labels for Issues and Pull Requests
   */
  readonly labels?: L1Label[];
  /**
   * Milestones: define milestones for Issues and Pull Requests
   */
  readonly milestones?: L1Milestone[];
  /**
   * Collaborators: give specific users access to this repository.
   * See https://docs.github.com/en/rest/reference/repos#add-a-repository-collaborator for available options
   */
  readonly collaborators?: L1Collaborator[];
  /**
   * See https://docs.github.com/en/rest/reference/teams#add-or-update-team-repository-permissions for available options
   */
  readonly teams?: L1Team[];
  /**
   * See WRITEME
   */
  readonly branches?: IL1Branches[];
}



/////////////////////////// L2

/**
 * The state of a milestone.
 */
export enum MilestoneState {
  /**
   * An `open` milestone.
   */
  OPEN = 'open',
  /**
   * A `closed` milestone.
   */
  CLOSED = 'closed',
}

/**
 * Note: `permission` is only valid on organization-owned repositories.
 * The permission to grant the collaborator. Can be one of:
 * * `pull` - can pull, but not push to or administer this repository.
 * * `push` - can pull and push, but not administer this repository.
 * * `admin` - can pull, push and administer this repository.
 * * `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
 * * `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
 */

export enum GithubPermission {
  /**
   * can pull, but not push to or administer this repository.
   */
  PULL = 'pull',
  /**
   * can pull and push, but not administer this repository.
   */
  PUSH = 'push',
  /**
   * can pull, push and administer this repository.
   */
  ADMIN = 'admin',
  /**
   * Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.
   */
  MAINTAIN = 'maintain',
  /**
   * Recommended for contributors who need to proactively manage issues and pull requests without write access.
   */
  TRIAGE = 'triage',
}



export interface SettingsOptions {


}

export class Settings extends Component {

  private rendered: IL1Options;

  private yamlFile?: YamlFile;

  constructor(github: GitHub, options: SettingsOptions = {}) {
    super(github.project);

  }

  private createYamlFile() {
    if (this.yamlFile == null) {
      this.yamlFile = new YamlFile(this.project, ".github/settings.yml", {
        obj: this.rendered,
        // Mergify needs to read the file from the repository in order to work.
        committed: true,
      });
    }
  }

  public addRule(rule: MergifyRule) {
    this.rules.push(rule);
    this.createYamlFile();
  }

  public addQueue(queue: MergifyQueue) {
    this.queues.push(queue);
    this.createYamlFile();
  }
}
