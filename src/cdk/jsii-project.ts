import { Range, coerce, major } from "semver";
import { Task } from "..";
import { JsiiPacmakTarget, JSII_TOOLCHAIN } from "./consts";
import { JsiiDocgen } from "./jsii-docgen";
import {
  PULL_REQUEST_REF,
  PULL_REQUEST_REPOSITORY,
} from "../build/private/consts";
import { WorkflowSteps } from "../github/workflow-steps";
import { Job, JobPermission, Step, Tools } from "../github/workflows-model";
import { NodePackageManager } from "../javascript";
import {
  CommonPublishOptions,
  GoPublishOptions,
  MavenPublishOptions,
  NpmPublishOptions,
  NugetPublishOptions,
  Publisher,
  PyPiPublishOptions,
} from "../release";
import { filteredRunsOnOptions } from "../runner-options";
import { TypeScriptProject, TypeScriptProjectOptions } from "../typescript";
import { deepMerge } from "../util";

const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const URL_REGEX =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

const REPO_TEMP_DIRECTORY = ".repo";
const BUILD_ARTIFACT_OLD_DIR = "dist.old";

export interface JsiiProjectOptions extends TypeScriptProjectOptions {
  /**
   * @default "."
   */
  readonly rootdir?: string;

  /**
   * Git repository URL.
   * @default $GIT_REMOTE
   */
  readonly repositoryUrl: string;

  /**
   * The name of the library author.
   * @default $GIT_USER_NAME
   */
  readonly author: string;

  /**
   * Email or URL of the library author.
   * @default $GIT_USER_EMAIL
   */
  readonly authorAddress: string;

  /**
   * Publish to maven
   * @default - no publishing
   */
  readonly publishToMaven?: JsiiJavaTarget;

  /**
   * Publish to pypi
   * @default - no publishing
   */
  readonly publishToPypi?: JsiiPythonTarget;

  /**
   * Publish Go bindings to a git repository.
   * @default - no publishing
   */
  readonly publishToGo?: JsiiGoTarget;

  /**
   * @deprecated use `publishToPyPi`
   */
  readonly python?: JsiiPythonTarget;

  /**
   * Publish to NuGet
   * @default - no publishing
   */
  readonly publishToNuget?: JsiiDotNetTarget;

  /**
   * @deprecated use `publishToNuget`
   */
  readonly dotnet?: JsiiDotNetTarget;

  /**
   * Automatically run API compatibility test against the latest version published to npm after compilation.
   *
   * - You can manually run compatibility tests using `yarn compat` if this feature is disabled.
   * - You can ignore compatibility failures by adding lines to a ".compatignore" file.
   *
   * @default false
   */
  readonly compat?: boolean;

  /**
   * Name of the ignore file for API compatibility tests.
   *
   * @default ".compatignore"
   */
  readonly compatIgnore?: string;

  /**
   * Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input.
   *
   * By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
   * This can be problematic for example when the package's build or test procedure generates .ts files
   * that cannot be compiled with jsii's compiler settings.
   */
  readonly excludeTypescript?: string[];

  /**
   * File path for generated docs.
   * @default "API.md"
   */
  readonly docgenFilePath?: string;

  /**
   * Emit a compressed version of the assembly
   * @default false
   */
  readonly compressAssembly?: boolean;

  /**
   * Version of the jsii compiler to use.
   *
   * Set to "*" if you want to manually manage the version of jsii in your
   * project by managing updates to `package.json` on your own.
   *
   * NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
   * and should remain on the same minor, so we recommend using a `~` dependency
   * (e.g. `~5.0.0`).
   *
   * @default "1.x"
   * @pjnew "~5.5.0"
   */
  readonly jsiiVersion?: string;
}

export enum Stability {
  EXPERIMENTAL = "experimental",
  STABLE = "stable",
  DEPRECATED = "deprecated",
}

export interface JsiiJavaTarget extends MavenPublishOptions {
  readonly javaPackage: string;
  readonly mavenGroupId: string;
  readonly mavenArtifactId: string;
}

export interface JsiiPythonTarget extends PyPiPublishOptions {
  readonly distName: string;
  readonly module: string;
}

export interface JsiiDotNetTarget extends NugetPublishOptions {
  readonly dotNetNamespace: string;
  readonly packageId: string;
  readonly iconUrl?: string;
}

