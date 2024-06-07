import * as path from "path";
import * as semver from "semver";
import { NodeProject } from ".";
import { Component } from "../component";
import { JsonFile } from "../json";
import { Project } from "../project";

export interface TypescriptConfigOptions {
  /**
   * @default "tsconfig.json"
   */
  readonly fileName?: string;

  /**
   * Base `tsconfig.json` configuration(s) to inherit from.
   *
   * @remarks
   * Must provide either `extends` or `compilerOptions` (or both).
   */
  readonly extends?: TypescriptConfigExtends;

  /**
   * Specifies a list of glob patterns that match TypeScript files to be included in compilation.
   *
   * @default - all .ts files recursively
   */
  readonly include?: string[];

  /**
   * Filters results from the "include" option.
   *
   * @default - node_modules is excluded by default
   */
  readonly exclude?: string[];

  /**
   * Compiler options to use.
   *
   * @remarks
   * Must provide either `extends` or `compilerOptions` (or both).
   */
  readonly compilerOptions?: TypeScriptCompilerOptions;
}

/**
 * Determines how modules get resolved.
 *
 * @see https://www.typescriptlang.org/docs/handbook/module-resolution.html
 */
export enum TypeScriptModuleResolution {
  /**
   * TypeScript's former default resolution strategy.
   *
   * @see https://www.typescriptlang.org/docs/handbook/module-resolution.html#classic
   */
  CLASSIC = "classic",

  /**
   * Resolution strategy which attempts to mimic the Node.js module resolution strategy at runtime.
   *
   * @see https://www.typescriptlang.org/docs/handbook/module-resolution.html#node
   */
  NODE = "node",

  /**
   * Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleResolution
   */
  NODE16 = "node16",

  /**
   * Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleResolution
   */
  NODE_NEXT = "nodenext",

  /**
   * Resolution strategy which attempts to mimic resolution patterns of modern bundlers; from TypeScript 5.0 onwards.
   *
   * @see https://www.typescriptlang.org/tsconfig#moduleResolution
   */
  BUNDLER = "bundler",
}

/**
 * This setting controls how TypeScript determines whether a file is a script or a module.
 *
 * @see https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript
 */
export enum TypeScriptModuleDetection {
  /**
   * TypeScript will not only look for import and export statements, but it will also check whether the "type" field in a package.json is set to "module" when running with module: nodenext or node16, and check whether the current file is a JSX file when running under jsx: react-jsx.
   *
   * @see https://www.typescriptlang.org/tsconfig/#moduleDetection
   */
  AUTO = "auto",

  /**
   * The same behavior as 4.6 and prior, usings import and export statements to determine whether a file is a module.
   *
   * @see https://www.typescriptlang.org/tsconfig/#moduleDetection
   */
  LEGACY = "legacy",

  /**
   * Ensures that every non-declaration file is treated as a module.
   *
   * @see https://www.typescriptlang.org/tsconfig/#moduleDetection
   */
  FORCE = "force",
}

/**
 * This flag controls how `import` works, there are 3 different options.
 *
 * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
 */
export enum TypeScriptImportsNotUsedAsValues {
  /**
   * The default behavior of dropping `import` statements which only reference types.
   */
  REMOVE = "remove",

  /**
   * Preserves all `import` statements whose values or types are never used. This can cause imports/side-effects to be preserved.
   */
  PRESERVE = "preserve",

  /**
   * This preserves all imports (the same as the preserve option), but will error when a value import is only used as a type.
   * This might be useful if you want to ensure no values are being accidentally imported, but still make side-effect imports explicit.
   */
  ERROR = "error",
}

/**
 * Determines how TypeScript should merge `compilerOptions` such as in {@link TypescriptConfig.setCompilerOptions}.
 */
export enum TypeScriptSetCompilerOptionsMergeMethod {
  /**
   * Merge **all** `compilerOptions` with the existing options, including `rootDir` and `outdir`
   */
  MERGE_ALL = "merge-all",

  /**
   * Merge "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir`
   */
  MERGE = "merge",

  /**
   * Override "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir`
   * This will *reset* `compilerOptions` to the given value *except* `rootDir` and `outDir`
   */
  OVERRIDE = "override",
}

/**
 * Determines how JSX should get transformed into valid JavaScript.
 *
 * @see https://www.typescriptlang.org/docs/handbook/jsx.html
 */
