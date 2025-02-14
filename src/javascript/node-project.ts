import { relative, posix } from "path";
import { Bundler, BundlerOptions } from "./bundler";
import { Jest, JestOptions } from "./jest";
import { LicenseChecker, LicenseCheckerOptions } from "./license-checker";
import {
  CodeArtifactAuthProvider as NodePackageCodeArtifactAuthProvider,
  CodeArtifactOptions,
  NodePackage,
  NodePackageManager,
  NodePackageOptions,
} from "./node-package";
import { Projenrc, ProjenrcOptions } from "./projenrc";
import { BuildWorkflow, BuildWorkflowCommonOptions } from "../build";
import { DEFAULT_ARTIFACTS_DIRECTORY } from "../build/private/consts";
import { PROJEN_DIR } from "../common";
import { DependencyType } from "../dependencies";
import {
  AutoMerge,
  DependabotOptions,
  GitHub,
  GitHubProject,
  GitHubProjectOptions,
  GitIdentity,
} from "../github";
import { DEFAULT_GITHUB_ACTIONS_USER } from "../github/constants";
import { ensureNotHiddenPath, secretToString } from "../github/private/util";
import {
  JobPermission,
  JobPermissions,
  JobStep,
  JobStepConfiguration,
  Tools,
  Triggers,
} from "../github/workflows-model";
import { IgnoreFile, IgnoreFileOptions } from "../ignore-file";
import {
  NpmConfig,
  Prettier,
  PrettierOptions,
  UpgradeDependencies,
  UpgradeDependenciesOptions,
} from "../javascript";
import { License } from "../license";
import { ProjenrcJson } from "../projenrc-json";
import {
  CodeArtifactAuthProvider as ReleaseCodeArtifactAuthProvider,
  CodeArtifactAuthProvider,
  isAwsCodeArtifactRegistry,
  NpmPublishOptions,
  Publisher,
  Release,
  ReleaseProjectOptions,
} from "../release";
import { filteredRunsOnOptions } from "../runner-options";
import { Task } from "../task";
import { deepMerge, normalizePersistedPath } from "../util";
import { ensureRelativePathStartsWithDot } from "../util/path";

const PROJEN_SCRIPT = "projen";

