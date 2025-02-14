import {
  accessSync,
  constants,
  existsSync,
  readdirSync,
  readFileSync,
} from "fs";
import { join, resolve } from "path";
import { Node } from "constructs";
import * as semver from "semver";
import {
  extractCodeArtifactDetails,
  minVersion,
  tryResolveDependencyVersion,
} from "./util";
import { Yarnrc, YarnrcOptions } from "./yarnrc";
import { resolve as resolveJson } from "../_resolve";
import { Component } from "../component";
import { DependencyType } from "../dependencies";
import { JsonFile } from "../json";
import { Project } from "../project";
import { isAwsCodeArtifactRegistry } from "../release";
import { Task } from "../task";
import { TaskRuntime } from "../task-runtime";
import { isTruthy, normalizePersistedPath, sorted, writeFile } from "../util";

const UNLICENSED = "UNLICENSED";
const DEFAULT_NPM_REGISTRY_URL = "https://registry.npmjs.org/";
const GITHUB_PACKAGES_REGISTRY = "npm.pkg.github.com";
const DEFAULT_NPM_TOKEN_SECRET = "NPM_TOKEN";
const DEFAULT_GITHUB_TOKEN_SECRET = "GITHUB_TOKEN";

export interface NodePackageOptions {
  /**
   * The "name" in package.json
   * @default - defaults to project name
   * @featured
   */
  readonly packageName?: string;
  /**
   * The description is just a string that helps people understand the purpose of the package.
   * It can be used when searching for packages in a package manager as well.
   * See https://classic.yarnpkg.com/en/docs/package-json/#toc-description
   * @featured
   */
  readonly description?: string;

  /**
   * Runtime dependencies of this module.
   *
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   *
   * @example [ 'express', 'lodash', 'foo@^2' ]
   * @default []
   * @featured
   */
  readonly deps?: string[];

  /**
   * Build dependencies for this module. These dependencies will only be
   * available in your build environment but will not be fetched when this
   * module is consumed.
   *
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   *
   * @example [ 'typescript', '@types/express' ]
   * @default []
   * @featured
   */
  readonly devDeps?: string[];

  /**
   * Peer dependencies for this module. Dependencies listed here are required to
   * be installed (and satisfied) by the _consumer_ of this library. Using peer
   * dependencies allows you to ensure that only a single module of a certain
   * library exists in the `node_modules` tree of your consumers.
   *
   * Note that prior to npm@7, peer dependencies are _not_ automatically
   * installed, which means that adding peer dependencies to a library will be a
   * breaking change for your customers.
   *
   * Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
   * enabled by default), projen will automatically add a dev dependency with a
   * pinned version for each peer dependency. This will ensure that you build &
   * test your module against the lowest peer version required.
   *
   * @default []
   */
  readonly peerDeps?: string[];

  /**
   * List of dependencies to bundle into this module. These modules will be
   * added both to the `dependencies` section and `bundledDependencies` section of
   * your `package.json`.
   *
   * The recommendation is to only specify the module name here (e.g.
   * `express`). This will behave similar to `yarn add` or `npm install` in the
   * sense that it will add the module as a dependency to your `package.json`
   * file with the latest version (`^`). You can specify semver requirements in
   * the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
   * this will be what you `package.json` will eventually include.
   */
  readonly bundledDeps?: string[];

  /**
   * Options for `peerDeps`.
   */
  readonly peerDependencyOptions?: PeerDependencyOptions;

  /**
   * Allow the project to include `peerDependencies` and `bundledDependencies`.
   * This is normally only allowed for libraries. For apps, there's no meaning
   * for specifying these.
   *
   * @default true
   */
  readonly allowLibraryDependencies?: boolean;

  /**
   * Keywords to include in `package.json`.
   */
  readonly keywords?: string[];

  /**
   * Module entrypoint (`main` in `package.json`)
   *
   * Set to an empty string to not include `main` in your package.json
   *
   * @default "lib/index.js"
   */
  readonly entrypoint?: string;

  /**
   * Binary programs vended with your module.
   *
   * You can use this option to add/customize how binaries are represented in
   * your `package.json`, but unless `autoDetectBin` is `false`, every
   * executable file under `bin` will automatically be added to this section.
   */
  readonly bin?: Record<string, string>;

  /**
   * Automatically add all executables under the `bin` directory to your
   * `package.json` file under the `bin` section.
   *
   * @default true
   */
  readonly autoDetectBin?: boolean;

  /**
   * npm scripts to include. If a script has the same name as a standard script,
   * the standard script will be overwritten.
   * Also adds the script as a task.
   *
   * @default {}
   * @deprecated use `project.addTask()` or `package.setScript()`
   */
  readonly scripts?: { [name: string]: string };

  /**
   * The Node Package Manager used to execute scripts
   *
   * @default NodePackageManager.YARN_CLASSIC
   */
  readonly packageManager?: NodePackageManager;

  /**
   * The repository is the location where the actual code for your package lives.
   * See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository
   */
  readonly repository?: string;

  /**
   * If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
   * you can specify the directory in which it lives.
   */
  readonly repositoryDirectory?: string;

  /**
   * Author's name
   */
  readonly authorName?: string;

  /**
   * Author's e-mail
   */
  readonly authorEmail?: string;

  /**
   * Author's URL / Website
   */
  readonly authorUrl?: string;

  /**
   * Is the author an organization
   */
  readonly authorOrganization?: boolean;

  /**
   * Package's Homepage / Website
   */
  readonly homepage?: string;

  /**
   * Package's Stability
   */
  readonly stability?: string;

  /**
   * The minimum node version required by this package to function.
   * Most projects should not use this option.
   *
   * The value indicates that the package is incompatible with any older versions of node.
   * This requirement is enforced via the engines field.
   *
   * You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
   * Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
   * Setting this option has very high impact on the consumers of your package,
   * as package managers will actively prevent usage with node versions you have marked as incompatible.
   *
   * To change the node version of your CI/CD workflows, use `workflowNodeVersion`.
   *
   * @default - no minimum version is enforced

   */
  readonly minNodeVersion?: string;

  /**
   * The maximum node version supported by this package.
   * Most projects should not use this option.
   *
   * The value indicates that the package is incompatible with any newer versions of node.
   * This requirement is enforced via the engines field.
   *
   * You will normally not need to set this option.
   * Consider this option only if your package is known to not function with newer versions of node.
   *
   * @default - no maximum version is enforced
   */
  readonly maxNodeVersion?: string;

