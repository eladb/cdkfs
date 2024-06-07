# `cdk8s` Submodule <a name="`cdk8s` Submodule" id="projen.cdk8s"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoDiscover <a name="AutoDiscover" id="projen.cdk8s.AutoDiscover"></a>

Automatically discovers and creates `IntegrationTest`s from entry points found in the test tree.

#### Initializers <a name="Initializers" id="projen.cdk8s.AutoDiscover.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.AutoDiscover(project: Project, options: AutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.AutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.AutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.AutoDiscoverOptions">AutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.AutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.AutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.AutoDiscoverOptions">AutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.AutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.AutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.cdk8s.AutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.cdk8s.AutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.cdk8s.AutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.AutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.AutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.cdk8s.AutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.AutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.AutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.AutoDiscover.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.AutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.AutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.cdk8s.AutoDiscover.isComponent"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.AutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.AutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.AutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.AutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.AutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.AutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Cdk8sDeps <a name="Cdk8sDeps" id="projen.cdk8s.Cdk8sDeps"></a>

Manages dependencies on the CDK8s.

#### Initializers <a name="Initializers" id="projen.cdk8s.Cdk8sDeps.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.Cdk8sDeps(project: Project, options: Cdk8sDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDeps.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sDeps.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.Cdk8sDepsOptions">Cdk8sDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.Cdk8sDeps.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.Cdk8sDeps.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.Cdk8sDepsOptions">Cdk8sDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDeps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.Cdk8sDeps.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sDeps.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sDeps.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.cdk8s.Cdk8sDeps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.Cdk8sDeps.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.Cdk8sDeps.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.cdk8s.Cdk8sDeps.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDeps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.Cdk8sDeps.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.Cdk8sDeps.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sDeps.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sDeps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.cdk8s.Cdk8sDeps.isComponent"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sDeps.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sDeps.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDeps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.Cdk8sDeps.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sDeps.property.cdk8sMajorVersion">cdk8sMajorVersion</a></code> | <code>number</code> | The major version of the CDK8s (e.g. 1, 2, ...). |
| <code><a href="#projen.cdk8s.Cdk8sDeps.property.cdk8sMinimumVersion">cdk8sMinimumVersion</a></code> | <code>string</code> | The minimum version of the CDK8s (e.g. `2.0.0`). |
| <code><a href="#projen.cdk8s.Cdk8sDeps.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | The dependency requirement for CDK8s. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.Cdk8sDeps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.Cdk8sDeps.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `cdk8sMajorVersion`<sup>Required</sup> <a name="cdk8sMajorVersion" id="projen.cdk8s.Cdk8sDeps.property.cdk8sMajorVersion"></a>

```typescript
public readonly cdk8sMajorVersion: number;
```

- *Type:* number

The major version of the CDK8s (e.g. 1, 2, ...).

---

##### `cdk8sMinimumVersion`<sup>Required</sup> <a name="cdk8sMinimumVersion" id="projen.cdk8s.Cdk8sDeps.property.cdk8sMinimumVersion"></a>

```typescript
public readonly cdk8sMinimumVersion: string;
```

- *Type:* string

The minimum version of the CDK8s (e.g. `2.0.0`).

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sDeps.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string

The dependency requirement for CDK8s.

---


### Cdk8sDepsPy <a name="Cdk8sDepsPy" id="projen.cdk8s.Cdk8sDepsPy"></a>

#### Initializers <a name="Initializers" id="projen.cdk8s.Cdk8sDepsPy.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.Cdk8sDepsPy(project: Project, options: Cdk8sDepsOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.Cdk8sDepsOptions">Cdk8sDepsOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.Cdk8sDepsPy.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.Cdk8sDepsPy.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.Cdk8sDepsOptions">Cdk8sDepsOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.cdk8s.Cdk8sDepsPy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.Cdk8sDepsPy.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.Cdk8sDepsPy.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.cdk8s.Cdk8sDepsPy.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.Cdk8sDepsPy.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sDepsPy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sDepsPy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.cdk8s.Cdk8sDepsPy.isComponent"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sDepsPy.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sDepsPy.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.property.cdk8sMajorVersion">cdk8sMajorVersion</a></code> | <code>number</code> | The major version of the CDK8s (e.g. 1, 2, ...). |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.property.cdk8sMinimumVersion">cdk8sMinimumVersion</a></code> | <code>string</code> | The minimum version of the CDK8s (e.g. `2.0.0`). |
| <code><a href="#projen.cdk8s.Cdk8sDepsPy.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | The dependency requirement for CDK8s. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.Cdk8sDepsPy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.Cdk8sDepsPy.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `cdk8sMajorVersion`<sup>Required</sup> <a name="cdk8sMajorVersion" id="projen.cdk8s.Cdk8sDepsPy.property.cdk8sMajorVersion"></a>

```typescript
public readonly cdk8sMajorVersion: number;
```

- *Type:* number

The major version of the CDK8s (e.g. 1, 2, ...).

---

##### `cdk8sMinimumVersion`<sup>Required</sup> <a name="cdk8sMinimumVersion" id="projen.cdk8s.Cdk8sDepsPy.property.cdk8sMinimumVersion"></a>

```typescript
public readonly cdk8sMinimumVersion: string;
```

- *Type:* string

The minimum version of the CDK8s (e.g. `2.0.0`).

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sDepsPy.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string

The dependency requirement for CDK8s.

---


### Cdk8sPythonApp <a name="Cdk8sPythonApp" id="projen.cdk8s.Cdk8sPythonApp"></a>

CDK8s app in Python.

