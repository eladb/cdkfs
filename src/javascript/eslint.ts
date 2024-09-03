import * as assert from "assert";
import { Prettier } from "./prettier";
import { Project, TaskStepOptions } from "..";
import { DEFAULT_PROJEN_RC_JS_FILENAME } from "../common";
import { ICompareString } from "../compare";
import { Component } from "../component";
import { NodeProject } from "../javascript";
import { JavascriptFile, JavascriptRaw } from "../javascript-file";
import { JsonFile } from "../json";
import { Task } from "../task";
import { YamlFile } from "../yaml";

/**
 * What format should the eslint file be.
 *
 */
export enum EslintConfigFileFormat {
  /**
   * JavaScript file (new flat format) - using ESM-style imports/exports
   *
   * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
   */
  JAVASCRIPT_FLAT_ESM = "flat-esm",

  /**
   * JavaScript file (new flat format) - using CJS-style require/module.exports
   *
   * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
   */
  JAVASCRIPT_FLAT_CJS = "flat-cjs",

  /**
   * JavaScript file (new flat format) - using CJS-style require/module.exports
   *
   * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
   */
  JAVASCRIPT_OLD_CJS = "old-cjs",

  /**
   * JSON file
   *
   * @deprecated ESLINT project is transitioning away from this format, use `JAVASCRIPT_FLAT` instead
   * @see https://eslint.org/docs/latest/use/configure/configuration-files
   */
  JSON = "json",

  /**
   * YAML file
   *
   * @deprecated ESLINT project is transitioning away from this format, use `JAVASCRIPT_FLAT` instead
   * @see https://eslint.org/docs/latest/use/configure/configuration-files
   */
  YAML = "yaml",
}

/**
 * Options for eslint.
 */
export interface EslintOptions {
  /**
   * Path to `tsconfig.json` which should be used by eslint.
   * @default "./tsconfig.json"
   */
  readonly tsconfigPath?: string;

  /**
   * Files or glob patterns or directories with source files to lint (e.g. [ "src" ])
   *
   * @remarks
   * This is actually **required**, but marked as optional so upstream projects can accept this interface
   * and provide this value.
   */
  readonly dirs?: string[];

  /**
   * Files or glob patterns or directories with source files that include tests and build tools
   *
   * These sources are linted but may also import packages from `devDependencies`.
   * @default []
   */
  readonly devdirs?: string[];
  /**
   * File types that should be linted (e.g. [ ".js", ".ts" ])
   * @default [".ts"]
   */
  readonly fileExtensions?: string[];

  /**
   * Options for eslint command executed by eslint task
   */
  readonly commandOptions?: EslintCommandOptions;

  /**
   * List of file patterns that should not be linted, using the same syntax
   * as .gitignore patterns.
   *
   * @default [ '*.js', '*.d.ts', 'node_modules/', '*.generated.ts', 'coverage' ]
   */
  readonly ignorePatterns?: string[];

  /**
   * Projenrc file to lint. Use empty string to disable.
   * @default "projenrc.js"
   * @deprecated provide as `devdirs`
   */
  readonly lintProjenRcFile?: string;

  /**
   * Should we lint .projenrc.js
   *
   * @default true
   * @deprecated set to `false` to remove any automatic rules and add manually
   */
  readonly lintProjenRc?: boolean;

  /**
   * Enable prettier for code formatting
   * @default false
   */
  readonly prettier?: boolean;

  /**
   * The extends array in eslint is order dependent.
   * This option allows to sort the extends array in any way seen fit.
   *
   * @default - Use known ESLint best practices to place "prettier" plugins at the end of the array
   */
  readonly sortExtends?: ICompareString;

  /**
   * Enable import alias for module paths
   * @default undefined
   */
  readonly aliasMap?: { [key: string]: string };

  /**
   * Enable import alias for module paths
   * @default undefined
   */
  readonly aliasExtensions?: string[];

