import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as yargs from 'yargs';
import * as inventory from '../../inventory';
import * as logging from '../../logging';
import { NewProjectOptionHints } from '../../option-hints';
import { exec, isTruthy } from '../../util';
import { createProject } from '../create';
import { tryProcessMacro } from '../macros';

class Command implements yargs.CommandModule {
  public readonly command = 'new [PROJECT-TYPE-NAME] [OPTIONS]';
  public readonly describe = 'Creates a new projen project';

  public builder(args: yargs.Argv) {
    args.positional('PROJECT-TYPE-NAME', { describe: 'optional only when --from is used and there is a single project type in the external module', type: 'string' });
    args.option('synth', { type: 'boolean', default: true, desc: 'Synthesize after creating .projenrc.js' });
    args.option('comments', { type: 'boolean', default: true, desc: 'Include commented out options in .projenrc.js (use --no-comments to disable)' });
    args.option('from', { type: 'string', alias: 'f', desc: 'External jsii npm module to create project from. Supports any package spec supported by yarn (such as "my-pack@^2.0")' });
    args.option('git', { type: 'boolean', default: true, desc: 'Run `git init` and create an initial commit (use --no-git to disable)' });
    args.example('projen new awscdk-app-ts', 'Creates a new project of built-in type "awscdk-app-ts"');
    args.example('projen new --from projen-vue@^2', 'Creates a new project from an external module "projen-vue" with the specified version');

    for (const type of inventory.discover()) {
      args.command(type.pjid, type.docs ?? '', {
        builder: cargs => {
          cargs.showHelpOnFail(false);

          for (const option of type.options ?? []) {
            if (option.type !== 'string' && option.type !== 'number' && option.type !== 'boolean' && option.kind !== 'enum') {
              continue; // we only support primitive and enum fields as command line options
            }

            let desc = [option.docs?.replace(/\ *\.$/, '') ?? ''];

            const required = !option.optional;
            let defaultValue;

            if (option.default && option.default !== 'undefined') {
              if (!required) {
                // if the field is not required, just describe the default but don't actually assign a value
                desc.push(`[default: ${option.default.replace(/^\ *-/, '').replace(/\.$/, '').trim()}]`);
              } else {
                // if the field is required and we have a @default, then assign
                // the value here so it appears in `--help`
                defaultValue = renderDefault(process.cwd(), option.default);
              }
            }

            const argType = option.kind === 'enum' ? 'string' : option.type;

            cargs.option(option.switch, {
              group: required ? 'Required:' : 'Optional:',
              type: (argType as 'string' | 'boolean' | 'number'),
              description: desc.join(' '),
              default: defaultValue,
              required,
            });
          }

          return cargs;
        },
        handler: argv => newProject(process.cwd(), type, argv),
      });
    }

    return args;
  }

  public async handler(args: any) {
    // handle --from which means we want to first install a jsii module and then
    // create a project defined within this module.
    if (args.from) {
      return newProjectFromModule(process.cwd(), args.from, args);
    }

    // project type is defined but was not matched by yargs, so print the list of supported types
    if (args.projectTypeName) {
      console.log(`Invalid project type ${args.projectTypeName}. Supported types:`);
      for (const pjid of inventory.discover().map(x => x.pjid)) {
        console.log(`  ${pjid}`);
      }
      return;
    }

    // Handles the use case that nothing was specified since PROJECT-TYPE is now an optional positional parameter
    yargs.showHelp();
  }
}


/**
 * Given a value from "@default", processes macros and returns a stringified
 * (quoted) result.
 *
 * @returns a javascript primitive (could be a string, number or boolean)
 */
function renderDefault(cwd: string, value: string) {
  return tryProcessMacro(cwd, value) ?? JSON.parse(value);
}

/**
 * Converts yargs command line switches to project type props.
 * @param type Project type
 * @param argv Command line switches
 */
function commandLineToProps(cwd: string, type: inventory.ProjectType, argv: Record<string, unknown>): Record<string, any> {
  const props: Record<string, any> = {};

  // initialize props with default values
  for (const prop of type.options) {
    if (prop.default && prop.default !== 'undefined' && !prop.optional) {
      props[prop.name] = renderDefault(cwd, prop.default);
    }
  }

  for (const [arg, value] of Object.entries(argv)) {
    for (const prop of type.options) {
      if (prop.switch === arg) {
        let curr = props;
        const queue = [...prop.path];
        while (true) {
          const p = queue.shift();
          if (!p) {
            break;
          }
          if (queue.length === 0) {
            curr[p] = value;
          } else {
            curr[p] = curr[p] ?? {};
            curr = curr[p];
          }
        }
      }
    }
  }

  return props;
}

/**
 * Generates a new project from an external module.
 *
 * @param spec The name of the external module to load
 * @param args Command line arguments (incl. project type)
 */
