import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import * as semver from "semver";
import * as YAML from "yaml";
import { Project, DependencyType, Component } from "../../src";
import {
  YarnCacheMigrationMode,
  YarnChecksumBehavior,
  YarnNodeLinker,
  YarnNpmPublishAccess,
} from "../../src/javascript";
import {
  NodePackage,
  NodePackageManager,
  NpmAccess,
} from "../../src/javascript/node-package";
import { minVersion } from "../../src/javascript/util";
import { TaskRuntime } from "../../src/task-runtime";
import { mkdtemp, synthSnapshot, TestProject } from "../util";

/**
 * Mocks a yarn install, writing to yarn.lock
 * and creating package.json files in node_modules for all dependencies
 * Will "install" the max version that complies with all dependency ranges
 * NOT A PERFECT MODEL OF YARN. JUST CLOSE ENOUGH.
 * @param outdir Test project's outdir, where package.json and node_modules live
 * @param latestPackages Package name and version to "install" for "*" deps
 * @param hooks Optional record by package name of hooks to execute on mock "install". Should return manifest.
 */
function mockYarnInstall(
  outdir: string,
  latestPackages: Record<string, string>,
  hooks?: Record<
    string,
    (manifest: Record<string, any>, manifestPath: string) => Record<string, any>
  >
) {
  const pkgJson = JSON.parse(
    readFileSync(join(outdir, "package.json"), "utf-8")
  );
  const yarnLock: Record<string, string> = {};
  const depRanges: Record<string, string[]> = {};
  const depVersions: Record<string, string[]> = {};
  const depTypes = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "bundledDependencies",
    "optionalDependencies",
  ];
  for (const depType of depTypes) {
    // Look up the ranges for each dependency
    for (const [depName, depVer] of Object.entries(pkgJson[depType] ?? {})) {
      // init arrays if undefined
      depRanges[depName] = depRanges[depName] ?? [];
      depVersions[depName] = depVersions[depName] ?? [];
      if (depVer === "*") {
        if (!latestPackages[depName]) {
          throw new Error(
            `No latest package defined for dependency ${depName}`
          );
        }
        depRanges[depName].push("*");
        depVersions[depName].push(latestPackages[depName]);
      } else {
        const ver = minVersion(`${depVer}`);
        if (!ver) {
          throw new Error(
            `unable to determine min version for ${depName}@${depVer}`
          );
        }
        // If we're given a latest package, no dependency can require higher
        if (
          latestPackages[depName] &&
          semver.validRange(`${ver}`) &&
          semver.gt(`${ver}`, latestPackages[depName])
        ) {
          throw new Error(
            `${depType} requirement ${depName}@${depVer} exceeds provided "latest" version ${latestPackages[depName]}`
          );
        }
        depRanges[depName].push(`${depVer}`);
        // Also take the min version as a valid install version
        depVersions[depName].push(ver);
      }
    }
  }
  // Resolve version to install that satisfies all ranges for dep
  for (const dep of Object.keys(depRanges)) {
    let installVersion: string | null;
    if (!semver.validRange(depVersions[dep][0])) {
      // if a dependency is "file:..." or something else, just install that
      installVersion = depVersions[dep][0];
    } else {
      installVersion = semver.maxSatisfying(
        depVersions[dep],
        depRanges[dep].join(" || ")
      );
    }
    if (!installVersion) {
      throw new Error(`No version given satisfies all constraints on ${dep}`);
    }
    mkdirSync(join(outdir, `node_modules/${dep}`), { recursive: true });
    const manifestHook = hooks?.[dep] ?? ((manifest) => manifest);
    const manifestPath = join(outdir, `node_modules/${dep}/package.json`);
    writeFileSync(
      manifestPath,
      JSON.stringify(
        manifestHook(
          {
            name: `${dep}`,
            version: `${installVersion}`,
          },
          manifestPath
        )
      )
    );
    // Not accurate to yaml.lock v1 format, but close enough.
    yarnLock[
      `${depRanges[dep].map((range) => `${dep}@${range}`).join(", ")}`
    ] = `version "${installVersion}"`;
  }
  // Use double quoted keys just to make output more predictable
  writeFileSync(
    join(outdir, "yarn.lock"),
    YAML.stringify(yarnLock, { defaultKeyType: "QUOTE_DOUBLE" })
  );
}

