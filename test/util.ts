import * as cp from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Project } from "../src";
import { GitHubProject, GitHubProjectOptions } from "../src/github";
import * as logging from "../src/logging";
import { Task } from "../src/task";
import { exec } from "../src/util";
import { directorySnapshot } from "../src/util/synth";

const PROJEN_CLI = require.resolve("../lib/cli/index.js");

logging.disable(); // no logging during tests

export class TestProject extends GitHubProject {
  constructor(options: Omit<GitHubProjectOptions, "name"> = {}) {
    super({
      name: "my-project",
      clobber: false,
      ...options,
    });
  }

  // override runTaskCommand in tests since the default includes the version
  // number and that will break regresion tests.
  public runTaskCommand(task: Task) {
    return `projen ${task.name}`;
  }

  postSynthesize() {
    fs.writeFileSync(path.join(this.outdir, ".postsynth"), "# postsynth");
  }
}

export function execProjenCLI(workdir: string, args: string[] = []) {
  const command = [process.execPath, PROJEN_CLI, ...args];

  return exec(command.map((x) => `"${x}"`).join(" "), {
    cwd: workdir,
    env: {
      ...process.env,
      // Force "canonical" locale to be used. This avoids localized error messages causing substring matchers to fail.
      LC_ALL: "C",
    },
  });
}

const autoRemove = new Set<string>();

// Hook to automatically remove temporary directories without needing each
// place to actually handle this specifically.
afterAll((done) => {
  // Array.from used to get a copy, so we can safely remove from the set
  for (const dir of Array.from(autoRemove)) {
    try {
      fs.rmSync(dir, { force: true, recursive: true });
    } catch (e: any) {
      done.fail(e);
    }
    autoRemove.delete(dir);
  }
  done();
});

export function mkdtemp(opts: { cleanup?: boolean; dir?: string } = {}) {
  const tmpdir = fs.mkdtempSync(
    path.join(opts.dir ?? os.tmpdir(), "projen-test-")
  );
  if (opts.cleanup ?? true) {
    autoRemove.add(tmpdir);
  }
  return tmpdir;
}

export function synthSnapshotWithPost(project: Project) {
  try {
    project.synth();
    return directorySnapshot(project.outdir);
  } finally {
    fs.rmSync(project.outdir, { force: true, recursive: true });
  }
}

export function withProjectDir(
  code: (workdir: string) => void,
  options: { git?: boolean; chdir?: boolean; tmpdir?: string } = {}
) {
  const origDir = process.cwd();
  const outdir = options.tmpdir ?? mkdtemp();
  try {
    // create project under "my-project" so that basedir is deterministic
    const projectdir = path.join(outdir, "my-project");
    fs.mkdirSync(projectdir);

    const shell = (command: string) =>
      cp.execSync(command, { cwd: projectdir });
    if (options.git ?? true) {
      shell("git init -b main");
      shell("git remote add origin git@boom.com:foo/bar.git");
      shell('git config user.name "My User Name"');
      shell('git config user.email "my@user.email.com"');
      shell("git config commit.gpgsign false");
      shell("git config tag.gpgsign false");
    } else if (process.env.CI) {
      // if "git" is set to "false", we still want to make sure global user is defined
      // (relevant in CI context)
      shell(
        'git config user.name || git config --global user.name "My User Name"'
      );
      shell(
        'git config user.email || git config --global user.email "my@user.email.com"'
      );
    }

    if (options.chdir ?? false) {
      process.chdir(projectdir);
    }

    code(projectdir);
  } finally {
    process.chdir(origDir);
    fs.rmSync(outdir, { force: true, recursive: true });
  }
}

/**
 * Removes any non-deterministic aspects from the synthesized output.
 * @param dir The output directory.
 */
export function sanitizeOutput(dir: string) {
  const filepath = path.join(dir, "package.json");
  const pkg = JSON.parse(fs.readFileSync(filepath, "utf-8"));
  const prev = pkg.devDependencies.projen;
  if (!prev) {
    throw new Error(
      `expecting "${filepath}" to include a devDependency on "projen"`
    );
  }

  // replace the current projen version with * for deterministic output.
  pkg.devDependencies.projen = "*";
  fs.writeFileSync(filepath, JSON.stringify(pkg));

  // we will also patch deps.json so that all projen deps will be set to *
  const depsPath = path.join(dir, ".projen", "deps.json");
  const deps = JSON.parse(fs.readFileSync(depsPath, "utf-8"));
  for (const dep of deps.dependencies) {
    if (dep.name === "projen" && dep.version) {
      dep.version = "*";
    }
  }
  fs.chmodSync(depsPath, "777");
  fs.writeFileSync(depsPath, JSON.stringify(deps));
}

export {
  synthSnapshot,
  directorySnapshot,
  SynthOutput,
  DirectorySnapshotOptions,
} from "../src/util/synth";