  /**
   * Always try to resolve types under `<root>@types` directory even it doesn't contain any source code.
   * This prevents `import/no-unresolved` eslint errors when importing a `@types/*` module that would otherwise remain unresolved.
   * @default true
   */
  readonly tsAlwaysTryTypes?: boolean;

  /**
   * File format to use
   *
   * @default EslintConfigFileFormat.JSON
   */
  readonly fileFormat?: EslintConfigFileFormat;

  /**
   * Write eslint configuration as YAML instead of JSON
   * @deprecated use `fileFormat` instead
   * @default false
   */
  readonly yaml?: boolean;
}

export interface EslintCommandOptions {
  /**
   * Whether to fix eslint issues when running the eslint task
   * @default true
   */
  readonly fix?: boolean;

  /**
   * Extra flag arguments to pass to eslint command
   */
  readonly extraArgs?: string[];
}

/**
 * eslint rules override
 */
export interface EslintOverride {
  /**
   * Files or file patterns on which to apply the override
   */
  readonly files: string[];

  /**
   * Pattern(s) to exclude from this override.
   * If a file matches any of the excluded patterns, the configuration won’t apply.
   */
  readonly excludedFiles?: string[];

  /**
   * The overridden rules
   */
  readonly rules?: { [rule: string]: any };

  /**
   * The overridden parser
   */
  readonly parser?: string;

  /**
   * Config(s) to extend in this override
   */
  readonly extends?: string[];

  /**
   * `plugins` override
   */
  readonly plugins?: string[];
}

/**
 * Represents eslint configuration.
 */
export class Eslint extends Component {
  /**
   * Returns the singleton Eslint component of a project or undefined if there is none.
   */
  public static of(project: Project): Eslint | undefined {
    const isEslint = (c: Component): c is Eslint => c instanceof Eslint;
    return project.components.find(isEslint);
  }

  /**
   * eslint rules.
   */
  public readonly rules: { [rule: string]: any[] };

  /**
   * eslint overrides.
   */
  public readonly overrides: EslintOverride[] = [];

  /**
   * eslint task.
   */
  public readonly eslintTask: Task;

  /**
   * Direct access to the eslint configuration (escape hatch)
   */
  public readonly config: any;

  /**
   * File patterns that should not be linted
   */
  public readonly ignorePatterns: string[];

  /**
   * File format
   */
  public readonly fileFormat: EslintConfigFileFormat;

  /**
   * File name
   */
  public readonly fileName: string;

  private _formattingRules: Record<string, any>;
  private readonly _allowDevDeps: Set<string>;
  private readonly _plugins = new Set<string>();
  private readonly _extends = new Set<string>();
  private readonly _fileExtensions: Set<string>;
  private readonly _flagArgs: Set<string>;
  private readonly _lintPatterns: Set<string>;
  private _javascript?: JavascriptFile;
  private readonly nodeProject: NodeProject;
  private readonly sortExtends: ICompareString;

