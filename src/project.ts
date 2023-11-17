import { mkdtempSync, realpathSync, renameSync } from "fs";
import { tmpdir } from "os";
import * as path from "path";
import { Construct, IConstruct } from "constructs";
import * as glob from "glob";
import { cleanup, FILE_MANIFEST } from "./cleanup";
import { IS_TEST_RUN, PROJEN_VERSION } from "./common";
import { Component } from "./component";
import { Dependencies } from "./dependencies";
import { FileBase } from "./file";
import { GitAttributesFile } from "./gitattributes";
import { IgnoreFile, IgnoreFileOptions } from "./ignore-file";
import * as inventory from "./inventory";
import { resolveInitProject } from "./javascript/render-options";
import { JsonFile } from "./json";
import { Logger, LoggerOptions } from "./logger";
import { ObjectFile } from "./object-file";
import { InitProjectOptionHints } from "./option-hints";
import { ProjectBuild as ProjectBuild } from "./project-build";
import { ProjenrcJson, ProjenrcJsonOptions } from "./projenrc-json";
import { Renovatebot, RenovatebotOptions } from "./renovatebot";
import { Task, TaskOptions } from "./task";
import { Tasks } from "./tasks";
import { isTruthy } from "./util";
import {
  isProject,
  findClosestProject,
  tagAsProject,
  isComponent,
} from "./util/constructs";

/**
 * Options for `Project`.
 */
export interface ProjectOptions {
  /**
   * This is the name of your project.
   *
   * @default $BASEDIR
   * @featured
   */
  readonly name: string;

  /**
   * The parent project, if this project is part of a bigger project.
   */
  readonly parent?: Project;

  /**
   * The root directory of the project.
   *
   * Relative to this directory, all files are synthesized.
   *
   * If this project has a parent, this directory is relative to the parent
   * directory and it cannot be the same as the parent or any of it's other
   * subprojects.
   *
   * @default "."
   */
  readonly outdir?: string;

  /**
   * Configure logging options such as verbosity.
   * @default {}
   */
  readonly logging?: LoggerOptions;

  /**
   * Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable
   * .projenrc.json generation.
   *
   * @default false
   */
  readonly projenrcJson?: boolean;

  /**
   * Options for .projenrc.json
   * @default - default options
   */
  readonly projenrcJsonOptions?: ProjenrcJsonOptions;

  /**
   * The shell command to use in order to run the projen CLI.
   *
   * Can be used to customize in special environments.
   *
   * @default "npx projen"
   */
  readonly projenCommand?: string;

  /**
   * Use renovatebot to handle dependency upgrades.
   *
   * @default false
   */
  readonly renovatebot?: boolean;

  /**
   * Options for renovatebot.
   *
   * @default - default options
   */
  readonly renovatebotOptions?: RenovatebotOptions;

  /**
   * Whether to commit the managed files by default.
   *
   * @default true
   */
  readonly commitGenerated?: boolean;

  /**
   * Configuration options for git
   */
  readonly gitOptions?: GitOptions;

  /**
   * Configuration options for .gitignore file
   */
  readonly gitIgnoreOptions?: IgnoreFileOptions;
}

/**
 * Git configuration options
 */
export interface GitOptions {
  /**
   * File patterns to mark as stored in Git LFS
   *
   * @default - No files stored in LFS
   */
  readonly lfsPatterns?: string[];
}

/**
 * Base project
 */
export class Project extends Construct {
  /**
   * The name of the default task (the task executed when `projen` is run without arguments). Normally
   * this task should synthesize the project files.
   */
  public static readonly DEFAULT_TASK = "default";

  /**
   * Test whether the given construct is a project.
   */
  public static isProject(x: any): x is Project {
    return isProject(x);
  }

  /**
   * Find the closest ancestor project for given construct.
   * When given a project, this it the project itself.
   *
   * @throws when no project is found in the path to the root
   */
  public static of(construct: IConstruct): Project {
    return findClosestProject(construct);
  }

  /**
   * Project name.
   */
  public readonly name: string;

  /**
   * .gitignore
   */
  public readonly gitignore: IgnoreFile;

  /**
   * The .gitattributes file for this repository.
   */
  public readonly gitattributes: GitAttributesFile;

  /**
   * A parent project. If undefined, this is the root project.
   */
  public readonly parent?: Project;

  /**
   * Absolute output directory of this project.
   */
  public readonly outdir: string;

  /**
   * Project tasks.
   */
  public readonly tasks: Tasks;

  /**
   * Project dependencies.
   */
  public readonly deps: Dependencies;

  /**
   * Logging utilities.
   */
  public readonly logger: Logger;

  /**
   * The options used when this project is bootstrapped via `projen new`. It
   * includes the original set of options passed to the CLI and also the JSII
   * FQN of the project type.
   */
  public readonly initProject?: InitProject;