/**
 * Go target configuration
 */
export interface JsiiGoTarget extends GoPublishOptions {
  /**
   * The name of the target repository in which this module will be published (e.g. github.com/owner/repo).
   *
   * The module itself will always be published under a subdirectory named according
   * to the `packageName` of the module (e.g. github.com/foo/bar/pkg).
   *
   * @example github.com/owner/repo
   */
  readonly moduleName: string;

  /**
   * The name of the Go package name.
   *
   * If not specified, package name will be derived from the JavaScript module name
   * by removing non-alphanumeric characters (e.g. @projen/foo-bar will be projenfoobar).
   *
   * @default - derived from the JavaScript module name
   */
  readonly packageName?: string;

  /**
   * A suffix appended at the end of the module version (e.g `"-devprefix"`).
   *
   * @default - none
   */
  readonly versionSuffix?: string;
}

/**
 * Multi-language jsii library project
 *
 * @pjid jsii
 */
export class JsiiProject extends TypeScriptProject {
  private readonly packageAllTask: Task;
  private readonly packageJsTask: Task;

  constructor(options: JsiiProjectOptions) {
    const { authorEmail, authorUrl } = parseAuthorAddress(options);

    // Draw some conclusions about the expected jsii version and version line
    const jsiiVersion = options.jsiiVersion ?? '1.x';
    const userManagesJsiiVersion = jsiiVersion === '*' || jsiiVersion.trim() === '';
    const jsiiVersionLine = parseJsiiVersionLine(jsiiVersion);
    const usesLegacyJsii = !userManagesJsiiVersion && jsiiVersionLine === '1.x';

    const defaultOptions: Partial<TypeScriptProjectOptions> = {
      repository: options.repositoryUrl,
      authorName: options.author,
      authorEmail,
      authorUrl,
      jestOptions: usesLegacyJsii ? { jestVersion: "^27" } : undefined,
    };

    const forcedOptions = {
      releaseToNpm: false, // we have a jsii release workflow
      disableTsconfig: true, // jsii generates its own tsconfig.json
      docgen: false, // we use jsii-docgen here so disable typescript docgen
    };

    const mergedOptions = deepMerge([
      defaultOptions,
      options,
      forcedOptions,
    ]) as TypeScriptProjectOptions;

    super(mergedOptions);

    const srcdir = this.srcdir;
    const libdir = this.libdir;

    this.addFields({ types: `${libdir}/index.d.ts` });

    const compressAssembly = options.compressAssembly ?? false;

    // this is an unhelpful warning
    const jsiiFlags = ["--silence-warnings=reserved-word"];
    if (compressAssembly) {
      jsiiFlags.push("--compress-assembly");
    }

    const compatIgnore = options.compatIgnore ?? ".compatignore";

    this.addFields({ stability: options.stability ?? Stability.STABLE });

    if (options.stability === Stability.DEPRECATED) {
      this.addFields({ deprecated: true });
    }

    const compatTask = this.addTask("compat", {
      description: "Perform API compatibility check against latest version",
      exec: `jsii-diff npm:$(node -p "require(\'./package.json\').name") -k --ignore-file ${compatIgnore} || (echo "\nUNEXPECTED BREAKING CHANGES: add keys such as \'removed:constructs.Node.of\' to ${compatIgnore} to skip.\n" && exit 1)`,
    });

    const compat = options.compat ?? false;
    if (compat) {
      this.compileTask.spawn(compatTask);
    }

    this.compileTask.reset(["jsii", ...jsiiFlags].join(" "));
    this.watchTask.reset(["jsii", "-w", ...jsiiFlags].join(" "));

    // Create a new package:all task, it will be filled with language targets later
    this.packageAllTask = this.addTask("package-all", {
      description: "Packages artifacts for all target languages",
    });

    // in jsii we consider the entire repo (post build) as the build artifact
    // which is then used to create the language bindings in separate jobs.
    // we achieve this by doing a checkout and overwrite with the files from the js package.
    this.packageJsTask = this.addPackagingTask("js");

    // When running inside CI we initially only package js. Other targets are packaged in separate jobs.
    // Outside of CI (i.e locally) we simply package all targets.
    this.packageTask.reset();
    this.packageTask.spawn(this.packageJsTask, {
      // Only run in CI
      condition: `node -e "if (!process.env.CI) process.exit(1)"`,
    });
    this.packageTask.spawn(this.packageAllTask, {
      // Don't run in CI
      condition: `node -e "if (process.env.CI) process.exit(1)"`,
    });

    const targets: Record<string, any> = {};

    const jsii: any = {
      outdir: this.artifactsDirectory,
      targets,
      tsc: {
        outDir: libdir,
        rootDir: srcdir,
      },
    };

    if (options.excludeTypescript) {
      jsii.excludeTypescript = options.excludeTypescript;
    }

    this.addFields({ jsii });

    const extraJobOptions: Partial<Job> = {
      ...this.getJobRunsOnConfig(options),
      ...(options.workflowContainerImage
        ? { container: { image: options.workflowContainerImage } }
        : {}),
    };

    if (options.releaseToNpm != false) {
      const npmjs: NpmPublishOptions = {
        registry: this.package.npmRegistry,
        npmTokenSecret: this.package.npmTokenSecret,
        npmProvenance: this.package.npmProvenance,
        codeArtifactOptions: options.codeArtifactOptions,
      };
      this.addTargetToBuild("js", this.packageJsTask, extraJobOptions);
      this.addTargetToRelease("js", this.packageJsTask, npmjs);
    }

    // we cannot call an option `java` because the java code generated by jsii
    // does not compile due to a conflict between this option name and the `java`
    // package (e.g. when `java.util.Objects` is referenced).
    if ("java" in options) {
      throw new Error('the "java" option is now called "publishToMaven"');
    }

    const maven = options.publishToMaven;
    if (maven) {
      targets.java = {
        package: maven.javaPackage,
        maven: {
          groupId: maven.mavenGroupId,
          artifactId: maven.mavenArtifactId,
        },
      };

      const task = this.addPackagingTask("java");
      this.addTargetToBuild("java", task, extraJobOptions);
      this.addTargetToRelease("java", task, maven);
    }

    const pypi = options.publishToPypi ?? options.python;
    if (pypi) {
      targets.python = {
        distName: pypi.distName,
        module: pypi.module,
      };

      const task = this.addPackagingTask("python");
      this.addTargetToBuild("python", task, extraJobOptions);
      this.addTargetToRelease("python", task, pypi);
    }

    const nuget = options.publishToNuget ?? options.dotnet;
    if (nuget) {
      targets.dotnet = {
        namespace: nuget.dotNetNamespace,
        packageId: nuget.packageId,
        iconUrl: nuget.iconUrl,
      };

      const task = this.addPackagingTask("dotnet");
      this.addTargetToBuild("dotnet", task, extraJobOptions);
      this.addTargetToRelease("dotnet", task, nuget);
    }

    const golang = options.publishToGo;
    if (golang) {
      targets.go = {
        moduleName: golang.moduleName,
        packageName: golang.packageName,
        versionSuffix: golang.versionSuffix,
      };

      const task = this.addPackagingTask("go");
      this.addTargetToBuild("go", task, extraJobOptions);
      this.addTargetToRelease("go", task, golang);
    }

    const jsiiSuffix =
      options.jsiiVersion === "*"
        ? // If jsiiVersion is "*", don't specify anything so the user can manage.
          ""
        : // Otherwise, use `jsiiVersion` or fall back to `1.x`.
          `@${options.jsiiVersion ?? "1.x"}`;
    this.addDevDeps(
      `jsii${jsiiSuffix}`,
      `jsii-rosetta${jsiiSuffix}`,
      "jsii-diff",
      "jsii-pacmak"
    );

    // Add TypeScript as a dev dependency for jsii >= 5.0
    if (jsiiSuffix && !usesLegacyJsii) {
      this.addDevDeps(`typescript@~${jsiiVersionLine}.0`);
    }

    this.gitignore.exclude(".jsii", "tsconfig.json");
    this.npmignore?.include(".jsii");

    if (options.docgen ?? true) {
      // If jsiiVersion is "*", don't specify anything so the user can manage.
      // Otherwise use a version that is compatible with all supported jsii releases.
      const docgenVersion = options.jsiiVersion === "*" ? "*" : "^10.5.0";
      new JsiiDocgen(this, {
        version: docgenVersion,
        filePath: options.docgenFilePath,
      });
    }

    // jsii updates .npmignore, so we make it writable
    if (this.npmignore) {
      this.npmignore.readonly = false;
    }

    // When using jsii@1.x, we need to add some resolutions to avoid including
    // TypeScript-3.9-incompatible dependencies that break the compiler.
    if (usesLegacyJsii) {
      // https://github.com/projen/projen/issues/2165
      this.package.addPackageResolutions("@types/prettier@2.6.0");

      // https://github.com/projen/projen/issues/2264
      this.package.addPackageResolutions("@types/babel__traverse@7.18.2");

      const jsiiVersion = options.jsiiVersion ?? "1.x";
      if (jsiiVersion.startsWith("1.")) {
        const majorNodeVersion = major(this.package.minNodeVersion ?? "16.0.0");

        // see https://github.com/projen/projen/issues/3324
        const nodeTypesVersionRange = (majorVersion: number): string => {
          switch (majorVersion) {
            case 16:
              return `^16 <= 16.18.78`;
            case 18:
              return `^18 <= 18.11.19`;
            case 19:
            case 20:
            case 21:
            case 22:
              this.logger.warn(
                `jsii@${jsiiVersion} and @types/node@^${majorVersion} are incompatible. Falling back to @types/node@^18.`,
                "Please upgrade to a modern version of jsii."
              );
              return `^18 <= 18.11.19`;
            default:
              return `^${majorVersion}`;
          }
        };

        this.addDevDeps(
          // https://github.com/projen/projen/pull/3076
          `@types/node@${nodeTypesVersionRange(majorNodeVersion)}`
        );
      }
    }
  }

