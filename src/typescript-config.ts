import { JsonFile } from './json';
import { NodeProject } from './node-project';

export interface TypescriptConfigOptions {
  /**
   * @default "tsconfig.json"
   */
  readonly fileName?: string;
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
   */
  readonly compilerOptions: TypeScriptCompilerOptions;
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
  CLASSIC = 'classic',

  /**
   * Resolution strategy which attempts to mimic the Node.js module resolution strategy at runtime.
   *
   * @see https://www.typescriptlang.org/docs/handbook/module-resolution.html#node
   */
  NODE = 'node'
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
  PRESERVE = 'preserve',

  /**
   * Converts JSX syntax into React.createElement, does not need to go through a JSX transformation before use, and the output will have a .js file extension.
   */
  REACT = 'react',

  /**
   * Keeps all JSX like 'preserve' mode, but output will have a .js extension.
   */
  REACT_NATIVE = 'react-native',

  /**
   * Passes `key` separately from props and always passes `children` as props (since React 17).
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#react-17-jsx-factories
   */
  REACT_JSX = 'react-jsx',

  /**
   * Same as `REACT_JSX` with additional debug data.
   */
  REACT_JSXDEV = 'react-jsxdev',
}

export interface TypeScriptCompilerOptions {
  /**
   * Allow JavaScript files to be compiled.
   *
   * @default false
   */
  readonly allowJs?: boolean;

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
   * Reference for type definitions / libraries to use (eg. ES2016, ES5, ES2018).
   *
   * @default [ "es2018" ]
   */
  readonly lib?: string[];

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
   * Do not emit declarations for code that has an @internal annotation in it’s JSDoc comment.
   *
   * @default true
   */
  readonly stripInternal?: boolean;

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
}

export class TypescriptConfig {
  public readonly compilerOptions: TypeScriptCompilerOptions;
  public readonly include: string[];
  public readonly exclude: string[];
  public readonly fileName: string;
  public readonly file: JsonFile;

  constructor(project: NodeProject, options: TypescriptConfigOptions) {
    const fileName = options.fileName ?? 'tsconfig.json';

    this.include = options.include ?? ['**/*.ts'];
    this.exclude = options.exclude ?? ['node_modules'];
    this.fileName = fileName;

    this.compilerOptions = options.compilerOptions;

    this.file = new JsonFile(project, fileName, {
      obj: {
        compilerOptions: this.compilerOptions,
        include: () => this.include,
        exclude: () => this.exclude,
      },
    });

    project.npmignore?.exclude(`/${fileName}`);
  }

  public addInclude(pattern: string) {
    this.include.push(pattern);
  }

  public addExclude(pattern: string) {
    this.exclude.push(pattern);
  }
}