export interface NodeProjectOptions
  extends GitHubProjectOptions,
    NodePackageOptions,
    ReleaseProjectOptions {
  /**
   * License copyright owner.
   *
   * @default - defaults to the value of authorName or "" if `authorName` is undefined.
   */
  readonly copyrightOwner?: string;

  /**
   * The copyright years to put in the LICENSE file.
   *
   * @default - current year
   */
  readonly copyrightPeriod?: string;

  /**
   * Version of projen to install.
   *
   * @default - Defaults to the latest version.
   */
  readonly projenVersion?: string;

  /**
   * Indicates of "projen" should be installed as a devDependency.
   *
   * @default - true if not a subproject
   */
  readonly projenDevDependency?: boolean;

  /**
   * Define a GitHub workflow for building PRs.
   * @default - true if not a subproject
   */
  readonly buildWorkflow?: boolean;
  /**
   * Options for PR build workflow.
   */
  readonly buildWorkflowOptions?: BuildWorkflowOptions;

  /**
   * Automatically update files modified during builds to pull-request branches. This means
   * that any files synthesized by projen or e.g. test snapshots will always be up-to-date
   * before a PR is merged.
   *
   * Implies that PR builds do not have anti-tamper checks.
   *
   * @default true
   *
   * @deprecated - Use `buildWorkflowOptions.mutableBuild`
   */
  readonly mutableBuild?: boolean;

  /**
   * Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/
   * Uses codecov/codecov-action
   * A secret is required for private repos. Configured with `codeCovTokenSecret`
   * @default false
   */
  readonly codeCov?: boolean;

  /**
   * Define the secret name for a specified https://codecov.io/ token
   * A secret is required to send coverage for private repositories
   * @default - if this option is not specified, only public repositories are supported
   */
  readonly codeCovTokenSecret?: string;

  /**
   * DEPRECATED: renamed to `release`.
   *
   * @default - true if not a subproject
   * @deprecated see `release`.
   */
  readonly releaseWorkflow?: boolean;

  /**
   * Add release management to this project.
   *
   * @default - true (false for subprojects)
   */
  readonly release?: boolean;

  /**
   * The name of the main release branch.
   *
   * @default "main"
   */
  readonly defaultReleaseBranch: string;

  /**
   * Workflow steps to use in order to bootstrap this repo.
   *
   * @default "yarn install --frozen-lockfile && yarn projen"
   */
  readonly workflowBootstrapSteps?: JobStep[];

  /**
   * The git identity to use in workflows.
   *
   * @default - GitHub Actions
   */
  readonly workflowGitIdentity?: GitIdentity;

  /**
   * Automatically release to npm when new versions are introduced.
   * @default false
   */
  readonly releaseToNpm?: boolean;

  /**
   * The node version used in GitHub Actions workflows.
   *
   * Always use this option if your GitHub Actions workflows require a specific to run.
   *
   * @default - `minNodeVersion` if set, otherwise `lts/*`.
   */
  readonly workflowNodeVersion?: string;

  /**
   * Enable Node.js package cache in GitHub workflows.
   *
   * @default false
   */
  readonly workflowPackageCache?: boolean;

  /**
   * Use dependabot to handle dependency upgrades.
   * Cannot be used in conjunction with `depsUpgrade`.
   *
   * @default false
   */
  readonly dependabot?: boolean;

  /**
   * Options for dependabot.
   *
   * @default - default options
   */
  readonly dependabotOptions?: DependabotOptions;

  /**
   * Use tasks and github workflows to handle dependency upgrades.
   * Cannot be used in conjunction with `dependabot`.
   *
   * @default true
   */
  readonly depsUpgrade?: boolean;

  /**
   * Options for `UpgradeDependencies`.
   *
   * @default - default options
   */
  readonly depsUpgradeOptions?: UpgradeDependenciesOptions;

  /**
   * Automatically approve deps upgrade PRs, allowing them to be
   * merged by mergify (if configued).
   *
   * Throw if set to true but `autoApproveOptions` are not defined.
   *
   * @default - true
   */
  readonly autoApproveUpgrades?: boolean;

  /**
   * Defines an .npmignore file. Normally this is only needed for libraries that
   * are packaged as tarballs.
   *
   * @default true
   */
  readonly npmignoreEnabled?: boolean;

  /**
   * Configuration options for .npmignore file
   */
  readonly npmIgnoreOptions?: IgnoreFileOptions;

  /**
   * Additional entries to .npmignore.
   * @deprecated - use `project.addPackageIgnore`
   */
  readonly npmignore?: string[];

  /**
   * Include a GitHub pull request template.
   *
   * @default true
   */
  readonly pullRequestTemplate?: boolean;

  /**
   * The contents of the pull request template.
   *
   * @default - default content
   */
  readonly pullRequestTemplateContents?: string[];

  /**
   * Setup prettier.
   *
   * @default false
   */
  readonly prettier?: boolean;

  /**
   * Prettier options
   * @default - default options
   */
  readonly prettierOptions?: PrettierOptions;

  /**
   * Additional entries to .gitignore
   */
  readonly gitignore?: string[];

  /**
   * Setup jest unit tests
   * @default true
   */
  readonly jest?: boolean;

  /**
   * Jest options
   * @default - default options
   */
  readonly jestOptions?: JestOptions;

  /**
   * Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable
   * .projenrc.js generation.
   *
   * @default - true if projenrcJson is false
   */
  readonly projenrcJs?: boolean;

  /**
   * Options for .projenrc.js
   * @default - default options
   */
  readonly projenrcJsOptions?: ProjenrcOptions;

  /**
   * Options for `Bundler`.
   */
  readonly bundlerOptions?: BundlerOptions;

  /**
   * A directory which will contain build artifacts.
   *
   * @default "dist"
   */
  readonly artifactsDirectory?: string;

  /**
   * Defines a `package` task that will produce an npm tarball under the
   * artifacts directory (e.g. `dist`).
   *
   * @default true
   */
  readonly package?: boolean;

  /**
   * Build workflow triggers
   * @default "{ pullRequest: {}, workflowDispatch: {} }"
   *
   * @deprecated - Use `buildWorkflowOptions.workflowTriggers`
   */
  readonly buildWorkflowTriggers?: Triggers;

  /**
   * Configure which licenses should be deemed acceptable for use by dependencies
   *
   * This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.
   *
   * @default - no license checks are run during the build and all licenses will be accepted
   */
  readonly checkLicenses?: LicenseCheckerOptions;
}

/**
 * Build workflow options for NodeProject
 */
export interface BuildWorkflowOptions extends BuildWorkflowCommonOptions {
  /**
   * Automatically update files modified during builds to pull-request branches.
   * This means that any files synthesized by projen or e.g. test snapshots will
   * always be up-to-date before a PR is merged.
   *
   * Implies that PR builds do not have anti-tamper checks.
   *
   * @default true
   */
  readonly mutableBuild?: boolean;

  /**
   * Additional tools required for the build job.
   *
   * @default - required tools
   */
  readonly tools?: Tools;
}

/**
 * Automatic bump modes
 */