  /**
   * The version of PNPM to use if using PNPM as a package manager.
   *
   * @default "9"
   */
  readonly pnpmVersion?: string;

  /**
   * The version of Bun to use if using Bun as a package manager.
   *
   * @default "latest"
   */
  readonly bunVersion?: string;

  /**
   * License's SPDX identifier.
   * See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
   * Use the `licensed` option if you want to no license to be specified.
   *
   * @default "Apache-2.0"
   */
  readonly license?: string;

  /**
   * Indicates if a license should be added.
   *
   * @default true
   */
  readonly licensed?: boolean;

  /**
   * The base URL of the npm package registry.
   *
   * Must be a URL (e.g. start with "https://" or "http://")
   *
   * @default "https://registry.npmjs.org"
   */
  readonly npmRegistryUrl?: string;

  /**
   * The host name of the npm registry to publish to. Cannot be set together with `npmRegistryUrl`.
   *
   * @deprecated use `npmRegistryUrl` instead
   */
  readonly npmRegistry?: string;

  /**
   * The url to your project's issue tracker.
   */
  readonly bugsUrl?: string;

  /**
   * The email address to which issues should be reported.
   */
  readonly bugsEmail?: string;

  /**
   * Access level of the npm package.
   *
   * @default - for scoped packages (e.g. `foo@bar`), the default is
   * `NpmAccess.RESTRICTED`, for non-scoped packages, the default is
   * `NpmAccess.PUBLIC`.
   */
  readonly npmAccess?: NpmAccess;

  /**
   * Should provenance statements be generated when the package is published.
   *
   * A supported package manager is required to publish a package with npm provenance statements and
   * you will need to use a supported CI/CD provider.
   *
   * Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
   * which is using npm internally and supports provenance statements independently of the package manager used.
   *
   * @see https://docs.npmjs.com/generating-provenance-statements
   * @default - true for public packages, false otherwise
   */
  readonly npmProvenance?: boolean;

  /**
   * GitHub secret which contains the NPM token to use when publishing packages.
   *
   * @default "NPM_TOKEN"
   */
  readonly npmTokenSecret?: string;

  /**
   * Options for npm packages using AWS CodeArtifact.
   * This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact
   *
   * @default - undefined
   */
  readonly codeArtifactOptions?: CodeArtifactOptions;

  /**
   * Options for privately hosted scoped packages
   *
   * @default - fetch all scoped packages from the public npm registry
   */
  readonly scopedPackagesOptions?: ScopedPackagesOptions[];

  /**
   * Options for Yarn Berry
   *
   * @default - Yarn Berry v4 with all default options
   */
  readonly yarnBerryOptions?: YarnBerryOptions;
}

/**
 * Options for authorizing requests to a AWS CodeArtifact npm repository.
 */
export enum CodeArtifactAuthProvider {
  /**
   * Fixed credentials provided via Github secrets.
   */
  ACCESS_AND_SECRET_KEY_PAIR = "ACCESS_AND_SECRET_KEY_PAIR",

  /**
   * Ephemeral credentials provided via Github's OIDC integration with an IAM role.
   * See:
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
   * https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services
   */
  GITHUB_OIDC = "GITHUB_OIDC",
}

/**
 * Options for publishing npm packages to AWS CodeArtifact.
 */
export interface CodeArtifactOptions {
  /**
   * Provider to use for authorizing requests to AWS CodeArtifact.
   *
   * @default CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR
   */
  readonly authProvider?: CodeArtifactAuthProvider;

  /**
   * GitHub secret which contains the AWS access key ID to use when publishing packages to AWS CodeArtifact.
   * This property must be specified only when publishing to AWS CodeArtifact (`npmRegistryUrl` contains AWS CodeArtifact URL).
   *
   * @default - When the `authProvider` value is set to
   * `CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR`, the default is
   * "AWS_ACCESS_KEY_ID". For `CodeArtifactAuthProvider.GITHUB_OIDC`, this
   * value must be left undefined.
   */
  readonly accessKeyIdSecret?: string;

  /**
   * GitHub secret which contains the AWS secret access key to use when publishing packages to AWS CodeArtifact.
   * This property must be specified only when publishing to AWS CodeArtifact (`npmRegistryUrl` contains AWS CodeArtifact URL).
   *
   * @default - When the `authProvider` value is set to
   * `CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR`, the default is
   * "AWS_SECRET_ACCESS_KEY". For `CodeArtifactAuthProvider.GITHUB_OIDC`, this
   * value must be left undefined.
   */
  readonly secretAccessKeySecret?: string;

  /**
   * ARN of AWS role to be assumed prior to get authorization token from AWS CodeArtifact
   * This property must be specified only when publishing to AWS CodeArtifact (`registry` contains AWS CodeArtifact URL).
   * When using the `CodeArtifactAuthProvider.GITHUB_OIDC` auth provider, this value must be defined.
   *
   * @default undefined
   */
  readonly roleToAssume?: string;
}

/**
 * Options for scoped packages
 */
export interface ScopedPackagesOptions {
  /**
   * Scope of the packages
   *
   * @example "@angular"
   */
  readonly scope: string;

  /**
   * URL of the registry for scoped packages
   */
  readonly registryUrl: string;
}

/**
 * Represents the npm `package.json` file.
 */
export class NodePackage extends Component {
  /**
   * Returns the `NodePackage` instance associated with a project or `undefined` if
   * there is no NodePackage.
   * @param project The project
   * @returns A NodePackage, or undefined
   */
  public static of(project: Project): NodePackage | undefined {
    const isIt = (o: Component): o is NodePackage => o instanceof NodePackage;
    return project.components.find(isIt);
  }

  /**
   * The name of the npm package.
   */
  public readonly packageName: string;

  /**
   * The module's entrypoint (e.g. `lib/index.js`).
   */
  public readonly entrypoint: string;

  /**
   * Allow project to take library dependencies.
   */
  public readonly allowLibraryDependencies: boolean;

  /**
   * The package manager to use.
   */
  public packageManager: NodePackageManager;

  /**
   * @deprecated use `addField(x, y)`
   */
  public readonly manifest: any;

  /**
   * The minimum node version required by this package to function.
   *
   * This value indicates the package is incompatible with older versions.
   */
  public readonly minNodeVersion?: string;

  /**
   * Maximum node version supported by this package.
   *
   * The value indicates the package is incompatible with newer versions.
   */
  public readonly maxNodeVersion?: string;

