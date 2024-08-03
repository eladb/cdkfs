# `github` Submodule <a name="`github` Submodule" id="projen.github"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoApprove <a name="AutoApprove" id="projen.github.AutoApprove"></a>

Auto approve pull requests that meet a criteria.

#### Initializers <a name="Initializers" id="projen.github.AutoApprove.Initializer"></a>

```typescript
import { github } from 'projen'

new github.AutoApprove(github: GitHub, options?: AutoApproveOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoApprove.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.AutoApprove.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.AutoApproveOptions">AutoApproveOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.AutoApprove.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.AutoApprove.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.AutoApproveOptions">AutoApproveOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.AutoApprove.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.AutoApprove.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.AutoApprove.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.AutoApprove.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.github.AutoApprove.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.AutoApprove.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.AutoApprove.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.AutoApprove.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.AutoApprove.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.AutoApprove.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.AutoApprove.isConstruct"></a>

```typescript
import { github } from 'projen'

github.AutoApprove.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.AutoApprove.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.AutoApprove.isComponent"></a>

```typescript
import { github } from 'projen'

github.AutoApprove.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.AutoApprove.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoApprove.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.AutoApprove.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.AutoApprove.property.label">label</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.AutoApprove.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.AutoApprove.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `label`<sup>Required</sup> <a name="label" id="projen.github.AutoApprove.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---


### AutoMerge <a name="AutoMerge" id="projen.github.AutoMerge"></a>

Sets up mergify to merging approved pull requests.

If `buildJob` is specified, the specified GitHub workflow job ID is required
to succeed in order for the PR to be merged.

`approvedReviews` specified the number of code review approvals required for
the PR to be merged.

#### Initializers <a name="Initializers" id="projen.github.AutoMerge.Initializer"></a>

```typescript
import { github } from 'projen'

new github.AutoMerge(github: GitHub, options?: AutoMergeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoMerge.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.AutoMerge.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.AutoMergeOptions">AutoMergeOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.AutoMerge.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.AutoMerge.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.AutoMergeOptions">AutoMergeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.AutoMerge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.AutoMerge.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.AutoMerge.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.AutoMerge.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.AutoMerge.addConditions">addConditions</a></code> | Adds conditions to the auto merge rule. |
| <code><a href="#projen.github.AutoMerge.addConditionsLater">addConditionsLater</a></code> | Adds conditions that will be rendered only during synthesis. |

---

##### `toString` <a name="toString" id="projen.github.AutoMerge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.AutoMerge.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.AutoMerge.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.AutoMerge.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addConditions` <a name="addConditions" id="projen.github.AutoMerge.addConditions"></a>

```typescript
public addConditions(conditions: string): void
```

Adds conditions to the auto merge rule.

###### `conditions`<sup>Required</sup> <a name="conditions" id="projen.github.AutoMerge.addConditions.parameter.conditions"></a>

- *Type:* string

The conditions to add (mergify syntax).

---

##### `addConditionsLater` <a name="addConditionsLater" id="projen.github.AutoMerge.addConditionsLater"></a>

```typescript
public addConditionsLater(later: IAddConditionsLater): void
```

Adds conditions that will be rendered only during synthesis.

###### `later`<sup>Required</sup> <a name="later" id="projen.github.AutoMerge.addConditionsLater.parameter.later"></a>

- *Type:* <a href="#projen.github.IAddConditionsLater">IAddConditionsLater</a>

The later.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.AutoMerge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.AutoMerge.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.AutoMerge.isConstruct"></a>

```typescript
import { github } from 'projen'

github.AutoMerge.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.AutoMerge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.AutoMerge.isComponent"></a>

```typescript
import { github } from 'projen'

github.AutoMerge.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.AutoMerge.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoMerge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.AutoMerge.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.AutoMerge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.AutoMerge.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Dependabot <a name="Dependabot" id="projen.github.Dependabot"></a>

Defines dependabot configuration for node projects.

Since module versions are managed in projen, the versioning strategy will be
configured to "lockfile-only" which means that only updates that can be done
on the lockfile itself will be proposed.

#### Initializers <a name="Initializers" id="projen.github.Dependabot.Initializer"></a>

```typescript
import { github } from 'projen'

new github.Dependabot(github: GitHub, options?: DependabotOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Dependabot.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.Dependabot.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.DependabotOptions">DependabotOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.Dependabot.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.Dependabot.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.DependabotOptions">DependabotOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Dependabot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.Dependabot.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.Dependabot.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.Dependabot.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.Dependabot.addAllow">addAllow</a></code> | Allows a dependency from automatic updates. |
| <code><a href="#projen.github.Dependabot.addIgnore">addIgnore</a></code> | Ignores a dependency from automatic updates. |

---

##### `toString` <a name="toString" id="projen.github.Dependabot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.Dependabot.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.Dependabot.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.Dependabot.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addAllow` <a name="addAllow" id="projen.github.Dependabot.addAllow"></a>

```typescript
public addAllow(dependencyName: string): void
```

Allows a dependency from automatic updates.

###### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="projen.github.Dependabot.addAllow.parameter.dependencyName"></a>

- *Type:* string

Use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters.

---

##### `addIgnore` <a name="addIgnore" id="projen.github.Dependabot.addIgnore"></a>

```typescript
public addIgnore(dependencyName: string, versions: string): void
```

Ignores a dependency from automatic updates.

###### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="projen.github.Dependabot.addIgnore.parameter.dependencyName"></a>

- *Type:* string

Use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters.

---

###### `versions`<sup>Required</sup> <a name="versions" id="projen.github.Dependabot.addIgnore.parameter.versions"></a>

- *Type:* string

Use to ignore specific versions or ranges of versions.

If
you want to define a range, use the standard pattern for the package
manager (for example: `^1.0.0` for npm, or `~> 2.0` for Bundler).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Dependabot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.Dependabot.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.Dependabot.isConstruct"></a>

```typescript
import { github } from 'projen'

github.Dependabot.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Dependabot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.Dependabot.isComponent"></a>

```typescript
import { github } from 'projen'

github.Dependabot.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Dependabot.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Dependabot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.Dependabot.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.Dependabot.property.config">config</a></code> | <code>any</code> | The raw dependabot configuration. |
| <code><a href="#projen.github.Dependabot.property.ignoresProjen">ignoresProjen</a></code> | <code>boolean</code> | Whether or not projen is also upgraded in this config,. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.Dependabot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.Dependabot.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="projen.github.Dependabot.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

The raw dependabot configuration.

> [https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates](https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates)

---

##### `ignoresProjen`<sup>Required</sup> <a name="ignoresProjen" id="projen.github.Dependabot.property.ignoresProjen"></a>

```typescript
public readonly ignoresProjen: boolean;
```

- *Type:* boolean

Whether or not projen is also upgraded in this config,.

---


### GitHub <a name="GitHub" id="projen.github.GitHub"></a>

#### Initializers <a name="Initializers" id="projen.github.GitHub.Initializer"></a>

```typescript
import { github } from 'projen'

new github.GitHub(project: Project, options?: GitHubOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHub.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.GitHub.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.GitHubOptions">GitHubOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.GitHub.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.GitHub.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.GitHubOptions">GitHubOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GitHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.GitHub.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.GitHub.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.GitHub.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.GitHub.addDependabot">addDependabot</a></code> | *No description.* |
| <code><a href="#projen.github.GitHub.addPullRequestTemplate">addPullRequestTemplate</a></code> | *No description.* |
| <code><a href="#projen.github.GitHub.addWorkflow">addWorkflow</a></code> | Adds a workflow to the project. |
| <code><a href="#projen.github.GitHub.tryFindWorkflow">tryFindWorkflow</a></code> | Finds a GitHub workflow by name. |

---

##### `toString` <a name="toString" id="projen.github.GitHub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.GitHub.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.GitHub.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.GitHub.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addDependabot` <a name="addDependabot" id="projen.github.GitHub.addDependabot"></a>

```typescript
public addDependabot(options?: DependabotOptions): Dependabot
```

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.GitHub.addDependabot.parameter.options"></a>

- *Type:* <a href="#projen.github.DependabotOptions">DependabotOptions</a>

---

##### `addPullRequestTemplate` <a name="addPullRequestTemplate" id="projen.github.GitHub.addPullRequestTemplate"></a>

```typescript
public addPullRequestTemplate(content: string): PullRequestTemplate
```

###### `content`<sup>Required</sup> <a name="content" id="projen.github.GitHub.addPullRequestTemplate.parameter.content"></a>

- *Type:* string

---

##### `addWorkflow` <a name="addWorkflow" id="projen.github.GitHub.addWorkflow"></a>

```typescript
public addWorkflow(name: string): GithubWorkflow
```

Adds a workflow to the project.

###### `name`<sup>Required</sup> <a name="name" id="projen.github.GitHub.addWorkflow.parameter.name"></a>

- *Type:* string

Name of the workflow.

---

##### `tryFindWorkflow` <a name="tryFindWorkflow" id="projen.github.GitHub.tryFindWorkflow"></a>

```typescript
public tryFindWorkflow(name: string): GithubWorkflow
```

Finds a GitHub workflow by name.

Returns `undefined` if the workflow cannot be found.

###### `name`<sup>Required</sup> <a name="name" id="projen.github.GitHub.tryFindWorkflow.parameter.name"></a>

- *Type:* string

The name of the GitHub workflow.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GitHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.GitHub.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.github.GitHub.of">of</a></code> | Returns the `GitHub` component of a project or `undefined` if the project does not have a GitHub component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.GitHub.isConstruct"></a>

```typescript
import { github } from 'projen'

github.GitHub.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GitHub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.GitHub.isComponent"></a>

```typescript
import { github } from 'projen'

github.GitHub.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GitHub.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.github.GitHub.of"></a>

```typescript
import { github } from 'projen'

github.GitHub.of(project: Project)
```

Returns the `GitHub` component of a project or `undefined` if the project does not have a GitHub component.

###### `project`<sup>Required</sup> <a name="project" id="projen.github.GitHub.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.GitHub.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.GitHub.property.actions">actions</a></code> | <code><a href="#projen.github.GitHubActionsProvider">GitHubActionsProvider</a></code> | *No description.* |
| <code><a href="#projen.github.GitHub.property.downloadLfs">downloadLfs</a></code> | <code>boolean</code> | Whether downloading from LFS is enabled for this GitHub project. |
| <code><a href="#projen.github.GitHub.property.projenCredentials">projenCredentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | GitHub API authentication method used by projen workflows. |
| <code><a href="#projen.github.GitHub.property.workflows">workflows</a></code> | <code><a href="#projen.github.GithubWorkflow">GithubWorkflow</a>[]</code> | All workflows. |
| <code><a href="#projen.github.GitHub.property.workflowsEnabled">workflowsEnabled</a></code> | <code>boolean</code> | Are workflows enabled? |
| <code><a href="#projen.github.GitHub.property.mergify">mergify</a></code> | <code><a href="#projen.github.Mergify">Mergify</a></code> | The `Mergify` configured on this repository. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.GitHub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.GitHub.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `actions`<sup>Required</sup> <a name="actions" id="projen.github.GitHub.property.actions"></a>

```typescript
public readonly actions: GitHubActionsProvider;
```

- *Type:* <a href="#projen.github.GitHubActionsProvider">GitHubActionsProvider</a>

---

##### `downloadLfs`<sup>Required</sup> <a name="downloadLfs" id="projen.github.GitHub.property.downloadLfs"></a>

```typescript
public readonly downloadLfs: boolean;
```

- *Type:* boolean

Whether downloading from LFS is enabled for this GitHub project.

---

##### `projenCredentials`<sup>Required</sup> <a name="projenCredentials" id="projen.github.GitHub.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>

GitHub API authentication method used by projen workflows.

---

##### `workflows`<sup>Required</sup> <a name="workflows" id="projen.github.GitHub.property.workflows"></a>

```typescript
public readonly workflows: GithubWorkflow[];
```

- *Type:* <a href="#projen.github.GithubWorkflow">GithubWorkflow</a>[]

All workflows.

---

##### `workflowsEnabled`<sup>Required</sup> <a name="workflowsEnabled" id="projen.github.GitHub.property.workflowsEnabled"></a>

```typescript
public readonly workflowsEnabled: boolean;
```

- *Type:* boolean

Are workflows enabled?

---

##### `mergify`<sup>Optional</sup> <a name="mergify" id="projen.github.GitHub.property.mergify"></a>

```typescript
public readonly mergify: Mergify;
```

- *Type:* <a href="#projen.github.Mergify">Mergify</a>

The `Mergify` configured on this repository.

This is `undefined` if Mergify
was not enabled when creating the repository.

---


### GitHubProject <a name="GitHubProject" id="projen.github.GitHubProject"></a>

GitHub-based project.

#### Initializers <a name="Initializers" id="projen.github.GitHubProject.Initializer"></a>

```typescript
import { github } from 'projen'

new github.GitHubProject(options: GitHubProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHubProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.GitHubProjectOptions">GitHubProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.github.GitHubProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.GitHubProjectOptions">GitHubProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GitHubProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.GitHubProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.github.GitHubProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.github.GitHubProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen.github.GitHubProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.github.GitHubProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.github.GitHubProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.github.GitHubProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.github.GitHubProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.github.GitHubProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.github.GitHubProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.github.GitHubProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.github.GitHubProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.github.GitHubProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.github.GitHubProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.github.GitHubProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### ~~`toString`~~ <a name="toString" id="projen.github.GitHubProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`addExcludeFromCleanup`~~ <a name="addExcludeFromCleanup" id="projen.github.GitHubProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.github.GitHubProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### ~~`addGitIgnore`~~ <a name="addGitIgnore" id="projen.github.GitHubProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.github.GitHubProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### ~~`addPackageIgnore`~~ <a name="addPackageIgnore" id="projen.github.GitHubProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen.github.GitHubProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### ~~`addTask`~~ <a name="addTask" id="projen.github.GitHubProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.github.GitHubProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.github.GitHubProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.github.GitHubProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.github.GitHubProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### ~~`annotateGenerated`~~ <a name="annotateGenerated" id="projen.github.GitHubProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.github.GitHubProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### ~~`postSynthesize`~~ <a name="postSynthesize" id="projen.github.GitHubProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### ~~`preSynthesize`~~ <a name="preSynthesize" id="projen.github.GitHubProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### ~~`removeTask`~~ <a name="removeTask" id="projen.github.GitHubProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.github.GitHubProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### ~~`runTaskCommand`~~ <a name="runTaskCommand" id="projen.github.GitHubProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen.github.GitHubProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### ~~`synth`~~ <a name="synth" id="projen.github.GitHubProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### ~~`tryFindFile`~~ <a name="tryFindFile" id="projen.github.GitHubProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.github.GitHubProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.github.GitHubProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.github.GitHubProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryFindObjectFile`~~ <a name="tryFindObjectFile" id="projen.github.GitHubProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.github.GitHubProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryRemoveFile`~~ <a name="tryRemoveFile" id="projen.github.GitHubProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.github.GitHubProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GitHubProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.GitHubProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.github.GitHubProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen.github.GitHubProject.isConstruct"></a>

```typescript
import { github } from 'projen'

github.GitHubProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GitHubProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### ~~`isProject`~~ <a name="isProject" id="projen.github.GitHubProject.isProject"></a>

```typescript
import { github } from 'projen'

github.GitHubProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GitHubProject.isProject.parameter.x"></a>

- *Type:* any

---

##### ~~`of`~~ <a name="of" id="projen.github.GitHubProject.of"></a>

```typescript
import { github } from 'projen'

github.GitHubProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.github.GitHubProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHubProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.GitHubProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.github.GitHubProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.github.GitHubProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.github.GitHubProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.github.GitHubProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.github.GitHubProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.github.GitHubProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.github.GitHubProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.github.GitHubProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.github.GitHubProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.github.GitHubProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.github.GitHubProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.github.GitHubProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.github.GitHubProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.github.GitHubProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.github.GitHubProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.github.GitHubProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.github.GitHubProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.github.GitHubProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.github.GitHubProject.property.autoApprove">autoApprove</a></code> | <code><a href="#projen.github.AutoApprove">AutoApprove</a></code> | Auto approve set up for this project. |
| <code><a href="#projen.github.GitHubProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.github.GitHubProject.property.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | Access all github components. |
| <code><a href="#projen.github.GitHubProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.github.GitHubProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="projen.github.GitHubProject.property.node"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`buildTask`~~<sup>Required</sup> <a name="buildTask" id="projen.github.GitHubProject.property.buildTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### ~~`commitGenerated`~~<sup>Required</sup> <a name="commitGenerated" id="projen.github.GitHubProject.property.commitGenerated"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### ~~`compileTask`~~<sup>Required</sup> <a name="compileTask" id="projen.github.GitHubProject.property.compileTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`components`~~<sup>Required</sup> <a name="components" id="projen.github.GitHubProject.property.components"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### ~~`deps`~~<sup>Required</sup> <a name="deps" id="projen.github.GitHubProject.property.deps"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### ~~`ejected`~~<sup>Required</sup> <a name="ejected" id="projen.github.GitHubProject.property.ejected"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### ~~`files`~~<sup>Required</sup> <a name="files" id="projen.github.GitHubProject.property.files"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### ~~`gitattributes`~~<sup>Required</sup> <a name="gitattributes" id="projen.github.GitHubProject.property.gitattributes"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### ~~`gitignore`~~<sup>Required</sup> <a name="gitignore" id="projen.github.GitHubProject.property.gitignore"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### ~~`logger`~~<sup>Required</sup> <a name="logger" id="projen.github.GitHubProject.property.logger"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="projen.github.GitHubProject.property.name"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### ~~`outdir`~~<sup>Required</sup> <a name="outdir" id="projen.github.GitHubProject.property.outdir"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### ~~`packageTask`~~<sup>Required</sup> <a name="packageTask" id="projen.github.GitHubProject.property.packageTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### ~~`postCompileTask`~~<sup>Required</sup> <a name="postCompileTask" id="projen.github.GitHubProject.property.postCompileTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`preCompileTask`~~<sup>Required</sup> <a name="preCompileTask" id="projen.github.GitHubProject.property.preCompileTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`projectBuild`~~<sup>Required</sup> <a name="projectBuild" id="projen.github.GitHubProject.property.projectBuild"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### ~~`projenCommand`~~<sup>Required</sup> <a name="projenCommand" id="projen.github.GitHubProject.property.projenCommand"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### ~~`root`~~<sup>Required</sup> <a name="root" id="projen.github.GitHubProject.property.root"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### ~~`subprojects`~~<sup>Required</sup> <a name="subprojects" id="projen.github.GitHubProject.property.subprojects"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### ~~`tasks`~~<sup>Required</sup> <a name="tasks" id="projen.github.GitHubProject.property.tasks"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### ~~`testTask`~~<sup>Required</sup> <a name="testTask" id="projen.github.GitHubProject.property.testTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### ~~`defaultTask`~~<sup>Optional</sup> <a name="defaultTask" id="projen.github.GitHubProject.property.defaultTask"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="projen.github.GitHubProject.property.initProject"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### ~~`parent`~~<sup>Optional</sup> <a name="parent" id="projen.github.GitHubProject.property.parent"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### ~~`projectType`~~<sup>Required</sup> <a name="projectType" id="projen.github.GitHubProject.property.projectType"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### ~~`autoApprove`~~<sup>Optional</sup> <a name="autoApprove" id="projen.github.GitHubProject.property.autoApprove"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* <a href="#projen.github.AutoApprove">AutoApprove</a>

Auto approve set up for this project.

---

##### ~~`devContainer`~~<sup>Optional</sup> <a name="devContainer" id="projen.github.GitHubProject.property.devContainer"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### ~~`github`~~<sup>Optional</sup> <a name="github" id="projen.github.GitHubProject.property.github"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly github: GitHub;
```

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

Access all github components.

This will be `undefined` for subprojects.

---

##### ~~`gitpod`~~<sup>Optional</sup> <a name="gitpod" id="projen.github.GitHubProject.property.gitpod"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### ~~`vscode`~~<sup>Optional</sup> <a name="vscode" id="projen.github.GitHubProject.property.vscode"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHubProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### ~~`DEFAULT_TASK`~~<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.github.GitHubProject.property.DEFAULT_TASK"></a>

- *Deprecated:* This is a *temporary* class. At the moment, our base project
types such as `NodeProject` and `JavaProject` are derived from this, but we
want to be able to use these project types outside of GitHub as well. One of
the next steps to address this is to abstract workflows so that different
"engines" can be used to implement our CI/CD solutions.

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### GithubWorkflow <a name="GithubWorkflow" id="projen.github.GithubWorkflow"></a>

Workflow for GitHub.

A workflow is a configurable automated process made up of one or more jobs.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

#### Initializers <a name="Initializers" id="projen.github.GithubWorkflow.Initializer"></a>

```typescript
import { github } from 'projen'

new github.GithubWorkflow(github: GitHub, name: string, options?: GithubWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubWorkflow.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.GithubWorkflow.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.github.GithubWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.GithubWorkflowOptions">GithubWorkflowOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.GithubWorkflow.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.GithubWorkflow.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.GithubWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.GithubWorkflowOptions">GithubWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GithubWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.GithubWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.GithubWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.GithubWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.GithubWorkflow.addJob">addJob</a></code> | Adds a single job to the workflow. |
| <code><a href="#projen.github.GithubWorkflow.addJobs">addJobs</a></code> | Add jobs to the workflow. |
| <code><a href="#projen.github.GithubWorkflow.getJob">getJob</a></code> | Get a single job from the workflow. |
| <code><a href="#projen.github.GithubWorkflow.on">on</a></code> | Add events to triggers the workflow. |
| <code><a href="#projen.github.GithubWorkflow.removeJob">removeJob</a></code> | Removes a single job to the workflow. |
| <code><a href="#projen.github.GithubWorkflow.updateJob">updateJob</a></code> | Updates a single job to the workflow. |
| <code><a href="#projen.github.GithubWorkflow.updateJobs">updateJobs</a></code> | Updates jobs for this worklow Does a complete replace, it does not try to merge the jobs. |

---

##### `toString` <a name="toString" id="projen.github.GithubWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.GithubWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.GithubWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.GithubWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addJob` <a name="addJob" id="projen.github.GithubWorkflow.addJob"></a>

```typescript
public addJob(id: string, job: JobCallingReusableWorkflow | Job): void
```

Adds a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.GithubWorkflow.addJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

###### `job`<sup>Required</sup> <a name="job" id="projen.github.GithubWorkflow.addJob.parameter.job"></a>

- *Type:* <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>

The job specification.

---

##### `addJobs` <a name="addJobs" id="projen.github.GithubWorkflow.addJobs"></a>

```typescript
public addJobs(jobs: {[ key: string ]: JobCallingReusableWorkflow | Job}): void
```

Add jobs to the workflow.

###### `jobs`<sup>Required</sup> <a name="jobs" id="projen.github.GithubWorkflow.addJobs.parameter.jobs"></a>

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>}