export enum TypeScriptJsxMode {
  /**
   * Keeps the JSX as part of the output to be further consumed by another transform step (e.g. Babel).
   */
  PRESERVE = "preserve",

  /**
   * Converts JSX syntax into React.createElement, does not need to go through a JSX transformation before use, and the output will have a .js file extension.
   */
  REACT = "react",

  /**
   * Keeps all JSX like 'preserve' mode, but output will have a .js extension.
   */
  REACT_NATIVE = "react-native",

  /**
   * Passes `key` separately from props and always passes `children` as props (since React 17).
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#react-17-jsx-factories
   */
  REACT_JSX = "react-jsx",

  /**
   * Same as `REACT_JSX` with additional debug data.
   */
  REACT_JSXDEV = "react-jsxdev",
}

export interface TypeScriptCompilerOptions {
  /**
   * Allow JavaScript files to be compiled.
   *
   * @default false
   */
  readonly allowJs?: boolean;

  /**
   * Allows TypeScript files to import each other with TypeScript-specific extensions (`.ts`, `.mts`, `.tsx`).
   * Requires `noEmit` or `emitDeclarationOnly`.
   *
   * @default undefined
   */
  readonly allowImportingTsExtensions?: boolean;

  /**
   * Suppress arbitrary extension import errors with the assumption that a bundler will be handling it.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowArbitraryExtensions
   * @default undefined
   */
  readonly allowArbitraryExtensions?: boolean;

  /**
   * Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict”
   * for each source file.
   *
   * @default true
   */
  readonly alwaysStrict?: boolean;

  /**
   * Offers a way to configure the root directory for where declaration files are emitted.
   *
   */
  readonly declarationDir?: string;

  /**
   * To be specified along with the above
   *
   */
  readonly declaration?: boolean;

  /**
   * Generates a source map for .d.ts files which map back to the original .ts source file.
   * This will allow editors such as VS Code to go to the original .ts file when using features like Go to Definition.
   * @see {@link https://www.typescriptlang.org/tsconfig#declarationMap}
   */
  readonly declarationMap?: boolean;

  /**
   * Downleveling is TypeScript’s term for transpiling to an older version of JavaScript.
   * This flag is to enable support for a more accurate implementation of how modern JavaScript iterates through new concepts in older JavaScript runtimes.
   *
   * ECMAScript 6 added several new iteration primitives: the for / of loop (for (el of arr)), Array spread ([a, ...b]), argument spread (fn(...args)), and Symbol.iterator.
   * downlevelIteration allows for these iteration primitives to be used more accurately in ES5 environments if a Symbol.iterator implementation is present.
   */
  readonly downlevelIteration?: boolean;

  /**
   * List of additional conditions that should succeed when TypeScript resolves from an `exports` or `imports` field of a `package.json`.
   *
   * @see https://www.typescriptlang.org/tsconfig#customConditions
   * @default undefined
   */
  readonly customConditions?: string[];

  /**
   * Emit __importStar and __importDefault helpers for runtime babel
   * ecosystem compatibility and enable --allowSyntheticDefaultImports for
   * typesystem compatibility.
   *
   * @default false
   */
  readonly esModuleInterop?: boolean;

  /**
   * Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process.
   *
   * @default true
   */
  readonly experimentalDecorators?: boolean;

  /**
   * Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process.
   * Decorators are a language feature which hasn’t yet been fully ratified into the JavaScript specification.
   * This means that the implementation version in TypeScript may differ from the implementation in JavaScript when it it decided by TC39.
   * You can find out more about decorator support in TypeScript in the handbook.
   *
   * @see https://www.typescriptlang.org/docs/handbook/decorators.html
   * @default undefined
   */
  readonly emitDecoratorMetadata?: boolean;

  /**
   * Disallow inconsistently-cased references to the same file.
   *
   * @default false
   */
  readonly forceConsistentCasingInFileNames?: boolean;

  /**
   * Simplifies TypeScript's handling of import/export `type` modifiers.
   *
   * @see https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax
   * @default undefined
   */
  readonly verbatimModuleSyntax?: boolean;

  /**
   * This flag works because you can use `import type` to explicitly create an `import` statement which should never be emitted into JavaScript.
   *
   * @remarks
   * For TypeScript 5.0+ use `verbatimModuleSyntax` instead.
   * Posed for deprecation upon TypeScript 5.5.
   *
   * @see https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues
   * @default "remove"
   */
  readonly importsNotUsedAsValues?: TypeScriptImportsNotUsedAsValues;

