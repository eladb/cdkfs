import * as path from 'path';
import * as vm from 'vm';
import * as inventory from '../inventory';
import { renderJavaScriptOptions } from '../javascript/render-options';
import { NewProjectOptionHints } from '../option-hints';

export interface CreateProjectOptions {
  /**
   * Project directory.
   */
  dir: string;

  /**
   * Project type from the inventory.
   */
  type: inventory.ProjectType;

  /**
   * Option values.
   */
  params: Record<string, string>;

  /**
   * Should we render commented-out default options in the projenrc file?
   * Does not apply to projenrc.json files.
   */
  comments: NewProjectOptionHints;

  /**
   * Should we call `project.synth()` or instantiate the project (could still
   * have side-effects) and render the .projenrc file.
   */
  synth: boolean;

  /**
   * Should we execute post synthesis hooks? (usually package manager install).
   */
  post: boolean;
}

/**
 * Creates a new project with defaults.
 *
 * This function creates the project type in-process (with in VM) and calls
 * `.synth()` on it (if `options.synth` is not `false`).
 *
 * At the moment, it also generates a `.projenrc.js` file with the same code
 * that was just executed. In the future, this will also be done by the project
 * type, so we can easily support multiple languages of projenrc.
 */
export function createProject(opts: CreateProjectOptions) {
  // Default project resolution location
  let mod = '../index';

  // External projects need to load the module from the modules directory
  if (opts.type.moduleName !== 'projen') {
    try {
      mod = path.dirname(
        require.resolve(path.join(opts.type.moduleName, 'package.json'), { paths: [process.cwd()] }),
      );
    } catch (err) {
      throw new Error(`External project module '${opts.type.moduleName}' could not be resolved.`);
    }
  }

  // pass the FQN of the project type to the project initializer so it can
  // generate the projenrc file.
  const { renderedOptions } = renderJavaScriptOptions({
    bootstrap: true,
    comments: opts.comments,
    type: opts.type,
    args: opts.params,
  });

  const newProjectCode = `const project = new ${opts.type.typename}(${renderedOptions});`;

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const module = require(mod);
  const ctx = vm.createContext(module);

  process.env.PROJEN_DISABLE_POST = (!opts.post).toString();
  vm.runInContext([
    newProjectCode,
    opts.synth ? 'project.synth();' : '',
  ].join('\n'), ctx);
}
