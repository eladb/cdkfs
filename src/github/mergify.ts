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
      marker: true,
    });

    (options.rules ?? []).forEach(rule => this.addRule(rule));
  }

  public addRule(rule: MergifyRule) {
    this.rules.push(rule);
  }
}