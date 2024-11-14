import { execSync } from "child_process";
import { promises as fs, mkdtempSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { ReleasableCommits } from "../../src";
import * as logging from "../../src/logging";
import { bump, BumpOptions } from "../../src/release/bump-version";
import { TypeScriptProject } from "../../src/typescript";
import { execProjenCLI, withProjectDir } from "../util";

logging.disable();
jest.setTimeout(1000 * 60 * 5); // 5min

test("first release", async () => {
  const result = await testBump();
  expect(result.version).toStrictEqual("0.0.0");
  expect(result.changelog).toMatch(/.*## 0\.0\.0 \(\d{4}-\d{2}-\d{2}\).*/); // ## 0.0.0 (2021-01-01)
  expect(result.bumpfile).toStrictEqual("0.0.0");
  expect(result.tag).toStrictEqual("v0.0.0");
});

test("first release, with major", async () => {
  const result = await testBump({
    options: { majorVersion: 2 },
  });
  expect(result.version).toStrictEqual("2.0.0");
  expect(result.changelog).toMatch(/.*## 2\.0\.0 \(\d{4}-\d{2}-\d{2}\).*/); // ## 2.0.0 (2021-01-01)
  expect(result.bumpfile).toStrictEqual("2.0.0");
  expect(result.tag).toStrictEqual("v2.0.0");
});

test("first release, with minMajorVersion", async () => {
  const result = await testBump({
    options: { minMajorVersion: 1 },
  });
  expect(result.version).toStrictEqual("1.0.0");
  expect(result.changelog).toMatch(/.*## 1\.0\.0 \(\d{4}-\d{2}-\d{2}\).*/); // ## 1.0.0 (2021-01-01)
  expect(result.bumpfile).toStrictEqual("1.0.0");
  expect(result.tag).toStrictEqual("v1.0.0");
});

test("first release, with minor", async () => {
  const result = await testBump({
    options: { majorVersion: 2, minorVersion: 1 },
  });
  expect(result.version).toStrictEqual("2.1.0");
  expect(result.changelog).toMatch(/.*## 2\.1\.0 \(\d{4}-\d{2}-\d{2}\).*/); // ## 2.0.0 (2021-01-01)
  expect(result.bumpfile).toStrictEqual("2.1.0");
  expect(result.tag).toStrictEqual("v2.1.0");
});

test("first release, with new major", async () => {
  const result = await testBump({
    options: { majorVersion: 4 },
    commits: [{ message: "v1", tag: "v1.2.3" }, { message: "commit2" }],
  });
  expect(result.version).toStrictEqual("4.0.0");
  expect(result.changelog.includes("## [4.0.0]")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("4.0.0");
  expect(result.tag).toStrictEqual("v4.0.0");
});

test("first release, with new minor", async () => {
  const result = await testBump({
    options: { majorVersion: 4, minorVersion: 3 },
    commits: [{ message: "v1", tag: "v1.2.3" }, { message: "commit2" }],
  });
  expect(result.version).toStrictEqual("4.3.0");
  expect(result.changelog.includes("## [4.3.0]")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("4.3.0");
  expect(result.tag).toStrictEqual("v4.3.0");
});

test("first release, with prerelease", async () => {
  const result = await testBump({
    options: { prerelease: "beta" },
  });
  expect(result.version).toStrictEqual("0.0.0-beta.0");
  expect(result.changelog.includes("## 0.0.0-beta.0")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("0.0.0-beta.0");
});

test("two initial releases, with prerelease", async () => {
  const resultA = await testBump({
    options: { prerelease: "beta" },
  });
  expect(resultA.version).toStrictEqual("0.0.0-beta.0");
  expect(resultA.changelog.includes("## 0.0.0-beta.0")).toBeTruthy();
  expect(resultA.bumpfile).toStrictEqual("0.0.0-beta.0");

  const resultB = await testBump({
    options: { prerelease: "beta" },
  });
  expect(resultB.version).toStrictEqual("0.0.0-beta.1");
  expect(resultB.changelog.includes("## 0.0.0-beta.1")).toBeTruthy();
  expect(resultB.bumpfile).toStrictEqual("0.0.0-beta.1");
});

test("first release, with prefix", async () => {
  const result = await testBump({
    options: { tagPrefix: "prefix/" },
  });
  expect(result.version).toStrictEqual("0.0.0");
  expect(result.changelog.includes("## 0.0.0")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("0.0.0");
  expect(result.tag).toStrictEqual("prefix/v0.0.0");
});

test("select latest", async () => {
  const result = await testBump({
    commits: [
      { message: "first version", tag: "v1.1.0" },
      { message: "second version", tag: "v1.2.0" },
      { message: "fix: bug" },
      { message: "fix: another bug" },
    ],
  });

  expect(result.version).toEqual("1.2.1");
  expect(result.changelog.includes("Bug Fixes")).toBeTruthy();
  expect(result.changelog.includes("another bug")).toBeTruthy();
  expect(result.changelog.includes("bug")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("1.2.1");
  expect(result.tag).toStrictEqual("v1.2.1");
});

test("select latest, with prefix", async () => {
  const result = await testBump({
    options: { tagPrefix: "prefix/" },
    commits: [
      { message: "first version", tag: "prefix/v1.1.0" },
      { message: "unrelated version", tag: "v2.0.0" },
      { message: "feat: feature 1", tag: "prefix/v1.2.0" },
      { message: "fix: bug" },
      { message: "fix: another bug" },
    ],
  });

  expect(result.version).toEqual("1.2.1");
  expect(result.changelog.includes("Bug Fixes")).toBeTruthy();
  expect(result.changelog.includes("another bug")).toBeTruthy();
  expect(result.changelog.includes("bug")).toBeTruthy();
  expect(result.changelog.includes("feature 1")).toBeFalsy();
  expect(result.bumpfile).toStrictEqual("1.2.1");
  expect(result.tag).toStrictEqual("prefix/v1.2.1");
});

test("select latest with major", async () => {
  const commits = [
    { message: "first version", tag: "v1.1.0" },
    { message: "boom", tag: "v10.21.0" },
    { message: "second version", tag: "v1.2.0" },
    { message: "fix: bug" },
    { message: "fix: another bug" },
  ];

  const result1 = await testBump({
    options: { majorVersion: 1 },
    commits: commits,
  });

  expect(result1.version).toEqual("1.2.1");
  expect(result1.bumpfile).toEqual("1.2.1");
  expect(result1.tag).toStrictEqual("v1.2.1");

  const result10 = await testBump({
    options: { majorVersion: 10 },
    commits: commits,
  });

  expect(result10.version).toEqual("10.21.1");
  expect(result10.bumpfile).toStrictEqual("10.21.1");
  expect(result10.tag).toStrictEqual("v10.21.1");
});

test("select latest with minor", async () => {
  const commits = [
    { message: "first version", tag: "v1.1.0" },
    { message: "boom", tag: "v10.21.0" },
    { message: "second version", tag: "v1.2.0" },
    { message: "fix: bug" },
    { message: "fix: another bug" },
  ];

  const result11 = await testBump({
    options: { majorVersion: 1, minorVersion: 1 },
    commits: commits,
  });

  expect(result11.version).toEqual("1.1.1");
  expect(result11.bumpfile).toEqual("1.1.1");
  expect(result11.tag).toStrictEqual("v1.1.1");

  const result1 = await testBump({
    options: { majorVersion: 1 },
    commits: commits,
  });

  expect(result1.version).toEqual("1.2.1");
  expect(result1.bumpfile).toEqual("1.2.1");
  expect(result1.tag).toStrictEqual("v1.2.1");

  const result10 = await testBump({
    options: { majorVersion: 10 },
    commits: commits,
  });

  expect(result10.version).toEqual("10.21.1");
  expect(result10.bumpfile).toStrictEqual("10.21.1");
  expect(result10.tag).toStrictEqual("v10.21.1");
});

test("select latest, with prerelease", async () => {
  const result = await testBump({
    options: {
      prerelease: "beta",
    },
    commits: [
      { message: "first version", tag: "v1.1.0" },
      { message: "feat: new feature" },
    ],
  });

  expect(result.version).toEqual("1.2.0-beta.0");
  expect(result.changelog.includes("Features")).toBeTruthy();
  expect(result.changelog.includes("new feature")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("1.2.0-beta.0");
  expect(result.tag).toStrictEqual("v1.2.0-beta.0");
});

test("bump with major equal to 0", async () => {
  const commits = [
    { message: "first version", tag: "v0.1.0" },
    { message: "second version", tag: "v0.1.1" },
    { message: "stable branch", tag: "v1.0.0" },
    { message: "fix: bug" },
  ];

  const result1 = await testBump({
    options: { majorVersion: 0 },
    commits: commits,
  });

  expect(result1.version).toEqual("0.1.2");
  expect(result1.bumpfile).toEqual("0.1.2");
  expect(result1.tag).toStrictEqual("v0.1.2");
});

test("bump with major and minior equal to 0", async () => {
  const commits = [
    { message: "first version", tag: "v0.0.1" },
    { message: "second version", tag: "v0.1.1" },
    { message: "stable branch", tag: "v1.0.0" },
    { message: "fix: bug" },
  ];

  const result1 = await testBump({
    options: { majorVersion: 0, minorVersion: 0 },
    commits: commits,
  });

  expect(result1.version).toEqual("0.0.2");
  expect(result1.bumpfile).toEqual("0.0.2");
  expect(result1.tag).toStrictEqual("v0.0.2");
});

test("already tagged version is not bumped again", async () => {
  const result = await testBump({
    commits: [
      { message: "first version", tag: "v1.1.0" },
      { message: "second version", tag: "v1.2.0" },
      { message: "fix: bug", tag: "v1.2.1" },
    ],
  });

  expect(result.version).toEqual("1.2.1");
  expect(result.changelog.includes("Bug Fixes")).toBeTruthy();
  expect(result.changelog.includes("bug")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("1.2.1");
  expect(result.tag).toStrictEqual("v1.2.1");
});

test("bump fails due to crossing major version", async () => {
  const commits = [
    { message: "first version", tag: "v1.1.0" },
    { message: "boom", tag: "v10.21.0" },
    { message: "second version", tag: "v1.2.0" },
    {
      message: "fix: another bug\n\nBREAKING CHANGE: cause major version bump",
    },
    { message: "fix: bug" },
  ];

  const promise = testBump({
    options: { majorVersion: 1 },
    commits: commits,
  });

  await expect(promise).rejects.toThrow(
    /bump failed: this branch is configured to only publish v1 releases - bump resulted in 2.0.0/
  );
});

test("bump fails due to crossing minor version", async () => {
  const commits = [
    { message: "first version", tag: "v1.1.0" },
    { message: "boom", tag: "v10.21.0" },
    { message: "second version", tag: "v1.2.0" },
    {
      message: "feat: new feature",
    },
    { message: "fix: bug" },
  ];

  const promise = testBump({
    options: { majorVersion: 1, minorVersion: 1 },
    commits: commits,
  });

  await expect(promise).rejects.toThrow(
    /bump failed: this branch is configured to only publish v1.1 releases - bump resulted in 1.2/
  );
});

test("customization to versionrc reflects to changelog", async () => {
  const commits = [
    { message: "first version", tag: "v1.1.0" },
    { message: "fix: bug" },
  ];
  const result = await testBump({
    options: { versionrcOptions: { compareUrlFormat: "testCompareUrl" } },
    commits,
  });

  await expect(result.changelog).toContain("testCompareUrl");
});

test("minMajorVersion increases major version if current release is lower", async () => {
  const result = await testBump({
    options: { minMajorVersion: 1 },
    commits: [{ message: "v0", tag: "v0.1.2" }, { message: "commit2" }],
  });
  expect(result.version).toStrictEqual("1.0.0");
  expect(result.changelog.includes("## [1.0.0]")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("1.0.0");
  expect(result.tag).toStrictEqual("v1.0.0");
});

test("minMajorVersion keeps release version if version is equal", async () => {
  const result = await testBump({
    options: { minMajorVersion: 1 },
    commits: [{ message: "v1", tag: "v1.2.3" }, { message: "commit2" }],
  });
  expect(result.version).toStrictEqual("1.2.4");
  expect(result.changelog.includes("## [1.2.4]")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("1.2.4");
  expect(result.tag).toStrictEqual("v1.2.4");
});

test("minMajorVersion has no effect if version is higher", async () => {
  const result = await testBump({
    options: { minMajorVersion: 1 },
    commits: [{ message: "v2", tag: "v2.3.3" }, { message: "commit2" }],
  });
  expect(result.version).toStrictEqual("2.3.4");
  expect(result.changelog.includes("## [2.3.4]")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("2.3.4");
  expect(result.tag).toStrictEqual("v2.3.4");
});

test("minMajorVersion throws if set together with majorVersion", async () => {
  await expect(
    testBump({
      options: { minMajorVersion: 1, majorVersion: 1 },
      commits: [{ message: "v0", tag: "v0.1.2" }, { message: "commit2" }],
    })
  ).rejects.toThrow(/minMajorVersion and majorVersion cannot be used together/);
});

test("minorVersion throws if used without majorVersion", async () => {
  await expect(
    testBump({
      options: { minorVersion: 1 },
      commits: [{ message: "v0", tag: "v0.1.2" }, { message: "commit2" }],
    })
  ).rejects.toThrow(/minorVersion and majorVersion must be used together/);
});

test("second prerelease, no other releases", async () => {
  const result = await testBump({
    options: {
      prerelease: "beta",
    },
    commits: [
      { message: "fix(test): testing", tag: "v1.0.0-beta.0" },
      { message: "fix(test): new fix" },
    ],
  });
  expect(result.version).toStrictEqual("1.0.0-beta.1");
});

test("first prerelease after promotion, with prerelease", async () => {
  const result = await testBump({
    options: {
      prerelease: "beta",
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): testing2", tag: "v1.0.1-beta.1" },
      { message: "fix(test): testing3", tag: "v1.0.1" },
      { message: "fix(test): new fix" },
    ],
  });

  expect(result.version).toEqual("1.0.2-beta.0");
});

test("second prerelease after the first prerelease", async () => {
  const result = await testBump({
    options: {
      prerelease: "beta",
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): new fix" },
    ],
  });

  expect(result.version).toEqual("1.0.1-beta.1");
});

//----------------------------------------------------------------------------------------------------------------------------------

describe("Releasable Commits Configurations", () => {
  test("first release with no config is not skipped", async () => {
    const result = await testBump({
      commits: [{ message: "feat: first feature" }],
    });
    expect(result.version).toEqual("0.0.0");
  });

  test("first release with config is not skipped", async () => {
    const result = await testBump({
      commits: [{ message: "chore: would be ignored, but is first release" }],
      options: {
        releasableCommits: ReleasableCommits.featuresAndFixes().cmd,
      },
    });
    expect(result.version).toEqual("0.0.0");
  });

  test("will bump if at least one type matches", async () => {
    const result = await testBump({
      options: {
        releasableCommits: ReleasableCommits.ofType(["fix"]).cmd,
      },
      commits: [
        { message: "first version", tag: "v1.1.0" },
        { message: "second version", tag: "v1.2.0" },
        { message: "docs: update Readme" },
        { message: "fix: no more bugs" },
      ],
    });
    expect(result.version).toEqual("1.2.1");
  });

  test("will bump if type with scope matches", async () => {
    const result = await testBump({
      options: {
        releasableCommits: ReleasableCommits.ofType(["fix"]).cmd,
      },
      commits: [
        { message: "first version", tag: "v1.1.0" },
        { message: "second version", tag: "v1.2.0" },
        { message: "docs: update Readme" },
        { message: "fix(package): no more bugs" },
      ],
    });
    expect(result.version).toEqual("1.2.1");
  });

  test("regression: bump regex should accept all characters", async () => {
    const result = await testBump({
      options: {
        releasableCommits: ReleasableCommits.featuresAndFixes().cmd,
      },
      commits: [
        { message: "first version", tag: "v1.1.0" },
        { message: "second version", tag: "v1.2.0" },
        { message: "docs: update Readme" },
        {
          message:
            "feat(abcdefghijklmnopqrstuvwxyz): abcdefghijklmnopqrstuvwxyz",
        },
      ],
    });
    expect(result.version).toEqual("1.3.0");
  });

  test("will not bump if no change in a relevant path", async () => {
    const result = await testBump({
      options: {
        releasableCommits: ReleasableCommits.featuresAndFixes("subproject").cmd,
      },
      commits: [
        { message: "first version", tag: "v1.1.0" },
        { message: "second version", tag: "v1.2.0" },
        { message: "feat: unrelated", path: "unrelated/dummy.txt" },
      ],
    });
    expect(result.version).toEqual("1.2.0");
  });

  test("will bump if change was made to a relevant path", async () => {
    const result = await testBump({
      options: {
        releasableCommits: ReleasableCommits.featuresAndFixes("subproject").cmd,
      },
      commits: [
        { message: "first version", tag: "v1.1.0" },
        { message: "second version", tag: "v1.2.0" },
        { message: "feat: unrelated", path: "unrelated/dummy.txt" },
        { message: "feat: relevant", path: "subproject/dummy.txt" },
      ],
    });
    expect(result.version).toEqual("1.3.0");
  });
});

//----------------------------------------------------------------------------------------------------------------------------------
describe("newline at the end of version file", () => {
  test("created version file ends with a newline", async () => {
    const result = await testBump();

    const file = await fs.readFile(
      join(result.workdir, "version.json"),
      "utf-8"
    );
    expect(file.endsWith("\n")).toBe(true);
  });

  test("existing version file keeps newline at the end", async () => {
    withProjectDir((projectdir) => {
      const project = new TypeScriptProject({
        defaultReleaseBranch: "main",
        name: "test",
        outdir: projectdir,
        release: true,
      });
      project.synth();

      // Commit files so the bump will work
      execSync("git add .", { cwd: projectdir });
      execSync('git commit -m "chore: init"', { cwd: projectdir });

      // Bump the version
      execProjenCLI(projectdir, ["bump"]);

      const file = readFileSync(join(projectdir, "package.json"), "utf-8");
      expect(file.endsWith("\n")).toBe(true);
    });
  });
});

//----------------------------------------------------------------------------------------------------------------------------------

async function testBump(
  opts: {
    options?: Partial<BumpOptions>;
    commits?: { message: string; tag?: string; path?: string }[];
    /**
     * Run git init and other setup
     * @default true
     */
    init?: boolean;
    /**
     * Print output to stdout, useful for debugging
     * @default false
     */
    printOutput?: boolean;
  } = {}
) {
  const stdio = opts.printOutput ? "inherit" : "pipe";
  const workdir = mkdtempSync(join(tmpdir(), "bump-test-"));

  const git = (cmd: string) =>
    execSync(`git ${cmd}`, {
      cwd: workdir,
      stdio,
      timeout: 10_000, // let's try to catch hanging processes sooner than later
    });

  // init a git repository
  if (opts.init ?? true) {
    git("init -b main");
    git('config user.email "you@example.com"');
    git('config user.name "Your Name"');
    git("config commit.gpgsign false");
    git("config tag.gpgsign false");
  }
  const commit = async (message: string, path: string = "dummy.txt") => {
    const filePath = join(workdir, path);
    await fs.mkdir(dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, message);
    git("add .");
    git(`commit -F "${filePath}"`);
  };

  await commit("initial commit");

  for (const c of opts.commits ?? []) {
    await commit(c.message, c.path);
    if (c.tag) {
      git(`tag ${c.tag}`);
    }
  }

  await bump(workdir, {
    changelog: "changelog.md",
    versionFile: "version.json",
    bumpFile: "bump.txt",
    releaseTagFile: "releasetag.txt",
    ...opts.options,
  });

  return {
    version: JSON.parse(
      await fs.readFile(join(workdir, "version.json"), "utf-8")
    ).version,
    changelog: await fs.readFile(join(workdir, "changelog.md"), "utf8"),
    bumpfile: await fs.readFile(join(workdir, "bump.txt"), "utf8"),
    tag: await fs.readFile(join(workdir, "releasetag.txt"), "utf8"),
    workdir,
  };
}
