# `typescript` Submodule <a name="`typescript` Submodule" id="projen.typescript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Projenrc <a name="Projenrc" id="projen.typescript.Projenrc"></a>

Sets up a typescript project to use TypeScript for projenrc.

#### Initializers <a name="Initializers" id="projen.typescript.Projenrc.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.Projenrc(project: TypeScriptProject, options?: ProjenrcOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.Projenrc.Initializer.parameter.project">project</a></code> | <code><a href="#projen.typescript.TypeScriptProject">TypeScriptProject</a></code> | *No description.* |
| <code><a href="#projen.typescript.Projenrc.Initializer.parameter.options">options</a></code> | <code><a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.typescript.Projenrc.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.typescript.TypeScriptProject">TypeScriptProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.typescript.Projenrc.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.Projenrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.typescript.Projenrc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.typescript.Projenrc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.typescript.Projenrc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.typescript.Projenrc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.typescript.Projenrc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.typescript.Projenrc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.typescript.Projenrc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.Projenrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.typescript.Projenrc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.typescript.Projenrc.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### `isConstruct` <a name="isConstruct" id="projen.typescript.Projenrc.isConstruct"></a>

```typescript
import { typescript } from 'projen'

typescript.Projenrc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.Projenrc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.typescript.Projenrc.isComponent"></a>

```typescript
import { typescript } from 'projen'

typescript.Projenrc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.Projenrc.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.typescript.Projenrc.of"></a>

```typescript
import { typescript } from 'projen'

typescript.Projenrc.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.typescript.Projenrc.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.Projenrc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.typescript.Projenrc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.typescript.Projenrc.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.typescript.Projenrc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.typescript.Projenrc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.Projenrc.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---


### ProjenrcTs <a name="ProjenrcTs" id="projen.typescript.ProjenrcTs"></a>

A projenrc file written in TypeScript.

This component can be instantiated in any type of project
and has no expectations around the project's main language.

Requires that `npx` is available.

#### Initializers <a name="Initializers" id="projen.typescript.ProjenrcTs.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.ProjenrcTs(project: Project, options?: ProjenrcTsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.ProjenrcTs.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.typescript.ProjenrcTs.Initializer.parameter.options">options</a></code> | <code><a href="#projen.typescript.ProjenrcTsOptions">ProjenrcTsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.typescript.ProjenrcTs.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.typescript.ProjenrcTs.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.typescript.ProjenrcTsOptions">ProjenrcTsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.ProjenrcTs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.typescript.ProjenrcTs.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.typescript.ProjenrcTs.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.typescript.ProjenrcTs.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.typescript.ProjenrcTs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.typescript.ProjenrcTs.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.typescript.ProjenrcTs.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.typescript.ProjenrcTs.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.ProjenrcTs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.typescript.ProjenrcTs.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.typescript.ProjenrcTs.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### `isConstruct` <a name="isConstruct" id="projen.typescript.ProjenrcTs.isConstruct"></a>

```typescript
import { typescript } from 'projen'

typescript.ProjenrcTs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.ProjenrcTs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.typescript.ProjenrcTs.isComponent"></a>

```typescript
import { typescript } from 'projen'

typescript.ProjenrcTs.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.ProjenrcTs.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.typescript.ProjenrcTs.of"></a>

```typescript
import { typescript } from 'projen'

typescript.ProjenrcTs.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.typescript.ProjenrcTs.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.ProjenrcTs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.typescript.ProjenrcTs.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.typescript.ProjenrcTs.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |
| <code><a href="#projen.typescript.ProjenrcTs.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | TypeScript configuration file used to compile projen source files. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.typescript.ProjenrcTs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.typescript.ProjenrcTs.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.ProjenrcTs.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---

##### `tsconfig`<sup>Required</sup> <a name="tsconfig" id="projen.typescript.ProjenrcTs.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

TypeScript configuration file used to compile projen source files.

---


### TypeScriptAppProject <a name="TypeScriptAppProject" id="projen.typescript.TypeScriptAppProject"></a>

TypeScript app.

#### Initializers <a name="Initializers" id="projen.typescript.TypeScriptAppProject.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.TypeScriptAppProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptAppProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.typescript.TypeScriptAppProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptAppProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.typescript.TypeScriptAppProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.typescript.TypeScriptAppProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptAppProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptAppProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.typescript.TypeScriptAppProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.typescript.TypeScriptAppProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.typescript.TypeScriptAppProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.typescript.TypeScriptAppProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.typescript.TypeScriptAppProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.typescript.TypeScriptAppProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.typescript.TypeScriptAppProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptAppProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.typescript.TypeScriptAppProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.typescript.TypeScriptAppProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.typescript.TypeScriptAppProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen.typescript.TypeScriptAppProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.typescript.TypeScriptAppProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.typescript.TypeScriptAppProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.typescript.TypeScriptAppProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptAppProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.typescript.TypeScriptAppProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptAppProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.typescript.TypeScriptAppProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.typescript.TypeScriptAppProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.typescript.TypeScriptAppProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.typescript.TypeScriptAppProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.typescript.TypeScriptAppProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.typescript.TypeScriptAppProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.typescript.TypeScriptAppProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.typescript.TypeScriptAppProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.typescript.TypeScriptAppProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.typescript.TypeScriptAppProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.typescript.TypeScriptAppProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.typescript.TypeScriptAppProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.typescript.TypeScriptAppProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptAppProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.typescript.TypeScriptAppProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptAppProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.typescript.TypeScriptAppProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptAppProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.typescript.TypeScriptAppProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptAppProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.typescript.TypeScriptAppProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.typescript.TypeScriptAppProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.typescript.TypeScriptAppProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptAppProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.typescript.TypeScriptAppProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptAppProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.typescript.TypeScriptAppProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptAppProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.typescript.TypeScriptAppProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptAppProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.typescript.TypeScriptAppProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.typescript.TypeScriptAppProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.typescript.TypeScriptAppProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.typescript.TypeScriptAppProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.typescript.TypeScriptAppProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptAppProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.typescript.TypeScriptAppProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.typescript.TypeScriptAppProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.typescript.TypeScriptAppProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptAppProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.typescript.TypeScriptAppProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.typescript.TypeScriptAppProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.typescript.TypeScriptAppProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.typescript.TypeScriptAppProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.typescript.TypeScriptAppProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.typescript.TypeScriptAppProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptAppProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.typescript.TypeScriptAppProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.typescript.TypeScriptAppProject.isConstruct"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptAppProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptAppProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.typescript.TypeScriptAppProject.isProject"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptAppProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptAppProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.typescript.TypeScriptAppProject.of"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptAppProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.typescript.TypeScriptAppProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.typescript.TypeScriptAppProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.typescript.TypeScriptAppProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.typescript.TypeScriptAppProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.typescript.TypeScriptAppProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.typescript.TypeScriptAppProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptAppProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.typescript.TypeScriptAppProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.typescript.TypeScriptAppProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.typescript.TypeScriptAppProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.typescript.TypeScriptAppProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.typescript.TypeScriptAppProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptAppProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.typescript.TypeScriptAppProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.typescript.TypeScriptAppProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.typescript.TypeScriptAppProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.typescript.TypeScriptAppProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.typescript.TypeScriptAppProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.typescript.TypeScriptAppProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.typescript.TypeScriptAppProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.typescript.TypeScriptAppProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.typescript.TypeScriptAppProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.typescript.TypeScriptAppProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.typescript.TypeScriptAppProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.typescript.TypeScriptAppProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.typescript.TypeScriptAppProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.typescript.TypeScriptAppProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.typescript.TypeScriptAppProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.typescript.TypeScriptAppProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.typescript.TypeScriptAppProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.typescript.TypeScriptAppProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.typescript.TypeScriptAppProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.typescript.TypeScriptAppProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.typescript.TypeScriptAppProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.typescript.TypeScriptAppProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.typescript.TypeScriptAppProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.typescript.TypeScriptAppProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.typescript.TypeScriptAppProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.typescript.TypeScriptAppProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.typescript.TypeScriptAppProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.typescript.TypeScriptAppProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.typescript.TypeScriptAppProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.typescript.TypeScriptAppProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.typescript.TypeScriptAppProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.typescript.TypeScriptAppProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.typescript.TypeScriptAppProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.typescript.TypeScriptAppProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.typescript.TypeScriptAppProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.typescript.TypeScriptAppProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.typescript.TypeScriptAppProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.typescript.TypeScriptAppProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.typescript.TypeScriptAppProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.typescript.TypeScriptAppProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.typescript.TypeScriptAppProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.typescript.TypeScriptAppProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.typescript.TypeScriptAppProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.typescript.TypeScriptAppProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.typescript.TypeScriptAppProject.property.tsconfigDev"></a>

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

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.typescript.TypeScriptAppProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.typescript.TypeScriptAppProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.typescript.TypeScriptAppProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TypeScriptAppProject.property.tsconfig"></a>

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

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.typescript.TypeScriptAppProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.typescript.TypeScriptAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.typescript.TypeScriptAppProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.typescript.TypeScriptAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### TypeScriptLibraryProject <a name="TypeScriptLibraryProject" id="projen.typescript.TypeScriptLibraryProject"></a>