afterEach(() => {
  jest.resetAllMocks();
  jest.restoreAllMocks();
});

test("all bugs field present", () => {
  const project = new TestProject();

  new NodePackage(project, {
    bugsEmail: "bugs@foobar.local",
    bugsUrl: "bugs.foobar.local",
  });

  expect(synthSnapshot(project)["package.json"].bugs).toMatchSnapshot();
});

test("no bugs field present", () => {
  const project = new TestProject();

  new NodePackage(project, {});

  const snps = synthSnapshot(project);

  expect(snps["package.json"].bugs).toMatchSnapshot();

  expect(snps["package.json"].bugs).toStrictEqual(undefined);
});

test("single bugs field present", () => {
  const project = new TestProject();

  const _email = "bugs@foobar.local";

  new NodePackage(project, {
    bugsEmail: _email,
  });

  const snps = synthSnapshot(project);

  expect(snps["package.json"].bugs).toMatchSnapshot();

  expect(snps["package.json"].bugs.url).toStrictEqual(undefined);
  expect(snps["package.json"].bugs.email).toStrictEqual(_email);
});

test('lockfile updated (install twice) after "*"s are resolved', () => {
  const taskMock = jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "2.1.3" });
    });

  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project);

  pkg.addDeps("ms");

  project.synth();

  const yarnLockPath = join(project.outdir, "yarn.lock");
  const yarnLock: string | undefined = readFileSync(yarnLockPath, "utf8");

  expect(yarnLock).toStrictEqual('"ms@^2.1.3": version "2.1.3"\n');
  expect(taskMock).toBeCalledTimes(2);
});

test("install only once if all versions are resolved", () => {
  const taskMock = jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockReturnValueOnce();
  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project);

  pkg.addDeps("ms@^2");

  project.synth();

  expect(taskMock).toBeCalledTimes(1);
});

test("no install if package.json did not change at all", () => {
  const taskMock = jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockReturnValueOnce();
  const outdir = mkdtemp({ cleanup: false });

  const orig = {
    name: "@projen/test",
    scripts: {
      build: "npx projen build",
      compile: "npx projen compile",
      default: "npx projen default",
      eject: "npx projen eject",
      package: "npx projen package",
      "post-compile": "npx projen post-compile",
      "pre-compile": "npx projen pre-compile",
      test: "npx projen test",
    },
    dependencies: {
      ms: "^2",
    },
    main: "lib/index.js",
    license: "Apache-2.0",
    version: "0.0.0",
    "//": '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
  };

  writeFileSync(
    join(outdir, "package.json"),
    JSON.stringify(orig, undefined, 2) + `\n`
  );
  mkdirSync(join(outdir, "node_modules")); // <-- also causes an "install"

  const project = new Project({ name: "@projen/test", outdir });
  project.addExcludeFromCleanup("package.json");
  const pkg = new NodePackage(project);

  pkg.addDeps("ms@^2");

  project.synth();
  expect(taskMock).not.toBeCalled();
});

test('"*" peer dependencies are pinned in devDependencies', () => {
  // Post-synth dependency version resolution uses installed package from node_modules folder
  // Mock install command to add this folder with a fixed dependency version,
  // mimicking yarn installing the latest package for "*"
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "1.2.3" });
    });

  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project, {
    peerDependencyOptions: {
      pinnedDevDependency: true,
    },
  });

  pkg.addPeerDeps("ms");

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ ms: "^1.2.3" });
  expect(pkgFile.devDependencies).toStrictEqual({ ms: "1.2.3" });
});

