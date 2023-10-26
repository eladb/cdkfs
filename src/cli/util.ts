import * as fs from "fs";
import * as path from "path";
import { prompt } from "enquirer";
import * as inventory from "../inventory";
import * as logging from "../logging";
import { exec } from "../util";

/**
 * Installs the npm module (through `npm install`) to node_modules under `projectDir`.
 * @param spec The npm package spec (e.g. `foo@^1.2` or `foo@/var/folders/8k/qcw0ls5pv_ph0000gn/T/projen-RYurCw/pkg.tgz`)
 * @returns The installed package name (e.g. `@foo/bar`)
 */
export function installPackage(baseDir: string, spec: string): string {
  const packageJsonPath = path.join(baseDir, "package.json");
  const packageJsonExisted = fs.existsSync(packageJsonPath);

  if (!packageJsonExisted) {
    // Make sure we have a package.json to read from later
    exec("npm init --yes", { cwd: baseDir });
  }

  logging.info(`installing external module ${spec}...`);
  exec(renderInstallCommand(baseDir, spec), { cwd: baseDir });

  // Get the true installed package name
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const packageName = Object.keys(packageJson.devDependencies).find(
    (name) => name !== "projen"
  );

  if (!packageName) {
    throw new Error(`Unable to resolve package name from spec ${spec}`);
  }

  // if package.json did not exist before calling `npm install`, we should remove it
  // so we can start off clean.
  if (!packageJsonExisted) {
    fs.rmSync(packageJsonPath, { force: true, recursive: true });
  }

  return packageName;
}

/**
 * Render a command to install an npm package.
 *
 * Engine checks are ignored at this point so that the module can be installed
 * regardless of the environment. This was needed to unblock the upgrade of the
 * minimum node version of projen, but also okay generally because engine checks
 * will be performed later and for all eternity.
 *
 * @param dir Base directory
 * @param module The module to install (e.g. foo@^1.2)
 * @returns The string that includes the install command ("npm install ...")
 */
export function renderInstallCommand(dir: string, module: string): string {
  return `npm install --save --save-dev -f --no-package-lock --prefix="${dir}" ${module}`;
}

export class CliError extends Error {
  constructor(...lines: string[]) {
    super(lines.join("\n"));
    this.name = "CliError";
  }
}

export class SelectProjectTypeError extends CliError {
  constructor(message: string, spec: string, types: inventory.ProjectType[]) {
    super(
      `${message}:\n`,
      ...types.map((t) => `    ${t.pjid}`),
      "",
      `Please specify the project type.`,
      `Example: npx projen new --from ${spec} ${types[0].pjid}`
    );
  }
}

export async function RecoverableError(
  question: any,
  error: CliError
): Promise<{ pjid: string }> {
  if (process.env.CI) {
    throw error;
  }

  try {
    return (await prompt(question)) as any;
  } catch {
    throw error;
  }
}