#### Initializers <a name="Initializers" id="projen.typescript.TypeScriptLibraryProject.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.TypeScriptLibraryProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.typescript.TypeScriptLibraryProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### ~~`toString`~~ <a name="toString" id="projen.typescript.TypeScriptLibraryProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`addExcludeFromCleanup`~~ <a name="addExcludeFromCleanup" id="projen.typescript.TypeScriptLibraryProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.typescript.TypeScriptLibraryProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### ~~`addGitIgnore`~~ <a name="addGitIgnore" id="projen.typescript.TypeScriptLibraryProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptLibraryProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### ~~`addPackageIgnore`~~ <a name="addPackageIgnore" id="projen.typescript.TypeScriptLibraryProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptLibraryProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### ~~`addTask`~~ <a name="addTask" id="projen.typescript.TypeScriptLibraryProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.typescript.TypeScriptLibraryProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.typescript.TypeScriptLibraryProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.typescript.TypeScriptLibraryProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### ~~`annotateGenerated`~~ <a name="annotateGenerated" id="projen.typescript.TypeScriptLibraryProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.typescript.TypeScriptLibraryProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### ~~`postSynthesize`~~ <a name="postSynthesize" id="projen.typescript.TypeScriptLibraryProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### ~~`preSynthesize`~~ <a name="preSynthesize" id="projen.typescript.TypeScriptLibraryProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### ~~`removeTask`~~ <a name="removeTask" id="projen.typescript.TypeScriptLibraryProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### ~~`runTaskCommand`~~ <a name="runTaskCommand" id="projen.typescript.TypeScriptLibraryProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.typescript.TypeScriptLibraryProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### ~~`synth`~~ <a name="synth" id="projen.typescript.TypeScriptLibraryProject.synth"></a>

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

##### ~~`tryFindFile`~~ <a name="tryFindFile" id="projen.typescript.TypeScriptLibraryProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptLibraryProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.typescript.TypeScriptLibraryProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptLibraryProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryFindObjectFile`~~ <a name="tryFindObjectFile" id="projen.typescript.TypeScriptLibraryProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptLibraryProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### ~~`tryRemoveFile`~~ <a name="tryRemoveFile" id="projen.typescript.TypeScriptLibraryProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptLibraryProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### ~~`addBins`~~ <a name="addBins" id="projen.typescript.TypeScriptLibraryProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.typescript.TypeScriptLibraryProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### ~~`addBundledDeps`~~ <a name="addBundledDeps" id="projen.typescript.TypeScriptLibraryProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.typescript.TypeScriptLibraryProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptLibraryProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`addDeps`~~ <a name="addDeps" id="projen.typescript.TypeScriptLibraryProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addDevDeps`~~ <a name="addDevDeps" id="projen.typescript.TypeScriptLibraryProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addFields`~~ <a name="addFields" id="projen.typescript.TypeScriptLibraryProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.typescript.TypeScriptLibraryProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### ~~`addKeywords`~~ <a name="addKeywords" id="projen.typescript.TypeScriptLibraryProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.typescript.TypeScriptLibraryProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### ~~`addPeerDeps`~~ <a name="addPeerDeps" id="projen.typescript.TypeScriptLibraryProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addScripts`~~ <a name="addScripts" id="projen.typescript.TypeScriptLibraryProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.typescript.TypeScriptLibraryProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.typescript.TypeScriptLibraryProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptLibraryProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.typescript.TypeScriptLibraryProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### ~~`removeScript`~~ <a name="removeScript" id="projen.typescript.TypeScriptLibraryProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### ~~`renderWorkflowSetup`~~ <a name="renderWorkflowSetup" id="projen.typescript.TypeScriptLibraryProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.typescript.TypeScriptLibraryProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### ~~`setScript`~~ <a name="setScript" id="projen.typescript.TypeScriptLibraryProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.typescript.TypeScriptLibraryProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen.typescript.TypeScriptLibraryProject.isConstruct"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptLibraryProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptLibraryProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### ~~`isProject`~~ <a name="isProject" id="projen.typescript.TypeScriptLibraryProject.isProject"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptLibraryProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptLibraryProject.isProject.parameter.x"></a>

- *Type:* any

---

