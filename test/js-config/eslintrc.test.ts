import { Eslint } from "../../src/javascript/eslint";
import { NodeProject } from "../../src/javascript/node-project";
import { JsConfigFile } from "../../src/js-config";
import { Projenrc } from "../../src/projenrc-json";
import { synthSnapshot } from "../util";

test(".eslintrc.js with identifier values", () => {
  // GIVEN
  const project = new NodeProject({
    name: "test",
    defaultReleaseBranch: "master",
  });
  const eslint = new Eslint(project, {
    devdirs: ["foo", "bar"],
    dirs: ["mysrc"],
    jsConfig: true,
  });
  eslint.config.parserOptions = {
    project: ["./tsconfig.json"],
    tsconfigRootDir: JsConfigFile.identifier("__dirname"),
  };

  // WHEN
  new Projenrc(project);

  // THEN
  const output = synthSnapshot(project);
  expect(output[".eslintrc.js"]).toContain('"tsconfigRootDir": __dirname');
});