Jobs to add.

---

##### `getJob` <a name="getJob" id="projen.github.GithubWorkflow.getJob"></a>

```typescript
public getJob(id: string): JobCallingReusableWorkflow | Job
```

Get a single job from the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.GithubWorkflow.getJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

##### `on` <a name="on" id="projen.github.GithubWorkflow.on"></a>

```typescript
public on(events: Triggers): void
```

Add events to triggers the workflow.

###### `events`<sup>Required</sup> <a name="events" id="projen.github.GithubWorkflow.on.parameter.events"></a>

- *Type:* <a href="#projen.github.workflows.Triggers">Triggers</a>

The event(s) to trigger the workflow.

---

##### `removeJob` <a name="removeJob" id="projen.github.GithubWorkflow.removeJob"></a>

```typescript
public removeJob(id: string): void
```

Removes a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.GithubWorkflow.removeJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

##### `updateJob` <a name="updateJob" id="projen.github.GithubWorkflow.updateJob"></a>

```typescript
public updateJob(id: string, job: JobCallingReusableWorkflow | Job): void
```

Updates a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.GithubWorkflow.updateJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

###### `job`<sup>Required</sup> <a name="job" id="projen.github.GithubWorkflow.updateJob.parameter.job"></a>

- *Type:* <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>

---

##### `updateJobs` <a name="updateJobs" id="projen.github.GithubWorkflow.updateJobs"></a>

```typescript
public updateJobs(jobs: {[ key: string ]: JobCallingReusableWorkflow | Job}): void
```

Updates jobs for this worklow Does a complete replace, it does not try to merge the jobs.

###### `jobs`<sup>Required</sup> <a name="jobs" id="projen.github.GithubWorkflow.updateJobs.parameter.jobs"></a>

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>}

Jobs to update.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GithubWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.GithubWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.GithubWorkflow.isConstruct"></a>

```typescript
import { github } from 'projen'

github.GithubWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GithubWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.GithubWorkflow.isComponent"></a>

```typescript
import { github } from 'projen'

github.GithubWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.GithubWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.GithubWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.GithubWorkflow.property.name">name</a></code> | <code>string</code> | The name of the workflow. |
| <code><a href="#projen.github.GithubWorkflow.property.projenCredentials">projenCredentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | GitHub API authentication method used by projen workflows. |
| <code><a href="#projen.github.GithubWorkflow.property.concurrency">concurrency</a></code> | <code>string</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.GithubWorkflow.property.file">file</a></code> | <code>projen.YamlFile</code> | The workflow YAML file. |
| <code><a href="#projen.github.GithubWorkflow.property.runName">runName</a></code> | <code>string</code> | The name for workflow runs generated from the workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.GithubWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.GithubWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.GithubWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workflow.

---

##### `projenCredentials`<sup>Required</sup> <a name="projenCredentials" id="projen.github.GithubWorkflow.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>

GitHub API authentication method used by projen workflows.

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.GithubWorkflow.property.concurrency"></a>

```typescript
public readonly concurrency: string;
```

- *Type:* string
- *Default:* disabled

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

---

##### `file`<sup>Optional</sup> <a name="file" id="projen.github.GithubWorkflow.property.file"></a>

```typescript
public readonly file: YamlFile;
```

- *Type:* projen.YamlFile

The workflow YAML file.

May not exist if `workflowsEnabled` is false on `GitHub`.

---

##### `runName`<sup>Optional</sup> <a name="runName" id="projen.github.GithubWorkflow.property.runName"></a>

```typescript
public readonly runName: string;
```

- *Type:* string

The name for workflow runs generated from the workflow.

GitHub displays the
workflow run name in the list of workflow runs on your repository's
"Actions" tab. If `run-name` is omitted or is only whitespace, then the run
name is set to event-specific information for the workflow run. For
example, for a workflow triggered by a `push` or `pull_request` event, it
is set as the commit message.

This value can include expressions and can reference `github` and `inputs`
contexts.

---


### IssueTemplate <a name="IssueTemplate" id="projen.github.IssueTemplate"></a>

Generates Issue Templates for GitHub repositories see  {@link https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests}.

#### Initializers <a name="Initializers" id="projen.github.IssueTemplate.Initializer"></a>

```typescript
import { github } from 'projen'

new github.IssueTemplate(scope: IConstruct, options: IssueTemplateOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.IssueTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.github.IssueTemplate.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.IssueTemplateOptions">IssueTemplateOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.github.IssueTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Required</sup> <a name="options" id="projen.github.IssueTemplate.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.IssueTemplateOptions">IssueTemplateOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.IssueTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.IssueTemplate.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.IssueTemplate.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.IssueTemplate.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.IssueTemplate.addTemplates">addTemplates</a></code> | Adds issue templates to the project. |

---

##### `toString` <a name="toString" id="projen.github.IssueTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.IssueTemplate.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.IssueTemplate.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.IssueTemplate.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addTemplates` <a name="addTemplates" id="projen.github.IssueTemplate.addTemplates"></a>

```typescript
public addTemplates(options: IssueTemplateOptions): void
```

Adds issue templates to the project.

###### `options`<sup>Required</sup> <a name="options" id="projen.github.IssueTemplate.addTemplates.parameter.options"></a>

- *Type:* <a href="#projen.github.IssueTemplateOptions">IssueTemplateOptions</a>

The options for adding issue templates.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.IssueTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.IssueTemplate.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.IssueTemplate.isConstruct"></a>

```typescript
import { github } from 'projen'

github.IssueTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.IssueTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.IssueTemplate.isComponent"></a>

```typescript
import { github } from 'projen'

github.IssueTemplate.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.IssueTemplate.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.IssueTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.IssueTemplate.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.IssueTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.IssueTemplate.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Mergify <a name="Mergify" id="projen.github.Mergify"></a>

#### Initializers <a name="Initializers" id="projen.github.Mergify.Initializer"></a>

```typescript
import { github } from 'projen'

new github.Mergify(github: GitHub, options?: MergifyOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Mergify.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.Mergify.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.MergifyOptions">MergifyOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.Mergify.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.Mergify.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.MergifyOptions">MergifyOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Mergify.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.Mergify.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.Mergify.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.Mergify.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.Mergify.addQueue">addQueue</a></code> | *No description.* |
| <code><a href="#projen.github.Mergify.addRule">addRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="projen.github.Mergify.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.Mergify.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.Mergify.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.Mergify.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addQueue` <a name="addQueue" id="projen.github.Mergify.addQueue"></a>

```typescript
public addQueue(queue: MergifyQueue): void
```

###### `queue`<sup>Required</sup> <a name="queue" id="projen.github.Mergify.addQueue.parameter.queue"></a>

- *Type:* <a href="#projen.github.MergifyQueue">MergifyQueue</a>

---

##### `addRule` <a name="addRule" id="projen.github.Mergify.addRule"></a>

```typescript
public addRule(rule: MergifyRule): void
```

###### `rule`<sup>Required</sup> <a name="rule" id="projen.github.Mergify.addRule.parameter.rule"></a>

- *Type:* <a href="#projen.github.MergifyRule">MergifyRule</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Mergify.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.Mergify.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.Mergify.isConstruct"></a>

```typescript
import { github } from 'projen'

github.Mergify.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Mergify.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.Mergify.isComponent"></a>

```typescript
import { github } from 'projen'

github.Mergify.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Mergify.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Mergify.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.Mergify.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.Mergify.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.Mergify.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PullRequestBackport <a name="PullRequestBackport" id="projen.github.PullRequestBackport"></a>

#### Initializers <a name="Initializers" id="projen.github.PullRequestBackport.Initializer"></a>

```typescript
import { github } from 'projen'

new github.PullRequestBackport(scope: IConstruct, options?: PullRequestBackportOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestBackport.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.github.PullRequestBackport.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.PullRequestBackportOptions">PullRequestBackportOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.github.PullRequestBackport.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.PullRequestBackport.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.PullRequestBackportOptions">PullRequestBackportOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestBackport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.PullRequestBackport.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.PullRequestBackport.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.PullRequestBackport.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.github.PullRequestBackport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.PullRequestBackport.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.PullRequestBackport.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.PullRequestBackport.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestBackport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.PullRequestBackport.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.PullRequestBackport.isConstruct"></a>

```typescript
import { github } from 'projen'

github.PullRequestBackport.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestBackport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.PullRequestBackport.isComponent"></a>

```typescript
import { github } from 'projen'

github.PullRequestBackport.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestBackport.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestBackport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.PullRequestBackport.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.PullRequestBackport.property.file">file</a></code> | <code>projen.JsonFile</code> | *No description.* |
| <code><a href="#projen.github.PullRequestBackport.property.workflow">workflow</a></code> | <code><a href="#projen.github.GithubWorkflow">GithubWorkflow</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.PullRequestBackport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.PullRequestBackport.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="projen.github.PullRequestBackport.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="projen.github.PullRequestBackport.property.workflow"></a>

```typescript
public readonly workflow: GithubWorkflow;
```

- *Type:* <a href="#projen.github.GithubWorkflow">GithubWorkflow</a>

---


### PullRequestLint <a name="PullRequestLint" id="projen.github.PullRequestLint"></a>

Configure validations to run on GitHub pull requests.

Only generates a file if at least one linter is configured.

#### Initializers <a name="Initializers" id="projen.github.PullRequestLint.Initializer"></a>

```typescript
import { github } from 'projen'

