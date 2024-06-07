# `javascript` Submodule <a name="`javascript` Submodule" id="projen.javascript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Bundler <a name="Bundler" id="projen.javascript.Bundler"></a>

Adds support for bundling JavaScript applications and dependencies into a single file.

In the future, this will also supports bundling websites.

#### Initializers <a name="Initializers" id="projen.javascript.Bundler.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Bundler(project: Project, options?: BundlerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Bundler.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Bundler.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.BundlerOptions">BundlerOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Bundler.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.Bundler.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.BundlerOptions">BundlerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Bundler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Bundler.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Bundler.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Bundler.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.Bundler.addBundle">addBundle</a></code> | Adds a task to the project which bundles a specific entrypoint and all of its dependencies into a single javascript output file. |

---

##### `toString` <a name="toString" id="projen.javascript.Bundler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Bundler.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Bundler.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Bundler.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBundle` <a name="addBundle" id="projen.javascript.Bundler.addBundle"></a>

```typescript
public addBundle(entrypoint: string, options: AddBundleOptions): Bundle
```

Adds a task to the project which bundles a specific entrypoint and all of its dependencies into a single javascript output file.

###### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.javascript.Bundler.addBundle.parameter.entrypoint"></a>

- *Type:* string

The relative path of the artifact within the project.

---

###### `options`<sup>Required</sup> <a name="options" id="projen.javascript.Bundler.addBundle.parameter.options"></a>

- *Type:* <a href="#projen.javascript.AddBundleOptions">AddBundleOptions</a>

Bundling options.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Bundler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Bundler.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.Bundler.of">of</a></code> | Returns the `Bundler` instance associated with a project or `undefined` if there is no Bundler. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Bundler.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Bundler.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Bundler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Bundler.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Bundler.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Bundler.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.Bundler.of"></a>

```typescript
import { javascript } from 'projen'

javascript.Bundler.of(project: Project)
```

Returns the `Bundler` instance associated with a project or `undefined` if there is no Bundler.

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Bundler.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Bundler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Bundler.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Bundler.property.bundledir">bundledir</a></code> | <code>string</code> | Root bundle directory. |
| <code><a href="#projen.javascript.Bundler.property.bundleTask">bundleTask</a></code> | <code>projen.Task</code> | Gets or creates the singleton "bundle" task of the project. |
| <code><a href="#projen.javascript.Bundler.property.esbuildVersion">esbuildVersion</a></code> | <code>string</code> | The semantic version requirement for `esbuild` (if defined). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Bundler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Bundler.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `bundledir`<sup>Required</sup> <a name="bundledir" id="projen.javascript.Bundler.property.bundledir"></a>

```typescript
public readonly bundledir: string;
```

- *Type:* string

Root bundle directory.

---

##### `bundleTask`<sup>Required</sup> <a name="bundleTask" id="projen.javascript.Bundler.property.bundleTask"></a>

```typescript
public readonly bundleTask: Task;
```

- *Type:* projen.Task

Gets or creates the singleton "bundle" task of the project.

If the project doesn't have a "bundle" task, it will be created and spawned
during the pre-compile phase.

---

##### `esbuildVersion`<sup>Optional</sup> <a name="esbuildVersion" id="projen.javascript.Bundler.property.esbuildVersion"></a>

```typescript
public readonly esbuildVersion: string;
```

- *Type:* string

The semantic version requirement for `esbuild` (if defined).

---


### Eslint <a name="Eslint" id="projen.javascript.Eslint"></a>

Represents eslint configuration.

#### Initializers <a name="Initializers" id="projen.javascript.Eslint.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Eslint(project: NodeProject, options: EslintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Eslint.Initializer.parameter.project">project</a></code> | <code><a href="#projen.javascript.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#projen.javascript.Eslint.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.EslintOptions">EslintOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Eslint.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.javascript.NodeProject">NodeProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.Eslint.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.EslintOptions">EslintOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Eslint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Eslint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Eslint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Eslint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.Eslint.addExtends">addExtends</a></code> | Adds an `extends` item to the eslint configuration. |
| <code><a href="#projen.javascript.Eslint.addIgnorePattern">addIgnorePattern</a></code> | Do not lint these files. |
| <code><a href="#projen.javascript.Eslint.addLintPattern">addLintPattern</a></code> | Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ]). |
| <code><a href="#projen.javascript.Eslint.addOverride">addOverride</a></code> | Add an eslint override. |
| <code><a href="#projen.javascript.Eslint.addPlugins">addPlugins</a></code> | Adds an eslint plugin. |
| <code><a href="#projen.javascript.Eslint.addRules">addRules</a></code> | Add an eslint rule. |
| <code><a href="#projen.javascript.Eslint.allowDevDeps">allowDevDeps</a></code> | Add a glob file pattern which allows importing dev dependencies. |

---

##### `toString` <a name="toString" id="projen.javascript.Eslint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Eslint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Eslint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Eslint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExtends` <a name="addExtends" id="projen.javascript.Eslint.addExtends"></a>

```typescript
public addExtends(extendList: string): void
```

Adds an `extends` item to the eslint configuration.

###### `extendList`<sup>Required</sup> <a name="extendList" id="projen.javascript.Eslint.addExtends.parameter.extendList"></a>

- *Type:* string

The list of "extends" to add.

---

##### `addIgnorePattern` <a name="addIgnorePattern" id="projen.javascript.Eslint.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

Do not lint these files.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Eslint.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

---

##### `addLintPattern` <a name="addLintPattern" id="projen.javascript.Eslint.addLintPattern"></a>

```typescript
public addLintPattern(pattern: string): void
```

Add a file, glob pattern or directory with source files to lint (e.g. [ "src" ]).

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Eslint.addLintPattern.parameter.pattern"></a>

- *Type:* string

---

##### `addOverride` <a name="addOverride" id="projen.javascript.Eslint.addOverride"></a>

```typescript
public addOverride(override: EslintOverride): void
```

Add an eslint override.

###### `override`<sup>Required</sup> <a name="override" id="projen.javascript.Eslint.addOverride.parameter.override"></a>

- *Type:* <a href="#projen.javascript.EslintOverride">EslintOverride</a>

---

##### `addPlugins` <a name="addPlugins" id="projen.javascript.Eslint.addPlugins"></a>

```typescript
public addPlugins(plugins: string): void
```

Adds an eslint plugin.

###### `plugins`<sup>Required</sup> <a name="plugins" id="projen.javascript.Eslint.addPlugins.parameter.plugins"></a>

- *Type:* string

The names of plugins to add.

---

##### `addRules` <a name="addRules" id="projen.javascript.Eslint.addRules"></a>

```typescript
public addRules(rules: {[ key: string ]: any}): void
```

Add an eslint rule.

###### `rules`<sup>Required</sup> <a name="rules" id="projen.javascript.Eslint.addRules.parameter.rules"></a>

- *Type:* {[ key: string ]: any}

---

##### `allowDevDeps` <a name="allowDevDeps" id="projen.javascript.Eslint.allowDevDeps"></a>

```typescript
public allowDevDeps(pattern: string): void
```

Add a glob file pattern which allows importing dev dependencies.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Eslint.allowDevDeps.parameter.pattern"></a>

- *Type:* string

glob pattern.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Eslint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Eslint.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.Eslint.of">of</a></code> | Returns the singletone Eslint component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Eslint.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Eslint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Eslint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Eslint.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Eslint.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Eslint.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.Eslint.of"></a>

```typescript
import { javascript } from 'projen'

javascript.Eslint.of(project: Project)
```

Returns the singletone Eslint component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Eslint.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Eslint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Eslint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Eslint.property.config">config</a></code> | <code>any</code> | Direct access to the eslint configuration (escape hatch). |
| <code><a href="#projen.javascript.Eslint.property.eslintTask">eslintTask</a></code> | <code>projen.Task</code> | eslint task. |
| <code><a href="#projen.javascript.Eslint.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | File patterns that should not be linted. |
| <code><a href="#projen.javascript.Eslint.property.lintPatterns">lintPatterns</a></code> | <code>string[]</code> | Returns an immutable copy of the lintPatterns being used by this eslint configuration. |
| <code><a href="#projen.javascript.Eslint.property.overrides">overrides</a></code> | <code><a href="#projen.javascript.EslintOverride">EslintOverride</a>[]</code> | eslint overrides. |
| <code><a href="#projen.javascript.Eslint.property.rules">rules</a></code> | <code>{[ key: string ]: any[]}</code> | eslint rules. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Eslint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Eslint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="projen.javascript.Eslint.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

Direct access to the eslint configuration (escape hatch).

---

##### `eslintTask`<sup>Required</sup> <a name="eslintTask" id="projen.javascript.Eslint.property.eslintTask"></a>

```typescript
public readonly eslintTask: Task;
```

- *Type:* projen.Task

eslint task.

---

##### `ignorePatterns`<sup>Required</sup> <a name="ignorePatterns" id="projen.javascript.Eslint.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]

File patterns that should not be linted.

---

##### `lintPatterns`<sup>Required</sup> <a name="lintPatterns" id="projen.javascript.Eslint.property.lintPatterns"></a>

```typescript
public readonly lintPatterns: string[];
```

- *Type:* string[]

Returns an immutable copy of the lintPatterns being used by this eslint configuration.

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="projen.javascript.Eslint.property.overrides"></a>

```typescript
public readonly overrides: EslintOverride[];
```

- *Type:* <a href="#projen.javascript.EslintOverride">EslintOverride</a>[]

eslint overrides.

---

##### `rules`<sup>Required</sup> <a name="rules" id="projen.javascript.Eslint.property.rules"></a>

```typescript
public readonly rules: {[ key: string ]: any[]};
```

- *Type:* {[ key: string ]: any[]}

eslint rules.

---


### Jest <a name="Jest" id="projen.javascript.Jest"></a>

Installs the following npm scripts:.

`test`, intended for testing locally and in CI. Will update snapshots unless `updateSnapshot: UpdateSnapshot: NEVER` is set.
- `test:watch`, intended for automatically rerunning tests when files change.
- `test:update`, intended for testing locally and updating snapshots to match the latest unit under test. Only available when `updateSnapshot: UpdateSnapshot: NEVER`.

#### Initializers <a name="Initializers" id="projen.javascript.Jest.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Jest(project: NodeProject, options?: JestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Jest.Initializer.parameter.project">project</a></code> | <code><a href="#projen.javascript.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#projen.javascript.Jest.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.JestOptions">JestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Jest.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.javascript.NodeProject">NodeProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.Jest.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.JestOptions">JestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Jest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Jest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Jest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Jest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.Jest.addIgnorePattern">addIgnorePattern</a></code> | *No description.* |
| <code><a href="#projen.javascript.Jest.addModuleNameMappers">addModuleNameMappers</a></code> | Adds one or more moduleNameMapper entries to Jest's configuration. |
| <code><a href="#projen.javascript.Jest.addModulePaths">addModulePaths</a></code> | Adds one or more modulePaths to Jest's configuration. |
| <code><a href="#projen.javascript.Jest.addReporter">addReporter</a></code> | *No description.* |
| <code><a href="#projen.javascript.Jest.addRoots">addRoots</a></code> | Adds one or more roots to Jest's configuration. |
| <code><a href="#projen.javascript.Jest.addSetupFile">addSetupFile</a></code> | Adds a a setup file to Jest's setupFiles configuration. |
| <code><a href="#projen.javascript.Jest.addSetupFileAfterEnv">addSetupFileAfterEnv</a></code> | Adds a a setup file to Jest's setupFilesAfterEnv configuration. |
| <code><a href="#projen.javascript.Jest.addSnapshotResolver">addSnapshotResolver</a></code> | *No description.* |
| <code><a href="#projen.javascript.Jest.addTestMatch">addTestMatch</a></code> | Adds a test match pattern. |
| <code><a href="#projen.javascript.Jest.addWatchIgnorePattern">addWatchIgnorePattern</a></code> | Adds a watch ignore pattern. |

---

##### `toString` <a name="toString" id="projen.javascript.Jest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Jest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Jest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Jest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addIgnorePattern` <a name="addIgnorePattern" id="projen.javascript.Jest.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Jest.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

---

##### `addModuleNameMappers` <a name="addModuleNameMappers" id="projen.javascript.Jest.addModuleNameMappers"></a>

```typescript
public addModuleNameMappers(moduleNameMapperAdditions: {[ key: string ]: string | string[]}): void
```

Adds one or more moduleNameMapper entries to Jest's configuration.

Will overwrite if the same key is used as a pre-existing one.

###### `moduleNameMapperAdditions`<sup>Required</sup> <a name="moduleNameMapperAdditions" id="projen.javascript.Jest.addModuleNameMappers.parameter.moduleNameMapperAdditions"></a>

- *Type:* {[ key: string ]: string | string[]}

A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module.

---

##### `addModulePaths` <a name="addModulePaths" id="projen.javascript.Jest.addModulePaths"></a>

```typescript
public addModulePaths(modulePaths: string): void
```

Adds one or more modulePaths to Jest's configuration.

###### `modulePaths`<sup>Required</sup> <a name="modulePaths" id="projen.javascript.Jest.addModulePaths.parameter.modulePaths"></a>

- *Type:* string

An array of absolute paths to additional locations to search when resolving modules   *.

---

##### `addReporter` <a name="addReporter" id="projen.javascript.Jest.addReporter"></a>

```typescript
public addReporter(reporter: JestReporter): void
```

###### `reporter`<sup>Required</sup> <a name="reporter" id="projen.javascript.Jest.addReporter.parameter.reporter"></a>

- *Type:* <a href="#projen.javascript.JestReporter">JestReporter</a>

---

##### `addRoots` <a name="addRoots" id="projen.javascript.Jest.addRoots"></a>

```typescript
public addRoots(roots: string): void
```

Adds one or more roots to Jest's configuration.

###### `roots`<sup>Required</sup> <a name="roots" id="projen.javascript.Jest.addRoots.parameter.roots"></a>

- *Type:* string

A list of paths to directories that Jest should use to search for files in.

---

##### `addSetupFile` <a name="addSetupFile" id="projen.javascript.Jest.addSetupFile"></a>

```typescript
public addSetupFile(file: string): void
```

Adds a a setup file to Jest's setupFiles configuration.

###### `file`<sup>Required</sup> <a name="file" id="projen.javascript.Jest.addSetupFile.parameter.file"></a>

- *Type:* string

File path to setup file.

---

##### `addSetupFileAfterEnv` <a name="addSetupFileAfterEnv" id="projen.javascript.Jest.addSetupFileAfterEnv"></a>

```typescript
public addSetupFileAfterEnv(file: string): void
```

Adds a a setup file to Jest's setupFilesAfterEnv configuration.

###### `file`<sup>Required</sup> <a name="file" id="projen.javascript.Jest.addSetupFileAfterEnv.parameter.file"></a>

- *Type:* string

File path to setup file.

---

##### `addSnapshotResolver` <a name="addSnapshotResolver" id="projen.javascript.Jest.addSnapshotResolver"></a>

```typescript
public addSnapshotResolver(file: string): void
```

###### `file`<sup>Required</sup> <a name="file" id="projen.javascript.Jest.addSnapshotResolver.parameter.file"></a>

- *Type:* string

---

##### `addTestMatch` <a name="addTestMatch" id="projen.javascript.Jest.addTestMatch"></a>

```typescript
public addTestMatch(pattern: string): void
```

Adds a test match pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Jest.addTestMatch.parameter.pattern"></a>

- *Type:* string

glob pattern to match for tests.

---

##### `addWatchIgnorePattern` <a name="addWatchIgnorePattern" id="projen.javascript.Jest.addWatchIgnorePattern"></a>

```typescript
public addWatchIgnorePattern(pattern: string): void
```

Adds a watch ignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Jest.addWatchIgnorePattern.parameter.pattern"></a>

- *Type:* string

The pattern (regular expression).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Jest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Jest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.Jest.of">of</a></code> | Returns the singleton Jest component of a project or undefined if there is none. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Jest.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Jest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Jest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Jest.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Jest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Jest.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.Jest.of"></a>

```typescript
import { javascript } from 'projen'

javascript.Jest.of(project: Project)
```

Returns the singleton Jest component of a project or undefined if there is none.

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Jest.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Jest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Jest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Jest.property.config">config</a></code> | <code>any</code> | Escape hatch. |
| <code><a href="#projen.javascript.Jest.property.jestVersion">jestVersion</a></code> | <code>string</code> | Jest version, including `@` symbol, like `@^29`. |
| <code><a href="#projen.javascript.Jest.property.file">file</a></code> | <code>projen.JsonFile</code> | Jest config file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Jest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Jest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `config`<sup>Required</sup> <a name="config" id="projen.javascript.Jest.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

Escape hatch.

---

##### `jestVersion`<sup>Required</sup> <a name="jestVersion" id="projen.javascript.Jest.property.jestVersion"></a>

```typescript
public readonly jestVersion: string;
```

- *Type:* string

Jest version, including `@` symbol, like `@^29`.

---

##### `file`<sup>Optional</sup> <a name="file" id="projen.javascript.Jest.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

Jest config file.

`undefined` if settings are written to `package.json`

---


### LicenseChecker <a name="LicenseChecker" id="projen.javascript.LicenseChecker"></a>

Enforces allowed licenses used by dependencies.

#### Initializers <a name="Initializers" id="projen.javascript.LicenseChecker.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.LicenseChecker(scope: Construct, options: LicenseCheckerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.LicenseChecker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen.javascript.LicenseChecker.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.LicenseCheckerOptions">LicenseCheckerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.javascript.LicenseChecker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.LicenseChecker.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.LicenseCheckerOptions">LicenseCheckerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.LicenseChecker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.LicenseChecker.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.LicenseChecker.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.LicenseChecker.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.javascript.LicenseChecker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.LicenseChecker.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.LicenseChecker.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.LicenseChecker.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.LicenseChecker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.LicenseChecker.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.LicenseChecker.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.LicenseChecker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.LicenseChecker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.LicenseChecker.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.LicenseChecker.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.LicenseChecker.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.LicenseChecker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.LicenseChecker.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.LicenseChecker.property.task">task</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.LicenseChecker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.LicenseChecker.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `task`<sup>Required</sup> <a name="task" id="projen.javascript.LicenseChecker.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

---


### NodePackage <a name="NodePackage" id="projen.javascript.NodePackage"></a>

Represents the npm `package.json` file.

#### Initializers <a name="Initializers" id="projen.javascript.NodePackage.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.NodePackage(project: Project, options?: NodePackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodePackage.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.NodePackage.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.NodePackageOptions">NodePackageOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.NodePackage.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.NodePackage.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.NodePackageOptions">NodePackageOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NodePackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.NodePackage.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.NodePackage.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.NodePackage.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.NodePackage.addBin">addBin</a></code> | *No description.* |
| <code><a href="#projen.javascript.NodePackage.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.javascript.NodePackage.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.javascript.NodePackage.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.javascript.NodePackage.addEngine">addEngine</a></code> | Adds an `engines` requirement to your package. |
| <code><a href="#projen.javascript.NodePackage.addField">addField</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.javascript.NodePackage.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.javascript.NodePackage.addPackageResolutions">addPackageResolutions</a></code> | Defines resolutions for dependencies to change the normally resolved version of a dependency to something else. |
| <code><a href="#projen.javascript.NodePackage.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.javascript.NodePackage.addVersion">addVersion</a></code> | Sets the package version. |
| <code><a href="#projen.javascript.NodePackage.hasScript">hasScript</a></code> | Indicates if a script by the given name is defined. |
| <code><a href="#projen.javascript.NodePackage.removeScript">removeScript</a></code> | Removes an npm script (always successful). |
| <code><a href="#projen.javascript.NodePackage.setScript">setScript</a></code> | Add a npm package.json script. |
| <code><a href="#projen.javascript.NodePackage.tryResolveDependencyVersion">tryResolveDependencyVersion</a></code> | Attempt to resolve the currently installed version for a given dependency. |

---

##### `toString` <a name="toString" id="projen.javascript.NodePackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.NodePackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.NodePackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.NodePackage.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBin` <a name="addBin" id="projen.javascript.NodePackage.addBin"></a>

```typescript
public addBin(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.javascript.NodePackage.addBin.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.javascript.NodePackage.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodePackage.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="projen.javascript.NodePackage.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodePackage.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.javascript.NodePackage.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodePackage.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addEngine` <a name="addEngine" id="projen.javascript.NodePackage.addEngine"></a>

```typescript
public addEngine(engine: string, version: string): void
```

Adds an `engines` requirement to your package.

###### `engine`<sup>Required</sup> <a name="engine" id="projen.javascript.NodePackage.addEngine.parameter.engine"></a>

- *Type:* string

The engine (e.g. `node`).

---

###### `version`<sup>Required</sup> <a name="version" id="projen.javascript.NodePackage.addEngine.parameter.version"></a>

- *Type:* string

The semantic version requirement (e.g. `^10`).

---

##### `addField` <a name="addField" id="projen.javascript.NodePackage.addField"></a>

```typescript
public addField(name: string, value: any): void
```

Directly set fields in `package.json`.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodePackage.addField.parameter.name"></a>

- *Type:* string

field name.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.javascript.NodePackage.addField.parameter.value"></a>

- *Type:* any

field value.

---

##### `addKeywords` <a name="addKeywords" id="projen.javascript.NodePackage.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.javascript.NodePackage.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPackageResolutions` <a name="addPackageResolutions" id="projen.javascript.NodePackage.addPackageResolutions"></a>

```typescript
public addPackageResolutions(resolutions: string): void
```

Defines resolutions for dependencies to change the normally resolved version of a dependency to something else.

###### `resolutions`<sup>Required</sup> <a name="resolutions" id="projen.javascript.NodePackage.addPackageResolutions.parameter.resolutions"></a>

- *Type:* string

Names resolutions to be added.

Specify a version or
range with this syntax:
`module@^7`

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.javascript.NodePackage.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodePackage.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addVersion` <a name="addVersion" id="projen.javascript.NodePackage.addVersion"></a>

```typescript
public addVersion(version: string): void
```

Sets the package version.

###### `version`<sup>Required</sup> <a name="version" id="projen.javascript.NodePackage.addVersion.parameter.version"></a>

- *Type:* string

Package version.

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.javascript.NodePackage.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the given name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodePackage.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.javascript.NodePackage.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes an npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodePackage.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `setScript` <a name="setScript" id="projen.javascript.NodePackage.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Add a npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodePackage.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.javascript.NodePackage.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `tryResolveDependencyVersion` <a name="tryResolveDependencyVersion" id="projen.javascript.NodePackage.tryResolveDependencyVersion"></a>

```typescript
public tryResolveDependencyVersion(dependencyName: string): string
```

Attempt to resolve the currently installed version for a given dependency.

###### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="projen.javascript.NodePackage.tryResolveDependencyVersion.parameter.dependencyName"></a>

- *Type:* string

Dependency to resolve for.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NodePackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.NodePackage.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.NodePackage.of">of</a></code> | Returns the `NodePackage` instance associated with a project or `undefined` if there is no NodePackage. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.NodePackage.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.NodePackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NodePackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.NodePackage.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.NodePackage.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NodePackage.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.NodePackage.of"></a>

```typescript
import { javascript } from 'projen'

javascript.NodePackage.of(project: Project)
```

Returns the `NodePackage` instance associated with a project or `undefined` if there is no NodePackage.

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.NodePackage.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodePackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.NodePackage.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.NodePackage.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow project to take library dependencies. |
| <code><a href="#projen.javascript.NodePackage.property.entrypoint">entrypoint</a></code> | <code>string</code> | The module's entrypoint (e.g. `lib/index.js`). |
| <code><a href="#projen.javascript.NodePackage.property.file">file</a></code> | <code>projen.JsonFile</code> | The package.json file. |
| <code><a href="#projen.javascript.NodePackage.property.installAndUpdateLockfileCommand">installAndUpdateLockfileCommand</a></code> | <code>string</code> | Renders `yarn install` or `npm install` with lockfile update (not frozen). |
| <code><a href="#projen.javascript.NodePackage.property.installCiTask">installCiTask</a></code> | <code>projen.Task</code> | The task for installing project dependencies (frozen). |
| <code><a href="#projen.javascript.NodePackage.property.installCommand">installCommand</a></code> | <code>string</code> | Returns the command to execute in order to install all dependencies (always frozen). |
| <code><a href="#projen.javascript.NodePackage.property.installTask">installTask</a></code> | <code>projen.Task</code> | The task for installing project dependencies (non-frozen). |
| <code><a href="#projen.javascript.NodePackage.property.lockFile">lockFile</a></code> | <code>string</code> | The name of the lock file. |
| <code><a href="#projen.javascript.NodePackage.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.javascript.NodePackage.property.npmAccess">npmAccess</a></code> | <code><a href="#projen.javascript.NpmAccess">NpmAccess</a></code> | npm package access level. |
| <code><a href="#projen.javascript.NodePackage.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when package is published. |
| <code><a href="#projen.javascript.NodePackage.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The npm registry host (e.g. `registry.npmjs.org`). |
| <code><a href="#projen.javascript.NodePackage.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | npm registry (e.g. `https://registry.npmjs.org`). Use `npmRegistryHost` to get just the host name. |
| <code><a href="#projen.javascript.NodePackage.property.packageManager">packageManager</a></code> | <code><a href="#projen.javascript.NodePackageManager">NodePackageManager</a></code> | The package manager to use. |
| <code><a href="#projen.javascript.NodePackage.property.packageName">packageName</a></code> | <code>string</code> | The name of the npm package. |
| <code><a href="#projen.javascript.NodePackage.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command which executes "projen". |
| <code><a href="#projen.javascript.NodePackage.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code><a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a></code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.javascript.NodePackage.property.license">license</a></code> | <code>string</code> | The SPDX license of this module. |
| <code><a href="#projen.javascript.NodePackage.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.javascript.NodePackage.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.javascript.NodePackage.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.javascript.NodePackage.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.javascript.NodePackage.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code><a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]</code> | Options for privately hosted scoped packages. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.NodePackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.NodePackage.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `allowLibraryDependencies`<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.javascript.NodePackage.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

Allow project to take library dependencies.

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="projen.javascript.NodePackage.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

The module's entrypoint (e.g. `lib/index.js`).

---

##### `file`<sup>Required</sup> <a name="file" id="projen.javascript.NodePackage.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

The package.json file.

---

##### `installAndUpdateLockfileCommand`<sup>Required</sup> <a name="installAndUpdateLockfileCommand" id="projen.javascript.NodePackage.property.installAndUpdateLockfileCommand"></a>

```typescript
public readonly installAndUpdateLockfileCommand: string;
```

- *Type:* string

Renders `yarn install` or `npm install` with lockfile update (not frozen).

---

##### `installCiTask`<sup>Required</sup> <a name="installCiTask" id="projen.javascript.NodePackage.property.installCiTask"></a>

```typescript
public readonly installCiTask: Task;
```

- *Type:* projen.Task

The task for installing project dependencies (frozen).

---

##### `installCommand`<sup>Required</sup> <a name="installCommand" id="projen.javascript.NodePackage.property.installCommand"></a>

```typescript
public readonly installCommand: string;
```

- *Type:* string

Returns the command to execute in order to install all dependencies (always frozen).

---

##### `installTask`<sup>Required</sup> <a name="installTask" id="projen.javascript.NodePackage.property.installTask"></a>

```typescript
public readonly installTask: Task;
```

- *Type:* projen.Task

The task for installing project dependencies (non-frozen).

---

##### `lockFile`<sup>Required</sup> <a name="lockFile" id="projen.javascript.NodePackage.property.lockFile"></a>

```typescript
public readonly lockFile: string;
```

- *Type:* string

The name of the lock file.

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.javascript.NodePackage.property.manifest"></a>

- *Deprecated:* use `addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmAccess`<sup>Required</sup> <a name="npmAccess" id="projen.javascript.NodePackage.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* <a href="#projen.javascript.NpmAccess">NpmAccess</a>

npm package access level.

---

##### `npmProvenance`<sup>Required</sup> <a name="npmProvenance" id="projen.javascript.NodePackage.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean

Should provenance statements be generated when package is published.

---

##### `npmRegistry`<sup>Required</sup> <a name="npmRegistry" id="projen.javascript.NodePackage.property.npmRegistry"></a>

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The npm registry host (e.g. `registry.npmjs.org`).

---

##### `npmRegistryUrl`<sup>Required</sup> <a name="npmRegistryUrl" id="projen.javascript.NodePackage.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string

npm registry (e.g. `https://registry.npmjs.org`). Use `npmRegistryHost` to get just the host name.

---

##### `packageManager`<sup>Required</sup> <a name="packageManager" id="projen.javascript.NodePackage.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* <a href="#projen.javascript.NodePackageManager">NodePackageManager</a>

The package manager to use.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="projen.javascript.NodePackage.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

The name of the npm package.

---

##### ~~`projenCommand`~~<sup>Required</sup> <a name="projenCommand" id="projen.javascript.NodePackage.property.projenCommand"></a>

- *Deprecated:* use `project.projenCommand` instead.

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command which executes "projen".

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.javascript.NodePackage.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* <a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a>
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.javascript.NodePackage.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

The SPDX license of this module.

`undefined` if this package is not licensed.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.javascript.NodePackage.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum.

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.javascript.NodePackage.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum

Minimum node.js version required by this package.

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.javascript.NodePackage.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.javascript.NodePackage.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.javascript.NodePackage.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* <a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]
- *Default:* undefined

Options for privately hosted scoped packages.

---


### NodeProject <a name="NodeProject" id="projen.javascript.NodeProject"></a>

Node.js project.

#### Initializers <a name="Initializers" id="projen.javascript.NodeProject.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.NodeProject(options: NodeProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodeProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.NodeProjectOptions">NodeProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.NodeProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.NodeProjectOptions">NodeProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NodeProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.NodeProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.javascript.NodeProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.javascript.NodeProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen.javascript.NodeProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.javascript.NodeProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.javascript.NodeProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen.javascript.NodeProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.javascript.NodeProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.javascript.NodeProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.javascript.NodeProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.javascript.NodeProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.javascript.NodeProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.javascript.NodeProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.javascript.NodeProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.javascript.NodeProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen.javascript.NodeProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen.javascript.NodeProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.javascript.NodeProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen.javascript.NodeProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen.javascript.NodeProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen.javascript.NodeProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen.javascript.NodeProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen.javascript.NodeProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen.javascript.NodeProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen.javascript.NodeProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen.javascript.NodeProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen.javascript.NodeProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen.javascript.NodeProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen.javascript.NodeProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.javascript.NodeProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.javascript.NodeProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.javascript.NodeProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.NodeProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.javascript.NodeProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.NodeProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen.javascript.NodeProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.javascript.NodeProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.javascript.NodeProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.javascript.NodeProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.javascript.NodeProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen.javascript.NodeProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.NodeProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.NodeProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.javascript.NodeProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.javascript.NodeProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen.javascript.NodeProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.javascript.NodeProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.javascript.NodeProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.javascript.NodeProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.javascript.NodeProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.javascript.NodeProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.javascript.NodeProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.javascript.NodeProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.javascript.NodeProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.javascript.NodeProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen.javascript.NodeProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen.javascript.NodeProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen.javascript.NodeProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodeProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen.javascript.NodeProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.javascript.NodeProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen.javascript.NodeProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodeProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen.javascript.NodeProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodeProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen.javascript.NodeProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen.javascript.NodeProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen.javascript.NodeProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen.javascript.NodeProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen.javascript.NodeProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodeProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen.javascript.NodeProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen.javascript.NodeProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen.javascript.NodeProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen.javascript.NodeProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen.javascript.NodeProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen.javascript.NodeProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen.javascript.NodeProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.NodeProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* <a href="#projen.javascript.RenderWorkflowSetupOptions">RenderWorkflowSetupOptions</a>

Options.

---

##### `setScript` <a name="setScript" id="projen.javascript.NodeProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen.javascript.NodeProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NodeProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.NodeProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.javascript.NodeProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.NodeProject.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.NodeProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NodeProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.javascript.NodeProject.isProject"></a>

```typescript
import { javascript } from 'projen'

javascript.NodeProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NodeProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.NodeProject.of"></a>

```typescript
import { javascript } from 'projen'

javascript.NodeProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.javascript.NodeProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodeProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.NodeProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.javascript.NodeProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen.javascript.NodeProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen.javascript.NodeProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.javascript.NodeProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen.javascript.NodeProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen.javascript.NodeProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen.javascript.NodeProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen.javascript.NodeProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.javascript.NodeProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.javascript.NodeProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen.javascript.NodeProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.javascript.NodeProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen.javascript.NodeProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.javascript.NodeProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen.javascript.NodeProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.javascript.NodeProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.javascript.NodeProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen.javascript.NodeProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen.javascript.NodeProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen.javascript.NodeProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen.javascript.NodeProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen.javascript.NodeProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen.javascript.NodeProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen.javascript.NodeProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen.javascript.NodeProject.property.bundler">bundler</a></code> | <code><a href="#projen.javascript.Bundler">Bundler</a></code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.npmrc">npmrc</a></code> | <code><a href="#projen.javascript.NpmConfig">NpmConfig</a></code> | The .npmrc file. |
| <code><a href="#projen.javascript.NodeProject.property.package">package</a></code> | <code><a href="#projen.javascript.NodePackage">NodePackage</a></code> | API for managing the node package. |
| <code><a href="#projen.javascript.NodeProject.property.packageManager">packageManager</a></code> | <code><a href="#projen.javascript.NodePackageManager">NodePackageManager</a></code> | The package manager to use. |
| <code><a href="#projen.javascript.NodeProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen.javascript.NodeProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen.javascript.NodeProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen.javascript.NodeProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen.javascript.NodeProject.property.jest">jest</a></code> | <code><a href="#projen.javascript.Jest">Jest</a></code> | The Jest configuration (if enabled). |
| <code><a href="#projen.javascript.NodeProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen.javascript.NodeProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen.javascript.NodeProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen.javascript.NodeProject.property.prettier">prettier</a></code> | <code><a href="#projen.javascript.Prettier">Prettier</a></code> | *No description.* |
| <code><a href="#projen.javascript.NodeProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen.javascript.NodeProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen.javascript.NodeProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code><a href="#projen.javascript.UpgradeDependencies">UpgradeDependencies</a></code> | The upgrade workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.NodeProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.javascript.NodeProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.javascript.NodeProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.javascript.NodeProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen.javascript.NodeProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.javascript.NodeProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.javascript.NodeProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.javascript.NodeProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.javascript.NodeProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.javascript.NodeProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.javascript.NodeProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.javascript.NodeProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.javascript.NodeProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.javascript.NodeProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.javascript.NodeProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.javascript.NodeProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.javascript.NodeProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.javascript.NodeProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.javascript.NodeProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.javascript.NodeProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.javascript.NodeProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.javascript.NodeProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.javascript.NodeProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.javascript.NodeProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen.javascript.NodeProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen.javascript.NodeProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.javascript.NodeProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.javascript.NodeProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.javascript.NodeProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.javascript.NodeProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen.javascript.NodeProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.javascript.NodeProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen.javascript.NodeProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen.javascript.NodeProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* <a href="#projen.javascript.Bundler">Bundler</a>

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen.javascript.NodeProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen.javascript.NodeProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen.javascript.NodeProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* <a href="#projen.javascript.NpmConfig">NpmConfig</a>

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen.javascript.NodeProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* <a href="#projen.javascript.NodePackage">NodePackage</a>

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen.javascript.NodeProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* <a href="#projen.javascript.NodePackageManager">NodePackageManager</a>

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen.javascript.NodeProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.javascript.NodeProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.javascript.NodeProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen.javascript.NodeProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.javascript.NodeProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* <a href="#projen.javascript.Jest">Jest</a>

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.javascript.NodeProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.javascript.NodeProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen.javascript.NodeProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.javascript.NodeProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* <a href="#projen.javascript.Prettier">Prettier</a>

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen.javascript.NodeProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.javascript.NodeProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen.javascript.NodeProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* <a href="#projen.javascript.UpgradeDependencies">UpgradeDependencies</a>

The upgrade workflow.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodeProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.javascript.NodeProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NpmConfig <a name="NpmConfig" id="projen.javascript.NpmConfig"></a>

File representing the local NPM config in .npmrc.

#### Initializers <a name="Initializers" id="projen.javascript.NpmConfig.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.NpmConfig(project: NodeProject, options?: NpmConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NpmConfig.Initializer.parameter.project">project</a></code> | <code><a href="#projen.javascript.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#projen.javascript.NpmConfig.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.NpmConfigOptions">NpmConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.NpmConfig.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.javascript.NodeProject">NodeProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.NpmConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.NpmConfigOptions">NpmConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NpmConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.NpmConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.NpmConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.NpmConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.NpmConfig.addConfig">addConfig</a></code> | configure a generic property. |
| <code><a href="#projen.javascript.NpmConfig.addRegistry">addRegistry</a></code> | configure a scoped registry. |

---

##### `toString` <a name="toString" id="projen.javascript.NpmConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.NpmConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.NpmConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.NpmConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addConfig` <a name="addConfig" id="projen.javascript.NpmConfig.addConfig"></a>

```typescript
public addConfig(name: string, value: string): void
```

configure a generic property.

###### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NpmConfig.addConfig.parameter.name"></a>

- *Type:* string

the name of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.javascript.NpmConfig.addConfig.parameter.value"></a>

- *Type:* string

the value of the property.

---

##### `addRegistry` <a name="addRegistry" id="projen.javascript.NpmConfig.addRegistry"></a>

```typescript
public addRegistry(url: string, scope?: string): void
```

configure a scoped registry.

###### `url`<sup>Required</sup> <a name="url" id="projen.javascript.NpmConfig.addRegistry.parameter.url"></a>

- *Type:* string

the URL of the registry to use.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="projen.javascript.NpmConfig.addRegistry.parameter.scope"></a>

- *Type:* string

the scope the registry is used for;

leave empty for the default registry

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NpmConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.NpmConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.NpmConfig.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.NpmConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NpmConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.NpmConfig.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.NpmConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.NpmConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NpmConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.NpmConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.NpmConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.NpmConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Prettier <a name="Prettier" id="projen.javascript.Prettier"></a>

Represents prettier configuration.

#### Initializers <a name="Initializers" id="projen.javascript.Prettier.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Prettier(project: NodeProject, options: PrettierOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Prettier.Initializer.parameter.project">project</a></code> | <code><a href="#projen.javascript.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#projen.javascript.Prettier.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.PrettierOptions">PrettierOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Prettier.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.javascript.NodeProject">NodeProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.Prettier.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.PrettierOptions">PrettierOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Prettier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Prettier.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Prettier.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Prettier.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.Prettier.addIgnorePattern">addIgnorePattern</a></code> | Defines Prettier ignore Patterns these patterns will be added to the file .prettierignore. |
| <code><a href="#projen.javascript.Prettier.addOverride">addOverride</a></code> | Add a prettier override. |

---

##### `toString` <a name="toString" id="projen.javascript.Prettier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Prettier.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Prettier.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Prettier.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addIgnorePattern` <a name="addIgnorePattern" id="projen.javascript.Prettier.addIgnorePattern"></a>