#### Initializers <a name="Initializers" id="projen.cdk8s.Cdk8sPythonApp.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.Cdk8sPythonApp(options: Cdk8sPythonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.Cdk8sPythonOptions">Cdk8sPythonOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.Cdk8sPythonApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.Cdk8sPythonOptions">Cdk8sPythonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `toString` <a name="toString" id="projen.cdk8s.Cdk8sPythonApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.cdk8s.Cdk8sPythonApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.cdk8s.Cdk8sPythonApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.cdk8s.Cdk8sPythonApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.cdk8s.Cdk8sPythonApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.cdk8s.Cdk8sPythonApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen.cdk8s.Cdk8sPythonApp.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen.cdk8s.Cdk8sPythonApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sPythonApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.cdk8s.Cdk8sPythonApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.cdk8s.Cdk8sPythonApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.cdk8s.Cdk8sPythonApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.cdk8s.Cdk8sPythonApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.cdk8s.Cdk8sPythonApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.Cdk8sPythonApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.Cdk8sPythonApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.cdk8s.Cdk8sPythonApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sPythonApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.cdk8s.Cdk8sPythonApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen.cdk8s.Cdk8sPythonApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.cdk8s.Cdk8sPythonApp.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.cdk8s.Cdk8sPythonApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sPythonApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.cdk8s.Cdk8sPythonApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sPythonApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.cdk8s.Cdk8sPythonApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sPythonApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.cdk8s.Cdk8sPythonApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sPythonApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen.cdk8s.Cdk8sPythonApp.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.cdk8s.Cdk8sPythonApp.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="projen.cdk8s.Cdk8sPythonApp.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.cdk8s.Cdk8sPythonApp.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.Cdk8sPythonApp.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sPythonApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sPythonApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.cdk8s.Cdk8sPythonApp.isProject"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sPythonApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sPythonApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.cdk8s.Cdk8sPythonApp.of"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sPythonApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.cdk8s.Cdk8sPythonApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK8s app entrypoint. |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.cdk8sDeps">cdk8sDeps</a></code> | <code><a href="#projen.cdk8s.Cdk8sDeps">Cdk8sDeps</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.Cdk8sPythonApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.cdk8s.Cdk8sPythonApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.cdk8s.Cdk8sPythonApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.cdk8s.Cdk8sPythonApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.cdk8s.Cdk8sPythonApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sPythonApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.cdk8s.Cdk8sPythonApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.cdk8s.Cdk8sPythonApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.cdk8s.Cdk8sPythonApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.cdk8s.Cdk8sPythonApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.cdk8s.Cdk8sPythonApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sPythonApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.cdk8s.Cdk8sPythonApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.cdk8s.Cdk8sPythonApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.cdk8s.Cdk8sPythonApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.cdk8s.Cdk8sPythonApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.cdk8s.Cdk8sPythonApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.cdk8s.Cdk8sPythonApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.cdk8s.Cdk8sPythonApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.cdk8s.Cdk8sPythonApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.cdk8s.Cdk8sPythonApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.cdk8s.Cdk8sPythonApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.cdk8s.Cdk8sPythonApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.cdk8s.Cdk8sPythonApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.Cdk8sPythonApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.cdk8s.Cdk8sPythonApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.cdk8s.Cdk8sPythonApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.Cdk8sPythonApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.Cdk8sPythonApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.Cdk8sPythonApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.Cdk8sPythonApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="projen.cdk8s.Cdk8sPythonApp.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="projen.cdk8s.Cdk8sPythonApp.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen.cdk8s.Cdk8sPythonApp.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="projen.cdk8s.Cdk8sPythonApp.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="projen.cdk8s.Cdk8sPythonApp.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen.cdk8s.Cdk8sPythonApp.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="projen.cdk8s.Cdk8sPythonApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK8s app entrypoint.

---

##### `cdk8sDeps`<sup>Required</sup> <a name="cdk8sDeps" id="projen.cdk8s.Cdk8sPythonApp.property.cdk8sDeps"></a>

```typescript
public readonly cdk8sDeps: Cdk8sDeps;
```

- *Type:* <a href="#projen.cdk8s.Cdk8sDeps">Cdk8sDeps</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.cdk8s.Cdk8sPythonApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Cdk8sTypeScriptApp <a name="Cdk8sTypeScriptApp" id="projen.cdk8s.Cdk8sTypeScriptApp"></a>

CDK8s app in TypeScript.

#### Initializers <a name="Initializers" id="projen.cdk8s.Cdk8sTypeScriptApp.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.Cdk8sTypeScriptApp(options: Cdk8sTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions">Cdk8sTypeScriptAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.Cdk8sTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions">Cdk8sTypeScriptAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen.cdk8s.Cdk8sTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.cdk8s.Cdk8sTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.cdk8s.Cdk8sTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.cdk8s.Cdk8sTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.cdk8s.Cdk8sTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.cdk8s.Cdk8sTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.cdk8s.Cdk8sTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.cdk8s.Cdk8sTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.cdk8s.Cdk8sTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.cdk8s.Cdk8sTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.cdk8s.Cdk8sTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.cdk8s.Cdk8sTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.cdk8s.Cdk8sTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.Cdk8sTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.Cdk8sTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.cdk8s.Cdk8sTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.cdk8s.Cdk8sTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.cdk8s.Cdk8sTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.cdk8s.Cdk8sTypeScriptApp.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.cdk8s.Cdk8sTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.Cdk8sTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.cdk8s.Cdk8sTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.cdk8s.Cdk8sTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.cdk8s.Cdk8sTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.cdk8s.Cdk8sTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.cdk8s.Cdk8sTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.cdk8s.Cdk8sTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.cdk8s.Cdk8sTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.cdk8s.Cdk8sTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.cdk8s.Cdk8sTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.cdk8s.Cdk8sTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.cdk8s.Cdk8sTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.cdk8s.Cdk8sTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.cdk8s.Cdk8sTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.cdk8s.Cdk8sTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.cdk8s.Cdk8sTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.cdk8s.Cdk8sTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.cdk8s.Cdk8sTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.cdk8s.Cdk8sTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.cdk8s.Cdk8sTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.cdk8s.Cdk8sTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.cdk8s.Cdk8sTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.cdk8s.Cdk8sTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.Cdk8sTypeScriptApp.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sTypeScriptApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.cdk8s.Cdk8sTypeScriptApp.isProject"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.Cdk8sTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.cdk8s.Cdk8sTypeScriptApp.of"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.Cdk8sTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.cdk8s.Cdk8sTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK8s app entrypoint. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.cdk8sDeps">cdk8sDeps</a></code> | <code><a href="#projen.cdk8s.Cdk8sDeps">Cdk8sDeps</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.Cdk8sTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.cdk8s.Cdk8sTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.cdk8s.Cdk8sTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.cdk8s.Cdk8sTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.cdk8s.Cdk8sTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.cdk8s.Cdk8sTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.cdk8s.Cdk8sTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.cdk8s.Cdk8sTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.cdk8s.Cdk8sTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.cdk8s.Cdk8sTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.cdk8s.Cdk8sTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.cdk8s.Cdk8sTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.cdk8s.Cdk8sTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.cdk8s.Cdk8sTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.cdk8s.Cdk8sTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.Cdk8sTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.cdk8s.Cdk8sTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.cdk8s.Cdk8sTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.Cdk8sTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.Cdk8sTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.Cdk8sTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.Cdk8sTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.cdk8s.Cdk8sTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.cdk8s.Cdk8sTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.cdk8s.Cdk8sTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.cdk8s.Cdk8sTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.cdk8s.Cdk8sTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.cdk8s.Cdk8sTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.cdk8s.Cdk8sTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.cdk8s.Cdk8sTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.cdk8s.Cdk8sTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.cdk8s.Cdk8sTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.cdk8s.Cdk8sTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.cdk8s.Cdk8sTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.cdk8s.Cdk8sTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.cdk8s.Cdk8sTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.cdk8s.Cdk8sTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.cdk8s.Cdk8sTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.cdk8s.Cdk8sTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.cdk8s.Cdk8sTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.cdk8s.Cdk8sTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.cdk8s.Cdk8sTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.cdk8s.Cdk8sTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.cdk8s.Cdk8sTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.cdk8s.Cdk8sTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.cdk8s.Cdk8sTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.cdk8s.Cdk8sTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfigDev"></a>

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

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.cdk8s.Cdk8sTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.cdk8s.Cdk8sTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.cdk8s.Cdk8sTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfig"></a>

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

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.cdk8s.Cdk8sTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="projen.cdk8s.Cdk8sTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK8s app entrypoint.

