// tests for `projen new`: we run `projen new` for each supported project type
// and compare against a golden snapshot.
import { execSync } from 'child_process';
import { join } from 'path';
import { mkdirSync, pathExistsSync, removeSync } from 'fs-extra';
import * as inventory from '../inventory';
import { execCapture } from '../util';
import { directorySnapshot, execProjenCLI, mkdtemp, sanitizeOutput, synthSnapshot, synthSnapshotWithPost, TestProject } from './util';

for (const type of inventory.discover()) {
  test(`projen new ${type.pjid}`, () => {
    withProjectDir(projectdir => {

      // execute `projen new PJID --no-synth` in the project directory
      execProjenCLI(projectdir, ['new', '--no-synth', type.pjid]);

      // compare generated .projenrc.js to the snapshot
      const actual = directorySnapshot(projectdir, {
        excludeGlobs: [
          '.git/**',
        ],
      });

      expect(actual).toMatchSnapshot();
    });
  });
}

test('post-synthesis option enabled', () => {
  const project = new TestProject();

  expect(synthSnapshotWithPost(project)['.postsynth']).toContain('postsynth');
});

test('post-synthesis option disabled', () => {
  const project = new TestProject();

  expect(synthSnapshot(project)['.postsynth']).toBeUndefined();
});

test('projen new --from external', () => {
  withProjectDir(projectdir => {

    // execute `projen new --from cdk-appsync-project` in the project directory
    execProjenCLI(projectdir, ['new', '--from', 'cdk-appsync-project@1.1.2', '--no-post']);

    // patch the projen version in package.json to match the current version
    // otherwise, every bump would need to update these snapshots.
    sanitizeOutput(projectdir);

    // compare generated .projenrc.js to the snapshot
    const actual = directorySnapshot(projectdir, {
      excludeGlobs: [
        '.git/**',
        '.github/**',
        'node_modules/**',
        'yarn.lock',
      ],
    });

    expect(actual).toMatchSnapshot();
    expect(actual['schema.graphql']).toBeDefined();

  });
});

test('options are not overwritten when creating from external project types', () => {
  withProjectDir(projectdir => {

    // execute `projen new --from cdk-appsync-project` in the project directory
    execProjenCLI(projectdir, ['new', '--from', 'cdk-appsync-project@1.1.2', '--no-synth', '--cdk-version', '1.63.0']);

    // compare generated .projenrc.js to the snapshot
    const actual = directorySnapshot(projectdir, {
      excludeGlobs: [
        '.git/**',
        '.github/**',
        'node_modules/**',
        'yarn.lock',
      ],
    });

    expect(actual['.projenrc.js']).toContain('cdkVersion: \'1.63.0\'');
  });
});

test('can choose from one of multiple external project types', () => {
  withProjectDir(projectdir => {

    // execute `projen new --from cdk-appsync-project` in the project directory
    execProjenCLI(projectdir, ['new', '--from', '@taimos/projen@0.0.121', 'taimos-ts-lib', '--no-post']);

    // patch the projen version in package.json to match the current version
    // otherwise, every bump would need to update these snapshots.
    sanitizeOutput(projectdir);

    // compare generated .projenrc.js to the snapshot
    const actual = directorySnapshot(projectdir, {
      excludeGlobs: [
        '.git/**',
        '.github/**',
        'node_modules/**',
        'yarn.lock',
      ],
    });

    expect(actual).toMatchSnapshot();
  });
});

test('projen new --no-comments', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', 'node', '--no-comments', '--no-synth']);

    const projenrc = directorySnapshot(projectdir)['.projenrc.js'];
    expect(projenrc).toBeDefined();
    expect(projenrc).not.toMatch('//');
  });
});

test('creating node project with enum-typed CLI arg', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', 'node', '--package-manager', 'npm', '--no-synth']);

    const projenrc = directorySnapshot(projectdir)['.projenrc.js'];
    expect(projenrc).toMatchSnapshot();
  });
});

test('creating python project with enum-typed CLI arg', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', 'python', '--project-type', 'lib', '--projenrc-python', '--no-synth']);

    const projenrc = directorySnapshot(projectdir)['.projenrc.py'];
    expect(projenrc).toMatchSnapshot();
  });
});

test('creating java project with enum-typed CLI arg', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', 'java', '--project-type', 'lib', '--projenrc-java', '--no-synth']);

    const projenrc = directorySnapshot(projectdir)['src/test/java/projenrc.java'];
    expect(projenrc).toMatchSnapshot();
  });
});

test('projenrc-json creates node-project', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', 'node', '--projenrc-json', '--no-synth']);

    const projenrc = directorySnapshot(projectdir)['.projenrc.json'];
    expect(projenrc).toMatchSnapshot();
  });
});

test('projenrc-json creates external project type', () => {
  withProjectDir(projectdir => {
    execProjenCLI(projectdir, ['new', '--from', 'cdk-appsync-project@1.1.2', '--cdk-version', '1.63.0', '--projenrc-json', '--no-synth']);

    // exclude node_modules to work around bug where node_modules is generated AND one of the
    // dependencies includes a file with .json extension that isn't valid JSON
    const projenrc = directorySnapshot(projectdir, { excludeGlobs: ['node_modules/**'] })['.projenrc.json'];
    expect(projenrc).toMatchSnapshot();
  });
});

describe('git', () => {
  test('--git (default) will initialize a git repo and create a commit', () => {
    withProjectDir(projectdir => {
      execProjenCLI(projectdir, ['new', 'project']);
      expect(execCapture('git log', { cwd: projectdir }).toString('utf8').includes('chore: project created with projen')).toBeTruthy();
    });
  });

  test('--no-git will not create a git repo', () => {
    withProjectDir(projectdir => {
      execProjenCLI(projectdir, ['new', 'project', '--no-git']);
      expect(pathExistsSync(join(projectdir, '.git'))).toBeFalsy();
    }, { git: false });
  });
});

function withProjectDir(code: (workdir: string) => void, options: { git?: boolean } = {}) {
  const outdir = mkdtemp();
  try {
    // create project under "my-project" so that basedir is deterministic
    const projectdir = join(outdir, 'my-project');
    mkdirSync(projectdir);

    const shell = (command: string) => execSync(command, { cwd: projectdir });
    if (options.git ?? true) {
      shell('git init');
      shell('git remote add origin git@boom.com:foo/bar.git');
      shell('git config user.name "My User Name"');
      shell('git config user.email "my@user.email.com"');
    } else if (process.env.CI) {
      // if "git" is set to "false", we still want to make sure global user is defined
      // (relevant in CI context)
      shell('git config user.name || git config --global user.name "My User Name"');
      shell('git config user.email || git config --global user.email "my@user.email.com"');
    }

    code(projectdir);
  } finally {
    removeSync(outdir);
  }
}