new github.PullRequestLint(github: GitHub, options?: PullRequestLintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestLint.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.PullRequestLint.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.PullRequestLintOptions">PullRequestLintOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.PullRequestLint.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.PullRequestLint.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.PullRequestLintOptions">PullRequestLintOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestLint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.PullRequestLint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.PullRequestLint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.PullRequestLint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.github.PullRequestLint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.PullRequestLint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.PullRequestLint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.PullRequestLint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestLint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.PullRequestLint.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.PullRequestLint.isConstruct"></a>

```typescript
import { github } from 'projen'

github.PullRequestLint.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestLint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.PullRequestLint.isComponent"></a>

```typescript
import { github } from 'projen'

github.PullRequestLint.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestLint.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestLint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.PullRequestLint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.PullRequestLint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.PullRequestLint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### PullRequestTemplate <a name="PullRequestTemplate" id="projen.github.PullRequestTemplate"></a>

Template for GitHub pull requests.

#### Initializers <a name="Initializers" id="projen.github.PullRequestTemplate.Initializer"></a>

```typescript
import { github } from 'projen'

new github.PullRequestTemplate(github: GitHub, options?: PullRequestTemplateOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestTemplate.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.PullRequestTemplate.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.PullRequestTemplateOptions">PullRequestTemplateOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.PullRequestTemplate.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.PullRequestTemplate.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.PullRequestTemplateOptions">PullRequestTemplateOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.PullRequestTemplate.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.PullRequestTemplate.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.PullRequestTemplate.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.github.PullRequestTemplate.addLine">addLine</a></code> | Adds a line to the text file. |

---

##### `toString` <a name="toString" id="projen.github.PullRequestTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.PullRequestTemplate.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.PullRequestTemplate.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.PullRequestTemplate.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addLine` <a name="addLine" id="projen.github.PullRequestTemplate.addLine"></a>

```typescript
public addLine(line: string): void
```

Adds a line to the text file.

###### `line`<sup>Required</sup> <a name="line" id="projen.github.PullRequestTemplate.addLine.parameter.line"></a>

- *Type:* string

the line to add (can use tokens).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.PullRequestTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.PullRequestTemplate.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.github.PullRequestTemplate.of">of</a></code> | Returns the `PullRequestTemplate` instance associated with a project or `undefined` if there is no PullRequestTemplate. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.PullRequestTemplate.isConstruct"></a>

```typescript
import { github } from 'projen'

github.PullRequestTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.PullRequestTemplate.isComponent"></a>

```typescript
import { github } from 'projen'

github.PullRequestTemplate.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.PullRequestTemplate.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.github.PullRequestTemplate.of"></a>

```typescript
import { github } from 'projen'

github.PullRequestTemplate.of(project: Project)
```

Returns the `PullRequestTemplate` instance associated with a project or `undefined` if there is no PullRequestTemplate.

###### `project`<sup>Required</sup> <a name="project" id="projen.github.PullRequestTemplate.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.PullRequestTemplate.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.PullRequestTemplate.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.github.PullRequestTemplate.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.github.PullRequestTemplate.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.github.PullRequestTemplate.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.github.PullRequestTemplate.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.github.PullRequestTemplate.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.PullRequestTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.PullRequestTemplate.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.github.PullRequestTemplate.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.github.PullRequestTemplate.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.github.PullRequestTemplate.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.github.PullRequestTemplate.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.github.PullRequestTemplate.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.github.PullRequestTemplate.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### Stale <a name="Stale" id="projen.github.Stale"></a>

Warns and then closes issues and PRs that have had no activity for a specified amount of time.

The default configuration will:

 * Add a "Stale" label to pull requests after 14 days and closed after 2 days
 * Add a "Stale" label to issues after 60 days and closed after 7 days
 * If a comment is added, the label will be removed and timer is restarted.

> [https://github.com/actions/stale](https://github.com/actions/stale)

#### Initializers <a name="Initializers" id="projen.github.Stale.Initializer"></a>

```typescript
import { github } from 'projen'

new github.Stale(github: GitHub, options?: StaleOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Stale.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.Stale.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.StaleOptions">StaleOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.Stale.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.Stale.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.StaleOptions">StaleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Stale.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.Stale.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.Stale.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.Stale.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.github.Stale.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.Stale.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.Stale.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.Stale.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.Stale.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.Stale.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.Stale.isConstruct"></a>

```typescript
import { github } from 'projen'

github.Stale.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Stale.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.Stale.isComponent"></a>

```typescript
import { github } from 'projen'

github.Stale.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.Stale.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.Stale.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.Stale.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.Stale.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.Stale.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TaskWorkflow <a name="TaskWorkflow" id="projen.github.TaskWorkflow"></a>

A GitHub workflow for common build tasks within a project.

#### Initializers <a name="Initializers" id="projen.github.TaskWorkflow.Initializer"></a>

```typescript
import { github } from 'projen'

new github.TaskWorkflow(github: GitHub, options: TaskWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflow.Initializer.parameter.github">github</a></code> | <code><a href="#projen.github.GitHub">GitHub</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.TaskWorkflowOptions">TaskWorkflowOptions</a></code> | *No description.* |

---

##### `github`<sup>Required</sup> <a name="github" id="projen.github.TaskWorkflow.Initializer.parameter.github"></a>

- *Type:* <a href="#projen.github.GitHub">GitHub</a>

---

##### `options`<sup>Required</sup> <a name="options" id="projen.github.TaskWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.TaskWorkflowOptions">TaskWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.TaskWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.TaskWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.TaskWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.TaskWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.github.TaskWorkflow.addJob">addJob</a></code> | Adds a single job to the workflow. |
| <code><a href="#projen.github.TaskWorkflow.addJobs">addJobs</a></code> | Add jobs to the workflow. |
| <code><a href="#projen.github.TaskWorkflow.getJob">getJob</a></code> | Get a single job from the workflow. |
| <code><a href="#projen.github.TaskWorkflow.on">on</a></code> | Add events to triggers the workflow. |
| <code><a href="#projen.github.TaskWorkflow.removeJob">removeJob</a></code> | Removes a single job to the workflow. |
| <code><a href="#projen.github.TaskWorkflow.updateJob">updateJob</a></code> | Updates a single job to the workflow. |
| <code><a href="#projen.github.TaskWorkflow.updateJobs">updateJobs</a></code> | Updates jobs for this worklow Does a complete replace, it does not try to merge the jobs. |

---

##### `toString` <a name="toString" id="projen.github.TaskWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.TaskWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.TaskWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.TaskWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addJob` <a name="addJob" id="projen.github.TaskWorkflow.addJob"></a>

```typescript
public addJob(id: string, job: JobCallingReusableWorkflow | Job): void
```

Adds a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.TaskWorkflow.addJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

###### `job`<sup>Required</sup> <a name="job" id="projen.github.TaskWorkflow.addJob.parameter.job"></a>

- *Type:* <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>

The job specification.

---

##### `addJobs` <a name="addJobs" id="projen.github.TaskWorkflow.addJobs"></a>

```typescript
public addJobs(jobs: {[ key: string ]: JobCallingReusableWorkflow | Job}): void
```

Add jobs to the workflow.

###### `jobs`<sup>Required</sup> <a name="jobs" id="projen.github.TaskWorkflow.addJobs.parameter.jobs"></a>

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>}

Jobs to add.

---

##### `getJob` <a name="getJob" id="projen.github.TaskWorkflow.getJob"></a>

```typescript
public getJob(id: string): JobCallingReusableWorkflow | Job
```

Get a single job from the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.TaskWorkflow.getJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

##### `on` <a name="on" id="projen.github.TaskWorkflow.on"></a>

```typescript
public on(events: Triggers): void
```

Add events to triggers the workflow.

###### `events`<sup>Required</sup> <a name="events" id="projen.github.TaskWorkflow.on.parameter.events"></a>

- *Type:* <a href="#projen.github.workflows.Triggers">Triggers</a>

The event(s) to trigger the workflow.

---

##### `removeJob` <a name="removeJob" id="projen.github.TaskWorkflow.removeJob"></a>

```typescript
public removeJob(id: string): void
```

Removes a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.TaskWorkflow.removeJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

##### `updateJob` <a name="updateJob" id="projen.github.TaskWorkflow.updateJob"></a>

```typescript
public updateJob(id: string, job: JobCallingReusableWorkflow | Job): void
```

Updates a single job to the workflow.

###### `id`<sup>Required</sup> <a name="id" id="projen.github.TaskWorkflow.updateJob.parameter.id"></a>

- *Type:* string

The job name (unique within the workflow).

---

###### `job`<sup>Required</sup> <a name="job" id="projen.github.TaskWorkflow.updateJob.parameter.job"></a>

- *Type:* <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>

---

##### `updateJobs` <a name="updateJobs" id="projen.github.TaskWorkflow.updateJobs"></a>

```typescript
public updateJobs(jobs: {[ key: string ]: JobCallingReusableWorkflow | Job}): void
```

Updates jobs for this worklow Does a complete replace, it does not try to merge the jobs.

###### `jobs`<sup>Required</sup> <a name="jobs" id="projen.github.TaskWorkflow.updateJobs.parameter.jobs"></a>

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobCallingReusableWorkflow">JobCallingReusableWorkflow</a> | <a href="#projen.github.workflows.Job">Job</a>}

Jobs to update.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.TaskWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.TaskWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.TaskWorkflow.isConstruct"></a>

```typescript
import { github } from 'projen'

github.TaskWorkflow.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.TaskWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.TaskWorkflow.isComponent"></a>

```typescript
import { github } from 'projen'

github.TaskWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.TaskWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.TaskWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflow.property.name">name</a></code> | <code>string</code> | The name of the workflow. |
| <code><a href="#projen.github.TaskWorkflow.property.projenCredentials">projenCredentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | GitHub API authentication method used by projen workflows. |
| <code><a href="#projen.github.TaskWorkflow.property.concurrency">concurrency</a></code> | <code>string</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.TaskWorkflow.property.file">file</a></code> | <code>projen.YamlFile</code> | The workflow YAML file. |
| <code><a href="#projen.github.TaskWorkflow.property.runName">runName</a></code> | <code>string</code> | The name for workflow runs generated from the workflow. |
| <code><a href="#projen.github.TaskWorkflow.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflow.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.TaskWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.TaskWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.TaskWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workflow.

---

##### `projenCredentials`<sup>Required</sup> <a name="projenCredentials" id="projen.github.TaskWorkflow.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>

GitHub API authentication method used by projen workflows.

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.TaskWorkflow.property.concurrency"></a>

```typescript
public readonly concurrency: string;
```

- *Type:* string
- *Default:* disabled

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

---

##### `file`<sup>Optional</sup> <a name="file" id="projen.github.TaskWorkflow.property.file"></a>

```typescript
public readonly file: YamlFile;
```

- *Type:* projen.YamlFile

The workflow YAML file.

May not exist if `workflowsEnabled` is false on `GitHub`.

---

##### `runName`<sup>Optional</sup> <a name="runName" id="projen.github.TaskWorkflow.property.runName"></a>

```typescript
public readonly runName: string;
```

- *Type:* string

The name for workflow runs generated from the workflow.

GitHub displays the
workflow run name in the list of workflow runs on your repository's
"Actions" tab. If `run-name` is omitted or is only whitespace, then the run
name is set to event-specific information for the workflow run. For
example, for a workflow triggered by a `push` or `pull_request` event, it
is set as the commit message.

This value can include expressions and can reference `github` and `inputs`
contexts.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="projen.github.TaskWorkflow.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.github.TaskWorkflow.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

---


### TaskWorkflowJob <a name="TaskWorkflowJob" id="projen.github.TaskWorkflowJob"></a>

The primary or initial job of a TaskWorkflow.

#### Initializers <a name="Initializers" id="projen.github.TaskWorkflowJob.Initializer"></a>

```typescript
import { github } from 'projen'

new github.TaskWorkflowJob(scope: IConstruct, task: Task, options: TaskWorkflowJobOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflowJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | should be part of the project the Task belongs to. |
| <code><a href="#projen.github.TaskWorkflowJob.Initializer.parameter.task">task</a></code> | <code>projen.Task</code> | the main task that is run as part of this job. |
| <code><a href="#projen.github.TaskWorkflowJob.Initializer.parameter.options">options</a></code> | <code><a href="#projen.github.TaskWorkflowJobOptions">TaskWorkflowJobOptions</a></code> | options to configure the TaskWorkflowJob. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.github.TaskWorkflowJob.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

should be part of the project the Task belongs to.

---

##### `task`<sup>Required</sup> <a name="task" id="projen.github.TaskWorkflowJob.Initializer.parameter.task"></a>

- *Type:* projen.Task

the main task that is run as part of this job.

---

##### `options`<sup>Required</sup> <a name="options" id="projen.github.TaskWorkflowJob.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.github.TaskWorkflowJobOptions">TaskWorkflowJobOptions</a>

options to configure the TaskWorkflowJob.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.TaskWorkflowJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.github.TaskWorkflowJob.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.github.TaskWorkflowJob.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.github.TaskWorkflowJob.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.github.TaskWorkflowJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.github.TaskWorkflowJob.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.github.TaskWorkflowJob.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.github.TaskWorkflowJob.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.TaskWorkflowJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.github.TaskWorkflowJob.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.github.TaskWorkflowJob.isConstruct"></a>

```typescript
import { github } from 'projen'

github.TaskWorkflowJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.TaskWorkflowJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.github.TaskWorkflowJob.isComponent"></a>

```typescript
import { github } from 'projen'

github.TaskWorkflowJob.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.github.TaskWorkflowJob.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflowJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.github.TaskWorkflowJob.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.permissions">permissions</a></code> | <code><a href="#projen.github.workflows.JobPermissions">JobPermissions</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.steps">steps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.concurrency">concurrency</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.container">container</a></code> | <code><a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.defaults">defaults</a></code> | <code><a href="#projen.github.workflows.JobDefaults">JobDefaults</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.environment">environment</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.if">if</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.needs">needs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.outputs">outputs</a></code> | <code>{[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.runsOn">runsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.services">services</a></code> | <code>{[ key: string ]: <a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a>}</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.strategy">strategy</a></code> | <code><a href="#projen.github.workflows.JobStrategy">JobStrategy</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJob.property.tools">tools</a></code> | <code><a href="#projen.github.workflows.Tools">Tools</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.github.TaskWorkflowJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.github.TaskWorkflowJob.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.TaskWorkflowJob.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* <a href="#projen.github.workflows.JobPermissions">JobPermissions</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="projen.github.TaskWorkflowJob.property.steps"></a>

```typescript
public readonly steps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.TaskWorkflowJob.property.concurrency"></a>

```typescript
public readonly concurrency: any;
```

- *Type:* any

---

##### `container`<sup>Optional</sup> <a name="container" id="projen.github.TaskWorkflowJob.property.container"></a>

```typescript
public readonly container: ContainerOptions;
```

- *Type:* <a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a>

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.TaskWorkflowJob.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="projen.github.TaskWorkflowJob.property.defaults"></a>

```typescript
public readonly defaults: JobDefaults;
```

- *Type:* <a href="#projen.github.workflows.JobDefaults">JobDefaults</a>

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.TaskWorkflowJob.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="projen.github.TaskWorkflowJob.property.environment"></a>

```typescript
public readonly environment: any;
```

- *Type:* any

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.TaskWorkflowJob.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.TaskWorkflowJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `needs`<sup>Optional</sup> <a name="needs" id="projen.github.TaskWorkflowJob.property.needs"></a>

```typescript
public readonly needs: string[];
```

- *Type:* string[]

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen.github.TaskWorkflowJob.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: JobStepOutput};
```

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.TaskWorkflowJob.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.TaskWorkflowJob.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

---

##### `services`<sup>Optional</sup> <a name="services" id="projen.github.TaskWorkflowJob.property.services"></a>

```typescript
public readonly services: {[ key: string ]: ContainerOptions};
```

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a>}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="projen.github.TaskWorkflowJob.property.strategy"></a>

```typescript
public readonly strategy: JobStrategy;
```

- *Type:* <a href="#projen.github.workflows.JobStrategy">JobStrategy</a>

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.TaskWorkflowJob.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

---

##### `tools`<sup>Optional</sup> <a name="tools" id="projen.github.TaskWorkflowJob.property.tools"></a>

```typescript
public readonly tools: Tools;
```

- *Type:* <a href="#projen.github.workflows.Tools">Tools</a>

---


## Structs <a name="Structs" id="Structs"></a>

### AutoApproveOptions <a name="AutoApproveOptions" id="projen.github.AutoApproveOptions"></a>

Options for 'AutoApprove'.

#### Initializer <a name="Initializer" id="projen.github.AutoApproveOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const autoApproveOptions: github.AutoApproveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoApproveOptions.property.allowedUsernames">allowedUsernames</a></code> | <code>string[]</code> | Only pull requests authored by these Github usernames will be auto-approved. |
| <code><a href="#projen.github.AutoApproveOptions.property.label">label</a></code> | <code>string</code> | Only pull requests with this label will be auto-approved. |
| <code><a href="#projen.github.AutoApproveOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.AutoApproveOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.github.AutoApproveOptions.property.secret">secret</a></code> | <code>string</code> | A GitHub secret name which contains a GitHub Access Token with write permissions for the `pull_request` scope. |

---

##### `allowedUsernames`<sup>Optional</sup> <a name="allowedUsernames" id="projen.github.AutoApproveOptions.property.allowedUsernames"></a>

```typescript
public readonly allowedUsernames: string[];
```

- *Type:* string[]
- *Default:* ['github-bot']

Only pull requests authored by these Github usernames will be auto-approved.

---

##### `label`<sup>Optional</sup> <a name="label" id="projen.github.AutoApproveOptions.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string
- *Default:* 'auto-approve'

Only pull requests with this label will be auto-approved.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.AutoApproveOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.AutoApproveOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="projen.github.AutoApproveOptions.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string
- *Default:* "GITHUB_TOKEN"

A GitHub secret name which contains a GitHub Access Token with write permissions for the `pull_request` scope.

This token is used to approve pull requests.

Github forbids an identity to approve its own pull request.
If your project produces automated pull requests using the Github default token -
{@link https://docs.github.com/en/actions/reference/authentication-in-a-workflow `GITHUB_TOKEN` }
- that you would like auto approved, such as when using the `depsUpgrade` property in
`NodeProjectOptions`, then you must use a different token here.

---

### AutoMergeOptions <a name="AutoMergeOptions" id="projen.github.AutoMergeOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.AutoMergeOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const autoMergeOptions: github.AutoMergeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.AutoMergeOptions.property.approvedReviews">approvedReviews</a></code> | <code>number</code> | Number of approved code reviews. |
| <code><a href="#projen.github.AutoMergeOptions.property.blockingLabels">blockingLabels</a></code> | <code>string[]</code> | List of labels that will prevent auto-merging. |
| <code><a href="#projen.github.AutoMergeOptions.property.queueName">queueName</a></code> | <code>string</code> | Name of the mergify queue. |
| <code><a href="#projen.github.AutoMergeOptions.property.ruleName">ruleName</a></code> | <code>string</code> | Name of the mergify rule. |

---

##### `approvedReviews`<sup>Optional</sup> <a name="approvedReviews" id="projen.github.AutoMergeOptions.property.approvedReviews"></a>

```typescript
public readonly approvedReviews: number;
```

- *Type:* number
- *Default:* 1

Number of approved code reviews.

---

##### `blockingLabels`<sup>Optional</sup> <a name="blockingLabels" id="projen.github.AutoMergeOptions.property.blockingLabels"></a>

```typescript
public readonly blockingLabels: string[];
```

- *Type:* string[]
- *Default:* ['do-not-merge']

List of labels that will prevent auto-merging.

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="projen.github.AutoMergeOptions.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string
- *Default:* 'default'

Name of the mergify queue.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="projen.github.AutoMergeOptions.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* 'Automatic merge on approval and successful build'

Name of the mergify rule.

---

### CheckoutOptions <a name="CheckoutOptions" id="projen.github.CheckoutOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.CheckoutOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const checkoutOptions: github.CheckoutOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.CheckoutOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.CheckoutOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.CheckoutOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.CheckoutOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.CheckoutOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.CheckoutOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.CheckoutOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen.github.CheckoutOptions.property.with">with</a></code> | <code><a href="#projen.github.CheckoutWith">CheckoutWith</a></code> | Options for `checkout`. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.CheckoutOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.CheckoutOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.CheckoutOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.CheckoutOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.CheckoutOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.CheckoutOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.CheckoutOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `with`<sup>Optional</sup> <a name="with" id="projen.github.CheckoutOptions.property.with"></a>

```typescript
public readonly with: CheckoutWith;
```

- *Type:* <a href="#projen.github.CheckoutWith">CheckoutWith</a>

Options for `checkout`.

---

### CheckoutWith <a name="CheckoutWith" id="projen.github.CheckoutWith"></a>

Options for `checkout`.

#### Initializer <a name="Initializer" id="projen.github.CheckoutWith.Initializer"></a>

```typescript
import { github } from 'projen'

const checkoutWith: github.CheckoutWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.CheckoutWith.property.fetchDepth">fetchDepth</a></code> | <code>number</code> | Number of commits to fetch. |
| <code><a href="#projen.github.CheckoutWith.property.lfs">lfs</a></code> | <code>boolean</code> | Whether LFS is enabled for the GitHub repository. |
| <code><a href="#projen.github.CheckoutWith.property.ref">ref</a></code> | <code>string</code> | Branch or tag name. |
| <code><a href="#projen.github.CheckoutWith.property.repository">repository</a></code> | <code>string</code> | The repository (owner/repo) to use. |
| <code><a href="#projen.github.CheckoutWith.property.token">token</a></code> | <code>string</code> | A GitHub token to use when checking out the repository. |

---

##### `fetchDepth`<sup>Optional</sup> <a name="fetchDepth" id="projen.github.CheckoutWith.property.fetchDepth"></a>

```typescript
public readonly fetchDepth: number;
```

- *Type:* number
- *Default:* 1

Number of commits to fetch.

0 indicates all history for all branches and tags.

---

##### `lfs`<sup>Optional</sup> <a name="lfs" id="projen.github.CheckoutWith.property.lfs"></a>

```typescript
public readonly lfs: boolean;
```

- *Type:* boolean
- *Default:* false

Whether LFS is enabled for the GitHub repository.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="projen.github.CheckoutWith.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string
- *Default:* the default branch is implicitly used

Branch or tag name.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.github.CheckoutWith.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string
- *Default:* the default repository is implicitly used

The repository (owner/repo) to use.

---

##### `token`<sup>Optional</sup> <a name="token" id="projen.github.CheckoutWith.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string
- *Default:* the default GITHUB_TOKEN is implicitly used

A GitHub token to use when checking out the repository.

If the intent is to push changes back to the branch, then you must use a
PAT with `repo` (and possibly `workflows`) permissions.

---

### CheckoutWithPatchOptions <a name="CheckoutWithPatchOptions" id="projen.github.CheckoutWithPatchOptions"></a>

Options for `checkoutWithPatch`.

#### Initializer <a name="Initializer" id="projen.github.CheckoutWithPatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const checkoutWithPatchOptions: github.CheckoutWithPatchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.fetchDepth">fetchDepth</a></code> | <code>number</code> | Number of commits to fetch. |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.lfs">lfs</a></code> | <code>boolean</code> | Whether LFS is enabled for the GitHub repository. |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.ref">ref</a></code> | <code>string</code> | Branch or tag name. |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.repository">repository</a></code> | <code>string</code> | The repository (owner/repo) to use. |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.token">token</a></code> | <code>string</code> | A GitHub token to use when checking out the repository. |
| <code><a href="#projen.github.CheckoutWithPatchOptions.property.patchFile">patchFile</a></code> | <code>string</code> | The name of the artifact the patch is stored as. |

---

##### `fetchDepth`<sup>Optional</sup> <a name="fetchDepth" id="projen.github.CheckoutWithPatchOptions.property.fetchDepth"></a>

```typescript
public readonly fetchDepth: number;
```

- *Type:* number
- *Default:* 1

Number of commits to fetch.

0 indicates all history for all branches and tags.

---

##### `lfs`<sup>Optional</sup> <a name="lfs" id="projen.github.CheckoutWithPatchOptions.property.lfs"></a>

```typescript
public readonly lfs: boolean;
```

- *Type:* boolean
- *Default:* false

Whether LFS is enabled for the GitHub repository.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="projen.github.CheckoutWithPatchOptions.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string
- *Default:* the default branch is implicitly used

Branch or tag name.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.github.CheckoutWithPatchOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string
- *Default:* the default repository is implicitly used

The repository (owner/repo) to use.

---

##### `token`<sup>Optional</sup> <a name="token" id="projen.github.CheckoutWithPatchOptions.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string
- *Default:* the default GITHUB_TOKEN is implicitly used

A GitHub token to use when checking out the repository.

If the intent is to push changes back to the branch, then you must use a
PAT with `repo` (and possibly `workflows`) permissions.

---

##### `patchFile`<sup>Optional</sup> <a name="patchFile" id="projen.github.CheckoutWithPatchOptions.property.patchFile"></a>

```typescript
public readonly patchFile: string;
```

- *Type:* string
- *Default:* ".repo.patch"

The name of the artifact the patch is stored as.

---

### ContactLinks <a name="ContactLinks" id="projen.github.ContactLinks"></a>

#### Initializer <a name="Initializer" id="projen.github.ContactLinks.Initializer"></a>

```typescript
import { github } from 'projen'

const contactLinks: github.ContactLinks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.ContactLinks.property.about">about</a></code> | <code>string</code> | A brief description of the contact link. |
| <code><a href="#projen.github.ContactLinks.property.name">name</a></code> | <code>string</code> | The name of the contact link. |
| <code><a href="#projen.github.ContactLinks.property.url">url</a></code> | <code>string</code> | The URL of the contact link. |

---

##### `about`<sup>Required</sup> <a name="about" id="projen.github.ContactLinks.property.about"></a>

```typescript
public readonly about: string;
```

- *Type:* string

A brief description of the contact link.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.ContactLinks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact link.

---

##### `url`<sup>Required</sup> <a name="url" id="projen.github.ContactLinks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the contact link.

---

### ContributorStatementOptions <a name="ContributorStatementOptions" id="projen.github.ContributorStatementOptions"></a>

Options for requiring a contributor statement on Pull Requests.

#### Initializer <a name="Initializer" id="projen.github.ContributorStatementOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const contributorStatementOptions: github.ContributorStatementOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.ContributorStatementOptions.property.exemptLabels">exemptLabels</a></code> | <code>string[]</code> | Pull requests with one of these labels are exempted from a contributor statement. |
| <code><a href="#projen.github.ContributorStatementOptions.property.exemptUsers">exemptUsers</a></code> | <code>string[]</code> | Pull requests from these GitHub users are exempted from a contributor statement. |

---

##### `exemptLabels`<sup>Optional</sup> <a name="exemptLabels" id="projen.github.ContributorStatementOptions.property.exemptLabels"></a>

```typescript
public readonly exemptLabels: string[];
```

- *Type:* string[]
- *Default:* no labels are excluded

Pull requests with one of these labels are exempted from a contributor statement.

---

##### `exemptUsers`<sup>Optional</sup> <a name="exemptUsers" id="projen.github.ContributorStatementOptions.property.exemptUsers"></a>

```typescript
public readonly exemptUsers: string[];
```

- *Type:* string[]
- *Default:* no users are exempted

Pull requests from these GitHub users are exempted from a contributor statement.

---

### CreatePullRequestOptions <a name="CreatePullRequestOptions" id="projen.github.CreatePullRequestOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.CreatePullRequestOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const createPullRequestOptions: github.CreatePullRequestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.CreatePullRequestOptions.property.pullRequestDescription">pullRequestDescription</a></code> | <code>string</code> | Description added to the pull request. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.pullRequestTitle">pullRequestTitle</a></code> | <code>string</code> | The full title used to create the pull request. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the workflow that will create the PR. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.assignees">assignees</a></code> | <code>string[]</code> | Assignees to add on the PR. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.baseBranch">baseBranch</a></code> | <code>string</code> | Sets the pull request base branch. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.branchName">branchName</a></code> | <code>string</code> | The pull request branch name. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.credentials">credentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | The job credentials used to create the pull request. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.gitIdentity">gitIdentity</a></code> | <code><a href="#projen.github.GitIdentity">GitIdentity</a></code> | The git identity used to create the commit. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.labels">labels</a></code> | <code>string[]</code> | Labels to apply on the PR. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.signoff">signoff</a></code> | <code>boolean</code> | Add Signed-off-by line by the committer at the end of the commit log message. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.stepId">stepId</a></code> | <code>string</code> | The step ID which produces the output which indicates if a patch was created. |
| <code><a href="#projen.github.CreatePullRequestOptions.property.stepName">stepName</a></code> | <code>string</code> | The name of the step displayed on GitHub. |

---

##### `pullRequestDescription`<sup>Required</sup> <a name="pullRequestDescription" id="projen.github.CreatePullRequestOptions.property.pullRequestDescription"></a>

```typescript
public readonly pullRequestDescription: string;
```

- *Type:* string

Description added to the pull request.

Providence information are automatically added.

---

##### `pullRequestTitle`<sup>Required</sup> <a name="pullRequestTitle" id="projen.github.CreatePullRequestOptions.property.pullRequestTitle"></a>

```typescript
public readonly pullRequestTitle: string;
```

- *Type:* string

The full title used to create the pull request.

If PR titles are validated in this repo, the title should comply with the respective rules.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="projen.github.CreatePullRequestOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The name of the workflow that will create the PR.

---

##### `assignees`<sup>Optional</sup> <a name="assignees" id="projen.github.CreatePullRequestOptions.property.assignees"></a>

```typescript
public readonly assignees: string[];
```

- *Type:* string[]
- *Default:* no assignees

Assignees to add on the PR.

---

##### `baseBranch`<sup>Optional</sup> <a name="baseBranch" id="projen.github.CreatePullRequestOptions.property.baseBranch"></a>

```typescript
public readonly baseBranch: string;
```

- *Type:* string
- *Default:* The branch checked out in the workflow.

Sets the pull request base branch.

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="projen.github.CreatePullRequestOptions.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string
- *Default:* `github-actions/${options.workflowName}`

The pull request branch name.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="projen.github.CreatePullRequestOptions.property.credentials"></a>

```typescript
public readonly credentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>

The job credentials used to create the pull request.

Provided credentials must have permissions to create a pull request on the repository.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.github.CreatePullRequestOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>
- *Default:* the default github-actions user

The git identity used to create the commit.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.github.CreatePullRequestOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]
- *Default:* no labels.