  /**
   * The version of PNPM to use if using PNPM as a package manager.
   */
  public readonly pnpmVersion?: string;

  /**
   * The version of Bun to use if using Bun as a package manager.
   */
  public readonly bunVersion?: string;

  /**
   * The SPDX license of this module. `undefined` if this package is not licensed.
   */
  public readonly license?: string;

  /**
   * npm registry (e.g. `https://registry.npmjs.org`). Use `npmRegistryHost` to get just the host name.
   */
  public readonly npmRegistryUrl: string;

  /**
   * The npm registry host (e.g. `registry.npmjs.org`).
   */
  public readonly npmRegistry: string;

  /**
   * GitHub secret which contains the NPM token to use when publishing packages.
   */
  public readonly npmTokenSecret?: string;

  /**
   * Options for npm packages using AWS CodeArtifact.
   * This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact
   *
   * @default - undefined
   */
  readonly codeArtifactOptions?: CodeArtifactOptions;

  /**
   * Options for privately hosted scoped packages
   *
   * @default undefined
   */
  readonly scopedPackagesOptions?: ScopedPackagesOptions[];

  /**
   * npm package access level.
   */
  public readonly npmAccess: NpmAccess;

  /**
   * Should provenance statements be generated when package is published.
   */
  public readonly npmProvenance: boolean;

  /**
   * The name of the lock file.
   */
  public lockFile: string;

  /**
   * The task for installing project dependencies (non-frozen)
   */
  public readonly installTask: Task;

  /**
   * The task for installing project dependencies (frozen)
   */
  public readonly installCiTask: Task;

  /**
   * The package.json file.
   */
  public readonly file: JsonFile;

  private readonly scripts: Record<string, string> = {};
  private readonly scriptsToBeRemoved = new Set<string>();
  private readonly keywords: Set<string> = new Set();
  private readonly bin: Record<string, string> = {};
  private readonly engines: Record<string, string> = {};
  private readonly peerDependencyOptions: PeerDependencyOptions;
  private readonly _prev?: Record<string, any>;
  private _renderedDeps?: NpmDependencies;
  private yarnrcNode?: Node;

  constructor(project: Project, options: NodePackageOptions = {}) {
    super(project);

    this.packageName = options.packageName ?? project.name;
    this.peerDependencyOptions = {
      pinnedDevDependency: true,
      ...options.peerDependencyOptions,
    };
    this.allowLibraryDependencies = options.allowLibraryDependencies ?? true;
    this.packageManager = NodePackageManager.YARN_CLASSIC;
    this.entrypoint = options.entrypoint ?? "lib/index.js";
    this.lockFile = determineLockfile(this.packageManager);

    this.project.annotateGenerated(`/${this.lockFile}`);

    const {
      npmAccess,
      npmRegistry,
      npmRegistryUrl,
      npmTokenSecret,
      codeArtifactOptions,
      scopedPackagesOptions,
      npmProvenance,
    } = this.parseNpmOptions(options);
    this.npmAccess = npmAccess;
    this.npmRegistry = npmRegistry;
    this.npmRegistryUrl = npmRegistryUrl;
    this.npmTokenSecret = npmTokenSecret;
    this.codeArtifactOptions = codeArtifactOptions;
    this.scopedPackagesOptions = scopedPackagesOptions;
    this.npmProvenance = npmProvenance;

    this.processDeps(options);

    this._prev = this.readPackageJson();

    // empty objects are here to preserve order for backwards compatibility
    this.manifest = {
      name: this.packageName,
      description: options.description,
      repository: !options.repository
        ? undefined
        : {
            type: "git",
            url: options.repository,
            directory: options.repositoryDirectory,
          },
      bin: () => this.renderBin(),
      scripts: () => this.renderScripts(),
      author: this.renderAuthor(options),
      devDependencies: {},
      peerDependencies: {},
      dependencies: {},
      bundledDependencies: [],
      keywords: () => this.renderKeywords(),
      engines: () => this.renderEngines(),
      main: this.entrypoint !== "" ? this.entrypoint : undefined,
      license: () => this.license ?? UNLICENSED,
      homepage: options.homepage,
      publishConfig: () => this.renderPublishConfig(),
      typesVersions: this._prev?.typesVersions,

      // in release CI builds we bump the version before we run "build" so we want
      // to preserve the version number. otherwise, we always set it to 0.0.0
      version: this.determineVersion(this._prev?.version),
      bugs:
        options.bugsEmail || options.bugsUrl
          ? {
              email: options.bugsEmail,
              url: options.bugsUrl,
            }
          : undefined,
    };

    this.renderPackageResolutions();

    if (options.packageManager) {
      this.setPackageManager(options.packageManager, options.yarnBerryOptions);
    }

    // add tasks for scripts from options (if specified)
    // @deprecated
    for (const [cmdname, shell] of Object.entries(options.scripts ?? {})) {
      project.addTask(cmdname, { exec: shell });
    }

    this.file = new JsonFile(this, "package.json", {
      obj: this.manifest,
      readonly: false, // we want "yarn add" to work and we have anti-tamper
      newline: true, // all package managers prefer a newline, see https://github.com/projen/projen/issues/2076
      committed: true, // needs to be committed so users can install the dependencies
    });

    this.addKeywords(...(options.keywords ?? []));
    this.addBin(options.bin ?? {});

    // automatically add all executable files under "bin"
    if (options.autoDetectBin ?? true) {
      this.autoDiscoverBinaries();
    }

    // node version
    this.minNodeVersion = options.minNodeVersion;
    this.maxNodeVersion = options.maxNodeVersion;
    this.pnpmVersion = options.pnpmVersion ?? "9";
    this.bunVersion = options.bunVersion ?? "latest";
    this.addNodeEngine();

    this.addCodeArtifactLoginScript();

    // license
    if (options.licensed ?? true) {
      this.license = options.license ?? "Apache-2.0";
    }

    this.installTask = project.addTask("install", {
      description:
        "Install project dependencies and update lockfile (non-frozen)",
      exec: this.installAndUpdateLockfileCommand,
    });

    this.installCiTask = project.addTask("install:ci", {
      description: "Install project dependencies using frozen lockfile",
      exec: this.installCommand,
    });
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
    for (const dep of deps) {
      this.project.deps.addDependency(dep, DependencyType.RUNTIME);
    }
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
    for (const dep of deps) {
      this.project.deps.addDependency(dep, DependencyType.BUILD);
    }
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
    if (Object.keys(deps).length && !this.allowLibraryDependencies) {
      throw new Error(
        `cannot add peer dependencies to an APP project: ${Object.keys(
          deps
        ).join(",")}`
      );
    }

    for (const dep of deps) {
      this.project.deps.addDependency(dep, DependencyType.PEER);
    }
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
    if (deps.length && !this.allowLibraryDependencies) {
      throw new Error(
        `cannot add bundled dependencies to an APP project: ${deps.join(",")}`
      );
    }

    for (const dep of deps) {
      this.project.deps.addDependency(dep, DependencyType.BUNDLED);
    }
  }

