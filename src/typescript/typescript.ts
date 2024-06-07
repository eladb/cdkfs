import * as path from "path";
import * as semver from "semver";
import { PROJEN_DIR } from "../common";
import { Component } from "../component";
import {
  Eslint,
  EslintOptions,
  Jest,
  NodeProject,
  NodeProjectOptions,
  Projenrc as NodeProjectProjenrc,
  Transform,
  TypeScriptSetCompilerOptionsMergeMethod,
  TypescriptConfig,
  TypescriptConfigOptions,
} from "../javascript";
import {
  TypescriptConfigPresetsOptions,
  getTypescriptConfigPresets,
} from "../javascript/typescript-config-presets";
import { hasDependencyVersion } from "../javascript/util";
import { SampleDir } from "../sample-file";
import { Task } from "../task";
import { TextFile } from "../textfile";
import {
  Projenrc as ProjenrcTs,
  ProjenrcOptions as ProjenrcTsOptions,
  TypedocDocgen,
} from "../typescript";
import { deepMerge, normalizePersistedPath } from "../util";

/**
 * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig/
 */
export class TsJestBabelConfig {
  /**
   * Disables the use of Babel
   */
  public static disabled() {
    return new TsJestBabelConfig(false);
  }

  /**
   * Enables Babel processing
   *
   * `ts-jest` will try to find an existing Babel configuration and pass it to the `babel-jest` processor.
   */
  public static autoDetectConfig() {
    return new TsJestBabelConfig(true);
  }

  /**
   * Path to a babelrc file
   *
   * The path should be relative to the current working directory where you start Jest from. You can also use `<rootDir>` in the path.
   */
  public static fromFile(filePath: string) {
    return new TsJestBabelConfig(filePath);
  }

  /**
   * Inline compiler options
   * @see https://babeljs.io/docs/options
   */
  public static custom(config: Record<string, any>) {
    return new TsJestBabelConfig(config);
  }

  private constructor(
    private readonly config: boolean | string | Record<string, any>
  ) {}

  /**
   * @jsii ignore
   * @internal
   */
  public toJSON(): boolean | string | Record<string, any> {
    return this.config;
  }
}

/**
 * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/
 */
export class TsJestDiagnostics {
  /**
   * Enable all diagnostics.
   */
  public static all() {
    return new TsJestDiagnostics(true);
  }

  /**
   * Disable all diagnostics.
   */
  public static none() {
    return new TsJestDiagnostics(false);
  }

  /**
   * Provide a custom diagnostics configuration.
   *
   * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/
   */
  public static custom(config: Record<string, any>) {
    return new TsJestDiagnostics(config);
  }

  private constructor(private readonly config: boolean | Record<string, any>) {}

  /**
   * @jsii ignore
   * @internal
   */
  public toJSON(): boolean | Record<string, any> {
    return this.config;
  }
}

/**
 * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig/
 */
export class TsJestTsconfig {
  /**
   * Uses `tsconfig.json` if found, or the built-in default TypeScript compiler options.
   */
  public static auto() {
    return new TsJestTsconfig(true);
  }

  /**
   * Force` ts-jest` to use its built-in defaults even if there is a `tsconfig.json` in your project.
   */
  public static builtInDefaults() {
    return new TsJestTsconfig(false);
  }

  /**
   * Path to a `tsconfig` file
   *
   * The path should be relative to the current working directory where you start Jest from. You can also use `<rootDir>` in the path to start from the project root dir.
   */
  public static fromFile(filePath: string) {
    return new TsJestTsconfig(filePath);
  }

  /**
   * Inline compiler options
   *
   * @see TypescriptConfigOptions
   */
  public static custom(config: TypescriptConfigOptions) {
    return new TsJestTsconfig(config);
  }

  private constructor(
    private readonly config: boolean | string | TypescriptConfigOptions
  ) {}

  /**
   * @jsii ignore
   * @internal
   */
  public toJSON(): boolean | string | TypescriptConfigOptions {
    return this.config;
  }
}

/**
 * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options
 */
