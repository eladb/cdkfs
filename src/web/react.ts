import * as path from 'path';
import { Component } from '../component';
import { FileBase, FileBaseOptions, IResolver } from '../file';
import { NodeProject, NodeProjectOptions } from '../node-project';
import { SampleDir } from '../sample-file';
import { SourceCode } from '../source-code';
import { TypeScriptAppProject, TypeScriptProjectOptions } from '../typescript';
import { TypeScriptJsxMode, TypeScriptModuleResolution } from '../typescript-config';
import { deepMerge } from '../util';

export interface ReactRewireOptions {
  /**
   * Rewire webpack configuration.
   *
   * Use this property to override webpack configuration properties provided
   * by create-react-app, without needing to eject.
   *
   * This property will create a `config-overrides.js` file in your root directory,
   * which will contain the desired rewiring code.
   *
   * To **override** the configuration, you can provide simple key value pairs.
   * Keys take the form of js code directives that traverse to the desired property.
   * Values should be JSON serializable objects.
   *
   * For example, the following config:
   *
   * ```json
   * rewire: { "module.unknownContextCritical": false }
   * ```
   *
   * Will translate to the following `config-overrides.js` file:
   *
   * ```js
   * module.exports = function override(config, env) {
   *   config.module.unknownContextCritical = false;
   * }
   * ```
   *
   * @default - No rewired config.
   *
   * @see https://webpack.js.org/configuration/
   * @see https://github.com/timarney/react-app-rewired
   */
  readonly rewire?: { [key: string]: any };
}

export interface ReactTypeScriptProjectOptions extends TypeScriptProjectOptions, ReactRewireOptions {}

export interface ReactProjectOptions extends NodeProjectOptions, ReactRewireOptions {
  /**
   * Source directory.
   *
   * @default "src"
   */
  readonly srcdir?: string;
  /**
   * Generate one-time sample in `src/` and `public/` if there are no files there.
   * @default true
   */
  readonly sampleCode?: boolean;
}

/**
 * React project without TypeScript.
 *
 * @pjid react
 */
export class ReactProject extends NodeProject {
  /**
   * The directory in which source files reside.
   * @default "src"
   */
  public readonly srcdir: string;

  constructor(options: ReactProjectOptions) {
    super({
      jest: false,
      ...options,
    });

    this.srcdir = options.srcdir ?? 'src';

    new ReactComponent(this, { typescript: false, rewire: options.rewire });

    // generate sample code in `src` and `public` if these directories are empty or non-existent.
    if (options.sampleCode ?? true) {
      new ReactSampleCode(this, {
        fileExt: 'jsx',
        srcdir: this.srcdir,
      });
      new SampleDir(this, 'public', { sourceDir: path.join(__dirname, '..', '..', 'assets', 'web', 'react') });
    }
  }
}

/**
 * React project with TypeScript.
 *
 * @pjid react-ts
 */
export class ReactTypeScriptProject extends TypeScriptAppProject {
  /**
   * The directory in which source files reside.
   */
  public readonly srcdir: string;

  /**
   * TypeScript definition file included that ensures React types are picked
   * up by the TypeScript compiler.
   *
   */
  public readonly reactTypeDef: ReactTypeDef;

  constructor(options: ReactTypeScriptProjectOptions) {
    const defaultOptions = {
      srcdir: 'src',
      eslint: false,
      jest: false,
      tsconfig: {
        include: ['src'],
        compilerOptions: {
          target: 'es5',
          lib: [
            'dom',
            'dom.iterable',
            'esnext',
          ],
          allowJs: true,
          skipLibCheck: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          noFallthroughCasesInSwitch: true,
          module: 'esnext',
          moduleResolution: TypeScriptModuleResolution.NODE,
          resolveJsonModule: true,
          isolatedModules: true,
          noEmit: true,
          jsx: TypeScriptJsxMode.REACT_JSX,
        },
      },
      typescriptVersion: options.typescriptVersion ?? '^4.0.3',
    };

    // never generate default TypeScript sample code, since this class provides its own
    super(deepMerge([defaultOptions, options, { sampleCode: false }]) as TypeScriptProjectOptions);

    this.srcdir = options.srcdir ?? 'src';

    new ReactComponent(this, { typescript: true, rewire: options.rewire });

    this.reactTypeDef = new ReactTypeDef(this, 'react-app-env.d.ts');

    // generate sample code in `src` and `public` if these directories are empty or non-existent.
    if (options.sampleCode ?? true) {
      new ReactSampleCode(this, {
        fileExt: 'tsx',
        srcdir: this.srcdir,
      });
      new SampleDir(this, 'public', { sourceDir: path.join(__dirname, '..', '..', 'assets', 'web', 'react') });
    }
  }
}