##### ~~`of`~~ <a name="of" id="projen.typescript.TypeScriptLibraryProject.of"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptLibraryProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.typescript.TypeScriptLibraryProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="projen.typescript.TypeScriptLibraryProject.property.node"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`buildTask`~~<sup>Required</sup> <a name="buildTask" id="projen.typescript.TypeScriptLibraryProject.property.buildTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### ~~`commitGenerated`~~<sup>Required</sup> <a name="commitGenerated" id="projen.typescript.TypeScriptLibraryProject.property.commitGenerated"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### ~~`compileTask`~~<sup>Required</sup> <a name="compileTask" id="projen.typescript.TypeScriptLibraryProject.property.compileTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`components`~~<sup>Required</sup> <a name="components" id="projen.typescript.TypeScriptLibraryProject.property.components"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### ~~`deps`~~<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProject.property.deps"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### ~~`ejected`~~<sup>Required</sup> <a name="ejected" id="projen.typescript.TypeScriptLibraryProject.property.ejected"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### ~~`files`~~<sup>Required</sup> <a name="files" id="projen.typescript.TypeScriptLibraryProject.property.files"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### ~~`gitattributes`~~<sup>Required</sup> <a name="gitattributes" id="projen.typescript.TypeScriptLibraryProject.property.gitattributes"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### ~~`gitignore`~~<sup>Required</sup> <a name="gitignore" id="projen.typescript.TypeScriptLibraryProject.property.gitignore"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### ~~`logger`~~<sup>Required</sup> <a name="logger" id="projen.typescript.TypeScriptLibraryProject.property.logger"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProject.property.name"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### ~~`outdir`~~<sup>Required</sup> <a name="outdir" id="projen.typescript.TypeScriptLibraryProject.property.outdir"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### ~~`packageTask`~~<sup>Required</sup> <a name="packageTask" id="projen.typescript.TypeScriptLibraryProject.property.packageTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### ~~`postCompileTask`~~<sup>Required</sup> <a name="postCompileTask" id="projen.typescript.TypeScriptLibraryProject.property.postCompileTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`preCompileTask`~~<sup>Required</sup> <a name="preCompileTask" id="projen.typescript.TypeScriptLibraryProject.property.preCompileTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### ~~`projectBuild`~~<sup>Required</sup> <a name="projectBuild" id="projen.typescript.TypeScriptLibraryProject.property.projectBuild"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### ~~`projenCommand`~~<sup>Required</sup> <a name="projenCommand" id="projen.typescript.TypeScriptLibraryProject.property.projenCommand"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### ~~`root`~~<sup>Required</sup> <a name="root" id="projen.typescript.TypeScriptLibraryProject.property.root"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### ~~`subprojects`~~<sup>Required</sup> <a name="subprojects" id="projen.typescript.TypeScriptLibraryProject.property.subprojects"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### ~~`tasks`~~<sup>Required</sup> <a name="tasks" id="projen.typescript.TypeScriptLibraryProject.property.tasks"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### ~~`testTask`~~<sup>Required</sup> <a name="testTask" id="projen.typescript.TypeScriptLibraryProject.property.testTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### ~~`defaultTask`~~<sup>Optional</sup> <a name="defaultTask" id="projen.typescript.TypeScriptLibraryProject.property.defaultTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="projen.typescript.TypeScriptLibraryProject.property.initProject"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### ~~`parent`~~<sup>Optional</sup> <a name="parent" id="projen.typescript.TypeScriptLibraryProject.property.parent"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### ~~`projectType`~~<sup>Required</sup> <a name="projectType" id="projen.typescript.TypeScriptLibraryProject.property.projectType"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### ~~`autoApprove`~~<sup>Optional</sup> <a name="autoApprove" id="projen.typescript.TypeScriptLibraryProject.property.autoApprove"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### ~~`devContainer`~~<sup>Optional</sup> <a name="devContainer" id="projen.typescript.TypeScriptLibraryProject.property.devContainer"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### ~~`github`~~<sup>Optional</sup> <a name="github" id="projen.typescript.TypeScriptLibraryProject.property.github"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### ~~`gitpod`~~<sup>Optional</sup> <a name="gitpod" id="projen.typescript.TypeScriptLibraryProject.property.gitpod"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### ~~`vscode`~~<sup>Optional</sup> <a name="vscode" id="projen.typescript.TypeScriptLibraryProject.property.vscode"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.typescript.TypeScriptLibraryProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### ~~`artifactsDirectory`~~<sup>Required</sup> <a name="artifactsDirectory" id="projen.typescript.TypeScriptLibraryProject.property.artifactsDirectory"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### ~~`artifactsJavascriptDirectory`~~<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.typescript.TypeScriptLibraryProject.property.artifactsJavascriptDirectory"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### ~~`bundler`~~<sup>Required</sup> <a name="bundler" id="projen.typescript.TypeScriptLibraryProject.property.bundler"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.typescript.TypeScriptLibraryProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.typescript.TypeScriptLibraryProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### ~~`npmrc`~~<sup>Required</sup> <a name="npmrc" id="projen.typescript.TypeScriptLibraryProject.property.npmrc"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### ~~`package`~~<sup>Required</sup> <a name="package" id="projen.typescript.TypeScriptLibraryProject.property.package"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.typescript.TypeScriptLibraryProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### ~~`runScriptCommand`~~<sup>Required</sup> <a name="runScriptCommand" id="projen.typescript.TypeScriptLibraryProject.property.runScriptCommand"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### ~~`autoMerge`~~<sup>Optional</sup> <a name="autoMerge" id="projen.typescript.TypeScriptLibraryProject.property.autoMerge"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### ~~`buildWorkflow`~~<sup>Optional</sup> <a name="buildWorkflow" id="projen.typescript.TypeScriptLibraryProject.property.buildWorkflow"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### ~~`buildWorkflowJobId`~~<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.typescript.TypeScriptLibraryProject.property.buildWorkflowJobId"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### ~~`jest`~~<sup>Optional</sup> <a name="jest" id="projen.typescript.TypeScriptLibraryProject.property.jest"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### ~~`maxNodeVersion`~~<sup>Optional</sup> <a name="maxNodeVersion" id="projen.typescript.TypeScriptLibraryProject.property.maxNodeVersion"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### ~~`minNodeVersion`~~<sup>Optional</sup> <a name="minNodeVersion" id="projen.typescript.TypeScriptLibraryProject.property.minNodeVersion"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.typescript.TypeScriptLibraryProject.property.npmignore"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### ~~`prettier`~~<sup>Optional</sup> <a name="prettier" id="projen.typescript.TypeScriptLibraryProject.property.prettier"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.typescript.TypeScriptLibraryProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### ~~`release`~~<sup>Optional</sup> <a name="release" id="projen.typescript.TypeScriptLibraryProject.property.release"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### ~~`upgradeWorkflow`~~<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.typescript.TypeScriptLibraryProject.property.upgradeWorkflow"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### ~~`docsDirectory`~~<sup>Required</sup> <a name="docsDirectory" id="projen.typescript.TypeScriptLibraryProject.property.docsDirectory"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### ~~`libdir`~~<sup>Required</sup> <a name="libdir" id="projen.typescript.TypeScriptLibraryProject.property.libdir"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### ~~`srcdir`~~<sup>Required</sup> <a name="srcdir" id="projen.typescript.TypeScriptLibraryProject.property.srcdir"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### ~~`testdir`~~<sup>Required</sup> <a name="testdir" id="projen.typescript.TypeScriptLibraryProject.property.testdir"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### ~~`tsconfigDev`~~<sup>Required</sup> <a name="tsconfigDev" id="projen.typescript.TypeScriptLibraryProject.property.tsconfigDev"></a>

- *Deprecated:* use `TypeScriptProject`

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

##### ~~`watchTask`~~<sup>Required</sup> <a name="watchTask" id="projen.typescript.TypeScriptLibraryProject.property.watchTask"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### ~~`docgen`~~<sup>Optional</sup> <a name="docgen" id="projen.typescript.TypeScriptLibraryProject.property.docgen"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### ~~`eslint`~~<sup>Optional</sup> <a name="eslint" id="projen.typescript.TypeScriptLibraryProject.property.eslint"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### ~~`tsconfig`~~<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TypeScriptLibraryProject.property.tsconfig"></a>

- *Deprecated:* use `TypeScriptProject`

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

##### ~~`tsconfigEslint`~~<sup>Optional</sup> <a name="tsconfigEslint" id="projen.typescript.TypeScriptLibraryProject.property.tsconfigEslint"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.typescript.TypeScriptLibraryProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### ~~`DEFAULT_TASK`~~<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.typescript.TypeScriptLibraryProject.property.DEFAULT_TASK"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### ~~`DEFAULT_TS_JEST_TRANFORM_PATTERN`~~<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.typescript.TypeScriptLibraryProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

- *Deprecated:* use `TypeScriptProject`

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### TypeScriptProject <a name="TypeScriptProject" id="projen.typescript.TypeScriptProject"></a>

TypeScript project.

#### Initializers <a name="Initializers" id="projen.typescript.TypeScriptProject.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.TypeScriptProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.typescript.TypeScriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.typescript.TypeScriptProjectOptions">TypeScriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.typescript.TypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.typescript.TypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.typescript.TypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.typescript.TypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.typescript.TypeScriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.typescript.TypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.typescript.TypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.typescript.TypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.typescript.TypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.typescript.TypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.typescript.TypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.typescript.TypeScriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.typescript.TypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.typescript.TypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.typescript.TypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.typescript.TypeScriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.typescript.TypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.typescript.TypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.typescript.TypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.typescript.TypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.typescript.TypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.typescript.TypeScriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.typescript.TypeScriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.typescript.TypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.typescript.TypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.typescript.TypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen.typescript.TypeScriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.typescript.TypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.typescript.TypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.typescript.TypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.typescript.TypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.typescript.TypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.typescript.TypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.typescript.TypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.typescript.TypeScriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.typescript.TypeScriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.typescript.TypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.typescript.TypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.typescript.TypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.typescript.TypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.typescript.TypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.typescript.TypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.typescript.TypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.typescript.TypeScriptProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.typescript.TypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.typescript.TypeScriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.typescript.TypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.typescript.TypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.typescript.TypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.typescript.TypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.typescript.TypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.typescript.TypeScriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.typescript.TypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.typescript.TypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.typescript.TypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.typescript.TypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.typescript.TypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.typescript.TypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.typescript.TypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.typescript.TypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.typescript.TypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.typescript.TypeScriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.typescript.TypeScriptProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.typescript.TypeScriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.typescript.TypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.typescript.TypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.typescript.TypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.typescript.TypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.typescript.TypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TypeScriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.typescript.TypeScriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.typescript.TypeScriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.typescript.TypeScriptProject.isConstruct"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.typescript.TypeScriptProject.isProject"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.typescript.TypeScriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.typescript.TypeScriptProject.of"></a>

