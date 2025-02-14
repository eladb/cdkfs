# `build` Submodule <a name="`build` Submodule" id="projen.build"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildWorkflow <a name="BuildWorkflow" id="projen.build.BuildWorkflow"></a>

#### Initializers <a name="Initializers" id="projen.build.BuildWorkflow.Initializer"></a>

```typescript
import { build } from 'projen'

new build.BuildWorkflow(project: Project, options: BuildWorkflowOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.BuildWorkflow.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.build.BuildWorkflow.Initializer.parameter.options">options</a></code> | <code><a href="#projen.build.BuildWorkflowOptions">BuildWorkflowOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.build.BuildWorkflow.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.build.BuildWorkflow.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.build.BuildWorkflowOptions">BuildWorkflowOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.build.BuildWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.build.BuildWorkflow.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.build.BuildWorkflow.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.build.BuildWorkflow.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.build.BuildWorkflow.addPostBuildJob">addPostBuildJob</a></code> | Adds another job to the build workflow which is executed after the build job succeeded. |
| <code><a href="#projen.build.BuildWorkflow.addPostBuildJobCommands">addPostBuildJobCommands</a></code> | Run a sequence of commands as a job within the build workflow which is executed after the build job succeeded. |
| <code><a href="#projen.build.BuildWorkflow.addPostBuildJobTask">addPostBuildJobTask</a></code> | Run a task as a job within the build workflow which is executed after the build job succeeded. |
| <code><a href="#projen.build.BuildWorkflow.addPostBuildSteps">addPostBuildSteps</a></code> | Adds steps that are executed after the build. |

---

##### `toString` <a name="toString" id="projen.build.BuildWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.build.BuildWorkflow.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.build.BuildWorkflow.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.build.BuildWorkflow.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addPostBuildJob` <a name="addPostBuildJob" id="projen.build.BuildWorkflow.addPostBuildJob"></a>

```typescript
public addPostBuildJob(id: string, job: Job): void
```

Adds another job to the build workflow which is executed after the build job succeeded.

Jobs are executed _only_ if the build did NOT self mutate. If the build
self-mutate, the branch will either be updated or the build will fail (in
forks), so there is no point in executing the post-build job.

###### `id`<sup>Required</sup> <a name="id" id="projen.build.BuildWorkflow.addPostBuildJob.parameter.id"></a>

- *Type:* string

The id of the new job.

---

###### `job`<sup>Required</sup> <a name="job" id="projen.build.BuildWorkflow.addPostBuildJob.parameter.job"></a>

- *Type:* projen.github.workflows.Job

The job specification.

---

##### `addPostBuildJobCommands` <a name="addPostBuildJobCommands" id="projen.build.BuildWorkflow.addPostBuildJobCommands"></a>

```typescript
public addPostBuildJobCommands(id: string, commands: string[], options?: AddPostBuildJobCommandsOptions): void
```

Run a sequence of commands as a job within the build workflow which is executed after the build job succeeded.

Jobs are executed _only_ if the build did NOT self mutate. If the build
self-mutate, the branch will either be updated or the build will fail (in
forks), so there is no point in executing the post-build job.

###### `id`<sup>Required</sup> <a name="id" id="projen.build.BuildWorkflow.addPostBuildJobCommands.parameter.id"></a>

- *Type:* string

---

###### `commands`<sup>Required</sup> <a name="commands" id="projen.build.BuildWorkflow.addPostBuildJobCommands.parameter.commands"></a>

- *Type:* string[]

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.build.BuildWorkflow.addPostBuildJobCommands.parameter.options"></a>

- *Type:* <a href="#projen.build.AddPostBuildJobCommandsOptions">AddPostBuildJobCommandsOptions</a>

Specify tools and other options.

---

##### `addPostBuildJobTask` <a name="addPostBuildJobTask" id="projen.build.BuildWorkflow.addPostBuildJobTask"></a>

```typescript
public addPostBuildJobTask(task: Task, options?: AddPostBuildJobTaskOptions): void
```

Run a task as a job within the build workflow which is executed after the build job succeeded.

The job will have access to build artifacts and will install project
dependencies in order to be able to run any commands used in the tasks.

Jobs are executed _only_ if the build did NOT self mutate. If the build
self-mutate, the branch will either be updated or the build will fail (in
forks), so there is no point in executing the post-build job.

###### `task`<sup>Required</sup> <a name="task" id="projen.build.BuildWorkflow.addPostBuildJobTask.parameter.task"></a>

- *Type:* projen.Task

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.build.BuildWorkflow.addPostBuildJobTask.parameter.options"></a>

