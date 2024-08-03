import * as path from "path";
import { IConstruct } from "constructs";
import * as YAML from "yaml";
import { Component } from "../component";
import { TextFile } from "../textfile";
import { YamlFile } from "../yaml";

export interface ContactLinks {
  /**
   * The name of the contact link.
   */
  readonly name: string;

  /**
   * The URL of the contact link.
   */
  readonly url: string;

  /**
   * A brief description of the contact link.
   */
  readonly about: string;
}

/**
 * Options for configuring issue templates in a repository.
 *
 * @interface IssueTemplateConfigOptions
 * @see {@link https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser}
 */
export interface IssueTemplateConfigOptions {
  /**
   * Indicates whether blank issues (issues without a template) are allowed.
   *
   * @type {boolean} [blankIssuesEnabled=false]
   */
  readonly blankIssuesEnabled?: boolean;

  /**
   * An array of contact links to display in the issue template chooser.
   *
   */
  readonly contactLinks?: ContactLinks[];
}

/**
 * Options for `IssueTemplate`.
 */
export interface IssueTemplateOptions {
  /**
   * An array of issue template file names and their contents.
   * The file names should include the extension (.md or .yml).
   */
  readonly templates: { [fileName: string]: string };

  /**
   * Configuration options for the config.yml file.
   * Only applicable if includeConfig is true.
   */
  readonly configOptions?: IssueTemplateConfigOptions;
}

/**
 * Generates Issue Templates for GitHub repositories
 * see  {@link https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests}
 */
export class IssueTemplate extends Component {
  constructor(scope: IConstruct, options: IssueTemplateOptions) {
    super(scope);

    // Create issue template files
    this.addTemplates(options);

    // Create config.yml file if requested
    if (options.configOptions) {
      const blankIssues = options.configOptions?.blankIssuesEnabled;
      const contactLinks = options.configOptions?.contactLinks;

      new YamlFile(this, ".github/config.yml", {
        obj: {
          blank_issues_enabled: blankIssues,
          contact_links: contactLinks,
        },
        marker: false,
        committed: true,
      });
    }
  }

  /**
   * Adds issue templates to the project.
   *
   * @param options - The options for adding issue templates.
   *
   * @throws {Error} If an unsupported file extension is encountered.
   */
  public addTemplates(options: IssueTemplateOptions) {
    const templatePath = ".github/ISSUE_TEMPLATE";

    for (const [fileName, content] of Object.entries(options.templates)) {
      const filePath = path.join(templatePath, fileName);
      const fileExtension = path.extname(fileName).toLowerCase();
      switch (fileExtension) {
        case ".md":
          new TextFile(this, filePath, {
            lines: [content],
            marker: false,
            committed: true,
          });
          break;
        case ".yml":
          new YamlFile(this, filePath, {
            obj: YAML.parse(content),
            marker: false,
            committed: true,
          });
          break;
        default:
          throw new Error(`Unsupported file extension: ${fileExtension}`);
      }
    }
  }
}
