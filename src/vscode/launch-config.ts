import { Component } from '../component';
import { JsonFile } from '../json';
import { VsCode } from './vscode';

interface VsCodeLaunchConfiguration {
  version: string;
  configurations: VsCodeLaunchConfigurationEntry[];
}

export interface Presentation {
  readonly hidden: boolean;
  readonly group: string;
  readonly order: number;
}

export interface ServerReadyAction {
  readonly action: string;
  readonly pattern?: string;
  readonly uriFormat?: string;
}

/**
 * Options for a 'VsCodeLaunchConfigurationEntry'
 * Source: https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes
 */
export interface VsCodeLaunchConfigurationEntry {
  readonly type: string;
  readonly request: string;
  readonly name: string;
  readonly args?: string[];
  readonly debugServer?: number;
  readonly internalConsoleOptions?: 'neverOpen' | 'openOnFirstSessionStart' | 'openOnSessionStart';
  readonly runtimeArgs?: string[];
  readonly postDebugTask?: string;
  readonly preLaunchTask?: string;
  readonly presentation?: Presentation;
  readonly program?: string;
  readonly serverReadyAction?: ServerReadyAction;
  readonly skipFiles?: string[];
  readonly outFiles?: string[];
  readonly url?: string;
  readonly webRoot?: string;
}

/**
 * VSCode launch configuration file (launch.json), useful for enabling in-editor debugger
 */
export class VsCodeLaunchConfig extends Component {
  private readonly content: VsCodeLaunchConfiguration;

  constructor(vscode: VsCode) {
    super(vscode.project);

    this.content = {
      version: '0.2.0',
      configurations: [],
    };

    new JsonFile(vscode.project, '.vscode/launch.json', {
      obj: this.content,
    });
  }

  public addConfiguration(cfg: VsCodeLaunchConfigurationEntry) {
    this.content.configurations.push(cfg);
  }
}
