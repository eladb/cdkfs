import { FileBase, IResolver } from './file';
import { Project } from './project';


export class IgnoreFile extends FileBase {
  private readonly _patterns = new Array<string>();

  constructor(project: Project, filePath: string) {
    super(project, filePath, { editGitignore: filePath !== '.gitignore' });
  }

  /**
   * Add ignore patterns. Files that match this pattern will be ignored. If the
   * pattern starts with a negation mark `!`, files that match will _not_ be
   * ignored.
   *
   * Comment lines (start with `#`) are ignored.
   *
   * @param patterns Ignore patterns.
   */
  public addPatterns(...patterns: string[]) {
    for (const pattern of patterns) {
      // skip comments
      if (pattern.startsWith('#')) {
        continue;
      }

      this.normalizePatterns(pattern);

      this._patterns.push(pattern);
    }
  }

  private normalizePatterns(pattern: string) {
    const opposite = pattern.startsWith('!') ? pattern.slice(1) : '!' + pattern;
    remove(this._patterns, pattern); // prevent duplicates
    remove(this._patterns, opposite);

    if (pattern.endsWith('/')) {
      const prefix = opposite;
      for (const p of [...this._patterns]) {
        if (p.startsWith(prefix)) {
          remove(this._patterns, p);
        }
      }
    }
  }

  /**
   * Removes patterns previously added from the ignore file.
   *
   * If `addPattern()` is called after this, the pattern will be added again.
   *
   * @param patterns patters to remove.
   */
  public removePatterns(...patterns: string[]) {
    for (const p of patterns) {
      remove(this._patterns, p);
    }
  }

  /**
   * Ignore the files that match these patterns.
   * @param patterns The patterns to match.
   */
  public exclude(...patterns: string[]) {
    return this.addPatterns(...patterns);
  }

  /**
   * Always include the specified file patterns.
   * @param patterns Patterns to include in git commits.
   */
  public include(...patterns: string[]) {
    for (let pattern of patterns) {
      if (!pattern.startsWith('!')) {
        pattern = '!' + pattern;
      }

      this.addPatterns(pattern);
    }
  }

  protected synthesizeContent(resolver: IResolver): string | undefined {
    const lines = [
      `# ${FileBase.PROJEN_MARKER}`,
      ...this._patterns,
    ];

    return `${resolver.resolve(lines).join('\n')}\n`;
  }
}

// O(n) hooray!
function remove<T>(arr: T[], value: any) {
  const idx = arr.indexOf(value);
  if (idx >= 0) {
    arr.splice(idx, 1);
  }
}