---

##### `cdk8sDeps`<sup>Required</sup> <a name="cdk8sDeps" id="projen.cdk8s.Cdk8sTypeScriptApp.property.cdk8sDeps"></a>

```typescript
public readonly cdk8sDeps: Cdk8sDeps;
```

- *Type:* <a href="#projen.cdk8s.Cdk8sDeps">Cdk8sDeps</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.cdk8s.Cdk8sTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.cdk8s.Cdk8sTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### ConstructLibraryCdk8s <a name="ConstructLibraryCdk8s" id="projen.cdk8s.ConstructLibraryCdk8s"></a>

CDK8s construct library project.

A multi-language (jsii) construct library which vends constructs designed to
use within the CDK for Kubernetes (CDK8s), with a friendly workflow and
automatic publishing to the construct catalog.

#### Initializers <a name="Initializers" id="projen.cdk8s.ConstructLibraryCdk8s.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.ConstructLibraryCdk8s(options: ConstructLibraryCdk8sOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions">ConstructLibraryCdk8sOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.ConstructLibraryCdk8s.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.ConstructLibraryCdk8sOptions">ConstructLibraryCdk8sOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen.cdk8s.ConstructLibraryCdk8s.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.cdk8s.ConstructLibraryCdk8s.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.cdk8s.ConstructLibraryCdk8s.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.cdk8s.ConstructLibraryCdk8s.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.cdk8s.ConstructLibraryCdk8s.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.cdk8s.ConstructLibraryCdk8s.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.cdk8s.ConstructLibraryCdk8s.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.cdk8s.ConstructLibraryCdk8s.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.cdk8s.ConstructLibraryCdk8s.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.cdk8s.ConstructLibraryCdk8s.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.cdk8s.ConstructLibraryCdk8s.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.cdk8s.ConstructLibraryCdk8s.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.cdk8s.ConstructLibraryCdk8s.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.ConstructLibraryCdk8s.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.ConstructLibraryCdk8s.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.cdk8s.ConstructLibraryCdk8s.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.cdk8s.ConstructLibraryCdk8s.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.cdk8s.ConstructLibraryCdk8s.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.cdk8s.ConstructLibraryCdk8s.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.ConstructLibraryCdk8s.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.cdk8s.ConstructLibraryCdk8s.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.cdk8s.ConstructLibraryCdk8s.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.cdk8s.ConstructLibraryCdk8s.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.cdk8s.ConstructLibraryCdk8s.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.cdk8s.ConstructLibraryCdk8s.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8s.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.cdk8s.ConstructLibraryCdk8s.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.cdk8s.ConstructLibraryCdk8s.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.cdk8s.ConstructLibraryCdk8s.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8s.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.cdk8s.ConstructLibraryCdk8s.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8s.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.cdk8s.ConstructLibraryCdk8s.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.cdk8s.ConstructLibraryCdk8s.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.cdk8s.ConstructLibraryCdk8s.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.cdk8s.ConstructLibraryCdk8s.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.cdk8s.ConstructLibraryCdk8s.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8s.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.cdk8s.ConstructLibraryCdk8s.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.cdk8s.ConstructLibraryCdk8s.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.cdk8s.ConstructLibraryCdk8s.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.cdk8s.ConstructLibraryCdk8s.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.cdk8s.ConstructLibraryCdk8s.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.cdk8s.ConstructLibraryCdk8s.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.cdk8s.ConstructLibraryCdk8s.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.cdk8s.ConstructLibraryCdk8s.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen.cdk8s.ConstructLibraryCdk8s.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.cdk8s.ConstructLibraryCdk8s.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.ConstructLibraryCdk8s.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.ConstructLibraryCdk8s.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.ConstructLibraryCdk8s.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.cdk8s.ConstructLibraryCdk8s.isProject"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.ConstructLibraryCdk8s.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.ConstructLibraryCdk8s.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.cdk8s.ConstructLibraryCdk8s.of"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.ConstructLibraryCdk8s.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.cdk8s.ConstructLibraryCdk8s.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers source files only. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | The CDK8s version this app is using. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | The constructs version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.ConstructLibraryCdk8s.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.cdk8s.ConstructLibraryCdk8s.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.cdk8s.ConstructLibraryCdk8s.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8s.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.cdk8s.ConstructLibraryCdk8s.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.cdk8s.ConstructLibraryCdk8s.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.cdk8s.ConstructLibraryCdk8s.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.cdk8s.ConstructLibraryCdk8s.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.cdk8s.ConstructLibraryCdk8s.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8s.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.cdk8s.ConstructLibraryCdk8s.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.cdk8s.ConstructLibraryCdk8s.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.cdk8s.ConstructLibraryCdk8s.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.cdk8s.ConstructLibraryCdk8s.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.cdk8s.ConstructLibraryCdk8s.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.cdk8s.ConstructLibraryCdk8s.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.cdk8s.ConstructLibraryCdk8s.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.ConstructLibraryCdk8s.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.cdk8s.ConstructLibraryCdk8s.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.cdk8s.ConstructLibraryCdk8s.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.ConstructLibraryCdk8s.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.ConstructLibraryCdk8s.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.ConstructLibraryCdk8s.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.ConstructLibraryCdk8s.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.cdk8s.ConstructLibraryCdk8s.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.cdk8s.ConstructLibraryCdk8s.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.cdk8s.ConstructLibraryCdk8s.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.cdk8s.ConstructLibraryCdk8s.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.cdk8s.ConstructLibraryCdk8s.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.cdk8s.ConstructLibraryCdk8s.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.cdk8s.ConstructLibraryCdk8s.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.cdk8s.ConstructLibraryCdk8s.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.cdk8s.ConstructLibraryCdk8s.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.cdk8s.ConstructLibraryCdk8s.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.cdk8s.ConstructLibraryCdk8s.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.cdk8s.ConstructLibraryCdk8s.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.cdk8s.ConstructLibraryCdk8s.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.cdk8s.ConstructLibraryCdk8s.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.cdk8s.ConstructLibraryCdk8s.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.cdk8s.ConstructLibraryCdk8s.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.cdk8s.ConstructLibraryCdk8s.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.cdk8s.ConstructLibraryCdk8s.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.cdk8s.ConstructLibraryCdk8s.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.cdk8s.ConstructLibraryCdk8s.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.cdk8s.ConstructLibraryCdk8s.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen.cdk8s.ConstructLibraryCdk8s.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen.cdk8s.ConstructLibraryCdk8s.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen.cdk8s.ConstructLibraryCdk8s.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.cdk8s.ConstructLibraryCdk8s.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen.cdk8s.ConstructLibraryCdk8s.property.tsconfigDev"></a>

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

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen.cdk8s.ConstructLibraryCdk8s.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.cdk8s.ConstructLibraryCdk8s.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.cdk8s.ConstructLibraryCdk8s.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.cdk8s.ConstructLibraryCdk8s.property.tsconfig"></a>

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

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen.cdk8s.ConstructLibraryCdk8s.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.ConstructLibraryCdk8s.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string