async function newProjectFromModule(baseDir: string, spec: string, args: any) {
  const installCommand = `yarn add --modules-folder=${baseDir}/node_modules --silent --no-lockfile --dev`;
  if (args.projenVersion) {
    exec(`${installCommand} projen@${args.projenVersion}`, { cwd: baseDir });
  } else {
    // do not overwrite existing installation
    exec(`yarn list --depth=0 --pattern projen || ${installCommand} projen`, { cwd: baseDir });
  }

  const specDependencyInfo = yarnAdd(baseDir, spec);

  // Remove optional semver information from spec to retrieve the module name
  const moduleName = spec.replace(/\@([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/, '');

  // Find the just installed package and discover the rest recursively from this package folder
  const moduleDir = path.dirname(require.resolve(`${moduleName}/.jsii`, {
    paths: [
      baseDir,
    ],
  }));

  // Only leave projects from the main (requested) package
  const projects = inventory
    .discover(moduleDir)
    .filter(x => x.moduleName === moduleName); // Only list project types from the requested 'from' module

  if (projects.length < 1) {
    throw new Error(`No projects found after installing ${spec}. The module must export at least one class which extends projen.Project`);
  }

  const requested = args.projectTypeName;
  const types = projects.map(p => p.pjid);

  // if user did not specify a project type but the module has more than one, we need them to tell us which one...
  if (!requested && projects.length > 1) {
    throw new Error(`Multiple projects found after installing ${spec}: ${types.join(',')}. Please specify a project name.\nExample: npx projen new --from ${spec} ${types[0]}`);
  }

  // if user did not specify a type (and we know we have only one), the select it. otherwise, search by pjid.
  const type = !requested ? projects[0] : projects.find(p => p.pjid === requested);
  if (!type) {
    throw new Error(`Project type ${requested} not found. Found ${types.join(',')}`);
  }

  for (const option of type.options ?? []) {
    if (option.type !== 'string' && option.type !== 'number' && option.type !== 'boolean') {
      continue; // we don't support non-primitive fields as command line options
    }

    if (args[option.name] !== undefined) {
      if (option.type === 'number') {
        args[option.name] = parseInt(args[option.name]);
        args[option.switch] = args[option.name];
      } else if (option.type === 'boolean') {
        const raw = args[option.name];
        const safe = typeof raw === 'string' ? isTruthy(raw) : raw;
        args[option.name] = safe;
        args[option.switch] = safe;
      }
      continue; // do not overwrite passed arguments
    }

    if (option.default && option.default !== 'undefined') {
      if (!option.optional) {
        const defaultValue = renderDefault(baseDir, option.default);
        args[option.name] = defaultValue;
        args[option.switch] = defaultValue;
      }
    }
  }

  // include a dev dependency for the external module
  await newProject(baseDir, type, args, {
    devDeps: [specDependencyInfo],
  });
}

/**
 * Generates a new project.
 * @param type Project type
 * @param args Command line arguments
 * @param additionalProps Additional parameters to include in .projenrc.js
 */
async function newProject(baseDir: string, type: inventory.ProjectType, args: any, additionalProps?: Record<string, any>) {
  // convert command line arguments to project props using type information
  const props = commandLineToProps(baseDir, type, args);

  // merge in additional props if specified
  for (const [k, v] of Object.entries(additionalProps ?? {})) {
    props[k] = v;
  }

  createProject({
    dir: baseDir,
    type,
    params: props,
    comments: args.comments ? NewProjectOptionHints.FEATURED : NewProjectOptionHints.NONE,
    synth: args.synth,
    post: args.post,
  });

  if (args.git) {
    const git = (cmd: string) => exec(`git ${cmd}`, { cwd: baseDir });
    git('init');
    git('add .');
    git('commit --allow-empty -m "chore: project created with projen"');
    git('branch -M main');
  }
}

/**
 * Installs the npm module (through `yarn add`) to node_modules under `projectDir`.
 * @param spec The npm package spec (e.g. foo@^1.2)
 * @returns String info for the project devDeps (e.g. foo@^1.2 or foo@/var/folders/8k/qcw0ls5pv_ph0000gn/T/projen-RYurCw/pkg.tgz)
 */
function yarnAdd(baseDir: string, spec: string): string {
  const packageJsonPath = path.join(baseDir, 'package.json');
  const packageJsonExisted = fs.existsSync(packageJsonPath);
  let dependencyInfo = spec;

  // workaround: yarn fails to extract tgz if it contains '@' in the name, so we
  // create a temp copy called pkg.tgz and install from there.
  // see: https://github.com/yarnpkg/yarn/issues/6339
  if (spec.endsWith('.tgz') && spec.includes('@')) {
    // if user passes in a file spec then we have to specify the project name and the package location
    // (e.g foo@/var/folders/8k/qcw0ls5pv_ph0000gn/T/projen-RYurCw/pkg.tgz)
    const moduleName = spec.split('/').slice(-1)[0].trim().split('@')[0].trim(); // Example: ./cdk-project/dist/js/cdk-project@1.0.0.jsii.tgz

    const packageDir = fs.mkdtempSync(path.join(os.tmpdir(), 'projen-'));
    const copy = path.join(packageDir, 'pkg.tgz');
    fs.copyFileSync(spec, copy);

    spec = copy;

    dependencyInfo = `${moduleName}@${spec}`;
  }

  logging.info(`installing external module ${spec}...`);
  exec(`yarn add --modules-folder=${baseDir}/node_modules --silent --no-lockfile --dev ${spec}`, { cwd: baseDir });

  // if package.json did not exist before calling yarn add, we should remove it
  // so we can start off clean.
  if (!packageJsonExisted) {
    fs.removeSync(packageJsonPath);
  }

  return dependencyInfo;
}

module.exports = new Command();