export enum AutoRelease {
  /**
   * Automatically bump & release a new version for every commit to "main"
   */
  EVERY_COMMIT,

  /**
   * Automatically bump & release a new version on a daily basis.
   */
  DAILY,
}

/**
 * Node.js project.
 *
 * @pjid node
 */
export class NodeProject extends GitHubProject {
  /**
   * API for managing the node package.
   */
  public readonly package: NodePackage;

  /**
   * The .npmignore file.
   */
  public readonly npmignore?: IgnoreFile;

  /**
   * The .npmrc file
   */
  public get npmrc(): NpmConfig {
    if (!this._npmrc) {
      this._npmrc = new NpmConfig(this, { omitEmpty: true });
    }
    return this._npmrc;
  }
  private _npmrc?: NpmConfig;

  /**
   * @deprecated use `package.allowLibraryDependencies`
   */
  public get allowLibraryDependencies(): boolean {
    return this.package.allowLibraryDependencies;
  }

  /**
   * @deprecated use `package.entrypoint`
   */
  public get entrypoint(): string {
    return this.package.entrypoint;
  }

  /**
   * Component that sets up mergify for merging approved pull requests.
   */
  public readonly autoMerge?: AutoMerge;

  /**
   * The PR build GitHub workflow. `undefined` if `buildWorkflow` is disabled.
   */
  public readonly buildWorkflow?: BuildWorkflow;

  /**
   * Package publisher. This will be `undefined` if the project does not have a
   * release workflow.
   *
   * @deprecated use `release.publisher`.
   */
  public readonly publisher?: Publisher;

  /**
   * Release management.
   */
  public readonly release?: Release;

  /**
   * The minimum node version required by this package to function.
   *
   * This value indicates the package is incompatible with older versions.
   */
  public get minNodeVersion(): string | undefined {
    return this.package.minNodeVersion;
  }

  /**
   * Maximum node version supported by this package.
   *
   * The value indicates the package is incompatible with newer versions.
   */
  public get maxNodeVersion(): string | undefined {
    return this.package.maxNodeVersion;
  }

  protected readonly nodeVersion?: string;

  /**
   * The package manager to use.
   *
   * @deprecated use `package.packageManager`
   */
  public get packageManager(): NodePackageManager {
    return this.package.packageManager;
  }

  /**
   * The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).
   */
  public readonly runScriptCommand: string;

  /**
   * The Jest configuration (if enabled)
   */
  public readonly jest?: Jest;

  /**
   * @deprecated use `package.addField(x, y)`
   */
  public get manifest() {
    return this.package.manifest;
  }

  public readonly bundler: Bundler;

  /**
   * The build output directory. An npm tarball will be created under the `js`
   * subdirectory. For example, if this is set to `dist` (the default), the npm
   * tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.
   */
  public readonly artifactsDirectory: string;

  /**
   * The location of the npm tarball after build (`${artifactsDirectory}/js`).
   */
  public readonly artifactsJavascriptDirectory: string;

  /**
   * The upgrade workflow.
   */
  public readonly upgradeWorkflow?: UpgradeDependencies;

  protected readonly workflowBootstrapSteps: JobStep[];
  private readonly workflowGitIdentity: GitIdentity;
  protected readonly workflowPackageCache: boolean;
  public readonly prettier?: Prettier;

