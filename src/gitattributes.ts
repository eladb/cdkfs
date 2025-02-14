import { IConstruct } from "constructs";
import { IResolver, FileBase } from "./file";

/**
 * The end of line characters supported by git.
 */
export enum EndOfLine {
  /**
   * Maintain existing (mixed values within one file are normalised by looking
   * at what's used after the first line)
   */
  AUTO = "auto",

  /**
   * Carriage Return + Line Feed characters (\r\n), common on Windows
   */
  CRLF = "crlf",

  /**
   * Line Feed only (\n), common on Linux and macOS as well as inside git repos
   */
  LF = "lf",

  /**
   * Disable and do not configure the end of line character
   */
  NONE = "none",
}

/**
 * Options for `GitAttributesFile`.
 */
export interface GitAttributesFileOptions {
  /**
   * The default end of line character for text files.
   *
   * endOfLine it's useful to keep the same end of line between Windows and Unix operative systems for git checking/checkout operations. Hence, it can avoid simple repository mutations consisting only of changes in the end of line characters. It will be set in the first line of the .gitattributes file to make it the first match with high priority but it can be overriden in a later line. Can be disabled by setting explicitly: `{ endOfLine: EndOfLine.NONE }`.
   *
   * @default EndOfLine.LF
   */
  readonly endOfLine?: EndOfLine;
}

/**
 * Assign attributes to file names in a git repository.
 *
 * @see https://git-scm.com/docs/gitattributes
 */
export class GitAttributesFile extends FileBase {
  private readonly attributes = new Map<string, Set<string>>();

  /**
   * The default end of line character for text files.
   */
  public readonly endOfLine: EndOfLine;

  public constructor(scope: IConstruct, options?: GitAttributesFileOptions) {
    super(scope, ".gitattributes", {
      editGitignore: false,
    });

    this.endOfLine = options?.endOfLine ?? EndOfLine.LF;

    if (this.endOfLine != EndOfLine.NONE) {
      let endOfLineAttributes = [`text=auto`];

      if (this.endOfLine != EndOfLine.AUTO) {
        endOfLineAttributes.push(`eol=${this.endOfLine}`);
      }

      // Setting a default end of line for all text files in the repository
      // This line should be the first one in order to use it as a default for text files and allow for overriding in later lines
      this.addAttributes("*", ...endOfLineAttributes);
    }
  }

  /**
   * Maps a set of attributes to a set of files.
   * @param glob Glob pattern to match files in the repo
   * @param attributes Attributes to assign to these files.
   */
  public addAttributes(glob: string, ...attributes: string[]) {
    if (!this.attributes.has(glob)) {
      this.attributes.set(glob, new Set());
    }
    const set = this.attributes.get(glob)!;
    for (const attribute of attributes) {
      set.add(attribute);
    }
  }

  /**
   * Remove attributes from a set of files.
   * @param glob Glob pattern to match files in the repo
   * @param attributes Attributes to remove from these files.
   */
  public removeAttributes(glob: string, ...attributes: string[]) {
    if (!this.attributes.has(glob)) {
      return;
    }
    const set = this.attributes.get(glob)!;
    for (const attribute of attributes) {
      set.delete(attribute);
    }
    if (set.size === 0) {
      this.attributes.delete(glob);
    }
  }

  /**
   * Add attributes necessary to mark these files as stored in LFS
   */
  public addLfsPattern(glob: string) {
    this.addAttributes(glob, "filter=lfs", "diff=lfs", "merge=lfs", "-text");
  }

  /**
   * Whether the current gitattributes file has any LFS patterns
   */
  public get hasLfsPatterns() {
    return Array.from(this.attributes.values()).some((attrs) =>
      attrs.has("filter=lfs")
    );
  }

  public override preSynthesize(): void {
    this.project.addPackageIgnore("/.gitattributes");

    super.preSynthesize();
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    // We can assume the file map is never empty.
    const entries = Array.from(this.attributes.entries()).sort(([l], [r]) =>
      l.localeCompare(r)
    );

    if (entries.length === 0) {
      return undefined;
    }

    return [
      ...(this.marker ? [`# ${this.marker}`] : []),
      "",
      ...entries.map(
        ([name, attributes]) => `${name} ${Array.from(attributes).join(" ")}`
      ),
    ].join("\n");
  }
}
