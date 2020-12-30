import { Project } from './project';
import { TextFile, TextFileOptions } from './textfile';

/**
 *
 */
export interface SummaryOptions extends TextFileOptions {
  /**
   * The filename.
   *
   * @default "SUMMARY.md"
   * @example "summary.md"
   */
  readonly filename?: string;

  /**
   * Whether to link to the SUMMARY in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface CodeOfConductOptions extends TextFileOptions {
  /**
   * The filename.
   *
   * @default "CODE_OF_CONDUCT.md"
   * @example "code-of-conduct.md"
   */
  readonly filename?: string;

  /**
   * Whether to link to the CODE_OF_CONDUCT in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface ContributingOptions extends TextFileOptions{
  /**
   * The filename.
   *
   * If "" then contributing will be inline in the Readme."
   *
   * @default "CONTRIBUTING.md"
   * @example "contributing.md"
   * @example ""
   */
  readonly filename?: string;

  /**
   * Whether to link to the CONTRIBUTING in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 * filename is intentionally not configurable
 * it is owned by `standard-release`
 */
export interface ChangelogOptions {
  /**
   * Whether to link to the CHANGELOG.md in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface RoadmapOptions extends TextFileOptions {
  /**
   * The filename.
   *
   * If `projects` is true then this will be ""
   * If this is "" and both `link` and `project` are false then there will be no ROADMAP
   *
   * @default "ROADMAP.md"
   * @example ""
   */
  readonly filename?: string;

  /**
   * Whether to link to the ROADMAP in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;

  /**
   * Whether to link to the ROADMAP or to Projects
   * Implies link: true
   *
   * @default true
   */
  readonly projects?: boolean;
}

/**
 *
 */
export interface VisionOptions {
  /**
   * The filename.
   *
   * @default "VISION.md"
   * @example "Vision.md"
   * @example ""
   */
  readonly filename?: string;

  /**
   * Whether to link to the VISION in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 * filename is intentionally not configurable.
 */
export interface ReadmeLicenseOptions {
  /**
   * Whether to link to the VISION in Readme or not.
   *
   * @default true
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface UsageOptions extends TextFileOptions {
  /**
   * The filename.
   *
   * If filename is "" then USAGE will be inline in Readme.
   *
   * @default ""
   * @example "Usage.md"
   */
  readonly filename?: string;

  /**
   * Whether to link to the USAGEs in Readme or not.
   *
   * If `link` is true, then it implies `filename: 'Usage.md'` unless
   * it is also/already customized
   *
   * @default false
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface AuthorOptions extends TextFileOptions {
  /**
   * The filename.
   *
   * If filename is "" then AUTHOR will be inline in Readme.
   *
   * @default ""
   * @example "Usage.md"
   */
  readonly filename?: string;

  /**
   * Whether to link to the Usage in Readme or not.
   *
   * If `link` is true, then it implies `filename: 'Usage.md'` unless
   * it is also/already customized
   *
   * @default false
   */
  readonly link?: boolean;
}

/**
 *
 */
export interface BadgeOptions {

  /**
   * Name of the badge.
   */
  readonly name: string;

  /**
   * Alt Text To display.
   *
   * @default - `name`
   */
  readonly altText?: string;

  /**
   * Image Url.
   *
   */
  readonly imgUrl: string;

  /**
   * The Url.
   */
  readonly url: string;
}

/**
 * Readme Properties
 */
export interface ReadmeOptions extends TextFileOptions {

  /**
   * Readme file name
   *
   * @default "README.md"
   * @example "readme.md"
   * @example "Readme.md"
   */
  readonly filename?: string;

  /**
   * Table of Contents
   *
   * @default - `TocOptions`
   */
  readonly toc?: boolean;

  /**
   * The tag line for your project
   *
   * @default "my project."
   * @example "Define and maintain complex project configuration through code."
   */
  readonly tagLine?: string;

  /**
   *
   */
  readonly summary?: SummaryOptions;
  /**
   * Code of Conduct
   *
   * @default - `CodeOfConductOptions`
   */
  readonly codeOfConduct?: CodeOfConductOptions;

