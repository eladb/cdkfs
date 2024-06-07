import * as ts from "typescript";
import {
  NodeProject,
  TypeScriptModuleResolution,
  TypescriptConfig,
} from "../../src/javascript";
import {
  Node18TypescriptConfigPresets,
  ProjenClassicTypescriptConfigPresets,
} from "../../src/javascript/typescript-config-presets";
import { withProjectDir } from "../util";

describe("TypescriptConfigPresets", () => {
  const ENV_PROJEN_DISABLE_POST = process.env.PROJEN_DISABLE_POST;
  beforeAll(() => {
    process.env.PROJEN_DISABLE_POST = "true";
  });
  afterAll(() => {
    process.env.PROJEN_DISABLE_POST = ENV_PROJEN_DISABLE_POST;
  });

  describe("Node18TypescriptConfigPresets should override certain settings", () => {
    test("without reset", () => {
      withProjectDir((outdir) => {
        const project = new NodeProject({
          name: "project",
          defaultReleaseBranch: "main",
          outdir,
        });
        const tsConfig = new TypescriptConfig(project, {
          compilerOptions: {
            outDir: "testOurDir",
            ...ProjenClassicTypescriptConfigPresets.compilerOptions,
          },
        });
        Node18TypescriptConfigPresets.applyPreset(tsConfig);
        project.synth();
        const loadedConfig = ts.readConfigFile(
          tsConfig.file.absolutePath,
          ts.sys.readFile
        );

        expect(loadedConfig.error).toBeUndefined();
        expect(loadedConfig.config).toHaveProperty("compilerOptions", {
          outDir: "testOurDir",
          alwaysStrict: true,
          declaration: true,
          experimentalDecorators: true,
          inlineSourceMap: true,
          inlineSources: true,
          noEmitOnError: false,
          noFallthroughCasesInSwitch: true,
          noImplicitAny: true,
          noImplicitReturns: true,
          noImplicitThis: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          resolveJsonModule: true,
          strictNullChecks: true,
          strictPropertyInitialization: true,
          stripInternal: true,

          // overridden by Node18TypescriptConfigPresets:
          // lib: ["es2019"],
          // module: "CommonJS",
          // target: "ES2019",
          // esModuleInterop: true,

          lib: ["es2023"],
          module: "node16",
          target: "ES2022",

          strict: true,
          esModuleInterop: true,
          skipLibCheck: true,
          moduleResolution: TypeScriptModuleResolution.NODE16,
        });
      });
    });

    test("with reset", () => {
      withProjectDir((outdir) => {
        const project = new NodeProject({
          name: "project",
          defaultReleaseBranch: "main",
          outdir,
        });
        const tsConfig = new TypescriptConfig(project, {
          compilerOptions: {
            outDir: "testOurDir",
            alwaysStrict: true,
            declaration: true,
            esModuleInterop: false,
            experimentalDecorators: true,
            inlineSourceMap: true,
            inlineSources: true,
            lib: ["es2019"],
            module: "CommonJS",
            noEmitOnError: false,
            noFallthroughCasesInSwitch: true,
            noImplicitAny: true,
            noImplicitReturns: true,
            noImplicitThis: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            resolveJsonModule: true,
            strict: false,
            strictNullChecks: true,
            strictPropertyInitialization: true,
            stripInternal: true,
            target: "ES2019",
          },
        });
        Node18TypescriptConfigPresets.applyPreset(tsConfig, true);
        project.synth();
        const loadedConfig = ts.readConfigFile(
          tsConfig.file.absolutePath,
          ts.sys.readFile
        );

        expect(loadedConfig.error).toBeUndefined();
        expect(loadedConfig.config).toHaveProperty("compilerOptions", {
          outDir: "testOurDir",

          lib: ["es2023"],
          module: "node16",
          target: "ES2022",

          strict: true,
          esModuleInterop: true,
          skipLibCheck: true,
          moduleResolution: TypeScriptModuleResolution.NODE16,
        });
      });
    });
  });
});
