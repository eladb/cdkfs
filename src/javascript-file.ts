import { CodeResolvableBase, ICodeResolvable } from "./code-resolvable";
import { CodeTokenMap, unresolved } from "./code-token-map";
import { IResolver } from "./file";
import { JsonFile, JsonFileOptions } from "./json";
import * as logging from "./logging";
import { Project } from "./project";

/**
 * Represents a Javascript function. The function can be defined as an arrow function or a named function.
 *
 * Create a named function with `JavascriptFunction.named(name, properties, body)`, and an arrow function can be
 * created with `JavascriptFunction.arrow(properties, body)`. Both are {@link ICodeResolvable} objects, and can be
 * used in any place that expects a string to make a token that can later be resolved, turning it into a string of the
 * represented code with {@link ICodeResolvable.resolve|ICodeResolvable.resolve()}.
 * *
 * You can also generate a {@link JavascriptRaw} object to call a function with `JavascriptFunction.call(name, ...)`.
 *
 * @example
 *
 * A named function is pretty straightforward to make and use:
 * ```typescript
 *     const name = "foo";
 *     const namedFunc = JavascriptFunction.named(
 *       name,
 *       ["a", "b=2"], // the "b=2" is just to show that these are used literally
 *       JavascriptRaw.value("return a + b;")
 *     );
 *
 *     // Example of how to make a convenience function to call this function
 *     const namedFuncCaller = (...params: unknown[]) =>
 *       JavascriptFunction.call(name, ...params);
 *
 *     // Use `namedFunc` to actually define the function
 *     // Use `namedFuncCaller()` to call the function
 *     const namedFuncUsage = JavascriptRaw.value(
 *       `const fooValue = ${namedFuncCaller(1, 2)};
 *
 * ${namedFunc}`
 *     ).resolve();
 * ```
 *
 * Will leave `namedFuncUsage` as:
 * ```javascript
 * const fooValue = foo(1, 2);
 *
 * function foo(a, b=2) {
 *   return a + b;
 * }
 * ```
 *
 * Arrow funtions work similarly:
 *
 * ```typescript
 * const name = "foo";
 * const arrowFun = JavascriptFunction.arrow(
 *   ["a", "...b"], // the "...b" is just to show that these are used literally
 *   JavascriptRaw.value("return a + b[0];")
 * );
 *
 * // Example of how to make a convenience function to call this function
 * const arrowFuncCaller = (...params: unknown[]) =>
 *   JavascriptFunction.call(name, ...params);
 *
 * // Use `arrowFun` to actually define the function
 * // Use `arrowFuncCaller()` to call the function
 * const arrowFuncUsage = JavascriptRaw.value(
 *   `const ${name} = ${arrowFun};
 * const fooValue = ${arrowFuncCaller(1, 2)};
 * `
 * ).resolve();
 * ```
 *
 * Will leave `namedFuncUsage` as:
 * ```javascript
 * const foo = (a, ...b) => {
 *   return a + b[0];
 * };
 * const fooValue = foo(1, 2);
 * ```
 */
export class JavascriptFunction extends CodeResolvableBase {
  /**
   * Make a named function.
   * @param name The name of the generated function
   * @param properties The names of the properties the function takes, can include `...` to indicate a rest parameter,
   * or provide a default value with `=`, etc.
   * @param body The body of the function, usually a `JavaScriptRaw`, but takes any `ICodeResolvable` or an array
   * of `ICodeResolvable`s
   * @returns A token that can be used to generate the function definition
   */
  public static named(
    name: string,
    properties: Array<ICodeResolvable | string>,
    body: ICodeResolvable | Array<ICodeResolvable>
  ): JavascriptFunction {
    return new JavascriptFunction(name, properties, body);
  }

