import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { awscdk } from '../src';
import { AwsCdkConstructLibrary, AwsCdkConstructLibraryOptions } from '../src/awscdk';
import { NpmAccess } from '../src/javascript';
import { mkdtemp, synthSnapshot } from './util';

describe('constructs dependency selection', () => {
  test('user-selected', () => {
    // GIVEN
    const project = new TestProject({ cdkVersion: '1.100.0', constructsVersion: '9.1337.0-ultimate' });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']?.peerDependencies?.constructs).toBe('^9.1337.0-ultimate');
    expect(snapshot['package.json']?.devDependencies?.constructs).toBeUndefined();
    expect(snapshot['package.json']?.dependencies?.constructs).toBeUndefined();
  });


  test('for cdk 1.x', () => {
    // GIVEN
    const project = new TestProject({ cdkVersion: '1.100.0' });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']?.peerDependencies?.constructs).toMatch(/^\^3\./);
    expect(snapshot['package.json']?.devDependencies?.constructs).toBeUndefined();
    expect(snapshot['package.json']?.devDependencies['@aws-cdk/assertions']).toBeDefined();
    expect(snapshot['package.json']?.devDependencies['@aws-cdk/assert']).toBeUndefined();
    expect(snapshot['package.json']?.dependencies?.constructs).toBeUndefined();
  });

  test('for cdk 2.x', () => {
    // GIVEN
    const project = new TestProject({ cdkVersion: '2.0.0-alpha.5' });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']?.peerDependencies?.constructs).toMatch(/^\^10./);
    expect(snapshot['package.json']?.peerDependencies['aws-cdk-lib']).toMatch(/^\^2./);
    expect(snapshot['package.json']?.devDependencies?.constructs).toMatch(/^10./);
    expect(snapshot['package.json']?.devDependencies['aws-cdk-lib']).toMatch(/^2./);
    expect(snapshot['package.json']?.devDependencies['@aws-cdk/assertions']).toBeUndefined();
    expect(snapshot['package.json']?.dependencies?.constructs).toBeUndefined();
  });

  test('for cdk 2.x, throws if incorrect constructsVersion provided', () => {
    expect(() => new TestProject({
      cdkVersion: '2.0.0-alpha.5',
      constructsVersion: '3.2.27',
    })).toThrow(/CDK 2.x requires constructs version >= 10/);
  });

  test('for cdk 2.x, throws if cdkDependencies provided', () => {
    expect(() => new TestProject({
      cdkVersion: '2.0.0-alpha.5',
      cdkDependencies: ['@aws-cdk/aws-lambda'],
    })).toThrow(/cdkDependencies is not used for CDK 2.x. Use "peerDeps" instead/);
  });

  test('for cdk 2.x, throws if cdkTestDependencies provided', () => {
    expect(() => new TestProject({
      cdkVersion: '2.0.0-alpha.5',
      cdkTestDependencies: ['@aws-cdk/aws-lambda'],
    })).toThrow(/cdkTestDependencies is not used for CDK 2.x. Use "devDeps" instead/);
  });

  test('for cdk 2.x, throws if cdkDependenciesAsDeps provided', () => {
    expect(() => new TestProject({
      cdkVersion: '2.0.0-alpha.5',
      cdkDependenciesAsDeps: true,
    })).toThrow(/cdkDependenciesAsDeps is not used for CDK 2.x/);
  });

  test('for cdk 2.x, throws if cdkAssert provided', () => {
    expect(() => new TestProject({
      cdkVersion: '2.0.0-alpha.5',
      cdkAssert: true,
    })).toThrow(/cdkAssert is not used for CDK 2.x. Use the assertions library that is provided in aws-cdk-lib/);
  });


  test('for cdk 3.x (does not exist yet)', () => {
    // GIVEN
    const project = new TestProject({ cdkVersion: '3.1337.42' });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']?.peerDependencies?.constructs).toBe('*');
    expect(snapshot['package.json']?.devDependencies?.constructs).toBe('*');
    expect(snapshot['package.json']?.dependencies?.constructs).toBeUndefined();
  });
});

describe('lambda functions', () => {
  test('are auto-discovered by default', () => {
    // GIVEN
    const outdir = mkdtemp();
    mkdirSync(join(outdir, 'src'));
    writeFileSync(join(outdir, 'src', 'my.lambda.ts'), '// dummy');

    const project = new TestProject({
      cdkVersion: '1.100.0',
      libdir: 'liblib',
      outdir: outdir,
      bundlerOptions: {
        assetsDir: 'resources',
      },
      lambdaOptions: {
        runtime: awscdk.LambdaRuntime.NODEJS_10_X,
        bundlingOptions: {
          externals: ['foo', 'bar'],
          sourcemap: true,
        },
      },
    });

    // THEN
    const snapshot = synthSnapshot(project);
    expect(snapshot['src/my-function.ts']).not.toBeUndefined();
    expect(snapshot['.projen/tasks.json'].tasks['bundle:my.lambda'].steps).toStrictEqual([
      { exec: 'esbuild --bundle src/my.lambda.ts --target="node10" --platform="node" --outfile="resources/my.lambda/index.js" --external:foo --external:bar --sourcemap' },
    ]);
  });

  test('auto-discover can be disabled', () => {
    // GIVEN
    const project = new TestProject({
      cdkVersion: '1.100.0',
      lambdaAutoDiscover: false,
    });

    // WHEN
    mkdirSync(join(project.outdir, project.srcdir));
    writeFileSync(join(project.outdir, project.srcdir, 'my.lambda.ts'), '// dummy');

    // THEN
    const snapshot = synthSnapshot(project);
    expect(snapshot['src/my-function.ts']).toBeUndefined();
    expect(snapshot['.projen/tasks.json'].tasks['bundle:my']).toBeUndefined();
  });
});

const defaultOptions = {
  author: 'Nobody',
  authorAddress: 'nobody@nowhere.com',
  clobber: false,
  defaultReleaseBranch: 'main',
  jest: false,
  name: 'test-project',
  npmAccess: NpmAccess.PUBLIC,
  repositoryUrl: 'https://github.com/projen/projen.git',
} as const;

class TestProject extends AwsCdkConstructLibrary {
  constructor(options: Omit<AwsCdkConstructLibraryOptions, keyof typeof defaultOptions>) {
    super({
      ...defaultOptions,
      ...options,
    });
  }
}