  constructor(options: NodeProjectOptions) {
    super({
      ...options,
      // Node projects have the specific projen version locked via lockfile, so we can skip the @<VERSION> part of the top-level project
      projenCommand: options.projenCommand ?? "npx projen",
    });

    this.package = new NodePackage(this, options);
    this.workflowBootstrapSteps = options.workflowBootstrapSteps ?? [];
    this.workflowGitIdentity =
      options.workflowGitIdentity ?? DEFAULT_GITHUB_ACTIONS_USER;
    this.workflowPackageCache = options.workflowPackageCache ?? false;
    this.artifactsDirectory =
      options.artifactsDirectory ?? DEFAULT_ARTIFACTS_DIRECTORY;
    ensureNotHiddenPath(this.artifactsDirectory, "artifactsDirectory");
    const normalizedArtifactsDirectory = normalizePersistedPath(
      this.artifactsDirectory
    );
    this.artifactsJavascriptDirectory = posix.join(
      normalizedArtifactsDirectory,
      "js"
    );

    this.runScriptCommand = (() => {
      switch (this.packageManager) {
        case NodePackageManager.NPM:
          return "npm run";
        case NodePackageManager.YARN:
        case NodePackageManager.YARN2:
        case NodePackageManager.YARN_CLASSIC:
        case NodePackageManager.YARN_BERRY:
          return "yarn run";
        case NodePackageManager.PNPM:
          return "pnpm run";
        case NodePackageManager.BUN:
          return "bun run";
        default:
          throw new Error(`unexpected package manager ${this.packageManager}`);
      }
    })();

    const envCommand = (() => {
      switch (this.packageManager) {
        case NodePackageManager.PNPM:
          return '$(pnpm -c exec "node --print process.env.PATH")';
        case NodePackageManager.BUN:
          return '$(bun --eval "console.log(process.env.PATH)")';
        default:
          return '$(npx -c "node --print process.env.PATH")';
      }
    })();

    this.nodeVersion =
      options.workflowNodeVersion ?? this.package.minNodeVersion;

    // add PATH for all tasks which includes the project's npm .bin list
    this.tasks.addEnvironment("PATH", envCommand);

    this.addLicense(options);

    if (options.npmignoreEnabled ?? true) {
      this.npmignore = new IgnoreFile(
        this,
        ".npmignore",
        options.npmIgnoreOptions
      );
    }

    this.addDefaultGitIgnore();

    if (options.gitignore?.length) {
      for (const i of options.gitignore) {
        this.gitignore.exclude(i);
      }
    }

    if (options.npmignore?.length) {
      if (!this.npmignore) {
        throw new Error(
          '.npmignore is not defined for an APP project type. Add "npmIgnore: true" to override this'
        );
      }

      for (const i of options.npmignore) {
        this.npmignore.exclude(i);
      }
    }

    if (!this.ejected) {
      this.setScript(PROJEN_SCRIPT, this.package.projenCommand);
    }

    this.npmignore?.exclude(`/${PROJEN_DIR}/`);

    const projen = options.projenDevDependency ?? (this.parent ? false : true);
    if (projen && !this.ejected) {
      const postfix = options.projenVersion ? `@${options.projenVersion}` : "";
      this.addDevDeps(`projen${postfix}`);

      if (
        !this.deps.isDependencySatisfied(
          "constructs",
          DependencyType.BUILD,
          "^10.0.0"
        )
      ) {
        this.addDevDeps(`constructs@^10.0.0`);
      }
    }

    if (!options.defaultReleaseBranch) {
      throw new Error(
        '"defaultReleaseBranch" is temporarily a required option while we migrate its default value from "master" to "main"'
      );
    }

    const buildEnabled = options.buildWorkflow ?? (this.parent ? false : true);

    // configure jest if enabled
    // must be before the build/release workflows
    if (options.jest ?? true) {
      this.jest = new Jest(this, options.jestOptions);
    }

    const requiresIdTokenPermission =
      (options.scopedPackagesOptions ?? []).length > 0 &&
      options.codeArtifactOptions?.authProvider ===
        CodeArtifactAuthProvider.GITHUB_OIDC;

    const workflowPermissions: JobPermissions = {
      idToken: requiresIdTokenPermission ? JobPermission.WRITE : undefined,
    };

    const buildWorkflowOptions: BuildWorkflowOptions =
      options.buildWorkflowOptions ?? {};

    if (buildEnabled && (this.github || GitHub.of(this.root))) {
      this.buildWorkflow = new BuildWorkflow(this, {
        buildTask: this.buildTask,
        artifactsDirectory: this.artifactsDirectory,
        containerImage: options.workflowContainerImage,
        gitIdentity: this.workflowGitIdentity,
        mutableBuild: options.mutableBuild,
        workflowTriggers: options.buildWorkflowTriggers,
        permissions: workflowPermissions,
        ...buildWorkflowOptions,
        preBuildSteps: this.renderWorkflowSetup({
          installStepConfiguration: {
            workingDirectory: this.determineInstallWorkingDirectory(),
          },
          mutable:
            buildWorkflowOptions.mutableBuild ?? options.mutableBuild ?? true,
        }).concat(buildWorkflowOptions.preBuildSteps ?? []),
        postBuildSteps: [...(options.postBuildSteps ?? [])],
        ...filteredRunsOnOptions(
          options.workflowRunsOn,
          options.workflowRunsOnGroup
        ),
      });

      this.buildWorkflow.addPostBuildSteps(
        ...this.renderUploadCoverageJobStep(options)
      );
    }

    const release =
      options.release ??
      options.releaseWorkflow ??
      (this.parent ? false : true);
    if (release) {
      this.release = new Release(this, {
        versionFile: "package.json", // this is where "version" is set after bump
        task: this.buildTask,
        branch: options.defaultReleaseBranch ?? "main",
        ...options,

        artifactsDirectory: this.artifactsDirectory,
        releaseWorkflowSetupSteps: [
          ...this.renderWorkflowSetup({
            installStepConfiguration: {
              workingDirectory: this.determineInstallWorkingDirectory(),
            },
            mutable: false,
          }),
          ...(options.releaseWorkflowSetupSteps ?? []),
        ],
        postBuildSteps: [
          ...(options.postBuildSteps ?? []),
          ...this.renderUploadCoverageJobStep(options),
        ],

        workflowNodeVersion: this.nodeVersion,
        workflowPermissions,
      });

      this.publisher = this.release.publisher;

      const nodePackageToReleaseCodeArtifactAuthProviderMapping: Record<
        NodePackageCodeArtifactAuthProvider,
        ReleaseCodeArtifactAuthProvider
      > = {
        [NodePackageCodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR]:
          ReleaseCodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR,
        [NodePackageCodeArtifactAuthProvider.GITHUB_OIDC]:
          ReleaseCodeArtifactAuthProvider.GITHUB_OIDC,
      };

      if (options.releaseToNpm ?? false) {
        const codeArtifactOptions: NpmPublishOptions["codeArtifactOptions"] =
          isAwsCodeArtifactRegistry(this.package.npmRegistry)
            ? {
                accessKeyIdSecret:
                  options.codeArtifactOptions?.accessKeyIdSecret,
                secretAccessKeySecret:
                  options.codeArtifactOptions?.secretAccessKeySecret,
                roleToAssume: options.codeArtifactOptions?.roleToAssume,
                authProvider: options.codeArtifactOptions?.authProvider
                  ? nodePackageToReleaseCodeArtifactAuthProviderMapping[
                      options.codeArtifactOptions.authProvider
                    ]
                  : ReleaseCodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR,
              }
            : {};
        this.release.publisher.publishToNpm({
          registry: this.package.npmRegistry,
          npmTokenSecret: this.package.npmTokenSecret,
          npmProvenance: this.package.npmProvenance,
          codeArtifactOptions,
        });
      }
    } else {
      // validate that no release options are selected if the release workflow is disabled.
      if (options.releaseToNpm) {
        throw new Error(
          '"releaseToNpm" is not supported if "release" is not set'
        );
      }

      if (options.releaseEveryCommit) {
        throw new Error(
          '"releaseEveryCommit" is not supported if "release" is not set'
        );
      }

      if (options.releaseSchedule) {
        throw new Error(
          '"releaseSchedule" is not supported if "release" is not set'
        );
      }
    }

    if (
      (options.autoMerge ?? true) &&
      this.github?.mergify &&
      this.buildWorkflow?.buildJobIds
    ) {
      this.autoMerge = new AutoMerge(this.github, options.autoMergeOptions);
      this.autoMerge.addConditionsLater({
        render: () =>
          this.buildWorkflow?.buildJobIds.map((id) => `status-success=${id}`) ??
          [],
      });
    }

    const dependabot = options.dependabot ?? false;
    const depsUpgrade = options.depsUpgrade ?? !dependabot;

    if (dependabot && depsUpgrade) {
      throw new Error(
        "'dependabot' cannot be configured together with 'depsUpgrade'"
      );
    }

    const depsAutoApprove = options.autoApproveUpgrades ?? false;

    if (depsAutoApprove && !this.autoApprove && this.github) {
      throw new Error(
        "Automatic approval of dependencies upgrades requires configuring `autoApproveOptions`"
      );
    }

    const autoApproveLabel = (condition: boolean) =>
      condition && this.autoApprove?.label
        ? [this.autoApprove.label]
        : undefined;

    if (dependabot) {
      const defaultOptions = {
        labels: autoApproveLabel(depsAutoApprove),
      };
      this.github?.addDependabot(
        deepMerge([defaultOptions, options.dependabotOptions ?? {}])
      );
    }

    if (depsUpgrade) {
      const defaultOptions: UpgradeDependenciesOptions = {
        workflowOptions: {
          container: options.workflowContainerImage
            ? {
                image: options.workflowContainerImage,
              }
            : undefined,
          labels: autoApproveLabel(depsAutoApprove),
          gitIdentity: this.workflowGitIdentity,
          permissions: workflowPermissions,
        },
      };
      this.upgradeWorkflow = new UpgradeDependencies(
        this,
        deepMerge([defaultOptions, options.depsUpgradeOptions ?? {}])
      );
    }

    if (options.pullRequestTemplate ?? true) {
      this.github?.addPullRequestTemplate(
        ...(options.pullRequestTemplateContents ?? [])
      );
    }

    const projenrcJs = options.projenrcJs ?? !options.projenrcJson;
    if (!this.parent && projenrcJs) {
      const projenrcJsFile = new Projenrc(this, options.projenrcJsOptions);

      this.npmignore?.exclude(`/${projenrcJsFile.filePath}`);
    } else if (options.projenrcJson) {
      const projenrcJsonFile = ProjenrcJson.of(this);
      if (projenrcJsonFile) {
        this.npmignore?.exclude(`/${projenrcJsonFile.filePath}`);
      }
    }

    // add a bundler component - this enables things like Lambda bundling and in the future web bundling.
    this.bundler = new Bundler(this, options.bundlerOptions);

    const shouldPackage = options.package ?? true;
    if (release && !shouldPackage) {
      this.logger.warn(
        "When `release` is enabled, `package` must also be enabled as it is required by release. Force enabling `package`."
      );
    }
    if (release || shouldPackage) {
      this.packageTask.exec(`mkdir -p ${this.artifactsJavascriptDirectory}`);

      const pkgMgr =
        this.package.packageManager === NodePackageManager.PNPM
          ? "pnpm"
          : "npm";
      this.packageTask.exec(
        `${pkgMgr} pack --pack-destination ${this.artifactsJavascriptDirectory}`
      );
    }

    if (options.prettier ?? false) {
      this.prettier = new Prettier(this, { ...options.prettierOptions });
    }

    // For PNPM, the default resolution mode is "lowest", which leads to any non-versioned (ie '*') dependencies being
    // resolved to the lowest available version, which is unlikely to be expected behaviour for users. We set resolution
    // mode to "highest" to match the behaviour of yarn and npm.
    if (this.package.packageManager === NodePackageManager.PNPM) {
      this.npmrc.addConfig("resolution-mode", "highest");
    }

    if (options.checkLicenses) {
      new LicenseChecker(this, options.checkLicenses);
    }
  }

