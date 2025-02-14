import { NodePackage, NodePackageManager } from "./node-package";
import { ITool, JobStep } from "../github/workflows-model";

export class NodeJsTool implements ITool {
  public readonly version?: string;
  public readonly enableCache?: boolean;
  public readonly package?: NodePackage;

  public constructor() {}

  public setupSteps(): JobStep[] {
    const steps: JobStep[] = [];
    if (this.package?.packageManager === NodePackageManager.PNPM) {
      steps.push({
        name: "Setup pnpm",
        uses: "pnpm/action-setup@v4",
        with: { version: this.package.pnpmVersion },
      });
    }

    return [
      {
        name: "Setup Node.js",
        uses: "actions/setup-node@v4",
        with: {
          ...(this.version && {
            "node-version": this.version,
          }),
          ...(this.enableCache && {
            cache: this.getCache(),
          }),
        },
      },
    ];
  }

  /**
   * Get the cache type based on package manager.
   */
  private getCache() {
    switch (this.package?.packageManager) {
      case NodePackageManager.YARN:
      case NodePackageManager.YARN2:
      case NodePackageManager.YARN_CLASSIC:
      case NodePackageManager.YARN_BERRY:
        return "yarn";
      case NodePackageManager.PNPM:
        return "pnpm";
      case NodePackageManager.NPM:
      default:
        return "npm";
    }
  }
}

export class BunTool implements ITool {
  public readonly version?: string;
  public readonly cache?: boolean;

  public constructor() {}

  public setupSteps(): JobStep[] {
    return [
      {
        name: "Setup bun",
        uses: "oven-sh/setup-bun@v1",
        with: {
          ...(this.version && {
            "bun-version": this.version,
          }),
        },
      },
    ];
  }
}