export interface TsJestTransformOptions {
  /**
   * Custom TypeScript AST transformers
   *
   * @default auto
   */
  readonly astTransformers?: Record<string, any>;
  /**
   * Babel(Jest) related configuration.
   *
   * @default TsJestBabelConfig.disabled()
   */
  readonly babelConfig?: TsJestBabelConfig;
  /**
   * TypeScript module to use as compiler.
   *
   * @default "typescript"
   */
  readonly compiler?: string;
  /**
   * Diagnostics related configuration.
   *
   * @default TsJestDiagnostics.all()
   */
  readonly diagnostics?: TsJestDiagnostics;
  /**
   * Run ts-jest tests with this TSConfig isolatedModules setting.
   *
   * You'll lose type-checking ability and some features such as const enum, but in the case you plan on using Jest with the cache disabled (jest --no-cache), your tests will then run much faster.
   * @see https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules
   *
   * @default false
   */
  readonly isolatedModules?: boolean;
  /**
   * Files which will become modules returning self content.
   *
   * @default disabled
   */
  readonly stringifyContentPathRegex?: string;
  /**
   * TypeScript compiler related configuration.
   *
   * @default - Your project's `tsconfigDev` file.
   */
  readonly tsconfig?: TsJestTsconfig;
  /**
   * Enable ESM support
   *
   * @default auto
   */
  readonly useESM?: boolean;
}

export interface TsJestOptions {
  /**
   * Which files should ts-jest act upon.
   *
   * @see https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
   *
   * @default "^.+\\.[t]sx?$"
   */
  readonly transformPattern?: string;
  /**
   * Override the default ts-jest transformer configuration.
   */
  readonly transformOptions?: TsJestTransformOptions;
}

export interface TypescriptProjectConfigOptions
  extends TypescriptConfigOptions {
  /**
   * Method used to merge provided compiler options with the defaults
   * @default TypeScriptSetCompilerOptionsMergeMethod.MERGE
   */
  readonly compilerOptionsMergeMethod?: TypeScriptSetCompilerOptionsMergeMethod;
}

export interface TypeScriptProjectOptions extends NodeProjectOptions {
  /**
   * Typescript  artifacts output directory
   *
   * @default "lib"
   */
  readonly libdir?: string;

  /**
   * Typescript sources directory.
   *
   * @default "src"
   */
  readonly srcdir?: string;

  /**
   * Jest tests directory. Tests files should be named `xxx.test.ts`.
   *
   * If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
   * then tests are going to be compiled into `lib/` and executed as javascript.
   * If the test directory is outside of `src`, then we configure jest to
   * compile the code in-memory.
   *
   * @default "test"
   */
  readonly testdir?: string;

  /**
   * Setup eslint.
   *
   * @default true
   */
  readonly eslint?: boolean;

  /**
   * Eslint options
   * @default - opinionated default options
   */
  readonly eslintOptions?: EslintOptions;

  /**
   * TypeScript version to use.
   *
   * NOTE: Typescript is not semantically versioned and should remain on the
   * same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).
   *
   * @default "latest"
   */
  readonly typescriptVersion?: string;

  /**
   * Docgen by Typedoc
   *
   * @default false
   */
  readonly docgen?: boolean;

  /**
   * Docs directory
   *
   * @default "docs"
   */
  readonly docsDirectory?: string;

  /**
   * Custom TSConfig
   * @default - default options
   */
  readonly tsconfig?: TypescriptProjectConfigOptions;

  /**
   * Presets to choose as the base for the tsconfig file.
   * @default TypescriptConfigPresetsOptions.PROJEN_CLASSIC
   */
  readonly tsconfigPresets?: TypescriptConfigPresetsOptions;

  /**
   * Do not generate a `tsconfig.json` file (used by jsii projects since
   * tsconfig.json is generated by the jsii compiler).
   *
   * @default false
   */
  readonly disableTsconfig?: boolean;
  /**
   * Do not generate a `tsconfig.dev.json` file.
   *
   * @default false
   */
  readonly disableTsconfigDev?: boolean;