  /**
   * Adds a target language to the release workflow.
   * @param language
   * @returns
   */
  private addTargetToRelease(
    language: JsiiPacmakTarget,
    packTask: Task,
    target:
      | JsiiPythonTarget
      | JsiiDotNetTarget
      | JsiiGoTarget
      | JsiiJavaTarget
      | NpmPublishOptions
  ) {
    if (!this.release) {
      return;
    }

    const pacmak = this.pacmakForLanguage(language, packTask);
    const prePublishSteps = [
      ...pacmak.bootstrapSteps,
      WorkflowSteps.checkout({
        with: {
          path: REPO_TEMP_DIRECTORY,
          ...(this.github?.downloadLfs ? { lfs: true } : {}),
        },
      }),
      ...pacmak.packagingSteps,
    ];
    const commonPublishOptions: CommonPublishOptions = {
      publishTools: pacmak.publishTools,
      prePublishSteps,
    };

    const handler: PublishTo = publishTo[language];
    this.release?.publisher[handler]({
      ...commonPublishOptions,
      ...target,
    });
  }

  /**
   * Adds a target language to the build workflow
   * @param language
   * @returns
   */
  private addTargetToBuild(
    language: JsiiPacmakTarget,
    packTask: Task,
    extraJobOptions: Partial<Job>
  ) {
    if (!this.buildWorkflow) {
      return;
    }
    const pacmak = this.pacmakForLanguage(language, packTask);

    this.buildWorkflow.addPostBuildJob(`package-${language}`, {
      ...filteredRunsOnOptions(
        extraJobOptions.runsOn,
        extraJobOptions.runsOnGroup
      ),
      permissions: {
        contents: JobPermission.READ,
      },
      tools: {
        node: { version: this.nodeVersion ?? "lts/*" },
        ...pacmak.publishTools,
      },
      steps: [
        ...pacmak.bootstrapSteps,
        WorkflowSteps.checkout({
          with: {
            path: REPO_TEMP_DIRECTORY,
            ref: PULL_REQUEST_REF,
            repository: PULL_REQUEST_REPOSITORY,
            ...(this.github?.downloadLfs ? { lfs: true } : {}),
          },
        }),
        ...pacmak.packagingSteps,
      ],
      ...extraJobOptions,
    });
  }

