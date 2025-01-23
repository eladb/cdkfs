import { AstroProject, AstroProjectOptions } from "../../src/web";
import { synthSnapshot } from "../util";

test("defaults", () => {
  const p = new TestAstroProject();
  expect(synthSnapshot(p)).toMatchSnapshot();
});

class TestAstroProject extends AstroProject {
  constructor(options: Partial<AstroProjectOptions> = {}) {
    super({
      ...options,
      clobber: false,
      name: "test-astro-project",
      defaultReleaseBranch: "main",
    });
  }
}
