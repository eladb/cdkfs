# `awscdk` Submodule <a name="`awscdk` Submodule" id="projen.awscdk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoDiscover <a name="AutoDiscover" id="projen.awscdk.AutoDiscover"></a>

Discovers and creates integration tests and lambdas from code in the project's source and test trees.

#### Initializers <a name="Initializers" id="projen.awscdk.AutoDiscover.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AutoDiscover(project: Project, options: AutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AutoDiscoverOptions">AutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AutoDiscoverOptions">AutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.AutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.AutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.AutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.AutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AutoDiscover.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.AutoDiscover.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### AwsCdkConstructLibrary <a name="AwsCdkConstructLibrary" id="projen.awscdk.AwsCdkConstructLibrary"></a>

AWS CDK construct library project.

A multi-language (jsii) construct library which vends constructs designed to
use within the AWS CDK with a friendly workflow and automatic publishing to
the construct catalog.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkConstructLibrary.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkConstructLibrary(options: AwsCdkConstructLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions">AwsCdkConstructLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkConstructLibrary.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkConstructLibraryOptions">AwsCdkConstructLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkConstructLibrary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.awscdk.AwsCdkConstructLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.awscdk.AwsCdkConstructLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.awscdk.AwsCdkConstructLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkConstructLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.awscdk.AwsCdkConstructLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkConstructLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.awscdk.AwsCdkConstructLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.awscdk.AwsCdkConstructLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.awscdk.AwsCdkConstructLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.awscdk.AwsCdkConstructLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.awscdk.AwsCdkConstructLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.awscdk.AwsCdkConstructLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkConstructLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkConstructLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.awscdk.AwsCdkConstructLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.awscdk.AwsCdkConstructLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.awscdk.AwsCdkConstructLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.awscdk.AwsCdkConstructLibrary.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.awscdk.AwsCdkConstructLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkConstructLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.awscdk.AwsCdkConstructLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkConstructLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.awscdk.AwsCdkConstructLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkConstructLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.awscdk.AwsCdkConstructLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkConstructLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.awscdk.AwsCdkConstructLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.awscdk.AwsCdkConstructLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.awscdk.AwsCdkConstructLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.awscdk.AwsCdkConstructLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.AwsCdkConstructLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.awscdk.AwsCdkConstructLibrary.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.awscdk.AwsCdkConstructLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.awscdk.AwsCdkConstructLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.awscdk.AwsCdkConstructLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.awscdk.AwsCdkConstructLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.awscdk.AwsCdkConstructLibrary.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.awscdk.AwsCdkConstructLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.awscdk.AwsCdkConstructLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.awscdk.AwsCdkConstructLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.awscdk.AwsCdkConstructLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.AwsCdkConstructLibrary.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.awscdk.AwsCdkConstructLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.awscdk.AwsCdkConstructLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.awscdk.AwsCdkConstructLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.awscdk.AwsCdkConstructLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.awscdk.AwsCdkConstructLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.awscdk.AwsCdkConstructLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="projen.awscdk.AwsCdkConstructLibrary.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addCdkDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="projen.awscdk.AwsCdkConstructLibrary.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.addCdkTestDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkConstructLibrary.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkConstructLibrary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkConstructLibrary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.awscdk.AwsCdkConstructLibrary.isProject"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkConstructLibrary.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkConstructLibrary.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.awscdk.AwsCdkConstructLibrary.of"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkConstructLibrary.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.awscdk.AwsCdkConstructLibrary.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkConstructLibrary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.awscdk.AwsCdkConstructLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkConstructLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.awscdk.AwsCdkConstructLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.awscdk.AwsCdkConstructLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.awscdk.AwsCdkConstructLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.awscdk.AwsCdkConstructLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.awscdk.AwsCdkConstructLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.awscdk.AwsCdkConstructLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.awscdk.AwsCdkConstructLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.awscdk.AwsCdkConstructLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.awscdk.AwsCdkConstructLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.awscdk.AwsCdkConstructLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.awscdk.AwsCdkConstructLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.awscdk.AwsCdkConstructLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkConstructLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.awscdk.AwsCdkConstructLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.awscdk.AwsCdkConstructLibrary.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.awscdk.AwsCdkConstructLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.awscdk.AwsCdkConstructLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.awscdk.AwsCdkConstructLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.awscdk.AwsCdkConstructLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkConstructLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.awscdk.AwsCdkConstructLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.awscdk.AwsCdkConstructLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkConstructLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkConstructLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkConstructLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkConstructLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.awscdk.AwsCdkConstructLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.awscdk.AwsCdkConstructLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.awscdk.AwsCdkConstructLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.awscdk.AwsCdkConstructLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.AwsCdkConstructLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.awscdk.AwsCdkConstructLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.awscdk.AwsCdkConstructLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.awscdk.AwsCdkConstructLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.awscdk.AwsCdkConstructLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.awscdk.AwsCdkConstructLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkConstructLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.AwsCdkConstructLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.awscdk.AwsCdkConstructLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.awscdk.AwsCdkConstructLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.AwsCdkConstructLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.AwsCdkConstructLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.AwsCdkConstructLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.awscdk.AwsCdkConstructLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.awscdk.AwsCdkConstructLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.awscdk.AwsCdkConstructLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.awscdk.AwsCdkConstructLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.awscdk.AwsCdkConstructLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.awscdk.AwsCdkConstructLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.AwsCdkConstructLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.awscdk.AwsCdkConstructLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.awscdk.AwsCdkConstructLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

Same as `tsconfig` if {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfigDev`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileName`options.tsconfigDev.fileName`} or `tsconfig.dev.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigDevoptions.tsconfigDev} including:
- `include` - added after the includes from {@link tsconfig} (if not disabled), and {@link TypeScriptProjectOptions.testdiroptions.testdir}
- `exclude` - added after `"node_modules"`
- `extends` - if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfigoptions.tsconfigDevExtendsTsconfig} is
  set to `true`, the file *also* extends {@link tsconfig} (if not disabled).

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfigDev.compilerOptions}:
- `rootDir` and `outDir` are left undefined, so the whole project is covered.
- if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfig`options.tsconfigDevExtendsTsconfig`} is set to `false`,
  the `compilerOptions` are set to `tsconfig.compilerOptions`
- {@link TypeScriptProjectOptions.tsconfigDevPresets`options.tsconfigDevPresets`} (if defined) is applied
- in the case of `options.disableTsconfig` being set to `true` and `options.tsconfigDevPresets` being undefined then
  `TypescriptConfigPresetsOptions.PROJEN_CLASSIC` is applied
- the provided `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfigDev.compilerOptionsMergeMethod`}.

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.awscdk.AwsCdkConstructLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.awscdk.AwsCdkConstructLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.awscdk.AwsCdkConstructLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.AwsCdkConstructLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers source files only.

Exists unless {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfig`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileNameoptions.tsconfig.fileName} or `tsconfig.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigoptions.tsconfig} including:
- `include` - added after {@link TypeScriptProjectOptions.srcdiroptions.srcdir}
- `exclude`
- `extends`

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfig.compilerOptions}:
- `rootDir` and `outDir` are set to {@link TypeScriptProjectOptions.srcdir`options.srcdir`} and
  {@link TypeScriptProjectOptions.libdir`options.libdir`} respectively.
- {@link TypeScriptProjectOptions.tsconfigPresets`options.tsconfigPresets`} (defaulting to
  {@link TypescriptConfigPresetsOptions.PROJEN_CLASSIC`PROJEN_CLASSIC`}) is applied, then the provided
  `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfig.compilerOptionsMergeMethod`}.

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.awscdk.AwsCdkConstructLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AwsCdkConstructLibrary.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkConstructLibrary.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="projen.awscdk.AwsCdkConstructLibrary.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.awscdk.AwsCdkConstructLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.awscdk.AwsCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### AwsCdkDeps <a name="AwsCdkDeps" id="projen.awscdk.AwsCdkDeps"></a>

