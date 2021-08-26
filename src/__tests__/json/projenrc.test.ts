
import { renderProjenNewOptions } from '../../javascript/render-options';
import { Projenrc } from '../../json/index';
import { synthSnapshot, TestProject } from '../util';

test('projenrc.json default project', () => {
  // GIVEN
  const project = new TestProject();

  // WHEN
  new Projenrc(project);

  // THEN
  expect(synthSnapshot(project)).toMatchSnapshot();
});

test('projenrc.json with typed options', () => {
  // GIVEN
  const project = new TestProject(renderProjenNewOptions('projen.TypeScriptProject', {
    staleOptions: {
      issues: {
        daysBeforeStale: 100, // number, nested option
      },
      pullRequest: {
        enabled: false, // boolean, nested option
      },
    },
    name: '@example/foo', // string
    npmAccess: 'public', // enum provided as string
  }));

  // WHEN
  new Projenrc(project);

  // THEN
  expect(synthSnapshot(project)).toMatchSnapshot();
});