```typescript
import { typescript } from 'projen'

typescript.TypeScriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.typescript.TypeScriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.typescript.TypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.typescript.TypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.typescript.TypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.typescript.TypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.typescript.TypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.typescript.TypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.typescript.TypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.typescript.TypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.typescript.TypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.typescript.TypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.typescript.TypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.typescript.TypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.typescript.TypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.typescript.TypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.typescript.TypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.typescript.TypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.typescript.TypeScriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.typescript.TypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.typescript.TypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.typescript.TypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.typescript.TypeScriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.typescript.TypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.typescript.TypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.typescript.TypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.typescript.TypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.typescript.TypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.typescript.TypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.typescript.TypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.typescript.TypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.typescript.TypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.typescript.TypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.typescript.TypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.typescript.TypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.typescript.TypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.typescript.TypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.typescript.TypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.typescript.TypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.typescript.TypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.typescript.TypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.typescript.TypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.typescript.TypeScriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.typescript.TypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.typescript.TypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.typescript.TypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.typescript.TypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.typescript.TypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.typescript.TypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.typescript.TypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.typescript.TypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.typescript.TypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.typescript.TypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.typescript.TypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.typescript.TypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.typescript.TypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.typescript.TypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.typescript.TypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.typescript.TypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.typescript.TypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.typescript.TypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.typescript.TypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.typescript.TypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.typescript.TypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.typescript.TypeScriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.typescript.TypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.typescript.TypeScriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.typescript.TypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.typescript.TypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.typescript.TypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.typescript.TypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.typescript.TypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.typescript.TypeScriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.typescript.TypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.typescript.TypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.typescript.TypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.typescript.TypeScriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.typescript.TypeScriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.typescript.TypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.typescript.TypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.typescript.TypeScriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.typescript.TypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.typescript.TypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.typescript.TypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.typescript.TypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.typescript.TypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.typescript.TypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.typescript.TypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.typescript.TypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.typescript.TypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.typescript.TypeScriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.typescript.TypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.typescript.TypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.typescript.TypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.typescript.TypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.typescript.TypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.typescript.TypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.typescript.TypeScriptProject.property.tsconfigDev"></a>

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

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.typescript.TypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.typescript.TypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.typescript.TypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TypeScriptProject.property.tsconfig"></a>

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

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.typescript.TypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.typescript.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.typescript.TypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.typescript.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjenrcOptions <a name="ProjenrcOptions" id="projen.typescript.ProjenrcOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.ProjenrcOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const projenrcOptions: typescript.ProjenrcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.ProjenrcOptions.property.filename">filename</a></code> | <code>string</code> | The name of the projenrc file. |
| <code><a href="#projen.typescript.ProjenrcOptions.property.projenCodeDir">projenCodeDir</a></code> | <code>string</code> | A directory tree that may contain *.ts files that can be referenced from your projenrc typescript file. |
| <code><a href="#projen.typescript.ProjenrcOptions.property.swc">swc</a></code> | <code>boolean</code> | Whether to use `SWC` for ts-node. |

---

##### `filename`<sup>Optional</sup> <a name="filename" id="projen.typescript.ProjenrcOptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* ".projenrc.ts"

The name of the projenrc file.

---

##### `projenCodeDir`<sup>Optional</sup> <a name="projenCodeDir" id="projen.typescript.ProjenrcOptions.property.projenCodeDir"></a>

```typescript
public readonly projenCodeDir: string;
```

- *Type:* string
- *Default:* "projenrc"

A directory tree that may contain *.ts files that can be referenced from your projenrc typescript file.

---

##### `swc`<sup>Optional</sup> <a name="swc" id="projen.typescript.ProjenrcOptions.property.swc"></a>

```typescript
public readonly swc: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to use `SWC` for ts-node.

---

### ProjenrcTsOptions <a name="ProjenrcTsOptions" id="projen.typescript.ProjenrcTsOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.ProjenrcTsOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const projenrcTsOptions: typescript.ProjenrcTsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.ProjenrcTsOptions.property.filename">filename</a></code> | <code>string</code> | The name of the projenrc file. |
| <code><a href="#projen.typescript.ProjenrcTsOptions.property.projenCodeDir">projenCodeDir</a></code> | <code>string</code> | A directory tree that may contain *.ts files that can be referenced from your projenrc typescript file. |
| <code><a href="#projen.typescript.ProjenrcTsOptions.property.tsconfigFileName">tsconfigFileName</a></code> | <code>string</code> | The name of the tsconfig file that will be used by ts-node when compiling projen source files. |

---

##### `filename`<sup>Optional</sup> <a name="filename" id="projen.typescript.ProjenrcTsOptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* ".projenrc.ts"

The name of the projenrc file.

---

##### `projenCodeDir`<sup>Optional</sup> <a name="projenCodeDir" id="projen.typescript.ProjenrcTsOptions.property.projenCodeDir"></a>

```typescript
public readonly projenCodeDir: string;
```

- *Type:* string
- *Default:* "projenrc"

A directory tree that may contain *.ts files that can be referenced from your projenrc typescript file.

---

##### `tsconfigFileName`<sup>Optional</sup> <a name="tsconfigFileName" id="projen.typescript.ProjenrcTsOptions.property.tsconfigFileName"></a>

```typescript
public readonly tsconfigFileName: string;
```

- *Type:* string
- *Default:* "tsconfig.projen.json"

The name of the tsconfig file that will be used by ts-node when compiling projen source files.

---

### TsJestOptions <a name="TsJestOptions" id="projen.typescript.TsJestOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.TsJestOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const tsJestOptions: typescript.TsJestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TsJestOptions.property.transformOptions">transformOptions</a></code> | <code><a href="#projen.typescript.TsJestTransformOptions">TsJestTransformOptions</a></code> | Override the default ts-jest transformer configuration. |
| <code><a href="#projen.typescript.TsJestOptions.property.transformPattern">transformPattern</a></code> | <code>string</code> | Which files should ts-jest act upon. |

---

##### `transformOptions`<sup>Optional</sup> <a name="transformOptions" id="projen.typescript.TsJestOptions.property.transformOptions"></a>

```typescript
public readonly transformOptions: TsJestTransformOptions;
```

- *Type:* <a href="#projen.typescript.TsJestTransformOptions">TsJestTransformOptions</a>

Override the default ts-jest transformer configuration.

---

##### `transformPattern`<sup>Optional</sup> <a name="transformPattern" id="projen.typescript.TsJestOptions.property.transformPattern"></a>

```typescript
public readonly transformPattern: string;
```

- *Type:* string
- *Default:* "^.+\\.[t]sx?$"

Which files should ts-jest act upon.

> [https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object)

---

