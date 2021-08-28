const { JsiiProject, JsonFile, TextFile } = require('./lib');

const project = new JsiiProject({
  name: 'projen',
  description: 'CDK for software projects',
  repository: 'https://github.com/projen/projen.git',
  authorName: 'Elad Ben-Israel',
  authorEmail: 'benisrae@amazon.com',
  stability: 'experimental',

  pullRequestTemplateContents: [
    '---',
    'By submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.',
  ],

  testdir: 'src/__tests__',

  bundledDeps: [
    'yaml',
    'fs-extra',
    'yargs',
    'decamelize',
    'glob@^7',
    'semver',
    'chalk',
    '@iarna/toml',
    'xmlbuilder2',
    'ini',
    'shx',
  ],

  devDeps: [
    '@types/fs-extra@^8',
    '@types/yargs',
    '@types/glob',
    '@types/semver',
    '@types/ini',
    'markmac',
    'all-contributors-cli',
  ],

  projenDevDependency: false, // because I am projen
  releaseToNpm: true,
  minNodeVersion: '10.17.0',
  codeCov: true,
  defaultReleaseBranch: 'main',
  gitpod: true,
  devContainer: true,
  // since this is projen, we need to always compile before we run
  projenCommand: '/bin/bash ./projen.bash',

  // makes it very hard to iterate with jest --watch
  jestOptions: {
    coverageText: false,
  },

  publishToMaven: {
    javaPackage: 'org.projen',
    mavenGroupId: 'com.github.eladb',
    mavenArtifactId: 'projen',
  },

  publishToPypi: {
    distName: 'projen',
    module: 'projen',
  },
  failureIssue: true,

  // Disabled due to cycles between main module and submodules
  // publishToGo: {
  //   moduleName: 'github.com/projen/projen-go',
  // },
});

// this script is what we use as the projen command in this project
// it will compile the project if needed and then run the cli.
new TextFile(project, 'projen.bash', {
  lines: [
    '#!/bin/bash',
    `# ${TextFile.PROJEN_MARKER}`,
    'set -euo pipefail',
    'if [ ! -f lib/cli/index.js ]; then',
    '  echo "bootstrapping..."',
    '  npx jsii --silence-warnings=reserved-word --no-fix-peer-dependencies',
    'fi',
    'exec bin/projen $@',
  ],
});

project.addExcludeFromCleanup('src/__tests__/**');
project.gitignore.include('templates/**');

// expand markdown macros in readme
const macros = project.addTask('readme-macros');
macros.exec('mv README.md README.md.bak');
macros.exec('cat README.md.bak | markmac > README.md');
macros.exec('rm README.md.bak');
project.buildTask.spawn(macros);

new JsonFile(project, '.markdownlint.json', {
  obj: {
    'default': true,
    'commands-show-output': false,
    'line-length': {
      line_length: 200,
    },
  },
});

project.vscode.launchConfiguration.addConfiguration({
  type: 'pwa-node',
  request: 'launch',
  name: 'projen CLI',
  skipFiles: [
    '<node_internals>/**',
  ],
  program: '${workspaceFolder}/lib/cli/index.js',
  outFiles: [
    '${workspaceFolder}/lib/**/*.js',
  ],
});

project.github.mergify.addRule({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/core'],
    },
  },
  conditions: [
    'author~=^(eladb)$',
    'label!=contribution/core',
  ],
});

project.gitpod.addCustomTask({
  name: 'Setup',
  init: 'yarn install',
  prebuild: 'bash ./projen.bash',
  command: 'npx projen build',
});

const setup = project.addTask('devenv:setup');
setup.exec('yarn install');
setup.spawn(project.buildTask);
project.devContainer.addTasks(setup);

project.addTask('contributors:update', {
  exec: 'all-contributors check | grep "Missing contributors" -A 1 | tail -n1 | sed -e "s/,//g" | xargs -n1 | grep -v "\[bot\]" | xargs -n1 -I{} all-contributors add {} code',
});

project.synth();
