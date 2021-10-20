const { NodeProject, NodePackageManager } = require("projen");

const project = new NodeProject({
  name: "pnpm-project",

  packageManager: NodePackageManager.PNPM,
  defaultReleaseBranch: 'master',

  deps: ["esbuild"],

  devDeps: ["aws-sdk"],
});

project.synth();
