import { IResolver } from "./file";
import { ObjectFile, ObjectFileOptions } from "./object-file";
import { Project } from "./project";

/**
 * Options for `JsonFile`.
 */
export interface JsonFileOptions extends ObjectFileOptions {
  /**
   * Adds a newline at the end of the file.
   * @default true
   */
  readonly newline?: boolean;
}

/**
 * Represents a JSON file.
 */
export class JsonFile extends ObjectFile {
  private readonly newline: boolean;

  constructor(project: Project, filePath: string, options: JsonFileOptions) {
    super(project, filePath, options);

    this.newline = options.newline ?? true;

    if (!options.obj) {
      throw new Error('"obj" cannot be undefined');
    }
  }

  private stringifyJson(value: any): string {
    let content = JSON.stringify(value, undefined, 2);
    if (this.newline) {
      content += "\n";
    }
    return content;
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const json = super.synthesizeContent(resolver);
    if (!json) {
      return undefined;
    }

    // Parse and re-stringify json to ensure consistency.
    const sanitized = JSON.parse(json);
    return this.stringifyJson(sanitized);
  }

  protected addProjenMarker(content: string): string {
    const sanitized = JSON.parse(content);
    if (this.marker) {
      sanitized["//"] = this.marker;
    }
    return this.stringifyJson(sanitized);
  }
}
