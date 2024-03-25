import { IPythonPackaging, PythonPackagingOptions } from "./python-packaging";
import { PythonExecutableOptions } from "./python-project";
import { SetupPy } from "./setuppy";
import { Component } from "../component";
import { DependencyType } from "../dependencies";
import { Project } from "../project";
import { Task } from "../task";

export interface SetuptoolsOptions
  extends PythonPackagingOptions,
    PythonExecutableOptions {}

/**
 * Manages packaging through setuptools with a setup.py script.
 */
export class Setuptools extends Component implements IPythonPackaging {
  public readonly publishTask: Task;

  /**
   * A task that uploads the package to the Test PyPI repository.
   */
  public readonly publishTestTask: Task;

  private readonly pythonExec: string;
  private readonly requiresPython: string;

  constructor(project: Project, options: SetuptoolsOptions) {
    super(project);
    this.pythonExec = options.pythonExec ?? "python";
    this.requiresPython = options.requiresPython ?? ">=3.8";

    project.deps.addDependency("wheel@0.36.2", DependencyType.DEVENV);
    project.deps.addDependency("twine@3.3.0", DependencyType.DEVENV);

    project.packageTask.exec(`${this.pythonExec} setup.py sdist bdist_wheel`);

    this.publishTestTask = project.addTask("publish:test", {
      description: "Uploads the package against a test PyPI endpoint.",
      exec: "twine upload --repository-url https://test.pypi.org/legacy/ dist/*",
    });

    this.publishTask = project.addTask("publish", {
      description: "Uploads the package against a test PyPI endpoint.",
      exec: "twine upload dist/*",
    });

    const packages = options.packageName ? [options.packageName] : undefined;

    new SetupPy(project, {
      name: project.name,
      packages: packages,
      authorName: options.authorName,
      authorEmail: options.authorEmail,
      version: options.version,
      description: options.description,
      license: options.license,
      homepage: options.homepage,
      classifiers: options.classifiers,
      python_requires: this.requiresPython,
      ...options.setupConfig,
    });
  }
}