  /**
   * Make an arrow function.
   * @param properties The names of the properties the function takes, can include `...` to indicate a rest parameter,
   * or provide a default value with `=`, etc.
   * @param body The body of the function, usually a `JavaScriptRaw`, but takes any `ICodeResolvable` or an array
   * of `ICodeResolvable`s
   * @returns An object that, when used as a string, can be used to generate the function definition
   */
  public static arrow(
    properties: Array<ICodeResolvable | string>,
    body: ICodeResolvable | Array<ICodeResolvable>
  ): JavascriptFunction {
    return new JavascriptFunction(undefined, properties, body);
  }

  /**
   * Make a call to a function
   * @param name The name of the function to call
   * @param params The parameters to pass to the function
   * @returns An object that, when used as a string, will generate the function call
   */
  public static call(
    name: string | undefined,
    ...params: unknown[]
  ): JavascriptRaw {
    return JavascriptRaw.value(`${name}(${params.join(", ")})`);
  }

  private constructor(
    private readonly name: string | undefined,
    private readonly properties: Array<ICodeResolvable | string>,
    private readonly body: ICodeResolvable | Array<ICodeResolvable>
  ) {
    super("JSFunctionToken");
  }

  /**
   * Internal use only. Use {@link resolve} instead.
   */
  public stringify(level = 0, idt = "  ") {
    const dent = idt ? idt.repeat(level) : "";
    const dentPlus = idt ? idt.repeat(level + 1) : "";

    const header = this.name ? `function ${this.name}` : ``;
    const parametersValue = this.properties
      .map((p) =>
        javascriptStringify(
          typeof p === "string" ? JavascriptRaw.value(p) : p,
          0,
          ""
        )
      )
      .join(", ");
    const parameters = `(${parametersValue})`;
    const arrow = this.name ? " " : " => ";
    const bodyValue = (Array.isArray(this.body) ? this.body : [this.body])
      .map((p) => dentPlus + javascriptStringify(p, 0, ""))
      .join("\n");
    const body = CodeTokenMap.instance.resolve(`{\n${bodyValue}\n${dent}}`, {
      level: level + 1,
      idt,
    });
    return `${header}${parameters}${arrow}${body}`;
  }
}

/**
 * Represents a raw Javascript code to be used literally, without escaping.
 *
 * `JavascriptRaw` is a {@link ICodeResolvable} object, and thus can be used in any place that expects a string to make
 * a token that can later be resolved, turning it into a string of the represented code with {@link ICodeResolvable.resolve|ICodeResolvable.resolve()}.
 *
 * Create one with `JavascriptRaw.value(body)`, where body is a string or an array of strings, and the strings can
 * contain tokens of other `ICodeResolvable` objects that will be resolved when `resolve()` is called.
 *
 * @example
 *
 * ```typescript
 * // The types are unnecessary here, but included for clarity in the example
 * const aCode: ICodeResolvable = JavascriptRaw.value("const a = 1;");
 * const bCode: ICodeResolvable = JavascriptRaw.value("const b = 2;");
 * const finalCode: ICodeResolvable = JavascriptRaw.value([aCode, bCode]);
 *
 * const generatedJavascriptCode = finalCode.resolve();
 * ```
 *
 * Note that the string value of `aCode` and `bCode` will be something like `${Token[JSRawToken.9]}`.
 *
 * If printed the value of `generatedJavascriptCode` will be:
 * ```javascript
 * const a = 1;
 * const b = 2;
 * ```
 */
export class JavascriptRaw extends CodeResolvableBase {
  /**
   * Generate a raw Javascript code token
   * @param body A string or array of strings that represent the raw Javascript code to be used literally
   * @returns An object that, when used as a string, will generate the raw Javascript code
   */
  public static value(body: string | Array<string>) {
    return new JavascriptRaw(body);
  }

  private constructor(private readonly body: string | Array<string>) {
    super("JSRawToken");
  }

  /**
   * Internal use only. Use {@link resolve} instead.
   */
  public stringify(level: number, idt: string) {
    if (typeof this.body === "string") {
      return (
        CodeTokenMap.instance.resolve(this.body, { level, idt }, true) || ""
      );
    }
    return this.body
      .map(
        (l) =>
          idt.repeat(level) +
          CodeTokenMap.instance.resolve(l, { level, idt }, true)
      )
      .join("\n");
  }
}