### TsJestTransformOptions <a name="TsJestTransformOptions" id="projen.typescript.TsJestTransformOptions"></a>

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options](https://kulshekhar.github.io/ts-jest/docs/getting-started/options)

#### Initializer <a name="Initializer" id="projen.typescript.TsJestTransformOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const tsJestTransformOptions: typescript.TsJestTransformOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.astTransformers">astTransformers</a></code> | <code>{[ key: string ]: any}</code> | Custom TypeScript AST transformers. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.babelConfig">babelConfig</a></code> | <code><a href="#projen.typescript.TsJestBabelConfig">TsJestBabelConfig</a></code> | Babel(Jest) related configuration. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.compiler">compiler</a></code> | <code>string</code> | TypeScript module to use as compiler. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.diagnostics">diagnostics</a></code> | <code><a href="#projen.typescript.TsJestDiagnostics">TsJestDiagnostics</a></code> | Diagnostics related configuration. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.isolatedModules">isolatedModules</a></code> | <code>boolean</code> | Run ts-jest tests with this TSConfig isolatedModules setting. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.stringifyContentPathRegex">stringifyContentPathRegex</a></code> | <code>string</code> | Files which will become modules returning self content. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.tsconfig">tsconfig</a></code> | <code><a href="#projen.typescript.TsJestTsconfig">TsJestTsconfig</a></code> | TypeScript compiler related configuration. |
| <code><a href="#projen.typescript.TsJestTransformOptions.property.useESM">useESM</a></code> | <code>boolean</code> | Enable ESM support. |

---

##### `astTransformers`<sup>Optional</sup> <a name="astTransformers" id="projen.typescript.TsJestTransformOptions.property.astTransformers"></a>

```typescript
public readonly astTransformers: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* auto

Custom TypeScript AST transformers.

---

##### `babelConfig`<sup>Optional</sup> <a name="babelConfig" id="projen.typescript.TsJestTransformOptions.property.babelConfig"></a>

```typescript
public readonly babelConfig: TsJestBabelConfig;
```

- *Type:* <a href="#projen.typescript.TsJestBabelConfig">TsJestBabelConfig</a>
- *Default:* TsJestBabelConfig.disabled()

Babel(Jest) related configuration.

---

##### `compiler`<sup>Optional</sup> <a name="compiler" id="projen.typescript.TsJestTransformOptions.property.compiler"></a>

```typescript
public readonly compiler: string;
```

- *Type:* string
- *Default:* "typescript"

TypeScript module to use as compiler.

---

##### `diagnostics`<sup>Optional</sup> <a name="diagnostics" id="projen.typescript.TsJestTransformOptions.property.diagnostics"></a>

```typescript
public readonly diagnostics: TsJestDiagnostics;
```

- *Type:* <a href="#projen.typescript.TsJestDiagnostics">TsJestDiagnostics</a>
- *Default:* TsJestDiagnostics.all()

Diagnostics related configuration.

---

##### `isolatedModules`<sup>Optional</sup> <a name="isolatedModules" id="projen.typescript.TsJestTransformOptions.property.isolatedModules"></a>

```typescript
public readonly isolatedModules: boolean;
```

- *Type:* boolean
- *Default:* false

Run ts-jest tests with this TSConfig isolatedModules setting.

You'll lose type-checking ability and some features such as const enum, but in the case you plan on using Jest with the cache disabled (jest --no-cache), your tests will then run much faster.

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules)

---

##### `stringifyContentPathRegex`<sup>Optional</sup> <a name="stringifyContentPathRegex" id="projen.typescript.TsJestTransformOptions.property.stringifyContentPathRegex"></a>

```typescript
public readonly stringifyContentPathRegex: string;
```

- *Type:* string
- *Default:* disabled

Files which will become modules returning self content.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TsJestTransformOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TsJestTsconfig;
```

- *Type:* <a href="#projen.typescript.TsJestTsconfig">TsJestTsconfig</a>
- *Default:* Your project's `tsconfigDev` file.

TypeScript compiler related configuration.

---

##### `useESM`<sup>Optional</sup> <a name="useESM" id="projen.typescript.TsJestTransformOptions.property.useESM"></a>

```typescript
public readonly useESM: boolean;
```

- *Type:* boolean
- *Default:* auto

Enable ESM support.

---

### TypeScriptLibraryProjectOptions <a name="TypeScriptLibraryProjectOptions" id="projen.typescript.TypeScriptLibraryProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.TypeScriptLibraryProjectOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const typeScriptLibraryProjectOptions: typescript.TypeScriptLibraryProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code><a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a></code> | Options for .projenrc.ts. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfig">tsconfig</a></code> | <code><a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a></code> | Custom TSConfig. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code><a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a></code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code><a href="#projen.typescript.TsJestOptions">TsJestOptions</a></code> | Options for ts-jest. |
| <code><a href="#projen.typescript.TypeScriptLibraryProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |

---

##### ~~`name`~~<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptLibraryProjectOptions.property.name"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### ~~`commitGenerated`~~<sup>Optional</sup> <a name="commitGenerated" id="projen.typescript.TypeScriptLibraryProjectOptions.property.commitGenerated"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### ~~`gitIgnoreOptions`~~<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.gitIgnoreOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### ~~`gitOptions`~~<sup>Optional</sup> <a name="gitOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.gitOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### ~~`logging`~~<sup>Optional</sup> <a name="logging" id="projen.typescript.TypeScriptLibraryProjectOptions.property.logging"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### ~~`outdir`~~<sup>Optional</sup> <a name="outdir" id="projen.typescript.TypeScriptLibraryProjectOptions.property.outdir"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`parent`~~<sup>Optional</sup> <a name="parent" id="projen.typescript.TypeScriptLibraryProjectOptions.property.parent"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### ~~`projenCommand`~~<sup>Optional</sup> <a name="projenCommand" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenCommand"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### ~~`projenrcJson`~~<sup>Optional</sup> <a name="projenrcJson" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJson"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### ~~`projenrcJsonOptions`~~<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJsonOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### ~~`renovatebot`~~<sup>Optional</sup> <a name="renovatebot" id="projen.typescript.TypeScriptLibraryProjectOptions.property.renovatebot"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### ~~`renovatebotOptions`~~<sup>Optional</sup> <a name="renovatebotOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.renovatebotOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### ~~`autoApproveOptions`~~<sup>Optional</sup> <a name="autoApproveOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.autoApproveOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### ~~`autoMerge`~~<sup>Optional</sup> <a name="autoMerge" id="projen.typescript.TypeScriptLibraryProjectOptions.property.autoMerge"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### ~~`autoMergeOptions`~~<sup>Optional</sup> <a name="autoMergeOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.autoMergeOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### ~~`clobber`~~<sup>Optional</sup> <a name="clobber" id="projen.typescript.TypeScriptLibraryProjectOptions.property.clobber"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### ~~`devContainer`~~<sup>Optional</sup> <a name="devContainer" id="projen.typescript.TypeScriptLibraryProjectOptions.property.devContainer"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### ~~`github`~~<sup>Optional</sup> <a name="github" id="projen.typescript.TypeScriptLibraryProjectOptions.property.github"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### ~~`githubOptions`~~<sup>Optional</sup> <a name="githubOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.githubOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### ~~`gitpod`~~<sup>Optional</sup> <a name="gitpod" id="projen.typescript.TypeScriptLibraryProjectOptions.property.gitpod"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.typescript.TypeScriptLibraryProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### ~~`projenCredentials`~~<sup>Optional</sup> <a name="projenCredentials" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenCredentials"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenTokenSecret"></a>

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

##### ~~`readme`~~<sup>Optional</sup> <a name="readme" id="projen.typescript.TypeScriptLibraryProjectOptions.property.readme"></a>

- *Deprecated:* use TypeScriptProjectOptions

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


##### ~~`stale`~~<sup>Optional</sup> <a name="stale" id="projen.typescript.TypeScriptLibraryProjectOptions.property.stale"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### ~~`staleOptions`~~<sup>Optional</sup> <a name="staleOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.staleOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### ~~`vscode`~~<sup>Optional</sup> <a name="vscode" id="projen.typescript.TypeScriptLibraryProjectOptions.property.vscode"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### ~~`allowLibraryDependencies`~~<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.typescript.TypeScriptLibraryProjectOptions.property.allowLibraryDependencies"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### ~~`authorEmail`~~<sup>Optional</sup> <a name="authorEmail" id="projen.typescript.TypeScriptLibraryProjectOptions.property.authorEmail"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### ~~`authorName`~~<sup>Optional</sup> <a name="authorName" id="projen.typescript.TypeScriptLibraryProjectOptions.property.authorName"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### ~~`authorOrganization`~~<sup>Optional</sup> <a name="authorOrganization" id="projen.typescript.TypeScriptLibraryProjectOptions.property.authorOrganization"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### ~~`authorUrl`~~<sup>Optional</sup> <a name="authorUrl" id="projen.typescript.TypeScriptLibraryProjectOptions.property.authorUrl"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### ~~`autoDetectBin`~~<sup>Optional</sup> <a name="autoDetectBin" id="projen.typescript.TypeScriptLibraryProjectOptions.property.autoDetectBin"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### ~~`bin`~~<sup>Optional</sup> <a name="bin" id="projen.typescript.TypeScriptLibraryProjectOptions.property.bin"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### ~~`bugsEmail`~~<sup>Optional</sup> <a name="bugsEmail" id="projen.typescript.TypeScriptLibraryProjectOptions.property.bugsEmail"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### ~~`bugsUrl`~~<sup>Optional</sup> <a name="bugsUrl" id="projen.typescript.TypeScriptLibraryProjectOptions.property.bugsUrl"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### ~~`bundledDeps`~~<sup>Optional</sup> <a name="bundledDeps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.bundledDeps"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`codeArtifactOptions`~~<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.codeArtifactOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### ~~`deps`~~<sup>Optional</sup> <a name="deps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.deps"></a>

- *Deprecated:* use TypeScriptProjectOptions

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


##### ~~`description`~~<sup>Optional</sup> <a name="description" id="projen.typescript.TypeScriptLibraryProjectOptions.property.description"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### ~~`devDeps`~~<sup>Optional</sup> <a name="devDeps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.devDeps"></a>

- *Deprecated:* use TypeScriptProjectOptions

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


##### ~~`entrypoint`~~<sup>Optional</sup> <a name="entrypoint" id="projen.typescript.TypeScriptLibraryProjectOptions.property.entrypoint"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### ~~`homepage`~~<sup>Optional</sup> <a name="homepage" id="projen.typescript.TypeScriptLibraryProjectOptions.property.homepage"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### ~~`keywords`~~<sup>Optional</sup> <a name="keywords" id="projen.typescript.TypeScriptLibraryProjectOptions.property.keywords"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### ~~`license`~~<sup>Optional</sup> <a name="license" id="projen.typescript.TypeScriptLibraryProjectOptions.property.license"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### ~~`licensed`~~<sup>Optional</sup> <a name="licensed" id="projen.typescript.TypeScriptLibraryProjectOptions.property.licensed"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### ~~`maxNodeVersion`~~<sup>Optional</sup> <a name="maxNodeVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.maxNodeVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### ~~`minNodeVersion`~~<sup>Optional</sup> <a name="minNodeVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.minNodeVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### ~~`npmAccess`~~<sup>Optional</sup> <a name="npmAccess" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmAccess"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmProvenance`~~<sup>Optional</sup> <a name="npmProvenance" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmProvenance"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### ~~`npmRegistryUrl`~~<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmRegistryUrl"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### ~~`npmTokenSecret`~~<sup>Optional</sup> <a name="npmTokenSecret" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmTokenSecret"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### ~~`packageManager`~~<sup>Optional</sup> <a name="packageManager" id="projen.typescript.TypeScriptLibraryProjectOptions.property.packageManager"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### ~~`packageName`~~<sup>Optional</sup> <a name="packageName" id="projen.typescript.TypeScriptLibraryProjectOptions.property.packageName"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### ~~`peerDependencyOptions`~~<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.peerDependencyOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### ~~`peerDeps`~~<sup>Optional</sup> <a name="peerDeps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.peerDeps"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`pnpmVersion`~~<sup>Optional</sup> <a name="pnpmVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.pnpmVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### ~~`repository`~~<sup>Optional</sup> <a name="repository" id="projen.typescript.TypeScriptLibraryProjectOptions.property.repository"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### ~~`repositoryDirectory`~~<sup>Optional</sup> <a name="repositoryDirectory" id="projen.typescript.TypeScriptLibraryProjectOptions.property.repositoryDirectory"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### ~~`scopedPackagesOptions`~~<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.scopedPackagesOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.typescript.TypeScriptLibraryProjectOptions.property.scripts"></a>

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

##### ~~`stability`~~<sup>Optional</sup> <a name="stability" id="projen.typescript.TypeScriptLibraryProjectOptions.property.stability"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### ~~`yarnBerryOptions`~~<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.yarnBerryOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### ~~`jsiiReleaseVersion`~~<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.jsiiReleaseVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### ~~`majorVersion`~~<sup>Optional</sup> <a name="majorVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.majorVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### ~~`minMajorVersion`~~<sup>Optional</sup> <a name="minMajorVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.minMajorVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`npmDistTag`~~<sup>Optional</sup> <a name="npmDistTag" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmDistTag"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### ~~`postBuildSteps`~~<sup>Optional</sup> <a name="postBuildSteps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.postBuildSteps"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### ~~`prerelease`~~<sup>Optional</sup> <a name="prerelease" id="projen.typescript.TypeScriptLibraryProjectOptions.property.prerelease"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### ~~`publishDryRun`~~<sup>Optional</sup> <a name="publishDryRun" id="projen.typescript.TypeScriptLibraryProjectOptions.property.publishDryRun"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### ~~`publishTasks`~~<sup>Optional</sup> <a name="publishTasks" id="projen.typescript.TypeScriptLibraryProjectOptions.property.publishTasks"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### ~~`releasableCommits`~~<sup>Optional</sup> <a name="releasableCommits" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releasableCommits"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### ~~`releaseBranches`~~<sup>Optional</sup> <a name="releaseBranches" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseBranches"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### ~~`releaseFailureIssue`~~<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseFailureIssue"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### ~~`releaseFailureIssueLabel`~~<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseFailureIssueLabel"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### ~~`releaseTagPrefix`~~<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseTagPrefix"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`releaseTrigger`~~<sup>Optional</sup> <a name="releaseTrigger" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseTrigger"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### ~~`releaseWorkflowName`~~<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflowName"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### ~~`releaseWorkflowSetupSteps`~~<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflowSetupSteps"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### ~~`versionrcOptions`~~<sup>Optional</sup> <a name="versionrcOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.versionrcOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### ~~`workflowContainerImage`~~<sup>Optional</sup> <a name="workflowContainerImage" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowContainerImage"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### ~~`workflowRunsOn`~~<sup>Optional</sup> <a name="workflowRunsOn" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowRunsOn"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### ~~`workflowRunsOnGroup`~~<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowRunsOnGroup"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### ~~`defaultReleaseBranch`~~<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.typescript.TypeScriptLibraryProjectOptions.property.defaultReleaseBranch"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### ~~`artifactsDirectory`~~<sup>Optional</sup> <a name="artifactsDirectory" id="projen.typescript.TypeScriptLibraryProjectOptions.property.artifactsDirectory"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### ~~`autoApproveUpgrades`~~<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.typescript.TypeScriptLibraryProjectOptions.property.autoApproveUpgrades"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### ~~`buildWorkflow`~~<sup>Optional</sup> <a name="buildWorkflow" id="projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflow"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### ~~`buildWorkflowOptions`~~<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflowOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.typescript.TypeScriptLibraryProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### ~~`bundlerOptions`~~<sup>Optional</sup> <a name="bundlerOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.bundlerOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### ~~`checkLicenses`~~<sup>Optional</sup> <a name="checkLicenses" id="projen.typescript.TypeScriptLibraryProjectOptions.property.checkLicenses"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### ~~`codeCov`~~<sup>Optional</sup> <a name="codeCov" id="projen.typescript.TypeScriptLibraryProjectOptions.property.codeCov"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### ~~`codeCovTokenSecret`~~<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.typescript.TypeScriptLibraryProjectOptions.property.codeCovTokenSecret"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### ~~`copyrightOwner`~~<sup>Optional</sup> <a name="copyrightOwner" id="projen.typescript.TypeScriptLibraryProjectOptions.property.copyrightOwner"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### ~~`copyrightPeriod`~~<sup>Optional</sup> <a name="copyrightPeriod" id="projen.typescript.TypeScriptLibraryProjectOptions.property.copyrightPeriod"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### ~~`dependabot`~~<sup>Optional</sup> <a name="dependabot" id="projen.typescript.TypeScriptLibraryProjectOptions.property.dependabot"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### ~~`dependabotOptions`~~<sup>Optional</sup> <a name="dependabotOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.dependabotOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### ~~`depsUpgrade`~~<sup>Optional</sup> <a name="depsUpgrade" id="projen.typescript.TypeScriptLibraryProjectOptions.property.depsUpgrade"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### ~~`depsUpgradeOptions`~~<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.depsUpgradeOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### ~~`gitignore`~~<sup>Optional</sup> <a name="gitignore" id="projen.typescript.TypeScriptLibraryProjectOptions.property.gitignore"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### ~~`jest`~~<sup>Optional</sup> <a name="jest" id="projen.typescript.TypeScriptLibraryProjectOptions.property.jest"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### ~~`jestOptions`~~<sup>Optional</sup> <a name="jestOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.jestOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.typescript.TypeScriptLibraryProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### ~~`npmignoreEnabled`~~<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmignoreEnabled"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### ~~`npmIgnoreOptions`~~<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.npmIgnoreOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### ~~`package`~~<sup>Optional</sup> <a name="package" id="projen.typescript.TypeScriptLibraryProjectOptions.property.package"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### ~~`prettier`~~<sup>Optional</sup> <a name="prettier" id="projen.typescript.TypeScriptLibraryProjectOptions.property.prettier"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### ~~`prettierOptions`~~<sup>Optional</sup> <a name="prettierOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.prettierOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### ~~`projenDevDependency`~~<sup>Optional</sup> <a name="projenDevDependency" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenDevDependency"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### ~~`projenrcJs`~~<sup>Optional</sup> <a name="projenrcJs" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJs"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### ~~`projenrcJsOptions`~~<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcJsOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenVersion`~~<sup>Optional</sup> <a name="projenVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### ~~`pullRequestTemplate`~~<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.typescript.TypeScriptLibraryProjectOptions.property.pullRequestTemplate"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### ~~`pullRequestTemplateContents`~~<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.typescript.TypeScriptLibraryProjectOptions.property.pullRequestTemplateContents"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### ~~`release`~~<sup>Optional</sup> <a name="release" id="projen.typescript.TypeScriptLibraryProjectOptions.property.release"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### ~~`releaseToNpm`~~<sup>Optional</sup> <a name="releaseToNpm" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseToNpm"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.typescript.TypeScriptLibraryProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### ~~`workflowBootstrapSteps`~~<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowBootstrapSteps"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### ~~`workflowGitIdentity`~~<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowGitIdentity"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### ~~`workflowNodeVersion`~~<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowNodeVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### ~~`workflowPackageCache`~~<sup>Optional</sup> <a name="workflowPackageCache" id="projen.typescript.TypeScriptLibraryProjectOptions.property.workflowPackageCache"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### ~~`disableTsconfig`~~<sup>Optional</sup> <a name="disableTsconfig" id="projen.typescript.TypeScriptLibraryProjectOptions.property.disableTsconfig"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### ~~`disableTsconfigDev`~~<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.typescript.TypeScriptLibraryProjectOptions.property.disableTsconfigDev"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### ~~`docgen`~~<sup>Optional</sup> <a name="docgen" id="projen.typescript.TypeScriptLibraryProjectOptions.property.docgen"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### ~~`docsDirectory`~~<sup>Optional</sup> <a name="docsDirectory" id="projen.typescript.TypeScriptLibraryProjectOptions.property.docsDirectory"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### ~~`entrypointTypes`~~<sup>Optional</sup> <a name="entrypointTypes" id="projen.typescript.TypeScriptLibraryProjectOptions.property.entrypointTypes"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### ~~`eslint`~~<sup>Optional</sup> <a name="eslint" id="projen.typescript.TypeScriptLibraryProjectOptions.property.eslint"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### ~~`eslintOptions`~~<sup>Optional</sup> <a name="eslintOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.eslintOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### ~~`libdir`~~<sup>Optional</sup> <a name="libdir" id="projen.typescript.TypeScriptLibraryProjectOptions.property.libdir"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### ~~`projenrcTs`~~<sup>Optional</sup> <a name="projenrcTs" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcTs"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### ~~`projenrcTsOptions`~~<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.projenrcTsOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* <a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a>

Options for .projenrc.ts.

---

##### ~~`sampleCode`~~<sup>Optional</sup> <a name="sampleCode" id="projen.typescript.TypeScriptLibraryProjectOptions.property.sampleCode"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### ~~`srcdir`~~<sup>Optional</sup> <a name="srcdir" id="projen.typescript.TypeScriptLibraryProjectOptions.property.srcdir"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### ~~`testdir`~~<sup>Optional</sup> <a name="testdir" id="projen.typescript.TypeScriptLibraryProjectOptions.property.testdir"></a>

- *Deprecated:* use TypeScriptProjectOptions

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

##### ~~`tsconfig`~~<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfig"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* <a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a>
- *Default:* default options

Custom TSConfig.

---

##### ~~`tsconfigDev`~~<sup>Optional</sup> <a name="tsconfigDev" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDev"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* <a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a>
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### ~~`tsconfigDevExtendsTsconfig`~~<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevExtendsTsconfig"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### ~~`tsconfigDevFile`~~<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevFile"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### ~~`tsconfigDevPresets`~~<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigDevPresets"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### ~~`tsconfigPresets`~~<sup>Optional</sup> <a name="tsconfigPresets" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsconfigPresets"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### ~~`tsJestOptions`~~<sup>Optional</sup> <a name="tsJestOptions" id="projen.typescript.TypeScriptLibraryProjectOptions.property.tsJestOptions"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* <a href="#projen.typescript.TsJestOptions">TsJestOptions</a>

Options for ts-jest.

---

##### ~~`typescriptVersion`~~<sup>Optional</sup> <a name="typescriptVersion" id="projen.typescript.TypeScriptLibraryProjectOptions.property.typescriptVersion"></a>

- *Deprecated:* use TypeScriptProjectOptions

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

### TypescriptProjectConfigOptions <a name="TypescriptProjectConfigOptions" id="projen.typescript.TypescriptProjectConfigOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.TypescriptProjectConfigOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const typescriptProjectConfigOptions: typescript.TypescriptProjectConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.compilerOptions">compilerOptions</a></code> | <code>projen.javascript.TypeScriptCompilerOptions</code> | Compiler options to use. |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.exclude">exclude</a></code> | <code>string[]</code> | Filters results from the "include" option. |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.extends">extends</a></code> | <code>projen.javascript.TypescriptConfigExtends</code> | Base `tsconfig.json` configuration(s) to inherit from. |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.include">include</a></code> | <code>string[]</code> | Specifies a list of glob patterns that match TypeScript files to be included in compilation. |
| <code><a href="#projen.typescript.TypescriptProjectConfigOptions.property.compilerOptionsMergeMethod">compilerOptionsMergeMethod</a></code> | <code>projen.javascript.TypeScriptSetCompilerOptionsMergeMethod</code> | Method used to merge provided compiler options with the defaults. |

---

##### `compilerOptions`<sup>Optional</sup> <a name="compilerOptions" id="projen.typescript.TypescriptProjectConfigOptions.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* projen.javascript.TypeScriptCompilerOptions

Compiler options to use.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="projen.typescript.TypescriptProjectConfigOptions.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]
- *Default:* node_modules is excluded by default

Filters results from the "include" option.

---

##### `extends`<sup>Optional</sup> <a name="extends" id="projen.typescript.TypescriptProjectConfigOptions.property.extends"></a>

```typescript
public readonly extends: TypescriptConfigExtends;
```

- *Type:* projen.javascript.TypescriptConfigExtends

Base `tsconfig.json` configuration(s) to inherit from.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="projen.typescript.TypescriptProjectConfigOptions.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string
- *Default:* "tsconfig.json"

---

##### `include`<sup>Optional</sup> <a name="include" id="projen.typescript.TypescriptProjectConfigOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]
- *Default:* all .ts files recursively

Specifies a list of glob patterns that match TypeScript files to be included in compilation.

---

##### `compilerOptionsMergeMethod`<sup>Optional</sup> <a name="compilerOptionsMergeMethod" id="projen.typescript.TypescriptProjectConfigOptions.property.compilerOptionsMergeMethod"></a>

```typescript
public readonly compilerOptionsMergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* projen.javascript.TypeScriptSetCompilerOptionsMergeMethod
- *Default:* TypeScriptSetCompilerOptionsMergeMethod.MERGE

Method used to merge provided compiler options with the defaults.

---

### TypeScriptProjectOptions <a name="TypeScriptProjectOptions" id="projen.typescript.TypeScriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen.typescript.TypeScriptProjectOptions.Initializer"></a>

```typescript
import { typescript } from 'projen'

const typeScriptProjectOptions: typescript.TypeScriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code><a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a></code> | Options for .projenrc.ts. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfig">tsconfig</a></code> | <code><a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a></code> | Custom TSConfig. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code><a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a></code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code><a href="#projen.typescript.TsJestOptions">TsJestOptions</a></code> | Options for ts-jest. |
| <code><a href="#projen.typescript.TypeScriptProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.typescript.TypeScriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.typescript.TypeScriptProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.typescript.TypeScriptProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.typescript.TypeScriptProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.typescript.TypeScriptProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.typescript.TypeScriptProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.typescript.TypeScriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.typescript.TypeScriptProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.typescript.TypeScriptProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.typescript.TypeScriptProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.typescript.TypeScriptProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.typescript.TypeScriptProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.typescript.TypeScriptProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.typescript.TypeScriptProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.typescript.TypeScriptProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.typescript.TypeScriptProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.typescript.TypeScriptProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.typescript.TypeScriptProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.typescript.TypeScriptProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.typescript.TypeScriptProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.typescript.TypeScriptProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.typescript.TypeScriptProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.typescript.TypeScriptProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.typescript.TypeScriptProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.typescript.TypeScriptProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.typescript.TypeScriptProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.typescript.TypeScriptProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.typescript.TypeScriptProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.typescript.TypeScriptProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.typescript.TypeScriptProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.typescript.TypeScriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.typescript.TypeScriptProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.typescript.TypeScriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.typescript.TypeScriptProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.typescript.TypeScriptProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.typescript.TypeScriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.typescript.TypeScriptProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.typescript.TypeScriptProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.typescript.TypeScriptProjectOptions.property.bundledDeps"></a>

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.typescript.TypeScriptProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.typescript.TypeScriptProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="projen.typescript.TypeScriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.typescript.TypeScriptProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.typescript.TypeScriptProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.typescript.TypeScriptProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.typescript.TypeScriptProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.typescript.TypeScriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.typescript.TypeScriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.typescript.TypeScriptProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.typescript.TypeScriptProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.typescript.TypeScriptProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.typescript.TypeScriptProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.typescript.TypeScriptProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.typescript.TypeScriptProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.typescript.TypeScriptProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.typescript.TypeScriptProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.typescript.TypeScriptProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.typescript.TypeScriptProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.typescript.TypeScriptProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.typescript.TypeScriptProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.typescript.TypeScriptProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.typescript.TypeScriptProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.typescript.TypeScriptProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.typescript.TypeScriptProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.typescript.TypeScriptProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.typescript.TypeScriptProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.typescript.TypeScriptProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.typescript.TypeScriptProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.typescript.TypeScriptProjectOptions.property.minMajorVersion"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.typescript.TypeScriptProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.typescript.TypeScriptProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.typescript.TypeScriptProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.typescript.TypeScriptProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.typescript.TypeScriptProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.typescript.TypeScriptProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.typescript.TypeScriptProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.typescript.TypeScriptProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.typescript.TypeScriptProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.typescript.TypeScriptProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.typescript.TypeScriptProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.typescript.TypeScriptProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.typescript.TypeScriptProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.typescript.TypeScriptProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.typescript.TypeScriptProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.typescript.TypeScriptProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.typescript.TypeScriptProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.typescript.TypeScriptProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.typescript.TypeScriptProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.typescript.TypeScriptProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.typescript.TypeScriptProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.typescript.TypeScriptProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.typescript.TypeScriptProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.typescript.TypeScriptProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.typescript.TypeScriptProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.typescript.TypeScriptProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.typescript.TypeScriptProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.typescript.TypeScriptProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.typescript.TypeScriptProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.typescript.TypeScriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.typescript.TypeScriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.typescript.TypeScriptProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.typescript.TypeScriptProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.typescript.TypeScriptProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.typescript.TypeScriptProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.typescript.TypeScriptProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.typescript.TypeScriptProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.typescript.TypeScriptProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.typescript.TypeScriptProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.typescript.TypeScriptProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.typescript.TypeScriptProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.typescript.TypeScriptProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.typescript.TypeScriptProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.typescript.TypeScriptProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.typescript.TypeScriptProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.typescript.TypeScriptProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.typescript.TypeScriptProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.typescript.TypeScriptProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.typescript.TypeScriptProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.typescript.TypeScriptProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.typescript.TypeScriptProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.typescript.TypeScriptProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.typescript.TypeScriptProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.typescript.TypeScriptProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.typescript.TypeScriptProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.typescript.TypeScriptProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.typescript.TypeScriptProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.typescript.TypeScriptProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen.typescript.TypeScriptProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.typescript.TypeScriptProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.typescript.TypeScriptProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen.typescript.TypeScriptProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen.typescript.TypeScriptProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.typescript.TypeScriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen.typescript.TypeScriptProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen.typescript.TypeScriptProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.typescript.TypeScriptProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.typescript.TypeScriptProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* <a href="#projen.typescript.ProjenrcOptions">ProjenrcOptions</a>

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen.typescript.TypeScriptProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen.typescript.TypeScriptProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.typescript.TypeScriptProjectOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.typescript.TypeScriptProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* <a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a>
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen.typescript.TypeScriptProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* <a href="#projen.typescript.TypescriptProjectConfigOptions">TypescriptProjectConfigOptions</a>
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevExtendsTsconfig`<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.typescript.TypeScriptProjectOptions.property.tsconfigDevExtendsTsconfig"></a>

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.typescript.TypeScriptProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsconfigDevPresets`<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.typescript.TypeScriptProjectOptions.property.tsconfigDevPresets"></a>

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### `tsconfigPresets`<sup>Optional</sup> <a name="tsconfigPresets" id="projen.typescript.TypeScriptProjectOptions.property.tsconfigPresets"></a>

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen.typescript.TypeScriptProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* <a href="#projen.typescript.TsJestOptions">TsJestOptions</a>

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen.typescript.TypeScriptProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

## Classes <a name="Classes" id="Classes"></a>

### TsJestBabelConfig <a name="TsJestBabelConfig" id="projen.typescript.TsJestBabelConfig"></a>

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig/](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig/)


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TsJestBabelConfig.autoDetectConfig">autoDetectConfig</a></code> | Enables Babel processing. |
| <code><a href="#projen.typescript.TsJestBabelConfig.custom">custom</a></code> | Inline compiler options. |
| <code><a href="#projen.typescript.TsJestBabelConfig.disabled">disabled</a></code> | Disables the use of Babel. |
| <code><a href="#projen.typescript.TsJestBabelConfig.fromFile">fromFile</a></code> | Path to a babelrc file. |