  /**
   * Custom tsconfig options for the development tsconfig.json file (used for testing).
   * @default - use the production tsconfig options
   */
  readonly tsconfigDev?: TypescriptProjectConfigOptions;

  /**
   * Use extends instead of duplication to make tsconfigDev inherit from tsconfig.
   *
   * Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.
   *
   * @default - false
   */
  readonly tsconfigDevExtendsTsconfig?: boolean;

  /**
   * The name of the development tsconfig.json file.
   *
   * @default "tsconfig.dev.json"
   */
  readonly tsconfigDevFile?: string;

  /**
   * Presets to choose as the base for the tsconfig dev file.
   * @default TypescriptConfigPresetsOptions.PROJEN_CLASSIC
   */
  readonly tsconfigDevPresets?: TypescriptConfigPresetsOptions;

  /**
   * Generate one-time sample in `src/` and `test/` if there are no files there.
   * @default true
   */
  readonly sampleCode?: boolean;

  /**
   * The .d.ts file that includes the type declarations for this module.
   * @default - .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)
   */
  readonly entrypointTypes?: string;

  /**
   * Use TypeScript for your projenrc file (`.projenrc.ts`).
   *
   * @default false
   * @pjnew true
   */
  readonly projenrcTs?: boolean;

  /**
   * Options for .projenrc.ts
   */
  readonly projenrcTsOptions?: ProjenrcTsOptions;

  /**
   * Options for ts-jest
   */
  readonly tsJestOptions?: TsJestOptions;
}

/**
 * TypeScript project
 * @pjid typescript
 */
export class TypeScriptProject extends NodeProject {
  public static readonly DEFAULT_TS_JEST_TRANFORM_PATTERN = "^.+\\.[t]sx?$";

  public readonly docgen?: boolean;
  public readonly docsDirectory: string;
  public readonly eslint?: Eslint;
  public readonly tsconfigEslint?: TypescriptConfig;

  /**
   * A typescript configuration file which covers source files only.
   *
   * Exists unless {@link TypeScriptProjectOptions.disableTsconfig|`options.disableTsconfig`} is set to `true`.
   *
   * The file will be named {@link TypescriptProjectConfigOptions.fileName|options.tsconfig.fileName} or `tsconfig.json`.
   * The file name can be retrieved from {@link TypescriptConfig.fileName|`tsconfig.fileName`}.
   *
   * Configured with all options from {@link TypeScriptProjectOptions.tsconfig|options.tsconfig} including:
   * - `include` - added after {@link TypeScriptProjectOptions.srcdir|options.srcdir}
   * - `exclude`
   * - `extends`
   *
   * Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptions|options.tsconfig.compilerOptions}:
   * - `rootDir` and `outDir` are set to {@link TypeScriptProjectOptions.srcdir|`options.srcdir`} and
   *   {@link TypeScriptProjectOptions.libdir|`options.libdir`} respectively.
   * - {@link TypeScriptProjectOptions.tsconfigPresets|`options.tsconfigPresets`} (defaulting to
   *   {@link TypescriptConfigPresetsOptions.PROJEN_CLASSIC|`PROJEN_CLASSIC`}) is applied, then the provided
   *   `options.tsconfig.compilerOptions` are merged in using
   *   {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod|`options.tsconfig.compilerOptionsMergeMethod`}.
   *
   */
  public readonly tsconfig?: TypescriptConfig;

