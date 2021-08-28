import { Component } from '../component';
import { workflows } from '../github';
import { JobPermission, JobPermissions } from '../github/workflows-model';
import { defaultNpmToken } from '../node-package';
import { Project } from '../project';

const JSII_RELEASE_VERSION = 'latest';
const GITHUB_PACKAGES_REGISTRY = 'npm.pkg.github.com';
const GITHUB_PACKAGES_MAVEN_REPOSITORY = 'https://maven.pkg.github.com';
const ARTIFACTS_DIR = 'dist';
const JSII_RELEASE_IMAGE = 'jsii/superchain';

/**
 * Options for `Publisher`.
 */
export interface PublisherOptions {
  /**
   * The job ID that produces the build artifacts. All publish jobs will take a dependency on this job.
   */
  readonly buildJobId: string;

  /**
   * A GitHub workflow expression used as a condition for publishers.
   *
   * @default - no condition
   */
  readonly condition?: string;

  /**
   * The name of the artifact to download (e.g. `dist`).
   *
   * The artifact is expected to include a subdirectory for each release target:
   * `go` (GitHub), `dotnet` (NuGet), `java` (Maven), `js` (npm), `python`
   * (PyPI).
   *
   * @see https://github.com/aws/jsii-release
   */
  readonly artifactName: string;

  /**
   * Version requirement for `jsii-release`.
   *
   * @default "latest"
   */
  readonly jsiiReleaseVersion?: string;
}

/**
 * Implements GitHub jobs for publishing modules to package managers.
 *
 * Under the hood, it uses https://github.com/aws/jsii-release
 */
export class Publisher extends Component {
  public readonly buildJobId: string;
  public readonly artifactName: string;
  public readonly jsiiReleaseVersion: string;
  public readonly condition?: string;

  // the jobs to add to the release workflow
  private readonly jobs: { [name: string]: workflows.Job } = {};

  constructor(project: Project, options: PublisherOptions) {
    super(project);

    this.buildJobId = options.buildJobId;
    this.artifactName = options.artifactName;
    this.jsiiReleaseVersion = options.jsiiReleaseVersion ?? JSII_RELEASE_VERSION;
    this.condition = options.condition;
  }

  /**
   * Renders a set of workflow jobs for all the publishers.
   * @returns GitHub workflow jobs
   */
  public render(): Record<string, workflows.Job> {
    return { ...this.jobs };
  }

  /**
   * Creates a GitHub Release.
   * @param options Options
   */
  public publishToGitHubReleases(options: GitHubReleasesPublishOptions) {
    const versionFile = `${ARTIFACTS_DIR}/${options.versionFile}`;
    const changelogFile = `${ARTIFACTS_DIR}/${options.changelogFile}`;

    // create a github release
    const getVersion = `v$(cat ${versionFile})`;

    this.addPublishJob({
      name: 'github',
      registryName: 'GitHub Releases',
      permissions: {
        contents: JobPermission.WRITE,
      },
      workflowEnv: {
        GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
      },
      run: [
        `gh release create ${getVersion}`,
        '-R ${{ github.repository }}',
        `-F ${changelogFile}`,
        `-t ${getVersion}`,
      ].join(' '),
    });
  }

  /**
   * Publishes artifacts from `js/**` to npm.
   * @param options Options
   */
  public publishToNpm(options: NpmPublishOptions = {}) {
    const isGitHubPackages = options.registry?.startsWith(GITHUB_PACKAGES_REGISTRY);

    this.addPublishJob({
      name: 'npm',
      run: this.jsiiReleaseCommand('jsii-release-npm'),
      containerImage: JSII_RELEASE_IMAGE,
      registryName: 'npm',
      env: {
        NPM_DIST_TAG: options.distTag,
        NPM_REGISTRY: options.registry,
      },
      permissions: {
        contents: JobPermission.READ,
        packages: isGitHubPackages ? JobPermission.WRITE : undefined,
      },
      workflowEnv: {
        NPM_TOKEN: secret(defaultNpmToken(options.npmTokenSecret, options.registry)),
      },
    });
  }

  /**
   * Publishes artifacts from `dotnet/**` to NuGet Gallery.
   * @param options Options
   */
  public publishToNuget(options: NugetPublishOptions = {}) {
    this.addPublishJob({
      name: 'nuget',
      containerImage: JSII_RELEASE_IMAGE,
      run: this.jsiiReleaseCommand('jsii-release-nuget'),
      registryName: 'NuGet Gallery',
      workflowEnv: {
        NUGET_API_KEY: secret(options.nugetApiKeySecret ?? 'NUGET_API_KEY'),
      },
    });
  }

