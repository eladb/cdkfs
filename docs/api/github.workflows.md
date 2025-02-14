# `github.workflows` Submodule <a name="`github.workflows` Submodule" id="projen.github.workflows"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppPermissions <a name="AppPermissions" id="projen.github.workflows.AppPermissions"></a>

The permissions available to a GitHub App.

Typically a token for a GitHub App has all the available scopes/permissions available to the app
itself; however, a more limited set of permissions can be specified. When permissions are provided,
**only** the specified permissions are granted to the token.

> [https://docs.github.com/en/rest/apps/apps?apiVersion=2022-11-28#create-an-installation-access-token-for-an-app](https://docs.github.com/en/rest/apps/apps?apiVersion=2022-11-28#create-an-installation-access-token-for-an-app)

#### Initializer <a name="Initializer" id="projen.github.workflows.AppPermissions.Initializer"></a>

```typescript
import { github } from 'projen'

const appPermissions: github.workflows.AppPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.AppPermissions.property.actions">actions</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.administration">administration</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.checks">checks</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.contents">contents</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.deployments">deployments</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.environments">environments</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.issues">issues</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.members">members</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.metadata">metadata</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationAdministration">organizationAdministration</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationAnnouncementBanners">organizationAnnouncementBanners</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationCustomRoles">organizationCustomRoles</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationHooks">organizationHooks</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationPackages">organizationPackages</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationPlan">organizationPlan</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationProjects">organizationProjects</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationSecrets">organizationSecrets</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationSelfHostedRunners">organizationSelfHostedRunners</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.organizationUserBlocking">organizationUserBlocking</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.packages">packages</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.pages">pages</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.pullRequests">pullRequests</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.repositoryAnnouncementBanners">repositoryAnnouncementBanners</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.repositoryHooks">repositoryHooks</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.repositoryProject">repositoryProject</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.secrets">secrets</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.secretScanningAlerts">secretScanningAlerts</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.securityEvents">securityEvents</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.singleFile">singleFile</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.statuses">statuses</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.teamDiscussions">teamDiscussions</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.AppPermissions.property.workflows">workflows</a></code> | <code>projen.github.workflows.AppPermission</code> | *No description.* |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="projen.github.workflows.AppPermissions.property.actions"></a>

```typescript
public readonly actions: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `administration`<sup>Optional</sup> <a name="administration" id="projen.github.workflows.AppPermissions.property.administration"></a>

```typescript
public readonly administration: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `checks`<sup>Optional</sup> <a name="checks" id="projen.github.workflows.AppPermissions.property.checks"></a>

```typescript
public readonly checks: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `contents`<sup>Optional</sup> <a name="contents" id="projen.github.workflows.AppPermissions.property.contents"></a>

```typescript
public readonly contents: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `deployments`<sup>Optional</sup> <a name="deployments" id="projen.github.workflows.AppPermissions.property.deployments"></a>

```typescript
public readonly deployments: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `environments`<sup>Optional</sup> <a name="environments" id="projen.github.workflows.AppPermissions.property.environments"></a>

```typescript
public readonly environments: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `issues`<sup>Optional</sup> <a name="issues" id="projen.github.workflows.AppPermissions.property.issues"></a>

```typescript
public readonly issues: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `members`<sup>Optional</sup> <a name="members" id="projen.github.workflows.AppPermissions.property.members"></a>

```typescript
public readonly members: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="projen.github.workflows.AppPermissions.property.metadata"></a>

```typescript
public readonly metadata: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationAdministration`<sup>Optional</sup> <a name="organizationAdministration" id="projen.github.workflows.AppPermissions.property.organizationAdministration"></a>

```typescript
public readonly organizationAdministration: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationAnnouncementBanners`<sup>Optional</sup> <a name="organizationAnnouncementBanners" id="projen.github.workflows.AppPermissions.property.organizationAnnouncementBanners"></a>

```typescript
public readonly organizationAnnouncementBanners: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationCustomRoles`<sup>Optional</sup> <a name="organizationCustomRoles" id="projen.github.workflows.AppPermissions.property.organizationCustomRoles"></a>

```typescript
public readonly organizationCustomRoles: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationHooks`<sup>Optional</sup> <a name="organizationHooks" id="projen.github.workflows.AppPermissions.property.organizationHooks"></a>

```typescript
public readonly organizationHooks: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationPackages`<sup>Optional</sup> <a name="organizationPackages" id="projen.github.workflows.AppPermissions.property.organizationPackages"></a>

```typescript
public readonly organizationPackages: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationPlan`<sup>Optional</sup> <a name="organizationPlan" id="projen.github.workflows.AppPermissions.property.organizationPlan"></a>

```typescript
public readonly organizationPlan: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationProjects`<sup>Optional</sup> <a name="organizationProjects" id="projen.github.workflows.AppPermissions.property.organizationProjects"></a>

```typescript
public readonly organizationProjects: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationSecrets`<sup>Optional</sup> <a name="organizationSecrets" id="projen.github.workflows.AppPermissions.property.organizationSecrets"></a>

```typescript
public readonly organizationSecrets: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationSelfHostedRunners`<sup>Optional</sup> <a name="organizationSelfHostedRunners" id="projen.github.workflows.AppPermissions.property.organizationSelfHostedRunners"></a>

```typescript
public readonly organizationSelfHostedRunners: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `organizationUserBlocking`<sup>Optional</sup> <a name="organizationUserBlocking" id="projen.github.workflows.AppPermissions.property.organizationUserBlocking"></a>

```typescript
public readonly organizationUserBlocking: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `packages`<sup>Optional</sup> <a name="packages" id="projen.github.workflows.AppPermissions.property.packages"></a>

```typescript
public readonly packages: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `pages`<sup>Optional</sup> <a name="pages" id="projen.github.workflows.AppPermissions.property.pages"></a>

```typescript
public readonly pages: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `pullRequests`<sup>Optional</sup> <a name="pullRequests" id="projen.github.workflows.AppPermissions.property.pullRequests"></a>

```typescript
public readonly pullRequests: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `repositoryAnnouncementBanners`<sup>Optional</sup> <a name="repositoryAnnouncementBanners" id="projen.github.workflows.AppPermissions.property.repositoryAnnouncementBanners"></a>

```typescript
public readonly repositoryAnnouncementBanners: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `repositoryHooks`<sup>Optional</sup> <a name="repositoryHooks" id="projen.github.workflows.AppPermissions.property.repositoryHooks"></a>

```typescript
public readonly repositoryHooks: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `repositoryProject`<sup>Optional</sup> <a name="repositoryProject" id="projen.github.workflows.AppPermissions.property.repositoryProject"></a>

```typescript
public readonly repositoryProject: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="projen.github.workflows.AppPermissions.property.secrets"></a>

```typescript
public readonly secrets: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `secretScanningAlerts`<sup>Optional</sup> <a name="secretScanningAlerts" id="projen.github.workflows.AppPermissions.property.secretScanningAlerts"></a>

```typescript
public readonly secretScanningAlerts: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `securityEvents`<sup>Optional</sup> <a name="securityEvents" id="projen.github.workflows.AppPermissions.property.securityEvents"></a>

```typescript
public readonly securityEvents: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `singleFile`<sup>Optional</sup> <a name="singleFile" id="projen.github.workflows.AppPermissions.property.singleFile"></a>

```typescript
public readonly singleFile: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="projen.github.workflows.AppPermissions.property.statuses"></a>

```typescript
public readonly statuses: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `teamDiscussions`<sup>Optional</sup> <a name="teamDiscussions" id="projen.github.workflows.AppPermissions.property.teamDiscussions"></a>

```typescript
public readonly teamDiscussions: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `vulnerabilityAlerts`<sup>Optional</sup> <a name="vulnerabilityAlerts" id="projen.github.workflows.AppPermissions.property.vulnerabilityAlerts"></a>

```typescript
public readonly vulnerabilityAlerts: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

##### `workflows`<sup>Optional</sup> <a name="workflows" id="projen.github.workflows.AppPermissions.property.workflows"></a>

```typescript
public readonly workflows: AppPermission;
```

- *Type:* projen.github.workflows.AppPermission

---

### BranchProtectionRuleOptions <a name="BranchProtectionRuleOptions" id="projen.github.workflows.BranchProtectionRuleOptions"></a>

Branch Protection Rule options.

#### Initializer <a name="Initializer" id="projen.github.workflows.BranchProtectionRuleOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const branchProtectionRuleOptions: github.workflows.BranchProtectionRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.BranchProtectionRuleOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.BranchProtectionRuleOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### CheckRunOptions <a name="CheckRunOptions" id="projen.github.workflows.CheckRunOptions"></a>

Check run options.

#### Initializer <a name="Initializer" id="projen.github.workflows.CheckRunOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const checkRunOptions: github.workflows.CheckRunOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.CheckRunOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.CheckRunOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### CheckSuiteOptions <a name="CheckSuiteOptions" id="projen.github.workflows.CheckSuiteOptions"></a>

Check suite options.

#### Initializer <a name="Initializer" id="projen.github.workflows.CheckSuiteOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const checkSuiteOptions: github.workflows.CheckSuiteOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.CheckSuiteOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.CheckSuiteOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### CommonJobDefinition <a name="CommonJobDefinition" id="projen.github.workflows.CommonJobDefinition"></a>

#### Initializer <a name="Initializer" id="projen.github.workflows.CommonJobDefinition.Initializer"></a>

```typescript
import { github } from 'projen'

const commonJobDefinition: github.workflows.CommonJobDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access. |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.concurrency">concurrency</a></code> | <code>any</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.name">name</a></code> | <code>string</code> | The name of the job displayed on GitHub. |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.needs">needs</a></code> | <code>string[]</code> | Identifies any jobs that must complete successfully before this job will run. |
| <code><a href="#projen.github.workflows.CommonJobDefinition.property.strategy">strategy</a></code> | <code>projen.github.workflows.JobStrategy</code> | A strategy creates a build matrix for your jobs. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.workflows.CommonJobDefinition.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions

You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access.

Use `{ contents: READ }` if your job only needs to clone code.

This is intentionally a required field since it is required in order to
allow workflows to run in GitHub repositories with restricted default
access.

> [https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.workflows.CommonJobDefinition.property.concurrency"></a>

```typescript
public readonly concurrency: any;
```

- *Type:* any

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

A concurrency group can be any
string or expression. The expression can use any context except for the
secrets context.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.CommonJobDefinition.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.CommonJobDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job displayed on GitHub.

---

##### `needs`<sup>Optional</sup> <a name="needs" id="projen.github.workflows.CommonJobDefinition.property.needs"></a>

```typescript
public readonly needs: string[];
```

- *Type:* string[]

Identifies any jobs that must complete successfully before this job will run.

It can be a string or array of strings. If a job fails, all jobs
that need it are skipped unless the jobs use a conditional expression
that causes the job to continue.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="projen.github.workflows.CommonJobDefinition.property.strategy"></a>

```typescript
public readonly strategy: JobStrategy;
```

- *Type:* projen.github.workflows.JobStrategy

A strategy creates a build matrix for your jobs.

You can define different
variations to run each job in.

---

### ContainerCredentials <a name="ContainerCredentials" id="projen.github.workflows.ContainerCredentials"></a>

Credentials to use to authenticate to Docker registries.

#### Initializer <a name="Initializer" id="projen.github.workflows.ContainerCredentials.Initializer"></a>

```typescript
import { github } from 'projen'

const containerCredentials: github.workflows.ContainerCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ContainerCredentials.property.password">password</a></code> | <code>string</code> | The password. |
| <code><a href="#projen.github.workflows.ContainerCredentials.property.username">username</a></code> | <code>string</code> | The username. |

---

##### `password`<sup>Required</sup> <a name="password" id="projen.github.workflows.ContainerCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password.

---

##### `username`<sup>Required</sup> <a name="username" id="projen.github.workflows.ContainerCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username.

---

### ContainerOptions <a name="ContainerOptions" id="projen.github.workflows.ContainerOptions"></a>

Options pertaining to container environments.

#### Initializer <a name="Initializer" id="projen.github.workflows.ContainerOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const containerOptions: github.workflows.ContainerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ContainerOptions.property.image">image</a></code> | <code>string</code> | The Docker image to use as the container to run the action. |
| <code><a href="#projen.github.workflows.ContainerOptions.property.credentials">credentials</a></code> | <code>projen.github.workflows.ContainerCredentials</code> | f the image's container registry requires authentication to pull the image, you can use credentials to set a map of the username and password. |
| <code><a href="#projen.github.workflows.ContainerOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets a map of environment variables in the container. |
| <code><a href="#projen.github.workflows.ContainerOptions.property.options">options</a></code> | <code>string[]</code> | Additional Docker container resource options. |
| <code><a href="#projen.github.workflows.ContainerOptions.property.ports">ports</a></code> | <code>number[]</code> | Sets an array of ports to expose on the container. |
| <code><a href="#projen.github.workflows.ContainerOptions.property.volumes">volumes</a></code> | <code>string[]</code> | Sets an array of volumes for the container to use. |

---

##### `image`<sup>Required</sup> <a name="image" id="projen.github.workflows.ContainerOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The Docker image to use as the container to run the action.

The value can
be the Docker Hub image name or a registry name.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="projen.github.workflows.ContainerOptions.property.credentials"></a>

```typescript
public readonly credentials: ContainerCredentials;
```

- *Type:* projen.github.workflows.ContainerCredentials

f the image's container registry requires authentication to pull the image, you can use credentials to set a map of the username and password.

The credentials are the same values that you would provide to the docker
login command.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.ContainerOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets a map of environment variables in the container.

---

##### `options`<sup>Optional</sup> <a name="options" id="projen.github.workflows.ContainerOptions.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Additional Docker container resource options.

> [https://docs.docker.com/engine/reference/commandline/create/#options](https://docs.docker.com/engine/reference/commandline/create/#options)

---

##### `ports`<sup>Optional</sup> <a name="ports" id="projen.github.workflows.ContainerOptions.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

Sets an array of ports to expose on the container.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="projen.github.workflows.ContainerOptions.property.volumes"></a>

```typescript
public readonly volumes: string[];
```

- *Type:* string[]

Sets an array of volumes for the container to use.

You can use volumes to
share data between services or other steps in a job. You can specify
named Docker volumes, anonymous Docker volumes, or bind mounts on the
host.

To specify a volume, you specify the source and destination path:
`<source>:<destinationPath>`.

---

### CreateOptions <a name="CreateOptions" id="projen.github.workflows.CreateOptions"></a>

The Create event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.CreateOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const createOptions: github.workflows.CreateOptions = { ... }
```


### CronScheduleOptions <a name="CronScheduleOptions" id="projen.github.workflows.CronScheduleOptions"></a>

CRON schedule options.

#### Initializer <a name="Initializer" id="projen.github.workflows.CronScheduleOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const cronScheduleOptions: github.workflows.CronScheduleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.CronScheduleOptions.property.cron">cron</a></code> | <code>string</code> | *No description.* |

---

##### `cron`<sup>Required</sup> <a name="cron" id="projen.github.workflows.CronScheduleOptions.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

> [https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)

---

### DeleteOptions <a name="DeleteOptions" id="projen.github.workflows.DeleteOptions"></a>

The Delete event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.DeleteOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const deleteOptions: github.workflows.DeleteOptions = { ... }
```


### DeploymentOptions <a name="DeploymentOptions" id="projen.github.workflows.DeploymentOptions"></a>

The Deployment event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.DeploymentOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const deploymentOptions: github.workflows.DeploymentOptions = { ... }
```


### DeploymentStatusOptions <a name="DeploymentStatusOptions" id="projen.github.workflows.DeploymentStatusOptions"></a>

The Deployment status event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.DeploymentStatusOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const deploymentStatusOptions: github.workflows.DeploymentStatusOptions = { ... }
```


### DiscussionCommentOptions <a name="DiscussionCommentOptions" id="projen.github.workflows.DiscussionCommentOptions"></a>

Discussion comment options.

#### Initializer <a name="Initializer" id="projen.github.workflows.DiscussionCommentOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const discussionCommentOptions: github.workflows.DiscussionCommentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.DiscussionCommentOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.DiscussionCommentOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### DiscussionOptions <a name="DiscussionOptions" id="projen.github.workflows.DiscussionOptions"></a>

Discussion options.

#### Initializer <a name="Initializer" id="projen.github.workflows.DiscussionOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const discussionOptions: github.workflows.DiscussionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.DiscussionOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.DiscussionOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### ForkOptions <a name="ForkOptions" id="projen.github.workflows.ForkOptions"></a>

The Fork event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.ForkOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const forkOptions: github.workflows.ForkOptions = { ... }
```


### GollumOptions <a name="GollumOptions" id="projen.github.workflows.GollumOptions"></a>

The Gollum event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.GollumOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const gollumOptions: github.workflows.GollumOptions = { ... }
```


### IssueCommentOptions <a name="IssueCommentOptions" id="projen.github.workflows.IssueCommentOptions"></a>

Issue comment options.

#### Initializer <a name="Initializer" id="projen.github.workflows.IssueCommentOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const issueCommentOptions: github.workflows.IssueCommentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.IssueCommentOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.IssueCommentOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### IssuesOptions <a name="IssuesOptions" id="projen.github.workflows.IssuesOptions"></a>

Issues options.

#### Initializer <a name="Initializer" id="projen.github.workflows.IssuesOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const issuesOptions: github.workflows.IssuesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.IssuesOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.IssuesOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### Job <a name="Job" id="projen.github.workflows.Job"></a>

A GitHub Workflow job definition.

#### Initializer <a name="Initializer" id="projen.github.workflows.Job.Initializer"></a>

```typescript
import { github } from 'projen'

const job: github.workflows.Job = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.Job.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access. |
| <code><a href="#projen.github.workflows.Job.property.concurrency">concurrency</a></code> | <code>any</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.workflows.Job.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.Job.property.name">name</a></code> | <code>string</code> | The name of the job displayed on GitHub. |
| <code><a href="#projen.github.workflows.Job.property.needs">needs</a></code> | <code>string[]</code> | Identifies any jobs that must complete successfully before this job will run. |
| <code><a href="#projen.github.workflows.Job.property.strategy">strategy</a></code> | <code>projen.github.workflows.JobStrategy</code> | A strategy creates a build matrix for your jobs. |
| <code><a href="#projen.github.workflows.Job.property.steps">steps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A job contains a sequence of tasks called steps. |
| <code><a href="#projen.github.workflows.Job.property.container">container</a></code> | <code>projen.github.workflows.ContainerOptions</code> | A container to run any steps in a job that don't already specify a container. |
| <code><a href="#projen.github.workflows.Job.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a workflow run from failing when a job fails. |
| <code><a href="#projen.github.workflows.Job.property.defaults">defaults</a></code> | <code>projen.github.workflows.JobDefaults</code> | A map of default settings that will apply to all steps in the job. |
| <code><a href="#projen.github.workflows.Job.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | A map of environment variables that are available to all steps in the job. |
| <code><a href="#projen.github.workflows.Job.property.environment">environment</a></code> | <code>any</code> | The environment that the job references. |
| <code><a href="#projen.github.workflows.Job.property.outputs">outputs</a></code> | <code>{[ key: string ]: projen.github.workflows.JobStepOutput}</code> | A map of outputs for a job. |
| <code><a href="#projen.github.workflows.Job.property.runsOn">runsOn</a></code> | <code>string[]</code> | The type of machine to run the job on. |
| <code><a href="#projen.github.workflows.Job.property.runsOnGroup">runsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen.github.workflows.Job.property.services">services</a></code> | <code>{[ key: string ]: projen.github.workflows.ContainerOptions}</code> | Used to host service containers for a job in a workflow. |
| <code><a href="#projen.github.workflows.Job.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to let a job run before GitHub automatically cancels it. |
| <code><a href="#projen.github.workflows.Job.property.tools">tools</a></code> | <code>projen.github.workflows.Tools</code> | Tools required for this job. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.workflows.Job.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions

You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access.

Use `{ contents: READ }` if your job only needs to clone code.

This is intentionally a required field since it is required in order to
allow workflows to run in GitHub repositories with restricted default
access.

> [https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.workflows.Job.property.concurrency"></a>

```typescript
public readonly concurrency: any;
```

- *Type:* any

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

A concurrency group can be any
string or expression. The expression can use any context except for the
secrets context.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.Job.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.Job.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job displayed on GitHub.

---

##### `needs`<sup>Optional</sup> <a name="needs" id="projen.github.workflows.Job.property.needs"></a>

```typescript
public readonly needs: string[];
```

- *Type:* string[]

Identifies any jobs that must complete successfully before this job will run.

It can be a string or array of strings. If a job fails, all jobs
that need it are skipped unless the jobs use a conditional expression
that causes the job to continue.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="projen.github.workflows.Job.property.strategy"></a>

```typescript
public readonly strategy: JobStrategy;
```

- *Type:* projen.github.workflows.JobStrategy

A strategy creates a build matrix for your jobs.

You can define different
variations to run each job in.

---

##### `steps`<sup>Required</sup> <a name="steps" id="projen.github.workflows.Job.property.steps"></a>

```typescript
public readonly steps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A job contains a sequence of tasks called steps.

Steps can run commands,
run setup tasks, or run an action in your repository, a public repository,
or an action published in a Docker registry. Not all steps run actions,
but all actions run as a step. Each step runs in its own process in the
runner environment and has access to the workspace and filesystem.
Because steps run in their own process, changes to environment variables
are not preserved between steps. GitHub provides built-in steps to set up
and complete a job.

---

##### `container`<sup>Optional</sup> <a name="container" id="projen.github.workflows.Job.property.container"></a>

```typescript
public readonly container: ContainerOptions;
```

- *Type:* projen.github.workflows.ContainerOptions

A container to run any steps in a job that don't already specify a container.

If you have steps that use both script and container actions,
the container actions will run as sibling containers on the same network
with the same volume mounts.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.workflows.Job.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a workflow run from failing when a job fails.

Set to true to
allow a workflow run to pass when this job fails.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="projen.github.workflows.Job.property.defaults"></a>

```typescript
public readonly defaults: JobDefaults;
```

- *Type:* projen.github.workflows.JobDefaults

A map of default settings that will apply to all steps in the job.

You
can also set default settings for the entire workflow.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.Job.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of environment variables that are available to all steps in the job.

You can also set environment variables for the entire workflow or an
individual step.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="projen.github.workflows.Job.property.environment"></a>

```typescript
public readonly environment: any;
```

- *Type:* any

The environment that the job references.

All environment protection rules
must pass before a job referencing the environment is sent to a runner.

> [https://docs.github.com/en/actions/reference/environments](https://docs.github.com/en/actions/reference/environments)

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen.github.workflows.Job.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: JobStepOutput};
```

- *Type:* {[ key: string ]: projen.github.workflows.JobStepOutput}

A map of outputs for a job.

Job outputs are available to all downstream
jobs that depend on this job.

---

##### `runsOn`<sup>Optional</sup> <a name="runsOn" id="projen.github.workflows.Job.property.runsOn"></a>

```typescript
public readonly runsOn: string[];
```

- *Type:* string[]

The type of machine to run the job on.

The machine can be either a
GitHub-hosted runner or a self-hosted runner.

---

*Example*

```typescript
["ubuntu-latest"]
```


##### `runsOnGroup`<sup>Optional</sup> <a name="runsOnGroup" id="projen.github.workflows.Job.property.runsOnGroup"></a>

```typescript
public readonly runsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `services`<sup>Optional</sup> <a name="services" id="projen.github.workflows.Job.property.services"></a>

```typescript
public readonly services: {[ key: string ]: ContainerOptions};
```

- *Type:* {[ key: string ]: projen.github.workflows.ContainerOptions}

Used to host service containers for a job in a workflow.

Service
containers are useful for creating databases or cache services like Redis.
The runner automatically creates a Docker network and manages the life
cycle of the service containers.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.workflows.Job.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number
- *Default:* 360

The maximum number of minutes to let a job run before GitHub automatically cancels it.

---

##### `tools`<sup>Optional</sup> <a name="tools" id="projen.github.workflows.Job.property.tools"></a>

```typescript
public readonly tools: Tools;
```

- *Type:* projen.github.workflows.Tools

Tools required for this job.

Translates into `actions/setup-xxx` steps at the beginning of the job.

---

### JobCallingReusableWorkflow <a name="JobCallingReusableWorkflow" id="projen.github.workflows.JobCallingReusableWorkflow"></a>

A GitHub Workflow Job calling a reusable workflow.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobCallingReusableWorkflow.Initializer"></a>

```typescript
import { github } from 'projen'

const jobCallingReusableWorkflow: github.workflows.JobCallingReusableWorkflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.permissions">permissions</a></code> | <code>projen.github.workflows.JobPermissions</code> | You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.concurrency">concurrency</a></code> | <code>any</code> | Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.name">name</a></code> | <code>string</code> | The name of the job displayed on GitHub. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.needs">needs</a></code> | <code>string[]</code> | Identifies any jobs that must complete successfully before this job will run. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.strategy">strategy</a></code> | <code>projen.github.workflows.JobStrategy</code> | A strategy creates a build matrix for your jobs. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.uses">uses</a></code> | <code>string</code> | The location and version of a reusable workflow file to run as a job. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.secrets">secrets</a></code> | <code>string \| {[ key: string ]: string}</code> | When a job is used to call a reusable workflow, you can use secrets to provide a map of secrets that are passed to the called workflow. |
| <code><a href="#projen.github.workflows.JobCallingReusableWorkflow.property.with">with</a></code> | <code>{[ key: string ]: string \| boolean}</code> | When a job is used to call a reusable workflow, you can use with to provide a map of inputs that are passed to the called workflow. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="projen.github.workflows.JobCallingReusableWorkflow.property.permissions"></a>

```typescript
public readonly permissions: JobPermissions;
```

- *Type:* projen.github.workflows.JobPermissions

You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access.

Use `{ contents: READ }` if your job only needs to clone code.

This is intentionally a required field since it is required in order to
allow workflows to run in GitHub repositories with restricted default
access.

> [https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="projen.github.workflows.JobCallingReusableWorkflow.property.concurrency"></a>

```typescript
public readonly concurrency: any;
```

- *Type:* any

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time.

A concurrency group can be any
string or expression. The expression can use any context except for the
secrets context.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.JobCallingReusableWorkflow.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.JobCallingReusableWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job displayed on GitHub.

---

##### `needs`<sup>Optional</sup> <a name="needs" id="projen.github.workflows.JobCallingReusableWorkflow.property.needs"></a>

```typescript
public readonly needs: string[];
```

- *Type:* string[]

Identifies any jobs that must complete successfully before this job will run.

It can be a string or array of strings. If a job fails, all jobs
that need it are skipped unless the jobs use a conditional expression
that causes the job to continue.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="projen.github.workflows.JobCallingReusableWorkflow.property.strategy"></a>

```typescript
public readonly strategy: JobStrategy;
```

- *Type:* projen.github.workflows.JobStrategy

A strategy creates a build matrix for your jobs.

You can define different
variations to run each job in.

---

##### `uses`<sup>Required</sup> <a name="uses" id="projen.github.workflows.JobCallingReusableWorkflow.property.uses"></a>

```typescript
public readonly uses: string;
```

- *Type:* string

The location and version of a reusable workflow file to run as a job.

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="projen.github.workflows.JobCallingReusableWorkflow.property.secrets"></a>

```typescript
public readonly secrets: string | {[ key: string ]: string};
```

- *Type:* string | {[ key: string ]: string}

When a job is used to call a reusable workflow, you can use secrets to provide a map of secrets that are passed to the called workflow.

Use the 'inherit' keyword to pass all the calling workflow's secrets to the called workflow

---

##### `with`<sup>Optional</sup> <a name="with" id="projen.github.workflows.JobCallingReusableWorkflow.property.with"></a>

```typescript
public readonly with: {[ key: string ]: string | boolean};
```

- *Type:* {[ key: string ]: string | boolean}

When a job is used to call a reusable workflow, you can use with to provide a map of inputs that are passed to the called workflow.

Allowed expression contexts: `github`, and `needs`.

---

### JobDefaults <a name="JobDefaults" id="projen.github.workflows.JobDefaults"></a>

Default settings for all steps in the job.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobDefaults.Initializer"></a>

```typescript
import { github } from 'projen'

const jobDefaults: github.workflows.JobDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobDefaults.property.run">run</a></code> | <code>projen.github.workflows.RunSettings</code> | Default run settings. |

---

##### `run`<sup>Optional</sup> <a name="run" id="projen.github.workflows.JobDefaults.property.run"></a>

```typescript
public readonly run: RunSettings;
```

- *Type:* projen.github.workflows.RunSettings

Default run settings.

---

### JobMatrix <a name="JobMatrix" id="projen.github.workflows.JobMatrix"></a>

A job matrix.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobMatrix.Initializer"></a>

```typescript
import { github } from 'projen'

const jobMatrix: github.workflows.JobMatrix = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobMatrix.property.domain">domain</a></code> | <code>{[ key: string ]: string \| number \| boolean[]}</code> | Each option you define in the matrix has a key and value. |
| <code><a href="#projen.github.workflows.JobMatrix.property.exclude">exclude</a></code> | <code>{[ key: string ]: string \| number \| boolean}[]</code> | You can remove a specific configurations defined in the build matrix using the exclude option. |
| <code><a href="#projen.github.workflows.JobMatrix.property.include">include</a></code> | <code>{[ key: string ]: string \| number \| boolean}[]</code> | You can add additional configuration options to a build matrix job that already exists. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="projen.github.workflows.JobMatrix.property.domain"></a>

```typescript
public readonly domain: {[ key: string ]: string | number | boolean[]};
```

- *Type:* {[ key: string ]: string | number | boolean[]}

Each option you define in the matrix has a key and value.

The keys you
define become properties in the matrix context and you can reference the
property in other areas of your workflow file. For example, if you define
the key os that contains an array of operating systems, you can use the
matrix.os property as the value of the runs-on keyword to create a job
for each operating system.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="projen.github.workflows.JobMatrix.property.exclude"></a>

```typescript
public readonly exclude: {[ key: string ]: string | number | boolean}[];
```

- *Type:* {[ key: string ]: string | number | boolean}[]

You can remove a specific configurations defined in the build matrix using the exclude option.

Using exclude removes a job defined by the
build matrix.

---

##### `include`<sup>Optional</sup> <a name="include" id="projen.github.workflows.JobMatrix.property.include"></a>

```typescript
public readonly include: {[ key: string ]: string | number | boolean}[];
```

- *Type:* {[ key: string ]: string | number | boolean}[]

You can add additional configuration options to a build matrix job that already exists.

For example, if you want to use a specific version of npm
when the job that uses windows-latest and version 8 of node runs, you can
use include to specify that additional option.

---

### JobPermissions <a name="JobPermissions" id="projen.github.workflows.JobPermissions"></a>

The available scopes and access values for workflow permissions.

If you
specify the access for any of these scopes, all those that are not
specified are set to `JobPermission.NONE`, instead of the default behavior
when none is specified.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobPermissions.Initializer"></a>

```typescript
import { github } from 'projen'

const jobPermissions: github.workflows.JobPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobPermissions.property.actions">actions</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.checks">checks</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.contents">contents</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.deployments">deployments</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.discussions">discussions</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.idToken">idToken</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.issues">issues</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.packages">packages</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.pages">pages</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.pullRequests">pullRequests</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.repositoryProjects">repositoryProjects</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.securityEvents">securityEvents</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |
| <code><a href="#projen.github.workflows.JobPermissions.property.statuses">statuses</a></code> | <code>projen.github.workflows.JobPermission</code> | *No description.* |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="projen.github.workflows.JobPermissions.property.actions"></a>

```typescript
public readonly actions: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `checks`<sup>Optional</sup> <a name="checks" id="projen.github.workflows.JobPermissions.property.checks"></a>

```typescript
public readonly checks: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `contents`<sup>Optional</sup> <a name="contents" id="projen.github.workflows.JobPermissions.property.contents"></a>

```typescript
public readonly contents: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `deployments`<sup>Optional</sup> <a name="deployments" id="projen.github.workflows.JobPermissions.property.deployments"></a>

```typescript
public readonly deployments: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `discussions`<sup>Optional</sup> <a name="discussions" id="projen.github.workflows.JobPermissions.property.discussions"></a>

```typescript
public readonly discussions: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="projen.github.workflows.JobPermissions.property.idToken"></a>

```typescript
public readonly idToken: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `issues`<sup>Optional</sup> <a name="issues" id="projen.github.workflows.JobPermissions.property.issues"></a>

```typescript
public readonly issues: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `packages`<sup>Optional</sup> <a name="packages" id="projen.github.workflows.JobPermissions.property.packages"></a>

```typescript
public readonly packages: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `pages`<sup>Optional</sup> <a name="pages" id="projen.github.workflows.JobPermissions.property.pages"></a>

```typescript
public readonly pages: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `pullRequests`<sup>Optional</sup> <a name="pullRequests" id="projen.github.workflows.JobPermissions.property.pullRequests"></a>

```typescript
public readonly pullRequests: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `repositoryProjects`<sup>Optional</sup> <a name="repositoryProjects" id="projen.github.workflows.JobPermissions.property.repositoryProjects"></a>

```typescript
public readonly repositoryProjects: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `securityEvents`<sup>Optional</sup> <a name="securityEvents" id="projen.github.workflows.JobPermissions.property.securityEvents"></a>

```typescript
public readonly securityEvents: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="projen.github.workflows.JobPermissions.property.statuses"></a>

```typescript
public readonly statuses: JobPermission;
```

- *Type:* projen.github.workflows.JobPermission

---

### JobStep <a name="JobStep" id="projen.github.workflows.JobStep"></a>

JobSteps run as part of a GitHub Workflow Job.

> [https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps)

#### Initializer <a name="Initializer" id="projen.github.workflows.JobStep.Initializer"></a>

```typescript
import { github } from 'projen'

const jobStep: github.workflows.JobStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobStep.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.workflows.JobStep.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.workflows.JobStep.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.JobStep.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.workflows.JobStep.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.workflows.JobStep.property.run">run</a></code> | <code>string</code> | Runs command-line programs using the operating system's shell. |
| <code><a href="#projen.github.workflows.JobStep.property.uses">uses</a></code> | <code>string</code> | Selects an action to run as part of a step in your job. |
| <code><a href="#projen.github.workflows.JobStep.property.with">with</a></code> | <code>{[ key: string ]: any}</code> | A map of the input parameters defined by the action. |
| <code><a href="#projen.github.workflows.JobStep.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.workflows.JobStep.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.JobStep.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.workflows.JobStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.JobStep.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.JobStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.workflows.JobStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `run`<sup>Optional</sup> <a name="run" id="projen.github.workflows.JobStep.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Runs command-line programs using the operating system's shell.

If you do
not provide a name, the step name will default to the text specified in
the run command.

---

##### `uses`<sup>Optional</sup> <a name="uses" id="projen.github.workflows.JobStep.property.uses"></a>

```typescript
public readonly uses: string;
```

- *Type:* string

Selects an action to run as part of a step in your job.

An action is a
reusable unit of code. You can use an action defined in the same
repository as the workflow, a public repository, or in a published Docker
container image.

---

##### `with`<sup>Optional</sup> <a name="with" id="projen.github.workflows.JobStep.property.with"></a>

```typescript
public readonly with: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A map of the input parameters defined by the action.

Each input parameter
is a key/value pair. Input parameters are set as environment variables.
The variable is prefixed with INPUT_ and converted to upper case.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.workflows.JobStep.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.workflows.JobStep.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

### JobStepConfiguration <a name="JobStepConfiguration" id="projen.github.workflows.JobStepConfiguration"></a>

These settings are unique to a JobStep from the fields contained within the metadata action.yaml file present in when creating a new GitHub Action. These fields are not present in action.yml, but are in JobStep, which are using when creating workflows.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobStepConfiguration.Initializer"></a>

```typescript
import { github } from 'projen'

const jobStepConfiguration: github.workflows.JobStepConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.continueOnError">continueOnError</a></code> | <code>boolean</code> | Prevents a job from failing when a step fails. |
| <code><a href="#projen.github.workflows.JobStepConfiguration.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | The maximum number of minutes to run the step before killing the process. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.JobStepConfiguration.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.workflows.JobStepConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.JobStepConfiguration.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.JobStepConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.workflows.JobStepConfiguration.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `continueOnError`<sup>Optional</sup> <a name="continueOnError" id="projen.github.workflows.JobStepConfiguration.property.continueOnError"></a>

```typescript
public readonly continueOnError: boolean;
```

- *Type:* boolean

Prevents a job from failing when a step fails.

Set to true to allow a job
to pass when this step fails.

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="projen.github.workflows.JobStepConfiguration.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

The maximum number of minutes to run the step before killing the process.

---

### JobStepOutput <a name="JobStepOutput" id="projen.github.workflows.JobStepOutput"></a>

An output binding for a job.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobStepOutput.Initializer"></a>

```typescript
import { github } from 'projen'

const jobStepOutput: github.workflows.JobStepOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobStepOutput.property.outputName">outputName</a></code> | <code>string</code> | The name of the job output that is being bound. |
| <code><a href="#projen.github.workflows.JobStepOutput.property.stepId">stepId</a></code> | <code>string</code> | The ID of the step that exposes the output. |

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="projen.github.workflows.JobStepOutput.property.outputName"></a>

```typescript
public readonly outputName: string;
```

- *Type:* string

The name of the job output that is being bound.

---

##### `stepId`<sup>Required</sup> <a name="stepId" id="projen.github.workflows.JobStepOutput.property.stepId"></a>

```typescript
public readonly stepId: string;
```

- *Type:* string

The ID of the step that exposes the output.

---

### JobStrategy <a name="JobStrategy" id="projen.github.workflows.JobStrategy"></a>

A strategy creates a build matrix for your jobs.

You can define different
variations to run each job in.

#### Initializer <a name="Initializer" id="projen.github.workflows.JobStrategy.Initializer"></a>

```typescript
import { github } from 'projen'

const jobStrategy: github.workflows.JobStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.JobStrategy.property.failFast">failFast</a></code> | <code>boolean</code> | When set to true, GitHub cancels all in-progress jobs if any matrix job fails. |
| <code><a href="#projen.github.workflows.JobStrategy.property.matrix">matrix</a></code> | <code>projen.github.workflows.JobMatrix</code> | You can define a matrix of different job configurations. |
| <code><a href="#projen.github.workflows.JobStrategy.property.maxParallel">maxParallel</a></code> | <code>number</code> | The maximum number of jobs that can run simultaneously when using a matrix job strategy. |

---

##### `failFast`<sup>Optional</sup> <a name="failFast" id="projen.github.workflows.JobStrategy.property.failFast"></a>

```typescript
public readonly failFast: boolean;
```

- *Type:* boolean

When set to true, GitHub cancels all in-progress jobs if any matrix job fails.

Default: true

---

##### `matrix`<sup>Optional</sup> <a name="matrix" id="projen.github.workflows.JobStrategy.property.matrix"></a>

```typescript
public readonly matrix: JobMatrix;
```

- *Type:* projen.github.workflows.JobMatrix

You can define a matrix of different job configurations.

A matrix allows
you to create multiple jobs by performing variable substitution in a
single job definition. For example, you can use a matrix to create jobs
for more than one supported version of a programming language, operating
system, or tool. A matrix reuses the job's configuration and creates a
job for each matrix you configure.

A job matrix can generate a maximum of 256 jobs per workflow run. This
limit also applies to self-hosted runners.

---

##### `maxParallel`<sup>Optional</sup> <a name="maxParallel" id="projen.github.workflows.JobStrategy.property.maxParallel"></a>

```typescript
public readonly maxParallel: number;
```

- *Type:* number

The maximum number of jobs that can run simultaneously when using a matrix job strategy.

By default, GitHub will maximize the number of jobs
run in parallel depending on the available runners on GitHub-hosted
virtual machines.

---

### LabelOptions <a name="LabelOptions" id="projen.github.workflows.LabelOptions"></a>

Label options.

#### Initializer <a name="Initializer" id="projen.github.workflows.LabelOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const labelOptions: github.workflows.LabelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.LabelOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.LabelOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### MergeGroupOptions <a name="MergeGroupOptions" id="projen.github.workflows.MergeGroupOptions"></a>

Merge group options.

#### Initializer <a name="Initializer" id="projen.github.workflows.MergeGroupOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const mergeGroupOptions: github.workflows.MergeGroupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.MergeGroupOptions.property.branches">branches</a></code> | <code>string[]</code> | When using the merge_group events, you can configure a workflow to run on specific base branches. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.workflows.MergeGroupOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

When using the merge_group events, you can configure a workflow to run on specific base branches.

If not specified, all branches will
trigger the workflow.

---

### MilestoneOptions <a name="MilestoneOptions" id="projen.github.workflows.MilestoneOptions"></a>

Milestone options.

#### Initializer <a name="Initializer" id="projen.github.workflows.MilestoneOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const milestoneOptions: github.workflows.MilestoneOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.MilestoneOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.MilestoneOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PageBuildOptions <a name="PageBuildOptions" id="projen.github.workflows.PageBuildOptions"></a>

The Page build event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PageBuildOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pageBuildOptions: github.workflows.PageBuildOptions = { ... }
```


### ProjectCardOptions <a name="ProjectCardOptions" id="projen.github.workflows.ProjectCardOptions"></a>

Project card options.

#### Initializer <a name="Initializer" id="projen.github.workflows.ProjectCardOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const projectCardOptions: github.workflows.ProjectCardOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ProjectCardOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.ProjectCardOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### ProjectColumnOptions <a name="ProjectColumnOptions" id="projen.github.workflows.ProjectColumnOptions"></a>

Probject column options.

#### Initializer <a name="Initializer" id="projen.github.workflows.ProjectColumnOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const projectColumnOptions: github.workflows.ProjectColumnOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ProjectColumnOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.ProjectColumnOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### ProjectOptions <a name="ProjectOptions" id="projen.github.workflows.ProjectOptions"></a>

Project options.

#### Initializer <a name="Initializer" id="projen.github.workflows.ProjectOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const projectOptions: github.workflows.ProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ProjectOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.ProjectOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PublicOptions <a name="PublicOptions" id="projen.github.workflows.PublicOptions"></a>

The Public event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PublicOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const publicOptions: github.workflows.PublicOptions = { ... }
```


### PullRequestOptions <a name="PullRequestOptions" id="projen.github.workflows.PullRequestOptions"></a>

Pull request options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PullRequestOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestOptions: github.workflows.PullRequestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.PullRequestOptions.property.branches">branches</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |
| <code><a href="#projen.github.workflows.PullRequestOptions.property.paths">paths</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths. |
| <code><a href="#projen.github.workflows.PullRequestOptions.property.tags">tags</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |
| <code><a href="#projen.github.workflows.PullRequestOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.workflows.PullRequestOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `paths`<sup>Optional</sup> <a name="paths" id="projen.github.workflows.PullRequestOptions.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths.

Path filters are not
evaluated for pushes to tags.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="projen.github.workflows.PullRequestOptions.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.PullRequestOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PullRequestReviewCommentOptions <a name="PullRequestReviewCommentOptions" id="projen.github.workflows.PullRequestReviewCommentOptions"></a>

Pull request review comment options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PullRequestReviewCommentOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestReviewCommentOptions: github.workflows.PullRequestReviewCommentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.PullRequestReviewCommentOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.PullRequestReviewCommentOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PullRequestReviewOptions <a name="PullRequestReviewOptions" id="projen.github.workflows.PullRequestReviewOptions"></a>

Pull request review options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PullRequestReviewOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestReviewOptions: github.workflows.PullRequestReviewOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.PullRequestReviewOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.PullRequestReviewOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PullRequestTargetOptions <a name="PullRequestTargetOptions" id="projen.github.workflows.PullRequestTargetOptions"></a>

Pull request target options.

#### Initializer <a name="Initializer" id="projen.github.workflows.PullRequestTargetOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pullRequestTargetOptions: github.workflows.PullRequestTargetOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.PullRequestTargetOptions.property.branches">branches</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |
| <code><a href="#projen.github.workflows.PullRequestTargetOptions.property.paths">paths</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths. |
| <code><a href="#projen.github.workflows.PullRequestTargetOptions.property.tags">tags</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |
| <code><a href="#projen.github.workflows.PullRequestTargetOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.workflows.PullRequestTargetOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `paths`<sup>Optional</sup> <a name="paths" id="projen.github.workflows.PullRequestTargetOptions.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths.

Path filters are not
evaluated for pushes to tags.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="projen.github.workflows.PullRequestTargetOptions.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.PullRequestTargetOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### PushOptions <a name="PushOptions" id="projen.github.workflows.PushOptions"></a>

Options for push-like events.

#### Initializer <a name="Initializer" id="projen.github.workflows.PushOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const pushOptions: github.workflows.PushOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.PushOptions.property.branches">branches</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |
| <code><a href="#projen.github.workflows.PushOptions.property.paths">paths</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths. |
| <code><a href="#projen.github.workflows.PushOptions.property.tags">tags</a></code> | <code>string[]</code> | When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.workflows.PushOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `paths`<sup>Optional</sup> <a name="paths" id="projen.github.workflows.PushOptions.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run when at least one file does not match paths-ignore or at least one modified file matches the configured paths.

Path filters are not
evaluated for pushes to tags.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="projen.github.workflows.PushOptions.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

When using the push, pull_request and pull_request_target events, you can configure a workflow to run on specific branches or tags.

For a pull_request event, only
branches and tags on the base are evaluated. If you define only tags or
only branches, the workflow won't run for events affecting the undefined
Git ref.

> [https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

---

### RegistryPackageOptions <a name="RegistryPackageOptions" id="projen.github.workflows.RegistryPackageOptions"></a>

Registry package options.

#### Initializer <a name="Initializer" id="projen.github.workflows.RegistryPackageOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const registryPackageOptions: github.workflows.RegistryPackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.RegistryPackageOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.RegistryPackageOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### ReleaseOptions <a name="ReleaseOptions" id="projen.github.workflows.ReleaseOptions"></a>

Release options.

#### Initializer <a name="Initializer" id="projen.github.workflows.ReleaseOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const releaseOptions: github.workflows.ReleaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ReleaseOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.ReleaseOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### RepositoryDispatchOptions <a name="RepositoryDispatchOptions" id="projen.github.workflows.RepositoryDispatchOptions"></a>

Repository dispatch options.

#### Initializer <a name="Initializer" id="projen.github.workflows.RepositoryDispatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const repositoryDispatchOptions: github.workflows.RepositoryDispatchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.RepositoryDispatchOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.RepositoryDispatchOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### RunSettings <a name="RunSettings" id="projen.github.workflows.RunSettings"></a>

Run settings for a job.

#### Initializer <a name="Initializer" id="projen.github.workflows.RunSettings.Initializer"></a>

```typescript
import { github } from 'projen'

const runSettings: github.workflows.RunSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.RunSettings.property.shell">shell</a></code> | <code>string</code> | Which shell to use for running the step. |
| <code><a href="#projen.github.workflows.RunSettings.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Working directory to use when running the step. |

---

##### `shell`<sup>Optional</sup> <a name="shell" id="projen.github.workflows.RunSettings.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

Which shell to use for running the step.

---

*Example*

```typescript
"bash"
```


##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.workflows.RunSettings.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Working directory to use when running the step.

---

### StatusOptions <a name="StatusOptions" id="projen.github.workflows.StatusOptions"></a>

The Status event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.StatusOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const statusOptions: github.workflows.StatusOptions = { ... }
```


### Step <a name="Step" id="projen.github.workflows.Step"></a>

This contains the fields that are common amongst both: - JobStep, which is a step that is part of a Job in Github Actions.

This is by far the most common use case.
- The metadata file `action.yaml` that is used to define an Action when you are creating one. As in, if you were creating an Action to be used in a JobStep.
There is some overlap between the two, and this captures that overlap.

> [https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

#### Initializer <a name="Initializer" id="projen.github.workflows.Step.Initializer"></a>

```typescript
import { github } from 'projen'

const step: github.workflows.Step = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.Step.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.workflows.Step.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.workflows.Step.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.Step.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.workflows.Step.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen.github.workflows.Step.property.run">run</a></code> | <code>string</code> | Runs command-line programs using the operating system's shell. |
| <code><a href="#projen.github.workflows.Step.property.uses">uses</a></code> | <code>string</code> | Selects an action to run as part of a step in your job. |
| <code><a href="#projen.github.workflows.Step.property.with">with</a></code> | <code>{[ key: string ]: any}</code> | A map of the input parameters defined by the action. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.Step.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.workflows.Step.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.Step.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.Step.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.workflows.Step.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `run`<sup>Optional</sup> <a name="run" id="projen.github.workflows.Step.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Runs command-line programs using the operating system's shell.

If you do
not provide a name, the step name will default to the text specified in
the run command.

---

##### `uses`<sup>Optional</sup> <a name="uses" id="projen.github.workflows.Step.property.uses"></a>

```typescript
public readonly uses: string;
```

- *Type:* string

Selects an action to run as part of a step in your job.

An action is a
reusable unit of code. You can use an action defined in the same
repository as the workflow, a public repository, or in a published Docker
container image.

---

##### `with`<sup>Optional</sup> <a name="with" id="projen.github.workflows.Step.property.with"></a>

```typescript
public readonly with: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A map of the input parameters defined by the action.

Each input parameter
is a key/value pair. Input parameters are set as environment variables.
The variable is prefixed with INPUT_ and converted to upper case.

---

### StepConfiguration <a name="StepConfiguration" id="projen.github.workflows.StepConfiguration"></a>

Fields that describe the How, Why, When, and Who of a Step.

These fields can have none present, but can be present on every Step, and have no effect on one another.

This stands in contrast to the Command (non-Configuration) fields, which are mutually exclusive, and describe the What.

#### Initializer <a name="Initializer" id="projen.github.workflows.StepConfiguration.Initializer"></a>

```typescript
import { github } from 'projen'

const stepConfiguration: github.workflows.StepConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.StepConfiguration.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen.github.workflows.StepConfiguration.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen.github.workflows.StepConfiguration.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen.github.workflows.StepConfiguration.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen.github.workflows.StepConfiguration.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen.github.workflows.StepConfiguration.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen.github.workflows.StepConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen.github.workflows.StepConfiguration.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen.github.workflows.StepConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen.github.workflows.StepConfiguration.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

### ToolRequirement <a name="ToolRequirement" id="projen.github.workflows.ToolRequirement"></a>

Version requirement for tools.

#### Initializer <a name="Initializer" id="projen.github.workflows.ToolRequirement.Initializer"></a>

```typescript
import { github } from 'projen'

const toolRequirement: github.workflows.ToolRequirement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.ToolRequirement.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="projen.github.workflows.ToolRequirement.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### Tools <a name="Tools" id="projen.github.workflows.Tools"></a>

Supported tools.

#### Initializer <a name="Initializer" id="projen.github.workflows.Tools.Initializer"></a>

```typescript
import { github } from 'projen'

const tools: github.workflows.Tools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.Tools.property.custom">custom</a></code> | <code>projen.github.workflows.ITool[]</code> | Setup additional custom tools. |
| <code><a href="#projen.github.workflows.Tools.property.dotnet">dotnet</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup .NET Core. |
| <code><a href="#projen.github.workflows.Tools.property.go">go</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup golang. |
| <code><a href="#projen.github.workflows.Tools.property.java">java</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup java (corretto distribution). |
| <code><a href="#projen.github.workflows.Tools.property.node">node</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup node.js. |
| <code><a href="#projen.github.workflows.Tools.property.python">python</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup python. |
| <code><a href="#projen.github.workflows.Tools.property.rust">rust</a></code> | <code>projen.github.workflows.ToolRequirement</code> | Setup rust toolchain. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="projen.github.workflows.Tools.property.custom"></a>

```typescript
public readonly custom: ITool[];
```

- *Type:* projen.github.workflows.ITool[]
- *Default:* no custom tools are added

Setup additional custom tools.

---

##### `dotnet`<sup>Optional</sup> <a name="dotnet" id="projen.github.workflows.Tools.property.dotnet"></a>

```typescript
public readonly dotnet: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup .NET Core.

---

##### `go`<sup>Optional</sup> <a name="go" id="projen.github.workflows.Tools.property.go"></a>

```typescript
public readonly go: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup golang.

---

##### `java`<sup>Optional</sup> <a name="java" id="projen.github.workflows.Tools.property.java"></a>

```typescript
public readonly java: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup java (corretto distribution).

---

##### `node`<sup>Optional</sup> <a name="node" id="projen.github.workflows.Tools.property.node"></a>

```typescript
public readonly node: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup node.js.

---

##### `python`<sup>Optional</sup> <a name="python" id="projen.github.workflows.Tools.property.python"></a>

```typescript
public readonly python: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup python.

---

##### `rust`<sup>Optional</sup> <a name="rust" id="projen.github.workflows.Tools.property.rust"></a>

```typescript
public readonly rust: ToolRequirement;
```

- *Type:* projen.github.workflows.ToolRequirement
- *Default:* not installed

Setup rust toolchain.

---

### Triggers <a name="Triggers" id="projen.github.workflows.Triggers"></a>

The set of available triggers for GitHub Workflows.

> [https://docs.github.com/en/actions/reference/events-that-trigger-workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)

#### Initializer <a name="Initializer" id="projen.github.workflows.Triggers.Initializer"></a>

```typescript
import { github } from 'projen'

const triggers: github.workflows.Triggers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.Triggers.property.branchProtectionRule">branchProtectionRule</a></code> | <code>projen.github.workflows.BranchProtectionRuleOptions</code> | Runs your workflow anytime the branch_protection_rule event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.checkRun">checkRun</a></code> | <code>projen.github.workflows.CheckRunOptions</code> | Runs your workflow anytime the check_run event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.checkSuite">checkSuite</a></code> | <code>projen.github.workflows.CheckSuiteOptions</code> | Runs your workflow anytime the check_suite event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.create">create</a></code> | <code>projen.github.workflows.CreateOptions</code> | Runs your workflow anytime someone creates a branch or tag, which triggers the create event. |
| <code><a href="#projen.github.workflows.Triggers.property.delete">delete</a></code> | <code>projen.github.workflows.DeleteOptions</code> | Runs your workflow anytime someone deletes a branch or tag, which triggers the delete event. |
| <code><a href="#projen.github.workflows.Triggers.property.deployment">deployment</a></code> | <code>projen.github.workflows.DeploymentOptions</code> | Runs your workflow anytime someone creates a deployment, which triggers the deployment event. |
| <code><a href="#projen.github.workflows.Triggers.property.deploymentStatus">deploymentStatus</a></code> | <code>projen.github.workflows.DeploymentStatusOptions</code> | Runs your workflow anytime a third party provides a deployment status, which triggers the deployment_status event. |
| <code><a href="#projen.github.workflows.Triggers.property.discussion">discussion</a></code> | <code>projen.github.workflows.DiscussionOptions</code> | Runs your workflow anytime the discussion event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.discussionComment">discussionComment</a></code> | <code>projen.github.workflows.DiscussionCommentOptions</code> | Runs your workflow anytime the discussion_comment event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.fork">fork</a></code> | <code>projen.github.workflows.ForkOptions</code> | Runs your workflow anytime when someone forks a repository, which triggers the fork event. |
| <code><a href="#projen.github.workflows.Triggers.property.gollum">gollum</a></code> | <code>projen.github.workflows.GollumOptions</code> | Runs your workflow when someone creates or updates a Wiki page, which triggers the gollum event. |
| <code><a href="#projen.github.workflows.Triggers.property.issueComment">issueComment</a></code> | <code>projen.github.workflows.IssueCommentOptions</code> | Runs your workflow anytime the issue_comment event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.issues">issues</a></code> | <code>projen.github.workflows.IssuesOptions</code> | Runs your workflow anytime the issues event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.label">label</a></code> | <code>projen.github.workflows.LabelOptions</code> | Runs your workflow anytime the label event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.mergeGroup">mergeGroup</a></code> | <code>projen.github.workflows.MergeGroupOptions</code> | Runs your workflow when a pull request is added to a merge queue, which adds the pull request to a merge group. |
| <code><a href="#projen.github.workflows.Triggers.property.milestone">milestone</a></code> | <code>projen.github.workflows.MilestoneOptions</code> | Runs your workflow anytime the milestone event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.pageBuild">pageBuild</a></code> | <code>projen.github.workflows.PageBuildOptions</code> | Runs your workflow anytime someone pushes to a GitHub Pages-enabled branch, which triggers the page_build event. |
| <code><a href="#projen.github.workflows.Triggers.property.project">project</a></code> | <code>projen.github.workflows.ProjectOptions</code> | Runs your workflow anytime the project event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.projectCard">projectCard</a></code> | <code>projen.github.workflows.ProjectCardOptions</code> | Runs your workflow anytime the project_card event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.projectColumn">projectColumn</a></code> | <code>projen.github.workflows.ProjectColumnOptions</code> | Runs your workflow anytime the project_column event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.public">public</a></code> | <code>projen.github.workflows.PublicOptions</code> | Runs your workflow anytime someone makes a private repository public, which triggers the public event. |
| <code><a href="#projen.github.workflows.Triggers.property.pullRequest">pullRequest</a></code> | <code>projen.github.workflows.PullRequestOptions</code> | Runs your workflow anytime the pull_request event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.pullRequestReview">pullRequestReview</a></code> | <code>projen.github.workflows.PullRequestReviewOptions</code> | Runs your workflow anytime the pull_request_review event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.pullRequestReviewComment">pullRequestReviewComment</a></code> | <code>projen.github.workflows.PullRequestReviewCommentOptions</code> | Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the pull_request_review_comment event. |
| <code><a href="#projen.github.workflows.Triggers.property.pullRequestTarget">pullRequestTarget</a></code> | <code>projen.github.workflows.PullRequestTargetOptions</code> | This event runs in the context of the base of the pull request, rather than in the merge commit as the pull_request event does. |
| <code><a href="#projen.github.workflows.Triggers.property.push">push</a></code> | <code>projen.github.workflows.PushOptions</code> | Runs your workflow when someone pushes to a repository branch, which triggers the push event. |
| <code><a href="#projen.github.workflows.Triggers.property.registryPackage">registryPackage</a></code> | <code>projen.github.workflows.RegistryPackageOptions</code> | Runs your workflow anytime a package is published or updated. |
| <code><a href="#projen.github.workflows.Triggers.property.release">release</a></code> | <code>projen.github.workflows.ReleaseOptions</code> | Runs your workflow anytime the release event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.repositoryDispatch">repositoryDispatch</a></code> | <code>projen.github.workflows.RepositoryDispatchOptions</code> | You can use the GitHub API to trigger a webhook event called repository_dispatch when you want to trigger a workflow for activity that happens outside of GitHub. |
| <code><a href="#projen.github.workflows.Triggers.property.schedule">schedule</a></code> | <code>projen.github.workflows.CronScheduleOptions[]</code> | You can schedule a workflow to run at specific UTC times using POSIX cron syntax. |
| <code><a href="#projen.github.workflows.Triggers.property.status">status</a></code> | <code>projen.github.workflows.StatusOptions</code> | Runs your workflow anytime the status of a Git commit changes, which triggers the status event. |
| <code><a href="#projen.github.workflows.Triggers.property.watch">watch</a></code> | <code>projen.github.workflows.WatchOptions</code> | Runs your workflow anytime the watch event occurs. |
| <code><a href="#projen.github.workflows.Triggers.property.workflowCall">workflowCall</a></code> | <code>projen.github.workflows.WorkflowCallOptions</code> | Can be called from another workflow. |
| <code><a href="#projen.github.workflows.Triggers.property.workflowDispatch">workflowDispatch</a></code> | <code>projen.github.workflows.WorkflowDispatchOptions</code> | You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. |
| <code><a href="#projen.github.workflows.Triggers.property.workflowRun">workflowRun</a></code> | <code>projen.github.workflows.WorkflowRunOptions</code> | This event occurs when a workflow run is requested or completed, and allows you to execute a workflow based on the finished result of another workflow. |

---

##### `branchProtectionRule`<sup>Optional</sup> <a name="branchProtectionRule" id="projen.github.workflows.Triggers.property.branchProtectionRule"></a>

```typescript
public readonly branchProtectionRule: BranchProtectionRuleOptions;
```

- *Type:* projen.github.workflows.BranchProtectionRuleOptions

Runs your workflow anytime the branch_protection_rule event occurs.

---

##### `checkRun`<sup>Optional</sup> <a name="checkRun" id="projen.github.workflows.Triggers.property.checkRun"></a>

```typescript
public readonly checkRun: CheckRunOptions;
```

- *Type:* projen.github.workflows.CheckRunOptions

Runs your workflow anytime the check_run event occurs.

---

##### `checkSuite`<sup>Optional</sup> <a name="checkSuite" id="projen.github.workflows.Triggers.property.checkSuite"></a>

```typescript
public readonly checkSuite: CheckSuiteOptions;
```

- *Type:* projen.github.workflows.CheckSuiteOptions

Runs your workflow anytime the check_suite event occurs.

---

##### `create`<sup>Optional</sup> <a name="create" id="projen.github.workflows.Triggers.property.create"></a>

```typescript
public readonly create: CreateOptions;
```

- *Type:* projen.github.workflows.CreateOptions

Runs your workflow anytime someone creates a branch or tag, which triggers the create event.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="projen.github.workflows.Triggers.property.delete"></a>

```typescript
public readonly delete: DeleteOptions;
```

- *Type:* projen.github.workflows.DeleteOptions

Runs your workflow anytime someone deletes a branch or tag, which triggers the delete event.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="projen.github.workflows.Triggers.property.deployment"></a>

```typescript
public readonly deployment: DeploymentOptions;
```

- *Type:* projen.github.workflows.DeploymentOptions

Runs your workflow anytime someone creates a deployment, which triggers the deployment event.

Deployments created with a commit SHA may not have
a Git ref.

---

##### `deploymentStatus`<sup>Optional</sup> <a name="deploymentStatus" id="projen.github.workflows.Triggers.property.deploymentStatus"></a>

```typescript
public readonly deploymentStatus: DeploymentStatusOptions;
```

- *Type:* projen.github.workflows.DeploymentStatusOptions

Runs your workflow anytime a third party provides a deployment status, which triggers the deployment_status event.

Deployments created with a
commit SHA may not have a Git ref.

---

##### `discussion`<sup>Optional</sup> <a name="discussion" id="projen.github.workflows.Triggers.property.discussion"></a>

```typescript
public readonly discussion: DiscussionOptions;
```

- *Type:* projen.github.workflows.DiscussionOptions

Runs your workflow anytime the discussion event occurs.

More than one activity type triggers this event.

> [https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions](https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions)

---

##### `discussionComment`<sup>Optional</sup> <a name="discussionComment" id="projen.github.workflows.Triggers.property.discussionComment"></a>

```typescript
public readonly discussionComment: DiscussionCommentOptions;
```

- *Type:* projen.github.workflows.DiscussionCommentOptions

Runs your workflow anytime the discussion_comment event occurs.

More than one activity type triggers this event.

> [https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions](https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions)

---

##### `fork`<sup>Optional</sup> <a name="fork" id="projen.github.workflows.Triggers.property.fork"></a>

```typescript
public readonly fork: ForkOptions;
```

- *Type:* projen.github.workflows.ForkOptions

Runs your workflow anytime when someone forks a repository, which triggers the fork event.

---

##### `gollum`<sup>Optional</sup> <a name="gollum" id="projen.github.workflows.Triggers.property.gollum"></a>

```typescript
public readonly gollum: GollumOptions;
```

- *Type:* projen.github.workflows.GollumOptions

Runs your workflow when someone creates or updates a Wiki page, which triggers the gollum event.

---

##### `issueComment`<sup>Optional</sup> <a name="issueComment" id="projen.github.workflows.Triggers.property.issueComment"></a>

```typescript
public readonly issueComment: IssueCommentOptions;
```

- *Type:* projen.github.workflows.IssueCommentOptions

Runs your workflow anytime the issue_comment event occurs.

---

##### `issues`<sup>Optional</sup> <a name="issues" id="projen.github.workflows.Triggers.property.issues"></a>

```typescript
public readonly issues: IssuesOptions;
```

- *Type:* projen.github.workflows.IssuesOptions

Runs your workflow anytime the issues event occurs.

---

##### `label`<sup>Optional</sup> <a name="label" id="projen.github.workflows.Triggers.property.label"></a>

```typescript
public readonly label: LabelOptions;
```

- *Type:* projen.github.workflows.LabelOptions

Runs your workflow anytime the label event occurs.

---

##### `mergeGroup`<sup>Optional</sup> <a name="mergeGroup" id="projen.github.workflows.Triggers.property.mergeGroup"></a>

```typescript
public readonly mergeGroup: MergeGroupOptions;
```

- *Type:* projen.github.workflows.MergeGroupOptions

Runs your workflow when a pull request is added to a merge queue, which adds the pull request to a merge group.

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="projen.github.workflows.Triggers.property.milestone"></a>

```typescript
public readonly milestone: MilestoneOptions;
```

- *Type:* projen.github.workflows.MilestoneOptions

Runs your workflow anytime the milestone event occurs.

---

##### `pageBuild`<sup>Optional</sup> <a name="pageBuild" id="projen.github.workflows.Triggers.property.pageBuild"></a>

```typescript
public readonly pageBuild: PageBuildOptions;
```

- *Type:* projen.github.workflows.PageBuildOptions

Runs your workflow anytime someone pushes to a GitHub Pages-enabled branch, which triggers the page_build event.

---

##### `project`<sup>Optional</sup> <a name="project" id="projen.github.workflows.Triggers.property.project"></a>

```typescript
public readonly project: ProjectOptions;
```

- *Type:* projen.github.workflows.ProjectOptions

Runs your workflow anytime the project event occurs.

---

##### `projectCard`<sup>Optional</sup> <a name="projectCard" id="projen.github.workflows.Triggers.property.projectCard"></a>

```typescript
public readonly projectCard: ProjectCardOptions;
```

- *Type:* projen.github.workflows.ProjectCardOptions

Runs your workflow anytime the project_card event occurs.

---

##### `projectColumn`<sup>Optional</sup> <a name="projectColumn" id="projen.github.workflows.Triggers.property.projectColumn"></a>

```typescript
public readonly projectColumn: ProjectColumnOptions;
```

- *Type:* projen.github.workflows.ProjectColumnOptions

Runs your workflow anytime the project_column event occurs.

---

##### `public`<sup>Optional</sup> <a name="public" id="projen.github.workflows.Triggers.property.public"></a>

```typescript
public readonly public: PublicOptions;
```

- *Type:* projen.github.workflows.PublicOptions

Runs your workflow anytime someone makes a private repository public, which triggers the public event.

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="projen.github.workflows.Triggers.property.pullRequest"></a>

```typescript
public readonly pullRequest: PullRequestOptions;
```

- *Type:* projen.github.workflows.PullRequestOptions

Runs your workflow anytime the pull_request event occurs.

---

##### `pullRequestReview`<sup>Optional</sup> <a name="pullRequestReview" id="projen.github.workflows.Triggers.property.pullRequestReview"></a>

```typescript
public readonly pullRequestReview: PullRequestReviewOptions;
```

- *Type:* projen.github.workflows.PullRequestReviewOptions

Runs your workflow anytime the pull_request_review event occurs.

---

##### `pullRequestReviewComment`<sup>Optional</sup> <a name="pullRequestReviewComment" id="projen.github.workflows.Triggers.property.pullRequestReviewComment"></a>

```typescript
public readonly pullRequestReviewComment: PullRequestReviewCommentOptions;
```

- *Type:* projen.github.workflows.PullRequestReviewCommentOptions

Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the pull_request_review_comment event.

---

##### `pullRequestTarget`<sup>Optional</sup> <a name="pullRequestTarget" id="projen.github.workflows.Triggers.property.pullRequestTarget"></a>

```typescript
public readonly pullRequestTarget: PullRequestTargetOptions;
```

- *Type:* projen.github.workflows.PullRequestTargetOptions

This event runs in the context of the base of the pull request, rather than in the merge commit as the pull_request event does.

This prevents
executing unsafe workflow code from the head of the pull request that
could alter your repository or steal any secrets you use in your workflow.
This event allows you to do things like create workflows that label and
comment on pull requests based on the contents of the event payload.

WARNING: The `pull_request_target` event is granted read/write repository
token and can access secrets, even when it is triggered from a fork.
Although the workflow runs in the context of the base of the pull request,
you should make sure that you do not check out, build, or run untrusted
code from the pull request with this event. Additionally, any caches
share the same scope as the base branch, and to help prevent cache
poisoning, you should not save the cache if there is a possibility that
the cache contents were altered.

> [https://securitylab.github.com/research/github-actions-preventing-pwn-requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)

---

##### `push`<sup>Optional</sup> <a name="push" id="projen.github.workflows.Triggers.property.push"></a>

```typescript
public readonly push: PushOptions;
```

- *Type:* projen.github.workflows.PushOptions

Runs your workflow when someone pushes to a repository branch, which triggers the push event.

---

##### `registryPackage`<sup>Optional</sup> <a name="registryPackage" id="projen.github.workflows.Triggers.property.registryPackage"></a>

```typescript
public readonly registryPackage: RegistryPackageOptions;
```

- *Type:* projen.github.workflows.RegistryPackageOptions

Runs your workflow anytime a package is published or updated.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen.github.workflows.Triggers.property.release"></a>

```typescript
public readonly release: ReleaseOptions;
```

- *Type:* projen.github.workflows.ReleaseOptions

Runs your workflow anytime the release event occurs.

---

##### `repositoryDispatch`<sup>Optional</sup> <a name="repositoryDispatch" id="projen.github.workflows.Triggers.property.repositoryDispatch"></a>

```typescript
public readonly repositoryDispatch: RepositoryDispatchOptions;
```

- *Type:* projen.github.workflows.RepositoryDispatchOptions

You can use the GitHub API to trigger a webhook event called repository_dispatch when you want to trigger a workflow for activity that happens outside of GitHub.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="projen.github.workflows.Triggers.property.schedule"></a>

```typescript
public readonly schedule: CronScheduleOptions[];
```

- *Type:* projen.github.workflows.CronScheduleOptions[]

You can schedule a workflow to run at specific UTC times using POSIX cron syntax.

Scheduled workflows run on the latest commit on the default or
base branch. The shortest interval you can run scheduled workflows is
once every 5 minutes.

> [https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)

---

##### `status`<sup>Optional</sup> <a name="status" id="projen.github.workflows.Triggers.property.status"></a>

```typescript
public readonly status: StatusOptions;
```

- *Type:* projen.github.workflows.StatusOptions

Runs your workflow anytime the status of a Git commit changes, which triggers the status event.

---

##### `watch`<sup>Optional</sup> <a name="watch" id="projen.github.workflows.Triggers.property.watch"></a>

```typescript
public readonly watch: WatchOptions;
```

- *Type:* projen.github.workflows.WatchOptions

Runs your workflow anytime the watch event occurs.

---

##### `workflowCall`<sup>Optional</sup> <a name="workflowCall" id="projen.github.workflows.Triggers.property.workflowCall"></a>

```typescript
public readonly workflowCall: WorkflowCallOptions;
```

- *Type:* projen.github.workflows.WorkflowCallOptions

Can be called from another workflow.

> [https://docs.github.com/en/actions/learn-github-actions/reusing-workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)

---

##### `workflowDispatch`<sup>Optional</sup> <a name="workflowDispatch" id="projen.github.workflows.Triggers.property.workflowDispatch"></a>

```typescript
public readonly workflowDispatch: WorkflowDispatchOptions;
```

- *Type:* projen.github.workflows.WorkflowDispatchOptions

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow.

When the
workflow runs, you can access the input values in the github.event.inputs
context.

---

##### `workflowRun`<sup>Optional</sup> <a name="workflowRun" id="projen.github.workflows.Triggers.property.workflowRun"></a>

```typescript
public readonly workflowRun: WorkflowRunOptions;
```

- *Type:* projen.github.workflows.WorkflowRunOptions

This event occurs when a workflow run is requested or completed, and allows you to execute a workflow based on the finished result of another workflow.

A workflow run is triggered regardless of the result of the
previous workflow.

---

### WatchOptions <a name="WatchOptions" id="projen.github.workflows.WatchOptions"></a>

Watch options.

#### Initializer <a name="Initializer" id="projen.github.workflows.WatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const watchOptions: github.workflows.WatchOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.WatchOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.WatchOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

### WorkflowCallOptions <a name="WorkflowCallOptions" id="projen.github.workflows.WorkflowCallOptions"></a>

The Workflow Call event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.WorkflowCallOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const workflowCallOptions: github.workflows.WorkflowCallOptions = { ... }
```


### WorkflowDispatchOptions <a name="WorkflowDispatchOptions" id="projen.github.workflows.WorkflowDispatchOptions"></a>

The Workflow dispatch event accepts no options.

#### Initializer <a name="Initializer" id="projen.github.workflows.WorkflowDispatchOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const workflowDispatchOptions: github.workflows.WorkflowDispatchOptions = { ... }
```


### WorkflowRunOptions <a name="WorkflowRunOptions" id="projen.github.workflows.WorkflowRunOptions"></a>

Workflow run options.

#### Initializer <a name="Initializer" id="projen.github.workflows.WorkflowRunOptions.Initializer"></a>

```typescript
import { github } from 'projen'

const workflowRunOptions: github.workflows.WorkflowRunOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.github.workflows.WorkflowRunOptions.property.branches">branches</a></code> | <code>string[]</code> | Which branches or branch-ignore to limit the trigger to. |
| <code><a href="#projen.github.workflows.WorkflowRunOptions.property.types">types</a></code> | <code>string[]</code> | Which activity types to trigger on. |
| <code><a href="#projen.github.workflows.WorkflowRunOptions.property.workflows">workflows</a></code> | <code>string[]</code> | Which workflow to trigger on. |

---

##### `branches`<sup>Optional</sup> <a name="branches" id="projen.github.workflows.WorkflowRunOptions.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

Which branches or branch-ignore to limit the trigger to.

---

##### `types`<sup>Optional</sup> <a name="types" id="projen.github.workflows.WorkflowRunOptions.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Which activity types to trigger on.

---

##### `workflows`<sup>Optional</sup> <a name="workflows" id="projen.github.workflows.WorkflowRunOptions.property.workflows"></a>

```typescript
public readonly workflows: string[];
```

- *Type:* string[]

Which workflow to trigger on.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ITool <a name="ITool" id="projen.github.workflows.ITool"></a>

- *Implemented By:* projen.github.workflows.ITool

Custom setup steps to configure a tool in a workflow job.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.workflows.ITool.setupSteps">setupSteps</a></code> | *No description.* |

---

##### `setupSteps` <a name="setupSteps" id="projen.github.workflows.ITool.setupSteps"></a>

```typescript
public setupSteps(): JobStep[]
```


## Enums <a name="Enums" id="Enums"></a>

### AppPermission <a name="AppPermission" id="projen.github.workflows.AppPermission"></a>

The permissions available for an access token for a GitHub App.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.workflows.AppPermission.READ">READ</a></code> | Read-only access. |
| <code><a href="#projen.github.workflows.AppPermission.WRITE">WRITE</a></code> | Read-write access. |
| <code><a href="#projen.github.workflows.AppPermission.ADMIN">ADMIN</a></code> | Read-write and admin access. |

---

##### `READ` <a name="READ" id="projen.github.workflows.AppPermission.READ"></a>

Read-only access.

---


##### `WRITE` <a name="WRITE" id="projen.github.workflows.AppPermission.WRITE"></a>

Read-write access.

---


##### `ADMIN` <a name="ADMIN" id="projen.github.workflows.AppPermission.ADMIN"></a>

Read-write and admin access.

Not all permissions support `admin`.

---


### JobPermission <a name="JobPermission" id="projen.github.workflows.JobPermission"></a>

Access level for workflow permission scopes.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.github.workflows.JobPermission.READ">READ</a></code> | Read-only access. |
| <code><a href="#projen.github.workflows.JobPermission.WRITE">WRITE</a></code> | Read-write access. |
| <code><a href="#projen.github.workflows.JobPermission.NONE">NONE</a></code> | No access at all. |

---

##### `READ` <a name="READ" id="projen.github.workflows.JobPermission.READ"></a>

Read-only access.

---


##### `WRITE` <a name="WRITE" id="projen.github.workflows.JobPermission.WRITE"></a>

Read-write access.

---


##### `NONE` <a name="NONE" id="projen.github.workflows.JobPermission.NONE"></a>

No access at all.

---