  /**
   * A typescript configuration file which covers all files (sources, tests, projen).
   *
   * Same as `tsconfig` if {@link TypeScriptProjectOptions.disableTsconfig|`options.disableTsconfigDev`} is set to `true`.
   *
   * The file will be named {@link TypescriptProjectConfigOptions.fileName|`options.tsconfigDev.fileName`} or `tsconfig.dev.json`.
   * The file name can be retrieved from {@link TypescriptConfig.fileName|`tsconfig.fileName`}.
   *
   * Configured with all options from {@link TypeScriptProjectOptions.tsconfigDev|options.tsconfigDev} including:
   * - `include` - added after the includes from {@link tsconfig} (if not disabled), and {@link TypeScriptProjectOptions.testdir|options.testdir}
   * - `exclude` - added after `"node_modules"`
   * - `extends` - if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfig|options.tsconfigDevExtendsTsconfig} is
   *   set to `true`, the file *also* extends {@link tsconfig} (if not disabled).
   *
   * Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptions|options.tsconfigDev.compilerOptions}:
   * - `rootDir` and `outDir` are left undefined, so the whole project is covered.
   * - if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfig|`options.tsconfigDevExtendsTsconfig`} is set to `false`,
   *   the `compilerOptions` are set to `tsconfig.compilerOptions`
   * - {@link TypeScriptProjectOptions.tsconfigDevPresets|`options.tsconfigDevPresets`} (if defined) is applied
   * - in the case of `options.disableTsconfig` being set to `true` and `options.tsconfigDevPresets` being undefined then
   *   `TypescriptConfigPresetsOptions.PROJEN_CLASSIC` is applied
   * - the provided `options.tsconfig.compilerOptions` are merged in using
   *   {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod|`options.tsconfigDev.compilerOptionsMergeMethod`}.
   */
  public readonly tsconfigDev: TypescriptConfig;

  /**
   * The directory in which the .ts sources reside.
   */
  public readonly srcdir: string;

  /**
   * The directory in which compiled .js files reside.
   */
  public readonly libdir: string;

  /**
   * The directory in which tests reside.
   */
  public readonly testdir: string;

  /**
   * The "watch" task.
   */
  public readonly watchTask: Task;