Labels to apply on the PR.

---

##### `signoff`<sup>Optional</sup> <a name="signoff" id="projen.github.CreatePullRequestOptions.property.signoff"></a>

```typescript
public readonly signoff: boolean;
```

- *Type:* boolean
- *Default:* true

Add Signed-off-by line by the committer at the end of the commit log message.

---

##### `stepId`<sup>Optional</sup> <a name="stepId" id="projen.github.CreatePullRequestOptions.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string
- *Default:* "create_pr"

The step ID which produces the output which indicates if a patch was created.

---

##### `stepName`<sup>Optional</sup> <a name="stepName" id="projen.github.CreatePullRequestOptions.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string
- *Default:* "Create Pull Request"

The name of the step displayed on GitHub.

---

### DependabotAllow <a name="DependabotAllow" id="projen.github.DependabotAllow"></a>

You can use the `allow` option to customize which dependencies are updated.

The allow option supports the following options.

#### Initializer <a name="Initializer" id="projen.github.DependabotAllow.Initializer"></a>

```typescript
import { github } from 'projen'

const dependabotAllow: github.DependabotAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DependabotAllow.property.dependencyName">dependencyName</a></code> | <code>string</code> | Use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters. |

---

##### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="projen.github.DependabotAllow.property.dependencyName"></a>

```typescript
public readonly dependencyName: string;
```

- *Type:* string

Use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters.

For Java dependencies, the format of the dependency-name attribute is:
`groupId:artifactId`, for example: `org.kohsuke:github-api`.

---

### DependabotGroup <a name="DependabotGroup" id="projen.github.DependabotGroup"></a>

Defines a single group for dependency updates.

#### Initializer <a name="Initializer" id="projen.github.DependabotGroup.Initializer"></a>

```typescript
import { github } from 'projen'

const dependabotGroup: github.DependabotGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DependabotGroup.property.patterns">patterns</a></code> | <code>string[]</code> | Define a list of strings (with or without wildcards) that will match package names to form this dependency group. |
| <code><a href="#projen.github.DependabotGroup.property.excludePatterns">excludePatterns</a></code> | <code>string[]</code> | Optionally you can use this to exclude certain dependencies from the group. |

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="projen.github.DependabotGroup.property.patterns"></a>

```typescript
public readonly patterns: string[];
```

- *Type:* string[]

Define a list of strings (with or without wildcards) that will match package names to form this dependency group.

---

##### `excludePatterns`<sup>Optional</sup> <a name="excludePatterns" id="projen.github.DependabotGroup.property.excludePatterns"></a>

```typescript
public readonly excludePatterns: string[];
```

- *Type:* string[]

Optionally you can use this to exclude certain dependencies from the group.

---

### DependabotIgnore <a name="DependabotIgnore" id="projen.github.DependabotIgnore"></a>

You can use the `ignore` option to customize which dependencies are updated.

The ignore option supports the following options.

#### Initializer <a name="Initializer" id="projen.github.DependabotIgnore.Initializer"></a>

```typescript
import { github } from 'projen'

const dependabotIgnore: github.DependabotIgnore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DependabotIgnore.property.dependencyName">dependencyName</a></code> | <code>string</code> | Use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters. |
| <code><a href="#projen.github.DependabotIgnore.property.versions">versions</a></code> | <code>string[]</code> | Use to ignore specific versions or ranges of versions. |

---

##### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="projen.github.DependabotIgnore.property.dependencyName"></a>

```typescript
public readonly dependencyName: string;
```

- *Type:* string

Use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters.

For Java dependencies, the format of the dependency-name attribute is:
`groupId:artifactId`, for example: `org.kohsuke:github-api`.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="projen.github.DependabotIgnore.property.versions"></a>

```typescript
public readonly versions: string[];
```

- *Type:* string[]

Use to ignore specific versions or ranges of versions.

If you want to
define a range, use the standard pattern for the package manager (for
example: `^1.0.0` for npm, or `~> 2.0` for Bundler).

---

### DependabotOptions <a name="DependabotOptions" id="projen.github.DependabotOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.DependabotOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const dependabotOptions: github.DependabotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DependabotOptions.property.allow">allow</a></code> | <code><a href="#projen.github.DependabotAllow">DependabotAllow</a>[]</code> | https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow. |
| <code><a href="#projen.github.DependabotOptions.property.assignees">assignees</a></code> | <code>string[]</code> | Specify individual assignees or teams of assignees for all pull requests raised for a package manager. |
| <code><a href="#projen.github.DependabotOptions.property.groups">groups</a></code> | <code>{[ key: string ]: <a href="#projen.github.DependabotGroup">DependabotGroup</a>}</code> | https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups. |
| <code><a href="#projen.github.DependabotOptions.property.ignore">ignore</a></code> | <code><a href="#projen.github.DependabotIgnore">DependabotIgnore</a>[]</code> | You can use the `ignore` option to customize which dependencies are updated. |
| <code><a href="#projen.github.DependabotOptions.property.ignoreProjen">ignoreProjen</a></code> | <code>boolean</code> | Ignores updates to `projen`. |
| <code><a href="#projen.github.DependabotOptions.property.labels">labels</a></code> | <code>string[]</code> | List of labels to apply to the created PR's. |
| <code><a href="#projen.github.DependabotOptions.property.openPullRequestsLimit">openPullRequestsLimit</a></code> | <code>number</code> | Sets the maximum of pull requests Dependabot opens for version updates. |
| <code><a href="#projen.github.DependabotOptions.property.registries">registries</a></code> | <code>{[ key: string ]: <a href="#projen.github.DependabotRegistry">DependabotRegistry</a>}</code> | Map of package registries to use. |
| <code><a href="#projen.github.DependabotOptions.property.reviewers">reviewers</a></code> | <code>string[]</code> | Specify individual reviewers or teams of reviewers for all pull requests raised for a package manager. |
| <code><a href="#projen.github.DependabotOptions.property.scheduleInterval">scheduleInterval</a></code> | <code><a href="#projen.github.DependabotScheduleInterval">DependabotScheduleInterval</a></code> | How often to check for new versions and raise pull requests. |
| <code><a href="#projen.github.DependabotOptions.property.targetBranch">targetBranch</a></code> | <code>string</code> | https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch You can configure the target branch for raising pull requests for version updates against. |
| <code><a href="#projen.github.DependabotOptions.property.versioningStrategy">versioningStrategy</a></code> | <code><a href="#projen.github.VersioningStrategy">VersioningStrategy</a></code> | The strategy to use when edits manifest and lock files. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="projen.github.DependabotOptions.property.allow"></a>

```typescript
public readonly allow: DependabotAllow[];
```

- *Type:* <a href="#projen.github.DependabotAllow">DependabotAllow</a>[]
- *Default:* []

https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow.

Use the allow option to customize which dependencies are updated. This
applies to both version and security updates.

---

##### `assignees`<sup>Optional</sup> <a name="assignees" id="projen.github.DependabotOptions.property.assignees"></a>

```typescript
public readonly assignees: string[];
```

- *Type:* string[]
- *Default:* []

Specify individual assignees or teams of assignees for all pull requests raised for a package manager.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="projen.github.DependabotOptions.property.groups"></a>

```typescript
public readonly groups: {[ key: string ]: DependabotGroup};
```

- *Type:* {[ key: string ]: <a href="#projen.github.DependabotGroup">DependabotGroup</a>}
- *Default:* []

https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups.

You can create groups to package dependency updates together into a single PR.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="projen.github.DependabotOptions.property.ignore"></a>

```typescript
public readonly ignore: DependabotIgnore[];
```

- *Type:* <a href="#projen.github.DependabotIgnore">DependabotIgnore</a>[]
- *Default:* []

You can use the `ignore` option to customize which dependencies are updated.

The ignore option supports the following options.

---

##### `ignoreProjen`<sup>Optional</sup> <a name="ignoreProjen" id="projen.github.DependabotOptions.property.ignoreProjen"></a>

```typescript
public readonly ignoreProjen: boolean;
```

- *Type:* boolean
- *Default:* true

Ignores updates to `projen`.

This is required since projen updates may cause changes in committed files
and anti-tamper checks will fail.

Projen upgrades are covered through the `ProjenUpgrade` class.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.github.DependabotOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

List of labels to apply to the created PR's.

---

##### `openPullRequestsLimit`<sup>Optional</sup> <a name="openPullRequestsLimit" id="projen.github.DependabotOptions.property.openPullRequestsLimit"></a>

```typescript
public readonly openPullRequestsLimit: number;
```

- *Type:* number
- *Default:* 5

Sets the maximum of pull requests Dependabot opens for version updates.

Dependabot will not open any new requests until some of those open requests
are merged or closed.

---

##### `registries`<sup>Optional</sup> <a name="registries" id="projen.github.DependabotOptions.property.registries"></a>

```typescript
public readonly registries: {[ key: string ]: DependabotRegistry};
```

- *Type:* {[ key: string ]: <a href="#projen.github.DependabotRegistry">DependabotRegistry</a>}
- *Default:* use public registries

Map of package registries to use.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="projen.github.DependabotOptions.property.reviewers"></a>

```typescript
public readonly reviewers: string[];
```

- *Type:* string[]
- *Default:* []

Specify individual reviewers or teams of reviewers for all pull requests raised for a package manager.

---

##### `scheduleInterval`<sup>Optional</sup> <a name="scheduleInterval" id="projen.github.DependabotOptions.property.scheduleInterval"></a>

```typescript
public readonly scheduleInterval: DependabotScheduleInterval;
```

- *Type:* <a href="#projen.github.DependabotScheduleInterval">DependabotScheduleInterval</a>
- *Default:* ScheduleInterval.DAILY

How often to check for new versions and raise pull requests.

---

##### `targetBranch`<sup>Optional</sup> <a name="targetBranch" id="projen.github.DependabotOptions.property.targetBranch"></a>

```typescript
public readonly targetBranch: string;
```

- *Type:* string

https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch You can configure the target branch for raising pull requests for version updates against.

---

##### `versioningStrategy`<sup>Optional</sup> <a name="versioningStrategy" id="projen.github.DependabotOptions.property.versioningStrategy"></a>

```typescript
public readonly versioningStrategy: VersioningStrategy;
```

- *Type:* <a href="#projen.github.VersioningStrategy">VersioningStrategy</a>
- *Default:* VersioningStrategy.LOCKFILE_ONLY The default is to only update the lock file because package.json is controlled by projen and any outside updates will fail the build.

The strategy to use when edits manifest and lock files.

---

### DependabotRegistry <a name="DependabotRegistry" id="projen.github.DependabotRegistry"></a>

Use to add private registry support for dependabot.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#configuration-options-for-private-registries](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#configuration-options-for-private-registries)

#### Initializer <a name="Initializer" id="projen.github.DependabotRegistry.Initializer"></a>

```typescript
import { github } from 'projen'

const dependabotRegistry: github.DependabotRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DependabotRegistry.property.type">type</a></code> | <code><a href="#projen.github.DependabotRegistryType">DependabotRegistryType</a></code> | Registry type e.g. 'npm-registry' or 'docker-registry'. |
| <code><a href="#projen.github.DependabotRegistry.property.url">url</a></code> | <code>string</code> | Url for the registry e.g. 'https://npm.pkg.github.com' or 'registry.hub.docker.com'. |
| <code><a href="#projen.github.DependabotRegistry.property.key">key</a></code> | <code>string</code> | A reference to a Dependabot secret containing an access key for this registry. |
| <code><a href="#projen.github.DependabotRegistry.property.organization">organization</a></code> | <code>string</code> | Used with the hex-organization registry type. |
| <code><a href="#projen.github.DependabotRegistry.property.password">password</a></code> | <code>string</code> | A reference to a Dependabot secret containing the password for the specified user. |
| <code><a href="#projen.github.DependabotRegistry.property.replacesBase">replacesBase</a></code> | <code>boolean</code> | For registries with type: python-index, if the boolean value is true, pip esolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default https://pypi.org/simple). |
| <code><a href="#projen.github.DependabotRegistry.property.token">token</a></code> | <code>string</code> | Secret token for dependabot access e.g. '${{ secrets.DEPENDABOT_PACKAGE_TOKEN }}'. |
| <code><a href="#projen.github.DependabotRegistry.property.username">username</a></code> | <code>string</code> | The username that Dependabot uses to access the registry. |

---

##### `type`<sup>Required</sup> <a name="type" id="projen.github.DependabotRegistry.property.type"></a>

```typescript
public readonly type: DependabotRegistryType;
```

- *Type:* <a href="#projen.github.DependabotRegistryType">DependabotRegistryType</a>

Registry type e.g. 'npm-registry' or 'docker-registry'.

---

##### `url`<sup>Required</sup> <a name="url" id="projen.github.DependabotRegistry.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Url for the registry e.g. 'https://npm.pkg.github.com' or 'registry.hub.docker.com'.

---

##### `key`<sup>Optional</sup> <a name="key" id="projen.github.DependabotRegistry.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string
- *Default:* undefined

A reference to a Dependabot secret containing an access key for this registry.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="projen.github.DependabotRegistry.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string
- *Default:* undefined

Used with the hex-organization registry type.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#hex-organization](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#hex-organization)

---

##### `password`<sup>Optional</sup> <a name="password" id="projen.github.DependabotRegistry.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string
- *Default:* undefined

A reference to a Dependabot secret containing the password for the specified user.

---

##### `replacesBase`<sup>Optional</sup> <a name="replacesBase" id="projen.github.DependabotRegistry.property.replacesBase"></a>

```typescript
public readonly replacesBase: boolean;
```

- *Type:* boolean
- *Default:* undefined

For registries with type: python-index, if the boolean value is true, pip esolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default https://pypi.org/simple).

---

##### `token`<sup>Optional</sup> <a name="token" id="projen.github.DependabotRegistry.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string
- *Default:* undefined

Secret token for dependabot access e.g. '${{ secrets.DEPENDABOT_PACKAGE_TOKEN }}'.

---

##### `username`<sup>Optional</sup> <a name="username" id="projen.github.DependabotRegistry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string
- *Default:* do not authenticate

The username that Dependabot uses to access the registry.

---

### DownloadArtifactOptions <a name="DownloadArtifactOptions" id="projen.github.DownloadArtifactOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.DownloadArtifactOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const downloadArtifactOptions: github.DownloadArtifactOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DownloadArtifactOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen.github.DownloadArtifactOptions.property.with">with</a></code> | <code><a href="#projen.github.DownloadArtifactWith">DownloadArtifactWith</a></code> | Options for `download-artifact`. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.DownloadArtifactOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.DownloadArtifactOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.DownloadArtifactOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.DownloadArtifactOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.DownloadArtifactOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.DownloadArtifactOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.DownloadArtifactOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `with`<sup>Required</sup> <a name="with" id="projen.github.DownloadArtifactOptions.property.with"></a>

```typescript
public readonly with: DownloadArtifactWith;
```

- *Type:* <a href="#projen.github.DownloadArtifactWith">DownloadArtifactWith</a>

Options for `download-artifact`.

---

### DownloadArtifactWith <a name="DownloadArtifactWith" id="projen.github.DownloadArtifactWith"></a>

#### Initializer <a name="Initializer" id="projen.github.DownloadArtifactWith.Initializer"></a>

