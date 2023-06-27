import { execSync } from "child_process";
import { promises as fs, mkdtempSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
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

test("first release, with prerelease", async () => {
  const result = await testBump({
    options: { prerelease: "beta" },
  });
  expect(result.version).toStrictEqual("0.0.0-beta.0");
  expect(result.changelog.includes("## 0.0.0-beta.0")).toBeTruthy();
  expect(result.bumpfile).toStrictEqual("0.0.0-beta.0");
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

test("same commit same prerelease on beta branch", async () => {
  const result = await testBump({
    options: {
      prerelease: "beta",
      majorVersion: 1,
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): testing2", tag: "v1.0.1-beta.1" },
    ],
  });

  expect(result.version).toEqual("1.0.1-beta.1");
});

test("same commit prerelease on regular branch", async () => {
  const result = await testBump({
    options: {
      majorVersion: 1,
      releaseSameCommitOnDifferentBranch: true,
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): testing2", tag: "v1.0.1-beta.1" },
    ],
  });

  expect(result.version).toEqual("1.0.1");
});

test("same commit different prereleases", async () => {
  const result = await testBump({
    options: {
      prerelease: "pre",
      majorVersion: 1,
      releaseSameCommitOnDifferentBranch: true,
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): testing2", tag: "v1.0.1-beta.1" },
    ],
  });

  expect(result.version).toEqual("1.0.1-pre.0");
});

test("same commit same reqular releases", async () => {
  const result = await testBump({
    options: {
      majorVersion: 1,
    },
    commits: [
      { message: "first version", tag: "v1.0.0" },
      { message: "fix(test): testing", tag: "v1.0.1-beta.0" },
      { message: "fix(test): testing2", tag: "v1.0.1" },
    ],
  });

  expect(result.version).toEqual("1.0.1");
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
      execSync('git commit -m"chore: init"', { cwd: projectdir });

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
    commits?: { message: string; tag?: string }[];
  } = {}
) {
  const workdir = mkdtempSync(join(tmpdir(), "bump-test-"));

  const git = (cmd: string) =>
    execSync(`git ${cmd}`, {
      cwd: workdir,
      stdio: "inherit",
      timeout: 10_000, // let's try to catch hanging processes sooner than later
    });

  // init a git repository
  git("init -b main");
  git('config user.email "you@example.com"');
  git('config user.name "Your Name"');
  git("config commit.gpgsign false");
  git("config tag.gpgsign false");

  const commit = async (message: string) => {
    await fs.writeFile(join(workdir, "dummy.txt"), message);
    git("add .");
    git(`commit -m "${message}"`);
  };

  await commit("initial commit");

  for (const c of opts.commits ?? []) {
    await commit(c.message);
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