  constructor(options: TypeScriptProjectOptions) {
    super({
      ...options,

      // disable .projenrc.js if typescript is enabled
      projenrcJs: options.projenrcTs ? false : options.projenrcJs,

      jestOptions: {
        ...options.jestOptions,
        jestConfig: {
          ...options.jestOptions?.jestConfig,
          testMatch: options.jestOptions?.jestConfig?.testMatch ?? [],
        },
      },
    });

    this.srcdir = options.srcdir ?? "src";
    this.libdir = options.libdir ?? "lib";

    this.docgen = options.docgen;
    this.docsDirectory = options.docsDirectory ?? "docs/";

    const tsconfigFilename = options.tsconfig?.fileName;
    this.compileTask.exec(
      ["tsc", "--build", tsconfigFilename].filter(Boolean).join(" ")
    );

    this.watchTask = this.addTask("watch", {
      description: "Watch & compile in the background",
      exec: ["tsc", "--build", "-w", tsconfigFilename]
        .filter(Boolean)
        .join(" "),
    });

    this.testdir = options.testdir ?? "test";
    this.gitignore.include(`/${this.testdir}/`);
    this.npmignore?.exclude(`/${this.testdir}/`);

    // if the test directory is under `src/`, then we will run our tests against
    // the javascript files and not let jest compile it for us.
    const compiledTests = this.testdir.startsWith(this.srcdir + path.posix.sep);

    if (options.entrypointTypes || this.entrypoint !== "") {
      const entrypointPath = path.join(
        path.dirname(this.entrypoint),
        path.basename(this.entrypoint, ".js")
      );
      const normalizedPath = normalizePersistedPath(entrypointPath);
      const entrypointTypes =
        options.entrypointTypes ?? `${normalizedPath}.d.ts`;
      this.package.addField("types", entrypointTypes);
    }

    if (options.disableTsconfigDev && options.disableTsconfig) {
      throw new Error(
        "Cannot specify both 'disableTsconfigDev' and 'disableTsconfig' fields."
      );
    }

    if (!options.disableTsconfig) {
      this.tsconfig = new TypescriptConfig(this, {
        fileName: options.tsconfig?.fileName,
        include: [
          `${this.srcdir}/**/*.ts`,
          ...(options.tsconfig?.include ?? []),
        ],
        exclude: options.tsconfig?.exclude ?? [],
        compilerOptions: {
          rootDir: this.srcdir, // might be overridden below
          outDir: this.libdir, // might be overridden below
          ...getTypescriptConfigPresets(
            options.tsconfigPresets ??
              TypescriptConfigPresetsOptions.PROJEN_CLASSIC
          ).compilerOptions,
        },
        extends: options.tsconfig?.extends,
      });

      if (options.tsconfig?.compilerOptions) {
        this.tsconfig.setCompilerOptions(
          options.tsconfig.compilerOptions,
          options.tsconfig.compilerOptionsMergeMethod
        );
      }
    }

    if (options.disableTsconfigDev) {
      this.tsconfigDev = this.tsconfig!;
    } else {
      const tsconfigDevFile = options.tsconfigDevFile ?? "tsconfig.dev.json";

      this.tsconfigDev = new TypescriptConfig(this, {
        fileName: tsconfigDevFile,
        include: [
          `${this.srcdir}/**/*.ts`,
          `${this.testdir}/**/*.ts`,
          ...(options.tsconfig?.include ?? []),
          ...(options.tsconfigDev?.include ?? []),
        ],
        exclude: ["node_modules", ...(options.tsconfigDev?.exclude ?? [])],
        compilerOptions: options.tsconfigDev?.extends ? undefined : {}, // we'll maybe populate compilerOptions below
        // No rootDir since we want the whole project covered
        // No outDir since we won't write the output by default
        extends: options.tsconfigDev?.extends,
      });

      if (this.tsconfig) {
        if (options.tsconfigDevExtendsTsconfig) {
          this.tsconfigDev.addExtends(this.tsconfig);
        } else {
          this.tsconfigDev.setCompilerOptions(
            this.tsconfig.compilerOptions ?? {},
            TypeScriptSetCompilerOptionsMergeMethod.OVERRIDE
          );
        }

        if (options.tsconfigDevPresets) {
          this.tsconfigDev.setCompilerOptions(
            getTypescriptConfigPresets(options.tsconfigDevPresets)
              .compilerOptions,
            TypeScriptSetCompilerOptionsMergeMethod.MERGE
          );
        }
      } else {
        this.tsconfigDev.setCompilerOptions(
          getTypescriptConfigPresets(
            options.tsconfigDevPresets ??
              TypescriptConfigPresetsOptions.PROJEN_CLASSIC
          ).compilerOptions,
          TypeScriptSetCompilerOptionsMergeMethod.MERGE
        );
      }

      if (options.tsconfigDev?.compilerOptions) {
        this.tsconfigDev.setCompilerOptions(
          options.tsconfigDev.compilerOptions,
          options.tsconfigDev.compilerOptionsMergeMethod
        );
      }
    }

    this.gitignore.include(`/${this.srcdir}/`);
    this.npmignore?.exclude(`/${this.srcdir}/`);

    if (this.srcdir !== this.libdir) {
      // separated, can ignore the entire libdir
      this.gitignore.exclude(`/${this.libdir}`);
    } else {
      // collocated, can only ignore the compiled output
      this.gitignore.exclude(`/${this.libdir}/**/*.js`);
      this.gitignore.exclude(`/${this.libdir}/**/*.d.ts`);
      this.gitignore.exclude(`/${this.libdir}/**/*.d.ts.map`);
    }

    this.npmignore?.include(`/${this.libdir}/`);

    this.npmignore?.include(`/${this.libdir}/**/*.js`);
    this.npmignore?.include(`/${this.libdir}/**/*.d.ts`);

    this.gitignore.exclude("/dist/");
    this.npmignore?.exclude("dist"); // jsii-pacmak expects this to be "dist" and not "/dist". otherwise it will tamper with it

    this.npmignore?.exclude("/tsconfig.json");
    this.npmignore?.exclude("/.github/");
    this.npmignore?.exclude("/.vscode/");
    this.npmignore?.exclude("/.idea/");
    this.npmignore?.exclude("/.projenrc.js");
    this.npmignore?.exclude("tsconfig.tsbuildinfo");

    if (this.jest) {
      if (compiledTests) {
        this.addJestCompiled(this.jest);
      } else {
        this.addJestNoCompile(this.jest, options?.tsJestOptions);
      }
    }

    if (options.eslint ?? true) {
      this.eslint = new Eslint(this, {
        tsconfigPath: `./${this.tsconfigDev.fileName}`,
        dirs: [this.srcdir],
        devdirs: [this.testdir, "build-tools"],
        fileExtensions: [".ts", ".tsx"],
        lintProjenRc: false,
        ...options.eslintOptions,
      });

      this.tsconfigEslint = this.tsconfigDev;
    }

    // when this is a root project
    if (!this.parent) {
      if (options.projenrcTs) {
        new ProjenrcTs(this, options.projenrcTsOptions);
      } else {
        // projenrc.js created in NodeProject needs to be added in tsconfigDev
        const projenrcJs = NodeProjectProjenrc.of(this);
        if (projenrcJs) {
          this.tsconfigDev.addInclude(projenrcJs.filePath);
        }
      }
    }

    const tsver = options.typescriptVersion
      ? `@${options.typescriptVersion}`
      : "";

    this.addDevDeps(
      `typescript${tsver}`,
      // @types/node versions numbers match the node runtime versions' major.minor, however, new
      // releases are only created when API changes are included in a node release... We might for
      // example have dependencies that require `node >= 12.22`, but as 12.21 and 12.22 did not
      // include API changes, `@types/node@12.20.x` is the "correct" version to use. As it is not
      // possible to easily determine the correct version to use, we pick up the latest version.
      //
      // Additionally, we default to tracking the 18.x line, as the current earliest LTS release of
      // node is 18.x, so this is what corresponds to the broadest compatibility with supported node
      // runtimes.
      `@types/node@^${semver.major(this.package.minNodeVersion ?? "18.0.0")}`
    );

    // generate sample code in `src` and `lib` if these directories are empty or non-existent.
    if (options.sampleCode ?? true) {
      new SampleCode(this);
    }

    if (this.docgen) {
      new TypedocDocgen(this);
    }
  }

