import { FileBase, IResolver } from "../file";
import { Project } from "../project";

/**
 * Fields to pass in the setup() function of setup.py
 *
 * @see https://docs.python.org/3/distutils/setupscript.html
 */
export interface SetupPyOptions {
  /**
   * Name of the package
   */
  readonly name?: string;

  /**
   * List of submodules to be packaged
   */
  readonly packages?: string[];

  /**
   * Author's name
   */
  readonly authorName?: string;

  /**
   * Author's e-mail
   */
  readonly authorEmail?: string;

  /**
   * Manually specify package version
   */
  readonly version?: string;

  /**
   * A short project description
   */
  readonly description?: string;

  /**
   * The project license
   */
  readonly license?: string;

  /**
   * Package's Homepage / Website
   */
  readonly homepage?: string;

  /**
   * Specifies the Python version requirements for the project, following
   * the standard outlined in PEP 621 for the `requires-python` field.
   *
   * @see https://peps.python.org/pep-0621/#requires-python
   *
   * @default ">=3.8"
   */
  readonly requiresPython?: string;

  /**
   * A list of PyPI trove classifiers that describe the project.
   *
   * @see https://pypi.org/classifiers/
   */
  readonly classifiers?: string[];

  /**
   * Escape hatch to allow any value
   */
  readonly additionalOptions?: { [name: string]: any };

  /**
   * Escape hatch to allow any value (JS/TS only)
   *
   * @deprecated Prefer using `additionalOptions` instead.
   *
   * @jsii ignore
   */
  readonly [name: string]: any;
}

/**
 * Python packaging script where package metadata can be placed.
 */
export class SetupPy extends FileBase {
  private readonly setupConfig: any;

  constructor(project: Project, options: SetupPyOptions) {
    super(project, "setup.py");

    this.setupConfig = {
      name: project.name,
      packages: options.packages,
      python_requires: options.requiresPython,
      classifiers: [
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
      ],
      ...(options ? this.renameFields(options) : []),
    };
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const lines = [
      ...(this.marker ? [`# ${this.marker}`] : []),
      "",
      "import json",
      "from setuptools import setup",
      "",
      "kwargs = json.loads(",
      '    """',
      JSON.stringify(this.setupConfig, null, 4),
      '"""',
      ")",
      "",
      "setup(**kwargs)",
    ];

    return `${resolver.resolve(lines).join("\n")}\n`;
  }

  // modify some key names since JSII interfaces require fields to be camelCase
  private renameFields(options: SetupPyOptions): any {
    const obj: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(options)) {
      switch (key) {
        case "authorName":
          obj.author = value;
          break;
        case "authorEmail":
          obj.author_email = value;
          break;
        case "homepage":
          obj.url = value;
          break;
        case "requiresPython":
          obj.python_requires = value;
          break;
        case "additionalOptions":
          Object.assign(obj, this.renameFields(value));
          break;
        default:
          obj[key] = value;
      }
    }
    return obj;
  }
}