  /**
   * When set, instead of writing out a .js.map file to provide source maps,
   * TypeScript will embed the source map content in the .js files.
   *
   * @default true
   */
  readonly inlineSourceMap?: boolean;

  /**
   * When set, TypeScript will include the original content of the .ts file as an embedded
   * string in the source map. This is often useful in the same cases as inlineSourceMap.
   *
   * @default true
   */
  readonly inlineSources?: boolean;

  /**
   * Enables the generation of sourcemap files.
   *
   * @default undefined
   */
  readonly sourceMap?: boolean;

  /**
   * Specify the location where a debugger should locate TypeScript files
   * instead of relative source locations.
   *
   * @default undefined
   */
  readonly sourceRoot?: string;

  /**
   * Perform additional checks to ensure that separate compilation (such as
   * with transpileModule or @babel/plugin-transform-typescript) would be safe.
   *
   * @default false
   */
  readonly isolatedModules?: boolean;

  /**
   * Support JSX in .tsx files: "react", "preserve", "react-native" etc.
   *
   * @default undefined
   */
  readonly jsx?: TypeScriptJsxMode;

  /**
   * Declares the module specifier to be used for importing the jsx and jsxs factory functions when using jsx.
   *
   * @default undefined
   */
  readonly jsxImportSource?: string;

  /**
   * Reference for type definitions / libraries to use (eg. ES2016, ES5, ES2018).
   *
   * @default [ "es2018" ]
   */
  readonly lib?: string[];

  /**
   * This setting controls how TypeScript determines whether a file is a [script or a module](https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript).
   *
   * @default "auto"
   */
  readonly moduleDetection?: TypeScriptModuleDetection;

  /**
   * Sets the module system for the program.
   * See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules.
   *
   * @default "CommonJS"
   */
  readonly module?: string;

  /**
   * Determine how modules get resolved. Either "Node" for Node.js/io.js style resolution, or "Classic".
   *
   * @default "node"
   */
  readonly moduleResolution?: TypeScriptModuleResolution;

  /**
   * Do not emit outputs.
   *
   * @default false
   */
  readonly noEmit?: boolean;

  /**
   * Only emit .d.ts files; do not emit .js files.
   *
   * @default false
   */
  readonly emitDeclarationOnly?: boolean;

  /**
   * Do not emit compiler output files like JavaScript source code, source-maps or
   * declarations if any errors were reported.
   *
   * @default true
   */
  readonly noEmitOnError?: boolean;

  /**
   * Report errors for fallthrough cases in switch statements. Ensures that any non-empty
   * case inside a switch statement includes either break or return. This means you won’t
   * accidentally ship a case fallthrough bug.
   *
   * @default true
   */
  readonly noFallthroughCasesInSwitch?: boolean;

  /**
   * In some cases where no type annotations are present, TypeScript will fall back to a
   * type of any for a variable when it cannot infer the type.
   *
   * @default true
   */
  readonly noImplicitAny?: boolean;

  /**
   * Using `noImplicitOverride`, you can ensure that sub-classes never go out of sync as
   * they are required to explicitly declare that they are overriding a member using the
   * `override` keyword. This also improves readability of the programmer's intent.
   *
   * Available with TypeScript 4.3 and newer.
   *
   * @default false
   */
  readonly noImplicitOverride?: boolean;

  /**
   * When enabled, TypeScript will check all code paths in a function to ensure they
   * return a value.
   *
   * @default true
   */
  readonly noImplicitReturns?: boolean;
  /**
   * Raise error on ‘this’ expressions with an implied ‘any’ type.
   *
   * @default true
   */
  readonly noImplicitThis?: boolean;

  /**
   * Raise error on use of the dot syntax to access fields which are not defined.
   *
   * @default true
   */
  readonly noPropertyAccessFromIndexSignature?: boolean;

  /**
   * Raise error when accessing indexes on objects with unknown keys defined in index signatures.
   *
   * @default true
   */
  readonly noUncheckedIndexedAccess?: boolean;

  /**
   * Report errors on unused local variables.
   *
   * @default true
   */
  readonly noUnusedLocals?: boolean;