  /**
   * The command to use in order to run the projen CLI.
   */
  public readonly projenCommand: string;

  /**
   * This is the "default" task, the one that executes "projen". Undefined if
   * the project is being ejected.
   */
  public readonly defaultTask?: Task;

  /**
   * This task ejects the project from projen. This is undefined if the project
   * it self is being ejected.
   *
   * See docs for more information.
   */
  private readonly ejectTask?: Task;

  /**
   * Manages the build process of the project.
   */
  public readonly projectBuild: ProjectBuild;

  /**
   * Whether to commit the managed files by default.
   */
  public readonly commitGenerated: boolean;

  private readonly tips = new Array<string>();
  private readonly excludeFromCleanup: string[];
  private readonly _ejected: boolean;

  constructor(options: ProjectOptions) {
    const outdir = determineOutdir(options.parent, options.outdir);
    const autoId = `${new.target.name}#${options.name}@${path.normalize(
      options.outdir ?? "<root>"
    )}`;

    if (options.parent?.subprojects.find((p) => p.outdir === outdir)) {
      throw new Error(`There is already a subproject with "outdir": ${outdir}`);
    }

    super(options.parent as any, autoId);
    tagAsProject(this);
    this.node.addMetadata("type", "project");
    this.node.addMetadata("construct", new.target.name);

    this.initProject = resolveInitProject(options);

    this.name = options.name;
    this.parent = options.parent;
    this.excludeFromCleanup = [];

    this._ejected = isTruthy(process.env.PROJEN_EJECTING);

    if (this.ejected) {
      this.projenCommand = "scripts/run-task";
    } else {
      this.projenCommand = options.projenCommand ?? "npx projen";
    }

    this.outdir = outdir;

    // ------------------------------------------------------------------------

    this.gitattributes = new GitAttributesFile(this);
    this.annotateGenerated("/.projen/**"); // contents  of the .projen/ directory are generated by projen
    this.annotateGenerated(`/${this.gitattributes.path}`); // the .gitattributes file itself is generated

    if (options.gitOptions?.lfsPatterns) {
      for (const pattern of options.gitOptions.lfsPatterns) {
        this.gitattributes.addAttributes(
          pattern,
          "filter=lfs",
          "diff=lfs",
          "merge=lfs",
          "-text"
        );
      }
    }

    this.gitignore = new IgnoreFile(
      this,
      ".gitignore",
      options.gitIgnoreOptions
    );
    this.gitignore.exclude("node_modules/"); // created by running `npx projen`
    this.gitignore.include(`/${this.gitattributes.path}`);

    // oh no: tasks depends on gitignore so it has to be initialized after
    // smells like dep injection but god forbid.
    this.tasks = new Tasks(this);

    if (!this.ejected) {
      this.defaultTask = this.tasks.addTask(Project.DEFAULT_TASK, {
        description: "Synthesize project files",
      });

      // Subtasks should call the root task for synth
      if (this.parent) {
        this.defaultTask.exec(`${this.projenCommand} ${Project.DEFAULT_TASK}`, {
          cwd: path.relative(this.outdir, this.root.outdir),
        });
      }

      if (!this.parent) {
        this.ejectTask = this.tasks.addTask("eject", {
          description: "Remove projen from the project",
          env: {
            PROJEN_EJECTING: "true",
          },
        });
        this.ejectTask.spawn(this.defaultTask);
      }
    }

    this.projectBuild = new ProjectBuild(this);

    this.deps = new Dependencies(this);

    this.logger = new Logger(this, options.logging);

    const projenrcJson = options.projenrcJson ?? false;
    if (!this.parent && projenrcJson) {
      new ProjenrcJson(this, options.projenrcJsonOptions);
    }

    if (options.renovatebot) {
      new Renovatebot(this, options.renovatebotOptions);
    }

    this.commitGenerated = options.commitGenerated ?? true;

    if (!this.ejected) {
      new JsonFile(this, FILE_MANIFEST, {
        omitEmpty: true,
        obj: () => ({
          // replace `\` with `/` to ensure paths match across platforms
          files: this.files
            .filter((f) => f.readonly)
            .map((f) => f.path.replace(/\\/g, "/")),
        }),
        // This file is used by projen to track the generated files, so must be committed.
        committed: true,
      });
    }

    // synth() guarantees it will only execute once, so a default of 'true'
    // doesn't bite manual calling of the function.
    // eslint-disable-next-line @typescript-eslint/return-await
    process.once("beforeExit", async () => await this.synth());
  }

  /**
   * The root project.
   */
  public get root(): Project {
    return isProject(this.node.root) ? this.node.root : this;
  }