  private addPackagingTask(language: JsiiPacmakTarget): Task {
    const packageTargetTask = this.tasks.addTask(`package:${language}`, {
      description: `Create ${language} language bindings`,
    });
    const commandParts = ["jsii-pacmak", "-v"];

    if (this.package.packageManager === NodePackageManager.PNPM) {
      commandParts.push("--pack-command 'pnpm pack'");
    }

    commandParts.push(`--target ${language}`);

    packageTargetTask.exec(commandParts.join(" "));

    this.packageAllTask.spawn(packageTargetTask);
    return packageTargetTask;
  }

  private pacmakForLanguage(
    target: JsiiPacmakTarget,
    packTask: Task
  ): {
    publishTools: Tools;
    bootstrapSteps: Array<Step>;
    packagingSteps: Array<Step>;
  } {
    const bootstrapSteps: Array<Step> = [];
    const packagingSteps: Array<Step> = [];

    // Generic bootstrapping for all target languages
    bootstrapSteps.push(...this.workflowBootstrapSteps);
    if (this.package.packageManager === NodePackageManager.PNPM) {
      bootstrapSteps.push({
        name: "Setup pnpm",
        uses: "pnpm/action-setup@v3",
        with: { version: this.package.pnpmVersion },
      });
    } else if (this.package.packageManager === NodePackageManager.BUN) {
      bootstrapSteps.push({
        name: "Setup bun",
        uses: "oven-sh/setup-bun@v1",
      });
    }

    // Installation steps before packaging, but after checkout
    packagingSteps.push(
      {
        name: "Install Dependencies",
        run: `cd ${REPO_TEMP_DIRECTORY} && ${this.package.installCommand}`,
      },
      {
        name: "Extract build artifact",
        run: `tar --strip-components=1 -xzvf ${this.artifactsDirectory}/js/*.tgz -C ${REPO_TEMP_DIRECTORY}`,
      },
      {
        name: `Move build artifact out of the way`,
        run: `mv ${this.artifactsDirectory} ${BUILD_ARTIFACT_OLD_DIR}`,
      },
      {
        name: `Create ${target} artifact`,
        run: `cd ${REPO_TEMP_DIRECTORY} && ${this.runTaskCommand(packTask)}`,
      },
      {
        name: `Collect ${target} artifact`,
        run: `mv ${REPO_TEMP_DIRECTORY}/${this.artifactsDirectory} ${this.artifactsDirectory}`,
      }
    );

    return {
      publishTools: JSII_TOOLCHAIN[target],
      bootstrapSteps,
      packagingSteps,
    };
  }