  /**
   * Report errors on unused parameters in functions.
   *
   * @default true
   */
  readonly noUnusedParameters?: boolean;

  /**
   * Allows importing modules with a ‘.json’ extension, which is a common practice
   * in node projects. This includes generating a type for the import based on the static JSON shape.
   *
   * @default true
   */
  readonly resolveJsonModule?: boolean;

  /**
   * Skip type checking of all declaration files (*.d.ts).
   *
   * @default false
   */
  readonly skipLibCheck?: boolean;

  /**
   * The strict flag enables a wide range of type checking behavior that results in stronger guarantees
   * of program correctness. Turning this on is equivalent to enabling all of the strict mode family
   * options, which are outlined below. You can then turn off individual strict mode family checks as
   * needed.
   *
   * @default true
   */
  readonly strict?: boolean;

  /**
   * When strictNullChecks is false, null and undefined are effectively ignored by the language.
   * This can lead to unexpected errors at runtime.
   * When strictNullChecks is true, null and undefined have their own distinct types and you’ll
   * get a type error if you try to use them where a concrete value is expected.
   *
   * @default true
   */
  readonly strictNullChecks?: boolean;

  /**
   * When set to true, TypeScript will raise an error when a class property was declared but
   * not set in the constructor.
   *
   * @default true
   */
  readonly strictPropertyInitialization?: boolean;

  /**
   * Do not emit declarations for code that has an `@internal` annotation in it’s JSDoc comment.
   *
   * @default true
   */
  readonly stripInternal?: boolean;

  /**
   * Forces TypeScript to consult the `exports` field of `package.json` files if it ever reads from a package in `node_modules`.
   *
   * @default true
   */
  readonly resolvePackageJsonExports?: boolean;

  /**
   * Forces TypeScript to consult the `imports` field of `package.json` when performing a lookup that begins with `#` from a file that has a `package.json` as an ancestor.
   *
   * @default undefined
   */
  readonly resolvePackageJsonImports?: boolean;

  /**
   * Modern browsers support all ES6 features, so ES6 is a good choice. You might choose to set
   * a lower target if your code is deployed to older environments, or a higher target if your
   * code is guaranteed to run in newer environments.
   *
   * @default "ES2018"
   */
  readonly target?: string;

  /**
   * Output directory for the compiled files.
   */
  readonly outDir?: string;

  /**
   * Specifies the root directory of input files.
   *
   * Only use to control the output directory structure with `outDir`.
   */
  readonly rootDir?: string;

  /**
   * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
   */
  readonly allowSyntheticDefaultImports?: boolean;

  /**
   * Specifies that optional property types should be interpreted exactly as written, meaning that `| undefined` is not added to the type
   * Available with TypeScript 4.4 and newer.
   * @default false
   */
  readonly exactOptionalPropertyTypes?: boolean;

  /**
   * Change the type of the variable in a catch clause from any to unknown
   * Available with TypeScript 4.4 and newer.
   * @default true
   */
  readonly useUnknownInCatchVariables?: boolean;

  /**
   * Lets you set a base directory to resolve non-absolute module names.
   *
   * You can define a root folder where you can do absolute file resolution.
   */
  readonly baseUrl?: string;

  /**
   * A series of entries which re-map imports to lookup locations relative to the baseUrl, there is a larger coverage of paths in the handbook.
   *
   * paths lets you declare how TypeScript should resolve an import in your require/imports.
   */
  readonly paths?: { [key: string]: string[] };

  /**
   * If typeRoots is specified, only packages under typeRoots will be included
   * @see https://www.typescriptlang.org/tsconfig/#typeRoots
   */
  readonly typeRoots?: string[];

  /**
   * If types is specified, only packages listed will be included in the global scope
   * @see https://www.typescriptlang.org/tsconfig#types
   */
  readonly types?: string[];

  /**
   * Tells TypeScript to save information about the project graph from the last compilation to files stored on disk.
   * This creates a series of .tsbuildinfo files in the same folder as your compilation output.
   * They are not used by your JavaScript at runtime and can be safely deleted.
   * You can read more about the flag in the 3.4 release notes.
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag
   *
   * To control which folders you want to the files to be built to, use the config option tsBuildInfoFile.
   */
  readonly incremental?: boolean;

  /**
   * This setting lets you specify a file for storing incremental compilation information as a part of composite projects which enables faster building of larger TypeScript codebases.
   * You can read more about composite projects in the handbook.
   */
  readonly tsBuildInfoFile?: string;

