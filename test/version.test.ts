import { execSync } from "child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import {
  execProjenCLI,
  synthSnapshot,
  TestProject,
  withProjectDir,
} from "./util";
import { JavaProject } from "../src/java";
import { Version } from "../src/version";

describe("Version", () => {
  test("Changes to bump's env should not affect unbump and vice-versa", () => {
    // GIVEN
    const project = new TestProject();
    const version = new Version(project, {
      versionInputFile: "VERSION",
      artifactsDirectory: "artifacts",
    });

    // WHEN
    version.bumpTask.env("STEP_NAME", "bump");
    version.unbumpTask.env("STEP_NAME", "unbump");

    // THEN
    expect(version.bumpTask.envVars.STEP_NAME).toEqual("bump");
    expect(version.unbumpTask.envVars.STEP_NAME).toEqual("unbump");
  });
});

describe("with JavaProject", () => {
  test("version component can be used", () => {
    const p = new JavaProject({
      name: "test-project",
      version: "1.0.0",
      groupId: "io.github.cdklabs",
      artifactId: "projen",
    });

    new Version(p, {
      versionInputFile: "pom.xml",
      artifactsDirectory: "dist",
      bumpPackage: "foobar-bump",
    });

    const snap = synthSnapshot(p);
    const pom = snap["pom.xml"];
    const tasks = snap[".projen/tasks.json"];

    // should not be in the pom file
    expect(pom).not.toContain("foobar-bump");

    // but should be in the task environment
    expect(tasks).toMatchObject({
      tasks: {
        bump: {
          env: {
            BUMP_PACKAGE: "foobar-bump",
          },
        },
      },
    });
  });
});

describe("bump task", () => {
  test("will bump if last commit is not a tag", async () => {
    withProjectDir((projectdir) => {
      const project = new TestProject({
        outdir: projectdir,
      });
      new Version(project, {
        versionInputFile: "package.json",
        artifactsDirectory: "dist",
      });

      project.synth();

      const result = testBumpTask({
        workdir: project.outdir,
        commits: [
          { message: "chore(release): v0.1.0", tag: "v0.1.0" },
          { message: "new change" },
        ],
      });

      expect(result.version).toEqual("0.1.1");
    });
  });

  test("will not bump if last commit is a tag", async () => {
    withProjectDir((projectdir) => {
      const project = new TestProject({
        outdir: projectdir,
      });
      new Version(project, {
        versionInputFile: "package.json",
        artifactsDirectory: "dist",
      });

      project.synth();

      // Bump the first time to generate the initial version
      let result = testBumpTask({
        workdir: project.outdir,
        commits: [
          { message: "chore(release): v0.1.0", tag: "v0.1.0" },
          { message: "new change" },
        ],
      });

      // Bump again to see if the version is the same
      result = testBumpTask({
        workdir: project.outdir,
      });

      expect(result.version).toEqual("0.1.1");
    });
  });

  // test("regressions", async () => {
  //   withProjectDir((projectdir) => {
  //     const project = new TestProject({
  //       outdir: projectdir,
  //     });
  //     const version = new Version(project, {
  //       versionInputFile: "package.json",
  //       artifactsDirectory: "dist",
  //     });
  //     version.bumpTask.env("MAJOR", "0");
  //     version.bumpTask.env("PRERELEASE", "alpha");

  //     project.synth();

  //     // Bump the first time to generate the initial version
  //     let result = testBumpTask({
  //       printOutput: true,
  //       workdir: project.outdir,
  //       commits: [
  //         { message: "feat: stuff", tag: "v0.0.1-alpha.0" },
  //         { message: "fix: new change" },
  //       ],
  //     });

  //     // Bump again to see if the version is the same
  //     result = testBumpTask({
  //       workdir: project.outdir,
  //     });

  //     expect(result.version).toEqual("0.0.1-alpha.1");
  //   });
  // });
});

function testBumpTask(
  opts: {
    workdir?: string;
    commits?: { message: string; tag?: string; path?: string }[];
    printOutput?: boolean;
  } = {}
) {
  const workdir = opts.workdir ?? mkdtempSync(join(tmpdir(), "bump-test-"));

  const git = (cmd: string) =>
    execSync(`git ${cmd}`, {
      cwd: workdir,
      stdio: opts.printOutput ? "inherit" : "pipe",
      // let's try to catch hanging processes sooner than later
      timeout: 10_000,
    });

  const commit = (message: string, path: string = "dummy.txt") => {
    const filePath = join(workdir, path);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, message);
    git("add .");
    git(`commit -F "${filePath}"`);
  };

  commit("initial commit");

  for (const c of opts.commits ?? []) {
    commit(c.message, c.path);
    if (c.tag) {
      git(`tag ${c.tag}`);
    }
  }

  // Bump the version
  execProjenCLI(workdir, ["bump"], undefined, {
    printOutput: opts.printOutput,
  });

  return {
    version: JSON.parse(readFileSync(join(workdir, "package.json"), "utf-8"))
      .version,
    changelog: readFileSync(join(workdir, "dist/changelog.md"), "utf8"),
    bumpfile: readFileSync(join(workdir, "dist/version.txt"), "utf8"),
    tag: readFileSync(join(workdir, "dist/releasetag.txt"), "utf8"),
    workdir,
  };
}