- *Type:* <a href="#projen.build.AddPostBuildJobTaskOptions">AddPostBuildJobTaskOptions</a>

Specify tools and other options.

---

##### `addPostBuildSteps` <a name="addPostBuildSteps" id="projen.build.BuildWorkflow.addPostBuildSteps"></a>

```typescript
public addPostBuildSteps(steps: ...JobStep[]): void
```

Adds steps that are executed after the build.

###### `steps`<sup>Required</sup> <a name="steps" id="projen.build.BuildWorkflow.addPostBuildSteps.parameter.steps"></a>

- *Type:* ...projen.github.workflows.JobStep[]

The job steps.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.build.BuildWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.build.BuildWorkflow.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.build.BuildWorkflow.isConstruct"></a>

```typescript
import { build } from 'projen'

build.BuildWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.build.BuildWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.build.BuildWorkflow.isComponent"></a>

```typescript
import { build } from 'projen'

build.BuildWorkflow.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.build.BuildWorkflow.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.BuildWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.build.BuildWorkflow.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.build.BuildWorkflow.property.buildJobIds">buildJobIds</a></code> | <code>string[]</code> | Returns a list of job IDs that are part of the build. |
| <code><a href="#projen.build.BuildWorkflow.property.name">name</a></code> | <code>string</code> | Name of generated github workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.build.BuildWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.build.BuildWorkflow.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `buildJobIds`<sup>Required</sup> <a name="buildJobIds" id="projen.build.BuildWorkflow.property.buildJobIds"></a>

```typescript
public readonly buildJobIds: string[];
```

- *Type:* string[]

Returns a list of job IDs that are part of the build.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.build.BuildWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of generated github workflow.

---


## Structs <a name="Structs" id="Structs"></a>

### AddPostBuildJobCommandsOptions <a name="AddPostBuildJobCommandsOptions" id="projen.build.AddPostBuildJobCommandsOptions"></a>

Options for `BuildWorkflow.addPostBuildJobCommands`.

#### Initializer <a name="Initializer" id="projen.build.AddPostBuildJobCommandsOptions.Initializer"></a>

```typescript
import { build } from 'projen'

const addPostBuildJobCommandsOptions: build.AddPostBuildJobCommandsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.AddPostBuildJobCommandsOptions.property.checkoutRepo">checkoutRepo</a></code> | <code>boolean</code> | Check out the repository at the pull request branch before commands are run. |
| <code><a href="#projen.build.AddPostBuildJobCommandsOptions.property.installDeps">installDeps</a></code> | <code>boolean</code> | Install project dependencies before running commands. `checkoutRepo` must also be set to true. |
| <code><a href="#projen.build.AddPostBuildJobCommandsOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.build.AddPostBuildJobCommandsOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.build.AddPostBuildJobCommandsOptions.property.tools">tools</a></code> | <code>projen.github.workflows.Tools</code> | Tools that should be installed before the commands are run. |

---

##### `checkoutRepo`<sup>Optional</sup> <a name="checkoutRepo" id="projen.build.AddPostBuildJobCommandsOptions.property.checkoutRepo"></a>

```typescript
public readonly checkoutRepo: boolean;
```

- *Type:* boolean
- *Default:* false

Check out the repository at the pull request branch before commands are run.

---

##### `installDeps`<sup>Optional</sup> <a name="installDeps" id="projen.build.AddPostBuildJobCommandsOptions.property.installDeps"></a>

```typescript
public readonly installDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Install project dependencies before running commands. `checkoutRepo` must also be set to true.

Currently only supported for `NodeProject`.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.build.AddPostBuildJobCommandsOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.build.AddPostBuildJobCommandsOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `tools`<sup>Optional</sup> <a name="tools" id="projen.build.AddPostBuildJobCommandsOptions.property.tools"></a>

```typescript
public readonly tools: Tools;
```

- *Type:* projen.github.workflows.Tools

Tools that should be installed before the commands are run.

---

### AddPostBuildJobTaskOptions <a name="AddPostBuildJobTaskOptions" id="projen.build.AddPostBuildJobTaskOptions"></a>

Options for `BuildWorkflow.addPostBuildJobTask`.

#### Initializer <a name="Initializer" id="projen.build.AddPostBuildJobTaskOptions.Initializer"></a>

