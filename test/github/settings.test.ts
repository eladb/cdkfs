import * as YAML from "yaml";
import { StaleBehavior } from "../../src/github";
import { renderBehavior } from "../../src/github/stale-util";
import { synthSnapshot, TestProject } from "../util";

test("default project behavior", () => {
  const project = new TestProject();
  expect(synthSnapshot(project)[".github/settings.yml"]).toBeUndefined();
});

test("settings enabled", () => {
  const project = new TestProject({
    settings: true,
  });

  expect(synthSnapshot(project)[".github/settings.yml"]).toMatchSnapshot();
});