  /**
   * Adds an `engines` requirement to your package.
   * @param engine The engine (e.g. `node`)
   * @param version The semantic version requirement (e.g. `^10`)
   */
  public addEngine(engine: string, version: string) {
    this.engines[engine] = version;
  }

  /**
   * Adds keywords to package.json (deduplicated)
   * @param keywords The keywords to add
   */
  public addKeywords(...keywords: string[]) {
    for (const k of keywords) {
      this.keywords.add(k);
    }
  }

  public addBin(bins: Record<string, string>) {
    for (const [k, v] of Object.entries(bins)) {
      this.bin[k] = v;
    }
  }

  /**
   * Add a npm package.json script.
   *
   * @param name The script name
   * @param command The command to execute
   */
  public setScript(name: string, command: string) {
    this.scripts[name] = command;
  }

  /**
   * Sets the package manager for the project and configures it accordingly.
   *
   * @param packageManager - The Node Package Manager used to execute scripts.
   * @param yarnBerryOptions - Optional configuration options for Yarn Berry.
   */
  public setPackageManager(
    packageManager: NodePackageManager,
    yarnBerryOptions?: YarnBerryOptions
  ) {
    this.packageManager = packageManager;
    this.project.unannotateGenerated(`/${this.lockFile}`);
    this.lockFile = determineLockfile(this.packageManager);
    this.project.annotateGenerated(`/${this.lockFile}`);

    this.renderPackageResolutions();

    // Configure Yarn Berry if using
    this.resetYarnBerryConfiguration(this.project);
    if (
      this.packageManager === NodePackageManager.YARN_BERRY ||
      this.packageManager === NodePackageManager.YARN2
    ) {
      this.configureYarnBerry(this.project, { yarnBerryOptions });
    }
  }

  /**
   * Removes an npm script (always successful).
   *
   * @param name The name of the script.
   */
  public removeScript(name: string) {
    // need to keep track in case there's a task of the same name
    this.scriptsToBeRemoved.add(name);
    delete this.scripts[name];
  }

  /**
   * Indicates if a script by the given name is defined.
   * @param name The name of the script
   * @deprecated Use `project.tasks.tryFind(name)`
   */
  public hasScript(name: string) {
    return this.project.tasks.tryFind(name) !== undefined;
  }

  /**
   * Directly set fields in `package.json`.
   * @escape
   * @param name field name
   * @param value field value
   */
  public addField(name: string, value: any) {
    this.manifest[name] = value;
  }

  /**
   * Directly remove a field from `package.json`.
   * @escape
   * @param name field name
   */
  public removeField(name: string) {
    delete this.manifest[name];
  }

  /**
   * Sets the package version.
   * @param version Package version.
   */
  public addVersion(version: string) {
    this.manifest.version = version;
  }

  /**
   * Defines resolutions for dependencies to change the normally resolved
   * version of a dependency to something else.
   *
   * @param resolutions Names resolutions to be added. Specify a version or
   * range with this syntax:
   * `module@^7`
   */
  public addPackageResolutions(...resolutions: string[]) {
    for (const resolution of resolutions) {
      this.project.deps.addDependency(resolution, DependencyType.OVERRIDE);
    }
  }

  /**
   * Returns the command to execute in order to install all dependencies (always frozen).
   */
  public get installCommand() {
    return this.renderInstallCommand(true);
  }

  /**
   * Renders `yarn install` or `npm install` with lockfile update (not frozen)
   */
  public get installAndUpdateLockfileCommand() {
    return this.renderInstallCommand(false);
  }

  /**
   * Attempt to resolve the currently installed version for a given dependency.
   *
   * @remarks
   * This method will first look through the current project's dependencies.
   * If found and semantically valid (not '*'), that will be used.
   * Otherwise, it will fall back to locating a `package.json` manifest for the dependency
   * through node's internal resolution reading the version from there.
   *
   * @param dependencyName Dependency to resolve for.
   */
  public tryResolveDependencyVersion(
    dependencyName: string
  ): string | undefined {
    try {
      const fromDeps = this.project.deps.tryGetDependency(dependencyName);
      const version = semver.coerce(fromDeps?.version, { loose: true });
      if (version) {
        return version.format();
      }
    } catch {}
    return tryResolveDependencyVersion(dependencyName, {
      paths: [this.project.outdir],
    });
  }

  // ---------------------------------------------------------------------------------------
  public synthesize() {
    this._renderedDeps = this.renderDependencies();
    super.synthesize();
  }

  public postSynthesize() {
    super.postSynthesize();

    // only run "install" if package.json has changed or if we don't have a
    // `node_modules` directory.
    if (
      this.file.changed ||
      !existsSync(join(this.project.outdir, "node_modules"))
    ) {
      this.installDependencies();
    }

    // resolve "*" deps in package.json and update it. if it was changed,
    // install deps again so that lockfile is updated.
    if (this.resolveDepsAndWritePackageJson()) {
      this.installDependencies();
    }
  }

  /**
   * The command which executes "projen".
   * @deprecated use `project.projenCommand` instead.
   */
  public get projenCommand() {
    return this.project.projenCommand;
  }

  /**
   * Returns `true` if we are running within a CI build.
   */
  private get isAutomatedBuild(): boolean {
    return isTruthy(process.env.CI);
  }

  private determineVersion(currVersion?: string) {
    if (!this.isReleaseBuild) {
      return "0.0.0";
    }

    return currVersion ?? "0.0.0";
  }

  /**
   * Returns `true` if this is a CI release build.
   */
  private get isReleaseBuild(): boolean {
    return isTruthy(process.env.RELEASE);
  }

  // -------------------------------------------------------------------------------------------