  private determineInstallWorkingDirectory(): string | undefined {
    if (this.parent) {
      return ensureRelativePathStartsWithDot(relative(".", this.root.outdir));
    }
    return;
  }

  private renderUploadCoverageJobStep(options: NodeProjectOptions): JobStep[] {
    // run codecov if enabled or a secret token name is passed in
    // AND jest must be configured
    if ((options.codeCov || options.codeCovTokenSecret) && this.jest?.config) {
      return [
        {
          name: "Upload coverage to Codecov",
          uses: "codecov/codecov-action@v4",
          with: options.codeCovTokenSecret
            ? {
                token: `\${{ secrets.${options.codeCovTokenSecret} }}`,
                directory: this.jest.config.coverageDirectory,
              }
            : {
                directory: this.jest.config.coverageDirectory,
              },
        },
      ];
    } else {
      return [];
    }
  }

  public addBins(bins: Record<string, string>) {
    this.package.addBin(bins);
  }

  /**
   * Replaces the contents of an npm package.json script.
   *
   * @param name The script name
   * @param command The command to execute
   */
  public setScript(name: string, command: string) {
    this.package.setScript(name, command);
  }

  /**
   * Replaces the contents of multiple npm package.json scripts.
   * @param scripts The scripts to set
   */
  public addScripts(scripts: { [name: string]: string }) {
    for (const [name, command] of Object.entries(scripts)) {
      this.package.setScript(name, command);
    }
  }