```typescript
public addIgnorePattern(pattern: string): void
```

Defines Prettier ignore Patterns these patterns will be added to the file .prettierignore.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.Prettier.addIgnorePattern.parameter.pattern"></a>

- *Type:* string

filepatterns so exclude from prettier formatting.

---

##### `addOverride` <a name="addOverride" id="projen.javascript.Prettier.addOverride"></a>

```typescript
public addOverride(override: PrettierOverride): void
```

Add a prettier override.

> [https://prettier.io/docs/en/configuration.html#configuration-overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides)

###### `override`<sup>Required</sup> <a name="override" id="projen.javascript.Prettier.addOverride.parameter.override"></a>

- *Type:* <a href="#projen.javascript.PrettierOverride">PrettierOverride</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Prettier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Prettier.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.Prettier.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Prettier.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Prettier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Prettier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Prettier.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Prettier.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Prettier.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.Prettier.of"></a>

```typescript
import { javascript } from 'projen'

javascript.Prettier.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Prettier.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Prettier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Prettier.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Prettier.property.overrides">overrides</a></code> | <code><a href="#projen.javascript.PrettierOverride">PrettierOverride</a>[]</code> | Returns all Prettier overrides. |
| <code><a href="#projen.javascript.Prettier.property.settings">settings</a></code> | <code><a href="#projen.javascript.PrettierSettings">PrettierSettings</a></code> | Direct access to the prettier settings. |
| <code><a href="#projen.javascript.Prettier.property.ignoreFile">ignoreFile</a></code> | <code>projen.IgnoreFile</code> | The .prettierIgnore file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Prettier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Prettier.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="projen.javascript.Prettier.property.overrides"></a>

```typescript
public readonly overrides: PrettierOverride[];
```

- *Type:* <a href="#projen.javascript.PrettierOverride">PrettierOverride</a>[]

Returns all Prettier overrides.

---

##### `settings`<sup>Required</sup> <a name="settings" id="projen.javascript.Prettier.property.settings"></a>

```typescript
public readonly settings: PrettierSettings;
```

- *Type:* <a href="#projen.javascript.PrettierSettings">PrettierSettings</a>

Direct access to the prettier settings.

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="projen.javascript.Prettier.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .prettierIgnore file.

---


### Projenrc <a name="Projenrc" id="projen.javascript.Projenrc"></a>

Sets up a javascript project to use TypeScript for projenrc.

#### Initializers <a name="Initializers" id="projen.javascript.Projenrc.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Projenrc(project: Project, options?: ProjenrcOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Projenrc.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Projenrc.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.ProjenrcOptions">ProjenrcOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Projenrc.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.Projenrc.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.ProjenrcOptions">ProjenrcOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Projenrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Projenrc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Projenrc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Projenrc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.javascript.Projenrc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Projenrc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Projenrc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Projenrc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Projenrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Projenrc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.javascript.Projenrc.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Projenrc.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Projenrc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Projenrc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Projenrc.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Projenrc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Projenrc.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.javascript.Projenrc.of"></a>

```typescript
import { javascript } from 'projen'

javascript.Projenrc.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Projenrc.of.parameter.project"></a>

- *Type:* projen.Project

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Projenrc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Projenrc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Projenrc.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Projenrc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Projenrc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.javascript.Projenrc.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---


### TypescriptConfig <a name="TypescriptConfig" id="projen.javascript.TypescriptConfig"></a>

#### Initializers <a name="Initializers" id="projen.javascript.TypescriptConfig.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.TypescriptConfig(project: Project, options: TypescriptConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.TypescriptConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.TypescriptConfigOptions">TypescriptConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.TypescriptConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.TypescriptConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfigOptions">TypescriptConfigOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.TypescriptConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.TypescriptConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.TypescriptConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.TypescriptConfig.addExclude">addExclude</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.addExtends">addExtends</a></code> | Extend from base `TypescriptConfig` instance. |
| <code><a href="#projen.javascript.TypescriptConfig.addInclude">addInclude</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.resolveExtendsPath">resolveExtendsPath</a></code> | Resolve valid TypeScript extends paths relative to this config. |
| <code><a href="#projen.javascript.TypescriptConfig.setCompilerOptions">setCompilerOptions</a></code> | Set the `compilerOptions` field. |

---

##### `toString` <a name="toString" id="projen.javascript.TypescriptConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.TypescriptConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.TypescriptConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.TypescriptConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExclude` <a name="addExclude" id="projen.javascript.TypescriptConfig.addExclude"></a>

```typescript
public addExclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.TypescriptConfig.addExclude.parameter.pattern"></a>

- *Type:* string

---

##### `addExtends` <a name="addExtends" id="projen.javascript.TypescriptConfig.addExtends"></a>

```typescript
public addExtends(value: TypescriptConfig): void
```

Extend from base `TypescriptConfig` instance.

###### `value`<sup>Required</sup> <a name="value" id="projen.javascript.TypescriptConfig.addExtends.parameter.value"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

Base `TypescriptConfig` instance.

---

##### `addInclude` <a name="addInclude" id="projen.javascript.TypescriptConfig.addInclude"></a>

```typescript
public addInclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.javascript.TypescriptConfig.addInclude.parameter.pattern"></a>

- *Type:* string

---

##### `resolveExtendsPath` <a name="resolveExtendsPath" id="projen.javascript.TypescriptConfig.resolveExtendsPath"></a>

```typescript
public resolveExtendsPath(configPath: string): string
```

Resolve valid TypeScript extends paths relative to this config.

###### `configPath`<sup>Required</sup> <a name="configPath" id="projen.javascript.TypescriptConfig.resolveExtendsPath.parameter.configPath"></a>

- *Type:* string

Path to resolve against.

---

##### `setCompilerOptions` <a name="setCompilerOptions" id="projen.javascript.TypescriptConfig.setCompilerOptions"></a>

```typescript
public setCompilerOptions(newOptions: TypeScriptCompilerOptions, mergeMethod?: TypeScriptSetCompilerOptionsMergeMethod): void
```

Set the `compilerOptions` field.

###### `newOptions`<sup>Required</sup> <a name="newOptions" id="projen.javascript.TypescriptConfig.setCompilerOptions.parameter.newOptions"></a>

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

New `compilerOptions` to merge or override with.

---

###### `mergeMethod`<sup>Optional</sup> <a name="mergeMethod" id="projen.javascript.TypescriptConfig.setCompilerOptions.parameter.mergeMethod"></a>

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

How to merge the new options with the existing ones.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.TypescriptConfig.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.TypescriptConfig.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.TypescriptConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.TypescriptConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.TypescriptConfig.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.TypescriptConfig.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.TypescriptConfig.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.TypescriptConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.TypescriptConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | Copy of the contents of the `compilerOptions` field. |
| <code><a href="#projen.javascript.TypescriptConfig.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.property.extends">extends</a></code> | <code>string[]</code> | Array of base `tsconfig.json` paths. Any absolute paths are resolved relative to this instance, while any relative paths are used as is. |
| <code><a href="#projen.javascript.TypescriptConfig.property.file">file</a></code> | <code>projen.JsonFile</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfig.property.include">include</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.TypescriptConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.TypescriptConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.TypescriptConfig.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

Copy of the contents of the `compilerOptions` field.

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="projen.javascript.TypescriptConfig.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `extends`<sup>Required</sup> <a name="extends" id="projen.javascript.TypescriptConfig.property.extends"></a>

```typescript
public readonly extends: string[];
```

- *Type:* string[]

Array of base `tsconfig.json` paths. Any absolute paths are resolved relative to this instance, while any relative paths are used as is.

---

##### `file`<sup>Required</sup> <a name="file" id="projen.javascript.TypescriptConfig.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="projen.javascript.TypescriptConfig.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="projen.javascript.TypescriptConfig.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---


### UpgradeDependencies <a name="UpgradeDependencies" id="projen.javascript.UpgradeDependencies"></a>

Upgrade node project dependencies.

#### Initializers <a name="Initializers" id="projen.javascript.UpgradeDependencies.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.UpgradeDependencies(project: NodeProject, options?: UpgradeDependenciesOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependencies.Initializer.parameter.project">project</a></code> | <code><a href="#projen.javascript.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#projen.javascript.UpgradeDependencies.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesOptions">UpgradeDependenciesOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.UpgradeDependencies.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.javascript.NodeProject">NodeProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.UpgradeDependencies.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.UpgradeDependenciesOptions">UpgradeDependenciesOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.UpgradeDependencies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.UpgradeDependencies.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.UpgradeDependencies.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.UpgradeDependencies.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.javascript.UpgradeDependencies.addPostBuildSteps">addPostBuildSteps</a></code> | Add steps to execute a successful build. |

---

##### `toString` <a name="toString" id="projen.javascript.UpgradeDependencies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.UpgradeDependencies.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.UpgradeDependencies.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.UpgradeDependencies.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addPostBuildSteps` <a name="addPostBuildSteps" id="projen.javascript.UpgradeDependencies.addPostBuildSteps"></a>

```typescript
public addPostBuildSteps(steps: JobStep): void
```

Add steps to execute a successful build.

###### `steps`<sup>Required</sup> <a name="steps" id="projen.javascript.UpgradeDependencies.addPostBuildSteps.parameter.steps"></a>

- *Type:* projen.github.workflows.JobStep

workflow steps.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.UpgradeDependencies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.UpgradeDependencies.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.UpgradeDependencies.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.UpgradeDependencies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.UpgradeDependencies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.UpgradeDependencies.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.UpgradeDependencies.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.UpgradeDependencies.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependencies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.UpgradeDependencies.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.UpgradeDependencies.property.postUpgradeTask">postUpgradeTask</a></code> | <code>projen.Task</code> | A task run after the upgrade task. |
| <code><a href="#projen.javascript.UpgradeDependencies.property.upgradeTask">upgradeTask</a></code> | <code>projen.Task</code> | The upgrade task. |
| <code><a href="#projen.javascript.UpgradeDependencies.property.workflows">workflows</a></code> | <code>projen.github.GithubWorkflow[]</code> | The workflows that execute the upgrades. |
| <code><a href="#projen.javascript.UpgradeDependencies.property.containerOptions">containerOptions</a></code> | <code>projen.github.workflows.ContainerOptions</code> | Container definitions for the upgrade workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.UpgradeDependencies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.UpgradeDependencies.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `postUpgradeTask`<sup>Required</sup> <a name="postUpgradeTask" id="projen.javascript.UpgradeDependencies.property.postUpgradeTask"></a>

```typescript
public readonly postUpgradeTask: Task;
```

- *Type:* projen.Task

A task run after the upgrade task.

---

##### `upgradeTask`<sup>Required</sup> <a name="upgradeTask" id="projen.javascript.UpgradeDependencies.property.upgradeTask"></a>

```typescript
public readonly upgradeTask: Task;
```

- *Type:* projen.Task

The upgrade task.

---

##### `workflows`<sup>Required</sup> <a name="workflows" id="projen.javascript.UpgradeDependencies.property.workflows"></a>

```typescript
public readonly workflows: GithubWorkflow[];
```

- *Type:* projen.github.GithubWorkflow[]

The workflows that execute the upgrades.

One workflow per branch.

---

##### `containerOptions`<sup>Optional</sup> <a name="containerOptions" id="projen.javascript.UpgradeDependencies.property.containerOptions"></a>

```typescript
public readonly containerOptions: ContainerOptions;
```

- *Type:* projen.github.workflows.ContainerOptions

Container definitions for the upgrade workflow.

---


### Yarnrc <a name="Yarnrc" id="projen.javascript.Yarnrc"></a>

#### Initializers <a name="Initializers" id="projen.javascript.Yarnrc.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Yarnrc(project: Project, version: string, options?: YarnrcOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Yarnrc.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.javascript.Yarnrc.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.Yarnrc.Initializer.parameter.options">options</a></code> | <code><a href="#projen.javascript.YarnrcOptions">YarnrcOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Yarnrc.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `version`<sup>Required</sup> <a name="version" id="projen.javascript.Yarnrc.Initializer.parameter.version"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.Yarnrc.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.javascript.YarnrcOptions">YarnrcOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Yarnrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.javascript.Yarnrc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.javascript.Yarnrc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.javascript.Yarnrc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.javascript.Yarnrc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.javascript.Yarnrc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.javascript.Yarnrc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.javascript.Yarnrc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Yarnrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.javascript.Yarnrc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.javascript.Yarnrc.isConstruct"></a>

```typescript
import { javascript } from 'projen'

javascript.Yarnrc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Yarnrc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.javascript.Yarnrc.isComponent"></a>

```typescript
import { javascript } from 'projen'

javascript.Yarnrc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.javascript.Yarnrc.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Yarnrc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.javascript.Yarnrc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.javascript.Yarnrc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.javascript.Yarnrc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### AddBundleOptions <a name="AddBundleOptions" id="projen.javascript.AddBundleOptions"></a>

Options for `addBundle()`.

#### Initializer <a name="Initializer" id="projen.javascript.AddBundleOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const addBundleOptions: javascript.AddBundleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.AddBundleOptions.property.externals">externals</a></code> | <code>string[]</code> | You can mark a file or a package as external to exclude it from your build. |
| <code><a href="#projen.javascript.AddBundleOptions.property.sourcemap">sourcemap</a></code> | <code>boolean</code> | Include a source map in the bundle. |
| <code><a href="#projen.javascript.AddBundleOptions.property.watchTask">watchTask</a></code> | <code>boolean</code> | In addition to the `bundle:xyz` task, creates `bundle:xyz:watch` task which will invoke the same esbuild command with the `--watch` flag. |
| <code><a href="#projen.javascript.AddBundleOptions.property.platform">platform</a></code> | <code>string</code> | esbuild platform. |
| <code><a href="#projen.javascript.AddBundleOptions.property.target">target</a></code> | <code>string</code> | esbuild target. |
| <code><a href="#projen.javascript.AddBundleOptions.property.banner">banner</a></code> | <code>string</code> | Use this to insert an arbitrary string at the beginning of generated JavaScript files. |
| <code><a href="#projen.javascript.AddBundleOptions.property.charset">charset</a></code> | <code><a href="#projen.javascript.Charset">Charset</a></code> | The charset to use for esbuild's output. |
| <code><a href="#projen.javascript.AddBundleOptions.property.define">define</a></code> | <code>{[ key: string ]: string}</code> | Replace global identifiers with constant expressions. |
| <code><a href="#projen.javascript.AddBundleOptions.property.esbuildArgs">esbuildArgs</a></code> | <code>{[ key: string ]: string \| boolean}</code> | Build arguments to pass into esbuild. |
| <code><a href="#projen.javascript.AddBundleOptions.property.executable">executable</a></code> | <code>boolean</code> | Mark the output file as executable. |
| <code><a href="#projen.javascript.AddBundleOptions.property.footer">footer</a></code> | <code>string</code> | Use this to insert an arbitrary string at the end of generated JavaScript files. |
| <code><a href="#projen.javascript.AddBundleOptions.property.format">format</a></code> | <code>string</code> | Output format for the generated JavaScript files. |
| <code><a href="#projen.javascript.AddBundleOptions.property.inject">inject</a></code> | <code>string[]</code> | This option allows you to automatically replace a global variable with an import from another file. |
| <code><a href="#projen.javascript.AddBundleOptions.property.keepNames">keepNames</a></code> | <code>boolean</code> | Whether to preserve the original `name` values even in minified code. |
| <code><a href="#projen.javascript.AddBundleOptions.property.loaders">loaders</a></code> | <code>{[ key: string ]: string}</code> | Map of file extensions (without dot) and loaders to use for this file type. |
| <code><a href="#projen.javascript.AddBundleOptions.property.logLevel">logLevel</a></code> | <code><a href="#projen.javascript.BundleLogLevel">BundleLogLevel</a></code> | Log level for esbuild. |
| <code><a href="#projen.javascript.AddBundleOptions.property.mainFields">mainFields</a></code> | <code>string[]</code> | How to determine the entry point for modules. |
| <code><a href="#projen.javascript.AddBundleOptions.property.metafile">metafile</a></code> | <code>boolean</code> | This option tells esbuild to write out a JSON file relative to output directory with metadata about the build. |
| <code><a href="#projen.javascript.AddBundleOptions.property.minify">minify</a></code> | <code>boolean</code> | Whether to minify files when bundling. |
| <code><a href="#projen.javascript.AddBundleOptions.property.outfile">outfile</a></code> | <code>string</code> | Bundler output path relative to the asset's output directory. |
| <code><a href="#projen.javascript.AddBundleOptions.property.sourceMapMode">sourceMapMode</a></code> | <code><a href="#projen.javascript.SourceMapMode">SourceMapMode</a></code> | Source map mode to be used when bundling. |
| <code><a href="#projen.javascript.AddBundleOptions.property.sourcesContent">sourcesContent</a></code> | <code>boolean</code> | Whether to include original source code in source maps when bundling. |
| <code><a href="#projen.javascript.AddBundleOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | The path of the tsconfig.json file to use for bundling. |

---

##### `externals`<sup>Optional</sup> <a name="externals" id="projen.javascript.AddBundleOptions.property.externals"></a>

```typescript
public readonly externals: string[];
```

- *Type:* string[]
- *Default:* []

You can mark a file or a package as external to exclude it from your build.

Instead of being bundled, the import will be preserved (using require for
the iife and cjs formats and using import for the esm format) and will be
evaluated at run time instead.

This has several uses. First of all, it can be used to trim unnecessary
code from your bundle for a code path that you know will never be executed.
For example, a package may contain code that only runs in node but you will
only be using that package in the browser. It can also be used to import
code in node at run time from a package that cannot be bundled. For
example, the fsevents package contains a native extension, which esbuild
doesn't support.

---

##### `sourcemap`<sup>Optional</sup> <a name="sourcemap" id="projen.javascript.AddBundleOptions.property.sourcemap"></a>

```typescript
public readonly sourcemap: boolean;
```

- *Type:* boolean
- *Default:* false

Include a source map in the bundle.

---

##### `watchTask`<sup>Optional</sup> <a name="watchTask" id="projen.javascript.AddBundleOptions.property.watchTask"></a>

```typescript
public readonly watchTask: boolean;
```

- *Type:* boolean
- *Default:* true

In addition to the `bundle:xyz` task, creates `bundle:xyz:watch` task which will invoke the same esbuild command with the `--watch` flag.

This can be used
to continusouly watch for changes.

---

##### `platform`<sup>Required</sup> <a name="platform" id="projen.javascript.AddBundleOptions.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

esbuild platform.

---

*Example*

```typescript
"node"
```


##### `target`<sup>Required</sup> <a name="target" id="projen.javascript.AddBundleOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

esbuild target.

---

*Example*

```typescript
"node12"
```


##### `banner`<sup>Optional</sup> <a name="banner" id="projen.javascript.AddBundleOptions.property.banner"></a>

```typescript
public readonly banner: string;
```

- *Type:* string
- *Default:* no comments are passed

Use this to insert an arbitrary string at the beginning of generated JavaScript files.

This is similar to footer which inserts at the end instead of the beginning.

This is commonly used to insert comments:

---

##### `charset`<sup>Optional</sup> <a name="charset" id="projen.javascript.AddBundleOptions.property.charset"></a>

```typescript
public readonly charset: Charset;
```

- *Type:* <a href="#projen.javascript.Charset">Charset</a>
- *Default:* Charset.ASCII

The charset to use for esbuild's output.

By default esbuild's output is ASCII-only. Any non-ASCII characters are escaped
using backslash escape sequences. Using escape sequences makes the generated output
slightly bigger, and also makes it harder to read. If you would like for esbuild to print
the original characters without using escape sequences, use `Charset.UTF8`.

> [https://esbuild.github.io/api/#charset](https://esbuild.github.io/api/#charset)

---

##### `define`<sup>Optional</sup> <a name="define" id="projen.javascript.AddBundleOptions.property.define"></a>

```typescript
public readonly define: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no replacements are made

Replace global identifiers with constant expressions.

For example, `{ 'process.env.DEBUG': 'true' }`.

Another example, `{ 'process.env.API_KEY': JSON.stringify('xxx-xxxx-xxx') }`.

---

##### `esbuildArgs`<sup>Optional</sup> <a name="esbuildArgs" id="projen.javascript.AddBundleOptions.property.esbuildArgs"></a>

```typescript
public readonly esbuildArgs: {[ key: string ]: string | boolean};
```

- *Type:* {[ key: string ]: string | boolean}
- *Default:* no additional esbuild arguments are passed

Build arguments to pass into esbuild.

For example, to add the [--log-limit](https://esbuild.github.io/api/#log-limit) flag:

```text
project.bundler.addBundle("./src/hello.ts", {
  platform: "node",
  target: "node18",
  sourcemap: true,
  format: "esm",
  esbuildArgs: {
    "--log-limit": "0",
  },
});
```

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.javascript.AddBundleOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Mark the output file as executable.

---

##### `footer`<sup>Optional</sup> <a name="footer" id="projen.javascript.AddBundleOptions.property.footer"></a>

```typescript
public readonly footer: string;
```

- *Type:* string
- *Default:* no comments are passed

Use this to insert an arbitrary string at the end of generated JavaScript files.

This is similar to banner which inserts at the beginning instead of the end.

This is commonly used to insert comments

---

##### `format`<sup>Optional</sup> <a name="format" id="projen.javascript.AddBundleOptions.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string
- *Default:* undefined

Output format for the generated JavaScript files.

There are currently three possible values that can be configured: `"iife"`, `"cjs"`, and `"esm"`.

If not set (`undefined`), esbuild picks an output format for you based on `platform`:
- `"cjs"` if `platform` is `"node"`
- `"iife"` if `platform` is `"browser"`
- `"esm"` if `platform` is `"neutral"`

Note: If making a bundle to run under node with ESM, set `format` to `"esm"` instead of setting `platform` to `"neutral"`.

> [https://esbuild.github.io/api/#format](https://esbuild.github.io/api/#format)

---

##### `inject`<sup>Optional</sup> <a name="inject" id="projen.javascript.AddBundleOptions.property.inject"></a>

```typescript
public readonly inject: string[];
```

- *Type:* string[]
- *Default:* no code is injected

This option allows you to automatically replace a global variable with an import from another file.

> [https://esbuild.github.io/api/#inject](https://esbuild.github.io/api/#inject)

---

##### `keepNames`<sup>Optional</sup> <a name="keepNames" id="projen.javascript.AddBundleOptions.property.keepNames"></a>

```typescript
public readonly keepNames: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to preserve the original `name` values even in minified code.

In JavaScript the `name` property on functions and classes defaults to a
nearby identifier in the source code.

However, minification renames symbols to reduce code size and bundling
sometimes need to rename symbols to avoid collisions. That changes value of
the `name` property for many of these cases. This is usually fine because
the `name` property is normally only used for debugging. However, some
frameworks rely on the `name` property for registration and binding purposes.
If this is the case, you can enable this option to preserve the original
`name` values even in minified code.

---

##### `loaders`<sup>Optional</sup> <a name="loaders" id="projen.javascript.AddBundleOptions.property.loaders"></a>

```typescript
public readonly loaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of file extensions (without dot) and loaders to use for this file type.

Loaders are appended to the esbuild command by `--loader:.extension=loader`

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="projen.javascript.AddBundleOptions.property.logLevel"></a>

```typescript
public readonly logLevel: BundleLogLevel;
```

- *Type:* <a href="#projen.javascript.BundleLogLevel">BundleLogLevel</a>
- *Default:* LogLevel.WARNING

Log level for esbuild.

This is also propagated to the package manager and
applies to its specific install command.

---

##### `mainFields`<sup>Optional</sup> <a name="mainFields" id="projen.javascript.AddBundleOptions.property.mainFields"></a>

```typescript
public readonly mainFields: string[];
```

- *Type:* string[]
- *Default:* []

How to determine the entry point for modules.

Try ['module', 'main'] to default to ES module versions.

---

##### `metafile`<sup>Optional</sup> <a name="metafile" id="projen.javascript.AddBundleOptions.property.metafile"></a>

```typescript
public readonly metafile: boolean;
```

- *Type:* boolean
- *Default:* false

This option tells esbuild to write out a JSON file relative to output directory with metadata about the build.

The metadata in this JSON file follows this schema (specified using TypeScript syntax):

```text
{
  outputs: {
    [path: string]: {
      bytes: number
      inputs: {
        [path: string]: { bytesInOutput: number }
      }
      imports: { path: string }[]
      exports: string[]
    }
  }
}
```
This data can then be analyzed by other tools. For example,
bundle buddy can consume esbuild's metadata format and generates a treemap visualization
of the modules in your bundle and how much space each one takes up.

> [https://esbuild.github.io/api/#metafile](https://esbuild.github.io/api/#metafile)

---

##### `minify`<sup>Optional</sup> <a name="minify" id="projen.javascript.AddBundleOptions.property.minify"></a>

```typescript
public readonly minify: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to minify files when bundling.

---

##### `outfile`<sup>Optional</sup> <a name="outfile" id="projen.javascript.AddBundleOptions.property.outfile"></a>

```typescript
public readonly outfile: string;
```

- *Type:* string
- *Default:* "index.js"

Bundler output path relative to the asset's output directory.

---

##### `sourceMapMode`<sup>Optional</sup> <a name="sourceMapMode" id="projen.javascript.AddBundleOptions.property.sourceMapMode"></a>

```typescript
public readonly sourceMapMode: SourceMapMode;
```

- *Type:* <a href="#projen.javascript.SourceMapMode">SourceMapMode</a>
- *Default:* SourceMapMode.DEFAULT

Source map mode to be used when bundling.

> [https://esbuild.github.io/api/#sourcemap](https://esbuild.github.io/api/#sourcemap)

---

##### `sourcesContent`<sup>Optional</sup> <a name="sourcesContent" id="projen.javascript.AddBundleOptions.property.sourcesContent"></a>

```typescript
public readonly sourcesContent: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to include original source code in source maps when bundling.

> [https://esbuild.github.io/api/#sources-content](https://esbuild.github.io/api/#sources-content)

---

##### `tsconfigPath`<sup>Optional</sup> <a name="tsconfigPath" id="projen.javascript.AddBundleOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string
- *Default:* "tsconfig.json"

The path of the tsconfig.json file to use for bundling.

---

### BuildWorkflowOptions <a name="BuildWorkflowOptions" id="projen.javascript.BuildWorkflowOptions"></a>

Build workflow options for NodeProject.

#### Initializer <a name="Initializer" id="projen.javascript.BuildWorkflowOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const buildWorkflowOptions: javascript.BuildWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.BuildWorkflowOptions.property.name">name</a></code> | <code>string</code> | Name of the buildfile (e.g. "build" becomes "build.yml"). |
| <code><a href="#projen.javascript.BuildWorkflowOptions.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`. |
| <code><a href="#projen.javascript.BuildWorkflowOptions.property.preBuildSteps">preBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute before the build. |
| <code><a href="#projen.javascript.BuildWorkflowOptions.property.workflowTriggers">workflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.javascript.BuildWorkflowOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.javascript.BuildWorkflowOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* "build"

Name of the buildfile (e.g. "build" becomes "build.yml").

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="projen.javascript.BuildWorkflowOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions
- *Default:* `{ contents: JobPermission.WRITE }`

Permissions granted to the build job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`.

---

##### `preBuildSteps`<sup>Optional</sup> <a name="preBuildSteps" id="projen.javascript.BuildWorkflowOptions.property.preBuildSteps"></a>

```typescript
public readonly preBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute before the build.

---

##### `workflowTriggers`<sup>Optional</sup> <a name="workflowTriggers" id="projen.javascript.BuildWorkflowOptions.property.workflowTriggers"></a>

```typescript
public readonly workflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen.javascript.BuildWorkflowOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means that any files synthesized by projen or e.g. test snapshots will
always be up-to-date before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

### Bundle <a name="Bundle" id="projen.javascript.Bundle"></a>

#### Initializer <a name="Initializer" id="projen.javascript.Bundle.Initializer"></a>

```typescript
import { javascript } from 'projen'

const bundle: javascript.Bundle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Bundle.property.bundleTask">bundleTask</a></code> | <code>projen.Task</code> | The task that produces this bundle. |
| <code><a href="#projen.javascript.Bundle.property.outdir">outdir</a></code> | <code>string</code> | Base directory containing the output file (relative to project root). |
| <code><a href="#projen.javascript.Bundle.property.outfile">outfile</a></code> | <code>string</code> | Location of the output file (relative to project root). |
| <code><a href="#projen.javascript.Bundle.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task for this bundle. |

---

##### `bundleTask`<sup>Required</sup> <a name="bundleTask" id="projen.javascript.Bundle.property.bundleTask"></a>

```typescript
public readonly bundleTask: Task;
```

- *Type:* projen.Task

The task that produces this bundle.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.javascript.Bundle.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Base directory containing the output file (relative to project root).

---

##### `outfile`<sup>Required</sup> <a name="outfile" id="projen.javascript.Bundle.property.outfile"></a>

```typescript
public readonly outfile: string;
```

- *Type:* string

Location of the output file (relative to project root).

---

##### `watchTask`<sup>Optional</sup> <a name="watchTask" id="projen.javascript.Bundle.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task for this bundle.

---

### BundlerOptions <a name="BundlerOptions" id="projen.javascript.BundlerOptions"></a>

Options for `Bundler`.

#### Initializer <a name="Initializer" id="projen.javascript.BundlerOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const bundlerOptions: javascript.BundlerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.BundlerOptions.property.addToPreCompile">addToPreCompile</a></code> | <code>boolean</code> | Install the `bundle` command as a pre-compile phase. |
| <code><a href="#projen.javascript.BundlerOptions.property.assetsDir">assetsDir</a></code> | <code>string</code> | Output directory for all bundles. |
| <code><a href="#projen.javascript.BundlerOptions.property.esbuildVersion">esbuildVersion</a></code> | <code>string</code> | The semantic version requirement for `esbuild`. |
| <code><a href="#projen.javascript.BundlerOptions.property.loaders">loaders</a></code> | <code>{[ key: string ]: string}</code> | Map of file extensions (without dot) and loaders to use for this file type. |
| <code><a href="#projen.javascript.BundlerOptions.property.runBundleTask">runBundleTask</a></code> | <code><a href="#projen.javascript.RunBundleTask">RunBundleTask</a></code> | Choose which phase (if any) to add the `bundle` command to. |

---

##### ~~`addToPreCompile`~~<sup>Optional</sup> <a name="addToPreCompile" id="projen.javascript.BundlerOptions.property.addToPreCompile"></a>

- *Deprecated:* Use `runBundleTask` instead.

```typescript
public readonly addToPreCompile: boolean;
```

- *Type:* boolean
- *Default:* true

Install the `bundle` command as a pre-compile phase.

---

##### `assetsDir`<sup>Optional</sup> <a name="assetsDir" id="projen.javascript.BundlerOptions.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string
- *Default:* "assets"

Output directory for all bundles.

---

##### `esbuildVersion`<sup>Optional</sup> <a name="esbuildVersion" id="projen.javascript.BundlerOptions.property.esbuildVersion"></a>

```typescript
public readonly esbuildVersion: string;
```

- *Type:* string
- *Default:* no specific version (implies latest)

The semantic version requirement for `esbuild`.

---

##### `loaders`<sup>Optional</sup> <a name="loaders" id="projen.javascript.BundlerOptions.property.loaders"></a>

```typescript
public readonly loaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of file extensions (without dot) and loaders to use for this file type.

Loaders are appended to the esbuild command by `--loader:.extension=loader`

---

##### `runBundleTask`<sup>Optional</sup> <a name="runBundleTask" id="projen.javascript.BundlerOptions.property.runBundleTask"></a>

```typescript
public readonly runBundleTask: RunBundleTask;
```

- *Type:* <a href="#projen.javascript.RunBundleTask">RunBundleTask</a>
- *Default:* RunBundleTask.PRE_COMPILE

Choose which phase (if any) to add the `bundle` command to.

Note: If using `addBundle()` with the `bundleCompiledResults`, this option
must be set to `RunBundleTask.POST_COMPILE` or `RunBundleTask.MANUAL`.

> [AddBundleOptions.bundleCompiledResults *](AddBundleOptions.bundleCompiledResults *)

---

### BundlingOptions <a name="BundlingOptions" id="projen.javascript.BundlingOptions"></a>

Options for bundling.

#### Initializer <a name="Initializer" id="projen.javascript.BundlingOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const bundlingOptions: javascript.BundlingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.BundlingOptions.property.externals">externals</a></code> | <code>string[]</code> | You can mark a file or a package as external to exclude it from your build. |
| <code><a href="#projen.javascript.BundlingOptions.property.sourcemap">sourcemap</a></code> | <code>boolean</code> | Include a source map in the bundle. |
| <code><a href="#projen.javascript.BundlingOptions.property.watchTask">watchTask</a></code> | <code>boolean</code> | In addition to the `bundle:xyz` task, creates `bundle:xyz:watch` task which will invoke the same esbuild command with the `--watch` flag. |

---

##### `externals`<sup>Optional</sup> <a name="externals" id="projen.javascript.BundlingOptions.property.externals"></a>

```typescript
public readonly externals: string[];
```

- *Type:* string[]
- *Default:* []

You can mark a file or a package as external to exclude it from your build.

Instead of being bundled, the import will be preserved (using require for
the iife and cjs formats and using import for the esm format) and will be
evaluated at run time instead.

This has several uses. First of all, it can be used to trim unnecessary
code from your bundle for a code path that you know will never be executed.
For example, a package may contain code that only runs in node but you will
only be using that package in the browser. It can also be used to import
code in node at run time from a package that cannot be bundled. For
example, the fsevents package contains a native extension, which esbuild
doesn't support.

---

##### `sourcemap`<sup>Optional</sup> <a name="sourcemap" id="projen.javascript.BundlingOptions.property.sourcemap"></a>

```typescript
public readonly sourcemap: boolean;
```

- *Type:* boolean
- *Default:* false

Include a source map in the bundle.

---

##### `watchTask`<sup>Optional</sup> <a name="watchTask" id="projen.javascript.BundlingOptions.property.watchTask"></a>

```typescript
public readonly watchTask: boolean;
```

- *Type:* boolean
- *Default:* true

In addition to the `bundle:xyz` task, creates `bundle:xyz:watch` task which will invoke the same esbuild command with the `--watch` flag.

This can be used
to continusouly watch for changes.

---

### CodeArtifactOptions <a name="CodeArtifactOptions" id="projen.javascript.CodeArtifactOptions"></a>

Options for publishing npm packages to AWS CodeArtifact.

#### Initializer <a name="Initializer" id="projen.javascript.CodeArtifactOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const codeArtifactOptions: javascript.CodeArtifactOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.CodeArtifactOptions.property.accessKeyIdSecret">accessKeyIdSecret</a></code> | <code>string</code> | GitHub secret which contains the AWS access key ID to use when publishing packages to AWS CodeArtifact. |
| <code><a href="#projen.javascript.CodeArtifactOptions.property.authProvider">authProvider</a></code> | <code><a href="#projen.javascript.CodeArtifactAuthProvider">CodeArtifactAuthProvider</a></code> | Provider to use for authorizing requests to AWS CodeArtifact. |
| <code><a href="#projen.javascript.CodeArtifactOptions.property.roleToAssume">roleToAssume</a></code> | <code>string</code> | ARN of AWS role to be assumed prior to get authorization token from AWS CodeArtifact This property must be specified only when publishing to AWS CodeArtifact (`registry` contains AWS CodeArtifact URL). |
| <code><a href="#projen.javascript.CodeArtifactOptions.property.secretAccessKeySecret">secretAccessKeySecret</a></code> | <code>string</code> | GitHub secret which contains the AWS secret access key to use when publishing packages to AWS CodeArtifact. |

---

##### `accessKeyIdSecret`<sup>Optional</sup> <a name="accessKeyIdSecret" id="projen.javascript.CodeArtifactOptions.property.accessKeyIdSecret"></a>

```typescript
public readonly accessKeyIdSecret: string;
```

- *Type:* string
- *Default:* When the `authProvider` value is set to `CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR`, the default is "AWS_ACCESS_KEY_ID". For `CodeArtifactAuthProvider.GITHUB_OIDC`, this value must be left undefined.

GitHub secret which contains the AWS access key ID to use when publishing packages to AWS CodeArtifact.

This property must be specified only when publishing to AWS CodeArtifact (`npmRegistryUrl` contains AWS CodeArtifact URL).

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="projen.javascript.CodeArtifactOptions.property.authProvider"></a>

```typescript
public readonly authProvider: CodeArtifactAuthProvider;
```

- *Type:* <a href="#projen.javascript.CodeArtifactAuthProvider">CodeArtifactAuthProvider</a>
- *Default:* CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR

Provider to use for authorizing requests to AWS CodeArtifact.

---

##### `roleToAssume`<sup>Optional</sup> <a name="roleToAssume" id="projen.javascript.CodeArtifactOptions.property.roleToAssume"></a>

```typescript
public readonly roleToAssume: string;
```

- *Type:* string
- *Default:* undefined

ARN of AWS role to be assumed prior to get authorization token from AWS CodeArtifact This property must be specified only when publishing to AWS CodeArtifact (`registry` contains AWS CodeArtifact URL).

When using the `CodeArtifactAuthProvider.GITHUB_OIDC` auth provider, this value must be defined.

---

##### `secretAccessKeySecret`<sup>Optional</sup> <a name="secretAccessKeySecret" id="projen.javascript.CodeArtifactOptions.property.secretAccessKeySecret"></a>

```typescript
public readonly secretAccessKeySecret: string;
```

- *Type:* string
- *Default:* When the `authProvider` value is set to `CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR`, the default is "AWS_SECRET_ACCESS_KEY". For `CodeArtifactAuthProvider.GITHUB_OIDC`, this value must be left undefined.

GitHub secret which contains the AWS secret access key to use when publishing packages to AWS CodeArtifact.

This property must be specified only when publishing to AWS CodeArtifact (`npmRegistryUrl` contains AWS CodeArtifact URL).

---

### CoverageThreshold <a name="CoverageThreshold" id="projen.javascript.CoverageThreshold"></a>

#### Initializer <a name="Initializer" id="projen.javascript.CoverageThreshold.Initializer"></a>

```typescript
import { javascript } from 'projen'

const coverageThreshold: javascript.CoverageThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.CoverageThreshold.property.branches">branches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.javascript.CoverageThreshold.property.functions">functions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.javascript.CoverageThreshold.property.lines">lines</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.javascript.CoverageThreshold.property.statements">statements</a></code> | <code>number</code> | *No description.* |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.javascript.CoverageThreshold.property.branches"></a>

```typescript
public readonly branches: number;
```

- *Type:* number

---

##### `functions`<sup>Optional</sup> <a name="functions" id="projen.javascript.CoverageThreshold.property.functions"></a>

```typescript
public readonly functions: number;
```

- *Type:* number

---

##### `lines`<sup>Optional</sup> <a name="lines" id="projen.javascript.CoverageThreshold.property.lines"></a>

```typescript
public readonly lines: number;
```

- *Type:* number

---

##### `statements`<sup>Optional</sup> <a name="statements" id="projen.javascript.CoverageThreshold.property.statements"></a>

```typescript
public readonly statements: number;
```

- *Type:* number

---

### EslintOptions <a name="EslintOptions" id="projen.javascript.EslintOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.EslintOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const eslintOptions: javascript.EslintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.EslintOptions.property.dirs">dirs</a></code> | <code>string[]</code> | Files or glob patterns or directories with source files to lint (e.g. [ "src" ]). |
| <code><a href="#projen.javascript.EslintOptions.property.aliasExtensions">aliasExtensions</a></code> | <code>string[]</code> | Enable import alias for module paths. |
| <code><a href="#projen.javascript.EslintOptions.property.aliasMap">aliasMap</a></code> | <code>{[ key: string ]: string}</code> | Enable import alias for module paths. |
| <code><a href="#projen.javascript.EslintOptions.property.devdirs">devdirs</a></code> | <code>string[]</code> | Files or glob patterns or directories with source files that include tests and build tools. |
| <code><a href="#projen.javascript.EslintOptions.property.fileExtensions">fileExtensions</a></code> | <code>string[]</code> | File types that should be linted (e.g. [ ".js", ".ts" ]). |
| <code><a href="#projen.javascript.EslintOptions.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | List of file patterns that should not be linted, using the same syntax as .gitignore patterns. |
| <code><a href="#projen.javascript.EslintOptions.property.lintProjenRc">lintProjenRc</a></code> | <code>boolean</code> | Should we lint .projenrc.js. |
| <code><a href="#projen.javascript.EslintOptions.property.lintProjenRcFile">lintProjenRcFile</a></code> | <code>string</code> | Projenrc file to lint. |
| <code><a href="#projen.javascript.EslintOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Enable prettier for code formatting. |
| <code><a href="#projen.javascript.EslintOptions.property.tsAlwaysTryTypes">tsAlwaysTryTypes</a></code> | <code>boolean</code> | Always try to resolve types under `<root>@types` directory even it doesn't contain any source code. |
| <code><a href="#projen.javascript.EslintOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to `tsconfig.json` which should be used by eslint. |
| <code><a href="#projen.javascript.EslintOptions.property.yaml">yaml</a></code> | <code>boolean</code> | Write eslint configuration as YAML instead of JSON. |

---

##### `dirs`<sup>Required</sup> <a name="dirs" id="projen.javascript.EslintOptions.property.dirs"></a>

```typescript
public readonly dirs: string[];
```

- *Type:* string[]

Files or glob patterns or directories with source files to lint (e.g. [ "src" ]).

---

##### `aliasExtensions`<sup>Optional</sup> <a name="aliasExtensions" id="projen.javascript.EslintOptions.property.aliasExtensions"></a>

```typescript
public readonly aliasExtensions: string[];
```

- *Type:* string[]
- *Default:* undefined

Enable import alias for module paths.

---

##### `aliasMap`<sup>Optional</sup> <a name="aliasMap" id="projen.javascript.EslintOptions.property.aliasMap"></a>

```typescript
public readonly aliasMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* undefined

Enable import alias for module paths.

---

##### `devdirs`<sup>Optional</sup> <a name="devdirs" id="projen.javascript.EslintOptions.property.devdirs"></a>

```typescript
public readonly devdirs: string[];
```

- *Type:* string[]
- *Default:* []

Files or glob patterns or directories with source files that include tests and build tools.

These sources are linted but may also import packages from `devDependencies`.

---

##### `fileExtensions`<sup>Optional</sup> <a name="fileExtensions" id="projen.javascript.EslintOptions.property.fileExtensions"></a>

```typescript
public readonly fileExtensions: string[];
```

- *Type:* string[]
- *Default:* [".ts"]

File types that should be linted (e.g. [ ".js", ".ts" ]).

---

##### `ignorePatterns`<sup>Optional</sup> <a name="ignorePatterns" id="projen.javascript.EslintOptions.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* [ '*.js', '*.d.ts', 'node_modules/', '*.generated.ts', 'coverage' ]

List of file patterns that should not be linted, using the same syntax as .gitignore patterns.

---

##### ~~`lintProjenRc`~~<sup>Optional</sup> <a name="lintProjenRc" id="projen.javascript.EslintOptions.property.lintProjenRc"></a>

- *Deprecated:* set to `false` to remove any automatic rules and add manually

```typescript
public readonly lintProjenRc: boolean;
```

- *Type:* boolean
- *Default:* true

Should we lint .projenrc.js.

---

##### ~~`lintProjenRcFile`~~<sup>Optional</sup> <a name="lintProjenRcFile" id="projen.javascript.EslintOptions.property.lintProjenRcFile"></a>

- *Deprecated:* provide as `devdirs`

```typescript
public readonly lintProjenRcFile: string;
```

- *Type:* string
- *Default:* "projenrc.js"

Projenrc file to lint.

Use empty string to disable.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.javascript.EslintOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Enable prettier for code formatting.

---

##### `tsAlwaysTryTypes`<sup>Optional</sup> <a name="tsAlwaysTryTypes" id="projen.javascript.EslintOptions.property.tsAlwaysTryTypes"></a>

```typescript
public readonly tsAlwaysTryTypes: boolean;
```

- *Type:* boolean
- *Default:* true

Always try to resolve types under `<root>@types` directory even it doesn't contain any source code.

This prevents `import/no-unresolved` eslint errors when importing a `@types/*` module that would otherwise remain unresolved.

---

##### `tsconfigPath`<sup>Optional</sup> <a name="tsconfigPath" id="projen.javascript.EslintOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string
- *Default:* "./tsconfig.json"

Path to `tsconfig.json` which should be used by eslint.

---

##### `yaml`<sup>Optional</sup> <a name="yaml" id="projen.javascript.EslintOptions.property.yaml"></a>

```typescript
public readonly yaml: boolean;
```

- *Type:* boolean
- *Default:* false

Write eslint configuration as YAML instead of JSON.

---

### EslintOverride <a name="EslintOverride" id="projen.javascript.EslintOverride"></a>

eslint rules override.

#### Initializer <a name="Initializer" id="projen.javascript.EslintOverride.Initializer"></a>

```typescript
import { javascript } from 'projen'

const eslintOverride: javascript.EslintOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.EslintOverride.property.files">files</a></code> | <code>string[]</code> | Files or file patterns on which to apply the override. |
| <code><a href="#projen.javascript.EslintOverride.property.excludedFiles">excludedFiles</a></code> | <code>string[]</code> | Pattern(s) to exclude from this override. |
| <code><a href="#projen.javascript.EslintOverride.property.extends">extends</a></code> | <code>string[]</code> | Config(s) to extend in this override. |
| <code><a href="#projen.javascript.EslintOverride.property.parser">parser</a></code> | <code>string</code> | The overridden parser. |
| <code><a href="#projen.javascript.EslintOverride.property.plugins">plugins</a></code> | <code>string[]</code> | `plugins` override. |
| <code><a href="#projen.javascript.EslintOverride.property.rules">rules</a></code> | <code>{[ key: string ]: any}</code> | The overriden rules. |

---

##### `files`<sup>Required</sup> <a name="files" id="projen.javascript.EslintOverride.property.files"></a>

```typescript
public readonly files: string[];
```

- *Type:* string[]

Files or file patterns on which to apply the override.

---

##### `excludedFiles`<sup>Optional</sup> <a name="excludedFiles" id="projen.javascript.EslintOverride.property.excludedFiles"></a>

```typescript
public readonly excludedFiles: string[];
```

- *Type:* string[]

Pattern(s) to exclude from this override.

If a file matches any of the excluded patterns, the configuration won’t apply.

---

##### `extends`<sup>Optional</sup> <a name="extends" id="projen.javascript.EslintOverride.property.extends"></a>

```typescript
public readonly extends: string[];
```

- *Type:* string[]

Config(s) to extend in this override.

---

##### `parser`<sup>Optional</sup> <a name="parser" id="projen.javascript.EslintOverride.property.parser"></a>

```typescript
public readonly parser: string;
```

- *Type:* string

The overridden parser.

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="projen.javascript.EslintOverride.property.plugins"></a>

```typescript
public readonly plugins: string[];
```

- *Type:* string[]

`plugins` override.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="projen.javascript.EslintOverride.property.rules"></a>

```typescript
public readonly rules: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The overriden rules.

---

### HasteConfig <a name="HasteConfig" id="projen.javascript.HasteConfig"></a>

#### Initializer <a name="Initializer" id="projen.javascript.HasteConfig.Initializer"></a>

```typescript
import { javascript } from 'projen'

const hasteConfig: javascript.HasteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.HasteConfig.property.computeSha1">computeSha1</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.javascript.HasteConfig.property.defaultPlatform">defaultPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.HasteConfig.property.hasteImplModulePath">hasteImplModulePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.HasteConfig.property.platforms">platforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.javascript.HasteConfig.property.throwOnModuleCollision">throwOnModuleCollision</a></code> | <code>boolean</code> | *No description.* |

---

##### `computeSha1`<sup>Optional</sup> <a name="computeSha1" id="projen.javascript.HasteConfig.property.computeSha1"></a>

```typescript
public readonly computeSha1: boolean;
```

- *Type:* boolean

---

##### `defaultPlatform`<sup>Optional</sup> <a name="defaultPlatform" id="projen.javascript.HasteConfig.property.defaultPlatform"></a>

```typescript
public readonly defaultPlatform: string;
```

- *Type:* string

---

##### `hasteImplModulePath`<sup>Optional</sup> <a name="hasteImplModulePath" id="projen.javascript.HasteConfig.property.hasteImplModulePath"></a>

```typescript
public readonly hasteImplModulePath: string;
```

- *Type:* string

---

##### `platforms`<sup>Optional</sup> <a name="platforms" id="projen.javascript.HasteConfig.property.platforms"></a>

```typescript
public readonly platforms: string[];
```

- *Type:* string[]

---

##### `throwOnModuleCollision`<sup>Optional</sup> <a name="throwOnModuleCollision" id="projen.javascript.HasteConfig.property.throwOnModuleCollision"></a>

```typescript
public readonly throwOnModuleCollision: boolean;
```

- *Type:* boolean

---

### JestConfigOptions <a name="JestConfigOptions" id="projen.javascript.JestConfigOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.JestConfigOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const jestConfigOptions: javascript.JestConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.JestConfigOptions.property.additionalOptions">additionalOptions</a></code> | <code>{[ key: string ]: any}</code> | Escape hatch to allow any value. |
| <code><a href="#projen.javascript.JestConfigOptions.property.automock">automock</a></code> | <code>boolean</code> | This option tells Jest that all imported modules in your tests should be mocked automatically. |
| <code><a href="#projen.javascript.JestConfigOptions.property.bail">bail</a></code> | <code>number \| boolean</code> | By default, Jest runs all tests and produces all errors into the console upon completion. |
| <code><a href="#projen.javascript.JestConfigOptions.property.cacheDirectory">cacheDirectory</a></code> | <code>string</code> | The directory where Jest should store its cached dependency information. |
| <code><a href="#projen.javascript.JestConfigOptions.property.clearMocks">clearMocks</a></code> | <code>boolean</code> | Automatically clear mock calls and instances before every test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.collectCoverage">collectCoverage</a></code> | <code>boolean</code> | Indicates whether the coverage information should be collected while executing the test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.collectCoverageFrom">collectCoverageFrom</a></code> | <code>string[]</code> | An array of glob patterns indicating a set of files for which coverage information should be collected. |
| <code><a href="#projen.javascript.JestConfigOptions.property.coverageDirectory">coverageDirectory</a></code> | <code>string</code> | The directory where Jest should output its coverage files. |
| <code><a href="#projen.javascript.JestConfigOptions.property.coveragePathIgnorePatterns">coveragePathIgnorePatterns</a></code> | <code>string[]</code> | An array of regexp pattern strings that are matched against all file paths before executing the test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.coverageProvider">coverageProvider</a></code> | <code>string</code> | Indicates which provider should be used to instrument code for coverage. |
| <code><a href="#projen.javascript.JestConfigOptions.property.coverageReporters">coverageReporters</a></code> | <code>string[]</code> | A list of reporter names that Jest uses when writing coverage reports. |
| <code><a href="#projen.javascript.JestConfigOptions.property.coverageThreshold">coverageThreshold</a></code> | <code><a href="#projen.javascript.CoverageThreshold">CoverageThreshold</a></code> | Specify the global coverage thresholds. |
| <code><a href="#projen.javascript.JestConfigOptions.property.dependencyExtractor">dependencyExtractor</a></code> | <code>string</code> | This option allows the use of a custom dependency extractor. |
| <code><a href="#projen.javascript.JestConfigOptions.property.displayName">displayName</a></code> | <code>any</code> | Allows for a label to be printed alongside a test while it is running. |
| <code><a href="#projen.javascript.JestConfigOptions.property.errorOnDeprecated">errorOnDeprecated</a></code> | <code>boolean</code> | Make calling deprecated APIs throw helpful error messages. |
| <code><a href="#projen.javascript.JestConfigOptions.property.extraGlobals">extraGlobals</a></code> | <code>string[]</code> | Test files run inside a vm, which slows calls to global context properties (e.g. Math). With this option you can specify extra properties to be defined inside the vm for faster lookups. |
| <code><a href="#projen.javascript.JestConfigOptions.property.forceCoverageMatch">forceCoverageMatch</a></code> | <code>string[]</code> | Test files are normally ignored from collecting code coverage. |
| <code><a href="#projen.javascript.JestConfigOptions.property.globals">globals</a></code> | <code>any</code> | A set of global variables that need to be available in all test environments. |
| <code><a href="#projen.javascript.JestConfigOptions.property.globalSetup">globalSetup</a></code> | <code>string</code> | This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites. |
| <code><a href="#projen.javascript.JestConfigOptions.property.globalTeardown">globalTeardown</a></code> | <code>string</code> | This option allows the use of a custom global teardown module which exports an async function that is triggered once after all test suites. |
| <code><a href="#projen.javascript.JestConfigOptions.property.haste">haste</a></code> | <code><a href="#projen.javascript.HasteConfig">HasteConfig</a></code> | This will be used to configure the behavior of jest-haste-map, Jest's internal file crawler/cache system. |
| <code><a href="#projen.javascript.JestConfigOptions.property.injectGlobals">injectGlobals</a></code> | <code>boolean</code> | Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment. If you set this to false, you should import from. |
| <code><a href="#projen.javascript.JestConfigOptions.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | A number limiting the number of tests that are allowed to run at the same time when using test.concurrent. Any test above this limit will be queued and executed once a slot is released. |
| <code><a href="#projen.javascript.JestConfigOptions.property.maxWorkers">maxWorkers</a></code> | <code>string \| number</code> | Specifies the maximum number of workers the worker-pool will spawn for running tests. |
| <code><a href="#projen.javascript.JestConfigOptions.property.moduleDirectories">moduleDirectories</a></code> | <code>string[]</code> | An array of directory names to be searched recursively up from the requiring module's location. |
| <code><a href="#projen.javascript.JestConfigOptions.property.moduleFileExtensions">moduleFileExtensions</a></code> | <code>string[]</code> | An array of file extensions your modules use. |
| <code><a href="#projen.javascript.JestConfigOptions.property.moduleNameMapper">moduleNameMapper</a></code> | <code>{[ key: string ]: string \| string[]}</code> | A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module. |
| <code><a href="#projen.javascript.JestConfigOptions.property.modulePathIgnorePatterns">modulePathIgnorePatterns</a></code> | <code>string[]</code> | An array of regexp pattern strings that are matched against all module paths before those paths are to be considered 'visible' to the module loader. |
| <code><a href="#projen.javascript.JestConfigOptions.property.modulePaths">modulePaths</a></code> | <code>string[]</code> | An alternative API to setting the NODE_PATH env variable, modulePaths is an array of absolute paths to additional locations to search when resolving modules. |
| <code><a href="#projen.javascript.JestConfigOptions.property.notify">notify</a></code> | <code>boolean</code> | Activates notifications for test results. |
| <code><a href="#projen.javascript.JestConfigOptions.property.notifyMode">notifyMode</a></code> | <code>string</code> | Specifies notification mode. |
| <code><a href="#projen.javascript.JestConfigOptions.property.preset">preset</a></code> | <code>string</code> | A preset that is used as a base for Jest's configuration. |
| <code><a href="#projen.javascript.JestConfigOptions.property.prettierPath">prettierPath</a></code> | <code>string</code> | Sets the path to the prettier node module used to update inline snapshots. |
| <code><a href="#projen.javascript.JestConfigOptions.property.projects">projects</a></code> | <code>string \| {[ key: string ]: any}[]</code> | When the projects configuration is provided with an array of paths or glob patterns, Jest will run tests in all of the specified projects at the same time. |
| <code><a href="#projen.javascript.JestConfigOptions.property.reporters">reporters</a></code> | <code><a href="#projen.javascript.JestReporter">JestReporter</a>[]</code> | Use this configuration option to add custom reporters to Jest. |
| <code><a href="#projen.javascript.JestConfigOptions.property.resetMocks">resetMocks</a></code> | <code>boolean</code> | Automatically reset mock state before every test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.resetModules">resetModules</a></code> | <code>boolean</code> | By default, each test file gets its own independent module registry. |
| <code><a href="#projen.javascript.JestConfigOptions.property.resolver">resolver</a></code> | <code>string</code> | This option allows the use of a custom resolver. |
| <code><a href="#projen.javascript.JestConfigOptions.property.restoreMocks">restoreMocks</a></code> | <code>boolean</code> | Automatically restore mock state before every test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.rootDir">rootDir</a></code> | <code>string</code> | The root directory that Jest should scan for tests and modules within. |
| <code><a href="#projen.javascript.JestConfigOptions.property.roots">roots</a></code> | <code>string[]</code> | A list of paths to directories that Jest should use to search for files in. |
| <code><a href="#projen.javascript.JestConfigOptions.property.runner">runner</a></code> | <code>string</code> | This option allows you to use a custom runner instead of Jest's default test runner. |
| <code><a href="#projen.javascript.JestConfigOptions.property.setupFiles">setupFiles</a></code> | <code>string[]</code> | A list of paths to modules that run some code to configure or set up the testing environment. |
| <code><a href="#projen.javascript.JestConfigOptions.property.setupFilesAfterEnv">setupFilesAfterEnv</a></code> | <code>string[]</code> | A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed. |
| <code><a href="#projen.javascript.JestConfigOptions.property.slowTestThreshold">slowTestThreshold</a></code> | <code>number</code> | The number of seconds after which a test is considered as slow and reported as such in the results. |
| <code><a href="#projen.javascript.JestConfigOptions.property.snapshotResolver">snapshotResolver</a></code> | <code>string</code> | The path to a module that can resolve test<->snapshot path. |
| <code><a href="#projen.javascript.JestConfigOptions.property.snapshotSerializers">snapshotSerializers</a></code> | <code>string[]</code> | A list of paths to snapshot serializer modules Jest should use for snapshot testing. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testEnvironment">testEnvironment</a></code> | <code>string</code> | The test environment that will be used for testing. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testEnvironmentOptions">testEnvironmentOptions</a></code> | <code>any</code> | Test environment options that will be passed to the testEnvironment. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testFailureExitCode">testFailureExitCode</a></code> | <code>number</code> | The exit code Jest returns on test failure. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testMatch">testMatch</a></code> | <code>string[]</code> | The glob patterns Jest uses to detect test files. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testPathIgnorePatterns">testPathIgnorePatterns</a></code> | <code>string[]</code> | An array of regexp pattern strings that are matched against all test paths before executing the test. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testRegex">testRegex</a></code> | <code>string \| string[]</code> | The pattern or patterns Jest uses to detect test files. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testResultsProcessor">testResultsProcessor</a></code> | <code>string</code> | This option allows the use of a custom results processor. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testRunner">testRunner</a></code> | <code>string</code> | This option allows the use of a custom test runner. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testSequencer">testSequencer</a></code> | <code>string</code> | This option allows you to use a custom sequencer instead of Jest's default. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testTimeout">testTimeout</a></code> | <code>number</code> | Default timeout of a test in milliseconds. |
| <code><a href="#projen.javascript.JestConfigOptions.property.testURL">testURL</a></code> | <code>string</code> | This option sets the URL for the jsdom environment. |
| <code><a href="#projen.javascript.JestConfigOptions.property.timers">timers</a></code> | <code>string</code> | Setting this value to legacy or fake allows the use of fake timers for functions such as setTimeout. |
| <code><a href="#projen.javascript.JestConfigOptions.property.transform">transform</a></code> | <code>{[ key: string ]: <a href="#projen.javascript.Transform">Transform</a>}</code> | A map from regular expressions to paths to transformers. |
| <code><a href="#projen.javascript.JestConfigOptions.property.transformIgnorePatterns">transformIgnorePatterns</a></code> | <code>string[]</code> | An array of regexp pattern strings that are matched against all source file paths before transformation. |
| <code><a href="#projen.javascript.JestConfigOptions.property.unmockedModulePathPatterns">unmockedModulePathPatterns</a></code> | <code>string[]</code> | An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them. |
| <code><a href="#projen.javascript.JestConfigOptions.property.verbose">verbose</a></code> | <code>boolean</code> | Indicates whether each individual test should be reported during the run. |
| <code><a href="#projen.javascript.JestConfigOptions.property.watchman">watchman</a></code> | <code>boolean</code> | Whether to use watchman for file crawling. |
| <code><a href="#projen.javascript.JestConfigOptions.property.watchPathIgnorePatterns">watchPathIgnorePatterns</a></code> | <code>string[]</code> | An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode. |
| <code><a href="#projen.javascript.JestConfigOptions.property.watchPlugins">watchPlugins</a></code> | <code><a href="#projen.javascript.WatchPlugin">WatchPlugin</a>[]</code> | *No description.* |

---

##### `additionalOptions`<sup>Optional</sup> <a name="additionalOptions" id="projen.javascript.JestConfigOptions.property.additionalOptions"></a>

```typescript
public readonly additionalOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Escape hatch to allow any value.

---

##### `automock`<sup>Optional</sup> <a name="automock" id="projen.javascript.JestConfigOptions.property.automock"></a>

```typescript
public readonly automock: boolean;
```

- *Type:* boolean
- *Default:* false

This option tells Jest that all imported modules in your tests should be mocked automatically.

All modules used in your tests will have a replacement implementation, keeping the API surface

---

##### `bail`<sup>Optional</sup> <a name="bail" id="projen.javascript.JestConfigOptions.property.bail"></a>

```typescript
public readonly bail: number | boolean;
```

- *Type:* number | boolean
- *Default:* 0

By default, Jest runs all tests and produces all errors into the console upon completion.

The bail config option can be used here to have Jest stop running tests after n failures.
Setting bail to true is the same as setting bail to 1.

---

##### `cacheDirectory`<sup>Optional</sup> <a name="cacheDirectory" id="projen.javascript.JestConfigOptions.property.cacheDirectory"></a>

```typescript
public readonly cacheDirectory: string;
```

- *Type:* string
- *Default:* "/tmp/<path>"

The directory where Jest should store its cached dependency information.

---

##### `clearMocks`<sup>Optional</sup> <a name="clearMocks" id="projen.javascript.JestConfigOptions.property.clearMocks"></a>

```typescript
public readonly clearMocks: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically clear mock calls and instances before every test.

Equivalent to calling jest.clearAllMocks() before each test.
This does not remove any mock implementation that may have been provided

---

##### `collectCoverage`<sup>Optional</sup> <a name="collectCoverage" id="projen.javascript.JestConfigOptions.property.collectCoverage"></a>

```typescript
public readonly collectCoverage: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the coverage information should be collected while executing the test.

Because this retrofits all executed files with coverage collection statements,
it may significantly slow down your tests

---

##### `collectCoverageFrom`<sup>Optional</sup> <a name="collectCoverageFrom" id="projen.javascript.JestConfigOptions.property.collectCoverageFrom"></a>

```typescript
public readonly collectCoverageFrom: string[];
```

- *Type:* string[]
- *Default:* undefined

An array of glob patterns indicating a set of files for which coverage information should be collected.

---

##### `coverageDirectory`<sup>Optional</sup> <a name="coverageDirectory" id="projen.javascript.JestConfigOptions.property.coverageDirectory"></a>

```typescript
public readonly coverageDirectory: string;
```

- *Type:* string
- *Default:* "coverage"

The directory where Jest should output its coverage files.

---

##### `coveragePathIgnorePatterns`<sup>Optional</sup> <a name="coveragePathIgnorePatterns" id="projen.javascript.JestConfigOptions.property.coveragePathIgnorePatterns"></a>

```typescript
public readonly coveragePathIgnorePatterns: string[];
```

- *Type:* string[]
- *Default:* "/node_modules/"

An array of regexp pattern strings that are matched against all file paths before executing the test.

If the file path matches any of the patterns, coverage information will be skipped

---

##### `coverageProvider`<sup>Optional</sup> <a name="coverageProvider" id="projen.javascript.JestConfigOptions.property.coverageProvider"></a>

```typescript
public readonly coverageProvider: string;
```

- *Type:* string
- *Default:* "v8"

Indicates which provider should be used to instrument code for coverage.

Allowed values are v8 (default) or babel

---

##### `coverageReporters`<sup>Optional</sup> <a name="coverageReporters" id="projen.javascript.JestConfigOptions.property.coverageReporters"></a>

```typescript
public readonly coverageReporters: string[];
```

- *Type:* string[]
- *Default:* ["json", "lcov", "text", "clover", "cobertura"]

A list of reporter names that Jest uses when writing coverage reports.

Any istanbul reporter can be used

---

##### `coverageThreshold`<sup>Optional</sup> <a name="coverageThreshold" id="projen.javascript.JestConfigOptions.property.coverageThreshold"></a>

```typescript
public readonly coverageThreshold: CoverageThreshold;
```

- *Type:* <a href="#projen.javascript.CoverageThreshold">CoverageThreshold</a>
- *Default:* undefined

Specify the global coverage thresholds.

This will be used to configure minimum threshold enforcement
for coverage results. Thresholds can be specified as global, as a glob, and as a directory or file path.
If thresholds aren't met, jest will fail.

---

##### `dependencyExtractor`<sup>Optional</sup> <a name="dependencyExtractor" id="projen.javascript.JestConfigOptions.property.dependencyExtractor"></a>

```typescript
public readonly dependencyExtractor: string;
```

- *Type:* string
- *Default:* undefined

This option allows the use of a custom dependency extractor.

It must be a node module that exports an object with an extract function

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="projen.javascript.JestConfigOptions.property.displayName"></a>

```typescript
public readonly displayName: any;
```

- *Type:* any
- *Default:* undefined

Allows for a label to be printed alongside a test while it is running.

---

##### `errorOnDeprecated`<sup>Optional</sup> <a name="errorOnDeprecated" id="projen.javascript.JestConfigOptions.property.errorOnDeprecated"></a>

```typescript
public readonly errorOnDeprecated: boolean;
```

- *Type:* boolean
- *Default:* false

Make calling deprecated APIs throw helpful error messages.

Useful for easing the upgrade process.

---

##### `extraGlobals`<sup>Optional</sup> <a name="extraGlobals" id="projen.javascript.JestConfigOptions.property.extraGlobals"></a>

```typescript
public readonly extraGlobals: string[];
```

- *Type:* string[]
- *Default:* undefined

Test files run inside a vm, which slows calls to global context properties (e.g. Math). With this option you can specify extra properties to be defined inside the vm for faster lookups.

---

##### `forceCoverageMatch`<sup>Optional</sup> <a name="forceCoverageMatch" id="projen.javascript.JestConfigOptions.property.forceCoverageMatch"></a>

```typescript
public readonly forceCoverageMatch: string[];
```

- *Type:* string[]
- *Default:* ['']

Test files are normally ignored from collecting code coverage.

With this option, you can overwrite this behavior and include otherwise ignored files in code coverage.

---

##### `globals`<sup>Optional</sup> <a name="globals" id="projen.javascript.JestConfigOptions.property.globals"></a>

```typescript
public readonly globals: any;
```

- *Type:* any
- *Default:* {}

A set of global variables that need to be available in all test environments.

---

##### `globalSetup`<sup>Optional</sup> <a name="globalSetup" id="projen.javascript.JestConfigOptions.property.globalSetup"></a>

```typescript
public readonly globalSetup: string;
```

- *Type:* string
- *Default:* undefined

This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites.

This function gets Jest's globalConfig object as a parameter.

---

##### `globalTeardown`<sup>Optional</sup> <a name="globalTeardown" id="projen.javascript.JestConfigOptions.property.globalTeardown"></a>

```typescript
public readonly globalTeardown: string;
```

- *Type:* string
- *Default:* undefined

This option allows the use of a custom global teardown module which exports an async function that is triggered once after all test suites.

This function gets Jest's globalConfig object as a parameter.

---

##### `haste`<sup>Optional</sup> <a name="haste" id="projen.javascript.JestConfigOptions.property.haste"></a>

```typescript
public readonly haste: HasteConfig;
```

- *Type:* <a href="#projen.javascript.HasteConfig">HasteConfig</a>
- *Default:* {}

This will be used to configure the behavior of jest-haste-map, Jest's internal file crawler/cache system.

---

##### `injectGlobals`<sup>Optional</sup> <a name="injectGlobals" id="projen.javascript.JestConfigOptions.property.injectGlobals"></a>

```typescript
public readonly injectGlobals: boolean;
```

- *Type:* boolean
- *Default:* true

Insert Jest's globals (expect, test, describe, beforeEach etc.) into the global environment. If you set this to false, you should import from.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="projen.javascript.JestConfigOptions.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number
- *Default:* 5

A number limiting the number of tests that are allowed to run at the same time when using test.concurrent. Any test above this limit will be queued and executed once a slot is released.

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="projen.javascript.JestConfigOptions.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: string | number;
```

- *Type:* string | number
- *Default:* the number of the cores available on your machine minus one for the main thread

Specifies the maximum number of workers the worker-pool will spawn for running tests.

In single run mode,
this defaults to the number of the cores available on your machine minus one for the main thread
In watch mode, this defaults to half of the available cores on your machine.
For environments with variable CPUs available, you can use percentage based configuration: "maxWorkers": "50%"

---

##### `moduleDirectories`<sup>Optional</sup> <a name="moduleDirectories" id="projen.javascript.JestConfigOptions.property.moduleDirectories"></a>

```typescript
public readonly moduleDirectories: string[];
```

- *Type:* string[]
- *Default:* ["node_modules"]

An array of directory names to be searched recursively up from the requiring module's location.

Setting this option will override the default, if you wish to still search node_modules for packages
include it along with any other options: ["node_modules", "bower_components"]

---

##### `moduleFileExtensions`<sup>Optional</sup> <a name="moduleFileExtensions" id="projen.javascript.JestConfigOptions.property.moduleFileExtensions"></a>

```typescript
public readonly moduleFileExtensions: string[];
```

- *Type:* string[]
- *Default:* ["js", "json", "jsx", "ts", "tsx", "node"]

An array of file extensions your modules use.

If you require modules without specifying a file extension,
these are the extensions Jest will look for, in left-to-right order.

---

##### `moduleNameMapper`<sup>Optional</sup> <a name="moduleNameMapper" id="projen.javascript.JestConfigOptions.property.moduleNameMapper"></a>

```typescript
public readonly moduleNameMapper: {[ key: string ]: string | string[]};
```

- *Type:* {[ key: string ]: string | string[]}
- *Default:* null

A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module.

---

##### `modulePathIgnorePatterns`<sup>Optional</sup> <a name="modulePathIgnorePatterns" id="projen.javascript.JestConfigOptions.property.modulePathIgnorePatterns"></a>

```typescript
public readonly modulePathIgnorePatterns: string[];
```

- *Type:* string[]
- *Default:* []

An array of regexp pattern strings that are matched against all module paths before those paths are to be considered 'visible' to the module loader.

If a given module's path matches any of the patterns,
it will not be require()-able in the test environment.

---

##### `modulePaths`<sup>Optional</sup> <a name="modulePaths" id="projen.javascript.JestConfigOptions.property.modulePaths"></a>

```typescript
public readonly modulePaths: string[];
```

- *Type:* string[]
- *Default:* []

An alternative API to setting the NODE_PATH env variable, modulePaths is an array of absolute paths to additional locations to search when resolving modules.

Use the <rootDir> string token to include
the path to your project's root directory. Example: ["<rootDir>/app/"].

---

##### `notify`<sup>Optional</sup> <a name="notify" id="projen.javascript.JestConfigOptions.property.notify"></a>

```typescript
public readonly notify: boolean;
```

- *Type:* boolean
- *Default:* false

Activates notifications for test results.

---

##### `notifyMode`<sup>Optional</sup> <a name="notifyMode" id="projen.javascript.JestConfigOptions.property.notifyMode"></a>

```typescript
public readonly notifyMode: string;
```

- *Type:* string
- *Default:* failure-change

Specifies notification mode.

Requires notify: true

---

##### `preset`<sup>Optional</sup> <a name="preset" id="projen.javascript.JestConfigOptions.property.preset"></a>

```typescript
public readonly preset: string;
```

- *Type:* string
- *Default:* undefined

A preset that is used as a base for Jest's configuration.

A preset should point to an npm module
that has a jest-preset.json or jest-preset.js file at the root.

---

##### `prettierPath`<sup>Optional</sup> <a name="prettierPath" id="projen.javascript.JestConfigOptions.property.prettierPath"></a>

```typescript
public readonly prettierPath: string;
```

- *Type:* string
- *Default:* "prettier"

Sets the path to the prettier node module used to update inline snapshots.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="projen.javascript.JestConfigOptions.property.projects"></a>

```typescript
public readonly projects: string | {[ key: string ]: any}[];
```

- *Type:* string | {[ key: string ]: any}[]
- *Default:* undefined

When the projects configuration is provided with an array of paths or glob patterns, Jest will run tests in all of the specified projects at the same time.

This is great for monorepos or
when working on multiple projects at the same time.

---

##### `reporters`<sup>Optional</sup> <a name="reporters" id="projen.javascript.JestConfigOptions.property.reporters"></a>

```typescript
public readonly reporters: JestReporter[];
```

- *Type:* <a href="#projen.javascript.JestReporter">JestReporter</a>[]
- *Default:* undefined

Use this configuration option to add custom reporters to Jest.

A custom reporter is a class
that implements onRunStart, onTestStart, onTestResult, onRunComplete methods that will be
called when any of those events occurs.

---

##### `resetMocks`<sup>Optional</sup> <a name="resetMocks" id="projen.javascript.JestConfigOptions.property.resetMocks"></a>

```typescript
public readonly resetMocks: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically reset mock state before every test.

Equivalent to calling jest.resetAllMocks()
before each test. This will lead to any mocks having their fake implementations removed but
does not restore their initial implementation.

---

##### `resetModules`<sup>Optional</sup> <a name="resetModules" id="projen.javascript.JestConfigOptions.property.resetModules"></a>

```typescript
public readonly resetModules: boolean;
```

- *Type:* boolean
- *Default:* false

By default, each test file gets its own independent module registry.

Enabling resetModules
goes a step further and resets the module registry before running each individual test.

---

##### `resolver`<sup>Optional</sup> <a name="resolver" id="projen.javascript.JestConfigOptions.property.resolver"></a>

```typescript
public readonly resolver: string;
```

- *Type:* string
- *Default:* undefined

This option allows the use of a custom resolver.

https://jestjs.io/docs/en/configuration#resolver-string

---

##### `restoreMocks`<sup>Optional</sup> <a name="restoreMocks" id="projen.javascript.JestConfigOptions.property.restoreMocks"></a>

```typescript
public readonly restoreMocks: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically restore mock state before every test.

Equivalent to calling jest.restoreAllMocks()
before each test. This will lead to any mocks having their fake implementations removed and
restores their initial implementation.

---

##### `rootDir`<sup>Optional</sup> <a name="rootDir" id="projen.javascript.JestConfigOptions.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string
- *Default:* directory of the package.json

The root directory that Jest should scan for tests and modules within.

If you put your Jest
config inside your package.json and want the root directory to be the root of your repo, the
value for this config param will default to the directory of the package.json.

---

##### `roots`<sup>Optional</sup> <a name="roots" id="projen.javascript.JestConfigOptions.property.roots"></a>

```typescript
public readonly roots: string[];
```

- *Type:* string[]
- *Default:* ["<rootDir>"]

A list of paths to directories that Jest should use to search for files in.

---

##### `runner`<sup>Optional</sup> <a name="runner" id="projen.javascript.JestConfigOptions.property.runner"></a>

```typescript
public readonly runner: string;
```

- *Type:* string
- *Default:* "jest-runner"

This option allows you to use a custom runner instead of Jest's default test runner.

---

##### `setupFiles`<sup>Optional</sup> <a name="setupFiles" id="projen.javascript.JestConfigOptions.property.setupFiles"></a>

```typescript
public readonly setupFiles: string[];
```

- *Type:* string[]
- *Default:* []

A list of paths to modules that run some code to configure or set up the testing environment.

Each setupFile will be run once per test file. Since every test runs in its own environment,
these scripts will be executed in the testing environment immediately before executing the
test code itself.

---

##### `setupFilesAfterEnv`<sup>Optional</sup> <a name="setupFilesAfterEnv" id="projen.javascript.JestConfigOptions.property.setupFilesAfterEnv"></a>

```typescript
public readonly setupFilesAfterEnv: string[];
```

- *Type:* string[]
- *Default:* []

A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.

Since setupFiles executes before the test
framework is installed in the environment, this script file presents you the opportunity of
running some code immediately after the test framework has been installed in the environment.

---

##### `slowTestThreshold`<sup>Optional</sup> <a name="slowTestThreshold" id="projen.javascript.JestConfigOptions.property.slowTestThreshold"></a>

```typescript
public readonly slowTestThreshold: number;
```

- *Type:* number
- *Default:* 5

The number of seconds after which a test is considered as slow and reported as such in the results.

---

##### `snapshotResolver`<sup>Optional</sup> <a name="snapshotResolver" id="projen.javascript.JestConfigOptions.property.snapshotResolver"></a>

```typescript
public readonly snapshotResolver: string;
```

- *Type:* string
- *Default:* undefined

The path to a module that can resolve test<->snapshot path.

This config option lets you customize
where Jest stores snapshot files on disk.

---

##### `snapshotSerializers`<sup>Optional</sup> <a name="snapshotSerializers" id="projen.javascript.JestConfigOptions.property.snapshotSerializers"></a>

```typescript
public readonly snapshotSerializers: string[];
```

- *Type:* string[]
- *Default:* = []

A list of paths to snapshot serializer modules Jest should use for snapshot testing.

---

##### `testEnvironment`<sup>Optional</sup> <a name="testEnvironment" id="projen.javascript.JestConfigOptions.property.testEnvironment"></a>

```typescript
public readonly testEnvironment: string;
```

- *Type:* string
- *Default:* "jsdom"

The test environment that will be used for testing.

The default environment in Jest is a
browser-like environment through jsdom. If you are building a node service, you can use the node
option to use a node-like environment instead.

---

##### `testEnvironmentOptions`<sup>Optional</sup> <a name="testEnvironmentOptions" id="projen.javascript.JestConfigOptions.property.testEnvironmentOptions"></a>

```typescript
public readonly testEnvironmentOptions: any;
```

- *Type:* any
- *Default:* {}

Test environment options that will be passed to the testEnvironment.

The relevant options depend on the environment.

---

##### `testFailureExitCode`<sup>Optional</sup> <a name="testFailureExitCode" id="projen.javascript.JestConfigOptions.property.testFailureExitCode"></a>

```typescript
public readonly testFailureExitCode: number;
```

- *Type:* number
- *Default:* 1

The exit code Jest returns on test failure.

---

##### `testMatch`<sup>Optional</sup> <a name="testMatch" id="projen.javascript.JestConfigOptions.property.testMatch"></a>

```typescript
public readonly testMatch: string[];
```

- *Type:* string[]
- *Default:* ['**\/__tests__/**\/*.[jt]s?(x)', '**\/?(*.)+(spec|test).[tj]s?(x)']

The glob patterns Jest uses to detect test files.

By default it looks for .js, .jsx, .ts and .tsx
files inside of __tests__ folders, as well as any files with a suffix of .test or .spec
(e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js.

---

##### `testPathIgnorePatterns`<sup>Optional</sup> <a name="testPathIgnorePatterns" id="projen.javascript.JestConfigOptions.property.testPathIgnorePatterns"></a>

```typescript
public readonly testPathIgnorePatterns: string[];
```

- *Type:* string[]
- *Default:* ["/node_modules/"]

An array of regexp pattern strings that are matched against all test paths before executing the test.

If the test path matches any of the patterns, it will be skipped.

---

##### `testRegex`<sup>Optional</sup> <a name="testRegex" id="projen.javascript.JestConfigOptions.property.testRegex"></a>

```typescript
public readonly testRegex: string | string[];
```

- *Type:* string | string[]
- *Default:* (/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$

The pattern or patterns Jest uses to detect test files.

By default it looks for .js, .jsx, .ts and .tsx
files inside of __tests__ folders, as well as any files with a suffix of .test or .spec
(e.g. Component.test.js or Component.spec.js). It will also find files called test.js or spec.js.

---

##### `testResultsProcessor`<sup>Optional</sup> <a name="testResultsProcessor" id="projen.javascript.JestConfigOptions.property.testResultsProcessor"></a>

```typescript
public readonly testResultsProcessor: string;
```

- *Type:* string
- *Default:* undefined

This option allows the use of a custom results processor.

---

##### `testRunner`<sup>Optional</sup> <a name="testRunner" id="projen.javascript.JestConfigOptions.property.testRunner"></a>

```typescript
public readonly testRunner: string;
```

- *Type:* string
- *Default:* "jasmine2"

This option allows the use of a custom test runner.

The default is jasmine2. A custom test runner
can be provided by specifying a path to a test runner implementation.

---

##### `testSequencer`<sup>Optional</sup> <a name="testSequencer" id="projen.javascript.JestConfigOptions.property.testSequencer"></a>

```typescript
public readonly testSequencer: string;
```

- *Type:* string
- *Default:* "@jest/test-sequencer"

This option allows you to use a custom sequencer instead of Jest's default.

Sort may optionally return a Promise.

---

##### `testTimeout`<sup>Optional</sup> <a name="testTimeout" id="projen.javascript.JestConfigOptions.property.testTimeout"></a>

```typescript
public readonly testTimeout: number;
```

- *Type:* number
- *Default:* 5000

Default timeout of a test in milliseconds.

---

##### `testURL`<sup>Optional</sup> <a name="testURL" id="projen.javascript.JestConfigOptions.property.testURL"></a>

```typescript
public readonly testURL: string;
```

- *Type:* string
- *Default:* "http://localhost"

This option sets the URL for the jsdom environment.

It is reflected in properties such as location.href.

---

##### `timers`<sup>Optional</sup> <a name="timers" id="projen.javascript.JestConfigOptions.property.timers"></a>

```typescript
public readonly timers: string;
```

- *Type:* string
- *Default:* "real"

Setting this value to legacy or fake allows the use of fake timers for functions such as setTimeout.

Fake timers are useful when a piece of code sets a long timeout that we don't want to wait for in a test.

---

##### `transform`<sup>Optional</sup> <a name="transform" id="projen.javascript.JestConfigOptions.property.transform"></a>

```typescript
public readonly transform: {[ key: string ]: Transform};
```

- *Type:* {[ key: string ]: <a href="#projen.javascript.Transform">Transform</a>}
- *Default:* {"\\.[jt]sx?$": "babel-jest"}

A map from regular expressions to paths to transformers.

A transformer is a module that provides a
synchronous function for transforming source files.

---

##### `transformIgnorePatterns`<sup>Optional</sup> <a name="transformIgnorePatterns" id="projen.javascript.JestConfigOptions.property.transformIgnorePatterns"></a>

```typescript
public readonly transformIgnorePatterns: string[];
```

- *Type:* string[]
- *Default:* ["/node_modules/", "\\.pnp\\.[^\\\/]+$"]

An array of regexp pattern strings that are matched against all source file paths before transformation.

If the test path matches any of the patterns, it will not be transformed.

---

##### `unmockedModulePathPatterns`<sup>Optional</sup> <a name="unmockedModulePathPatterns" id="projen.javascript.JestConfigOptions.property.unmockedModulePathPatterns"></a>

```typescript
public readonly unmockedModulePathPatterns: string[];
```

- *Type:* string[]
- *Default:* []

An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them.

If a module's path matches any of the patterns in this list, it
will not be automatically mocked by the module loader.

---

##### `verbose`<sup>Optional</sup> <a name="verbose" id="projen.javascript.JestConfigOptions.property.verbose"></a>

```typescript
public readonly verbose: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether each individual test should be reported during the run.

All errors will also
still be shown on the bottom after execution. Note that if there is only one test file being run
it will default to true.

---

##### `watchman`<sup>Optional</sup> <a name="watchman" id="projen.javascript.JestConfigOptions.property.watchman"></a>

```typescript
public readonly watchman: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to use watchman for file crawling.

---

##### `watchPathIgnorePatterns`<sup>Optional</sup> <a name="watchPathIgnorePatterns" id="projen.javascript.JestConfigOptions.property.watchPathIgnorePatterns"></a>

```typescript
public readonly watchPathIgnorePatterns: string[];
```

- *Type:* string[]
- *Default:* []

An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode.

If the file path matches any of the patterns, when it is updated, it will not trigger
a re-run of tests.

---

##### `watchPlugins`<sup>Optional</sup> <a name="watchPlugins" id="projen.javascript.JestConfigOptions.property.watchPlugins"></a>

```typescript
public readonly watchPlugins: WatchPlugin[];
```

- *Type:* <a href="#projen.javascript.WatchPlugin">WatchPlugin</a>[]
- *Default:* 

---

### JestOptions <a name="JestOptions" id="projen.javascript.JestOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.JestOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const jestOptions: javascript.JestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.JestOptions.property.configFilePath">configFilePath</a></code> | <code>string</code> | Path to JSON config file for Jest. |
| <code><a href="#projen.javascript.JestOptions.property.coverage">coverage</a></code> | <code>boolean</code> | Collect coverage. |
| <code><a href="#projen.javascript.JestOptions.property.coverageText">coverageText</a></code> | <code>boolean</code> | Include the `text` coverage reporter, which means that coverage summary is printed at the end of the jest execution. |
| <code><a href="#projen.javascript.JestOptions.property.extraCliOptions">extraCliOptions</a></code> | <code>string[]</code> | Additional options to pass to the Jest CLI invocation. |
| <code><a href="#projen.javascript.JestOptions.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | Defines `testPathIgnorePatterns` and `coveragePathIgnorePatterns`. |
| <code><a href="#projen.javascript.JestOptions.property.jestConfig">jestConfig</a></code> | <code><a href="#projen.javascript.JestConfigOptions">JestConfigOptions</a></code> | Jest configuration. |
| <code><a href="#projen.javascript.JestOptions.property.jestVersion">jestVersion</a></code> | <code>string</code> | The version of jest to use. |
| <code><a href="#projen.javascript.JestOptions.property.junitReporting">junitReporting</a></code> | <code>boolean</code> | Result processing with jest-junit. |
| <code><a href="#projen.javascript.JestOptions.property.preserveDefaultReporters">preserveDefaultReporters</a></code> | <code>boolean</code> | Preserve the default Jest reporter when additional reporters are added. |
| <code><a href="#projen.javascript.JestOptions.property.updateSnapshot">updateSnapshot</a></code> | <code><a href="#projen.javascript.UpdateSnapshot">UpdateSnapshot</a></code> | Whether to update snapshots in task "test" (which is executed in task "build" and build workflows), or create a separate task "test:update" for updating snapshots. |

---

##### `configFilePath`<sup>Optional</sup> <a name="configFilePath" id="projen.javascript.JestOptions.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string
- *Default:* No separate config file, jest settings are stored in package.json

Path to JSON config file for Jest.

---

##### ~~`coverage`~~<sup>Optional</sup> <a name="coverage" id="projen.javascript.JestOptions.property.coverage"></a>

- *Deprecated:* use jestConfig.collectCoverage

```typescript
public readonly coverage: boolean;
```

- *Type:* boolean
- *Default:* true

Collect coverage.

Deprecated

---

##### `coverageText`<sup>Optional</sup> <a name="coverageText" id="projen.javascript.JestOptions.property.coverageText"></a>

```typescript
public readonly coverageText: boolean;
```

- *Type:* boolean
- *Default:* true

Include the `text` coverage reporter, which means that coverage summary is printed at the end of the jest execution.

---

##### `extraCliOptions`<sup>Optional</sup> <a name="extraCliOptions" id="projen.javascript.JestOptions.property.extraCliOptions"></a>

```typescript
public readonly extraCliOptions: string[];
```

- *Type:* string[]
- *Default:* no extra options

Additional options to pass to the Jest CLI invocation.

---

##### ~~`ignorePatterns`~~<sup>Optional</sup> <a name="ignorePatterns" id="projen.javascript.JestOptions.property.ignorePatterns"></a>

- *Deprecated:* use jestConfig.coveragePathIgnorePatterns or jestConfig.testPathIgnorePatterns respectively

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* ["/node_modules/"]

Defines `testPathIgnorePatterns` and `coveragePathIgnorePatterns`.

---

##### `jestConfig`<sup>Optional</sup> <a name="jestConfig" id="projen.javascript.JestOptions.property.jestConfig"></a>

```typescript
public readonly jestConfig: JestConfigOptions;
```

- *Type:* <a href="#projen.javascript.JestConfigOptions">JestConfigOptions</a>
- *Default:* default jest configuration

Jest configuration.

---

##### `jestVersion`<sup>Optional</sup> <a name="jestVersion" id="projen.javascript.JestOptions.property.jestVersion"></a>

```typescript
public readonly jestVersion: string;
```

- *Type:* string
- *Default:* installs the latest jest version

The version of jest to use.

Note that same version is used as version of `@types/jest` and `ts-jest` (if Typescript in use), so given version should work also for those.

---

##### `junitReporting`<sup>Optional</sup> <a name="junitReporting" id="projen.javascript.JestOptions.property.junitReporting"></a>

```typescript
public readonly junitReporting: boolean;
```

- *Type:* boolean
- *Default:* true

Result processing with jest-junit.

Output directory is `test-reports/`.

---

##### `preserveDefaultReporters`<sup>Optional</sup> <a name="preserveDefaultReporters" id="projen.javascript.JestOptions.property.preserveDefaultReporters"></a>

```typescript
public readonly preserveDefaultReporters: boolean;
```

- *Type:* boolean
- *Default:* true

Preserve the default Jest reporter when additional reporters are added.

---

##### `updateSnapshot`<sup>Optional</sup> <a name="updateSnapshot" id="projen.javascript.JestOptions.property.updateSnapshot"></a>

```typescript
public readonly updateSnapshot: UpdateSnapshot;
```

- *Type:* <a href="#projen.javascript.UpdateSnapshot">UpdateSnapshot</a>
- *Default:* ALWAYS

Whether to update snapshots in task "test" (which is executed in task "build" and build workflows), or create a separate task "test:update" for updating snapshots.

---

### LicenseCheckerOptions <a name="LicenseCheckerOptions" id="projen.javascript.LicenseCheckerOptions"></a>

Options to configure the license checker.

#### Initializer <a name="Initializer" id="projen.javascript.LicenseCheckerOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const licenseCheckerOptions: javascript.LicenseCheckerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.LicenseCheckerOptions.property.allow">allow</a></code> | <code>string[]</code> | List of SPDX license identifiers that are allowed to be used. |
| <code><a href="#projen.javascript.LicenseCheckerOptions.property.deny">deny</a></code> | <code>string[]</code> | List of SPDX license identifiers that are prohibited to be used. |
| <code><a href="#projen.javascript.LicenseCheckerOptions.property.development">development</a></code> | <code>boolean</code> | Check development dependencies. |
| <code><a href="#projen.javascript.LicenseCheckerOptions.property.production">production</a></code> | <code>boolean</code> | Check production dependencies. |
| <code><a href="#projen.javascript.LicenseCheckerOptions.property.taskName">taskName</a></code> | <code>string</code> | The name of the task that is added to check licenses. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="projen.javascript.LicenseCheckerOptions.property.allow"></a>

```typescript
public readonly allow: string[];
```

- *Type:* string[]
- *Default:* no licenses are allowed

List of SPDX license identifiers that are allowed to be used.

For the license check to pass, all detected licenses MUST be in this list.
Only one of `allowedLicenses` and `prohibitedLicenses` can be provided and must not be empty.

---

##### `deny`<sup>Optional</sup> <a name="deny" id="projen.javascript.LicenseCheckerOptions.property.deny"></a>

```typescript
public readonly deny: string[];
```

- *Type:* string[]
- *Default:* no licenses are prohibited

List of SPDX license identifiers that are prohibited to be used.

For the license check to pass, no detected licenses can be in this list.
Only one of `allowedLicenses` and `prohibitedLicenses` can be provided and must not be empty.

---

##### `development`<sup>Optional</sup> <a name="development" id="projen.javascript.LicenseCheckerOptions.property.development"></a>

```typescript
public readonly development: boolean;
```

- *Type:* boolean
- *Default:* false

Check development dependencies.

---

##### `production`<sup>Optional</sup> <a name="production" id="projen.javascript.LicenseCheckerOptions.property.production"></a>

```typescript
public readonly production: boolean;
```

- *Type:* boolean
- *Default:* true

Check production dependencies.

---

##### `taskName`<sup>Optional</sup> <a name="taskName" id="projen.javascript.LicenseCheckerOptions.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string
- *Default:* "check-licenses"

The name of the task that is added to check licenses.

---

### NodePackageOptions <a name="NodePackageOptions" id="projen.javascript.NodePackageOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.NodePackageOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const nodePackageOptions: javascript.NodePackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodePackageOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.javascript.NodePackageOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.javascript.NodePackageOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.javascript.NodePackageOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.javascript.NodePackageOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.javascript.NodePackageOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.javascript.NodePackageOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.javascript.NodePackageOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.javascript.NodePackageOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.javascript.NodePackageOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.javascript.NodePackageOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code><a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a></code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.javascript.NodePackageOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.javascript.NodePackageOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.javascript.NodePackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.javascript.NodePackageOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.javascript.NodePackageOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.javascript.NodePackageOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.javascript.NodePackageOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.javascript.NodePackageOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.javascript.NodePackageOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.javascript.NodePackageOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.javascript.NodePackageOptions.property.npmAccess">npmAccess</a></code> | <code><a href="#projen.javascript.NpmAccess">NpmAccess</a></code> | Access level of the npm package. |
| <code><a href="#projen.javascript.NodePackageOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.javascript.NodePackageOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.javascript.NodePackageOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.javascript.NodePackageOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.javascript.NodePackageOptions.property.packageManager">packageManager</a></code> | <code><a href="#projen.javascript.NodePackageManager">NodePackageManager</a></code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.javascript.NodePackageOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.javascript.NodePackageOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code><a href="#projen.javascript.PeerDependencyOptions">PeerDependencyOptions</a></code> | Options for `peerDeps`. |
| <code><a href="#projen.javascript.NodePackageOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.javascript.NodePackageOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.javascript.NodePackageOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.javascript.NodePackageOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.javascript.NodePackageOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code><a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.javascript.NodePackageOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.javascript.NodePackageOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.javascript.NodePackageOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code><a href="#projen.javascript.YarnBerryOptions">YarnBerryOptions</a></code> | Options for Yarn Berry. |

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.javascript.NodePackageOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.javascript.NodePackageOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.javascript.NodePackageOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.javascript.NodePackageOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.javascript.NodePackageOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.javascript.NodePackageOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.javascript.NodePackageOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.javascript.NodePackageOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.javascript.NodePackageOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.javascript.NodePackageOptions.property.bundledDeps"></a>

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.javascript.NodePackageOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* <a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a>
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.javascript.NodePackageOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="projen.javascript.NodePackageOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.javascript.NodePackageOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.javascript.NodePackageOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.javascript.NodePackageOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.javascript.NodePackageOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.javascript.NodePackageOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.javascript.NodePackageOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.javascript.NodePackageOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.javascript.NodePackageOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.javascript.NodePackageOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* <a href="#projen.javascript.NpmAccess">NpmAccess</a>
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.javascript.NodePackageOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.javascript.NodePackageOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.javascript.NodePackageOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.javascript.NodePackageOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.javascript.NodePackageOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* <a href="#projen.javascript.NodePackageManager">NodePackageManager</a>
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.javascript.NodePackageOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.javascript.NodePackageOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* <a href="#projen.javascript.PeerDependencyOptions">PeerDependencyOptions</a>

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.javascript.NodePackageOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.javascript.NodePackageOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.javascript.NodePackageOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.javascript.NodePackageOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.javascript.NodePackageOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* <a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.javascript.NodePackageOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.javascript.NodePackageOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.javascript.NodePackageOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* <a href="#projen.javascript.YarnBerryOptions">YarnBerryOptions</a>
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### NodeProjectOptions <a name="NodeProjectOptions" id="projen.javascript.NodeProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.NodeProjectOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const nodeProjectOptions: javascript.NodeProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NodeProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code><a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a></code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmAccess">npmAccess</a></code> | <code><a href="#projen.javascript.NpmAccess">NpmAccess</a></code> | Access level of the npm package. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.packageManager">packageManager</a></code> | <code><a href="#projen.javascript.NodePackageManager">NodePackageManager</a></code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code><a href="#projen.javascript.PeerDependencyOptions">PeerDependencyOptions</a></code> | Options for `peerDeps`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code><a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code><a href="#projen.javascript.YarnBerryOptions">YarnBerryOptions</a></code> | Options for Yarn Berry. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code><a href="#projen.javascript.BuildWorkflowOptions">BuildWorkflowOptions</a></code> | Options for PR build workflow. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code><a href="#projen.javascript.BundlerOptions">BundlerOptions</a></code> | Options for `Bundler`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code><a href="#projen.javascript.LicenseCheckerOptions">LicenseCheckerOptions</a></code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesOptions">UpgradeDependenciesOptions</a></code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.jestOptions">jestOptions</a></code> | <code><a href="#projen.javascript.JestOptions">JestOptions</a></code> | Jest options. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen.javascript.NodeProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code><a href="#projen.javascript.PrettierOptions">PrettierOptions</a></code> | Prettier options. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code><a href="#projen.javascript.ProjenrcOptions">ProjenrcOptions</a></code> | Options for .projenrc.js. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen.javascript.NodeProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.javascript.NodeProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.javascript.NodeProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.javascript.NodeProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.javascript.NodeProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.javascript.NodeProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.javascript.NodeProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.javascript.NodeProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.javascript.NodeProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.javascript.NodeProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.javascript.NodeProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.javascript.NodeProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.javascript.NodeProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen.javascript.NodeProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen.javascript.NodeProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen.javascript.NodeProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen.javascript.NodeProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen.javascript.NodeProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen.javascript.NodeProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen.javascript.NodeProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen.javascript.NodeProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen.javascript.NodeProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen.javascript.NodeProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen.javascript.NodeProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.javascript.NodeProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen.javascript.NodeProjectOptions.property.projenTokenSecret"></a>

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

##### `readme`<sup>Optional</sup> <a name="readme" id="projen.javascript.NodeProjectOptions.property.readme"></a>

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


##### `stale`<sup>Optional</sup> <a name="stale" id="projen.javascript.NodeProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen.javascript.NodeProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen.javascript.NodeProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen.javascript.NodeProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen.javascript.NodeProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen.javascript.NodeProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen.javascript.NodeProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen.javascript.NodeProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen.javascript.NodeProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen.javascript.NodeProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen.javascript.NodeProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen.javascript.NodeProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen.javascript.NodeProjectOptions.property.bundledDeps"></a>

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

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen.javascript.NodeProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* <a href="#projen.javascript.CodeArtifactOptions">CodeArtifactOptions</a>
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen.javascript.NodeProjectOptions.property.deps"></a>

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


##### `description`<sup>Optional</sup> <a name="description" id="projen.javascript.NodeProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen.javascript.NodeProjectOptions.property.devDeps"></a>

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


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.javascript.NodeProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen.javascript.NodeProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen.javascript.NodeProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen.javascript.NodeProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen.javascript.NodeProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen.javascript.NodeProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen.javascript.NodeProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen.javascript.NodeProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* <a href="#projen.javascript.NpmAccess">NpmAccess</a>
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen.javascript.NodeProjectOptions.property.npmProvenance"></a>

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

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen.javascript.NodeProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen.javascript.NodeProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen.javascript.NodeProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen.javascript.NodeProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* <a href="#projen.javascript.NodePackageManager">NodePackageManager</a>
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen.javascript.NodeProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen.javascript.NodeProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* <a href="#projen.javascript.PeerDependencyOptions">PeerDependencyOptions</a>

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen.javascript.NodeProjectOptions.property.peerDeps"></a>

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

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen.javascript.NodeProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen.javascript.NodeProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen.javascript.NodeProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen.javascript.NodeProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* <a href="#projen.javascript.ScopedPackagesOptions">ScopedPackagesOptions</a>[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen.javascript.NodeProjectOptions.property.scripts"></a>

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

##### `stability`<sup>Optional</sup> <a name="stability" id="projen.javascript.NodeProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen.javascript.NodeProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* <a href="#projen.javascript.YarnBerryOptions">YarnBerryOptions</a>
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen.javascript.NodeProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.javascript.NodeProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.javascript.NodeProjectOptions.property.minMajorVersion"></a>

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

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen.javascript.NodeProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen.javascript.NodeProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.javascript.NodeProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen.javascript.NodeProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen.javascript.NodeProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.javascript.NodeProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen.javascript.NodeProjectOptions.property.releaseBranches"></a>

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

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen.javascript.NodeProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen.javascript.NodeProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen.javascript.NodeProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen.javascript.NodeProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen.javascript.NodeProjectOptions.property.releaseTagPrefix"></a>

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

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen.javascript.NodeProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen.javascript.NodeProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen.javascript.NodeProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.javascript.NodeProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen.javascript.NodeProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen.javascript.NodeProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen.javascript.NodeProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen.javascript.NodeProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen.javascript.NodeProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen.javascript.NodeProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen.javascript.NodeProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen.javascript.NodeProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* <a href="#projen.javascript.BuildWorkflowOptions">BuildWorkflowOptions</a>

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen.javascript.NodeProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen.javascript.NodeProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* <a href="#projen.javascript.BundlerOptions">BundlerOptions</a>

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen.javascript.NodeProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* <a href="#projen.javascript.LicenseCheckerOptions">LicenseCheckerOptions</a>
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen.javascript.NodeProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v4 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen.javascript.NodeProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.javascript.NodeProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.javascript.NodeProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen.javascript.NodeProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen.javascript.NodeProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen.javascript.NodeProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen.javascript.NodeProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesOptions">UpgradeDependenciesOptions</a>
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen.javascript.NodeProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen.javascript.NodeProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen.javascript.NodeProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* <a href="#projen.javascript.JestOptions">JestOptions</a>
- *Default:* default options

Jest options.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen.javascript.NodeProjectOptions.property.mutableBuild"></a>

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

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen.javascript.NodeProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen.javascript.NodeProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen.javascript.NodeProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen.javascript.NodeProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen.javascript.NodeProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen.javascript.NodeProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* <a href="#projen.javascript.PrettierOptions">PrettierOptions</a>
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen.javascript.NodeProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen.javascript.NodeProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen.javascript.NodeProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* <a href="#projen.javascript.ProjenrcOptions">ProjenrcOptions</a>
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen.javascript.NodeProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen.javascript.NodeProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen.javascript.NodeProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.javascript.NodeProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen.javascript.NodeProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen.javascript.NodeProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen.javascript.NodeProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen.javascript.NodeProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen.javascript.NodeProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen.javascript.NodeProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

### NpmConfigOptions <a name="NpmConfigOptions" id="projen.javascript.NpmConfigOptions"></a>

Options to configure the local NPM config.

#### Initializer <a name="Initializer" id="projen.javascript.NpmConfigOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const npmConfigOptions: javascript.NpmConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.NpmConfigOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |
| <code><a href="#projen.javascript.NpmConfigOptions.property.registry">registry</a></code> | <code>string</code> | URL of the registry mirror to use. |

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.javascript.NpmConfigOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

##### `registry`<sup>Optional</sup> <a name="registry" id="projen.javascript.NpmConfigOptions.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string
- *Default:* use npmjs default registry

URL of the registry mirror to use.

You can change this or add scoped registries using the addRegistry method

---

### PeerDependencyOptions <a name="PeerDependencyOptions" id="projen.javascript.PeerDependencyOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.PeerDependencyOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const peerDependencyOptions: javascript.PeerDependencyOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.PeerDependencyOptions.property.pinnedDevDependency">pinnedDevDependency</a></code> | <code>boolean</code> | Automatically add a pinned dev dependency. |

---

##### `pinnedDevDependency`<sup>Optional</sup> <a name="pinnedDevDependency" id="projen.javascript.PeerDependencyOptions.property.pinnedDevDependency"></a>

```typescript
public readonly pinnedDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add a pinned dev dependency.

---

### PrettierOptions <a name="PrettierOptions" id="projen.javascript.PrettierOptions"></a>

Options for Prettier.

#### Initializer <a name="Initializer" id="projen.javascript.PrettierOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const prettierOptions: javascript.PrettierOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.PrettierOptions.property.ignoreFile">ignoreFile</a></code> | <code>boolean</code> | Defines an .prettierIgnore file. |
| <code><a href="#projen.javascript.PrettierOptions.property.ignoreFileOptions">ignoreFileOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .prettierignore file. |
| <code><a href="#projen.javascript.PrettierOptions.property.overrides">overrides</a></code> | <code><a href="#projen.javascript.PrettierOverride">PrettierOverride</a>[]</code> | Provide a list of patterns to override prettier configuration. |
| <code><a href="#projen.javascript.PrettierOptions.property.settings">settings</a></code> | <code><a href="#projen.javascript.PrettierSettings">PrettierSettings</a></code> | Prettier settings. |
| <code><a href="#projen.javascript.PrettierOptions.property.yaml">yaml</a></code> | <code>boolean</code> | Write prettier configuration as YAML instead of JSON. |

---

##### `ignoreFile`<sup>Optional</sup> <a name="ignoreFile" id="projen.javascript.PrettierOptions.property.ignoreFile"></a>

```typescript
public readonly ignoreFile: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .prettierIgnore file.

---

##### `ignoreFileOptions`<sup>Optional</sup> <a name="ignoreFileOptions" id="projen.javascript.PrettierOptions.property.ignoreFileOptions"></a>

```typescript
public readonly ignoreFileOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .prettierignore file.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="projen.javascript.PrettierOptions.property.overrides"></a>

```typescript
public readonly overrides: PrettierOverride[];
```

- *Type:* <a href="#projen.javascript.PrettierOverride">PrettierOverride</a>[]
- *Default:* []

Provide a list of patterns to override prettier configuration.

> [https://prettier.io/docs/en/configuration.html#configuration-overrides](https://prettier.io/docs/en/configuration.html#configuration-overrides)

---

##### `settings`<sup>Optional</sup> <a name="settings" id="projen.javascript.PrettierOptions.property.settings"></a>

```typescript
public readonly settings: PrettierSettings;
```

- *Type:* <a href="#projen.javascript.PrettierSettings">PrettierSettings</a>
- *Default:* default settings

Prettier settings.

---

##### `yaml`<sup>Optional</sup> <a name="yaml" id="projen.javascript.PrettierOptions.property.yaml"></a>

```typescript
public readonly yaml: boolean;
```

- *Type:* boolean
- *Default:* false

Write prettier configuration as YAML instead of JSON.

---

### PrettierOverride <a name="PrettierOverride" id="projen.javascript.PrettierOverride"></a>

#### Initializer <a name="Initializer" id="projen.javascript.PrettierOverride.Initializer"></a>

```typescript
import { javascript } from 'projen'

const prettierOverride: javascript.PrettierOverride = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.PrettierOverride.property.files">files</a></code> | <code>string \| string[]</code> | Include these files in this override. |
| <code><a href="#projen.javascript.PrettierOverride.property.options">options</a></code> | <code><a href="#projen.javascript.PrettierSettings">PrettierSettings</a></code> | The options to apply for this override. |
| <code><a href="#projen.javascript.PrettierOverride.property.excludeFiles">excludeFiles</a></code> | <code>string \| string[]</code> | Exclude these files from this override. |

---

##### `files`<sup>Required</sup> <a name="files" id="projen.javascript.PrettierOverride.property.files"></a>

```typescript
public readonly files: string | string[];
```

- *Type:* string | string[]

Include these files in this override.

---

##### `options`<sup>Required</sup> <a name="options" id="projen.javascript.PrettierOverride.property.options"></a>

```typescript
public readonly options: PrettierSettings;
```

- *Type:* <a href="#projen.javascript.PrettierSettings">PrettierSettings</a>

The options to apply for this override.

---

##### `excludeFiles`<sup>Optional</sup> <a name="excludeFiles" id="projen.javascript.PrettierOverride.property.excludeFiles"></a>

```typescript
public readonly excludeFiles: string | string[];
```

- *Type:* string | string[]

Exclude these files from this override.

---

### PrettierSettings <a name="PrettierSettings" id="projen.javascript.PrettierSettings"></a>

Options to set in Prettier directly or through overrides.

> [https://prettier.io/docs/en/options.html](https://prettier.io/docs/en/options.html)

#### Initializer <a name="Initializer" id="projen.javascript.PrettierSettings.Initializer"></a>

```typescript
import { javascript } from 'projen'

const prettierSettings: javascript.PrettierSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.PrettierSettings.property.arrowParens">arrowParens</a></code> | <code><a href="#projen.javascript.ArrowParens">ArrowParens</a></code> | Include parentheses around a sole arrow function parameter. |
| <code><a href="#projen.javascript.PrettierSettings.property.bracketSameLine">bracketSameLine</a></code> | <code>boolean</code> | Put > of opening tags on the last line instead of on a new line. |
| <code><a href="#projen.javascript.PrettierSettings.property.bracketSpacing">bracketSpacing</a></code> | <code>boolean</code> | Print spaces between brackets. |
| <code><a href="#projen.javascript.PrettierSettings.property.cursorOffset">cursorOffset</a></code> | <code>number</code> | Print (to stderr) where a cursor at the given position would move to after formatting. |
| <code><a href="#projen.javascript.PrettierSettings.property.embeddedLanguageFormatting">embeddedLanguageFormatting</a></code> | <code><a href="#projen.javascript.EmbeddedLanguageFormatting">EmbeddedLanguageFormatting</a></code> | Control how Prettier formats quoted code embedded in the file. |
| <code><a href="#projen.javascript.PrettierSettings.property.endOfLine">endOfLine</a></code> | <code><a href="#projen.javascript.EndOfLine">EndOfLine</a></code> | Which end of line characters to apply. |
| <code><a href="#projen.javascript.PrettierSettings.property.filepath">filepath</a></code> | <code>string</code> | Specify the input filepath. |
| <code><a href="#projen.javascript.PrettierSettings.property.htmlWhitespaceSensitivity">htmlWhitespaceSensitivity</a></code> | <code><a href="#projen.javascript.HTMLWhitespaceSensitivity">HTMLWhitespaceSensitivity</a></code> | How to handle whitespaces in HTML. |
| <code><a href="#projen.javascript.PrettierSettings.property.insertPragma">insertPragma</a></code> | <code>boolean</code> | Insert. |
| <code><a href="#projen.javascript.PrettierSettings.property.jsxSingleQuote">jsxSingleQuote</a></code> | <code>boolean</code> | Use single quotes in JSX. |
| <code><a href="#projen.javascript.PrettierSettings.property.parser">parser</a></code> | <code>string</code> | Which parser to use. |
| <code><a href="#projen.javascript.PrettierSettings.property.plugins">plugins</a></code> | <code>string[]</code> | Add a plugin. |
| <code><a href="#projen.javascript.PrettierSettings.property.pluginSearchDirs">pluginSearchDirs</a></code> | <code>string[]</code> | Custom directory that contains prettier plugins in node_modules subdirectory. |
| <code><a href="#projen.javascript.PrettierSettings.property.printWidth">printWidth</a></code> | <code>number</code> | The line length where Prettier will try wrap. |
| <code><a href="#projen.javascript.PrettierSettings.property.proseWrap">proseWrap</a></code> | <code><a href="#projen.javascript.ProseWrap">ProseWrap</a></code> | How to wrap prose. |
| <code><a href="#projen.javascript.PrettierSettings.property.quoteProps">quoteProps</a></code> | <code><a href="#projen.javascript.QuoteProps">QuoteProps</a></code> | Change when properties in objects are quoted. |
| <code><a href="#projen.javascript.PrettierSettings.property.rangeEnd">rangeEnd</a></code> | <code>number</code> | Format code ending at a given character offset (exclusive). |
| <code><a href="#projen.javascript.PrettierSettings.property.rangeStart">rangeStart</a></code> | <code>number</code> | Format code starting at a given character offset. |
| <code><a href="#projen.javascript.PrettierSettings.property.requirePragma">requirePragma</a></code> | <code>boolean</code> | Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted. |
| <code><a href="#projen.javascript.PrettierSettings.property.semi">semi</a></code> | <code>boolean</code> | Print semicolons. |
| <code><a href="#projen.javascript.PrettierSettings.property.singleQuote">singleQuote</a></code> | <code>boolean</code> | Use single quotes instead of double quotes. |
| <code><a href="#projen.javascript.PrettierSettings.property.tabWidth">tabWidth</a></code> | <code>number</code> | Number of spaces per indentation level. |
| <code><a href="#projen.javascript.PrettierSettings.property.trailingComma">trailingComma</a></code> | <code><a href="#projen.javascript.TrailingComma">TrailingComma</a></code> | Print trailing commas wherever possible when multi-line. |
| <code><a href="#projen.javascript.PrettierSettings.property.useTabs">useTabs</a></code> | <code>boolean</code> | Indent with tabs instead of spaces. |
| <code><a href="#projen.javascript.PrettierSettings.property.vueIndentScriptAndStyle">vueIndentScriptAndStyle</a></code> | <code>boolean</code> | Indent script and style tags in Vue files. |

---

##### `arrowParens`<sup>Optional</sup> <a name="arrowParens" id="projen.javascript.PrettierSettings.property.arrowParens"></a>

```typescript
public readonly arrowParens: ArrowParens;
```

- *Type:* <a href="#projen.javascript.ArrowParens">ArrowParens</a>
- *Default:* ArrowParens.ALWAYS

Include parentheses around a sole arrow function parameter.

---

##### `bracketSameLine`<sup>Optional</sup> <a name="bracketSameLine" id="projen.javascript.PrettierSettings.property.bracketSameLine"></a>

```typescript
public readonly bracketSameLine: boolean;
```

- *Type:* boolean
- *Default:* false

Put > of opening tags on the last line instead of on a new line.

---

##### `bracketSpacing`<sup>Optional</sup> <a name="bracketSpacing" id="projen.javascript.PrettierSettings.property.bracketSpacing"></a>

```typescript
public readonly bracketSpacing: boolean;
```

- *Type:* boolean
- *Default:* true

Print spaces between brackets.

---

##### `cursorOffset`<sup>Optional</sup> <a name="cursorOffset" id="projen.javascript.PrettierSettings.property.cursorOffset"></a>

```typescript
public readonly cursorOffset: number;
```

- *Type:* number
- *Default:* 1

Print (to stderr) where a cursor at the given position would move to after formatting.

This option cannot be used with --range-start and --range-end.

---

##### `embeddedLanguageFormatting`<sup>Optional</sup> <a name="embeddedLanguageFormatting" id="projen.javascript.PrettierSettings.property.embeddedLanguageFormatting"></a>

```typescript
public readonly embeddedLanguageFormatting: EmbeddedLanguageFormatting;
```

- *Type:* <a href="#projen.javascript.EmbeddedLanguageFormatting">EmbeddedLanguageFormatting</a>
- *Default:* EmbeddedLanguageFormatting.AUTO

Control how Prettier formats quoted code embedded in the file.

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="projen.javascript.PrettierSettings.property.endOfLine"></a>

```typescript
public readonly endOfLine: EndOfLine;
```

- *Type:* <a href="#projen.javascript.EndOfLine">EndOfLine</a>
- *Default:* EndOfLine.LF

Which end of line characters to apply.

---

##### `filepath`<sup>Optional</sup> <a name="filepath" id="projen.javascript.PrettierSettings.property.filepath"></a>

```typescript
public readonly filepath: string;
```

- *Type:* string
- *Default:* none

Specify the input filepath.

This will be used to do parser inference.

---

##### `htmlWhitespaceSensitivity`<sup>Optional</sup> <a name="htmlWhitespaceSensitivity" id="projen.javascript.PrettierSettings.property.htmlWhitespaceSensitivity"></a>

```typescript
public readonly htmlWhitespaceSensitivity: HTMLWhitespaceSensitivity;
```

- *Type:* <a href="#projen.javascript.HTMLWhitespaceSensitivity">HTMLWhitespaceSensitivity</a>
- *Default:* HTMLWhitespaceSensitivity.CSS

How to handle whitespaces in HTML.

---

##### `insertPragma`<sup>Optional</sup> <a name="insertPragma" id="projen.javascript.PrettierSettings.property.insertPragma"></a>

```typescript
public readonly insertPragma: boolean;
```

- *Type:* boolean
- *Default:* false

Insert.

---

##### `jsxSingleQuote`<sup>Optional</sup> <a name="jsxSingleQuote" id="projen.javascript.PrettierSettings.property.jsxSingleQuote"></a>

```typescript
public readonly jsxSingleQuote: boolean;
```

- *Type:* boolean
- *Default:* false

Use single quotes in JSX.

---

##### `parser`<sup>Optional</sup> <a name="parser" id="projen.javascript.PrettierSettings.property.parser"></a>

```typescript
public readonly parser: string;
```

- *Type:* string
- *Default:* Prettier automatically infers the parser from the input file path, so you shouldn’t have to change this setting.

Which parser to use.

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="projen.javascript.PrettierSettings.property.plugins"></a>

```typescript
public readonly plugins: string[];
```

- *Type:* string[]
- *Default:* []

Add a plugin.

Multiple plugins can be passed as separate `--plugin`s.

---

##### `pluginSearchDirs`<sup>Optional</sup> <a name="pluginSearchDirs" id="projen.javascript.PrettierSettings.property.pluginSearchDirs"></a>

```typescript
public readonly pluginSearchDirs: string[];
```

- *Type:* string[]
- *Default:* []

Custom directory that contains prettier plugins in node_modules subdirectory.

Overrides default behavior when plugins are searched relatively to the location of
Prettier.
Multiple values are accepted.

---

##### `printWidth`<sup>Optional</sup> <a name="printWidth" id="projen.javascript.PrettierSettings.property.printWidth"></a>

```typescript
public readonly printWidth: number;
```

- *Type:* number
- *Default:* 80

The line length where Prettier will try wrap.

---

##### `proseWrap`<sup>Optional</sup> <a name="proseWrap" id="projen.javascript.PrettierSettings.property.proseWrap"></a>

```typescript
public readonly proseWrap: ProseWrap;
```

- *Type:* <a href="#projen.javascript.ProseWrap">ProseWrap</a>
- *Default:* ProseWrap.PRESERVE

How to wrap prose.

---

##### `quoteProps`<sup>Optional</sup> <a name="quoteProps" id="projen.javascript.PrettierSettings.property.quoteProps"></a>

```typescript
public readonly quoteProps: QuoteProps;
```

- *Type:* <a href="#projen.javascript.QuoteProps">QuoteProps</a>
- *Default:* QuoteProps.ASNEEDED

Change when properties in objects are quoted.

---

##### `rangeEnd`<sup>Optional</sup> <a name="rangeEnd" id="projen.javascript.PrettierSettings.property.rangeEnd"></a>

```typescript
public readonly rangeEnd: number;
```

- *Type:* number
- *Default:* null

Format code ending at a given character offset (exclusive).

The range will extend forwards to the end of the selected statement.
This option cannot be used with --cursor-offset.

---

##### `rangeStart`<sup>Optional</sup> <a name="rangeStart" id="projen.javascript.PrettierSettings.property.rangeStart"></a>

```typescript
public readonly rangeStart: number;
```

- *Type:* number
- *Default:* 0

Format code starting at a given character offset.

The range will extend backwards to the start of the first line containing the selected
statement.
This option cannot be used with --cursor-offset.

---

##### `requirePragma`<sup>Optional</sup> <a name="requirePragma" id="projen.javascript.PrettierSettings.property.requirePragma"></a>

```typescript
public readonly requirePragma: boolean;
```

- *Type:* boolean
- *Default:* false

Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.

---

##### `semi`<sup>Optional</sup> <a name="semi" id="projen.javascript.PrettierSettings.property.semi"></a>

```typescript
public readonly semi: boolean;
```

- *Type:* boolean
- *Default:* true

Print semicolons.

---

##### `singleQuote`<sup>Optional</sup> <a name="singleQuote" id="projen.javascript.PrettierSettings.property.singleQuote"></a>

```typescript
public readonly singleQuote: boolean;
```

- *Type:* boolean
- *Default:* false

Use single quotes instead of double quotes.

---

##### `tabWidth`<sup>Optional</sup> <a name="tabWidth" id="projen.javascript.PrettierSettings.property.tabWidth"></a>

```typescript
public readonly tabWidth: number;
```

- *Type:* number
- *Default:* 2

Number of spaces per indentation level.

---

##### `trailingComma`<sup>Optional</sup> <a name="trailingComma" id="projen.javascript.PrettierSettings.property.trailingComma"></a>

```typescript
public readonly trailingComma: TrailingComma;
```

- *Type:* <a href="#projen.javascript.TrailingComma">TrailingComma</a>
- *Default:* TrailingComma.ES5

Print trailing commas wherever possible when multi-line.

---

##### `useTabs`<sup>Optional</sup> <a name="useTabs" id="projen.javascript.PrettierSettings.property.useTabs"></a>

```typescript
public readonly useTabs: boolean;
```

- *Type:* boolean
- *Default:* false

Indent with tabs instead of spaces.

---

##### `vueIndentScriptAndStyle`<sup>Optional</sup> <a name="vueIndentScriptAndStyle" id="projen.javascript.PrettierSettings.property.vueIndentScriptAndStyle"></a>

```typescript
public readonly vueIndentScriptAndStyle: boolean;
```

- *Type:* boolean
- *Default:* false

Indent script and style tags in Vue files.

---

### ProjenrcOptions <a name="ProjenrcOptions" id="projen.javascript.ProjenrcOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.ProjenrcOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const projenrcOptions: javascript.ProjenrcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.ProjenrcOptions.property.filename">filename</a></code> | <code>string</code> | The name of the projenrc file. |

---

##### `filename`<sup>Optional</sup> <a name="filename" id="projen.javascript.ProjenrcOptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* ".projenrc.js"

The name of the projenrc file.

---

### RenderWorkflowSetupOptions <a name="RenderWorkflowSetupOptions" id="projen.javascript.RenderWorkflowSetupOptions"></a>

Options for `renderWorkflowSetup()`.

#### Initializer <a name="Initializer" id="projen.javascript.RenderWorkflowSetupOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const renderWorkflowSetupOptions: javascript.RenderWorkflowSetupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.RenderWorkflowSetupOptions.property.installStepConfiguration">installStepConfiguration</a></code> | <code>projen.github.workflows.JobStepConfiguration</code> | Configure the install step in the workflow setup. |
| <code><a href="#projen.javascript.RenderWorkflowSetupOptions.property.mutable">mutable</a></code> | <code>boolean</code> | Should the package lockfile be updated? |

---

##### `installStepConfiguration`<sup>Optional</sup> <a name="installStepConfiguration" id="projen.javascript.RenderWorkflowSetupOptions.property.installStepConfiguration"></a>

```typescript
public readonly installStepConfiguration: JobStepConfiguration;
```

- *Type:* projen.github.workflows.JobStepConfiguration
- *Default:* `{ name: "Install dependencies" }`

Configure the install step in the workflow setup.

---

*Example*

```typescript
- { env: { NPM_TOKEN: "token" }} for installing from private npm registry.
```


##### `mutable`<sup>Optional</sup> <a name="mutable" id="projen.javascript.RenderWorkflowSetupOptions.property.mutable"></a>

```typescript
public readonly mutable: boolean;
```

- *Type:* boolean
- *Default:* false

Should the package lockfile be updated?

---

### ScopedPackagesOptions <a name="ScopedPackagesOptions" id="projen.javascript.ScopedPackagesOptions"></a>

Options for scoped packages.

#### Initializer <a name="Initializer" id="projen.javascript.ScopedPackagesOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const scopedPackagesOptions: javascript.ScopedPackagesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.ScopedPackagesOptions.property.registryUrl">registryUrl</a></code> | <code>string</code> | URL of the registry for scoped packages. |
| <code><a href="#projen.javascript.ScopedPackagesOptions.property.scope">scope</a></code> | <code>string</code> | Scope of the packages. |

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="projen.javascript.ScopedPackagesOptions.property.registryUrl"></a>

```typescript
public readonly registryUrl: string;
```

- *Type:* string

URL of the registry for scoped packages.

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.javascript.ScopedPackagesOptions.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Scope of the packages.

---

*Example*

```typescript
"@angular"
```


### TypeScriptCompilerOptions <a name="TypeScriptCompilerOptions" id="projen.javascript.TypeScriptCompilerOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.TypeScriptCompilerOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const typeScriptCompilerOptions: javascript.TypeScriptCompilerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowArbitraryExtensions">allowArbitraryExtensions</a></code> | <code>boolean</code> | Suppress arbitrary extension import errors with the assumption that a bundler will be handling it. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowImportingTsExtensions">allowImportingTsExtensions</a></code> | <code>boolean</code> | Allows TypeScript files to import each other with TypeScript-specific extensions (`.ts`, `.mts`, `.tsx`). Requires `noEmit` or `emitDeclarationOnly`. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowJs">allowJs</a></code> | <code>boolean</code> | Allow JavaScript files to be compiled. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowSyntheticDefaultImports">allowSyntheticDefaultImports</a></code> | <code>boolean</code> | Allow default imports from modules with no default export. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowUnreachableCode">allowUnreachableCode</a></code> | <code>boolean</code> | Allow Unreachable Code. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.allowUnusedLabels">allowUnusedLabels</a></code> | <code>boolean</code> | Allow Unused Labels. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.alwaysStrict">alwaysStrict</a></code> | <code>boolean</code> | Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.baseUrl">baseUrl</a></code> | <code>string</code> | Lets you set a base directory to resolve non-absolute module names. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.checkJs">checkJs</a></code> | <code>boolean</code> | Check JS. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.customConditions">customConditions</a></code> | <code>string[]</code> | List of additional conditions that should succeed when TypeScript resolves from an `exports` or `imports` field of a `package.json`. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.declaration">declaration</a></code> | <code>boolean</code> | To be specified along with the above. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.declarationDir">declarationDir</a></code> | <code>string</code> | Offers a way to configure the root directory for where declaration files are emitted. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.declarationMap">declarationMap</a></code> | <code>boolean</code> | Generates a source map for .d.ts files which map back to the original .ts source file. This will allow editors such as VS Code to go to the original .ts file when using features like Go to Definition. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.downlevelIteration">downlevelIteration</a></code> | <code>boolean</code> | Downleveling is TypeScript’s term for transpiling to an older version of JavaScript. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.emitDeclarationOnly">emitDeclarationOnly</a></code> | <code>boolean</code> | Only emit .d.ts files; do not emit .js files. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.emitDecoratorMetadata">emitDecoratorMetadata</a></code> | <code>boolean</code> | Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.esModuleInterop">esModuleInterop</a></code> | <code>boolean</code> | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.exactOptionalPropertyTypes">exactOptionalPropertyTypes</a></code> | <code>boolean</code> | Specifies that optional property types should be interpreted exactly as written, meaning that `\| undefined` is not added to the type Available with TypeScript 4.4 and newer. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.experimentalDecorators">experimentalDecorators</a></code> | <code>boolean</code> | Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.forceConsistentCasingInFileNames">forceConsistentCasingInFileNames</a></code> | <code>boolean</code> | Disallow inconsistently-cased references to the same file. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.importsNotUsedAsValues">importsNotUsedAsValues</a></code> | <code><a href="#projen.javascript.TypeScriptImportsNotUsedAsValues">TypeScriptImportsNotUsedAsValues</a></code> | This flag works because you can use `import type` to explicitly create an `import` statement which should never be emitted into JavaScript. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.incremental">incremental</a></code> | <code>boolean</code> | Tells TypeScript to save information about the project graph from the last compilation to files stored on disk. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.inlineSourceMap">inlineSourceMap</a></code> | <code>boolean</code> | When set, instead of writing out a .js.map file to provide source maps, TypeScript will embed the source map content in the .js files. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.inlineSources">inlineSources</a></code> | <code>boolean</code> | When set, TypeScript will include the original content of the .ts file as an embedded string in the source map. This is often useful in the same cases as inlineSourceMap. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.isolatedModules">isolatedModules</a></code> | <code>boolean</code> | Perform additional checks to ensure that separate compilation (such as with transpileModule or. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.jsx">jsx</a></code> | <code><a href="#projen.javascript.TypeScriptJsxMode">TypeScriptJsxMode</a></code> | Support JSX in .tsx files: "react", "preserve", "react-native" etc. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.jsxImportSource">jsxImportSource</a></code> | <code>string</code> | Declares the module specifier to be used for importing the jsx and jsxs factory functions when using jsx. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.lib">lib</a></code> | <code>string[]</code> | Reference for type definitions / libraries to use (eg. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.module">module</a></code> | <code>string</code> | Sets the module system for the program. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.moduleDetection">moduleDetection</a></code> | <code><a href="#projen.javascript.TypeScriptModuleDetection">TypeScriptModuleDetection</a></code> | This setting controls how TypeScript determines whether a file is a [script or a module](https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript). |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.moduleResolution">moduleResolution</a></code> | <code><a href="#projen.javascript.TypeScriptModuleResolution">TypeScriptModuleResolution</a></code> | Determine how modules get resolved. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noEmit">noEmit</a></code> | <code>boolean</code> | Do not emit outputs. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noEmitOnError">noEmitOnError</a></code> | <code>boolean</code> | Do not emit compiler output files like JavaScript source code, source-maps or declarations if any errors were reported. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noFallthroughCasesInSwitch">noFallthroughCasesInSwitch</a></code> | <code>boolean</code> | Report errors for fallthrough cases in switch statements. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noImplicitAny">noImplicitAny</a></code> | <code>boolean</code> | In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noImplicitOverride">noImplicitOverride</a></code> | <code>boolean</code> | Using `noImplicitOverride`, you can ensure that sub-classes never go out of sync as they are required to explicitly declare that they are overriding a member using the `override` keyword. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noImplicitReturns">noImplicitReturns</a></code> | <code>boolean</code> | When enabled, TypeScript will check all code paths in a function to ensure they return a value. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noImplicitThis">noImplicitThis</a></code> | <code>boolean</code> | Raise error on ‘this’ expressions with an implied ‘any’ type. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noPropertyAccessFromIndexSignature">noPropertyAccessFromIndexSignature</a></code> | <code>boolean</code> | Raise error on use of the dot syntax to access fields which are not defined. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noUncheckedIndexedAccess">noUncheckedIndexedAccess</a></code> | <code>boolean</code> | Raise error when accessing indexes on objects with unknown keys defined in index signatures. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noUnusedLocals">noUnusedLocals</a></code> | <code>boolean</code> | Report errors on unused local variables. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.noUnusedParameters">noUnusedParameters</a></code> | <code>boolean</code> | Report errors on unused parameters in functions. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.outDir">outDir</a></code> | <code>string</code> | Output directory for the compiled files. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.paths">paths</a></code> | <code>{[ key: string ]: string[]}</code> | A series of entries which re-map imports to lookup locations relative to the baseUrl, there is a larger coverage of paths in the handbook. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.resolveJsonModule">resolveJsonModule</a></code> | <code>boolean</code> | Allows importing modules with a ‘.json’ extension, which is a common practice in node projects. This includes generating a type for the import based on the static JSON shape. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.resolvePackageJsonExports">resolvePackageJsonExports</a></code> | <code>boolean</code> | Forces TypeScript to consult the `exports` field of `package.json` files if it ever reads from a package in `node_modules`. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.resolvePackageJsonImports">resolvePackageJsonImports</a></code> | <code>boolean</code> | Forces TypeScript to consult the `imports` field of `package.json` when performing a lookup that begins with `#` from a file that has a `package.json` as an ancestor. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.rootDir">rootDir</a></code> | <code>string</code> | Specifies the root directory of input files. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.skipLibCheck">skipLibCheck</a></code> | <code>boolean</code> | Skip type checking of all declaration files (*.d.ts). |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.sourceMap">sourceMap</a></code> | <code>boolean</code> | Enables the generation of sourcemap files. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.sourceRoot">sourceRoot</a></code> | <code>string</code> | Specify the location where a debugger should locate TypeScript files instead of relative source locations. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.strict">strict</a></code> | <code>boolean</code> | The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.strictNullChecks">strictNullChecks</a></code> | <code>boolean</code> | When strictNullChecks is false, null and undefined are effectively ignored by the language. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.strictPropertyInitialization">strictPropertyInitialization</a></code> | <code>boolean</code> | When set to true, TypeScript will raise an error when a class property was declared but not set in the constructor. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.stripInternal">stripInternal</a></code> | <code>boolean</code> | Do not emit declarations for code that has an `@internal` annotation in it’s JSDoc comment. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.target">target</a></code> | <code>string</code> | Modern browsers support all ES6 features, so ES6 is a good choice. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.tsBuildInfoFile">tsBuildInfoFile</a></code> | <code>string</code> | This setting lets you specify a file for storing incremental compilation information as a part of composite projects which enables faster building of larger TypeScript codebases. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.typeRoots">typeRoots</a></code> | <code>string[]</code> | If typeRoots is specified, only packages under typeRoots will be included. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.types">types</a></code> | <code>string[]</code> | If types is specified, only packages listed will be included in the global scope. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.useUnknownInCatchVariables">useUnknownInCatchVariables</a></code> | <code>boolean</code> | Change the type of the variable in a catch clause from any to unknown Available with TypeScript 4.4 and newer. |
| <code><a href="#projen.javascript.TypeScriptCompilerOptions.property.verbatimModuleSyntax">verbatimModuleSyntax</a></code> | <code>boolean</code> | Simplifies TypeScript's handling of import/export `type` modifiers. |

---

##### `allowArbitraryExtensions`<sup>Optional</sup> <a name="allowArbitraryExtensions" id="projen.javascript.TypeScriptCompilerOptions.property.allowArbitraryExtensions"></a>

```typescript
public readonly allowArbitraryExtensions: boolean;
```

- *Type:* boolean
- *Default:* undefined

Suppress arbitrary extension import errors with the assumption that a bundler will be handling it.

> [https://www.typescriptlang.org/tsconfig#allowArbitraryExtensions](https://www.typescriptlang.org/tsconfig#allowArbitraryExtensions)

---

##### `allowImportingTsExtensions`<sup>Optional</sup> <a name="allowImportingTsExtensions" id="projen.javascript.TypeScriptCompilerOptions.property.allowImportingTsExtensions"></a>

```typescript
public readonly allowImportingTsExtensions: boolean;
```

- *Type:* boolean
- *Default:* undefined

Allows TypeScript files to import each other with TypeScript-specific extensions (`.ts`, `.mts`, `.tsx`). Requires `noEmit` or `emitDeclarationOnly`.

---

##### `allowJs`<sup>Optional</sup> <a name="allowJs" id="projen.javascript.TypeScriptCompilerOptions.property.allowJs"></a>

```typescript
public readonly allowJs: boolean;
```

- *Type:* boolean
- *Default:* false

Allow JavaScript files to be compiled.

---

##### `allowSyntheticDefaultImports`<sup>Optional</sup> <a name="allowSyntheticDefaultImports" id="projen.javascript.TypeScriptCompilerOptions.property.allowSyntheticDefaultImports"></a>

```typescript
public readonly allowSyntheticDefaultImports: boolean;
```

- *Type:* boolean

Allow default imports from modules with no default export.

This does not affect code emit, just typechecking.

---

##### `allowUnreachableCode`<sup>Optional</sup> <a name="allowUnreachableCode" id="projen.javascript.TypeScriptCompilerOptions.property.allowUnreachableCode"></a>

```typescript
public readonly allowUnreachableCode: boolean;
```

- *Type:* boolean

Allow Unreachable Code.

When:

- `undefined` (default) provide suggestions as warnings to editors
- `true` unreachable code is ignored
- `false` raises compiler errors about unreachable code

These warnings are only about code which is provably unreachable due to the use of JavaScript syntax.

> [https://www.typescriptlang.org/tsconfig#allowUnreachableCode](https://www.typescriptlang.org/tsconfig#allowUnreachableCode)

---

##### `allowUnusedLabels`<sup>Optional</sup> <a name="allowUnusedLabels" id="projen.javascript.TypeScriptCompilerOptions.property.allowUnusedLabels"></a>

```typescript
public readonly allowUnusedLabels: boolean;
```

- *Type:* boolean

Allow Unused Labels.

When:

- `undefined` (default) provide suggestions as warnings to editors
- `true` unused labels are ignored
- `false` raises compiler errors about unused labels

Labels are very rare in JavaScript and typically indicate an attempt to write an object literal:

```ts
function verifyAge(age: number) {
  // Forgot 'return' statement
  if (age > 18) {
    verified: true;
//  ^^^^^^^^ Unused label.
  }
}
```

> [https://www.typescriptlang.org/tsconfig#allowUnusedLabels](https://www.typescriptlang.org/tsconfig#allowUnusedLabels)

---

##### `alwaysStrict`<sup>Optional</sup> <a name="alwaysStrict" id="projen.javascript.TypeScriptCompilerOptions.property.alwaysStrict"></a>

```typescript
public readonly alwaysStrict: boolean;
```

- *Type:* boolean
- *Default:* true

Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file.

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="projen.javascript.TypeScriptCompilerOptions.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

Lets you set a base directory to resolve non-absolute module names.

You can define a root folder where you can do absolute file resolution.

---

##### `checkJs`<sup>Optional</sup> <a name="checkJs" id="projen.javascript.TypeScriptCompilerOptions.property.checkJs"></a>

```typescript
public readonly checkJs: boolean;
```

- *Type:* boolean

Check JS.

Works in tandem with [allowJs](https://www.typescriptlang.org/tsconfig#allowJs). When checkJs is enabled then
errors are reported in JavaScript files. This is the equivalent of including //

> [https://www.typescriptlang.org/tsconfig#checkJs](https://www.typescriptlang.org/tsconfig#checkJs)

---

##### `customConditions`<sup>Optional</sup> <a name="customConditions" id="projen.javascript.TypeScriptCompilerOptions.property.customConditions"></a>

```typescript
public readonly customConditions: string[];
```

- *Type:* string[]
- *Default:* undefined

List of additional conditions that should succeed when TypeScript resolves from an `exports` or `imports` field of a `package.json`.

> [https://www.typescriptlang.org/tsconfig#customConditions](https://www.typescriptlang.org/tsconfig#customConditions)

---

##### `declaration`<sup>Optional</sup> <a name="declaration" id="projen.javascript.TypeScriptCompilerOptions.property.declaration"></a>

```typescript
public readonly declaration: boolean;
```

- *Type:* boolean

To be specified along with the above.

---

##### `declarationDir`<sup>Optional</sup> <a name="declarationDir" id="projen.javascript.TypeScriptCompilerOptions.property.declarationDir"></a>

```typescript
public readonly declarationDir: string;
```

- *Type:* string

Offers a way to configure the root directory for where declaration files are emitted.

---

##### `declarationMap`<sup>Optional</sup> <a name="declarationMap" id="projen.javascript.TypeScriptCompilerOptions.property.declarationMap"></a>

```typescript
public readonly declarationMap: boolean;
```

- *Type:* boolean

Generates a source map for .d.ts files which map back to the original .ts source file. This will allow editors such as VS Code to go to the original .ts file when using features like Go to Definition.

> [{@link https://www.typescriptlang.org/tsconfig#declarationMap}]({@link https://www.typescriptlang.org/tsconfig#declarationMap})

---

##### `downlevelIteration`<sup>Optional</sup> <a name="downlevelIteration" id="projen.javascript.TypeScriptCompilerOptions.property.downlevelIteration"></a>

```typescript
public readonly downlevelIteration: boolean;
```

- *Type:* boolean

Downleveling is TypeScript’s term for transpiling to an older version of JavaScript.

This flag is to enable support for a more accurate implementation of how modern JavaScript iterates through new concepts in older JavaScript runtimes.

ECMAScript 6 added several new iteration primitives: the for / of loop (for (el of arr)), Array spread ([a, ...b]), argument spread (fn(...args)), and Symbol.iterator.
downlevelIteration allows for these iteration primitives to be used more accurately in ES5 environments if a Symbol.iterator implementation is present.

---

##### `emitDeclarationOnly`<sup>Optional</sup> <a name="emitDeclarationOnly" id="projen.javascript.TypeScriptCompilerOptions.property.emitDeclarationOnly"></a>

```typescript
public readonly emitDeclarationOnly: boolean;
```

- *Type:* boolean
- *Default:* false

Only emit .d.ts files; do not emit .js files.

---

##### `emitDecoratorMetadata`<sup>Optional</sup> <a name="emitDecoratorMetadata" id="projen.javascript.TypeScriptCompilerOptions.property.emitDecoratorMetadata"></a>

```typescript
public readonly emitDecoratorMetadata: boolean;
```

- *Type:* boolean
- *Default:* undefined

Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process.

Decorators are a language feature which hasn’t yet been fully ratified into the JavaScript specification.
This means that the implementation version in TypeScript may differ from the implementation in JavaScript when it it decided by TC39.
You can find out more about decorator support in TypeScript in the handbook.

> [https://www.typescriptlang.org/docs/handbook/decorators.html](https://www.typescriptlang.org/docs/handbook/decorators.html)

---

##### `esModuleInterop`<sup>Optional</sup> <a name="esModuleInterop" id="projen.javascript.TypeScriptCompilerOptions.property.esModuleInterop"></a>

```typescript
public readonly esModuleInterop: boolean;
```

- *Type:* boolean
- *Default:* false

Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility.

---

##### `exactOptionalPropertyTypes`<sup>Optional</sup> <a name="exactOptionalPropertyTypes" id="projen.javascript.TypeScriptCompilerOptions.property.exactOptionalPropertyTypes"></a>

```typescript
public readonly exactOptionalPropertyTypes: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies that optional property types should be interpreted exactly as written, meaning that `| undefined` is not added to the type Available with TypeScript 4.4 and newer.

---

##### `experimentalDecorators`<sup>Optional</sup> <a name="experimentalDecorators" id="projen.javascript.TypeScriptCompilerOptions.property.experimentalDecorators"></a>

```typescript
public readonly experimentalDecorators: boolean;
```

- *Type:* boolean
- *Default:* true

Enables experimental support for decorators, which is in stage 2 of the TC39 standardization process.

---

##### `forceConsistentCasingInFileNames`<sup>Optional</sup> <a name="forceConsistentCasingInFileNames" id="projen.javascript.TypeScriptCompilerOptions.property.forceConsistentCasingInFileNames"></a>

```typescript
public readonly forceConsistentCasingInFileNames: boolean;
```

- *Type:* boolean
- *Default:* false

Disallow inconsistently-cased references to the same file.

---

##### `importsNotUsedAsValues`<sup>Optional</sup> <a name="importsNotUsedAsValues" id="projen.javascript.TypeScriptCompilerOptions.property.importsNotUsedAsValues"></a>

```typescript
public readonly importsNotUsedAsValues: TypeScriptImportsNotUsedAsValues;
```

- *Type:* <a href="#projen.javascript.TypeScriptImportsNotUsedAsValues">TypeScriptImportsNotUsedAsValues</a>
- *Default:* "remove"

This flag works because you can use `import type` to explicitly create an `import` statement which should never be emitted into JavaScript.

> [https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues)

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="projen.javascript.TypeScriptCompilerOptions.property.incremental"></a>

```typescript
public readonly incremental: boolean;
```

- *Type:* boolean

Tells TypeScript to save information about the project graph from the last compilation to files stored on disk.

This creates a series of .tsbuildinfo files in the same folder as your compilation output.
They are not used by your JavaScript at runtime and can be safely deleted.
You can read more about the flag in the 3.4 release notes.

> [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag

To control which folders you want to the files to be built to, use the config option tsBuildInfoFile.](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag

To control which folders you want to the files to be built to, use the config option tsBuildInfoFile.)

---

##### `inlineSourceMap`<sup>Optional</sup> <a name="inlineSourceMap" id="projen.javascript.TypeScriptCompilerOptions.property.inlineSourceMap"></a>

```typescript
public readonly inlineSourceMap: boolean;
```

- *Type:* boolean
- *Default:* true

When set, instead of writing out a .js.map file to provide source maps, TypeScript will embed the source map content in the .js files.

---

##### `inlineSources`<sup>Optional</sup> <a name="inlineSources" id="projen.javascript.TypeScriptCompilerOptions.property.inlineSources"></a>

```typescript
public readonly inlineSources: boolean;
```

- *Type:* boolean
- *Default:* true

When set, TypeScript will include the original content of the .ts file as an embedded string in the source map. This is often useful in the same cases as inlineSourceMap.

---

##### `isolatedModules`<sup>Optional</sup> <a name="isolatedModules" id="projen.javascript.TypeScriptCompilerOptions.property.isolatedModules"></a>

```typescript
public readonly isolatedModules: boolean;
```

- *Type:* boolean
- *Default:* false

Perform additional checks to ensure that separate compilation (such as with transpileModule or.

---

##### `jsx`<sup>Optional</sup> <a name="jsx" id="projen.javascript.TypeScriptCompilerOptions.property.jsx"></a>

```typescript
public readonly jsx: TypeScriptJsxMode;
```

- *Type:* <a href="#projen.javascript.TypeScriptJsxMode">TypeScriptJsxMode</a>
- *Default:* undefined

Support JSX in .tsx files: "react", "preserve", "react-native" etc.

---

##### `jsxImportSource`<sup>Optional</sup> <a name="jsxImportSource" id="projen.javascript.TypeScriptCompilerOptions.property.jsxImportSource"></a>

```typescript
public readonly jsxImportSource: string;
```

- *Type:* string
- *Default:* undefined

Declares the module specifier to be used for importing the jsx and jsxs factory functions when using jsx.

---

##### `lib`<sup>Optional</sup> <a name="lib" id="projen.javascript.TypeScriptCompilerOptions.property.lib"></a>

```typescript
public readonly lib: string[];
```

- *Type:* string[]
- *Default:* [ "es2018" ]

Reference for type definitions / libraries to use (eg.

ES2016, ES5, ES2018).

---

##### `module`<sup>Optional</sup> <a name="module" id="projen.javascript.TypeScriptCompilerOptions.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string
- *Default:* "CommonJS"

Sets the module system for the program.

See https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules.

---

##### `moduleDetection`<sup>Optional</sup> <a name="moduleDetection" id="projen.javascript.TypeScriptCompilerOptions.property.moduleDetection"></a>

```typescript
public readonly moduleDetection: TypeScriptModuleDetection;
```

- *Type:* <a href="#projen.javascript.TypeScriptModuleDetection">TypeScriptModuleDetection</a>
- *Default:* "auto"

This setting controls how TypeScript determines whether a file is a [script or a module](https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript).

---

##### `moduleResolution`<sup>Optional</sup> <a name="moduleResolution" id="projen.javascript.TypeScriptCompilerOptions.property.moduleResolution"></a>

```typescript
public readonly moduleResolution: TypeScriptModuleResolution;
```

- *Type:* <a href="#projen.javascript.TypeScriptModuleResolution">TypeScriptModuleResolution</a>
- *Default:* "node"

Determine how modules get resolved.

Either "Node" for Node.js/io.js style resolution, or "Classic".

---

##### `noEmit`<sup>Optional</sup> <a name="noEmit" id="projen.javascript.TypeScriptCompilerOptions.property.noEmit"></a>

```typescript
public readonly noEmit: boolean;
```

- *Type:* boolean
- *Default:* false

Do not emit outputs.

---

##### `noEmitOnError`<sup>Optional</sup> <a name="noEmitOnError" id="projen.javascript.TypeScriptCompilerOptions.property.noEmitOnError"></a>

```typescript
public readonly noEmitOnError: boolean;
```

- *Type:* boolean
- *Default:* true

Do not emit compiler output files like JavaScript source code, source-maps or declarations if any errors were reported.

---

##### `noFallthroughCasesInSwitch`<sup>Optional</sup> <a name="noFallthroughCasesInSwitch" id="projen.javascript.TypeScriptCompilerOptions.property.noFallthroughCasesInSwitch"></a>

```typescript
public readonly noFallthroughCasesInSwitch: boolean;
```

- *Type:* boolean
- *Default:* true

Report errors for fallthrough cases in switch statements.

Ensures that any non-empty
case inside a switch statement includes either break or return. This means you won’t
accidentally ship a case fallthrough bug.

---

##### `noImplicitAny`<sup>Optional</sup> <a name="noImplicitAny" id="projen.javascript.TypeScriptCompilerOptions.property.noImplicitAny"></a>

```typescript
public readonly noImplicitAny: boolean;
```

- *Type:* boolean
- *Default:* true

In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.

---

##### `noImplicitOverride`<sup>Optional</sup> <a name="noImplicitOverride" id="projen.javascript.TypeScriptCompilerOptions.property.noImplicitOverride"></a>

```typescript
public readonly noImplicitOverride: boolean;
```

- *Type:* boolean
- *Default:* false

Using `noImplicitOverride`, you can ensure that sub-classes never go out of sync as they are required to explicitly declare that they are overriding a member using the `override` keyword.

This also improves readability of the programmer's intent.

Available with TypeScript 4.3 and newer.

---

##### `noImplicitReturns`<sup>Optional</sup> <a name="noImplicitReturns" id="projen.javascript.TypeScriptCompilerOptions.property.noImplicitReturns"></a>

```typescript
public readonly noImplicitReturns: boolean;
```

- *Type:* boolean
- *Default:* true

When enabled, TypeScript will check all code paths in a function to ensure they return a value.

---

##### `noImplicitThis`<sup>Optional</sup> <a name="noImplicitThis" id="projen.javascript.TypeScriptCompilerOptions.property.noImplicitThis"></a>

```typescript
public readonly noImplicitThis: boolean;
```

- *Type:* boolean
- *Default:* true

Raise error on ‘this’ expressions with an implied ‘any’ type.

---

##### `noPropertyAccessFromIndexSignature`<sup>Optional</sup> <a name="noPropertyAccessFromIndexSignature" id="projen.javascript.TypeScriptCompilerOptions.property.noPropertyAccessFromIndexSignature"></a>

```typescript
public readonly noPropertyAccessFromIndexSignature: boolean;
```

- *Type:* boolean
- *Default:* true

Raise error on use of the dot syntax to access fields which are not defined.

---

##### `noUncheckedIndexedAccess`<sup>Optional</sup> <a name="noUncheckedIndexedAccess" id="projen.javascript.TypeScriptCompilerOptions.property.noUncheckedIndexedAccess"></a>

```typescript
public readonly noUncheckedIndexedAccess: boolean;
```

- *Type:* boolean
- *Default:* true

Raise error when accessing indexes on objects with unknown keys defined in index signatures.

---

##### `noUnusedLocals`<sup>Optional</sup> <a name="noUnusedLocals" id="projen.javascript.TypeScriptCompilerOptions.property.noUnusedLocals"></a>

```typescript
public readonly noUnusedLocals: boolean;
```

- *Type:* boolean
- *Default:* true

Report errors on unused local variables.

---

##### `noUnusedParameters`<sup>Optional</sup> <a name="noUnusedParameters" id="projen.javascript.TypeScriptCompilerOptions.property.noUnusedParameters"></a>

```typescript
public readonly noUnusedParameters: boolean;
```

- *Type:* boolean
- *Default:* true

Report errors on unused parameters in functions.

---

##### `outDir`<sup>Optional</sup> <a name="outDir" id="projen.javascript.TypeScriptCompilerOptions.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string

Output directory for the compiled files.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="projen.javascript.TypeScriptCompilerOptions.property.paths"></a>

```typescript
public readonly paths: {[ key: string ]: string[]};
```

- *Type:* {[ key: string ]: string[]}

A series of entries which re-map imports to lookup locations relative to the baseUrl, there is a larger coverage of paths in the handbook.

paths lets you declare how TypeScript should resolve an import in your require/imports.

---

##### `resolveJsonModule`<sup>Optional</sup> <a name="resolveJsonModule" id="projen.javascript.TypeScriptCompilerOptions.property.resolveJsonModule"></a>

```typescript
public readonly resolveJsonModule: boolean;
```

- *Type:* boolean
- *Default:* true

Allows importing modules with a ‘.json’ extension, which is a common practice in node projects. This includes generating a type for the import based on the static JSON shape.

---

##### `resolvePackageJsonExports`<sup>Optional</sup> <a name="resolvePackageJsonExports" id="projen.javascript.TypeScriptCompilerOptions.property.resolvePackageJsonExports"></a>

```typescript
public readonly resolvePackageJsonExports: boolean;
```

- *Type:* boolean
- *Default:* true

Forces TypeScript to consult the `exports` field of `package.json` files if it ever reads from a package in `node_modules`.

---

##### `resolvePackageJsonImports`<sup>Optional</sup> <a name="resolvePackageJsonImports" id="projen.javascript.TypeScriptCompilerOptions.property.resolvePackageJsonImports"></a>

```typescript
public readonly resolvePackageJsonImports: boolean;
```

- *Type:* boolean
- *Default:* undefined

Forces TypeScript to consult the `imports` field of `package.json` when performing a lookup that begins with `#` from a file that has a `package.json` as an ancestor.

---

##### `rootDir`<sup>Optional</sup> <a name="rootDir" id="projen.javascript.TypeScriptCompilerOptions.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string

Specifies the root directory of input files.

Only use to control the output directory structure with `outDir`.

---

##### `skipLibCheck`<sup>Optional</sup> <a name="skipLibCheck" id="projen.javascript.TypeScriptCompilerOptions.property.skipLibCheck"></a>

```typescript
public readonly skipLibCheck: boolean;
```

- *Type:* boolean
- *Default:* false

Skip type checking of all declaration files (*.d.ts).

---

##### `sourceMap`<sup>Optional</sup> <a name="sourceMap" id="projen.javascript.TypeScriptCompilerOptions.property.sourceMap"></a>

```typescript
public readonly sourceMap: boolean;
```

- *Type:* boolean
- *Default:* undefined

Enables the generation of sourcemap files.

---

##### `sourceRoot`<sup>Optional</sup> <a name="sourceRoot" id="projen.javascript.TypeScriptCompilerOptions.property.sourceRoot"></a>

```typescript
public readonly sourceRoot: string;
```

- *Type:* string
- *Default:* undefined

Specify the location where a debugger should locate TypeScript files instead of relative source locations.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="projen.javascript.TypeScriptCompilerOptions.property.strict"></a>

```typescript
public readonly strict: boolean;
```

- *Type:* boolean
- *Default:* true

The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness.

Turning this on is equivalent to enabling all of the strict mode family
options, which are outlined below. You can then turn off individual strict mode family checks as
needed.

---

##### `strictNullChecks`<sup>Optional</sup> <a name="strictNullChecks" id="projen.javascript.TypeScriptCompilerOptions.property.strictNullChecks"></a>

```typescript
public readonly strictNullChecks: boolean;
```

- *Type:* boolean
- *Default:* true

When strictNullChecks is false, null and undefined are effectively ignored by the language.

This can lead to unexpected errors at runtime.
When strictNullChecks is true, null and undefined have their own distinct types and you’ll
get a type error if you try to use them where a concrete value is expected.

---

##### `strictPropertyInitialization`<sup>Optional</sup> <a name="strictPropertyInitialization" id="projen.javascript.TypeScriptCompilerOptions.property.strictPropertyInitialization"></a>

```typescript
public readonly strictPropertyInitialization: boolean;
```

- *Type:* boolean
- *Default:* true

When set to true, TypeScript will raise an error when a class property was declared but not set in the constructor.

---

##### `stripInternal`<sup>Optional</sup> <a name="stripInternal" id="projen.javascript.TypeScriptCompilerOptions.property.stripInternal"></a>

```typescript
public readonly stripInternal: boolean;
```

- *Type:* boolean
- *Default:* true

Do not emit declarations for code that has an `@internal` annotation in it’s JSDoc comment.

---

##### `target`<sup>Optional</sup> <a name="target" id="projen.javascript.TypeScriptCompilerOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string
- *Default:* "ES2018"

Modern browsers support all ES6 features, so ES6 is a good choice.

You might choose to set
a lower target if your code is deployed to older environments, or a higher target if your
code is guaranteed to run in newer environments.

---

##### `tsBuildInfoFile`<sup>Optional</sup> <a name="tsBuildInfoFile" id="projen.javascript.TypeScriptCompilerOptions.property.tsBuildInfoFile"></a>

```typescript
public readonly tsBuildInfoFile: string;
```

- *Type:* string

This setting lets you specify a file for storing incremental compilation information as a part of composite projects which enables faster building of larger TypeScript codebases.

You can read more about composite projects in the handbook.

---

##### `typeRoots`<sup>Optional</sup> <a name="typeRoots" id="projen.javascript.TypeScriptCompilerOptions.property.typeRoots"></a>

```typescript
public readonly typeRoots: string[];
```

- *Type:* string[]

If typeRoots is specified, only packages under typeRoots will be included.

> [https://www.typescriptlang.org/tsconfig/#typeRoots](https://www.typescriptlang.org/tsconfig/#typeRoots)

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.javascript.TypeScriptCompilerOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

If types is specified, only packages listed will be included in the global scope.

> [https://www.typescriptlang.org/tsconfig#types](https://www.typescriptlang.org/tsconfig#types)

---

##### `useUnknownInCatchVariables`<sup>Optional</sup> <a name="useUnknownInCatchVariables" id="projen.javascript.TypeScriptCompilerOptions.property.useUnknownInCatchVariables"></a>

```typescript
public readonly useUnknownInCatchVariables: boolean;
```

- *Type:* boolean
- *Default:* true

Change the type of the variable in a catch clause from any to unknown Available with TypeScript 4.4 and newer.

---

##### `verbatimModuleSyntax`<sup>Optional</sup> <a name="verbatimModuleSyntax" id="projen.javascript.TypeScriptCompilerOptions.property.verbatimModuleSyntax"></a>

```typescript
public readonly verbatimModuleSyntax: boolean;
```

- *Type:* boolean
- *Default:* undefined

Simplifies TypeScript's handling of import/export `type` modifiers.

> [https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax](https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax)

---

### TypescriptConfigOptions <a name="TypescriptConfigOptions" id="projen.javascript.TypescriptConfigOptions"></a>

#### Initializer <a name="Initializer" id="projen.javascript.TypescriptConfigOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const typescriptConfigOptions: javascript.TypescriptConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigOptions.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | Compiler options to use. |
| <code><a href="#projen.javascript.TypescriptConfigOptions.property.exclude">exclude</a></code> | <code>string[]</code> | Filters results from the "include" option. |
| <code><a href="#projen.javascript.TypescriptConfigOptions.property.extends">extends</a></code> | <code><a href="#projen.javascript.TypescriptConfigExtends">TypescriptConfigExtends</a></code> | Base `tsconfig.json` configuration(s) to inherit from. |
| <code><a href="#projen.javascript.TypescriptConfigOptions.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfigOptions.property.include">include</a></code> | <code>string[]</code> | Specifies a list of glob patterns that match TypeScript files to be included in compilation. |

---

##### `compilerOptions`<sup>Optional</sup> <a name="compilerOptions" id="projen.javascript.TypescriptConfigOptions.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

Compiler options to use.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="projen.javascript.TypescriptConfigOptions.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]
- *Default:* node_modules is excluded by default

Filters results from the "include" option.

---

##### `extends`<sup>Optional</sup> <a name="extends" id="projen.javascript.TypescriptConfigOptions.property.extends"></a>

```typescript
public readonly extends: TypescriptConfigExtends;
```

- *Type:* <a href="#projen.javascript.TypescriptConfigExtends">TypescriptConfigExtends</a>

Base `tsconfig.json` configuration(s) to inherit from.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="projen.javascript.TypescriptConfigOptions.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string
- *Default:* "tsconfig.json"

---

##### `include`<sup>Optional</sup> <a name="include" id="projen.javascript.TypescriptConfigOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]
- *Default:* all .ts files recursively

Specifies a list of glob patterns that match TypeScript files to be included in compilation.

---

### UpgradeDependenciesOptions <a name="UpgradeDependenciesOptions" id="projen.javascript.UpgradeDependenciesOptions"></a>

Options for `UpgradeDependencies`.

#### Initializer <a name="Initializer" id="projen.javascript.UpgradeDependenciesOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const upgradeDependenciesOptions: javascript.UpgradeDependenciesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.exclude">exclude</a></code> | <code>string[]</code> | List of package names to exclude during the upgrade. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.include">include</a></code> | <code>string[]</code> | List of package names to include during the upgrade. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.pullRequestTitle">pullRequestTitle</a></code> | <code>string</code> | Title of the pull request to use (should be all lower-case). |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.satisfyPeerDependencies">satisfyPeerDependencies</a></code> | <code>boolean</code> | Check peer dependencies of installed packages and filter updates to compatible versions. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.semanticCommit">semanticCommit</a></code> | <code>string</code> | The semantic commit type. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.signoff">signoff</a></code> | <code>boolean</code> | Add Signed-off-by line by the committer at the end of the commit log message. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.target">target</a></code> | <code>string</code> | Determines the target version to upgrade dependencies to. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.taskName">taskName</a></code> | <code>string</code> | The name of the task that will be created. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.types">types</a></code> | <code>projen.DependencyType[]</code> | Specify which dependency types the upgrade should operate on. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.workflow">workflow</a></code> | <code>boolean</code> | Include a github workflow for creating PR's that upgrades the required dependencies, either by manual dispatch, or by a schedule. |
| <code><a href="#projen.javascript.UpgradeDependenciesOptions.property.workflowOptions">workflowOptions</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions">UpgradeDependenciesWorkflowOptions</a></code> | Options for the github workflow. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="projen.javascript.UpgradeDependenciesOptions.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]
- *Default:* Nothing is excluded.

List of package names to exclude during the upgrade.

---

##### `include`<sup>Optional</sup> <a name="include" id="projen.javascript.UpgradeDependenciesOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]
- *Default:* Everything is included.

List of package names to include during the upgrade.

---

##### `pullRequestTitle`<sup>Optional</sup> <a name="pullRequestTitle" id="projen.javascript.UpgradeDependenciesOptions.property.pullRequestTitle"></a>

```typescript
public readonly pullRequestTitle: string;
```

- *Type:* string
- *Default:* "upgrade dependencies"

Title of the pull request to use (should be all lower-case).

---

##### `satisfyPeerDependencies`<sup>Optional</sup> <a name="satisfyPeerDependencies" id="projen.javascript.UpgradeDependenciesOptions.property.satisfyPeerDependencies"></a>

```typescript
public readonly satisfyPeerDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Check peer dependencies of installed packages and filter updates to compatible versions.

By default, the upgrade workflow will adhere to version constraints from peer dependencies.
Sometimes this is not desirable and can be disabled.

> [https://github.com/raineorshine/npm-check-updates#peer](https://github.com/raineorshine/npm-check-updates#peer)

---

##### `semanticCommit`<sup>Optional</sup> <a name="semanticCommit" id="projen.javascript.UpgradeDependenciesOptions.property.semanticCommit"></a>

```typescript
public readonly semanticCommit: string;
```

- *Type:* string
- *Default:* 'chore'

The semantic commit type.

---

##### `signoff`<sup>Optional</sup> <a name="signoff" id="projen.javascript.UpgradeDependenciesOptions.property.signoff"></a>

```typescript
public readonly signoff: boolean;
```

- *Type:* boolean
- *Default:* true

Add Signed-off-by line by the committer at the end of the commit log message.

---

##### `target`<sup>Optional</sup> <a name="target" id="projen.javascript.UpgradeDependenciesOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string
- *Default:* "minor"

Determines the target version to upgrade dependencies to.

> [https://github.com/raineorshine/npm-check-updates#target](https://github.com/raineorshine/npm-check-updates#target)

---

##### `taskName`<sup>Optional</sup> <a name="taskName" id="projen.javascript.UpgradeDependenciesOptions.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string
- *Default:* "upgrade".

The name of the task that will be created.

This will also be the workflow name.

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.javascript.UpgradeDependenciesOptions.property.types"></a>

```typescript
public readonly types: DependencyType[];
```

- *Type:* projen.DependencyType[]
- *Default:* All dependency types.

Specify which dependency types the upgrade should operate on.

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="projen.javascript.UpgradeDependenciesOptions.property.workflow"></a>

```typescript
public readonly workflow: boolean;
```

- *Type:* boolean
- *Default:* true for root projects, false for subprojects.

Include a github workflow for creating PR's that upgrades the required dependencies, either by manual dispatch, or by a schedule.

If this is `false`, only a local projen task is created, which can be executed manually to
upgrade the dependencies.

---

##### `workflowOptions`<sup>Optional</sup> <a name="workflowOptions" id="projen.javascript.UpgradeDependenciesOptions.property.workflowOptions"></a>

```typescript
public readonly workflowOptions: UpgradeDependenciesWorkflowOptions;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesWorkflowOptions">UpgradeDependenciesWorkflowOptions</a>
- *Default:* default options.

Options for the github workflow.

Only applies if `workflow` is true.

---

### UpgradeDependenciesWorkflowOptions <a name="UpgradeDependenciesWorkflowOptions" id="projen.javascript.UpgradeDependenciesWorkflowOptions"></a>

Options for `UpgradeDependencies.workflowOptions`.

#### Initializer <a name="Initializer" id="projen.javascript.UpgradeDependenciesWorkflowOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const upgradeDependenciesWorkflowOptions: javascript.UpgradeDependenciesWorkflowOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.assignees">assignees</a></code> | <code>string[]</code> | Assignees to add on the PR. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.branches">branches</a></code> | <code>string[]</code> | List of branches to create PR's for. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.container">container</a></code> | <code>projen.github.workflows.ContainerOptions</code> | Job container options. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.gitIdentity">gitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use for commits. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.labels">labels</a></code> | <code>string[]</code> | Labels to apply on the PR. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | Permissions granted to the upgrade job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method for authenticating with GitHub for creating the PR. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.runsOn">runsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.javascript.UpgradeDependenciesWorkflowOptions.property.schedule">schedule</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | Schedule to run on. |

---

##### `assignees`<sup>Optional</sup> <a name="assignees" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.assignees"></a>

```typescript
public readonly assignees: string[];
```

- *Type:* string[]
- *Default:* no assignees

Assignees to add on the PR.

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]
- *Default:* All release branches configured for the project.

List of branches to create PR's for.

---

##### `container`<sup>Optional</sup> <a name="container" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.container"></a>

```typescript
public readonly container: ContainerOptions;
```

- *Type:* projen.github.workflows.ContainerOptions
- *Default:* defaults

Job container options.

---

##### `gitIdentity`<sup>Optional</sup> <a name="gitIdentity" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.gitIdentity"></a>

```typescript
public readonly gitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* "github-actions@github.com"

The git identity to use for commits.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]
- *Default:* no labels.

Labels to apply on the PR.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions
- *Default:* `{ contents: JobPermission.READ }`

Permissions granted to the upgrade job To limit job permissions for `contents`, the desired permissions have to be explicitly set, e.g.: `{ contents: JobPermission.NONE }`.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* personal access token named PROJEN_GITHUB_TOKEN

Choose a method for authenticating with GitHub for creating the PR.

When using the default github token, PR's created by this workflow
will not trigger any subsequent workflows (i.e the build workflow), so
projen requires API access to be provided through e.g. a personal
access token or other method.

> [https://github.com/peter-evans/create-pull-request/issues/48](https://github.com/peter-evans/create-pull-request/issues/48)

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="projen.javascript.UpgradeDependenciesWorkflowOptions.property.schedule"></a>

```typescript
public readonly schedule: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>
- *Default:* UpgradeDependenciesSchedule.DAILY

Schedule to run on.

---

### YarnBerryOptions <a name="YarnBerryOptions" id="projen.javascript.YarnBerryOptions"></a>

Configure Yarn Berry.

#### Initializer <a name="Initializer" id="projen.javascript.YarnBerryOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnBerryOptions: javascript.YarnBerryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnBerryOptions.property.version">version</a></code> | <code>string</code> | A fully specified version to use for yarn (e.g., x.x.x). |
| <code><a href="#projen.javascript.YarnBerryOptions.property.yarnRcOptions">yarnRcOptions</a></code> | <code><a href="#projen.javascript.YarnrcOptions">YarnrcOptions</a></code> | The yarnrc configuration. |
| <code><a href="#projen.javascript.YarnBerryOptions.property.zeroInstalls">zeroInstalls</a></code> | <code>boolean</code> | Should zero-installs be enabled? |

---

##### `version`<sup>Optional</sup> <a name="version" id="projen.javascript.YarnBerryOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* 4.0.1

A fully specified version to use for yarn (e.g., x.x.x).

---

##### `yarnRcOptions`<sup>Optional</sup> <a name="yarnRcOptions" id="projen.javascript.YarnBerryOptions.property.yarnRcOptions"></a>

```typescript
public readonly yarnRcOptions: YarnrcOptions;
```

- *Type:* <a href="#projen.javascript.YarnrcOptions">YarnrcOptions</a>
- *Default:* a blank Yarn RC file

The yarnrc configuration.

---

##### `zeroInstalls`<sup>Optional</sup> <a name="zeroInstalls" id="projen.javascript.YarnBerryOptions.property.zeroInstalls"></a>

```typescript
public readonly zeroInstalls: boolean;
```

- *Type:* boolean
- *Default:* false

Should zero-installs be enabled?

Learn more at: https://yarnpkg.com/features/caching#zero-installs

---

### YarnLogFilter <a name="YarnLogFilter" id="projen.javascript.YarnLogFilter"></a>

https://yarnpkg.com/configuration/yarnrc#logFilters.

#### Initializer <a name="Initializer" id="projen.javascript.YarnLogFilter.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnLogFilter: javascript.YarnLogFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnLogFilter.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilter.property.level">level</a></code> | <code><a href="#projen.javascript.YarnLogFilterLevel">YarnLogFilterLevel</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilter.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilter.property.text">text</a></code> | <code>string</code> | *No description.* |

---

##### `code`<sup>Optional</sup> <a name="code" id="projen.javascript.YarnLogFilter.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `level`<sup>Optional</sup> <a name="level" id="projen.javascript.YarnLogFilter.property.level"></a>

```typescript
public readonly level: YarnLogFilterLevel;
```

- *Type:* <a href="#projen.javascript.YarnLogFilterLevel">YarnLogFilterLevel</a>

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="projen.javascript.YarnLogFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `text`<sup>Optional</sup> <a name="text" id="projen.javascript.YarnLogFilter.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

### YarnNetworkSetting <a name="YarnNetworkSetting" id="projen.javascript.YarnNetworkSetting"></a>

https://yarnpkg.com/configuration/yarnrc#networkSettings.

#### Initializer <a name="Initializer" id="projen.javascript.YarnNetworkSetting.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnNetworkSetting: javascript.YarnNetworkSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.caFilePath">caFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.enableNetwork">enableNetwork</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.httpsCaFilePath">httpsCaFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.httpsCertFilePath">httpsCertFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.httpsKeyFilePath">httpsKeyFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNetworkSetting.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |

---

##### ~~`caFilePath`~~<sup>Optional</sup> <a name="caFilePath" id="projen.javascript.YarnNetworkSetting.property.caFilePath"></a>

- *Deprecated:* - use httpsCaFilePath in Yarn v4 and newer

```typescript
public readonly caFilePath: string;
```

- *Type:* string

---

##### `enableNetwork`<sup>Optional</sup> <a name="enableNetwork" id="projen.javascript.YarnNetworkSetting.property.enableNetwork"></a>

```typescript
public readonly enableNetwork: boolean;
```

- *Type:* boolean

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="projen.javascript.YarnNetworkSetting.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `httpsCaFilePath`<sup>Optional</sup> <a name="httpsCaFilePath" id="projen.javascript.YarnNetworkSetting.property.httpsCaFilePath"></a>

```typescript
public readonly httpsCaFilePath: string;
```

- *Type:* string

---

##### `httpsCertFilePath`<sup>Optional</sup> <a name="httpsCertFilePath" id="projen.javascript.YarnNetworkSetting.property.httpsCertFilePath"></a>

```typescript
public readonly httpsCertFilePath: string;
```

- *Type:* string

---

##### `httpsKeyFilePath`<sup>Optional</sup> <a name="httpsKeyFilePath" id="projen.javascript.YarnNetworkSetting.property.httpsKeyFilePath"></a>

```typescript
public readonly httpsKeyFilePath: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="projen.javascript.YarnNetworkSetting.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

### YarnNpmRegistry <a name="YarnNpmRegistry" id="projen.javascript.YarnNpmRegistry"></a>

https://yarnpkg.com/configuration/yarnrc#npmRegistries.

#### Initializer <a name="Initializer" id="projen.javascript.YarnNpmRegistry.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnNpmRegistry: javascript.YarnNpmRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnNpmRegistry.property.npmAlwaysAuth">npmAlwaysAuth</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmRegistry.property.npmAuthIdent">npmAuthIdent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmRegistry.property.npmAuthToken">npmAuthToken</a></code> | <code>string</code> | *No description.* |

---

##### `npmAlwaysAuth`<sup>Optional</sup> <a name="npmAlwaysAuth" id="projen.javascript.YarnNpmRegistry.property.npmAlwaysAuth"></a>

```typescript
public readonly npmAlwaysAuth: boolean;
```

- *Type:* boolean

---

##### `npmAuthIdent`<sup>Optional</sup> <a name="npmAuthIdent" id="projen.javascript.YarnNpmRegistry.property.npmAuthIdent"></a>

```typescript
public readonly npmAuthIdent: string;
```

- *Type:* string

---

##### `npmAuthToken`<sup>Optional</sup> <a name="npmAuthToken" id="projen.javascript.YarnNpmRegistry.property.npmAuthToken"></a>

```typescript
public readonly npmAuthToken: string;
```

- *Type:* string

---

### YarnNpmScope <a name="YarnNpmScope" id="projen.javascript.YarnNpmScope"></a>

https://yarnpkg.com/configuration/yarnrc#npmScopes.

#### Initializer <a name="Initializer" id="projen.javascript.YarnNpmScope.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnNpmScope: javascript.YarnNpmScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnNpmScope.property.npmAlwaysAuth">npmAlwaysAuth</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmScope.property.npmAuthIdent">npmAuthIdent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmScope.property.npmAuthToken">npmAuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmScope.property.npmPublishRegistry">npmPublishRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmScope.property.npmRegistryServer">npmRegistryServer</a></code> | <code>string</code> | *No description.* |

---

##### `npmAlwaysAuth`<sup>Optional</sup> <a name="npmAlwaysAuth" id="projen.javascript.YarnNpmScope.property.npmAlwaysAuth"></a>

```typescript
public readonly npmAlwaysAuth: boolean;
```

- *Type:* boolean

---

##### `npmAuthIdent`<sup>Optional</sup> <a name="npmAuthIdent" id="projen.javascript.YarnNpmScope.property.npmAuthIdent"></a>

```typescript
public readonly npmAuthIdent: string;
```

- *Type:* string

---

##### `npmAuthToken`<sup>Optional</sup> <a name="npmAuthToken" id="projen.javascript.YarnNpmScope.property.npmAuthToken"></a>

```typescript
public readonly npmAuthToken: string;
```

- *Type:* string

---

##### `npmPublishRegistry`<sup>Optional</sup> <a name="npmPublishRegistry" id="projen.javascript.YarnNpmScope.property.npmPublishRegistry"></a>

```typescript
public readonly npmPublishRegistry: string;
```

- *Type:* string

---

##### `npmRegistryServer`<sup>Optional</sup> <a name="npmRegistryServer" id="projen.javascript.YarnNpmScope.property.npmRegistryServer"></a>

```typescript
public readonly npmRegistryServer: string;
```

- *Type:* string

---

### YarnPackageExtension <a name="YarnPackageExtension" id="projen.javascript.YarnPackageExtension"></a>

https://yarnpkg.com/configuration/yarnrc#packageExtensions.

#### Initializer <a name="Initializer" id="projen.javascript.YarnPackageExtension.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnPackageExtension: javascript.YarnPackageExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnPackageExtension.property.dependencies">dependencies</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#projen.javascript.YarnPackageExtension.property.peerDependencies">peerDependencies</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#projen.javascript.YarnPackageExtension.property.peerDependenciesMeta">peerDependenciesMeta</a></code> | <code>{[ key: string ]: {[ key: string ]: <a href="#projen.javascript.YarnPeerDependencyMeta">YarnPeerDependencyMeta</a>}}</code> | *No description.* |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="projen.javascript.YarnPackageExtension.property.dependencies"></a>

```typescript
public readonly dependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peerDependencies`<sup>Optional</sup> <a name="peerDependencies" id="projen.javascript.YarnPackageExtension.property.peerDependencies"></a>

```typescript
public readonly peerDependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peerDependenciesMeta`<sup>Optional</sup> <a name="peerDependenciesMeta" id="projen.javascript.YarnPackageExtension.property.peerDependenciesMeta"></a>

```typescript
public readonly peerDependenciesMeta: {[ key: string ]: {[ key: string ]: YarnPeerDependencyMeta}};
```

- *Type:* {[ key: string ]: {[ key: string ]: <a href="#projen.javascript.YarnPeerDependencyMeta">YarnPeerDependencyMeta</a>}}

---

### YarnPeerDependencyMeta <a name="YarnPeerDependencyMeta" id="projen.javascript.YarnPeerDependencyMeta"></a>

https://yarnpkg.com/configuration/yarnrc#packageExtensions.

#### Initializer <a name="Initializer" id="projen.javascript.YarnPeerDependencyMeta.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnPeerDependencyMeta: javascript.YarnPeerDependencyMeta = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnPeerDependencyMeta.property.optional">optional</a></code> | <code>boolean</code> | *No description.* |

---

##### `optional`<sup>Optional</sup> <a name="optional" id="projen.javascript.YarnPeerDependencyMeta.property.optional"></a>

```typescript
public readonly optional: boolean;
```

- *Type:* boolean

---

### YarnrcOptions <a name="YarnrcOptions" id="projen.javascript.YarnrcOptions"></a>

Configuration for .yarnrc.yml in Yarn Berry v4.

#### Initializer <a name="Initializer" id="projen.javascript.YarnrcOptions.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnrcOptions: javascript.YarnrcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnrcOptions.property.cacheFolder">cacheFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#cacheFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.cacheMigrationMode">cacheMigrationMode</a></code> | <code><a href="#projen.javascript.YarnCacheMigrationMode">YarnCacheMigrationMode</a></code> | https://yarnpkg.com/configuration/yarnrc#cacheMigrationMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.changesetBaseRefs">changesetBaseRefs</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#changesetBaseRefs. |
| <code><a href="#projen.javascript.YarnrcOptions.property.changesetIgnorePatterns">changesetIgnorePatterns</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#changesetIgnorePatterns. |
| <code><a href="#projen.javascript.YarnrcOptions.property.checksumBehavior">checksumBehavior</a></code> | <code><a href="#projen.javascript.YarnChecksumBehavior">YarnChecksumBehavior</a></code> | https://yarnpkg.com/configuration/yarnrc#checksumBehavior. |
| <code><a href="#projen.javascript.YarnrcOptions.property.cloneConcurrency">cloneConcurrency</a></code> | <code>number</code> | https://yarnpkg.com/configuration/yarnrc#cloneConcurrency. |
| <code><a href="#projen.javascript.YarnrcOptions.property.compressionLevel">compressionLevel</a></code> | <code>string \| number</code> | https://yarnpkg.com/configuration/yarnrc#compressionLevel. |
| <code><a href="#projen.javascript.YarnrcOptions.property.constraintsPath">constraintsPath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#constraintsPath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.defaultLanguageName">defaultLanguageName</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#defaultLanguageName. |
| <code><a href="#projen.javascript.YarnrcOptions.property.defaultProtocol">defaultProtocol</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#defaultProtocol. |
| <code><a href="#projen.javascript.YarnrcOptions.property.defaultSemverRangePrefix">defaultSemverRangePrefix</a></code> | <code><a href="#projen.javascript.YarnDefaultSemverRangePrefix">YarnDefaultSemverRangePrefix</a></code> | https://yarnpkg.com/configuration/yarnrc#defaultSemverRangePrefix. |
| <code><a href="#projen.javascript.YarnrcOptions.property.deferredVersionFolder">deferredVersionFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#deferredVersionFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableColors">enableColors</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableColors. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableConstraintsCheck">enableConstraintsCheck</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableConstraintsCheck. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableGlobalCache">enableGlobalCache</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableGlobalCache. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableHardenedMode">enableHardenedMode</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableHardenedMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableHyperlinks">enableHyperlinks</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableHyperlinks. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableImmutableCache">enableImmutableCache</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableImmutableCache. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableImmutableInstalls">enableImmutableInstalls</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableImmutableInstalls. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableInlineBuilds">enableInlineBuilds</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableInlineBuilds. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableInlineHunks">enableInlineHunks</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableInlineHunks. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableMessageNames">enableMessageNames</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableMessageNames. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableMirror">enableMirror</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableMirror. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableNetwork">enableNetwork</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableNetwork. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableOfflineMode">enableOfflineMode</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableOfflineMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableProgressBars">enableProgressBars</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableProgressBars. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableScripts">enableScripts</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableScripts. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableStrictSsl">enableStrictSsl</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableStrictSsl. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableTelemetry">enableTelemetry</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableTelemetry. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableTimers">enableTimers</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableTimers. |
| <code><a href="#projen.javascript.YarnrcOptions.property.enableTransparentWorkspaces">enableTransparentWorkspaces</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#enableTransparentWorkspaces. |
| <code><a href="#projen.javascript.YarnrcOptions.property.globalFolder">globalFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#globalFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpProxy">httpProxy</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#httpProxy. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpRetry">httpRetry</a></code> | <code>number</code> | https://yarnpkg.com/configuration/yarnrc#httpRetry. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpsCaFilePath">httpsCaFilePath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#httpsCaFilePath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpsCertFilePath">httpsCertFilePath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#httpsCertFilePath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpsKeyFilePath">httpsKeyFilePath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#httpsKeyFilePath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#httpsProxy. |
| <code><a href="#projen.javascript.YarnrcOptions.property.httpTimeout">httpTimeout</a></code> | <code>number</code> | https://yarnpkg.com/configuration/yarnrc#httpTimeout. |
| <code><a href="#projen.javascript.YarnrcOptions.property.ignoreCwd">ignoreCwd</a></code> | <code>boolean</code> | https://v3.yarnpkg.com/configuration/yarnrc#ignoreCwd. |
| <code><a href="#projen.javascript.YarnrcOptions.property.ignorePath">ignorePath</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#ignorePath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.immutablePatterns">immutablePatterns</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#immutablePatterns. |
| <code><a href="#projen.javascript.YarnrcOptions.property.initFields">initFields</a></code> | <code>{[ key: string ]: any}</code> | https://yarnpkg.com/configuration/yarnrc#initFields. |
| <code><a href="#projen.javascript.YarnrcOptions.property.initScope">initScope</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#initScope. |
| <code><a href="#projen.javascript.YarnrcOptions.property.injectEnvironmentFiles">injectEnvironmentFiles</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#injectEnvironmentFiles. |
| <code><a href="#projen.javascript.YarnrcOptions.property.installStatePath">installStatePath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#installStatePath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.lockfileFilename">lockfileFilename</a></code> | <code>string</code> | https://v3.yarnpkg.com/configuration/yarnrc#lockfileFilename. |
| <code><a href="#projen.javascript.YarnrcOptions.property.logFilters">logFilters</a></code> | <code><a href="#projen.javascript.YarnLogFilter">YarnLogFilter</a>[]</code> | https://yarnpkg.com/configuration/yarnrc#logFilters. |
| <code><a href="#projen.javascript.YarnrcOptions.property.networkConcurrency">networkConcurrency</a></code> | <code>number</code> | https://yarnpkg.com/configuration/yarnrc#networkConcurrency. |
| <code><a href="#projen.javascript.YarnrcOptions.property.networkSettings">networkSettings</a></code> | <code>{[ key: string ]: <a href="#projen.javascript.YarnNetworkSetting">YarnNetworkSetting</a>}</code> | https://yarnpkg.com/configuration/yarnrc#networkSettings. |
| <code><a href="#projen.javascript.YarnrcOptions.property.nmHoistingLimits">nmHoistingLimits</a></code> | <code><a href="#projen.javascript.YarnNmHoistingLimit">YarnNmHoistingLimit</a></code> | https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits. |
| <code><a href="#projen.javascript.YarnrcOptions.property.nmMode">nmMode</a></code> | <code><a href="#projen.javascript.YarnNmMode">YarnNmMode</a></code> | https://yarnpkg.com/configuration/yarnrc#nmMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.nmSelfReferences">nmSelfReferences</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#nmSelfReferences. |
| <code><a href="#projen.javascript.YarnrcOptions.property.nodeLinker">nodeLinker</a></code> | <code><a href="#projen.javascript.YarnNodeLinker">YarnNodeLinker</a></code> | https://yarnpkg.com/configuration/yarnrc#nodeLinker. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAlwaysAuth">npmAlwaysAuth</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#npmAlwaysAuth. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAuditExcludePackages">npmAuditExcludePackages</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#npmAuditExcludePackages. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAuditIgnoreAdvisories">npmAuditIgnoreAdvisories</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#npmAuditIgnoreAdvisories. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAuditRegistry">npmAuditRegistry</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#npmAuditRegistry. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAuthIdent">npmAuthIdent</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#npmAuthIdent. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmAuthToken">npmAuthToken</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#npmAuthToken. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmPublishAccess">npmPublishAccess</a></code> | <code><a href="#projen.javascript.YarnNpmPublishAccess">YarnNpmPublishAccess</a></code> | https://yarnpkg.com/configuration/yarnrc#npmPublishAccess. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmPublishRegistry">npmPublishRegistry</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#npmPublishRegistry. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmRegistries">npmRegistries</a></code> | <code>{[ key: string ]: <a href="#projen.javascript.YarnNpmRegistry">YarnNpmRegistry</a>}</code> | https://yarnpkg.com/configuration/yarnrc#npmRegistries. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmRegistryServer">npmRegistryServer</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#npmRegistryServer. |
| <code><a href="#projen.javascript.YarnrcOptions.property.npmScopes">npmScopes</a></code> | <code>{[ key: string ]: <a href="#projen.javascript.YarnNpmScope">YarnNpmScope</a>}</code> | https://yarnpkg.com/configuration/yarnrc#npmScopes. |
| <code><a href="#projen.javascript.YarnrcOptions.property.packageExtensions">packageExtensions</a></code> | <code>{[ key: string ]: <a href="#projen.javascript.YarnPackageExtension">YarnPackageExtension</a>}</code> | https://yarnpkg.com/configuration/yarnrc#packageExtensions. |
| <code><a href="#projen.javascript.YarnrcOptions.property.patchFolder">patchFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#patchFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpDataPath">pnpDataPath</a></code> | <code>string</code> | https://v3.yarnpkg.com/configuration/yarnrc#pnpDataPath. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpEnableEsmLoader">pnpEnableEsmLoader</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#pnpEnableEsmLoader. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpEnableInlining">pnpEnableInlining</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#pnpEnableInlining. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpFallbackMode">pnpFallbackMode</a></code> | <code><a href="#projen.javascript.YarnPnpFallbackMode">YarnPnpFallbackMode</a></code> | https://yarnpkg.com/configuration/yarnrc#pnpFallbackMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpIgnorePatterns">pnpIgnorePatterns</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#pnpIgnorePatterns. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpMode">pnpMode</a></code> | <code><a href="#projen.javascript.YarnPnpMode">YarnPnpMode</a></code> | https://yarnpkg.com/configuration/yarnrc#pnpMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpShebang">pnpShebang</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#pnpShebang. |
| <code><a href="#projen.javascript.YarnrcOptions.property.pnpUnpluggedFolder">pnpUnpluggedFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#pnpUnpluggedFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.preferAggregateCacheInfo">preferAggregateCacheInfo</a></code> | <code>boolean</code> | https://v3.yarnpkg.com/configuration/yarnrc#preferAggregateCacheInfo. |
| <code><a href="#projen.javascript.YarnrcOptions.property.preferDeferredVersions">preferDeferredVersions</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#preferDeferredVersions. |
| <code><a href="#projen.javascript.YarnrcOptions.property.preferInteractive">preferInteractive</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#preferInteractive. |
| <code><a href="#projen.javascript.YarnrcOptions.property.preferReuse">preferReuse</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#preferReuse. |
| <code><a href="#projen.javascript.YarnrcOptions.property.preferTruncatedLines">preferTruncatedLines</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#preferTruncatedLines. |
| <code><a href="#projen.javascript.YarnrcOptions.property.progressBarStyle">progressBarStyle</a></code> | <code><a href="#projen.javascript.YarnProgressBarStyle">YarnProgressBarStyle</a></code> | https://yarnpkg.com/configuration/yarnrc#progressBarStyle. |
| <code><a href="#projen.javascript.YarnrcOptions.property.rcFilename">rcFilename</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#rcFilename. |
| <code><a href="#projen.javascript.YarnrcOptions.property.supportedArchitectures">supportedArchitectures</a></code> | <code><a href="#projen.javascript.YarnSupportedArchitectures">YarnSupportedArchitectures</a></code> | https://yarnpkg.com/configuration/yarnrc#supportedArchitectures. |
| <code><a href="#projen.javascript.YarnrcOptions.property.taskPoolConcurrency">taskPoolConcurrency</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#taskPoolConcurrency. |
| <code><a href="#projen.javascript.YarnrcOptions.property.telemetryInterval">telemetryInterval</a></code> | <code>number</code> | https://yarnpkg.com/configuration/yarnrc#telemetryInterval. |
| <code><a href="#projen.javascript.YarnrcOptions.property.telemetryUserId">telemetryUserId</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#telemetryUserId. |
| <code><a href="#projen.javascript.YarnrcOptions.property.tsEnableAutoTypes">tsEnableAutoTypes</a></code> | <code>boolean</code> | https://yarnpkg.com/configuration/yarnrc#tsEnableAutoTypes. |
| <code><a href="#projen.javascript.YarnrcOptions.property.unsafeHttpWhitelist">unsafeHttpWhitelist</a></code> | <code>string[]</code> | https://yarnpkg.com/configuration/yarnrc#unsafeHttpWhitelist. |
| <code><a href="#projen.javascript.YarnrcOptions.property.virtualFolder">virtualFolder</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#virtualFolder. |
| <code><a href="#projen.javascript.YarnrcOptions.property.winLinkType">winLinkType</a></code> | <code><a href="#projen.javascript.YarnWinLinkType">YarnWinLinkType</a></code> | https://yarnpkg.com/configuration/yarnrc#winLinkType. |
| <code><a href="#projen.javascript.YarnrcOptions.property.workerPoolMode">workerPoolMode</a></code> | <code><a href="#projen.javascript.YarnWorkerPoolMode">YarnWorkerPoolMode</a></code> | https://yarnpkg.com/configuration/yarnrc#workerPoolMode. |
| <code><a href="#projen.javascript.YarnrcOptions.property.yarnPath">yarnPath</a></code> | <code>string</code> | https://yarnpkg.com/configuration/yarnrc#yarnPath. |

---

##### `cacheFolder`<sup>Optional</sup> <a name="cacheFolder" id="projen.javascript.YarnrcOptions.property.cacheFolder"></a>

```typescript
public readonly cacheFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#cacheFolder.

---

##### `cacheMigrationMode`<sup>Optional</sup> <a name="cacheMigrationMode" id="projen.javascript.YarnrcOptions.property.cacheMigrationMode"></a>

```typescript
public readonly cacheMigrationMode: YarnCacheMigrationMode;
```

- *Type:* <a href="#projen.javascript.YarnCacheMigrationMode">YarnCacheMigrationMode</a>

https://yarnpkg.com/configuration/yarnrc#cacheMigrationMode.

---

##### `changesetBaseRefs`<sup>Optional</sup> <a name="changesetBaseRefs" id="projen.javascript.YarnrcOptions.property.changesetBaseRefs"></a>

```typescript
public readonly changesetBaseRefs: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#changesetBaseRefs.

---

##### `changesetIgnorePatterns`<sup>Optional</sup> <a name="changesetIgnorePatterns" id="projen.javascript.YarnrcOptions.property.changesetIgnorePatterns"></a>

```typescript
public readonly changesetIgnorePatterns: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#changesetIgnorePatterns.

---

##### `checksumBehavior`<sup>Optional</sup> <a name="checksumBehavior" id="projen.javascript.YarnrcOptions.property.checksumBehavior"></a>

```typescript
public readonly checksumBehavior: YarnChecksumBehavior;
```

- *Type:* <a href="#projen.javascript.YarnChecksumBehavior">YarnChecksumBehavior</a>

https://yarnpkg.com/configuration/yarnrc#checksumBehavior.

---

##### `cloneConcurrency`<sup>Optional</sup> <a name="cloneConcurrency" id="projen.javascript.YarnrcOptions.property.cloneConcurrency"></a>

```typescript
public readonly cloneConcurrency: number;
```

- *Type:* number

https://yarnpkg.com/configuration/yarnrc#cloneConcurrency.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="projen.javascript.YarnrcOptions.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: string | number;
```

- *Type:* string | number

https://yarnpkg.com/configuration/yarnrc#compressionLevel.

---

##### `constraintsPath`<sup>Optional</sup> <a name="constraintsPath" id="projen.javascript.YarnrcOptions.property.constraintsPath"></a>

```typescript
public readonly constraintsPath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#constraintsPath.

---

##### `defaultLanguageName`<sup>Optional</sup> <a name="defaultLanguageName" id="projen.javascript.YarnrcOptions.property.defaultLanguageName"></a>

```typescript
public readonly defaultLanguageName: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#defaultLanguageName.

---

##### `defaultProtocol`<sup>Optional</sup> <a name="defaultProtocol" id="projen.javascript.YarnrcOptions.property.defaultProtocol"></a>

```typescript
public readonly defaultProtocol: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#defaultProtocol.

---

##### `defaultSemverRangePrefix`<sup>Optional</sup> <a name="defaultSemverRangePrefix" id="projen.javascript.YarnrcOptions.property.defaultSemverRangePrefix"></a>

```typescript
public readonly defaultSemverRangePrefix: YarnDefaultSemverRangePrefix;
```

- *Type:* <a href="#projen.javascript.YarnDefaultSemverRangePrefix">YarnDefaultSemverRangePrefix</a>

https://yarnpkg.com/configuration/yarnrc#defaultSemverRangePrefix.

---

##### `deferredVersionFolder`<sup>Optional</sup> <a name="deferredVersionFolder" id="projen.javascript.YarnrcOptions.property.deferredVersionFolder"></a>

```typescript
public readonly deferredVersionFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#deferredVersionFolder.

---

##### `enableColors`<sup>Optional</sup> <a name="enableColors" id="projen.javascript.YarnrcOptions.property.enableColors"></a>

```typescript
public readonly enableColors: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableColors.

---

##### `enableConstraintsCheck`<sup>Optional</sup> <a name="enableConstraintsCheck" id="projen.javascript.YarnrcOptions.property.enableConstraintsCheck"></a>

```typescript
public readonly enableConstraintsCheck: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableConstraintsCheck.

---

##### `enableGlobalCache`<sup>Optional</sup> <a name="enableGlobalCache" id="projen.javascript.YarnrcOptions.property.enableGlobalCache"></a>

```typescript
public readonly enableGlobalCache: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableGlobalCache.

---

##### `enableHardenedMode`<sup>Optional</sup> <a name="enableHardenedMode" id="projen.javascript.YarnrcOptions.property.enableHardenedMode"></a>

```typescript
public readonly enableHardenedMode: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableHardenedMode.

---

##### `enableHyperlinks`<sup>Optional</sup> <a name="enableHyperlinks" id="projen.javascript.YarnrcOptions.property.enableHyperlinks"></a>

```typescript
public readonly enableHyperlinks: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableHyperlinks.

---

##### `enableImmutableCache`<sup>Optional</sup> <a name="enableImmutableCache" id="projen.javascript.YarnrcOptions.property.enableImmutableCache"></a>

```typescript
public readonly enableImmutableCache: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableImmutableCache.

---

##### `enableImmutableInstalls`<sup>Optional</sup> <a name="enableImmutableInstalls" id="projen.javascript.YarnrcOptions.property.enableImmutableInstalls"></a>

```typescript
public readonly enableImmutableInstalls: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableImmutableInstalls.

---

##### `enableInlineBuilds`<sup>Optional</sup> <a name="enableInlineBuilds" id="projen.javascript.YarnrcOptions.property.enableInlineBuilds"></a>

```typescript
public readonly enableInlineBuilds: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableInlineBuilds.

---

##### `enableInlineHunks`<sup>Optional</sup> <a name="enableInlineHunks" id="projen.javascript.YarnrcOptions.property.enableInlineHunks"></a>

```typescript
public readonly enableInlineHunks: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableInlineHunks.

---

##### `enableMessageNames`<sup>Optional</sup> <a name="enableMessageNames" id="projen.javascript.YarnrcOptions.property.enableMessageNames"></a>

```typescript
public readonly enableMessageNames: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableMessageNames.

---

##### `enableMirror`<sup>Optional</sup> <a name="enableMirror" id="projen.javascript.YarnrcOptions.property.enableMirror"></a>

```typescript
public readonly enableMirror: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableMirror.

---

##### `enableNetwork`<sup>Optional</sup> <a name="enableNetwork" id="projen.javascript.YarnrcOptions.property.enableNetwork"></a>

```typescript
public readonly enableNetwork: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableNetwork.

---

##### `enableOfflineMode`<sup>Optional</sup> <a name="enableOfflineMode" id="projen.javascript.YarnrcOptions.property.enableOfflineMode"></a>

```typescript
public readonly enableOfflineMode: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableOfflineMode.

---

##### `enableProgressBars`<sup>Optional</sup> <a name="enableProgressBars" id="projen.javascript.YarnrcOptions.property.enableProgressBars"></a>

```typescript
public readonly enableProgressBars: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableProgressBars.

---

##### `enableScripts`<sup>Optional</sup> <a name="enableScripts" id="projen.javascript.YarnrcOptions.property.enableScripts"></a>

```typescript
public readonly enableScripts: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableScripts.

---

##### `enableStrictSsl`<sup>Optional</sup> <a name="enableStrictSsl" id="projen.javascript.YarnrcOptions.property.enableStrictSsl"></a>

```typescript
public readonly enableStrictSsl: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableStrictSsl.

---

##### `enableTelemetry`<sup>Optional</sup> <a name="enableTelemetry" id="projen.javascript.YarnrcOptions.property.enableTelemetry"></a>

```typescript
public readonly enableTelemetry: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableTelemetry.

---

##### `enableTimers`<sup>Optional</sup> <a name="enableTimers" id="projen.javascript.YarnrcOptions.property.enableTimers"></a>

```typescript
public readonly enableTimers: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableTimers.

---

##### `enableTransparentWorkspaces`<sup>Optional</sup> <a name="enableTransparentWorkspaces" id="projen.javascript.YarnrcOptions.property.enableTransparentWorkspaces"></a>

```typescript
public readonly enableTransparentWorkspaces: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#enableTransparentWorkspaces.

---

##### `globalFolder`<sup>Optional</sup> <a name="globalFolder" id="projen.javascript.YarnrcOptions.property.globalFolder"></a>

```typescript
public readonly globalFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#globalFolder.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="projen.javascript.YarnrcOptions.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#httpProxy.

---

##### `httpRetry`<sup>Optional</sup> <a name="httpRetry" id="projen.javascript.YarnrcOptions.property.httpRetry"></a>

```typescript
public readonly httpRetry: number;
```

- *Type:* number

https://yarnpkg.com/configuration/yarnrc#httpRetry.

---

##### `httpsCaFilePath`<sup>Optional</sup> <a name="httpsCaFilePath" id="projen.javascript.YarnrcOptions.property.httpsCaFilePath"></a>

```typescript
public readonly httpsCaFilePath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#httpsCaFilePath.

---

##### `httpsCertFilePath`<sup>Optional</sup> <a name="httpsCertFilePath" id="projen.javascript.YarnrcOptions.property.httpsCertFilePath"></a>

```typescript
public readonly httpsCertFilePath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#httpsCertFilePath.

---

##### `httpsKeyFilePath`<sup>Optional</sup> <a name="httpsKeyFilePath" id="projen.javascript.YarnrcOptions.property.httpsKeyFilePath"></a>

```typescript
public readonly httpsKeyFilePath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#httpsKeyFilePath.

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="projen.javascript.YarnrcOptions.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#httpsProxy.

---

##### `httpTimeout`<sup>Optional</sup> <a name="httpTimeout" id="projen.javascript.YarnrcOptions.property.httpTimeout"></a>

```typescript
public readonly httpTimeout: number;
```

- *Type:* number

https://yarnpkg.com/configuration/yarnrc#httpTimeout.

---

##### ~~`ignoreCwd`~~<sup>Optional</sup> <a name="ignoreCwd" id="projen.javascript.YarnrcOptions.property.ignoreCwd"></a>

- *Deprecated:* - removed in Yarn v4 and newer

```typescript
public readonly ignoreCwd: boolean;
```

- *Type:* boolean

https://v3.yarnpkg.com/configuration/yarnrc#ignoreCwd.

---

##### `ignorePath`<sup>Optional</sup> <a name="ignorePath" id="projen.javascript.YarnrcOptions.property.ignorePath"></a>

```typescript
public readonly ignorePath: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#ignorePath.

---

##### `immutablePatterns`<sup>Optional</sup> <a name="immutablePatterns" id="projen.javascript.YarnrcOptions.property.immutablePatterns"></a>

```typescript
public readonly immutablePatterns: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#immutablePatterns.

---

##### `initFields`<sup>Optional</sup> <a name="initFields" id="projen.javascript.YarnrcOptions.property.initFields"></a>

```typescript
public readonly initFields: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

https://yarnpkg.com/configuration/yarnrc#initFields.

---

##### `initScope`<sup>Optional</sup> <a name="initScope" id="projen.javascript.YarnrcOptions.property.initScope"></a>

```typescript
public readonly initScope: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#initScope.

---

##### `injectEnvironmentFiles`<sup>Optional</sup> <a name="injectEnvironmentFiles" id="projen.javascript.YarnrcOptions.property.injectEnvironmentFiles"></a>

```typescript
public readonly injectEnvironmentFiles: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#injectEnvironmentFiles.

---

##### `installStatePath`<sup>Optional</sup> <a name="installStatePath" id="projen.javascript.YarnrcOptions.property.installStatePath"></a>

```typescript
public readonly installStatePath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#installStatePath.

---

##### ~~`lockfileFilename`~~<sup>Optional</sup> <a name="lockfileFilename" id="projen.javascript.YarnrcOptions.property.lockfileFilename"></a>

- *Deprecated:* - removed in Yarn v4 and newer

```typescript
public readonly lockfileFilename: string;
```

- *Type:* string

https://v3.yarnpkg.com/configuration/yarnrc#lockfileFilename.

---

##### `logFilters`<sup>Optional</sup> <a name="logFilters" id="projen.javascript.YarnrcOptions.property.logFilters"></a>

```typescript
public readonly logFilters: YarnLogFilter[];
```

- *Type:* <a href="#projen.javascript.YarnLogFilter">YarnLogFilter</a>[]

https://yarnpkg.com/configuration/yarnrc#logFilters.

---

##### `networkConcurrency`<sup>Optional</sup> <a name="networkConcurrency" id="projen.javascript.YarnrcOptions.property.networkConcurrency"></a>

```typescript
public readonly networkConcurrency: number;
```

- *Type:* number

https://yarnpkg.com/configuration/yarnrc#networkConcurrency.

---

##### `networkSettings`<sup>Optional</sup> <a name="networkSettings" id="projen.javascript.YarnrcOptions.property.networkSettings"></a>

```typescript
public readonly networkSettings: {[ key: string ]: YarnNetworkSetting};
```

- *Type:* {[ key: string ]: <a href="#projen.javascript.YarnNetworkSetting">YarnNetworkSetting</a>}

https://yarnpkg.com/configuration/yarnrc#networkSettings.

---

##### `nmHoistingLimits`<sup>Optional</sup> <a name="nmHoistingLimits" id="projen.javascript.YarnrcOptions.property.nmHoistingLimits"></a>

```typescript
public readonly nmHoistingLimits: YarnNmHoistingLimit;
```

- *Type:* <a href="#projen.javascript.YarnNmHoistingLimit">YarnNmHoistingLimit</a>

https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits.

---

##### `nmMode`<sup>Optional</sup> <a name="nmMode" id="projen.javascript.YarnrcOptions.property.nmMode"></a>

```typescript
public readonly nmMode: YarnNmMode;
```

- *Type:* <a href="#projen.javascript.YarnNmMode">YarnNmMode</a>

https://yarnpkg.com/configuration/yarnrc#nmMode.

---

##### `nmSelfReferences`<sup>Optional</sup> <a name="nmSelfReferences" id="projen.javascript.YarnrcOptions.property.nmSelfReferences"></a>

```typescript
public readonly nmSelfReferences: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#nmSelfReferences.

---

##### `nodeLinker`<sup>Optional</sup> <a name="nodeLinker" id="projen.javascript.YarnrcOptions.property.nodeLinker"></a>

```typescript
public readonly nodeLinker: YarnNodeLinker;
```

- *Type:* <a href="#projen.javascript.YarnNodeLinker">YarnNodeLinker</a>

https://yarnpkg.com/configuration/yarnrc#nodeLinker.

---

##### `npmAlwaysAuth`<sup>Optional</sup> <a name="npmAlwaysAuth" id="projen.javascript.YarnrcOptions.property.npmAlwaysAuth"></a>

```typescript
public readonly npmAlwaysAuth: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#npmAlwaysAuth.

---

##### `npmAuditExcludePackages`<sup>Optional</sup> <a name="npmAuditExcludePackages" id="projen.javascript.YarnrcOptions.property.npmAuditExcludePackages"></a>

```typescript
public readonly npmAuditExcludePackages: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#npmAuditExcludePackages.

---

##### `npmAuditIgnoreAdvisories`<sup>Optional</sup> <a name="npmAuditIgnoreAdvisories" id="projen.javascript.YarnrcOptions.property.npmAuditIgnoreAdvisories"></a>

```typescript
public readonly npmAuditIgnoreAdvisories: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#npmAuditIgnoreAdvisories.

---

##### `npmAuditRegistry`<sup>Optional</sup> <a name="npmAuditRegistry" id="projen.javascript.YarnrcOptions.property.npmAuditRegistry"></a>

```typescript
public readonly npmAuditRegistry: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#npmAuditRegistry.

---

##### `npmAuthIdent`<sup>Optional</sup> <a name="npmAuthIdent" id="projen.javascript.YarnrcOptions.property.npmAuthIdent"></a>

```typescript
public readonly npmAuthIdent: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#npmAuthIdent.

---

##### `npmAuthToken`<sup>Optional</sup> <a name="npmAuthToken" id="projen.javascript.YarnrcOptions.property.npmAuthToken"></a>

```typescript
public readonly npmAuthToken: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#npmAuthToken.

---

##### `npmPublishAccess`<sup>Optional</sup> <a name="npmPublishAccess" id="projen.javascript.YarnrcOptions.property.npmPublishAccess"></a>

```typescript
public readonly npmPublishAccess: YarnNpmPublishAccess;
```

- *Type:* <a href="#projen.javascript.YarnNpmPublishAccess">YarnNpmPublishAccess</a>

https://yarnpkg.com/configuration/yarnrc#npmPublishAccess.

---

##### `npmPublishRegistry`<sup>Optional</sup> <a name="npmPublishRegistry" id="projen.javascript.YarnrcOptions.property.npmPublishRegistry"></a>

```typescript
public readonly npmPublishRegistry: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#npmPublishRegistry.

---

##### `npmRegistries`<sup>Optional</sup> <a name="npmRegistries" id="projen.javascript.YarnrcOptions.property.npmRegistries"></a>

```typescript
public readonly npmRegistries: {[ key: string ]: YarnNpmRegistry};
```

- *Type:* {[ key: string ]: <a href="#projen.javascript.YarnNpmRegistry">YarnNpmRegistry</a>}

https://yarnpkg.com/configuration/yarnrc#npmRegistries.

---

##### `npmRegistryServer`<sup>Optional</sup> <a name="npmRegistryServer" id="projen.javascript.YarnrcOptions.property.npmRegistryServer"></a>

```typescript
public readonly npmRegistryServer: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#npmRegistryServer.

---

##### `npmScopes`<sup>Optional</sup> <a name="npmScopes" id="projen.javascript.YarnrcOptions.property.npmScopes"></a>

```typescript
public readonly npmScopes: {[ key: string ]: YarnNpmScope};
```

- *Type:* {[ key: string ]: <a href="#projen.javascript.YarnNpmScope">YarnNpmScope</a>}

https://yarnpkg.com/configuration/yarnrc#npmScopes.

---

##### `packageExtensions`<sup>Optional</sup> <a name="packageExtensions" id="projen.javascript.YarnrcOptions.property.packageExtensions"></a>

```typescript
public readonly packageExtensions: {[ key: string ]: YarnPackageExtension};
```

- *Type:* {[ key: string ]: <a href="#projen.javascript.YarnPackageExtension">YarnPackageExtension</a>}

https://yarnpkg.com/configuration/yarnrc#packageExtensions.

---

##### `patchFolder`<sup>Optional</sup> <a name="patchFolder" id="projen.javascript.YarnrcOptions.property.patchFolder"></a>

```typescript
public readonly patchFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#patchFolder.

---

##### ~~`pnpDataPath`~~<sup>Optional</sup> <a name="pnpDataPath" id="projen.javascript.YarnrcOptions.property.pnpDataPath"></a>

- *Deprecated:* - removed in Yarn v4 and newer

```typescript
public readonly pnpDataPath: string;
```

- *Type:* string

https://v3.yarnpkg.com/configuration/yarnrc#pnpDataPath.

---

##### `pnpEnableEsmLoader`<sup>Optional</sup> <a name="pnpEnableEsmLoader" id="projen.javascript.YarnrcOptions.property.pnpEnableEsmLoader"></a>

```typescript
public readonly pnpEnableEsmLoader: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#pnpEnableEsmLoader.

---

##### `pnpEnableInlining`<sup>Optional</sup> <a name="pnpEnableInlining" id="projen.javascript.YarnrcOptions.property.pnpEnableInlining"></a>

```typescript
public readonly pnpEnableInlining: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#pnpEnableInlining.

---

##### `pnpFallbackMode`<sup>Optional</sup> <a name="pnpFallbackMode" id="projen.javascript.YarnrcOptions.property.pnpFallbackMode"></a>

```typescript
public readonly pnpFallbackMode: YarnPnpFallbackMode;
```

- *Type:* <a href="#projen.javascript.YarnPnpFallbackMode">YarnPnpFallbackMode</a>

https://yarnpkg.com/configuration/yarnrc#pnpFallbackMode.

---

##### `pnpIgnorePatterns`<sup>Optional</sup> <a name="pnpIgnorePatterns" id="projen.javascript.YarnrcOptions.property.pnpIgnorePatterns"></a>

```typescript
public readonly pnpIgnorePatterns: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#pnpIgnorePatterns.

---

##### `pnpMode`<sup>Optional</sup> <a name="pnpMode" id="projen.javascript.YarnrcOptions.property.pnpMode"></a>

```typescript
public readonly pnpMode: YarnPnpMode;
```

- *Type:* <a href="#projen.javascript.YarnPnpMode">YarnPnpMode</a>

https://yarnpkg.com/configuration/yarnrc#pnpMode.

---

##### `pnpShebang`<sup>Optional</sup> <a name="pnpShebang" id="projen.javascript.YarnrcOptions.property.pnpShebang"></a>

```typescript
public readonly pnpShebang: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#pnpShebang.

---

##### `pnpUnpluggedFolder`<sup>Optional</sup> <a name="pnpUnpluggedFolder" id="projen.javascript.YarnrcOptions.property.pnpUnpluggedFolder"></a>

```typescript
public readonly pnpUnpluggedFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#pnpUnpluggedFolder.

---

##### ~~`preferAggregateCacheInfo`~~<sup>Optional</sup> <a name="preferAggregateCacheInfo" id="projen.javascript.YarnrcOptions.property.preferAggregateCacheInfo"></a>

- *Deprecated:* - removed in Yarn v4 and newer

```typescript
public readonly preferAggregateCacheInfo: boolean;
```

- *Type:* boolean

https://v3.yarnpkg.com/configuration/yarnrc#preferAggregateCacheInfo.

---

##### `preferDeferredVersions`<sup>Optional</sup> <a name="preferDeferredVersions" id="projen.javascript.YarnrcOptions.property.preferDeferredVersions"></a>

```typescript
public readonly preferDeferredVersions: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#preferDeferredVersions.

---

##### `preferInteractive`<sup>Optional</sup> <a name="preferInteractive" id="projen.javascript.YarnrcOptions.property.preferInteractive"></a>

```typescript
public readonly preferInteractive: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#preferInteractive.

---

##### `preferReuse`<sup>Optional</sup> <a name="preferReuse" id="projen.javascript.YarnrcOptions.property.preferReuse"></a>

```typescript
public readonly preferReuse: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#preferReuse.

---

##### `preferTruncatedLines`<sup>Optional</sup> <a name="preferTruncatedLines" id="projen.javascript.YarnrcOptions.property.preferTruncatedLines"></a>

```typescript
public readonly preferTruncatedLines: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#preferTruncatedLines.

---

##### `progressBarStyle`<sup>Optional</sup> <a name="progressBarStyle" id="projen.javascript.YarnrcOptions.property.progressBarStyle"></a>

```typescript
public readonly progressBarStyle: YarnProgressBarStyle;
```

- *Type:* <a href="#projen.javascript.YarnProgressBarStyle">YarnProgressBarStyle</a>

https://yarnpkg.com/configuration/yarnrc#progressBarStyle.

---

##### `rcFilename`<sup>Optional</sup> <a name="rcFilename" id="projen.javascript.YarnrcOptions.property.rcFilename"></a>

```typescript
public readonly rcFilename: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#rcFilename.

---

##### `supportedArchitectures`<sup>Optional</sup> <a name="supportedArchitectures" id="projen.javascript.YarnrcOptions.property.supportedArchitectures"></a>

```typescript
public readonly supportedArchitectures: YarnSupportedArchitectures;
```

- *Type:* <a href="#projen.javascript.YarnSupportedArchitectures">YarnSupportedArchitectures</a>

https://yarnpkg.com/configuration/yarnrc#supportedArchitectures.

---

##### `taskPoolConcurrency`<sup>Optional</sup> <a name="taskPoolConcurrency" id="projen.javascript.YarnrcOptions.property.taskPoolConcurrency"></a>

```typescript
public readonly taskPoolConcurrency: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#taskPoolConcurrency.

---

##### `telemetryInterval`<sup>Optional</sup> <a name="telemetryInterval" id="projen.javascript.YarnrcOptions.property.telemetryInterval"></a>

```typescript
public readonly telemetryInterval: number;
```

- *Type:* number

https://yarnpkg.com/configuration/yarnrc#telemetryInterval.

---

##### `telemetryUserId`<sup>Optional</sup> <a name="telemetryUserId" id="projen.javascript.YarnrcOptions.property.telemetryUserId"></a>

```typescript
public readonly telemetryUserId: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#telemetryUserId.

---

##### `tsEnableAutoTypes`<sup>Optional</sup> <a name="tsEnableAutoTypes" id="projen.javascript.YarnrcOptions.property.tsEnableAutoTypes"></a>

```typescript
public readonly tsEnableAutoTypes: boolean;
```

- *Type:* boolean

https://yarnpkg.com/configuration/yarnrc#tsEnableAutoTypes.

---

##### `unsafeHttpWhitelist`<sup>Optional</sup> <a name="unsafeHttpWhitelist" id="projen.javascript.YarnrcOptions.property.unsafeHttpWhitelist"></a>

```typescript
public readonly unsafeHttpWhitelist: string[];
```

- *Type:* string[]

https://yarnpkg.com/configuration/yarnrc#unsafeHttpWhitelist.

---

##### `virtualFolder`<sup>Optional</sup> <a name="virtualFolder" id="projen.javascript.YarnrcOptions.property.virtualFolder"></a>

```typescript
public readonly virtualFolder: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#virtualFolder.

---

##### `winLinkType`<sup>Optional</sup> <a name="winLinkType" id="projen.javascript.YarnrcOptions.property.winLinkType"></a>

```typescript
public readonly winLinkType: YarnWinLinkType;
```

- *Type:* <a href="#projen.javascript.YarnWinLinkType">YarnWinLinkType</a>

https://yarnpkg.com/configuration/yarnrc#winLinkType.

---

##### `workerPoolMode`<sup>Optional</sup> <a name="workerPoolMode" id="projen.javascript.YarnrcOptions.property.workerPoolMode"></a>

```typescript
public readonly workerPoolMode: YarnWorkerPoolMode;
```

- *Type:* <a href="#projen.javascript.YarnWorkerPoolMode">YarnWorkerPoolMode</a>

https://yarnpkg.com/configuration/yarnrc#workerPoolMode.

---

##### `yarnPath`<sup>Optional</sup> <a name="yarnPath" id="projen.javascript.YarnrcOptions.property.yarnPath"></a>

```typescript
public readonly yarnPath: string;
```

- *Type:* string

https://yarnpkg.com/configuration/yarnrc#yarnPath.

---

### YarnSupportedArchitectures <a name="YarnSupportedArchitectures" id="projen.javascript.YarnSupportedArchitectures"></a>

https://yarnpkg.com/configuration/yarnrc#supportedArchitectures.

#### Initializer <a name="Initializer" id="projen.javascript.YarnSupportedArchitectures.Initializer"></a>

```typescript
import { javascript } from 'projen'

const yarnSupportedArchitectures: javascript.YarnSupportedArchitectures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.YarnSupportedArchitectures.property.cpu">cpu</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.javascript.YarnSupportedArchitectures.property.libc">libc</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.javascript.YarnSupportedArchitectures.property.os">os</a></code> | <code>string[]</code> | *No description.* |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="projen.javascript.YarnSupportedArchitectures.property.cpu"></a>

```typescript
public readonly cpu: string[];
```

- *Type:* string[]

---

##### `libc`<sup>Optional</sup> <a name="libc" id="projen.javascript.YarnSupportedArchitectures.property.libc"></a>

```typescript
public readonly libc: string[];
```

- *Type:* string[]

---

##### `os`<sup>Optional</sup> <a name="os" id="projen.javascript.YarnSupportedArchitectures.property.os"></a>

```typescript
public readonly os: string[];
```

- *Type:* string[]

---

## Classes <a name="Classes" id="Classes"></a>

### JestReporter <a name="JestReporter" id="projen.javascript.JestReporter"></a>

#### Initializers <a name="Initializers" id="projen.javascript.JestReporter.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.JestReporter(name: string, options?: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.JestReporter.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.JestReporter.Initializer.parameter.options">options</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.javascript.JestReporter.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.JestReporter.Initializer.parameter.options"></a>

- *Type:* {[ key: string ]: any}

---





### Node18TypescriptConfigPresets <a name="Node18TypescriptConfigPresets" id="projen.javascript.Node18TypescriptConfigPresets"></a>

TypeScript config presets for Node 18.

#### Initializers <a name="Initializers" id="projen.javascript.Node18TypescriptConfigPresets.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Node18TypescriptConfigPresets()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Node18TypescriptConfigPresets.applyPreset">applyPreset</a></code> | *No description.* |

---

##### `applyPreset` <a name="applyPreset" id="projen.javascript.Node18TypescriptConfigPresets.applyPreset"></a>

```typescript
import { javascript } from 'projen'

javascript.Node18TypescriptConfigPresets.applyPreset(to: TypescriptConfig, reset?: boolean)
```

###### `to`<sup>Required</sup> <a name="to" id="projen.javascript.Node18TypescriptConfigPresets.applyPreset.parameter.to"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

---

###### `reset`<sup>Optional</sup> <a name="reset" id="projen.javascript.Node18TypescriptConfigPresets.applyPreset.parameter.reset"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Node18TypescriptConfigPresets.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | *No description.* |
| <code><a href="#projen.javascript.Node18TypescriptConfigPresets.property.mergeMethod">mergeMethod</a></code> | <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a></code> | *No description.* |

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.Node18TypescriptConfigPresets.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="projen.javascript.Node18TypescriptConfigPresets.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

---

### Node20TypescriptConfigPresets <a name="Node20TypescriptConfigPresets" id="projen.javascript.Node20TypescriptConfigPresets"></a>

TypeScript config presets for Node 20.

#### Initializers <a name="Initializers" id="projen.javascript.Node20TypescriptConfigPresets.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Node20TypescriptConfigPresets()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Node20TypescriptConfigPresets.applyPreset">applyPreset</a></code> | *No description.* |

---

##### `applyPreset` <a name="applyPreset" id="projen.javascript.Node20TypescriptConfigPresets.applyPreset"></a>

```typescript
import { javascript } from 'projen'

javascript.Node20TypescriptConfigPresets.applyPreset(to: TypescriptConfig, reset?: boolean)
```

###### `to`<sup>Required</sup> <a name="to" id="projen.javascript.Node20TypescriptConfigPresets.applyPreset.parameter.to"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

---

###### `reset`<sup>Optional</sup> <a name="reset" id="projen.javascript.Node20TypescriptConfigPresets.applyPreset.parameter.reset"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Node20TypescriptConfigPresets.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | *No description.* |
| <code><a href="#projen.javascript.Node20TypescriptConfigPresets.property.mergeMethod">mergeMethod</a></code> | <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a></code> | *No description.* |

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.Node20TypescriptConfigPresets.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="projen.javascript.Node20TypescriptConfigPresets.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

---

### ProjenClassicTypescriptConfigPresets <a name="ProjenClassicTypescriptConfigPresets" id="projen.javascript.ProjenClassicTypescriptConfigPresets"></a>

Classic Projen project TypeScript config presets.

There were previously the default Projen TypeScript configs.

#### Initializers <a name="Initializers" id="projen.javascript.ProjenClassicTypescriptConfigPresets.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.ProjenClassicTypescriptConfigPresets()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.ProjenClassicTypescriptConfigPresets.applyPreset">applyPreset</a></code> | *No description.* |

---

##### `applyPreset` <a name="applyPreset" id="projen.javascript.ProjenClassicTypescriptConfigPresets.applyPreset"></a>

```typescript
import { javascript } from 'projen'

javascript.ProjenClassicTypescriptConfigPresets.applyPreset(to: TypescriptConfig, reset?: boolean)
```

###### `to`<sup>Required</sup> <a name="to" id="projen.javascript.ProjenClassicTypescriptConfigPresets.applyPreset.parameter.to"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

---

###### `reset`<sup>Optional</sup> <a name="reset" id="projen.javascript.ProjenClassicTypescriptConfigPresets.applyPreset.parameter.reset"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.ProjenClassicTypescriptConfigPresets.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | *No description.* |
| <code><a href="#projen.javascript.ProjenClassicTypescriptConfigPresets.property.mergeMethod">mergeMethod</a></code> | <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a></code> | *No description.* |

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.ProjenClassicTypescriptConfigPresets.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="projen.javascript.ProjenClassicTypescriptConfigPresets.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

---

### StrictestTypescriptConfigPresets <a name="StrictestTypescriptConfigPresets" id="projen.javascript.StrictestTypescriptConfigPresets"></a>

Strictest TypeScript config presets.

Using these presets will enable all strict TypeScript compiler options,
which should theoretically catch the most errors.

Enabling these may require code changes to satisfy the compiler. For example, `noImplicitOverride` will require
`override` annotations on methods that override parent class methods.

#### Initializers <a name="Initializers" id="projen.javascript.StrictestTypescriptConfigPresets.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.StrictestTypescriptConfigPresets()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.StrictestTypescriptConfigPresets.applyPreset">applyPreset</a></code> | *No description.* |

---

##### `applyPreset` <a name="applyPreset" id="projen.javascript.StrictestTypescriptConfigPresets.applyPreset"></a>

```typescript
import { javascript } from 'projen'

javascript.StrictestTypescriptConfigPresets.applyPreset(to: TypescriptConfig, reset?: boolean)
```

###### `to`<sup>Required</sup> <a name="to" id="projen.javascript.StrictestTypescriptConfigPresets.applyPreset.parameter.to"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

---

###### `reset`<sup>Optional</sup> <a name="reset" id="projen.javascript.StrictestTypescriptConfigPresets.applyPreset.parameter.reset"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.StrictestTypescriptConfigPresets.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | *No description.* |
| <code><a href="#projen.javascript.StrictestTypescriptConfigPresets.property.mergeMethod">mergeMethod</a></code> | <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a></code> | *No description.* |

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.StrictestTypescriptConfigPresets.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="projen.javascript.StrictestTypescriptConfigPresets.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

---

### Transform <a name="Transform" id="projen.javascript.Transform"></a>

#### Initializers <a name="Initializers" id="projen.javascript.Transform.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.Transform(name: string, options?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.Transform.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.Transform.Initializer.parameter.options">options</a></code> | <code>any</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.javascript.Transform.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.Transform.Initializer.parameter.options"></a>

- *Type:* any

---





### TypescriptConfigExtends <a name="TypescriptConfigExtends" id="projen.javascript.TypescriptConfigExtends"></a>

Container for `TypescriptConfig` `tsconfig.json` base configuration(s). Extending from more than one base config file requires TypeScript 5.0+.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigExtends.toJSON">toJSON</a></code> | *No description.* |

---

##### `toJSON` <a name="toJSON" id="projen.javascript.TypescriptConfigExtends.toJSON"></a>

```typescript
public toJSON(): string[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigExtends.fromPaths">fromPaths</a></code> | Factory for creation from array of file paths. |
| <code><a href="#projen.javascript.TypescriptConfigExtends.fromTypescriptConfigs">fromTypescriptConfigs</a></code> | Factory for creation from array of other `TypescriptConfig` instances. |

---

##### `fromPaths` <a name="fromPaths" id="projen.javascript.TypescriptConfigExtends.fromPaths"></a>

```typescript
import { javascript } from 'projen'

javascript.TypescriptConfigExtends.fromPaths(paths: string[])
```

Factory for creation from array of file paths.

###### `paths`<sup>Required</sup> <a name="paths" id="projen.javascript.TypescriptConfigExtends.fromPaths.parameter.paths"></a>

- *Type:* string[]

Absolute or relative paths to base `tsconfig.json` files.

---

##### `fromTypescriptConfigs` <a name="fromTypescriptConfigs" id="projen.javascript.TypescriptConfigExtends.fromTypescriptConfigs"></a>

```typescript
import { javascript } from 'projen'

javascript.TypescriptConfigExtends.fromTypescriptConfigs(configs: TypescriptConfig[])
```

Factory for creation from array of other `TypescriptConfig` instances.

###### `configs`<sup>Required</sup> <a name="configs" id="projen.javascript.TypescriptConfigExtends.fromTypescriptConfigs.parameter.configs"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>[]

Base `TypescriptConfig` instances.

---



### TypescriptConfigPresets <a name="TypescriptConfigPresets" id="projen.javascript.TypescriptConfigPresets"></a>

Abstract class for TypeScript config presets.

A subclass of this class should define the `compilerOptions` and `mergeMethod` static properties.

You can use a presets subclass in one of two ways:

1. Call `applyPreset` on an instance of `TypescriptConfig` to apply the preset to the config, optionally resetting
   the config first.
2. Use the `compilerOptions` property directly, which is a `TypescriptConfig` instance

#### Initializers <a name="Initializers" id="projen.javascript.TypescriptConfigPresets.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.TypescriptConfigPresets()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigPresets.applyPreset">applyPreset</a></code> | *No description.* |

---

##### `applyPreset` <a name="applyPreset" id="projen.javascript.TypescriptConfigPresets.applyPreset"></a>

```typescript
import { javascript } from 'projen'

javascript.TypescriptConfigPresets.applyPreset(to: TypescriptConfig, reset?: boolean)
```

###### `to`<sup>Required</sup> <a name="to" id="projen.javascript.TypescriptConfigPresets.applyPreset.parameter.to"></a>

- *Type:* <a href="#projen.javascript.TypescriptConfig">TypescriptConfig</a>

---

###### `reset`<sup>Optional</sup> <a name="reset" id="projen.javascript.TypescriptConfigPresets.applyPreset.parameter.reset"></a>

- *Type:* boolean

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigPresets.property.compilerOptions">compilerOptions</a></code> | <code><a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfigPresets.property.mergeMethod">mergeMethod</a></code> | <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a></code> | *No description.* |

---

##### `compilerOptions`<sup>Required</sup> <a name="compilerOptions" id="projen.javascript.TypescriptConfigPresets.property.compilerOptions"></a>

```typescript
public readonly compilerOptions: TypeScriptCompilerOptions;
```

- *Type:* <a href="#projen.javascript.TypeScriptCompilerOptions">TypeScriptCompilerOptions</a>

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="projen.javascript.TypescriptConfigPresets.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: TypeScriptSetCompilerOptionsMergeMethod;
```

- *Type:* <a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod">TypeScriptSetCompilerOptionsMergeMethod</a>

---


### UpgradeDependenciesSchedule <a name="UpgradeDependenciesSchedule" id="projen.javascript.UpgradeDependenciesSchedule"></a>

How often to check for new versions and raise pull requests for version upgrades.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.expressions">expressions</a></code> | Create a schedule from a raw cron expression. |

---

##### `expressions` <a name="expressions" id="projen.javascript.UpgradeDependenciesSchedule.expressions"></a>

```typescript
import { javascript } from 'projen'

javascript.UpgradeDependenciesSchedule.expressions(cron: string[])
```

Create a schedule from a raw cron expression.

###### `cron`<sup>Required</sup> <a name="cron" id="projen.javascript.UpgradeDependenciesSchedule.expressions.parameter.cron"></a>

- *Type:* string[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.cron">cron</a></code> | <code>string[]</code> | *No description.* |

---

##### `cron`<sup>Required</sup> <a name="cron" id="projen.javascript.UpgradeDependenciesSchedule.property.cron"></a>

```typescript
public readonly cron: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.DAILY">DAILY</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | At 00:00. |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.MONTHLY">MONTHLY</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | At 00:00 on day-of-month 1. |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.NEVER">NEVER</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | Disables automatic upgrades. |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.WEEKDAY">WEEKDAY</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | At 00:00 on every day-of-week from Monday through Friday. |
| <code><a href="#projen.javascript.UpgradeDependenciesSchedule.property.WEEKLY">WEEKLY</a></code> | <code><a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a></code> | At 00:00 on Monday. |

---

##### `DAILY`<sup>Required</sup> <a name="DAILY" id="projen.javascript.UpgradeDependenciesSchedule.property.DAILY"></a>

```typescript
public readonly DAILY: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>

At 00:00.

---

##### `MONTHLY`<sup>Required</sup> <a name="MONTHLY" id="projen.javascript.UpgradeDependenciesSchedule.property.MONTHLY"></a>

```typescript
public readonly MONTHLY: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>

At 00:00 on day-of-month 1.

---

##### `NEVER`<sup>Required</sup> <a name="NEVER" id="projen.javascript.UpgradeDependenciesSchedule.property.NEVER"></a>

```typescript
public readonly NEVER: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>

Disables automatic upgrades.

---

##### `WEEKDAY`<sup>Required</sup> <a name="WEEKDAY" id="projen.javascript.UpgradeDependenciesSchedule.property.WEEKDAY"></a>

```typescript
public readonly WEEKDAY: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>

At 00:00 on every day-of-week from Monday through Friday.

---

##### `WEEKLY`<sup>Required</sup> <a name="WEEKLY" id="projen.javascript.UpgradeDependenciesSchedule.property.WEEKLY"></a>

```typescript
public readonly WEEKLY: UpgradeDependenciesSchedule;
```

- *Type:* <a href="#projen.javascript.UpgradeDependenciesSchedule">UpgradeDependenciesSchedule</a>

At 00:00 on Monday.

---

### WatchPlugin <a name="WatchPlugin" id="projen.javascript.WatchPlugin"></a>

#### Initializers <a name="Initializers" id="projen.javascript.WatchPlugin.Initializer"></a>

```typescript
import { javascript } from 'projen'

new javascript.WatchPlugin(name: string, options?: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.javascript.WatchPlugin.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.javascript.WatchPlugin.Initializer.parameter.options">options</a></code> | <code>any</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.javascript.WatchPlugin.Initializer.parameter.name"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.javascript.WatchPlugin.Initializer.parameter.options"></a>

- *Type:* any

---






## Enums <a name="Enums" id="Enums"></a>

### ArrowParens <a name="ArrowParens" id="projen.javascript.ArrowParens"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.ArrowParens.ALWAYS">ALWAYS</a></code> | Always include parens. |
| <code><a href="#projen.javascript.ArrowParens.AVOID">AVOID</a></code> | Omit parens when possible. |

---

##### `ALWAYS` <a name="ALWAYS" id="projen.javascript.ArrowParens.ALWAYS"></a>

Always include parens.

Example: `(x) => x`

---


##### `AVOID` <a name="AVOID" id="projen.javascript.ArrowParens.AVOID"></a>

Omit parens when possible.

Example: `x => x`

---


### AutoRelease <a name="AutoRelease" id="projen.javascript.AutoRelease"></a>

Automatic bump modes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.AutoRelease.EVERY_COMMIT">EVERY_COMMIT</a></code> | Automatically bump & release a new version for every commit to "main". |
| <code><a href="#projen.javascript.AutoRelease.DAILY">DAILY</a></code> | Automatically bump & release a new version on a daily basis. |

---

##### `EVERY_COMMIT` <a name="EVERY_COMMIT" id="projen.javascript.AutoRelease.EVERY_COMMIT"></a>

Automatically bump & release a new version for every commit to "main".

---


##### `DAILY` <a name="DAILY" id="projen.javascript.AutoRelease.DAILY"></a>

Automatically bump & release a new version on a daily basis.

---


### BundleLogLevel <a name="BundleLogLevel" id="projen.javascript.BundleLogLevel"></a>

Log levels for esbuild and package managers' install commands.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.BundleLogLevel.VERBOSE">VERBOSE</a></code> | Show everything. |
| <code><a href="#projen.javascript.BundleLogLevel.DEBUG">DEBUG</a></code> | Show everything from info and some additional messages for debugging. |
| <code><a href="#projen.javascript.BundleLogLevel.INFO">INFO</a></code> | Show warnings, errors, and an output file summary. |
| <code><a href="#projen.javascript.BundleLogLevel.WARNING">WARNING</a></code> | Show warnings and errors. |
| <code><a href="#projen.javascript.BundleLogLevel.ERROR">ERROR</a></code> | Show errors only. |
| <code><a href="#projen.javascript.BundleLogLevel.SILENT">SILENT</a></code> | Show nothing. |

---

##### `VERBOSE` <a name="VERBOSE" id="projen.javascript.BundleLogLevel.VERBOSE"></a>

Show everything.

---


##### `DEBUG` <a name="DEBUG" id="projen.javascript.BundleLogLevel.DEBUG"></a>

Show everything from info and some additional messages for debugging.

---


##### `INFO` <a name="INFO" id="projen.javascript.BundleLogLevel.INFO"></a>

Show warnings, errors, and an output file summary.

---


##### `WARNING` <a name="WARNING" id="projen.javascript.BundleLogLevel.WARNING"></a>

Show warnings and errors.

---


##### `ERROR` <a name="ERROR" id="projen.javascript.BundleLogLevel.ERROR"></a>

Show errors only.

---


##### `SILENT` <a name="SILENT" id="projen.javascript.BundleLogLevel.SILENT"></a>

Show nothing.

---


### Charset <a name="Charset" id="projen.javascript.Charset"></a>

Charset for esbuild's output.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.Charset.ASCII">ASCII</a></code> | ASCII. |
| <code><a href="#projen.javascript.Charset.UTF8">UTF8</a></code> | UTF-8. |

---

##### `ASCII` <a name="ASCII" id="projen.javascript.Charset.ASCII"></a>

ASCII.

Any non-ASCII characters are escaped using backslash escape sequences

---


##### `UTF8` <a name="UTF8" id="projen.javascript.Charset.UTF8"></a>

UTF-8.

Keep original characters without using escape sequences

---


### CodeArtifactAuthProvider <a name="CodeArtifactAuthProvider" id="projen.javascript.CodeArtifactAuthProvider"></a>

Options for authorizing requests to a AWS CodeArtifact npm repository.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR">ACCESS_AND_SECRET_KEY_PAIR</a></code> | Fixed credentials provided via Github secrets. |
| <code><a href="#projen.javascript.CodeArtifactAuthProvider.GITHUB_OIDC">GITHUB_OIDC</a></code> | Ephemeral credentials provided via Github's OIDC integration with an IAM role. |

---

##### `ACCESS_AND_SECRET_KEY_PAIR` <a name="ACCESS_AND_SECRET_KEY_PAIR" id="projen.javascript.CodeArtifactAuthProvider.ACCESS_AND_SECRET_KEY_PAIR"></a>

Fixed credentials provided via Github secrets.

---


##### `GITHUB_OIDC` <a name="GITHUB_OIDC" id="projen.javascript.CodeArtifactAuthProvider.GITHUB_OIDC"></a>

Ephemeral credentials provided via Github's OIDC integration with an IAM role.

See:
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services

---


### EmbeddedLanguageFormatting <a name="EmbeddedLanguageFormatting" id="projen.javascript.EmbeddedLanguageFormatting"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.EmbeddedLanguageFormatting.AUTO">AUTO</a></code> | Format embedded code if Prettier can automatically identify it. |
| <code><a href="#projen.javascript.EmbeddedLanguageFormatting.OFF">OFF</a></code> | Never automatically format embedded code. |

---

##### `AUTO` <a name="AUTO" id="projen.javascript.EmbeddedLanguageFormatting.AUTO"></a>

Format embedded code if Prettier can automatically identify it.

---


##### `OFF` <a name="OFF" id="projen.javascript.EmbeddedLanguageFormatting.OFF"></a>

Never automatically format embedded code.

---


### EndOfLine <a name="EndOfLine" id="projen.javascript.EndOfLine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.EndOfLine.AUTO">AUTO</a></code> | Maintain existing (mixed values within one file are normalised by looking at what's used after the first line). |
| <code><a href="#projen.javascript.EndOfLine.CR">CR</a></code> | Carriage Return character only (\r), used very rarely. |
| <code><a href="#projen.javascript.EndOfLine.CRLF">CRLF</a></code> | Carriage Return + Line Feed characters (\r\n), common on Windows. |
| <code><a href="#projen.javascript.EndOfLine.LF">LF</a></code> | Line Feed only (\n), common on Linux and macOS as well as inside git repos. |

---

##### `AUTO` <a name="AUTO" id="projen.javascript.EndOfLine.AUTO"></a>

Maintain existing (mixed values within one file are normalised by looking at what's used after the first line).

---


##### `CR` <a name="CR" id="projen.javascript.EndOfLine.CR"></a>

Carriage Return character only (\r), used very rarely.

---


##### `CRLF` <a name="CRLF" id="projen.javascript.EndOfLine.CRLF"></a>

Carriage Return + Line Feed characters (\r\n), common on Windows.

---


##### `LF` <a name="LF" id="projen.javascript.EndOfLine.LF"></a>

Line Feed only (\n), common on Linux and macOS as well as inside git repos.

---


### HTMLWhitespaceSensitivity <a name="HTMLWhitespaceSensitivity" id="projen.javascript.HTMLWhitespaceSensitivity"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.HTMLWhitespaceSensitivity.CSS">CSS</a></code> | Respect the default value of CSS display property. |
| <code><a href="#projen.javascript.HTMLWhitespaceSensitivity.IGNORE">IGNORE</a></code> | Whitespaces are considered insignificant. |
| <code><a href="#projen.javascript.HTMLWhitespaceSensitivity.STRICT">STRICT</a></code> | Whitespaces are considered significant. |

---

##### `CSS` <a name="CSS" id="projen.javascript.HTMLWhitespaceSensitivity.CSS"></a>

Respect the default value of CSS display property.

---


##### `IGNORE` <a name="IGNORE" id="projen.javascript.HTMLWhitespaceSensitivity.IGNORE"></a>

Whitespaces are considered insignificant.

---


##### `STRICT` <a name="STRICT" id="projen.javascript.HTMLWhitespaceSensitivity.STRICT"></a>

Whitespaces are considered significant.

---


### NodePackageManager <a name="NodePackageManager" id="projen.javascript.NodePackageManager"></a>

The node package manager to use.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NodePackageManager.YARN">YARN</a></code> | Use `yarn` as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.YARN2">YARN2</a></code> | Use `yarn` versions >= 2 as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.YARN_CLASSIC">YARN_CLASSIC</a></code> | Use `yarn` 1.x as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.YARN_BERRY">YARN_BERRY</a></code> | Use `yarn` versions >= 2 as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.NPM">NPM</a></code> | Use `npm` as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.PNPM">PNPM</a></code> | Use `pnpm` as the package manager. |
| <code><a href="#projen.javascript.NodePackageManager.BUN">BUN</a></code> | Use `bun` as the package manager. |

---

##### ~~`YARN`~~ <a name="YARN" id="projen.javascript.NodePackageManager.YARN"></a>

- *Deprecated:* For `yarn` 1.x use `YARN_CLASSIC` for `yarn` >= 2 use `YARN_BERRY`. Currently, `NodePackageManager.YARN` means `YARN_CLASSIC`. In the future, we might repurpose it to mean `YARN_BERRY`.

Use `yarn` as the package manager.

---


##### ~~`YARN2`~~ <a name="YARN2" id="projen.javascript.NodePackageManager.YARN2"></a>

- *Deprecated:* use YARN_BERRY instead

Use `yarn` versions >= 2 as the package manager.

---


##### `YARN_CLASSIC` <a name="YARN_CLASSIC" id="projen.javascript.NodePackageManager.YARN_CLASSIC"></a>

Use `yarn` 1.x as the package manager.

---


##### `YARN_BERRY` <a name="YARN_BERRY" id="projen.javascript.NodePackageManager.YARN_BERRY"></a>

Use `yarn` versions >= 2 as the package manager.

---


##### `NPM` <a name="NPM" id="projen.javascript.NodePackageManager.NPM"></a>

Use `npm` as the package manager.

---


##### `PNPM` <a name="PNPM" id="projen.javascript.NodePackageManager.PNPM"></a>

Use `pnpm` as the package manager.

---


##### `BUN` <a name="BUN" id="projen.javascript.NodePackageManager.BUN"></a>

Use `bun` as the package manager.

---


### NpmAccess <a name="NpmAccess" id="projen.javascript.NpmAccess"></a>

Npm package access level.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.NpmAccess.PUBLIC">PUBLIC</a></code> | Package is public. |
| <code><a href="#projen.javascript.NpmAccess.RESTRICTED">RESTRICTED</a></code> | Package can only be accessed with credentials. |

---

##### `PUBLIC` <a name="PUBLIC" id="projen.javascript.NpmAccess.PUBLIC"></a>

Package is public.

---


##### `RESTRICTED` <a name="RESTRICTED" id="projen.javascript.NpmAccess.RESTRICTED"></a>

Package can only be accessed with credentials.

---


### ProseWrap <a name="ProseWrap" id="projen.javascript.ProseWrap"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.ProseWrap.ALWAYS">ALWAYS</a></code> | Wrap prose if it exceeds the print width. |
| <code><a href="#projen.javascript.ProseWrap.NEVER">NEVER</a></code> | Do not wrap prose. |
| <code><a href="#projen.javascript.ProseWrap.PRESERVE">PRESERVE</a></code> | Wrap prose as-is. |

---

##### `ALWAYS` <a name="ALWAYS" id="projen.javascript.ProseWrap.ALWAYS"></a>

Wrap prose if it exceeds the print width.

---


##### `NEVER` <a name="NEVER" id="projen.javascript.ProseWrap.NEVER"></a>

Do not wrap prose.

---


##### `PRESERVE` <a name="PRESERVE" id="projen.javascript.ProseWrap.PRESERVE"></a>

Wrap prose as-is.

---


### QuoteProps <a name="QuoteProps" id="projen.javascript.QuoteProps"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.QuoteProps.ASNEEDED">ASNEEDED</a></code> | Only add quotes around object properties where required. |
| <code><a href="#projen.javascript.QuoteProps.CONSISTENT">CONSISTENT</a></code> | If at least one property in an object requires quotes, quote all properties. |
| <code><a href="#projen.javascript.QuoteProps.PRESERVE">PRESERVE</a></code> | Respect the input use of quotes in object properties. |

---

##### `ASNEEDED` <a name="ASNEEDED" id="projen.javascript.QuoteProps.ASNEEDED"></a>

Only add quotes around object properties where required.

---


##### `CONSISTENT` <a name="CONSISTENT" id="projen.javascript.QuoteProps.CONSISTENT"></a>

If at least one property in an object requires quotes, quote all properties.

---


##### `PRESERVE` <a name="PRESERVE" id="projen.javascript.QuoteProps.PRESERVE"></a>

Respect the input use of quotes in object properties.

---


### RunBundleTask <a name="RunBundleTask" id="projen.javascript.RunBundleTask"></a>

Options for BundlerOptions.runBundleTask.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.RunBundleTask.MANUAL">MANUAL</a></code> | Don't bundle automatically as part of the build. |
| <code><a href="#projen.javascript.RunBundleTask.PRE_COMPILE">PRE_COMPILE</a></code> | Bundle automatically before compilation. |
| <code><a href="#projen.javascript.RunBundleTask.POST_COMPILE">POST_COMPILE</a></code> | Bundle automatically after compilation. This is useful if you want to bundle the compiled results. |

---

##### `MANUAL` <a name="MANUAL" id="projen.javascript.RunBundleTask.MANUAL"></a>

Don't bundle automatically as part of the build.

---


##### `PRE_COMPILE` <a name="PRE_COMPILE" id="projen.javascript.RunBundleTask.PRE_COMPILE"></a>

Bundle automatically before compilation.

---


##### `POST_COMPILE` <a name="POST_COMPILE" id="projen.javascript.RunBundleTask.POST_COMPILE"></a>

Bundle automatically after compilation. This is useful if you want to bundle the compiled results.

Thus will run compilation tasks (using tsc, etc.) before running file
through bundling step.

This is only required unless you are using new experimental features that
are not supported by `esbuild` but are supported by typescript's `tsc`
compiler. One example of such feature is `emitDecoratorMetadata`.

```typescript
// In a TypeScript project with output configured
// to go to the "lib" directory:
const project = new TypeScriptProject({
  name: "test",
  defaultReleaseBranch: "main",
  tsconfig: {
    compilerOptions: {
      outDir: "lib",
    },
  },
  bundlerOptions: {
    // ensure we compile with `tsc` before bundling
    runBundleTask: RunBundleTask.POST_COMPILE,
  },
});

// Tell the bundler to bundle the compiled results (from the "lib" directory)
project.bundler.addBundle("./lib/index.js", {
  platform: "node",
  target: "node18",
  sourcemap: false,
  format: "esm",
});
```

---


### SourceMapMode <a name="SourceMapMode" id="projen.javascript.SourceMapMode"></a>

SourceMap mode for esbuild.

> [https://esbuild.github.io/api/#sourcemap](https://esbuild.github.io/api/#sourcemap)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.SourceMapMode.DEFAULT">DEFAULT</a></code> | Default sourceMap mode - will generate a .js.map file alongside any generated .js file and add a special //# sourceMappingURL= comment to the bottom of the .js file pointing to the .js.map file. |
| <code><a href="#projen.javascript.SourceMapMode.EXTERNAL">EXTERNAL</a></code> | External sourceMap mode - If you want to omit the special //# sourceMappingURL= comment from the generated .js file but you still want to generate the .js.map files. |
| <code><a href="#projen.javascript.SourceMapMode.INLINE">INLINE</a></code> | Inline sourceMap mode - If you want to insert the entire source map into the .js file instead of generating a separate .js.map file. |
| <code><a href="#projen.javascript.SourceMapMode.BOTH">BOTH</a></code> | Both sourceMap mode - If you want to have the effect of both inline and external simultaneously. |

---

##### `DEFAULT` <a name="DEFAULT" id="projen.javascript.SourceMapMode.DEFAULT"></a>

Default sourceMap mode - will generate a .js.map file alongside any generated .js file and add a special //# sourceMappingURL= comment to the bottom of the .js file pointing to the .js.map file.

---


##### `EXTERNAL` <a name="EXTERNAL" id="projen.javascript.SourceMapMode.EXTERNAL"></a>

External sourceMap mode - If you want to omit the special //# sourceMappingURL= comment from the generated .js file but you still want to generate the .js.map files.

---


##### `INLINE` <a name="INLINE" id="projen.javascript.SourceMapMode.INLINE"></a>

Inline sourceMap mode - If you want to insert the entire source map into the .js file instead of generating a separate .js.map file.

---


##### `BOTH` <a name="BOTH" id="projen.javascript.SourceMapMode.BOTH"></a>

Both sourceMap mode - If you want to have the effect of both inline and external simultaneously.

---


### TrailingComma <a name="TrailingComma" id="projen.javascript.TrailingComma"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TrailingComma.ALL">ALL</a></code> | Trailing commas wherever possible (including function arguments). |
| <code><a href="#projen.javascript.TrailingComma.ES5">ES5</a></code> | Trailing commas where valid in ES5 (objects, arrays, etc.). |
| <code><a href="#projen.javascript.TrailingComma.NONE">NONE</a></code> | No trailing commas. |

---

##### `ALL` <a name="ALL" id="projen.javascript.TrailingComma.ALL"></a>

Trailing commas wherever possible (including function arguments).

---


##### `ES5` <a name="ES5" id="projen.javascript.TrailingComma.ES5"></a>

Trailing commas where valid in ES5 (objects, arrays, etc.).

---


##### `NONE` <a name="NONE" id="projen.javascript.TrailingComma.NONE"></a>

No trailing commas.

---


### TypescriptConfigPresetsOptions <a name="TypescriptConfigPresetsOptions" id="projen.javascript.TypescriptConfigPresetsOptions"></a>

Known TypeScript config presets.

Use {@link getTypescriptConfigPresets} to get a presets object from this enum values.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypescriptConfigPresetsOptions.PROJEN_CLASSIC">PROJEN_CLASSIC</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfigPresetsOptions.NODE18">NODE18</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfigPresetsOptions.NODE20">NODE20</a></code> | *No description.* |
| <code><a href="#projen.javascript.TypescriptConfigPresetsOptions.STRICTEST">STRICTEST</a></code> | *No description.* |

---

##### `PROJEN_CLASSIC` <a name="PROJEN_CLASSIC" id="projen.javascript.TypescriptConfigPresetsOptions.PROJEN_CLASSIC"></a>

---


##### `NODE18` <a name="NODE18" id="projen.javascript.TypescriptConfigPresetsOptions.NODE18"></a>

---


##### `NODE20` <a name="NODE20" id="projen.javascript.TypescriptConfigPresetsOptions.NODE20"></a>

---


##### `STRICTEST` <a name="STRICTEST" id="projen.javascript.TypescriptConfigPresetsOptions.STRICTEST"></a>

---


### TypeScriptImportsNotUsedAsValues <a name="TypeScriptImportsNotUsedAsValues" id="projen.javascript.TypeScriptImportsNotUsedAsValues"></a>

This flag controls how `import` works, there are 3 different options.

> [https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypeScriptImportsNotUsedAsValues.REMOVE">REMOVE</a></code> | The default behavior of dropping `import` statements which only reference types. |
| <code><a href="#projen.javascript.TypeScriptImportsNotUsedAsValues.PRESERVE">PRESERVE</a></code> | Preserves all `import` statements whose values or types are never used. |
| <code><a href="#projen.javascript.TypeScriptImportsNotUsedAsValues.ERROR">ERROR</a></code> | This preserves all imports (the same as the preserve option), but will error when a value import is only used as a type. |

---

##### `REMOVE` <a name="REMOVE" id="projen.javascript.TypeScriptImportsNotUsedAsValues.REMOVE"></a>

The default behavior of dropping `import` statements which only reference types.

---


##### `PRESERVE` <a name="PRESERVE" id="projen.javascript.TypeScriptImportsNotUsedAsValues.PRESERVE"></a>

Preserves all `import` statements whose values or types are never used.

This can cause imports/side-effects to be preserved.

---


##### `ERROR` <a name="ERROR" id="projen.javascript.TypeScriptImportsNotUsedAsValues.ERROR"></a>

This preserves all imports (the same as the preserve option), but will error when a value import is only used as a type.

This might be useful if you want to ensure no values are being accidentally imported, but still make side-effect imports explicit.

---


### TypeScriptJsxMode <a name="TypeScriptJsxMode" id="projen.javascript.TypeScriptJsxMode"></a>

Determines how JSX should get transformed into valid JavaScript.

> [https://www.typescriptlang.org/docs/handbook/jsx.html](https://www.typescriptlang.org/docs/handbook/jsx.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypeScriptJsxMode.PRESERVE">PRESERVE</a></code> | Keeps the JSX as part of the output to be further consumed by another transform step (e.g. Babel). |
| <code><a href="#projen.javascript.TypeScriptJsxMode.REACT">REACT</a></code> | Converts JSX syntax into React.createElement, does not need to go through a JSX transformation before use, and the output will have a .js file extension. |
| <code><a href="#projen.javascript.TypeScriptJsxMode.REACT_NATIVE">REACT_NATIVE</a></code> | Keeps all JSX like 'preserve' mode, but output will have a .js extension. |
| <code><a href="#projen.javascript.TypeScriptJsxMode.REACT_JSX">REACT_JSX</a></code> | Passes `key` separately from props and always passes `children` as props (since React 17). |
| <code><a href="#projen.javascript.TypeScriptJsxMode.REACT_JSXDEV">REACT_JSXDEV</a></code> | Same as `REACT_JSX` with additional debug data. |

---

##### `PRESERVE` <a name="PRESERVE" id="projen.javascript.TypeScriptJsxMode.PRESERVE"></a>

Keeps the JSX as part of the output to be further consumed by another transform step (e.g. Babel).

---


##### `REACT` <a name="REACT" id="projen.javascript.TypeScriptJsxMode.REACT"></a>

Converts JSX syntax into React.createElement, does not need to go through a JSX transformation before use, and the output will have a .js file extension.

---


##### `REACT_NATIVE` <a name="REACT_NATIVE" id="projen.javascript.TypeScriptJsxMode.REACT_NATIVE"></a>

Keeps all JSX like 'preserve' mode, but output will have a .js extension.

---


##### `REACT_JSX` <a name="REACT_JSX" id="projen.javascript.TypeScriptJsxMode.REACT_JSX"></a>

Passes `key` separately from props and always passes `children` as props (since React 17).

> [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#react-17-jsx-factories](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#react-17-jsx-factories)

---


##### `REACT_JSXDEV` <a name="REACT_JSXDEV" id="projen.javascript.TypeScriptJsxMode.REACT_JSXDEV"></a>

Same as `REACT_JSX` with additional debug data.

---


### TypeScriptModuleDetection <a name="TypeScriptModuleDetection" id="projen.javascript.TypeScriptModuleDetection"></a>

This setting controls how TypeScript determines whether a file is a script or a module.

> [https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript](https://www.typescriptlang.org/docs/handbook/modules/theory.html#scripts-and-modules-in-javascript)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypeScriptModuleDetection.AUTO">AUTO</a></code> | TypeScript will not only look for import and export statements, but it will also check whether the "type" field in a package.json is set to "module" when running with module: nodenext or node16, and check whether the current file is a JSX file when running under jsx: react-jsx. |
| <code><a href="#projen.javascript.TypeScriptModuleDetection.LEGACY">LEGACY</a></code> | The same behavior as 4.6 and prior, usings import and export statements to determine whether a file is a module. |
| <code><a href="#projen.javascript.TypeScriptModuleDetection.FORCE">FORCE</a></code> | Ensures that every non-declaration file is treated as a module. |

---

##### `AUTO` <a name="AUTO" id="projen.javascript.TypeScriptModuleDetection.AUTO"></a>

TypeScript will not only look for import and export statements, but it will also check whether the "type" field in a package.json is set to "module" when running with module: nodenext or node16, and check whether the current file is a JSX file when running under jsx: react-jsx.

> [https://www.typescriptlang.org/tsconfig/#moduleDetection](https://www.typescriptlang.org/tsconfig/#moduleDetection)

---


##### `LEGACY` <a name="LEGACY" id="projen.javascript.TypeScriptModuleDetection.LEGACY"></a>

The same behavior as 4.6 and prior, usings import and export statements to determine whether a file is a module.

> [https://www.typescriptlang.org/tsconfig/#moduleDetection](https://www.typescriptlang.org/tsconfig/#moduleDetection)

---


##### `FORCE` <a name="FORCE" id="projen.javascript.TypeScriptModuleDetection.FORCE"></a>

Ensures that every non-declaration file is treated as a module.

> [https://www.typescriptlang.org/tsconfig/#moduleDetection](https://www.typescriptlang.org/tsconfig/#moduleDetection)

---


### TypeScriptModuleResolution <a name="TypeScriptModuleResolution" id="projen.javascript.TypeScriptModuleResolution"></a>

Determines how modules get resolved.

> [https://www.typescriptlang.org/docs/handbook/module-resolution.html](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypeScriptModuleResolution.CLASSIC">CLASSIC</a></code> | TypeScript's former default resolution strategy. |
| <code><a href="#projen.javascript.TypeScriptModuleResolution.NODE">NODE</a></code> | Resolution strategy which attempts to mimic the Node.js module resolution strategy at runtime. |
| <code><a href="#projen.javascript.TypeScriptModuleResolution.NODE16">NODE16</a></code> | Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards. |
| <code><a href="#projen.javascript.TypeScriptModuleResolution.NODE_NEXT">NODE_NEXT</a></code> | Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards. |
| <code><a href="#projen.javascript.TypeScriptModuleResolution.BUNDLER">BUNDLER</a></code> | Resolution strategy which attempts to mimic resolution patterns of modern bundlers; |

---

##### `CLASSIC` <a name="CLASSIC" id="projen.javascript.TypeScriptModuleResolution.CLASSIC"></a>

TypeScript's former default resolution strategy.

> [https://www.typescriptlang.org/docs/handbook/module-resolution.html#classic](https://www.typescriptlang.org/docs/handbook/module-resolution.html#classic)

---


##### `NODE` <a name="NODE" id="projen.javascript.TypeScriptModuleResolution.NODE"></a>

Resolution strategy which attempts to mimic the Node.js module resolution strategy at runtime.

> [https://www.typescriptlang.org/docs/handbook/module-resolution.html#node](https://www.typescriptlang.org/docs/handbook/module-resolution.html#node)

---


##### `NODE16` <a name="NODE16" id="projen.javascript.TypeScriptModuleResolution.NODE16"></a>

Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards.

> [https://www.typescriptlang.org/tsconfig#moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)

---


##### `NODE_NEXT` <a name="NODE_NEXT" id="projen.javascript.TypeScriptModuleResolution.NODE_NEXT"></a>

Node.js’ ECMAScript Module Support from TypeScript 4.7 onwards.

> [https://www.typescriptlang.org/tsconfig#moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)

---


##### `BUNDLER` <a name="BUNDLER" id="projen.javascript.TypeScriptModuleResolution.BUNDLER"></a>

Resolution strategy which attempts to mimic resolution patterns of modern bundlers;

from TypeScript 5.0 onwards.

> [https://www.typescriptlang.org/tsconfig#moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)

---


### TypeScriptSetCompilerOptionsMergeMethod <a name="TypeScriptSetCompilerOptionsMergeMethod" id="projen.javascript.TypeScriptSetCompilerOptionsMergeMethod"></a>

Determines how TypeScript should merge `compilerOptions` such as in {@link TypescriptConfig.setCompilerOptions}.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.MERGE_ALL">MERGE_ALL</a></code> | Merge **all** `compilerOptions` with the existing options, including `rootDir` and `outdir`. |
| <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.MERGE">MERGE</a></code> | Merge "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir`. |
| <code><a href="#projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.OVERRIDE">OVERRIDE</a></code> | Override "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir` This will *reset* `compilerOptions` to the given value *except* `rootDir` and `outDir`. |

---

##### `MERGE_ALL` <a name="MERGE_ALL" id="projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.MERGE_ALL"></a>

Merge **all** `compilerOptions` with the existing options, including `rootDir` and `outdir`.

---


##### `MERGE` <a name="MERGE" id="projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.MERGE"></a>

Merge "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir`.

---


##### `OVERRIDE` <a name="OVERRIDE" id="projen.javascript.TypeScriptSetCompilerOptionsMergeMethod.OVERRIDE"></a>

Override "safe" `compilerOptions` that are not managed by a project, such as `rootDir` and `outdir` This will *reset* `compilerOptions` to the given value *except* `rootDir` and `outDir`.

---


### UpdateSnapshot <a name="UpdateSnapshot" id="projen.javascript.UpdateSnapshot"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.UpdateSnapshot.ALWAYS">ALWAYS</a></code> | Always update snapshots in "test" task. |
| <code><a href="#projen.javascript.UpdateSnapshot.NEVER">NEVER</a></code> | Never update snapshots in "test" task and create a separate "test:update" task. |

---

##### `ALWAYS` <a name="ALWAYS" id="projen.javascript.UpdateSnapshot.ALWAYS"></a>

Always update snapshots in "test" task.

---


##### `NEVER` <a name="NEVER" id="projen.javascript.UpdateSnapshot.NEVER"></a>

Never update snapshots in "test" task and create a separate "test:update" task.

---


### YarnCacheMigrationMode <a name="YarnCacheMigrationMode" id="projen.javascript.YarnCacheMigrationMode"></a>

https://yarnpkg.com/configuration/yarnrc#cacheMigrationMode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnCacheMigrationMode.REQUIRED_ONLY">REQUIRED_ONLY</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnCacheMigrationMode.MATCH_SPEC">MATCH_SPEC</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnCacheMigrationMode.ALWAYS">ALWAYS</a></code> | *No description.* |

---

##### `REQUIRED_ONLY` <a name="REQUIRED_ONLY" id="projen.javascript.YarnCacheMigrationMode.REQUIRED_ONLY"></a>

---


##### `MATCH_SPEC` <a name="MATCH_SPEC" id="projen.javascript.YarnCacheMigrationMode.MATCH_SPEC"></a>

---


##### `ALWAYS` <a name="ALWAYS" id="projen.javascript.YarnCacheMigrationMode.ALWAYS"></a>

---


### YarnChecksumBehavior <a name="YarnChecksumBehavior" id="projen.javascript.YarnChecksumBehavior"></a>

https://yarnpkg.com/configuration/yarnrc#checksumBehavior.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnChecksumBehavior.THROW">THROW</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnChecksumBehavior.UPDATE">UPDATE</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnChecksumBehavior.RESET">RESET</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnChecksumBehavior.IGNORE">IGNORE</a></code> | *No description.* |

---

##### `THROW` <a name="THROW" id="projen.javascript.YarnChecksumBehavior.THROW"></a>

---


##### `UPDATE` <a name="UPDATE" id="projen.javascript.YarnChecksumBehavior.UPDATE"></a>

---


##### `RESET` <a name="RESET" id="projen.javascript.YarnChecksumBehavior.RESET"></a>

---


##### `IGNORE` <a name="IGNORE" id="projen.javascript.YarnChecksumBehavior.IGNORE"></a>

---


### YarnDefaultSemverRangePrefix <a name="YarnDefaultSemverRangePrefix" id="projen.javascript.YarnDefaultSemverRangePrefix"></a>

https://yarnpkg.com/configuration/yarnrc#defaultSemverRangePrefix.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnDefaultSemverRangePrefix.CARET">CARET</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnDefaultSemverRangePrefix.TILDE">TILDE</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnDefaultSemverRangePrefix.EMPTY_STRING">EMPTY_STRING</a></code> | *No description.* |

---

##### `CARET` <a name="CARET" id="projen.javascript.YarnDefaultSemverRangePrefix.CARET"></a>

---


##### `TILDE` <a name="TILDE" id="projen.javascript.YarnDefaultSemverRangePrefix.TILDE"></a>

---


##### `EMPTY_STRING` <a name="EMPTY_STRING" id="projen.javascript.YarnDefaultSemverRangePrefix.EMPTY_STRING"></a>

---


### YarnLogFilterLevel <a name="YarnLogFilterLevel" id="projen.javascript.YarnLogFilterLevel"></a>

https://v3.yarnpkg.com/configuration/yarnrc#logFilters.0.level.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnLogFilterLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilterLevel.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilterLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnLogFilterLevel.DISCARD">DISCARD</a></code> | *No description.* |

---

##### `INFO` <a name="INFO" id="projen.javascript.YarnLogFilterLevel.INFO"></a>

---


##### `WARNING` <a name="WARNING" id="projen.javascript.YarnLogFilterLevel.WARNING"></a>

---


##### `ERROR` <a name="ERROR" id="projen.javascript.YarnLogFilterLevel.ERROR"></a>

---


##### `DISCARD` <a name="DISCARD" id="projen.javascript.YarnLogFilterLevel.DISCARD"></a>

---


### YarnNmHoistingLimit <a name="YarnNmHoistingLimit" id="projen.javascript.YarnNmHoistingLimit"></a>

https://yarnpkg.com/configuration/yarnrc#nmHoistingLimits.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnNmHoistingLimit.DEPENDENCIES">DEPENDENCIES</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNmHoistingLimit.NONE">NONE</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNmHoistingLimit.WORKSPACES">WORKSPACES</a></code> | *No description.* |

---

##### `DEPENDENCIES` <a name="DEPENDENCIES" id="projen.javascript.YarnNmHoistingLimit.DEPENDENCIES"></a>

---


##### `NONE` <a name="NONE" id="projen.javascript.YarnNmHoistingLimit.NONE"></a>

---


##### `WORKSPACES` <a name="WORKSPACES" id="projen.javascript.YarnNmHoistingLimit.WORKSPACES"></a>

---


### YarnNmMode <a name="YarnNmMode" id="projen.javascript.YarnNmMode"></a>

https://yarnpkg.com/configuration/yarnrc#nmMode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnNmMode.CLASSIC">CLASSIC</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNmMode.HARDLINKS_LOCAL">HARDLINKS_LOCAL</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNmMode.HARDLINKS_GLOBAL">HARDLINKS_GLOBAL</a></code> | *No description.* |

---

##### `CLASSIC` <a name="CLASSIC" id="projen.javascript.YarnNmMode.CLASSIC"></a>

---


##### `HARDLINKS_LOCAL` <a name="HARDLINKS_LOCAL" id="projen.javascript.YarnNmMode.HARDLINKS_LOCAL"></a>

---


##### `HARDLINKS_GLOBAL` <a name="HARDLINKS_GLOBAL" id="projen.javascript.YarnNmMode.HARDLINKS_GLOBAL"></a>

---


### YarnNodeLinker <a name="YarnNodeLinker" id="projen.javascript.YarnNodeLinker"></a>

https://yarnpkg.com/configuration/yarnrc#nodeLinker.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnNodeLinker.PNP">PNP</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNodeLinker.PNPM">PNPM</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNodeLinker.NODE_MODULES">NODE_MODULES</a></code> | *No description.* |

---

##### `PNP` <a name="PNP" id="projen.javascript.YarnNodeLinker.PNP"></a>

---


##### `PNPM` <a name="PNPM" id="projen.javascript.YarnNodeLinker.PNPM"></a>

---


##### `NODE_MODULES` <a name="NODE_MODULES" id="projen.javascript.YarnNodeLinker.NODE_MODULES"></a>

---


### YarnNpmPublishAccess <a name="YarnNpmPublishAccess" id="projen.javascript.YarnNpmPublishAccess"></a>

https://yarnpkg.com/configuration/yarnrc#npmPublishAccess.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnNpmPublishAccess.PUBLIC">PUBLIC</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnNpmPublishAccess.RESTRICTED">RESTRICTED</a></code> | *No description.* |

---

##### `PUBLIC` <a name="PUBLIC" id="projen.javascript.YarnNpmPublishAccess.PUBLIC"></a>

---


##### `RESTRICTED` <a name="RESTRICTED" id="projen.javascript.YarnNpmPublishAccess.RESTRICTED"></a>

---


### YarnPnpFallbackMode <a name="YarnPnpFallbackMode" id="projen.javascript.YarnPnpFallbackMode"></a>

https://yarnpkg.com/configuration/yarnrc#pnpFallbackMode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnPnpFallbackMode.NONE">NONE</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnPnpFallbackMode.DEPENDENCIES_ONLY">DEPENDENCIES_ONLY</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnPnpFallbackMode.ALL">ALL</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="projen.javascript.YarnPnpFallbackMode.NONE"></a>

---


##### `DEPENDENCIES_ONLY` <a name="DEPENDENCIES_ONLY" id="projen.javascript.YarnPnpFallbackMode.DEPENDENCIES_ONLY"></a>

---


##### `ALL` <a name="ALL" id="projen.javascript.YarnPnpFallbackMode.ALL"></a>

---


### YarnPnpMode <a name="YarnPnpMode" id="projen.javascript.YarnPnpMode"></a>

https://yarnpkg.com/configuration/yarnrc#pnpMode.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnPnpMode.STRICT">STRICT</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnPnpMode.LOOSE">LOOSE</a></code> | *No description.* |

---

##### `STRICT` <a name="STRICT" id="projen.javascript.YarnPnpMode.STRICT"></a>

---


##### `LOOSE` <a name="LOOSE" id="projen.javascript.YarnPnpMode.LOOSE"></a>

---


### YarnProgressBarStyle <a name="YarnProgressBarStyle" id="projen.javascript.YarnProgressBarStyle"></a>

https://yarnpkg.com/configuration/yarnrc#progressBarStyle.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnProgressBarStyle.PATRICK">PATRICK</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnProgressBarStyle.SIMBA">SIMBA</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnProgressBarStyle.JACK">JACK</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnProgressBarStyle.HOGSFATHER">HOGSFATHER</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnProgressBarStyle.DEFAULT">DEFAULT</a></code> | *No description.* |

---

##### `PATRICK` <a name="PATRICK" id="projen.javascript.YarnProgressBarStyle.PATRICK"></a>

---


##### `SIMBA` <a name="SIMBA" id="projen.javascript.YarnProgressBarStyle.SIMBA"></a>

---


##### `JACK` <a name="JACK" id="projen.javascript.YarnProgressBarStyle.JACK"></a>

---


##### `HOGSFATHER` <a name="HOGSFATHER" id="projen.javascript.YarnProgressBarStyle.HOGSFATHER"></a>

---


##### `DEFAULT` <a name="DEFAULT" id="projen.javascript.YarnProgressBarStyle.DEFAULT"></a>

---


### YarnWinLinkType <a name="YarnWinLinkType" id="projen.javascript.YarnWinLinkType"></a>

https://yarnpkg.com/configuration/yarnrc#winLinkType.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnWinLinkType.JUNCTIONS">JUNCTIONS</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnWinLinkType.SYMLINKS">SYMLINKS</a></code> | *No description.* |

---

##### `JUNCTIONS` <a name="JUNCTIONS" id="projen.javascript.YarnWinLinkType.JUNCTIONS"></a>

---


##### `SYMLINKS` <a name="SYMLINKS" id="projen.javascript.YarnWinLinkType.SYMLINKS"></a>

---


### YarnWorkerPoolMode <a name="YarnWorkerPoolMode" id="projen.javascript.YarnWorkerPoolMode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.javascript.YarnWorkerPoolMode.ASYNC">ASYNC</a></code> | *No description.* |
| <code><a href="#projen.javascript.YarnWorkerPoolMode.WORKERS">WORKERS</a></code> | *No description.* |

---

##### `ASYNC` <a name="ASYNC" id="projen.javascript.YarnWorkerPoolMode.ASYNC"></a>

---


##### `WORKERS` <a name="WORKERS" id="projen.javascript.YarnWorkerPoolMode.WORKERS"></a>

---

