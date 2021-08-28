import { join } from 'path';
import { parse as urlparse } from 'url';
import { accessSync, constants, existsSync, readdirSync, readJsonSync } from 'fs-extra';
import * as semver from 'semver';
import { resolve as resolveJson } from './_resolve';
import { Component } from './component';
import { DependencyType } from './deps';
import { JsonFile } from './json';
import { Project } from './project';
import { Task } from './tasks';
import { exec, sorted, isTruthy, writeFile } from './util';

const UNLICENSED = 'UNLICENSED';
const DEFAULT_NPM_REGISTRY_URL = 'https://registry.npmjs.org/';
const DEFAULT_NPM_TAG = 'latest';
const GITHUB_PACKAGES_REGISTRY = 'npm.pkg.github.com';
const DEFAULT_NPM_TOKEN_SECRET = 'NPM_TOKEN';
const DEFAULT_GITHUB_TOKEN_SECRET = 'GITHUB_TOKEN';

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
   * added both to the `dependencies` section and `peerDependencies` section of
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
   *
   * @default {}
   */
  readonly scripts?: { [name: string]: string };

  /**
   * The shell command to use in order to run the projen CLI.
   *
   * Can be used to customize in special environments.
   *
   * @default "npx projen"
   */
  readonly projenCommand?: string;

  /**
   * The Node Package Manager used to execute scripts
   *
   * @default NodePackageManager.YARN
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
   * Author's Organization
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
   * Minimum Node.js version to require via package.json `engines` (inclusive).
   *
   * @default - no "engines" specified
   */
  readonly minNodeVersion?: string;

  /**
   * Minimum node.js version to require via `engines` (inclusive).
   *
   * @default - no max
   */
  readonly maxNodeVersion?: string;

  /**
   * License's SPDX identifier.
   * See https://github.com/projen/projen/tree/master/license-text for a list of supported licenses.
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
   * Tags can be used to provide an alias instead of version numbers.
   *
   * For example, a project might choose to have multiple streams of development
   * and use a different tag for each stream, e.g., stable, beta, dev, canary.
   *
   * By default, the `latest` tag is used by npm to identify the current version
   * of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
   * specifier) installs the latest tag. Typically, projects only use the
   * `latest` tag for stable release versions, and use other tags for unstable
   * versions such as prereleases.
   *
   * The `next` tag is used by some projects to identify the upcoming version.
   *
   * @default "latest"
   */
  readonly npmDistTag?: string;

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
   * Access level of the npm package.
   *
   * @default - for scoped packages (e.g. `foo@bar`), the default is
   * `NpmAccess.RESTRICTED`, for non-scoped packages, the default is
   * `NpmAccess.PUBLIC`.
   */
  readonly npmAccess?: NpmAccess;

  /**
   * GitHub secret which contains the NPM token to use when publishing packages.
   *
   * @default "NPM_TOKEN"
   */
  readonly npmTokenSecret?: string;
}

/**
 * Represents the npm `package.json` file.
 */
export class NodePackage extends Component {

  /**
   * The name of the npm package.
   */
  public readonly packageName: string;

  /**
   * The module's entrypoint (e.g. `lib/index.js`).
   */
  public readonly entrypoint: string;

  /**
   * The command to use in order to run the projen CLI.
   */
  public readonly projenCommand: string;

  /**
   * Allow project to take library dependencies.
   */
  public readonly allowLibraryDependencies: boolean;

  /**
   * The package manager to use.
   */
  public readonly packageManager: NodePackageManager;

  /**
   * @deprecated use `addField(x, y)`
   */
  public readonly manifest: any;

  /**
   * Minimum node.js version required by this package.
   * @default - no minimum
   */
  public readonly minNodeVersion?: string;

  /**
   * Maximum node version required by this pacakge.
   * @default - no maximum.
   */
  public readonly maxNodeVersion?: string;

  /**
   * The SPDX license of this module. `undefined` if this package is not licensed.
   */
  public readonly license?: string;

