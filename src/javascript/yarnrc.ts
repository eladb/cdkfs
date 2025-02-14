import * as semver from "semver";
import { Component } from "../component";
import { Project } from "../project";
import { YamlFile } from "../yaml";

/** https://yarnpkg.com/configuration/yarnrc#checksumBehavior */
export enum YarnChecksumBehavior {
  THROW = "throw",
  UPDATE = "update",
  RESET = "reset",
  IGNORE = "ignore",
}

/** https://yarnpkg.com/configuration/yarnrc#defaultSemverRangePrefix */
export enum YarnDefaultSemverRangePrefix {
  CARET = "^",
  TILDE = "~",
  EMPTY_STRING = "",
}

/** https://v3.yarnpkg.com/configuration/yarnrc#logFilters.0.level */
export enum YarnLogFilterLevel {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  DISCARD = "discard",
}

/** https://yarnpkg.com/configuration/yarnrc#logFilters */
export interface YarnLogFilter {
  readonly code?: string;
  readonly text?: string;
  readonly level?: YarnLogFilterLevel;
  readonly pattern?: string;
}

/** https://yarnpkg.com/configuration/yarnrc#networkSettings */
export interface YarnNetworkSetting {
  /** @deprecated - use httpsCaFilePath in Yarn v4 and newer */
  readonly caFilePath?: string;
  readonly httpsCaFilePath?: string;
  readonly enableNetwork?: boolean;
  readonly httpProxy?: string;
  readonly httpsProxy?: string;
  readonly httpsKeyFilePath?: string;
  readonly httpsCertFilePath?: string;
}

/** https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits */
export enum YarnNmHoistingLimit {
  DEPENDENCIES = "dependencies",
  NONE = "none",
  WORKSPACES = "workspaces",
}

/** https://yarnpkg.com/configuration/yarnrc#nmMode */
export enum YarnNmMode {
  CLASSIC = "classic",
  HARDLINKS_LOCAL = "hardlinks-local",
  HARDLINKS_GLOBAL = "hardlinks-global",
}

/** https://yarnpkg.com/configuration/yarnrc#nodeLinker */
export enum YarnNodeLinker {
  PNP = "pnp",
  PNPM = "pnpm",
  NODE_MODULES = "node-modules",
}

/** https://yarnpkg.com/configuration/yarnrc#npmPublishAccess */
export enum YarnNpmPublishAccess {
  PUBLIC = "public",
  RESTRICTED = "restricted",
}

/** https://yarnpkg.com/configuration/yarnrc#npmRegistries */
export interface YarnNpmRegistry {
  readonly npmAlwaysAuth?: boolean;
  readonly npmAuthIdent?: string;
  readonly npmAuthToken?: string;
}

/** https://yarnpkg.com/configuration/yarnrc#npmScopes */
export interface YarnNpmScope {
  readonly npmPublishRegistry?: string;
  readonly npmRegistryServer?: string;
  readonly npmAlwaysAuth?: boolean;
  readonly npmAuthIdent?: string;
  readonly npmAuthToken?: string;
}

/** https://yarnpkg.com/configuration/yarnrc#packageExtensions */
export interface YarnPeerDependencyMeta {
  readonly optional?: boolean;
}

/** https://yarnpkg.com/configuration/yarnrc#packageExtensions */
export interface YarnPackageExtension {
  readonly dependencies?: Record<string, string>;
  readonly peerDependencies?: Record<string, string>;
  readonly peerDependenciesMeta?: Record<
    string,
    Record<string, YarnPeerDependencyMeta>
  >;
}

/** https://yarnpkg.com/configuration/yarnrc#pnpFallbackMode */
export enum YarnPnpFallbackMode {
  NONE = "none",
  DEPENDENCIES_ONLY = "dependencies-only",
  ALL = "all",
}

/** https://yarnpkg.com/configuration/yarnrc#pnpMode */
export enum YarnPnpMode {
  STRICT = "strict",
  LOOSE = "loose",
}

/** https://yarnpkg.com/configuration/yarnrc#progressBarStyle */
export enum YarnProgressBarStyle {
  PATRICK = "patrick",
  SIMBA = "simba",
  JACK = "jack",
  HOGSFATHER = "hogsfather",
  DEFAULT = "default",
}

/** https://yarnpkg.com/configuration/yarnrc#supportedArchitectures */
export interface YarnSupportedArchitectures {
  readonly os?: string[];
  readonly cpu?: string[];
  readonly libc?: string[];
}