Manages dependencies on the AWS CDK.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkDeps.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkDeps(project: Project, options: AwsCdkDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDeps.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDeps.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDeps.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkDeps.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDeps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkDeps.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDeps.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDeps.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.awscdk.AwsCdkDeps.addV1Dependencies">addV1Dependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.AwsCdkDeps.addV1DevDependencies">addV1DevDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkDeps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkDeps.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkDeps.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.AwsCdkDeps.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addV1Dependencies` <a name="addV1Dependencies" id="projen.awscdk.AwsCdkDeps.addV1Dependencies"></a>

```typescript
public addV1Dependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

The type of dependency is determined by the `dependencyType` option.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDeps.addV1Dependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### `addV1DevDependencies` <a name="addV1DevDependencies" id="projen.awscdk.AwsCdkDeps.addV1DevDependencies"></a>

```typescript
public addV1DevDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDeps.addV1DevDependencies.parameter.deps"></a>

- *Type:* string

fully qualified names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDeps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkDeps.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkDeps.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDeps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDeps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.AwsCdkDeps.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDeps.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDeps.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | Whether CDK dependencies are added as normal dependencies (and peer dependencies). |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.cdkMajorVersion">cdkMajorVersion</a></code> | <code>number</code> | The major version of the AWS CDK (e.g. 1, 2, ...). |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.cdkMinimumVersion">cdkMinimumVersion</a></code> | <code>string</code> | The minimum version of the AWS CDK (e.g. `2.0.0`). |
| <code><a href="#projen.awscdk.AwsCdkDeps.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The dependency requirement for AWS CDK (e.g. `^2.0.0`). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkDeps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDeps.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Required</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDeps.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not used for CDK 2.x

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean

Whether CDK dependencies are added as normal dependencies (and peer dependencies).

---

##### `cdkMajorVersion`<sup>Required</sup> <a name="cdkMajorVersion" id="projen.awscdk.AwsCdkDeps.property.cdkMajorVersion"></a>

```typescript
public readonly cdkMajorVersion: number;
```

- *Type:* number

The major version of the AWS CDK (e.g. 1, 2, ...).

---

##### `cdkMinimumVersion`<sup>Required</sup> <a name="cdkMinimumVersion" id="projen.awscdk.AwsCdkDeps.property.cdkMinimumVersion"></a>

```typescript
public readonly cdkMinimumVersion: string;
```

- *Type:* string

The minimum version of the AWS CDK (e.g. `2.0.0`).

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDeps.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The dependency requirement for AWS CDK (e.g. `^2.0.0`).

---


### AwsCdkDepsJava <a name="AwsCdkDepsJava" id="projen.awscdk.AwsCdkDepsJava"></a>

Manages dependencies on the AWS CDK for Java projects.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkDepsJava.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkDepsJava(project: Project, options: AwsCdkDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsJava.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkDepsJava.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.addV1Dependencies">addV1Dependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.addV1DevDependencies">addV1DevDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkDepsJava.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkDepsJava.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkDepsJava.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.AwsCdkDepsJava.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addV1Dependencies` <a name="addV1Dependencies" id="projen.awscdk.AwsCdkDepsJava.addV1Dependencies"></a>

```typescript
public addV1Dependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

The type of dependency is determined by the `dependencyType` option.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsJava.addV1Dependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### `addV1DevDependencies` <a name="addV1DevDependencies" id="projen.awscdk.AwsCdkDepsJava.addV1DevDependencies"></a>

```typescript
public addV1DevDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsJava.addV1DevDependencies.parameter.deps"></a>

- *Type:* string

fully qualified names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkDepsJava.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsJava.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsJava.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.AwsCdkDepsJava.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsJava.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsJava.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | Whether CDK dependencies are added as normal dependencies (and peer dependencies). |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.cdkMajorVersion">cdkMajorVersion</a></code> | <code>number</code> | The major version of the AWS CDK (e.g. 1, 2, ...). |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.cdkMinimumVersion">cdkMinimumVersion</a></code> | <code>string</code> | The minimum version of the AWS CDK (e.g. `2.0.0`). |
| <code><a href="#projen.awscdk.AwsCdkDepsJava.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The dependency requirement for AWS CDK (e.g. `^2.0.0`). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkDepsJava.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsJava.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Required</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDepsJava.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not used for CDK 2.x

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean

Whether CDK dependencies are added as normal dependencies (and peer dependencies).

---

##### `cdkMajorVersion`<sup>Required</sup> <a name="cdkMajorVersion" id="projen.awscdk.AwsCdkDepsJava.property.cdkMajorVersion"></a>

```typescript
public readonly cdkMajorVersion: number;
```

- *Type:* number

The major version of the AWS CDK (e.g. 1, 2, ...).

---

##### `cdkMinimumVersion`<sup>Required</sup> <a name="cdkMinimumVersion" id="projen.awscdk.AwsCdkDepsJava.property.cdkMinimumVersion"></a>

```typescript
public readonly cdkMinimumVersion: string;
```

- *Type:* string

The minimum version of the AWS CDK (e.g. `2.0.0`).

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDepsJava.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The dependency requirement for AWS CDK (e.g. `^2.0.0`).

---


### AwsCdkDepsJs <a name="AwsCdkDepsJs" id="projen.awscdk.AwsCdkDepsJs"></a>

Manages dependencies on the AWS CDK for Node.js projects.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkDepsJs.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkDepsJs(project: Project, options: AwsCdkDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsJs.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkDepsJs.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.addV1Dependencies">addV1Dependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.addV1DevDependencies">addV1DevDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkDepsJs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkDepsJs.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkDepsJs.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.AwsCdkDepsJs.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addV1Dependencies` <a name="addV1Dependencies" id="projen.awscdk.AwsCdkDepsJs.addV1Dependencies"></a>

```typescript
public addV1Dependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

The type of dependency is determined by the `dependencyType` option.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsJs.addV1Dependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### `addV1DevDependencies` <a name="addV1DevDependencies" id="projen.awscdk.AwsCdkDepsJs.addV1DevDependencies"></a>

```typescript
public addV1DevDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsJs.addV1DevDependencies.parameter.deps"></a>

- *Type:* string

fully qualified names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkDepsJs.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsJs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsJs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.AwsCdkDepsJs.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsJs.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsJs.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | Whether CDK dependencies are added as normal dependencies (and peer dependencies). |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.cdkMajorVersion">cdkMajorVersion</a></code> | <code>number</code> | The major version of the AWS CDK (e.g. 1, 2, ...). |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.cdkMinimumVersion">cdkMinimumVersion</a></code> | <code>string</code> | The minimum version of the AWS CDK (e.g. `2.0.0`). |
| <code><a href="#projen.awscdk.AwsCdkDepsJs.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The dependency requirement for AWS CDK (e.g. `^2.0.0`). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkDepsJs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsJs.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Required</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDepsJs.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not used for CDK 2.x

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean

Whether CDK dependencies are added as normal dependencies (and peer dependencies).

---

##### `cdkMajorVersion`<sup>Required</sup> <a name="cdkMajorVersion" id="projen.awscdk.AwsCdkDepsJs.property.cdkMajorVersion"></a>

```typescript
public readonly cdkMajorVersion: number;
```

- *Type:* number

The major version of the AWS CDK (e.g. 1, 2, ...).

---

##### `cdkMinimumVersion`<sup>Required</sup> <a name="cdkMinimumVersion" id="projen.awscdk.AwsCdkDepsJs.property.cdkMinimumVersion"></a>

```typescript
public readonly cdkMinimumVersion: string;
```

- *Type:* string

The minimum version of the AWS CDK (e.g. `2.0.0`).

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDepsJs.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The dependency requirement for AWS CDK (e.g. `^2.0.0`).

---


### AwsCdkDepsPy <a name="AwsCdkDepsPy" id="projen.awscdk.AwsCdkDepsPy"></a>

Manages dependencies on the AWS CDK for Python projects.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkDepsPy.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkDepsPy(project: Project, options: AwsCdkDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsPy.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkDepsPy.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkDepsOptions">AwsCdkDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.addV1Dependencies">addV1Dependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.addV1DevDependencies">addV1DevDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkDepsPy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkDepsPy.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkDepsPy.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.AwsCdkDepsPy.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addV1Dependencies` <a name="addV1Dependencies" id="projen.awscdk.AwsCdkDepsPy.addV1Dependencies"></a>

```typescript
public addV1Dependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

The type of dependency is determined by the `dependencyType` option.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsPy.addV1Dependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### `addV1DevDependencies` <a name="addV1DevDependencies" id="projen.awscdk.AwsCdkDepsPy.addV1DevDependencies"></a>

```typescript
public addV1DevDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

This method is not supported in CDK v2. Use `project.addPeerDeps()` or
`project.addDeps()` as appropriate.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkDepsPy.addV1DevDependencies.parameter.deps"></a>

- *Type:* string

fully qualified names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkDepsPy.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsPy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsPy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.AwsCdkDepsPy.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkDepsPy.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkDepsPy.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | Whether CDK dependencies are added as normal dependencies (and peer dependencies). |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.cdkMajorVersion">cdkMajorVersion</a></code> | <code>number</code> | The major version of the AWS CDK (e.g. 1, 2, ...). |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.cdkMinimumVersion">cdkMinimumVersion</a></code> | <code>string</code> | The minimum version of the AWS CDK (e.g. `2.0.0`). |
| <code><a href="#projen.awscdk.AwsCdkDepsPy.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The dependency requirement for AWS CDK (e.g. `^2.0.0`). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkDepsPy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.AwsCdkDepsPy.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Required</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDepsPy.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not used for CDK 2.x

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean

Whether CDK dependencies are added as normal dependencies (and peer dependencies).

---

##### `cdkMajorVersion`<sup>Required</sup> <a name="cdkMajorVersion" id="projen.awscdk.AwsCdkDepsPy.property.cdkMajorVersion"></a>

```typescript
public readonly cdkMajorVersion: number;
```

- *Type:* number

The major version of the AWS CDK (e.g. 1, 2, ...).

---

##### `cdkMinimumVersion`<sup>Required</sup> <a name="cdkMinimumVersion" id="projen.awscdk.AwsCdkDepsPy.property.cdkMinimumVersion"></a>

```typescript
public readonly cdkMinimumVersion: string;
```

- *Type:* string

The minimum version of the AWS CDK (e.g. `2.0.0`).

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDepsPy.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The dependency requirement for AWS CDK (e.g. `^2.0.0`).

---


### AwsCdkJavaApp <a name="AwsCdkJavaApp" id="projen.awscdk.AwsCdkJavaApp"></a>

AWS CDK app in Java.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkJavaApp.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkJavaApp(options: AwsCdkJavaAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkJavaAppOptions">AwsCdkJavaAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkJavaApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkJavaAppOptions">AwsCdkJavaAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addPlugin">addPlugin</a></code> | Adds a build plugin to the pom. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addTestDependency">addTestDependency</a></code> | Adds a test dependency. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkJavaApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.awscdk.AwsCdkJavaApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.awscdk.AwsCdkJavaApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.awscdk.AwsCdkJavaApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkJavaApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.awscdk.AwsCdkJavaApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen.awscdk.AwsCdkJavaApp.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen.awscdk.AwsCdkJavaApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkJavaApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.awscdk.AwsCdkJavaApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.awscdk.AwsCdkJavaApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.awscdk.AwsCdkJavaApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.awscdk.AwsCdkJavaApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.awscdk.AwsCdkJavaApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkJavaApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkJavaApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.awscdk.AwsCdkJavaApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkJavaApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.awscdk.AwsCdkJavaApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen.awscdk.AwsCdkJavaApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.awscdk.AwsCdkJavaApp.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.awscdk.AwsCdkJavaApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkJavaApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.awscdk.AwsCdkJavaApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkJavaApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.awscdk.AwsCdkJavaApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkJavaApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.awscdk.AwsCdkJavaApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkJavaApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen.awscdk.AwsCdkJavaApp.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.awscdk.AwsCdkJavaApp.addDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### `addPlugin` <a name="addPlugin" id="projen.awscdk.AwsCdkJavaApp.addPlugin"></a>

```typescript
public addPlugin(spec: string, options?: PluginOptions): Dependency
```

Adds a build plugin to the pom.

The plug in is also added as a BUILD dep to the project.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.awscdk.AwsCdkJavaApp.addPlugin.parameter.spec"></a>

- *Type:* string

dependency spec (`group/artifact@version`).

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.awscdk.AwsCdkJavaApp.addPlugin.parameter.options"></a>

- *Type:* projen.java.PluginOptions

plugin options.

---

##### `addTestDependency` <a name="addTestDependency" id="projen.awscdk.AwsCdkJavaApp.addTestDependency"></a>

```typescript
public addTestDependency(spec: string): void
```

Adds a test dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.awscdk.AwsCdkJavaApp.addTestDependency.parameter.spec"></a>

- *Type:* string

Format `<groupId>/<artifactId>@<semver>`.

---

##### ~~`addCdkDependency`~~ <a name="addCdkDependency" id="projen.awscdk.AwsCdkJavaApp.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="projen.awscdk.AwsCdkJavaApp.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on (e.g. "software.amazon.awscdk/aws-lambda", "software.amazon.awscdk/aws-iam", etc).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkJavaApp.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkJavaApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkJavaApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.awscdk.AwsCdkJavaApp.isProject"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkJavaApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkJavaApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.awscdk.AwsCdkJavaApp.of"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkJavaApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.awscdk.AwsCdkJavaApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.compile">compile</a></code> | <code>projen.java.MavenCompile</code> | Compile component. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.distdir">distdir</a></code> | <code>string</code> | Maven artifact output directory. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.packaging">packaging</a></code> | <code>projen.java.MavenPackaging</code> | Packaging component. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.pom">pom</a></code> | <code>projen.java.Pom</code> | API for managing `pom.xml`. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.junit">junit</a></code> | <code>projen.java.Junit</code> | JUnit component. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.projenrc">projenrc</a></code> | <code>projen.java.Projenrc</code> | Projenrc component. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.cdkConfig">cdkConfig</a></code> | <code><a href="#projen.awscdk.CdkConfig">CdkConfig</a></code> | The `cdk.json` file. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | CDK dependency management helper class. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.cdkTasks">cdkTasks</a></code> | <code><a href="#projen.awscdk.CdkTasks">CdkTasks</a></code> | CDK tasks. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.mainClass">mainClass</a></code> | <code>string</code> | The full name of the main class of the java app (package.Class). |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.mainClassName">mainClassName</a></code> | <code>string</code> | The name of the Java class with the static `main()` method. |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.mainPackage">mainPackage</a></code> | <code>string</code> | The name of the Java package that includes the main class. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkJavaApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.awscdk.AwsCdkJavaApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkJavaApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.awscdk.AwsCdkJavaApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.awscdk.AwsCdkJavaApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkJavaApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.awscdk.AwsCdkJavaApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.awscdk.AwsCdkJavaApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.awscdk.AwsCdkJavaApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.awscdk.AwsCdkJavaApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.awscdk.AwsCdkJavaApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkJavaApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.awscdk.AwsCdkJavaApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.awscdk.AwsCdkJavaApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.awscdk.AwsCdkJavaApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.awscdk.AwsCdkJavaApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.awscdk.AwsCdkJavaApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkJavaApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.awscdk.AwsCdkJavaApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.awscdk.AwsCdkJavaApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.awscdk.AwsCdkJavaApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.awscdk.AwsCdkJavaApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.awscdk.AwsCdkJavaApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.awscdk.AwsCdkJavaApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkJavaApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.awscdk.AwsCdkJavaApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.awscdk.AwsCdkJavaApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkJavaApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkJavaApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkJavaApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkJavaApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `compile`<sup>Required</sup> <a name="compile" id="projen.awscdk.AwsCdkJavaApp.property.compile"></a>

```typescript
public readonly compile: MavenCompile;
```

- *Type:* projen.java.MavenCompile

Compile component.

---

##### `distdir`<sup>Required</sup> <a name="distdir" id="projen.awscdk.AwsCdkJavaApp.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string

Maven artifact output directory.

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="projen.awscdk.AwsCdkJavaApp.property.packaging"></a>

```typescript
public readonly packaging: MavenPackaging;
```

- *Type:* projen.java.MavenPackaging

Packaging component.

---

##### `pom`<sup>Required</sup> <a name="pom" id="projen.awscdk.AwsCdkJavaApp.property.pom"></a>

```typescript
public readonly pom: Pom;
```

- *Type:* projen.java.Pom

API for managing `pom.xml`.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="projen.awscdk.AwsCdkJavaApp.property.junit"></a>

```typescript
public readonly junit: Junit;
```

- *Type:* projen.java.Junit

JUnit component.

---

##### `projenrc`<sup>Optional</sup> <a name="projenrc" id="projen.awscdk.AwsCdkJavaApp.property.projenrc"></a>

```typescript
public readonly projenrc: Projenrc;
```

- *Type:* projen.java.Projenrc

Projenrc component.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="projen.awscdk.AwsCdkJavaApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* <a href="#projen.awscdk.CdkConfig">CdkConfig</a>

The `cdk.json` file.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AwsCdkJavaApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

CDK dependency management helper class.

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="projen.awscdk.AwsCdkJavaApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* <a href="#projen.awscdk.CdkTasks">CdkTasks</a>

CDK tasks.

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="projen.awscdk.AwsCdkJavaApp.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

The full name of the main class of the java app (package.Class).

---

##### `mainClassName`<sup>Required</sup> <a name="mainClassName" id="projen.awscdk.AwsCdkJavaApp.property.mainClassName"></a>

```typescript
public readonly mainClassName: string;
```

- *Type:* string

The name of the Java class with the static `main()` method.

---

##### `mainPackage`<sup>Required</sup> <a name="mainPackage" id="projen.awscdk.AwsCdkJavaApp.property.mainPackage"></a>

```typescript
public readonly mainPackage: string;
```

- *Type:* string

The name of the Java package that includes the main class.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.awscdk.AwsCdkJavaApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### AwsCdkPythonApp <a name="AwsCdkPythonApp" id="projen.awscdk.AwsCdkPythonApp"></a>

AWS CDK app in Python.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkPythonApp.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkPythonApp(options: AwsCdkPythonAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkPythonAppOptions">AwsCdkPythonAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkPythonApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkPythonAppOptions">AwsCdkPythonAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkPythonApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.awscdk.AwsCdkPythonApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.awscdk.AwsCdkPythonApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.awscdk.AwsCdkPythonApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkPythonApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.awscdk.AwsCdkPythonApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen.awscdk.AwsCdkPythonApp.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen.awscdk.AwsCdkPythonApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkPythonApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.awscdk.AwsCdkPythonApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.awscdk.AwsCdkPythonApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.awscdk.AwsCdkPythonApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.awscdk.AwsCdkPythonApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.awscdk.AwsCdkPythonApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkPythonApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkPythonApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.awscdk.AwsCdkPythonApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkPythonApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.awscdk.AwsCdkPythonApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen.awscdk.AwsCdkPythonApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.awscdk.AwsCdkPythonApp.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.awscdk.AwsCdkPythonApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkPythonApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.awscdk.AwsCdkPythonApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkPythonApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.awscdk.AwsCdkPythonApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkPythonApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.awscdk.AwsCdkPythonApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkPythonApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen.awscdk.AwsCdkPythonApp.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.awscdk.AwsCdkPythonApp.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="projen.awscdk.AwsCdkPythonApp.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.awscdk.AwsCdkPythonApp.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkPythonApp.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkPythonApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkPythonApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.awscdk.AwsCdkPythonApp.isProject"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkPythonApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkPythonApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.awscdk.AwsCdkPythonApp.of"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkPythonApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.awscdk.AwsCdkPythonApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.cdkConfig">cdkConfig</a></code> | <code><a href="#projen.awscdk.CdkConfig">CdkConfig</a></code> | cdk.json configuration. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.cdkTasks">cdkTasks</a></code> | <code><a href="#projen.awscdk.CdkTasks">CdkTasks</a></code> | Common CDK tasks. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which the python tests reside. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkPythonApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.awscdk.AwsCdkPythonApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkPythonApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.awscdk.AwsCdkPythonApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.awscdk.AwsCdkPythonApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkPythonApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.awscdk.AwsCdkPythonApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.awscdk.AwsCdkPythonApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.awscdk.AwsCdkPythonApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.awscdk.AwsCdkPythonApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.awscdk.AwsCdkPythonApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkPythonApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.awscdk.AwsCdkPythonApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.awscdk.AwsCdkPythonApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.awscdk.AwsCdkPythonApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.awscdk.AwsCdkPythonApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.awscdk.AwsCdkPythonApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkPythonApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.awscdk.AwsCdkPythonApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.awscdk.AwsCdkPythonApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.awscdk.AwsCdkPythonApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.awscdk.AwsCdkPythonApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.awscdk.AwsCdkPythonApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.awscdk.AwsCdkPythonApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkPythonApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.awscdk.AwsCdkPythonApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.awscdk.AwsCdkPythonApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkPythonApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkPythonApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkPythonApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkPythonApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="projen.awscdk.AwsCdkPythonApp.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="projen.awscdk.AwsCdkPythonApp.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen.awscdk.AwsCdkPythonApp.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="projen.awscdk.AwsCdkPythonApp.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="projen.awscdk.AwsCdkPythonApp.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen.awscdk.AwsCdkPythonApp.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="projen.awscdk.AwsCdkPythonApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="projen.awscdk.AwsCdkPythonApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* <a href="#projen.awscdk.CdkConfig">CdkConfig</a>

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AwsCdkPythonApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="projen.awscdk.AwsCdkPythonApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* <a href="#projen.awscdk.CdkTasks">CdkTasks</a>

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkPythonApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.awscdk.AwsCdkPythonApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which the python tests reside.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.awscdk.AwsCdkPythonApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### AwsCdkTypeScriptApp <a name="AwsCdkTypeScriptApp" id="projen.awscdk.AwsCdkTypeScriptApp"></a>

AWS CDK app in TypeScript.

#### Initializers <a name="Initializers" id="projen.awscdk.AwsCdkTypeScriptApp.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.AwsCdkTypeScriptApp(options: AwsCdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions">AwsCdkTypeScriptAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.AwsCdkTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkTypeScriptAppOptions">AwsCdkTypeScriptAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="projen.awscdk.AwsCdkTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.awscdk.AwsCdkTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.awscdk.AwsCdkTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.awscdk.AwsCdkTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.awscdk.AwsCdkTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.AwsCdkTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.awscdk.AwsCdkTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.awscdk.AwsCdkTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.awscdk.AwsCdkTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.awscdk.AwsCdkTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.awscdk.AwsCdkTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.awscdk.AwsCdkTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.AwsCdkTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.AwsCdkTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.awscdk.AwsCdkTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.awscdk.AwsCdkTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.awscdk.AwsCdkTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.awscdk.AwsCdkTypeScriptApp.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.awscdk.AwsCdkTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.AwsCdkTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.awscdk.AwsCdkTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.awscdk.AwsCdkTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.awscdk.AwsCdkTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.awscdk.AwsCdkTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.AwsCdkTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.awscdk.AwsCdkTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.awscdk.AwsCdkTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.awscdk.AwsCdkTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.awscdk.AwsCdkTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.awscdk.AwsCdkTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.awscdk.AwsCdkTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.awscdk.AwsCdkTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.awscdk.AwsCdkTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.awscdk.AwsCdkTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.awscdk.AwsCdkTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.AwsCdkTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.awscdk.AwsCdkTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.awscdk.AwsCdkTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.awscdk.AwsCdkTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.awscdk.AwsCdkTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.awscdk.AwsCdkTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.awscdk.AwsCdkTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="projen.awscdk.AwsCdkTypeScriptApp.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="projen.awscdk.AwsCdkTypeScriptApp.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.AwsCdkTypeScriptApp.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkTypeScriptApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.awscdk.AwsCdkTypeScriptApp.isProject"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.AwsCdkTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.awscdk.AwsCdkTypeScriptApp.of"></a>

```typescript
import { awscdk } from 'projen'

awscdk.AwsCdkTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.awscdk.AwsCdkTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.cdkConfig">cdkConfig</a></code> | <code><a href="#projen.awscdk.CdkConfig">CdkConfig</a></code> | cdk.json configuration. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.cdkTasks">cdkTasks</a></code> | <code><a href="#projen.awscdk.CdkTasks">CdkTasks</a></code> | Common CDK tasks. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.AwsCdkTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.awscdk.AwsCdkTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.awscdk.AwsCdkTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.awscdk.AwsCdkTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.awscdk.AwsCdkTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.awscdk.AwsCdkTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.awscdk.AwsCdkTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.awscdk.AwsCdkTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.awscdk.AwsCdkTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.awscdk.AwsCdkTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.awscdk.AwsCdkTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.awscdk.AwsCdkTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.awscdk.AwsCdkTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.awscdk.AwsCdkTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.awscdk.AwsCdkTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.awscdk.AwsCdkTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.awscdk.AwsCdkTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.awscdk.AwsCdkTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.awscdk.AwsCdkTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.AwsCdkTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.awscdk.AwsCdkTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.awscdk.AwsCdkTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.awscdk.AwsCdkTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.awscdk.AwsCdkTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.awscdk.AwsCdkTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.AwsCdkTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.awscdk.AwsCdkTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.awscdk.AwsCdkTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.AwsCdkTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.AwsCdkTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.AwsCdkTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.awscdk.AwsCdkTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.awscdk.AwsCdkTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.awscdk.AwsCdkTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.awscdk.AwsCdkTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.awscdk.AwsCdkTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.awscdk.AwsCdkTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.AwsCdkTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.awscdk.AwsCdkTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.awscdk.AwsCdkTypeScriptApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

Same as `tsconfig` if {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfigDev`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileName`options.tsconfigDev.fileName`} or `tsconfig.dev.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigDevoptions.tsconfigDev} including:
- `include` - added after the includes from {@link tsconfig} (if not disabled), and {@link TypeScriptProjectOptions.testdiroptions.testdir}
- `exclude` - added after `"node_modules"`
- `extends` - if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfigoptions.tsconfigDevExtendsTsconfig} is
  set to `true`, the file *also* extends {@link tsconfig} (if not disabled).

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfigDev.compilerOptions}:
- `rootDir` and `outDir` are left undefined, so the whole project is covered.
- if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfig`options.tsconfigDevExtendsTsconfig`} is set to `false`,
  the `compilerOptions` are set to `tsconfig.compilerOptions`
- {@link TypeScriptProjectOptions.tsconfigDevPresets`options.tsconfigDevPresets`} (if defined) is applied
- in the case of `options.disableTsconfig` being set to `true` and `options.tsconfigDevPresets` being undefined then
  `TypescriptConfigPresetsOptions.PROJEN_CLASSIC` is applied
- the provided `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfigDev.compilerOptionsMergeMethod`}.

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.awscdk.AwsCdkTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.awscdk.AwsCdkTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.awscdk.AwsCdkTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.AwsCdkTypeScriptApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers source files only.

Exists unless {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfig`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileNameoptions.tsconfig.fileName} or `tsconfig.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigoptions.tsconfig} including:
- `include` - added after {@link TypeScriptProjectOptions.srcdiroptions.srcdir}
- `exclude`
- `extends`

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfig.compilerOptions}:
- `rootDir` and `outDir` are set to {@link TypeScriptProjectOptions.srcdir`options.srcdir`} and
  {@link TypeScriptProjectOptions.libdir`options.libdir`} respectively.
- {@link TypeScriptProjectOptions.tsconfigPresets`options.tsconfigPresets`} (defaulting to
  {@link TypescriptConfigPresetsOptions.PROJEN_CLASSIC`PROJEN_CLASSIC`}) is applied, then the provided
  `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfig.compilerOptionsMergeMethod`}.

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.awscdk.AwsCdkTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="projen.awscdk.AwsCdkTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="projen.awscdk.AwsCdkTypeScriptApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* <a href="#projen.awscdk.CdkConfig">CdkConfig</a>

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AwsCdkTypeScriptApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="projen.awscdk.AwsCdkTypeScriptApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* <a href="#projen.awscdk.CdkTasks">CdkTasks</a>

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkTypeScriptApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.awscdk.AwsCdkTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.awscdk.AwsCdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### CdkConfig <a name="CdkConfig" id="projen.awscdk.CdkConfig"></a>

Represents cdk.json file.

#### Initializers <a name="Initializers" id="projen.awscdk.CdkConfig.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.CdkConfig(project: Project, options: CdkConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.CdkConfig.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.CdkConfigOptions">CdkConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.CdkConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.CdkConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.CdkConfigOptions">CdkConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.CdkConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.CdkConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.CdkConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.CdkConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.awscdk.CdkConfig.addExcludes">addExcludes</a></code> | Add excludes to `cdk.json`. |
| <code><a href="#projen.awscdk.CdkConfig.addIncludes">addIncludes</a></code> | Add includes to `cdk.json`. |

---

##### `toString` <a name="toString" id="projen.awscdk.CdkConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.CdkConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.CdkConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.CdkConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExcludes` <a name="addExcludes" id="projen.awscdk.CdkConfig.addExcludes"></a>

```typescript
public addExcludes(patterns: string): void
```

Add excludes to `cdk.json`.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.awscdk.CdkConfig.addExcludes.parameter.patterns"></a>

- *Type:* string

The excludes to add.

---

##### `addIncludes` <a name="addIncludes" id="projen.awscdk.CdkConfig.addIncludes"></a>

```typescript
public addIncludes(patterns: string): void
```

Add includes to `cdk.json`.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.awscdk.CdkConfig.addIncludes.parameter.patterns"></a>

- *Type:* string

The includes to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.CdkConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.CdkConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.CdkConfig.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.CdkConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.CdkConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.CdkConfig.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.CdkConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.CdkConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.CdkConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.CdkConfig.property.cdkout">cdkout</a></code> | <code>string</code> | Name of the cdk.out directory. |
| <code><a href="#projen.awscdk.CdkConfig.property.exclude">exclude</a></code> | <code>string[]</code> | List of glob patterns to be excluded by CDK. |
| <code><a href="#projen.awscdk.CdkConfig.property.include">include</a></code> | <code>string[]</code> | List of glob patterns to be included by CDK. |
| <code><a href="#projen.awscdk.CdkConfig.property.json">json</a></code> | <code>projen.JsonFile</code> | Represents the JSON file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.CdkConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.CdkConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `cdkout`<sup>Required</sup> <a name="cdkout" id="projen.awscdk.CdkConfig.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string

Name of the cdk.out directory.

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="projen.awscdk.CdkConfig.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of glob patterns to be excluded by CDK.

---

##### `include`<sup>Required</sup> <a name="include" id="projen.awscdk.CdkConfig.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of glob patterns to be included by CDK.

---

##### `json`<sup>Required</sup> <a name="json" id="projen.awscdk.CdkConfig.property.json"></a>

```typescript
public readonly json: JsonFile;
```

- *Type:* projen.JsonFile

Represents the JSON file.

---


### CdkTasks <a name="CdkTasks" id="projen.awscdk.CdkTasks"></a>

Adds standard AWS CDK tasks to your project.

#### Initializers <a name="Initializers" id="projen.awscdk.CdkTasks.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.CdkTasks(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkTasks.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.CdkTasks.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.CdkTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.CdkTasks.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.CdkTasks.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.CdkTasks.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.CdkTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.CdkTasks.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.CdkTasks.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.CdkTasks.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.CdkTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.CdkTasks.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.CdkTasks.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.CdkTasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.CdkTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.CdkTasks.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.CdkTasks.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.CdkTasks.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.CdkTasks.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.CdkTasks.property.deploy">deploy</a></code> | <code>projen.Task</code> | Deploys your app. |
| <code><a href="#projen.awscdk.CdkTasks.property.destroy">destroy</a></code> | <code>projen.Task</code> | Destroys all the stacks. |
| <code><a href="#projen.awscdk.CdkTasks.property.diff">diff</a></code> | <code>projen.Task</code> | Diff against production. |
| <code><a href="#projen.awscdk.CdkTasks.property.synth">synth</a></code> | <code>projen.Task</code> | Synthesizes your app. |
| <code><a href="#projen.awscdk.CdkTasks.property.synthSilent">synthSilent</a></code> | <code>projen.Task</code> | Synthesizes your app and suppresses stdout. |
| <code><a href="#projen.awscdk.CdkTasks.property.watch">watch</a></code> | <code>projen.Task</code> | Watch task. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.CdkTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.CdkTasks.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `deploy`<sup>Required</sup> <a name="deploy" id="projen.awscdk.CdkTasks.property.deploy"></a>

```typescript
public readonly deploy: Task;
```

- *Type:* projen.Task

Deploys your app.

---

##### `destroy`<sup>Required</sup> <a name="destroy" id="projen.awscdk.CdkTasks.property.destroy"></a>

```typescript
public readonly destroy: Task;
```

- *Type:* projen.Task

Destroys all the stacks.

---

##### `diff`<sup>Required</sup> <a name="diff" id="projen.awscdk.CdkTasks.property.diff"></a>

```typescript
public readonly diff: Task;
```

- *Type:* projen.Task

Diff against production.

---

##### `synth`<sup>Required</sup> <a name="synth" id="projen.awscdk.CdkTasks.property.synth"></a>

```typescript
public readonly synth: Task;
```

- *Type:* projen.Task

Synthesizes your app.

---

##### `synthSilent`<sup>Required</sup> <a name="synthSilent" id="projen.awscdk.CdkTasks.property.synthSilent"></a>

```typescript
public readonly synthSilent: Task;
```

- *Type:* projen.Task

Synthesizes your app and suppresses stdout.

---

##### `watch`<sup>Required</sup> <a name="watch" id="projen.awscdk.CdkTasks.property.watch"></a>

```typescript
public readonly watch: Task;
```

- *Type:* projen.Task

Watch task.

---


### ConstructLibraryAws <a name="ConstructLibraryAws" id="projen.awscdk.ConstructLibraryAws"></a>

#### Initializers <a name="Initializers" id="projen.awscdk.ConstructLibraryAws.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.ConstructLibraryAws(options: AwsCdkConstructLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAws.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions">AwsCdkConstructLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.ConstructLibraryAws.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.AwsCdkConstructLibraryOptions">AwsCdkConstructLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### ~~`toString`~~ <a name="toString" id="projen.awscdk.ConstructLibraryAws.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`addExcludeFromCleanup`~~ <a name="addExcludeFromCleanup" id="projen.awscdk.ConstructLibraryAws.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.awscdk.ConstructLibraryAws.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### ~~`addGitIgnore`~~ <a name="addGitIgnore" id="projen.awscdk.ConstructLibraryAws.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.ConstructLibraryAws.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### ~~`addPackageIgnore`~~ <a name="addPackageIgnore" id="projen.awscdk.ConstructLibraryAws.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.awscdk.ConstructLibraryAws.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### ~~`addTask`~~ <a name="addTask" id="projen.awscdk.ConstructLibraryAws.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.awscdk.ConstructLibraryAws.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.awscdk.ConstructLibraryAws.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.awscdk.ConstructLibraryAws.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### ~~`annotateGenerated`~~ <a name="annotateGenerated" id="projen.awscdk.ConstructLibraryAws.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.awscdk.ConstructLibraryAws.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### ~~`postSynthesize`~~ <a name="postSynthesize" id="projen.awscdk.ConstructLibraryAws.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### ~~`preSynthesize`~~ <a name="preSynthesize" id="projen.awscdk.ConstructLibraryAws.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### ~~`removeTask`~~ <a name="removeTask" id="projen.awscdk.ConstructLibraryAws.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### ~~`runTaskCommand`~~ <a name="runTaskCommand" id="projen.awscdk.ConstructLibraryAws.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.awscdk.ConstructLibraryAws.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### ~~`synth`~~ <a name="synth" id="projen.awscdk.ConstructLibraryAws.synth"></a>

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

##### ~~`tryFindFile`~~ <a name="tryFindFile" id="projen.awscdk.ConstructLibraryAws.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.ConstructLibraryAws.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.awscdk.ConstructLibraryAws.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.ConstructLibraryAws.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryFindObjectFile`~~ <a name="tryFindObjectFile" id="projen.awscdk.ConstructLibraryAws.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.ConstructLibraryAws.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryRemoveFile`~~ <a name="tryRemoveFile" id="projen.awscdk.ConstructLibraryAws.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.awscdk.ConstructLibraryAws.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### ~~`addBins`~~ <a name="addBins" id="projen.awscdk.ConstructLibraryAws.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.awscdk.ConstructLibraryAws.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### ~~`addBundledDeps`~~ <a name="addBundledDeps" id="projen.awscdk.ConstructLibraryAws.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.awscdk.ConstructLibraryAws.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.ConstructLibraryAws.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`addDeps`~~ <a name="addDeps" id="projen.awscdk.ConstructLibraryAws.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addDevDeps`~~ <a name="addDevDeps" id="projen.awscdk.ConstructLibraryAws.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addFields`~~ <a name="addFields" id="projen.awscdk.ConstructLibraryAws.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.awscdk.ConstructLibraryAws.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### ~~`addKeywords`~~ <a name="addKeywords" id="projen.awscdk.ConstructLibraryAws.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.awscdk.ConstructLibraryAws.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### ~~`addPeerDeps`~~ <a name="addPeerDeps" id="projen.awscdk.ConstructLibraryAws.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addScripts`~~ <a name="addScripts" id="projen.awscdk.ConstructLibraryAws.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.awscdk.ConstructLibraryAws.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.awscdk.ConstructLibraryAws.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.awscdk.ConstructLibraryAws.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.awscdk.ConstructLibraryAws.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### ~~`removeScript`~~ <a name="removeScript" id="projen.awscdk.ConstructLibraryAws.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### ~~`renderWorkflowSetup`~~ <a name="renderWorkflowSetup" id="projen.awscdk.ConstructLibraryAws.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.awscdk.ConstructLibraryAws.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### ~~`setScript`~~ <a name="setScript" id="projen.awscdk.ConstructLibraryAws.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.awscdk.ConstructLibraryAws.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="projen.awscdk.ConstructLibraryAws.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: string): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addCdkDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="projen.awscdk.ConstructLibraryAws.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: string): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.addCdkTestDependencies.parameter.deps"></a>

- *Type:* string

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen.awscdk.ConstructLibraryAws.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.ConstructLibraryAws.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.ConstructLibraryAws.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### ~~`isProject`~~ <a name="isProject" id="projen.awscdk.ConstructLibraryAws.isProject"></a>

```typescript
import { awscdk } from 'projen'

awscdk.ConstructLibraryAws.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.ConstructLibraryAws.isProject.parameter.x"></a>

- *Type:* any

---

##### ~~`of`~~ <a name="of" id="projen.awscdk.ConstructLibraryAws.of"></a>

```typescript
import { awscdk } from 'projen'

awscdk.ConstructLibraryAws.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.awscdk.ConstructLibraryAws.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="projen.awscdk.ConstructLibraryAws.property.node"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`buildTask`~~<sup>Required</sup> <a name="buildTask" id="projen.awscdk.ConstructLibraryAws.property.buildTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### ~~`commitGenerated`~~<sup>Required</sup> <a name="commitGenerated" id="projen.awscdk.ConstructLibraryAws.property.commitGenerated"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### ~~`compileTask`~~<sup>Required</sup> <a name="compileTask" id="projen.awscdk.ConstructLibraryAws.property.compileTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`components`~~<sup>Required</sup> <a name="components" id="projen.awscdk.ConstructLibraryAws.property.components"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### ~~`deps`~~<sup>Required</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAws.property.deps"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### ~~`ejected`~~<sup>Required</sup> <a name="ejected" id="projen.awscdk.ConstructLibraryAws.property.ejected"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### ~~`files`~~<sup>Required</sup> <a name="files" id="projen.awscdk.ConstructLibraryAws.property.files"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### ~~`gitattributes`~~<sup>Required</sup> <a name="gitattributes" id="projen.awscdk.ConstructLibraryAws.property.gitattributes"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### ~~`gitignore`~~<sup>Required</sup> <a name="gitignore" id="projen.awscdk.ConstructLibraryAws.property.gitignore"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### ~~`logger`~~<sup>Required</sup> <a name="logger" id="projen.awscdk.ConstructLibraryAws.property.logger"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAws.property.name"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### ~~`outdir`~~<sup>Required</sup> <a name="outdir" id="projen.awscdk.ConstructLibraryAws.property.outdir"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### ~~`packageTask`~~<sup>Required</sup> <a name="packageTask" id="projen.awscdk.ConstructLibraryAws.property.packageTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### ~~`postCompileTask`~~<sup>Required</sup> <a name="postCompileTask" id="projen.awscdk.ConstructLibraryAws.property.postCompileTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`preCompileTask`~~<sup>Required</sup> <a name="preCompileTask" id="projen.awscdk.ConstructLibraryAws.property.preCompileTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`projectBuild`~~<sup>Required</sup> <a name="projectBuild" id="projen.awscdk.ConstructLibraryAws.property.projectBuild"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### ~~`projenCommand`~~<sup>Required</sup> <a name="projenCommand" id="projen.awscdk.ConstructLibraryAws.property.projenCommand"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### ~~`root`~~<sup>Required</sup> <a name="root" id="projen.awscdk.ConstructLibraryAws.property.root"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### ~~`subprojects`~~<sup>Required</sup> <a name="subprojects" id="projen.awscdk.ConstructLibraryAws.property.subprojects"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### ~~`tasks`~~<sup>Required</sup> <a name="tasks" id="projen.awscdk.ConstructLibraryAws.property.tasks"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### ~~`testTask`~~<sup>Required</sup> <a name="testTask" id="projen.awscdk.ConstructLibraryAws.property.testTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### ~~`defaultTask`~~<sup>Optional</sup> <a name="defaultTask" id="projen.awscdk.ConstructLibraryAws.property.defaultTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="projen.awscdk.ConstructLibraryAws.property.initProject"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### ~~`parent`~~<sup>Optional</sup> <a name="parent" id="projen.awscdk.ConstructLibraryAws.property.parent"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### ~~`projectType`~~<sup>Required</sup> <a name="projectType" id="projen.awscdk.ConstructLibraryAws.property.projectType"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### ~~`autoApprove`~~<sup>Optional</sup> <a name="autoApprove" id="projen.awscdk.ConstructLibraryAws.property.autoApprove"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### ~~`devContainer`~~<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.ConstructLibraryAws.property.devContainer"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### ~~`github`~~<sup>Optional</sup> <a name="github" id="projen.awscdk.ConstructLibraryAws.property.github"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### ~~`gitpod`~~<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.ConstructLibraryAws.property.gitpod"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### ~~`vscode`~~<sup>Optional</sup> <a name="vscode" id="projen.awscdk.ConstructLibraryAws.property.vscode"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.awscdk.ConstructLibraryAws.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### ~~`artifactsDirectory`~~<sup>Required</sup> <a name="artifactsDirectory" id="projen.awscdk.ConstructLibraryAws.property.artifactsDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### ~~`artifactsJavascriptDirectory`~~<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.awscdk.ConstructLibraryAws.property.artifactsJavascriptDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### ~~`bundler`~~<sup>Required</sup> <a name="bundler" id="projen.awscdk.ConstructLibraryAws.property.bundler"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.ConstructLibraryAws.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.awscdk.ConstructLibraryAws.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### ~~`npmrc`~~<sup>Required</sup> <a name="npmrc" id="projen.awscdk.ConstructLibraryAws.property.npmrc"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### ~~`package`~~<sup>Required</sup> <a name="package" id="projen.awscdk.ConstructLibraryAws.property.package"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.awscdk.ConstructLibraryAws.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### ~~`runScriptCommand`~~<sup>Required</sup> <a name="runScriptCommand" id="projen.awscdk.ConstructLibraryAws.property.runScriptCommand"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### ~~`autoMerge`~~<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.ConstructLibraryAws.property.autoMerge"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### ~~`buildWorkflow`~~<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.ConstructLibraryAws.property.buildWorkflow"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### ~~`buildWorkflowJobId`~~<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.awscdk.ConstructLibraryAws.property.buildWorkflowJobId"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### ~~`jest`~~<sup>Optional</sup> <a name="jest" id="projen.awscdk.ConstructLibraryAws.property.jest"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### ~~`maxNodeVersion`~~<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.ConstructLibraryAws.property.maxNodeVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### ~~`minNodeVersion`~~<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.ConstructLibraryAws.property.minNodeVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.ConstructLibraryAws.property.npmignore"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### ~~`prettier`~~<sup>Optional</sup> <a name="prettier" id="projen.awscdk.ConstructLibraryAws.property.prettier"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.awscdk.ConstructLibraryAws.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### ~~`release`~~<sup>Optional</sup> <a name="release" id="projen.awscdk.ConstructLibraryAws.property.release"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### ~~`upgradeWorkflow`~~<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.awscdk.ConstructLibraryAws.property.upgradeWorkflow"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### ~~`docsDirectory`~~<sup>Required</sup> <a name="docsDirectory" id="projen.awscdk.ConstructLibraryAws.property.docsDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### ~~`libdir`~~<sup>Required</sup> <a name="libdir" id="projen.awscdk.ConstructLibraryAws.property.libdir"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### ~~`srcdir`~~<sup>Required</sup> <a name="srcdir" id="projen.awscdk.ConstructLibraryAws.property.srcdir"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### ~~`testdir`~~<sup>Required</sup> <a name="testdir" id="projen.awscdk.ConstructLibraryAws.property.testdir"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### ~~`tsconfigDev`~~<sup>Required</sup> <a name="tsconfigDev" id="projen.awscdk.ConstructLibraryAws.property.tsconfigDev"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

Same as `tsconfig` if {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfigDev`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileName`options.tsconfigDev.fileName`} or `tsconfig.dev.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigDevoptions.tsconfigDev} including:
- `include` - added after the includes from {@link tsconfig} (if not disabled), and {@link TypeScriptProjectOptions.testdiroptions.testdir}
- `exclude` - added after `"node_modules"`
- `extends` - if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfigoptions.tsconfigDevExtendsTsconfig} is
  set to `true`, the file *also* extends {@link tsconfig} (if not disabled).

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfigDev.compilerOptions}:
- `rootDir` and `outDir` are left undefined, so the whole project is covered.
- if {@link TypeScriptProjectOptions.tsconfigDevExtendsTsconfig`options.tsconfigDevExtendsTsconfig`} is set to `false`,
  the `compilerOptions` are set to `tsconfig.compilerOptions`