test("manually set devDependencies are not changed when a peerDependency is added", () => {
  // Post-synth dependency version resolution uses installed package from node_modules folder
  // Mock install command to add this folder with a fixed dependency version,
  // mimicking yarn installing the latest package for "*"
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "1.3.4" });
    });

  const project = new Project({ name: "test" });
  const orig = {
    name: "test",
    devDependencies: {
      ms: "^1.3.0",
    },
    main: "lib/index.js",
    license: "Apache-2.0",
    version: "0.0.0",
    "//": '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
  };

  writeFileSync(
    join(project.outdir, "package.json"),
    JSON.stringify(orig, undefined, 2)
  );

  const pkg = new NodePackage(project, {
    peerDependencyOptions: {
      pinnedDevDependency: true,
    },
  });

  pkg.addPeerDeps("ms");

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ ms: "^1.3.4" });
  expect(pkgFile.devDependencies).toStrictEqual({ ms: "^1.3.0" });
});

test("devDependencies are not pinned by peerDependencies if a regular (runtime) dependency also exists", () => {
  // Post-synth dependency version resolution uses installed package from node_modules folder
  // Mock install command to add this folder with a fixed dependency version,
  // mimicking yarn installing the latest package for "*"
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "1.3.8" });
    });

  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project, {
    peerDependencyOptions: {
      pinnedDevDependency: true,
    },
  });

  pkg.addDeps("ms");
  pkg.addPeerDeps("ms");

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ ms: "^1.3.8" });
  expect(pkgFile.dependencies).toStrictEqual({ ms: "^1.3.8" });
  expect(pkgFile.devDependencies).toBeUndefined();
});

test("devDependencies are not pinned by peerDependencies if pinnedDevDependency is false", () => {
  // Post-synth dependency version resolution uses installed package from node_modules folder
  // Mock install command to add this folder with a fixed dependency version,
  // mimicking yarn installing the latest package for "*"
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "1.4.0" });
    });

  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project, {
    peerDependencyOptions: {
      pinnedDevDependency: false,
    },
  });

  pkg.addPeerDeps("ms");

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ ms: "^1.4.0" });
  expect(pkgFile.devDependencies).toBeUndefined();
});

test("bundled dependencies may not occur as peerDependencies", () => {
  const project = new Project({ name: "test" });
  new NodePackage(project, {
    peerDeps: ["my-package"],
    bundledDeps: ["my-package"],
  });

  expect(() => project.synth()).toThrow(
    /unable to bundle "my-package": it cannot appear as a peer dependency/
  );
});

test("bundled dependencies may not occur as devDependencies", () => {
  const project = new Project({ name: "test" });
  new NodePackage(project, {
    devDeps: ["my-package"],
    bundledDeps: ["my-package"],
  });

  expect(() => project.synth()).toThrow(
    /unable to bundle "my-package": it cannot appear as a devDependency/
  );
});

test("file path dependencies are respected", () => {
  // Post-synth dependency version resolution uses installed package from node_modules folder
  // Mock install command to add this folder with a fixed dependency version,
  // mimicking yarn installing the latest package for "*"
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "file:../ms" });
    });

  const project = new Project({ name: "test" });
  const pkg = new NodePackage(project, {
    peerDependencyOptions: {
      pinnedDevDependency: false,
    },
  });

  pkg.addPeerDeps("ms@file:../ms");

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ ms: "file:../ms" });
  expect(pkgFile.devDependencies).toBeUndefined();
});

test("local dependencies can be specified using 'file:' prefix", () => {
  const localDepPath = mkdtemp({ cleanup: false });
  const localPackage = {
    name: "local-dep",
    version: "0.0.0",
  };

  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: `file:${localDepPath}` });
    });

  writeFileSync(
    join(localDepPath, "package.json"),
    JSON.stringify(localPackage, undefined, 2)
  );

  const project = new TestProject();
  const pkg = new NodePackage(project);
  pkg.addPeerDeps(`file:${localDepPath}`);

  project.synth();

  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.peerDependencies).toStrictEqual({ "local-dep": localDepPath });
});