---

##### `autoDetectConfig` <a name="autoDetectConfig" id="projen.typescript.TsJestBabelConfig.autoDetectConfig"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestBabelConfig.autoDetectConfig()
```

Enables Babel processing.

`ts-jest` will try to find an existing Babel configuration and pass it to the `babel-jest` processor.

##### `custom` <a name="custom" id="projen.typescript.TsJestBabelConfig.custom"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestBabelConfig.custom(config: {[ key: string ]: any})
```

Inline compiler options.

> [https://babeljs.io/docs/options](https://babeljs.io/docs/options)

###### `config`<sup>Required</sup> <a name="config" id="projen.typescript.TsJestBabelConfig.custom.parameter.config"></a>

- *Type:* {[ key: string ]: any}

---

##### `disabled` <a name="disabled" id="projen.typescript.TsJestBabelConfig.disabled"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestBabelConfig.disabled()
```

Disables the use of Babel.

##### `fromFile` <a name="fromFile" id="projen.typescript.TsJestBabelConfig.fromFile"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestBabelConfig.fromFile(filePath: string)
```

Path to a babelrc file.

The path should be relative to the current working directory where you start Jest from. You can also use `<rootDir>` in the path.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TsJestBabelConfig.fromFile.parameter.filePath"></a>

- *Type:* string

---



### TsJestDiagnostics <a name="TsJestDiagnostics" id="projen.typescript.TsJestDiagnostics"></a>

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/)


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TsJestDiagnostics.all">all</a></code> | Enable all diagnostics. |
| <code><a href="#projen.typescript.TsJestDiagnostics.custom">custom</a></code> | Provide a custom diagnostics configuration. |
| <code><a href="#projen.typescript.TsJestDiagnostics.none">none</a></code> | Disable all diagnostics. |

