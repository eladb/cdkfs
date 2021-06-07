import { JsiiProject, JsiiProjectOptions, LogLevel } from '..';
import { mkdtemp, synthSnapshot } from './util';

describe('author', () => {
  test('authorEmail and authorAddress can be the same value', () => {
    const project = new TestJsiiProject({
      authorAddress: 'hello@hello.com',
      authorEmail: 'hello@hello.com',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'project',
      defaultReleaseBranch: 'master',
    });

    const pkgjson = synthSnapshot(project)['package.json'];
    expect(pkgjson.author).toStrictEqual({
      email: 'hello@hello.com',
      name: 'My Name',
      organization: false,
    });
  });

  test('authorUrl and authorAddress can be the same value', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'project',
      defaultReleaseBranch: 'master',
    });

    const pkgjson = synthSnapshot(project)['package.json'];
    expect(pkgjson.author).toStrictEqual({
      name: 'My Name',
      organization: false,
      url: 'https://foo.bar',
    });
  });
});

describe('maven repository options', () => {
  test('use maven central as repository', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      publishToMaven: {
        javaPackage: 'com.github.eladb.watchful',
        mavenGroupId: 'com.github.eladb',
        mavenArtifactId: 'cdk-watchful',
      },
      defaultReleaseBranch: 'master',
    });

    const workflow = synthSnapshot(project)['.github/workflows/release.yml'];
    expect(workflow).toContain('run: npx -p jsii-release@latest jsii-release-maven');
    expect(workflow).not.toContainEqual('MAVEN_SERVER_ID');
    expect(workflow).not.toContainEqual('MAVEN_REPOSITORY_URL');
  });

  test('use nexus repo new endpoint', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      publishToMaven: {
        javaPackage: 'com.github.eladb.watchful',
        mavenGroupId: 'com.github.eladb',
        mavenArtifactId: 'cdk-watchful',
        mavenEndpoint: 'https://s01.oss.sonatype.org',
      },
      defaultReleaseBranch: 'master',
    });

    const workflow = synthSnapshot(project)['.github/workflows/release.yml'];
    expect(workflow).toContain('run: npx -p jsii-release@latest jsii-release-maven');
    expect(workflow).toContain('MAVEN_ENDPOINT: https://s01.oss.sonatype.org');
    expect(workflow).not.toContainEqual('MAVEN_SERVER_ID');
    expect(workflow).not.toContainEqual('MAVEN_REPOSITORY_URL');
  });

  test('use github as repository', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      publishToMaven: {
        javaPackage: 'com.github.eladb.watchful',
        mavenGroupId: 'com.github.eladb',
        mavenArtifactId: 'cdk-watchful',
        mavenServerId: 'github',
        mavenRepositoryUrl: 'https://maven.pkg.github.com/eladb',
      },
      defaultReleaseBranch: 'master',
    });

    const workflow = synthSnapshot(project)['.github/workflows/release.yml'];
    expect(workflow).toContain('MAVEN_SERVER_ID: github');
    expect(workflow).toContain('MAVEN_REPOSITORY_URL: https://maven.pkg.github.com/eladb');
  });
});

describe('publish to go', () => {
  test('defaults', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      publishToGo: {
        moduleName: 'github.com/foo/bar',
      },
      defaultReleaseBranch: 'master',
    });

    const output = synthSnapshot(project);
    const targets = output['package.json'].jsii.targets;
    expect(targets).toStrictEqual({
      go: {
        moduleName: 'github.com/foo/bar',
      },
    });

    expect(output['.github/workflows/release.yml']).toMatchSnapshot();
  });

  test('release to npm undefined', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      defaultReleaseBranch: 'main',
    });

    const output = synthSnapshot(project);
    expect(output['.github/workflows/release.yml']).toContain('release_npm');
  });

  test('release to npm true', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      defaultReleaseBranch: 'main',
      releaseToNpm: true,
    });

    const output = synthSnapshot(project);
    expect(output['.github/workflows/release.yml']).toContain('release_npm');
  });

  test('release to npm false', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      defaultReleaseBranch: 'main',
      releaseToNpm: false,
    });

    const output = synthSnapshot(project);
    expect(output['.github/workflows/release.yml']).not.toContain('release_npm');
  });

  test('customizations', () => {
    const project = new TestJsiiProject({
      authorAddress: 'https://foo.bar',
      authorUrl: 'https://foo.bar',
      repositoryUrl: 'https://github.com/foo/bar.git',
      author: 'My Name',
      name: 'testproject',
      publishToGo: {
        moduleName: 'github.com/foo/bar',

        gitBranch: 'custom-branch',
        gitCommitMessage: 'custom commit message',
        gitUserEmail: 'custom@email.com',
        gitUserName: 'custom user',
        githubRepo: 'github.com/foo/bar',
        githubTokenSecret: 'CUSTOM_SECRET',
      },
      defaultReleaseBranch: 'master',
      excludeTypescript: ['src/**/test/*.ts', 'src/**/__tests__/*.ts'],
    });

    const output = synthSnapshot(project);
    expect(output['package.json'].jsii.targets.go).toStrictEqual({ moduleName: 'github.com/foo/bar' });
    expect(output['.github/workflows/release.yml']).toMatchSnapshot();
    expect(output['package.json'].jsii.excludeTypescript).toStrictEqual(['src/**/test/*.ts', 'src/**/__tests__/*.ts']);
  });
});

class TestJsiiProject extends JsiiProject {
  constructor(options: JsiiProjectOptions) {
    super({
      outdir: mkdtemp(),
      logging: {
        level: LogLevel.OFF,
      },
      ...options,
    });
  }
}
