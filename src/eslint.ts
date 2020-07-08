import type { Linter } from 'eslint';
import { Construct } from 'constructs';
import { JsonFile } from './json';
import { NodeProject } from './node-project';
import { Semver } from './semver';

export interface EslintOptions {
  config: Linter.Config;
  dependencies: Record<string, Semver>;
}

export class Eslint extends Construct {
  // (not "dev" dependencies, given that its relative to the construct, not the end workspace)
  public readonly dependencies: Record<string, Semver>;
  public readonly config: Linter.Config;

  constructor(project: NodeProject, options?: EslintOptions) {
    super(project, 'eslint');

    this.dependencies = options?.dependencies || {
      'typescript': Semver.caret('3.8.3'),
      '@typescript-eslint/eslint-plugin': Semver.caret('2.31.0'),
      '@typescript-eslint/parser': Semver.caret('2.19.2'),
      'eslint': Semver.caret('6.8.0'),
      'eslint-import-resolver-node': Semver.caret('0.3.3'),
      'eslint-import-resolver-typescript': Semver.caret('2.0.0'),
      'eslint-plugin-import': Semver.caret('2.20.2'),
      'json-schema': Semver.caret('0.2.5'), // required by @typescript-eslint/parser
    }

    this.config = options?.config || {
      env: {
        jest: true,
        node: true,
      },
      plugins: [
        '@typescript-eslint',
        'import',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      extends: [
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          node: {},
          typescript: {
            directory: './tsconfig.json',
          },
        },
      },
      ignorePatterns: [
        '*.js',
        '*.d.ts',
        'node_modules/',
        '*.generated.ts',
        'coverage',
      ],
      rules: {
        // Require use of the `import { foo } from 'bar';` form instead of `import foo = require('bar');`
        '@typescript-eslint/no-require-imports': [ 'error' ],

        // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        'indent': [ 'off' ], '@typescript-eslint/indent': [ 'error', 2 ],

        // Style
        'quotes': [ 'error', 'single', { avoidEscape: true } ],
        'comma-dangle': [ 'error', 'always-multiline' ], // ensures clean diffs, see https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
        'quote-props': [ 'error', 'consistent-as-needed', { unnecessary: true } ],

        // Require all imported dependencies are actually declared in package.json
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [               // Only allow importing devDependencies from:
              '**/build-tools/**',           // --> Build tools
              '**/test/**',                   // --> Unit tests
            ],
            optionalDependencies: false,    // Disallow importing optional dependencies (those shouldn't be in use in the project)
            peerDependencies: true,          // Allow importing peer dependencies (that aren't also direct dependencies)
          },
        ],

        // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
        'import/no-unresolved': [ 'error' ],
      },
    }

    project.addDevDependencies(this.dependencies);

    project.addScripts({ eslint: 'eslint . --ext .ts' });
    project.addTestCommands('yarn eslint');

    // exclude some files
    project.gitignore.exclude('/coverage');
    project.npmignore.exclude('/coverage');
    project.npmignore.exclude('/.eslintrc.json');

    new JsonFile(project, '.eslintrc.json', {obj: this.config});
  }

  public addRules(rules: { [rule: string]: any }) {
    for (const [k,v] of Object.entries(rules)) {
      this.config.rules[k] = v;
    }
  }
}