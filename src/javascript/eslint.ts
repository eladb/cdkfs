import { Prettier } from "./prettier";
import { Project } from "..";
import { PROJEN_RC } from "../common";
import { Component } from "../component";
import { NodeProject } from "../javascript";
import { JsConfigFile } from "../js-config";
import { JsonFile } from "../json";
import { Task } from "../task";
import { YamlFile } from "../yaml";

export interface EslintOptions {
  /**
   * Path to `tsconfig.json` which should be used by eslint.
   * @default "./tsconfig.json"
   */
  readonly tsconfigPath?: string;

  /**
   * Files or glob patterns or directories with source files to lint (e.g. [ "src" ])
   */
  readonly dirs: string[];

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
   * List of file patterns that should not be linted, using the same syntax
   * as .gitignore patterns.
   *
   * @default [ '*.js', '*.d.ts', 'node_modules/', '*.generated.ts', 'coverage' ]
   */
  readonly ignorePatterns?: string[];

  /**
   * Projenrc file to lint. Use empty string to disable.
   * @default PROJEN_RC
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
   * Write eslint configuration as YAML instead of JSON
   * @default false
   */
  readonly yaml?: boolean;

  /**
   * Write eslint configuration as JsConfig file instead of JSON
   * @default false
   */
  readonly jsConfig?: boolean;
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
   * The overriden rules
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
   * Returns the singletone Eslint component of a project or undefined if there is none.
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

  private _formattingRules: Record<string, any>;
  private readonly _allowDevDeps: Set<string>;
  private readonly _plugins = new Array<string>();
  private readonly _extends = new Array<string>();
  private readonly _fileExtensions: string[];
  private readonly _lintPatterns: string[];
  private readonly nodeProject: NodeProject;

  constructor(project: NodeProject, options: EslintOptions) {
    super(project);

    this.nodeProject = project;

    project.addDevDeps(
      "eslint@^8",
      "@typescript-eslint/eslint-plugin@^6",
      "@typescript-eslint/parser@^6",
      "eslint-import-resolver-node",
      "eslint-import-resolver-typescript",
      "eslint-plugin-import"
    );

    if (options.aliasMap) {
      project.addDevDeps("eslint-import-resolver-alias");
    }

    const lintProjenRc = options.lintProjenRc ?? true;
    const lintProjenRcFile = options.lintProjenRcFile ?? PROJEN_RC;

    const devdirs = options.devdirs ?? [];

    this._lintPatterns = [
      ...options.dirs,
      ...devdirs,
      ...(lintProjenRc && lintProjenRcFile ? [lintProjenRcFile] : []),
    ];
    this._fileExtensions = options.fileExtensions ?? [".ts"];

    this._allowDevDeps = new Set((devdirs ?? []).map((dir) => `**/${dir}/**`));

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
      "no-duplicate-imports": ["error"],

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
          files: [lintProjenRcFile || PROJEN_RC],
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
      ...(lintProjenRc ? [`!${lintProjenRcFile || PROJEN_RC}`] : []),
      "*.d.ts",
      "node_modules/",
      "*.generated.ts",
      "coverage",
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
      plugins: () => this._plugins,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: tsconfig,
      },
      extends: () => this._extends,
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

    if (options.yaml) {
      new YamlFile(project, ".eslintrc.yml", {
        obj: this.config,
        marker: true,
      });
    } else {
      let Config: typeof JsonFile | typeof JsConfigFile;
      let configFileName: string;
      if (options.jsConfig) {
        Config = JsConfigFile;
        configFileName = ".eslintrc.js";
      } else {
        Config = JsonFile;
        configFileName = ".eslintrc.json";
      }
      new Config(project, configFileName, {
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
   * Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ])
   */
  public addLintPattern(pattern: string) {
    this._lintPatterns.push(pattern);
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
    this._plugins.push(...plugins);
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
    this._extends.push(...extendList);
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

    this.addPlugins("prettier");

    this._formattingRules = {
      "prettier/prettier": ["error"],
    };

    this.addExtends("prettier", "plugin:prettier/recommended");
  }

  private renderDevDepsAllowList() {
    return Array.from(this._allowDevDeps);
  }

  /**
   * Update the task with the current list of lint patterns and file extensions
   */
  private updateTask() {
    this.eslintTask.reset(
      [
        "eslint",
        `--ext ${this._fileExtensions.join(",")}`,
        "--fix",
        "--no-error-on-unmatched-pattern",
        ...this._lintPatterns,
      ].join(" ")
    );
  }
}