  private parseNpmOptions(options: NodePackageOptions) {
    let npmRegistryUrl = options.npmRegistryUrl;
    if (options.npmRegistry) {
      if (npmRegistryUrl) {
        throw new Error(
          'cannot use the deprecated "npmRegistry" together with "npmRegistryUrl". please use "npmRegistryUrl" instead.'
        );
      }

      npmRegistryUrl = `https://${options.npmRegistry}`;
    }

    const npmr = new URL(npmRegistryUrl ?? DEFAULT_NPM_REGISTRY_URL);
    if (!npmr || !npmr.hostname || !npmr.href) {
      throw new Error(
        `unable to determine npm registry host from url ${npmRegistryUrl}. Is this really a URL?`
      );
    }

    const npmAccess = options.npmAccess ?? defaultNpmAccess(this.packageName);
    if (!isScoped(this.packageName) && npmAccess === NpmAccess.RESTRICTED) {
      throw new Error(
        `"npmAccess" cannot be RESTRICTED for non-scoped npm package "${this.packageName}"`
      );
    }

    const npmProvenance =
      options.npmProvenance ?? npmAccess === NpmAccess.PUBLIC;
    if (npmProvenance && npmAccess !== NpmAccess.PUBLIC) {
      throw new Error(
        `"npmProvenance" can only be enabled for public packages`
      );
    }

    const isAwsCodeArtifact = isAwsCodeArtifactRegistry(npmRegistryUrl);
    const hasScopedPackage =
      options.scopedPackagesOptions &&
      options.scopedPackagesOptions.length !== 0;

    if (isAwsCodeArtifact) {
      if (options.npmTokenSecret) {
        throw new Error(
          '"npmTokenSecret" must not be specified when publishing AWS CodeArtifact.'
        );
      } else if (
        options.codeArtifactOptions?.authProvider ===
        CodeArtifactAuthProvider.GITHUB_OIDC
      ) {
        if (
          options.codeArtifactOptions.accessKeyIdSecret ||
          options.codeArtifactOptions.secretAccessKeySecret
        ) {
          throw new Error(
            "access and secret key pair should not be provided when using GITHUB_OIDC auth provider for AWS CodeArtifact"
          );
        } else if (!options.codeArtifactOptions.roleToAssume) {
          throw new Error(
            '"roleToAssume" property is required when using GITHUB_OIDC for AWS CodeArtifact options'
          );
        }
      }
    } else {
      if (
        (options.codeArtifactOptions?.accessKeyIdSecret ||
          options.codeArtifactOptions?.secretAccessKeySecret ||
          options.codeArtifactOptions?.roleToAssume) &&
        !hasScopedPackage
      ) {
        throw new Error(
          "codeArtifactOptions must only be specified when publishing AWS CodeArtifact or used in scoped packages."
        );
      }
    }

    // apply defaults for AWS CodeArtifact
    let codeArtifactOptions: CodeArtifactOptions | undefined;
    if (isAwsCodeArtifact || hasScopedPackage) {
      const authProvider =
        options.codeArtifactOptions?.authProvider ??
        CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR;
      const isAccessSecretKeyPairAuth =
        authProvider === CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR;
      codeArtifactOptions = {
        authProvider,
        accessKeyIdSecret:
          options.codeArtifactOptions?.accessKeyIdSecret ??
          (isAccessSecretKeyPairAuth ? "AWS_ACCESS_KEY_ID" : undefined),
        secretAccessKeySecret:
          options.codeArtifactOptions?.secretAccessKeySecret ??
          (isAccessSecretKeyPairAuth ? "AWS_SECRET_ACCESS_KEY" : undefined),
        roleToAssume: options.codeArtifactOptions?.roleToAssume,
      };
    }

    return {
      npmAccess,
      npmRegistry: npmr.hostname + this.renderNpmRegistryPath(npmr.pathname!),
      npmRegistryUrl: npmr.href,
      npmTokenSecret: defaultNpmToken(options.npmTokenSecret, npmr.hostname),
      codeArtifactOptions,
      scopedPackagesOptions: this.parseScopedPackagesOptions(
        options.scopedPackagesOptions
      ),
      npmProvenance,
    };
  }

  private parseScopedPackagesOptions(
    scopedPackagesOptions?: ScopedPackagesOptions[]
  ): ScopedPackagesOptions[] | undefined {
    if (!scopedPackagesOptions) {
      return undefined;
    }

    return scopedPackagesOptions.map((option): ScopedPackagesOptions => {
      if (!isScoped(option.scope)) {
        throw new Error(
          `Scope must start with "@" in options, found ${option.scope}`
        );
      }

      if (!isAwsCodeArtifactRegistry(option.registryUrl)) {
        throw new Error(
          `Only AWS Code artifact scoped registry is supported for now, found ${option.registryUrl}`
        );
      }

      const result: ScopedPackagesOptions = {
        registryUrl: option.registryUrl,
        scope: option.scope,
      };

      return result;
    });
  }

  private addCodeArtifactLoginScript() {
    if (
      !this.scopedPackagesOptions ||
      this.scopedPackagesOptions.length === 0
    ) {
      return;
    }

    this.project.addTask("ca:login", {
      requiredEnv: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"],
      steps: [
        { exec: "which aws" }, // check that AWS CLI is installed
        ...this.scopedPackagesOptions.map((scopedPackagesOption) => {
          const { registryUrl, scope } = scopedPackagesOption;
          const { domain, region, accountId, registry } =
            extractCodeArtifactDetails(registryUrl);
          // reference: https://docs.aws.amazon.com/codeartifact/latest/ug/npm-auth.html
          const commands = [
            `npm config set ${scope}:registry ${registryUrl}`,
            `CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token --domain ${domain} --region ${region} --domain-owner ${accountId} --query authorizationToken --output text)`,
            `npm config set //${registry}:_authToken=$CODEARTIFACT_AUTH_TOKEN`,
          ];
          if (!this.minNodeVersion || semver.major(this.minNodeVersion) <= 16)
            commands.push(`npm config set //${registry}:always-auth=true`);
          return {
            exec: commands.join("; "),
          };
        }),
      ],
    });
  }

  private addNodeEngine() {
    if (!this.minNodeVersion && !this.maxNodeVersion) {
      return;
    }

    let nodeVersion = "";
    if (this.minNodeVersion) {
      nodeVersion += `>= ${this.minNodeVersion}`;
    }
    if (this.maxNodeVersion) {
      nodeVersion += ` <= ${this.maxNodeVersion}`;
    }
    this.addEngine("node", nodeVersion);
  }

