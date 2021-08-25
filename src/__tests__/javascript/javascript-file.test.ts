import { FileBase } from '../../file';
import { JavascriptFile } from '../../javascript/javascript-file';
import { LogLevel } from '../../logger';
import { NodeProject, NodeProjectOptions } from '../../node-project';
import { mkdtemp, synthSnapshot } from '../util';

test('can add javascript file component', () => {
  const prj = new TestNodeProject({
    name: 'test-project',
    defaultReleaseBranch: 'main',
  });

  new JavascriptFile(prj, 'cool.config.js', {
    fn: () => {
      console.log('Hello World');
    },
  });

  const out = synthSnapshot(prj);
  const outFile = out['cool.config.js'];
  console.log(outFile);

  expect(outFile).toBe(`// ${FileBase.PROJEN_MARKER}\nconsole.log('Hello World');\n`);
  expect(outFile).toMatchSnapshot();
});

test('can add javascript file component with various options', () => {
  const prj = new TestNodeProject({
    name: 'test-project',
    defaultReleaseBranch: 'main',
  });

  const file = new JavascriptFile(prj, 'cool.config.js', {
    fn: (name) => {
      return `Hello ${name}`;
    },
    keepDeclaration: true,
    callWith: [prj.name],
    setToValue: 'greeting',
  });

  file.appendFunction({
    fn: (greeting) => {
      console.log(greeting);
    },
    prefix: '// do a log\n',
    postfix: '\n// did a log',
  });

  const out = synthSnapshot(prj);
  const outFile = out['cool.config.js'];

  console.log(outFile);

  expect(outFile).toContain('const greeting = (name =>');
  expect(outFile).toContain('(`test-project`)');
  expect(outFile).toContain('// do a log');
  expect(outFile).toContain('// did a log');
  expect(outFile).toMatchSnapshot();
});

class TestNodeProject extends NodeProject {
  constructor(options: Partial<NodeProjectOptions> = {}) {
    super({
      outdir: mkdtemp(),
      name: 'test-node-project',
      logging: {
        level: LogLevel.OFF,
      },
      defaultReleaseBranch: 'master',
      ...options,
    });
  }
}