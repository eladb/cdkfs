# Node.js Projects

This topic describes all the features of `NodeProject` projects and their
derivatives.

## Development Workflow

TODO

## Dependencies

TODO

## GitHub workflows

Node projects with GitHub enabled come bundled with components for running build
workflows on every pull request, automatically upgrading dependencies, and other
conveniences.

For more general information about managing GitHub configuration, check out
[GitHub](./github.md).

### Dependency upgrades

Node.js projects include an `upgrade` [task](./tasks.md) and `upgrade.yml`
GitHub workflow that updates node dependencies following semver, once a day.
Once created these PRs can be automatically approved by another workflow.

In order to create these PRs, permissions to GitHub APIs are needed beyond those
provided by GITHUB_TOKEN, otherwise no subsequent workflows will be triggered,
such as the build workflow (see [create-pull-request#48] for details). Because
of this we require, [GitHub API access] to be provided for these workflows.

It's possible to create a separate workflow and task just for upgrading projen:

```ts
const project = new javascript.NodeProject({
  depsUpgrade: true,
  depsUpgradeOptions: {
    exclude: ['projen'],
  },
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: "upgrade-projen",
  workflow: false, // or true
  // workflowOptions: { ... }
});
```

You can also use dependabot:

```ts
new javascript.NodeProject({
  depsUpgrade: false,
  dependabot: true,
  // dependabotOptions: { ... }
})
```

[create-pull-request#48]: https://github.com/peter-evans/create-pull-request/issues/48
[GitHub API access]: ./github.md#github-api-access

## Pull Request Builds (CI)

TODO

## Releases (CI/CD)

TODO