```typescript
import { github } from 'projen'

const downloadArtifactWith: github.DownloadArtifactWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.DownloadArtifactWith.property.mergeMultiple">mergeMultiple</a></code> | <code>boolean</code> | When multiple artifacts are matched, this changes the behavior of the destination directories If true, the downloaded artifacts will be in the same directory specified by path If false, the downloaded artifacts will be extracted into individual named directories within the specified path. |
| <code><a href="#projen.github.DownloadArtifactWith.property.name">name</a></code> | <code>string</code> | Name of the artifact to download. |
| <code><a href="#projen.github.DownloadArtifactWith.property.path">path</a></code> | <code>string</code> | A file, directory or wildcard pattern that describes what to download. |
| <code><a href="#projen.github.DownloadArtifactWith.property.pattern">pattern</a></code> | <code>string</code> | A glob pattern to the artifacts that should be downloaded This is ignored if name is specified. |
| <code><a href="#projen.github.DownloadArtifactWith.property.repository">repository</a></code> | <code>string</code> | The repository owner and the repository name joined together by "/" If github-token is specified, this is the repository that artifacts will be downloaded from. |
| <code><a href="#projen.github.DownloadArtifactWith.property.runId">runId</a></code> | <code>string</code> | The id of the workflow run where the desired download artifact was uploaded from If github-token is specified, this is the run that artifacts will be downloaded from. |
| <code><a href="#projen.github.DownloadArtifactWith.property.token">token</a></code> | <code>string</code> | The GitHub token used to authenticate with the GitHub API to download artifacts from a different repository or from a different workflow run. |

---

##### `mergeMultiple`<sup>Optional</sup> <a name="mergeMultiple" id="projen.github.DownloadArtifactWith.property.mergeMultiple"></a>

```typescript
public readonly mergeMultiple: boolean;
```

- *Type:* boolean
- *Default:* false

When multiple artifacts are matched, this changes the behavior of the destination directories If true, the downloaded artifacts will be in the same directory specified by path If false, the downloaded artifacts will be extracted into individual named directories within the specified path.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.DownloadArtifactWith.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* If unspecified, all artifacts for the run are downloaded

Name of the artifact to download.

---

##### `path`<sup>Optional</sup> <a name="path" id="projen.github.DownloadArtifactWith.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* $GITHUB_WORKSPACE

A file, directory or wildcard pattern that describes what to download.

Supports basic tilde expansion.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="projen.github.DownloadArtifactWith.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

A glob pattern to the artifacts that should be downloaded This is ignored if name is specified.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.github.DownloadArtifactWith.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string
- *Default:* ${{ github.repository }}

The repository owner and the repository name joined together by "/" If github-token is specified, this is the repository that artifacts will be downloaded from.

---

##### `runId`<sup>Optional</sup> <a name="runId" id="projen.github.DownloadArtifactWith.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string
- *Default:* ${{ github.run_id }}

The id of the workflow run where the desired download artifact was uploaded from If github-token is specified, this is the run that artifacts will be downloaded from.

---

##### `token`<sup>Optional</sup> <a name="token" id="projen.github.DownloadArtifactWith.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string
- *Default:* If unspecified, the action will download artifacts from the current repo and the current workflow run

The GitHub token used to authenticate with the GitHub API to download artifacts from a different repository or from a different workflow run.

---

### GithubCredentialsAppOptions <a name="GithubCredentialsAppOptions" id="projen.github.GithubCredentialsAppOptions"></a>

Options for `GithubCredentials.fromApp`.

#### Initializer <a name="Initializer" id="projen.github.GithubCredentialsAppOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const githubCredentialsAppOptions: github.GithubCredentialsAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubCredentialsAppOptions.property.appIdSecret">appIdSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.github.GithubCredentialsAppOptions.property.permissions">permissions</a></code> | <code><a href="#projen.github.workflows.AppPermissions">AppPermissions</a></code> | The permissions granted to the token. |
| <code><a href="#projen.github.GithubCredentialsAppOptions.property.privateKeySecret">privateKeySecret</a></code> | <code>string</code> | *No description.* |

---

##### `appIdSecret`<sup>Optional</sup> <a name="appIdSecret" id="projen.github.GithubCredentialsAppOptions.property.appIdSecret"></a>

```typescript
public readonly appIdSecret: string;
```

- *Type:* string

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="projen.github.GithubCredentialsAppOptions.property.permissions"></a>

```typescript
public readonly permissions: AppPermissions;
```

- *Type:* <a href="#projen.github.workflows.AppPermissions">AppPermissions</a>
- *Default:* all permissions granted to the app

The permissions granted to the token.

---

##### `privateKeySecret`<sup>Optional</sup> <a name="privateKeySecret" id="projen.github.GithubCredentialsAppOptions.property.privateKeySecret"></a>

```typescript
public readonly privateKeySecret: string;
```

- *Type:* string

---

### GithubCredentialsPersonalAccessTokenOptions <a name="GithubCredentialsPersonalAccessTokenOptions" id="projen.github.GithubCredentialsPersonalAccessTokenOptions"></a>

Options for `GithubCredentials.fromPersonalAccessToken`.

#### Initializer <a name="Initializer" id="projen.github.GithubCredentialsPersonalAccessTokenOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const githubCredentialsPersonalAccessTokenOptions: github.GithubCredentialsPersonalAccessTokenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubCredentialsPersonalAccessTokenOptions.property.secret">secret</a></code> | <code>string</code> | *No description.* |

---

##### `secret`<sup>Optional</sup> <a name="secret" id="projen.github.GithubCredentialsPersonalAccessTokenOptions.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

### GitHubOptions <a name="GitHubOptions" id="projen.github.GitHubOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.GitHubOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const gitHubOptions: github.GitHubOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHubOptions.property.downloadLfs">downloadLfs</a></code> | <code>boolean</code> | Download files in LFS in workflows. |
| <code><a href="#projen.github.GitHubOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.github.GitHubOptions.property.mergifyOptions">mergifyOptions</a></code> | <code><a href="#projen.github.MergifyOptions">MergifyOptions</a></code> | Options for Mergify. |
| <code><a href="#projen.github.GitHubOptions.property.projenCredentials">projenCredentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.github.GitHubOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.github.GitHubOptions.property.pullRequestBackport">pullRequestBackport</a></code> | <code>boolean</code> | Add a workflow that allows backport of PRs to other branches using labels. |
| <code><a href="#projen.github.GitHubOptions.property.pullRequestBackportOptions">pullRequestBackportOptions</a></code> | <code><a href="#projen.github.PullRequestBackportOptions">PullRequestBackportOptions</a></code> | Options for configuring pull request backport. |
| <code><a href="#projen.github.GitHubOptions.property.pullRequestLint">pullRequestLint</a></code> | <code>boolean</code> | Add a workflow that performs basic checks for pull requests, like validating that PRs follow Conventional Commits. |
| <code><a href="#projen.github.GitHubOptions.property.pullRequestLintOptions">pullRequestLintOptions</a></code> | <code><a href="#projen.github.PullRequestLintOptions">PullRequestLintOptions</a></code> | Options for configuring a pull request linter. |
| <code><a href="#projen.github.GitHubOptions.property.workflows">workflows</a></code> | <code>boolean</code> | Enables GitHub workflows. |

---

##### `downloadLfs`<sup>Optional</sup> <a name="downloadLfs" id="projen.github.GitHubOptions.property.downloadLfs"></a>

```typescript
public readonly downloadLfs: boolean;
```

- *Type:* boolean
- *Default:* true if the associated project has `lfsPatterns`, `false` otherwise

Download files in LFS in workflows.

---

##### `mergify`<sup>Optional</sup> <a name="mergify" id="projen.github.GitHubOptions.property.mergify"></a>

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### `mergifyOptions`<sup>Optional</sup> <a name="mergifyOptions" id="projen.github.GitHubOptions.property.mergifyOptions"></a>

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* <a href="#projen.github.MergifyOptions">MergifyOptions</a>
- *Default:* default options

Options for Mergify.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.github.GitHubOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.github.GitHubOptions.property.projenTokenSecret"></a>

- *Deprecated:* - use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `pullRequestBackport`<sup>Optional</sup> <a name="pullRequestBackport" id="projen.github.GitHubOptions.property.pullRequestBackport"></a>

```typescript
public readonly pullRequestBackport: boolean;
```

- *Type:* boolean
- *Default:* false

Add a workflow that allows backport of PRs to other branches using labels.

When opening a new PR add a backport label to it,
and the PR will be backported to the target branches once the PR is merged.

Should not be used together with mergify.

---

##### `pullRequestBackportOptions`<sup>Optional</sup> <a name="pullRequestBackportOptions" id="projen.github.GitHubOptions.property.pullRequestBackportOptions"></a>

```typescript
public readonly pullRequestBackportOptions: PullRequestBackportOptions;
```

- *Type:* <a href="#projen.github.PullRequestBackportOptions">PullRequestBackportOptions</a>
- *Default:* see defaults in `PullRequestBackportOptions`

Options for configuring pull request backport.

---

##### `pullRequestLint`<sup>Optional</sup> <a name="pullRequestLint" id="projen.github.GitHubOptions.property.pullRequestLint"></a>

```typescript
public readonly pullRequestLint: boolean;
```

- *Type:* boolean
- *Default:* true

Add a workflow that performs basic checks for pull requests, like validating that PRs follow Conventional Commits.

---

##### `pullRequestLintOptions`<sup>Optional</sup> <a name="pullRequestLintOptions" id="projen.github.GitHubOptions.property.pullRequestLintOptions"></a>

```typescript
public readonly pullRequestLintOptions: PullRequestLintOptions;
```

- *Type:* <a href="#projen.github.PullRequestLintOptions">PullRequestLintOptions</a>
- *Default:* see defaults in `PullRequestLintOptions`

Options for configuring a pull request linter.

---

##### `workflows`<sup>Optional</sup> <a name="workflows" id="projen.github.GitHubOptions.property.workflows"></a>

```typescript
public readonly workflows: boolean;
```

- *Type:* boolean
- *Default:* true

Enables GitHub workflows.

If this is set to `false`, workflows will not be created.

---

### GitHubProjectOptions <a name="GitHubProjectOptions" id="projen.github.GitHubProjectOptions"></a>

Options for `GitHubProject`.

#### Initializer <a name="Initializer" id="projen.github.GitHubProjectOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const gitHubProjectOptions: github.GitHubProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitHubProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.github.GitHubProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.github.GitHubProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.github.GitHubProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.github.GitHubProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.github.GitHubProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.github.GitHubProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.github.GitHubProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.github.GitHubProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.github.GitHubProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.github.GitHubProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.github.GitHubProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.github.GitHubProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code><a href="#projen.github.AutoApproveOptions">AutoApproveOptions</a></code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.github.GitHubProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.github.GitHubProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code><a href="#projen.github.AutoMergeOptions">AutoMergeOptions</a></code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.github.GitHubProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.github.GitHubProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.github.GitHubProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.github.GitHubProjectOptions.property.githubOptions">githubOptions</a></code> | <code><a href="#projen.github.GitHubOptions">GitHubOptions</a></code> | Options for GitHub integration. |
| <code><a href="#projen.github.GitHubProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.github.GitHubProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.github.GitHubProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code><a href="#projen.github.MergifyOptions">MergifyOptions</a></code> | Options for mergify. |
| <code><a href="#projen.github.GitHubProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.github.GitHubProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.github.GitHubProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.github.GitHubProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.github.GitHubProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.github.GitHubProjectOptions.property.staleOptions">staleOptions</a></code> | <code><a href="#projen.github.StaleOptions">StaleOptions</a></code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.github.GitHubProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.GitHubProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.github.GitHubProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.github.GitHubProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.github.GitHubProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.github.GitHubProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.github.GitHubProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.github.GitHubProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.github.GitHubProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.github.GitHubProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.github.GitHubProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.github.GitHubProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.github.GitHubProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.github.GitHubProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* <a href="#projen.github.AutoApproveOptions">AutoApproveOptions</a>
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.github.GitHubProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.github.GitHubProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* <a href="#projen.github.AutoMergeOptions">AutoMergeOptions</a>
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.github.GitHubProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.github.GitHubProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.github.GitHubProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.github.GitHubProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* <a href="#projen.github.GitHubOptions">GitHubOptions</a>
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.github.GitHubProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.github.GitHubProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.github.GitHubProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* <a href="#projen.github.MergifyOptions">MergifyOptions</a>
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.github.GitHubProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.github.GitHubProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.github.GitHubProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.github.GitHubProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.github.GitHubProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.github.GitHubProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* <a href="#projen.github.StaleOptions">StaleOptions</a>
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.github.GitHubProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

### GithubWorkflowOptions <a name="GithubWorkflowOptions" id="projen.github.GithubWorkflowOptions"></a>

Options for `GithubWorkflow`.

#### Initializer <a name="Initializer" id="projen.github.GithubWorkflowOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const githubWorkflowOptions: github.GithubWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubWorkflowOptions.property.concurrency">concurrency</a></code> | <code>string</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.GithubWorkflowOptions.property.force">force</a></code> | <code>boolean</code> | Force the creation of the workflow even if `workflows` is disabled in `GitHub`. |

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.GithubWorkflowOptions.property.concurrency"></a>

```typescript
public readonly concurrency: string;
```

- *Type:* string
- *Default:* disabled

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

Currently in beta.

> [https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#concurrency](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#concurrency)

---

##### `force`<sup>Optional</sup> <a name="force" id="projen.github.GithubWorkflowOptions.property.force"></a>

```typescript
public readonly force: boolean;
```

- *Type:* boolean
- *Default:* false

Force the creation of the workflow even if `workflows` is disabled in `GitHub`.

---

### GitIdentity <a name="GitIdentity" id="projen.github.GitIdentity"></a>

Represents the git identity.

#### Initializer <a name="Initializer" id="projen.github.GitIdentity.Initializer"></a>

```typescript
import { github } from 'projen'

const gitIdentity: github.GitIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GitIdentity.property.email">email</a></code> | <code>string</code> | The email address of the git user. |
| <code><a href="#projen.github.GitIdentity.property.name">name</a></code> | <code>string</code> | The name of the user. |

---

##### `email`<sup>Required</sup> <a name="email" id="projen.github.GitIdentity.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address of the git user.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.GitIdentity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the user.

---

### IssueTemplateConfigOptions <a name="IssueTemplateConfigOptions" id="projen.github.IssueTemplateConfigOptions"></a>

Options for configuring issue templates in a repository.

> [{@link https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser}]({@link https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser})

#### Initializer <a name="Initializer" id="projen.github.IssueTemplateConfigOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const issueTemplateConfigOptions: github.IssueTemplateConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.IssueTemplateConfigOptions.property.blankIssuesEnabled">blankIssuesEnabled</a></code> | <code>boolean</code> | Indicates whether blank issues (issues without a template) are allowed. |
| <code><a href="#projen.github.IssueTemplateConfigOptions.property.contactLinks">contactLinks</a></code> | <code><a href="#projen.github.ContactLinks">ContactLinks</a>[]</code> | An array of contact links to display in the issue template chooser. |

---

##### `blankIssuesEnabled`<sup>Optional</sup> <a name="blankIssuesEnabled" id="projen.github.IssueTemplateConfigOptions.property.blankIssuesEnabled"></a>

```typescript
public readonly blankIssuesEnabled: boolean;
```

- *Type:* boolean

Indicates whether blank issues (issues without a template) are allowed.

---

##### `contactLinks`<sup>Optional</sup> <a name="contactLinks" id="projen.github.IssueTemplateConfigOptions.property.contactLinks"></a>

```typescript
public readonly contactLinks: ContactLinks[];
```

- *Type:* <a href="#projen.github.ContactLinks">ContactLinks</a>[]

An array of contact links to display in the issue template chooser.

---

### IssueTemplateOptions <a name="IssueTemplateOptions" id="projen.github.IssueTemplateOptions"></a>

Options for `IssueTemplate`.

#### Initializer <a name="Initializer" id="projen.github.IssueTemplateOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const issueTemplateOptions: github.IssueTemplateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.IssueTemplateOptions.property.templates">templates</a></code> | <code>{[ key: string ]: string}</code> | An array of issue template file names and their contents. |
| <code><a href="#projen.github.IssueTemplateOptions.property.configOptions">configOptions</a></code> | <code><a href="#projen.github.IssueTemplateConfigOptions">IssueTemplateConfigOptions</a></code> | Configuration options for the config.yml file. Only applicable if includeConfig is true. |

---

##### `templates`<sup>Required</sup> <a name="templates" id="projen.github.IssueTemplateOptions.property.templates"></a>

```typescript
public readonly templates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An array of issue template file names and their contents.

The file names should include the extension (.md or .yml).

---

##### `configOptions`<sup>Optional</sup> <a name="configOptions" id="projen.github.IssueTemplateOptions.property.configOptions"></a>

```typescript
public readonly configOptions: IssueTemplateConfigOptions;
```

- *Type:* <a href="#projen.github.IssueTemplateConfigOptions">IssueTemplateConfigOptions</a>

Configuration options for the config.yml file. Only applicable if includeConfig is true.

---

### MergifyConditionalOperator <a name="MergifyConditionalOperator" id="projen.github.MergifyConditionalOperator"></a>

The Mergify conditional operators that can be used are: `or` and `and`.

Note: The number of nested conditions is limited to 3.

> [https://docs.mergify.io/conditions/#combining-conditions-with-operators](https://docs.mergify.io/conditions/#combining-conditions-with-operators)

#### Initializer <a name="Initializer" id="projen.github.MergifyConditionalOperator.Initializer"></a>

```typescript
import { github } from 'projen'

const mergifyConditionalOperator: github.MergifyConditionalOperator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.MergifyConditionalOperator.property.and">and</a></code> | <code>string \| <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]</code> | *No description.* |
| <code><a href="#projen.github.MergifyConditionalOperator.property.or">or</a></code> | <code>string \| <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]</code> | *No description.* |

---

##### `and`<sup>Optional</sup> <a name="and" id="projen.github.MergifyConditionalOperator.property.and"></a>

```typescript
public readonly and: string | MergifyConditionalOperator[];
```

- *Type:* string | <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]

---

##### `or`<sup>Optional</sup> <a name="or" id="projen.github.MergifyConditionalOperator.property.or"></a>

```typescript
public readonly or: string | MergifyConditionalOperator[];
```

- *Type:* string | <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]

---

### MergifyOptions <a name="MergifyOptions" id="projen.github.MergifyOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.MergifyOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const mergifyOptions: github.MergifyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.MergifyOptions.property.queues">queues</a></code> | <code><a href="#projen.github.MergifyQueue">MergifyQueue</a>[]</code> | *No description.* |
| <code><a href="#projen.github.MergifyOptions.property.rules">rules</a></code> | <code><a href="#projen.github.MergifyRule">MergifyRule</a>[]</code> | *No description.* |

---

##### `queues`<sup>Optional</sup> <a name="queues" id="projen.github.MergifyOptions.property.queues"></a>

```typescript
public readonly queues: MergifyQueue[];
```

- *Type:* <a href="#projen.github.MergifyQueue">MergifyQueue</a>[]

---

##### `rules`<sup>Optional</sup> <a name="rules" id="projen.github.MergifyOptions.property.rules"></a>

```typescript
public readonly rules: MergifyRule[];
```

- *Type:* <a href="#projen.github.MergifyRule">MergifyRule</a>[]

---

### MergifyQueue <a name="MergifyQueue" id="projen.github.MergifyQueue"></a>

#### Initializer <a name="Initializer" id="projen.github.MergifyQueue.Initializer"></a>

```typescript
import { github } from 'projen'

const mergifyQueue: github.MergifyQueue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.MergifyQueue.property.conditions">conditions</a></code> | <code>string \| <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]</code> | A list of Conditions string that must match against the pull request for the pull request to be added to the queue. |
| <code><a href="#projen.github.MergifyQueue.property.name">name</a></code> | <code>string</code> | The name of the queue. |
| <code><a href="#projen.github.MergifyQueue.property.mergeMethod">mergeMethod</a></code> | <code>string</code> | Merge method to use. |
| <code><a href="#projen.github.MergifyQueue.property.updateMethod">updateMethod</a></code> | <code>string</code> | Method to use to update the pull request with its base branch when the speculative check is done in-place. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="projen.github.MergifyQueue.property.conditions"></a>

```typescript
public readonly conditions: string | MergifyConditionalOperator[];
```

- *Type:* string | <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]

A list of Conditions string that must match against the pull request for the pull request to be added to the queue.

> [https://docs.mergify.com/conditions/#conditions](https://docs.mergify.com/conditions/#conditions)

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.MergifyQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the queue.

---

##### `mergeMethod`<sup>Optional</sup> <a name="mergeMethod" id="projen.github.MergifyQueue.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: string;
```

- *Type:* string
- *Default:* "merge"

Merge method to use.

Possible values are `merge`, `squash`, `rebase` or `fast-forward`.
`fast-forward` is not supported on queues with `speculative_checks` > 1, `batch_size` > 1, or with `allow_inplace_checks` set to false.

---

##### `updateMethod`<sup>Optional</sup> <a name="updateMethod" id="projen.github.MergifyQueue.property.updateMethod"></a>

```typescript
public readonly updateMethod: string;
```

