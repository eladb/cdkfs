import { IConstruct } from "constructs";
import * as YAML from "yaml";
import { IResolver } from "./file";
import { ObjectFile, ObjectFileOptions } from "./object-file";

/**
 * Options for `YamlFile`.
 */
export interface YamlFileOptions extends ObjectFileOptions {
  /**
   * Maximum line width (set to 0 to disable folding).
   *
   * @default - 0
   */
  readonly lineWidth?: number;
  /**
   * Search value for `String.replace()` on the resulting YAML.
   * Will be converted to a regex with the `g` flag.
   */
  readonly searchValue?: string;
  /**
   * Replace value for `String.replace()` on the resulting YAML.
   */
  readonly replaceValue?: string;
}

/**
 * Represents a YAML file.
 */
export class YamlFile extends ObjectFile {
  /**
   * Maximum line width (set to 0 to disable folding).
   */
  public lineWidth: number;
  /**
   * Search value for `String.replace()` on the resulting YAML.
   */
  private readonly searchValue?: string;
  /**
   * Replace value for `String.replace()` on the resulting YAML.
   */
  private readonly replaceValue?: string;

  constructor(scope: IConstruct, filePath: string, options: YamlFileOptions) {
    super(scope, filePath, options);
    this.lineWidth = options.lineWidth ?? 0;
    this.searchValue = options.searchValue;
    this.replaceValue = options.replaceValue;
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const json = super.synthesizeContent(resolver);
    if (!json) {
      return undefined;
    }

    let yaml = YAML.stringify(JSON.parse(json), {
      indent: 2,
      lineWidth: this.lineWidth,
    });
    if (this.searchValue && this.replaceValue) {
      const searchValueRegex = new RegExp(this.searchValue, "g");
      yaml = yaml.replace(searchValueRegex, this.replaceValue);
    }

    return [...(this.marker ? [`# ${this.marker}`] : []), "", yaml].join("\n");
  }
}
