import * as path from "path";
import { snake } from "case";
import { Component } from "../component";
import { Project } from "../project";
import { YamlFile } from "../yaml";
import {
  Artifacts,
  Cache,
  Default,
  Image,
  Include,
  Job,
  Retry,
  Service,
  VariableConfig,
  Workflow,
} from "./configuration-model";

/**
 * Options for `CiConfiguration`.
 */
export interface CiConfigurationOptions {
  /**
   * Default settings for the CI Configuration. Jobs that do not define one or more of the listed keywords use the value defined in the default section.
   */
  readonly default?: Default;
  /**
   * A special job used to upload static sites to Gitlab pages. Requires a `public/` directory
   * with `artifacts.path` pointing to it.
   */
  readonly pages?: Job;
  /**
   * Used to control pipeline behavior.
   */
  readonly workflow?: Workflow;
  /**
   * Groups jobs into stages. All jobs in one stage must complete before next stage is
   * executed. If no stages are specified. Defaults to ['build', 'test', 'deploy'].
   */
  readonly stages?: string[];
  /**
   * Global variables that are passed to jobs.
   * If the job already has that variable defined, the job-level variable takes precedence.
   */
  readonly variables?: Record<string, any>;
  /**
   * An initial set of jobs to add to the configuration.
   */
  readonly jobs?: Record<string, Job>;
}

/**
 * CI for GitLab.
 * A CI is a configurable automated process made up of one or more stages/jobs.
 * @see https://docs.gitlab.com/ee/ci/yaml/
 */
export class CiConfiguration extends Component {
  /**
   * The project the configuration belongs to.
   */
  public readonly project: Project;
  /**
   * The name of the configuration.
   */
  public readonly name: string;
  /**
   * Path to CI file generated by the configuration.
   */
  public readonly path: string;
  /**
   * The workflow YAML file.
   */
  public readonly file: YamlFile;
  /**
   * Defines default scripts that should run *after* all jobs. Can be overriden by the job level `afterScript`.
   */
  public readonly defaultAfterScript: string[] = [];
  /**
   * Default list of files and directories that should be attached to the job if it succeeds. Artifacts are sent to Gitlab where they can be downloaded.
   */
  public readonly defaultArtifacts?: Artifacts;
  /**
   * Defines default scripts that should run *before* all jobs. Can be overriden by the job level `afterScript`.
   */
  public readonly defaultBeforeScript: string[] = [];
  /**
   * A default list of files and directories to cache between jobs. You can only use paths that are in the local working copy.
   */
  public readonly defaultCache?: Cache;
  /**
   * Specifies the default docker image to use globally for all jobs.
   */
  public readonly defaultImage?: Image;
  /**
   * The default behavior for whether a job should be canceled when a newer pipeline starts before the job completes (Default: false).
   */
  public readonly defaultInterruptible?: boolean;
  /**
   * How many times a job is retried if it fails. If not defined, defaults to 0 and jobs do not retry.
   */
  public readonly defaultRetry?: Retry;
  /**
   * A default list of additional Docker images to run scripts in. The service image is linked to the image specified in the  image parameter.
   */
  private defaultServices: Service[] = [];
  /**
   * Used to select a specific runner from the list of all runners that are available for the project.
   */
  readonly defaultTags: string[] = [];
  /**
   * A default timeout job written in natural language (Ex. one hour, 3600 seconds, 60 minutes).
   */
  readonly defaultTimeout?: string;
  /**
   * Can be `Include` or `Include[]`. Each `Include` will be a string, or an
   * object with properties for the method if including external YAML file. The external
   * content will be fetched, included and evaluated along the `.gitlab-ci.yml`.
   */
  private include: Include[] = [];
  /**
   * A special job used to upload static sites to Gitlab pages. Requires a `public/` directory
   * with `artifacts.path` pointing to it.
   */
  public readonly pages?: Job;
  /**
   * Groups jobs into stages. All jobs in one stage must complete before next stage is
   * executed. Defaults to ['build', 'test', 'deploy'].
   */
  public readonly stages: string[] = [];
  /**
   * Global variables that are passed to jobs.
   * If the job already has that variable defined, the job-level variable takes precedence.
   */
  public readonly variables: Record<string, number | VariableConfig | string> =
    {};
  /**
   * Used to control pipeline behavior.
   */
  public readonly workflow?: Workflow;
  /**
   * The jobs in the CI configuration.
   */
  public readonly jobs: Record<string, Job> = {};

  constructor(
    project: Project,
    name: string,
    options?: CiConfigurationOptions
  ) {
    super(project);
    this.project = project;
    this.name = path.parse(name).name;
    this.path =
      this.name === "gitlab-ci"
        ? ".gitlab-ci.yml"
        : `.gitlab/ci-templates/${name.toLocaleLowerCase()}.yml`;
    this.file = new YamlFile(this.project, this.path, {
      obj: () => this.renderCI(),
      // GitLab needs to read the file from the repository in order to work.
      committed: true,
    });
    const defaults = options?.default;
    if (defaults) {
      this.defaultAfterScript.push(...(defaults.afterScript ?? []));
      this.defaultArtifacts = defaults.artifacts;
      defaults.beforeScript &&
        this.defaultBeforeScript.push(...defaults.beforeScript);
      this.defaultCache = defaults.cache;
      this.defaultImage = defaults.image;
      this.defaultInterruptible = defaults.interruptible;
      this.defaultRetry = defaults.retry;
      defaults.services && this.addServices(...defaults.services);
      defaults.tags && this.defaultTags.push(...defaults.tags);
      this.defaultTimeout = defaults.timeout;
    }
    this.pages = options?.pages;
    this.workflow = options?.workflow;
    if (options?.stages) {
      this.addStages(...options.stages);
    }
    if (options?.variables) {
      this.addJobs(options.variables);
    }
    if (options?.jobs) {
      this.addJobs(options.jobs);
    }
  }