  /**
   * Tests are compiled to `lib/TESTDIR`, so we don't need jest to compile them
   * for us. just run them directly from javascript.
   */
  private addJestCompiled(jest: Jest) {
    this.addDevDeps(`@types/jest${jest.jestVersion}`);

    const testout = path.posix.relative(this.srcdir, this.testdir);
    const libtest = path.posix.join(this.libdir, testout);
    const srctest = this.testdir;

    this.npmignore?.exclude(`/${libtest}/`);
    jest.addTestMatch(`**/${libtest}/**/?(*.)+(spec|test).js?(x)`);
    jest.addWatchIgnorePattern(`/${this.srcdir}/`);

    const resolveSnapshotPath = (test: string, ext: string) => {
      const fullpath = test.replace(libtest, srctest);
      return path.join(
        path.dirname(fullpath),
        "__snapshots__",
        path.basename(fullpath, ".js") + ".ts" + ext
      );
    };

    const resolveTestPath = (snap: string, ext: string) => {
      const filename = path.basename(snap, ".ts" + ext) + ".js";
      const dir = path.dirname(path.dirname(snap)).replace(srctest, libtest);
      return path.join(dir, filename);
    };

    const resolver = new TextFile(
      this,
      path.posix.join(PROJEN_DIR, "jest-snapshot-resolver.js")
    );
    if (!resolver.marker) {
      resolver.addLine(`// ${resolver.marker}`);
    }
    resolver.addLine('const path = require("path");');
    resolver.addLine(`const libtest = "${libtest}";`);
    resolver.addLine(`const srctest= "${srctest}";`);
    resolver.addLine("module.exports = {");
    resolver.addLine(
      `  resolveSnapshotPath: ${resolveSnapshotPath.toString()},`
    );
    resolver.addLine(`  resolveTestPath: ${resolveTestPath.toString()},`);
    resolver.addLine(
      "  testPathForConsistencyCheck: path.join('some', '__tests__', 'example.test.js')"
    );
    resolver.addLine("};");

    jest.addSnapshotResolver(`./${resolver.path}`);
  }

