import { IPythonDeps } from "./python-deps";
import { IPythonEnv } from "./python-env";
import { IPythonPackaging } from "./python-packaging";
import { Component } from "../component";
import { DependencyType } from "../dependencies";
import { Project } from "../project";
import { Task } from "../task";
import { TaskRuntime } from "../task-runtime";
import { TomlFile } from "../toml";
import { exec, execOrUndefined } from "../util";

interface UvTomlStructure {
  project: {
    name?: string;
    version?: string;
    description?: string;
    readme?: string;
    authors: { name: string; email?: string }[];
    "requires-python"?: string;
    dependencies: string[];
    classifiers?: string[];
    keywords?: string[];
    urls?: { [key: string]: string };
    license?: string;
  };
  "dependency-groups"?: {
    [key: string]: string[];
  };
  tool: {
    uv: {
      "default-groups": string[];
      index?: {
        name: string;
        "publish-url": string;
        url: string;
      }[];
    };
  };
}

/**
 * Base options for UV project configuration
 */
export interface UvBaseOptions {
  /**
   * Name of the package
   */
  readonly name?: string;

  /**
   * Version of the package
   */
  readonly version?: string;

  /**
   * Description of the package
   */
  readonly description?: string;

  /**
   * License of the package
   */
  readonly license?: string;

  /**
   * Name of the package author
   */
  readonly authorName?: string;

  /**
   * Email of the package author
   */
  readonly authorEmail?: string;

  /**
   * Homepage URL of the package
   */
  readonly homepage?: string;

  /**
   * Repository URL of the package
   */
  readonly repository?: string;

  /**
   * Documentation URL of the package
   */
  readonly documentation?: string;

  /**
   * Keywords for the package
   */
  readonly keywords?: string[];

  /**
   * Python package classifiers
   * @see https://pypi.org/classifiers/
   */
  readonly classifiers?: string[];

  /**
   * Additional URLs associated with the package
   */
  readonly urls?: { [key: string]: string };

  /**
   * Python version requirement string
   */
  readonly requiresPython?: string;

  /**
   * Path to the readme file
   */
  readonly readme?: string;
}

/**
 * Options for UV project
 */
export interface UvOptions {
  /**
   * Python version to use for the project.
   * @default "3.12"
   */
  readonly pythonVersion?: string;

  /**
   * List of runtime dependencies for this project.
   * Dependencies use the format: `<module>@<semver>`
   * @default []
   */
  readonly deps?: string[];

  /**
   * List of dev dependencies for this project.
   * Dependencies use the format: `<module>@<semver>`
   * @default []
   */
  readonly devDeps?: string[];

  /**
   * Package metadata
   */
  readonly metadata?: UvBaseOptions;
}

/**
 * Options for UV pyproject.toml configuration
 */
export interface UvPyprojectOptions extends UvBaseOptions {
  /**
   * Python version to use
   */
  readonly pythonVersion?: string;

  /**
   * A list of dependencies for the project.
   * Each entry should be in the format: `<module>@<semver>`
   */
  readonly dependencies?: string[];

  /**
   * A list of development dependencies for the project.
   * Each entry should be in the format: `<module>@<semver>`
   */
  readonly devDependencies?: string[];
}

/**
 * Manage project dependencies, virtual environments, and packaging through uv.
 */