- {@link TypeScriptProjectOptions.tsconfigDevPresets`options.tsconfigDevPresets`} (if defined) is applied
- in the case of `options.disableTsconfig` being set to `true` and `options.tsconfigDevPresets` being undefined then
  `TypescriptConfigPresetsOptions.PROJEN_CLASSIC` is applied
- the provided `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfigDev.compilerOptionsMergeMethod`}.

---

##### ~~`watchTask`~~<sup>Required</sup> <a name="watchTask" id="projen.awscdk.ConstructLibraryAws.property.watchTask"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### ~~`docgen`~~<sup>Optional</sup> <a name="docgen" id="projen.awscdk.ConstructLibraryAws.property.docgen"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### ~~`eslint`~~<sup>Optional</sup> <a name="eslint" id="projen.awscdk.ConstructLibraryAws.property.eslint"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### ~~`tsconfig`~~<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.ConstructLibraryAws.property.tsconfig"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers source files only.

Exists unless {@link TypeScriptProjectOptions.disableTsconfig`options.disableTsconfig`} is set to `true`.

The file will be named {@link TypescriptProjectConfigOptions.fileNameoptions.tsconfig.fileName} or `tsconfig.json`.
The file name can be retrieved from {@link TypescriptConfig.fileName`tsconfig.fileName`}.