/**
 * Represents a Javascript data structure, such as an object or an array
 *
 * Create one with `JavascriptDataStructure.value(body)`, where body is any data structure that can be converted to
 * Javascript code, including tokens
 *
 * Most values will be encoded similar to how JSON is. For example, `JavascriptDataStructure.value({a: 1, b: 2})` will
 * generate `{"a": 1, "b": 2}` except with line-breaks and indention set by when `resolve()` is called.
 *
 * Functions in the values of an object or array will be called and their results used. To literally represent the
 * creation of a function, use {@link JavascriptFunction}.
 *
 * Objects with keys that have the `...` prefix will be replaced by that spread operator, and the value will be ignored,
 *  with the exception of `undefined` which will be removed.
 */
export class JavascriptDataStructure extends CodeResolvableBase {
  /**
   * Generate Javascript code given the provided data structure - arrays will be formatted with `[]` and objects with
   * `{}`, including indention, etc.
   * @param body Any data structure that can be converted to Javascript code, including tokens
   * @returns An object that, when used as a string, will generate the raw Javascript code
   */
  public static value(body: unknown) {
    return new JavascriptDataStructure(body);
  }

  private constructor(private readonly body: unknown) {
    super("JSDataToken");
  }

  /**
   * Internal use only. Use {@link resolve} instead.
   */
  public stringify(level = 0, idt = "  ") {
    return javascriptStringify(this.body, level, idt) ?? "undefined";
  }
}

/**
 * Represents a Javascript `import` ({@link ESMJavascriptDependencies}) or `require` ({@link CJSJavascriptDependencies})
 * statement.
 *
 * Both have the same API, and can be used to generate the import/require statements for a Javascript file.
 *
 * Create a new one with `CJSJavascriptDependencies.value()` or `ESMJavascriptDependencies.value()`, and then add
 * imports with `addImport(imports, from)`. See {@link addImport} for more details.
 * @example
 *
 * ```typescript
 * const deps = CJSJavascriptDependencies.value();
 * // or: const deps = ESMJavascriptDependencies.value();
 * const [jsdoc] = deps.addImport("jsdoc", "eslint-plugin-jsdoc");
 * const [subValue1, subValue2] = deps.addImport(["subValue1", "subValue2"], "eslint-plugin-jsdoc");
 * const [js] = deps.addImport("js", "@eslint/js");
 * const [t1, t2] = deps.addImport(["t1", "t2"], "@eslint/js");
 *
 * const code = deps.resolve();
 * ```
 *
 * Will leave `code` as:
 * ```javascript
 * const jsdoc = require('eslint-plugin-jsdoc');
 * const { subValue1, subValue2 } = jsdoc;
 * const js = require('@eslint/js');
 * const { t1, t2 } = js;
 * ```
 *
 * Or, in the case of `ESMJavascriptDependencies`:
 * ```javascript
 * import jsdoc, { subValue1, subValue2 } from 'eslint-plugin-jsdoc';
 * import js, { t1, t2 } from '@eslint/js';
 * ```
 */
export abstract class JavascriptDependenciesBase extends CodeResolvableBase {
  protected imports: Map<string, Array<string>> = new Map();
  protected defaultImports: Map<string, string> = new Map();
  protected froms = new Set<string>();

  protected constructor() {
    super("JSDependenciesToken");
  }