  private renderNpmRegistryPath(path: string | undefined): string {
    if (!path || path == "/") {
      return "";
    } else {
      return path;
    }
  }

  private renderInstallCommand(frozen: boolean) {
    switch (this.packageManager) {
      case NodePackageManager.YARN:
      case NodePackageManager.YARN_CLASSIC:
        return [
          "yarn install",
          "--check-files", // ensure all modules exist (especially projen which was just removed).
          ...(frozen ? ["--frozen-lockfile"] : []),
        ].join(" ");
      case NodePackageManager.YARN2:
      case NodePackageManager.YARN_BERRY:
        return ["yarn install", ...(frozen ? ["--immutable"] : [])].join(" ");
      case NodePackageManager.NPM:
        return frozen ? "npm ci" : "npm install";
      case NodePackageManager.PNPM:
        return frozen
          ? "pnpm i --frozen-lockfile"
          : "pnpm i --no-frozen-lockfile";
      case NodePackageManager.BUN:
        return ["bun install", ...(frozen ? ["--frozen-lockfile"] : [])].join(
          " "
        );

      default:
        throw new Error(`unexpected package manager ${this.packageManager}`);
    }
  }

  private processDeps(options: NodePackageOptions) {
    this.addDeps(...(options.deps ?? []));
    this.addDevDeps(...(options.devDeps ?? []));
    this.addPeerDeps(...(options.peerDeps ?? []));
    this.addBundledDeps(...(options.bundledDeps ?? []));
  }

  private renderDependencies(): NpmDependencies {
    const devDependencies: Record<string, string> = {};
    const peerDependencies: Record<string, string> = {};
    const dependencies: Record<string, string> = {};
    const bundledDependencies = new Array<string>();

    // synthetic dependencies: add a pinned build dependency to ensure we are
    // testing against the minimum requirement of the peer.
    if (this.peerDependencyOptions.pinnedDevDependency) {
      for (const dep of this.project.deps.all.filter(
        (d) => d.type === DependencyType.PEER
      )) {
        let req = dep.name;

        // Skip if we already have a runtime dependency on this peer and no build dependency yet.
        // If there is a build dep already, we need to override its version.
        if (
          this.project.deps.tryGetDependency(
            dep.name,
            DependencyType.RUNTIME
          ) &&
          !this.project.deps.tryGetDependency(dep.name, DependencyType.BUILD)
        ) {
          continue;
        }

        if (dep.version) {
          const ver = minVersion(dep.version);
          if (!ver) {
            throw new Error(
              `unable to determine minimum semver for peer dependency ${dep.name}@${dep.version}`
            );
          }

          req += "@" + ver;
        }
        this.addDevDeps(req);
      }
    }

    for (const dep of this.project.deps.all) {
      let version = dep.version ?? "*";
      let name = dep.name;

      if (name.startsWith("file:")) {
        const localDependencyPath = name.substring(5);
        const depPackageJson = resolve(
          this.project.outdir,
          localDependencyPath,
          "package.json"
        );
        const pkgFile = readFileSync(depPackageJson, "utf8");
        const pkg = JSON.parse(pkgFile);
        version = localDependencyPath;
        name = pkg.name;
      }

      switch (dep.type) {
        case DependencyType.BUNDLED:
          bundledDependencies.push(name);

          const depDecls = this.project.deps.all.filter((d) => d.name === name);
          if (depDecls.some((d) => d.type === DependencyType.PEER)) {
            throw new Error(
              `unable to bundle "${name}": it cannot appear as a peer dependency (bundled would always take precedence over peer)`
            );
          }

          // I've observed that at least npm 10.8.2 will silently fail to bundle
          // a dependency if it is [also] part of `devDependencies`. It must exist in
          // `dependencies` and `dependencies` only.
          if (depDecls.some((d) => d.type === DependencyType.BUILD)) {
            throw new Error(
              `unable to bundle "${name}": it cannot appear as a devDependency (only prod dependencies are bundled, and any dependency appearing as a devDependency is considered to be not a prod dependency)`
            );
          }

          // also add as a runtime dependency
          dependencies[name] = version;
          break;

        case DependencyType.PEER:
          peerDependencies[name] = version;
          break;

        case DependencyType.RUNTIME:
          dependencies[name] = version;
          break;

        case DependencyType.TEST:
        case DependencyType.DEVENV:
        case DependencyType.BUILD:
          devDependencies[name] = version;
          break;
      }
    }

    // returns a lazy value to normalize during synthesis
    const normalize = (obj: any) => () => sorted(obj);

    // update the manifest we are about to save into `package.json`
    this.manifest.devDependencies = normalize(devDependencies);
    this.manifest.peerDependencies = normalize(peerDependencies);
    this.manifest.dependencies = normalize(dependencies);
    this.manifest.bundledDependencies = sorted(bundledDependencies);

    // nothing further to do if package.json file does not exist
    if (!this._prev) {
      return { devDependencies, peerDependencies, dependencies };
    }

    const readDeps = (
      user: Record<string, string>,
      current: Record<string, string> = {}
    ) => {
      for (const [name, userVersion] of Object.entries(user)) {
        const currentVersion = current[name];

        // respect user version if it's not '*' or if current version is undefined
        if (userVersion !== "*" || !currentVersion || currentVersion === "*") {
          continue;
        }

        // memoize current version in memory so it is preserved when saving
        user[name] = currentVersion;
      }

      // report removals
      for (const name of Object.keys(current ?? {})) {
        if (!user[name]) {
          this.project.logger.verbose(`${name}: removed`);
        }
      }
    };

    readDeps(devDependencies, this._prev.devDependencies);
    readDeps(dependencies, this._prev.dependencies);
    readDeps(peerDependencies, this._prev.peerDependencies);

    return { devDependencies, dependencies, peerDependencies };
  }