  /**
   * Returns all the components within this project.
   */
  public get components(): Component[] {
    return this.node
      .findAll()
      .filter(
        (c): c is Component =>
          isComponent(c) && c.project.node.path === this.node.path
      );
  }

  /**
   * Returns all the subprojects within this project.
   */
  public get subprojects(): Project[] {
    return this.node.children.filter(isProject);
  }

  /**
   * All files in this project.
   */
  public get files(): FileBase[] {
    return this.components
      .filter(isFile)
      .sort((f1, f2) => f1.path.localeCompare(f2.path));
  }

  /**
   * Adds a new task to this project. This will fail if the project already has
   * a task with this name.
   *
   * @param name The task name to add
   * @param props Task properties
   */
  public addTask(name: string, props: TaskOptions = {}) {
    return this.tasks.addTask(name, props);
  }

  /**
   * Removes a task from a project.
   *
   * @param name The name of the task to remove.
   *
   * @returns The `Task` that was removed, otherwise `undefined`.
   */
  public removeTask(name: string) {
    return this.tasks.removeTask(name);
  }

  public get buildTask() {
    return this.projectBuild.buildTask;
  }
  public get compileTask() {
    return this.projectBuild.compileTask;
  }
  public get testTask() {
    return this.projectBuild.testTask;
  }
  public get preCompileTask() {
    return this.projectBuild.preCompileTask;
  }
  public get postCompileTask() {
    return this.projectBuild.postCompileTask;
  }
  public get packageTask() {
    return this.projectBuild.packageTask;
  }

  /**
   * Finds a file at the specified relative path within this project and all
   * its subprojects.
   *
   * @param filePath The file path. If this path is relative, it will be resolved
   * from the root of _this_ project.
   * @returns a `FileBase` or undefined if there is no file in that path
   */
  public tryFindFile(filePath: string): FileBase | undefined {
    const absolute = path.isAbsolute(filePath)
      ? filePath
      : path.resolve(this.outdir, filePath);

    const candidate = this.node
      .findAll()
      .find(
        (c): c is FileBase =>
          isComponent(c) && isFile(c) && c.absolutePath === absolute
      );

    return candidate;
  }

  /**
   * Finds a json file by name.
   * @param filePath The file path.
   * @deprecated use `tryFindObjectFile`
   */
  public tryFindJsonFile(filePath: string): JsonFile | undefined {
    const file = this.tryFindObjectFile(filePath);
    if (!file) {
      return undefined;
    }

    if (!(file instanceof JsonFile)) {
      throw new Error(
        `found file ${filePath} but it is not a JsonFile. got: ${file.constructor.name}`
      );
    }

    return file;
  }

  /**
   * Finds an object file (like JsonFile, YamlFile, etc.) by name.
   * @param filePath The file path.
   */
  public tryFindObjectFile(filePath: string): ObjectFile | undefined {
    const file = this.tryFindFile(filePath);
    if (!file) {
      return undefined;
    }

    if (!(file instanceof ObjectFile)) {
      throw new Error(
        `found file ${filePath} but it is not a ObjectFile. got: ${file.constructor.name}`
      );
    }

    return file;
  }

  /**
   * Finds a file at the specified relative path within this project and removes
   * it.
   *
   * @param filePath The file path. If this path is relative, it will be
   * resolved from the root of _this_ project.
   * @returns a `FileBase` if the file was found and removed, or undefined if
   * the file was not found.
   */
  public tryRemoveFile(filePath: string): FileBase | undefined {
    const candidate = this.tryFindFile(filePath);

    if (candidate) {
      candidate.node.scope?.node.tryRemoveChild(candidate.node.id);
      return candidate;
    }

    return undefined;
  }

  /**
   * Prints a "tip" message during synthesis.
   * @param message The message
   * @deprecated - use `project.logger.info(message)` to show messages during synthesis
   */
  public addTip(message: string) {
    this.tips.push(message);
  }

  /**
   * Exclude the matching files from pre-synth cleanup. Can be used when, for example, some
   * source files include the projen marker and we don't want them to be erased during synth.
   *
   * @param globs The glob patterns to match
   */
  public addExcludeFromCleanup(...globs: string[]) {
    this.excludeFromCleanup.push(...globs);
  }

  /**
   * Returns the shell command to execute in order to run a task.
   *
   * By default, this is `npx projen@<version> <task>`
   *
   * @param task The task for which the command is required
   */
  public runTaskCommand(task: Task) {
    return `npx projen@${PROJEN_VERSION} ${task.name}`;
  }

  /**
   * Exclude these files from the bundled package. Implemented by project types based on the
   * packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.
   *
   * @param _pattern The glob pattern to exclude
   */
  public addPackageIgnore(_pattern: string) {
    // nothing to do at the abstract level
  }