  /**
   * Allow Unused Labels
   *
   * When:
   *
   * - `undefined` (default) provide suggestions as warnings to editors
   * - `true` unused labels are ignored
   * - `false` raises compiler errors about unused labels
   *
   * Labels are very rare in JavaScript and typically indicate an attempt to write an object literal:
   *
   * ```ts
   * function verifyAge(age: number) {
   *   // Forgot 'return' statement
   *   if (age > 18) {
   *     verified: true;
   * //  ^^^^^^^^ Unused label.
   *   }
   * }
   * ```
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnusedLabels
   */
  readonly allowUnusedLabels?: false;

  /**
   * Allow Unreachable Code
   *
   * When:
   *
   * - `undefined` (default) provide suggestions as warnings to editors
   * - `true` unreachable code is ignored
   * - `false` raises compiler errors about unreachable code
   *
   * These warnings are only about code which is provably unreachable due to the use of JavaScript syntax.
   *
   * @see https://www.typescriptlang.org/tsconfig#allowUnreachableCode
   */
  readonly allowUnreachableCode?: false;

  /**
   * Check JS
   *
   * Works in tandem with [allowJs](https://www.typescriptlang.org/tsconfig#allowJs). When checkJs is enabled then
   * errors are reported in JavaScript files. This is the equivalent of including // @ts-check at the top of all
   * JavaScript files which are included in your project.
   *
   * @see https://www.typescriptlang.org/tsconfig#checkJs
   */
  readonly checkJs?: true;
}

/**
 * Container for `TypescriptConfig` `tsconfig.json` base configuration(s).
 * Extending from more than one base config file requires TypeScript 5.0+.
 */
export class TypescriptConfigExtends {
  /**
   * Factory for creation from array of file paths.
   *
   * @remarks
   * TypeScript 5.0+ is required to specify more than one value in `paths`.
   *
   * @param paths Absolute or relative paths to base `tsconfig.json` files.
   */
  public static fromPaths(paths: string[]) {
    return new TypescriptConfigExtends(paths);
  }

  /**
   * Factory for creation from array of other `TypescriptConfig` instances.
   *
   * @remarks
   * TypeScript 5.0+ is required to specify more than on value in `configs`.
   *
   * @param configs Base `TypescriptConfig` instances.
   */
  public static fromTypescriptConfigs(configs: TypescriptConfig[]) {
    const paths = configs.map((config) => config.file.absolutePath);
    return TypescriptConfigExtends.fromPaths(paths);
  }

  private readonly bases: string[];

  private constructor(bases: string[]) {
    this.bases = bases;
  }

  public toJSON(): string[] {
    return this.bases;
  }
}

export class TypescriptConfig extends Component {
  private _extends: TypescriptConfigExtends;
  private _compilerOptions?: TypeScriptCompilerOptions;
  public readonly include: string[];
  public readonly exclude: string[];
  public readonly fileName: string;
  public readonly file: JsonFile;

  constructor(project: Project, options: TypescriptConfigOptions) {
    super(project);
    const fileName = options.fileName ?? "tsconfig.json";

    if (!options.extends && !options.compilerOptions) {
      throw new Error(
        "TypescriptConfig: Must provide either `extends` or `compilerOptions` (or both)."
      );
    }

    this._extends = options.extends ?? TypescriptConfigExtends.fromPaths([]);
    this.include = options.include ?? ["**/*.ts"];
    this.exclude = options.exclude ?? ["node_modules"];
    this.fileName = fileName;

    this._compilerOptions = { ...options.compilerOptions };

    this.file = new JsonFile(project, fileName, {
      allowComments: true,
      obj: {
        extends: () => this.renderExtends(),
        compilerOptions: () => this._compilerOptions,
        include: () => this.include,
        exclude: () => this.exclude,
      },
    });

    if (project instanceof NodeProject) {
      project.npmignore?.exclude(`/${fileName}`);
    }
  }

  /**
   * Render appropriate value for `extends` field.
   * @private
   */
  private renderExtends(): string | string[] | undefined {
    if (this.extends.length <= 1) {
      // render string value when only one extension (TS<5.0);
      // omit if no extensions.
      return this.extends[0];
    }
    // render many extensions as array (TS>=5.0)
    return this.extends;
  }