  /**
   * Resolves any deps that do not have a specified version (e.g. `*`) and
   * update `package.json` if needed.
   *
   * @returns `true` if package.json was updated or `false` if not.
   */
  private resolveDepsAndWritePackageJson(): boolean {
    const outdir = this.project.outdir;
    const rootPackageJson = join(outdir, "package.json");

    const original = readFileSync(rootPackageJson, "utf8");
    const pkg = JSON.parse(original);

    const resolveDeps = (
      current: { [name: string]: string },
      user: Record<string, string>
    ) => {
      const result: Record<string, string> = {};
      current = current ?? {};
      user = user ?? {};

      for (const [name, currentDefinition] of Object.entries(user)) {
        // find actual version from node_modules
        let desiredVersion = currentDefinition;

        if (currentDefinition === "*") {
          // we already know we don't have the version in project `deps`,
          // so skip straight to checking manifest.
          const resolvedVersion = tryResolveDependencyVersion(name, {
            paths: [this.project.outdir],
          });
          if (!resolvedVersion) {
            this.project.logger.warn(
              `unable to resolve version for ${name} from installed modules`
            );
            continue;
          }
          desiredVersion = `^${resolvedVersion}`;
        }

        if (currentDefinition !== desiredVersion) {
          this.project.logger.verbose(
            `${name}: ${currentDefinition} => ${desiredVersion}`
          );
        }

        result[name] = desiredVersion;
      }

      // print removed packages
      for (const name of Object.keys(current)) {
        if (!result[name]) {
          this.project.logger.verbose(`${name} removed`);
        }
      }

      return result;
    };

    const rendered = this._renderedDeps;
    if (!rendered) {
      throw new Error("assertion failed");
    }

    const deps = resolveDeps(pkg.dependencies, rendered.dependencies);
    const devDeps = resolveDeps(pkg.devDependencies, rendered.devDependencies);
    const peerDeps = resolveDeps(
      pkg.peerDependencies,
      rendered.peerDependencies
    );

    if (this.peerDependencyOptions.pinnedDevDependency) {
      for (const [name, version] of Object.entries(peerDeps)) {
        // Skip if we already have a runtime dependency on this peer
        // or if devDependency version is already set.
        // Relies on the "*" devDependency added in the presynth step
        if (deps[name] || rendered.devDependencies[name] !== "*") {
          continue;
        }

        // Take version and pin as dev dependency
        const ver = minVersion(version);
        if (!ver) {
          throw new Error(
            `unable to determine minimum semver for peer dependency ${name}@${version}`
          );
        }

        devDeps[name] = ver;
      }
    }

    pkg.dependencies = sorted(deps);
    pkg.devDependencies = sorted(devDeps);
    pkg.peerDependencies = sorted(peerDeps);

    const updated = JSON.stringify(pkg, undefined, 2) + "\n";

    if (original === updated) {
      return false;
    }

    writeFile(rootPackageJson, updated);
    return true;
  }

  private renderPackageResolutions() {
    delete this.manifest.overrides;
    delete this.manifest.pnpm;
    delete this.manifest.resolutions;

    const render = () => {
      const overridingDependencies = this.project.deps.all.filter(
        (dep) => dep.type === DependencyType.OVERRIDE
      );
      if (!overridingDependencies.length) {
        return undefined;
      }

      return Object.fromEntries(
        overridingDependencies.map(({ name, version = "*" }) => [name, version])
      );
    };

    switch (this.packageManager) {
      case NodePackageManager.NPM:
        this.manifest.overrides = render;
        return;
      case NodePackageManager.PNPM:
        if (!this.project.parent) {
          this.manifest.pnpm = { overrides: render };
        }
        return;
      default:
        this.manifest.resolutions = render;
        return;
    }
  }

  private renderPublishConfig() {
    // When npm provenance is enabled, we need to always render the public access
    // But when npmAccess is the set to the default, we prefer to omit it
    const shouldOmitAccess =
      !this.npmProvenance &&
      this.npmAccess === defaultNpmAccess(this.packageName);

    // omit values if they are the same as the npm defaults
    return resolveJson(
      {
        registry:
          this.npmRegistryUrl !== DEFAULT_NPM_REGISTRY_URL
            ? this.npmRegistryUrl
            : undefined,
        access: shouldOmitAccess ? undefined : this.npmAccess,
      },
      { omitEmpty: true }
    );
  }

  private renderKeywords() {
    const kwds = Array.from(this.keywords);
    return sorted(kwds.sort());
  }

  private renderEngines() {
    return sorted(this.engines);
  }

  private autoDiscoverBinaries() {
    const binrel = "bin";
    const bindir = join(this.project.outdir, binrel);
    if (existsSync(bindir)) {
      for (const file of readdirSync(bindir)) {
        try {
          accessSync(join(bindir, file), constants.X_OK);

          const binPath = join(binrel, file);
          const normalizedPath = normalizePersistedPath(binPath);

          this.bin[file] = normalizedPath;
        } catch (e) {
          // not executable, skip
        }
      }
    }
  }

  private renderAuthor(options: NodePackageOptions) {
    let author;
    if (options.authorName) {
      author = {
        name: options.authorName,
        email: options.authorEmail,
        url: options.authorUrl,
        organization: options.authorOrganization ?? false,
      };
    } else {
      if (
        options.authorEmail ||
        options.authorUrl ||
        options.authorOrganization !== undefined
      ) {
        throw new Error(
          '"authorName" is required if specifying "authorEmail" or "authorUrl"'
        );
      }
    }
    return author;
  }

  private renderBin() {
    return sorted(this.bin);
  }

  private renderScripts() {
    const result: any = {};
    const tasks = this.project.tasks.all
      .filter(
        (t) =>
          // Must remove to prevent overriding built-in npm command (which would loop)
          t.name !== this.installTask.name && t.name !== this.installCiTask.name
      )
      .sort((x, y) => x.name.localeCompare(y.name));

    for (const task of tasks) {
      if (this.scriptsToBeRemoved.has(task.name)) {
        continue;
      }
      result[task.name] = this.npmScriptForTask(task);
    }

    return {
      ...result,
      ...this.scripts,
    };
  }

  private npmScriptForTask(task: Task) {
    return `${this.projenCommand} ${task.name}`;
  }

  private readPackageJson() {
    const file = join(this.project.outdir, "package.json");
    if (!existsSync(file)) {
      return undefined;
    }

    return JSON.parse(readFileSync(file, "utf-8"));
  }

  private installDependencies() {
    this.project.logger.info("Installing dependencies...");
    const runtime = new TaskRuntime(this.project.outdir);
    const taskToRun = this.isAutomatedBuild
      ? this.installCiTask
      : this.installTask;
    runtime.runTask(taskToRun.name);
  }