  constructor(project: NodeProject, options: EslintOptions) {
    super(project);

    assert(options.dirs, "dirs is required");

    this.nodeProject = project;

    project.addDevDeps(
      "eslint@^8",
      "@typescript-eslint/eslint-plugin@^7",
      "@typescript-eslint/parser@^7",
      "eslint-import-resolver-typescript",
      "eslint-plugin-import"
    );

    if (options.aliasMap) {
      project.addDevDeps("eslint-import-resolver-alias");
    }

    const lintProjenRc = options.lintProjenRc ?? true;
    const lintProjenRcFile =
      options.lintProjenRcFile ?? DEFAULT_PROJEN_RC_JS_FILENAME;

    const devdirs = options.devdirs ?? [];

    this._lintPatterns = new Set([
      ...options.dirs,
      ...devdirs,
      ...(lintProjenRc && lintProjenRcFile ? [lintProjenRcFile] : []),
    ]);
    this._fileExtensions = new Set(options.fileExtensions ?? [".ts"]);

    this._allowDevDeps = new Set((devdirs ?? []).map((dir) => `**/${dir}/**`));

    const commandOptions = options.commandOptions ?? {};
    const { fix = true, extraArgs: extraFlagArgs = [] } = commandOptions;
    this._flagArgs = new Set(extraFlagArgs);
    if (fix) {
      this._flagArgs.add("--fix");
    }
    this._flagArgs.add("--no-error-on-unmatched-pattern");

    this.sortExtends = options.sortExtends ?? new ExtendsDefaultOrder();

    this.eslintTask = project.addTask("eslint", {
      description: "Runs eslint against the codebase",
    });
    this.updateTask();

    project.testTask.spawn(this.eslintTask);

    // exclude some files
    project.npmignore?.exclude("/.eslintrc.json");

    this._formattingRules = {
      // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
      indent: ["off"],
      "@typescript-eslint/indent": ["error", 2],

      // Style
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"], // ensures clean diffs, see https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
      "comma-spacing": ["error", { before: false, after: true }], // space after, no space before
      "no-multi-spaces": ["error", { ignoreEOLComments: false }], // no multi spaces
      "array-bracket-spacing": ["error", "never"], // [1, 2, 3]
      "array-bracket-newline": ["error", "consistent"], // enforce consistent line breaks between brackets
      "object-curly-spacing": ["error", "always"], // { key: 'value' }
      "object-curly-newline": ["error", { multiline: true, consistent: true }], // enforce consistent line breaks between braces
      "object-property-newline": [
        "error",
        { allowAllPropertiesOnSameLine: true },
      ], // enforce "same line" or "multiple line" on object properties
      "keyword-spacing": ["error"], // require a space before & after keywords
      "brace-style": ["error", "1tbs", { allowSingleLine: true }], // enforce one true brace style
      "space-before-blocks": ["error"], // require space before blocks
      curly: ["error", "multi-line", "consistent"], // require curly braces for multiline control statements
      "@typescript-eslint/member-delimiter-style": ["error"],

      // Require semicolons
      semi: ["error", "always"],

      // Max line lengths
      "max-len": [
        "error",
        {
          code: 150,
          ignoreUrls: true, // Most common reason to disable it
          ignoreStrings: true, // These are not fantastic but necessary for error messages
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
        },
      ],

      // Don't unnecessarily quote properties
      "quote-props": ["error", "consistent-as-needed"],
    };

    this.rules = {
      // Require use of the `import { foo } from 'bar';` form instead of `import foo = require('bar');`
      "@typescript-eslint/no-require-imports": ["error"],

      // Require all imported dependencies are actually declared in package.json
      "import/no-extraneous-dependencies": [
        "error",
        {
          // Only allow importing devDependencies from "devdirs".
          devDependencies: () => this.renderDevDepsAllowList(),
          optionalDependencies: false, // Disallow importing optional dependencies (those shouldn't be in use in the project)
          peerDependencies: true, // Allow importing peer dependencies (that aren't also direct dependencies)
        },
      ],

      // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
      "import/no-unresolved": ["error"],

      // Require an ordering on all imports
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Cannot import from the same module twice
      "import/no-duplicates": ["error"],

      // Cannot shadow names
      "no-shadow": ["off"],
      "@typescript-eslint/no-shadow": ["error"],

      // Required spacing in property declarations (copied from TSLint, defaults are good)
      "key-spacing": ["error"],

      // No multiple empty lines
      "no-multiple-empty-lines": ["error"],

      // One of the easiest mistakes to make
      "@typescript-eslint/no-floating-promises": ["error"],

      // Make sure that inside try/catch blocks, promises are 'return await'ed
      // (must disable the base rule as it can report incorrect errors)
      "no-return-await": ["off"],
      "@typescript-eslint/return-await": ["error"],

      // Useless diff results
      "no-trailing-spaces": ["error"],

      // Must use foo.bar instead of foo['bar'] if possible
      "dot-notation": ["error"],

      // Are you sure | is not a typo for || ?
      "no-bitwise": ["error"],

      // Member ordering
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "public-static-field",
            "public-static-method",
            "protected-static-field",
            "protected-static-method",
            "private-static-field",
            "private-static-method",

            "field",

            // Constructors
            "constructor", // = ["public-constructor", "protected-constructor", "private-constructor"]

            // Methods
            "method",
          ],
        },
      ],
    };

    // Overrides for .projenrc.js
    // @deprecated
    if (lintProjenRc) {
      this.overrides = [
        {
          files: [lintProjenRcFile || DEFAULT_PROJEN_RC_JS_FILENAME],
          rules: {
            "@typescript-eslint/no-require-imports": "off",
            "import/no-extraneous-dependencies": "off",
          },
        },
      ];
    }

    this.ignorePatterns = options.ignorePatterns ?? [
      "*.js",
      // @deprecated
      ...(lintProjenRc
        ? [`!${lintProjenRcFile || DEFAULT_PROJEN_RC_JS_FILENAME}`]
        : []),
      "*.d.ts",
      "node_modules/",
      "*.generated.ts",
      "./coverage",
    ];

    const tsconfig = options.tsconfigPath ?? "./tsconfig.json";

    this.addPlugins("@typescript-eslint");
    this.addPlugins("import");
    this.addExtends("plugin:import/typescript");

    this.config = {
      env: {
        jest: true,
        node: true,
      },
      root: true,
      plugins: this._plugins,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: tsconfig,
      },
      extends: () =>
        Array.from(this._extends).sort((a, b) =>
          this.sortExtends.compare(a, b)
        ),
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          ...(options.aliasMap && {
            alias: {
              map: Object.entries(options.aliasMap).map(([k, v]) => [k, v]),
              extensions: options.aliasExtensions,
            },
          }),
          node: {},
          typescript: {
            project: tsconfig,
            ...(options.tsAlwaysTryTypes !== false && { alwaysTryTypes: true }),
          },
        },
      },
      ignorePatterns: this.ignorePatterns,
      rules: () => ({ ...this._formattingRules, ...this.rules }),
      overrides: this.overrides,
    };

    if (
      options.yaml &&
      options.fileFormat &&
      options.fileFormat !== EslintConfigFileFormat.YAML
    ) {
      throw new Error(
        "Cannot specify 'yaml' and a file format different from 'yaml', please use just `fileFormat`"
      );
    }

    const format = options.yaml
      ? EslintConfigFileFormat.YAML
      : options.fileFormat ?? EslintConfigFileFormat.JSON;
    this.fileFormat = format;

    if (format === EslintConfigFileFormat.YAML) {
      this.fileName = ".eslintrc.yml";
      new YamlFile(project, this.fileName, {
        obj: this.config,
        marker: true,
      });
    } else if (
      format === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ||
      format === EslintConfigFileFormat.JAVASCRIPT_FLAT_CJS ||
      format === EslintConfigFileFormat.JAVASCRIPT_OLD_CJS
    ) {
      let configFileName: string;
      if (format === EslintConfigFileFormat.JAVASCRIPT_OLD_CJS) {
        configFileName = ".eslintrc.js";
        new JavascriptFile(project, configFileName, {
          obj: this.config,
          marker: true,
          allowComments: true,
          cjs: true,
        });
      } else {
        const ext =
          format === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ? "mjs" : "cjs";
        configFileName = `eslint.config.${ext}`;

        this._javascript = new JavascriptFile(project, configFileName, {
          obj: () =>
            [
              ...this.renderExtends(...(this.config.extends ?? [])).map(
                (e) => ({
                  files: this.config.files,
                  [`...${e}`]: true,
                })
              ),
              this.config,
              ...(this.overrides ?? []).flatMap((overrideVal) => [
                ...this.renderExtends(...(overrideVal.extends ?? [])).map(
                  (e) => ({
                    files: overrideVal.files,
                    [`...${e}`]: true,
                  })
                ),
                overrideVal,
              ]),
            ].map(
              (
                config:
                  | string // this is for plugin-provided configs, expands to something like `...externalConfigs`
                  | (unknown & {
                      parser?: string;
                      parserOptions?: never;
                      env?: never;
                      ignorePatterns?: Array<string>;
                      noInlineConfig?: never;
                      reportUnusedDisableDirectives?: never;
                      plugins?: Set<string> | Array<string>;
                    })
              ) => {
                if (typeof config === "string") {
                  return config;
                }
                return {
                  ...config,
                  plugins: this.renderPlugins(config.plugins),
                  root: undefined,
                  overrides: undefined,
                  extends: undefined,
                  noInlineConfig: undefined,
                  reportUnusedDisableDirectives: undefined,

                  ignorePatterns: undefined,
                  ignores:
                    // if it starts with a !, has a /, or has a **, then leve it alone
                    // otherwise, add a **/ prefix
                    config.ignorePatterns?.map((p) =>
                      p.match(/(\/|\*\*|^\!)/) ? p : `**/${p}`
                    ),

                  parser: undefined,
                  parserOptions: undefined,
                  env: undefined,
                  languageOptions:
                    config.parser || config.env
                      ? {
                          parser: config.parser
                            ? this.renderParser(config.parser)
                            : undefined,
                          parserOptions: config.parserOptions,
                          globals: config.env,
                        }
                      : undefined,

                  ...(config.noInlineConfig ||
                  config.reportUnusedDisableDirectives
                    ? {
                        linterOptions: {
                          noInlineConfig: config.noInlineConfig,
                          reportUnusedDisableDirectives:
                            config.reportUnusedDisableDirectives,
                        },
                      }
                    : {}),
                };
              }
            ),
          marker: true,
          allowComments: true,
          cjs: format !== EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM,
        });
      }
      this.fileName = configFileName;
    } else {
      this.fileName = ".eslintrc.json";
      new JsonFile(project, this.fileName, {
        obj: this.config,
        // https://eslint.org/docs/latest/user-guide/configuring/configuration-files#comments-in-configuration-files
        marker: true,
        allowComments: true,
      });
    }

    // if the user enabled prettier explicitly _or_ if the project has a
    // `Prettier` component, we shall tweak our configuration accordingly.
    if (options.prettier || Prettier.of(project)) {
      this.enablePrettier();
    }
  }

  /**
   * Returns an immutable copy of the lintPatterns being used by this eslint configuration.
   */
  public get lintPatterns(): string[] {
    if (this._lintPatterns && this._lintPatterns.size > 0) {
      return [...this._lintPatterns];
    }

    return [];
  }

  /**
   * Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ])
   */
  public addLintPattern(pattern: string) {
    this._lintPatterns.add(pattern);
    this.updateTask();
  }

  /**
   * Add an eslint rule.
   */
  public addRules(rules: { [rule: string]: any }) {
    for (const [k, v] of Object.entries(rules)) {
      this.rules[k] = v;
    }
  }

  /**
   * Adds an eslint plugin
   * @param plugins The names of plugins to add
   */
  public addPlugins(...plugins: string[]) {
    for (const plugin of plugins) {
      this._plugins.add(plugin);
    }
  }

  /**
   * Add an eslint override.
   */
  public addOverride(override: EslintOverride) {
    this.overrides.push(override);
  }

  /**
   * Do not lint these files.
   */
  public addIgnorePattern(pattern: string) {
    this.ignorePatterns.push(pattern);
  }

  /**
   * Adds an `extends` item to the eslint configuration.
   * @param extendList The list of "extends" to add.
   */
  public addExtends(...extendList: string[]) {
    for (const extend of extendList) {
      this._extends.add(extend);
    }
  }

  /**
   * Add a glob file pattern which allows importing dev dependencies.
   * @param pattern glob pattern.
   */
  public allowDevDeps(pattern: string) {
    this._allowDevDeps.add(pattern);
  }

  /**
   * Enables prettier for code formatting.
   */
  private enablePrettier() {
    this.nodeProject.addDevDeps(
      "prettier",
      "eslint-plugin-prettier",
      "eslint-config-prettier"
    );

    this._formattingRules = {};

    this.addExtends("plugin:prettier/recommended");
  }

  private renderDevDepsAllowList() {
    return Array.from(this._allowDevDeps);
  }

  private renderParser(parserName: string): string | undefined {
    if (
      this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ||
      this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_CJS
    ) {
      if (!this._javascript) {
        throw new Error("Cannot render plugins without a JavascriptFile");
      }
      // "@foo" -> "@foo/eslint-parser"
      // "foo" -> "eslint-parser-foo"
      const parserModule = parserName.startsWith("@")
        ? parserName
        : `eslint-parser-${parserName}`;

      // "@foo" -> "parserFoo"
      // "foo" -> "parserFoo"
      const parserFixed = `parser${parserName
        .replace(/^@/g, "")
        .replace(/(?:^|-|\/)(.)/g, (_, c) => c.toUpperCase())}`;
      const [parserToken] = this._javascript.dependencies.addImport(
        parserFixed,
        parserModule
      );

      return parserToken.toString();
    } else {
      return parserName;
    }
  }

  private renderPlugins(
    plugins: Set<string> | Array<string> | undefined
  ): Record<string, string> | Array<string> | undefined {
    if (!plugins) {
      return undefined;
    }

    if (
      this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ||
      this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_CJS
    ) {
      if (!this._javascript) {
        throw new Error("Cannot render plugins without a JavascriptFile");
      }
      if (plugins) {
        const output: Record<string, string> = {};
        for (const plugin of plugins) {
          // "@foo" -> "@foo/eslint-plugin"
          // "foo" -> "eslint-plugin-foo"
          const pluginModule = plugin.startsWith("@")
            ? `${plugin}/eslint-plugin`
            : `eslint-plugin-${plugin}`;

          // "@foo" -> "pluginFoo"
          // "foo" -> "pluginFoo"
          const pluginFixed = `plugin${plugin
            .replace(/^@/g, "")
            .replace(/(?:^|-)(.)/g, (_, c) => c.toUpperCase())}`;
          const [pluginToken] = this._javascript.dependencies.addImport(
            pluginFixed,
            pluginModule
          );

          output[plugin] = pluginToken.toString();
        }
        return output;
      }
      return undefined;
    } else {
      return [...plugins];
    }
  }

  /**
   * Take each extends and make it a require/import and place it ahead of the config that set "extends".
   *
   * See {@link https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs|Migration Guide: Predefined and Shareable Configs}
   */
  private renderExtends(...extendsNames: string[]): Array<string> {
    if (
      !(
        this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ||
        this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_CJS
      )
    ) {
      throw new Error(
        "renderExtends should only be called for JavaScript flat format eslint files"
      );
    }

    if (!this._javascript) {
      throw new Error("Cannot render extends without a JavascriptFile");
    }

    const output: Array<string> = [];
    for (const extendsName of extendsNames) {
      //'eslint:recommended'
      if (extendsName.startsWith("eslint:")) {
        const [pluginToken] = this._javascript.dependencies.addImport(
          "js",
          "@eslint/js"
        );
        output.push(
          JavascriptRaw.value(`${pluginToken}.configs.recommended`).toString()
        );
      }

      //'plugin:@typescript-eslint/recommended'
      //'plugin:import/typescript'
      else if (extendsName.startsWith("plugin:")) {
        // "plugin:@typescript-eslint/recommended" -> "@typescript-eslint/eslint-plugin"
        // "plugin:import/typescript" -> "eslint-plugin-import"
        const pluginModule = extendsName.startsWith("plugin:@")
          ? `${extendsName.replace(/(^plugin:|\/.*$)/g, "")}/eslint-plugin`
          : `eslint-plugin-${extendsName.replace(/(^plugin:|\/.*$)/g, "")}`;

        // "plugin:@typescript-eslint/recommended" -> "pluginTypescriptEslint"
        // "plugin:import/typescript" -> "pluginImport"
        const pluginFixed = `plugin${extendsName
          .replace(/(^plugin:@?|\/.*$)/g, "")
          .replace(/(?:^|-)(.)/g, (_, c) => c.toUpperCase())}`;

        const [pluginToken] = this._javascript.dependencies.addImport(
          pluginFixed,
          pluginModule
        );
        output.push(
          JavascriptRaw.value(
            `${pluginToken}.configs.${extendsName.replace(/.*\/(.*)$/, "$1")}`
          ).toString()
        );
      }

      //'./node_modules/coding-standard/eslintDefaults.js'
      else {
        // "./node_modules/coding-standard/eslintDefaults.js" -> "codingStandardEslintDefaults"
        const extendImport = `extends${extendsName
          .replace(/(\/node_modules\/)/, "")
          .replace(/\.[mc]?[tj]s$/, "")
          .replace(/(?:[^a-zA-Z0-9]+|^)(.)/g, (_, c) => c.toUpperCase())}`;

        const [pluginToken] = this._javascript.dependencies.addImport(
          extendImport,
          extendsName
        );
        output.push(pluginToken.toString());
      }
    }
    return output;
  }

  /**
   * Update the task with the current list of lint patterns and file extensions
   */
  private updateTask() {
    const taskExecCommand = "eslint";
    const argsSet = new Set<string>();
    if (this._fileExtensions.size > 0) {
      if (
        this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_ESM ||
        this.fileFormat === EslintConfigFileFormat.JAVASCRIPT_FLAT_CJS
      ) {
        // see https://eslint.org/docs/latest/use/configure/migration-guide#--ext
        this.config.files = [...this._fileExtensions.values()].map(
          (ext) => `**/*${ext}`
        );
      } else {
        argsSet.add(`--ext ${[...this._fileExtensions].join(",")}`);
      }
    }
    argsSet.add(`${[...this._flagArgs].join(" ")}`);
    argsSet.add("$@"); // External args go here

    for (const pattern of this._lintPatterns) {
      argsSet.add(pattern);
    }

    this.eslintTask.reset(
      [taskExecCommand, ...argsSet].join(" "),
      this.buildTaskStepOptions(taskExecCommand)
    );
  }

  /**
   * In case of external editing of the eslint task step, we preserve those changes.
   * Otherwise, we return the default task step options.
   *
   * @param taskExecCommand The command that the ESLint tasks executes
   * @returns Either the externally edited, or the default task step options
   */
  private buildTaskStepOptions(taskExecCommand: string): TaskStepOptions {
    const currentEslintTaskStep = this.eslintTask?.steps?.find((step) =>
      step?.exec?.startsWith?.(taskExecCommand)
    );

    if (currentEslintTaskStep) {
      const { args, condition, cwd, env, name, receiveArgs } =
        currentEslintTaskStep;
      return {
        args,
        condition,
        cwd,
        env,
        name,
        receiveArgs,
      };
    }

    return {
      receiveArgs: true,
    };
  }
}

/**
 * A compare protocol tp sort the extends array in eslint config using known ESLint best practices.
 *
 * Places "prettier" plugins at the end of the array
 */
class ExtendsDefaultOrder implements ICompareString {
  // This is the order that ESLint best practices suggest
  private static ORDER = ["plugin:prettier/recommended", "prettier"];

  public compare(a: string, b: string): number {
    return (
      ExtendsDefaultOrder.ORDER.indexOf(a) -
      ExtendsDefaultOrder.ORDER.indexOf(b)
    );
  }
}