/** https://yarnpkg.com/configuration/yarnrc#cacheMigrationMode */
export enum YarnCacheMigrationMode {
  REQUIRED_ONLY = "requied-only",
  MATCH_SPEC = "match-spec",
  ALWAYS = "always",
}

/** https://yarnpkg.com/configuration/yarnrc#winLinkType */
export enum YarnWinLinkType {
  JUNCTIONS = "junctions",
  SYMLINKS = "symlinks",
}

export enum YarnWorkerPoolMode {
  ASYNC = "async",
  WORKERS = "workers",
}

/** Configuration for .yarnrc.yml in Yarn Berry v4 */
export interface YarnrcOptions {
  /** https://yarnpkg.com/configuration/yarnrc#cacheFolder */
  readonly cacheFolder?: string;
  /** https://yarnpkg.com/configuration/yarnrc#cacheMigrationMode */
  readonly cacheMigrationMode?: YarnCacheMigrationMode;
  /** https://yarnpkg.com/configuration/yarnrc#httpsCaFilePath */
  readonly httpsCaFilePath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#changesetBaseRefs */
  readonly changesetBaseRefs?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#changesetIgnorePatterns */
  readonly changesetIgnorePatterns?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#checksumBehavior */
  readonly checksumBehavior?: YarnChecksumBehavior;
  /** https://yarnpkg.com/configuration/yarnrc#cloneConcurrency */
  readonly cloneConcurrency?: number;
  /** https://yarnpkg.com/configuration/yarnrc#compressionLevel */
  readonly compressionLevel?: number | string;
  /** https://yarnpkg.com/configuration/yarnrc#constraintsPath */
  readonly constraintsPath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#defaultLanguageName */
  readonly defaultLanguageName?: string;
  /** https://yarnpkg.com/configuration/yarnrc#defaultProtocol */
  readonly defaultProtocol?: string;
  /** https://yarnpkg.com/configuration/yarnrc#defaultSemverRangePrefix */
  readonly defaultSemverRangePrefix?: YarnDefaultSemverRangePrefix;
  /** https://yarnpkg.com/configuration/yarnrc#deferredVersionFolder */
  readonly deferredVersionFolder?: string;
  /** https://yarnpkg.com/configuration/yarnrc#enableColors */
  readonly enableColors?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableConstraintsCheck */
  readonly enableConstraintsCheck?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableGlobalCache */
  readonly enableGlobalCache?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableHardenedMode */
  readonly enableHardenedMode?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableHyperlinks */
  readonly enableHyperlinks?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableImmutableCache */
  readonly enableImmutableCache?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableImmutableInstalls */
  readonly enableImmutableInstalls?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableInlineBuilds */
  readonly enableInlineBuilds?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableInlineHunks */
  readonly enableInlineHunks?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableMessageNames */
  readonly enableMessageNames?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableMirror */
  readonly enableMirror?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableNetwork */
  readonly enableNetwork?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableOfflineMode */
  readonly enableOfflineMode?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableProgressBars */
  readonly enableProgressBars?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableScripts */
  readonly enableScripts?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableStrictSsl */
  readonly enableStrictSsl?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableTelemetry */
  readonly enableTelemetry?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableTimers */
  readonly enableTimers?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#enableTransparentWorkspaces */
  readonly enableTransparentWorkspaces?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#globalFolder */
  readonly globalFolder?: string;
  /** https://yarnpkg.com/configuration/yarnrc#httpProxy */
  readonly httpProxy?: string;
  /** https://yarnpkg.com/configuration/yarnrc#httpRetry */
  readonly httpRetry?: number;
  /** https://yarnpkg.com/configuration/yarnrc#httpTimeout */
  readonly httpTimeout?: number;
  /** https://yarnpkg.com/configuration/yarnrc#httpsCertFilePath */
  readonly httpsCertFilePath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#httpsKeyFilePath */
  readonly httpsKeyFilePath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#httpsProxy */
  readonly httpsProxy?: string;
  /**
   * https://v3.yarnpkg.com/configuration/yarnrc#ignoreCwd
   *
   * @deprecated - removed in Yarn v4 and newer
   */
  readonly ignoreCwd?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#ignorePath */
  readonly ignorePath?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#immutablePatterns */
  readonly immutablePatterns?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#initScope */
  readonly initScope?: string;
  /** https://yarnpkg.com/configuration/yarnrc#initFields */
  readonly initFields?: Record<string, any>;
  /** https://yarnpkg.com/configuration/yarnrc#injectEnvironmentFiles */
  readonly injectEnvironmentFiles?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#installStatePath */
  readonly installStatePath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#logFilters */
  readonly logFilters?: YarnLogFilter[];
  /**
   * https://v3.yarnpkg.com/configuration/yarnrc#lockfileFilename
   *
   * @deprecated - removed in Yarn v4 and newer
   */
  readonly lockfileFilename?: string;
  /** https://yarnpkg.com/configuration/yarnrc#networkConcurrency */
  readonly networkConcurrency?: number;
  /** https://yarnpkg.com/configuration/yarnrc#networkSettings */
  readonly networkSettings?: Record<string, YarnNetworkSetting>;
  /** https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits */
  readonly nmHoistingLimits?: YarnNmHoistingLimit;
  /** https://yarnpkg.com/configuration/yarnrc#nmSelfReferences */
  readonly nmSelfReferences?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#nmMode */
  readonly nmMode?: YarnNmMode;
  /** https://yarnpkg.com/configuration/yarnrc#nodeLinker */
  readonly nodeLinker?: YarnNodeLinker;
  /** https://yarnpkg.com/configuration/yarnrc#winLinkType */
  readonly winLinkType?: YarnWinLinkType;
  /** https://yarnpkg.com/configuration/yarnrc#npmAlwaysAuth */
  readonly npmAlwaysAuth?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#npmAuditRegistry */
  readonly npmAuditRegistry?: string;
  /** https://yarnpkg.com/configuration/yarnrc#npmAuthIdent */
  readonly npmAuthIdent?: string;
  /** https://yarnpkg.com/configuration/yarnrc#npmAuthToken */
  readonly npmAuthToken?: string;
  /** https://yarnpkg.com/configuration/yarnrc#npmPublishAccess */
  readonly npmPublishAccess?: YarnNpmPublishAccess;
  /** https://yarnpkg.com/configuration/yarnrc#npmAuditExcludePackages */
  readonly npmAuditExcludePackages?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#npmAuditIgnoreAdvisories */
  readonly npmAuditIgnoreAdvisories?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#npmPublishRegistry */
  readonly npmPublishRegistry?: string;
  /** https://yarnpkg.com/configuration/yarnrc#npmRegistries */
  readonly npmRegistries?: Record<string, YarnNpmRegistry>;
  /** https://yarnpkg.com/configuration/yarnrc#npmRegistryServer */
  readonly npmRegistryServer?: string;
  /** https://yarnpkg.com/configuration/yarnrc#npmScopes */
  readonly npmScopes?: Record<string, YarnNpmScope>;
  /** https://yarnpkg.com/configuration/yarnrc#packageExtensions */
  readonly packageExtensions?: Record<string, YarnPackageExtension>;
  /** https://yarnpkg.com/configuration/yarnrc#patchFolder */
  readonly patchFolder?: string;
  /**
   * https://v3.yarnpkg.com/configuration/yarnrc#pnpDataPath
   *
   * @deprecated - removed in Yarn v4 and newer
   */
  readonly pnpDataPath?: string;
  /** https://yarnpkg.com/configuration/yarnrc#pnpEnableEsmLoader */
  readonly pnpEnableEsmLoader?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#pnpEnableInlining */
  readonly pnpEnableInlining?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#pnpFallbackMode */
  readonly pnpFallbackMode?: YarnPnpFallbackMode;
  /** https://yarnpkg.com/configuration/yarnrc#pnpIgnorePatterns */
  readonly pnpIgnorePatterns?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#pnpMode */
  readonly pnpMode?: YarnPnpMode;
  /** https://yarnpkg.com/configuration/yarnrc#pnpShebang */
  readonly pnpShebang?: string;
  /** https://yarnpkg.com/configuration/yarnrc#pnpUnpluggedFolder */
  readonly pnpUnpluggedFolder?: string;
  /**
   * https://v3.yarnpkg.com/configuration/yarnrc#preferAggregateCacheInfo
   *
   * @deprecated - removed in Yarn v4 and newer
   */
  readonly preferAggregateCacheInfo?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#preferDeferredVersions */
  readonly preferDeferredVersions?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#preferInteractive */
  readonly preferInteractive?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#preferReuse */
  readonly preferReuse?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#preferTruncatedLines */
  readonly preferTruncatedLines?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#progressBarStyle */
  readonly progressBarStyle?: YarnProgressBarStyle;
  /** https://yarnpkg.com/configuration/yarnrc#rcFilename */
  readonly rcFilename?: string;
  /** https://yarnpkg.com/configuration/yarnrc#supportedArchitectures */
  readonly supportedArchitectures?: YarnSupportedArchitectures;
  /** https://yarnpkg.com/configuration/yarnrc#taskPoolConcurrency */
  readonly taskPoolConcurrency?: string;
  /** https://yarnpkg.com/configuration/yarnrc#workerPoolMode */
  readonly workerPoolMode?: YarnWorkerPoolMode;
  /** https://yarnpkg.com/configuration/yarnrc#telemetryInterval */
  readonly telemetryInterval?: number;
  /** https://yarnpkg.com/configuration/yarnrc#telemetryUserId */
  readonly telemetryUserId?: string;
  /** https://yarnpkg.com/configuration/yarnrc#tsEnableAutoTypes */
  readonly tsEnableAutoTypes?: boolean;
  /** https://yarnpkg.com/configuration/yarnrc#unsafeHttpWhitelist */
  readonly unsafeHttpWhitelist?: string[];
  /** https://yarnpkg.com/configuration/yarnrc#virtualFolder */
  readonly virtualFolder?: string;
  /** https://yarnpkg.com/configuration/yarnrc#yarnPath */
  readonly yarnPath?: string;
}

