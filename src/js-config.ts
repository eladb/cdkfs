import { IResolver } from "./file";
import { JsonFileOptions } from "./json";
import { ObjectFile } from "./object-file";
import { Project } from "./project";

/**
 * Options for the JsConfigFile class.
 */
export interface JsConfigFileOptions extends JsonFileOptions {}

/**
 * Represents a JS configuratin file (e.g. .eslintrc.js).
 * Suppor
 */
export class JsConfigFile extends ObjectFile {
  static identifier(str: string): string {
    return `${JsConfigFile.jsConfigFileIdentifier}${str}`;
  }
  private static readonly jsConfigFileIdentifier =
    "__projenJsConfigFileIdentifier#";
  constructor(
    project: Project,
    filePath: string,
    options: JsConfigFileOptions
  ) {
    super(project, filePath, options);
    if (!options.obj) {
      throw new Error('"obj" cannot be undefined');
    }
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const json = super.synthesizeContent(resolver);
    if (!json) {
      return undefined;
    }

    const sanitized = JSON.parse(json);
    let content = JSON.stringify(sanitized, undefined, 2);
    content = this.replaceIdentifier(content);
    content = `module.exports = ${content};`;
    content = `// ${this.marker}\n${content}`;

    return content;
  }

  private replaceIdentifier(str: string): string {
    const regex = new RegExp(
      `(\"${JsConfigFile.jsConfigFileIdentifier})([a-zA-Z_$][a-zA-Z_$0-9]+)(\")`,
      "gm"
    );
    return str.replace(regex, "$2");
  }
}