  /**
   * Removes the npm script (always successful).
   * @param name The name of the script.
   */
  public removeScript(name: string) {
    this.package.removeScript(name);
  }

  /**
   * Indicates if a script by the name name is defined.
   * @param name The name of the script
   * @deprecated Use `project.tasks.tryFind(name)`
   */
  public hasScript(name: string) {
    return this.package.hasScript(name);
  }

  /**
   * DEPRECATED
   * @deprecated use `project.compileTask.exec()`
   */
  public addCompileCommand(...commands: string[]) {
    for (const c of commands) {
      this.compileTask.exec(c);
    }
  }

  /**
   * DEPRECATED
   * @deprecated use `project.testTask.exec()`
   */
  public addTestCommand(...commands: string[]) {
    for (const c of commands) {
      this.testTask.exec(c);
    }
  }

  /**
   * Directly set fields in `package.json`.
   * @param fields The fields to set
   */
  public addFields(fields: { [name: string]: any }) {
    for (const [name, value] of Object.entries(fields)) {
      this.package.addField(name, value);
    }
  }

  /**
   * Adds keywords to package.json (deduplicated)
   * @param keywords The keywords to add
   */
  public addKeywords(...keywords: string[]) {
    this.package.addKeywords(...keywords);
  }

  /**
   * Get steps for scoped package access
   *
   * @param codeArtifactOptions Details of logging in to AWS
   * @returns array of job steps required for each private scoped packages
   */
  private getScopedPackageSteps(
    codeArtifactOptions: CodeArtifactOptions | undefined
  ): JobStep[] {
    const parsedCodeArtifactOptions = {
      accessKeyIdSecret:
        codeArtifactOptions?.accessKeyIdSecret ?? "AWS_ACCESS_KEY_ID",
      secretAccessKeySecret:
        codeArtifactOptions?.secretAccessKeySecret ?? "AWS_SECRET_ACCESS_KEY",
      roleToAssume: codeArtifactOptions?.roleToAssume,
      authProvider: codeArtifactOptions?.authProvider,
    };

    if (
      parsedCodeArtifactOptions.authProvider ===
      NodePackageCodeArtifactAuthProvider.GITHUB_OIDC
    ) {
      return [
        {
          name: "Configure AWS Credentials",
          uses: "aws-actions/configure-aws-credentials@v4",
          with: {
            "aws-region": "us-east-2",
            "role-to-assume": parsedCodeArtifactOptions.roleToAssume,
            "role-duration-seconds": 900,
          },
        },
        {
          name: "AWS CodeArtifact Login",
          run: `${this.runScriptCommand} ca:login`,
        },
      ];
    }

    if (parsedCodeArtifactOptions.roleToAssume) {
      return [
        {
          name: "Configure AWS Credentials",
          uses: "aws-actions/configure-aws-credentials@v4",
          with: {
            "aws-access-key-id": secretToString(
              parsedCodeArtifactOptions.accessKeyIdSecret
            ),
            "aws-secret-access-key": secretToString(
              parsedCodeArtifactOptions.secretAccessKeySecret
            ),
            "aws-region": "us-east-2",
            "role-to-assume": parsedCodeArtifactOptions.roleToAssume,
            "role-duration-seconds": 900,
          },
        },
        {
          name: "AWS CodeArtifact Login",
          run: `${this.runScriptCommand} ca:login`,
        },
      ];
    }

    return [
      {
        name: "AWS CodeArtifact Login",
        run: `${this.runScriptCommand} ca:login`,
        env: {
          AWS_ACCESS_KEY_ID: secretToString(
            parsedCodeArtifactOptions.accessKeyIdSecret
          ),
          AWS_SECRET_ACCESS_KEY: secretToString(
            parsedCodeArtifactOptions.secretAccessKeySecret
          ),
        },
      },
    ];
  }