  /**
   * Add an import to the dependencies.
   * @param imports The import(s) to add. If a string, it will be used as the name of the import. If an array of
   * strings, each string will be used as the name of an import.
   * @param from The module to import from
   * @returns An array of {@link JavascriptRaw} objects that represent the imports
   * @example
   * ```typescript
   * const deps = CJSJavascriptDependencies.value(); // or ESMJavascriptDependencies.value();
   * const [jsdoc] = deps.addImport("jsdoc", "eslint-plugin-jsdoc");
   * const [subValue1, subValue2] = deps.addImport(["subValue1", "subValue2"], "eslint-plugin-values");
   *
   * const code = JavascriptRaw.value(`${deps}
   *
   * ${jsdoc}.doSomething(${subValue1}, ${subValue2});
   * `).resolve();
   * ```
   *
   * Will leave `code` as:
   * ```javascript
   * const jsdoc = require('eslint-plugin-jsdoc');
   * const { subValue1, subValue2 } = require('eslint-plugin-values');
   *
   * jsdoc.doSomething(subValue1, subValue2);
   * ```
   **/
  public addImport(
    imports: Array<string> | string,
    from: string
  ): Array<JavascriptRaw> {
    if (typeof imports === "string") {
      if (this.defaultImports.has(from)) {
        const oldImports = this.defaultImports.get(from);
        if (!oldImports) {
          throw new Error(
            `Something went horribly wrong - we should never get here.`
          );
        }
        logging.warn(
          `Default import already exists for ${from}: Using '${oldImports}', and ignoring the new name '${imports}'`
        );
        return [JavascriptRaw.value(oldImports)];
      }
      this.defaultImports.set(from, imports);
      this.froms.add(from);
      return [JavascriptRaw.value(imports)];
    }
    if (this.imports.has(from)) {
      this.imports.set(from, this.imports.get(from)!.concat(imports));
    } else {
      this.imports.set(from, imports);
    }
    this.froms.add(from);
    return imports.map((i) => JavascriptRaw.value(i));
  }
}

/**
 * Represents a Javascript CommonJS (CJS) `require` statement. See {@link JavascriptDependenciesBase} for code examples.
 */
export class CJSJavascriptDependencies extends JavascriptDependenciesBase {
  public static value() {
    return new CJSJavascriptDependencies();
  }

  /**
   * Internal use only. Use {@link resolve} instead.
   */
  public stringify(level: number, _idt: string) {
    if (level !== 0) {
      throw new Error("JavascriptDependencies cannot be nested");
    }
    const out: Array<string> = [];
    for (const from of this.froms) {
      const imports = this.imports.get(from) ?? [];
      const defaultImport = this.defaultImports.get(from);
      const value = imports.map((i) => i.toString()).join(", ");

      if (defaultImport && imports.length > 0) {
        out.push(`const ${defaultImport} = require('${from}');`);
        out.push(`const { ${value} } = ${defaultImport};`);
      } else if (defaultImport) {
        out.push(`const ${defaultImport} = require('${from}');`);
      } else {
        out.push(`const { ${value} } = require('${from}');`);
      }
    }
    return out.join("\n");
  }
}

/**
 * Represents a Javascript ECMAScript modules (ESM) `import` statement. See {@link JavascriptDependenciesBase} for code examples.
 */
export class ESMJavascriptDependencies extends JavascriptDependenciesBase {
  public static value() {
    return new ESMJavascriptDependencies();
  }

  /**
   * Internal use only. Use {@link resolve} instead.
   */
  public stringify(level: number, _idt: string) {
    if (level !== 0) {
      throw new Error("JavascriptDependencies cannot be nested");
    }
    const out: Array<string> = [];
    for (const from of this.froms) {
      const imports = this.imports.get(from) ?? [];
      const defaultImport = this.defaultImports.get(from);
      const value = imports.map((i) => i.toString()).join(", ");

      if (defaultImport && imports.length > 0) {
        out.push(`import ${defaultImport}, { ${value} } from '${from}';`);
      } else if (defaultImport) {
        out.push(`import ${defaultImport} from '${from}';`);
      } else {
        out.push(`import { ${value} } from '${from}';`);
      }
    }
    return out.join("\n");
  }
}

/**
 * Options for the JsConfigFile class.
 */

export interface JavascriptFileOptions extends JsonFileOptions {
  /**
   * Whether to use CommonJS (require) or ESM (import/export) for the file.
   */
  cjs: boolean;
}

/**
 * Represents a JS configuratin file (e.g. .eslintrc.js).
 */
export class JavascriptFile extends JsonFile {
  public readonly dependencies: JavascriptDependenciesBase;
  public readonly cjs: boolean;