  /**
   * Resolve valid TypeScript extends paths relative to this config.
   *
   * @remarks
   * This will only resolve the relative path from this config to another given
   * an absolute path as input. Any non-absolute path or other string will be returned as is.
   * This is to preserve manually specified relative paths as well as npm import paths.
   *
   * @param configPath Path to resolve against.
   */
  public resolveExtendsPath(configPath: string): string {
    // if not absolute assume user-defined path (or npm package).
    if (!path.isAbsolute(configPath)) return configPath;
    const relativeConfig = path.relative(
      path.dirname(this.file.absolutePath),
      configPath
    );
    // ensure immediate sibling files are prefixed with './'
    // typescript figures this out, but some tools seemingly break without it (i.e, eslint).
    const { dir, ...pathParts } = path.parse(relativeConfig);
    const configDir = dir
      ? path.format({ dir: dir.startsWith("..") ? "" : ".", base: dir })
      : ".";
    return path.format({ ...pathParts, dir: configDir });
  }

  /**
   * Validate usage of `extends` against current TypeScript version.
   * @private
   */
  private validateExtends() {
    const project = this.project;
    const hasOneOrNoneExtends = this.extends.length <= 1;
    const isNodeProject = project instanceof NodeProject;
    if (hasOneOrNoneExtends || !isNodeProject) {
      // always accept no extends or singular extends.
      return;
    }
    const tsVersion = semver.coerce(
      project.package.tryResolveDependencyVersion("typescript"),
      { loose: true }
    );
    if (tsVersion && tsVersion.major < 5) {
      this.project.logger.warn(
        "TypeScript < 5.0.0 can only extend from a single base config.",
        `TypeScript Version: ${tsVersion.format()}`,
        `File: ${this.file.absolutePath}`,
        `Extends: ${this.extends}`
      );
    }
  }

  /**
   * Array of base `tsconfig.json` paths.
   * Any absolute paths are resolved relative to this instance,
   * while any relative paths are used as is.
   */
  public get extends(): string[] {
    return this._extends
      .toJSON()
      .map((value) => this.resolveExtendsPath(value));
  }

  /**
   * Extend from base `TypescriptConfig` instance.
   *
   * @remarks
   * TypeScript 5.0+ is required to extend from more than one base `TypescriptConfig`.
   *
   * @param value Base `TypescriptConfig` instance.
   */
  public addExtends(value: TypescriptConfig) {
    this._extends = TypescriptConfigExtends.fromPaths([
      ...this._extends.toJSON(),
      value.file.absolutePath,
    ]);
  }

  public addInclude(...pattern: string[]) {
    this.include.push(...pattern);
  }

  public addExclude(...pattern: string[]) {
    this.exclude.push(...pattern);
  }

  /**
   * Copy of the contents of the `compilerOptions` field.
   */
  public get compilerOptions(): TypeScriptCompilerOptions {
    return { ...this._compilerOptions };
  }

  /**
   * Set the `compilerOptions` field.
   *
   * @param newOptions New `compilerOptions` to merge or override with.
   * @param mergeMethod How to merge the new options with the existing ones.
   */
  public setCompilerOptions(
    newOptions: TypeScriptCompilerOptions,
    mergeMethod: TypeScriptSetCompilerOptionsMergeMethod = TypeScriptSetCompilerOptionsMergeMethod.MERGE
  ) {
    if (mergeMethod === TypeScriptSetCompilerOptionsMergeMethod.MERGE_ALL) {
      this._compilerOptions = { ...this._compilerOptions, ...newOptions };
    } else if (mergeMethod === TypeScriptSetCompilerOptionsMergeMethod.MERGE) {
      this._compilerOptions = {
        ...this._compilerOptions,
        ...newOptions,
        outDir: this._compilerOptions?.outDir,
        rootDir: this._compilerOptions?.rootDir,
      };
    } else if (
      mergeMethod === TypeScriptSetCompilerOptionsMergeMethod.OVERRIDE
    ) {
      this._compilerOptions = {
        ...newOptions,
        outDir: this._compilerOptions?.outDir,
        rootDir: this._compilerOptions?.rootDir,
      };
    } else {
      throw new Error(
        `Invalid TypeScriptSetCompilerOptionsMergeType: ${mergeMethod}`
      );
    }
  }

  preSynthesize() {
    super.preSynthesize();
    this.validateExtends();
  }
}
