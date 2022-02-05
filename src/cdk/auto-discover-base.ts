import { join } from "path";
import * as glob from "glob";
import { Component } from "../component";
import { Project } from "../project";
import { TYPESCRIPT_INTEG_EXT } from "./internal";

/**
 * Options for `AutoDiscoverBase`
 */
export interface AutoDiscoverBaseOptions {
  /**
   * Locate files with the given extension.
   *
   * @example ".integ.ts"
   */
  readonly extension: string;

  /**
   * Locate entrypoints in the given project directory.
   *
   * @example "test"
   */
  readonly projectdir: string;
}

/**
 * Base class for auto-discovering and creating project subcomponents.
 */
export class AutoDiscoverBase extends Component {
  /**
   * Auto-discovered entry points with paths relative to the project
   * directory.
   */
  public readonly entrypoints: string[];

  constructor(project: Project, options: AutoDiscoverBaseOptions) {
    super(project);

    const cwd = join(this.project.outdir, options.projectdir);

    this.entrypoints = glob
      .sync(`**/*${options.extension}`, { cwd })
      .map((p) => join(options.projectdir, p));
  }
}

/**
 * Options for `IntegrationTestAutoDiscoverBase`
 */
export interface IntegrationTestAutoDiscoverBaseOptions {
  /**
   * Test source tree.
   */
  readonly testdir: string;
}

/**
 * Base class for locating integration tests in the project's test tree.
 */
export class IntegrationTestAutoDiscoverBase extends AutoDiscoverBase {
  constructor(
    project: Project,
    options: IntegrationTestAutoDiscoverBaseOptions
  ) {
    super(project, {
      extension: TYPESCRIPT_INTEG_EXT,
      projectdir: options.testdir,
    });
  }
}