  /**
   * Add additional yml/yaml files to the CI includes
   * @param includes The includes to add.
   */
  public addIncludes(...includes: Include[]) {
    for (const additional of includes) {
      this.assertIsValidInclude(additional);
      for (const existing of this.include) {
        if (this.areEqualIncludes(existing, additional)) {
          throw new Error(
            `${this.name}: GitLab CI ${existing} already contains one or more templates specified in ${additional}.`
          );
        }
      }
      this.include.push(additional);
    }
  }

  /**
   * Throw an error if the provided Include is invalid.
   * @see https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/config/external/mapper.rb
   * @param include the Include to validate.
   */
  private assertIsValidInclude(include: Include) {
    const combos = [
      include.local,
      include.file && include.project,
      include.remote,
      include.template,
    ];
    const len = combos.filter((x) => Boolean(x)).length;
    if (len !== 1) {
      throw new Error(
        `${this.name}: GitLab CI include ${include} contains ${len} property combination(s).
        A valid include configuration specifies *one* of the following property combinations.
        * local
        * file, project
        * remote
        * template  
        `
      );
    }
  }

  /**
   * Check if the equality of Includes.
   * @see https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/config/external/mapper.rb
   * @param x First include to compare.
   * @param y Second include to compare.
   * @returns Whether the includes are equal.
   */
  private areEqualIncludes(x: Include, y: Include): boolean {
    if (x.local === y.local && x.local !== undefined) {
      return true;
    } else if (x.template === y.template && x.template !== undefined) {
      return true;
    } else if (x.remote === y.remote && x.remote !== undefined) {
      return true;
    } else if (x.project === y.project && x.ref === y.ref) {
      const xFiles = x.file ? x.file : [];
      const yFiles = y.file ? y.file : [];
      const allFiles = xFiles.concat(yFiles);
      return new Set(allFiles).size !== allFiles.length;
    }
    return false;
  }

  /**
   * Add additional services.
   * @param services The services to add.
   */
  public addServices(...services: Service[]) {
    for (const additional of services) {
      for (const existing of this.defaultServices) {
        if (
          additional.name === existing.name &&
          additional.alias === existing.alias
        ) {
          throw new Error(
            `${this.name}: GitLab CI already contains service ${additional}.`
          );
        }
      }
      this.defaultServices.push(additional);
    }
  }

  /**
   * Add a globally defined variable to the CI configuration.
   * @param variables The variables to add.
   */
  public addGlobalVariables(variables: Record<string, any>) {
    for (const [key, value] of Object.entries(variables)) {
      if (this.variables[key] !== undefined) {
        throw new Error(
          `${this.name}: GitLab CI already contains variable ${key}.`
        );
      }
      this.variables[key] = value;
    }
  }

  /**
   * Add stages to the CI configuration if not already present.
   * @param stages stages to add.
   */
  public addStages(...stages: string[]) {
    for (const stage of stages) {
      if (!this.stages.includes(stage)) {
        this.stages.push(stage);
      }
    }
  }

  /**
   * Add jobs and their stages to the CI configuration.
   * @param jobs Jobs to add.
   */
  public addJobs(jobs: Record<string, Job>) {
    for (const [key, value] of Object.entries(jobs)) {
      if (this.jobs[key] !== undefined) {
        throw new Error(`${this.name}: GitLab CI already contains job ${key}.`);
      }
      this.jobs[key] = value;
      if (value.stage) {
        this.addStages(value.stage);
      }
    }
  }

  private renderCI() {
    return {
      default: this.renderDefault(),
      include:
        this.include.length > 0 ? snakeCaseKeys(this.include) : undefined,
      pages: snakeCaseKeys(this.pages),
      services:
        this.defaultServices.length > 0
          ? snakeCaseKeys(this.defaultServices)
          : undefined,
      variables:
        Object.entries(this.variables).length > 0 ? this.variables : undefined,
      workflow: snakeCaseKeys(this.workflow),
      stages: this.stages.length > 0 ? this.stages : undefined,
      ...snakeCaseKeys(this.jobs, true),
    };
  }

  private renderDefault() {
    const defaults: Default = {
      afterScript:
        this.defaultAfterScript.length > 0
          ? this.defaultAfterScript
          : undefined,
      artifacts: this.defaultArtifacts,
      beforeScript:
        this.defaultBeforeScript.length > 0
          ? this.defaultBeforeScript
          : undefined,
      cache: this.defaultCache,
      image: this.defaultImage,
      interruptible: this.defaultInterruptible,
      retry: this.defaultRetry,
      services:
        this.defaultServices.length > 0 ? this.defaultServices : undefined,
      tags: this.defaultTags.length > 0 ? this.defaultTags : undefined,
      timeout: this.defaultTimeout,
    };
    return Object.values(defaults).filter((x) => x).length
      ? snakeCaseKeys(defaults)
      : undefined;
  }
}

function snakeCaseKeys<T = unknown>(obj: T, skipTopLevel: boolean = false): T {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((o) => snakeCaseKeys(o)) as any;
  }

  const result: Record<string, unknown> = {};
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v === "object" && v != null && k !== "variables") {
      v = snakeCaseKeys(v);
    }
    result[skipTopLevel ? k : snake(k)] = v;
  }
  return result as any;
}
