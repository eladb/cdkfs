import * as inventory from '../inventory';
import { NewProjectOptionHints } from '../option-hints';

const PROJEN_NEW = '__new__';
const TAB = makePadding(2);

/**
 * Options for `renderProjectOptions`.
 */
export interface RenderProjectOptions {
  /**
   * The project type to render.
   */
  readonly type: inventory.ProjectType;

  /**
   * Project arguments as passed to `projen new`.
   */
  readonly args: Record<string, any>;

  /**
   * Include commented out options.
   * @default NewProjectOptionHints.FEATURED
   */
  readonly comments?: NewProjectOptionHints;

  /**
   * Inject a `__new__` attribute to the project constructor with a stringified
   * version of the project parameters and a `jsiiFqn` attribute that includes
   * the FQN of the project type. This is needed in order to generate initial
   * projenrc files.
   *
   * @default false
   */
  readonly bootstrap?: boolean;
}

/**
 * Information passed from `projen new` to the project object when the project
 * is first created. It is used to generate projenrc files in various languages.
 */
interface ProjenNew {
  /**
   * The JSII FQN of the project type.
   */
  readonly fqn: string;

  /**
   * Initial arguments passed to `projen new`.
   */
  readonly args: Record<string, any>;

  /**
   * Include commented out options. Does not apply to projenrc.json files.
   */
  readonly comments: NewProjectOptionHints;
}


/**
 * Renders options as if the project was created via `projen new` (embeds the __new__ field).
 */
export function renderProjenNewOptions(fqn: string, args: Record<string, any>, comments: NewProjectOptionHints = NewProjectOptionHints.NONE): any {
  return {
    ...args,
    [PROJEN_NEW]: { fqn, args, comments } as ProjenNew,
  };
}

export function resolveNewProject(opts: any) {
  const f = opts[PROJEN_NEW] as ProjenNew;
  if (!f) {
    return undefined;
  }

  const type = inventory.resolveProjectType(f.fqn);
  if (!type) {
    throw new Error(`unable to resolve project type for ${f.fqn}`);
  }
  return {
    args: f.args,
    fqn: f.fqn,
    type: type,
    comments: f.comments,
  };
}

/**
 * Prints all parameters that can be used in a project type, alongside their descriptions.
 *
 * Parameters in `params` that aren't undefined are rendered as defaults,
 * while all other parameters are rendered as commented out.
 *
 * Returns the printed output and a set of required imports as an object
 * in the form { options, imports }.
 */
export function renderJavaScriptOptions(opts: RenderProjectOptions) {
  const renders: Record<string, string> = {};
  const optionsWithDefaults: string[] = [];
  const useSingleQuotes = (str: string | undefined) => str?.replace(/"(.+)"/, '\'$1\'');
  const imports = new Set();

  for (const option of opts.type.options) {
    if (option.deprecated) {
      continue;
    }

    const optionName = option.name;

    if (opts.args[optionName] !== undefined) {
      const arg = opts.args[optionName];
      const { js, importName } = renderArgAsJavaScript(arg, option);
      if (importName) imports.add(importName);
      renders[optionName] = `${optionName}: ${useSingleQuotes(js)},`;
      optionsWithDefaults.push(optionName);
    } else {
      const defaultValue = option.default?.startsWith('-') ? undefined : (option.default ?? undefined);
      renders[optionName] = `// ${optionName}: ${useSingleQuotes(defaultValue)},`;
    }
  }

  const bootstrap = opts.bootstrap ?? false;
  if (bootstrap) {
    renders[PROJEN_NEW] = `${PROJEN_NEW}: ${JSON.stringify({ args: opts.args, fqn: opts.type.fqn, comments: opts.comments } as ProjenNew)},`;
    optionsWithDefaults.push(PROJEN_NEW);
  }

  // generate rendering
  const result: string[] = [];
  result.push('{');

  // render options with defaults
  optionsWithDefaults.sort();
  for (const optionName of optionsWithDefaults) {
    result.push(`${TAB}${renders[optionName]}`);
  }
  if (result.length > 1) {
    result.push('');
  }

  // render options without defaults as comments
  if (opts.comments === NewProjectOptionHints.ALL) {
    const options = opts.type.options.filter((opt) => !opt.deprecated && opts.args[opt.name] === undefined);
    result.push(...renderCommentedOptionsByModule(renders, options));
  } else if (opts.comments === NewProjectOptionHints.FEATURED) {
    const options = opts.type.options.filter((opt) => !opt.deprecated && opts.args[opt.name] === undefined && opt.featured);
    result.push(...renderCommentedOptionsInOrder(renders, options));
  } else if (opts.comments === NewProjectOptionHints.NONE) {
    // don't render any extra options
  }

  if (result[result.length - 1] === '') {
    result.pop();
  }
  result.push('}');
  return { renderedOptions: result.join('\n'), imports };
}

function renderCommentedOptionsByModule(renders: Record<string, string>, options: inventory.ProjectOption[]) {
  const optionsByModule: Record<string, inventory.ProjectOption[]> = {};

  for (const option of options) {
    const parentModule = option.parent;
    optionsByModule[parentModule] = optionsByModule[parentModule] ?? [];
    optionsByModule[parentModule].push(option);
  }

  for (const parentModule in optionsByModule) {
    optionsByModule[parentModule].sort((o1, o2) => o1.name.localeCompare(o2.name));
  }

  const result = [];
  const marginSize = Math.max(...options.map((opt) => renders[opt.name].length));
  for (const [moduleName, optionGroup] of Object.entries(optionsByModule).sort()) {
    result.push(`${TAB}/* ${moduleName} */`);
    for (const option of optionGroup) {
      const paramRender = renders[option.name];
      const docstring = option.docs || 'No documentation found.';
      result.push(`${TAB}${paramRender}${makePadding(marginSize - paramRender.length + 2)}/* ${docstring} */`);
    }
    result.push('');
  }
  return result;
}

function renderCommentedOptionsInOrder(renders: Record<string, string>, options: inventory.ProjectOption[]) {
  const result = [];
  const marginSize = Math.max(...options.map((opt) => renders[opt.name].length));
  for (const option of options) {
    const paramRender = renders[option.name];
    const docstring = option.docs || 'No documentation found.';
    result.push(`${TAB}${paramRender}${makePadding(marginSize - paramRender.length + 2)}/* ${docstring} */`);
  }
  return result;
}

/**
 * Renders a CLI argument as a basic JavaScript value. It must either be a
 * string, number, boolean, or enum.
 *
 * Returns a string and the name of any needed imports if needed as an
 * object in the form { js, import }.
 */
function renderArgAsJavaScript(arg: any, option: inventory.ProjectOption) {
  // devDeps added as an exception to handle bootstrapping projects from external modules
  if (['string', 'number', 'boolean'].includes(option.type) || option.name === 'devDeps') {
    return { js: JSON.stringify(arg) };
  } else if (option.kind === 'enum') {
    if (!option.fqn) {
      throw new Error(`fqn field is missing from enum option ${option.name}`);
    }
    const parts = option.fqn.split('.'); // -> ['projen', 'web', 'MyEnum']
    const enumChoice = String(arg).toUpperCase().replace(/-/g, '_'); // custom-value -> CUSTOM_VALUE
    const js = `${parts.slice(1).join('.')}.${enumChoice}`; // -> web.MyEnum.CUSTOM_VALUE
    const importName = parts[1]; // -> web
    return { js, importName: importName };
  } else {
    throw new Error(`Unexpected option ${option.name} of kind: ${option.kind}`);
  }
}

function makePadding(paddingLength: number): string {
  return ' '.repeat(paddingLength);
}