  private addJestNoCompile(
    jest: Jest,
    tsJestOptions: TsJestOptions | undefined
  ) {
    this.addDevDeps(
      `@types/jest${jest.jestVersion}`,
      `ts-jest${jest.jestVersion}`
    );

    jest.addTestMatch(`<rootDir>/${this.srcdir}/**/__tests__/**/*.ts?(x)`);
    jest.addTestMatch(
      `<rootDir>/@(${this.testdir}|${this.srcdir})/**/*(*.)@(spec|test).ts?(x)`
    );

    // Test for the ts-jest version that was requested;
    //
    // - First, check the `jest` version that is requested via projen properties. This
    //   should be the same as the `ts-jest` version anyway.
    // - If none found, fall back to inspecting the actual `ts-jest` version
    //   that happens to be installed.
    let hasTsJest29: boolean | undefined;
    if (jest.jestVersion) {
      // We could maybe replace this will full "actual version" checking, but
      // the tests depend on this and the reading of 'package.json' is very
      // awkward to test.
      // Note that we use the requested version of `jest` as a proxy for the
      // version of `ts-jest`, which is what we're actually interested in.
      const major = semver.coerce(jest.jestVersion)?.major;
      hasTsJest29 = major ? major >= 29 : undefined;
    }
    if (hasTsJest29 === undefined) {
      hasTsJest29 = hasDependencyVersion(this, "ts-jest", ">= 29");
    }

    // add relevant deps (we treat "unknown" as having a modern ts-jest)
    if (hasTsJest29 !== false) {
      return this.addJestNoCompileModern(jest, tsJestOptions);
    }
    this.addJestNoCompileLegacy(jest, tsJestOptions);
  }

  private addJestNoCompileModern(
    jest: Jest,
    tsJestOptions: TsJestOptions | undefined
  ) {
    jest.config.transform = deepMerge([
      {
        [tsJestOptions?.transformPattern ??
        TypeScriptProject.DEFAULT_TS_JEST_TRANFORM_PATTERN]: new Transform(
          "ts-jest",
          {
            tsconfig: TsJestTsconfig.fromFile(this.tsconfigDev.fileName),
            ...(tsJestOptions?.transformOptions ?? {}),
          }
        ),
      },
      jest.config.transform,
    ]);
  }

  private addJestNoCompileLegacy(
    jest: Jest,
    tsJestOptions: TsJestOptions | undefined
  ) {
    if (tsJestOptions) {
      this.logger.warn(
        "You are using a legacy version (<29) of jest and ts-jest that does not support tsJestOptions, they will be ignored."
      );
    }
    if (!jest.config.preset) {
      jest.config.preset = "ts-jest";
    }
    jest.config.globals = deepMerge([
      {
        "ts-jest": {
          tsconfig: this.tsconfigDev.fileName,
        },
      },
      jest.config.globals,
    ]);
  }
}

class SampleCode extends Component {
  constructor(project: TypeScriptProject) {
    super(project);
    const srcCode = [
      "export class Hello {",
      "  public sayHello() {",
      "    return 'hello, world!';",
      "  }",
      "}",
    ].join("\n");

    const testCode = [
      "import { Hello } from '../src';",
      "",
      "test('hello', () => {",
      "  expect(new Hello().sayHello()).toBe('hello, world!');",
      "});",
    ].join("\n");

    new SampleDir(project, project.srcdir, {
      files: {
        "index.ts": srcCode,
      },
    });

    if (project.jest) {
      new SampleDir(project, project.testdir, {
        files: {
          "hello.test.ts": testCode,
        },
      });
    }
  }
}

/**
 * TypeScript app.
 *
 * @pjid typescript-app
 */
export class TypeScriptAppProject extends TypeScriptProject {
  constructor(options: TypeScriptProjectOptions) {
    super({
      allowLibraryDependencies: false,
      releaseWorkflow: false,
      entrypoint: "", // "main" is not needed in typescript apps
      package: false,
      ...options,
    });
  }
}

/**
 * @deprecated use `TypeScriptProject`
 */
export class TypeScriptLibraryProject extends TypeScriptProject {}

/**
 * @deprecated use TypeScriptProjectOptions
 */
export interface TypeScriptLibraryProjectOptions
  extends TypeScriptProjectOptions {}