---

##### `all` <a name="all" id="projen.typescript.TsJestDiagnostics.all"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestDiagnostics.all()
```

Enable all diagnostics.

##### `custom` <a name="custom" id="projen.typescript.TsJestDiagnostics.custom"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestDiagnostics.custom(config: {[ key: string ]: any})
```

Provide a custom diagnostics configuration.

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics/)

###### `config`<sup>Required</sup> <a name="config" id="projen.typescript.TsJestDiagnostics.custom.parameter.config"></a>

- *Type:* {[ key: string ]: any}

---

##### `none` <a name="none" id="projen.typescript.TsJestDiagnostics.none"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestDiagnostics.none()
```

Disable all diagnostics.



### TsJestTsconfig <a name="TsJestTsconfig" id="projen.typescript.TsJestTsconfig"></a>

> [https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig/](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig/)


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.typescript.TsJestTsconfig.auto">auto</a></code> | Uses `tsconfig.json` if found, or the built-in default TypeScript compiler options. |
| <code><a href="#projen.typescript.TsJestTsconfig.builtInDefaults">builtInDefaults</a></code> | Force` ts-jest` to use its built-in defaults even if there is a `tsconfig.json` in your project. |
| <code><a href="#projen.typescript.TsJestTsconfig.custom">custom</a></code> | Inline compiler options. |
| <code><a href="#projen.typescript.TsJestTsconfig.fromFile">fromFile</a></code> | Path to a `tsconfig` file. |

---

##### `auto` <a name="auto" id="projen.typescript.TsJestTsconfig.auto"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestTsconfig.auto()
```