Configured with all options from {@link TypeScriptProjectOptions.tsconfigoptions.tsconfig} including:
- `include` - added after {@link TypeScriptProjectOptions.srcdiroptions.srcdir}
- `exclude`
- `extends`

Special attention is given to {@link TypescriptProjectConfigOptions.compilerOptionsoptions.tsconfig.compilerOptions}:
- `rootDir` and `outDir` are set to {@link TypeScriptProjectOptions.srcdir`options.srcdir`} and
  {@link TypeScriptProjectOptions.libdir`options.libdir`} respectively.
- {@link TypeScriptProjectOptions.tsconfigPresets`options.tsconfigPresets`} (defaulting to
  {@link TypescriptConfigPresetsOptions.PROJEN_CLASSIC`PROJEN_CLASSIC`}) is applied, then the provided
  `options.tsconfig.compilerOptions` are merged in using
  {@link TypescriptProjectConfigOptions.compilerOptionsMergeMethod`options.tsconfig.compilerOptionsMergeMethod`}.

---

##### ~~`tsconfigEslint`~~<sup>Optional</sup> <a name="tsconfigEslint" id="projen.awscdk.ConstructLibraryAws.property.tsconfigEslint"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### ~~`cdkDeps`~~<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.ConstructLibraryAws.property.cdkDeps"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

---

##### ~~`cdkVersion`~~<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.ConstructLibraryAws.property.cdkVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="projen.awscdk.ConstructLibraryAws.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.awscdk.ConstructLibraryAws.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### ~~`DEFAULT_TASK`~~<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.awscdk.ConstructLibraryAws.property.DEFAULT_TASK"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### ~~`DEFAULT_TS_JEST_TRANFORM_PATTERN`~~<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.awscdk.ConstructLibraryAws.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

- *Deprecated:* use `AwsCdkConstructLibrary`

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### EdgeLambdaAutoDiscover <a name="EdgeLambdaAutoDiscover" id="projen.awscdk.EdgeLambdaAutoDiscover"></a>

Creates edge lambdas from entry points discovered in the project's source tree.

#### Initializers <a name="Initializers" id="projen.awscdk.EdgeLambdaAutoDiscover.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.EdgeLambdaAutoDiscover(project: Project, options: EdgeLambdaAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions">EdgeLambdaAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.EdgeLambdaAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.EdgeLambdaAutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions">EdgeLambdaAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.EdgeLambdaAutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.EdgeLambdaAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.EdgeLambdaAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.EdgeLambdaAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.EdgeLambdaAutoDiscover.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.EdgeLambdaAutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.EdgeLambdaAutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.EdgeLambdaAutoDiscover.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.EdgeLambdaAutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.EdgeLambdaAutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.EdgeLambdaAutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.EdgeLambdaAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="projen.awscdk.EdgeLambdaAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---


### IntegrationTest <a name="IntegrationTest" id="projen.awscdk.IntegrationTest"></a>

Cloud integration tests.

#### Initializers <a name="Initializers" id="projen.awscdk.IntegrationTest.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.IntegrationTest(project: Project, options: IntegrationTestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTest.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.IntegrationTest.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.IntegrationTestOptions">IntegrationTestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.IntegrationTest.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.IntegrationTest.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.IntegrationTestOptions">IntegrationTestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.IntegrationTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.IntegrationTest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.IntegrationTest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.IntegrationTest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.IntegrationTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.IntegrationTest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.IntegrationTest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.IntegrationTest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.IntegrationTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.IntegrationTest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.IntegrationTest.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.IntegrationTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.IntegrationTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.IntegrationTest.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.IntegrationTest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.IntegrationTest.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.IntegrationTest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.IntegrationTest.property.assertTask">assertTask</a></code> | <code>projen.Task</code> | Synthesizes the integration test and compares against a local copy (runs during build). |
| <code><a href="#projen.awscdk.IntegrationTest.property.deployTask">deployTask</a></code> | <code>projen.Task</code> | Deploy the integration test and update the snapshot upon success. |
| <code><a href="#projen.awscdk.IntegrationTest.property.snapshotTask">snapshotTask</a></code> | <code>projen.Task</code> | Just update snapshot (without deployment). |
| <code><a href="#projen.awscdk.IntegrationTest.property.destroyTask">destroyTask</a></code> | <code>projen.Task</code> | Destroy the integration test resources. |
| <code><a href="#projen.awscdk.IntegrationTest.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The watch task. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.IntegrationTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.IntegrationTest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `assertTask`<sup>Required</sup> <a name="assertTask" id="projen.awscdk.IntegrationTest.property.assertTask"></a>

```typescript
public readonly assertTask: Task;
```

- *Type:* projen.Task

Synthesizes the integration test and compares against a local copy (runs during build).

---

##### `deployTask`<sup>Required</sup> <a name="deployTask" id="projen.awscdk.IntegrationTest.property.deployTask"></a>

```typescript
public readonly deployTask: Task;
```

- *Type:* projen.Task

Deploy the integration test and update the snapshot upon success.

---

##### `snapshotTask`<sup>Required</sup> <a name="snapshotTask" id="projen.awscdk.IntegrationTest.property.snapshotTask"></a>

```typescript
public readonly snapshotTask: Task;
```

- *Type:* projen.Task

Just update snapshot (without deployment).

---

##### `destroyTask`<sup>Required</sup> <a name="destroyTask" id="projen.awscdk.IntegrationTest.property.destroyTask"></a>

```typescript
public readonly destroyTask: Task;
```

- *Type:* projen.Task

Destroy the integration test resources.

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.awscdk.IntegrationTest.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The watch task.

---


### IntegrationTestAutoDiscover <a name="IntegrationTestAutoDiscover" id="projen.awscdk.IntegrationTestAutoDiscover"></a>

Creates integration tests from entry points discovered in the test tree.

#### Initializers <a name="Initializers" id="projen.awscdk.IntegrationTestAutoDiscover.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.IntegrationTestAutoDiscover(project: Project, options: IntegrationTestAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions">IntegrationTestAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.IntegrationTestAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.IntegrationTestAutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions">IntegrationTestAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.IntegrationTestAutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.IntegrationTestAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.IntegrationTestAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.IntegrationTestAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.IntegrationTestAutoDiscover.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.IntegrationTestAutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.IntegrationTestAutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.IntegrationTestAutoDiscover.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.IntegrationTestAutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.IntegrationTestAutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.IntegrationTestAutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.IntegrationTestAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="projen.awscdk.IntegrationTestAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---


### LambdaAutoDiscover <a name="LambdaAutoDiscover" id="projen.awscdk.LambdaAutoDiscover"></a>

Creates lambdas from entry points discovered in the project's source tree.

#### Initializers <a name="Initializers" id="projen.awscdk.LambdaAutoDiscover.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.LambdaAutoDiscover(project: Project, options: LambdaAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.LambdaAutoDiscoverOptions">LambdaAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.LambdaAutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.LambdaAutoDiscoverOptions">LambdaAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.LambdaAutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.LambdaAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.LambdaAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.LambdaAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.LambdaAutoDiscover.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaAutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaAutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.LambdaAutoDiscover.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaAutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaAutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.LambdaAutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="projen.awscdk.LambdaAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---


### LambdaExtension <a name="LambdaExtension" id="projen.awscdk.LambdaExtension"></a>

Create a Lambda Extension.

#### Initializers <a name="Initializers" id="projen.awscdk.LambdaExtension.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.LambdaExtension(project: Project, options: LambdaExtensionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtension.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaExtension.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.LambdaExtensionOptions">LambdaExtensionOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaExtension.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.LambdaExtension.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.LambdaExtensionOptions">LambdaExtensionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.LambdaExtension.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.LambdaExtension.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.LambdaExtension.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.LambdaExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.LambdaExtension.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.LambdaExtension.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.LambdaExtension.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.LambdaExtension.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.LambdaExtension.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.LambdaExtension.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaExtension.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaExtension.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.LambdaExtension.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.LambdaExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaExtension.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### LambdaExtensionAutoDiscover <a name="LambdaExtensionAutoDiscover" id="projen.awscdk.LambdaExtensionAutoDiscover"></a>

Creates Lambda Extensions from entrypoints discovered in the project's source tree.

#### Initializers <a name="Initializers" id="projen.awscdk.LambdaExtensionAutoDiscover.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.LambdaExtensionAutoDiscover(project: Project, options: LambdaExtensionAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions">LambdaExtensionAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaExtensionAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.LambdaExtensionAutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions">LambdaExtensionAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.LambdaExtensionAutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.LambdaExtensionAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.LambdaExtensionAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.LambdaExtensionAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.LambdaExtensionAutoDiscover.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaExtensionAutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaExtensionAutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.LambdaExtensionAutoDiscover.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaExtensionAutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaExtensionAutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.LambdaExtensionAutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaExtensionAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="projen.awscdk.LambdaExtensionAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---


### LambdaFunction <a name="LambdaFunction" id="projen.awscdk.LambdaFunction"></a>

Generates a pre-bundled AWS Lambda function construct from handler code.

To use this, create an AWS Lambda handler file under your source tree with
the `.lambda.ts` extension and add a `LambdaFunction` component to your
typescript project pointing to this entrypoint.

This will add a task to your "compile" step which will use `esbuild` to
bundle the handler code into the build directory. It will also generate a
file `src/foo-function.ts` with a custom AWS construct called `FooFunction`
which extends `@aws-cdk/aws-lambda.Function` which is bound to the bundled
handle through an asset.

*Example*

```typescript
new LambdaFunction(myProject, {
  srcdir: myProject.srcdir,
  entrypoint: 'src/foo.lambda.ts',
});
```


#### Initializers <a name="Initializers" id="projen.awscdk.LambdaFunction.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.LambdaFunction(project: Project, options: LambdaFunctionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaFunction.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | The project to use. |
| <code><a href="#projen.awscdk.LambdaFunction.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.LambdaFunctionOptions">LambdaFunctionOptions</a></code> | Options. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaFunction.Initializer.parameter.project"></a>

- *Type:* projen.Project

The project to use.

---

##### `options`<sup>Required</sup> <a name="options" id="projen.awscdk.LambdaFunction.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.LambdaFunctionOptions">LambdaFunctionOptions</a>

Options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.awscdk.LambdaFunction.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.awscdk.LambdaFunction.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.awscdk.LambdaFunction.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.awscdk.LambdaFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.awscdk.LambdaFunction.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.awscdk.LambdaFunction.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.awscdk.LambdaFunction.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.LambdaFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.awscdk.LambdaFunction.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.awscdk.LambdaFunction.isConstruct"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.awscdk.LambdaFunction.isComponent"></a>

```typescript
import { awscdk } from 'projen'

awscdk.LambdaFunction.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.awscdk.LambdaFunction.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.awscdk.LambdaFunction.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.awscdk.LambdaFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.awscdk.LambdaFunction.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### AutoDiscoverCommonOptions <a name="AutoDiscoverCommonOptions" id="projen.awscdk.AutoDiscoverCommonOptions"></a>

Common options for auto discovering project subcomponents.

#### Initializer <a name="Initializer" id="projen.awscdk.AutoDiscoverCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const autoDiscoverCommonOptions: awscdk.AutoDiscoverCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AutoDiscoverCommonOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.AutoDiscoverCommonOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AutoDiscoverCommonOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.AutoDiscoverCommonOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

### AutoDiscoverOptions <a name="AutoDiscoverOptions" id="projen.awscdk.AutoDiscoverOptions"></a>

Options for `AutoDiscover`.

#### Initializer <a name="Initializer" id="projen.awscdk.AutoDiscoverOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const autoDiscoverOptions: awscdk.AutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Project source tree (relative to project output directory). |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Options for AWS Lambda functions. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.lambdaExtensionOptions">lambdaExtensionOptions</a></code> | <code><a href="#projen.awscdk.LambdaExtensionCommonOptions">LambdaExtensionCommonOptions</a></code> | Options for lambda extensions. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.testdir">testdir</a></code> | <code>string</code> | Test source tree. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.integrationTestOptions">integrationTestOptions</a></code> | <code><a href="#projen.awscdk.IntegrationTestCommonOptions">IntegrationTestCommonOptions</a></code> | Options for integration tests. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Auto-discover edge lambda functions. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Auto-discover integration tests. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Auto-discover lambda functions. |
| <code><a href="#projen.awscdk.AutoDiscoverOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Auto-discover lambda extensions. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.AutoDiscoverOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.AutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.AutoDiscoverOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

Project source tree (relative to project output directory).

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.AutoDiscoverOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>

Options for AWS Lambda functions.

---

##### `lambdaExtensionOptions`<sup>Optional</sup> <a name="lambdaExtensionOptions" id="projen.awscdk.AutoDiscoverOptions.property.lambdaExtensionOptions"></a>

```typescript
public readonly lambdaExtensionOptions: LambdaExtensionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaExtensionCommonOptions">LambdaExtensionCommonOptions</a>

