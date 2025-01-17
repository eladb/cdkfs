# API Reference <a name="API Reference" id="api-reference"></a>

## Submodules <a name="Submodules" id="submodules"></a>

The following submodules are available:

- [awscdk](./awscdk.md)
- [build](./build.md)
- [cdk](./cdk.md)
- [cdk8s](./cdk8s.md)
- [cdktf](./cdktf.md)
- [circleci](./circleci.md)
- [github](./github.md)
- [github.workflows](./github.workflows.md)
- [gitlab](./gitlab.md)
- [java](./java.md)
- [javascript](./javascript.md)
- [python](./python.md)
- [release](./release.md)
- [typescript](./typescript.md)
- [vscode](./vscode.md)
- [web](./web.md)

## Constructs <a name="Constructs" id="Constructs"></a>

### Component <a name="Component" id="projen.Component"></a>

Represents a project component.

#### Initializers <a name="Initializers" id="projen.Component.Initializer"></a>

```typescript
import { Component } from 'projen'

new Component(scope: IConstruct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Component.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.Component.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.Component.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.Component.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Component.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Component.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Component.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Component.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.Component.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Component.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Component.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Component.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Component.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Component.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Component.isConstruct"></a>

```typescript
import { Component } from 'projen'

Component.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Component.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Component.isComponent"></a>

```typescript
import { Component } from 'projen'

Component.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Component.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Component.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Component.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Component.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Component.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---


### Dependencies <a name="Dependencies" id="projen.Dependencies"></a>

The `Dependencies` component is responsible to track the list of dependencies a project has, and then used by project types as the model for rendering project-specific dependency manifests such as the dependencies section `package.json` files.

To add a dependency you can use a project-type specific API such as
`nodeProject.addDeps()` or use the generic API of `project.deps`:

#### Initializers <a name="Initializers" id="projen.Dependencies.Initializer"></a>

```typescript
import { Dependencies } from 'projen'