```typescript
import { build } from 'projen'

const addPostBuildJobTaskOptions: build.AddPostBuildJobTaskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.AddPostBuildJobTaskOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.build.AddPostBuildJobTaskOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.build.AddPostBuildJobTaskOptions.property.tools">tools</a></code> | <code>projen.github.workflows.Tools</code> | Tools that should be installed before the task is run. |

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.build.AddPostBuildJobTaskOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.build.AddPostBuildJobTaskOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `tools`<sup>Optional</sup> <a name="tools" id="projen.build.AddPostBuildJobTaskOptions.property.tools"></a>

```typescript
public readonly tools: Tools;
```

- *Type:* projen.github.workflows.Tools

Tools that should be installed before the task is run.

---

### BuildWorkflowCommonOptions <a name="BuildWorkflowCommonOptions" id="projen.build.BuildWorkflowCommonOptions"></a>

#### Initializer <a name="Initializer" id="projen.build.BuildWorkflowCommonOptions.Initializer"></a>

```typescript
import { build } from 'projen'

const buildWorkflowCommonOptions: build.BuildWorkflowCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.BuildWorkflowCommonOptions.property.name">name</a></code> | <code>string</code> | Name of the buildfile (e.g. "build" becomes "build.yml"). |
| <code><a href="#projen.build.BuildWorkflowCommonOptions.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`. |
| <code><a href="#projen.build.BuildWorkflowCommonOptions.property.preBuildSteps">preBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute before the build. |
| <code><a href="#projen.build.BuildWorkflowCommonOptions.property.workflowTriggers">workflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.build.BuildWorkflowCommonOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* "build"

Name of the buildfile (e.g. "build" becomes "build.yml").

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="projen.build.BuildWorkflowCommonOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions
- *Default:* `{ contents: JobPermission.WRITE }`

Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`.

---

##### `preBuildSteps`<sup>Optional</sup> <a name="preBuildSteps" id="projen.build.BuildWorkflowCommonOptions.property.preBuildSteps"></a>

```typescript
public readonly preBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute before the build.

---

##### `workflowTriggers`<sup>Optional</sup> <a name="workflowTriggers" id="projen.build.BuildWorkflowCommonOptions.property.workflowTriggers"></a>

```typescript
public readonly workflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

### BuildWorkflowOptions <a name="BuildWorkflowOptions" id="projen.build.BuildWorkflowOptions"></a>

#### Initializer <a name="Initializer" id="projen.build.BuildWorkflowOptions.Initializer"></a>

```typescript
import { build } from 'projen'

const buildWorkflowOptions: build.BuildWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.build.BuildWorkflowOptions.property.name">name</a></code> | <code>string</code> | Name of the buildfile (e.g. "build" becomes "build.yml"). |
| <code><a href="#projen.build.BuildWorkflowOptions.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.preBuildSteps">preBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute before the build. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.workflowTriggers">workflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | The task to execute in order to build the project. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A name of a directory that includes build artifacts. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.containerImage">containerImage</a></code> | <code>string</code> | The container image to use for builds. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.gitIdentity">gitIdentity</a></code> | <code>projen.github.GitIdentity</code> | Git identity to use for the workflow. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.build.BuildWorkflowOptions.property.tools">tools</a></code> | <code>projen.github.workflows.Tools</code> | Tools required for this job. |

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.build.BuildWorkflowOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* "build"

Name of the buildfile (e.g. "build" becomes "build.yml").

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="projen.build.BuildWorkflowOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions
- *Default:* `{ contents: JobPermission.WRITE }`

Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`.

---

##### `preBuildSteps`<sup>Optional</sup> <a name="preBuildSteps" id="projen.build.BuildWorkflowOptions.property.preBuildSteps"></a>

```typescript
public readonly preBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute before the build.

---

##### `workflowTriggers`<sup>Optional</sup> <a name="workflowTriggers" id="projen.build.BuildWorkflowOptions.property.workflowTriggers"></a>

```typescript
public readonly workflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.build.BuildWorkflowOptions.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

The task to execute in order to build the project.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.build.BuildWorkflowOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A name of a directory that includes build artifacts.

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="projen.build.BuildWorkflowOptions.property.containerImage"></a>

```typescript
public readonly containerImage: string;
```

- *Type:* string
- *Default:* the default workflow container

The container image to use for builds.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.build.BuildWorkflowOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.build.BuildWorkflowOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default identity

Git identity to use for the workflow.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen.build.BuildWorkflowOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will
always be up-to-date before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

This is enabled by default only if `githubTokenSecret` is set. Otherwise it
is disabled, which implies that file changes that happen during build will
not be pushed back to the branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.build.BuildWorkflowOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.build.BuildWorkflowOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.build.BuildWorkflowOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `tools`<sup>Optional</sup> <a name="tools" id="projen.build.BuildWorkflowOptions.property.tools"></a>

```typescript
public readonly tools: Tools;
```

- *Type:* projen.github.workflows.Tools
- *Default:* none

Tools required for this job.

Translates into `actions/setup-xxx` steps at the beginning of the job.

---