Options for lambda extensions.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.awscdk.AutoDiscoverOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

Test source tree.

---

##### `integrationTestOptions`<sup>Optional</sup> <a name="integrationTestOptions" id="projen.awscdk.AutoDiscoverOptions.property.integrationTestOptions"></a>

```typescript
public readonly integrationTestOptions: IntegrationTestCommonOptions;
```

- *Type:* <a href="#projen.awscdk.IntegrationTestCommonOptions">IntegrationTestCommonOptions</a>

Options for integration tests.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="projen.awscdk.AutoDiscoverOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Auto-discover edge lambda functions.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.awscdk.AutoDiscoverOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Auto-discover integration tests.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="projen.awscdk.AutoDiscoverOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Auto-discover lambda functions.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="projen.awscdk.AutoDiscoverOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Auto-discover lambda extensions.

---

### AwsCdkConstructLibraryOptions <a name="AwsCdkConstructLibraryOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions"></a>

Options for `AwsCdkConstructLibrary`.

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkConstructLibraryOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkConstructLibraryOptions: awscdk.AwsCdkConstructLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfig">tsconfig</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.catalog">catalog</a></code> | <code>projen.cdk.Catalog</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Common options for all AWS Lambda functions. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevExtendsTsconfig`<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevExtendsTsconfig"></a>

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsconfigDevPresets`<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigDevPresets"></a>

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### `tsconfigPresets`<sup>Optional</sup> <a name="tsconfigPresets" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsconfigPresets"></a>

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "1.x"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.catalog"></a>

```typescript
public readonly catalog: Catalog;
```

- *Type:* projen.cdk.Catalog
- *Default:* new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

> [https://github.com/construct-catalog/catalog](https://github.com/construct-catalog/catalog)

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.AwsCdkConstructLibraryOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>
- *Default:* default options

Common options for all AWS Lambda functions.

---

### AwsCdkDepsCommonOptions <a name="AwsCdkDepsCommonOptions" id="projen.awscdk.AwsCdkDepsCommonOptions"></a>

Options for `AwsCdkDeps`.

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkDepsCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkDepsCommonOptions: awscdk.AwsCdkDepsCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkDepsCommonOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkDepsCommonOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkDepsCommonOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

### AwsCdkDepsOptions <a name="AwsCdkDepsOptions" id="projen.awscdk.AwsCdkDepsOptions"></a>

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkDepsOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkDepsOptions: awscdk.AwsCdkDepsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.AwsCdkDepsOptions.property.dependencyType">dependencyType</a></code> | <code>projen.DependencyType</code> | The type of dependency to use for runtime AWS CDK and `constructs` modules. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkDepsOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkDepsOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkDepsOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkDepsOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkDepsOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkDepsOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkDepsOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkDepsOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `dependencyType`<sup>Required</sup> <a name="dependencyType" id="projen.awscdk.AwsCdkDepsOptions.property.dependencyType"></a>

```typescript
public readonly dependencyType: DependencyType;
```

- *Type:* projen.DependencyType

The type of dependency to use for runtime AWS CDK and `constructs` modules.

For libraries, use peer dependencies and for apps use runtime dependencies.

---

### AwsCdkJavaAppOptions <a name="AwsCdkJavaAppOptions" id="projen.awscdk.AwsCdkJavaAppOptions"></a>

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkJavaAppOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkJavaAppOptions: awscdk.AwsCdkJavaAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.artifactId">artifactId</a></code> | <code>string</code> | The artifactId is generally the name that the project is known by. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.groupId">groupId</a></code> | <code>string</code> | This is generally unique amongst an organization or a project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.version">version</a></code> | <code>string</code> | This is the last piece of the naming puzzle. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.description">description</a></code> | <code>string</code> | Description of a project is always good. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.packaging">packaging</a></code> | <code>string</code> | Project packaging format. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.parentPom">parentPom</a></code> | <code>projen.java.ParentPom</code> | A Parent Pom can be used to have a child project inherit properties/plugins/ect in order to reduce duplication and keep standards across a large amount of repos. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.url">url</a></code> | <code>string</code> | The URL, like the name, is not required. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.compileOptions">compileOptions</a></code> | <code>projen.java.MavenCompileOptions</code> | Compile options. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.distdir">distdir</a></code> | <code>string</code> | Final artifact output directory. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.junit">junit</a></code> | <code>boolean</code> | Include junit tests. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.junitOptions">junitOptions</a></code> | <code>projen.java.JunitOptions</code> | junit options. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.packagingOptions">packagingOptions</a></code> | <code>projen.java.MavenPackagingOptions</code> | Packaging options. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJava">projenrcJava</a></code> | <code>boolean</code> | Use projenrc in java. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJavaOptions">projenrcJavaOptions</a></code> | <code>projen.java.ProjenrcOptions</code> | Options related to projenrc in java. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.testDeps">testDeps</a></code> | <code>string[]</code> | List of test dependencies for this project. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.sampleJavaPackage">sampleJavaPackage</a></code> | <code>string</code> | The java package to use for the code sample. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.requireApproval">requireApproval</a></code> | <code><a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a></code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.AwsCdkJavaAppOptions.property.mainClass">mainClass</a></code> | <code>string</code> | The name of the Java class with the static `main()` method. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkJavaAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkJavaAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.awscdk.AwsCdkJavaAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.awscdk.AwsCdkJavaAppOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkJavaAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.awscdk.AwsCdkJavaAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkJavaAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.awscdk.AwsCdkJavaAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkJavaAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkJavaAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkJavaAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.awscdk.AwsCdkJavaAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.awscdk.AwsCdkJavaAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.awscdk.AwsCdkJavaAppOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.awscdk.AwsCdkJavaAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkJavaAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="projen.awscdk.AwsCdkJavaAppOptions.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string
- *Default:* "my-app"

The artifactId is generally the name that the project is known by.

Although
the groupId is important, people within the group will rarely mention the
groupId in discussion (they are often all be the same ID, such as the
MojoHaus project groupId: org.codehaus.mojo). It, along with the groupId,
creates a key that separates this project from every other project in the
world (at least, it should :) ). Along with the groupId, the artifactId
fully defines the artifact's living quarters within the repository. In the
case of the above project, my-project lives in
$M2_REPO/org/codehaus/mojo/my-project.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="projen.awscdk.AwsCdkJavaAppOptions.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string
- *Default:* "org.acme"

This is generally unique amongst an organization or a project.

For example,
all core Maven artifacts do (well, should) live under the groupId
org.apache.maven. Group ID's do not necessarily use the dot notation, for
example, the junit project. Note that the dot-notated groupId does not have
to correspond to the package structure that the project contains. It is,
however, a good practice to follow. When stored within a repository, the
group acts much like the Java packaging structure does in an operating
system. The dots are replaced by OS specific directory separators (such as
'/' in Unix) which becomes a relative directory structure from the base
repository. In the example given, the org.codehaus.mojo group lives within
the directory $M2_REPO/org/codehaus/mojo.

---

##### `version`<sup>Required</sup> <a name="version" id="projen.awscdk.AwsCdkJavaAppOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

This is the last piece of the naming puzzle.

groupId:artifactId denotes a
single project but they cannot delineate which incarnation of that project
we are talking about. Do we want the junit:junit of 2018 (version 4.12), or
of 2007 (version 3.8.2)? In short: code changes, those changes should be
versioned, and this element keeps those versions in line. It is also used
within an artifact's repository to separate versions from each other.
my-project version 1.0 files live in the directory structure
$M2_REPO/org/codehaus/mojo/my-project/1.0.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.awscdk.AwsCdkJavaAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

Description of a project is always good.

Although this should not replace
formal documentation, a quick comment to any readers of the POM is always
helpful.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="projen.awscdk.AwsCdkJavaAppOptions.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string
- *Default:* "jar"

Project packaging format.

---

##### `parentPom`<sup>Optional</sup> <a name="parentPom" id="projen.awscdk.AwsCdkJavaAppOptions.property.parentPom"></a>

```typescript
public readonly parentPom: ParentPom;
```

- *Type:* projen.java.ParentPom
- *Default:* undefined

A Parent Pom can be used to have a child project inherit properties/plugins/ect in order to reduce duplication and keep standards across a large amount of repos.

---

##### `url`<sup>Optional</sup> <a name="url" id="projen.awscdk.AwsCdkJavaAppOptions.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string
- *Default:* undefined

The URL, like the name, is not required.

This is a nice gesture for
projects users, however, so that they know where the project lives.

---

##### `compileOptions`<sup>Optional</sup> <a name="compileOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.compileOptions"></a>

```typescript
public readonly compileOptions: MavenCompileOptions;
```

- *Type:* projen.java.MavenCompileOptions
- *Default:* defaults

Compile options.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.awscdk.AwsCdkJavaAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<groupId>/<artifactId>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `distdir`<sup>Optional</sup> <a name="distdir" id="projen.awscdk.AwsCdkJavaAppOptions.property.distdir"></a>

```typescript
public readonly distdir: string;
```

- *Type:* string
- *Default:* "dist/java"

Final artifact output directory.

---

##### `junit`<sup>Optional</sup> <a name="junit" id="projen.awscdk.AwsCdkJavaAppOptions.property.junit"></a>

```typescript
public readonly junit: boolean;
```

- *Type:* boolean
- *Default:* true

Include junit tests.

---

##### `junitOptions`<sup>Optional</sup> <a name="junitOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.junitOptions"></a>

```typescript
public readonly junitOptions: JunitOptions;
```

- *Type:* projen.java.JunitOptions
- *Default:* defaults

junit options.

---

##### `packagingOptions`<sup>Optional</sup> <a name="packagingOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.packagingOptions"></a>

```typescript
public readonly packagingOptions: MavenPackagingOptions;
```

- *Type:* projen.java.MavenPackagingOptions
- *Default:* defaults

Packaging options.

---

##### `projenrcJava`<sup>Optional</sup> <a name="projenrcJava" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJava"></a>

```typescript
public readonly projenrcJava: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in java.

This will install `projen` as a java dependency and will add a `synth` task which
will compile & execute `main()` from `src/main/java/projenrc.java`.

---

##### `projenrcJavaOptions`<sup>Optional</sup> <a name="projenrcJavaOptions" id="projen.awscdk.AwsCdkJavaAppOptions.property.projenrcJavaOptions"></a>

```typescript
public readonly projenrcJavaOptions: ProjenrcOptions;
```

- *Type:* projen.java.ProjenrcOptions
- *Default:* default options

Options related to projenrc in java.

---

##### `testDeps`<sup>Optional</sup> <a name="testDeps" id="projen.awscdk.AwsCdkJavaAppOptions.property.testDeps"></a>

```typescript
public readonly testDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of test dependencies for this project.

Dependencies use the format: `<groupId>/<artifactId>@<semver>`

Additional dependencies can be added via `project.addTestDependency()`.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen.awscdk.AwsCdkJavaAppOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `sampleJavaPackage`<sup>Optional</sup> <a name="sampleJavaPackage" id="projen.awscdk.AwsCdkJavaAppOptions.property.sampleJavaPackage"></a>

```typescript
public readonly sampleJavaPackage: string;
```

- *Type:* string
- *Default:* "org.acme"

The java package to use for the code sample.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen.awscdk.AwsCdkJavaAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen.awscdk.AwsCdkJavaAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen.awscdk.AwsCdkJavaAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen.awscdk.AwsCdkJavaAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* <a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a>
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen.awscdk.AwsCdkJavaAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen.awscdk.AwsCdkJavaAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkJavaAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkJavaAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="projen.awscdk.AwsCdkJavaAppOptions.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string
- *Default:* "org.acme.MyApp"

The name of the Java class with the static `main()` method.

This method
should call `app.synth()` on the CDK app.

---

### AwsCdkPackageNames <a name="AwsCdkPackageNames" id="projen.awscdk.AwsCdkPackageNames"></a>

Language-specific AWS CDK package names.

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkPackageNames.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkPackageNames: awscdk.AwsCdkPackageNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPackageNames.property.assertions">assertions</a></code> | <code>string</code> | Fully qualified name of the assertions library package. |
| <code><a href="#projen.awscdk.AwsCdkPackageNames.property.constructs">constructs</a></code> | <code>string</code> | Fully qualified name of the constructs library package. |
| <code><a href="#projen.awscdk.AwsCdkPackageNames.property.coreV1">coreV1</a></code> | <code>string</code> | Fully qualified name of the core framework package for CDKv1. |
| <code><a href="#projen.awscdk.AwsCdkPackageNames.property.coreV2">coreV2</a></code> | <code>string</code> | Fully qualified name of the core framework package for CDKv2. |
| <code><a href="#projen.awscdk.AwsCdkPackageNames.property.assert">assert</a></code> | <code>string</code> | Fully qualified name of the assert library package Can be empty as it's only really available for javascript projects. |

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="projen.awscdk.AwsCdkPackageNames.property.assertions"></a>

```typescript
public readonly assertions: string;
```

- *Type:* string

Fully qualified name of the assertions library package.

---

##### `constructs`<sup>Required</sup> <a name="constructs" id="projen.awscdk.AwsCdkPackageNames.property.constructs"></a>

```typescript
public readonly constructs: string;
```

- *Type:* string

Fully qualified name of the constructs library package.

---

##### `coreV1`<sup>Required</sup> <a name="coreV1" id="projen.awscdk.AwsCdkPackageNames.property.coreV1"></a>

```typescript
public readonly coreV1: string;
```

- *Type:* string

Fully qualified name of the core framework package for CDKv1.

---

##### `coreV2`<sup>Required</sup> <a name="coreV2" id="projen.awscdk.AwsCdkPackageNames.property.coreV2"></a>

```typescript
public readonly coreV2: string;
```

- *Type:* string

Fully qualified name of the core framework package for CDKv2.

---

##### `assert`<sup>Optional</sup> <a name="assert" id="projen.awscdk.AwsCdkPackageNames.property.assert"></a>

```typescript
public readonly assert: string;
```

- *Type:* string

Fully qualified name of the assert library package Can be empty as it's only really available for javascript projects.

---

### AwsCdkPythonAppOptions <a name="AwsCdkPythonAppOptions" id="projen.awscdk.AwsCdkPythonAppOptions"></a>

Options for `AwsCdkPythonApp`.

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkPythonAppOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkPythonAppOptions: awscdk.AwsCdkPythonAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.poetryOptions">poetryOptions</a></code> | <code>projen.python.PoetryPyprojectOptionsWithoutDeps</code> | Additional options to set for poetry if using poetry. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.setupConfig">setupConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional fields to pass in the setup() function if using setuptools. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.pythonExec">pythonExec</a></code> | <code>string</code> | Path to the python executable to use. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.pip">pip</a></code> | <code>boolean</code> | Use pip with a requirements.txt file to track project dependencies. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.poetry">poetry</a></code> | <code>boolean</code> | Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use projenrc in TypeScript. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcTsOptions</code> | Options related to projenrc in TypeScript. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.venv">venv</a></code> | <code>boolean</code> | Use venv to manage a virtual environment for installing dependencies inside. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.venvOptions">venvOptions</a></code> | <code>projen.python.VenvOptions</code> | Venv options. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.requireApproval">requireApproval</a></code> | <code><a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a></code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#projen.awscdk.AwsCdkPythonAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Python sources directory. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkPythonAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkPythonAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.awscdk.AwsCdkPythonAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.awscdk.AwsCdkPythonAppOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkPythonAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.awscdk.AwsCdkPythonAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkPythonAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.awscdk.AwsCdkPythonAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkPythonAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkPythonAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkPythonAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.awscdk.AwsCdkPythonAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.awscdk.AwsCdkPythonAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.awscdk.AwsCdkPythonAppOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.awscdk.AwsCdkPythonAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkPythonAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="projen.awscdk.AwsCdkPythonAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="projen.awscdk.AwsCdkPythonAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `version`<sup>Required</sup> <a name="version" id="projen.awscdk.AwsCdkPythonAppOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="projen.awscdk.AwsCdkPythonAppOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