The CDK8s version this app is using.

---

##### `constructsVersion`<sup>Required</sup> <a name="constructsVersion" id="projen.cdk8s.ConstructLibraryCdk8s.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string

The constructs version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8s.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.cdk8s.ConstructLibraryCdk8s.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen.cdk8s.ConstructLibraryCdk8s.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### IntegrationTest <a name="IntegrationTest" id="projen.cdk8s.IntegrationTest"></a>

CDK8S integration test.

#### Initializers <a name="Initializers" id="projen.cdk8s.IntegrationTest.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.IntegrationTest(project: Project, options: IntegrationTestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTest.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.IntegrationTest.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.IntegrationTestOptions">IntegrationTestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.IntegrationTest.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.IntegrationTest.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.IntegrationTestOptions">IntegrationTestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.IntegrationTest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.cdk8s.IntegrationTest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.cdk8s.IntegrationTest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.cdk8s.IntegrationTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.IntegrationTest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.IntegrationTest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.cdk8s.IntegrationTest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.IntegrationTest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.IntegrationTest.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.IntegrationTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.IntegrationTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.cdk8s.IntegrationTest.isComponent"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.IntegrationTest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.IntegrationTest.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.IntegrationTest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.IntegrationTest.property.assertTask">assertTask</a></code> | <code>projen.Task</code> | Synthesizes the integration test and compares against a local copy (runs during build). |
| <code><a href="#projen.cdk8s.IntegrationTest.property.deployTask">deployTask</a></code> | <code>projen.Task</code> | Deploy the integration test and update the snapshot upon success. |
| <code><a href="#projen.cdk8s.IntegrationTest.property.snapshotTask">snapshotTask</a></code> | <code>projen.Task</code> | Just update snapshot (without deployment). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.IntegrationTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.IntegrationTest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `assertTask`<sup>Required</sup> <a name="assertTask" id="projen.cdk8s.IntegrationTest.property.assertTask"></a>

```typescript
public readonly assertTask: Task;
```

- *Type:* projen.Task

Synthesizes the integration test and compares against a local copy (runs during build).

---

##### `deployTask`<sup>Required</sup> <a name="deployTask" id="projen.cdk8s.IntegrationTest.property.deployTask"></a>

```typescript
public readonly deployTask: Task;
```

- *Type:* projen.Task

Deploy the integration test and update the snapshot upon success.

---

##### `snapshotTask`<sup>Required</sup> <a name="snapshotTask" id="projen.cdk8s.IntegrationTest.property.snapshotTask"></a>

```typescript
public readonly snapshotTask: Task;
```

- *Type:* projen.Task

Just update snapshot (without deployment).

---


### IntegrationTestAutoDiscover <a name="IntegrationTestAutoDiscover" id="projen.cdk8s.IntegrationTestAutoDiscover"></a>

Discovers and creates integration tests from files in the test root.

#### Initializers <a name="Initializers" id="projen.cdk8s.IntegrationTestAutoDiscover.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