  /**
   * npm distribution tag
   */
  public readonly npmDistTag: string;

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
  public readonly npmTokenSecret: string;

  /**
   * npm package access level.
   */
  public readonly npmAccess: NpmAccess;

  private readonly keywords: Set<string> = new Set();
  private readonly bin: Record<string, string> = {};
  private readonly engines: Record<string, string> = {};
  private readonly peerDependencyOptions: PeerDependencyOptions;
  private readonly file: JsonFile;
  private _renderedDeps?: NpmDependencies;

  constructor(project: Project, options: NodePackageOptions = {}) {
    super(project);

    this.packageName = options.packageName ?? project.name;
    this.projenCommand = options.projenCommand ?? 'npx projen';
    this.peerDependencyOptions = options.peerDependencyOptions ?? {};
    this.allowLibraryDependencies = options.allowLibraryDependencies ?? true;
    this.packageManager = options.packageManager ?? NodePackageManager.YARN;
    this.entrypoint = options.entrypoint ?? 'lib/index.js';

    if (this.packageManager === NodePackageManager.YARN) {
      project.root.annotateGenerated('/yarn.lock');
    }

    const { npmDistTag, npmAccess, npmRegistry, npmRegistryUrl, npmTokenSecret } = this.parseNpmOptions(options);
    this.npmDistTag = npmDistTag;
    this.npmAccess = npmAccess;
    this.npmRegistry = npmRegistry;
    this.npmRegistryUrl = npmRegistryUrl;
    this.npmTokenSecret = npmTokenSecret;

    this.processDeps(options);

    const prev = this.readPackageJson() ?? {};

    // empty objects are here to preserve order for backwards compatibility
    this.manifest = {
      name: this.packageName,
      description: options.description,
      repository: !options.repository ? undefined : {
        type: 'git',
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
      main: this.entrypoint !== '' ? this.entrypoint : undefined,
      license: () => this.license ?? UNLICENSED,
      homepage: options.homepage,
      publishConfig: () => this.renderPublishConfig(),

      // in release CI builds we bump the version before we run "build" so we want
      // to preserve the version number. otherwise, we always set it to 0.0.0
      version: this.determineVersion(prev?.version),
    };

    // override any scripts from options (if specified)
    for (const [cmdname, shell] of Object.entries(options.scripts ?? {})) {
      project.addTask(cmdname, { exec: shell });
    }

    this.file = new JsonFile(this.project, 'package.json', {
      obj: this.manifest,
      readonly: false, // we want "yarn add" to work and we have anti-tamper
    });

    this.addKeywords(...options.keywords ?? []);
    this.addBin(options.bin ?? {});

    // automatically add all executable files under "bin"
    if (options.autoDetectBin ?? true) {
      this.autoDiscoverBinaries();
    }

    // node version
    this.minNodeVersion = options.minNodeVersion;
    this.maxNodeVersion = options.maxNodeVersion;
    this.addNodeEngine();

    // license
    if (options.licensed ?? true) {
      this.license = options.license ?? 'Apache-2.0';
    }
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
      throw new Error(`cannot add peer dependencies to an APP project: ${Object.keys(deps).join(',')}`);
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
      throw new Error(`cannot add bundled dependencies to an APP project: ${deps.join(',')}`);
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
   * Override the contents of an npm package.json script.
   *
   * @param name The script name
   * @param command The command to execute
   */
  public setScript(name: string, command: string) {
    this.file.addOverride(`scripts.${name}`, command);
  }

  /**
   * Removes the npm script (always successful).
   * @param name The name of the script.
   */
  public removeScript(name: string) {
    this.file.addDeletionOverride(`scripts.${name}`);
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
   * Sets the package version.
   * @param version Package version.
   */
  public addVersion(version: string) {
    this.manifest.version = version;
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
   * Render a package manager specific command to upgrade all requested dependencies.
   */
  public renderUpgradePackagesCommand(exclude: string[], include?: string[]): string {

    const project = this.project;
    function upgradePackages(command: string) {
      return () => {
        if (exclude.length === 0 && !include) {
          // request to upgrade all packages
          // separated for asthetic reasons.
          return command;
        }

        // filter by exclude and include.
        return `${command} ${project.deps.all
          .map(d => d.name)
          .filter(d => include ? include.includes(d) : true)
          .filter(d => !exclude.includes(d))
          .join(' ')}`;
      };
    }

    let lazy = undefined;
    switch (this.packageManager) {
      case NodePackageManager.YARN:
        lazy = upgradePackages('yarn upgrade');
        break;
      case NodePackageManager.NPM:
        lazy = upgradePackages('npm update');
        break;
      case NodePackageManager.PNPM:
        lazy = upgradePackages('pnpm update');
        break;
      default:
        throw new Error(`unexpected package manager ${this.packageManager}`);
    }

    // return a lazy function so that dependencies include ones that were
    // added post project instantiation (i.e using project.addDeps)
    return lazy as unknown as string;

  }

  // ---------------------------------------------------------------------------------------

  public preSynthesize() {
    super.preSynthesize();
    this._renderedDeps = this.renderDependencies();
  }

  public postSynthesize() {
    super.postSynthesize();

    const outdir = this.project.outdir;

    exec(this.renderInstallCommand(this.isAutomatedBuild), { cwd: outdir });

    this.resolveDepsAndWritePackageJson(outdir);
  }

  /**
   * Returns `true` if we are running within a CI build.
   */
  private get isAutomatedBuild(): boolean {
    return isTruthy(process.env.CI);
  }

  private determineVersion(currVersion?: string) {
    if (!this.isReleaseBuild) {
      return '0.0.0';
    }

    return currVersion ?? '0.0.0';
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
        throw new Error('cannot use the deprecated "npmRegistry" together with "npmRegistryUrl". please use "npmRegistryUrl" instead.');
      }

      npmRegistryUrl = `https://${options.npmRegistry}`;
    }

    const npmr = urlparse(npmRegistryUrl ?? DEFAULT_NPM_REGISTRY_URL);
    if (!npmr || !npmr.hostname || !npmr.href) {
      throw new Error(`unable to determine npm registry host from url ${npmRegistryUrl}. Is this really a URL?`);
    }

    const npmAccess = options.npmAccess ?? defaultNpmAccess(this.packageName);
    if (!isScoped(this.packageName) && npmAccess === NpmAccess.RESTRICTED) {
      throw new Error(`"npmAccess" cannot be RESTRICTED for non-scoped npm package "${this.packageName}"`);
    }

    return {
      npmDistTag: options.npmDistTag ?? DEFAULT_NPM_TAG,
      npmAccess,
      npmRegistry: npmr.hostname + this.renderNpmRegistryPath(npmr.pathname),
      npmRegistryUrl: npmr.href,
      npmTokenSecret: defaultNpmToken(options.npmTokenSecret, npmr.hostname),
    };
  }

  private addNodeEngine() {
    if (!this.minNodeVersion && !this.maxNodeVersion) {
      return;
    }

    let nodeVersion = '';
    if (this.minNodeVersion) {
      nodeVersion += `>= ${this.minNodeVersion}`;
    }
    if (this.maxNodeVersion) {
      nodeVersion += ` <= ${this.maxNodeVersion}`;
    }
    this.addEngine('node', nodeVersion);
  }

  private renderNpmRegistryPath(path: string | undefined): string {
    if (!path || path == '/') {
      return '';
    } else {
      return path;
    }
  }

  private renderInstallCommand(frozen: boolean) {
    switch (this.packageManager) {
      case NodePackageManager.YARN:
        return [
          'yarn install',
          '--check-files', // ensure all modules exist (especially projen which was just removed).
          ...frozen ? ['--frozen-lockfile'] : [],
        ].join(' ');

      case NodePackageManager.NPM:
        return frozen
          ? 'npm ci'
          : 'npm install';

      case NodePackageManager.PNPM:
        return [
          'pnpm i',
          ...frozen ? ['--frozen-lockfile'] : [],
        ].join(' ');

      default:
        throw new Error(`unexpected package manager ${this.packageManager}`);
    }
  }

  private processDeps(options: NodePackageOptions) {
    this.addDeps(...options.deps ?? []);
    this.addDevDeps(...options.devDeps ?? []);
    this.addPeerDeps(...options.peerDeps ?? []);
    this.addBundledDeps(...options.bundledDeps ?? []);
  }

  private renderDependencies(): NpmDependencies {
    const devDependencies: Record<string, string> = {};
    const peerDependencies: Record<string, string> = {};
    const dependencies: Record<string, string> = {};
    const bundledDependencies = new Array<string>();

    // synthetic dependencies: add a pinned build dependency to ensure we are
    // testing against the minimum requirement of the peer.
    const pinned = this.peerDependencyOptions.pinnedDevDependency ?? true;
    if (pinned) {
      for (const dep of this.project.deps.all.filter(d => d.type === DependencyType.PEER)) {
        let req = dep.name;
        if (dep.version) {
          const ver = semver.minVersion(dep.version)?.version;
          if (!ver) {
            throw new Error(`unable to determine minimum semver for peer dependency ${dep.name}@${dep.version}`);
          }

          req += '@' + ver;
        }
        this.addDevDeps(req);
      }
    }

    for (const dep of this.project.deps.all) {
      const version = dep.version ?? '*';

      switch (dep.type) {
        case DependencyType.BUNDLED:
          bundledDependencies.push(dep.name);

          if (this.project.deps.all.find(d => d.name === dep.name && d.type === DependencyType.PEER)) {
            throw new Error(`unable to bundle "${dep.name}". it cannot appear as a peer dependency`);
          }

          // also add as a runtime dependency
          dependencies[dep.name] = version;
          break;

        case DependencyType.PEER:
          peerDependencies[dep.name] = version;
          break;

        case DependencyType.RUNTIME:
          dependencies[dep.name] = version;
          break;

        case DependencyType.TEST:
        case DependencyType.DEVENV:
        case DependencyType.BUILD:
          devDependencies[dep.name] = version;
          break;
      }
    }

    // update the manifest we are about to save into `package.json`
    this.manifest.devDependencies = devDependencies;
    this.manifest.peerDependencies = peerDependencies;
    this.manifest.dependencies = dependencies;
    this.manifest.bundledDependencies = bundledDependencies;

    // nothing further to do if package.json file does not exist
    const pkg = this.readPackageJson();
    if (!pkg) {
      return { devDependencies, peerDependencies, dependencies };
    }

    const readDeps = (user: Record<string, string>, current: Record<string, string> = {}) => {
      for (const [name, userVersion] of Object.entries(user)) {
        const currentVersion = current[name];

        // respect user version if it's not '*' or if current version is undefined
        if (userVersion !== '*' || !currentVersion || currentVersion === '*') {
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

    readDeps(devDependencies, pkg.devDependencies);
    readDeps(dependencies, pkg.dependencies);
    readDeps(peerDependencies, pkg.peerDependencies);

    return { devDependencies, dependencies, peerDependencies };
  }

  private resolveDepsAndWritePackageJson(outdir: string) {
    const root = join(outdir, 'package.json');
    const pkg = readJsonSync(root);

    const resolveDeps = (current: { [name: string]: string }, user: Record<string, string>) => {
      const result: Record<string, string> = {};
      current = current ?? {};
      user = user ?? {};

      for (const [name, currentDefinition] of Object.entries(user)) {
        // find actual version from node_modules
        let desiredVersion = currentDefinition;

        if (currentDefinition === '*') {
          try {
            const modulePath = require.resolve(`${name}/package.json`, { paths: [outdir] });
            const module = readJsonSync(modulePath);
            desiredVersion = `^${module.version}`;
          } catch (e) { }

          if (!desiredVersion) {
            this.project.logger.warn(`unable to resolve version for ${name} from installed modules`);
            continue;
          }
        }

        if (currentDefinition !== desiredVersion) {
          this.project.logger.verbose(`${name}: ${currentDefinition} => ${desiredVersion}`);
        }

        result[name] = desiredVersion;
      }

      // print removed packages
      for (const name of Object.keys(current)) {
        if (!result[name]) {
          this.project.logger.verbose(`${name} removed`);
        }
      }

      return sorted(result);
    };

    const rendered = this._renderedDeps;
    if (!rendered) {
      throw new Error('assertion failed');
    }
    pkg.dependencies = resolveDeps(pkg.dependencies, rendered.dependencies);
    pkg.devDependencies = resolveDeps(pkg.devDependencies, rendered.devDependencies);
    pkg.peerDependencies = resolveDeps(pkg.peerDependencies, rendered.peerDependencies);

    writeFile(root, JSON.stringify(pkg, undefined, 2));
  }

  private renderPublishConfig() {
    // omit values if they are the same as the npm defaults
    return resolveJson({
      registry: this.npmRegistryUrl !== DEFAULT_NPM_REGISTRY_URL ? this.npmRegistryUrl : undefined,
      tag: this.npmDistTag !== DEFAULT_NPM_TAG ? this.npmDistTag : undefined,
      access: this.npmAccess !== defaultNpmAccess(this.packageName) ? this.npmAccess : undefined,
    }, { omitEmpty: true });
  }

  private renderKeywords() {
    const kwds = Array.from(this.keywords);
    return sorted(kwds.sort());
  }

  private renderEngines() {
    return sorted(this.engines);
  }

  private autoDiscoverBinaries() {
    const binrel = 'bin';
    const bindir = join(this.project.outdir, binrel);
    if (existsSync(bindir)) {
      for (const file of readdirSync(bindir)) {
        try {
          accessSync(join(bindir, file), constants.X_OK);
          this.bin[file] = join(binrel, file).replace(/\\/g, '/');
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
      if (options.authorEmail || options.authorUrl || options.authorOrganization !== undefined) {
        throw new Error('"authorName" is required if specifying "authorEmail" or "authorUrl"');
      }
    }
    return author;
  }

  private renderBin() {
    return sorted(this.bin);
  }

  private renderScripts() {
    const result: any = {};
    for (const task of this.project.tasks.all) {
      result[task.name] = this.npmScriptForTask(task);
    }

    return result;
  }


  private npmScriptForTask(task: Task) {
    return `${this.projenCommand} ${task.name}`;
  }

  private readPackageJson() {
    const file = join(this.project.outdir, 'package.json');
    if (!existsSync(file)) {
      return undefined;
    }

    return readJsonSync(file);
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
   */
  YARN = 'yarn',

  /**
   * Use `npm` as the package manager.
   */
  NPM = 'npm',

  /**
   * Use `pnpm` as the package manager.
   */
  PNPM = 'pnpm'
}

/**
 * Npm package access level
 */
export enum NpmAccess {
  /**
   * Package is public.
   */
  PUBLIC = 'public',

  /**
   * Package can only be accessed with credentials.
   */
  RESTRICTED = 'restricted'
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
  return packageName.includes('@');
}

function defaultNpmAccess(packageName: string) {
  return isScoped(packageName) ? NpmAccess.RESTRICTED : NpmAccess.PUBLIC;
}

export function defaultNpmToken(npmToken: string | undefined, registry: string | undefined) {
  // if we are publishing to GitHub Packages, default to GITHUB_TOKEN.
  const isGitHubPackages = registry === GITHUB_PACKAGES_REGISTRY;
  return npmToken ?? (isGitHubPackages ? DEFAULT_GITHUB_TOKEN_SECRET : DEFAULT_NPM_TOKEN_SECRET);
}