  /**
   * Returns the set of workflow steps which should be executed to bootstrap a
   * workflow.
   *
   * @param options Options.
   * @returns Job steps
   */
  public renderWorkflowSetup(
    options: RenderWorkflowSetupOptions = {}
  ): JobStep[] {
    const install = new Array<JobStep>();

    // first run the workflow bootstrap steps
    install.push(...this.workflowBootstrapSteps);

    if (this.package.packageManager === NodePackageManager.PNPM) {
      install.push({
        name: "Setup pnpm",
        uses: "pnpm/action-setup@v3",
        with: { version: this.package.pnpmVersion },
      });
    } else if (this.package.packageManager === NodePackageManager.BUN) {
      install.push({
        name: "Setup bun",
        uses: "oven-sh/setup-bun@v2",
        with: { "bun-version": this.package.bunVersion },
      });
    }

    if (this.package.packageManager !== NodePackageManager.BUN) {
      if (this.nodeVersion || this.workflowPackageCache) {
        const cache =
          this.package.packageManager === NodePackageManager.YARN
            ? "yarn"
            : this.package.packageManager === NodePackageManager.YARN2
            ? "yarn"
            : this.package.packageManager === NodePackageManager.YARN_CLASSIC
            ? "yarn"
            : this.package.packageManager === NodePackageManager.YARN_BERRY
            ? "yarn"
            : this.packageManager === NodePackageManager.BUN
            ? "bun"
            : this.package.packageManager === NodePackageManager.PNPM
            ? "pnpm"
            : "npm";
        install.push({
          name: "Setup Node.js",
          uses: "actions/setup-node@v4",
          with: {
            ...(this.nodeVersion && {
              "node-version": this.nodeVersion,
            }),
            ...(this.workflowPackageCache && {
              cache,
            }),
          },
        });
      }
    }

    const mutable = options.mutable ?? false;

    if (this.package.scopedPackagesOptions) {
      install.push(
        ...this.getScopedPackageSteps(this.package.codeArtifactOptions)
      );
    }

    install.push({
      name: "Install dependencies",
      run: mutable
        ? this.package.installAndUpdateLockfileCommand
        : this.package.installCommand,
      ...(options.installStepConfiguration ?? {}),
    });

    return install;
  }