new cdk8s.IntegrationTestAutoDiscover(project: Project, options: IntegrationTestAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.Initializer.parameter.options">options</a></code> | <code><a href="#projen.cdk8s.IntegrationTestAutoDiscoverOptions">IntegrationTestAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.IntegrationTestAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.cdk8s.IntegrationTestAutoDiscover.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.cdk8s.IntegrationTestAutoDiscoverOptions">IntegrationTestAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.cdk8s.IntegrationTestAutoDiscover.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.cdk8s.IntegrationTestAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.cdk8s.IntegrationTestAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.cdk8s.IntegrationTestAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.cdk8s.IntegrationTestAutoDiscover.isConstruct"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.IntegrationTestAutoDiscover.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.IntegrationTestAutoDiscover.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.cdk8s.IntegrationTestAutoDiscover.isComponent"></a>

```typescript
import { cdk8s } from 'projen'

cdk8s.IntegrationTestAutoDiscover.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.cdk8s.IntegrationTestAutoDiscover.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.cdk8s.IntegrationTestAutoDiscover.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.cdk8s.IntegrationTestAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="projen.cdk8s.IntegrationTestAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---


## Structs <a name="Structs" id="Structs"></a>

### AutoDiscoverOptions <a name="AutoDiscoverOptions" id="projen.cdk8s.AutoDiscoverOptions"></a>

Options for `AutoDiscover`.

#### Initializer <a name="Initializer" id="projen.cdk8s.AutoDiscoverOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const autoDiscoverOptions: cdk8s.AutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.AutoDiscoverOptions.property.testdir">testdir</a></code> | <code>string</code> | Test source tree. |
| <code><a href="#projen.cdk8s.AutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |
| <code><a href="#projen.cdk8s.AutoDiscoverOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discover integration tests. |

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.cdk8s.AutoDiscoverOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

Test source tree.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.cdk8s.AutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.cdk8s.AutoDiscoverOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discover integration tests.

---

### Cdk8sDepsCommonOptions <a name="Cdk8sDepsCommonOptions" id="projen.cdk8s.Cdk8sDepsCommonOptions"></a>

Options for `Cdk8sDeps`.

#### Initializer <a name="Initializer" id="projen.cdk8s.Cdk8sDepsCommonOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const cdk8sDepsCommonOptions: cdk8s.Cdk8sDepsCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum version of the cdk8s to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sCliVersion">cdk8sCliVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-cli to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sCliVersionPinning">cdk8sCliVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-cli. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlus">cdk8sPlus</a></code> | <code>boolean</code> | Include cdk8s-plus. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlusVersion">cdk8sPlusVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-plus-XX to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlusVersionPinning">cdk8sPlusVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-plus-17. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sVersionPinning">cdk8sVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.constructsVersionPinning">constructsVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for constructs. |
| <code><a href="#projen.cdk8s.Cdk8sDepsCommonOptions.property.k8sMinorVersion">k8sMinorVersion</a></code> | <code>number</code> | The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0. |

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string
- *Default:* "2.3.33"

Minimum version of the cdk8s to depend on.

---

##### `cdk8sCliVersion`<sup>Optional</sup> <a name="cdk8sCliVersion" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sCliVersion"></a>

```typescript
public readonly cdk8sCliVersion: string;
```

- *Type:* string
- *Default:* "2.0.28"

Minimum version of the cdk8s-cli to depend on.

---

##### `cdk8sCliVersionPinning`<sup>Optional</sup> <a name="cdk8sCliVersionPinning" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sCliVersionPinning"></a>

```typescript
public readonly cdk8sCliVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-cli.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sPlus`<sup>Optional</sup> <a name="cdk8sPlus" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlus"></a>

```typescript
public readonly cdk8sPlus: boolean;
```

- *Type:* boolean
- *Default:* true

Include cdk8s-plus.

---

##### `cdk8sPlusVersion`<sup>Optional</sup> <a name="cdk8sPlusVersion" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlusVersion"></a>

```typescript
public readonly cdk8sPlusVersion: string;
```

- *Type:* string
- *Default:* "2.0.0-rc.26"

Minimum version of the cdk8s-plus-XX to depend on.

---

##### `cdk8sPlusVersionPinning`<sup>Optional</sup> <a name="cdk8sPlusVersionPinning" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sPlusVersionPinning"></a>

```typescript
public readonly cdk8sPlusVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-plus-17.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sVersionPinning`<sup>Optional</sup> <a name="cdk8sVersionPinning" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.cdk8sVersionPinning"></a>

```typescript
public readonly cdk8sVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "10.1.42"

Minimum version of the `constructs` library to depend on.

---

##### `constructsVersionPinning`<sup>Optional</sup> <a name="constructsVersionPinning" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.constructsVersionPinning"></a>

```typescript
public readonly constructsVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for constructs.

You can use this to prevent yarn to mix versions for your consructs package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `k8sMinorVersion`<sup>Optional</sup> <a name="k8sMinorVersion" id="projen.cdk8s.Cdk8sDepsCommonOptions.property.k8sMinorVersion"></a>

```typescript
public readonly k8sMinorVersion: number;
```

- *Type:* number
- *Default:* 22

The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0.

---

### Cdk8sDepsOptions <a name="Cdk8sDepsOptions" id="projen.cdk8s.Cdk8sDepsOptions"></a>

#### Initializer <a name="Initializer" id="projen.cdk8s.Cdk8sDepsOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const cdk8sDepsOptions: cdk8s.Cdk8sDepsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum version of the cdk8s to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliVersion">cdk8sCliVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-cli to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliVersionPinning">cdk8sCliVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-cli. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlus">cdk8sPlus</a></code> | <code>boolean</code> | Include cdk8s-plus. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlusVersion">cdk8sPlusVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-plus-XX to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlusVersionPinning">cdk8sPlusVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-plus-17. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sVersionPinning">cdk8sVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.constructsVersionPinning">constructsVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for constructs. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.k8sMinorVersion">k8sMinorVersion</a></code> | <code>number</code> | The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliDependency">cdk8sCliDependency</a></code> | <code>boolean</code> | Add cdk8s-cli only to Node projects. |
| <code><a href="#projen.cdk8s.Cdk8sDepsOptions.property.dependencyType">dependencyType</a></code> | <code>projen.DependencyType</code> | The type of dependency to use for runtime CDK8s and `constructs` modules. |

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string
- *Default:* "2.3.33"

Minimum version of the cdk8s to depend on.

---

##### `cdk8sCliVersion`<sup>Optional</sup> <a name="cdk8sCliVersion" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliVersion"></a>

```typescript
public readonly cdk8sCliVersion: string;
```

- *Type:* string
- *Default:* "2.0.28"

Minimum version of the cdk8s-cli to depend on.

---

##### `cdk8sCliVersionPinning`<sup>Optional</sup> <a name="cdk8sCliVersionPinning" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliVersionPinning"></a>

```typescript
public readonly cdk8sCliVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-cli.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sPlus`<sup>Optional</sup> <a name="cdk8sPlus" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlus"></a>

```typescript
public readonly cdk8sPlus: boolean;
```

- *Type:* boolean
- *Default:* true

Include cdk8s-plus.

---

##### `cdk8sPlusVersion`<sup>Optional</sup> <a name="cdk8sPlusVersion" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlusVersion"></a>

```typescript
public readonly cdk8sPlusVersion: string;
```

- *Type:* string
- *Default:* "2.0.0-rc.26"

Minimum version of the cdk8s-plus-XX to depend on.

---

##### `cdk8sPlusVersionPinning`<sup>Optional</sup> <a name="cdk8sPlusVersionPinning" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sPlusVersionPinning"></a>

```typescript
public readonly cdk8sPlusVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-plus-17.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sVersionPinning`<sup>Optional</sup> <a name="cdk8sVersionPinning" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sVersionPinning"></a>

```typescript
public readonly cdk8sVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.cdk8s.Cdk8sDepsOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "10.1.42"

Minimum version of the `constructs` library to depend on.

---

##### `constructsVersionPinning`<sup>Optional</sup> <a name="constructsVersionPinning" id="projen.cdk8s.Cdk8sDepsOptions.property.constructsVersionPinning"></a>

```typescript
public readonly constructsVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for constructs.

You can use this to prevent yarn to mix versions for your consructs package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `k8sMinorVersion`<sup>Optional</sup> <a name="k8sMinorVersion" id="projen.cdk8s.Cdk8sDepsOptions.property.k8sMinorVersion"></a>

```typescript
public readonly k8sMinorVersion: number;
```

- *Type:* number
- *Default:* 22

The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0.

---

##### `cdk8sCliDependency`<sup>Required</sup> <a name="cdk8sCliDependency" id="projen.cdk8s.Cdk8sDepsOptions.property.cdk8sCliDependency"></a>

```typescript
public readonly cdk8sCliDependency: boolean;
```

- *Type:* boolean
- *Default:* false

Add cdk8s-cli only to Node projects.

---

##### `dependencyType`<sup>Required</sup> <a name="dependencyType" id="projen.cdk8s.Cdk8sDepsOptions.property.dependencyType"></a>

```typescript
public readonly dependencyType: DependencyType;
```

- *Type:* projen.DependencyType

The type of dependency to use for runtime CDK8s and `constructs` modules.

For libraries, use peer dependencies and for apps use runtime dependencies.

---

### Cdk8sPackageNames <a name="Cdk8sPackageNames" id="projen.cdk8s.Cdk8sPackageNames"></a>

#### Initializer <a name="Initializer" id="projen.cdk8s.Cdk8sPackageNames.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const cdk8sPackageNames: cdk8s.Cdk8sPackageNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPackageNames.property.cdk8s">cdk8s</a></code> | <code>string</code> | Fully qualified name of the core framework package. |
| <code><a href="#projen.cdk8s.Cdk8sPackageNames.property.cdk8sPlus">cdk8sPlus</a></code> | <code>string</code> | Fully qualified name of the cdk9s-plus-XX library package. |
| <code><a href="#projen.cdk8s.Cdk8sPackageNames.property.constructs">constructs</a></code> | <code>string</code> | Fully qualified name of the constructs library package. |
| <code><a href="#projen.cdk8s.Cdk8sPackageNames.property.cdk8sClient">cdk8sClient</a></code> | <code>string</code> | Fully qualified name of the client package. |

---

##### `cdk8s`<sup>Required</sup> <a name="cdk8s" id="projen.cdk8s.Cdk8sPackageNames.property.cdk8s"></a>

```typescript
public readonly cdk8s: string;
```

- *Type:* string

Fully qualified name of the core framework package.

---

##### `cdk8sPlus`<sup>Required</sup> <a name="cdk8sPlus" id="projen.cdk8s.Cdk8sPackageNames.property.cdk8sPlus"></a>

```typescript
public readonly cdk8sPlus: string;
```

- *Type:* string

Fully qualified name of the cdk9s-plus-XX library package.

---

##### `constructs`<sup>Required</sup> <a name="constructs" id="projen.cdk8s.Cdk8sPackageNames.property.constructs"></a>

```typescript
public readonly constructs: string;
```

- *Type:* string

Fully qualified name of the constructs library package.

---

##### `cdk8sClient`<sup>Optional</sup> <a name="cdk8sClient" id="projen.cdk8s.Cdk8sPackageNames.property.cdk8sClient"></a>

```typescript
public readonly cdk8sClient: string;
```

- *Type:* string

Fully qualified name of the client package.

Used only on Node projects

---

### Cdk8sPythonOptions <a name="Cdk8sPythonOptions" id="projen.cdk8s.Cdk8sPythonOptions"></a>

Options for `Cdk8sPythonApp`.

#### Initializer <a name="Initializer" id="projen.cdk8s.Cdk8sPythonOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const cdk8sPythonOptions: cdk8s.Cdk8sPythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.poetryOptions">poetryOptions</a></code> | <code>projen.python.PoetryPyprojectOptionsWithoutDeps</code> | Additional options to set for poetry if using poetry. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.setupConfig">setupConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional fields to pass in the setup() function if using setuptools. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.pythonExec">pythonExec</a></code> | <code>string</code> | Path to the python executable to use. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.pip">pip</a></code> | <code>boolean</code> | Use pip with a requirements.txt file to track project dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.poetry">poetry</a></code> | <code>boolean</code> | Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use projenrc in TypeScript. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcTsOptions</code> | Options related to projenrc in TypeScript. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.venv">venv</a></code> | <code>boolean</code> | Use venv to manage a virtual environment for installing dependencies inside. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.venvOptions">venvOptions</a></code> | <code>projen.python.VenvOptions</code> | Venv options. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum version of the cdk8s to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sCliVersion">cdk8sCliVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-cli to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sCliVersionPinning">cdk8sCliVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-cli. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlus">cdk8sPlus</a></code> | <code>boolean</code> | Include cdk8s-plus. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlusVersion">cdk8sPlusVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-plus-XX to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlusVersionPinning">cdk8sPlusVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-plus-17. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sVersionPinning">cdk8sVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.constructsVersionPinning">constructsVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for constructs. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.k8sMinorVersion">k8sMinorVersion</a></code> | <code>number</code> | The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK8s app's entrypoint. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.cdk8sImports">cdk8sImports</a></code> | <code>string[]</code> | Import additional specs. |
| <code><a href="#projen.cdk8s.Cdk8sPythonOptions.property.k8sSpecVersion">k8sSpecVersion</a></code> | <code>string</code> | Import a specific Kubernetes spec version. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sPythonOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.cdk8s.Cdk8sPythonOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.cdk8s.Cdk8sPythonOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.cdk8s.Cdk8sPythonOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.Cdk8sPythonOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.cdk8s.Cdk8sPythonOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.cdk8s.Cdk8sPythonOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.cdk8s.Cdk8sPythonOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.cdk8s.Cdk8sPythonOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.Cdk8sPythonOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.Cdk8sPythonOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.Cdk8sPythonOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.cdk8s.Cdk8sPythonOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.cdk8s.Cdk8sPythonOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.cdk8s.Cdk8sPythonOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.cdk8s.Cdk8sPythonOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.cdk8s.Cdk8sPythonOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.cdk8s.Cdk8sPythonOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.Cdk8sPythonOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="projen.cdk8s.Cdk8sPythonOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="projen.cdk8s.Cdk8sPythonOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `version`<sup>Required</sup> <a name="version" id="projen.cdk8s.Cdk8sPythonOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="projen.cdk8s.Cdk8sPythonOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

> [https://pypi.org/classifiers/](https://pypi.org/classifiers/)

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.cdk8s.Cdk8sPythonOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.cdk8s.Cdk8sPythonOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.cdk8s.Cdk8sPythonOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.cdk8s.Cdk8sPythonOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `poetryOptions`<sup>Optional</sup> <a name="poetryOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.poetryOptions"></a>

```typescript
public readonly poetryOptions: PoetryPyprojectOptionsWithoutDeps;
```

- *Type:* projen.python.PoetryPyprojectOptionsWithoutDeps

Additional options to set for poetry if using poetry.

---

##### `setupConfig`<sup>Optional</sup> <a name="setupConfig" id="projen.cdk8s.Cdk8sPythonOptions.property.setupConfig"></a>

```typescript
public readonly setupConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional fields to pass in the setup() function if using setuptools.

---

##### `pythonExec`<sup>Optional</sup> <a name="pythonExec" id="projen.cdk8s.Cdk8sPythonOptions.property.pythonExec"></a>

```typescript
public readonly pythonExec: string;
```

- *Type:* string
- *Default:* "python"

Path to the python executable to use.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen.cdk8s.Cdk8sPythonOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.cdk8s.Cdk8sPythonOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.cdk8s.Cdk8sPythonOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `pip`<sup>Optional</sup> <a name="pip" id="projen.cdk8s.Cdk8sPythonOptions.property.pip"></a>

```typescript
public readonly pip: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use pip with a requirements.txt file to track project dependencies.

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="projen.cdk8s.Cdk8sPythonOptions.property.poetry"></a>

```typescript
public readonly poetry: boolean;
```

- *Type:* boolean
- *Default:* false

Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing.

This feature is incompatible with pip, setuptools, or venv.
If you set this option to `true`, then pip, setuptools, and venv must be set to `false`.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in TypeScript.

This will create a tsconfig file (default: `tsconfig.projen.json`)
and use `ts-node` in the default task to parse the project source files.

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcTsOptions;
```

- *Type:* projen.typescript.ProjenrcTsOptions
- *Default:* default options

Options related to projenrc in TypeScript.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen.cdk8s.Cdk8sPythonOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen.cdk8s.Cdk8sPythonOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="projen.cdk8s.Cdk8sPythonOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use setuptools with a setup.py script for packaging and publishing.

---

##### `venv`<sup>Optional</sup> <a name="venv" id="projen.cdk8s.Cdk8sPythonOptions.property.venv"></a>

```typescript
public readonly venv: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use venv to manage a virtual environment for installing dependencies inside.

---

##### `venvOptions`<sup>Optional</sup> <a name="venvOptions" id="projen.cdk8s.Cdk8sPythonOptions.property.venvOptions"></a>

```typescript
public readonly venvOptions: VenvOptions;
```

- *Type:* projen.python.VenvOptions
- *Default:* defaults

Venv options.

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string
- *Default:* "2.3.33"

Minimum version of the cdk8s to depend on.

---

##### `cdk8sCliVersion`<sup>Optional</sup> <a name="cdk8sCliVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sCliVersion"></a>

```typescript
public readonly cdk8sCliVersion: string;
```

- *Type:* string
- *Default:* "2.0.28"

Minimum version of the cdk8s-cli to depend on.

---

##### `cdk8sCliVersionPinning`<sup>Optional</sup> <a name="cdk8sCliVersionPinning" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sCliVersionPinning"></a>

```typescript
public readonly cdk8sCliVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-cli.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sPlus`<sup>Optional</sup> <a name="cdk8sPlus" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlus"></a>

```typescript
public readonly cdk8sPlus: boolean;
```

- *Type:* boolean
- *Default:* true

Include cdk8s-plus.

---

##### `cdk8sPlusVersion`<sup>Optional</sup> <a name="cdk8sPlusVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlusVersion"></a>

```typescript
public readonly cdk8sPlusVersion: string;
```

- *Type:* string
- *Default:* "2.0.0-rc.26"

Minimum version of the cdk8s-plus-XX to depend on.

---

##### `cdk8sPlusVersionPinning`<sup>Optional</sup> <a name="cdk8sPlusVersionPinning" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sPlusVersionPinning"></a>

```typescript
public readonly cdk8sPlusVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-plus-17.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sVersionPinning`<sup>Optional</sup> <a name="cdk8sVersionPinning" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sVersionPinning"></a>

```typescript
public readonly cdk8sVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "10.1.42"

Minimum version of the `constructs` library to depend on.

---

##### `constructsVersionPinning`<sup>Optional</sup> <a name="constructsVersionPinning" id="projen.cdk8s.Cdk8sPythonOptions.property.constructsVersionPinning"></a>

```typescript
public readonly constructsVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for constructs.

You can use this to prevent yarn to mix versions for your consructs package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `k8sMinorVersion`<sup>Optional</sup> <a name="k8sMinorVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.k8sMinorVersion"></a>

```typescript
public readonly k8sMinorVersion: number;
```

- *Type:* number
- *Default:* 22

The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="projen.cdk8s.Cdk8sPythonOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "app.py"

The CDK8s app's entrypoint.

---

##### `cdk8sImports`<sup>Optional</sup> <a name="cdk8sImports" id="projen.cdk8s.Cdk8sPythonOptions.property.cdk8sImports"></a>

```typescript
public readonly cdk8sImports: string[];
```

- *Type:* string[]
- *Default:* no additional specs imported

Import additional specs.

---

##### `k8sSpecVersion`<sup>Optional</sup> <a name="k8sSpecVersion" id="projen.cdk8s.Cdk8sPythonOptions.property.k8sSpecVersion"></a>

```typescript
public readonly k8sSpecVersion: string;
```

- *Type:* string
- *Default:* Use the cdk8s default

Import a specific Kubernetes spec version.

---

### Cdk8sTypeScriptAppOptions <a name="Cdk8sTypeScriptAppOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions"></a>

#### Initializer <a name="Initializer" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const cdk8sTypeScriptAppOptions: cdk8s.Cdk8sTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum version of the cdk8s to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sCliVersion">cdk8sCliVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-cli to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sCliVersionPinning">cdk8sCliVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-cli. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlus">cdk8sPlus</a></code> | <code>boolean</code> | Include cdk8s-plus. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlusVersion">cdk8sPlusVersion</a></code> | <code>string</code> | Minimum version of the cdk8s-plus-XX to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlusVersionPinning">cdk8sPlusVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-plus-17. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sVersionPinning">cdk8sVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.constructsVersionPinning">constructsVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for constructs. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.k8sMinorVersion">k8sMinorVersion</a></code> | <code>number</code> | The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK8s app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sImports">cdk8sImports</a></code> | <code>string[]</code> | Import additional specs. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cdk8s.IntegrationTest` for each `.integ.ts` app in your test directory. If this is disabled, you can manually add an `cdk8s.AutoDiscover` component to your project. |
| <code><a href="#projen.cdk8s.Cdk8sTypeScriptAppOptions.property.k8sSpecVersion">k8sSpecVersion</a></code> | <code>string</code> | Import a specific Kubernetes spec version. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bundledDeps"></a>

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.minMajorVersion"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevExtendsTsconfig`<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevExtendsTsconfig"></a>

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsconfigDevPresets`<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigDevPresets"></a>

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### `tsconfigPresets`<sup>Optional</sup> <a name="tsconfigPresets" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsconfigPresets"></a>

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string
- *Default:* "2.3.33"

Minimum version of the cdk8s to depend on.

---

##### `cdk8sCliVersion`<sup>Optional</sup> <a name="cdk8sCliVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sCliVersion"></a>

```typescript
public readonly cdk8sCliVersion: string;
```

- *Type:* string
- *Default:* "2.0.28"

Minimum version of the cdk8s-cli to depend on.

---

##### `cdk8sCliVersionPinning`<sup>Optional</sup> <a name="cdk8sCliVersionPinning" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sCliVersionPinning"></a>

```typescript
public readonly cdk8sCliVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-cli.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sPlus`<sup>Optional</sup> <a name="cdk8sPlus" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlus"></a>

```typescript
public readonly cdk8sPlus: boolean;
```

- *Type:* boolean
- *Default:* true

Include cdk8s-plus.

---

##### `cdk8sPlusVersion`<sup>Optional</sup> <a name="cdk8sPlusVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlusVersion"></a>

```typescript
public readonly cdk8sPlusVersion: string;
```

- *Type:* string
- *Default:* "2.0.0-rc.26"

Minimum version of the cdk8s-plus-XX to depend on.

---

##### `cdk8sPlusVersionPinning`<sup>Optional</sup> <a name="cdk8sPlusVersionPinning" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sPlusVersionPinning"></a>

```typescript
public readonly cdk8sPlusVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-plus-17.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sVersionPinning`<sup>Optional</sup> <a name="cdk8sVersionPinning" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sVersionPinning"></a>

```typescript
public readonly cdk8sVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "10.1.42"

Minimum version of the `constructs` library to depend on.

---

##### `constructsVersionPinning`<sup>Optional</sup> <a name="constructsVersionPinning" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.constructsVersionPinning"></a>

```typescript
public readonly constructsVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for constructs.

You can use this to prevent yarn to mix versions for your consructs package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `k8sMinorVersion`<sup>Optional</sup> <a name="k8sMinorVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.k8sMinorVersion"></a>

```typescript
public readonly k8sMinorVersion: number;
```

- *Type:* number
- *Default:* 22

The cdk8s-plus library depends of Kubernetes minor version For example, cdk8s-plus-22 targets kubernetes version 1.22.0 cdk8s-plus-21 targets kubernetes version 1.21.0.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK8s app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `cdk8sImports`<sup>Optional</sup> <a name="cdk8sImports" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.cdk8sImports"></a>

```typescript
public readonly cdk8sImports: string[];
```

- *Type:* string[]
- *Default:* no additional specs imported

Import additional specs.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cdk8s.IntegrationTest` for each `.integ.ts` app in your test directory. If this is disabled, you can manually add an `cdk8s.AutoDiscover` component to your project.

---

##### `k8sSpecVersion`<sup>Optional</sup> <a name="k8sSpecVersion" id="projen.cdk8s.Cdk8sTypeScriptAppOptions.property.k8sSpecVersion"></a>

```typescript
public readonly k8sSpecVersion: string;
```

- *Type:* string
- *Default:* Use the cdk8s default

Import a specific Kubernetes spec version.

---

### ConstructLibraryCdk8sOptions <a name="ConstructLibraryCdk8sOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions"></a>

#### Initializer <a name="Initializer" id="projen.cdk8s.ConstructLibraryCdk8sOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const constructLibraryCdk8sOptions: cdk8s.ConstructLibraryCdk8sOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfig">tsconfig</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.typescript.TypescriptProjectConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevExtendsTsconfig">tsconfigDevExtendsTsconfig</a></code> | <code>boolean</code> | Use extends instead of duplication to make tsconfigDev inherit from tsconfig. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevPresets">tsconfigDevPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig dev file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigPresets">tsconfigPresets</a></code> | <code>projen.javascript.TypescriptConfigPresetsOptions</code> | Presets to choose as the base for the tsconfig file. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.catalog">catalog</a></code> | <code>projen.cdk.Catalog</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sVersion">cdk8sVersion</a></code> | <code>string</code> | Minimum target version this library is tested against. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sPlusVersionPinning">cdk8sPlusVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for cdk8s-plus-17. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sVersionPinning">cdk8sVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK8s. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | constructs verion. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.constructsVersionPinning">constructsVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for constructs. |
| <code><a href="#projen.cdk8s.ConstructLibraryCdk8sOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cdk8s.IntegrationTest` for each `.integ.ts` app in your test directory. If this is disabled, you can manually add an `cdk8s.AutoDiscover` component to your project. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.bundledDeps"></a>

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.minMajorVersion"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.testdir"></a>

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

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptProjectConfigOptions;
```

- *Type:* projen.typescript.TypescriptProjectConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevExtendsTsconfig`<sup>Optional</sup> <a name="tsconfigDevExtendsTsconfig" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevExtendsTsconfig"></a>

```typescript
public readonly tsconfigDevExtendsTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Use extends instead of duplication to make tsconfigDev inherit from tsconfig.

Ignored if `disableTsconfig` or `disableTsconfigDev` is set to true.

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsconfigDevPresets`<sup>Optional</sup> <a name="tsconfigDevPresets" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigDevPresets"></a>

```typescript
public readonly tsconfigDevPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig dev file.

---

##### `tsconfigPresets`<sup>Optional</sup> <a name="tsconfigPresets" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsconfigPresets"></a>

```typescript
public readonly tsconfigPresets: TypescriptConfigPresetsOptions;
```

- *Type:* projen.javascript.TypescriptConfigPresetsOptions
- *Default:* TypescriptConfigPresetsOptions.PROJEN_CLASSIC

Presets to choose as the base for the tsconfig file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `author`<sup>Required</sup> <a name="author" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.excludeTypescript"></a>

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

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.jsiiVersion"></a>

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

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.catalog"></a>

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

##### `cdk8sVersion`<sup>Required</sup> <a name="cdk8sVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sVersion"></a>

```typescript
public readonly cdk8sVersion: string;
```

- *Type:* string
- *Default:* "1.4.10"

Minimum target version this library is tested against.

---

##### `cdk8sPlusVersionPinning`<sup>Optional</sup> <a name="cdk8sPlusVersionPinning" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sPlusVersionPinning"></a>

```typescript
public readonly cdk8sPlusVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for cdk8s-plus-17.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `cdk8sVersionPinning`<sup>Optional</sup> <a name="cdk8sVersionPinning" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.cdk8sVersionPinning"></a>

```typescript
public readonly cdk8sVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for CDK8s.

You can use this to prevent yarn to mix versions for your CDK8s package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* "3.3.196"

constructs verion.

---

##### `constructsVersionPinning`<sup>Optional</sup> <a name="constructsVersionPinning" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.constructsVersionPinning"></a>

```typescript
public readonly constructsVersionPinning: boolean;
```

- *Type:* boolean
- *Default:* false

Use pinned version instead of caret version for constructs.

You can use this to prevent yarn to mix versions for your consructs package and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen.cdk8s.ConstructLibraryCdk8sOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cdk8s.IntegrationTest` for each `.integ.ts` app in your test directory. If this is disabled, you can manually add an `cdk8s.AutoDiscover` component to your project.

---

### IntegrationTestAutoDiscoverOptions <a name="IntegrationTestAutoDiscoverOptions" id="projen.cdk8s.IntegrationTestAutoDiscoverOptions"></a>

#### Initializer <a name="Initializer" id="projen.cdk8s.IntegrationTestAutoDiscoverOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const integrationTestAutoDiscoverOptions: cdk8s.IntegrationTestAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscoverOptions.property.testdir">testdir</a></code> | <code>string</code> | Test source tree. |
| <code><a href="#projen.cdk8s.IntegrationTestAutoDiscoverOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file to use for integration tests. |

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen.cdk8s.IntegrationTestAutoDiscoverOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

Test source tree.

---

##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.cdk8s.IntegrationTestAutoDiscoverOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

Path to the tsconfig file to use for integration tests.

---

### IntegrationTestOptions <a name="IntegrationTestOptions" id="projen.cdk8s.IntegrationTestOptions"></a>

Options for IntegrationTest.

#### Initializer <a name="Initializer" id="projen.cdk8s.IntegrationTestOptions.Initializer"></a>

```typescript
import { cdk8s } from 'projen'

const integrationTestOptions: cdk8s.IntegrationTestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.cdk8s.IntegrationTestOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | A path from the project root directory to a TypeScript file which contains the integration test app. |
| <code><a href="#projen.cdk8s.IntegrationTestOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | The path of the tsconfig.json file to use when running integration test cdk apps. |
| <code><a href="#projen.cdk8s.IntegrationTestOptions.property.name">name</a></code> | <code>string</code> | Name of the integration test. |

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.cdk8s.IntegrationTestOptions.property.entrypoint"></a>

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


##### `tsconfigPath`<sup>Required</sup> <a name="tsconfigPath" id="projen.cdk8s.IntegrationTestOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

The path of the tsconfig.json file to use when running integration test cdk apps.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.cdk8s.IntegrationTestOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* Derived from the entrypoint filename.

Name of the integration test.

---