export class Yarnrc extends Component {
  /**
   * Removes component node and resets the project configuration mutated by the Yarnrc component.
   * Useful when the component is being dynamically unmounted from the project.
   *
   * @param nodeId - the id of the component node
   * @param project - the project to remove the component from
   */
  public static removeNode(nodeId: string, project: Project) {
    project.node.tryRemoveChild(nodeId);
    this.resetGitAttributes(project);
  }

  private static resetGitAttributes({ gitattributes }: Project) {
    gitattributes.removeAttributes("/.yarn/**", "linguist-vendored");
    gitattributes.removeAttributes("/.yarn/releases/*", "binary");
    gitattributes.removeAttributes("/.yarn/plugins/**/*", "binary");
    gitattributes.removeAttributes("/.pnp.*", "binary", "linguist-vendored");
  }

  constructor(project: Project, version: string, options: YarnrcOptions = {}) {
    super(project);

    this.validateOptionsForVersion(semver.major(version), options);
    this.updateGitAttributes();

    new YamlFile(this, ".yarnrc.yml", { obj: options });
  }

  private updateGitAttributes() {
    const { project } = this;

    project.gitattributes.addAttributes("/.yarn/**", "linguist-vendored");
    project.gitattributes.addAttributes("/.yarn/releases/*", "binary");
    project.gitattributes.addAttributes("/.yarn/plugins/**/*", "binary");
    project.gitattributes.addAttributes(
      "/.pnp.*",
      "binary",
      "linguist-vendored"
    );
  }

