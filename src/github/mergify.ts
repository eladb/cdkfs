import { Component } from '../component';
import { YamlFile } from '../yaml';
import { GitHub } from './github';

export interface MergifyRule {
  readonly name: string;
  readonly conditions: string[];
  readonly actions: { [action: string]: any };
}

export interface MergifyOptions {
  readonly rules?: MergifyRule[];
}

export class Mergify extends Component {
  private readonly rules = new Array<MergifyRule>();

  constructor(github: GitHub, options: MergifyOptions = { }) {
    super(github.project);

    new YamlFile(this.project, '.mergify.yml', {
      obj: {
        pull_request_rules: this.rules,
      },
    });

    (options.rules ?? []).forEach(rule => this.addRule(rule));

    this.project.addTip('Install Mergify in your GitHub repository to enable automatic merges of approved PRs');

  //   this.project.readme?.addBadge({
  //     name: 'Mergify',
  //     imgUrl: 'https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/ORG/REPO/&style=flat',
  //     url: 'https://mergify.io',
  //   });
  }

  public addRule(rule: MergifyRule) {
    this.rules.push(rule);
  }
}