> [https://pypi.org/classifiers/](https://pypi.org/classifiers/)

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.awscdk.AwsCdkPythonAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.awscdk.AwsCdkPythonAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.awscdk.AwsCdkPythonAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.awscdk.AwsCdkPythonAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `poetryOptions`<sup>Optional</sup> <a name="poetryOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.poetryOptions"></a>

```typescript
public readonly poetryOptions: PoetryPyprojectOptionsWithoutDeps;
```

- *Type:* projen.python.PoetryPyprojectOptionsWithoutDeps

Additional options to set for poetry if using poetry.

---

##### `setupConfig`<sup>Optional</sup> <a name="setupConfig" id="projen.awscdk.AwsCdkPythonAppOptions.property.setupConfig"></a>

```typescript
public readonly setupConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional fields to pass in the setup() function if using setuptools.

---

##### `pythonExec`<sup>Optional</sup> <a name="pythonExec" id="projen.awscdk.AwsCdkPythonAppOptions.property.pythonExec"></a>

```typescript
public readonly pythonExec: string;
```

- *Type:* string
- *Default:* "python"

Path to the python executable to use.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen.awscdk.AwsCdkPythonAppOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.awscdk.AwsCdkPythonAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.awscdk.AwsCdkPythonAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `pip`<sup>Optional</sup> <a name="pip" id="projen.awscdk.AwsCdkPythonAppOptions.property.pip"></a>

```typescript
public readonly pip: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use pip with a requirements.txt file to track project dependencies.

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="projen.awscdk.AwsCdkPythonAppOptions.property.poetry"></a>

```typescript
public readonly poetry: boolean;
```

- *Type:* boolean
- *Default:* false

Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing.

This feature is incompatible with pip, setuptools, or venv.
If you set this option to `true`, then pip, setuptools, and venv must be set to `false`.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in TypeScript.

This will create a tsconfig file (default: `tsconfig.projen.json`)
and use `ts-node` in the default task to parse the project source files.

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcTsOptions;
```

- *Type:* projen.typescript.ProjenrcTsOptions
- *Default:* default options

Options related to projenrc in TypeScript.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen.awscdk.AwsCdkPythonAppOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen.awscdk.AwsCdkPythonAppOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="projen.awscdk.AwsCdkPythonAppOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use setuptools with a setup.py script for packaging and publishing.

---

##### `venv`<sup>Optional</sup> <a name="venv" id="projen.awscdk.AwsCdkPythonAppOptions.property.venv"></a>

```typescript
public readonly venv: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use venv to manage a virtual environment for installing dependencies inside.

---

##### `venvOptions`<sup>Optional</sup> <a name="venvOptions" id="projen.awscdk.AwsCdkPythonAppOptions.property.venvOptions"></a>

```typescript
public readonly venvOptions: VenvOptions;
```

- *Type:* projen.python.VenvOptions
- *Default:* defaults

Venv options.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen.awscdk.AwsCdkPythonAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen.awscdk.AwsCdkPythonAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen.awscdk.AwsCdkPythonAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen.awscdk.AwsCdkPythonAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* <a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a>
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen.awscdk.AwsCdkPythonAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen.awscdk.AwsCdkPythonAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkPythonAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkPythonAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="projen.awscdk.AwsCdkPythonAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "app.py"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.awscdk.AwsCdkPythonAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "tests"

Python sources directory.

---

### AwsCdkTypeScriptAppOptions <a name="AwsCdkTypeScriptAppOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions"></a>

#### Initializer <a name="Initializer" id="projen.awscdk.AwsCdkTypeScriptAppOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const awsCdkTypeScriptAppOptions: awscdk.AwsCdkTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.requireApproval">requireApproval</a></code> | <code><a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a></code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Common options for all AWS Lambda functions. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevExtendsTsconfig`<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevExtendsTsconfig"></a>

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsconfigDevPresets`<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigDevPresets"></a>

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### `tsconfigPresets`<sup>Optional</sup> <a name="tsconfigPresets" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsconfigPresets"></a>

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* <a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a>
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.AwsCdkTypeScriptAppOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>
- *Default:* default options

Common options for all AWS Lambda functions.

---

### CdkConfigCommonOptions <a name="CdkConfigCommonOptions" id="projen.awscdk.CdkConfigCommonOptions"></a>

Common options for `cdk.json`.

#### Initializer <a name="Initializer" id="projen.awscdk.CdkConfigCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const cdkConfigCommonOptions: awscdk.CdkConfigCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.requireApproval">requireApproval</a></code> | <code><a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a></code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen.awscdk.CdkConfigCommonOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen.awscdk.CdkConfigCommonOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen.awscdk.CdkConfigCommonOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen.awscdk.CdkConfigCommonOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen.awscdk.CdkConfigCommonOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen.awscdk.CdkConfigCommonOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* <a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a>
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen.awscdk.CdkConfigCommonOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen.awscdk.CdkConfigCommonOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

### CdkConfigOptions <a name="CdkConfigOptions" id="projen.awscdk.CdkConfigOptions"></a>

Options for `CdkJson`.

#### Initializer <a name="Initializer" id="projen.awscdk.CdkConfigOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const cdkConfigOptions: awscdk.CdkConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.requireApproval">requireApproval</a></code> | <code><a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a></code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#projen.awscdk.CdkConfigOptions.property.app">app</a></code> | <code>string</code> | The command line to execute in order to synthesize the CDK application (language specific). |

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen.awscdk.CdkConfigOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen.awscdk.CdkConfigOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen.awscdk.CdkConfigOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen.awscdk.CdkConfigOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen.awscdk.CdkConfigOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* <a href="#projen.awscdk.ApprovalLevel">ApprovalLevel</a>
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen.awscdk.CdkConfigOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen.awscdk.CdkConfigOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `app`<sup>Required</sup> <a name="app" id="projen.awscdk.CdkConfigOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command line to execute in order to synthesize the CDK application (language specific).

---

### ConstructLibraryAwsOptions <a name="ConstructLibraryAwsOptions" id="projen.awscdk.ConstructLibraryAwsOptions"></a>

#### Initializer <a name="Initializer" id="projen.awscdk.ConstructLibraryAwsOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const constructLibraryAwsOptions: awscdk.ConstructLibraryAwsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfig">tsconfig</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.catalog">catalog</a></code> | <code>projen.cdk.Catalog</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen.awscdk.ConstructLibraryAwsOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Common options for all AWS Lambda functions. |

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="projen.awscdk.ConstructLibraryAwsOptions.property.name"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### ~~`commitGenerated`~~<sup>Optional</sup> <a name="commitGenerated" id="projen.awscdk.ConstructLibraryAwsOptions.property.commitGenerated"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### ~~`gitIgnoreOptions`~~<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.gitIgnoreOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### ~~`gitOptions`~~<sup>Optional</sup> <a name="gitOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.gitOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### ~~`logging`~~<sup>Optional</sup> <a name="logging" id="projen.awscdk.ConstructLibraryAwsOptions.property.logging"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### ~~`outdir`~~<sup>Optional</sup> <a name="outdir" id="projen.awscdk.ConstructLibraryAwsOptions.property.outdir"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

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

##### ~~`parent`~~<sup>Optional</sup> <a name="parent" id="projen.awscdk.ConstructLibraryAwsOptions.property.parent"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### ~~`projenCommand`~~<sup>Optional</sup> <a name="projenCommand" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenCommand"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### ~~`projenrcJson`~~<sup>Optional</sup> <a name="projenrcJson" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJson"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### ~~`projenrcJsonOptions`~~<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJsonOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### ~~`renovatebot`~~<sup>Optional</sup> <a name="renovatebot" id="projen.awscdk.ConstructLibraryAwsOptions.property.renovatebot"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### ~~`renovatebotOptions`~~<sup>Optional</sup> <a name="renovatebotOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.renovatebotOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### ~~`autoApproveOptions`~~<sup>Optional</sup> <a name="autoApproveOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.autoApproveOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### ~~`autoMerge`~~<sup>Optional</sup> <a name="autoMerge" id="projen.awscdk.ConstructLibraryAwsOptions.property.autoMerge"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### ~~`autoMergeOptions`~~<sup>Optional</sup> <a name="autoMergeOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.autoMergeOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### ~~`clobber`~~<sup>Optional</sup> <a name="clobber" id="projen.awscdk.ConstructLibraryAwsOptions.property.clobber"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### ~~`devContainer`~~<sup>Optional</sup> <a name="devContainer" id="projen.awscdk.ConstructLibraryAwsOptions.property.devContainer"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### ~~`github`~~<sup>Optional</sup> <a name="github" id="projen.awscdk.ConstructLibraryAwsOptions.property.github"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### ~~`githubOptions`~~<sup>Optional</sup> <a name="githubOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.githubOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### ~~`gitpod`~~<sup>Optional</sup> <a name="gitpod" id="projen.awscdk.ConstructLibraryAwsOptions.property.gitpod"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.awscdk.ConstructLibraryAwsOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.awscdk.ConstructLibraryAwsOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### ~~`projenCredentials`~~<sup>Optional</sup> <a name="projenCredentials" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenCredentials"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenTokenSecret"></a>

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

##### ~~`readme`~~<sup>Optional</sup> <a name="readme" id="projen.awscdk.ConstructLibraryAwsOptions.property.readme"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

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


##### ~~`stale`~~<sup>Optional</sup> <a name="stale" id="projen.awscdk.ConstructLibraryAwsOptions.property.stale"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### ~~`staleOptions`~~<sup>Optional</sup> <a name="staleOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.staleOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### ~~`vscode`~~<sup>Optional</sup> <a name="vscode" id="projen.awscdk.ConstructLibraryAwsOptions.property.vscode"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### ~~`allowLibraryDependencies`~~<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.awscdk.ConstructLibraryAwsOptions.property.allowLibraryDependencies"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### ~~`authorEmail`~~<sup>Optional</sup> <a name="authorEmail" id="projen.awscdk.ConstructLibraryAwsOptions.property.authorEmail"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### ~~`authorName`~~<sup>Optional</sup> <a name="authorName" id="projen.awscdk.ConstructLibraryAwsOptions.property.authorName"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### ~~`authorOrganization`~~<sup>Optional</sup> <a name="authorOrganization" id="projen.awscdk.ConstructLibraryAwsOptions.property.authorOrganization"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### ~~`authorUrl`~~<sup>Optional</sup> <a name="authorUrl" id="projen.awscdk.ConstructLibraryAwsOptions.property.authorUrl"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### ~~`autoDetectBin`~~<sup>Optional</sup> <a name="autoDetectBin" id="projen.awscdk.ConstructLibraryAwsOptions.property.autoDetectBin"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### ~~`bin`~~<sup>Optional</sup> <a name="bin" id="projen.awscdk.ConstructLibraryAwsOptions.property.bin"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### ~~`bugsEmail`~~<sup>Optional</sup> <a name="bugsEmail" id="projen.awscdk.ConstructLibraryAwsOptions.property.bugsEmail"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### ~~`bugsUrl`~~<sup>Optional</sup> <a name="bugsUrl" id="projen.awscdk.ConstructLibraryAwsOptions.property.bugsUrl"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### ~~`bundledDeps`~~<sup>Optional</sup> <a name="bundledDeps" id="projen.awscdk.ConstructLibraryAwsOptions.property.bundledDeps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### ~~`codeArtifactOptions`~~<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.codeArtifactOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### ~~`deps`~~<sup>Optional</sup> <a name="deps" id="projen.awscdk.ConstructLibraryAwsOptions.property.deps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### ~~`description`~~<sup>Optional</sup> <a name="description" id="projen.awscdk.ConstructLibraryAwsOptions.property.description"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### ~~`devDeps`~~<sup>Optional</sup> <a name="devDeps" id="projen.awscdk.ConstructLibraryAwsOptions.property.devDeps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### ~~`entrypoint`~~<sup>Optional</sup> <a name="entrypoint" id="projen.awscdk.ConstructLibraryAwsOptions.property.entrypoint"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### ~~`homepage`~~<sup>Optional</sup> <a name="homepage" id="projen.awscdk.ConstructLibraryAwsOptions.property.homepage"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### ~~`keywords`~~<sup>Optional</sup> <a name="keywords" id="projen.awscdk.ConstructLibraryAwsOptions.property.keywords"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### ~~`license`~~<sup>Optional</sup> <a name="license" id="projen.awscdk.ConstructLibraryAwsOptions.property.license"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### ~~`licensed`~~<sup>Optional</sup> <a name="licensed" id="projen.awscdk.ConstructLibraryAwsOptions.property.licensed"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### ~~`maxNodeVersion`~~<sup>Optional</sup> <a name="maxNodeVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.maxNodeVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### ~~`minNodeVersion`~~<sup>Optional</sup> <a name="minNodeVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.minNodeVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### ~~`npmAccess`~~<sup>Optional</sup> <a name="npmAccess" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmAccess"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmProvenance`~~<sup>Optional</sup> <a name="npmProvenance" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmProvenance"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### ~~`npmRegistryUrl`~~<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmRegistryUrl"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### ~~`npmTokenSecret`~~<sup>Optional</sup> <a name="npmTokenSecret" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmTokenSecret"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### ~~`packageManager`~~<sup>Optional</sup> <a name="packageManager" id="projen.awscdk.ConstructLibraryAwsOptions.property.packageManager"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### ~~`packageName`~~<sup>Optional</sup> <a name="packageName" id="projen.awscdk.ConstructLibraryAwsOptions.property.packageName"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### ~~`peerDependencyOptions`~~<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.peerDependencyOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### ~~`peerDeps`~~<sup>Optional</sup> <a name="peerDeps" id="projen.awscdk.ConstructLibraryAwsOptions.property.peerDeps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### ~~`pnpmVersion`~~<sup>Optional</sup> <a name="pnpmVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.pnpmVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### ~~`repository`~~<sup>Optional</sup> <a name="repository" id="projen.awscdk.ConstructLibraryAwsOptions.property.repository"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### ~~`repositoryDirectory`~~<sup>Optional</sup> <a name="repositoryDirectory" id="projen.awscdk.ConstructLibraryAwsOptions.property.repositoryDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### ~~`scopedPackagesOptions`~~<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.scopedPackagesOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.awscdk.ConstructLibraryAwsOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### ~~`stability`~~<sup>Optional</sup> <a name="stability" id="projen.awscdk.ConstructLibraryAwsOptions.property.stability"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### ~~`yarnBerryOptions`~~<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.yarnBerryOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### ~~`jsiiReleaseVersion`~~<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.jsiiReleaseVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### ~~`majorVersion`~~<sup>Optional</sup> <a name="majorVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.majorVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### ~~`minMajorVersion`~~<sup>Optional</sup> <a name="minMajorVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.minMajorVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### ~~`npmDistTag`~~<sup>Optional</sup> <a name="npmDistTag" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmDistTag"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### ~~`postBuildSteps`~~<sup>Optional</sup> <a name="postBuildSteps" id="projen.awscdk.ConstructLibraryAwsOptions.property.postBuildSteps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### ~~`prerelease`~~<sup>Optional</sup> <a name="prerelease" id="projen.awscdk.ConstructLibraryAwsOptions.property.prerelease"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### ~~`publishDryRun`~~<sup>Optional</sup> <a name="publishDryRun" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishDryRun"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### ~~`publishTasks`~~<sup>Optional</sup> <a name="publishTasks" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishTasks"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### ~~`releasableCommits`~~<sup>Optional</sup> <a name="releasableCommits" id="projen.awscdk.ConstructLibraryAwsOptions.property.releasableCommits"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### ~~`releaseBranches`~~<sup>Optional</sup> <a name="releaseBranches" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseBranches"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### ~~`releaseFailureIssue`~~<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseFailureIssue"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### ~~`releaseFailureIssueLabel`~~<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseFailureIssueLabel"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### ~~`releaseTagPrefix`~~<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseTagPrefix"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### ~~`releaseTrigger`~~<sup>Optional</sup> <a name="releaseTrigger" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseTrigger"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### ~~`releaseWorkflowName`~~<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflowName"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### ~~`releaseWorkflowSetupSteps`~~<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflowSetupSteps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### ~~`versionrcOptions`~~<sup>Optional</sup> <a name="versionrcOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.versionrcOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### ~~`workflowContainerImage`~~<sup>Optional</sup> <a name="workflowContainerImage" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowContainerImage"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### ~~`workflowRunsOn`~~<sup>Optional</sup> <a name="workflowRunsOn" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowRunsOn"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### ~~`workflowRunsOnGroup`~~<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowRunsOnGroup"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### ~~`defaultReleaseBranch`~~<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.awscdk.ConstructLibraryAwsOptions.property.defaultReleaseBranch"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### ~~`artifactsDirectory`~~<sup>Optional</sup> <a name="artifactsDirectory" id="projen.awscdk.ConstructLibraryAwsOptions.property.artifactsDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### ~~`autoApproveUpgrades`~~<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.awscdk.ConstructLibraryAwsOptions.property.autoApproveUpgrades"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### ~~`buildWorkflow`~~<sup>Optional</sup> <a name="buildWorkflow" id="projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflow"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### ~~`buildWorkflowOptions`~~<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflowOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.awscdk.ConstructLibraryAwsOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### ~~`bundlerOptions`~~<sup>Optional</sup> <a name="bundlerOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.bundlerOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### ~~`checkLicenses`~~<sup>Optional</sup> <a name="checkLicenses" id="projen.awscdk.ConstructLibraryAwsOptions.property.checkLicenses"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### ~~`codeCov`~~<sup>Optional</sup> <a name="codeCov" id="projen.awscdk.ConstructLibraryAwsOptions.property.codeCov"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### ~~`codeCovTokenSecret`~~<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.awscdk.ConstructLibraryAwsOptions.property.codeCovTokenSecret"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### ~~`copyrightOwner`~~<sup>Optional</sup> <a name="copyrightOwner" id="projen.awscdk.ConstructLibraryAwsOptions.property.copyrightOwner"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### ~~`copyrightPeriod`~~<sup>Optional</sup> <a name="copyrightPeriod" id="projen.awscdk.ConstructLibraryAwsOptions.property.copyrightPeriod"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### ~~`dependabot`~~<sup>Optional</sup> <a name="dependabot" id="projen.awscdk.ConstructLibraryAwsOptions.property.dependabot"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### ~~`dependabotOptions`~~<sup>Optional</sup> <a name="dependabotOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.dependabotOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### ~~`depsUpgrade`~~<sup>Optional</sup> <a name="depsUpgrade" id="projen.awscdk.ConstructLibraryAwsOptions.property.depsUpgrade"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### ~~`depsUpgradeOptions`~~<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.depsUpgradeOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### ~~`gitignore`~~<sup>Optional</sup> <a name="gitignore" id="projen.awscdk.ConstructLibraryAwsOptions.property.gitignore"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### ~~`jest`~~<sup>Optional</sup> <a name="jest" id="projen.awscdk.ConstructLibraryAwsOptions.property.jest"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### ~~`jestOptions`~~<sup>Optional</sup> <a name="jestOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.jestOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.awscdk.ConstructLibraryAwsOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### ~~`npmignoreEnabled`~~<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmignoreEnabled"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### ~~`npmIgnoreOptions`~~<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.npmIgnoreOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### ~~`package`~~<sup>Optional</sup> <a name="package" id="projen.awscdk.ConstructLibraryAwsOptions.property.package"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### ~~`prettier`~~<sup>Optional</sup> <a name="prettier" id="projen.awscdk.ConstructLibraryAwsOptions.property.prettier"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### ~~`prettierOptions`~~<sup>Optional</sup> <a name="prettierOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.prettierOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### ~~`projenDevDependency`~~<sup>Optional</sup> <a name="projenDevDependency" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenDevDependency"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### ~~`projenrcJs`~~<sup>Optional</sup> <a name="projenrcJs" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJs"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### ~~`projenrcJsOptions`~~<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcJsOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenVersion`~~<sup>Optional</sup> <a name="projenVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### ~~`pullRequestTemplate`~~<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.awscdk.ConstructLibraryAwsOptions.property.pullRequestTemplate"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### ~~`pullRequestTemplateContents`~~<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.awscdk.ConstructLibraryAwsOptions.property.pullRequestTemplateContents"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### ~~`release`~~<sup>Optional</sup> <a name="release" id="projen.awscdk.ConstructLibraryAwsOptions.property.release"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### ~~`releaseToNpm`~~<sup>Optional</sup> <a name="releaseToNpm" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseToNpm"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.awscdk.ConstructLibraryAwsOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### ~~`workflowBootstrapSteps`~~<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowBootstrapSteps"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### ~~`workflowGitIdentity`~~<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowGitIdentity"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### ~~`workflowNodeVersion`~~<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowNodeVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### ~~`workflowPackageCache`~~<sup>Optional</sup> <a name="workflowPackageCache" id="projen.awscdk.ConstructLibraryAwsOptions.property.workflowPackageCache"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### ~~`disableTsconfig`~~<sup>Optional</sup> <a name="disableTsconfig" id="projen.awscdk.ConstructLibraryAwsOptions.property.disableTsconfig"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### ~~`disableTsconfigDev`~~<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.awscdk.ConstructLibraryAwsOptions.property.disableTsconfigDev"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### ~~`docgen`~~<sup>Optional</sup> <a name="docgen" id="projen.awscdk.ConstructLibraryAwsOptions.property.docgen"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### ~~`docsDirectory`~~<sup>Optional</sup> <a name="docsDirectory" id="projen.awscdk.ConstructLibraryAwsOptions.property.docsDirectory"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### ~~`entrypointTypes`~~<sup>Optional</sup> <a name="entrypointTypes" id="projen.awscdk.ConstructLibraryAwsOptions.property.entrypointTypes"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### ~~`eslint`~~<sup>Optional</sup> <a name="eslint" id="projen.awscdk.ConstructLibraryAwsOptions.property.eslint"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### ~~`eslintOptions`~~<sup>Optional</sup> <a name="eslintOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.eslintOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### ~~`libdir`~~<sup>Optional</sup> <a name="libdir" id="projen.awscdk.ConstructLibraryAwsOptions.property.libdir"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### ~~`projenrcTs`~~<sup>Optional</sup> <a name="projenrcTs" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcTs"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### ~~`projenrcTsOptions`~~<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.projenrcTsOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### ~~`sampleCode`~~<sup>Optional</sup> <a name="sampleCode" id="projen.awscdk.ConstructLibraryAwsOptions.property.sampleCode"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### ~~`srcdir`~~<sup>Optional</sup> <a name="srcdir" id="projen.awscdk.ConstructLibraryAwsOptions.property.srcdir"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### ~~`testdir`~~<sup>Optional</sup> <a name="testdir" id="projen.awscdk.ConstructLibraryAwsOptions.property.testdir"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### ~~`tsconfig`~~<sup>Optional</sup> <a name="tsconfig" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfig"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### ~~`tsconfigDev`~~<sup>Optional</sup> <a name="tsconfigDev" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDev"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### ~~`tsconfigDevExtendsTsconfig`~~<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevExtendsTsconfig"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### ~~`tsconfigDevFile`~~<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevFile"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### ~~`tsconfigDevPresets`~~<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigDevPresets"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### ~~`tsconfigPresets`~~<sup>Optional</sup> <a name="tsconfigPresets" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsconfigPresets"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### ~~`tsJestOptions`~~<sup>Optional</sup> <a name="tsJestOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.tsJestOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### ~~`typescriptVersion`~~<sup>Optional</sup> <a name="typescriptVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.typescriptVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### ~~`author`~~<sup>Required</sup> <a name="author" id="projen.awscdk.ConstructLibraryAwsOptions.property.author"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### ~~`authorAddress`~~<sup>Required</sup> <a name="authorAddress" id="projen.awscdk.ConstructLibraryAwsOptions.property.authorAddress"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### ~~`repositoryUrl`~~<sup>Required</sup> <a name="repositoryUrl" id="projen.awscdk.ConstructLibraryAwsOptions.property.repositoryUrl"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### ~~`compat`~~<sup>Optional</sup> <a name="compat" id="projen.awscdk.ConstructLibraryAwsOptions.property.compat"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### ~~`compatIgnore`~~<sup>Optional</sup> <a name="compatIgnore" id="projen.awscdk.ConstructLibraryAwsOptions.property.compatIgnore"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### ~~`compressAssembly`~~<sup>Optional</sup> <a name="compressAssembly" id="projen.awscdk.ConstructLibraryAwsOptions.property.compressAssembly"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### ~~`docgenFilePath`~~<sup>Optional</sup> <a name="docgenFilePath" id="projen.awscdk.ConstructLibraryAwsOptions.property.docgenFilePath"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen.awscdk.ConstructLibraryAwsOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### ~~`excludeTypescript`~~<sup>Optional</sup> <a name="excludeTypescript" id="projen.awscdk.ConstructLibraryAwsOptions.property.excludeTypescript"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns.

Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### ~~`jsiiVersion`~~<sup>Optional</sup> <a name="jsiiVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.jsiiVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "1.x"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### ~~`publishToGo`~~<sup>Optional</sup> <a name="publishToGo" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishToGo"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### ~~`publishToMaven`~~<sup>Optional</sup> <a name="publishToMaven" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishToMaven"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### ~~`publishToNuget`~~<sup>Optional</sup> <a name="publishToNuget" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishToNuget"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### ~~`publishToPypi`~~<sup>Optional</sup> <a name="publishToPypi" id="projen.awscdk.ConstructLibraryAwsOptions.property.publishToPypi"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen.awscdk.ConstructLibraryAwsOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### ~~`rootdir`~~<sup>Optional</sup> <a name="rootdir" id="projen.awscdk.ConstructLibraryAwsOptions.property.rootdir"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### ~~`catalog`~~<sup>Optional</sup> <a name="catalog" id="projen.awscdk.ConstructLibraryAwsOptions.property.catalog"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly catalog: Catalog;
```

- *Type:* projen.cdk.Catalog
- *Default:* new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

> [https://github.com/construct-catalog/catalog](https://github.com/construct-catalog/catalog)

---

##### ~~`cdkVersion`~~<sup>Required</sup> <a name="cdkVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### ~~`cdkAssertions`~~<sup>Optional</sup> <a name="cdkAssertions" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkAssertions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### ~~`cdkVersionPinning`~~<sup>Optional</sup> <a name="cdkVersionPinning" id="projen.awscdk.ConstructLibraryAwsOptions.property.cdkVersionPinning"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### ~~`constructsVersion`~~<sup>Optional</sup> <a name="constructsVersion" id="projen.awscdk.ConstructLibraryAwsOptions.property.constructsVersion"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### ~~`edgeLambdaAutoDiscover`~~<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="projen.awscdk.ConstructLibraryAwsOptions.property.edgeLambdaAutoDiscover"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### ~~`experimentalIntegRunner`~~<sup>Optional</sup> <a name="experimentalIntegRunner" id="projen.awscdk.ConstructLibraryAwsOptions.property.experimentalIntegRunner"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### ~~`integrationTestAutoDiscover`~~<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.awscdk.ConstructLibraryAwsOptions.property.integrationTestAutoDiscover"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory.

---

##### ~~`lambdaAutoDiscover`~~<sup>Optional</sup> <a name="lambdaAutoDiscover" id="projen.awscdk.ConstructLibraryAwsOptions.property.lambdaAutoDiscover"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler.

---

##### ~~`lambdaExtensionAutoDiscover`~~<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="projen.awscdk.ConstructLibraryAwsOptions.property.lambdaExtensionAutoDiscover"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### ~~`lambdaOptions`~~<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.ConstructLibraryAwsOptions.property.lambdaOptions"></a>

- *Deprecated:* use `AwsCdkConstructLibraryOptions`

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>
- *Default:* default options

Common options for all AWS Lambda functions.

---

### EdgeLambdaAutoDiscoverOptions <a name="EdgeLambdaAutoDiscoverOptions" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions"></a>

Options for `EdgeLambdaAutoDiscover`.

#### Initializer <a name="Initializer" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const edgeLambdaAutoDiscoverOptions: awscdk.EdgeLambdaAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Project source tree (relative to project output directory). |
| <code><a href="#projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Options for AWS Lambda functions. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

Project source tree (relative to project output directory).

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.EdgeLambdaAutoDiscoverOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>

Options for AWS Lambda functions.

---

### IntegrationTestAutoDiscoverOptions <a name="IntegrationTestAutoDiscoverOptions" id="projen.awscdk.IntegrationTestAutoDiscoverOptions"></a>

Options for `IntegrationTestAutoDiscover`.

#### Initializer <a name="Initializer" id="projen.awscdk.IntegrationTestAutoDiscoverOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const integrationTestAutoDiscoverOptions: awscdk.IntegrationTestAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions.property.testdir">testdir</a></code> | <code>string</code> | Test source tree. |
| <code><a href="#projen.awscdk.IntegrationTestAutoDiscoverOptions.property.integrationTestOptions">integrationTestOptions</a></code> | <code><a href="#projen.awscdk.IntegrationTestCommonOptions">IntegrationTestCommonOptions</a></code> | Options for integration tests. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.IntegrationTestAutoDiscoverOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.IntegrationTestAutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.awscdk.IntegrationTestAutoDiscoverOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

Test source tree.

---

##### `integrationTestOptions`<sup>Optional</sup> <a name="integrationTestOptions" id="projen.awscdk.IntegrationTestAutoDiscoverOptions.property.integrationTestOptions"></a>

```typescript
public readonly integrationTestOptions: IntegrationTestCommonOptions;
```

- *Type:* <a href="#projen.awscdk.IntegrationTestCommonOptions">IntegrationTestCommonOptions</a>

Options for integration tests.

---

### IntegrationTestCommonOptions <a name="IntegrationTestCommonOptions" id="projen.awscdk.IntegrationTestCommonOptions"></a>

#### Initializer <a name="Initializer" id="projen.awscdk.IntegrationTestCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const integrationTestCommonOptions: awscdk.IntegrationTestCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestCommonOptions.property.destroyAfterDeploy">destroyAfterDeploy</a></code> | <code>boolean</code> | Destroy the test app after a successful deployment. |
| <code><a href="#projen.awscdk.IntegrationTestCommonOptions.property.pathMetadata">pathMetadata</a></code> | <code>boolean</code> | Enables path metadata, adding `aws:cdk:path`, with the defining construct's path, to the CloudFormation metadata for each synthesized resource. |

---

##### `destroyAfterDeploy`<sup>Optional</sup> <a name="destroyAfterDeploy" id="projen.awscdk.IntegrationTestCommonOptions.property.destroyAfterDeploy"></a>

```typescript
public readonly destroyAfterDeploy: boolean;
```

- *Type:* boolean
- *Default:* true

Destroy the test app after a successful deployment.

If disabled, leaves the
app deployed in the dev account.

---

##### `pathMetadata`<sup>Optional</sup> <a name="pathMetadata" id="projen.awscdk.IntegrationTestCommonOptions.property.pathMetadata"></a>

```typescript
public readonly pathMetadata: boolean;
```

- *Type:* boolean
- *Default:* false

Enables path metadata, adding `aws:cdk:path`, with the defining construct's path, to the CloudFormation metadata for each synthesized resource.

---

### IntegrationTestOptions <a name="IntegrationTestOptions" id="projen.awscdk.IntegrationTestOptions"></a>

Options for `IntegrationTest`.

#### Initializer <a name="Initializer" id="projen.awscdk.IntegrationTestOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const integrationTestOptions: awscdk.IntegrationTestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.destroyAfterDeploy">destroyAfterDeploy</a></code> | <code>boolean</code> | Destroy the test app after a successful deployment. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.pathMetadata">pathMetadata</a></code> | <code>boolean</code> | Enables path metadata, adding `aws:cdk:path`, with the defining construct's path, to the CloudFormation metadata for each synthesized resource. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | A path from the project root directory to a TypeScript file which contains the integration test app. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | The path of the tsconfig.json file to use when running integration test cdk apps. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.name">name</a></code> | <code>string</code> | Name of the integration test. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.IntegrationTestOptions.property.stacks">stacks</a></code> | <code>string[]</code> | A list of stacks within the integration test to deploy/destroy. |

---

##### `destroyAfterDeploy`<sup>Optional</sup> <a name="destroyAfterDeploy" id="projen.awscdk.IntegrationTestOptions.property.destroyAfterDeploy"></a>

```typescript
public readonly destroyAfterDeploy: boolean;
```

- *Type:* boolean
- *Default:* true

Destroy the test app after a successful deployment.

If disabled, leaves the
app deployed in the dev account.

---

##### `pathMetadata`<sup>Optional</sup> <a name="pathMetadata" id="projen.awscdk.IntegrationTestOptions.property.pathMetadata"></a>

```typescript
public readonly pathMetadata: boolean;
```

- *Type:* boolean
- *Default:* false

Enables path metadata, adding `aws:cdk:path`, with the defining construct's path, to the CloudFormation metadata for each synthesized resource.

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.IntegrationTestOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

A path from the project root directory to a TypeScript file which contains the integration test app.

This is relative to the root directory of the project.

---

*Example*

```typescript
"test/subdir/foo.integ.ts"
```


##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.IntegrationTestOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

The path of the tsconfig.json file to use when running integration test cdk apps.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.awscdk.IntegrationTestOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* Derived from the entrypoint filename.

Name of the integration test.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.IntegrationTestOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `stacks`<sup>Optional</sup> <a name="stacks" id="projen.awscdk.IntegrationTestOptions.property.stacks"></a>

```typescript
public readonly stacks: string[];
```

- *Type:* string[]
- *Default:* ["**"]

A list of stacks within the integration test to deploy/destroy.

---

### LambdaAutoDiscoverOptions <a name="LambdaAutoDiscoverOptions" id="projen.awscdk.LambdaAutoDiscoverOptions"></a>

Options for `LambdaAutoDiscover`.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaAutoDiscoverOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaAutoDiscoverOptions: awscdk.LambdaAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaAutoDiscoverOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.LambdaAutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.awscdk.LambdaAutoDiscoverOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Project source tree (relative to project output directory). |
| <code><a href="#projen.awscdk.LambdaAutoDiscoverOptions.property.lambdaOptions">lambdaOptions</a></code> | <code><a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a></code> | Options for AWS Lambda functions. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.LambdaAutoDiscoverOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.LambdaAutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.LambdaAutoDiscoverOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

Project source tree (relative to project output directory).

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen.awscdk.LambdaAutoDiscoverOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaFunctionCommonOptions">LambdaFunctionCommonOptions</a>

Options for AWS Lambda functions.

---

### LambdaExtensionAutoDiscoverOptions <a name="LambdaExtensionAutoDiscoverOptions" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions"></a>

Options for `LambdaExtensionAutoDiscover`.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaExtensionAutoDiscoverOptions: awscdk.LambdaExtensionAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Project source tree (relative to project output directory). |
| <code><a href="#projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.lambdaExtensionOptions">lambdaExtensionOptions</a></code> | <code><a href="#projen.awscdk.LambdaExtensionCommonOptions">LambdaExtensionCommonOptions</a></code> | Options for lambda extensions. |

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

Project source tree (relative to project output directory).

---

##### `lambdaExtensionOptions`<sup>Optional</sup> <a name="lambdaExtensionOptions" id="projen.awscdk.LambdaExtensionAutoDiscoverOptions.property.lambdaExtensionOptions"></a>

```typescript
public readonly lambdaExtensionOptions: LambdaExtensionCommonOptions;
```

- *Type:* <a href="#projen.awscdk.LambdaExtensionCommonOptions">LambdaExtensionCommonOptions</a>

Options for lambda extensions.

---

### LambdaExtensionCommonOptions <a name="LambdaExtensionCommonOptions" id="projen.awscdk.LambdaExtensionCommonOptions"></a>

Common options for creating lambda extensions.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaExtensionCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaExtensionCommonOptions: awscdk.LambdaExtensionCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionCommonOptions.property.bundlingOptions">bundlingOptions</a></code> | <code>projen.javascript.BundlingOptions</code> | Bundling options for this AWS Lambda extension. |
| <code><a href="#projen.awscdk.LambdaExtensionCommonOptions.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>[]</code> | The extension's compatible runtimes. |

---

##### `bundlingOptions`<sup>Optional</sup> <a name="bundlingOptions" id="projen.awscdk.LambdaExtensionCommonOptions.property.bundlingOptions"></a>

```typescript
public readonly bundlingOptions: BundlingOptions;
```

- *Type:* projen.javascript.BundlingOptions
- *Default:* defaults

Bundling options for this AWS Lambda extension.

If not specified the default bundling options specified for the project
`Bundler` instance will be used.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="projen.awscdk.LambdaExtensionCommonOptions.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: LambdaRuntime[];
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>[]

The extension's compatible runtimes.

---

### LambdaExtensionOptions <a name="LambdaExtensionOptions" id="projen.awscdk.LambdaExtensionOptions"></a>

Options for creating lambda extensions.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaExtensionOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaExtensionOptions: awscdk.LambdaExtensionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.bundlingOptions">bundlingOptions</a></code> | <code>projen.javascript.BundlingOptions</code> | Bundling options for this AWS Lambda extension. |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>[]</code> | The extension's compatible runtimes. |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | A path from the project root directory to a TypeScript file which contains the AWS Lambda extension entrypoint (stand-alone script). |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.constructFile">constructFile</a></code> | <code>string</code> | The name of the generated TypeScript source file. |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.constructName">constructName</a></code> | <code>string</code> | The name of the generated `lambda.LayerVersion` subclass. |
| <code><a href="#projen.awscdk.LambdaExtensionOptions.property.name">name</a></code> | <code>string</code> | Name of the extension. |

---

##### `bundlingOptions`<sup>Optional</sup> <a name="bundlingOptions" id="projen.awscdk.LambdaExtensionOptions.property.bundlingOptions"></a>

```typescript
public readonly bundlingOptions: BundlingOptions;
```

- *Type:* projen.javascript.BundlingOptions
- *Default:* defaults

Bundling options for this AWS Lambda extension.

If not specified the default bundling options specified for the project
`Bundler` instance will be used.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="projen.awscdk.LambdaExtensionOptions.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: LambdaRuntime[];
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>[]

The extension's compatible runtimes.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.LambdaExtensionOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.LambdaExtensionOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

A path from the project root directory to a TypeScript file which contains the AWS Lambda extension entrypoint (stand-alone script).

This is relative to the root directory of the project.

---

*Example*

```typescript
"src/subdir/foo.lambda-extension.ts"
```


##### `constructFile`<sup>Optional</sup> <a name="constructFile" id="projen.awscdk.LambdaExtensionOptions.property.constructFile"></a>

```typescript
public readonly constructFile: string;
```

- *Type:* string
- *Default:* The name of the entrypoint file, with the `-layer-version.ts` suffix instead of `.lambda-extension.ts`.

The name of the generated TypeScript source file.

This file should also be
under the source tree.

---

##### `constructName`<sup>Optional</sup> <a name="constructName" id="projen.awscdk.LambdaExtensionOptions.property.constructName"></a>

```typescript
public readonly constructName: string;
```

- *Type:* string
- *Default:* A pascal cased version of the name of the entrypoint file, with the extension `LayerVersion` (e.g. `AppConfigLayerVersion`).

The name of the generated `lambda.LayerVersion` subclass.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.awscdk.LambdaExtensionOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* Derived from the entrypoint filename.

Name of the extension.

---

### LambdaFunctionCommonOptions <a name="LambdaFunctionCommonOptions" id="projen.awscdk.LambdaFunctionCommonOptions"></a>

Common options for `LambdaFunction`.

Applies to all functions in
auto-discovery.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaFunctionCommonOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaFunctionCommonOptions: awscdk.LambdaFunctionCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaFunctionCommonOptions.property.awsSdkConnectionReuse">awsSdkConnectionReuse</a></code> | <code>boolean</code> | Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript. |
| <code><a href="#projen.awscdk.LambdaFunctionCommonOptions.property.bundlingOptions">bundlingOptions</a></code> | <code>projen.javascript.BundlingOptions</code> | Bundling options for this AWS Lambda function. |
| <code><a href="#projen.awscdk.LambdaFunctionCommonOptions.property.edgeLambda">edgeLambda</a></code> | <code>boolean</code> | Whether to create a `cloudfront.experimental.EdgeFunction` instead of a `lambda.Function`. |
| <code><a href="#projen.awscdk.LambdaFunctionCommonOptions.property.runtime">runtime</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | The node.js version to target. |

---

##### `awsSdkConnectionReuse`<sup>Optional</sup> <a name="awsSdkConnectionReuse" id="projen.awscdk.LambdaFunctionCommonOptions.property.awsSdkConnectionReuse"></a>

```typescript
public readonly awsSdkConnectionReuse: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript.

This sets the `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable
to `1`.

Not applicable when `edgeLambda` is set to `true` because environment
variables are not supported in Lambda@Edge.

> [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html)

---

##### `bundlingOptions`<sup>Optional</sup> <a name="bundlingOptions" id="projen.awscdk.LambdaFunctionCommonOptions.property.bundlingOptions"></a>

```typescript
public readonly bundlingOptions: BundlingOptions;
```

- *Type:* projen.javascript.BundlingOptions
- *Default:* defaults

Bundling options for this AWS Lambda function.

If not specified the default bundling options specified for the project
`Bundler` instance will be used.

---

##### `edgeLambda`<sup>Optional</sup> <a name="edgeLambda" id="projen.awscdk.LambdaFunctionCommonOptions.property.edgeLambda"></a>

```typescript
public readonly edgeLambda: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to create a `cloudfront.experimental.EdgeFunction` instead of a `lambda.Function`.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="projen.awscdk.LambdaFunctionCommonOptions.property.runtime"></a>

```typescript
public readonly runtime: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>
- *Default:* Runtime.NODEJS_18_X

The node.js version to target.

---

### LambdaFunctionOptions <a name="LambdaFunctionOptions" id="projen.awscdk.LambdaFunctionOptions"></a>

Options for `Function`.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaFunctionOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaFunctionOptions: awscdk.LambdaFunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.awsSdkConnectionReuse">awsSdkConnectionReuse</a></code> | <code>boolean</code> | Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.bundlingOptions">bundlingOptions</a></code> | <code>projen.javascript.BundlingOptions</code> | Bundling options for this AWS Lambda function. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.edgeLambda">edgeLambda</a></code> | <code>boolean</code> | Whether to create a `cloudfront.experimental.EdgeFunction` instead of a `lambda.Function`. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.runtime">runtime</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | The node.js version to target. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.cdkDeps">cdkDeps</a></code> | <code><a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a></code> | AWS CDK dependency manager. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | A path from the project root directory to a TypeScript file which contains the AWS Lambda handler entrypoint (exports a `handler` function). |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.constructFile">constructFile</a></code> | <code>string</code> | The name of the generated TypeScript source file. |
| <code><a href="#projen.awscdk.LambdaFunctionOptions.property.constructName">constructName</a></code> | <code>string</code> | The name of the generated `lambda.Function` subclass. |

---

##### `awsSdkConnectionReuse`<sup>Optional</sup> <a name="awsSdkConnectionReuse" id="projen.awscdk.LambdaFunctionOptions.property.awsSdkConnectionReuse"></a>

```typescript
public readonly awsSdkConnectionReuse: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to automatically reuse TCP connections when working with the AWS SDK for JavaScript.

This sets the `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable
to `1`.

Not applicable when `edgeLambda` is set to `true` because environment
variables are not supported in Lambda@Edge.

> [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html)

---

##### `bundlingOptions`<sup>Optional</sup> <a name="bundlingOptions" id="projen.awscdk.LambdaFunctionOptions.property.bundlingOptions"></a>

```typescript
public readonly bundlingOptions: BundlingOptions;
```

- *Type:* projen.javascript.BundlingOptions
- *Default:* defaults

Bundling options for this AWS Lambda function.

If not specified the default bundling options specified for the project
`Bundler` instance will be used.

---

##### `edgeLambda`<sup>Optional</sup> <a name="edgeLambda" id="projen.awscdk.LambdaFunctionOptions.property.edgeLambda"></a>

```typescript
public readonly edgeLambda: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to create a `cloudfront.experimental.EdgeFunction` instead of a `lambda.Function`.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="projen.awscdk.LambdaFunctionOptions.property.runtime"></a>

```typescript
public readonly runtime: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>
- *Default:* Runtime.NODEJS_18_X

The node.js version to target.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen.awscdk.LambdaFunctionOptions.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* <a href="#projen.awscdk.AwsCdkDeps">AwsCdkDeps</a>

AWS CDK dependency manager.

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.awscdk.LambdaFunctionOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

A path from the project root directory to a TypeScript file which contains the AWS Lambda handler entrypoint (exports a `handler` function).

This is relative to the root directory of the project.

---

*Example*

```typescript
"src/subdir/foo.lambda.ts"
```


##### `constructFile`<sup>Optional</sup> <a name="constructFile" id="projen.awscdk.LambdaFunctionOptions.property.constructFile"></a>

```typescript
public readonly constructFile: string;
```

- *Type:* string
- *Default:* The name of the entrypoint file, with the `-function.ts` suffix instead of `.lambda.ts`.

The name of the generated TypeScript source file.

This file should also be
under the source tree.

---

##### `constructName`<sup>Optional</sup> <a name="constructName" id="projen.awscdk.LambdaFunctionOptions.property.constructName"></a>

```typescript
public readonly constructName: string;
```

- *Type:* string
- *Default:* A pascal cased version of the name of the entrypoint file, with the extension `Function` (e.g. `ResizeImageFunction`).

The name of the generated `lambda.Function` subclass.

---

### LambdaRuntimeOptions <a name="LambdaRuntimeOptions" id="projen.awscdk.LambdaRuntimeOptions"></a>

Options for the AWS Lambda function runtime.

#### Initializer <a name="Initializer" id="projen.awscdk.LambdaRuntimeOptions.Initializer"></a>

```typescript
import { awscdk } from 'projen'

const lambdaRuntimeOptions: awscdk.LambdaRuntimeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaRuntimeOptions.property.defaultExternals">defaultExternals</a></code> | <code>string[]</code> | Packages that are considered externals by default when bundling. |

---

##### `defaultExternals`<sup>Optional</sup> <a name="defaultExternals" id="projen.awscdk.LambdaRuntimeOptions.property.defaultExternals"></a>

```typescript
public readonly defaultExternals: string[];
```

- *Type:* string[]
- *Default:* ['@aws-sdk/*']

Packages that are considered externals by default when bundling.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntime <a name="LambdaRuntime" id="projen.awscdk.LambdaRuntime"></a>

The runtime for the AWS Lambda function.

#### Initializers <a name="Initializers" id="projen.awscdk.LambdaRuntime.Initializer"></a>

```typescript
import { awscdk } from 'projen'

new awscdk.LambdaRuntime(functionRuntime: string, esbuildTarget: string, options?: LambdaRuntimeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaRuntime.Initializer.parameter.functionRuntime">functionRuntime</a></code> | <code>string</code> | The Node.js runtime to use. |
| <code><a href="#projen.awscdk.LambdaRuntime.Initializer.parameter.esbuildTarget">esbuildTarget</a></code> | <code>string</code> | The esbuild setting to use. |
| <code><a href="#projen.awscdk.LambdaRuntime.Initializer.parameter.options">options</a></code> | <code><a href="#projen.awscdk.LambdaRuntimeOptions">LambdaRuntimeOptions</a></code> | Options for this runtime. |

---

##### `functionRuntime`<sup>Required</sup> <a name="functionRuntime" id="projen.awscdk.LambdaRuntime.Initializer.parameter.functionRuntime"></a>

- *Type:* string

The Node.js runtime to use.

---

##### `esbuildTarget`<sup>Required</sup> <a name="esbuildTarget" id="projen.awscdk.LambdaRuntime.Initializer.parameter.esbuildTarget"></a>

- *Type:* string

The esbuild setting to use.

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.awscdk.LambdaRuntime.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.awscdk.LambdaRuntimeOptions">LambdaRuntimeOptions</a>

Options for this runtime.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaRuntime.property.defaultExternals">defaultExternals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaRuntime.property.esbuildPlatform">esbuildPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.awscdk.LambdaRuntime.property.esbuildTarget">esbuildTarget</a></code> | <code>string</code> | The esbuild setting to use. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.functionRuntime">functionRuntime</a></code> | <code>string</code> | The Node.js runtime to use. |

---

##### `defaultExternals`<sup>Required</sup> <a name="defaultExternals" id="projen.awscdk.LambdaRuntime.property.defaultExternals"></a>

```typescript
public readonly defaultExternals: string[];
```

- *Type:* string[]

---

##### `esbuildPlatform`<sup>Required</sup> <a name="esbuildPlatform" id="projen.awscdk.LambdaRuntime.property.esbuildPlatform"></a>

```typescript
public readonly esbuildPlatform: string;
```

- *Type:* string

---

##### `esbuildTarget`<sup>Required</sup> <a name="esbuildTarget" id="projen.awscdk.LambdaRuntime.property.esbuildTarget"></a>

```typescript
public readonly esbuildTarget: string;
```

- *Type:* string

The esbuild setting to use.

---

##### `functionRuntime`<sup>Required</sup> <a name="functionRuntime" id="projen.awscdk.LambdaRuntime.property.functionRuntime"></a>

```typescript
public readonly functionRuntime: string;
```

- *Type:* string

The Node.js runtime to use.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_10_X">NODEJS_10_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 10.x. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_12_X">NODEJS_12_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 12.x. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_14_X">NODEJS_14_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 14.x. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_16_X">NODEJS_16_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 16.x. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_18_X">NODEJS_18_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 18.x. |
| <code><a href="#projen.awscdk.LambdaRuntime.property.NODEJS_20_X">NODEJS_20_X</a></code> | <code><a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a></code> | Node.js 20.x. |

---

##### ~~`NODEJS_10_X`~~<sup>Required</sup> <a name="NODEJS_10_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_10_X"></a>

- *Deprecated:* NodeJS10 has been deprecated on February 14, 2022

```typescript
public readonly NODEJS_10_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 10.x.

---

##### ~~`NODEJS_12_X`~~<sup>Required</sup> <a name="NODEJS_12_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_12_X"></a>

- *Deprecated:* NodeJS12 has been deprecated on April 30, 2023

```typescript
public readonly NODEJS_12_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 12.x.

---

##### ~~`NODEJS_14_X`~~<sup>Required</sup> <a name="NODEJS_14_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_14_X"></a>

- *Deprecated:* NodeJS14 will be deprecated on November 27, 2023

```typescript
public readonly NODEJS_14_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 14.x.

---

##### ~~`NODEJS_16_X`~~<sup>Required</sup> <a name="NODEJS_16_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_16_X"></a>

- *Deprecated:* NodeJS16 will be deprecated on March 11, 2024

```typescript
public readonly NODEJS_16_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 16.x.

---

##### `NODEJS_18_X`<sup>Required</sup> <a name="NODEJS_18_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_18_X"></a>

```typescript
public readonly NODEJS_18_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 18.x.

---

##### `NODEJS_20_X`<sup>Required</sup> <a name="NODEJS_20_X" id="projen.awscdk.LambdaRuntime.property.NODEJS_20_X"></a>

```typescript
public readonly NODEJS_20_X: LambdaRuntime;
```

- *Type:* <a href="#projen.awscdk.LambdaRuntime">LambdaRuntime</a>

Node.js 20.x.

---


## Enums <a name="Enums" id="Enums"></a>

### ApprovalLevel <a name="ApprovalLevel" id="projen.awscdk.ApprovalLevel"></a>

Which approval is required when deploying CDK apps.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.awscdk.ApprovalLevel.NEVER">NEVER</a></code> | Approval is never required. |
| <code><a href="#projen.awscdk.ApprovalLevel.ANY_CHANGE">ANY_CHANGE</a></code> | Requires approval on any IAM or security-group-related change. |
| <code><a href="#projen.awscdk.ApprovalLevel.BROADENING">BROADENING</a></code> | Requires approval when IAM statements or traffic rules are added; |

---

##### `NEVER` <a name="NEVER" id="projen.awscdk.ApprovalLevel.NEVER"></a>

Approval is never required.

---


##### `ANY_CHANGE` <a name="ANY_CHANGE" id="projen.awscdk.ApprovalLevel.ANY_CHANGE"></a>

Requires approval on any IAM or security-group-related change.

---


##### `BROADENING` <a name="BROADENING" id="projen.awscdk.ApprovalLevel.BROADENING"></a>

Requires approval when IAM statements or traffic rules are added;

removals don't require approval

---