  /**
   * Defines normal dependencies.
   *
   * @param deps Names modules to install. By default, the the dependency will
   * be installed in the next `npx projen` run and the version will be recorded
   * in your `package.json` file. You can upgrade manually or using `yarn
   * add/upgrade`. If you wish to specify a version range use this syntax:
   * `module@^7`.
   */
  public addDeps(...deps: string[]) {
    return this.package.addDeps(...deps);
  }

  /**
   * Defines development/test dependencies.
   *
   * @param deps Names modules to install. By default, the the dependency will
   * be installed in the next `npx projen` run and the version will be recorded
   * in your `package.json` file. You can upgrade manually or using `yarn
   * add/upgrade`. If you wish to specify a version range use this syntax:
   * `module@^7`.
   */
  public addDevDeps(...deps: string[]) {
    return this.package.addDevDeps(...deps);
  }

  /**
   * Defines peer dependencies.
   *
   * When adding peer dependencies, a devDependency will also be added on the
   * pinned version of the declared peer. This will ensure that you are testing
   * your code against the minimum version required from your consumers.
   *
   * @param deps Names modules to install. By default, the the dependency will
   * be installed in the next `npx projen` run and the version will be recorded
   * in your `package.json` file. You can upgrade manually or using `yarn
   * add/upgrade`. If you wish to specify a version range use this syntax:
   * `module@^7`.
   */
  public addPeerDeps(...deps: string[]) {
    return this.package.addPeerDeps(...deps);
  }

  /**
   * Defines bundled dependencies.
   *
   * Bundled dependencies will be added as normal dependencies as well as to the
   * `bundledDependencies` section of your `package.json`.
   *
   * @param deps Names modules to install. By default, the the dependency will
   * be installed in the next `npx projen` run and the version will be recorded
   * in your `package.json` file. You can upgrade manually or using `yarn
   * add/upgrade`. If you wish to specify a version range use this syntax:
   * `module@^7`.
   */
  public addBundledDeps(...deps: string[]) {
    return this.package.addBundledDeps(...deps);
  }

  /**
   * Adds patterns to be ignored by npm.
   *
   * @param pattern The pattern to ignore.
   *
   * @remarks
   * If you are having trouble getting an ignore to populate, try using your construct or component's preSynthesize method to properly delay calling this method.
   */
  public override addPackageIgnore(pattern: string): void {
    this.npmignore?.addPatterns(pattern);
  }

  private addLicense(options: NodeProjectOptions) {
    if (this.package.license) {
      new License(this, {
        spdx: this.package.license,
        copyrightOwner: options.copyrightOwner ?? options.authorName,
        copyrightPeriod: options.copyrightPeriod,
      });
    }
  }

  private addDefaultGitIgnore() {
    this.gitignore.exclude(
      "# Logs",
      "logs",
      "*.log",
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      "lerna-debug.log*",

      "# Diagnostic reports (https://nodejs.org/api/report.html)",
      "report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",

      "# Runtime data",
      "pids",
      "*.pid",
      "*.seed",
      "*.pid.lock",

      "# Directory for instrumented libs generated by jscoverage/JSCover",
      "lib-cov",

      "# Coverage directory used by tools like istanbul",
      "coverage",
      "*.lcov",

      "# nyc test coverage",
      ".nyc_output",

      "# Compiled binary addons (https://nodejs.org/api/addons.html)",
      "build/Release",

      "# Dependency directories",
      "node_modules/",
      "jspm_packages/",

      "# TypeScript cache",
      "*.tsbuildinfo",

      "# Optional eslint cache",
      ".eslintcache",

      "# Output of 'npm pack'",
      "*.tgz",

      "# Yarn Integrity file",
      ".yarn-integrity",

      "# parcel-bundler cache (https://parceljs.org/)",
      ".cache"
    );
  }

  /**
   * Returns the shell command to execute in order to run a task. This will
   * typically be `npx projen TASK`.
   *
   * @param task The task for which the command is required
   */
  public runTaskCommand(task: Task) {
    return `${this.package.projenCommand} ${task.name}`;
  }

  /**
   * The job ID of the build workflow.
   */
  public get buildWorkflowJobId() {
    return this.buildWorkflow?.buildJobIds[0];
  }
}

/**
 * Options for `renderWorkflowSetup()`.
 */
export interface RenderWorkflowSetupOptions {
  /**
   * Configure the install step in the workflow setup.
   *
   * @default - `{ name: "Install dependencies" }`
   *
   * @example - { workingDirectory: "rootproject-dir" } for subprojects installing from root.
   * @example - { env: { NPM_TOKEN: "token" }} for installing from private npm registry.
   */
  readonly installStepConfiguration?: JobStepConfiguration;
  /**
   * Should the package lockfile be updated?
   * @default false
   */
  readonly mutable?: boolean;
}
