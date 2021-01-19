import { dirname, join } from 'path';
import { existsSync, mkdirpSync, readJsonSync, writeFileSync } from 'fs-extra';
import { PROJEN_VERSION } from '../common';
import { Component } from '../component';
import { DependencyType } from '../deps';
import { Project } from '../project';
import { Pom } from './pom';

/**
 * Options for `Projenrc`.
 */
export interface ProjenrcCommonOptions {
  /**
   * The name of the Java class which contains the `main()` method for projen.
   * @default "projenrc"
   */
  readonly className?: string;

  /**
   * The projen version to use
   * @default - current version
   */
  readonly projenVersion?: string;

  /**
   * Defines projenrc under the test scope instead of the main scope, which is
   * reserved to the app. This means that projenrc will be under
   * `src/test/java/projenrc.java` and projen will be defined as a test
   * dependency. This enforces that application code does not take a dependency
   * on projen code.
   *
   * If this is disabled, projenrc should be under
   * `src/main/java/projenrc.java`.
   *
   * @default true
   */
  readonly testScope?: boolean;
}

export interface ProjenrcOptions extends ProjenrcCommonOptions {
  /**
   * Project initialization options.
   */
  readonly initializationOptions?: { [name: string]: any };
}

/**
 * Allows writing projenrc files in java.
 *
 * This will install `org.projen/projen` as a Maven dependency and will add a
 * `synth` task which will compile & execute `main()` from
 * `src/main/java/projenrc.java`.
 */
export class Projenrc extends Component {
  /**
   * The name of the java class that includes the projen entrypoint.
   */
  public readonly className: string;

  /**
   * Whether the class is in the "test" or "main" scope?
   */
  private readonly testScope: boolean;

  constructor(project: Project, pom: Pom, options: ProjenrcOptions = {}) {
    super(project);

    const projenVersion = options.projenVersion ?? PROJEN_VERSION;
    this.className = options.className ?? 'projenrc';
    this.testScope = options.testScope ?? true;

    const depType = this.testScope ? DependencyType.TEST : DependencyType.RUNTIME;
    const execOpts = this.testScope ? ' -Dexec.classpathScope="test"' : '';
    const compileGoal = this.testScope ? 'compiler:testCompile' : 'compiler:compile';

    project.deps.addDependency(`com.github.eladb/projen@${projenVersion}`, depType);
    pom.addPlugin('org.codehaus.mojo/exec-maven-plugin@3.0.0');

    // set up the "default" task which is the task executed when `projen` is executed for this project.
    const defaultTask = project.addTask(Project.DEFAULT_TASK, { description: 'Synthesize the project' });
    defaultTask.exec(`mvn ${compileGoal} --quiet`);
    defaultTask.exec(`mvn exec:java --quiet -Dexec.mainClass=${this.className}${execOpts}`);

    // if this is a new project, generate a skelaton for projenrc.java
    this.generateProjenrc(options.initializationOptions);
  }

  private generateProjenrc(initOptions?: Record<string, any>) {
    if (!this.project.jsiiFqn) {
      return; // cannot generate projenrc without the FQN of the project type.
    }

    let [moduleName] = this.project.jsiiFqn.split('.');
    if (moduleName === 'projen') {
      moduleName = '../..';
    }

    const jsiiManifestFile = require.resolve(`${moduleName}/.jsii`);
    const jsiiManifest = readJsonSync(jsiiManifestFile);
    const jsiiType = jsiiManifest.types[this.project.jsiiFqn];
    const javaTarget = jsiiManifest.targets.java;
    const optionsTypeFqn = jsiiType.initializer?.parameters?.[0].type?.fqn;
    if (!optionsTypeFqn) {
      this.project.logger.warn('cannot determine jsii type for project options');
      return;
    }
    const jsiiOptionsType = jsiiManifest.types[optionsTypeFqn];
    if (!jsiiOptionsType) {
      this.project.logger.warn(`cannot find jsii type for project options: ${optionsTypeFqn}`);
      return;
    }

    const dir = this.testScope ? 'src/test/java' : 'src/main/java';
    const split = this.className.split('.');
    let javaClass: string, javaPackage: string[];
    if (split.length === 1) {
      javaClass = split[0];
      javaPackage = [];
    } else {
      javaPackage = split.slice(0, split.length - 2);
      javaClass = split[split.length - 1];
    }

    const javaFile = join(this.project.outdir, dir, ...javaPackage, javaClass + '.java');

    // skip if file exists
    if (existsSync(javaFile)) {
      return;
    }

    const lines = new Array<string>();

    let indent = 0;
    const emit = (line: string = '') => lines.push(' '.repeat(indent * 4) + line);
    const openBlock = (line: string = '') => { emit(line + ' {'); indent++; };
    const closeBlock = () => { indent--; emit('}'); };

    if (javaPackage.length > 0) {
      emit(`package ${javaPackage.join('.')};`);
      emit();
    }

    emit(`import ${javaTarget.package}.${toJavaFullTypeName(jsiiType)};`);
    emit(`import ${javaTarget.package}.${toJavaFullTypeName(jsiiOptionsType)};`);
    emit();
    openBlock(`public class ${javaClass}`);
    openBlock('public static void main(String[] args)');
    emit(`${jsiiType.name} project = new ${jsiiType.name}(${renderJavaOptions(indent, jsiiOptionsType.name, initOptions)});`);
    emit('project.synth();');
    closeBlock();
    closeBlock();

    mkdirpSync(dirname(javaFile));
    writeFileSync(javaFile, lines.join('\n'));
  }
}

function renderJavaOptions(indent: number, optionsTypeName: string, initOptions?: Record<string, any>): string {
  if (!initOptions || Object.keys(initOptions).length === 0) {
    return ''; // no options
  }

  const lines = [`${optionsTypeName}.builder()`];

  for (const [name, value] of Object.entries(initOptions)) {
    lines.push(`.${toJavaProperty(name)}(${toJavaValue(value)})`);
  }

  lines.push('.build()');

  return lines.join(`\n${' '.repeat((indent + 1) * 4)}`);
}

function toJavaProperty(prop: string) {
  return prop;
}

function toJavaValue(value: any) {
  return JSON.stringify(value);
}

function toJavaFullTypeName(jsiiType: any) {
  return [jsiiType.namespace, jsiiType.name].filter(x => x).join('.');
}