import { PoetryPyprojectOptionsWithoutDeps } from "./poetry";
import { Task } from "../task";

export interface IPythonPackaging {
  /**
   * A task that uploads the package to a package repository.
   */
  readonly publishTask: Task;
}

export interface PythonPackagingOptions {
  /**
   * Author's name
   *
   * @default $GIT_USER_NAME
   */
  readonly authorName: string;

  /**
   * Package name.
   */
  readonly packageName?: string;

  /**
   * Author's e-mail
   *
   * @default $GIT_USER_EMAIL
   */
  readonly authorEmail: string;

  /**
   * Version of the package.
   *
   * @default "0.1.0"
   * @featured
   */
  readonly version: string;

  /**
   * A short description of the package.
   * @featured
   */
  readonly description?: string;

  /**
   * License of this package as an SPDX identifier.
   *
   * @default "Apache-2.0"
   */
  readonly license?: string;

  /**
   * A URL to the website of the project.
   */
  readonly homepage?: string;

  /**
   * A list of PyPI trove classifiers that describe the project.
   *
   * @see https://pypi.org/classifiers/
   */
  readonly classifiers?: string[];

  /**
   * Additional fields to pass in the setup() function if using setuptools
   */
  readonly setupConfig?: { [key: string]: any };

  /**
   * Additional options to set for poetry if using poetry
   */
  readonly poetryOptions?: PoetryPyprojectOptionsWithoutDeps;
}
