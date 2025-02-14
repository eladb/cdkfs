import * as TOML from "@iarna/toml";
import { IPythonDeps } from "./python-deps";
import { IPythonEnv } from "./python-env";
import { IPythonPackaging, PythonPackagingOptions } from "./python-packaging";
import { PythonExecutableOptions } from "./python-project";
import { Component } from "../component";
import { DependencyType } from "../dependencies";
import { Project } from "../project";
import { Task } from "../task";
import { TaskRuntime } from "../task-runtime";
import { TomlFile } from "../toml";
import { decamelizeKeysRecursively, exec, execOrUndefined } from "../util";

export interface PoetryOptions
  extends PythonPackagingOptions,
    PythonExecutableOptions {}

/**
 * Manage project dependencies, virtual environments, and packaging through the
 * poetry CLI tool.
 */
export class Poetry
  extends Component
  implements IPythonDeps, IPythonEnv, IPythonPackaging
{
  /**
   * Task for updating the lockfile and installing project dependencies.
   */
  public readonly installTask: Task;

  /**
   * Task for installing dependencies according to the existing lockfile.
   */
  public readonly installCiTask: Task;

  /**
   * Task for publishing the package to a package repository.
   */
  public readonly publishTask: Task;

  /**
   * Task for publishing the package to the Test PyPI repository for testing purposes.
   */
  public readonly publishTestTask: Task;

  /**
   * Path to the Python executable to use.
   */
  private readonly pythonExec: string;

  /**
   * Represents the configuration of the `pyproject.toml` file for a Poetry project.
   * This includes package metadata, dependencies, and Poetry-specific settings.
   */
  private readonly pyProject: PoetryPyproject;

  constructor(project: Project, options: PoetryOptions) {
    super(project);
    this.pythonExec = options.pythonExec ?? "python";

    this.installTask = project.addTask("install", {
      description: "Install dependencies and update lockfile",
      exec: "poetry update",
    });

    this.installCiTask = project.addTask("install:ci", {
      description: "Install dependencies with frozen lockfile",
      exec: "poetry check --lock && poetry install",
    });

    this.project.tasks.addEnvironment(
      "VIRTUAL_ENV",
      // Create .venv on the first run if it doesn't already exist
      "$(poetry env info -p || poetry run poetry env info -p)"
    );
    this.project.tasks.addEnvironment(
      "PATH",
      "$(echo $(poetry env info -p)/bin:$PATH)"
    );

    project.packageTask.exec("poetry build");

    this.publishTestTask = project.addTask("publish:test", {
      description: "Uploads the package against a test PyPI endpoint.",
      exec: "poetry publish -r testpypi",
    });

    this.publishTask = project.addTask("publish", {
      description: "Uploads the package to PyPI.",
      exec: "poetry publish",
    });

    this.pyProject = new PoetryPyproject(project, {
      name: project.name,
      version: options.version,
      description: options.description ?? "",
      license: options.license,
      authors: [`${options.authorName} <${options.authorEmail}>`],
      homepage: options.homepage,
      classifiers: options.classifiers,
      ...options.poetryOptions,
      dependencies: () => this.synthDependencies(),
      devDependencies: () => this.synthDevDependencies(),
    });

    new TomlFile(project, "poetry.toml", {
      committed: false,
      obj: {
        repositories: {
          testpypi: {
            url: "https://test.pypi.org/legacy/",
          },
        },
      },
    });
  }

  private synthDependencies() {
    const dependencies: { [key: string]: any } = {};
    let pythonDefined: boolean = false;
    for (const pkg of this.project.deps.all) {
      if (pkg.name === "python") {
        pythonDefined = true;
      }
      if (pkg.type === DependencyType.RUNTIME) {
        dependencies[pkg.name] = pkg.version ?? "*";
      }
    }
    if (!pythonDefined) {
      // Python version must be defined for poetry projects. Default to ^3.8.
      dependencies.python = "^3.8";
    }
    return this.permitDepsWithTomlInlineTables(dependencies);
  }

  private synthDevDependencies() {
    const dependencies: { [key: string]: any } = {};
    for (const pkg of this.project.deps.all) {
      if ([DependencyType.DEVENV, DependencyType.TEST].includes(pkg.type)) {
        dependencies[pkg.name] = pkg.version ?? "*";
      }
    }
    return this.permitDepsWithTomlInlineTables(dependencies);
  }

  /**
   * Parses dependency values that may include TOML inline tables, converting them into JavaScript objects.
   * If a dependency value cannot be parsed as a TOML inline table (indicating it is a plain SemVer string),
   * it is left unchanged. This allows to support the full range of Poetry's dependency specification.
   * @see https://python-poetry.org/docs/dependency-specification/
   * @see https://toml.io/en/v1.0.0#inline-table
   *
   * @example
   * // Given a `dependencies` object like this:
   * const dependencies = {
   *   "mypackage": "{ version = '1.2.3', extras = ['extra1', 'extra2'] }",
   *   "anotherpackage": "^2.3.4"
   * };
   * // After parsing, the resulting object would be:
   * {
   *   "mypackage": {
   *     version: "1.2.3",
   *     extras: ["extra1", "extra2"]
   *   },
   *   "anotherpackage": "^2.3.4"
   * }
   * // Note: The value of `anotherpackage` remains unchanged as it is a plain SemVer string.
   *
   * @param dependencies An object where each key is a dependency name and each value is a string that might be
   * either a SemVer string or a TOML inline table string.
   * @returns A new object where each key is a dependency name and each value is either the original SemVer string
   * or the parsed JavaScript object representation of the TOML inline table.
   */
  private permitDepsWithTomlInlineTables(dependencies: {
    [key: string]: string;
  }) {
    const parseTomlInlineTable = (dependencyValue: string) => {
      try {
        // Attempt parsing the `dependencyValue` as a TOML inline table
        return TOML.parse(`dependencyKey = ${dependencyValue}`).dependencyKey;
      } catch {
        // If parsing fails, treat the `dependencyValue` as a plain SemVer string
        return dependencyValue;
      }
    };

    return Object.fromEntries(
      Object.entries(dependencies).map(([dependencyKey, dependencyValue]) => {
        return [dependencyKey, parseTomlInlineTable(dependencyValue)];
      })
    );
  }

  /**
   * Adds a runtime dependency.
   *
   * @param spec Format `<module>@<semver>`
   */
  public addDependency(spec: string) {
    this.project.deps.addDependency(spec, DependencyType.RUNTIME);
  }

  /**
   * Adds a dev dependency.
   *
   * @param spec Format `<module>@<semver>`
   */
  public addDevDependency(spec: string) {
    this.project.deps.addDependency(spec, DependencyType.DEVENV);
  }

  /**
   * Initializes the virtual environment if it doesn't exist (called during post-synthesis).
   */
  public setupEnvironment() {
    const result = execOrUndefined("which poetry", {
      cwd: this.project.outdir,
    });
    if (!result) {
      this.project.logger.info(
        "Unable to setup an environment since poetry is not installed. Please install poetry (https://python-poetry.org/docs/) or use a different component for managing environments such as 'venv'."
      );
    }

    let envPath = execOrUndefined("poetry env info -p", {
      cwd: this.project.outdir,
    });
    if (!envPath) {
      this.project.logger.info("Setting up a virtual environment...");
      exec(`poetry env use ${this.pythonExec}`, { cwd: this.project.outdir });
      envPath = execOrUndefined("poetry env info -p", {
        cwd: this.project.outdir,
      });
      this.project.logger.info(
        `Environment successfully created (located in ${envPath}}).`
      );
    }
  }

  /**
   * Installs dependencies (called during post-synthesis).
   */
  public installDependencies() {
    this.project.logger.info("Installing dependencies...");
    const runtime = new TaskRuntime(this.project.outdir);
    // If the pyproject.toml file has changed, update the lockfile prior to installation
    if (this.pyProject.file.changed) {
      runtime.runTask(this.installTask.name);
    } else {
      runtime.runTask(this.installCiTask.name);
    }
  }
}