new Dependencies(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Dependencies.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | The parent project. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Dependencies.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

The parent project.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Dependencies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Dependencies.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Dependencies.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Dependencies.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.Dependencies.addDependency">addDependency</a></code> | Adds a dependency to this project. |
| <code><a href="#projen.Dependencies.getDependency">getDependency</a></code> | Returns a dependency by name. |
| <code><a href="#projen.Dependencies.isDependencySatisfied">isDependencySatisfied</a></code> | Checks if an existing dependency satisfies a dependency requirement. |
| <code><a href="#projen.Dependencies.removeDependency">removeDependency</a></code> | Removes a dependency. |
| <code><a href="#projen.Dependencies.tryGetDependency">tryGetDependency</a></code> | Returns a dependency by name. |

---

##### `toString` <a name="toString" id="projen.Dependencies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Dependencies.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Dependencies.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Dependencies.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addDependency` <a name="addDependency" id="projen.Dependencies.addDependency"></a>

```typescript
public addDependency(spec: string, type: DependencyType, metadata?: {[ key: string ]: any}): Dependency
```

Adds a dependency to this project.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.Dependencies.addDependency.parameter.spec"></a>

- *Type:* string

The dependency spec in the format `MODULE[@VERSION]` where `MODULE` is the package-manager-specific module name and `VERSION` is an optional semantic version requirement (e.g. `^3.4.0`).

---

###### `type`<sup>Required</sup> <a name="type" id="projen.Dependencies.addDependency.parameter.type"></a>

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

The type of the dependency.

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="projen.Dependencies.addDependency.parameter.metadata"></a>

- *Type:* {[ key: string ]: any}

---

##### `getDependency` <a name="getDependency" id="projen.Dependencies.getDependency"></a>

```typescript
public getDependency(name: string, type?: DependencyType): Dependency
```

Returns a dependency by name.

Fails if there is no dependency defined by that name or if `type` is not
provided and there is more then one dependency type for this dependency.

###### `name`<sup>Required</sup> <a name="name" id="projen.Dependencies.getDependency.parameter.name"></a>

- *Type:* string

The name of the dependency.

---

###### `type`<sup>Optional</sup> <a name="type" id="projen.Dependencies.getDependency.parameter.type"></a>

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

The dependency type.

If this dependency is defined only for a
single type, this argument can be omitted.

---

##### `isDependencySatisfied` <a name="isDependencySatisfied" id="projen.Dependencies.isDependencySatisfied"></a>

```typescript
public isDependencySatisfied(name: string, type: DependencyType, expectedRange: string): boolean
```

Checks if an existing dependency satisfies a dependency requirement.

###### `name`<sup>Required</sup> <a name="name" id="projen.Dependencies.isDependencySatisfied.parameter.name"></a>

- *Type:* string

The name of the dependency to check (without the version).

---

###### `type`<sup>Required</sup> <a name="type" id="projen.Dependencies.isDependencySatisfied.parameter.type"></a>

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

The dependency type.

---

###### `expectedRange`<sup>Required</sup> <a name="expectedRange" id="projen.Dependencies.isDependencySatisfied.parameter.expectedRange"></a>

- *Type:* string

The version constraint to check (e.g. `^3.4.0`). The constraint of the dependency must be a subset of the expected range to satisfy the requirements.

---

##### `removeDependency` <a name="removeDependency" id="projen.Dependencies.removeDependency"></a>

```typescript
public removeDependency(name: string, type?: DependencyType): void
```

Removes a dependency.

###### `name`<sup>Required</sup> <a name="name" id="projen.Dependencies.removeDependency.parameter.name"></a>

- *Type:* string

The name of the module to remove (without the version).

---

###### `type`<sup>Optional</sup> <a name="type" id="projen.Dependencies.removeDependency.parameter.type"></a>

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

The dependency type.

This is only required if there the
dependency is defined for multiple types.

---

##### `tryGetDependency` <a name="tryGetDependency" id="projen.Dependencies.tryGetDependency"></a>

```typescript
public tryGetDependency(name: string, type?: DependencyType): Dependency
```

Returns a dependency by name.

Returns `undefined` if there is no dependency defined by that name or if
`type` is not provided and there is more then one dependency type for this
dependency.

###### `name`<sup>Required</sup> <a name="name" id="projen.Dependencies.tryGetDependency.parameter.name"></a>

- *Type:* string

The name of the dependency.

---

###### `type`<sup>Optional</sup> <a name="type" id="projen.Dependencies.tryGetDependency.parameter.type"></a>

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

The dependency type.

If this dependency is defined only for a
single type, this argument can be omitted.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Dependencies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Dependencies.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.Dependencies.parseDependency">parseDependency</a></code> | Returns the coordinates of a dependency spec. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Dependencies.isConstruct"></a>

```typescript
import { Dependencies } from 'projen'

Dependencies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Dependencies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Dependencies.isComponent"></a>

```typescript
import { Dependencies } from 'projen'

Dependencies.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Dependencies.isComponent.parameter.x"></a>

- *Type:* any

---

##### `parseDependency` <a name="parseDependency" id="projen.Dependencies.parseDependency"></a>

```typescript
import { Dependencies } from 'projen'

Dependencies.parseDependency(spec: string)
```

Returns the coordinates of a dependency spec.

Given `foo@^3.4.0` returns `{ name: "foo", version: "^3.4.0" }`.
Given `bar@npm:@bar/legacy` returns `{ name: "bar", version: "npm:@bar/legacy" }`.

###### `spec`<sup>Required</sup> <a name="spec" id="projen.Dependencies.parseDependency.parameter.spec"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Dependencies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Dependencies.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Dependencies.property.all">all</a></code> | <code><a href="#projen.Dependency">Dependency</a>[]</code> | A copy of all dependencies recorded for this project. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Dependencies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Dependencies.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `all`<sup>Required</sup> <a name="all" id="projen.Dependencies.property.all"></a>

```typescript
public readonly all: Dependency[];
```

- *Type:* <a href="#projen.Dependency">Dependency</a>[]

A copy of all dependencies recorded for this project.

The list is sorted by type->name->version

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Dependencies.property.MANIFEST_FILE">MANIFEST_FILE</a></code> | <code>string</code> | The project-relative path of the deps manifest file. |

---

##### `MANIFEST_FILE`<sup>Required</sup> <a name="MANIFEST_FILE" id="projen.Dependencies.property.MANIFEST_FILE"></a>

```typescript
public readonly MANIFEST_FILE: string;
```

- *Type:* string

The project-relative path of the deps manifest file.

---

### DockerCompose <a name="DockerCompose" id="projen.DockerCompose"></a>

Create a docker-compose YAML file.

#### Initializers <a name="Initializers" id="projen.DockerCompose.Initializer"></a>

```typescript
import { DockerCompose } from 'projen'

new DockerCompose(project: Project, props?: DockerComposeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerCompose.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.DockerCompose.Initializer.parameter.props">props</a></code> | <code><a href="#projen.DockerComposeProps">DockerComposeProps</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.DockerCompose.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `props`<sup>Optional</sup> <a name="props" id="projen.DockerCompose.Initializer.parameter.props"></a>

- *Type:* <a href="#projen.DockerComposeProps">DockerComposeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DockerCompose.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.DockerCompose.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.DockerCompose.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.DockerCompose.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.DockerCompose.addService">addService</a></code> | Add a service to the docker-compose file. |

---

##### `toString` <a name="toString" id="projen.DockerCompose.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.DockerCompose.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.DockerCompose.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.DockerCompose.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addService` <a name="addService" id="projen.DockerCompose.addService"></a>

```typescript
public addService(serviceName: string, description: DockerComposeServiceDescription): DockerComposeService
```

Add a service to the docker-compose file.

###### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.DockerCompose.addService.parameter.serviceName"></a>

- *Type:* string

name of the service.

---

###### `description`<sup>Required</sup> <a name="description" id="projen.DockerCompose.addService.parameter.description"></a>

- *Type:* <a href="#projen.DockerComposeServiceDescription">DockerComposeServiceDescription</a>

a service description.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DockerCompose.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.DockerCompose.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.DockerCompose.bindVolume">bindVolume</a></code> | Create a bind volume that binds a host path to the target path in the container. |
| <code><a href="#projen.DockerCompose.namedVolume">namedVolume</a></code> | Create a named volume and mount it to the target path. |
| <code><a href="#projen.DockerCompose.network">network</a></code> | Create a named network and mount it to the target path. |
| <code><a href="#projen.DockerCompose.portMapping">portMapping</a></code> | Create a port mapping. |
| <code><a href="#projen.DockerCompose.serviceName">serviceName</a></code> | Depends on a service name. |

---

##### `isConstruct` <a name="isConstruct" id="projen.DockerCompose.isConstruct"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.DockerCompose.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.DockerCompose.isComponent"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.DockerCompose.isComponent.parameter.x"></a>

- *Type:* any

---

##### `bindVolume` <a name="bindVolume" id="projen.DockerCompose.bindVolume"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.bindVolume(sourcePath: string, targetPath: string)
```

Create a bind volume that binds a host path to the target path in the container.

###### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="projen.DockerCompose.bindVolume.parameter.sourcePath"></a>

- *Type:* string

Host path name.

---

###### `targetPath`<sup>Required</sup> <a name="targetPath" id="projen.DockerCompose.bindVolume.parameter.targetPath"></a>

- *Type:* string

Target path name.

---

##### `namedVolume` <a name="namedVolume" id="projen.DockerCompose.namedVolume"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.namedVolume(volumeName: string, targetPath: string, options?: DockerComposeVolumeConfig)
```

Create a named volume and mount it to the target path.

If you use this
named volume in several services, the volume will be shared. In this
case, the volume configuration of the first-provided options are used.

###### `volumeName`<sup>Required</sup> <a name="volumeName" id="projen.DockerCompose.namedVolume.parameter.volumeName"></a>

- *Type:* string

Name of the volume.

---

###### `targetPath`<sup>Required</sup> <a name="targetPath" id="projen.DockerCompose.namedVolume.parameter.targetPath"></a>

- *Type:* string

Target path.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.DockerCompose.namedVolume.parameter.options"></a>

- *Type:* <a href="#projen.DockerComposeVolumeConfig">DockerComposeVolumeConfig</a>

volume configuration (default: docker compose defaults).

---

##### `network` <a name="network" id="projen.DockerCompose.network"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.network(networkName: string, options?: DockerComposeNetworkConfig)
```

Create a named network and mount it to the target path.

If you use this
named network in several services, the network will be shared. In this
case, the network configuration of the first-provided options are used.

###### `networkName`<sup>Required</sup> <a name="networkName" id="projen.DockerCompose.network.parameter.networkName"></a>

- *Type:* string

Name of the network.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.DockerCompose.network.parameter.options"></a>

- *Type:* <a href="#projen.DockerComposeNetworkConfig">DockerComposeNetworkConfig</a>

network configuration.

---

##### `portMapping` <a name="portMapping" id="projen.DockerCompose.portMapping"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.portMapping(publishedPort: number, targetPort: number, options?: DockerComposePortMappingOptions)
```

Create a port mapping.

###### `publishedPort`<sup>Required</sup> <a name="publishedPort" id="projen.DockerCompose.portMapping.parameter.publishedPort"></a>

- *Type:* number

Published port number.

---

###### `targetPort`<sup>Required</sup> <a name="targetPort" id="projen.DockerCompose.portMapping.parameter.targetPort"></a>

- *Type:* number

Container's port number.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.DockerCompose.portMapping.parameter.options"></a>

- *Type:* <a href="#projen.DockerComposePortMappingOptions">DockerComposePortMappingOptions</a>

Port mapping options.

---

##### `serviceName` <a name="serviceName" id="projen.DockerCompose.serviceName"></a>

```typescript
import { DockerCompose } from 'projen'

DockerCompose.serviceName(serviceName: string)
```

Depends on a service name.

###### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.DockerCompose.serviceName.parameter.serviceName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerCompose.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.DockerCompose.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.DockerCompose.property.file">file</a></code> | <code><a href="#projen.YamlFile">YamlFile</a></code> | The Docker Compose file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.DockerCompose.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.DockerCompose.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `file`<sup>Required</sup> <a name="file" id="projen.DockerCompose.property.file"></a>

```typescript
public readonly file: YamlFile;
```

- *Type:* <a href="#projen.YamlFile">YamlFile</a>

The Docker Compose file.

---


### FileBase <a name="FileBase" id="projen.FileBase"></a>

#### Initializers <a name="Initializers" id="projen.FileBase.Initializer"></a>

```typescript
import { FileBase } from 'projen'

new FileBase(scope: IConstruct, filePath: string, options?: FileBaseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.FileBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.FileBase.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.FileBase.Initializer.parameter.options">options</a></code> | <code><a href="#projen.FileBaseOptions">FileBaseOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.FileBase.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.FileBase.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.FileBase.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.FileBaseOptions">FileBaseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.FileBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.FileBase.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.FileBase.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.FileBase.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |

---

##### `toString` <a name="toString" id="projen.FileBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.FileBase.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.FileBase.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.FileBase.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.FileBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.FileBase.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.FileBase.isConstruct"></a>

```typescript
import { FileBase } from 'projen'

FileBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.FileBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.FileBase.isComponent"></a>

```typescript
import { FileBase } from 'projen'

FileBase.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.FileBase.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.FileBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.FileBase.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.FileBase.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.FileBase.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.FileBase.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.FileBase.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.FileBase.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.FileBase.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.FileBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.FileBase.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.FileBase.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.FileBase.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.FileBase.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.FileBase.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.FileBase.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.FileBase.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### GitAttributesFile <a name="GitAttributesFile" id="projen.GitAttributesFile"></a>

Assign attributes to file names in a git repository.

> [https://git-scm.com/docs/gitattributes](https://git-scm.com/docs/gitattributes)

#### Initializers <a name="Initializers" id="projen.GitAttributesFile.Initializer"></a>

```typescript
import { GitAttributesFile } from 'projen'

new GitAttributesFile(scope: IConstruct, options?: GitAttributesFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitAttributesFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.GitAttributesFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.GitAttributesFileOptions">GitAttributesFileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.GitAttributesFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.GitAttributesFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.GitAttributesFileOptions">GitAttributesFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitAttributesFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.GitAttributesFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.GitAttributesFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.GitAttributesFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.GitAttributesFile.addAttributes">addAttributes</a></code> | Maps a set of attributes to a set of files. |
| <code><a href="#projen.GitAttributesFile.addLfsPattern">addLfsPattern</a></code> | Add attributes necessary to mark these files as stored in LFS. |

---

##### `toString` <a name="toString" id="projen.GitAttributesFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.GitAttributesFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.GitAttributesFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.GitAttributesFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addAttributes` <a name="addAttributes" id="projen.GitAttributesFile.addAttributes"></a>

```typescript
public addAttributes(glob: string, attributes: ...string[]): void
```

Maps a set of attributes to a set of files.

###### `glob`<sup>Required</sup> <a name="glob" id="projen.GitAttributesFile.addAttributes.parameter.glob"></a>

- *Type:* string

Glob pattern to match files in the repo.

---

###### `attributes`<sup>Required</sup> <a name="attributes" id="projen.GitAttributesFile.addAttributes.parameter.attributes"></a>

- *Type:* ...string[]

Attributes to assign to these files.

---

##### `addLfsPattern` <a name="addLfsPattern" id="projen.GitAttributesFile.addLfsPattern"></a>

```typescript
public addLfsPattern(glob: string): void
```

Add attributes necessary to mark these files as stored in LFS.

###### `glob`<sup>Required</sup> <a name="glob" id="projen.GitAttributesFile.addLfsPattern.parameter.glob"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitAttributesFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.GitAttributesFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.GitAttributesFile.isConstruct"></a>

```typescript
import { GitAttributesFile } from 'projen'

GitAttributesFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.GitAttributesFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.GitAttributesFile.isComponent"></a>

```typescript
import { GitAttributesFile } from 'projen'

GitAttributesFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.GitAttributesFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitAttributesFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.GitAttributesFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.GitAttributesFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.GitAttributesFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.GitAttributesFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.GitAttributesFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.GitAttributesFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.GitAttributesFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.GitAttributesFile.property.endOfLine">endOfLine</a></code> | <code><a href="#projen.EndOfLine">EndOfLine</a></code> | The default end of line character for text files. |
| <code><a href="#projen.GitAttributesFile.property.hasLfsPatterns">hasLfsPatterns</a></code> | <code>boolean</code> | Whether the current gitattributes file has any LFS patterns. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.GitAttributesFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.GitAttributesFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.GitAttributesFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.GitAttributesFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.GitAttributesFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.GitAttributesFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.GitAttributesFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.GitAttributesFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `endOfLine`<sup>Required</sup> <a name="endOfLine" id="projen.GitAttributesFile.property.endOfLine"></a>

```typescript
public readonly endOfLine: EndOfLine;
```

- *Type:* <a href="#projen.EndOfLine">EndOfLine</a>

The default end of line character for text files.

---

##### `hasLfsPatterns`<sup>Required</sup> <a name="hasLfsPatterns" id="projen.GitAttributesFile.property.hasLfsPatterns"></a>

```typescript
public readonly hasLfsPatterns: boolean;
```

- *Type:* boolean

Whether the current gitattributes file has any LFS patterns.

---


### Gitpod <a name="Gitpod" id="projen.Gitpod"></a>

- *Implements:* <a href="#projen.IDevEnvironment">IDevEnvironment</a>

The Gitpod component which emits .gitpod.yml.

#### Initializers <a name="Initializers" id="projen.Gitpod.Initializer"></a>

```typescript
import { Gitpod } from 'projen'

new Gitpod(project: Project, options?: GitpodOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Gitpod.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Gitpod.Initializer.parameter.options">options</a></code> | <code><a href="#projen.GitpodOptions">GitpodOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Gitpod.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.Gitpod.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.GitpodOptions">GitpodOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Gitpod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Gitpod.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Gitpod.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Gitpod.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.Gitpod.addCustomTask">addCustomTask</a></code> | Add a task with more granular options. |
| <code><a href="#projen.Gitpod.addDockerImage">addDockerImage</a></code> | Add a custom Docker image or Dockerfile for the container. |
| <code><a href="#projen.Gitpod.addPorts">addPorts</a></code> | Add ports that should be exposed (forwarded) from the container. |
| <code><a href="#projen.Gitpod.addPrebuilds">addPrebuilds</a></code> | Add a prebuilds configuration for the Gitpod App. |
| <code><a href="#projen.Gitpod.addTasks">addTasks</a></code> | Add tasks to run when gitpod starts. |
| <code><a href="#projen.Gitpod.addVscodeExtensions">addVscodeExtensions</a></code> | Add a list of VSCode extensions that should be automatically installed in the container. |

---

##### `toString` <a name="toString" id="projen.Gitpod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Gitpod.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Gitpod.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Gitpod.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addCustomTask` <a name="addCustomTask" id="projen.Gitpod.addCustomTask"></a>

```typescript
public addCustomTask(options: GitpodTask): void
```

Add a task with more granular options.

By default, all tasks will be run in parallel. To run tasks in sequence,
create a new `Task` and set the other tasks as subtasks.

###### `options`<sup>Required</sup> <a name="options" id="projen.Gitpod.addCustomTask.parameter.options"></a>

- *Type:* <a href="#projen.GitpodTask">GitpodTask</a>

The task parameters.

---

##### `addDockerImage` <a name="addDockerImage" id="projen.Gitpod.addDockerImage"></a>

```typescript
public addDockerImage(image: DevEnvironmentDockerImage): void
```

Add a custom Docker image or Dockerfile for the container.

###### `image`<sup>Required</sup> <a name="image" id="projen.Gitpod.addDockerImage.parameter.image"></a>

- *Type:* <a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a>

The Docker image.

---

##### `addPorts` <a name="addPorts" id="projen.Gitpod.addPorts"></a>

```typescript
public addPorts(ports: ...string[]): void
```

Add ports that should be exposed (forwarded) from the container.

###### `ports`<sup>Required</sup> <a name="ports" id="projen.Gitpod.addPorts.parameter.ports"></a>

- *Type:* ...string[]

The new ports.

---

##### `addPrebuilds` <a name="addPrebuilds" id="projen.Gitpod.addPrebuilds"></a>

```typescript
public addPrebuilds(config: GitpodPrebuilds): void
```

Add a prebuilds configuration for the Gitpod App.

###### `config`<sup>Required</sup> <a name="config" id="projen.Gitpod.addPrebuilds.parameter.config"></a>

- *Type:* <a href="#projen.GitpodPrebuilds">GitpodPrebuilds</a>

The configuration.

---

##### `addTasks` <a name="addTasks" id="projen.Gitpod.addTasks"></a>

```typescript
public addTasks(tasks: ...Task[]): void
```

Add tasks to run when gitpod starts.

By default, all tasks will be run in parallel. To run tasks in sequence,
create a new `Task` and specify the other tasks as subtasks.

###### `tasks`<sup>Required</sup> <a name="tasks" id="projen.Gitpod.addTasks.parameter.tasks"></a>

- *Type:* ...<a href="#projen.Task">Task</a>[]

The new tasks.

---

##### `addVscodeExtensions` <a name="addVscodeExtensions" id="projen.Gitpod.addVscodeExtensions"></a>

```typescript
public addVscodeExtensions(extensions: ...string[]): void
```

Add a list of VSCode extensions that should be automatically installed in the container.

These must be in the format defined in the Open VSX registry.

> [https://www.gitpod.io/docs/vscode-extensions/](https://www.gitpod.io/docs/vscode-extensions/)

*Example*

```typescript
'scala-lang.scala@0.3.9:O5XmjwY5Gz+0oDZAmqneJw=='
```


###### `extensions`<sup>Required</sup> <a name="extensions" id="projen.Gitpod.addVscodeExtensions.parameter.extensions"></a>

- *Type:* ...string[]

The extension IDs.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Gitpod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Gitpod.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Gitpod.isConstruct"></a>

```typescript
import { Gitpod } from 'projen'

Gitpod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Gitpod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Gitpod.isComponent"></a>

```typescript
import { Gitpod } from 'projen'

Gitpod.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Gitpod.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Gitpod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Gitpod.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Gitpod.property.config">config</a></code> | <code>any</code> | Direct access to the gitpod configuration (escape hatch). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Gitpod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Gitpod.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `config`<sup>Required</sup> <a name="config" id="projen.Gitpod.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

Direct access to the gitpod configuration (escape hatch).

---


### IgnoreFile <a name="IgnoreFile" id="projen.IgnoreFile"></a>

#### Initializers <a name="Initializers" id="projen.IgnoreFile.Initializer"></a>

```typescript
import { IgnoreFile } from 'projen'

new IgnoreFile(project: Project, filePath: string, options?: IgnoreFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IgnoreFile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | The project to tie this file to. |
| <code><a href="#projen.IgnoreFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | - the relative path in the project to put the file. |
| <code><a href="#projen.IgnoreFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.IgnoreFileOptions">IgnoreFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.IgnoreFile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

The project to tie this file to.

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.IgnoreFile.Initializer.parameter.filePath"></a>

- *Type:* string

the relative path in the project to put the file.

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.IgnoreFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.IgnoreFileOptions">IgnoreFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IgnoreFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.IgnoreFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.IgnoreFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.IgnoreFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.IgnoreFile.addPatterns">addPatterns</a></code> | Add ignore patterns. |
| <code><a href="#projen.IgnoreFile.exclude">exclude</a></code> | Ignore the files that match these patterns. |
| <code><a href="#projen.IgnoreFile.include">include</a></code> | Always include the specified file patterns. |
| <code><a href="#projen.IgnoreFile.removePatterns">removePatterns</a></code> | Removes patterns previously added from the ignore file. |

---

##### `toString` <a name="toString" id="projen.IgnoreFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.IgnoreFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.IgnoreFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.IgnoreFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addPatterns` <a name="addPatterns" id="projen.IgnoreFile.addPatterns"></a>

```typescript
public addPatterns(patterns: ...string[]): void
```

Add ignore patterns.

Files that match this pattern will be ignored. If the
pattern starts with a negation mark `!`, files that match will _not_ be
ignored.

Comment lines (start with `#`) and blank lines ("") are filtered by default
but can be included using options specified when instantiating the component.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.IgnoreFile.addPatterns.parameter.patterns"></a>

- *Type:* ...string[]

Ignore patterns.

---

##### `exclude` <a name="exclude" id="projen.IgnoreFile.exclude"></a>

```typescript
public exclude(patterns: ...string[]): void
```

Ignore the files that match these patterns.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.IgnoreFile.exclude.parameter.patterns"></a>

- *Type:* ...string[]

The patterns to match.

---

##### `include` <a name="include" id="projen.IgnoreFile.include"></a>

```typescript
public include(patterns: ...string[]): void
```

Always include the specified file patterns.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.IgnoreFile.include.parameter.patterns"></a>

- *Type:* ...string[]

Patterns to include in git commits.

---

##### `removePatterns` <a name="removePatterns" id="projen.IgnoreFile.removePatterns"></a>

```typescript
public removePatterns(patterns: ...string[]): void
```

Removes patterns previously added from the ignore file.

If `addPattern()` is called after this, the pattern will be added again.

###### `patterns`<sup>Required</sup> <a name="patterns" id="projen.IgnoreFile.removePatterns.parameter.patterns"></a>

- *Type:* ...string[]

patters to remove.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IgnoreFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.IgnoreFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.IgnoreFile.isConstruct"></a>

```typescript
import { IgnoreFile } from 'projen'

IgnoreFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.IgnoreFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.IgnoreFile.isComponent"></a>

```typescript
import { IgnoreFile } from 'projen'

IgnoreFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.IgnoreFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IgnoreFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.IgnoreFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.IgnoreFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.IgnoreFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.IgnoreFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.IgnoreFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.IgnoreFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.IgnoreFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.IgnoreFile.property.filterCommentLines">filterCommentLines</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.IgnoreFile.property.filterEmptyLines">filterEmptyLines</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.IgnoreFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.IgnoreFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.IgnoreFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.IgnoreFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.IgnoreFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.IgnoreFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.IgnoreFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.IgnoreFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `filterCommentLines`<sup>Required</sup> <a name="filterCommentLines" id="projen.IgnoreFile.property.filterCommentLines"></a>

```typescript
public readonly filterCommentLines: boolean;
```

- *Type:* boolean

---

##### `filterEmptyLines`<sup>Required</sup> <a name="filterEmptyLines" id="projen.IgnoreFile.property.filterEmptyLines"></a>

```typescript
public readonly filterEmptyLines: boolean;
```

- *Type:* boolean

---


### IniFile <a name="IniFile" id="projen.IniFile"></a>

Represents an INI file.

#### Initializers <a name="Initializers" id="projen.IniFile.Initializer"></a>

```typescript
import { IniFile } from 'projen'

new IniFile(project: Project, filePath: string, options: IniFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IniFile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.IniFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.IniFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.IniFileOptions">IniFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.IniFile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.IniFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="projen.IniFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.IniFileOptions">IniFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IniFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.IniFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.IniFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.IniFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.IniFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.IniFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.IniFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.IniFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.IniFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.IniFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.IniFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.IniFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.IniFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.IniFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.IniFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.IniFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.IniFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.IniFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.IniFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.IniFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.IniFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.IniFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IniFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.IniFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.IniFile.isConstruct"></a>

```typescript
import { IniFile } from 'projen'

IniFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.IniFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.IniFile.isComponent"></a>

```typescript
import { IniFile } from 'projen'

IniFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.IniFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IniFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.IniFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.IniFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.IniFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.IniFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.IniFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.IniFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.IniFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.IniFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.IniFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.IniFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.IniFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.IniFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.IniFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.IniFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.IniFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.IniFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.IniFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---


### JsonFile <a name="JsonFile" id="projen.JsonFile"></a>

Represents a JSON file.

#### Initializers <a name="Initializers" id="projen.JsonFile.Initializer"></a>

```typescript
import { JsonFile } from 'projen'

new JsonFile(scope: IConstruct, filePath: string, options: JsonFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.JsonFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.JsonFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.JsonFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.JsonFileOptions">JsonFileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.JsonFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.JsonFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="projen.JsonFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.JsonFileOptions">JsonFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.JsonFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.JsonFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.JsonFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.JsonFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.JsonFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.JsonFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.JsonFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.JsonFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.JsonFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.JsonFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.JsonFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.JsonFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.JsonFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.JsonFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.JsonFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.JsonFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.JsonFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.JsonFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.JsonFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.JsonFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.JsonFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.JsonFile.isConstruct"></a>

```typescript
import { JsonFile } from 'projen'

JsonFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.JsonFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.JsonFile.isComponent"></a>

```typescript
import { JsonFile } from 'projen'

JsonFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.JsonFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.JsonFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.JsonFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.JsonFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.JsonFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.JsonFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.JsonFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.JsonFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.JsonFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.JsonFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#projen.JsonFile.property.supportsComments">supportsComments</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.JsonFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.JsonFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.JsonFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.JsonFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.JsonFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.JsonFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.JsonFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.JsonFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.JsonFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `supportsComments`<sup>Required</sup> <a name="supportsComments" id="projen.JsonFile.property.supportsComments"></a>

```typescript
public readonly supportsComments: boolean;
```

- *Type:* boolean

---


### License <a name="License" id="projen.License"></a>

#### Initializers <a name="Initializers" id="projen.License.Initializer"></a>

```typescript
import { License } from 'projen'

new License(project: Project, options: LicenseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.License.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.License.Initializer.parameter.options">options</a></code> | <code><a href="#projen.LicenseOptions">LicenseOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.License.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `options`<sup>Required</sup> <a name="options" id="projen.License.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.LicenseOptions">LicenseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.License.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.License.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.License.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.License.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |

---

##### `toString` <a name="toString" id="projen.License.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.License.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.License.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.License.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.License.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.License.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.License.isConstruct"></a>

```typescript
import { License } from 'projen'

License.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.License.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.License.isComponent"></a>

```typescript
import { License } from 'projen'

License.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.License.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.License.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.License.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.License.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.License.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.License.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.License.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.License.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.License.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.License.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.License.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.License.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.License.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.License.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.License.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.License.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.License.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### Logger <a name="Logger" id="projen.Logger"></a>

Project-level logging utilities.

#### Initializers <a name="Initializers" id="projen.Logger.Initializer"></a>

```typescript
import { Logger } from 'projen'

new Logger(scope: IConstruct, options?: LoggerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Logger.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.Logger.Initializer.parameter.options">options</a></code> | <code><a href="#projen.LoggerOptions">LoggerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.Logger.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.Logger.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.LoggerOptions">LoggerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Logger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Logger.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Logger.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Logger.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.Logger.debug">debug</a></code> | Log a message to stderr with DEBUG severity. |
| <code><a href="#projen.Logger.error">error</a></code> | Log a message to stderr with ERROR severity. |
| <code><a href="#projen.Logger.info">info</a></code> | Log a message to stderr with INFO severity. |
| <code><a href="#projen.Logger.log">log</a></code> | Log a message to stderr with a given logging level. |
| <code><a href="#projen.Logger.verbose">verbose</a></code> | Log a message to stderr with VERBOSE severity. |
| <code><a href="#projen.Logger.warn">warn</a></code> | Log a message to stderr with WARN severity. |

---

##### `toString` <a name="toString" id="projen.Logger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Logger.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Logger.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Logger.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `debug` <a name="debug" id="projen.Logger.debug"></a>

```typescript
public debug(text: ...any[]): void
```

Log a message to stderr with DEBUG severity.

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.debug.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

##### `error` <a name="error" id="projen.Logger.error"></a>

```typescript
public error(text: ...any[]): void
```

Log a message to stderr with ERROR severity.

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.error.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

##### `info` <a name="info" id="projen.Logger.info"></a>

```typescript
public info(text: ...any[]): void
```

Log a message to stderr with INFO severity.

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.info.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

##### `log` <a name="log" id="projen.Logger.log"></a>

```typescript
public log(level: LogLevel, text: ...any[]): void
```

Log a message to stderr with a given logging level.

The message will be
printed as long as `logger.level` is set to the message's severity or higher.

###### `level`<sup>Required</sup> <a name="level" id="projen.Logger.log.parameter.level"></a>

- *Type:* <a href="#projen.LogLevel">LogLevel</a>

Logging verbosity.

---

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.log.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

##### `verbose` <a name="verbose" id="projen.Logger.verbose"></a>

```typescript
public verbose(text: ...any[]): void
```

Log a message to stderr with VERBOSE severity.

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.verbose.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

##### `warn` <a name="warn" id="projen.Logger.warn"></a>

```typescript
public warn(text: ...any[]): void
```

Log a message to stderr with WARN severity.

###### `text`<sup>Required</sup> <a name="text" id="projen.Logger.warn.parameter.text"></a>

- *Type:* ...any[]

strings or objects to print.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Logger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Logger.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Logger.isConstruct"></a>

```typescript
import { Logger } from 'projen'

Logger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Logger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Logger.isComponent"></a>

```typescript
import { Logger } from 'projen'

Logger.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Logger.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Logger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Logger.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Logger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Logger.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---


### Makefile <a name="Makefile" id="projen.Makefile"></a>

Minimal Makefile.

#### Initializers <a name="Initializers" id="projen.Makefile.Initializer"></a>

```typescript
import { Makefile } from 'projen'

new Makefile(project: Project, filePath: string, options?: MakefileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Makefile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Makefile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.Makefile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.MakefileOptions">MakefileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Makefile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.Makefile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.Makefile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.MakefileOptions">MakefileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Makefile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Makefile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Makefile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Makefile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.Makefile.addAll">addAll</a></code> | Add a target to all. |
| <code><a href="#projen.Makefile.addAlls">addAlls</a></code> | Add multiple targets to all. |
| <code><a href="#projen.Makefile.addRule">addRule</a></code> | Add a rule to the Makefile. |
| <code><a href="#projen.Makefile.addRules">addRules</a></code> | Add multiple rules to the Makefile. |

---

##### `toString` <a name="toString" id="projen.Makefile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Makefile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Makefile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Makefile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addAll` <a name="addAll" id="projen.Makefile.addAll"></a>

```typescript
public addAll(target: string): Makefile
```

Add a target to all.

###### `target`<sup>Required</sup> <a name="target" id="projen.Makefile.addAll.parameter.target"></a>

- *Type:* string

---

##### `addAlls` <a name="addAlls" id="projen.Makefile.addAlls"></a>

```typescript
public addAlls(targets: ...string[]): Makefile
```

Add multiple targets to all.

###### `targets`<sup>Required</sup> <a name="targets" id="projen.Makefile.addAlls.parameter.targets"></a>

- *Type:* ...string[]

---

##### `addRule` <a name="addRule" id="projen.Makefile.addRule"></a>

```typescript
public addRule(rule: Rule): Makefile
```

Add a rule to the Makefile.

###### `rule`<sup>Required</sup> <a name="rule" id="projen.Makefile.addRule.parameter.rule"></a>

- *Type:* <a href="#projen.Rule">Rule</a>

---

##### `addRules` <a name="addRules" id="projen.Makefile.addRules"></a>

```typescript
public addRules(rules: ...Rule[]): Makefile
```

Add multiple rules to the Makefile.

###### `rules`<sup>Required</sup> <a name="rules" id="projen.Makefile.addRules.parameter.rules"></a>

- *Type:* ...<a href="#projen.Rule">Rule</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Makefile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Makefile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Makefile.isConstruct"></a>

```typescript
import { Makefile } from 'projen'

Makefile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Makefile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Makefile.isComponent"></a>

```typescript
import { Makefile } from 'projen'

Makefile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Makefile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Makefile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Makefile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Makefile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.Makefile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.Makefile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.Makefile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.Makefile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.Makefile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.Makefile.property.rules">rules</a></code> | <code><a href="#projen.Rule">Rule</a>[]</code> | List of rule definitions. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Makefile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Makefile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.Makefile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.Makefile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.Makefile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.Makefile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.Makefile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.Makefile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `rules`<sup>Required</sup> <a name="rules" id="projen.Makefile.property.rules"></a>

```typescript
public readonly rules: Rule[];
```

- *Type:* <a href="#projen.Rule">Rule</a>[]

List of rule definitions.

---


### ObjectFile <a name="ObjectFile" id="projen.ObjectFile"></a>

Represents an Object file.

#### Initializers <a name="Initializers" id="projen.ObjectFile.Initializer"></a>

```typescript
import { ObjectFile } from 'projen'

new ObjectFile(scope: IConstruct, filePath: string, options: ObjectFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ObjectFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.ObjectFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.ObjectFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.ObjectFileOptions">ObjectFileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.ObjectFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.ObjectFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="projen.ObjectFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.ObjectFileOptions">ObjectFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ObjectFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.ObjectFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.ObjectFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.ObjectFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.ObjectFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.ObjectFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.ObjectFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.ObjectFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.ObjectFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.ObjectFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.ObjectFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.ObjectFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.ObjectFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.ObjectFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.ObjectFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.ObjectFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.ObjectFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.ObjectFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.ObjectFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.ObjectFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.ObjectFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.ObjectFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ObjectFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.ObjectFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.ObjectFile.isConstruct"></a>

```typescript
import { ObjectFile } from 'projen'

ObjectFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.ObjectFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.ObjectFile.isComponent"></a>

```typescript
import { ObjectFile } from 'projen'

ObjectFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.ObjectFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ObjectFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.ObjectFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ObjectFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.ObjectFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.ObjectFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.ObjectFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.ObjectFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.ObjectFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.ObjectFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.ObjectFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ObjectFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.ObjectFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.ObjectFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.ObjectFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.ObjectFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.ObjectFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.ObjectFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.ObjectFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---


### Project <a name="Project" id="projen.Project"></a>

Base project.

#### Initializers <a name="Initializers" id="projen.Project.Initializer"></a>

```typescript
import { Project } from 'projen'

new Project(options: ProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Project.Initializer.parameter.options">options</a></code> | <code><a href="#projen.ProjectOptions">ProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen.Project.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.ProjectOptions">ProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Project.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen.Project.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen.Project.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen.Project.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen.Project.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen.Project.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#projen.Project.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen.Project.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen.Project.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.Project.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen.Project.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen.Project.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen.Project.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen.Project.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen.Project.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `toString` <a name="toString" id="projen.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen.Project.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen.Project.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen.Project.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen.Project.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen.Project.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen.Project.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen.Project.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen.Project.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen.Project.addTask.parameter.props"></a>

- *Type:* <a href="#projen.TaskOptions">TaskOptions</a>

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen.Project.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen.Project.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen.Project.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="projen.Project.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen.Project.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Project.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen.Project.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.Project.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen.Project.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen.Project.runTaskCommand.parameter.task"></a>

- *Type:* <a href="#projen.Task">Task</a>

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen.Project.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="projen.Project.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.Project.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen.Project.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.Project.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen.Project.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.Project.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen.Project.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen.Project.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Project.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen.Project.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Project.isConstruct"></a>

```typescript
import { Project } from 'projen'

Project.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen.Project.isProject"></a>

```typescript
import { Project } from 'projen'

Project.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen.Project.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.Project.of"></a>

```typescript
import { Project } from 'projen'

Project.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen.Project.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Project.property.buildTask">buildTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.Project.property.compileTask">compileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.components">components</a></code> | <code><a href="#projen.Component">Component</a>[]</code> | Returns all the components within this project. |
| <code><a href="#projen.Project.property.deps">deps</a></code> | <code><a href="#projen.Dependencies">Dependencies</a></code> | Project dependencies. |
| <code><a href="#projen.Project.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen.Project.property.files">files</a></code> | <code><a href="#projen.FileBase">FileBase</a>[]</code> | All files in this project. |
| <code><a href="#projen.Project.property.gitattributes">gitattributes</a></code> | <code><a href="#projen.GitAttributesFile">GitAttributesFile</a></code> | The .gitattributes file for this repository. |
| <code><a href="#projen.Project.property.gitignore">gitignore</a></code> | <code><a href="#projen.IgnoreFile">IgnoreFile</a></code> | .gitignore. |
| <code><a href="#projen.Project.property.logger">logger</a></code> | <code><a href="#projen.Logger">Logger</a></code> | Logging utilities. |
| <code><a href="#projen.Project.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen.Project.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen.Project.property.packageTask">packageTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.postCompileTask">postCompileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.preCompileTask">preCompileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.projectBuild">projectBuild</a></code> | <code><a href="#projen.ProjectBuild">ProjectBuild</a></code> | Manages the build process of the project. |
| <code><a href="#projen.Project.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen.Project.property.root">root</a></code> | <code><a href="#projen.Project">Project</a></code> | The root project. |
| <code><a href="#projen.Project.property.subprojects">subprojects</a></code> | <code><a href="#projen.Project">Project</a>[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen.Project.property.tasks">tasks</a></code> | <code><a href="#projen.Tasks">Tasks</a></code> | Project tasks. |
| <code><a href="#projen.Project.property.testTask">testTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Project.property.defaultTask">defaultTask</a></code> | <code><a href="#projen.Task">Task</a></code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen.Project.property.initProject">initProject</a></code> | <code><a href="#projen.InitProject">InitProject</a></code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen.Project.property.parent">parent</a></code> | <code><a href="#projen.Project">Project</a></code> | A parent project. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.Project.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen.Project.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.Project.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `components`<sup>Required</sup> <a name="components" id="projen.Project.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* <a href="#projen.Component">Component</a>[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen.Project.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* <a href="#projen.Dependencies">Dependencies</a>

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen.Project.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen.Project.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* <a href="#projen.FileBase">FileBase</a>[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen.Project.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* <a href="#projen.GitAttributesFile">GitAttributesFile</a>

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen.Project.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* <a href="#projen.IgnoreFile">IgnoreFile</a>

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen.Project.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* <a href="#projen.Logger">Logger</a>

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.Project.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.Project.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.Project.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen.Project.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* <a href="#projen.ProjectBuild">ProjectBuild</a>

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen.Project.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen.Project.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen.Project.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* <a href="#projen.Project">Project</a>[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.Project.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* <a href="#projen.Tasks">Tasks</a>

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.Project.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen.Project.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen.Project.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* <a href="#projen.InitProject">InitProject</a>

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.Project.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Project.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen.Project.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### ProjectBuild <a name="ProjectBuild" id="projen.ProjectBuild"></a>

Manages a standard build process for all projects.

Build spawns these tasks in order:
1. default
2. pre-compile
3. compile
4. post-compile
5. test
6. package

#### Initializers <a name="Initializers" id="projen.ProjectBuild.Initializer"></a>

```typescript
import { ProjectBuild } from 'projen'

new ProjectBuild(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjectBuild.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjectBuild.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjectBuild.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.ProjectBuild.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.ProjectBuild.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.ProjectBuild.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.ProjectBuild.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.ProjectBuild.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.ProjectBuild.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.ProjectBuild.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjectBuild.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.ProjectBuild.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.ProjectBuild.isConstruct"></a>

```typescript
import { ProjectBuild } from 'projen'

ProjectBuild.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjectBuild.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.ProjectBuild.isComponent"></a>

```typescript
import { ProjectBuild } from 'projen'

ProjectBuild.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjectBuild.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjectBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.ProjectBuild.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ProjectBuild.property.buildTask">buildTask</a></code> | <code><a href="#projen.Task">Task</a></code> | The task responsible for a full release build. |
| <code><a href="#projen.ProjectBuild.property.compileTask">compileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | Compiles the code. |
| <code><a href="#projen.ProjectBuild.property.packageTask">packageTask</a></code> | <code><a href="#projen.Task">Task</a></code> | The "package" task. |
| <code><a href="#projen.ProjectBuild.property.postCompileTask">postCompileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | Post-compile task. |
| <code><a href="#projen.ProjectBuild.property.preCompileTask">preCompileTask</a></code> | <code><a href="#projen.Task">Task</a></code> | Pre-compile task. |
| <code><a href="#projen.ProjectBuild.property.testTask">testTask</a></code> | <code><a href="#projen.Task">Task</a></code> | Tests the code. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.ProjectBuild.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjectBuild.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen.ProjectBuild.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

The task responsible for a full release build.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen.ProjectBuild.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

Compiles the code.

By default for node.js projects this task is empty.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen.ProjectBuild.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

The "package" task.

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen.ProjectBuild.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

Post-compile task.

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen.ProjectBuild.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

Pre-compile task.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen.ProjectBuild.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

Tests the code.

---


### ProjectTree <a name="ProjectTree" id="projen.ProjectTree"></a>

#### Initializers <a name="Initializers" id="projen.ProjectTree.Initializer"></a>

```typescript
import { ProjectTree } from 'projen'

new ProjectTree(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjectTree.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjectTree.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjectTree.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.ProjectTree.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.ProjectTree.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.ProjectTree.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.ProjectTree.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.ProjectTree.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.ProjectTree.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.ProjectTree.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjectTree.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.ProjectTree.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.ProjectTree.isConstruct"></a>

```typescript
import { ProjectTree } from 'projen'

ProjectTree.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjectTree.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.ProjectTree.isComponent"></a>

```typescript
import { ProjectTree } from 'projen'

ProjectTree.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjectTree.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjectTree.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.ProjectTree.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ProjectTree.property.file">file</a></code> | <code><a href="#projen.JsonFile">JsonFile</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.ProjectTree.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjectTree.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `file`<sup>Required</sup> <a name="file" id="projen.ProjectTree.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* <a href="#projen.JsonFile">JsonFile</a>

---


### Projenrc <a name="Projenrc" id="projen.Projenrc"></a>

#### Initializers <a name="Initializers" id="projen.Projenrc.Initializer"></a>

```typescript
import { Projenrc } from 'projen'

new Projenrc(project: Project, options?: ProjenrcJsonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Projenrc.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Projenrc.Initializer.parameter.options">options</a></code> | <code><a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Projenrc.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.Projenrc.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Projenrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Projenrc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Projenrc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Projenrc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### ~~`toString`~~ <a name="toString" id="projen.Projenrc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`postSynthesize`~~ <a name="postSynthesize" id="projen.Projenrc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### ~~`preSynthesize`~~ <a name="preSynthesize" id="projen.Projenrc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### ~~`synthesize`~~ <a name="synthesize" id="projen.Projenrc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Projenrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Projenrc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.Projenrc.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen.Projenrc.isConstruct"></a>

```typescript
import { Projenrc } from 'projen'

Projenrc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Projenrc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### ~~`isComponent`~~ <a name="isComponent" id="projen.Projenrc.isComponent"></a>

```typescript
import { Projenrc } from 'projen'

Projenrc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Projenrc.isComponent.parameter.x"></a>

- *Type:* any

---

##### ~~`of`~~ <a name="of" id="projen.Projenrc.of"></a>

```typescript
import { Projenrc } from 'projen'

Projenrc.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.Projenrc.of.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Projenrc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Projenrc.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Projenrc.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="projen.Projenrc.property.node"></a>

- *Deprecated:* use `ProjenrcJson`

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`project`~~<sup>Required</sup> <a name="project" id="projen.Projenrc.property.project"></a>

- *Deprecated:* use `ProjenrcJson`

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### ~~`filePath`~~<sup>Required</sup> <a name="filePath" id="projen.Projenrc.property.filePath"></a>

- *Deprecated:* use `ProjenrcJson`

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---


### ProjenrcFile <a name="ProjenrcFile" id="projen.ProjenrcFile"></a>

A component representing the projen runtime configuration.

#### Initializers <a name="Initializers" id="projen.ProjenrcFile.Initializer"></a>

```typescript
import { ProjenrcFile } from 'projen'

new ProjenrcFile(scope: IConstruct, id?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.ProjenrcFile.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.ProjenrcFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.ProjenrcFile.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjenrcFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.ProjenrcFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.ProjenrcFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.ProjenrcFile.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.ProjenrcFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.ProjenrcFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.ProjenrcFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.ProjenrcFile.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjenrcFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.ProjenrcFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.ProjenrcFile.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### `isConstruct` <a name="isConstruct" id="projen.ProjenrcFile.isConstruct"></a>

```typescript
import { ProjenrcFile } from 'projen'

ProjenrcFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjenrcFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.ProjenrcFile.isComponent"></a>

```typescript
import { ProjenrcFile } from 'projen'

ProjenrcFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjenrcFile.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.ProjenrcFile.of"></a>

```typescript
import { ProjenrcFile } from 'projen'

ProjenrcFile.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.ProjenrcFile.of.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.ProjenrcFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ProjenrcFile.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.ProjenrcFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjenrcFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.ProjenrcFile.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---


### ProjenrcJson <a name="ProjenrcJson" id="projen.ProjenrcJson"></a>

Sets up a project to use JSON for projenrc.

#### Initializers <a name="Initializers" id="projen.ProjenrcJson.Initializer"></a>

```typescript
import { ProjenrcJson } from 'projen'

new ProjenrcJson(project: Project, options?: ProjenrcJsonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcJson.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ProjenrcJson.Initializer.parameter.options">options</a></code> | <code><a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjenrcJson.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.ProjenrcJson.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjenrcJson.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.ProjenrcJson.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.ProjenrcJson.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.ProjenrcJson.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.ProjenrcJson.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.ProjenrcJson.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.ProjenrcJson.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.ProjenrcJson.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjenrcJson.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.ProjenrcJson.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#projen.ProjenrcJson.of">of</a></code> | Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc. |

---

##### `isConstruct` <a name="isConstruct" id="projen.ProjenrcJson.isConstruct"></a>

```typescript
import { ProjenrcJson } from 'projen'

ProjenrcJson.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjenrcJson.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.ProjenrcJson.isComponent"></a>

```typescript
import { ProjenrcJson } from 'projen'

ProjenrcJson.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.ProjenrcJson.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen.ProjenrcJson.of"></a>

```typescript
import { ProjenrcJson } from 'projen'

ProjenrcJson.of(project: Project)
```

Returns the `Projenrc` instance associated with a project or `undefined` if there is no Projenrc.

###### `project`<sup>Required</sup> <a name="project" id="projen.ProjenrcJson.of.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

The project.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcJson.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.ProjenrcJson.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.ProjenrcJson.property.filePath">filePath</a></code> | <code>string</code> | The path of the projenrc file. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.ProjenrcJson.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.ProjenrcJson.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.ProjenrcJson.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The path of the projenrc file.

---


### Renovatebot <a name="Renovatebot" id="projen.Renovatebot"></a>

Defines renovatebot configuration for projen project.

Ignores the versions controlled by Projen.

#### Initializers <a name="Initializers" id="projen.Renovatebot.Initializer"></a>

```typescript
import { Renovatebot } from 'projen'

new Renovatebot(project: Project, options?: RenovatebotOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Renovatebot.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Renovatebot.Initializer.parameter.options">options</a></code> | <code><a href="#projen.RenovatebotOptions">RenovatebotOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Renovatebot.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.Renovatebot.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.RenovatebotOptions">RenovatebotOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Renovatebot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Renovatebot.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Renovatebot.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Renovatebot.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.Renovatebot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Renovatebot.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Renovatebot.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Renovatebot.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Renovatebot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Renovatebot.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Renovatebot.isConstruct"></a>

```typescript
import { Renovatebot } from 'projen'

Renovatebot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Renovatebot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Renovatebot.isComponent"></a>

```typescript
import { Renovatebot } from 'projen'

Renovatebot.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Renovatebot.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Renovatebot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Renovatebot.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Renovatebot.property.file">file</a></code> | <code><a href="#projen.JsonFile">JsonFile</a></code> | The file holding the renovatebot configuration. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Renovatebot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Renovatebot.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `file`<sup>Required</sup> <a name="file" id="projen.Renovatebot.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* <a href="#projen.JsonFile">JsonFile</a>

The file holding the renovatebot configuration.

---


### SampleDir <a name="SampleDir" id="projen.SampleDir"></a>

Renders the given files into the directory if the directory does not exist.

Use this to create sample code files

#### Initializers <a name="Initializers" id="projen.SampleDir.Initializer"></a>

```typescript
import { SampleDir } from 'projen'

new SampleDir(project: Project, dir: string, options: SampleDirOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleDir.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | Parent project to add files to. |
| <code><a href="#projen.SampleDir.Initializer.parameter.dir">dir</a></code> | <code>string</code> | directory to add files to. |
| <code><a href="#projen.SampleDir.Initializer.parameter.options">options</a></code> | <code><a href="#projen.SampleDirOptions">SampleDirOptions</a></code> | options for which files to create. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleDir.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

Parent project to add files to.

---

##### `dir`<sup>Required</sup> <a name="dir" id="projen.SampleDir.Initializer.parameter.dir"></a>

- *Type:* string

directory to add files to.

If directory already exists, nothing is added.

---

##### `options`<sup>Required</sup> <a name="options" id="projen.SampleDir.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.SampleDirOptions">SampleDirOptions</a>

options for which files to create.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleDir.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.SampleDir.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.SampleDir.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.SampleDir.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.SampleDir.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.SampleDir.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.SampleDir.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.SampleDir.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleDir.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.SampleDir.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.SampleDir.isConstruct"></a>

```typescript
import { SampleDir } from 'projen'

SampleDir.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleDir.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.SampleDir.isComponent"></a>

```typescript
import { SampleDir } from 'projen'

SampleDir.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleDir.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleDir.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.SampleDir.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.SampleDir.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleDir.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---


### SampleFile <a name="SampleFile" id="projen.SampleFile"></a>

Produces a file with the given contents but only once, if the file doesn't already exist.

Use this for creating example code files or other resources.

#### Initializers <a name="Initializers" id="projen.SampleFile.Initializer"></a>

```typescript
import { SampleFile } from 'projen'

new SampleFile(project: Project, filePath: string, options: SampleFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleFile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | - the project to tie this file to. |
| <code><a href="#projen.SampleFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | - the relative path in the project to put the file. |
| <code><a href="#projen.SampleFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.SampleFileOptions">SampleFileOptions</a></code> | - the options for the file. |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleFile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

the project to tie this file to.

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.SampleFile.Initializer.parameter.filePath"></a>

- *Type:* string

the relative path in the project to put the file.

---

##### `options`<sup>Required</sup> <a name="options" id="projen.SampleFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.SampleFileOptions">SampleFileOptions</a>

the options for the file.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.SampleFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.SampleFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.SampleFile.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.SampleFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.SampleFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.SampleFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.SampleFile.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.SampleFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.SampleFile.isConstruct"></a>

```typescript
import { SampleFile } from 'projen'

SampleFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.SampleFile.isComponent"></a>

```typescript
import { SampleFile } from 'projen'

SampleFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.SampleFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.SampleFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---


### SampleReadme <a name="SampleReadme" id="projen.SampleReadme"></a>

Represents a README.md sample file. You are expected to manage this file after creation.

#### Initializers <a name="Initializers" id="projen.SampleReadme.Initializer"></a>

```typescript
import { SampleReadme } from 'projen'

new SampleReadme(project: Project, props?: SampleReadmeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleReadme.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.SampleReadme.Initializer.parameter.props">props</a></code> | <code><a href="#projen.SampleReadmeProps">SampleReadmeProps</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleReadme.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `props`<sup>Optional</sup> <a name="props" id="projen.SampleReadme.Initializer.parameter.props"></a>

- *Type:* <a href="#projen.SampleReadmeProps">SampleReadmeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleReadme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.SampleReadme.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.SampleReadme.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.SampleReadme.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="projen.SampleReadme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.SampleReadme.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.SampleReadme.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.SampleReadme.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SampleReadme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.SampleReadme.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.SampleReadme.isConstruct"></a>

```typescript
import { SampleReadme } from 'projen'

SampleReadme.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleReadme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.SampleReadme.isComponent"></a>

```typescript
import { SampleReadme } from 'projen'

SampleReadme.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.SampleReadme.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleReadme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.SampleReadme.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.SampleReadme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SampleReadme.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---


### SourceCode <a name="SourceCode" id="projen.SourceCode"></a>

Represents a source file.

#### Initializers <a name="Initializers" id="projen.SourceCode.Initializer"></a>

```typescript
import { SourceCode } from 'projen'

new SourceCode(project: Project, filePath: string, options?: SourceCodeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SourceCode.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.SourceCode.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.SourceCode.Initializer.parameter.options">options</a></code> | <code><a href="#projen.SourceCodeOptions">SourceCodeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SourceCode.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.SourceCode.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.SourceCode.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.SourceCodeOptions">SourceCodeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SourceCode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.SourceCode.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.SourceCode.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.SourceCode.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.SourceCode.close">close</a></code> | Decreases the indentation level and closes a code block. |
| <code><a href="#projen.SourceCode.line">line</a></code> | Emit a line of code. |
| <code><a href="#projen.SourceCode.open">open</a></code> | Opens a code block and increases the indentation level. |

---

##### `toString` <a name="toString" id="projen.SourceCode.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.SourceCode.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.SourceCode.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.SourceCode.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `close` <a name="close" id="projen.SourceCode.close"></a>

```typescript
public close(code?: string): void
```

Decreases the indentation level and closes a code block.

###### `code`<sup>Optional</sup> <a name="code" id="projen.SourceCode.close.parameter.code"></a>

- *Type:* string

The code after the block is closed (e.g. `}`).

---

##### `line` <a name="line" id="projen.SourceCode.line"></a>

```typescript
public line(code?: string): void
```

Emit a line of code.

###### `code`<sup>Optional</sup> <a name="code" id="projen.SourceCode.line.parameter.code"></a>

- *Type:* string

The contents, if not specified, just adds a newline.

---

##### `open` <a name="open" id="projen.SourceCode.open"></a>

```typescript
public open(code?: string): void
```

Opens a code block and increases the indentation level.

###### `code`<sup>Optional</sup> <a name="code" id="projen.SourceCode.open.parameter.code"></a>

- *Type:* string

The code before the block starts (e.g. `export class {`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.SourceCode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.SourceCode.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.SourceCode.isConstruct"></a>

```typescript
import { SourceCode } from 'projen'

SourceCode.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.SourceCode.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.SourceCode.isComponent"></a>

```typescript
import { SourceCode } from 'projen'

SourceCode.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.SourceCode.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SourceCode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.SourceCode.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.SourceCode.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.SourceCode.property.marker">marker</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.SourceCode.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.SourceCode.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.SourceCode.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.SourceCode.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

---


### Tasks <a name="Tasks" id="projen.Tasks"></a>

Defines project tasks.

Tasks extend the projen CLI by adding subcommands to it. Task definitions are
synthesized into `.projen/tasks.json`.

#### Initializers <a name="Initializers" id="projen.Tasks.Initializer"></a>

```typescript
import { Tasks } from 'projen'

new Tasks(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Tasks.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Tasks.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Tasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Tasks.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Tasks.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Tasks.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.Tasks.addEnvironment">addEnvironment</a></code> | Adds global environment. |
| <code><a href="#projen.Tasks.addTask">addTask</a></code> | Adds a task to a project. |
| <code><a href="#projen.Tasks.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen.Tasks.tryFind">tryFind</a></code> | Finds a task by name. |

---

##### `toString` <a name="toString" id="projen.Tasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Tasks.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Tasks.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Tasks.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addEnvironment` <a name="addEnvironment" id="projen.Tasks.addEnvironment"></a>

```typescript
public addEnvironment(name: string, value: string): void
```

Adds global environment.

###### `name`<sup>Required</sup> <a name="name" id="projen.Tasks.addEnvironment.parameter.name"></a>

- *Type:* string

Environment variable name.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.Tasks.addEnvironment.parameter.value"></a>

- *Type:* string

Value.

---

##### `addTask` <a name="addTask" id="projen.Tasks.addTask"></a>

```typescript
public addTask(name: string, options?: TaskOptions): Task
```

Adds a task to a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.Tasks.addTask.parameter.name"></a>

- *Type:* string

The name of the task.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Tasks.addTask.parameter.options"></a>

- *Type:* <a href="#projen.TaskOptions">TaskOptions</a>

Task options.

---

##### `removeTask` <a name="removeTask" id="projen.Tasks.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen.Tasks.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `tryFind` <a name="tryFind" id="projen.Tasks.tryFind"></a>

```typescript
public tryFind(name: string): Task
```

Finds a task by name.

Returns `undefined` if the task cannot be found.

###### `name`<sup>Required</sup> <a name="name" id="projen.Tasks.tryFind.parameter.name"></a>

- *Type:* string

The name of the task.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Tasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Tasks.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Tasks.isConstruct"></a>

```typescript
import { Tasks } from 'projen'

Tasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Tasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Tasks.isComponent"></a>

```typescript
import { Tasks } from 'projen'

Tasks.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Tasks.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Tasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Tasks.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Tasks.property.all">all</a></code> | <code><a href="#projen.Task">Task</a>[]</code> | All tasks. |
| <code><a href="#projen.Tasks.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Returns a copy of the currently global environment for this project. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Tasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Tasks.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `all`<sup>Required</sup> <a name="all" id="projen.Tasks.property.all"></a>

```typescript
public readonly all: Task[];
```

- *Type:* <a href="#projen.Task">Task</a>[]

All tasks.

---

##### `env`<sup>Required</sup> <a name="env" id="projen.Tasks.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Returns a copy of the currently global environment for this project.

---


### TextFile <a name="TextFile" id="projen.TextFile"></a>

A text file.

#### Initializers <a name="Initializers" id="projen.TextFile.Initializer"></a>

```typescript
import { TextFile } from 'projen'

new TextFile(scope: IConstruct, filePath: string, options?: TextFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TextFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.TextFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | File path. |
| <code><a href="#projen.TextFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.TextFileOptions">TextFileOptions</a></code> | Options. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.TextFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.TextFile.Initializer.parameter.filePath"></a>

- *Type:* string

File path.

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.TextFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.TextFileOptions">TextFileOptions</a>

Options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TextFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.TextFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.TextFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.TextFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.TextFile.addLine">addLine</a></code> | Adds a line to the text file. |

---

##### `toString` <a name="toString" id="projen.TextFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.TextFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.TextFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.TextFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addLine` <a name="addLine" id="projen.TextFile.addLine"></a>

```typescript
public addLine(line: string): void
```

Adds a line to the text file.

###### `line`<sup>Required</sup> <a name="line" id="projen.TextFile.addLine.parameter.line"></a>

- *Type:* string

the line to add (can use tokens).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TextFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.TextFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.TextFile.isConstruct"></a>

```typescript
import { TextFile } from 'projen'

TextFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.TextFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.TextFile.isComponent"></a>

```typescript
import { TextFile } from 'projen'

TextFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.TextFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TextFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.TextFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.TextFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.TextFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.TextFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.TextFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.TextFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.TextFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.TextFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.TextFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.TextFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.TextFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.TextFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.TextFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.TextFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.TextFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---


### TomlFile <a name="TomlFile" id="projen.TomlFile"></a>

Represents a TOML file.

#### Initializers <a name="Initializers" id="projen.TomlFile.Initializer"></a>

```typescript
import { TomlFile } from 'projen'

new TomlFile(project: Project, filePath: string, options: TomlFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TomlFile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.TomlFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.TomlFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.TomlFileOptions">TomlFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.TomlFile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.TomlFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="projen.TomlFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.TomlFileOptions">TomlFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TomlFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.TomlFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.TomlFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.TomlFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.TomlFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.TomlFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.TomlFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.TomlFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.TomlFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.TomlFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.TomlFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.TomlFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.TomlFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.TomlFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.TomlFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.TomlFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.TomlFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.TomlFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.TomlFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.TomlFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.TomlFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.TomlFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TomlFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.TomlFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.TomlFile.isConstruct"></a>

```typescript
import { TomlFile } from 'projen'

TomlFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.TomlFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.TomlFile.isComponent"></a>

```typescript
import { TomlFile } from 'projen'

TomlFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.TomlFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TomlFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.TomlFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.TomlFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.TomlFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.TomlFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.TomlFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.TomlFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.TomlFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.TomlFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.TomlFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.TomlFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.TomlFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.TomlFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.TomlFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.TomlFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.TomlFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.TomlFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.TomlFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---


### Version <a name="Version" id="projen.Version"></a>

#### Initializers <a name="Initializers" id="projen.Version.Initializer"></a>

```typescript
import { Version } from 'projen'

new Version(scope: IConstruct, options: VersionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Version.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.Version.Initializer.parameter.options">options</a></code> | <code><a href="#projen.VersionOptions">VersionOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.Version.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Required</sup> <a name="options" id="projen.Version.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.VersionOptions">VersionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Version.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.Version.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.Version.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.Version.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.Version.envForBranch">envForBranch</a></code> | Return the environment variables to modify the bump command for release branches. |

---

##### `toString` <a name="toString" id="projen.Version.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.Version.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.Version.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.Version.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `envForBranch` <a name="envForBranch" id="projen.Version.envForBranch"></a>

```typescript
public envForBranch(branchOptions: VersionBranchOptions): {[ key: string ]: string}
```

Return the environment variables to modify the bump command for release branches.

These options are used to modify the behavior of the version bumping script
for additional branches, by setting environment variables.

No settings are inherited from the base `Version` object (but any parameters that
control versions do conflict with the use of a `nextVersionCommand`).

###### `branchOptions`<sup>Required</sup> <a name="branchOptions" id="projen.Version.envForBranch.parameter.branchOptions"></a>

- *Type:* <a href="#projen.VersionBranchOptions">VersionBranchOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Version.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.Version.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.Version.isConstruct"></a>

```typescript
import { Version } from 'projen'

Version.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.Version.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.Version.isComponent"></a>

```typescript
import { Version } from 'projen'

Version.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.Version.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Version.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.Version.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.Version.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The package used to bump package versions, as a dependency string. |
| <code><a href="#projen.Version.property.bumpTask">bumpTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Version.property.changelogFileName">changelogFileName</a></code> | <code>string</code> | The name of the changelog file (under `artifactsDirectory`). |
| <code><a href="#projen.Version.property.releaseTagFileName">releaseTagFileName</a></code> | <code>string</code> | The name of the file that contains the release tag (under `artifactsDirectory`). |
| <code><a href="#projen.Version.property.unbumpTask">unbumpTask</a></code> | <code><a href="#projen.Task">Task</a></code> | *No description.* |
| <code><a href="#projen.Version.property.versionFileName">versionFileName</a></code> | <code>string</code> | The name of the file that contains the version (under `artifactsDirectory`). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.Version.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.Version.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `bumpPackage`<sup>Required</sup> <a name="bumpPackage" id="projen.Version.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string

The package used to bump package versions, as a dependency string.

This is a `commit-and-tag-version` compatible package.

---

##### `bumpTask`<sup>Required</sup> <a name="bumpTask" id="projen.Version.property.bumpTask"></a>

```typescript
public readonly bumpTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `changelogFileName`<sup>Required</sup> <a name="changelogFileName" id="projen.Version.property.changelogFileName"></a>

```typescript
public readonly changelogFileName: string;
```

- *Type:* string

The name of the changelog file (under `artifactsDirectory`).

---

##### `releaseTagFileName`<sup>Required</sup> <a name="releaseTagFileName" id="projen.Version.property.releaseTagFileName"></a>

```typescript
public readonly releaseTagFileName: string;
```

- *Type:* string

The name of the file that contains the release tag (under `artifactsDirectory`).

---

##### `unbumpTask`<sup>Required</sup> <a name="unbumpTask" id="projen.Version.property.unbumpTask"></a>

```typescript
public readonly unbumpTask: Task;
```

- *Type:* <a href="#projen.Task">Task</a>

---

##### `versionFileName`<sup>Required</sup> <a name="versionFileName" id="projen.Version.property.versionFileName"></a>

```typescript
public readonly versionFileName: string;
```

- *Type:* string

The name of the file that contains the version (under `artifactsDirectory`).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Version.property.STANDARD_VERSION">STANDARD_VERSION</a></code> | <code>string</code> | *No description.* |

---

##### ~~`STANDARD_VERSION`~~<sup>Required</sup> <a name="STANDARD_VERSION" id="projen.Version.property.STANDARD_VERSION"></a>

- *Deprecated:* use `version.bumpPackage` on the component instance instead

```typescript
public readonly STANDARD_VERSION: string;
```

- *Type:* string

---

### XmlFile <a name="XmlFile" id="projen.XmlFile"></a>

Represents an XML file.

Objects passed in will be synthesized using the npm "xml" library.

> [https://www.npmjs.com/package/xml](https://www.npmjs.com/package/xml)

#### Initializers <a name="Initializers" id="projen.XmlFile.Initializer"></a>

```typescript
import { XmlFile } from 'projen'

new XmlFile(project: Project, filePath: string, options?: XmlFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.XmlFile.Initializer.parameter.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.XmlFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.XmlFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.XmlFileOptions">XmlFileOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.XmlFile.Initializer.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.XmlFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.XmlFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.XmlFileOptions">XmlFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.XmlFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.XmlFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.XmlFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.XmlFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.XmlFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.XmlFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.XmlFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.XmlFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.XmlFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.XmlFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.XmlFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.XmlFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.XmlFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.XmlFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.XmlFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.XmlFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.XmlFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.XmlFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.XmlFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.XmlFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.XmlFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.XmlFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.XmlFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.XmlFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.XmlFile.isConstruct"></a>

```typescript
import { XmlFile } from 'projen'

XmlFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.XmlFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.XmlFile.isComponent"></a>

```typescript
import { XmlFile } from 'projen'

XmlFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.XmlFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.XmlFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.XmlFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.XmlFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.XmlFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.XmlFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.XmlFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.XmlFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.XmlFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.XmlFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.XmlFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.XmlFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.XmlFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.XmlFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.XmlFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.XmlFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.XmlFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.XmlFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.XmlFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---


### YamlFile <a name="YamlFile" id="projen.YamlFile"></a>

Represents a YAML file.

#### Initializers <a name="Initializers" id="projen.YamlFile.Initializer"></a>

```typescript
import { YamlFile } from 'projen'

new YamlFile(scope: IConstruct, filePath: string, options: YamlFileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.YamlFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#projen.YamlFile.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.YamlFile.Initializer.parameter.options">options</a></code> | <code><a href="#projen.YamlFileOptions">YamlFileOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen.YamlFile.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="projen.YamlFile.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="projen.YamlFile.Initializer.parameter.options"></a>

- *Type:* <a href="#projen.YamlFileOptions">YamlFileOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.YamlFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.YamlFile.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.YamlFile.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.YamlFile.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen.YamlFile.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#projen.YamlFile.addOverride">addOverride</a></code> | Adds an override to the synthesized object file. |
| <code><a href="#projen.YamlFile.addToArray">addToArray</a></code> | Adds to an array in the synthesized object file. |
| <code><a href="#projen.YamlFile.patch">patch</a></code> | Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information. |

---

##### `toString` <a name="toString" id="projen.YamlFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.YamlFile.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.YamlFile.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.YamlFile.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addDeletionOverride` <a name="addDeletionOverride" id="projen.YamlFile.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="projen.YamlFile.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addOverride` <a name="addOverride" id="projen.YamlFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized object file.

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
project.tsconfig.file.addOverride('compilerOptions.alwaysStrict', true);
project.tsconfig.file.addOverride('compilerOptions.lib', ['dom', 'dom.iterable', 'esnext']);
```
would add the overrides
```json
"compilerOptions": {
  "alwaysStrict": true,
  "lib": [
    "dom",
    "dom.iterable",
    "esnext"
  ]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.YamlFile.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.YamlFile.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addToArray` <a name="addToArray" id="projen.YamlFile.addToArray"></a>

```typescript
public addToArray(path: string, values: ...any[]): void
```

Adds to an array in the synthesized object file.

If the array is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.addToArray('compilerOptions.exclude', 'coverage');
project.tsconfig.file.addToArray('compilerOptions.lib', 'dom', 'dom.iterable', 'esnext');
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["es2019", "dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `path`<sup>Required</sup> <a name="path" id="projen.YamlFile.addToArray.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to att to arrays in complex types.

Any intermediate keys
will be created as needed.

---

###### `values`<sup>Required</sup> <a name="values" id="projen.YamlFile.addToArray.parameter.values"></a>

- *Type:* ...any[]

The values to add.

Could be primitive or complex.

---

##### `patch` <a name="patch" id="projen.YamlFile.patch"></a>

```typescript
public patch(patches: ...JsonPatch[]): void
```

Applies an RFC 6902 JSON-patch to the synthesized object file. See https://datatracker.ietf.org/doc/html/rfc6902 for more information.

For example, with the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules"],
  "lib": ["es2019"]
  ...
}
...
```

```typescript
project.tsconfig.file.patch(JsonPatch.add("/compilerOptions/exclude/-", "coverage"));
project.tsconfig.file.patch(JsonPatch.replace("/compilerOptions/lib", ["dom", "dom.iterable", "esnext"]));
```
would result in the following object file
```json
"compilerOptions": {
  "exclude": ["node_modules", "coverage"],
  "lib": ["dom", "dom.iterable", "esnext"]
  ...
}
...
```

###### `patches`<sup>Required</sup> <a name="patches" id="projen.YamlFile.patch.parameter.patches"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The patch operations to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.YamlFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.YamlFile.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.YamlFile.isConstruct"></a>

```typescript
import { YamlFile } from 'projen'

YamlFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="projen.YamlFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.YamlFile.isComponent"></a>

```typescript
import { YamlFile } from 'projen'

YamlFile.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.YamlFile.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.YamlFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.YamlFile.property.project">project</a></code> | <code><a href="#projen.Project">Project</a></code> | *No description.* |
| <code><a href="#projen.YamlFile.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen.YamlFile.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen.YamlFile.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen.YamlFile.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen.YamlFile.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen.YamlFile.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen.YamlFile.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Indicates if empty objects and arrays are omitted from the output object. |
| <code><a href="#projen.YamlFile.property.lineWidth">lineWidth</a></code> | <code>number</code> | Maximum line width (set to 0 to disable folding). |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.YamlFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.YamlFile.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen.YamlFile.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen.YamlFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen.YamlFile.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.YamlFile.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen.YamlFile.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen.YamlFile.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `omitEmpty`<sup>Required</sup> <a name="omitEmpty" id="projen.YamlFile.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean

Indicates if empty objects and arrays are omitted from the output object.

---

##### `lineWidth`<sup>Required</sup> <a name="lineWidth" id="projen.YamlFile.property.lineWidth"></a>

```typescript
public readonly lineWidth: number;
```

- *Type:* number

Maximum line width (set to 0 to disable folding).

---


## Structs <a name="Structs" id="Structs"></a>

### CreateProjectOptions <a name="CreateProjectOptions" id="projen.CreateProjectOptions"></a>

#### Initializer <a name="Initializer" id="projen.CreateProjectOptions.Initializer"></a>

```typescript
import { CreateProjectOptions } from 'projen'

const createProjectOptions: CreateProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.CreateProjectOptions.property.dir">dir</a></code> | <code>string</code> | Directory that the project will be generated in. |
| <code><a href="#projen.CreateProjectOptions.property.projectFqn">projectFqn</a></code> | <code>string</code> | Fully-qualified name of the project type (usually formatted as `projen.module.ProjectType`). |
| <code><a href="#projen.CreateProjectOptions.property.projectOptions">projectOptions</a></code> | <code>{[ key: string ]: any}</code> | Project options. |
| <code><a href="#projen.CreateProjectOptions.property.optionHints">optionHints</a></code> | <code><a href="#projen.InitProjectOptionHints">InitProjectOptionHints</a></code> | Should we render commented-out default options in the projenrc file? |
| <code><a href="#projen.CreateProjectOptions.property.post">post</a></code> | <code>boolean</code> | Should we execute post synthesis hooks? |
| <code><a href="#projen.CreateProjectOptions.property.synth">synth</a></code> | <code>boolean</code> | Should we call `project.synth()` or instantiate the project (could still have side-effects) and render the .projenrc file. |

---

##### `dir`<sup>Required</sup> <a name="dir" id="projen.CreateProjectOptions.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

Directory that the project will be generated in.

---

##### `projectFqn`<sup>Required</sup> <a name="projectFqn" id="projen.CreateProjectOptions.property.projectFqn"></a>

```typescript
public readonly projectFqn: string;
```

- *Type:* string

Fully-qualified name of the project type (usually formatted as `projen.module.ProjectType`).

---

*Example*

```typescript
`projen.typescript.TypescriptProject`
```


##### `projectOptions`<sup>Required</sup> <a name="projectOptions" id="projen.CreateProjectOptions.property.projectOptions"></a>

```typescript
public readonly projectOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Project options.

Only JSON-like values can be passed in (strings,
booleans, numbers, enums, arrays, and objects that are not
derived from classes).

Consult the API reference of the project type you are generating for
information about what fields and types are available.

---

##### `optionHints`<sup>Optional</sup> <a name="optionHints" id="projen.CreateProjectOptions.property.optionHints"></a>

```typescript
public readonly optionHints: InitProjectOptionHints;
```

- *Type:* <a href="#projen.InitProjectOptionHints">InitProjectOptionHints</a>
- *Default:* InitProjectOptionHints.FEATURED

Should we render commented-out default options in the projenrc file?

Does not apply to projenrc.json files.

---

##### `post`<sup>Optional</sup> <a name="post" id="projen.CreateProjectOptions.property.post"></a>

```typescript
public readonly post: boolean;
```

- *Type:* boolean
- *Default:* true

Should we execute post synthesis hooks?

(usually package manager install).

---

##### `synth`<sup>Optional</sup> <a name="synth" id="projen.CreateProjectOptions.property.synth"></a>

```typescript
public readonly synth: boolean;
```

- *Type:* boolean
- *Default:* true

Should we call `project.synth()` or instantiate the project (could still have side-effects) and render the .projenrc file.

---

### Dependency <a name="Dependency" id="projen.Dependency"></a>

Represents a project dependency.

#### Initializer <a name="Initializer" id="projen.Dependency.Initializer"></a>

```typescript
import { Dependency } from 'projen'

const dependency: Dependency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Dependency.property.name">name</a></code> | <code>string</code> | The package manager name of the dependency (e.g. `leftpad` for npm). |
| <code><a href="#projen.Dependency.property.version">version</a></code> | <code>string</code> | Semantic version version requirement. |
| <code><a href="#projen.Dependency.property.type">type</a></code> | <code><a href="#projen.DependencyType">DependencyType</a></code> | Which type of dependency this is (runtime, build-time, etc). |
| <code><a href="#projen.Dependency.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Additional JSON metadata associated with the dependency (package manager specific). |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.Dependency.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The package manager name of the dependency (e.g. `leftpad` for npm).

NOTE: For package managers that use complex coordinates (like Maven), we
will codify it into a string somehow.

---

##### `version`<sup>Optional</sup> <a name="version" id="projen.Dependency.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* requirement is managed by the package manager (e.g. npm/yarn).

Semantic version version requirement.

---

##### `type`<sup>Required</sup> <a name="type" id="projen.Dependency.property.type"></a>

```typescript
public readonly type: DependencyType;
```

- *Type:* <a href="#projen.DependencyType">DependencyType</a>

Which type of dependency this is (runtime, build-time, etc).

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="projen.Dependency.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* {}

Additional JSON metadata associated with the dependency (package manager specific).

---

### DependencyCoordinates <a name="DependencyCoordinates" id="projen.DependencyCoordinates"></a>

Coordinates of the dependency (name and version).

#### Initializer <a name="Initializer" id="projen.DependencyCoordinates.Initializer"></a>

```typescript
import { DependencyCoordinates } from 'projen'

const dependencyCoordinates: DependencyCoordinates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DependencyCoordinates.property.name">name</a></code> | <code>string</code> | The package manager name of the dependency (e.g. `leftpad` for npm). |
| <code><a href="#projen.DependencyCoordinates.property.version">version</a></code> | <code>string</code> | Semantic version version requirement. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.DependencyCoordinates.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The package manager name of the dependency (e.g. `leftpad` for npm).

NOTE: For package managers that use complex coordinates (like Maven), we
will codify it into a string somehow.

---

##### `version`<sup>Optional</sup> <a name="version" id="projen.DependencyCoordinates.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* requirement is managed by the package manager (e.g. npm/yarn).

Semantic version version requirement.

---

### DepsManifest <a name="DepsManifest" id="projen.DepsManifest"></a>

#### Initializer <a name="Initializer" id="projen.DepsManifest.Initializer"></a>

```typescript
import { DepsManifest } from 'projen'

const depsManifest: DepsManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DepsManifest.property.dependencies">dependencies</a></code> | <code><a href="#projen.Dependency">Dependency</a>[]</code> | All dependencies of this module. |

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="projen.DepsManifest.property.dependencies"></a>

```typescript
public readonly dependencies: Dependency[];
```

- *Type:* <a href="#projen.Dependency">Dependency</a>[]

All dependencies of this module.

---

### DevEnvironmentOptions <a name="DevEnvironmentOptions" id="projen.DevEnvironmentOptions"></a>

Base options for configuring a container-based development environment.

#### Initializer <a name="Initializer" id="projen.DevEnvironmentOptions.Initializer"></a>

```typescript
import { DevEnvironmentOptions } from 'projen'

const devEnvironmentOptions: DevEnvironmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DevEnvironmentOptions.property.dockerImage">dockerImage</a></code> | <code><a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a></code> | A Docker image or Dockerfile for the container. |
| <code><a href="#projen.DevEnvironmentOptions.property.ports">ports</a></code> | <code>string[]</code> | An array of ports that should be exposed from the container. |
| <code><a href="#projen.DevEnvironmentOptions.property.tasks">tasks</a></code> | <code><a href="#projen.Task">Task</a>[]</code> | An array of tasks that should be run when the container starts. |
| <code><a href="#projen.DevEnvironmentOptions.property.vscodeExtensions">vscodeExtensions</a></code> | <code>string[]</code> | An array of extension IDs that specify the extensions that should be installed inside the container when it is created. |

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="projen.DevEnvironmentOptions.property.dockerImage"></a>

```typescript
public readonly dockerImage: DevEnvironmentDockerImage;
```

- *Type:* <a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a>

A Docker image or Dockerfile for the container.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="projen.DevEnvironmentOptions.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An array of ports that should be exposed from the container.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="projen.DevEnvironmentOptions.property.tasks"></a>

```typescript
public readonly tasks: Task[];
```

- *Type:* <a href="#projen.Task">Task</a>[]

An array of tasks that should be run when the container starts.

---

##### `vscodeExtensions`<sup>Optional</sup> <a name="vscodeExtensions" id="projen.DevEnvironmentOptions.property.vscodeExtensions"></a>

```typescript
public readonly vscodeExtensions: string[];
```

- *Type:* string[]

An array of extension IDs that specify the extensions that should be installed inside the container when it is created.

---

### DockerComposeBuild <a name="DockerComposeBuild" id="projen.DockerComposeBuild"></a>

Build arguments for creating a docker image.

#### Initializer <a name="Initializer" id="projen.DockerComposeBuild.Initializer"></a>

```typescript
import { DockerComposeBuild } from 'projen'

const dockerComposeBuild: DockerComposeBuild = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeBuild.property.context">context</a></code> | <code>string</code> | Docker build context directory. |
| <code><a href="#projen.DockerComposeBuild.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | Build args. |
| <code><a href="#projen.DockerComposeBuild.property.dockerfile">dockerfile</a></code> | <code>string</code> | A dockerfile to build from. |

---

##### `context`<sup>Required</sup> <a name="context" id="projen.DockerComposeBuild.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Docker build context directory.

---

##### `args`<sup>Optional</sup> <a name="args" id="projen.DockerComposeBuild.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none are provided

Build args.

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="projen.DockerComposeBuild.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string
- *Default:* "Dockerfile"

A dockerfile to build from.

---

### DockerComposeNetworkConfig <a name="DockerComposeNetworkConfig" id="projen.DockerComposeNetworkConfig"></a>

Network configuration.

#### Initializer <a name="Initializer" id="projen.DockerComposeNetworkConfig.Initializer"></a>

```typescript
import { DockerComposeNetworkConfig } from 'projen'

const dockerComposeNetworkConfig: DockerComposeNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeNetworkConfig.property.attachable">attachable</a></code> | <code>boolean</code> | Set to true to indicate that standalone containers can attach to this network, in addition to services. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.bridge">bridge</a></code> | <code>boolean</code> | Set to true to indicate that the network is a bridge network. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.driver">driver</a></code> | <code>string</code> | Driver to use for the network. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.driverOpts">driverOpts</a></code> | <code>object</code> | Options for the configured driver. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.external">external</a></code> | <code>boolean</code> | Set to true to indicate that the network is externally created. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.internal">internal</a></code> | <code>boolean</code> | Set to true to indicate that you want to create an externally isolated overlay network. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.ipam">ipam</a></code> | <code><a href="#projen.DockerComposeNetworkIpamConfig">DockerComposeNetworkIpamConfig</a></code> | Specify custom IPAM config. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.labels">labels</a></code> | <code>string[]</code> | Attach labels to the network. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.name">name</a></code> | <code>string</code> | Name of the network for when the network name isn't going to work in YAML. |
| <code><a href="#projen.DockerComposeNetworkConfig.property.overlay">overlay</a></code> | <code>boolean</code> | Set to true to indicate that the network is an overlay network. |

---

##### `attachable`<sup>Optional</sup> <a name="attachable" id="projen.DockerComposeNetworkConfig.property.attachable"></a>

```typescript
public readonly attachable: boolean;
```

- *Type:* boolean
- *Default:* unset

Set to true to indicate that standalone containers can attach to this network, in addition to services.

---

##### `bridge`<sup>Optional</sup> <a name="bridge" id="projen.DockerComposeNetworkConfig.property.bridge"></a>

```typescript
public readonly bridge: boolean;
```

- *Type:* boolean
- *Default:* unset

Set to true to indicate that the network is a bridge network.

---

##### `driver`<sup>Optional</sup> <a name="driver" id="projen.DockerComposeNetworkConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string
- *Default:* value is not provided

Driver to use for the network.

---

##### `driverOpts`<sup>Optional</sup> <a name="driverOpts" id="projen.DockerComposeNetworkConfig.property.driverOpts"></a>

```typescript
public readonly driverOpts: object;
```

- *Type:* object
- *Default:* value is not provided

Options for the configured driver.

Those options are driver-dependent - consult the driver’s documentation for more information

---

##### `external`<sup>Optional</sup> <a name="external" id="projen.DockerComposeNetworkConfig.property.external"></a>

```typescript
public readonly external: boolean;
```

- *Type:* boolean
- *Default:* unset, indicating that docker-compose creates the network

Set to true to indicate that the network is externally created.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="projen.DockerComposeNetworkConfig.property.internal"></a>

```typescript
public readonly internal: boolean;
```

- *Type:* boolean
- *Default:* unset

Set to true to indicate that you want to create an externally isolated overlay network.

---

##### `ipam`<sup>Optional</sup> <a name="ipam" id="projen.DockerComposeNetworkConfig.property.ipam"></a>

```typescript
public readonly ipam: DockerComposeNetworkIpamConfig;
```

- *Type:* <a href="#projen.DockerComposeNetworkIpamConfig">DockerComposeNetworkIpamConfig</a>
- *Default:* unset

Specify custom IPAM config.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.DockerComposeNetworkConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]
- *Default:* unset

Attach labels to the network.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.DockerComposeNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* unset, indicating that docker-compose creates networks as usual

Name of the network for when the network name isn't going to work in YAML.

---

##### `overlay`<sup>Optional</sup> <a name="overlay" id="projen.DockerComposeNetworkConfig.property.overlay"></a>

```typescript
public readonly overlay: boolean;
```

- *Type:* boolean
- *Default:* unset

Set to true to indicate that the network is an overlay network.

---

### DockerComposeNetworkIpamConfig <a name="DockerComposeNetworkIpamConfig" id="projen.DockerComposeNetworkIpamConfig"></a>

IPAM configuration.

#### Initializer <a name="Initializer" id="projen.DockerComposeNetworkIpamConfig.Initializer"></a>

```typescript
import { DockerComposeNetworkIpamConfig } from 'projen'

const dockerComposeNetworkIpamConfig: DockerComposeNetworkIpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeNetworkIpamConfig.property.config">config</a></code> | <code><a href="#projen.DockerComposeNetworkIpamSubnetConfig">DockerComposeNetworkIpamSubnetConfig</a>[]</code> | A list with zero or more config blocks specifying custom IPAM configuration. |
| <code><a href="#projen.DockerComposeNetworkIpamConfig.property.driver">driver</a></code> | <code>string</code> | Driver to use for custom IPAM config. |

---

##### `config`<sup>Optional</sup> <a name="config" id="projen.DockerComposeNetworkIpamConfig.property.config"></a>

```typescript
public readonly config: DockerComposeNetworkIpamSubnetConfig[];
```

- *Type:* <a href="#projen.DockerComposeNetworkIpamSubnetConfig">DockerComposeNetworkIpamSubnetConfig</a>[]
- *Default:* value is not provided

A list with zero or more config blocks specifying custom IPAM configuration.

---

##### `driver`<sup>Optional</sup> <a name="driver" id="projen.DockerComposeNetworkIpamConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string
- *Default:* value is not provided

Driver to use for custom IPAM config.

---

### DockerComposeNetworkIpamSubnetConfig <a name="DockerComposeNetworkIpamSubnetConfig" id="projen.DockerComposeNetworkIpamSubnetConfig"></a>

IPAM subnet configuration.

#### Initializer <a name="Initializer" id="projen.DockerComposeNetworkIpamSubnetConfig.Initializer"></a>

```typescript
import { DockerComposeNetworkIpamSubnetConfig } from 'projen'

const dockerComposeNetworkIpamSubnetConfig: DockerComposeNetworkIpamSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeNetworkIpamSubnetConfig.property.subnet">subnet</a></code> | <code>string</code> | Subnet in CIDR format that represents a network segment. |

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="projen.DockerComposeNetworkIpamSubnetConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string
- *Default:* value is not provided

Subnet in CIDR format that represents a network segment.

---

### DockerComposePortMappingOptions <a name="DockerComposePortMappingOptions" id="projen.DockerComposePortMappingOptions"></a>

Options for port mappings.

#### Initializer <a name="Initializer" id="projen.DockerComposePortMappingOptions.Initializer"></a>

```typescript
import { DockerComposePortMappingOptions } from 'projen'

const dockerComposePortMappingOptions: DockerComposePortMappingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposePortMappingOptions.property.protocol">protocol</a></code> | <code><a href="#projen.DockerComposeProtocol">DockerComposeProtocol</a></code> | Port mapping protocol. |

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="projen.DockerComposePortMappingOptions.property.protocol"></a>

```typescript
public readonly protocol: DockerComposeProtocol;
```

- *Type:* <a href="#projen.DockerComposeProtocol">DockerComposeProtocol</a>
- *Default:* DockerComposeProtocol.TCP

Port mapping protocol.

---

### DockerComposeProps <a name="DockerComposeProps" id="projen.DockerComposeProps"></a>

Props for DockerCompose.

#### Initializer <a name="Initializer" id="projen.DockerComposeProps.Initializer"></a>

```typescript
import { DockerComposeProps } from 'projen'

const dockerComposeProps: DockerComposeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeProps.property.nameSuffix">nameSuffix</a></code> | <code>string</code> | A name to add to the docker-compose.yml filename. |
| <code><a href="#projen.DockerComposeProps.property.schemaVersion">schemaVersion</a></code> | <code>string</code> | Docker Compose schema version do be used. |
| <code><a href="#projen.DockerComposeProps.property.services">services</a></code> | <code>{[ key: string ]: <a href="#projen.DockerComposeServiceDescription">DockerComposeServiceDescription</a>}</code> | Service descriptions. |

---

##### `nameSuffix`<sup>Optional</sup> <a name="nameSuffix" id="projen.DockerComposeProps.property.nameSuffix"></a>

```typescript
public readonly nameSuffix: string;
```

- *Type:* string
- *Default:* no name is added

A name to add to the docker-compose.yml filename.

---

*Example*

```typescript
'myname' yields 'docker-compose.myname.yml'
```


##### ~~`schemaVersion`~~<sup>Optional</sup> <a name="schemaVersion" id="projen.DockerComposeProps.property.schemaVersion"></a>

- *Deprecated:* - The top level `version` field is obsolete per the Compose Specification.
{@link https://github.com/compose-spec/compose-spec/blob/master/spec.md#version-and-name-top-level-elements Compose Specification}

```typescript
public readonly schemaVersion: string;
```

- *Type:* string
- *Default:* no version is provided

Docker Compose schema version do be used.

---

##### `services`<sup>Optional</sup> <a name="services" id="projen.DockerComposeProps.property.services"></a>

```typescript
public readonly services: {[ key: string ]: DockerComposeServiceDescription};
```

- *Type:* {[ key: string ]: <a href="#projen.DockerComposeServiceDescription">DockerComposeServiceDescription</a>}

Service descriptions.

---

### DockerComposeServiceDescription <a name="DockerComposeServiceDescription" id="projen.DockerComposeServiceDescription"></a>

Description of a docker-compose.yml service.

#### Initializer <a name="Initializer" id="projen.DockerComposeServiceDescription.Initializer"></a>

```typescript
import { DockerComposeServiceDescription } from 'projen'

const dockerComposeServiceDescription: DockerComposeServiceDescription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeServiceDescription.property.command">command</a></code> | <code>string[]</code> | Provide a command to the docker container. |
| <code><a href="#projen.DockerComposeServiceDescription.property.dependsOn">dependsOn</a></code> | <code><a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>[]</code> | Names of other services this service depends on. |
| <code><a href="#projen.DockerComposeServiceDescription.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Entrypoint to run in the container. |
| <code><a href="#projen.DockerComposeServiceDescription.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Add environment variables. |
| <code><a href="#projen.DockerComposeServiceDescription.property.image">image</a></code> | <code>string</code> | Use a docker image. |
| <code><a href="#projen.DockerComposeServiceDescription.property.imageBuild">imageBuild</a></code> | <code><a href="#projen.DockerComposeBuild">DockerComposeBuild</a></code> | Build a docker image. |
| <code><a href="#projen.DockerComposeServiceDescription.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Add labels. |
| <code><a href="#projen.DockerComposeServiceDescription.property.networks">networks</a></code> | <code><a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>[]</code> | Add some networks to the service. |
| <code><a href="#projen.DockerComposeServiceDescription.property.platform">platform</a></code> | <code>string</code> | Add platform. |
| <code><a href="#projen.DockerComposeServiceDescription.property.ports">ports</a></code> | <code><a href="#projen.DockerComposeServicePort">DockerComposeServicePort</a>[]</code> | Map some ports. |
| <code><a href="#projen.DockerComposeServiceDescription.property.privileged">privileged</a></code> | <code>boolean</code> | Run in privileged mode. |
| <code><a href="#projen.DockerComposeServiceDescription.property.volumes">volumes</a></code> | <code><a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>[]</code> | Mount some volumes into the service. |

---

##### `command`<sup>Optional</sup> <a name="command" id="projen.DockerComposeServiceDescription.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]
- *Default:* use the container's default command

Provide a command to the docker container.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="projen.DockerComposeServiceDescription.property.dependsOn"></a>

```typescript
public readonly dependsOn: IDockerComposeServiceName[];
```

- *Type:* <a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>[]
- *Default:* no dependencies

Names of other services this service depends on.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.DockerComposeServiceDescription.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Entrypoint to run in the container.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="projen.DockerComposeServiceDescription.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables are provided

Add environment variables.

---

##### `image`<sup>Optional</sup> <a name="image" id="projen.DockerComposeServiceDescription.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Use a docker image.

Note: You must specify either `build` or `image` key.

> [imageBuild](imageBuild)

---

##### `imageBuild`<sup>Optional</sup> <a name="imageBuild" id="projen.DockerComposeServiceDescription.property.imageBuild"></a>

```typescript
public readonly imageBuild: DockerComposeBuild;
```

- *Type:* <a href="#projen.DockerComposeBuild">DockerComposeBuild</a>

Build a docker image.

Note: You must specify either `imageBuild` or `image` key.

> [image](image)

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.DockerComposeServiceDescription.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no labels are provided

Add labels.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="projen.DockerComposeServiceDescription.property.networks"></a>

```typescript
public readonly networks: IDockerComposeNetworkBinding[];
```

- *Type:* <a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>[]

Add some networks to the service.

> [DockerCompose.network () to create & mount a named network](DockerCompose.network () to create & mount a named network)

---

##### `platform`<sup>Optional</sup> <a name="platform" id="projen.DockerComposeServiceDescription.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string
- *Default:* no platform is provided

Add platform.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="projen.DockerComposeServiceDescription.property.ports"></a>

```typescript
public readonly ports: DockerComposeServicePort[];
```

- *Type:* <a href="#projen.DockerComposeServicePort">DockerComposeServicePort</a>[]
- *Default:* no ports are mapped

Map some ports.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="projen.DockerComposeServiceDescription.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean
- *Default:* no privileged mode flag is provided

Run in privileged mode.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="projen.DockerComposeServiceDescription.property.volumes"></a>

```typescript
public readonly volumes: IDockerComposeVolumeBinding[];
```

- *Type:* <a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>[]

Mount some volumes into the service.

Use one of the following to create volumes:

> [DockerCompose.namedVolume () to create & mount a named volume](DockerCompose.namedVolume () to create & mount a named volume)

---

### DockerComposeServicePort <a name="DockerComposeServicePort" id="projen.DockerComposeServicePort"></a>

A service port mapping.

#### Initializer <a name="Initializer" id="projen.DockerComposeServicePort.Initializer"></a>

```typescript
import { DockerComposeServicePort } from 'projen'

const dockerComposeServicePort: DockerComposeServicePort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeServicePort.property.mode">mode</a></code> | <code>string</code> | Port mapping mode. |
| <code><a href="#projen.DockerComposeServicePort.property.protocol">protocol</a></code> | <code><a href="#projen.DockerComposeProtocol">DockerComposeProtocol</a></code> | Network protocol. |
| <code><a href="#projen.DockerComposeServicePort.property.published">published</a></code> | <code>number</code> | Published port number. |
| <code><a href="#projen.DockerComposeServicePort.property.target">target</a></code> | <code>number</code> | Target port number. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="projen.DockerComposeServicePort.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Port mapping mode.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="projen.DockerComposeServicePort.property.protocol"></a>

```typescript
public readonly protocol: DockerComposeProtocol;
```

- *Type:* <a href="#projen.DockerComposeProtocol">DockerComposeProtocol</a>

Network protocol.

---

##### `published`<sup>Required</sup> <a name="published" id="projen.DockerComposeServicePort.property.published"></a>

```typescript
public readonly published: number;
```

- *Type:* number

Published port number.

---

##### `target`<sup>Required</sup> <a name="target" id="projen.DockerComposeServicePort.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

Target port number.

---

### DockerComposeVolumeConfig <a name="DockerComposeVolumeConfig" id="projen.DockerComposeVolumeConfig"></a>

Volume configuration.

#### Initializer <a name="Initializer" id="projen.DockerComposeVolumeConfig.Initializer"></a>

```typescript
import { DockerComposeVolumeConfig } from 'projen'

const dockerComposeVolumeConfig: DockerComposeVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeVolumeConfig.property.driver">driver</a></code> | <code>string</code> | Driver to use for the volume. |
| <code><a href="#projen.DockerComposeVolumeConfig.property.driverOpts">driverOpts</a></code> | <code>{[ key: string ]: string}</code> | Options to provide to the driver. |
| <code><a href="#projen.DockerComposeVolumeConfig.property.external">external</a></code> | <code>boolean</code> | Set to true to indicate that the volume is externally created. |
| <code><a href="#projen.DockerComposeVolumeConfig.property.name">name</a></code> | <code>string</code> | Name of the volume for when the volume name isn't going to work in YAML. |

---

##### `driver`<sup>Optional</sup> <a name="driver" id="projen.DockerComposeVolumeConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string
- *Default:* value is not provided

Driver to use for the volume.

---

##### `driverOpts`<sup>Optional</sup> <a name="driverOpts" id="projen.DockerComposeVolumeConfig.property.driverOpts"></a>

```typescript
public readonly driverOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Options to provide to the driver.

---

##### `external`<sup>Optional</sup> <a name="external" id="projen.DockerComposeVolumeConfig.property.external"></a>

```typescript
public readonly external: boolean;
```

- *Type:* boolean
- *Default:* unset, indicating that docker-compose creates the volume

Set to true to indicate that the volume is externally created.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.DockerComposeVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* unset, indicating that docker-compose creates volumes as usual

Name of the volume for when the volume name isn't going to work in YAML.

---

### DockerComposeVolumeMount <a name="DockerComposeVolumeMount" id="projen.DockerComposeVolumeMount"></a>

Service volume mounting information.

#### Initializer <a name="Initializer" id="projen.DockerComposeVolumeMount.Initializer"></a>

```typescript
import { DockerComposeVolumeMount } from 'projen'

const dockerComposeVolumeMount: DockerComposeVolumeMount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeVolumeMount.property.source">source</a></code> | <code>string</code> | Volume source. |
| <code><a href="#projen.DockerComposeVolumeMount.property.target">target</a></code> | <code>string</code> | Volume target. |
| <code><a href="#projen.DockerComposeVolumeMount.property.type">type</a></code> | <code>string</code> | Type of volume. |

---

##### `source`<sup>Required</sup> <a name="source" id="projen.DockerComposeVolumeMount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Volume source.

---

##### `target`<sup>Required</sup> <a name="target" id="projen.DockerComposeVolumeMount.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Volume target.

---

##### `type`<sup>Required</sup> <a name="type" id="projen.DockerComposeVolumeMount.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of volume.

---

### FileBaseOptions <a name="FileBaseOptions" id="projen.FileBaseOptions"></a>

#### Initializer <a name="Initializer" id="projen.FileBaseOptions.Initializer"></a>

```typescript
import { FileBaseOptions } from 'projen'

const fileBaseOptions: FileBaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.FileBaseOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.FileBaseOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.FileBaseOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.FileBaseOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.FileBaseOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.FileBaseOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.FileBaseOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.FileBaseOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.FileBaseOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.FileBaseOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

### GitAttributesFileOptions <a name="GitAttributesFileOptions" id="projen.GitAttributesFileOptions"></a>

Options for `GitAttributesFile`.

#### Initializer <a name="Initializer" id="projen.GitAttributesFileOptions.Initializer"></a>

```typescript
import { GitAttributesFileOptions } from 'projen'

const gitAttributesFileOptions: GitAttributesFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitAttributesFileOptions.property.endOfLine">endOfLine</a></code> | <code><a href="#projen.EndOfLine">EndOfLine</a></code> | The default end of line character for text files. |

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="projen.GitAttributesFileOptions.property.endOfLine"></a>

```typescript
public readonly endOfLine: EndOfLine;
```

- *Type:* <a href="#projen.EndOfLine">EndOfLine</a>
- *Default:* EndOfLine.LF

The default end of line character for text files.

endOfLine it's useful to keep the same end of line between Windows and Unix operative systems for git checking/checkout operations. Hence, it can avoid simple repository mutations consisting only of changes in the end of line characters. It will be set in the first line of the .gitattributes file to make it the first match with high priority but it can be overriden in a later line. Can be disabled by setting explicitly: `{ endOfLine: EndOfLine.NONE }`.

---

### GitOptions <a name="GitOptions" id="projen.GitOptions"></a>

Git configuration options.

#### Initializer <a name="Initializer" id="projen.GitOptions.Initializer"></a>

```typescript
import { GitOptions } from 'projen'

const gitOptions: GitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitOptions.property.endOfLine">endOfLine</a></code> | <code><a href="#projen.EndOfLine">EndOfLine</a></code> | The default end of line character for text files. |
| <code><a href="#projen.GitOptions.property.lfsPatterns">lfsPatterns</a></code> | <code>string[]</code> | File patterns to mark as stored in Git LFS. |

---

##### `endOfLine`<sup>Optional</sup> <a name="endOfLine" id="projen.GitOptions.property.endOfLine"></a>

```typescript
public readonly endOfLine: EndOfLine;
```

- *Type:* <a href="#projen.EndOfLine">EndOfLine</a>
- *Default:* EndOfLine.LF

The default end of line character for text files.

endOfLine it's useful to keep the same end of line between Windows and Unix operative systems for git checking/checkout operations.
Hence, it can avoid simple repository mutations consisting only of changes in the end of line characters.
It will be set in the first line of the .gitattributes file to make it the first match with high priority but it can be overriden in a later line.
Can be disabled by setting: `endOfLine: EndOfLine.NONE`.

---

##### `lfsPatterns`<sup>Optional</sup> <a name="lfsPatterns" id="projen.GitOptions.property.lfsPatterns"></a>

```typescript
public readonly lfsPatterns: string[];
```

- *Type:* string[]
- *Default:* No files stored in LFS

File patterns to mark as stored in Git LFS.

---

### GitpodOptions <a name="GitpodOptions" id="projen.GitpodOptions"></a>

Constructor options for the Gitpod component.

By default, Gitpod uses the 'gitpod/workspace-full' docker image.

> [https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile

By default, all tasks will be run in parallel. To run the tasks in sequence,
create a new task and specify the other tasks as subtasks.](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile

By default, all tasks will be run in parallel. To run the tasks in sequence,
create a new task and specify the other tasks as subtasks.)

#### Initializer <a name="Initializer" id="projen.GitpodOptions.Initializer"></a>

```typescript
import { GitpodOptions } from 'projen'

const gitpodOptions: GitpodOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitpodOptions.property.dockerImage">dockerImage</a></code> | <code><a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a></code> | A Docker image or Dockerfile for the container. |
| <code><a href="#projen.GitpodOptions.property.ports">ports</a></code> | <code>string[]</code> | An array of ports that should be exposed from the container. |
| <code><a href="#projen.GitpodOptions.property.tasks">tasks</a></code> | <code><a href="#projen.Task">Task</a>[]</code> | An array of tasks that should be run when the container starts. |
| <code><a href="#projen.GitpodOptions.property.vscodeExtensions">vscodeExtensions</a></code> | <code>string[]</code> | An array of extension IDs that specify the extensions that should be installed inside the container when it is created. |
| <code><a href="#projen.GitpodOptions.property.prebuilds">prebuilds</a></code> | <code><a href="#projen.GitpodPrebuilds">GitpodPrebuilds</a></code> | Optional Gitpod's Github App integration for prebuilds If this is not set and Gitpod's Github App is installed, then Gitpod will apply these defaults: https://www.gitpod.io/docs/prebuilds/#configure-the-github-app. |

---

##### `dockerImage`<sup>Optional</sup> <a name="dockerImage" id="projen.GitpodOptions.property.dockerImage"></a>

```typescript
public readonly dockerImage: DevEnvironmentDockerImage;
```

- *Type:* <a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a>

A Docker image or Dockerfile for the container.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="projen.GitpodOptions.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An array of ports that should be exposed from the container.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="projen.GitpodOptions.property.tasks"></a>

```typescript
public readonly tasks: Task[];
```

- *Type:* <a href="#projen.Task">Task</a>[]

An array of tasks that should be run when the container starts.

---

##### `vscodeExtensions`<sup>Optional</sup> <a name="vscodeExtensions" id="projen.GitpodOptions.property.vscodeExtensions"></a>

```typescript
public readonly vscodeExtensions: string[];
```

- *Type:* string[]

An array of extension IDs that specify the extensions that should be installed inside the container when it is created.

---

##### `prebuilds`<sup>Optional</sup> <a name="prebuilds" id="projen.GitpodOptions.property.prebuilds"></a>

```typescript
public readonly prebuilds: GitpodPrebuilds;
```

- *Type:* <a href="#projen.GitpodPrebuilds">GitpodPrebuilds</a>
- *Default:* undefined

Optional Gitpod's Github App integration for prebuilds If this is not set and Gitpod's Github App is installed, then Gitpod will apply these defaults: https://www.gitpod.io/docs/prebuilds/#configure-the-github-app.

---

### GitpodPort <a name="GitpodPort" id="projen.GitpodPort"></a>

Options for an exposed port on Gitpod.

#### Initializer <a name="Initializer" id="projen.GitpodPort.Initializer"></a>

```typescript
import { GitpodPort } from 'projen'

const gitpodPort: GitpodPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitpodPort.property.onOpen">onOpen</a></code> | <code><a href="#projen.GitpodOnOpen">GitpodOnOpen</a></code> | What to do when a service on a port is detected. |
| <code><a href="#projen.GitpodPort.property.port">port</a></code> | <code>string</code> | A port that should be exposed (forwarded) from the container. |
| <code><a href="#projen.GitpodPort.property.visibility">visibility</a></code> | <code><a href="#projen.GitpodPortVisibility">GitpodPortVisibility</a></code> | Whether the port visibility should be private or public. |

---

##### `onOpen`<sup>Optional</sup> <a name="onOpen" id="projen.GitpodPort.property.onOpen"></a>

```typescript
public readonly onOpen: GitpodOnOpen;
```

- *Type:* <a href="#projen.GitpodOnOpen">GitpodOnOpen</a>
- *Default:* GitpodOnOpen.NOTIFY

What to do when a service on a port is detected.

---

##### `port`<sup>Optional</sup> <a name="port" id="projen.GitpodPort.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

A port that should be exposed (forwarded) from the container.

---

*Example*

```typescript
"8080"
```


##### `visibility`<sup>Optional</sup> <a name="visibility" id="projen.GitpodPort.property.visibility"></a>

```typescript
public readonly visibility: GitpodPortVisibility;
```

- *Type:* <a href="#projen.GitpodPortVisibility">GitpodPortVisibility</a>
- *Default:* GitpodPortVisibility.PUBLIC

Whether the port visibility should be private or public.

---

### GitpodPrebuilds <a name="GitpodPrebuilds" id="projen.GitpodPrebuilds"></a>

Configure the Gitpod App for prebuilds.

Currently only GitHub is supported.

> [https://www.gitpod.io/docs/prebuilds/](https://www.gitpod.io/docs/prebuilds/)

#### Initializer <a name="Initializer" id="projen.GitpodPrebuilds.Initializer"></a>

```typescript
import { GitpodPrebuilds } from 'projen'

const gitpodPrebuilds: GitpodPrebuilds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitpodPrebuilds.property.addBadge">addBadge</a></code> | <code>boolean</code> | Add a "Review in Gitpod" button to the pull request's description. |
| <code><a href="#projen.GitpodPrebuilds.property.addCheck">addCheck</a></code> | <code>boolean</code> | Add a check to pull requests. |
| <code><a href="#projen.GitpodPrebuilds.property.addComment">addComment</a></code> | <code>boolean</code> | Add a "Review in Gitpod" button as a comment to pull requests. |
| <code><a href="#projen.GitpodPrebuilds.property.addLabel">addLabel</a></code> | <code>boolean</code> | Add a label once the prebuild is ready to pull requests. |
| <code><a href="#projen.GitpodPrebuilds.property.branches">branches</a></code> | <code>boolean</code> | Enable for all branches in this repo. |
| <code><a href="#projen.GitpodPrebuilds.property.master">master</a></code> | <code>boolean</code> | Enable for the master/default branch. |
| <code><a href="#projen.GitpodPrebuilds.property.pullRequests">pullRequests</a></code> | <code>boolean</code> | Enable for pull requests coming from this repo. |
| <code><a href="#projen.GitpodPrebuilds.property.pullRequestsFromForks">pullRequestsFromForks</a></code> | <code>boolean</code> | Enable for pull requests coming from forks. |

---

##### `addBadge`<sup>Optional</sup> <a name="addBadge" id="projen.GitpodPrebuilds.property.addBadge"></a>

```typescript
public readonly addBadge: boolean;
```

- *Type:* boolean
- *Default:* false

Add a "Review in Gitpod" button to the pull request's description.

---

##### `addCheck`<sup>Optional</sup> <a name="addCheck" id="projen.GitpodPrebuilds.property.addCheck"></a>

```typescript
public readonly addCheck: boolean;
```

- *Type:* boolean
- *Default:* true

Add a check to pull requests.

---

##### `addComment`<sup>Optional</sup> <a name="addComment" id="projen.GitpodPrebuilds.property.addComment"></a>

```typescript
public readonly addComment: boolean;
```

- *Type:* boolean
- *Default:* false

Add a "Review in Gitpod" button as a comment to pull requests.

---

##### `addLabel`<sup>Optional</sup> <a name="addLabel" id="projen.GitpodPrebuilds.property.addLabel"></a>

```typescript
public readonly addLabel: boolean;
```

- *Type:* boolean
- *Default:* false

Add a label once the prebuild is ready to pull requests.

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.GitpodPrebuilds.property.branches"></a>

```typescript
public readonly branches: boolean;
```

- *Type:* boolean
- *Default:* false

Enable for all branches in this repo.

---

##### `master`<sup>Optional</sup> <a name="master" id="projen.GitpodPrebuilds.property.master"></a>

```typescript
public readonly master: boolean;
```

- *Type:* boolean
- *Default:* true

Enable for the master/default branch.

---

##### `pullRequests`<sup>Optional</sup> <a name="pullRequests" id="projen.GitpodPrebuilds.property.pullRequests"></a>

```typescript
public readonly pullRequests: boolean;
```

- *Type:* boolean
- *Default:* true

Enable for pull requests coming from this repo.

---

##### `pullRequestsFromForks`<sup>Optional</sup> <a name="pullRequestsFromForks" id="projen.GitpodPrebuilds.property.pullRequestsFromForks"></a>

```typescript
public readonly pullRequestsFromForks: boolean;
```

- *Type:* boolean
- *Default:* false

Enable for pull requests coming from forks.

---

### GitpodTask <a name="GitpodTask" id="projen.GitpodTask"></a>

Configure options for a task to be run when opening a Gitpod workspace (e.g. running tests, or starting a dev server).

Start Mode         | Execution
Fresh Workspace    | before && init && command
Restart Workspace  | before && command
Snapshot           | before && command
Prebuild           | before && init && prebuild

#### Initializer <a name="Initializer" id="projen.GitpodTask.Initializer"></a>

```typescript
import { GitpodTask } from 'projen'

const gitpodTask: GitpodTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GitpodTask.property.command">command</a></code> | <code>string</code> | Required. |
| <code><a href="#projen.GitpodTask.property.before">before</a></code> | <code>string</code> | In case you need to run something even before init, that is a requirement for both init and command, you can use the before property. |
| <code><a href="#projen.GitpodTask.property.init">init</a></code> | <code>string</code> | The init property can be used to specify shell commands that should only be executed after a workspace was freshly cloned and needs to be initialized somehow. |
| <code><a href="#projen.GitpodTask.property.name">name</a></code> | <code>string</code> | A name for this task. |
| <code><a href="#projen.GitpodTask.property.openIn">openIn</a></code> | <code><a href="#projen.GitpodOpenIn">GitpodOpenIn</a></code> | You can configure where in the IDE the terminal should be opened. |
| <code><a href="#projen.GitpodTask.property.openMode">openMode</a></code> | <code><a href="#projen.GitpodOpenMode">GitpodOpenMode</a></code> | You can configure how the terminal should be opened relative to the previous task. |
| <code><a href="#projen.GitpodTask.property.prebuild">prebuild</a></code> | <code>string</code> | The optional prebuild command will be executed during prebuilds. |

---

##### `command`<sup>Required</sup> <a name="command" id="projen.GitpodTask.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Required.

The shell command to run

---

##### `before`<sup>Optional</sup> <a name="before" id="projen.GitpodTask.property.before"></a>

```typescript
public readonly before: string;
```

- *Type:* string

In case you need to run something even before init, that is a requirement for both init and command, you can use the before property.

---

##### `init`<sup>Optional</sup> <a name="init" id="projen.GitpodTask.property.init"></a>

```typescript
public readonly init: string;
```

- *Type:* string

The init property can be used to specify shell commands that should only be executed after a workspace was freshly cloned and needs to be initialized somehow.

Such tasks are usually builds or downloading
dependencies. Anything you only want to do once but not when you restart a workspace or start a snapshot.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.GitpodTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* task names are omitted when blank

A name for this task.

---

##### `openIn`<sup>Optional</sup> <a name="openIn" id="projen.GitpodTask.property.openIn"></a>

```typescript
public readonly openIn: GitpodOpenIn;
```

- *Type:* <a href="#projen.GitpodOpenIn">GitpodOpenIn</a>
- *Default:* GitpodOpenIn.BOTTOM

You can configure where in the IDE the terminal should be opened.

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="projen.GitpodTask.property.openMode"></a>

```typescript
public readonly openMode: GitpodOpenMode;
```

- *Type:* <a href="#projen.GitpodOpenMode">GitpodOpenMode</a>
- *Default:* GitpodOpenMode.TAB_AFTER

You can configure how the terminal should be opened relative to the previous task.

---

##### `prebuild`<sup>Optional</sup> <a name="prebuild" id="projen.GitpodTask.property.prebuild"></a>

```typescript
public readonly prebuild: string;
```

- *Type:* string

The optional prebuild command will be executed during prebuilds.

It is meant to run additional long running
processes that could be useful, e.g. running test suites.

---

### GroupRunnerOptions <a name="GroupRunnerOptions" id="projen.GroupRunnerOptions"></a>

#### Initializer <a name="Initializer" id="projen.GroupRunnerOptions.Initializer"></a>

```typescript
import { GroupRunnerOptions } from 'projen'

const groupRunnerOptions: GroupRunnerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.GroupRunnerOptions.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.GroupRunnerOptions.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |

---

##### `group`<sup>Required</sup> <a name="group" id="projen.GroupRunnerOptions.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.GroupRunnerOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

### IgnoreFileOptions <a name="IgnoreFileOptions" id="projen.IgnoreFileOptions"></a>

#### Initializer <a name="Initializer" id="projen.IgnoreFileOptions.Initializer"></a>

```typescript
import { IgnoreFileOptions } from 'projen'

const ignoreFileOptions: IgnoreFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IgnoreFileOptions.property.filterCommentLines">filterCommentLines</a></code> | <code>boolean</code> | Filter out comment lines? |
| <code><a href="#projen.IgnoreFileOptions.property.filterEmptyLines">filterEmptyLines</a></code> | <code>boolean</code> | Filter out blank/empty lines? |
| <code><a href="#projen.IgnoreFileOptions.property.ignorePatterns">ignorePatterns</a></code> | <code>string[]</code> | Patterns to add to the ignore file. |

---

##### `filterCommentLines`<sup>Optional</sup> <a name="filterCommentLines" id="projen.IgnoreFileOptions.property.filterCommentLines"></a>

```typescript
public readonly filterCommentLines: boolean;
```

- *Type:* boolean
- *Default:* true

Filter out comment lines?

---

##### `filterEmptyLines`<sup>Optional</sup> <a name="filterEmptyLines" id="projen.IgnoreFileOptions.property.filterEmptyLines"></a>

```typescript
public readonly filterEmptyLines: boolean;
```

- *Type:* boolean
- *Default:* true

Filter out blank/empty lines?

---

##### `ignorePatterns`<sup>Optional</sup> <a name="ignorePatterns" id="projen.IgnoreFileOptions.property.ignorePatterns"></a>

```typescript
public readonly ignorePatterns: string[];
```

- *Type:* string[]
- *Default:* []

Patterns to add to the ignore file.

---

### IniFileOptions <a name="IniFileOptions" id="projen.IniFileOptions"></a>

Options for `IniFile`.

#### Initializer <a name="Initializer" id="projen.IniFileOptions.Initializer"></a>

```typescript
import { IniFileOptions } from 'projen'

const iniFileOptions: IniFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IniFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.IniFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.IniFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.IniFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.IniFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.IniFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.IniFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.IniFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.IniFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.IniFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.IniFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.IniFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.IniFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.IniFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

### InitProject <a name="InitProject" id="projen.InitProject"></a>

Information passed from `projen new` to the project object when the project is first created.

It is used to generate projenrc files in various languages.

#### Initializer <a name="Initializer" id="projen.InitProject.Initializer"></a>

```typescript
import { InitProject } from 'projen'

const initProject: InitProject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.InitProject.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | Initial arguments passed to `projen new`. |
| <code><a href="#projen.InitProject.property.comments">comments</a></code> | <code><a href="#projen.InitProjectOptionHints">InitProjectOptionHints</a></code> | Include commented out options. |
| <code><a href="#projen.InitProject.property.fqn">fqn</a></code> | <code>string</code> | The JSII FQN of the project type. |
| <code><a href="#projen.InitProject.property.type">type</a></code> | <code><a href="#projen.ProjectType">ProjectType</a></code> | Project metadata. |

---

##### `args`<sup>Required</sup> <a name="args" id="projen.InitProject.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Initial arguments passed to `projen new`.

---

##### `comments`<sup>Required</sup> <a name="comments" id="projen.InitProject.property.comments"></a>

```typescript
public readonly comments: InitProjectOptionHints;
```

- *Type:* <a href="#projen.InitProjectOptionHints">InitProjectOptionHints</a>
- *Default:* InitProjectOptionHints.FEATURED

Include commented out options.

Does not apply to projenrc.json files.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="projen.InitProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

The JSII FQN of the project type.

---

##### `type`<sup>Required</sup> <a name="type" id="projen.InitProject.property.type"></a>

```typescript
public readonly type: ProjectType;
```

- *Type:* <a href="#projen.ProjectType">ProjectType</a>

Project metadata.

---

### JsonFileOptions <a name="JsonFileOptions" id="projen.JsonFileOptions"></a>

Options for `JsonFile`.

#### Initializer <a name="Initializer" id="projen.JsonFileOptions.Initializer"></a>

```typescript
import { JsonFileOptions } from 'projen'

const jsonFileOptions: JsonFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.JsonFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.JsonFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.JsonFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.JsonFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.JsonFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.JsonFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.JsonFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |
| <code><a href="#projen.JsonFileOptions.property.allowComments">allowComments</a></code> | <code>boolean</code> | Allow the use of comments in this file. |
| <code><a href="#projen.JsonFileOptions.property.newline">newline</a></code> | <code>boolean</code> | Adds a newline at the end of the file. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.JsonFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.JsonFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.JsonFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.JsonFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.JsonFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.JsonFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.JsonFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

##### `allowComments`<sup>Optional</sup> <a name="allowComments" id="projen.JsonFileOptions.property.allowComments"></a>

```typescript
public readonly allowComments: boolean;
```

- *Type:* boolean
- *Default:* false for .json files, true for .json5 and .jsonc files

Allow the use of comments in this file.

---

##### `newline`<sup>Optional</sup> <a name="newline" id="projen.JsonFileOptions.property.newline"></a>

```typescript
public readonly newline: boolean;
```

- *Type:* boolean
- *Default:* true

Adds a newline at the end of the file.

---

### LicenseOptions <a name="LicenseOptions" id="projen.LicenseOptions"></a>

#### Initializer <a name="Initializer" id="projen.LicenseOptions.Initializer"></a>

```typescript
import { LicenseOptions } from 'projen'

const licenseOptions: LicenseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.LicenseOptions.property.spdx">spdx</a></code> | <code>string</code> | License type (SPDX). |
| <code><a href="#projen.LicenseOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | Copyright owner. |
| <code><a href="#projen.LicenseOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | Period of license (e.g. "1998-2023"). |

---

##### `spdx`<sup>Required</sup> <a name="spdx" id="projen.LicenseOptions.property.spdx"></a>

```typescript
public readonly spdx: string;
```

- *Type:* string

License type (SPDX).

> [https://github.com/projen/projen/tree/main/license-text for list of supported licenses](https://github.com/projen/projen/tree/main/license-text for list of supported licenses)

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen.LicenseOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* 

Copyright owner.

If the license text has $copyright_owner, this option must be specified.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen.LicenseOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year (e.g. "2020")

Period of license (e.g. "1998-2023").

The string `$copyright_period` will be substituted with this string.

---

### LoggerOptions <a name="LoggerOptions" id="projen.LoggerOptions"></a>

Options for logging utilities.

#### Initializer <a name="Initializer" id="projen.LoggerOptions.Initializer"></a>

```typescript
import { LoggerOptions } from 'projen'

const loggerOptions: LoggerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.LoggerOptions.property.level">level</a></code> | <code><a href="#projen.LogLevel">LogLevel</a></code> | The logging verbosity. |
| <code><a href="#projen.LoggerOptions.property.usePrefix">usePrefix</a></code> | <code>boolean</code> | Include a prefix for all logging messages with the project name. |

---

##### `level`<sup>Optional</sup> <a name="level" id="projen.LoggerOptions.property.level"></a>

```typescript
public readonly level: LogLevel;
```

- *Type:* <a href="#projen.LogLevel">LogLevel</a>
- *Default:* LogLevel.INFO

The logging verbosity.

The levels available (in increasing verbosity) are
OFF, ERROR, WARN, INFO, DEBUG, and VERBOSE.

---

##### `usePrefix`<sup>Optional</sup> <a name="usePrefix" id="projen.LoggerOptions.property.usePrefix"></a>

```typescript
public readonly usePrefix: boolean;
```

- *Type:* boolean
- *Default:* false

Include a prefix for all logging messages with the project name.

---

### MakefileOptions <a name="MakefileOptions" id="projen.MakefileOptions"></a>

Options for Makefiles.

#### Initializer <a name="Initializer" id="projen.MakefileOptions.Initializer"></a>

```typescript
import { MakefileOptions } from 'projen'

const makefileOptions: MakefileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.MakefileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.MakefileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.MakefileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.MakefileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.MakefileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.MakefileOptions.property.all">all</a></code> | <code>string[]</code> | List of targets to build when Make is invoked without specifying any targets. |
| <code><a href="#projen.MakefileOptions.property.rules">rules</a></code> | <code><a href="#projen.Rule">Rule</a>[]</code> | Rules to include in the Makefile. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.MakefileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.MakefileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.MakefileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.MakefileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.MakefileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `all`<sup>Optional</sup> <a name="all" id="projen.MakefileOptions.property.all"></a>

```typescript
public readonly all: string[];
```

- *Type:* string[]
- *Default:* []

List of targets to build when Make is invoked without specifying any targets.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="projen.MakefileOptions.property.rules"></a>

```typescript
public readonly rules: Rule[];
```

- *Type:* <a href="#projen.Rule">Rule</a>[]
- *Default:* []

Rules to include in the Makefile.

---

### ObjectFileOptions <a name="ObjectFileOptions" id="projen.ObjectFileOptions"></a>

Options for `ObjectFile`.

#### Initializer <a name="Initializer" id="projen.ObjectFileOptions.Initializer"></a>

```typescript
import { ObjectFileOptions } from 'projen'

const objectFileOptions: ObjectFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ObjectFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.ObjectFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.ObjectFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.ObjectFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.ObjectFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.ObjectFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.ObjectFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.ObjectFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.ObjectFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.ObjectFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.ObjectFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.ObjectFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.ObjectFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.ObjectFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

### ProjectOptions <a name="ProjectOptions" id="projen.ProjectOptions"></a>

Options for `Project`.

#### Initializer <a name="Initializer" id="projen.ProjectOptions.Initializer"></a>

```typescript
import { ProjectOptions } from 'projen'

const projectOptions: ProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen.ProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen.ProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code><a href="#projen.IgnoreFileOptions">IgnoreFileOptions</a></code> | Configuration options for .gitignore file. |
| <code><a href="#projen.ProjectOptions.property.gitOptions">gitOptions</a></code> | <code><a href="#projen.GitOptions">GitOptions</a></code> | Configuration options for git. |
| <code><a href="#projen.ProjectOptions.property.logging">logging</a></code> | <code><a href="#projen.LoggerOptions">LoggerOptions</a></code> | Configure logging options such as verbosity. |
| <code><a href="#projen.ProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen.ProjectOptions.property.parent">parent</a></code> | <code><a href="#projen.Project">Project</a></code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen.ProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen.ProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen.ProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code><a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a></code> | Options for .projenrc.json. |
| <code><a href="#projen.ProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen.ProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code><a href="#projen.RenovatebotOptions">RenovatebotOptions</a></code> | Options for renovatebot. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.ProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen.ProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen.ProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* <a href="#projen.IgnoreFileOptions">IgnoreFileOptions</a>

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen.ProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* <a href="#projen.GitOptions">GitOptions</a>

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen.ProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* <a href="#projen.LoggerOptions">LoggerOptions</a>
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen.ProjectOptions.property.outdir"></a>

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

##### `parent`<sup>Optional</sup> <a name="parent" id="projen.ProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* <a href="#projen.Project">Project</a>

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen.ProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen.ProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen.ProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* <a href="#projen.ProjenrcJsonOptions">ProjenrcJsonOptions</a>
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen.ProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen.ProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* <a href="#projen.RenovatebotOptions">RenovatebotOptions</a>
- *Default:* default options

Options for renovatebot.

---

### ProjenrcJsonOptions <a name="ProjenrcJsonOptions" id="projen.ProjenrcJsonOptions"></a>

#### Initializer <a name="Initializer" id="projen.ProjenrcJsonOptions.Initializer"></a>

```typescript
import { ProjenrcJsonOptions } from 'projen'

const projenrcJsonOptions: ProjenrcJsonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcJsonOptions.property.filename">filename</a></code> | <code>string</code> | The name of the projenrc file. |

---

##### `filename`<sup>Optional</sup> <a name="filename" id="projen.ProjenrcJsonOptions.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* ".projenrc.json"

The name of the projenrc file.

---

### ProjenrcOptions <a name="ProjenrcOptions" id="projen.ProjenrcOptions"></a>

#### Initializer <a name="Initializer" id="projen.ProjenrcOptions.Initializer"></a>

```typescript
import { ProjenrcOptions } from 'projen'

const projenrcOptions: ProjenrcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ProjenrcOptions.property.filename">filename</a></code> | <code>string</code> | The name of the projenrc file. |

---

##### ~~`filename`~~<sup>Optional</sup> <a name="filename" id="projen.ProjenrcOptions.property.filename"></a>

- *Deprecated:* use `ProjenrcJsonOptions`

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* ".projenrc.json"

The name of the projenrc file.

---

### RenovatebotOptions <a name="RenovatebotOptions" id="projen.RenovatebotOptions"></a>

Options for Renovatebot.

#### Initializer <a name="Initializer" id="projen.RenovatebotOptions.Initializer"></a>

```typescript
import { RenovatebotOptions } from 'projen'

const renovatebotOptions: RenovatebotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.RenovatebotOptions.property.ignore">ignore</a></code> | <code>string[]</code> | You can use the `ignore` option to customize which dependencies are updated. |
| <code><a href="#projen.RenovatebotOptions.property.ignoreProjen">ignoreProjen</a></code> | <code>boolean</code> | Ignores updates to `projen`. |
| <code><a href="#projen.RenovatebotOptions.property.labels">labels</a></code> | <code>string[]</code> | List of labels to apply to the created PR's. |
| <code><a href="#projen.RenovatebotOptions.property.marker">marker</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.RenovatebotOptions.property.overrideConfig">overrideConfig</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen.RenovatebotOptions.property.scheduleInterval">scheduleInterval</a></code> | <code>string[]</code> | How often to check for new versions and raise pull requests. |

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="projen.RenovatebotOptions.property.ignore"></a>

```typescript
public readonly ignore: string[];
```

- *Type:* string[]
- *Default:* []

You can use the `ignore` option to customize which dependencies are updated.

The ignore option supports just package name.

---

##### `ignoreProjen`<sup>Optional</sup> <a name="ignoreProjen" id="projen.RenovatebotOptions.property.ignoreProjen"></a>

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

##### `labels`<sup>Optional</sup> <a name="labels" id="projen.RenovatebotOptions.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

List of labels to apply to the created PR's.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.RenovatebotOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean

---

##### `overrideConfig`<sup>Optional</sup> <a name="overrideConfig" id="projen.RenovatebotOptions.property.overrideConfig"></a>

```typescript
public readonly overrideConfig: any;
```

- *Type:* any

---

##### `scheduleInterval`<sup>Optional</sup> <a name="scheduleInterval" id="projen.RenovatebotOptions.property.scheduleInterval"></a>

```typescript
public readonly scheduleInterval: string[];
```

- *Type:* string[]
- *Default:* ["at any time"]

How often to check for new versions and raise pull requests.

Can be given in CRON or LATER format, and use multiple schedules
(e.g. different for weekdays and weekends). Multiple rules are
handles as OR.

Some normal scheduling values defined in enum `RenovatebotScheduleInterval`.

> [https://docs.renovatebot.com/configuration-options/#schedule](https://docs.renovatebot.com/configuration-options/#schedule)

---

### ResolveOptions <a name="ResolveOptions" id="projen.ResolveOptions"></a>

Resolve options.

#### Initializer <a name="Initializer" id="projen.ResolveOptions.Initializer"></a>

```typescript
import { ResolveOptions } from 'projen'

const resolveOptions: ResolveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ResolveOptions.property.args">args</a></code> | <code>any[]</code> | Context arguments. |
| <code><a href="#projen.ResolveOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty arrays and objects. |

---

##### `args`<sup>Optional</sup> <a name="args" id="projen.ResolveOptions.property.args"></a>

```typescript
public readonly args: any[];
```

- *Type:* any[]
- *Default:* []

Context arguments.

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.ResolveOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty arrays and objects.

---

### Rule <a name="Rule" id="projen.Rule"></a>

A Make rule.

#### Initializer <a name="Initializer" id="projen.Rule.Initializer"></a>

```typescript
import { Rule } from 'projen'

const rule: Rule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Rule.property.targets">targets</a></code> | <code>string[]</code> | Files to be created or updated by this rule. |
| <code><a href="#projen.Rule.property.phony">phony</a></code> | <code>boolean</code> | Marks whether the target is phony. |
| <code><a href="#projen.Rule.property.prerequisites">prerequisites</a></code> | <code>string[]</code> | Files that are used as inputs to create a target. |
| <code><a href="#projen.Rule.property.recipe">recipe</a></code> | <code>string[]</code> | Commands that are run (using prerequisites as inputs) to create a target. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="projen.Rule.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

Files to be created or updated by this rule.

If the rule is phony then instead this represents the command's name(s).

---

##### `phony`<sup>Optional</sup> <a name="phony" id="projen.Rule.property.phony"></a>

```typescript
public readonly phony: boolean;
```

- *Type:* boolean
- *Default:* false

Marks whether the target is phony.

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="projen.Rule.property.prerequisites"></a>

```typescript
public readonly prerequisites: string[];
```

- *Type:* string[]
- *Default:* []

Files that are used as inputs to create a target.

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="projen.Rule.property.recipe"></a>

```typescript
public readonly recipe: string[];
```

- *Type:* string[]
- *Default:* []

Commands that are run (using prerequisites as inputs) to create a target.

---

### SampleDirOptions <a name="SampleDirOptions" id="projen.SampleDirOptions"></a>

SampleDir options.

#### Initializer <a name="Initializer" id="projen.SampleDirOptions.Initializer"></a>

```typescript
import { SampleDirOptions } from 'projen'

const sampleDirOptions: SampleDirOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleDirOptions.property.files">files</a></code> | <code>{[ key: string ]: string}</code> | The files to render into the directory. |
| <code><a href="#projen.SampleDirOptions.property.sourceDir">sourceDir</a></code> | <code>string</code> | Absolute path to a directory to copy files from (does not need to be text files). |

---

##### `files`<sup>Optional</sup> <a name="files" id="projen.SampleDirOptions.property.files"></a>

```typescript
public readonly files: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The files to render into the directory.

These files get added after
any files from `source` if that option is specified (replacing if names
overlap).

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="projen.SampleDirOptions.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

Absolute path to a directory to copy files from (does not need to be text files).

If your project is typescript-based and has configured `testdir` to be a
subdirectory of `src`, sample files should outside of the `src` directory
otherwise they may not be copied. For example:
```
new SampleDir(this, 'public', { source: path.join(__dirname, '..', 'sample-assets') });
```

---

### SampleFileOptions <a name="SampleFileOptions" id="projen.SampleFileOptions"></a>

Options for the SampleFile object.

#### Initializer <a name="Initializer" id="projen.SampleFileOptions.Initializer"></a>

```typescript
import { SampleFileOptions } from 'projen'

const sampleFileOptions: SampleFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleFileOptions.property.contents">contents</a></code> | <code>string</code> | The contents of the file to write. |
| <code><a href="#projen.SampleFileOptions.property.sourcePath">sourcePath</a></code> | <code>string</code> | Absolute path to a file to copy the contents from (does not need to be a text file). |

---

##### `contents`<sup>Optional</sup> <a name="contents" id="projen.SampleFileOptions.property.contents"></a>

```typescript
public readonly contents: string;
```

- *Type:* string

The contents of the file to write.

---

##### `sourcePath`<sup>Optional</sup> <a name="sourcePath" id="projen.SampleFileOptions.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

Absolute path to a file to copy the contents from (does not need to be a text file).

If your project is Typescript-based and has configured `testdir` to be a
subdirectory of `src`, sample files should outside of the `src` directory,
otherwise they may not be copied. For example:
```
new SampleFile(this, 'assets/icon.png', { sourcePath: path.join(__dirname, '..', 'sample-assets', 'icon.png') });
```

---

### SampleReadmeProps <a name="SampleReadmeProps" id="projen.SampleReadmeProps"></a>

SampleReadme Properties.

#### Initializer <a name="Initializer" id="projen.SampleReadmeProps.Initializer"></a>

```typescript
import { SampleReadmeProps } from 'projen'

const sampleReadmeProps: SampleReadmeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SampleReadmeProps.property.contents">contents</a></code> | <code>string</code> | The contents. |
| <code><a href="#projen.SampleReadmeProps.property.filename">filename</a></code> | <code>string</code> | The name of the README.md file. |

---

##### `contents`<sup>Optional</sup> <a name="contents" id="projen.SampleReadmeProps.property.contents"></a>

```typescript
public readonly contents: string;
```

- *Type:* string
- *Default:* "# replace this"

The contents.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="projen.SampleReadmeProps.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string
- *Default:* "README.md"

The name of the README.md file.

---

*Example*

```typescript
"readme.md"
```


### SnapshotOptions <a name="SnapshotOptions" id="projen.SnapshotOptions"></a>

Options for the Snapshot synthesis.

#### Initializer <a name="Initializer" id="projen.SnapshotOptions.Initializer"></a>

```typescript
import { SnapshotOptions } from 'projen'

const snapshotOptions: SnapshotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SnapshotOptions.property.parseJson">parseJson</a></code> | <code>boolean</code> | Parse .json files as a JS object for improved inspection. This will fail if the contents are invalid JSON. |

---

##### `parseJson`<sup>Optional</sup> <a name="parseJson" id="projen.SnapshotOptions.property.parseJson"></a>

```typescript
public readonly parseJson: boolean;
```

- *Type:* boolean
- *Default:* true parse .json files into an object

Parse .json files as a JS object for improved inspection. This will fail if the contents are invalid JSON.

---

### SourceCodeOptions <a name="SourceCodeOptions" id="projen.SourceCodeOptions"></a>

Options for `SourceCodeFile`.

#### Initializer <a name="Initializer" id="projen.SourceCodeOptions.Initializer"></a>

```typescript
import { SourceCodeOptions } from 'projen'

const sourceCodeOptions: SourceCodeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.SourceCodeOptions.property.indent">indent</a></code> | <code>number</code> | Indentation size. |
| <code><a href="#projen.SourceCodeOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |

---

##### `indent`<sup>Optional</sup> <a name="indent" id="projen.SourceCodeOptions.property.indent"></a>

```typescript
public readonly indent: number;
```

- *Type:* number
- *Default:* 2

Indentation size.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.SourceCodeOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

### TaskCommonOptions <a name="TaskCommonOptions" id="projen.TaskCommonOptions"></a>

#### Initializer <a name="Initializer" id="projen.TaskCommonOptions.Initializer"></a>

```typescript
import { TaskCommonOptions } from 'projen'

const taskCommonOptions: TaskCommonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskCommonOptions.property.condition">condition</a></code> | <code>string</code> | A shell command which determines if the this task should be executed. |
| <code><a href="#projen.TaskCommonOptions.property.cwd">cwd</a></code> | <code>string</code> | The working directory for all steps in this task (unless overridden by the step). |
| <code><a href="#projen.TaskCommonOptions.property.description">description</a></code> | <code>string</code> | The description of this build command. |
| <code><a href="#projen.TaskCommonOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Defines environment variables for the execution of this task. |
| <code><a href="#projen.TaskCommonOptions.property.requiredEnv">requiredEnv</a></code> | <code>string[]</code> | A set of environment variables that must be defined in order to execute this task. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.TaskCommonOptions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A shell command which determines if the this task should be executed.

If
the program exits with a zero exit code, steps will be executed. A non-zero
code means that task will be skipped.

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.TaskCommonOptions.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string
- *Default:* process.cwd()

The working directory for all steps in this task (unless overridden by the step).

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.TaskCommonOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* the task name

The description of this build command.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TaskCommonOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Defines environment variables for the execution of this task.

Values in this map will be evaluated in a shell, so you can do stuff like `$(echo "foo")`.

---

##### `requiredEnv`<sup>Optional</sup> <a name="requiredEnv" id="projen.TaskCommonOptions.property.requiredEnv"></a>

```typescript
public readonly requiredEnv: string[];
```

- *Type:* string[]

A set of environment variables that must be defined in order to execute this task.

Task execution will fail if one of these is not defined.

---

### TaskOptions <a name="TaskOptions" id="projen.TaskOptions"></a>

#### Initializer <a name="Initializer" id="projen.TaskOptions.Initializer"></a>

```typescript
import { TaskOptions } from 'projen'

const taskOptions: TaskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskOptions.property.condition">condition</a></code> | <code>string</code> | A shell command which determines if the this task should be executed. |
| <code><a href="#projen.TaskOptions.property.cwd">cwd</a></code> | <code>string</code> | The working directory for all steps in this task (unless overridden by the step). |
| <code><a href="#projen.TaskOptions.property.description">description</a></code> | <code>string</code> | The description of this build command. |
| <code><a href="#projen.TaskOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Defines environment variables for the execution of this task. |
| <code><a href="#projen.TaskOptions.property.requiredEnv">requiredEnv</a></code> | <code>string[]</code> | A set of environment variables that must be defined in order to execute this task. |
| <code><a href="#projen.TaskOptions.property.args">args</a></code> | <code>string[]</code> | Should the provided `exec` shell command receive fixed args. |
| <code><a href="#projen.TaskOptions.property.exec">exec</a></code> | <code>string</code> | Shell command to execute as the first command of the task. |
| <code><a href="#projen.TaskOptions.property.receiveArgs">receiveArgs</a></code> | <code>boolean</code> | Should the provided `exec` shell command receive args passed to the task. |
| <code><a href="#projen.TaskOptions.property.steps">steps</a></code> | <code><a href="#projen.TaskStep">TaskStep</a>[]</code> | List of task steps to run. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.TaskOptions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A shell command which determines if the this task should be executed.

If
the program exits with a zero exit code, steps will be executed. A non-zero
code means that task will be skipped.

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.TaskOptions.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string
- *Default:* process.cwd()

The working directory for all steps in this task (unless overridden by the step).

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.TaskOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* the task name

The description of this build command.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TaskOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Defines environment variables for the execution of this task.

Values in this map will be evaluated in a shell, so you can do stuff like `$(echo "foo")`.

---

##### `requiredEnv`<sup>Optional</sup> <a name="requiredEnv" id="projen.TaskOptions.property.requiredEnv"></a>

```typescript
public readonly requiredEnv: string[];
```

- *Type:* string[]

A set of environment variables that must be defined in order to execute this task.

Task execution will fail if one of these is not defined.

---

##### `args`<sup>Optional</sup> <a name="args" id="projen.TaskOptions.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]
- *Default:* no arguments are passed to the step

Should the provided `exec` shell command receive fixed args.

> [{@link TaskStepOptions.args }]({@link TaskStepOptions.args })

---

##### `exec`<sup>Optional</sup> <a name="exec" id="projen.TaskOptions.property.exec"></a>

```typescript
public readonly exec: string;
```

- *Type:* string
- *Default:* add steps using `task.exec(command)` or `task.spawn(subtask)`

Shell command to execute as the first command of the task.

---

##### `receiveArgs`<sup>Optional</sup> <a name="receiveArgs" id="projen.TaskOptions.property.receiveArgs"></a>

```typescript
public readonly receiveArgs: boolean;
```

- *Type:* boolean
- *Default:* false

Should the provided `exec` shell command receive args passed to the task.

> [{@link TaskStepOptions.receiveArgs }]({@link TaskStepOptions.receiveArgs })

---

##### `steps`<sup>Optional</sup> <a name="steps" id="projen.TaskOptions.property.steps"></a>

```typescript
public readonly steps: TaskStep[];
```

- *Type:* <a href="#projen.TaskStep">TaskStep</a>[]

List of task steps to run.

---

### TasksManifest <a name="TasksManifest" id="projen.TasksManifest"></a>

Schema for `tasks.json`.

#### Initializer <a name="Initializer" id="projen.TasksManifest.Initializer"></a>

```typescript
import { TasksManifest } from 'projen'

const tasksManifest: TasksManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TasksManifest.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Environment for all tasks. |
| <code><a href="#projen.TasksManifest.property.tasks">tasks</a></code> | <code>{[ key: string ]: <a href="#projen.TaskSpec">TaskSpec</a>}</code> | All tasks available for this project. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TasksManifest.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment for all tasks.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="projen.TasksManifest.property.tasks"></a>

```typescript
public readonly tasks: {[ key: string ]: TaskSpec};
```

- *Type:* {[ key: string ]: <a href="#projen.TaskSpec">TaskSpec</a>}

All tasks available for this project.

---

### TaskSpec <a name="TaskSpec" id="projen.TaskSpec"></a>

Specification of a single task.

#### Initializer <a name="Initializer" id="projen.TaskSpec.Initializer"></a>

```typescript
import { TaskSpec } from 'projen'

const taskSpec: TaskSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskSpec.property.condition">condition</a></code> | <code>string</code> | A shell command which determines if the this task should be executed. |
| <code><a href="#projen.TaskSpec.property.cwd">cwd</a></code> | <code>string</code> | The working directory for all steps in this task (unless overridden by the step). |
| <code><a href="#projen.TaskSpec.property.description">description</a></code> | <code>string</code> | The description of this build command. |
| <code><a href="#projen.TaskSpec.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Defines environment variables for the execution of this task. |
| <code><a href="#projen.TaskSpec.property.requiredEnv">requiredEnv</a></code> | <code>string[]</code> | A set of environment variables that must be defined in order to execute this task. |
| <code><a href="#projen.TaskSpec.property.name">name</a></code> | <code>string</code> | Task name. |
| <code><a href="#projen.TaskSpec.property.steps">steps</a></code> | <code><a href="#projen.TaskStep">TaskStep</a>[]</code> | Task steps. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.TaskSpec.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A shell command which determines if the this task should be executed.

If
the program exits with a zero exit code, steps will be executed. A non-zero
code means that task will be skipped.

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.TaskSpec.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string
- *Default:* process.cwd()

The working directory for all steps in this task (unless overridden by the step).

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.TaskSpec.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* the task name

The description of this build command.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TaskSpec.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Defines environment variables for the execution of this task.

Values in this map will be evaluated in a shell, so you can do stuff like `$(echo "foo")`.

---

##### `requiredEnv`<sup>Optional</sup> <a name="requiredEnv" id="projen.TaskSpec.property.requiredEnv"></a>

```typescript
public readonly requiredEnv: string[];
```

- *Type:* string[]

A set of environment variables that must be defined in order to execute this task.

Task execution will fail if one of these is not defined.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.TaskSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Task name.

---

##### `steps`<sup>Optional</sup> <a name="steps" id="projen.TaskSpec.property.steps"></a>

```typescript
public readonly steps: TaskStep[];
```

- *Type:* <a href="#projen.TaskStep">TaskStep</a>[]

Task steps.

---

### TaskStep <a name="TaskStep" id="projen.TaskStep"></a>

A single step within a task.

The step could either be  the execution of a
shell command or execution of a sub-task, by name.

#### Initializer <a name="Initializer" id="projen.TaskStep.Initializer"></a>

```typescript
import { TaskStep } from 'projen'

const taskStep: TaskStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskStep.property.args">args</a></code> | <code>string[]</code> | A list of fixed arguments always passed to the step. |
| <code><a href="#projen.TaskStep.property.condition">condition</a></code> | <code>string</code> | A shell command which determines if the this step should be executed. |
| <code><a href="#projen.TaskStep.property.cwd">cwd</a></code> | <code>string</code> | The working directory for this step. |
| <code><a href="#projen.TaskStep.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Defines environment variables for the execution of this step (`exec` and `builtin` only). |
| <code><a href="#projen.TaskStep.property.name">name</a></code> | <code>string</code> | Step name. |
| <code><a href="#projen.TaskStep.property.receiveArgs">receiveArgs</a></code> | <code>boolean</code> | Should this step receive args passed to the task. |
| <code><a href="#projen.TaskStep.property.builtin">builtin</a></code> | <code>string</code> | The name of a built-in task to execute. |
| <code><a href="#projen.TaskStep.property.exec">exec</a></code> | <code>string</code> | Shell command to execute. |
| <code><a href="#projen.TaskStep.property.say">say</a></code> | <code>string</code> | Print a message. |
| <code><a href="#projen.TaskStep.property.spawn">spawn</a></code> | <code>string</code> | Subtask to execute. |

---

##### `args`<sup>Optional</sup> <a name="args" id="projen.TaskStep.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]
- *Default:* no arguments are passed to the step

A list of fixed arguments always passed to the step.

Useful to re-use existing tasks without having to re-define the whole task.\
Fixed args are always passed to the step, even if `receiveArgs` is `false`
and are always passed before any args the task is called with.

If the step executes a shell commands, args are passed through at the end of the `exec` shell command.\
The position of the args can be changed by including the marker `$@` inside the command string.

If the step spawns a subtask, args are passed to the subtask.
The subtask must define steps receiving args for this to have any effect.

If the step calls a builtin script, args are passed to the script.
It is up to the script to use or discard the arguments.

---

*Example*

```typescript
task.spawn("deploy", { args: ["--force"] });
```


##### `condition`<sup>Optional</sup> <a name="condition" id="projen.TaskStep.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A shell command which determines if the this step should be executed.

If
the program exits with a zero exit code, the step will be executed. A non-zero
code means the step will be skipped (subsequent task steps will still be evaluated/executed).

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.TaskStep.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string
- *Default:* determined by the task

The working directory for this step.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TaskStep.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables defined in step

Defines environment variables for the execution of this step (`exec` and `builtin` only).

Values in this map can be simple, literal values or shell expressions that will be evaluated at runtime e.g. `$(echo "foo")`.

---

*Example*

```typescript
{ "foo": "bar", "boo": "$(echo baz)" }
```


##### `name`<sup>Optional</sup> <a name="name" id="projen.TaskStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* no name

Step name.

---

##### `receiveArgs`<sup>Optional</sup> <a name="receiveArgs" id="projen.TaskStep.property.receiveArgs"></a>

```typescript
public readonly receiveArgs: boolean;
```

- *Type:* boolean
- *Default:* false

Should this step receive args passed to the task.

If `true`, args are passed through at the end of the `exec` shell command.\
The position of the args can be changed by including the marker `$@` inside the command string.

If the step spawns a subtask, args are passed to the subtask.
The subtask must define steps receiving args for this to have any effect.

---

*Example*

```typescript
task.exec("echo Hello $@ World!", { receiveArgs: true });
```


##### `builtin`<sup>Optional</sup> <a name="builtin" id="projen.TaskStep.property.builtin"></a>

```typescript
public readonly builtin: string;
```

- *Type:* string
- *Default:* do not execute a builtin task

The name of a built-in task to execute.

Built-in tasks are node.js programs baked into the projen module and as
component runtime helpers.

The name is a path relative to the projen lib/ directory (without the .task.js extension).
For example, if your built in builtin task is under `src/release/resolve-version.task.ts`,
then this would be `release/resolve-version`.

---

##### `exec`<sup>Optional</sup> <a name="exec" id="projen.TaskStep.property.exec"></a>

```typescript
public readonly exec: string;
```

- *Type:* string
- *Default:* don't execute a shell command

Shell command to execute.

---

##### `say`<sup>Optional</sup> <a name="say" id="projen.TaskStep.property.say"></a>

```typescript
public readonly say: string;
```

- *Type:* string
- *Default:* don't say anything

Print a message.

---

##### `spawn`<sup>Optional</sup> <a name="spawn" id="projen.TaskStep.property.spawn"></a>

```typescript
public readonly spawn: string;
```

- *Type:* string
- *Default:* don't spawn a subtask

Subtask to execute.

---

### TaskStepOptions <a name="TaskStepOptions" id="projen.TaskStepOptions"></a>

Options for task steps.

#### Initializer <a name="Initializer" id="projen.TaskStepOptions.Initializer"></a>

```typescript
import { TaskStepOptions } from 'projen'

const taskStepOptions: TaskStepOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskStepOptions.property.args">args</a></code> | <code>string[]</code> | A list of fixed arguments always passed to the step. |
| <code><a href="#projen.TaskStepOptions.property.condition">condition</a></code> | <code>string</code> | A shell command which determines if the this step should be executed. |
| <code><a href="#projen.TaskStepOptions.property.cwd">cwd</a></code> | <code>string</code> | The working directory for this step. |
| <code><a href="#projen.TaskStepOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Defines environment variables for the execution of this step (`exec` and `builtin` only). |
| <code><a href="#projen.TaskStepOptions.property.name">name</a></code> | <code>string</code> | Step name. |
| <code><a href="#projen.TaskStepOptions.property.receiveArgs">receiveArgs</a></code> | <code>boolean</code> | Should this step receive args passed to the task. |

---

##### `args`<sup>Optional</sup> <a name="args" id="projen.TaskStepOptions.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]
- *Default:* no arguments are passed to the step

A list of fixed arguments always passed to the step.

Useful to re-use existing tasks without having to re-define the whole task.\
Fixed args are always passed to the step, even if `receiveArgs` is `false`
and are always passed before any args the task is called with.

If the step executes a shell commands, args are passed through at the end of the `exec` shell command.\
The position of the args can be changed by including the marker `$@` inside the command string.

If the step spawns a subtask, args are passed to the subtask.
The subtask must define steps receiving args for this to have any effect.

If the step calls a builtin script, args are passed to the script.
It is up to the script to use or discard the arguments.

---

*Example*

```typescript
task.spawn("deploy", { args: ["--force"] });
```


##### `condition`<sup>Optional</sup> <a name="condition" id="projen.TaskStepOptions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A shell command which determines if the this step should be executed.

If
the program exits with a zero exit code, the step will be executed. A non-zero
code means the step will be skipped (subsequent task steps will still be evaluated/executed).

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.TaskStepOptions.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string
- *Default:* determined by the task

The working directory for this step.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.TaskStepOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* no environment variables defined in step

Defines environment variables for the execution of this step (`exec` and `builtin` only).

Values in this map can be simple, literal values or shell expressions that will be evaluated at runtime e.g. `$(echo "foo")`.

---

*Example*

```typescript
{ "foo": "bar", "boo": "$(echo baz)" }
```


##### `name`<sup>Optional</sup> <a name="name" id="projen.TaskStepOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* no name

Step name.

---

##### `receiveArgs`<sup>Optional</sup> <a name="receiveArgs" id="projen.TaskStepOptions.property.receiveArgs"></a>

```typescript
public readonly receiveArgs: boolean;
```

- *Type:* boolean
- *Default:* false

Should this step receive args passed to the task.

If `true`, args are passed through at the end of the `exec` shell command.\
The position of the args can be changed by including the marker `$@` inside the command string.

If the step spawns a subtask, args are passed to the subtask.
The subtask must define steps receiving args for this to have any effect.

---

*Example*

```typescript
task.exec("echo Hello $@ World!", { receiveArgs: true });
```


### TextFileOptions <a name="TextFileOptions" id="projen.TextFileOptions"></a>

Options for `TextFile`.

#### Initializer <a name="Initializer" id="projen.TextFileOptions.Initializer"></a>

```typescript
import { TextFileOptions } from 'projen'

const textFileOptions: TextFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TextFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.TextFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.TextFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.TextFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.TextFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.TextFileOptions.property.lines">lines</a></code> | <code>string[]</code> | The contents of the text file. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.TextFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.TextFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.TextFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.TextFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.TextFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `lines`<sup>Optional</sup> <a name="lines" id="projen.TextFileOptions.property.lines"></a>

```typescript
public readonly lines: string[];
```

- *Type:* string[]
- *Default:* [] empty file

The contents of the text file.

You can use `addLine()` to append lines.

---

### TomlFileOptions <a name="TomlFileOptions" id="projen.TomlFileOptions"></a>

Options for `TomlFile`.

#### Initializer <a name="Initializer" id="projen.TomlFileOptions.Initializer"></a>

```typescript
import { TomlFileOptions } from 'projen'

const tomlFileOptions: TomlFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TomlFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.TomlFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.TomlFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.TomlFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.TomlFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.TomlFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.TomlFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.TomlFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.TomlFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.TomlFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.TomlFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.TomlFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.TomlFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.TomlFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

### VersionBranchOptions <a name="VersionBranchOptions" id="projen.VersionBranchOptions"></a>

Options to pass to `modifyBranchEnvironment`.

#### Initializer <a name="Initializer" id="projen.VersionBranchOptions.Initializer"></a>

```typescript
import { VersionBranchOptions } from 'projen'

const versionBranchOptions: VersionBranchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.VersionBranchOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | The major versions released from this branch. |
| <code><a href="#projen.VersionBranchOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | The minimum major version to release. |
| <code><a href="#projen.VersionBranchOptions.property.minorVersion">minorVersion</a></code> | <code>number</code> | The minor versions released from this branch. |
| <code><a href="#projen.VersionBranchOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump the version as a pre-release tag. |
| <code><a href="#projen.VersionBranchOptions.property.tagPrefix">tagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen.VersionBranchOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number

The major versions released from this branch.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen.VersionBranchOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number

The minimum major version to release.

---

##### `minorVersion`<sup>Optional</sup> <a name="minorVersion" id="projen.VersionBranchOptions.property.minorVersion"></a>

```typescript
public readonly minorVersion: number;
```

- *Type:* number

The minor versions released from this branch.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen.VersionBranchOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal releases

Bump the version as a pre-release tag.

---

##### `tagPrefix`<sup>Optional</sup> <a name="tagPrefix" id="projen.VersionBranchOptions.property.tagPrefix"></a>

```typescript
public readonly tagPrefix: string;
```

- *Type:* string
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

### VersionOptions <a name="VersionOptions" id="projen.VersionOptions"></a>

Options for `Version`.

#### Initializer <a name="Initializer" id="projen.VersionOptions.Initializer"></a>

```typescript
import { VersionOptions } from 'projen'

const versionOptions: VersionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.VersionOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The name of the directory into which `changelog.md` and `version.txt` files are emitted. |
| <code><a href="#projen.VersionOptions.property.versionInputFile">versionInputFile</a></code> | <code>string</code> | A name of a .json file to set the `version` field in after a bump. |
| <code><a href="#projen.VersionOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#projen.VersionOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#projen.VersionOptions.property.releasableCommits">releasableCommits</a></code> | <code><a href="#projen.ReleasableCommits">ReleasableCommits</a></code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen.VersionOptions.property.tagPrefix">tagPrefix</a></code> | <code>string</code> | The tag prefix corresponding to this version. |
| <code><a href="#projen.VersionOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration for versionrc file used by standard-release. |

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen.VersionOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The name of the directory into which `changelog.md` and `version.txt` files are emitted.

---

##### `versionInputFile`<sup>Required</sup> <a name="versionInputFile" id="projen.VersionOptions.property.versionInputFile"></a>

```typescript
public readonly versionInputFile: string;
```

- *Type:* string

A name of a .json file to set the `version` field in after a bump.

---

*Example*

```typescript
"package.json"
```


##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="projen.VersionOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* "commit-and-tag-version@12"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="projen.VersionOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen.VersionOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* <a href="#projen.ReleasableCommits">ReleasableCommits</a>
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `tagPrefix`<sup>Optional</sup> <a name="tagPrefix" id="projen.VersionOptions.property.tagPrefix"></a>

```typescript
public readonly tagPrefix: string;
```

- *Type:* string

The tag prefix corresponding to this version.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen.VersionOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Custom configuration for versionrc file used by standard-release.

---

### XmlFileOptions <a name="XmlFileOptions" id="projen.XmlFileOptions"></a>

Options for `XmlFile`.

#### Initializer <a name="Initializer" id="projen.XmlFileOptions.Initializer"></a>

```typescript
import { XmlFileOptions } from 'projen'

const xmlFileOptions: XmlFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.XmlFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.XmlFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.XmlFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.XmlFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.XmlFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.XmlFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.XmlFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.XmlFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.XmlFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.XmlFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.XmlFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.XmlFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.XmlFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.XmlFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

### YamlFileOptions <a name="YamlFileOptions" id="projen.YamlFileOptions"></a>

Options for `YamlFile`.

#### Initializer <a name="Initializer" id="projen.YamlFileOptions.Initializer"></a>

```typescript
import { YamlFileOptions } from 'projen'

const yamlFileOptions: YamlFileOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.YamlFileOptions.property.committed">committed</a></code> | <code>boolean</code> | Indicates whether this file should be committed to git or ignored. |
| <code><a href="#projen.YamlFileOptions.property.editGitignore">editGitignore</a></code> | <code>boolean</code> | Update the project's .gitignore file. |
| <code><a href="#projen.YamlFileOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#projen.YamlFileOptions.property.marker">marker</a></code> | <code>boolean</code> | Adds the projen marker to the file. |
| <code><a href="#projen.YamlFileOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#projen.YamlFileOptions.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized. You can modify the object's contents before synthesis. |
| <code><a href="#projen.YamlFileOptions.property.omitEmpty">omitEmpty</a></code> | <code>boolean</code> | Omits empty objects and arrays. |
| <code><a href="#projen.YamlFileOptions.property.lineWidth">lineWidth</a></code> | <code>number</code> | Maximum line width (set to 0 to disable folding). |
| <code><a href="#projen.YamlFileOptions.property.replaceValue">replaceValue</a></code> | <code>string</code> | Replace value for `String.replace()` on the resulting YAML. |
| <code><a href="#projen.YamlFileOptions.property.searchValue">searchValue</a></code> | <code>string</code> | Search value for `String.replace()` on the resulting YAML. Will be converted to a regex with the `g` flag. |

---

##### `committed`<sup>Optional</sup> <a name="committed" id="projen.YamlFileOptions.property.committed"></a>

```typescript
public readonly committed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether this file should be committed to git or ignored.

By
default, all generated files are committed and anti-tamper is used to
protect against manual modifications.

---

##### `editGitignore`<sup>Optional</sup> <a name="editGitignore" id="projen.YamlFileOptions.property.editGitignore"></a>

```typescript
public readonly editGitignore: boolean;
```

- *Type:* boolean
- *Default:* true

Update the project's .gitignore file.

---

##### `executable`<sup>Optional</sup> <a name="executable" id="projen.YamlFileOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen.YamlFileOptions.property.marker"></a>

```typescript
public readonly marker: boolean;
```

- *Type:* boolean
- *Default:* marker will be included as long as the project is not ejected

Adds the projen marker to the file.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="projen.YamlFileOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `obj`<sup>Optional</sup> <a name="obj" id="projen.YamlFileOptions.property.obj"></a>

```typescript
public readonly obj: any;
```

- *Type:* any
- *Default:* {} an empty object (use `file.obj` to mutate).

The object that will be serialized. You can modify the object's contents before synthesis.

Serialization of the object is similar to JSON.stringify with few enhancements:
- values that are functions will be called during synthesis and the result will be serialized - this allow to have lazy values.
- `Set` will be converted to array
- `Map` will be converted to a plain object ({ key: value, ... }})
- `RegExp` without flags will be converted to string representation of the source

---

##### `omitEmpty`<sup>Optional</sup> <a name="omitEmpty" id="projen.YamlFileOptions.property.omitEmpty"></a>

```typescript
public readonly omitEmpty: boolean;
```

- *Type:* boolean
- *Default:* false

Omits empty objects and arrays.

---

##### `lineWidth`<sup>Optional</sup> <a name="lineWidth" id="projen.YamlFileOptions.property.lineWidth"></a>

```typescript
public readonly lineWidth: number;
```

- *Type:* number
- *Default:* 0

Maximum line width (set to 0 to disable folding).

---

##### `replaceValue`<sup>Optional</sup> <a name="replaceValue" id="projen.YamlFileOptions.property.replaceValue"></a>

```typescript
public readonly replaceValue: string;
```

- *Type:* string

Replace value for `String.replace()` on the resulting YAML.

---

##### `searchValue`<sup>Optional</sup> <a name="searchValue" id="projen.YamlFileOptions.property.searchValue"></a>

```typescript
public readonly searchValue: string;
```

- *Type:* string

Search value for `String.replace()` on the resulting YAML. Will be converted to a regex with the `g` flag.

---

## Classes <a name="Classes" id="Classes"></a>

### DevEnvironmentDockerImage <a name="DevEnvironmentDockerImage" id="projen.DevEnvironmentDockerImage"></a>

Options for specifying the Docker image of the container.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DevEnvironmentDockerImage.fromFile">fromFile</a></code> | The relative path of a Dockerfile that defines the container contents. |
| <code><a href="#projen.DevEnvironmentDockerImage.fromImage">fromImage</a></code> | A publicly available Docker image. |

---

##### `fromFile` <a name="fromFile" id="projen.DevEnvironmentDockerImage.fromFile"></a>

```typescript
import { DevEnvironmentDockerImage } from 'projen'

DevEnvironmentDockerImage.fromFile(dockerFile: string)
```

The relative path of a Dockerfile that defines the container contents.

*Example*

```typescript
'.gitpod.Docker'
```


###### `dockerFile`<sup>Required</sup> <a name="dockerFile" id="projen.DevEnvironmentDockerImage.fromFile.parameter.dockerFile"></a>

- *Type:* string

a relative path.

---

##### `fromImage` <a name="fromImage" id="projen.DevEnvironmentDockerImage.fromImage"></a>

```typescript
import { DevEnvironmentDockerImage } from 'projen'

DevEnvironmentDockerImage.fromImage(image: string)
```

A publicly available Docker image.

*Example*

```typescript
'ubuntu:latest'
```


###### `image`<sup>Required</sup> <a name="image" id="projen.DevEnvironmentDockerImage.fromImage.parameter.image"></a>

- *Type:* string

a Docker image.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DevEnvironmentDockerImage.property.dockerFile">dockerFile</a></code> | <code>string</code> | The relative path of a Dockerfile that defines the container contents. |
| <code><a href="#projen.DevEnvironmentDockerImage.property.image">image</a></code> | <code>string</code> | A publicly available Docker image. |

---

##### `dockerFile`<sup>Optional</sup> <a name="dockerFile" id="projen.DevEnvironmentDockerImage.property.dockerFile"></a>

```typescript
public readonly dockerFile: string;
```

- *Type:* string

The relative path of a Dockerfile that defines the container contents.

---

##### `image`<sup>Optional</sup> <a name="image" id="projen.DevEnvironmentDockerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

A publicly available Docker image.

---


### DockerComposeService <a name="DockerComposeService" id="projen.DockerComposeService"></a>

- *Implements:* <a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>

A docker-compose service.

#### Initializers <a name="Initializers" id="projen.DockerComposeService.Initializer"></a>

```typescript
import { DockerComposeService } from 'projen'

new DockerComposeService(serviceName: string, serviceDescription: DockerComposeServiceDescription)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeService.Initializer.parameter.serviceName">serviceName</a></code> | <code>string</code> | The name of the docker compose service. |
| <code><a href="#projen.DockerComposeService.Initializer.parameter.serviceDescription">serviceDescription</a></code> | <code><a href="#projen.DockerComposeServiceDescription">DockerComposeServiceDescription</a></code> | *No description.* |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.DockerComposeService.Initializer.parameter.serviceName"></a>

- *Type:* string

The name of the docker compose service.

---

##### `serviceDescription`<sup>Required</sup> <a name="serviceDescription" id="projen.DockerComposeService.Initializer.parameter.serviceDescription"></a>

- *Type:* <a href="#projen.DockerComposeServiceDescription">DockerComposeServiceDescription</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DockerComposeService.addDependsOn">addDependsOn</a></code> | Make the service depend on another service. |
| <code><a href="#projen.DockerComposeService.addEnvironment">addEnvironment</a></code> | Add an environment variable. |
| <code><a href="#projen.DockerComposeService.addLabel">addLabel</a></code> | Add a label. |
| <code><a href="#projen.DockerComposeService.addNetwork">addNetwork</a></code> | Add a network to the service. |
| <code><a href="#projen.DockerComposeService.addPort">addPort</a></code> | Add a port mapping. |
| <code><a href="#projen.DockerComposeService.addVolume">addVolume</a></code> | Add a volume to the service. |

---

##### `addDependsOn` <a name="addDependsOn" id="projen.DockerComposeService.addDependsOn"></a>

```typescript
public addDependsOn(serviceName: IDockerComposeServiceName): void
```

Make the service depend on another service.

###### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.DockerComposeService.addDependsOn.parameter.serviceName"></a>

- *Type:* <a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>

---

##### `addEnvironment` <a name="addEnvironment" id="projen.DockerComposeService.addEnvironment"></a>

```typescript
public addEnvironment(name: string, value: string): void
```

Add an environment variable.

###### `name`<sup>Required</sup> <a name="name" id="projen.DockerComposeService.addEnvironment.parameter.name"></a>

- *Type:* string

environment variable name.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.DockerComposeService.addEnvironment.parameter.value"></a>

- *Type:* string

value of the environment variable.

---

##### `addLabel` <a name="addLabel" id="projen.DockerComposeService.addLabel"></a>

```typescript
public addLabel(name: string, value: string): void
```

Add a label.

###### `name`<sup>Required</sup> <a name="name" id="projen.DockerComposeService.addLabel.parameter.name"></a>

- *Type:* string

environment variable name.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.DockerComposeService.addLabel.parameter.value"></a>

- *Type:* string

value of the environment variable.

---

##### `addNetwork` <a name="addNetwork" id="projen.DockerComposeService.addNetwork"></a>

```typescript
public addNetwork(network: IDockerComposeNetworkBinding): void
```

Add a network to the service.

###### `network`<sup>Required</sup> <a name="network" id="projen.DockerComposeService.addNetwork.parameter.network"></a>

- *Type:* <a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>

---

##### `addPort` <a name="addPort" id="projen.DockerComposeService.addPort"></a>

```typescript
public addPort(publishedPort: number, targetPort: number, options?: DockerComposePortMappingOptions): void
```

Add a port mapping.

###### `publishedPort`<sup>Required</sup> <a name="publishedPort" id="projen.DockerComposeService.addPort.parameter.publishedPort"></a>

- *Type:* number

Published port number.

---

###### `targetPort`<sup>Required</sup> <a name="targetPort" id="projen.DockerComposeService.addPort.parameter.targetPort"></a>

- *Type:* number

Container's port number.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.DockerComposeService.addPort.parameter.options"></a>

- *Type:* <a href="#projen.DockerComposePortMappingOptions">DockerComposePortMappingOptions</a>

Port mapping options.

---

##### `addVolume` <a name="addVolume" id="projen.DockerComposeService.addVolume"></a>

```typescript
public addVolume(volume: IDockerComposeVolumeBinding): void
```

Add a volume to the service.

###### `volume`<sup>Required</sup> <a name="volume" id="projen.DockerComposeService.addVolume.parameter.volume"></a>

- *Type:* <a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.DockerComposeService.property.dependsOn">dependsOn</a></code> | <code><a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>[]</code> | Other services that this service depends on. |
| <code><a href="#projen.DockerComposeService.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Environment variables. |
| <code><a href="#projen.DockerComposeService.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Attached labels. |
| <code><a href="#projen.DockerComposeService.property.networks">networks</a></code> | <code><a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>[]</code> | Networks mounted in the container. |
| <code><a href="#projen.DockerComposeService.property.ports">ports</a></code> | <code><a href="#projen.DockerComposeServicePort">DockerComposeServicePort</a>[]</code> | Published ports. |
| <code><a href="#projen.DockerComposeService.property.serviceName">serviceName</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#projen.DockerComposeService.property.volumes">volumes</a></code> | <code><a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>[]</code> | Volumes mounted in the container. |
| <code><a href="#projen.DockerComposeService.property.command">command</a></code> | <code>string[]</code> | Command to run in the container. |
| <code><a href="#projen.DockerComposeService.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Entrypoint to run in the container. |
| <code><a href="#projen.DockerComposeService.property.image">image</a></code> | <code>string</code> | Docker image. |
| <code><a href="#projen.DockerComposeService.property.imageBuild">imageBuild</a></code> | <code><a href="#projen.DockerComposeBuild">DockerComposeBuild</a></code> | Docker image build instructions. |
| <code><a href="#projen.DockerComposeService.property.platform">platform</a></code> | <code>string</code> | Target platform. |
| <code><a href="#projen.DockerComposeService.property.privileged">privileged</a></code> | <code>boolean</code> | Run in privileged mode. |

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="projen.DockerComposeService.property.dependsOn"></a>

```typescript
public readonly dependsOn: IDockerComposeServiceName[];
```

- *Type:* <a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>[]

Other services that this service depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="projen.DockerComposeService.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables.

---

##### `labels`<sup>Required</sup> <a name="labels" id="projen.DockerComposeService.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attached labels.

---

##### `networks`<sup>Required</sup> <a name="networks" id="projen.DockerComposeService.property.networks"></a>

```typescript
public readonly networks: IDockerComposeNetworkBinding[];
```

- *Type:* <a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>[]

Networks mounted in the container.

---

##### `ports`<sup>Required</sup> <a name="ports" id="projen.DockerComposeService.property.ports"></a>

```typescript
public readonly ports: DockerComposeServicePort[];
```

- *Type:* <a href="#projen.DockerComposeServicePort">DockerComposeServicePort</a>[]

Published ports.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.DockerComposeService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Name of the service.

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="projen.DockerComposeService.property.volumes"></a>

```typescript
public readonly volumes: IDockerComposeVolumeBinding[];
```

- *Type:* <a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>[]

Volumes mounted in the container.

---

##### `command`<sup>Optional</sup> <a name="command" id="projen.DockerComposeService.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Command to run in the container.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen.DockerComposeService.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Entrypoint to run in the container.

---

##### `image`<sup>Optional</sup> <a name="image" id="projen.DockerComposeService.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docker image.

---

##### `imageBuild`<sup>Optional</sup> <a name="imageBuild" id="projen.DockerComposeService.property.imageBuild"></a>

```typescript
public readonly imageBuild: DockerComposeBuild;
```

- *Type:* <a href="#projen.DockerComposeBuild">DockerComposeBuild</a>

Docker image build instructions.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="projen.DockerComposeService.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Target platform.

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="projen.DockerComposeService.property.privileged"></a>

```typescript
public readonly privileged: boolean;
```

- *Type:* boolean

Run in privileged mode.

---


### JsonPatch <a name="JsonPatch" id="projen.JsonPatch"></a>

Utility for applying RFC-6902 JSON-Patch to a document.

Use the the `JsonPatch.apply(doc, ...ops)` function to apply a set of
operations to a JSON document and return the result.

Operations can be created using the factory methods `JsonPatch.add()`,
`JsonPatch.remove()`, etc.

*Example*

```typescript
const output = JsonPatch.apply(input,
 JsonPatch.replace('/world/hi/there', 'goodbye'),
 JsonPatch.add('/world/foo/', 'boom'),
 JsonPatch.remove('/hello'));
```



#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.JsonPatch.add">add</a></code> | Adds a value to an object or inserts it into an array. |
| <code><a href="#projen.JsonPatch.apply">apply</a></code> | Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result. |
| <code><a href="#projen.JsonPatch.copy">copy</a></code> | Copies a value from one location to another within the JSON document. |
| <code><a href="#projen.JsonPatch.escapePath">escapePath</a></code> | Escapes a json pointer path. |
| <code><a href="#projen.JsonPatch.move">move</a></code> | Moves a value from one location to the other. |
| <code><a href="#projen.JsonPatch.remove">remove</a></code> | Removes a value from an object or array. |
| <code><a href="#projen.JsonPatch.replace">replace</a></code> | Replaces a value. |
| <code><a href="#projen.JsonPatch.test">test</a></code> | Tests that the specified value is set in the document. |

---

##### `add` <a name="add" id="projen.JsonPatch.add"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.add(path: string, value: any)
```

Adds a value to an object or inserts it into an array.

In the case of an
array, the value is inserted before the given index. The - character can be
used instead of an index to insert at the end of an array.

*Example*

```typescript
JsonPatch.add('/biscuits/1', { "name": "Ginger Nut" })
```


###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.add.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="projen.JsonPatch.add.parameter.value"></a>

- *Type:* any

---

##### `apply` <a name="apply" id="projen.JsonPatch.apply"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.apply(document: any, ops: ...JsonPatch[])
```

Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result.

###### `document`<sup>Required</sup> <a name="document" id="projen.JsonPatch.apply.parameter.document"></a>

- *Type:* any

The document to patch.

---

###### `ops`<sup>Required</sup> <a name="ops" id="projen.JsonPatch.apply.parameter.ops"></a>

- *Type:* ...<a href="#projen.JsonPatch">JsonPatch</a>[]

The operations to apply.

---

##### `copy` <a name="copy" id="projen.JsonPatch.copy"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.copy(from: string, path: string)
```

Copies a value from one location to another within the JSON document.

Both
from and path are JSON Pointers.

*Example*

```typescript
JsonPatch.copy('/biscuits/0', '/best_biscuit')
```


###### `from`<sup>Required</sup> <a name="from" id="projen.JsonPatch.copy.parameter.from"></a>

- *Type:* string

---

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.copy.parameter.path"></a>

- *Type:* string

---

##### `escapePath` <a name="escapePath" id="projen.JsonPatch.escapePath"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.escapePath(path: string)
```

Escapes a json pointer path.

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.escapePath.parameter.path"></a>

- *Type:* string

The raw pointer.

---

##### `move` <a name="move" id="projen.JsonPatch.move"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.move(from: string, path: string)
```

Moves a value from one location to the other.

Both from and path are JSON Pointers.

*Example*

```typescript
JsonPatch.move('/biscuits', '/cookies')
```


###### `from`<sup>Required</sup> <a name="from" id="projen.JsonPatch.move.parameter.from"></a>

- *Type:* string

---

###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.move.parameter.path"></a>

- *Type:* string

---

##### `remove` <a name="remove" id="projen.JsonPatch.remove"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.remove(path: string)
```

Removes a value from an object or array.

*Example*

```typescript
JsonPatch.remove('/biscuits/0')
```


###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.remove.parameter.path"></a>

- *Type:* string

---

##### `replace` <a name="replace" id="projen.JsonPatch.replace"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.replace(path: string, value: any)
```

Replaces a value.

Equivalent to a “remove” followed by an “add”.

*Example*

```typescript
JsonPatch.replace('/biscuits/0/name', 'Chocolate Digestive')
```


###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.replace.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="projen.JsonPatch.replace.parameter.value"></a>

- *Type:* any

---

##### `test` <a name="test" id="projen.JsonPatch.test"></a>

```typescript
import { JsonPatch } from 'projen'

JsonPatch.test(path: string, value: any, failureBehavior?: TestFailureBehavior)
```

Tests that the specified value is set in the document.

If the test fails,
then the patch as a whole should not apply.

*Example*

```typescript
JsonPatch.test('/best_biscuit/name', 'Choco Leibniz')
```


###### `path`<sup>Required</sup> <a name="path" id="projen.JsonPatch.test.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="projen.JsonPatch.test.parameter.value"></a>

- *Type:* any

---

###### `failureBehavior`<sup>Optional</sup> <a name="failureBehavior" id="projen.JsonPatch.test.parameter.failureBehavior"></a>

- *Type:* <a href="#projen.TestFailureBehavior">TestFailureBehavior</a>

---



### Projects <a name="Projects" id="projen.Projects"></a>

Programmatic API for projen.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Projects.createProject">createProject</a></code> | Creates a new project with defaults. |

---

##### `createProject` <a name="createProject" id="projen.Projects.createProject"></a>

```typescript
import { Projects } from 'projen'

Projects.createProject(options: CreateProjectOptions)
```

Creates a new project with defaults.

This function creates the project type in-process (with in VM) and calls
`.synth()` on it (if `options.synth` is not `false`).

At the moment, it also generates a `.projenrc.js` file with the same code
that was just executed. In the future, this will also be done by the project
type, so we can easily support multiple languages of projenrc.

An environment variable (PROJEN_CREATE_PROJECT=true) is set within the VM
so that custom project types can detect whether the current synthesis is the
result of a new project creation (and take additional steps accordingly)

###### `options`<sup>Required</sup> <a name="options" id="projen.Projects.createProject.parameter.options"></a>

- *Type:* <a href="#projen.CreateProjectOptions">CreateProjectOptions</a>

---



### ReleasableCommits <a name="ReleasableCommits" id="projen.ReleasableCommits"></a>

Find commits that should be considered releasable to decide if a release is required.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ReleasableCommits.everyCommit">everyCommit</a></code> | Release every commit. |
| <code><a href="#projen.ReleasableCommits.exec">exec</a></code> | Use an arbitrary shell command to find releasable commits since the latest tag. |
| <code><a href="#projen.ReleasableCommits.featuresAndFixes">featuresAndFixes</a></code> | Release only features and fixes. |
| <code><a href="#projen.ReleasableCommits.ofType">ofType</a></code> | Limit commits by their conventional commit type. |

---

##### `everyCommit` <a name="everyCommit" id="projen.ReleasableCommits.everyCommit"></a>

```typescript
import { ReleasableCommits } from 'projen'

ReleasableCommits.everyCommit(path?: string)
```

Release every commit.

This will only not release if the most recent commit is tagged with the latest matching tag.

###### `path`<sup>Optional</sup> <a name="path" id="projen.ReleasableCommits.everyCommit.parameter.path"></a>

- *Type:* string

Consider only commits that are enough to explain how the files that match the specified paths came to be.

This path is relative to the current working dir of the `bump` task, i.e. to only consider commits of a subproject use `"."`.

---

##### `exec` <a name="exec" id="projen.ReleasableCommits.exec"></a>

```typescript
import { ReleasableCommits } from 'projen'

ReleasableCommits.exec(cmd: string)
```

Use an arbitrary shell command to find releasable commits since the latest tag.

A new release will be initiated, if the number of returned commits is greater than zero.
Must return a newline separate list of commits that should considered releasable.
`$LATEST_TAG` will be replaced with the actual latest tag for the given prefix.*

*Example*

```typescript
"git log --oneline $LATEST_TAG..HEAD -- ."
```


###### `cmd`<sup>Required</sup> <a name="cmd" id="projen.ReleasableCommits.exec.parameter.cmd"></a>

- *Type:* string

---

##### `featuresAndFixes` <a name="featuresAndFixes" id="projen.ReleasableCommits.featuresAndFixes"></a>

```typescript
import { ReleasableCommits } from 'projen'

ReleasableCommits.featuresAndFixes(path?: string)
```

Release only features and fixes.

Shorthand for `ReleasableCommits.onlyOfType(['feat', 'fix'])`.

###### `path`<sup>Optional</sup> <a name="path" id="projen.ReleasableCommits.featuresAndFixes.parameter.path"></a>

- *Type:* string

Consider only commits that are enough to explain how the files that match the specified paths came to be.

This path is relative to the current working dir of the `bump` task, i.e. to only consider commits of a subproject use `"."`.

---

##### `ofType` <a name="ofType" id="projen.ReleasableCommits.ofType"></a>

```typescript
import { ReleasableCommits } from 'projen'

ReleasableCommits.ofType(types: string[], path?: string)
```

Limit commits by their conventional commit type.

This will only release commit that match one of the provided types.
Commits are required to follow the conventional commit spec and will be ignored otherwise.

###### `types`<sup>Required</sup> <a name="types" id="projen.ReleasableCommits.ofType.parameter.types"></a>

- *Type:* string[]

List of conventional commit types that should be released.

---

###### `path`<sup>Optional</sup> <a name="path" id="projen.ReleasableCommits.ofType.parameter.path"></a>

- *Type:* string

Consider only commits that are enough to explain how the files that match the specified paths came to be.

This path is relative to the current working dir of the `bump` task, i.e. to only consider commits of a subproject use `"."`.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.ReleasableCommits.property.cmd">cmd</a></code> | <code>string</code> | *No description.* |

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="projen.ReleasableCommits.property.cmd"></a>

```typescript
public readonly cmd: string;
```

- *Type:* string

---


### Semver <a name="Semver" id="projen.Semver"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Semver.caret">caret</a></code> | Accept any minor version. |
| <code><a href="#projen.Semver.latest">latest</a></code> | Latest version. |
| <code><a href="#projen.Semver.of">of</a></code> | *No description.* |
| <code><a href="#projen.Semver.pinned">pinned</a></code> | Accept only an exact version. |
| <code><a href="#projen.Semver.tilde">tilde</a></code> | Accept patches. |

---

##### ~~`caret`~~ <a name="caret" id="projen.Semver.caret"></a>

```typescript
import { Semver } from 'projen'

Semver.caret(version: string)
```

Accept any minor version.

>= version
< next major version

###### `version`<sup>Required</sup> <a name="version" id="projen.Semver.caret.parameter.version"></a>

- *Type:* string

---

##### ~~`latest`~~ <a name="latest" id="projen.Semver.latest"></a>

```typescript
import { Semver } from 'projen'

Semver.latest()
```

Latest version.

##### ~~`of`~~ <a name="of" id="projen.Semver.of"></a>

```typescript
import { Semver } from 'projen'

Semver.of(spec: string)
```

###### `spec`<sup>Required</sup> <a name="spec" id="projen.Semver.of.parameter.spec"></a>

- *Type:* string

---

##### ~~`pinned`~~ <a name="pinned" id="projen.Semver.pinned"></a>

```typescript
import { Semver } from 'projen'

Semver.pinned(version: string)
```

Accept only an exact version.

###### `version`<sup>Required</sup> <a name="version" id="projen.Semver.pinned.parameter.version"></a>

- *Type:* string

---

##### ~~`tilde`~~ <a name="tilde" id="projen.Semver.tilde"></a>

```typescript
import { Semver } from 'projen'

Semver.tilde(version: string)
```

Accept patches.

>= version
< next minor version

###### `version`<sup>Required</sup> <a name="version" id="projen.Semver.tilde.parameter.version"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Semver.property.spec">spec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.Semver.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.Semver.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### ~~`spec`~~<sup>Required</sup> <a name="spec" id="projen.Semver.property.spec"></a>

- *Deprecated:* This class will be removed in upcoming releases. if you wish to
specify semver requirements in `deps`, `devDeps`, etc, specify them like so
`express@^2.1`.

```typescript
public readonly spec: string;
```

- *Type:* string

---

##### ~~`mode`~~<sup>Optional</sup> <a name="mode" id="projen.Semver.property.mode"></a>

- *Deprecated:* This class will be removed in upcoming releases. if you wish to
specify semver requirements in `deps`, `devDeps`, etc, specify them like so
`express@^2.1`.

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### ~~`version`~~<sup>Optional</sup> <a name="version" id="projen.Semver.property.version"></a>

- *Deprecated:* This class will be removed in upcoming releases. if you wish to
specify semver requirements in `deps`, `devDeps`, etc, specify them like so
`express@^2.1`.

```typescript
public readonly version: string;
```

- *Type:* string

---


### Task <a name="Task" id="projen.Task"></a>

A task that can be performed on the project.

Modeled as a series of shell
commands and subtasks.

#### Initializers <a name="Initializers" id="projen.Task.Initializer"></a>

```typescript
import { Task } from 'projen'

new Task(name: string, props?: TaskOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Task.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.Task.Initializer.parameter.props">props</a></code> | <code><a href="#projen.TaskOptions">TaskOptions</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="projen.Task.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="projen.Task.Initializer.parameter.props"></a>

- *Type:* <a href="#projen.TaskOptions">TaskOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Task.addCondition">addCondition</a></code> | Add a command to execute which determines if the task should be skipped. |
| <code><a href="#projen.Task.builtin">builtin</a></code> | Execute a builtin task. |
| <code><a href="#projen.Task.env">env</a></code> | Adds an environment variable to this task. |
| <code><a href="#projen.Task.exec">exec</a></code> | Executes a shell command. |
| <code><a href="#projen.Task.lock">lock</a></code> | Forbid additional changes to this task. |
| <code><a href="#projen.Task.prepend">prepend</a></code> | Adds a command at the beginning of the task. |
| <code><a href="#projen.Task.prependExec">prependExec</a></code> | Adds a command at the beginning of the task. |
| <code><a href="#projen.Task.prependSay">prependSay</a></code> | Says something at the beginning of the task. |
| <code><a href="#projen.Task.prependSpawn">prependSpawn</a></code> | Adds a spawn instruction at the beginning of the task. |
| <code><a href="#projen.Task.removeStep">removeStep</a></code> | *No description.* |
| <code><a href="#projen.Task.reset">reset</a></code> | Reset the task so it no longer has any commands. |
| <code><a href="#projen.Task.say">say</a></code> | Say something. |
| <code><a href="#projen.Task.spawn">spawn</a></code> | Spawns a sub-task. |
| <code><a href="#projen.Task.updateStep">updateStep</a></code> | *No description.* |

---

##### `addCondition` <a name="addCondition" id="projen.Task.addCondition"></a>

```typescript
public addCondition(condition: ...string[]): void
```

Add a command to execute which determines if the task should be skipped.

If a condition already exists, the new condition will be appended with ` && ` delimiter.

> [{@link Task.condition }]({@link Task.condition })

###### `condition`<sup>Required</sup> <a name="condition" id="projen.Task.addCondition.parameter.condition"></a>

- *Type:* ...string[]

The command to execute.

---

##### `builtin` <a name="builtin" id="projen.Task.builtin"></a>

```typescript
public builtin(name: string): void
```

Execute a builtin task.

Builtin tasks are programs bundled as part of projen itself and used as
helpers for various components.

In the future we should support built-in tasks from external modules.

###### `name`<sup>Required</sup> <a name="name" id="projen.Task.builtin.parameter.name"></a>

- *Type:* string

The name of the builtin task to execute (e.g. `release/resolve-version`).

---

##### `env` <a name="env" id="projen.Task.env"></a>

```typescript
public env(name: string, value: string): void
```

Adds an environment variable to this task.

###### `name`<sup>Required</sup> <a name="name" id="projen.Task.env.parameter.name"></a>

- *Type:* string

The name of the variable.

---

###### `value`<sup>Required</sup> <a name="value" id="projen.Task.env.parameter.value"></a>

- *Type:* string

The value.

If the value is surrounded by `$()`, we will
evaluate it within a subshell and use the result as the value of the
environment variable.

---

##### `exec` <a name="exec" id="projen.Task.exec"></a>

```typescript
public exec(command: string, options?: TaskStepOptions): void
```

Executes a shell command.

###### `command`<sup>Required</sup> <a name="command" id="projen.Task.exec.parameter.command"></a>

- *Type:* string

Shell command.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.exec.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

Options.

---

##### `lock` <a name="lock" id="projen.Task.lock"></a>

```typescript
public lock(): void
```

Forbid additional changes to this task.

##### ~~`prepend`~~ <a name="prepend" id="projen.Task.prepend"></a>

```typescript
public prepend(shell: string, options?: TaskStepOptions): void
```

Adds a command at the beginning of the task.

###### `shell`<sup>Required</sup> <a name="shell" id="projen.Task.prepend.parameter.shell"></a>

- *Type:* string

The command to add.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.prepend.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `prependExec` <a name="prependExec" id="projen.Task.prependExec"></a>

```typescript
public prependExec(shell: string, options?: TaskStepOptions): void
```

Adds a command at the beginning of the task.

###### `shell`<sup>Required</sup> <a name="shell" id="projen.Task.prependExec.parameter.shell"></a>

- *Type:* string

The command to add.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.prependExec.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `prependSay` <a name="prependSay" id="projen.Task.prependSay"></a>

```typescript
public prependSay(message: string, options?: TaskStepOptions): void
```

Says something at the beginning of the task.

###### `message`<sup>Required</sup> <a name="message" id="projen.Task.prependSay.parameter.message"></a>

- *Type:* string

Your message.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.prependSay.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `prependSpawn` <a name="prependSpawn" id="projen.Task.prependSpawn"></a>

```typescript
public prependSpawn(subtask: Task, options?: TaskStepOptions): void
```

Adds a spawn instruction at the beginning of the task.

###### `subtask`<sup>Required</sup> <a name="subtask" id="projen.Task.prependSpawn.parameter.subtask"></a>

- *Type:* <a href="#projen.Task">Task</a>

The subtask to execute.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.prependSpawn.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `removeStep` <a name="removeStep" id="projen.Task.removeStep"></a>

```typescript
public removeStep(index: number): void
```

###### `index`<sup>Required</sup> <a name="index" id="projen.Task.removeStep.parameter.index"></a>

- *Type:* number

The index of the step to remove.

---

##### `reset` <a name="reset" id="projen.Task.reset"></a>

```typescript
public reset(command?: string, options?: TaskStepOptions): void
```

Reset the task so it no longer has any commands.

###### `command`<sup>Optional</sup> <a name="command" id="projen.Task.reset.parameter.command"></a>

- *Type:* string

the first command to add to the task after it was cleared.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.reset.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `say` <a name="say" id="projen.Task.say"></a>

```typescript
public say(message: string, options?: TaskStepOptions): void
```

Say something.

###### `message`<sup>Required</sup> <a name="message" id="projen.Task.say.parameter.message"></a>

- *Type:* string

Your message.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.say.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

Options.

---

##### `spawn` <a name="spawn" id="projen.Task.spawn"></a>

```typescript
public spawn(subtask: Task, options?: TaskStepOptions): void
```

Spawns a sub-task.

###### `subtask`<sup>Required</sup> <a name="subtask" id="projen.Task.spawn.parameter.subtask"></a>

- *Type:* <a href="#projen.Task">Task</a>

The subtask to execute.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Task.spawn.parameter.options"></a>

- *Type:* <a href="#projen.TaskStepOptions">TaskStepOptions</a>

---

##### `updateStep` <a name="updateStep" id="projen.Task.updateStep"></a>

```typescript
public updateStep(index: number, step: TaskStep): void
```

###### `index`<sup>Required</sup> <a name="index" id="projen.Task.updateStep.parameter.index"></a>

- *Type:* number

The index of the step to edit.

---

###### `step`<sup>Required</sup> <a name="step" id="projen.Task.updateStep.parameter.step"></a>

- *Type:* <a href="#projen.TaskStep">TaskStep</a>

The new step to replace the old one entirely, it is not merged with the old step.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.Task.property.envVars">envVars</a></code> | <code>{[ key: string ]: string}</code> | Returns all environment variables in the task level. |
| <code><a href="#projen.Task.property.name">name</a></code> | <code>string</code> | Task name. |
| <code><a href="#projen.Task.property.steps">steps</a></code> | <code><a href="#projen.TaskStep">TaskStep</a>[]</code> | Returns an immutable copy of all the step specifications of the task. |
| <code><a href="#projen.Task.property.condition">condition</a></code> | <code>string</code> | A command to execute which determines if the task should be skipped. |
| <code><a href="#projen.Task.property.cwd">cwd</a></code> | <code>string</code> | Returns the working directory for this task. |
| <code><a href="#projen.Task.property.description">description</a></code> | <code>string</code> | Returns the description of this task. |

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="projen.Task.property.envVars"></a>

```typescript
public readonly envVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Returns all environment variables in the task level.

---

##### `name`<sup>Required</sup> <a name="name" id="projen.Task.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Task name.

---

##### `steps`<sup>Required</sup> <a name="steps" id="projen.Task.property.steps"></a>

```typescript
public readonly steps: TaskStep[];
```

- *Type:* <a href="#projen.TaskStep">TaskStep</a>[]

Returns an immutable copy of all the step specifications of the task.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="projen.Task.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

A command to execute which determines if the task should be skipped.

If it
returns a zero exit code, the task will not be executed.

---

##### `cwd`<sup>Optional</sup> <a name="cwd" id="projen.Task.property.cwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* string

Returns the working directory for this task.

Sets the working directory for this task.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen.Task.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Returns the description of this task.

Sets the description of this task.

---


### TaskRuntime <a name="TaskRuntime" id="projen.TaskRuntime"></a>

The runtime component of the tasks engine.

#### Initializers <a name="Initializers" id="projen.TaskRuntime.Initializer"></a>

```typescript
import { TaskRuntime } from 'projen'

new TaskRuntime(workdir: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskRuntime.Initializer.parameter.workdir">workdir</a></code> | <code>string</code> | *No description.* |

---

##### `workdir`<sup>Required</sup> <a name="workdir" id="projen.TaskRuntime.Initializer.parameter.workdir"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TaskRuntime.runTask">runTask</a></code> | Runs the task. |
| <code><a href="#projen.TaskRuntime.tryFindTask">tryFindTask</a></code> | Find a task by name, or `undefined` if not found. |

---

##### `runTask` <a name="runTask" id="projen.TaskRuntime.runTask"></a>

```typescript
public runTask(name: string, parents?: string[], args?: string | number[], env?: {[ key: string ]: string}): void
```

Runs the task.

###### `name`<sup>Required</sup> <a name="name" id="projen.TaskRuntime.runTask.parameter.name"></a>

- *Type:* string

The task name.

---

###### `parents`<sup>Optional</sup> <a name="parents" id="projen.TaskRuntime.runTask.parameter.parents"></a>

- *Type:* string[]

---

###### `args`<sup>Optional</sup> <a name="args" id="projen.TaskRuntime.runTask.parameter.args"></a>

- *Type:* string | number[]

---

###### `env`<sup>Optional</sup> <a name="env" id="projen.TaskRuntime.runTask.parameter.env"></a>

- *Type:* {[ key: string ]: string}

---

##### `tryFindTask` <a name="tryFindTask" id="projen.TaskRuntime.tryFindTask"></a>

```typescript
public tryFindTask(name: string): TaskSpec
```

Find a task by name, or `undefined` if not found.

###### `name`<sup>Required</sup> <a name="name" id="projen.TaskRuntime.tryFindTask.parameter.name"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskRuntime.property.manifest">manifest</a></code> | <code><a href="#projen.TasksManifest">TasksManifest</a></code> | The contents of tasks.json. |
| <code><a href="#projen.TaskRuntime.property.tasks">tasks</a></code> | <code><a href="#projen.TaskSpec">TaskSpec</a>[]</code> | The tasks in this project. |
| <code><a href="#projen.TaskRuntime.property.workdir">workdir</a></code> | <code>string</code> | The root directory of the project and the cwd for executing tasks. |

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="projen.TaskRuntime.property.manifest"></a>

```typescript
public readonly manifest: TasksManifest;
```

- *Type:* <a href="#projen.TasksManifest">TasksManifest</a>

The contents of tasks.json.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen.TaskRuntime.property.tasks"></a>

```typescript
public readonly tasks: TaskSpec[];
```

- *Type:* <a href="#projen.TaskSpec">TaskSpec</a>[]

The tasks in this project.

---

##### `workdir`<sup>Required</sup> <a name="workdir" id="projen.TaskRuntime.property.workdir"></a>

```typescript
public readonly workdir: string;
```

- *Type:* string

The root directory of the project and the cwd for executing tasks.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.TaskRuntime.property.MANIFEST_FILE">MANIFEST_FILE</a></code> | <code>string</code> | The project-relative path of the tasks manifest file. |

---

##### `MANIFEST_FILE`<sup>Required</sup> <a name="MANIFEST_FILE" id="projen.TaskRuntime.property.MANIFEST_FILE"></a>

```typescript
public readonly MANIFEST_FILE: string;
```

- *Type:* string

The project-relative path of the tasks manifest file.

---

### Testing <a name="Testing" id="projen.Testing"></a>

A Testing static class with a .synth helper for getting a snapshots of construct outputs. Useful for snapshot testing with Jest.

*Example*

```typescript
`expect(Testing.synth(someProject)).toMatchSnapshot()`
```



#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.Testing.synth">synth</a></code> | Produces a simple JS object that represents the contents of the projects with field names being file paths. |

---

##### `synth` <a name="synth" id="projen.Testing.synth"></a>

```typescript
import { Testing } from 'projen'

Testing.synth(project: Project, options?: SnapshotOptions)
```

Produces a simple JS object that represents the contents of the projects with field names being file paths.

###### `project`<sup>Required</sup> <a name="project" id="projen.Testing.synth.parameter.project"></a>

- *Type:* <a href="#projen.Project">Project</a>

the project to produce a snapshot for.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.Testing.synth.parameter.options"></a>

- *Type:* <a href="#projen.SnapshotOptions">SnapshotOptions</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### ICompareString <a name="ICompareString" id="projen.ICompareString"></a>

- *Implemented By:* <a href="#projen.ICompareString">ICompareString</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ICompareString.compare">compare</a></code> | *No description.* |

---

##### `compare` <a name="compare" id="projen.ICompareString.compare"></a>

```typescript
public compare(a: string, b: string): number
```

###### `a`<sup>Required</sup> <a name="a" id="projen.ICompareString.compare.parameter.a"></a>

- *Type:* string

The first string.

---

###### `b`<sup>Required</sup> <a name="b" id="projen.ICompareString.compare.parameter.b"></a>

- *Type:* string

The second string.

---


### IDevEnvironment <a name="IDevEnvironment" id="projen.IDevEnvironment"></a>

- *Implemented By:* projen.vscode.DevContainer, <a href="#projen.Gitpod">Gitpod</a>, projen.vscode.IDevContainerEnvironment, <a href="#projen.IDevEnvironment">IDevEnvironment</a>

Abstract interface for container-based development environments, such as Gitpod and GitHub Codespaces.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IDevEnvironment.addDockerImage">addDockerImage</a></code> | Add a custom Docker image or Dockerfile for the container. |
| <code><a href="#projen.IDevEnvironment.addPorts">addPorts</a></code> | Adds ports that should be exposed (forwarded) from the container. |
| <code><a href="#projen.IDevEnvironment.addTasks">addTasks</a></code> | Adds tasks to run when the container starts. |
| <code><a href="#projen.IDevEnvironment.addVscodeExtensions">addVscodeExtensions</a></code> | Adds a list of VSCode extensions that should be automatically installed in the container. |

---

##### `addDockerImage` <a name="addDockerImage" id="projen.IDevEnvironment.addDockerImage"></a>

```typescript
public addDockerImage(image: DevEnvironmentDockerImage): void
```

Add a custom Docker image or Dockerfile for the container.

###### `image`<sup>Required</sup> <a name="image" id="projen.IDevEnvironment.addDockerImage.parameter.image"></a>

- *Type:* <a href="#projen.DevEnvironmentDockerImage">DevEnvironmentDockerImage</a>

The Docker image.

---

##### `addPorts` <a name="addPorts" id="projen.IDevEnvironment.addPorts"></a>

```typescript
public addPorts(ports: ...string[]): void
```

Adds ports that should be exposed (forwarded) from the container.

###### `ports`<sup>Required</sup> <a name="ports" id="projen.IDevEnvironment.addPorts.parameter.ports"></a>

- *Type:* ...string[]

The new ports.

---

##### `addTasks` <a name="addTasks" id="projen.IDevEnvironment.addTasks"></a>

```typescript
public addTasks(tasks: ...Task[]): void
```

Adds tasks to run when the container starts.

###### `tasks`<sup>Required</sup> <a name="tasks" id="projen.IDevEnvironment.addTasks.parameter.tasks"></a>

- *Type:* ...<a href="#projen.Task">Task</a>[]

The new tasks.

---

##### `addVscodeExtensions` <a name="addVscodeExtensions" id="projen.IDevEnvironment.addVscodeExtensions"></a>

```typescript
public addVscodeExtensions(extensions: ...string[]): void
```

Adds a list of VSCode extensions that should be automatically installed in the container.

###### `extensions`<sup>Required</sup> <a name="extensions" id="projen.IDevEnvironment.addVscodeExtensions.parameter.extensions"></a>

- *Type:* ...string[]

The extension IDs.

---


### IDockerComposeNetworkBinding <a name="IDockerComposeNetworkBinding" id="projen.IDockerComposeNetworkBinding"></a>

- *Implemented By:* <a href="#projen.IDockerComposeNetworkBinding">IDockerComposeNetworkBinding</a>

Network binding information.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IDockerComposeNetworkBinding.bind">bind</a></code> | Binds the requested network to the docker-compose network configuration and provide mounting instructions for synthesis. |

---

##### `bind` <a name="bind" id="projen.IDockerComposeNetworkBinding.bind"></a>

```typescript
public bind(networkConfig: IDockerComposeNetworkConfig): string
```

Binds the requested network to the docker-compose network configuration and provide mounting instructions for synthesis.

###### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="projen.IDockerComposeNetworkBinding.bind.parameter.networkConfig"></a>

- *Type:* <a href="#projen.IDockerComposeNetworkConfig">IDockerComposeNetworkConfig</a>

the network configuration.

---


### IDockerComposeNetworkConfig <a name="IDockerComposeNetworkConfig" id="projen.IDockerComposeNetworkConfig"></a>

- *Implemented By:* <a href="#projen.IDockerComposeNetworkConfig">IDockerComposeNetworkConfig</a>

Storage for network configuration.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IDockerComposeNetworkConfig.addNetworkConfiguration">addNetworkConfiguration</a></code> | Add network configuration to the repository. |

---

##### `addNetworkConfiguration` <a name="addNetworkConfiguration" id="projen.IDockerComposeNetworkConfig.addNetworkConfiguration"></a>

```typescript
public addNetworkConfiguration(networkName: string, configuration: DockerComposeNetworkConfig): void
```

Add network configuration to the repository.

###### `networkName`<sup>Required</sup> <a name="networkName" id="projen.IDockerComposeNetworkConfig.addNetworkConfiguration.parameter.networkName"></a>

- *Type:* string

---

###### `configuration`<sup>Required</sup> <a name="configuration" id="projen.IDockerComposeNetworkConfig.addNetworkConfiguration.parameter.configuration"></a>

- *Type:* <a href="#projen.DockerComposeNetworkConfig">DockerComposeNetworkConfig</a>

---


### IDockerComposeServiceName <a name="IDockerComposeServiceName" id="projen.IDockerComposeServiceName"></a>

- *Implemented By:* <a href="#projen.DockerComposeService">DockerComposeService</a>, <a href="#projen.IDockerComposeServiceName">IDockerComposeServiceName</a>

An interface providing the name of a docker compose service.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.IDockerComposeServiceName.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the docker compose service. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="projen.IDockerComposeServiceName.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the docker compose service.

---

### IDockerComposeVolumeBinding <a name="IDockerComposeVolumeBinding" id="projen.IDockerComposeVolumeBinding"></a>

- *Implemented By:* <a href="#projen.IDockerComposeVolumeBinding">IDockerComposeVolumeBinding</a>

Volume binding information.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IDockerComposeVolumeBinding.bind">bind</a></code> | Binds the requested volume to the docker-compose volume configuration and provide mounting instructions for synthesis. |

---

##### `bind` <a name="bind" id="projen.IDockerComposeVolumeBinding.bind"></a>

```typescript
public bind(volumeConfig: IDockerComposeVolumeConfig): DockerComposeVolumeMount
```

Binds the requested volume to the docker-compose volume configuration and provide mounting instructions for synthesis.

###### `volumeConfig`<sup>Required</sup> <a name="volumeConfig" id="projen.IDockerComposeVolumeBinding.bind.parameter.volumeConfig"></a>

- *Type:* <a href="#projen.IDockerComposeVolumeConfig">IDockerComposeVolumeConfig</a>

the volume configuration.

---


### IDockerComposeVolumeConfig <a name="IDockerComposeVolumeConfig" id="projen.IDockerComposeVolumeConfig"></a>

- *Implemented By:* <a href="#projen.IDockerComposeVolumeConfig">IDockerComposeVolumeConfig</a>

Storage for volume configuration.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IDockerComposeVolumeConfig.addVolumeConfiguration">addVolumeConfiguration</a></code> | Add volume configuration to the repository. |

---

##### `addVolumeConfiguration` <a name="addVolumeConfiguration" id="projen.IDockerComposeVolumeConfig.addVolumeConfiguration"></a>

```typescript
public addVolumeConfiguration(volumeName: string, configuration: DockerComposeVolumeConfig): void
```

Add volume configuration to the repository.

###### `volumeName`<sup>Required</sup> <a name="volumeName" id="projen.IDockerComposeVolumeConfig.addVolumeConfiguration.parameter.volumeName"></a>

- *Type:* string

---

###### `configuration`<sup>Required</sup> <a name="configuration" id="projen.IDockerComposeVolumeConfig.addVolumeConfiguration.parameter.configuration"></a>

- *Type:* <a href="#projen.DockerComposeVolumeConfig">DockerComposeVolumeConfig</a>

---


### IResolvable <a name="IResolvable" id="projen.IResolvable"></a>

- *Implemented By:* <a href="#projen.IResolvable">IResolvable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IResolvable.toJSON">toJSON</a></code> | Resolves and returns content. |

---

##### `toJSON` <a name="toJSON" id="projen.IResolvable.toJSON"></a>

```typescript
public toJSON(): any
```

Resolves and returns content.


### IResolver <a name="IResolver" id="projen.IResolver"></a>

- *Implemented By:* <a href="#projen.IResolver">IResolver</a>

API for resolving tokens when synthesizing file content.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.IResolver.resolve">resolve</a></code> | Given a value (object/string/array/whatever, looks up any functions inside the object and returns an object where all functions are called. |

---

##### `resolve` <a name="resolve" id="projen.IResolver.resolve"></a>

```typescript
public resolve(value: any, options?: ResolveOptions): any
```

Given a value (object/string/array/whatever, looks up any functions inside the object and returns an object where all functions are called.

###### `value`<sup>Required</sup> <a name="value" id="projen.IResolver.resolve.parameter.value"></a>

- *Type:* any

The value to resolve.

---

###### `options`<sup>Optional</sup> <a name="options" id="projen.IResolver.resolve.parameter.options"></a>

- *Type:* <a href="#projen.ResolveOptions">ResolveOptions</a>

---


## Enums <a name="Enums" id="Enums"></a>

### DependencyType <a name="DependencyType" id="projen.DependencyType"></a>

Type of dependency.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DependencyType.RUNTIME">RUNTIME</a></code> | The dependency is required for the program/library during runtime. |
| <code><a href="#projen.DependencyType.PEER">PEER</a></code> | The dependency is required at runtime but expected to be installed by the consumer. |
| <code><a href="#projen.DependencyType.BUNDLED">BUNDLED</a></code> | The dependency is bundled and shipped with the module, so consumers are not required to install it. |
| <code><a href="#projen.DependencyType.BUILD">BUILD</a></code> | The dependency is required to run the `build` task. |
| <code><a href="#projen.DependencyType.TEST">TEST</a></code> | The dependency is required to run the `test` task. |
| <code><a href="#projen.DependencyType.DEVENV">DEVENV</a></code> | The dependency is required for development (e.g. IDE plugins). |
| <code><a href="#projen.DependencyType.OVERRIDE">OVERRIDE</a></code> | Transient dependency that needs to be overwritten. |
| <code><a href="#projen.DependencyType.OPTIONAL">OPTIONAL</a></code> | An optional dependency that may be used at runtime if available, but is not required. |

---

##### `RUNTIME` <a name="RUNTIME" id="projen.DependencyType.RUNTIME"></a>

The dependency is required for the program/library during runtime.

---


##### `PEER` <a name="PEER" id="projen.DependencyType.PEER"></a>

The dependency is required at runtime but expected to be installed by the consumer.

---


##### `BUNDLED` <a name="BUNDLED" id="projen.DependencyType.BUNDLED"></a>

The dependency is bundled and shipped with the module, so consumers are not required to install it.

---


##### `BUILD` <a name="BUILD" id="projen.DependencyType.BUILD"></a>

The dependency is required to run the `build` task.

---


##### `TEST` <a name="TEST" id="projen.DependencyType.TEST"></a>

The dependency is required to run the `test` task.

---


##### `DEVENV` <a name="DEVENV" id="projen.DependencyType.DEVENV"></a>

The dependency is required for development (e.g. IDE plugins).

---


##### `OVERRIDE` <a name="OVERRIDE" id="projen.DependencyType.OVERRIDE"></a>

Transient dependency that needs to be overwritten.

Available for Node packages

---


##### `OPTIONAL` <a name="OPTIONAL" id="projen.DependencyType.OPTIONAL"></a>

An optional dependency that may be used at runtime if available, but is not required.

It is expected to be installed by the consumer.

---


### DockerComposeProtocol <a name="DockerComposeProtocol" id="projen.DockerComposeProtocol"></a>

Network protocol for port mapping.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.DockerComposeProtocol.TCP">TCP</a></code> | TCP protocol. |
| <code><a href="#projen.DockerComposeProtocol.UDP">UDP</a></code> | UDP protocol. |

---

##### `TCP` <a name="TCP" id="projen.DockerComposeProtocol.TCP"></a>

TCP protocol.

---


##### `UDP` <a name="UDP" id="projen.DockerComposeProtocol.UDP"></a>

UDP protocol.

---


### EndOfLine <a name="EndOfLine" id="projen.EndOfLine"></a>

The end of line characters supported by git.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.EndOfLine.AUTO">AUTO</a></code> | Maintain existing (mixed values within one file are normalised by looking at what's used after the first line). |
| <code><a href="#projen.EndOfLine.CRLF">CRLF</a></code> | Carriage Return + Line Feed characters (\r\n), common on Windows. |
| <code><a href="#projen.EndOfLine.LF">LF</a></code> | Line Feed only (\n), common on Linux and macOS as well as inside git repos. |
| <code><a href="#projen.EndOfLine.NONE">NONE</a></code> | Disable and do not configure the end of line character. |

---

##### `AUTO` <a name="AUTO" id="projen.EndOfLine.AUTO"></a>

Maintain existing (mixed values within one file are normalised by looking at what's used after the first line).

---


##### `CRLF` <a name="CRLF" id="projen.EndOfLine.CRLF"></a>

Carriage Return + Line Feed characters (\r\n), common on Windows.

---


##### `LF` <a name="LF" id="projen.EndOfLine.LF"></a>

Line Feed only (\n), common on Linux and macOS as well as inside git repos.

---


##### `NONE` <a name="NONE" id="projen.EndOfLine.NONE"></a>

Disable and do not configure the end of line character.

---


### GitpodOnOpen <a name="GitpodOnOpen" id="projen.GitpodOnOpen"></a>

What to do when a service on a port is detected.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitpodOnOpen.OPEN_BROWSER">OPEN_BROWSER</a></code> | Open a new browser tab. |
| <code><a href="#projen.GitpodOnOpen.OPEN_PREVIEW">OPEN_PREVIEW</a></code> | Open a preview on the right side of the IDE. |
| <code><a href="#projen.GitpodOnOpen.NOTIFY">NOTIFY</a></code> | Show a notification asking the user what to do (default). |
| <code><a href="#projen.GitpodOnOpen.IGNORE">IGNORE</a></code> | Do nothing. |

---

##### `OPEN_BROWSER` <a name="OPEN_BROWSER" id="projen.GitpodOnOpen.OPEN_BROWSER"></a>

Open a new browser tab.

---


##### `OPEN_PREVIEW` <a name="OPEN_PREVIEW" id="projen.GitpodOnOpen.OPEN_PREVIEW"></a>

Open a preview on the right side of the IDE.

---


##### `NOTIFY` <a name="NOTIFY" id="projen.GitpodOnOpen.NOTIFY"></a>

Show a notification asking the user what to do (default).

---


##### `IGNORE` <a name="IGNORE" id="projen.GitpodOnOpen.IGNORE"></a>

Do nothing.

---


### GitpodOpenIn <a name="GitpodOpenIn" id="projen.GitpodOpenIn"></a>

Configure where in the IDE the terminal should be opened.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitpodOpenIn.BOTTOM">BOTTOM</a></code> | the bottom panel (default). |
| <code><a href="#projen.GitpodOpenIn.LEFT">LEFT</a></code> | the left panel. |
| <code><a href="#projen.GitpodOpenIn.RIGHT">RIGHT</a></code> | the right panel. |
| <code><a href="#projen.GitpodOpenIn.MAIN">MAIN</a></code> | the main editor area. |

---

##### `BOTTOM` <a name="BOTTOM" id="projen.GitpodOpenIn.BOTTOM"></a>

the bottom panel (default).

---


##### `LEFT` <a name="LEFT" id="projen.GitpodOpenIn.LEFT"></a>

the left panel.

---


##### `RIGHT` <a name="RIGHT" id="projen.GitpodOpenIn.RIGHT"></a>

the right panel.

---


##### `MAIN` <a name="MAIN" id="projen.GitpodOpenIn.MAIN"></a>

the main editor area.

---


### GitpodOpenMode <a name="GitpodOpenMode" id="projen.GitpodOpenMode"></a>

Configure how the terminal should be opened relative to the previous task.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitpodOpenMode.TAB_AFTER">TAB_AFTER</a></code> | Opens in the same tab group right after the previous tab. |
| <code><a href="#projen.GitpodOpenMode.TAB_BEFORE">TAB_BEFORE</a></code> | Opens in the same tab group left before the previous tab. |
| <code><a href="#projen.GitpodOpenMode.SPLIT_RIGHT">SPLIT_RIGHT</a></code> | Splits and adds the terminal to the right. |
| <code><a href="#projen.GitpodOpenMode.SPLIT_LEFT">SPLIT_LEFT</a></code> | Splits and adds the terminal to the left. |
| <code><a href="#projen.GitpodOpenMode.SPLIT_TOP">SPLIT_TOP</a></code> | Splits and adds the terminal to the top. |
| <code><a href="#projen.GitpodOpenMode.SPLIT_BOTTOM">SPLIT_BOTTOM</a></code> | Splits and adds the terminal to the bottom. |

---

##### `TAB_AFTER` <a name="TAB_AFTER" id="projen.GitpodOpenMode.TAB_AFTER"></a>

Opens in the same tab group right after the previous tab.

---


##### `TAB_BEFORE` <a name="TAB_BEFORE" id="projen.GitpodOpenMode.TAB_BEFORE"></a>

Opens in the same tab group left before the previous tab.

---


##### `SPLIT_RIGHT` <a name="SPLIT_RIGHT" id="projen.GitpodOpenMode.SPLIT_RIGHT"></a>

Splits and adds the terminal to the right.

---


##### `SPLIT_LEFT` <a name="SPLIT_LEFT" id="projen.GitpodOpenMode.SPLIT_LEFT"></a>

Splits and adds the terminal to the left.

---


##### `SPLIT_TOP` <a name="SPLIT_TOP" id="projen.GitpodOpenMode.SPLIT_TOP"></a>

Splits and adds the terminal to the top.

---


##### `SPLIT_BOTTOM` <a name="SPLIT_BOTTOM" id="projen.GitpodOpenMode.SPLIT_BOTTOM"></a>

Splits and adds the terminal to the bottom.

---


### GitpodPortVisibility <a name="GitpodPortVisibility" id="projen.GitpodPortVisibility"></a>

Whether the port visibility should be private or public.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.GitpodPortVisibility.PUBLIC">PUBLIC</a></code> | Allows everyone with the port URL to access the port (default). |
| <code><a href="#projen.GitpodPortVisibility.PRIVATE">PRIVATE</a></code> | Only allows users with workspace access to access the port. |

---

##### `PUBLIC` <a name="PUBLIC" id="projen.GitpodPortVisibility.PUBLIC"></a>

Allows everyone with the port URL to access the port (default).

---


##### `PRIVATE` <a name="PRIVATE" id="projen.GitpodPortVisibility.PRIVATE"></a>

Only allows users with workspace access to access the port.

---


### InitProjectOptionHints <a name="InitProjectOptionHints" id="projen.InitProjectOptionHints"></a>

Choices for how to display commented out options in projenrc files.

Does not apply to projenrc.json files.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.InitProjectOptionHints.ALL">ALL</a></code> | Display all possible options (grouped by which interface they belong to). |
| <code><a href="#projen.InitProjectOptionHints.FEATURED">FEATURED</a></code> | Display only featured options, in alphabetical order. |
| <code><a href="#projen.InitProjectOptionHints.NONE">NONE</a></code> | Display no extra options. |

---

##### `ALL` <a name="ALL" id="projen.InitProjectOptionHints.ALL"></a>

Display all possible options (grouped by which interface they belong to).

---


##### `FEATURED` <a name="FEATURED" id="projen.InitProjectOptionHints.FEATURED"></a>

Display only featured options, in alphabetical order.

---


##### `NONE` <a name="NONE" id="projen.InitProjectOptionHints.NONE"></a>

Display no extra options.

---


### LogLevel <a name="LogLevel" id="projen.LogLevel"></a>

Logging verbosity.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.LogLevel.OFF">OFF</a></code> | *No description.* |
| <code><a href="#projen.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#projen.LogLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#projen.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#projen.LogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#projen.LogLevel.VERBOSE">VERBOSE</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="projen.LogLevel.OFF"></a>

---


##### `ERROR` <a name="ERROR" id="projen.LogLevel.ERROR"></a>

---


##### `WARN` <a name="WARN" id="projen.LogLevel.WARN"></a>

---


##### `INFO` <a name="INFO" id="projen.LogLevel.INFO"></a>

---


##### `DEBUG` <a name="DEBUG" id="projen.LogLevel.DEBUG"></a>

---


##### `VERBOSE` <a name="VERBOSE" id="projen.LogLevel.VERBOSE"></a>

---


### ProjectType <a name="ProjectType" id="projen.ProjectType"></a>

Which type of project this is.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.ProjectType.UNKNOWN">UNKNOWN</a></code> | This module may be a either a library or an app. |
| <code><a href="#projen.ProjectType.LIB">LIB</a></code> | This is a library, intended to be published to a package manager and consumed by other projects. |
| <code><a href="#projen.ProjectType.APP">APP</a></code> | This is an app (service, tool, website, etc). |

---

##### ~~`UNKNOWN`~~ <a name="UNKNOWN" id="projen.ProjectType.UNKNOWN"></a>

- *Deprecated:* no longer supported at the base project level

This module may be a either a library or an app.

---


##### ~~`LIB`~~ <a name="LIB" id="projen.ProjectType.LIB"></a>

- *Deprecated:* no longer supported at the base project level

This is a library, intended to be published to a package manager and consumed by other projects.

---


##### ~~`APP`~~ <a name="APP" id="projen.ProjectType.APP"></a>

- *Deprecated:* no longer supported at the base project level

This is an app (service, tool, website, etc).

Its artifacts are intended to
be deployed or published for end-user consumption.

---


### RenovatebotScheduleInterval <a name="RenovatebotScheduleInterval" id="projen.RenovatebotScheduleInterval"></a>

How often to check for new versions and raise pull requests for version updates.

> [https://docs.renovatebot.com/presets-schedule/](https://docs.renovatebot.com/presets-schedule/)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.RenovatebotScheduleInterval.ANY_TIME">ANY_TIME</a></code> | Run at any time. |
| <code><a href="#projen.RenovatebotScheduleInterval.EARLY_MONDAYS">EARLY_MONDAYS</a></code> | Weekly schedule on early monday mornings. |
| <code><a href="#projen.RenovatebotScheduleInterval.DAILY">DAILY</a></code> | Schedule daily. |
| <code><a href="#projen.RenovatebotScheduleInterval.MONTHLY">MONTHLY</a></code> | Schedule monthly. |
| <code><a href="#projen.RenovatebotScheduleInterval.QUARTERLY">QUARTERLY</a></code> | Schedule quarterly. |
| <code><a href="#projen.RenovatebotScheduleInterval.WEEKENDS">WEEKENDS</a></code> | Schedule for weekends. |
| <code><a href="#projen.RenovatebotScheduleInterval.WEEKDAYS">WEEKDAYS</a></code> | Schedule for weekdays. |

---

##### `ANY_TIME` <a name="ANY_TIME" id="projen.RenovatebotScheduleInterval.ANY_TIME"></a>

Run at any time.

---


##### `EARLY_MONDAYS` <a name="EARLY_MONDAYS" id="projen.RenovatebotScheduleInterval.EARLY_MONDAYS"></a>

Weekly schedule on early monday mornings.

---


##### `DAILY` <a name="DAILY" id="projen.RenovatebotScheduleInterval.DAILY"></a>

Schedule daily.

---


##### `MONTHLY` <a name="MONTHLY" id="projen.RenovatebotScheduleInterval.MONTHLY"></a>

Schedule monthly.

---


##### `QUARTERLY` <a name="QUARTERLY" id="projen.RenovatebotScheduleInterval.QUARTERLY"></a>

Schedule quarterly.

---


##### `WEEKENDS` <a name="WEEKENDS" id="projen.RenovatebotScheduleInterval.WEEKENDS"></a>

Schedule for weekends.

---


##### `WEEKDAYS` <a name="WEEKDAYS" id="projen.RenovatebotScheduleInterval.WEEKDAYS"></a>

Schedule for weekdays.

---


### TestFailureBehavior <a name="TestFailureBehavior" id="projen.TestFailureBehavior"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.TestFailureBehavior.SKIP">SKIP</a></code> | Skip the current patch operation and continue with the next operation. |
| <code><a href="#projen.TestFailureBehavior.FAIL_SYNTHESIS">FAIL_SYNTHESIS</a></code> | Fail the whole file synthesis. |

---

##### `SKIP` <a name="SKIP" id="projen.TestFailureBehavior.SKIP"></a>

Skip the current patch operation and continue with the next operation.

---


##### `FAIL_SYNTHESIS` <a name="FAIL_SYNTHESIS" id="projen.TestFailureBehavior.FAIL_SYNTHESIS"></a>

Fail the whole file synthesis.

---