Uses `tsconfig.json` if found, or the built-in default TypeScript compiler options.

##### `builtInDefaults` <a name="builtInDefaults" id="projen.typescript.TsJestTsconfig.builtInDefaults"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestTsconfig.builtInDefaults()
```

Force` ts-jest` to use its built-in defaults even if there is a `tsconfig.json` in your project.

##### `custom` <a name="custom" id="projen.typescript.TsJestTsconfig.custom"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestTsconfig.custom(config: TypescriptConfigOptions)
```

Inline compiler options.

> [TypescriptConfigOptions](TypescriptConfigOptions)

###### `config`<sup>Required</sup> <a name="config" id="projen.typescript.TsJestTsconfig.custom.parameter.config"></a>

- *Type:* projen.javascript.TypescriptConfigOptions

---

##### `fromFile` <a name="fromFile" id="projen.typescript.TsJestTsconfig.fromFile"></a>

```typescript
import { typescript } from 'projen'

typescript.TsJestTsconfig.fromFile(filePath: string)
```

Path to a `tsconfig` file.

The path should be relative to the current working directory where you start Jest from. You can also use `<rootDir>` in the path to start from the project root dir.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.typescript.TsJestTsconfig.fromFile.parameter.filePath"></a>

- *Type:* string

---



### TypedocDocgen <a name="TypedocDocgen" id="projen.typescript.TypedocDocgen"></a>

Adds a simple Typescript documentation generator.

#### Initializers <a name="Initializers" id="projen.typescript.TypedocDocgen.Initializer"></a>

```typescript
import { typescript } from 'projen'

new typescript.TypedocDocgen(project: TypeScriptProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.typescript.TypedocDocgen.Initializer.parameter.project">project</a></code> | <code><a href="#projen.typescript.TypeScriptProject">TypeScriptProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.typescript.TypedocDocgen.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.typescript.TypeScriptProject">TypeScriptProject</a>

---