[
  NodePackageManager.YARN,
  NodePackageManager.YARN2,
  NodePackageManager.YARN_CLASSIC,
  NodePackageManager.YARN_BERRY,
].forEach((packageManager) => {
  test(`${packageManager} resolutions`, () => {
    const project = new TestProject();

    const pkg = new NodePackage(project, {
      packageManager,
    });

    pkg.addPackageResolutions("some-dep@1.0.0", "other-dep");

    expect(
      project.deps.all.filter((dep) => dep.type === DependencyType.OVERRIDE)
    ).toEqual([
      { name: "other-dep", type: "override" },
      { name: "some-dep", type: "override", version: "1.0.0" },
    ]);
    const snps = synthSnapshot(project);

    expect(snps["package.json"].resolutions).toBeDefined();
    expect(snps["package.json"]).toMatchSnapshot();
  });
});

test("npm overrides", () => {
  const project = new TestProject();

  const pkg = new NodePackage(project, {
    packageManager: NodePackageManager.NPM,
  });

  pkg.addPackageResolutions("some-dep@1.0.0", "other-dep");

  expect(
    project.deps.all.filter((dep) => dep.type === DependencyType.OVERRIDE)
  ).toEqual([
    { name: "other-dep", type: "override" },
    { name: "some-dep", type: "override", version: "1.0.0" },
  ]);
  const snps = synthSnapshot(project);

  expect(snps["package.json"].overrides).toBeDefined();
  expect(snps["package.json"]).toMatchSnapshot();
});

test("removed override dependency will not be rendered in overrides", () => {
  const project = new TestProject();

  const pkg = new NodePackage(project, {
    packageManager: NodePackageManager.NPM,
  });

  pkg.addDeps("some-dep@1.0.0");
  pkg.addPackageResolutions("some-dep@1.0.0", "other-dep@another-dep@1.2.3");
  project.deps.removeDependency("some-dep", DependencyType.OVERRIDE);

  const snps = synthSnapshot(project);
  const pkgJson = snps["package.json"];

  expect(pkgJson).toHaveProperty("dependencies.some-dep", "1.0.0");
  expect(pkgJson).not.toHaveProperty("overrides.some-dep");
});

test("pnpm overrides", () => {
  const project = new TestProject();

  const pkg = new NodePackage(project, {
    packageManager: NodePackageManager.PNPM,
  });

  pkg.addPackageResolutions("some-dep@1.0.0", "other-dep");

  expect(
    project.deps.all.filter((dep) => dep.type === DependencyType.OVERRIDE)
  ).toEqual([
    { name: "other-dep", type: "override" },
    { name: "some-dep", type: "override", version: "1.0.0" },
  ]);
  const snps = synthSnapshot(project);

  expect(snps["package.json"].pnpm.overrides).toBeDefined();
  expect(snps["package.json"]).toMatchSnapshot();
});

test("pnpm overrides in root project only, not subprojects", () => {
  const project = new TestProject();
  new NodePackage(project, {
    packageManager: NodePackageManager.PNPM,
  });

  const subProject = new Project({
    name: "sub-project",
    parent: project,
    outdir: "packages/sub-project",
  });
  new NodePackage(subProject, {
    packageManager: NodePackageManager.PNPM,
  });

  const snps = synthSnapshot(project);

  expect(snps["package.json"].pnpm).toBeDefined();
  expect(snps["package.json"]).toMatchSnapshot();

  expect(snps["packages/sub-project/package.json"].pnpm).not.toBeDefined();
  expect(snps["packages/sub-project/package.json"]).toMatchSnapshot();
});