/**
 * Poetry-specific options.
 * @see https://python-poetry.org/docs/pyproject/
 */
export interface PoetryPyprojectOptionsWithoutDeps {
  /**
   * Name of the package (required).
   */
  readonly name?: string;

  /**
   * Version of the package (required).
   */
  readonly version?: string;

  /**
   * A short description of the package (required).
   */
  readonly description?: string;

  /**
   * License of this package as an SPDX identifier.
   *
   * If the project is proprietary and does not use a specific license, you
   * can set this value as "Proprietary".
   */
  readonly license?: string;

  /**
   * The authors of the package. Must be in the form "name <email>"
   */
  readonly authors?: string[];

  /**
   * the maintainers of the package. Must be in the form "name <email>"
   */
  readonly maintainers?: string[];

  /**
   * The name of the readme file of the package.
   */
  readonly readme?: string;

  /**
   * A URL to the website of the project.
   */
  readonly homepage?: string;

  /**
   * A URL to the repository of the project.
   */
  readonly repository?: string;

  /**
   * A URL to the documentation of the project.
   */
  readonly documentation?: string;

  /**
   * A list of keywords (max: 5) that the package is related to.
   */
  readonly keywords?: string[];

  /**
   * A list of PyPI trove classifiers that describe the project.
   *
   * @see https://pypi.org/classifiers/
   */
  readonly classifiers?: string[];