export class Uv
  extends Component
  implements IPythonDeps, IPythonEnv, IPythonPackaging
{
  public readonly installTask: Task;
  public readonly installCiTask: Task;
  public readonly publishTask: Task;
  public readonly publishTestTask: Task;
  private readonly pyProject: UvPyproject;
  private readonly pythonVersion: string;

  constructor(project: Project, options: UvOptions) {
    super(project);
    this.pythonVersion = options.pythonVersion ?? "3.12";

    this.installTask = project.addTask("install", {
      description: "Install dependencies and update lockfile",
      exec: "uv sync && uv lock",
    });

    this.installCiTask = project.addTask("install:ci", {
      description: "Install dependencies with frozen lockfile",
      exec: "uv sync",
    });

    this.project.tasks.addEnvironment("VIRTUAL_ENV", ".venv");
    this.project.tasks.addEnvironment("PATH", "$(echo .venv/bin:$PATH)");

    project.packageTask.exec("uv build");

    this.publishTestTask = project.addTask("publish:test", {
      description: "Uploads the package against a test PyPI endpoint.",
      exec: "uv publish --index testpypi",
    });

    this.publishTask = project.addTask("publish", {
      description: "Uploads the package to PyPI.",
      exec: "uv publish",
    });

    // Add dependencies first
    if (options.deps) {
      for (const dep of options.deps) {
        this.addDependency(dep);
      }
    }

    if (options.devDeps) {
      for (const dep of options.devDeps) {
        this.addDevDependency(dep);
      }
    }

    this.pyProject = new UvPyproject(project, {
      name: project.name,
      dependencies: this.synthDependencies(),
      devDependencies: this.synthDevDependencies(),
      pythonVersion: this.pythonVersion,
      ...options.metadata,
    });
  }

  private synthDependencies(): string[] {
    return this.project.deps.all
      .filter(
        (pkg) => pkg.type === DependencyType.RUNTIME && pkg.name !== "python"
      )
      .map((pkg) => (pkg.version ? `${pkg.name}==${pkg.version}` : pkg.name));
  }

  private synthDevDependencies(): string[] {
    return this.project.deps.all
      .filter(
        (pkg) =>
          [DependencyType.DEVENV, DependencyType.TEST].includes(pkg.type) &&
          pkg.name !== "python"
      )
      .map((pkg) => (pkg.version ? `${pkg.name}==${pkg.version}` : pkg.name));
  }

  public addDependency(spec: string): void {
    this.project.deps.addDependency(spec, DependencyType.RUNTIME);
  }

  public addDevDependency(spec: string): void {
    this.project.deps.addDependency(spec, DependencyType.DEVENV);
  }

  public setupEnvironment(): void {
    const result = execOrUndefined("which uv", {
      cwd: this.project.outdir,
    });
    if (!result) {
      this.project.logger.info(
        "Unable to setup an environment since uv is not installed. Please install uv (https://github.com/astral-sh/uv) or use a different component for managing environments."
      );
      return;
    }

    // Install Python version if needed
    exec(`uv python install ${this.pythonVersion}`, {
      cwd: this.project.outdir,
    });

    // Create venv with the specific Python version
    exec(`uv venv --python ${this.pythonVersion} .venv`, {
      cwd: this.project.outdir,
    });
    this.project.logger.info(
      `Environment successfully created in .venv directory with Python ${this.pythonVersion}.`
    );
  }

  public installDependencies(): void {
    this.project.logger.info("Installing dependencies...");
    const runtime = new TaskRuntime(this.project.outdir);
    if (this.pyProject.file.changed) {
      runtime.runTask(this.installTask.name);
    } else {
      runtime.runTask(this.installCiTask.name);
    }
  }
}

/**
 * Represents configuration of a pyproject.toml file for a uv project.
 */
export class UvPyproject extends Component {
  public readonly file: TomlFile;
  private readonly pythonVersion: string;

  constructor(project: Project, options: UvPyprojectOptions) {
    super(project);
    this.pythonVersion = options.pythonVersion ?? "3.12";

    // Format dependencies in UV style
    const formattedDependencies =
      options.dependencies?.map((dep) => {
        const [name, version] = dep.split("@");
        if (!version || version === "*") {
          return name;
        }
        if (!version.startsWith("^") && !version.startsWith("~")) {
          return `${name}==${version}`;
        }
        const cleanVersion = version.replace(/[\^~]/, "");
        const majorVersion = Number.parseInt(cleanVersion.split(".")[0]);
        return `${name}>=${cleanVersion}, <${majorVersion + 1}.0.0`;
      }) ?? [];

    // Format dev dependencies in UV style
    const formattedDevDependencies =
      options.devDependencies?.map((dep) => {
        const [name, version] = dep.split("@");
        if (!version || version === "*") {
          return name;
        }
        if (!version.startsWith("^") && !version.startsWith("~")) {
          return `${name}==${version}`;
        }
        const cleanVersion = version.replace(/[\^~]/, "");
        const majorVersion = Number.parseInt(cleanVersion.split(".")[0]);
        return `${name}>=${cleanVersion}, <${majorVersion + 1}.0.0`;
      }) ?? [];

    // If no authors provided, use empty array
    const authors: { name: string; email?: string }[] = options.authorName
      ? [{ name: options.authorName, email: options.authorEmail }]
      : [];

    const tomlStructure: UvTomlStructure = {
      project: {
        name: options.name,
        version: options.version,
        description: options.description || "",
        readme: options.readme || "README.md",
        authors,
        "requires-python":
          options.requiresPython ||
          `>=${this.pythonVersion},<${
            Number(this.pythonVersion.split(".")[0]) + 1
          }.0`,
        dependencies: formattedDependencies,
        classifiers: options.classifiers,
        keywords: options.keywords,
        urls: options.urls,
        license: options.license,
      },
      "dependency-groups":
        formattedDevDependencies.length > 0
          ? {
              dev: formattedDevDependencies,
            }
          : undefined,
      tool: {
        uv: {
          "default-groups": [],
        },
      },
    };

    this.file = new TomlFile(project, "pyproject.toml", {
      omitEmpty: false,
      obj: tomlStructure,
    });
  }
}
