import * as path from "path";
import { Component } from "../component";
import { NodeProject, NodeProjectOptions } from "../javascript";
import { SampleDir, SampleFile } from "../sample-file";
import { TypeScriptAppProject, TypeScriptProjectOptions } from "../typescript";
import { deepMerge } from "../util";

export interface AstroCommonProjectOptions {
  /**
   * Assets directory
   *
   * @default "public"
   */
  readonly assetsdir?: string;

  /**
   * Setup Tailwind CSS as a PostCSS plugin.
   *
   * @see https://tailwindcss.com/docs/installation
   *
   * @default true
   * @featured
   */
  readonly tailwind?: boolean;
}

export interface AstroTypeScriptProjectOptions
  extends AstroCommonProjectOptions,
    TypeScriptProjectOptions {}

export interface AstroProjectOptions
  extends NodeProjectOptions,
    AstroCommonProjectOptions {
  /**
   * Generate one-time sample in `src/` and `public/` if there are no files there.
   * @default true
   */
  readonly sampleCode?: boolean;
}

/**
 * Astro project without TypeScript.
 *
 * @pjid astro
 */
export class AstroProject extends NodeProject {
  constructor(options: AstroProjectOptions) {
    super({
      jest: false,
      ...options,
    });

    new AstroComponent(this, {
      typescript: false,
      tailwind: options.tailwind,
      sampleCode: options.sampleCode,
    });
  }
}

/**
 * Astro project with TypeScript.
 *
 * @pjid astro-ts
 */
export class AstroTypeScriptProject extends TypeScriptAppProject {
  constructor(options: AstroTypeScriptProjectOptions) {
    const defaultOptions = {
      minNodeVersion: "18.14.1", // https://docs.astro.build/en/install/auto/
      jest: false,
      tsconfig: {
        compilerOptions: {
          // Allow importing TypeScript files using their native extension (.ts(x)).
          allowImportingTsExtensions: true,
          // Enforce the usage of type-only imports when needed, which helps avoiding bundling issues.
          // verbatimModuleSyntax: true,
          // Ensure that each file can be transpiled without relying on other imports.
          // This is redundant with the previous option, however it ensures that it's on even if someone disable `verbatimModuleSyntax`
          isolatedModules: true,
          // Astro directly run TypeScript code, no transpilation needed.
          noEmit: true,
          // Skip typechecking libraries and .d.ts files
          skipLibCheck: true,
          // Allow JavaScript files to be imported
          allowJs: true,
        },
      },
    };
    // never generate default TypeScript sample code, since this class provides its own
    super(
      deepMerge([
        defaultOptions,
        options,
        { sampleCode: false },
      ]) as TypeScriptProjectOptions
    );

    new AstroComponent(this, {
      tailwind: true,
      typescript: true,
      sampleCode: options.sampleCode,
    });
  }
}

export interface AstroComponentOptions {
  /**
   * Setup Tailwind as a PostCSS plugin.
   *
   * @see https://tailwindcss.com/docs/installation
   *
   * @default true
   */
  readonly tailwind?: boolean;

  /**
   * Whether to apply options specific for TypeScript Astro projects.
   *
   * @default false
   */
  readonly typescript?: boolean;

  /**
   * Whether to generate sample code in `src`
   *
   * @default true
   */
  readonly sampleCode?: boolean;
}

export class AstroComponent extends Component {
  private readonly tailwind: boolean;
  private readonly typescript: boolean;
  private readonly sampleCode: boolean;

  constructor(project: NodeProject, options: AstroComponentOptions) {
    super(project);

    this.typescript = options.typescript ?? false;
    this.tailwind = options.tailwind ?? true;
    this.sampleCode = options.sampleCode ?? true;
    console.log(this.tailwind);
    project.addDeps("astro@^3.0.0");
    // project.package.addField("type", "module");

    // Astro CLI commands, see: https://docs.astro.build/en/reference/cli-reference/
    project.addTask("dev", {
      description: "Starts the Astro application in development mode",
      exec: "astro dev",
    });

    project.compileTask.exec("astro build");

    project.addTask("preview", {
      description: "Starts a local server to serve your static dist/ directory",
      exec: "astro preview",
    });

    project.gitignore.exclude("/.astro/");

    if (this.sampleCode) {
      new SampleFile(
        project,
        `astro.config.${this.typescript ? "ts" : "mjs"}`,
        {
          sourcePath: path.join(
            __dirname,
            "..",
            "..",
            "assets",
            "web",
            "astro",
            "astro.config.mjs"
          ),
        }
      );

      new SampleDir(project, "src", {
        sourceDir: path.join(
          __dirname,
          "..",
          "..",
          "assets",
          "web",
          "astro",
          "src"
        ),
      });

      new SampleDir(project, "public", {
        sourceDir: path.join(
          __dirname,
          "..",
          "..",
          "assets",
          "web",
          "astro",
          "public"
        ),
      });
    }
  }
}
