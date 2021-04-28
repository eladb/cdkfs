import * as inventory from '../inventory';

const PROJEN_NEW = '__new__';

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
   * @default false
   */
  readonly comments?: boolean;

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
}


/**
 * Renders options as if the project was created via `projen new` (embeds the __new__ field).
 */
export function renderProjenNewOptions(fqn: string, args: Record<string, any>): any {
  return {
    ...args,
    [PROJEN_NEW]: { fqn, args } as ProjenNew,
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
  };
}

/**
 * Prints all parameters that can be used in a project type, alongside their descriptions.
 *
 * Parameters in `params` that aren't undefined are rendered as defaults,
 * while all other parameters are rendered as commented out.
 */
export function renderJavaScriptOptions(opts: RenderProjectOptions) {
  // preprocessing
  const renders: Record<string, string> = {};
  const optionsWithDefaults: string[] = [];
  const optionsByModule: Record<string, inventory.ProjectOption[]> = {}; // only options without defaults

  for (const option of opts.type.options) {
    if (option.deprecated) {
      continue;
    }

    const optionName = option.name;

    let paramRender;
    if (opts.args[optionName] !== undefined) {
      const value = opts.args[optionName];
      const js = JSON.stringify(value).replace(/^"(.+)"$/, '\'$1\'');
      paramRender = `${optionName}: ${js},`;
      optionsWithDefaults.push(optionName);
    } else {
      const defaultValue = option.default?.startsWith('-') ? undefined : (option.default ?? undefined);
      paramRender = `// ${optionName}: ${defaultValue?.replace(/"(.+)"/, '\'$1\'')},`; // single quotes

      const parentModule = option.parent;
      optionsByModule[parentModule] = optionsByModule[parentModule] ?? [];
      optionsByModule[parentModule].push(option);
    }
    renders[optionName] = paramRender;
  }

  const bootstrap = opts.bootstrap ?? false;
  if (bootstrap) {
    renders[PROJEN_NEW] = `${PROJEN_NEW}: ${JSON.stringify({ args: opts.args, fqn: opts.type.fqn } as ProjenNew)},`;
    optionsWithDefaults.push(PROJEN_NEW);
  }

  // alphabetize
  const marginSize = Math.max(...Object.values(renders).map(str => str.length));
  optionsWithDefaults.sort();
  for (const parentModule in optionsByModule) {
    optionsByModule[parentModule].sort((o1, o2) => o1.name.localeCompare(o2.name));
  }

  // generate rendering
  const tab = makePadding(2);
  const result: string[] = [];
  result.push('{');

  // render options with defaults
  for (const optionName of optionsWithDefaults) {
    result.push(`${tab}${renders[optionName]}`);
  }
  if (result.length > 1) {
    result.push('');
  }

  // render options without defaults
  if (opts.comments) {
    for (const [moduleName, options] of Object.entries(optionsByModule).sort()) {
      result.push(`${tab}/* ${moduleName} */`);
      for (const option of options) {
        const paramRender = renders[option.name];
        result.push(`${tab}${paramRender}${makePadding(marginSize - paramRender.length + 2)}/* ${option.docs} */`);
      }
      result.push('');
    }
  }
  if (result[result.length - 1] === '') {
    result.pop();
  }
  result.push('}');
  return result.join('\n');
}

function makePadding(paddingLength: number): string {
  return ' '.repeat(paddingLength);
}