test("typesVersions is not managed by projen, but can be manipulated", () => {
  // ARRANGE
  const outdir = mkdtemp();
  const orig = {
    name: "test",
    main: "lib/index.js",
    license: "Apache-2.0",
    version: "0.0.0",
    typesVersions: { "<=3.9": { "*": ["ts3.9/*"] } },
    "//": '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
  };

  writeFileSync(
    join(outdir, "package.json"),
    JSON.stringify(orig, undefined, 2)
  );

  // ACT
  const project = new Project({ name: "test", outdir });
  const pkg = new NodePackage(project);
  pkg.file.addOverride("typesVersions.>=4\\.0", { "*": ["ts4.0/*"] });

  project.synth();

  // ASSERT
  const pkgFile = JSON.parse(
    readFileSync(join(project.outdir, "package.json"), "utf-8")
  );

  expect(pkgFile.typesVersions).toStrictEqual({
    "<=3.9": { "*": ["ts3.9/*"] },
    ">=4.0": { "*": ["ts4.0/*"] },
  });
});

test("tryResolveDependencyVersion", () => {
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(this.workdir, { ms: "2.1.3" });
    });
  const outdir = mkdtemp();
  const project = new TestProject({ outdir });

  const pkg = new NodePackage(project);
  pkg.addDeps("typescript@5.0.0", "ms@*");
  project.synth();

  expect(pkg.tryResolveDependencyVersion("typescript")).toEqual("5.0.0");
  expect(project.deps.tryGetDependency("ms")?.version).toEqual("*");
  expect(pkg.tryResolveDependencyVersion("ms")).toEqual("2.1.3");
  expect(pkg.tryResolveDependencyVersion("foo")).toEqual(undefined);
});

test("tryResolveDependencyVersion resolves with custom package exports.", () => {
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(
        this.workdir,
        { rollup: "3.21.1" },
        {
          rollup: (manifest, manifestPath) => {
            // create default entrypoint so node is able to resolve it.
            const entrypoint = join(dirname(manifestPath), "dist", "rollup.js");
            mkdirSync(dirname(entrypoint), { recursive: true });
            writeFileSync(entrypoint, "");
            return {
              ...manifest,
              exports: {
                ".": {
                  require: "./dist/rollup.js",
                },
              },
            };
          },
        }
      );
    });
  const outdir = mkdtemp();
  const project = new TestProject({ outdir });

  const pkg = new NodePackage(project);
  pkg.addDeps("rollup@*");
  project.synth();

  expect(project.deps.tryGetDependency("rollup")?.version).toEqual("*");
  expect(pkg.tryResolveDependencyVersion("rollup")).toEqual("3.21.1");
});

test("tryResolveDependencyVersion resolves with no package.json or default export with default conditions.", () => {
  jest
    .spyOn(TaskRuntime.prototype, "runTask")
    .mockImplementation(function (this: TaskRuntime, command) {
      expect(command).toMatch("install");
      mockYarnInstall(
        this.workdir,
        { "@types/js-yaml": "4.0.5" },
        {
          "@types/js-yaml": (manifest) => {
            return {
              ...manifest,
              exports: {
                ".": {
                  types: {
                    import: "./index.d.mts",
                    default: "./index.d.ts",
                  },
                },
              },
            };
          },
        }
      );
    });
  const outdir = mkdtemp();
  const project = new TestProject({ outdir });

  const pkg = new NodePackage(project);
  pkg.addDeps("@types/js-yaml@*");
  project.synth();

  expect(project.deps.tryGetDependency("@types/js-yaml")?.version).toEqual("*");
  expect(pkg.tryResolveDependencyVersion("@types/js-yaml")).toEqual("4.0.5");
});

test("project components should be able to change dependencies during preSynthesize", () => {
  const project = new TestProject();
  const pkg = new NodePackage(project);
  pkg.addDevDeps("test-dev-dep-1@1.0.0");

  new (class extends Component {
    public preSynthesize(): void {
      project.deps.removeDependency("test-dev-dep-1", DependencyType.BUILD);
      project.deps.addDependency(
        "test-dev-dep-2@2.0.0",
        DependencyType.RUNTIME
      );
    }
  })(project);

  const snps = synthSnapshot(project);

  expect(snps["package.json"].devDependencies).toBeUndefined();
  expect(snps["package.json"].dependencies).toHaveProperty(
    "test-dev-dep-2",
    "2.0.0"
  );
});

