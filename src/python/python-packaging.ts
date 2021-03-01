import { Task } from '../tasks';
import { PoetryPyprojectOptionsWithoutDeps } from './poetry';

export interface IPythonPackaging {
  /**
   * A task that packages the project for distribution.
   */
  readonly packageTask: Task;

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
   * Author's e-mail
   *
   * @default $GIT_USER_EMAIL
   */
  readonly authorEmail: string;

  /**
   * Version of the package.
   *
   * @default "0.1.0"
   */
  readonly version: string;

  /**
   * A short description of the package.
   */
  readonly description?: string;

  /**
   * License of this package as an SPDX identifier.
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