  /**
   * A list of packages and modules to include in the final distribution.
   */
  readonly packages?: any[];

  /**
   * A list of patterns that will be included in the final package.
   */
  readonly include?: string[];

  /**
   * A list of patterns that will be excluded in the final package.
   *
   * If a VCS is being used for a package, the exclude field will be seeded with
   * the VCS’ ignore settings (.gitignore for git for example).
   */
  readonly exclude?: string[];

  /**
   * The scripts or executables that will be installed when installing the package.
   */
  readonly scripts?: { [key: string]: any };

  /**
   * Source registries from which packages are retrieved.
   */
  readonly source?: any[];

  /**
   * Package extras
   */
  readonly extras?: { [key: string]: string[] };

  /**
   * Plugins. Must be specified as a table.
   * @see https://toml.io/en/v1.0.0#table
   */
  readonly plugins?: any;

  /**
   * Project custom URLs, in addition to homepage, repository and documentation.
   * E.g. "Bug Tracker"
   */
  readonly urls?: { [key: string]: string };
  /**
   * Package mode (optional).
   * @see https://python-poetry.org/docs/pyproject/#package-mode
   * @default true
   * @example false
   */
  readonly packageMode?: boolean;
}

/**
 * Poetry-specific options.
 * @see https://python-poetry.org/docs/pyproject/
 */
export interface PoetryPyprojectOptions
  extends PoetryPyprojectOptionsWithoutDeps {
  /**
   * A list of dependencies for the project.
   *
   * The python version for which your package is compatible is also required.
   *
   * @example { requests: "^2.13.0" }
   */
  readonly dependencies?: { [key: string]: any };

  /**
   * A list of development dependencies for the project.
   *
   * @example { requests: "^2.13.0" }
   */
  readonly devDependencies?: { [key: string]: any };
}

/**
 * Represents configuration of a pyproject.toml file for a Poetry project.
 *
 * @see https://python-poetry.org/docs/pyproject/
 */
export class PoetryPyproject extends Component {
  public readonly file: TomlFile;

  constructor(project: Project, options: PoetryPyprojectOptions) {
    super(project);

    const { dependencies, devDependencies, ...otherOptions } = options;
    const decamelizedOptions = decamelizeKeysRecursively(otherOptions, {
      separator: "-",
    });

    const tomlStructure: any = {
      tool: {
        poetry: {
          ...decamelizedOptions,
          dependencies: dependencies,
          group: {
            dev: {
              dependencies: devDependencies,
            },
          },
        },
      },
      "build-system": {
        requires: ["poetry-core"],
        "build-backend": "poetry.core.masonry.api",
      },
    };

    this.file = new TomlFile(project, "pyproject.toml", {
      omitEmpty: false,
      obj: tomlStructure,
    });
  }
}