  constructor(
    project: Project,
    filePath: string,
    options: JavascriptFileOptions
  ) {
    super(project, filePath, { ...options, allowComments: false });
    this.cjs = options.cjs ?? false;
    this.dependencies = options.cjs
      ? CJSJavascriptDependencies.value()
      : ESMJavascriptDependencies.value();
    if (!options.obj) {
      throw new Error('"obj" cannot be undefined');
    }
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const json = super.synthesizeContent(resolver);
    if (!json) {
      return undefined;
    }
    const data = JSON.parse(json);

    const markerHeader = this.marker ? `// ${this.marker}\n` : "";

    // Clear the "//" key created by JsonFile
    data["//"] = undefined;

    const defaultExport = this.cjs ? `module.exports =` : `export default`;
    return JavascriptRaw.value(
      `${markerHeader}${this.dependencies}
${defaultExport} ${JavascriptDataStructure.value(data)};
`
    ).resolve();
  }
}

/**
 * Internal function housing commmon code to convert a data structure to a string of Javascript code.
 */
function javascriptStringify(
  data: unknown,
  level = 0,
  idt: string = "  "
): string | undefined {
  const dent = idt.repeat(level);
  const dentPlus = idt.repeat(level + 1);
  if (typeof data === "function") {
    data = data();
  }
  if (typeof data === "string" && unresolved(data)) {
    data = CodeTokenMap.instance.resolve(data, { level, idt });
  }
  if (data instanceof JavascriptFunction || data instanceof JavascriptRaw) {
    return data.stringify(level, idt ?? "");
  }
  if (typeof data === "number") {
    return data.toString();
  }
  if (data instanceof Date) {
    return `new Date(${JSON.stringify(data.toISOString())})`;
  }
  if (Array.isArray(data)) {
    const r: Array<string> = [];
    for (const val of data) {
      const value = javascriptStringify(val, level + 1, idt);
      if (value) {
        r.push(value);
      }
    }
    if (idt) {
      return r.length === 0
        ? "[]"
        : `[\n${r.map((l) => dentPlus + l).join(",\n")},\n${dent}]`;
    }
    return `[${r.join(", ")}]`;
  }
  if (data && typeof data === "object") {
    const r: Array<string> = [];
    if (!Object.entries(data).length) {
      return "{}";
    }
    r.push("{");
    for (const [key, val] of Object.entries(data)) {
      // Four possible outputs per row:
      // 1. `key: value,`
      // 2. `"key": value`
      // 3. `[key]: "value"`
      // 4. `...key` (value is ignored)

      const value = javascriptStringify(val, level + 1, idt);
      let keyString = key;
      // if the key is a token, resolve it (3)
      if (unresolved(key)) {
        // console.log("key", key);
        const resolvedKey = CodeTokenMap.instance
          .resolve(key, { level, idt })
          ?.toString();
        // and if it starts with `...` then we drop it in place (4)
        if (resolvedKey?.match(/^\.\.\./)) {
          if (value !== undefined) {
            r.push(dentPlus + `${resolvedKey},`);
          }
          continue;
        } else {
          // otherwise we wrap it in `[]` (3)
          keyString = `[${resolvedKey}]`;
        }
      }

      // and if it starts with `...` then we drop it in place (4)
      if (keyString?.match(/^\.\.\./)) {
        if (value !== undefined) {
          r.push(dentPlus + `${keyString},`);
        }
        continue;
      } else {
        // if the key is a valid identifier, we use it as is (1)
        // otherwise we quote it and wrap it in quotes (2)
        keyString = keyString.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
          ? keyString
          : JSON.stringify(keyString);
      }

      // if the value is not undefined, we add it to the output
      // if you want the value to be exactly undefined,
      // then use`JavascriptRaw.value("undefined")`
      if (value !== undefined) {
        r.push(dentPlus + keyString + ": " + value + ",");
      }
    }
    r.push(dent + "}");
    return r.join(idt ? "\n" : " ");
  }
  return JSON.stringify(data);
}