export interface ReactComponentOptions extends ReactRewireOptions {
  /**
   * Whether to apply options specific for TypeScript React projects.
   *
   * @default false
   */
  readonly typescript?: boolean;
}

export class ReactComponent extends Component {
  private readonly typescript: boolean;

  constructor(project: NodeProject, options: ReactComponentOptions) {
    super(project);

    this.typescript = options.typescript ?? false;

    // No compile for react app
    project.compileTask.reset();

    project.addDeps('react', 'react-dom', 'react-scripts@^4.0.0', 'web-vitals');
    project.addDevDeps('@testing-library/jest-dom', '@testing-library/react', '@testing-library/user-event');
    if (this.typescript) {
      project.addDevDeps('@types/jest', '@types/react', '@types/react-dom');
    }

    const rewire = options.rewire ?? false;

    if (rewire) {

      const overridesPath = '.projen/react-config-overrides.js';
      project.addDevDeps('react-app-rewired');
      project.addFields({ 'config-overrides-path': overridesPath });

      const configOverrides = new SourceCode(this.project, overridesPath);
      configOverrides.line(`// ${FileBase.PROJEN_MARKER}`);
      configOverrides.line('/**');
      configOverrides.line(' * Override CRA configuration without needing to eject.');
      configOverrides.line(' *');
      configOverrides.line(' * @see https://www.npmjs.com/package/react-app-rewired');
      configOverrides.line(' */');
      configOverrides.open('module.exports = function override(config, env) {');
      for (const [key, value] of Object.entries(rewire)) {
        configOverrides.line(`config.${key} = ${JSON.stringify(value)};`);
      }
      configOverrides.line('return config;');
      configOverrides.close('};');
    }

    const reactScripts = rewire ? 'react-app-rewired' : 'react-scripts';

    // Create React App CLI commands, see: https://create-react-app.dev/docs/available-scripts/
    project.addTask('dev', {
      description: 'Starts the react application',
      exec: `${reactScripts} start`,
    });

    project.buildTask.exec(`${reactScripts} build`);

    project.addTask('eject', {
      description: 'Ejects your React application from react-scripts',
      // eject is not necessary to rewire
      exec: 'react-scripts eject',
    });

    project.testTask.exec(`${reactScripts} test --watchAll=false`);

    const testWatch = project.tasks.tryFind('test:watch');
    testWatch?.reset(`${reactScripts} test`);

    project.npmignore?.exclude('# Build', '/build/');
    project.gitignore.exclude('# Build', '/build/');

    project.package.addField('eslintConfig', {
      extends: [
        'react-app',
        'react-app/jest',
      ],
    });

    project.package.addField('browserslist', {
      production: [
        '>0.2%',
        'not dead',
        'not op_mini all',
      ],
      development: [
        'last 1 chrome version',
        'last 1 firefox version',
        'last 1 safari version',
      ],
    });
  }
}

interface ReactSampleCodeOptions {
  /**
   * File extension for sample javascript code to be saved as.
   *
   * @default "jsx"
   */
  readonly fileExt?: string;

  /**
   * The directory in which React jsx files are declared.
   */
  readonly srcdir: string;
}

class ReactSampleCode extends Component {
  private readonly fileExt: string;
  private readonly srcdir: string;

  constructor(project: NodeProject, options: ReactSampleCodeOptions) {
    super(project);

    this.fileExt = options.fileExt ?? 'jsx';
    this.srcdir = options.srcdir;

    const logoSvg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">',
      '    <g fill="#61DAFB">',
      '        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>',
      '        <circle cx="420.9" cy="296.5" r="45.7"/>',
      '        <path d="M520.5 78.1z"/>',
      '    </g>',
      '</svg>',
      '',
    ];

    const appJsx = [
      "import logo from './logo.svg';",
      "import './App.css'",
      '',
      'function App() {',
      '  return (',
      '   <div className="App">',
      '      <header className="App-header">',
      '        <img src={logo} className="App-logo" alt="logo" />',
      '        <p>',
      `          Edit <code>src/App.${this.fileExt}</code> and save to reload.`,
      '        </p>',
      '        <a className="App-link"',
      '          href="https://reactjs.org"',
      '          target="_blank"',
      '          rel="noopener noreferrer"',
      '        >',
      '          Learn React',
      '        </a>',
      '      </header>',
      '    </div>',
      '  );',
      '}',
      '',
      'export default App;',
      '',
    ];

