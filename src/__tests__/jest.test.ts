import { Jest, NodeProject, TypeScriptProject, LogLevel } from '..';
import { PROJEN_RC } from '../common';
import * as logging from '../logging';
import { mkdtemp, synthSnapshot } from './util';

logging.disable();

const compilerOptionDefaults = {
  alwaysStrict: true,
  declaration: true,
  experimentalDecorators: true,
  inlineSourceMap: true,
  inlineSources: true,
  lib: ['es2018'],
  module: 'CommonJS',
  noEmitOnError: false,
  noFallthroughCasesInSwitch: true,
  noImplicitAny: true,
  noImplicitReturns: true,
  noImplicitThis: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  resolveJsonModule: true,
  strict: true,
  strictNullChecks: true,
  strictPropertyInitialization: true,
  stripInternal: true,
  target: 'ES2018',
};

test('Node Project Jest Defaults Configured', () => {
  const project = new NodeProject({
    outdir: mkdtemp(),
    name: 'test-node-project',
    mergify: false,
    projenDevDependency: false,
    defaultReleaseBranch: 'master',
    jest: true,
    logging: {
      level: LogLevel.OFF,
    },
  });

  expect(project.jest?.config).toBeTruthy();
  expect(project.jest?.config.clearMocks).toEqual(true);
  expect(project.jest?.config.collectCoverage).toEqual(true);

  const snapshot = synthSnapshot(project);
  expect(snapshot['package.json'].jest).toBeTruthy();

  const jest = snapshot['package.json'].jest;
  expect(jest.clearMocks).toEqual(true);
  expect(jest.collectCoverage).toEqual(true);
  expect(jest.coverageDirectory).toEqual('coverage');
});

test('Node Project Jest With Options Configured', () => {
  const project = new NodeProject({
    outdir: mkdtemp(),
    name: 'test-node-project',
    defaultReleaseBranch: 'master',
    mergify: false,
    projenDevDependency: false,
    jest: true,
    jestOptions: {
      jestConfig: {
        automock: true,
        bail: 5,
        notify: false,
      },
    },
    logging: {
      level: LogLevel.OFF,
    },
  });

  const snapshot = synthSnapshot(project);
  expect(snapshot['package.json'].jest).toBeTruthy();

  const jest = snapshot['package.json'].jest;
  expect(jest.automock).toEqual(true);
  expect(jest.bail).toEqual(5);
  expect(jest.notify).toEqual(false);
});

test('Node Project Jest With Path Configured', () => {
  const project = new NodeProject({
    outdir: mkdtemp(),
    name: 'test-node-project',
    defaultReleaseBranch: 'master',
    mergify: false,
    projenDevDependency: false,
    jest: true,
    jestOptions: {
      configFilePath: 'jest.config.json',
      jestConfig: {
        automock: true,
        bail: 5,
        notify: false,
      },
    },
    logging: {
      level: LogLevel.OFF,
    },
  });

  const snapshot = synthSnapshot(project);
  expect(snapshot['package.json'].jest).toBeUndefined();

  const jest = snapshot['jest.config.json'];
  expect(jest.automock).toEqual(true);
  expect(jest.bail).toEqual(5);
  expect(jest.notify).toEqual(false);
});

test('Typescript Project Jest Defaults Configured', () => {
  // WHEN
  const project = new TypeScriptProject({
    outdir: mkdtemp(),
    name: 'test-typescript-project',
    defaultReleaseBranch: 'master',
    mergify: false,
    projenDevDependency: false,
    jest: true,
    logging: {
      level: LogLevel.OFF,
    },
  });

  const snapshot = synthSnapshot(project);
  const jestTypescriptConfig = snapshot['tsconfig.jest.json'];

  expect(jestTypescriptConfig.compilerOptions).toBeTruthy();
  expect(jestTypescriptConfig.compilerOptions).toStrictEqual(compilerOptionDefaults);
  expect(jestTypescriptConfig.include).toEqual([PROJEN_RC, 'src/**/*.ts', 'test/**/*.ts']);
  expect(jestTypescriptConfig.exclude).toEqual(['node_modules']);
});


test('Typescript Project Jest With Compiler Options', () => {
  const compilerOptions = {
    esModuleInterop: true,
    noImplicitAny: false,
  };

  const project = new TypeScriptProject({
    outdir: mkdtemp(),
    name: 'test-typescript-project',
    defaultReleaseBranch: 'master',
    mergify: false,
    projenDevDependency: false,
    jest: true,
    jestOptions: {
      typescriptConfig: {
        compilerOptions,
      },
    },
    logging: {
      level: LogLevel.OFF,
    },
  });

  const mergedCompilerOptions = {
    ...compilerOptionDefaults,
    ...compilerOptions,
  };

  const snapshot = synthSnapshot(project);
  const jestTypescriptConfig = snapshot['tsconfig.jest.json'];

  expect(jestTypescriptConfig.compilerOptions).toBeTruthy();
  expect(jestTypescriptConfig.compilerOptions).toStrictEqual(mergedCompilerOptions);
});

test('testdir is under src', () => {
  // WHEN
  const project = new TypeScriptProject({
    outdir: mkdtemp(),
    defaultReleaseBranch: 'master',
    logging: { level: LogLevel.OFF },
    name: 'test-typescript-project',
    srcdir: 'mysrc',
    testdir: 'mysrc/boom/bam/__tests',
  });

  // THEN
  const files = synthSnapshot(project);
  expect(files['tsconfig.jest.json']).toBeUndefined(); // no special tsconfig for jest in this case
  expect(files['package.json'].jest.testMatch).toStrictEqual(['**/lib/boom/bam/__tests/**/?(*.)+(spec|test).js?(x)']);
});

test('addTestMatch() can be used to add patterns', () => {
  // GIVEN
  const project = new NodeProject({
    outdir: mkdtemp(),
    defaultReleaseBranch: 'master',
    name: 'test',
    logging: {
      level: LogLevel.OFF,
    },
  });
  const jest = new Jest(project, { jestConfig: { testMatch: [] } });

  // WHEN
  jest.addTestMatch('foo/**');
  jest.addTestMatch('bar/baz/**');

  // THEN
  expect(synthSnapshot(project)['package.json'].jest.testMatch).toStrictEqual([
    'foo/**',
    'bar/baz/**',
  ]);
});