  private validateOptionsForVersion(
    majorVersion: number,
    options: YarnrcOptions
  ) {
    const removedInV4: Array<keyof YarnrcOptions> = [
      "ignoreCwd",
      "lockfileFilename",
      "pnpDataPath",
      "preferAggregateCacheInfo",
    ];
    const newInV4: Array<keyof YarnrcOptions> = [
      "cacheMigrationMode",
      "httpsCaFilePath",
      "enableConstraintsCheck",
      "enableHardenedMode",
      "enableInlineHunks",
      "enableOfflineMode",
      "injectEnvironmentFiles",
      "winLinkType",
      "preferReuse",
      "taskPoolConcurrency",
      "workerPoolMode",
      "tsEnableAutoTypes",
    ];

    if (majorVersion >= 4) {
      const invalidOptions = Object.keys(options).filter((option) =>
        (removedInV4 as string[]).includes(option)
      );

      if (invalidOptions.length > 0) {
        throw new Error(
          `The following options are not available in Yarn >= 4: ${invalidOptions.join(
            ", "
          )}`
        );
      }
    } else {
      const invalidOptions = Object.keys(options).filter((option) =>
        (newInV4 as string[]).includes(option)
      );

      if (invalidOptions.length > 0) {
        throw new Error(
          `The following options are only available in Yarn v4 and newer: ${invalidOptions.join(
            ", "
          )}`
        );
      }

      if (
        options.checksumBehavior &&
        options.checksumBehavior === YarnChecksumBehavior.RESET
      ) {
        throw new Error(
          "The YarnChecksumBehavior.RESET is only available in Yarn v4 and newer."
        );
      }
    }
  }
}