describe("yarn berry", () => {
  test("adds the packageManager directive to package.json", () => {
    const project = new TestProject();
    new NodePackage(project, {
      packageManager: NodePackageManager.YARN_BERRY,
      yarnBerryOptions: {
        version: "3.6.4",
      },
    });

    const snps = synthSnapshot(project);

    expect(snps["package.json"]).toHaveProperty("packageManager", "yarn@3.6.4");
  });

  test("renders .yarnrc.yml file with specified properties", () => {
    const project = new TestProject();
    new NodePackage(project, {
      packageManager: NodePackageManager.YARN_BERRY,
      yarnBerryOptions: {
        yarnRcOptions: {
          nodeLinker: YarnNodeLinker.NODE_MODULES,
        },
      },
    });

    const snps = synthSnapshot(project);
    const yarnrcLines = snps[".yarnrc.yml"].split("\n");

    expect(yarnrcLines).toContain("nodeLinker: node-modules");
  });

  test("resets the packageManager", () => {
    const project = new TestProject();
    const pkg = new NodePackage(project, {
      packageManager: NodePackageManager.NPM,
    });

    pkg.addPackageResolutions("some-dep@1.0.0", "other-dep");
    pkg.setPackageManager(NodePackageManager.YARN_BERRY, {
      version: "3.6.4",
      yarnRcOptions: {
        nodeLinker: YarnNodeLinker.NODE_MODULES,
      },
      zeroInstalls: true,
    });

    const snps = synthSnapshot(project);
    const yarnrcLines = snps[".yarnrc.yml"].split("\n");
    const gitignoreLines = snps[".gitignore"].split("\n");

    expect(yarnrcLines).toMatchSnapshot();
    expect(gitignoreLines).toMatchSnapshot();
    expect(snps["package.json"]).toMatchSnapshot();
    expect(snps[".gitattributes"]).toMatchSnapshot();
  });

  describe("gitignore", () => {
    test("produces the expected gitignore for zero-installs", () => {
      const project = new TestProject();
      new NodePackage(project, {
        packageManager: NodePackageManager.YARN_BERRY,
        yarnBerryOptions: {
          zeroInstalls: true,
        },
      });

      const snps = synthSnapshot(project);
      const gitignoreLines = snps[".gitignore"].split("\n");
      expect(gitignoreLines).toEqual(
        expect.arrayContaining([
          ".yarn/*",
          "!.yarn/cache",
          "!.yarn/patches",
          "!.yarn/plugins",
          "!.yarn/releases",
          "!.yarn/sdks",
          "!.yarn/versions",
        ])
      );
    });

    test("produces the expected gitignore when not using zero-installs", () => {
      const project = new TestProject();
      new NodePackage(project, {
        packageManager: NodePackageManager.YARN_BERRY,
        yarnBerryOptions: {
          zeroInstalls: false,
        },
      });

      const snps = synthSnapshot(project);
      const gitignoreLines = snps[".gitignore"].split("\n");
      expect(gitignoreLines).toEqual(
        expect.arrayContaining([
          ".pnp.*",
          ".yarn/*",
          "!.yarn/patches",
          "!.yarn/plugins",
          "!.yarn/releases",
          "!.yarn/sdks",
          "!.yarn/versions",
        ])
      );
    });

    test("resets the packageManager", () => {
      const project = new TestProject();
      const pkg = new NodePackage(project, {
        packageManager: NodePackageManager.YARN_BERRY,
      });

      pkg.setPackageManager(NodePackageManager.PNPM);

      const snps = synthSnapshot(project);

      expect(snps).toMatchSnapshot();
    });
  });

  describe("conflicting options", () => {
    test("throws an error if npmRegistryUrl and npmRegistryServer are set to different values", () => {
      const project = new TestProject();
      expect(
        () =>
          new NodePackage(project, {
            packageManager: NodePackageManager.YARN_BERRY,
            npmRegistryUrl: "https://registry.npmjs.org/",
            yarnBerryOptions: {
              yarnRcOptions: {
                npmRegistryServer: "https://npm.pkg.github.com",
              },
            },
          })
      ).toThrow(
        "Cannot set npmRegistryUrl (https://registry.npmjs.org/) and yarnRcOptions.npmRegistryServer (https://npm.pkg.github.com) to different values."
      );
    });

    test("throws an error if npmAccess and npmPublishAccess are set to different values", () => {
      const project = new TestProject();
      expect(
        () =>
          new NodePackage(project, {
            packageManager: NodePackageManager.YARN_BERRY,
            npmAccess: NpmAccess.PUBLIC,
            yarnBerryOptions: {
              yarnRcOptions: {
                npmPublishAccess: YarnNpmPublishAccess.RESTRICTED,
              },
            },
          })
      ).toThrow(
        "Cannot set npmAccess (public) and yarnRcOptions.npmPublishAccess (restricted) to different values."
      );
    });
  });

  describe("invalid options", () => {
    describe("using v4", () => {
      test("throws an error if a v3 setting is used in v4", () => {
        const project = new TestProject();
        expect(
          () =>
            new NodePackage(project, {
              packageManager: NodePackageManager.YARN_BERRY,
              yarnBerryOptions: {
                version: "4.0.1",
                yarnRcOptions: {
                  ignoreCwd: true,
                  lockfileFilename: "something-else.lock",
                },
              },
            })
        ).toThrow(
          "The following options are not available in Yarn >= 4: ignoreCwd, lockfileFilename"
        );
      });
    });

    describe("using v3", () => {
      test("throws an error if a v4 setting is used in v3", () => {
        const project = new TestProject();
        expect(
          () =>
            new NodePackage(project, {
              packageManager: NodePackageManager.YARN_BERRY,
              yarnBerryOptions: {
                version: "3.6.4",
                yarnRcOptions: {
                  cacheMigrationMode: YarnCacheMigrationMode.ALWAYS,
                  httpsCaFilePath: "/etc/foo/bar",
                },
              },
            })
        ).toThrow(
          "The following options are only available in Yarn v4 and newer: cacheMigrationMode, httpsCaFilePath"
        );
      });

      test("throws an error if a v4 checksumBehavior setting is used in v3", () => {
        const project = new TestProject();
        expect(
          () =>
            new NodePackage(project, {
              packageManager: NodePackageManager.YARN_BERRY,
              yarnBerryOptions: {
                version: "3.6.4",
                yarnRcOptions: {
                  checksumBehavior: YarnChecksumBehavior.RESET,
                },
              },
            })
        ).toThrow(
          "The YarnChecksumBehavior.RESET is only available in Yarn v4 and newer."
        );
      });
    });
  });
});

describe("npm provenance", () => {
  test("can be enabled for public packages", () => {
    const project = new TestProject();

    const nodePackage = new NodePackage(project, {
      packageName: "@test-scope/test-package",
      npmAccess: NpmAccess.PUBLIC,
      npmProvenance: true,
    });

    expect(nodePackage.npmProvenance).toStrictEqual(true);
  });

  test("must always render npmAccess", () => {
    const project = new TestProject();

    new NodePackage(project, {
      packageName: "@test-scope/test-package",
      npmAccess: NpmAccess.PUBLIC,
      npmProvenance: true,
    });

    const files = synthSnapshot(project);
    expect(files["package.json"].publishConfig).toHaveProperty(
      "access",
      "public"
    );
  });

  test("should throw an error if it's enabled for non-public packages", () => {
    const project = new TestProject();

    expect(
      () =>
        new NodePackage(project, {
          packageName: "@test-scope/test-package",
          npmAccess: NpmAccess.RESTRICTED,
          npmProvenance: true,
        })
    ).toThrowError(`"npmProvenance" can only be enabled for public packages`);
  });
});
