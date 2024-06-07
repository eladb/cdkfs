import {
  TypeScriptCompilerOptions,
  TypeScriptModuleResolution,
  TypeScriptSetCompilerOptionsMergeMethod,
  TypescriptConfig,
} from "./typescript-config";

/**
 * Abstract class for TypeScript config presets.
 *
 * A subclass of this class should define the `compilerOptions` and `mergeMethod` static properties.
 *
 * You can use a presets subclass in one of two ways:
 *
 * 1. Call `applyPreset` on an instance of `TypescriptConfig` to apply the preset to the config, optionally resetting
 *    the config first.
 * 2. Use the `compilerOptions` property directly, which is a `TypescriptConfig` instance
 *
 * @abstract
 */
export abstract class TypescriptConfigPresets {
  static readonly compilerOptions: TypeScriptCompilerOptions;
  static readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;

  static applyPreset(to: TypescriptConfig, reset: boolean = false) {
    to.setCompilerOptions(
      this.compilerOptions,
      reset
        ? TypeScriptSetCompilerOptionsMergeMethod.OVERRIDE
        : this.mergeMethod
    );
  }
}

/**
 * Known TypeScript config presets.
 *
 * Use {@link getTypescriptConfigPresets} to get a presets object from this enum values.
 */
export enum TypescriptConfigPresetsOptions {
  PROJEN_CLASSIC = "PROJEN_CLASSIC",
  NODE18 = "NODE18",
  NODE20 = "NODE20",
  STRICTEST = "STRICTEST",
}

/**
 * Get a TypeScript config presets object from a presets option enum.
 * @param preset A TypeScript config presets option
 * @returns TypescriptConfigPresets subclass for the given preset option
 */
export function getTypescriptConfigPresets(
  preset: TypescriptConfigPresetsOptions
): typeof TypescriptConfigPresets {
  switch (preset) {
    case TypescriptConfigPresetsOptions.PROJEN_CLASSIC:
      return ProjenClassicTypescriptConfigPresets;
    case TypescriptConfigPresetsOptions.NODE18:
      return Node18TypescriptConfigPresets;
    case TypescriptConfigPresetsOptions.NODE20:
      return Node20TypescriptConfigPresets;
    case TypescriptConfigPresetsOptions.STRICTEST:
      return StrictestTypescriptConfigPresets;
  }
}

/**
 * Classic Projen project TypeScript config presets.
 *
 * There were previously the default Projen TypeScript configs.
 */
export class ProjenClassicTypescriptConfigPresets extends TypescriptConfigPresets {
  static readonly compilerOptions: TypeScriptCompilerOptions = {
    lib: ["es2019"],
    module: "CommonJS",
    target: "ES2019",

    alwaysStrict: true, // redundant with `strict`
    declaration: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    inlineSourceMap: true,
    inlineSources: true,
    noEmitOnError: false,
    noFallthroughCasesInSwitch: true,
    noImplicitAny: true, // redundant with `strict`
    noImplicitReturns: true,
    noImplicitThis: true, // redundant with `strict`
    noUnusedLocals: true,
    noUnusedParameters: true,
    resolveJsonModule: true,
    strict: true,
    strictNullChecks: true, // redundant with `strict`
    strictPropertyInitialization: true, // redundant with `strict`
    stripInternal: true,
  };
  static readonly mergeMethod = TypeScriptSetCompilerOptionsMergeMethod.MERGE;
}

/**
 * TypeScript config presets for Node 18.
 */
export class Node18TypescriptConfigPresets extends TypescriptConfigPresets {
  static readonly compilerOptions: TypeScriptCompilerOptions = {
    lib: ["es2023"],
    module: "node16",
    target: "ES2022",

    esModuleInterop: true,
    moduleResolution: TypeScriptModuleResolution.NODE16,
    skipLibCheck: true,
    strict: true,
  };
  static readonly mergeMethod = TypeScriptSetCompilerOptionsMergeMethod.MERGE;
}

/**
 * TypeScript config presets for Node 20.
 */
export class Node20TypescriptConfigPresets extends TypescriptConfigPresets {
  static readonly compilerOptions: TypeScriptCompilerOptions = {
    lib: ["es2023"],
    module: "node16",
    target: "ES2022",

    esModuleInterop: true,
    moduleResolution: TypeScriptModuleResolution.NODE16,
    skipLibCheck: true,
    strict: true,
  };
  static readonly mergeMethod = TypeScriptSetCompilerOptionsMergeMethod.MERGE;
}

/**
 * Strictest TypeScript config presets. Using these presets will enable all strict TypeScript compiler options,
 * which should theoretically catch the most errors.
 *
 * Enabling these may require code changes to satisfy the compiler. For example, `noImplicitOverride` will require
 * `override` annotations on methods that override parent class methods.
 */
export class StrictestTypescriptConfigPresets extends TypescriptConfigPresets {
  static readonly compilerOptions: TypeScriptCompilerOptions = {
    allowUnreachableCode: false,
    allowUnusedLabels: false,
    checkJs: true,
    esModuleInterop: true,
    isolatedModules: true,
    noFallthroughCasesInSwitch: true,
    noImplicitOverride: true,
    noImplicitReturns: true,
    noUncheckedIndexedAccess: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    skipLibCheck: true,
    strict: true,
  };
  static readonly mergeMethod = TypeScriptSetCompilerOptionsMergeMethod.MERGE;
}
