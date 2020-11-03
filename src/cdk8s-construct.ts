import { ConstructLibraryOptions, ConstructLibrary } from './construct-lib';
import { Semver } from './semver';

export interface ConstructLibraryCdk8sOptions extends ConstructLibraryOptions {
  /**
   * Minimum target version this library is tested against.
   *
   * @default "0.28.0"
   */
  readonly cdk8sVersion: string;
}

/**
 * CDK8s construct library project
 *
 * A multi-language (jsii) construct library which vends constructs designed to
 * use within the CDK for Kubernetes (CDK8s), with a friendly workflow and
 * automatic publishing to the construct catalog.
 *
 * @pjid cdk8s-construct
 */
export class ConstructLibraryCdk8s extends ConstructLibrary {
  constructor(options: ConstructLibraryCdk8sOptions) {
    super(options);

    const ver = options.cdk8sVersion;

    this.addPeerDependencies({
      'constructs': Semver.caret('2.0.2'),
      'cdk8s': Semver.caret(ver),
      'cdk8s-plus': Semver.caret(ver),
    });
  }
}