  /**
   * Publishes artifacts from `java/**` to Maven.
   * @param options Options
   */
  public publishToMaven(options: MavenPublishOptions = {}) {
    const isGitHubPackages = options.mavenRepositoryUrl?.startsWith(GITHUB_PACKAGES_MAVEN_REPOSITORY);
    const isGitHubActor = isGitHubPackages && options.mavenUsername == undefined;
    const mavenServerId = options.mavenServerId ?? (isGitHubPackages ? 'github' : undefined);

    if (isGitHubPackages && mavenServerId != 'github') {
      throw new Error('publishing to GitHub Packages requires the "mavenServerId" to be "github"');
    }

    this.addPublishJob({
      name: 'maven',
      registryName: 'Maven Central',
      containerImage: JSII_RELEASE_IMAGE,
      run: this.jsiiReleaseCommand('jsii-release-maven'),
      env: {
        MAVEN_ENDPOINT: options.mavenEndpoint,
        MAVEN_SERVER_ID: mavenServerId,
        MAVEN_REPOSITORY_URL: options.mavenRepositoryUrl,
      },
      workflowEnv: {
        MAVEN_GPG_PRIVATE_KEY: isGitHubPackages ? undefined : secret(options.mavenGpgPrivateKeySecret ?? 'MAVEN_GPG_PRIVATE_KEY'),
        MAVEN_GPG_PRIVATE_KEY_PASSPHRASE: isGitHubPackages ? undefined : secret(options.mavenGpgPrivateKeyPassphrase ?? 'MAVEN_GPG_PRIVATE_KEY_PASSPHRASE'),
        MAVEN_PASSWORD: secret(options.mavenPassword ?? (isGitHubPackages ? 'GITHUB_TOKEN' : 'MAVEN_PASSWORD')),
        MAVEN_USERNAME: isGitHubActor ? '${{ github.actor }}' : secret(options.mavenUsername ?? 'MAVEN_USERNAME'),
        MAVEN_STAGING_PROFILE_ID: isGitHubPackages ? undefined : secret(options.mavenStagingProfileId ?? 'MAVEN_STAGING_PROFILE_ID'),
      },
      permissions: {
        contents: JobPermission.READ,
        packages: isGitHubPackages ? JobPermission.WRITE : undefined,
      },
    });
  }

  /**
   * Publishes wheel artifacts from `python` to PyPI.
   * @param options Options
   */
  public publishToPyPi(options: PyPiPublishOptions = {}) {
    this.addPublishJob({
      name: 'pypi',
      registryName: 'PyPI',
      run: this.jsiiReleaseCommand('jsii-release-pypi'),
      containerImage: JSII_RELEASE_IMAGE,
      env: {
        TWINE_REPOSITORY_URL: options.twineRegistryUrl,
      },
      workflowEnv: {
        TWINE_USERNAME: secret(options.twineUsernameSecret ?? 'TWINE_USERNAME'),
        TWINE_PASSWORD: secret(options.twinePasswordSecret ?? 'TWINE_PASSWORD'),
      },
    });
  }

  /**
   * Adds a go publishing job.
   * @param options Options
   */
  public publishToGo(options: GoPublishOptions = {}) {
    this.addPublishJob({
      name: 'golang',
      run: this.jsiiReleaseCommand('jsii-release-golang'),
      containerImage: JSII_RELEASE_IMAGE,
      registryName: 'GitHub',
      env: {
        GITHUB_REPO: options.githubRepo,
        GIT_BRANCH: options.gitBranch,
        GIT_USER_NAME: options.gitUserName ?? 'GitHub Actions',
        GIT_USER_EMAIL: options.gitUserEmail ?? 'github-actions@github.com',
        GIT_COMMIT_MESSAGE: options.gitCommitMessage,
      },
      workflowEnv: {
        GITHUB_TOKEN: secret(options.githubTokenSecret ?? 'GO_GITHUB_TOKEN'),
      },
    });
  }