- *Type:* string
- *Default:* `merge` for all merge methods except `fast-forward` where `rebase` is used

Method to use to update the pull request with its base branch when the speculative check is done in-place.

Possible values:
 - `merge` to merge the base branch into the pull request.
 - `rebase` to rebase the pull request against its base branch.

Note that the `rebase` method has some drawbacks, see Mergify docs for details.

> [https://docs.mergify.com/actions/queue/#queue-rules](https://docs.mergify.com/actions/queue/#queue-rules)

---

### MergifyRule <a name="MergifyRule" id="projen.github.MergifyRule"></a>

#### Initializer <a name="Initializer" id="projen.github.MergifyRule.Initializer"></a>

```typescript
import { github } from 'projen'

const mergifyRule: github.MergifyRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.MergifyRule.property.actions">actions</a></code> | <code>{[ key: string ]: any}</code> | A dictionary made of Actions that will be executed on the matching pull requests. |
| <code><a href="#projen.github.MergifyRule.property.conditions">conditions</a></code> | <code>string \| <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]</code> | A list of Conditions string that must match against the pull request for the rule to be applied. |
| <code><a href="#projen.github.MergifyRule.property.name">name</a></code> | <code>string</code> | The name of the rule. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="projen.github.MergifyRule.property.actions"></a>

```typescript
public readonly actions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A dictionary made of Actions that will be executed on the matching pull requests.

> [https://docs.mergify.io/actions/#actions](https://docs.mergify.io/actions/#actions)

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="projen.github.MergifyRule.property.conditions"></a>

```typescript
public readonly conditions: string | MergifyConditionalOperator[];
```

- *Type:* string | <a href="#projen.github.MergifyConditionalOperator">MergifyConditionalOperator</a>[]

A list of Conditions string that must match against the pull request for the rule to be applied.

> [https://docs.mergify.io/conditions/#conditions](https://docs.mergify.io/conditions/#conditions)

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.MergifyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

This is not used by the engine directly,
but is used when reporting information about a rule.

---

### PullRequestBackportOptions <a name="PullRequestBackportOptions" id="projen.github.PullRequestBackportOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.PullRequestBackportOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestBackportOptions: github.PullRequestBackportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestBackportOptions.property.autoApproveBackport">autoApproveBackport</a></code> | <code>boolean</code> | Automatically approve backport PRs if the 'auto approve' workflow is available. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.backportBranchNamePrefix">backportBranchNamePrefix</a></code> | <code>string</code> | The prefix used to name backport branches. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.backportPRLabels">backportPRLabels</a></code> | <code>string[]</code> | The labels added to the created backport PR. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.branches">branches</a></code> | <code>string[]</code> | List of branches that can be a target for backports. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.createWithConflicts">createWithConflicts</a></code> | <code>boolean</code> | Should this created Backport PRs with conflicts. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.labelPrefix">labelPrefix</a></code> | <code>string</code> | The prefix used to detect PRs that should be backported. |
| <code><a href="#projen.github.PullRequestBackportOptions.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the workflow. |

---

##### `autoApproveBackport`<sup>Optional</sup> <a name="autoApproveBackport" id="projen.github.PullRequestBackportOptions.property.autoApproveBackport"></a>

```typescript
public readonly autoApproveBackport: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve backport PRs if the 'auto approve' workflow is available.

---

##### `backportBranchNamePrefix`<sup>Optional</sup> <a name="backportBranchNamePrefix" id="projen.github.PullRequestBackportOptions.property.backportBranchNamePrefix"></a>

```typescript
public readonly backportBranchNamePrefix: string;
```

- *Type:* string
- *Default:* "backport/"

The prefix used to name backport branches.

Make sure to include a separator at the end like `/` or `_`.

---

##### `backportPRLabels`<sup>Optional</sup> <a name="backportPRLabels" id="projen.github.PullRequestBackportOptions.property.backportPRLabels"></a>

```typescript
public readonly backportPRLabels: string[];
```

- *Type:* string[]
- *Default:* ["backport"]

The labels added to the created backport PR.

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.PullRequestBackportOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]
- *Default:* allow backports to all release branches

List of branches that can be a target for backports.

---

##### `createWithConflicts`<sup>Optional</sup> <a name="createWithConflicts" id="projen.github.PullRequestBackportOptions.property.createWithConflicts"></a>

```typescript
public readonly createWithConflicts: boolean;
```

- *Type:* boolean
- *Default:* true

Should this created Backport PRs with conflicts.

Conflicts will have to be resolved manually, but a PR is always created.
Set to `false` to prevent the backport PR from being created if there are conflicts.

---

##### `labelPrefix`<sup>Optional</sup> <a name="labelPrefix" id="projen.github.PullRequestBackportOptions.property.labelPrefix"></a>

```typescript
public readonly labelPrefix: string;
```

- *Type:* string
- *Default:* "backport-to-"

The prefix used to detect PRs that should be backported.

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="projen.github.PullRequestBackportOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string
- *Default:* "backport"

The name of the workflow.

---

### PullRequestFromPatchOptions <a name="PullRequestFromPatchOptions" id="projen.github.PullRequestFromPatchOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.PullRequestFromPatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestFromPatchOptions: github.PullRequestFromPatchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.pullRequestDescription">pullRequestDescription</a></code> | <code>string</code> | Description added to the pull request. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.pullRequestTitle">pullRequestTitle</a></code> | <code>string</code> | The full title used to create the pull request. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the workflow that will create the PR. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.assignees">assignees</a></code> | <code>string[]</code> | Assignees to add on the PR. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.baseBranch">baseBranch</a></code> | <code>string</code> | Sets the pull request base branch. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.branchName">branchName</a></code> | <code>string</code> | The pull request branch name. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.credentials">credentials</a></code> | <code><a href="#projen.github.GithubCredentials">GithubCredentials</a></code> | The job credentials used to create the pull request. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.gitIdentity">gitIdentity</a></code> | <code><a href="#projen.github.GitIdentity">GitIdentity</a></code> | The git identity used to create the commit. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.labels">labels</a></code> | <code>string[]</code> | Labels to apply on the PR. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.signoff">signoff</a></code> | <code>boolean</code> | Add Signed-off-by line by the committer at the end of the commit log message. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.stepId">stepId</a></code> | <code>string</code> | The step ID which produces the output which indicates if a patch was created. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.stepName">stepName</a></code> | <code>string</code> | The name of the step displayed on GitHub. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.patch">patch</a></code> | <code><a href="#projen.github.PullRequestPatchSource">PullRequestPatchSource</a></code> | Information about the patch that is used to create the pull request. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.jobName">jobName</a></code> | <code>string</code> | The name of the job displayed on GitHub. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.PullRequestFromPatchOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |

---

##### `pullRequestDescription`<sup>Required</sup> <a name="pullRequestDescription" id="projen.github.PullRequestFromPatchOptions.property.pullRequestDescription"></a>

```typescript
public readonly pullRequestDescription: string;
```

- *Type:* string

Description added to the pull request.

Providence information are automatically added.

---

##### `pullRequestTitle`<sup>Required</sup> <a name="pullRequestTitle" id="projen.github.PullRequestFromPatchOptions.property.pullRequestTitle"></a>

```typescript
public readonly pullRequestTitle: string;
```

- *Type:* string

The full title used to create the pull request.

If PR titles are validated in this repo, the title should comply with the respective rules.

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="projen.github.PullRequestFromPatchOptions.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The name of the workflow that will create the PR.

---

##### `assignees`<sup>Optional</sup> <a name="assignees" id="projen.github.PullRequestFromPatchOptions.property.assignees"></a>

```typescript
public readonly assignees: string[];
```

- *Type:* string[]
- *Default:* no assignees

Assignees to add on the PR.

---

##### `baseBranch`<sup>Optional</sup> <a name="baseBranch" id="projen.github.PullRequestFromPatchOptions.property.baseBranch"></a>

```typescript
public readonly baseBranch: string;
```

- *Type:* string
- *Default:* The branch checked out in the workflow.

Sets the pull request base branch.

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="projen.github.PullRequestFromPatchOptions.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string
- *Default:* `github-actions/${options.workflowName}`

The pull request branch name.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="projen.github.PullRequestFromPatchOptions.property.credentials"></a>

```typescript
public readonly credentials: GithubCredentials;
```

- *Type:* <a href="#projen.github.GithubCredentials">GithubCredentials</a>

The job credentials used to create the pull request.

Provided credentials must have permissions to create a pull request on the repository.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.github.PullRequestFromPatchOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>
- *Default:* the default github-actions user

The git identity used to create the commit.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.github.PullRequestFromPatchOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]
- *Default:* no labels.

Labels to apply on the PR.

---

##### `signoff`<sup>Optional</sup> <a name="signoff" id="projen.github.PullRequestFromPatchOptions.property.signoff"></a>

```typescript
public readonly signoff: boolean;
```

- *Type:* boolean
- *Default:* true

Add Signed-off-by line by the committer at the end of the commit log message.

---

##### `stepId`<sup>Optional</sup> <a name="stepId" id="projen.github.PullRequestFromPatchOptions.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string
- *Default:* "create_pr"

The step ID which produces the output which indicates if a patch was created.

---

##### `stepName`<sup>Optional</sup> <a name="stepName" id="projen.github.PullRequestFromPatchOptions.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string
- *Default:* "Create Pull Request"

The name of the step displayed on GitHub.

---

##### `patch`<sup>Required</sup> <a name="patch" id="projen.github.PullRequestFromPatchOptions.property.patch"></a>

```typescript
public readonly patch: PullRequestPatchSource;
```

- *Type:* <a href="#projen.github.PullRequestPatchSource">PullRequestPatchSource</a>

Information about the patch that is used to create the pull request.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="projen.github.PullRequestFromPatchOptions.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string
- *Default:* "Create Pull Request"

The name of the job displayed on GitHub.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.PullRequestFromPatchOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.PullRequestFromPatchOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

### PullRequestLintOptions <a name="PullRequestLintOptions" id="projen.github.PullRequestLintOptions"></a>

Options for PullRequestLint.

#### Initializer <a name="Initializer" id="projen.github.PullRequestLintOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestLintOptions: github.PullRequestLintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestLintOptions.property.contributorStatement">contributorStatement</a></code> | <code>string</code> | Require a contributor statement to be included in the PR description. |
| <code><a href="#projen.github.PullRequestLintOptions.property.contributorStatementOptions">contributorStatementOptions</a></code> | <code><a href="#projen.github.ContributorStatementOptions">ContributorStatementOptions</a></code> | Options for requiring a contributor statement on Pull Requests. |
| <code><a href="#projen.github.PullRequestLintOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.PullRequestLintOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.github.PullRequestLintOptions.property.semanticTitle">semanticTitle</a></code> | <code>boolean</code> | Validate that pull request titles follow Conventional Commits. |
| <code><a href="#projen.github.PullRequestLintOptions.property.semanticTitleOptions">semanticTitleOptions</a></code> | <code><a href="#projen.github.SemanticTitleOptions">SemanticTitleOptions</a></code> | Options for validating the conventional commit title linter. |

---

##### `contributorStatement`<sup>Optional</sup> <a name="contributorStatement" id="projen.github.PullRequestLintOptions.property.contributorStatement"></a>

```typescript
public readonly contributorStatement: string;
```

- *Type:* string
- *Default:* no contributor statement is required

Require a contributor statement to be included in the PR description.

For example confirming that the contribution has been made by the contributor and complies with the project's license.

Appends the statement to the end of the Pull Request template.

---

##### `contributorStatementOptions`<sup>Optional</sup> <a name="contributorStatementOptions" id="projen.github.PullRequestLintOptions.property.contributorStatementOptions"></a>

```typescript
public readonly contributorStatementOptions: ContributorStatementOptions;
```

- *Type:* <a href="#projen.github.ContributorStatementOptions">ContributorStatementOptions</a>
- *Default:* none

Options for requiring a contributor statement on Pull Requests.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.PullRequestLintOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.PullRequestLintOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `semanticTitle`<sup>Optional</sup> <a name="semanticTitle" id="projen.github.PullRequestLintOptions.property.semanticTitle"></a>

```typescript
public readonly semanticTitle: boolean;
```

- *Type:* boolean
- *Default:* true

Validate that pull request titles follow Conventional Commits.

> [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

---

##### `semanticTitleOptions`<sup>Optional</sup> <a name="semanticTitleOptions" id="projen.github.PullRequestLintOptions.property.semanticTitleOptions"></a>

```typescript
public readonly semanticTitleOptions: SemanticTitleOptions;
```

- *Type:* <a href="#projen.github.SemanticTitleOptions">SemanticTitleOptions</a>
- *Default:* title must start with "feat", "fix", or "chore"

Options for validating the conventional commit title linter.

---

### PullRequestPatchSource <a name="PullRequestPatchSource" id="projen.github.PullRequestPatchSource"></a>

#### Initializer <a name="Initializer" id="projen.github.PullRequestPatchSource.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestPatchSource: github.PullRequestPatchSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestPatchSource.property.fetchDepth">fetchDepth</a></code> | <code>number</code> | Number of commits to fetch. |
| <code><a href="#projen.github.PullRequestPatchSource.property.lfs">lfs</a></code> | <code>boolean</code> | Whether LFS is enabled for the GitHub repository. |
| <code><a href="#projen.github.PullRequestPatchSource.property.ref">ref</a></code> | <code>string</code> | Branch or tag name. |
| <code><a href="#projen.github.PullRequestPatchSource.property.repository">repository</a></code> | <code>string</code> | The repository (owner/repo) to use. |
| <code><a href="#projen.github.PullRequestPatchSource.property.token">token</a></code> | <code>string</code> | A GitHub token to use when checking out the repository. |
| <code><a href="#projen.github.PullRequestPatchSource.property.patchFile">patchFile</a></code> | <code>string</code> | The name of the artifact the patch is stored as. |
| <code><a href="#projen.github.PullRequestPatchSource.property.jobId">jobId</a></code> | <code>string</code> | The id of the job that created the patch file. |
| <code><a href="#projen.github.PullRequestPatchSource.property.outputName">outputName</a></code> | <code>string</code> | The name of the output that indicates if a patch has been created. |

---

##### `fetchDepth`<sup>Optional</sup> <a name="fetchDepth" id="projen.github.PullRequestPatchSource.property.fetchDepth"></a>

```typescript
public readonly fetchDepth: number;
```

- *Type:* number
- *Default:* 1

Number of commits to fetch.

0 indicates all history for all branches and tags.

---

##### `lfs`<sup>Optional</sup> <a name="lfs" id="projen.github.PullRequestPatchSource.property.lfs"></a>

```typescript
public readonly lfs: boolean;
```

- *Type:* boolean
- *Default:* false

Whether LFS is enabled for the GitHub repository.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="projen.github.PullRequestPatchSource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string
- *Default:* the default branch is implicitly used

Branch or tag name.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.github.PullRequestPatchSource.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string
- *Default:* the default repository is implicitly used

The repository (owner/repo) to use.

---

##### `token`<sup>Optional</sup> <a name="token" id="projen.github.PullRequestPatchSource.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string
- *Default:* the default GITHUB_TOKEN is implicitly used

A GitHub token to use when checking out the repository.

If the intent is to push changes back to the branch, then you must use a
PAT with `repo` (and possibly `workflows`) permissions.

---

##### `patchFile`<sup>Optional</sup> <a name="patchFile" id="projen.github.PullRequestPatchSource.property.patchFile"></a>

```typescript
public readonly patchFile: string;
```

- *Type:* string
- *Default:* ".repo.patch"

The name of the artifact the patch is stored as.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="projen.github.PullRequestPatchSource.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The id of the job that created the patch file.

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="projen.github.PullRequestPatchSource.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The name of the output that indicates if a patch has been created.

---

### PullRequestTemplateOptions <a name="PullRequestTemplateOptions" id="projen.github.PullRequestTemplateOptions"></a>

Options for `PullRequestTemplate`.

#### Initializer <a name="Initializer" id="projen.github.PullRequestTemplateOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestTemplateOptions: github.PullRequestTemplateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.PullRequestTemplateOptions.property.lines">lines</a></code> | <code>string[]</code> | The contents of the template. |

---

##### `lines`<sup>Optional</sup> <a name="lines" id="projen.github.PullRequestTemplateOptions.property.lines"></a>

```typescript
public readonly lines: string[];
```

- *Type:* string[]
- *Default:* a standard default template will be created.

The contents of the template.

You can use `addLine()` to add additional lines.

---

### SemanticTitleOptions <a name="SemanticTitleOptions" id="projen.github.SemanticTitleOptions"></a>

Options for linting that PR titles follow Conventional Commits.

> [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

#### Initializer <a name="Initializer" id="projen.github.SemanticTitleOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const semanticTitleOptions: github.SemanticTitleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.SemanticTitleOptions.property.requireScope">requireScope</a></code> | <code>boolean</code> | Configure that a scope must always be provided. |
| <code><a href="#projen.github.SemanticTitleOptions.property.types">types</a></code> | <code>string[]</code> | Configure a list of commit types that are allowed. |

---

##### `requireScope`<sup>Optional</sup> <a name="requireScope" id="projen.github.SemanticTitleOptions.property.requireScope"></a>

```typescript
public readonly requireScope: boolean;
```

- *Type:* boolean
- *Default:* false

Configure that a scope must always be provided.

e.g. feat(ui), fix(core)

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.SemanticTitleOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]
- *Default:* ["feat", "fix", "chore"]

Configure a list of commit types that are allowed.

---

### SetupGitIdentityOptions <a name="SetupGitIdentityOptions" id="projen.github.SetupGitIdentityOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.SetupGitIdentityOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const setupGitIdentityOptions: github.SetupGitIdentityOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen.github.SetupGitIdentityOptions.property.gitIdentity">gitIdentity</a></code> | <code><a href="#projen.github.GitIdentity">GitIdentity</a></code> | The identity to use. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.SetupGitIdentityOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.SetupGitIdentityOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.SetupGitIdentityOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.SetupGitIdentityOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.SetupGitIdentityOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.SetupGitIdentityOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.SetupGitIdentityOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `gitIdentity`<sup>Required</sup> <a name="gitIdentity" id="projen.github.SetupGitIdentityOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>

The identity to use.

---

### StaleBehavior <a name="StaleBehavior" id="projen.github.StaleBehavior"></a>

Stale behavior.

#### Initializer <a name="Initializer" id="projen.github.StaleBehavior.Initializer"></a>

```typescript
import { github } from 'projen'

const staleBehavior: github.StaleBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.StaleBehavior.property.closeMessage">closeMessage</a></code> | <code>string</code> | The comment to add to the issue/PR when it's closed. |
| <code><a href="#projen.github.StaleBehavior.property.daysBeforeClose">daysBeforeClose</a></code> | <code>number</code> | Days until the issue/PR is closed after it is marked as "Stale". |
| <code><a href="#projen.github.StaleBehavior.property.daysBeforeStale">daysBeforeStale</a></code> | <code>number</code> | How many days until the issue or pull request is marked as "Stale". |
| <code><a href="#projen.github.StaleBehavior.property.enabled">enabled</a></code> | <code>boolean</code> | Determines if this behavior is enabled. |
| <code><a href="#projen.github.StaleBehavior.property.exemptLabels">exemptLabels</a></code> | <code>string[]</code> | Label which exempt an issue/PR from becoming stale. |
| <code><a href="#projen.github.StaleBehavior.property.staleLabel">staleLabel</a></code> | <code>string</code> | The label to apply to the issue/PR when it becomes stale. |
| <code><a href="#projen.github.StaleBehavior.property.staleMessage">staleMessage</a></code> | <code>string</code> | The comment to add to the issue/PR when it becomes stale. |

---

##### `closeMessage`<sup>Optional</sup> <a name="closeMessage" id="projen.github.StaleBehavior.property.closeMessage"></a>

```typescript
public readonly closeMessage: string;
```

- *Type:* string
- *Default:* "Closing this pull request as it hasn\'t seen activity for a while. Please add a comment

The comment to add to the issue/PR when it's closed.

---

##### `daysBeforeClose`<sup>Optional</sup> <a name="daysBeforeClose" id="projen.github.StaleBehavior.property.daysBeforeClose"></a>

```typescript
public readonly daysBeforeClose: number;
```

- *Type:* number
- *Default:* 

Days until the issue/PR is closed after it is marked as "Stale".

Set to -1 to disable.

---

##### `daysBeforeStale`<sup>Optional</sup> <a name="daysBeforeStale" id="projen.github.StaleBehavior.property.daysBeforeStale"></a>

```typescript
public readonly daysBeforeStale: number;
```

- *Type:* number
- *Default:* 

How many days until the issue or pull request is marked as "Stale".

Set to -1 to disable.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="projen.github.StaleBehavior.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Determines if this behavior is enabled.

Same as setting `daysBeforeStale` and `daysBeforeClose` to `-1`.

---

##### `exemptLabels`<sup>Optional</sup> <a name="exemptLabels" id="projen.github.StaleBehavior.property.exemptLabels"></a>

```typescript
public readonly exemptLabels: string[];
```

- *Type:* string[]
- *Default:* ["backlog"]

Label which exempt an issue/PR from becoming stale.

Set to `[]` to disable.

---

##### `staleLabel`<sup>Optional</sup> <a name="staleLabel" id="projen.github.StaleBehavior.property.staleLabel"></a>

```typescript
public readonly staleLabel: string;
```

- *Type:* string
- *Default:* "stale"

The label to apply to the issue/PR when it becomes stale.

---

##### `staleMessage`<sup>Optional</sup> <a name="staleMessage" id="projen.github.StaleBehavior.property.staleMessage"></a>

```typescript
public readonly staleMessage: string;
```

- *Type:* string
- *Default:* "This pull request is now marked as stale because hasn\'t seen activity for a while. Add a comment or it will be closed soon."

The comment to add to the issue/PR when it becomes stale.

---

### StaleOptions <a name="StaleOptions" id="projen.github.StaleOptions"></a>

Options for `Stale`.

#### Initializer <a name="Initializer" id="projen.github.StaleOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const staleOptions: github.StaleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.StaleOptions.property.issues">issues</a></code> | <code><a href="#projen.github.StaleBehavior">StaleBehavior</a></code> | How to handle stale issues. |
| <code><a href="#projen.github.StaleOptions.property.pullRequest">pullRequest</a></code> | <code><a href="#projen.github.StaleBehavior">StaleBehavior</a></code> | How to handle stale pull requests. |
| <code><a href="#projen.github.StaleOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.StaleOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |

---

##### `issues`<sup>Optional</sup> <a name="issues" id="projen.github.StaleOptions.property.issues"></a>

```typescript
public readonly issues: StaleBehavior;
```

- *Type:* <a href="#projen.github.StaleBehavior">StaleBehavior</a>
- *Default:* By default, stale issues with no activity will be marked as stale after 60 days and closed within 7 days.

How to handle stale issues.

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="projen.github.StaleOptions.property.pullRequest"></a>

```typescript
public readonly pullRequest: StaleBehavior;
```

- *Type:* <a href="#projen.github.StaleBehavior">StaleBehavior</a>
- *Default:* By default, pull requests with no activity will be marked as stale after 14 days and closed within 2 days with relevant comments.

How to handle stale pull requests.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.StaleOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.StaleOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

### TaskWorkflowJobOptions <a name="TaskWorkflowJobOptions" id="projen.github.TaskWorkflowJobOptions"></a>

Options to create the Job associated with a TaskWorkflow.

#### Initializer <a name="Initializer" id="projen.github.TaskWorkflowJobOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const taskWorkflowJobOptions: github.TaskWorkflowJobOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.permissions">permissions</a></code> | <code><a href="#projen.github.workflows.JobPermissions">JobPermissions</a></code> | Permissions for the build job. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory name which contains artifacts to be uploaded (e.g. `dist`). If this is set, the contents of this directory will be uploaded as an artifact at the end of the workflow run, even if other steps fail. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.checkoutWith">checkoutWith</a></code> | <code><a href="#projen.github.CheckoutWith">CheckoutWith</a></code> | Override for the `with` property of the source code checkout step. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.condition">condition</a></code> | <code>string</code> | Adds an 'if' condition to the workflow. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.container">container</a></code> | <code><a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.downloadLfs">downloadLfs</a></code> | <code>boolean</code> | Whether to download files from Git LFS for this workflow. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Workflow environment variables. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.gitIdentity">gitIdentity</a></code> | <code><a href="#projen.github.GitIdentity">GitIdentity</a></code> | The git identity to use in this workflow. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.jobDefaults">jobDefaults</a></code> | <code><a href="#projen.github.workflows.JobDefaults">JobDefaults</a></code> | Default settings for all steps in the TaskWorkflow Job. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.outputs">outputs</a></code> | <code>{[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}</code> | Mapping of job output names to values/expressions. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.postBuildSteps">postBuildSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Actions to run after the main build step. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.preBuildSteps">preBuildSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Steps to run before the main build step. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.preCheckoutSteps">preCheckoutSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Initial steps to run before the source code checkout. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.TaskWorkflowJobOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.TaskWorkflowJobOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* <a href="#projen.github.workflows.JobPermissions">JobPermissions</a>

Permissions for the build job.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.github.TaskWorkflowJobOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* not set

A directory name which contains artifacts to be uploaded (e.g. `dist`). If this is set, the contents of this directory will be uploaded as an artifact at the end of the workflow run, even if other steps fail.

---

##### `checkoutWith`<sup>Optional</sup> <a name="checkoutWith" id="projen.github.TaskWorkflowJobOptions.property.checkoutWith"></a>

```typescript
public readonly checkoutWith: CheckoutWith;
```

- *Type:* <a href="#projen.github.CheckoutWith">CheckoutWith</a>
- *Default:* not set

Override for the `with` property of the source code checkout step.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.github.TaskWorkflowJobOptions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Adds an 'if' condition to the workflow.

---

##### `container`<sup>Optional</sup> <a name="container" id="projen.github.TaskWorkflowJobOptions.property.container"></a>

```typescript
public readonly container: ContainerOptions;
```

- *Type:* <a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a>
- *Default:* default image

---

##### `downloadLfs`<sup>Optional</sup> <a name="downloadLfs" id="projen.github.TaskWorkflowJobOptions.property.downloadLfs"></a>

```typescript
public readonly downloadLfs: boolean;
```

- *Type:* boolean
- *Default:* Use the setting on the corresponding GitHub project

Whether to download files from Git LFS for this workflow.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.TaskWorkflowJobOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Workflow environment variables.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.github.TaskWorkflowJobOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>

The git identity to use in this workflow.

---

##### `jobDefaults`<sup>Optional</sup> <a name="jobDefaults" id="projen.github.TaskWorkflowJobOptions.property.jobDefaults"></a>

```typescript
public readonly jobDefaults: JobDefaults;
```

- *Type:* <a href="#projen.github.workflows.JobDefaults">JobDefaults</a>

Default settings for all steps in the TaskWorkflow Job.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen.github.TaskWorkflowJobOptions.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: JobStepOutput};
```

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}
- *Default:* {}

Mapping of job output names to values/expressions.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.github.TaskWorkflowJobOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Actions to run after the main build step.

---

##### `preBuildSteps`<sup>Optional</sup> <a name="preBuildSteps" id="projen.github.TaskWorkflowJobOptions.property.preBuildSteps"></a>

```typescript
public readonly preBuildSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Steps to run before the main build step.

---

##### `preCheckoutSteps`<sup>Optional</sup> <a name="preCheckoutSteps" id="projen.github.TaskWorkflowJobOptions.property.preCheckoutSteps"></a>

```typescript
public readonly preCheckoutSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Initial steps to run before the source code checkout.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.TaskWorkflowJobOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.TaskWorkflowJobOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

### TaskWorkflowOptions <a name="TaskWorkflowOptions" id="projen.github.TaskWorkflowOptions"></a>

Options to create a TaskWorkflow.

#### Initializer <a name="Initializer" id="projen.github.TaskWorkflowOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const taskWorkflowOptions: github.TaskWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.TaskWorkflowOptions.property.permissions">permissions</a></code> | <code><a href="#projen.github.workflows.JobPermissions">JobPermissions</a></code> | Permissions for the build job. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory name which contains artifacts to be uploaded (e.g. `dist`). If this is set, the contents of this directory will be uploaded as an artifact at the end of the workflow run, even if other steps fail. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.checkoutWith">checkoutWith</a></code> | <code><a href="#projen.github.CheckoutWith">CheckoutWith</a></code> | Override for the `with` property of the source code checkout step. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.condition">condition</a></code> | <code>string</code> | Adds an 'if' condition to the workflow. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.container">container</a></code> | <code><a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a></code> | *No description.* |
| <code><a href="#projen.github.TaskWorkflowOptions.property.downloadLfs">downloadLfs</a></code> | <code>boolean</code> | Whether to download files from Git LFS for this workflow. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Workflow environment variables. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.gitIdentity">gitIdentity</a></code> | <code><a href="#projen.github.GitIdentity">GitIdentity</a></code> | The git identity to use in this workflow. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.jobDefaults">jobDefaults</a></code> | <code><a href="#projen.github.workflows.JobDefaults">JobDefaults</a></code> | Default settings for all steps in the TaskWorkflow Job. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.outputs">outputs</a></code> | <code>{[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}</code> | Mapping of job output names to values/expressions. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.postBuildSteps">postBuildSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Actions to run after the main build step. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.preBuildSteps">preBuildSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Steps to run before the main build step. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.preCheckoutSteps">preCheckoutSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Initial steps to run before the source code checkout. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.name">name</a></code> | <code>string</code> | The workflow name. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.task">task</a></code> | <code>projen.Task</code> | The main task to be executed. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.jobId">jobId</a></code> | <code>string</code> | The primary job id. |
| <code><a href="#projen.github.TaskWorkflowOptions.property.triggers">triggers</a></code> | <code><a href="#projen.github.workflows.Triggers">Triggers</a></code> | The triggers for the workflow. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.TaskWorkflowOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* <a href="#projen.github.workflows.JobPermissions">JobPermissions</a>

Permissions for the build job.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.github.TaskWorkflowOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* not set

A directory name which contains artifacts to be uploaded (e.g. `dist`). If this is set, the contents of this directory will be uploaded as an artifact at the end of the workflow run, even if other steps fail.

---

##### `checkoutWith`<sup>Optional</sup> <a name="checkoutWith" id="projen.github.TaskWorkflowOptions.property.checkoutWith"></a>

```typescript
public readonly checkoutWith: CheckoutWith;
```

- *Type:* <a href="#projen.github.CheckoutWith">CheckoutWith</a>
- *Default:* not set

Override for the `with` property of the source code checkout step.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.github.TaskWorkflowOptions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Adds an 'if' condition to the workflow.

---

##### `container`<sup>Optional</sup> <a name="container" id="projen.github.TaskWorkflowOptions.property.container"></a>

```typescript
public readonly container: ContainerOptions;
```

- *Type:* <a href="#projen.github.workflows.ContainerOptions">ContainerOptions</a>
- *Default:* default image

---

##### `downloadLfs`<sup>Optional</sup> <a name="downloadLfs" id="projen.github.TaskWorkflowOptions.property.downloadLfs"></a>

```typescript
public readonly downloadLfs: boolean;
```

- *Type:* boolean
- *Default:* Use the setting on the corresponding GitHub project

Whether to download files from Git LFS for this workflow.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.TaskWorkflowOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Workflow environment variables.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.github.TaskWorkflowOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>

The git identity to use in this workflow.

---

##### `jobDefaults`<sup>Optional</sup> <a name="jobDefaults" id="projen.github.TaskWorkflowOptions.property.jobDefaults"></a>

```typescript
public readonly jobDefaults: JobDefaults;
```

- *Type:* <a href="#projen.github.workflows.JobDefaults">JobDefaults</a>

Default settings for all steps in the TaskWorkflow Job.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen.github.TaskWorkflowOptions.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: JobStepOutput};
```

- *Type:* {[ key: string ]: <a href="#projen.github.workflows.JobStepOutput">JobStepOutput</a>}
- *Default:* {}

Mapping of job output names to values/expressions.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.github.TaskWorkflowOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Actions to run after the main build step.

---

##### `preBuildSteps`<sup>Optional</sup> <a name="preBuildSteps" id="projen.github.TaskWorkflowOptions.property.preBuildSteps"></a>

```typescript
public readonly preBuildSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Steps to run before the main build step.

---

##### `preCheckoutSteps`<sup>Optional</sup> <a name="preCheckoutSteps" id="projen.github.TaskWorkflowOptions.property.preCheckoutSteps"></a>

```typescript
public readonly preCheckoutSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]
- *Default:* not set

Initial steps to run before the source code checkout.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.TaskWorkflowOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.TaskWorkflowOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.github.TaskWorkflowOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workflow name.

---

##### `task`<sup>Required</sup> <a name="task" id="projen.github.TaskWorkflowOptions.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

The main task to be executed.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="projen.github.TaskWorkflowOptions.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string
- *Default:* "build"

The primary job id.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="projen.github.TaskWorkflowOptions.property.triggers"></a>

```typescript
public readonly triggers: Triggers;
```

- *Type:* <a href="#projen.github.workflows.Triggers">Triggers</a>
- *Default:* by default workflows can only be triggered by manually.

The triggers for the workflow.

---

### UploadArtifactOptions <a name="UploadArtifactOptions" id="projen.github.UploadArtifactOptions"></a>

#### Initializer <a name="Initializer" id="projen.github.UploadArtifactOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const uploadArtifactOptions: github.UploadArtifactOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.UploadArtifactOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.UploadArtifactOptions.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.UploadArtifactOptions.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.UploadArtifactOptions.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.UploadArtifactOptions.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.UploadArtifactOptions.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.UploadArtifactOptions.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |
| <code><a href="#projen.github.UploadArtifactOptions.property.with">with</a></code> | <code><a href="#projen.github.UploadArtifactWith">UploadArtifactWith</a></code> | Options for `upload-artifact`. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.UploadArtifactOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.UploadArtifactOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.UploadArtifactOptions.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.UploadArtifactOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.UploadArtifactOptions.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.UploadArtifactOptions.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.UploadArtifactOptions.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

##### `with`<sup>Required</sup> <a name="with" id="projen.github.UploadArtifactOptions.property.with"></a>

```typescript
public readonly with: UploadArtifactWith;
```

- *Type:* <a href="#projen.github.UploadArtifactWith">UploadArtifactWith</a>

Options for `upload-artifact`.

---

### UploadArtifactWith <a name="UploadArtifactWith" id="projen.github.UploadArtifactWith"></a>

#### Initializer <a name="Initializer" id="projen.github.UploadArtifactWith.Initializer"></a>

```typescript
import { github } from 'projen'

const uploadArtifactWith: github.UploadArtifactWith = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.UploadArtifactWith.property.path">path</a></code> | <code>string</code> | A file, directory or wildcard pattern that describes what to upload. |
| <code><a href="#projen.github.UploadArtifactWith.property.compressionLevel">compressionLevel</a></code> | <code>number</code> | The level of compression for Zlib to be applied to the artifact archive. |
| <code><a href="#projen.github.UploadArtifactWith.property.ifNoFilesFound">ifNoFilesFound</a></code> | <code>string</code> | The desired behavior if no files are found using the provided path. |
| <code><a href="#projen.github.UploadArtifactWith.property.name">name</a></code> | <code>string</code> | Name of the artifact to upload. |
| <code><a href="#projen.github.UploadArtifactWith.property.overwrite">overwrite</a></code> | <code>boolean</code> | Whether action should overwrite an existing artifact with the same name (should one exist). |
| <code><a href="#projen.github.UploadArtifactWith.property.retentionDays">retentionDays</a></code> | <code>number</code> | Duration after which artifact will expire in days. 0 means using default repository retention. |

---

##### `path`<sup>Required</sup> <a name="path" id="projen.github.UploadArtifactWith.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

A file, directory or wildcard pattern that describes what to upload.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="projen.github.UploadArtifactWith.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: number;
```

- *Type:* number
- *Default:* 6

The level of compression for Zlib to be applied to the artifact archive.

The value can range from 0 to 9.
For large files that are not easily compressed, a value of 0 is recommended for significantly faster uploads.

---

##### `ifNoFilesFound`<sup>Optional</sup> <a name="ifNoFilesFound" id="projen.github.UploadArtifactWith.property.ifNoFilesFound"></a>

```typescript
public readonly ifNoFilesFound: string;
```

- *Type:* string
- *Default:* "warn"

The desired behavior if no files are found using the provided path.

Available Options:
  warn: Output a warning but do not fail the action
  error: Fail the action with an error message
  ignore: Do not output any warnings or errors, the action does not fail

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.UploadArtifactWith.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* "artifact"

Name of the artifact to upload.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="projen.github.UploadArtifactWith.property.overwrite"></a>

```typescript
public readonly overwrite: boolean;
```

- *Type:* boolean
- *Default:* true

Whether action should overwrite an existing artifact with the same name (should one exist).

Introduced in v4 and represents a breaking change from the behavior of the v3 action.
To maintain backwards compatibility with existing, this should be set the `true` (the default).

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="projen.github.UploadArtifactWith.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number
- *Default:* The default repository retention

Duration after which artifact will expire in days. 0 means using default repository retention.

Minimum 1 day.
Maximum 90 days unless changed from the repository settings page.

---

### UploadGitPatchOptions <a name="UploadGitPatchOptions" id="projen.github.UploadGitPatchOptions"></a>

Options for `uploadGitPatch`.

#### Initializer <a name="Initializer" id="projen.github.UploadGitPatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const uploadGitPatchOptions: github.UploadGitPatchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.UploadGitPatchOptions.property.outputName">outputName</a></code> | <code>string</code> | The name of the output to emit. |
| <code><a href="#projen.github.UploadGitPatchOptions.property.stepId">stepId</a></code> | <code>string</code> | The step ID which produces the output which indicates if a patch was created. |
| <code><a href="#projen.github.UploadGitPatchOptions.property.mutationError">mutationError</a></code> | <code>string</code> | Fail if a mutation was found and print this error message. |
| <code><a href="#projen.github.UploadGitPatchOptions.property.patchFile">patchFile</a></code> | <code>string</code> | The name of the artifact the patch is stored as. |
| <code><a href="#projen.github.UploadGitPatchOptions.property.stepName">stepName</a></code> | <code>string</code> | The name of the step. |

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="projen.github.UploadGitPatchOptions.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The name of the output to emit.

It will be set to `true` if there was a diff.

---

##### `stepId`<sup>Required</sup> <a name="stepId" id="projen.github.UploadGitPatchOptions.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string

The step ID which produces the output which indicates if a patch was created.

---

##### `mutationError`<sup>Optional</sup> <a name="mutationError" id="projen.github.UploadGitPatchOptions.property.mutationError"></a>

```typescript
public readonly mutationError: string;
```

- *Type:* string
- *Default:* do not fail upon mutation

Fail if a mutation was found and print this error message.

---

##### `patchFile`<sup>Optional</sup> <a name="patchFile" id="projen.github.UploadGitPatchOptions.property.patchFile"></a>

```typescript
public readonly patchFile: string;
```

- *Type:* string
- *Default:* ".repo.patch"

The name of the artifact the patch is stored as.

---

##### `stepName`<sup>Optional</sup> <a name="stepName" id="projen.github.UploadGitPatchOptions.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string
- *Default:* "Find mutations"

The name of the step.

---

## Classes <a name="Classes" id="Classes"></a>

### GitHubActionsProvider <a name="GitHubActionsProvider" id="projen.github.GitHubActionsProvider"></a>

Manage the versions used for GitHub Actions used in steps.

#### Initializers <a name="Initializers" id="projen.github.GitHubActionsProvider.Initializer"></a>

```typescript
import { github } from 'projen'

new github.GitHubActionsProvider()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GitHubActionsProvider.get">get</a></code> | Resolve an action name to the version that should be used, taking into account any overrides. |
| <code><a href="#projen.github.GitHubActionsProvider.set">set</a></code> | Define an override for a given action. |

---

##### `get` <a name="get" id="projen.github.GitHubActionsProvider.get"></a>

```typescript
public get(action: string): string
```

Resolve an action name to the version that should be used, taking into account any overrides.

###### `action`<sup>Required</sup> <a name="action" id="projen.github.GitHubActionsProvider.get.parameter.action"></a>

- *Type:* string

---

##### `set` <a name="set" id="projen.github.GitHubActionsProvider.set"></a>

```typescript
public set(action: string, override: string): void
```

Define an override for a given action.

Specify the action name without a version to override all usages of the action.
You can also override a specific action version, by providing the version string.
Specific overrides take precedence over overrides without a version.

If an override for the same action name is set multiple times, the last override is used.

*Example*

```typescript
// Force any use of `actions/checkout` to use a pin a specific commit
project.github.actions.set("actions/checkout", "actions/checkout@aaaaaa");

// But pin usage of `v4` to a different commit
project.github.actions.set("actions/checkout@v4", "actions/checkout@ffffff");
```


###### `action`<sup>Required</sup> <a name="action" id="projen.github.GitHubActionsProvider.set.parameter.action"></a>

- *Type:* string

---

###### `override`<sup>Required</sup> <a name="override" id="projen.github.GitHubActionsProvider.set.parameter.override"></a>

- *Type:* string

---




### GithubCredentials <a name="GithubCredentials" id="projen.github.GithubCredentials"></a>

Represents a method of providing GitHub API access for projen workflows.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.GithubCredentials.fromApp">fromApp</a></code> | Provide API access through a GitHub App. |
| <code><a href="#projen.github.GithubCredentials.fromPersonalAccessToken">fromPersonalAccessToken</a></code> | Provide API access through a GitHub personal access token. |

---

##### `fromApp` <a name="fromApp" id="projen.github.GithubCredentials.fromApp"></a>

```typescript
import { github } from 'projen'

github.GithubCredentials.fromApp(options?: GithubCredentialsAppOptions)
```

Provide API access through a GitHub App.

The GitHub App must be installed on the GitHub repo, its App ID and a
private key must be added as secrets to the repo. The name of the secrets
can be specified here.

> [https://projen.io/docs/integrations/github/#github-app](https://projen.io/docs/integrations/github/#github-app)

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.GithubCredentials.fromApp.parameter.options"></a>

- *Type:* <a href="#projen.github.GithubCredentialsAppOptions">GithubCredentialsAppOptions</a>

---

##### `fromPersonalAccessToken` <a name="fromPersonalAccessToken" id="projen.github.GithubCredentials.fromPersonalAccessToken"></a>

```typescript
import { github } from 'projen'

github.GithubCredentials.fromPersonalAccessToken(options?: GithubCredentialsPersonalAccessTokenOptions)
```

Provide API access through a GitHub personal access token.

The token must be added as a secret to the GitHub repo, and the name of the
secret can be specified here.

> [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.GithubCredentials.fromPersonalAccessToken.parameter.options"></a>

- *Type:* <a href="#projen.github.GithubCredentialsPersonalAccessTokenOptions">GithubCredentialsPersonalAccessTokenOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.GithubCredentials.property.setupSteps">setupSteps</a></code> | <code><a href="#projen.github.workflows.JobStep">JobStep</a>[]</code> | Setup steps to obtain GitHub credentials. |
| <code><a href="#projen.github.GithubCredentials.property.tokenRef">tokenRef</a></code> | <code>string</code> | The value to use in a workflow when a GitHub token is expected. |

---

##### `setupSteps`<sup>Required</sup> <a name="setupSteps" id="projen.github.GithubCredentials.property.setupSteps"></a>

```typescript
public readonly setupSteps: JobStep[];
```

- *Type:* <a href="#projen.github.workflows.JobStep">JobStep</a>[]

Setup steps to obtain GitHub credentials.

---

##### `tokenRef`<sup>Required</sup> <a name="tokenRef" id="projen.github.GithubCredentials.property.tokenRef"></a>

```typescript
public readonly tokenRef: string;
```

- *Type:* string

The value to use in a workflow when a GitHub token is expected.

This
typically looks like "${{ some.path.to.a.value }}".

---


### WorkflowActions <a name="WorkflowActions" id="projen.github.WorkflowActions"></a>

A set of utility functions for creating GitHub actions in workflows.

#### Initializers <a name="Initializers" id="projen.github.WorkflowActions.Initializer"></a>

```typescript
import { github } from 'projen'

new github.WorkflowActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.WorkflowActions.checkoutWithPatch">checkoutWithPatch</a></code> | Checks out a repository and applies a git patch that was created using `uploadGitPatch`. |
| <code><a href="#projen.github.WorkflowActions.createPullRequest">createPullRequest</a></code> | A step that creates a pull request based on the current repo state. |
| <code><a href="#projen.github.WorkflowActions.setupGitIdentity">setupGitIdentity</a></code> | Configures the git identity (user name and email). |
| <code><a href="#projen.github.WorkflowActions.uploadGitPatch">uploadGitPatch</a></code> | Creates a .patch file from the current git diff and uploads it as an artifact. Use `checkoutWithPatch` to download and apply in another job. |

---

##### `checkoutWithPatch` <a name="checkoutWithPatch" id="projen.github.WorkflowActions.checkoutWithPatch"></a>

```typescript
import { github } from 'projen'

github.WorkflowActions.checkoutWithPatch(options?: CheckoutWithPatchOptions)
```

Checks out a repository and applies a git patch that was created using `uploadGitPatch`.

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.WorkflowActions.checkoutWithPatch.parameter.options"></a>

- *Type:* <a href="#projen.github.CheckoutWithPatchOptions">CheckoutWithPatchOptions</a>

Options.

---

##### `createPullRequest` <a name="createPullRequest" id="projen.github.WorkflowActions.createPullRequest"></a>

```typescript
import { github } from 'projen'

github.WorkflowActions.createPullRequest(options: CreatePullRequestOptions)
```

A step that creates a pull request based on the current repo state.

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowActions.createPullRequest.parameter.options"></a>

- *Type:* <a href="#projen.github.CreatePullRequestOptions">CreatePullRequestOptions</a>

Options.

---

##### ~~`setupGitIdentity`~~ <a name="setupGitIdentity" id="projen.github.WorkflowActions.setupGitIdentity"></a>

```typescript
import { github } from 'projen'

github.WorkflowActions.setupGitIdentity(id: GitIdentity)
```

Configures the git identity (user name and email).

###### `id`<sup>Required</sup> <a name="id" id="projen.github.WorkflowActions.setupGitIdentity.parameter.id"></a>

- *Type:* <a href="#projen.github.GitIdentity">GitIdentity</a>

The identity to use.

---

##### `uploadGitPatch` <a name="uploadGitPatch" id="projen.github.WorkflowActions.uploadGitPatch"></a>

```typescript
import { github } from 'projen'

github.WorkflowActions.uploadGitPatch(options: UploadGitPatchOptions)
```

Creates a .patch file from the current git diff and uploads it as an artifact. Use `checkoutWithPatch` to download and apply in another job.

If a patch was uploaded, the action can optionally fail the job.

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowActions.uploadGitPatch.parameter.options"></a>

- *Type:* <a href="#projen.github.UploadGitPatchOptions">UploadGitPatchOptions</a>

Options.

---



### WorkflowJobs <a name="WorkflowJobs" id="projen.github.WorkflowJobs"></a>

A set of utility functions for creating jobs in GitHub Workflows.

#### Initializers <a name="Initializers" id="projen.github.WorkflowJobs.Initializer"></a>

```typescript
import { github } from 'projen'

new github.WorkflowJobs()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.WorkflowJobs.pullRequestFromPatch">pullRequestFromPatch</a></code> | Creates a pull request with the changes of a patch file. |

---

##### `pullRequestFromPatch` <a name="pullRequestFromPatch" id="projen.github.WorkflowJobs.pullRequestFromPatch"></a>

```typescript
import { github } from 'projen'

github.WorkflowJobs.pullRequestFromPatch(options: PullRequestFromPatchOptions)
```

Creates a pull request with the changes of a patch file.

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowJobs.pullRequestFromPatch.parameter.options"></a>

- *Type:* <a href="#projen.github.PullRequestFromPatchOptions">PullRequestFromPatchOptions</a>

---



### WorkflowSteps <a name="WorkflowSteps" id="projen.github.WorkflowSteps"></a>

A collection of very commonly used, individual, GitHub Workflow Job steps.

#### Initializers <a name="Initializers" id="projen.github.WorkflowSteps.Initializer"></a>

```typescript
import { github } from 'projen'

new github.WorkflowSteps()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.WorkflowSteps.checkout">checkout</a></code> | Checks out a repository. |
| <code><a href="#projen.github.WorkflowSteps.downloadArtifact">downloadArtifact</a></code> | Downloads an artifact. |
| <code><a href="#projen.github.WorkflowSteps.setupGitIdentity">setupGitIdentity</a></code> | Configures the git identity (user name and email). |
| <code><a href="#projen.github.WorkflowSteps.tagExists">tagExists</a></code> | Checks if a tag exists. |
| <code><a href="#projen.github.WorkflowSteps.uploadArtifact">uploadArtifact</a></code> | Uploads an artifact. |

---

##### `checkout` <a name="checkout" id="projen.github.WorkflowSteps.checkout"></a>

```typescript
import { github } from 'projen'

github.WorkflowSteps.checkout(options?: CheckoutOptions)
```

Checks out a repository.

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.WorkflowSteps.checkout.parameter.options"></a>

- *Type:* <a href="#projen.github.CheckoutOptions">CheckoutOptions</a>

Options to configure the `checkout` JobStep.

---

##### `downloadArtifact` <a name="downloadArtifact" id="projen.github.WorkflowSteps.downloadArtifact"></a>

```typescript
import { github } from 'projen'

github.WorkflowSteps.downloadArtifact(options?: DownloadArtifactOptions)
```

Downloads an artifact.

###### `options`<sup>Optional</sup> <a name="options" id="projen.github.WorkflowSteps.downloadArtifact.parameter.options"></a>

- *Type:* <a href="#projen.github.DownloadArtifactOptions">DownloadArtifactOptions</a>

Options to configure the `download-artifact` JobStep.

---

##### `setupGitIdentity` <a name="setupGitIdentity" id="projen.github.WorkflowSteps.setupGitIdentity"></a>

```typescript
import { github } from 'projen'

github.WorkflowSteps.setupGitIdentity(options: SetupGitIdentityOptions)
```

Configures the git identity (user name and email).

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowSteps.setupGitIdentity.parameter.options"></a>

- *Type:* <a href="#projen.github.SetupGitIdentityOptions">SetupGitIdentityOptions</a>

Options to configure the git identity JobStep.

---

##### `tagExists` <a name="tagExists" id="projen.github.WorkflowSteps.tagExists"></a>

```typescript
import { github } from 'projen'

github.WorkflowSteps.tagExists(tag: string, options: JobStepConfiguration)
```

Checks if a tag exists.

Requires a checkout step to have been run before this step with "fetch-depth" set to "0".

Outputs:
- `exists`: A string value of 'true' or 'false' indicating if the tag exists.

###### `tag`<sup>Required</sup> <a name="tag" id="projen.github.WorkflowSteps.tagExists.parameter.tag"></a>

- *Type:* string

The tag to check.

You may use valid bash code instead of a literal string in this field.

---

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowSteps.tagExists.parameter.options"></a>

- *Type:* <a href="#projen.github.workflows.JobStepConfiguration">JobStepConfiguration</a>

Options to configure the `tag-exists` JobStep.

---

##### `uploadArtifact` <a name="uploadArtifact" id="projen.github.WorkflowSteps.uploadArtifact"></a>

```typescript
import { github } from 'projen'

github.WorkflowSteps.uploadArtifact(options: UploadArtifactOptions)
```

Uploads an artifact.

###### `options`<sup>Required</sup> <a name="options" id="projen.github.WorkflowSteps.uploadArtifact.parameter.options"></a>

- *Type:* <a href="#projen.github.UploadArtifactOptions">UploadArtifactOptions</a>

Options to configure the `upload-artifact` JobStep.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IAddConditionsLater <a name="IAddConditionsLater" id="projen.github.IAddConditionsLater"></a>

- *Implemented By:* <a href="#projen.github.IAddConditionsLater">IAddConditionsLater</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.IAddConditionsLater.render">render</a></code> | *No description.* |

---

##### `render` <a name="render" id="projen.github.IAddConditionsLater.render"></a>

```typescript
public render(): string[]
```


## Enums <a name="Enums" id="Enums"></a>

### DependabotRegistryType <a name="DependabotRegistryType" id="projen.github.DependabotRegistryType"></a>

Each configuration type requires you to provide particular settings.

Some types allow more than one way to connect

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#configuration-options-for-private-registries](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#configuration-options-for-private-registries)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.DependabotRegistryType.COMPOSER_REGISTRY">COMPOSER_REGISTRY</a></code> | The composer-repository type supports username and password. |
| <code><a href="#projen.github.DependabotRegistryType.DOCKER_REGISTRY">DOCKER_REGISTRY</a></code> | The docker-registry type supports username and password. |
| <code><a href="#projen.github.DependabotRegistryType.GIT">GIT</a></code> | The git type supports username and password. |
| <code><a href="#projen.github.DependabotRegistryType.HEX_ORGANIZATION">HEX_ORGANIZATION</a></code> | The hex-organization type supports organization and key. |
| <code><a href="#projen.github.DependabotRegistryType.MAVEN_REPOSITORY">MAVEN_REPOSITORY</a></code> | The maven-repository type supports username and password, or token. |
| <code><a href="#projen.github.DependabotRegistryType.NPM_REGISTRY">NPM_REGISTRY</a></code> | The npm-registry type supports username and password, or token. |
| <code><a href="#projen.github.DependabotRegistryType.NUGET_FEED">NUGET_FEED</a></code> | The nuget-feed type supports username and password, or token. |
| <code><a href="#projen.github.DependabotRegistryType.PYTHON_INDEX">PYTHON_INDEX</a></code> | The python-index type supports username and password, or token. |
| <code><a href="#projen.github.DependabotRegistryType.RUBYGEMS_SERVER">RUBYGEMS_SERVER</a></code> | The rubygems-server type supports username and password, or token. |
| <code><a href="#projen.github.DependabotRegistryType.TERRAFORM_REGISTRY">TERRAFORM_REGISTRY</a></code> | The terraform-registry type supports a token. |

---

##### `COMPOSER_REGISTRY` <a name="COMPOSER_REGISTRY" id="projen.github.DependabotRegistryType.COMPOSER_REGISTRY"></a>

The composer-repository type supports username and password.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#composer-repository](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#composer-repository)

---


##### `DOCKER_REGISTRY` <a name="DOCKER_REGISTRY" id="projen.github.DependabotRegistryType.DOCKER_REGISTRY"></a>

The docker-registry type supports username and password.

The docker-registry type can also be used to pull from Amazon ECR using static AWS credentials

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#docker-registry](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#docker-registry)

---


##### `GIT` <a name="GIT" id="projen.github.DependabotRegistryType.GIT"></a>

The git type supports username and password.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#git](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#git)

---


##### `HEX_ORGANIZATION` <a name="HEX_ORGANIZATION" id="projen.github.DependabotRegistryType.HEX_ORGANIZATION"></a>

The hex-organization type supports organization and key.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#hex-organization](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#hex-organization)

---


##### `MAVEN_REPOSITORY` <a name="MAVEN_REPOSITORY" id="projen.github.DependabotRegistryType.MAVEN_REPOSITORY"></a>

The maven-repository type supports username and password, or token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#maven-repository](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#maven-repository)

---


##### `NPM_REGISTRY` <a name="NPM_REGISTRY" id="projen.github.DependabotRegistryType.NPM_REGISTRY"></a>

The npm-registry type supports username and password, or token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#npm-registry](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#npm-registry)

---


##### `NUGET_FEED` <a name="NUGET_FEED" id="projen.github.DependabotRegistryType.NUGET_FEED"></a>

The nuget-feed type supports username and password, or token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#nuget-feed](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#nuget-feed)

---


##### `PYTHON_INDEX` <a name="PYTHON_INDEX" id="projen.github.DependabotRegistryType.PYTHON_INDEX"></a>

The python-index type supports username and password, or token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#python-index](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#python-index)

---


##### `RUBYGEMS_SERVER` <a name="RUBYGEMS_SERVER" id="projen.github.DependabotRegistryType.RUBYGEMS_SERVER"></a>

The rubygems-server type supports username and password, or token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#rubygems-server](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#rubygems-server)

---


##### `TERRAFORM_REGISTRY` <a name="TERRAFORM_REGISTRY" id="projen.github.DependabotRegistryType.TERRAFORM_REGISTRY"></a>

The terraform-registry type supports a token.

> [https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#terraform-registry](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#terraform-registry)

---


### DependabotScheduleInterval <a name="DependabotScheduleInterval" id="projen.github.DependabotScheduleInterval"></a>

How often to check for new versions and raise pull requests for version updates.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.DependabotScheduleInterval.DAILY">DAILY</a></code> | Runs on every weekday, Monday to Friday. |
| <code><a href="#projen.github.DependabotScheduleInterval.WEEKLY">WEEKLY</a></code> | Runs once each week. |
| <code><a href="#projen.github.DependabotScheduleInterval.MONTHLY">MONTHLY</a></code> | Runs once each month. |

---

##### `DAILY` <a name="DAILY" id="projen.github.DependabotScheduleInterval.DAILY"></a>

Runs on every weekday, Monday to Friday.

---


##### `WEEKLY` <a name="WEEKLY" id="projen.github.DependabotScheduleInterval.WEEKLY"></a>

Runs once each week.

By default, this is on Monday.

---


##### `MONTHLY` <a name="MONTHLY" id="projen.github.DependabotScheduleInterval.MONTHLY"></a>

Runs once each month.

This is on the first day of the month.

---


### VersioningStrategy <a name="VersioningStrategy" id="projen.github.VersioningStrategy"></a>

The strategy to use when edits manifest and lock files.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.VersioningStrategy.LOCKFILE_ONLY">LOCKFILE_ONLY</a></code> | Only create pull requests to update lockfiles updates. |
| <code><a href="#projen.github.VersioningStrategy.AUTO">AUTO</a></code> | - For apps, the version requirements are increased. |
| <code><a href="#projen.github.VersioningStrategy.WIDEN">WIDEN</a></code> | Relax the version requirement to include both the new and old version, when possible. |
| <code><a href="#projen.github.VersioningStrategy.INCREASE">INCREASE</a></code> | Always increase the version requirement to match the new version. |
| <code><a href="#projen.github.VersioningStrategy.INCREASE_IF_NECESSARY">INCREASE_IF_NECESSARY</a></code> | Increase the version requirement only when required by the new version. |

---

##### `LOCKFILE_ONLY` <a name="LOCKFILE_ONLY" id="projen.github.VersioningStrategy.LOCKFILE_ONLY"></a>

Only create pull requests to update lockfiles updates.

Ignore any new
versions that would require package manifest changes.

---


##### `AUTO` <a name="AUTO" id="projen.github.VersioningStrategy.AUTO"></a>

For apps, the version requirements are increased.

For libraries, the range of versions is widened.

---


##### `WIDEN` <a name="WIDEN" id="projen.github.VersioningStrategy.WIDEN"></a>

Relax the version requirement to include both the new and old version, when possible.

---


##### `INCREASE` <a name="INCREASE" id="projen.github.VersioningStrategy.INCREASE"></a>

Always increase the version requirement to match the new version.

---


##### `INCREASE_IF_NECESSARY` <a name="INCREASE_IF_NECESSARY" id="projen.github.VersioningStrategy.INCREASE_IF_NECESSARY"></a>

Increase the version requirement only when required by the new version.

---

