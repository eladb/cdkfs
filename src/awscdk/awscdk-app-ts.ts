import * as fs from "fs";
import * as path from "path";
import { AutoDiscover } from "./auto-discover";
import { AwsCdkDeps, AwsCdkDepsCommonOptions } from "./awscdk-deps";
import { AwsCdkDepsJs } from "./awscdk-deps-js";
import { CdkConfig, CdkConfigCommonOptions } from "./cdk-config";
import { CdkTasks } from "./cdk-tasks";
import { IntegRunner } from "./integ-runner";
import { LambdaFunctionCommonOptions } from "./lambda-function";
import { Component } from "../component";
import { DependencyType } from "../dependencies";
import { RunBundleTask } from "../javascript";
import { TypeScriptAppProject, TypeScriptProjectOptions } from "../typescript";

export interface AwsCdkTypeScriptAppOptions
  extends TypeScriptProjectOptions,
    CdkConfigCommonOptions,
    AwsCdkDepsCommonOptions {
  /**
   * The CDK app's entrypoint (relative to the source directory, which is
   * "src" by default).
   *
   * @default "main.ts"
   */
  readonly appEntrypoint?: string;

  /**
   * Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler
   * in your source tree. If this is disabled, you can manually add an
   * `awscdk.AutoDiscover` component to your project.
   *
   * @default true
   */
  readonly lambdaAutoDiscover?: boolean;

  /**
   * Automatically adds an `cloudfront.experimental.EdgeFunction` for each
   * `.edge-lambda.ts` handler in your source tree. If this is disabled, you can
   * manually add an `awscdk.AutoDiscover` component to your project.
   *
   * @default true
   */
  readonly edgeLambdaAutoDiscover?: boolean;

  /**
   * Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts`
   * entrypoint in your source tree. If this is disabled, you can manually add an
   * `awscdk.AutoDiscover` component to your project
   *
   * @default true
   */
  readonly lambdaExtensionAutoDiscover?: boolean;

  /**
   * Automatically discovers and creates integration tests for each `.integ.ts`
   * file in under your test directory.
   *
   * @default true
   */
  readonly integrationTestAutoDiscover?: boolean;

  /**
   * Enable experimental support for the AWS CDK integ-runner.
   *
   * @default false
   * @experimental
   */
  readonly experimentalIntegRunner?: boolean;

  /**
   * Common options for all AWS Lambda functions.
   *
   * @default - default options
   */
  readonly lambdaOptions?: LambdaFunctionCommonOptions;
}

/**
 * AWS CDK app in TypeScript
 *
 * @pjid awscdk-app-ts
 */
export class AwsCdkTypeScriptApp extends TypeScriptAppProject {
  /**
   * The CDK version this app is using.
   */
  public get cdkVersion() {
    return this.cdkDeps.cdkVersion;
  }

  /**
   * The CDK app entrypoint
   */
  public readonly appEntrypoint: string;

  /**
   * Common CDK tasks.
   */
  public readonly cdkTasks: CdkTasks;

  /**
   * cdk.json configuration.
   */
  public readonly cdkConfig: CdkConfig;

  public readonly cdkDeps: AwsCdkDeps;

