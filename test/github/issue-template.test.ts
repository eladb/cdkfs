import * as YAML from "yaml";
import { IssueTemplate } from "../../src/github/issue-template";
import { synthSnapshot, TestProject } from "../util";

describe("issue-template", () => {
  test("default project behavior", () => {
    const project = new TestProject();
    expect(
      synthSnapshot(project)[".github/ISSUE_TEMPLATE/bug-report.md"]
    ).toBeUndefined();
  });

  test("include config", () => {
    const project = new TestProject();
    new IssueTemplate(project, {
      templates: {
        "bug-report.md": "<!-- Bug report template content -->",
      },
      configOptions: {
        blankIssuesEnabled: false,
        contactLinks: [
          {
            name: "Support",
            url: "https://example.com/support",
            about: "Get support for this project",
          },
        ],
      },
    });
    const snapshot = synthSnapshot(project);
    const issueTemplateConfig = snapshot[".github/config.yml"];
    expect(issueTemplateConfig).toContain("blank_issues_enabled: false");
    expect(issueTemplateConfig).toContain("contact_links");
    expect(issueTemplateConfig).toMatchSnapshot();
  });

  test("includes bug-report.md", () => {
    const project = new TestProject();
    new IssueTemplate(project, {
      templates: {
        "bug-report.md": "<!-- Bug report template content -->",
      },
    });

    expect(
      synthSnapshot(project)[".github/ISSUE_TEMPLATE/bug-report.md"]
    ).toMatchSnapshot();
  });

  test("includes feature-request.yml", () => {
    const project = new TestProject();
    const data = {
      name: "Feature Request",
      description: "Suggest a new feature for the project",
      title: "[FEATURE] ",
      body: [
        {
          type: "markdown",
          attributes: {
            value:
              "Thanks for taking the time to fill out this feature request",
          },
        },
      ],
    };

    new IssueTemplate(project, {
      templates: {
        "feature-request.yml": YAML.stringify(data),
      },
    });

    expect(
      synthSnapshot(project)[".github/ISSUE_TEMPLATE/feature-request.yml"]
    ).toMatchSnapshot();
  });

  test("throws error if file extension is not supported", () => {
    const project = new TestProject();
    // Define a function that creates an IssueTemplate with invalid file extension
    const createIssueTemplateWithInvalidExtension = () => {
      new IssueTemplate(project, {
        templates: {
          "feature-request.txt": "<!-- some unsupported text -->",
        },
      });
    };

    expect(createIssueTemplateWithInvalidExtension).toThrow();
  });
});