  /**
   * Generates the runs-on config for Jobs.
   * Throws error if 'runsOn' and 'runsOnGroup' are both set.
   *
   * @param options - 'runsOn' or 'runsOnGroup'.
   */
  private getJobRunsOnConfig(options: JsiiProjectOptions) {
    return options.workflowRunsOnGroup
      ? { runsOnGroup: options.workflowRunsOnGroup }
      : options.workflowRunsOn
      ? { runsOn: options.workflowRunsOn }
      : {};
  }
}

type PublishTo = keyof Publisher &
  (
    | "publishToNpm"
    | "publishToMaven"
    | "publishToPyPi"
    | "publishToNuget"
    | "publishToGo"
  );

type PublishToTarget = { [K in JsiiPacmakTarget]: PublishTo };
const publishTo: PublishToTarget = {
  js: "publishToNpm",
  java: "publishToMaven",
  python: "publishToPyPi",
  dotnet: "publishToNuget",
  go: "publishToGo",
};

function parseJsiiVersionLine(jsiiVersion: string): "1.x" | `${number}.${number}` {
  if (!jsiiVersion || jsiiVersion === "*") {
    undefined;
  } 

  if (new Range(jsiiVersion).intersects(new Range("1.x"))) {
    return '1.x';
  }

  const version = coerce(jsiiVersion);

  if (version && version.major && version.minor) {
    return `${version.major}.${version.minor}`;
  }
}

function parseAuthorAddress(options: JsiiProjectOptions) {
  let authorEmail = options.authorEmail;
  let authorUrl = options.authorUrl;
  if (options.authorAddress) {
    if (options.authorEmail && options.authorEmail !== options.authorAddress) {
      throw new Error(
        "authorEmail is deprecated and cannot be used in conjunction with authorAddress"
      );
    }

    if (options.authorUrl && options.authorUrl !== options.authorAddress) {
      throw new Error(
        "authorUrl is deprecated and cannot be used in conjunction with authorAddress."
      );
    }

    if (EMAIL_REGEX.test(options.authorAddress)) {
      authorEmail = options.authorAddress;
    } else if (URL_REGEX.test(options.authorAddress)) {
      authorUrl = options.authorAddress;
    } else {
      throw new Error(
        `authorAddress must be either an email address or a URL: ${options.authorAddress}`
      );
    }
  }
  return { authorEmail, authorUrl };
}
