import { NodeProject, UpgradeDependenciesSchedule } from '..';
import { DependenciesUpgradeMechanism, NodeProjectOptions } from '../node-project';
import { mkdtemp, synthSnapshot } from './util';

test('default options', () => {

  const project = createProject({
    projenUpgradeSecret: 'PROJEN_SECRET',
  });

  const snapshot = synthSnapshot(project);
  expect(snapshot['.github/workflows/upgrade-dependencies.yml']).toBeDefined();
  expect(snapshot['.github/workflows/upgrade-dependencies.yml']).toMatchSnapshot();
});

test('custom options', () => {

  const project = createProject({
    projenUpgradeSecret: 'PROJEN_SECRET',
    depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
      workflowOptions: {
        schedule: UpgradeDependenciesSchedule.MONTHLY,
      },
    }),
  });

  const snapshot = synthSnapshot(project);
  expect(snapshot['.github/workflows/upgrade-dependencies.yml']).toBeDefined();
  expect(snapshot['.github/workflows/upgrade-dependencies.yml']).toMatchSnapshot();
});


function createProject(options: Omit<NodeProjectOptions, 'outdir' | 'defaultReleaseBranch' | 'name' | 'dependenciesUpgrade'> = {}): NodeProject {
  return new NodeProject({
    outdir: mkdtemp(),
    defaultReleaseBranch: 'main',
    name: 'node-project',
    ...options,
  });
}