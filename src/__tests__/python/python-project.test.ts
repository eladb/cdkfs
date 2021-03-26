import { synthSnapshot } from '../util';
import { TestPythonProject } from './util';

test('defaults', () => {
  const p = new TestPythonProject();
  expect(synthSnapshot(p)).toMatchSnapshot();
});

test('dependencies', () => {
  const p = new TestPythonProject();
  p.addDependency('Django@3.1.5');
  p.addDependency('aws-cdk.core@*');
  p.addDevDependency('hypothesis@^6.0.3');
  expect(synthSnapshot(p)).toMatchSnapshot();
});

test('dependencies via ctor', () => {
  const p = new TestPythonProject({
    deps: [
      'Django@3.1.5',
      'aws-cdk.core',
    ],
    devDeps: [
      'hypothesis@^6.0.3',
    ],
  });
  expect(synthSnapshot(p)).toMatchSnapshot();
});

test('no pytest', () => {
  const p = new TestPythonProject({
    pytest: false,
  });

  expect(synthSnapshot(p)).toMatchSnapshot();
});

test('pytest maxfailures', () => {
  const p = new TestPythonProject({
    pytestOptions: {
      maxFailures: 3,
    },
  });

  expect(synthSnapshot(p)['.projen/tasks.json'].tasks.test.steps[0].exec).toContain('--maxfail=3');
});