    const appCss = [
      '.App {',
      '  text-align: center;',
      '}',
      '',
      '.App-logo {',
      '  height: 40vmin;',
      '  pointer-events: none;',
      '}',
      '',
      '@media (prefers-reduced-motion: no-preference) {',
      '  .App-logo {',
      '    animation: App-logo-spin infinite 20s linear;',
      '  }',
      '}',
      '',
      '.App-header {',
      '  background-color: #282c34;',
      '  min-height: 100vh;',
      '  display: flex;',
      '  flex-direction: column;',
      '  align-items: center;',
      '  justify-content: center;',
      '  font-size: calc(10px + 2vmin);',
      '  color: white;',
      '}',
      '',
      '.App-link {',
      '  color: #61dafb;',
      '}',
      '',
      '@keyframes App-logo-spin {',
      '  from {',
      '    transform: rotate(0deg);',
      '  }',
      '  to {',
      '    transform: rotate(360deg);',
      '  }',
      '}',
      '',
    ];

    const appTestJsx = [
      "import React from 'react';",
      "import { render, screen } from '@testing-library/react';",
      "import App from './App';",
      '',
      "test('renders learn react link', () => {",
      '  render(<App />);',
      '  const linkElement = screen.getByText(/learn react/i);',
      '  expect(linkElement).toBeInTheDocument();',
      '});',
      '',
    ];

    const indexJsx = [
      "import React from 'react';",
      "import ReactDOM from 'react-dom';",
      "import './index.css';",
      "import App from './App';",
      "import reportWebVitals from './reportWebVitals';",
      '',
      'ReactDOM.render(',
      '  <React.StrictMode>',
      '    <App />',
      '  </React.StrictMode>,',
      "  document.getElementById('root')",
      ');',
      '',
      '// If you want to start measuring performance in your app, pass a function',
      '// to log results (for example: reportWebVitals(console.log))',
      '// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals',
      'reportWebVitals();',
      '',
    ];

    const indexCss = [
      'body {',
      '  margin: 0;',
      "  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',",
      "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',",
      '    sans-serif;',
      '  -webkit-font-smoothing: antialiased;',
      '  -moz-osx-font-smoothing: grayscale;',
      '}',
      '',
      'code {',
      "  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',",
      '    monospace;',
      '}',
      '',
    ];

    const reportWebVitalsJs = [
      "import { ReportHandler } from 'web-vitals';",
      '',
      'const reportWebVitals = (onPerfEntry?: ReportHandler) => {',
      '  if (onPerfEntry && onPerfEntry instanceof Function) {',
      "    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {",
      '      getCLS(onPerfEntry);',
      '      getFID(onPerfEntry);',
      '      getFCP(onPerfEntry);',
      '      getLCP(onPerfEntry);',
      '      getTTFB(onPerfEntry);',
      '    });',
      '  }',
      '}',
      '',
      'export default reportWebVitals;',
    ];

    const setupTestsJs = [
      '// jest-dom adds custom jest matchers for asserting on DOM nodes.',
      '// allows you to do things like:',
      '// expect(element).toHaveTextContent(/react/i)',
      '// learn more: https://github.com/testing-library/jest-dom',
      "import '@testing-library/jest-dom';",
      '',
    ];

    // js/ts not jsx/tsx
    const fileExtWithoutX = this.fileExt.replace('x', '');

    new SampleDir(project, this.srcdir, {
      files: {
        'logo.svg': logoSvg.join('\n'),
        ['App.' + this.fileExt]: appJsx.join('\n'),
        ['App.test.' + this.fileExt]: appTestJsx.join('\n'),
        'App.css': appCss.join('\n'),
        ['index.' + this.fileExt]: indexJsx.join('\n'),
        'index.css': indexCss.join('\n'),
        ['reportWebVitals.' + fileExtWithoutX]: reportWebVitalsJs.join('\n'),
        ['setupTests.' + fileExtWithoutX]: setupTestsJs.join('\n'),
      },
    });
  }
}

export interface ReactTypeDefOptions extends FileBaseOptions { }

export class ReactTypeDef extends FileBase {
  constructor(project: ReactTypeScriptProject, filePath: string, options: ReactTypeDefOptions = {}) {
    super(project, filePath, options);
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    return [
      '/// <reference types="react-scripts" />',
    ].join('\n');
  }
}