  /**
   * Adds a .gitignore pattern.
   * @param pattern The glob pattern to ignore.
   */
  public addGitIgnore(pattern: string) {
    this.gitignore.addPatterns(pattern);
  }

  /**
   * Consider a set of files as "generated". This method is implemented by
   * derived classes and used for example, to add git attributes to tell GitHub
   * that certain files are generated.
   *
   * @param _glob the glob pattern to match (could be a file path).
   */
  public annotateGenerated(_glob: string): void {
    // nothing to do at the abstract level
  }

  /**
   * Synthesize all project files into `outdir`.
   *
   * 1. Call "this.preSynthesize()"
   * 2. Delete all generated files
   * 3. Synthesize all subprojects
   * 4. Synthesize all components of this project
   * 5. Call "postSynthesize()" for all components of this project
   * 6. Call "this.postSynthesize()"
   */
  public async synth(): Promise<void> {
    const outdir = this.outdir;
    this.logger.debug("Synthesizing project...");

    this.preSynthesize();

    for (const comp of this.components) {
      comp.preSynthesize();
    }

    // we exclude all subproject directories to ensure that when subproject.synth()
    // gets called below after cleanup(), subproject generated files are left intact
    for (const subproject of this.subprojects) {
      this.addExcludeFromCleanup(subproject.outdir + "/**");
    }

    // delete orphaned files before we start synthesizing new ones
    cleanup(
      outdir,
      this.files.map((f) => f.path.replace(/\\/g, "/")),
      this.excludeFromCleanup
    );

    for (const subproject of this.subprojects) {
      await subproject.synth();
    }

    for (const comp of this.components) {
      comp.synthesize();
    }

    if (!isTruthy(process.env.PROJEN_DISABLE_POST)) {
      for (const comp of this.components) {
        comp.postSynthesize();
      }

      // project-level hook
      this.postSynthesize();
    }

    if (this.ejected) {
      this.logger.debug("Ejecting project...");

      // Backup projenrc files
      const files = glob.sync(".projenrc.*", {
        cwd: this.outdir,
        dot: true,
        nodir: true,
        absolute: true,
      });

      for (const file of files) {
        renameSync(file, `${file}.bak`);
      }
    }

    this.logger.debug("Synthesis complete");
    this.logger.debug((await fetch("https://example.com/")).text());
  }

  /**
   * Whether or not the project is being ejected.
   */
  public get ejected(): boolean {
    return this._ejected;
  }

  /**
   * Called before all components are synthesized.
   */
  public preSynthesize() {}

  /**
   * Called after all components are synthesized. Order is *not* guaranteed.
   */
  public postSynthesize() {}
}

/**
 * Which type of project this is.
 *
 * @deprecated no longer supported at the base project level
 */
export enum ProjectType {
  /**
   * This module may be a either a library or an app.
   */
  UNKNOWN = "unknown",

  /**
   * This is a library, intended to be published to a package manager and
   * consumed by other projects.
   */
  LIB = "lib",

  /**
   * This is an app (service, tool, website, etc). Its artifacts are intended to
   * be deployed or published for end-user consumption.
   */
  APP = "app",
}

/**
 * Information passed from `projen new` to the project object when the project
 * is first created. It is used to generate projenrc files in various languages.
 */
export interface InitProject {
  /**
   * The JSII FQN of the project type.
   */
  readonly fqn: string;

  /**
   * Initial arguments passed to `projen new`.
   */
  readonly args: Record<string, any>;

  /**
   * Project metadata.
   */
  readonly type: inventory.ProjectType;

  /**
   * Include commented out options. Does not apply to projenrc.json files.
   * @default InitProjectOptionHints.FEATURED
   */
  readonly comments: InitProjectOptionHints;
}

/**
 * Resolves the project's output directory.
 */
function determineOutdir(parent?: Project, outdirOption?: string) {
  if (parent && outdirOption && path.isAbsolute(outdirOption)) {
    throw new Error('"outdir" must be a relative path');
  }

  // if this is a subproject, it is relative to the parent
  if (parent) {
    if (!outdirOption) {
      throw new Error('"outdir" must be specified for subprojects');
    }

    return path.resolve(parent.outdir, outdirOption);
  }

  // if this is running inside a test and outdir is not explicitly set
  // use a temp directory (unless cwd is already under tmp)
  if (IS_TEST_RUN && !outdirOption) {
    const realCwd = realpathSync(process.cwd());
    const realTmp = realpathSync(tmpdir());

    if (realCwd.startsWith(realTmp)) {
      return path.resolve(realCwd, outdirOption ?? ".");
    }

    return mkdtempSync(path.join(tmpdir(), "projen."));
  }

  return path.resolve(outdirOption ?? ".");
}

function isFile(c: Component): c is FileBase {
  return c instanceof FileBase;
}