  constructor(options: AwsCdkTypeScriptAppOptions) {
    super({
      ...options,
      sampleCode: false,
      bundlerOptions: {
        ...options.bundlerOptions,

        // we invoke the "bundle" task as part of the build step in cdk.json so
        // we don't want it to be added to the pre-compile phase.
        runBundleTask: RunBundleTask.MANUAL,
      },
      // Override TypeScript compiler options for CDK projects to use ES2020
      // This is to align projen output to `cdk init --language typescript`
      tsconfig: {
        ...options.tsconfig,
        compilerOptions: {
          ...options.tsconfig?.compilerOptions,
          lib: ["es2020"],
          target: "ES2020",
        },
      },
      tsconfigDev: {
        ...options.tsconfigDev,
        compilerOptions: {
          ...options.tsconfigDev?.compilerOptions,
          lib: ["es2020"],
          target: "ES2020",
        },
      },
    });

    this.cdkDeps = new AwsCdkDepsJs(this, {
      dependencyType: DependencyType.RUNTIME,
      ...options,
    });
    this.appEntrypoint = options.appEntrypoint ?? "main.ts";

    // CLI
    this.addDevDeps(`aws-cdk@${this.cdkDeps.cdkCliVersion}`);

    // no compile step because we do all of it in typescript directly
    this.compileTask.reset();

    this.cdkTasks = new CdkTasks(this);

    // add synth to the build
    this.postCompileTask.spawn(this.cdkTasks.synthSilent);

    const tsConfigFile = this.tsconfig?.fileName;
    if (!tsConfigFile) {
      throw new Error("Expecting tsconfig.json");
    }

    this.cdkConfig = new CdkConfig(this, {
      app: `npx ts-node -P ${tsConfigFile} --prefer-ts-exts ${path.posix.join(
        this.srcdir,
        this.appEntrypoint
      )}`,
      featureFlags: this.cdkDeps.cdkMajorVersion < 2,
      buildCommand: this.runTaskCommand(this.bundler.bundleTask),
      watchIncludes: [`${this.srcdir}/**/*.ts`, `${this.testdir}/**/*.ts`],
      watchExcludes: [
        "README.md",
        "cdk*.json",
        "**/*.d.ts",
        "**/*.js",
        "tsconfig.json",
        "package*.json",
        "yarn.lock",
        "node_modules",
      ],
      ...options,
    });

    this.gitignore.exclude(".parcel-cache/");

    this.npmignore?.exclude(`${this.cdkConfig.cdkout}/`);
    this.npmignore?.exclude(".cdk.staging/");

    if (this.tsconfig) {
      this.tsconfig.exclude.push(this.cdkConfig.cdkout);
    }

    this.addDevDeps("ts-node");
    if (options.sampleCode ?? true) {
      new SampleCode(this, this.cdkDeps.cdkMajorVersion);
    }

    new AutoDiscover(this, {
      srcdir: this.srcdir,
      testdir: this.testdir,
      lambdaOptions: options.lambdaOptions,
      tsconfigPath: this.tsconfigDev.fileName,
      cdkDeps: this.cdkDeps,
      lambdaAutoDiscover: options.lambdaAutoDiscover ?? true,
      edgeLambdaAutoDiscover: options.edgeLambdaAutoDiscover ?? true,
      lambdaExtensionAutoDiscover: options.lambdaExtensionAutoDiscover ?? true,
      integrationTestAutoDiscover: options.integrationTestAutoDiscover ?? true,
    });

    if (options.experimentalIntegRunner) {
      new IntegRunner(this);
    }
  }

  /**
   * Adds an AWS CDK module dependencies
   * @param modules The list of modules to depend on
   */
  public addCdkDependency(...modules: string[]) {
    return this.cdkDeps.addV1Dependencies(...modules);
  }
}

class SampleCode extends Component {
  private readonly appProject: AwsCdkTypeScriptApp;

  constructor(
    project: AwsCdkTypeScriptApp,
    private readonly cdkMajorVersion: number
  ) {
    super(project);
    this.appProject = project;
  }

  public synthesize() {
    const outdir = this.project.outdir;
    const srcdir = path.join(outdir, this.appProject.srcdir);
    if (
      fs.existsSync(srcdir) &&
      fs.readdirSync(srcdir).filter((x) => x.endsWith(".ts"))
    ) {
      return;
    }

    const srcImports = new Array<string>();
    if (this.cdkMajorVersion < 2) {
      srcImports.push(
        "import { App, Construct, Stack, StackProps } from '@aws-cdk/core';"
      );
    } else {
      srcImports.push("import { App, Stack, StackProps } from 'aws-cdk-lib';");
      srcImports.push("import { Construct } from 'constructs';");
    }

    const srcCode = `${srcImports.join("\n")}

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, '${this.project.name}-dev', { env: devEnv });
// new MyStack(app, '${this.project.name}-prod', { env: prodEnv });

app.synth();`;

    fs.mkdirSync(srcdir, { recursive: true });
    fs.writeFileSync(path.join(srcdir, this.appProject.appEntrypoint), srcCode);

    const testdir = path.join(outdir, this.appProject.testdir);
    if (
      fs.existsSync(testdir) &&
      fs.readdirSync(testdir).filter((x) => x.endsWith(".ts"))
    ) {
      return;
    }

    const testImports = new Array<string>();
    if (this.cdkMajorVersion < 2) {
      testImports.push("import { App } from '@aws-cdk/core';");
      testImports.push("import { Template } from '@aws-cdk/assertions';");
    } else {
      testImports.push("import { App } from 'aws-cdk-lib';");
      testImports.push("import { Template } from 'aws-cdk-lib/assertions';");
    }

    const appEntrypointName = path.basename(
      this.appProject.appEntrypoint,
      ".ts"
    );
    const testCode = `${testImports.join("\n")}
import { MyStack } from '../${this.appProject.srcdir}/${appEntrypointName}';

test('Snapshot', () => {
  const app = new App();
  const stack = new MyStack(app, 'test');

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});`;

    fs.mkdirSync(testdir, { recursive: true });
    fs.writeFileSync(
      path.join(testdir, `${appEntrypointName}.test.ts`),
      testCode
    );
  }
}
