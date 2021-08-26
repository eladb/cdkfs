import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { Component } from '../component';
import { Project } from '../project';

export interface ProjenrcOptions {
  /**
   * The name of the projenrc file.
   * @default ".projenrc.json"
   */
  readonly filename?: string;
}

/**
 * Sets up a project to use JSON for projenrc.
 */
export class Projenrc extends Component {
  private readonly rcfile: string;

  constructor(project: Project, options: ProjenrcOptions = {}) {
    super(project);

    this.rcfile = options.filename ?? '.projenrc.json';

    // this is the task projen executes when running `projen`
    const task = project.addTask(Project.DEFAULT_TASK, {
      env: {
        FILENAME: this.rcfile,
      },
    });
    task.builtin('json/run-projenrc');

    this.generateProjenrc();
  }

  private generateProjenrc() {
    const rcfile = resolve(this.project.outdir, this.rcfile);
    if (existsSync(rcfile)) {
      return; // already exists
    }

    const bootstrap = this.project.newProject;
    if (!bootstrap) {
      return;
    }

    const json = {
      type: bootstrap.fqn,
      ...bootstrap.args,
    };

    writeFileSync(rcfile, JSON.stringify(json, null, 2));
    this.project.logger.info(`Project definition file was created at ${rcfile}`);
  }
}