  private configureYarnBerry(project: Project, options: NodePackageOptions) {
    const {
      version = "4.0.1",
      yarnRcOptions = {},
      zeroInstalls = false,
    } = options.yarnBerryOptions || {};
    this.checkForConflictingYarnOptions(yarnRcOptions);

    // Set the `packageManager` field in `package.json` to the version specified. This tells `corepack` which version
    // of `yarn` to use.
    this.addField("packageManager", `yarn@${version}`);
    this.configureYarnBerryGitignore(zeroInstalls);

    const { node } = new Yarnrc(project, version, yarnRcOptions);
    this.yarnrcNode = node;
  }

  private resetYarnBerryConfiguration(project: Project) {
    this.removeField("packageManager");
    this.resetYarnBerryGitignoreConfiguration();

    this.yarnrcNode && Yarnrc.removeNode(this.yarnrcNode.id, project);
  }

  private checkForConflictingYarnOptions(yarnRcOptions: YarnrcOptions) {
    if (
      this.npmAccess &&
      yarnRcOptions.npmPublishAccess &&
      this.npmAccess.toString() !== yarnRcOptions.npmPublishAccess.toString()
    ) {
      throw new Error(
        `Cannot set npmAccess (${this.npmAccess}) and yarnRcOptions.npmPublishAccess (${yarnRcOptions.npmPublishAccess}) to different values.`
      );
    }

    if (
      this.npmRegistryUrl &&
      yarnRcOptions.npmRegistryServer &&
      this.npmRegistryUrl !== yarnRcOptions.npmRegistryServer
    ) {
      throw new Error(
        `Cannot set npmRegistryUrl (${this.npmRegistryUrl}) and yarnRcOptions.npmRegistryServer (${yarnRcOptions.npmRegistryServer}) to different values.`
      );
    }
  }

  /** See https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored */
  private configureYarnBerryGitignore(zeroInstalls: boolean) {
    const { gitignore } = this.project;

    // These patterns are the same whether or not you're using zero-installs
    gitignore.exclude(".yarn/*");
    gitignore.include(
      ".yarn/patches",
      ".yarn/plugins",
      ".yarn/releases",
      ".yarn/sdks",
      ".yarn/versions"
    );

    if (zeroInstalls) {
      gitignore.include("!.yarn/cache");
    } else {
      gitignore.exclude(".pnp.*");
    }
  }

  private resetYarnBerryGitignoreConfiguration() {
    const { gitignore } = this.project;

    gitignore.removePatterns(
      ".yarn/*",
      "!.yarn/patches",
      "!.yarn/plugins",
      "!.yarn/releases",
      "!.yarn/sdks",
      "!.yarn/versions",
      "!.yarn/cache",
      ".pnp.*"
    );
  }
}

export interface PeerDependencyOptions {
  /**
   * Automatically add a pinned dev dependency.
   * @default true
   */
  readonly pinnedDevDependency?: boolean;
}

/**
 * The node package manager to use.
 */
export enum NodePackageManager {
  /**
   * Use `yarn` as the package manager.
   *
   * @deprecated For `yarn` 1.x use `YARN_CLASSIC` for `yarn` >= 2 use `YARN_BERRY`. Currently, `NodePackageManager.YARN` means `YARN_CLASSIC`. In the future, we might repurpose it to mean `YARN_BERRY`.
   */
  YARN = "yarn",

  /**
   * Use `yarn` versions >= 2 as the package manager.
   *
   * @deprecated use YARN_BERRY instead
   */
  YARN2 = "yarn2",

  /**
   * Use `yarn` 1.x as the package manager.
   */
  YARN_CLASSIC = "yarn_classic",

  /**
   * Use `yarn` versions >= 2 as the package manager.
   */
  YARN_BERRY = "yarn_berry",

  /**
   * Use `npm` as the package manager.
   */
  NPM = "npm",

  /**
   * Use `pnpm` as the package manager.
   */
  PNPM = "pnpm",

  /**
   * Use `bun` as the package manager
   */
  BUN = "bun",
}

/**
 * Npm package access level
 */
export enum NpmAccess {
  /**
   * Package is public.
   */
  PUBLIC = "public",

  /**
   * Package can only be accessed with credentials.
   */
  RESTRICTED = "restricted",
}

/**
 * Configure Yarn Berry
 */
export interface YarnBerryOptions {
  /**
   * A fully specified version to use for yarn (e.g., x.x.x)
   *
   * @default - 4.0.1
   */
  readonly version?: string;

  /**
   * The yarnrc configuration.
   *
   * @default - a blank Yarn RC file
   */
  readonly yarnRcOptions?: YarnrcOptions;

  /**
   * Should zero-installs be enabled?
   * Learn more at: https://yarnpkg.com/features/caching#zero-installs
   *
   * @default false
   */
  readonly zeroInstalls?: boolean;
}

interface NpmDependencies {
  readonly dependencies: Record<string, string>;
  readonly devDependencies: Record<string, string>;
  readonly peerDependencies: Record<string, string>;
}

/**
 * Determines if an npm package is "scoped" (i.e. it starts with "xxx@").
 */
function isScoped(packageName: string) {
  return packageName.includes("@");
}

function defaultNpmAccess(packageName: string) {
  return isScoped(packageName) ? NpmAccess.RESTRICTED : NpmAccess.PUBLIC;
}

export function defaultNpmToken(
  npmToken: string | undefined,
  registry: string | undefined
) {
  // if we are publishing to AWS CdodeArtifact, no NPM_TOKEN used (will be requested using AWS CLI later).
  if (isAwsCodeArtifactRegistry(registry)) {
    return undefined;
  }

  // if we are publishing to GitHub Packages, default to GITHUB_TOKEN.
  const isGitHubPackages = registry === GITHUB_PACKAGES_REGISTRY;
  return (
    npmToken ??
    (isGitHubPackages ? DEFAULT_GITHUB_TOKEN_SECRET : DEFAULT_NPM_TOKEN_SECRET)
  );
}

function determineLockfile(packageManager: NodePackageManager) {
  if (
    packageManager === NodePackageManager.YARN ||
    packageManager === NodePackageManager.YARN2 ||
    packageManager === NodePackageManager.YARN_CLASSIC ||
    packageManager === NodePackageManager.YARN_BERRY
  ) {
    return "yarn.lock";
  } else if (packageManager === NodePackageManager.NPM) {
    return "package-lock.json";
  } else if (packageManager === NodePackageManager.PNPM) {
    return "pnpm-lock.yaml";
  } else if (packageManager === NodePackageManager.BUN) {
    return "bun.lockb";
  }

  throw new Error(`unsupported package manager ${packageManager}`);
}
