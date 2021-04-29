import * as os from 'os';
import * as path from 'path';
import * as vm from 'vm';
import * as fs from 'fs-extra';
import * as inquirer from 'inquirer';
import * as yargs from 'yargs';
import * as inventory from '../../inventory';
import { renderJavaScriptOptions } from '../../javascript/render-options';
import * as logging from '../../logging';
import { exec, execOrUndefined } from '../../util';
import { tryProcessMacro } from '../macros';

class Command implements yargs.CommandModule {
  public readonly command = 'new [PROJECT-TYPE] [OPTIONS]';
  public readonly describe = 'Creates a new projen project';

  public builder(args: yargs.Argv) {
    args.positional('PROJECT-TYPE', { describe: 'optional only when --from is used and there is a single project type in the external module', type: 'string' });
    args.option('synth', { type: 'boolean', default: true, desc: 'Synthesize after creating .projenrc.js' });
    args.option('comments', { type: 'boolean', default: true, desc: 'Include commented out options in .projenrc.js (use --no-comments to disable)' });
    args.option('from', { type: 'string', alias: 'f', desc: 'External jsii npm module to create project from. Supports any package spec supported by yarn (such as "my-pack@^2.0")' });
    args.example('projen new awscdk-app-ts', 'Creates a new project of built-in type "awscdk-app-ts"');
    args.example('projen new --from projen-vue@^2', 'Creates a new project from an external module "projen-vue" with the specified version');

    for (const type of inventory.discover()) {
      args.command(type.pjid, type.docs ?? '', {
        builder: cargs => {
          cargs.showHelpOnFail(true);

          for (const option of type.options ?? []) {
            if (option.type !== 'string' && option.type !== 'number' && option.type !== 'boolean') {
              continue; // we don't support non-primitive fields as command line options
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
                defaultValue = renderDefault(option.default);
              }
            }

            cargs.option(option.switch, {
              group: required ? 'Required:' : 'Optional:',
              type: option.type,
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
    if (args.projectType) {
      console.log(`Invalid project type ${args.projectType}. Supported types:`);
      for (const pjid of inventory.discover().map(x => x.pjid)) {
        console.log(`  ${pjid}`);
      }
      return;
    }

    // Handles the use case that nothing was specified since PROJECT-TYPE is now an optional positional parameter
    yargs.showHelp();
  }
}

interface CreateProjectOptions {
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
   * Should we render commented-out default options in .projerc.js file?
   */
  comments: boolean;

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
function createProject(opts: CreateProjectOptions) {
  // Default project resolution location
  let mod = '../../index';

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
  const js = renderJavaScriptOptions({
    bootstrap: true,
    comments: false,
    type: opts.type,
    args: opts.params,
  });

  const newProjectCode = `const project = new ${opts.type.typename}(${js});`;

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const module = require(mod);
  const ctx = vm.createContext(module);

  process.env.PROJEN_DISABLE_POST = (!opts.post).toString();
  vm.runInContext([
    newProjectCode,
    opts.synth ? 'project.synth();' : '',
  ].join('\n'), ctx);
}


/**
 * Given a value from "@default", processes macros and returns a stringified
 * (quoted) result.
 *
 * @returns a javascript primitive (could be a string, number or boolean)
 */
function renderDefault(value: string) {
  return tryProcessMacro(value) ?? JSON.parse(value);
}

/**
 * Converts yargs command line switches to project type props.
 * @param type Project type
 * @param argv Command line switches
 */
function commandLineToProps(type: inventory.ProjectType, argv: Record<string, unknown>): Record<string, any> {
  const props: Record<string, any> = {};

  // initialize props with default values
  for (const prop of type.options) {
    if (prop.default && prop.default !== 'undefined' && !prop.optional) {
      props[prop.name] = renderDefault(prop.default);
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
  const specDependencyInfo = yarnAdd(baseDir, spec);

  // collect projects by looking up all .jsii modules in `node_modules`.
  const modulesDir = path.join(baseDir, 'node_modules');
  const modules = fs.readdirSync(modulesDir).map(file => path.join(modulesDir, file));
  const projects = inventory
    .discover(...modules)
    .filter(x => x.moduleName !== 'projen'); // filter built-in project types

  if (projects.length < 1) {
    throw new Error(`No projects found after installing ${spec}. The module must export at least one class which extends projen.Project`);
  }

  const requested = args.projectType;
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

    if (option.default && option.default !== 'undefined') {
      if (!option.optional) {
        const defaultValue = renderDefault(option.default);
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
  const props = commandLineToProps(type, args);

  // merge in additional props if specified
  for (const [k, v] of Object.entries(additionalProps ?? {})) {
    props[k] = v;
  }

  createProject({
    dir: baseDir,
    type,
    params: props,
    comments: args.comments,
    synth: args.synth,
    post: args.post,
  });

  // interactive git and github setup
  const gitFolder = path.resolve(baseDir, '.git');
  let pushInitialToGithub = false;

  if (!fs.existsSync(gitFolder)) {
    pushInitialToGithub = await askAboutGit(baseDir);
  }

  if (pushInitialToGithub) {
    exec('git add .', { cwd: baseDir });
    exec('git commit -m \'Initial commit generated by projen\'', { cwd: baseDir });
    exec('git branch -M main', { cwd: baseDir });
    exec('git push --set-upstream origin main', { cwd: baseDir });
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

/**
 * Returns the last path element for use as a repository name default.
 */
function repoName(): string {
  return path.basename(path.basename(process.cwd()));
}

async function askAboutGit(cwd: string): Promise<boolean> {
  logging.info('We notice that you do not have a local git repository.');
  const { setUpGit } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'setUpGit',
      message: 'Do you want to set that up now?',
    },
  ]);

  if (setUpGit) {
    const { plan } = await inquirer.prompt(githubPlanOptions);

    const { gh, git } = plan;

    if (!git && !gh) {
      exec('git init', { cwd });
      logging.info('Ok, we have run \'git init\' for you! Have a great day.');
    }

    if (git) {
      const { gitRepoURL } = await inquirer.prompt([
        {
          type: 'input',
          name: 'gitRepoURL',
          message: 'What is the repo? (example: https://github.com/projen/projen)',
        },
      ]);

      exec('git init', { cwd });

      let formattedGitRepoURL = gitRepoURL;
      if (!gitRepoURL.includes('https')) {
        formattedGitRepoURL = `https://github.com/${gitRepoURL}`;
      }

      exec(`git remote add origin ${formattedGitRepoURL}`, { cwd });

      logging.info(`Great! We have run 'git init' for you and set the remote to ${formattedGitRepoURL}`);
    }

    if (!git && gh) {
      logging.info('Ok! We will make you a repository on GitHub.');

      const ghCLIPath = execOrUndefined(`${os.platform() === 'win32' ? 'where' : 'which'} gh`, { cwd });

      if (!ghCLIPath) {
        logging.warn('Looks like you do not have the GitHub CLI installed. Please go to https://cli.github.com/ to install and try again.');
      } else {
        const { gitProjectName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'gitProjectName',
            message: 'What would you like to name it?',
            default: repoName(),
          },
        ]);

        logging.info(`Wow! ${gitProjectName} is such a great name!`);

        exec('git init', { cwd });

        exec(`gh repo create ${gitProjectName}`, { cwd });
        return true;
      }
    }
  }
  return false;
}

const githubPlanOptions = [
  {
    type: 'list',
    name: 'plan',
    message: 'We\'ll need some more info. Please choose one:',
    choices: [
      {
        value: {
          git: true,
        },
        name: 'I already have a git repository',
      },
      {
        value: {
          gh: true,
          git: false,
        },
        name: 'I don\'t have a git repository and want to make one on GitHub',
      },
      {
        value: {
          gh: false,
          git: false,
        },
        name: 'I don\'t have a git repository and I don\'t want to use GitHub',
      },
    ],
  },
];

module.exports = new Command();