  /**
   * Contributing
   *
   * @default - `ContributingOptions`
   */
  readonly contributing?: ContributingOptions;

  /**
   * Changelog
   *
   * @default - `ChangelogOptions`
   */
  readonly changelog?: ChangelogOptions;

  /**
   * Roadmap
   *
   * @default - `RoadmapOptions`
   */
  readonly roadmap?: RoadmapOptions;

  /**
   * Vision
   *
   * @default - `VisionOptions`
   */
  readonly vision?: VisionOptions;

  /**
   * License
   *
   * @default - `LicenseOptions`
   */
  readonly license?: ReadmeLicenseOptions;

  /**
   * Usage
   *
   * @default - `UsageOptions`
   */
  readonly usage?: UsageOptions;

  /**
   * Author
   *
   * @default - `AuthorOptions`
   */
  readonly author?: AuthorOptions;

  /**
   * Badges.
   *
   * @default - depends on whats configured
   */
  readonly badges?: BadgeOptions[];
}

/**
 *
 */
export enum ReadmeSections {
  TOC,
  TAG_LINE,
  SUMMARY,
  CODE_OF_CONDUCT,
  CONTRIBUTING,
  CHANGELOG,
  LICENSE,
  ROADMAP,
  VISION,
  USAGE,
  AUTHOR,
  BADGES,
}

/**
 * Represents a README.md file.
 *
 */
export class Readme {
  public filename: string;

  public toc: boolean;
  public tagLine: string;
  public summary: SummaryOptions;
  public codeOfConduct: CodeOfConductOptions;
  public contributing: ContributingOptions;
  public changelog: ChangelogOptions;
  public license: ReadmeLicenseOptions;
  public roadmap: RoadmapOptions;
  public vision: VisionOptions;
  public usage: UsageOptions;
  public author: AuthorOptions;
  public badges: BadgeOptions[];

  public sectionOrder: ReadmeSections[];

  /**
   *
   * @param project
   * @param options
   */
  constructor(project: Project, options?: ReadmeOptions) {

    // Init & defaults
    this.filename = options?.filename ?? 'README.md';
    this.toc = options?.toc ?? true;
    this.tagLine = options?.tagLine ?? 'my project';
    this.summary = options?.summary ?? { filename: 'SUMMARY.md', link: true };
    this.codeOfConduct = options?.codeOfConduct ?? { filename: 'CODE_OF_CONDUCT.md', link: true };
    this.contributing = options?.contributing ?? { filename: 'CONTRIBUTING.md', link: true };
    this.changelog = options?.changelog ?? { link: true };
    this.license = options?.license ?? { link: true };
    this.roadmap = options?.roadmap ?? { filename: 'ROADMAP.md', link: true };
    this.vision = options?.vision ?? { filename: 'VISION.md', link: true };
    this.usage = options?.usage ?? { filename: 'USAGE.md', link: true };
    this.author = options?.author ?? { filename: 'AUTHOR.md', link: true };
    this.badges = [];

    this.sectionOrder = [
      ReadmeSections.TAG_LINE,
      ReadmeSections.TOC,
      ReadmeSections.SUMMARY,
      ReadmeSections.USAGE,
      ReadmeSections.CODE_OF_CONDUCT,
      ReadmeSections.CONTRIBUTING,
      ReadmeSections.CHANGELOG,
      ReadmeSections.LICENSE,
      ReadmeSections.ROADMAP,
      ReadmeSections.VISION,
      ReadmeSections.AUTHOR,
      ReadmeSections.BADGES,
    ];

    // Render content
    this._renderReadme(project);
  }

  /**
   *
   * @internal
   */
  private _renderReadme(project: Project) {
    let lines: string[];
    lines = [];

    for (const section of this.sectionOrder) {
      switch (section) {
        case ReadmeSections.TAG_LINE:
          lines.push(this._renderReadmeTagLine());
          break;
      }
    }

    new TextFile(project, this.filename, {
      lines: lines,
    });
  }

  /**
   *
   * @internal
   */
  private _renderReadmeTagLine(): string {
    return this.tagLine;
  }
}