  private addPublishJob(opts: PublishJobOptions) {
    const jobname = `release_${opts.name}`;
    if (jobname in this.jobs) {
      throw new Error(`Duplicate job with name "${jobname}"`);
    }

    const requiredEnv = new Array<string>();

    // jobEnv is the env we pass to the github job (task environment + secrets/expressions).
    const jobEnv: Record<string, string> = { ...opts.env };
    const workflowEnvEntries = Object.entries(opts.workflowEnv ?? {})
      .filter(([_, value]) => value != undefined) as string[][];
    for (const [name, expression] of workflowEnvEntries) {
      requiredEnv.push(name);
      jobEnv[name] = expression;
    }

    // define a task which can be used through `projen publish:xxx`.
    this.project.addTask(`publish:${opts.name.toLocaleLowerCase()}`, {
      description: `Publish this package to ${opts.registryName}`,
      env: opts.env,
      requiredEnv: requiredEnv,
      exec: opts.run,
    });

    const job = {
      name: `Publish to ${opts.registryName}`,
      permissions: opts.permissions ? opts.permissions : { contents: JobPermission.READ },
      if: this.condition,
      needs: [this.buildJobId],
      runsOn: 'ubuntu-latest',
      container: opts.containerImage ? {
        image: opts.containerImage,
      } : undefined,
      steps: [
        {
          name: 'Download build artifacts',
          uses: 'actions/download-artifact@v2',
          with: {
            name: this.artifactName,
            path: ARTIFACTS_DIR, // this must be "dist" for jsii-release
          },
        },
        {
          name: 'Release',
          // it would have been nice if we could just run "projen publish:xxx" here but that is not possible because this job does not checkout sources
          run: opts.run,
          env: jobEnv,
        },
      ],
    };

    this.jobs[jobname] = job;
  }

  private jsiiReleaseCommand(command: string) {
    return `npx -p jsii-release@${this.jsiiReleaseVersion} ${command}`;
  }
}

function secret(secretName: string) {
  return `\${{ secrets.${secretName} }}`;
}

interface PublishJobOptions {
  /**
   * The command to execute.
   */
  readonly run: string;

  /**
   * Environment variables to set
   */
  readonly env?: Record<string, any>;

  /**
   * The display name of the registry (for description)
   */
  readonly registryName: string;

  /**
   * Job permissions
   */
  readonly permissions?: JobPermissions;

  /**
   * Custom container image to use.
   * @default - no custom image
   */
  readonly containerImage?: string;

  /**
   * The name of the publish job (should be lowercase).
   */
  readonly name: string;

  /**
   * Environment to include only in the workflow (and not tasks).
   */
  readonly workflowEnv?: { [name: string]: string | undefined };
}

/**
 * @deprecated Use `NpmPublishOptions` instead.
 */
export interface JsiiReleaseNpm extends NpmPublishOptions { }

/**
 * Options for npm release
 */
export interface NpmPublishOptions {
  /**
   * Tags can be used to provide an alias instead of version numbers.
   *
   * For example, a project might choose to have multiple streams of development
   * and use a different tag for each stream, e.g., stable, beta, dev, canary.
   *
   * By default, the `latest` tag is used by npm to identify the current version
   * of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
   * specifier) installs the latest tag. Typically, projects only use the
   * `latest` tag for stable release versions, and use other tags for unstable
   * versions such as prereleases.
   *
   * The `next` tag is used by some projects to identify the upcoming version.
   *
   * @default "latest"
   */
  readonly distTag?: string;

  /**
   * The domain name of the npm package registry.
   *
   * To publish to GitHub Packages, set this value to `"npm.pkg.github.com"`. In
   * this if `npmTokenSecret` is not specified, it will default to
   * `GITHUB_TOKEN` which means that you will be able to publish to the
   * repository's package store. In this case, make sure `repositoryUrl` is
   * correctly defined.
   *
   * @default "registry.npmjs.org"
   * @example "npm.pkg.github.com"
   */
  readonly registry?: string;

  /**
   * GitHub secret which contains the NPM token to use when publishing packages.
   * @default - "NPM_TOKEN" or "GITHUB_TOKEN" if `registry` is set to `npm.pkg.github.com`.
   */
  readonly npmTokenSecret?: string;
}

/**
 * @deprecated Use `PyPiPublishOptions` instead.
 */
export interface JsiiReleasePyPi extends PyPiPublishOptions { }

/**
 * Options for PyPI release
 */
export interface PyPiPublishOptions {
  /**
   * The registry url to use when releasing packages.
   *
   * @default - twine default
   */
  readonly twineRegistryUrl?: string;

  /**
   * The GitHub secret which contains PyPI user name.
   * @default "TWINE_USERNAME"
   */
  readonly twineUsernameSecret?: string;

  /**
   * The GitHub secret which contains PyPI password.
   * @default "TWINE_PASSWORD"
   */
  readonly twinePasswordSecret?: string;
}

/**
 * @deprecated Use `NugetPublishOptions` instead.
 */
export interface JsiiReleaseNuget extends NugetPublishOptions { }

/**
 * Options for NuGet releases
 */
