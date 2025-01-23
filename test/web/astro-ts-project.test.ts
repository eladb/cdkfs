import {
  AstroTypeScriptProject,
  AstroTypeScriptProjectOptions,
} from "../../src/web";
import { synthSnapshot } from "../util";

test("defaults", () => {
  const p = new TestNextJsTypeScriptProject();
  expect(synthSnapshot(p)).toMatchSnapshot();
});

class TestNextJsTypeScriptProject extends AstroTypeScriptProject {
  constructor(options: Partial<AstroTypeScriptProjectOptions> = {}) {
    super({
      ...options,
      clobber: false,
      name: "test-astro-project",
      defaultReleaseBranch: "main",
    });
  }
}
