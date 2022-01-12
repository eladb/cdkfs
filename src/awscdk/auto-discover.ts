import { join } from "path";
import * as glob from "glob";
import { Component } from "../component";
import { Project } from "../project";
import { AwsCdkDeps } from "./awscdk-deps";
import { IntegrationTest } from "./integration-test";
import { TYPESCRIPT_INTEG_EXT, TYPESCRIPT_LAMBDA_EXT } from "./internal";
import { LambdaFunction, LambdaFunctionCommonOptions } from "./lambda-function";

/**
 * Options for `AutoDiscover`.
 */
export interface AutoDiscoverOptions {
  /**
   * Options for auto-discovery of AWS Lambda functions.
   */
  readonly lambdaOptions?: LambdaFunctionCommonOptions;

  /**
   * Project source tree (relative to project output directory).
   */
  readonly srcdir: string;

  /**
   * Test source tree.
   */
  readonly testdir: string;

  /**
   * Path to the tsconfig file to use for integration tests.
   */
  readonly tsconfigPath: string;

  /**
   * AWS CDK dependency manager.
   */
  readonly cdkDeps: AwsCdkDeps;
}

/**
 * Automatically creates a `LambdaFunction` for all `.lambda.ts` files under
 * the source directory of the project.
 */
export class AutoDiscover extends Component {
  constructor(project: Project, options: AutoDiscoverOptions) {
    super(project);

    this.autoDiscoverLambdaFunctions(options);
    this.autoDiscoverIntegrationTests(options);
  }

  private autoDiscoverLambdaFunctions(options: AutoDiscoverOptions) {
    const entrypoints = glob.sync(`**/*${TYPESCRIPT_LAMBDA_EXT}`, {
      cwd: join(this.project.outdir, options.srcdir),
    });

    for (const entrypoint of entrypoints) {
      new LambdaFunction(this.project, {
        entrypoint: join(options.srcdir, entrypoint),
        cdkDeps: options.cdkDeps,
        ...options.lambdaOptions,
      });
    }
  }

  private autoDiscoverIntegrationTests(options: AutoDiscoverOptions) {
    const entrypoints = glob.sync(`**/*${TYPESCRIPT_INTEG_EXT}`, {
      cwd: join(this.project.outdir, options.testdir),
    });

    for (const entrypoint of entrypoints) {
      new IntegrationTest(this.project, {
        entrypoint: join(options.testdir, entrypoint),
        cdkDeps: options.cdkDeps,
        tsconfigPath: options.tsconfigPath,
      });
    }
  }
}