export interface NugetPublishOptions {
  /**
   * GitHub secret which contains the API key for NuGet.
   *
   * @default "NUGET_API_KEY"
   */
  readonly nugetApiKeySecret?: string;
}

/**
 * @deprecated Use `MavenPublishOptions` instead.
 */
export interface JsiiReleaseMaven extends MavenPublishOptions { }

/**
 * Options for Maven releases
 */
export interface MavenPublishOptions {
  /**
   * URL of Nexus repository. if not set, defaults to https://oss.sonatype.org
   *
   * @default "https://oss.sonatype.org"
   */
  readonly mavenEndpoint?: string;

  /**
   * Used in maven settings for credential lookup (e.g. use github when publishing to GitHub).
   *
   * @default "ossrh" (Maven Central) or "github" when using GitHub Packages
   */
  readonly mavenServerId?: string;

  /**
   * Deployment repository when not deploying to Maven Central
   *
   * @default - not set
   */
  readonly mavenRepositoryUrl?: string;

  /**
   * GitHub secret name which contains the GPG private key or file that includes
   * it. This is used to sign your Maven
   * packages. See instructions.
   *
   * @see https://github.com/aws/jsii-release#maven
   * @default "MAVEN_GPG_PRIVATE_KEY" or not set when using GitHub Packages
   */
  readonly mavenGpgPrivateKeySecret?: string;

  /**
   * GitHub secret name which contains the GPG private key or file that includes
   * it. This is used to sign your Maven packages. See instructions.
   *
   * @see https://github.com/aws/jsii-release#maven
   * @default "MAVEN_GPG_PRIVATE_KEY_PASSPHRASE" or not set when using GitHub Packages
   */
  readonly mavenGpgPrivateKeyPassphrase?: string;

  /**
   * GitHub secret name which contains the Username for maven repository.
   *
   * For Maven Central, you will need to Create JIRA account and then request a
   * new project (see links).
   *
   * @see https://issues.sonatype.org/secure/Signup
   * @see https://issues.sonatype.org/secure/CreateIssue.jspa?issuetype=21&pid=10134
   *
   * @default "MAVEN_USERNAME" or the GitHub Actor when using GitHub Packages
   */
  readonly mavenUsername?: string;

  /**
   * GitHub secret name which contains the Password for maven repository.
   *
   * For Maven Central, you will need to Create JIRA account and then request a
   * new project (see links).
   *
   * @see https://issues.sonatype.org/secure/Signup
   * @see https://issues.sonatype.org/secure/CreateIssue.jspa?issuetype=21&pid=10134
   *
   * @default "MAVEN_PASSWORD" or "GITHUB_TOKEN" when using GitHub Packages
   */
  readonly mavenPassword?: string;

  /**
   * GitHub secret name which contains the Maven Central (sonatype) staging
   * profile ID (e.g. 68a05363083174). Staging profile ID can be found in the
   * URL of the "Releases" staging profile under "Staging Profiles" in
   * https://oss.sonatype.org (e.g.
   * https://oss.sonatype.org/#stagingProfiles;11a33451234521)

   * @default "MAVEN_STAGING_PROFILE_ID" or not set when using GitHub Packages
   */
  readonly mavenStagingProfileId?: string;
}

/**
 * @deprecated Use `GoPublishOptions` instead.
export interface JsiiReleaseGo extends GoPublishOptions { }

/**
 * Options for Go releases.
 */
export interface GoPublishOptions {
  /**
   * The name of the secret that includes a personal GitHub access token used to
   * push to the GitHub repository.
   *
   * @default "GO_GITHUB_TOKEN"
   */
  readonly githubTokenSecret?: string;

  /**
   * GitHub repository to push to.
   *
   * @default - derived from `moduleName`
   */
  readonly githubRepo?: string;

  /**
   * Branch to push to.
   *
   * @default "main"
   */
  readonly gitBranch?: string;

  /**
   * The user name to use for the release git commit.
   * @default "GitHub Actions"
   */
  readonly gitUserName?: string;

  /**
   * The email to use in the release git commit.
   * @default "github-actions@github.com"
   */
  readonly gitUserEmail?: string;

  /**
   * The commit message.
   *
   * @default "chore(release): $VERSION"
   */
  readonly gitCommitMessage?: string;
}

/**
 * Publishing options for GitHub releases.
 */
export interface GitHubReleasesPublishOptions {
  /**
   * The location of a text file (relative to `dist/`) that contains the version number.
   *
   * @example version.txt
   */
  readonly versionFile: string;

  /**
   * The location of an .md file that includes the changelog for the release.
   *
   * @example changelog.md
   */
  readonly changelogFile: string;
}