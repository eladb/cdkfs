import { js } from 'js-beautify';
import { TextFileOptions, TextFile, Project, FileBase } from '..';

function getFunctionBody(fn: IJavascriptFunction) {
  let fString = fn.fn.toString().trim();
  if (!fn.keepDeclaration) {
    if (fn.callWith) {
      throw new Error('callWith and keepDeclaration must both be true');
    }
    fString = fString.substring(fString.indexOf('{') + 1, fString.lastIndexOf('}'));
  } else {
    if (fn.callWith) {
      fString = `(${fString})(${fn.callWith.map(c => `\`${c.toString()}\``).join(', ') ?? ''})`;
    }
  }
  if (fn.setToValue) {
    fString = `const ${fn.setToValue} = ${fString};`;
  }
  if (fn.prefix) {
    fString = fn.prefix + fString;
  }
  if (fn.postfix) {
    fString = fString + fn.postfix;
  }
  return fString;
};

export interface IJavascriptFunction {
  /**
   * 
   */
  setToValue?: string;

  /**
   * 
   */
  keepDeclaration?: boolean;

  /**
   * 
   */
  prefix?: string;

  /**
   * 
   */
  postfix?: string;

  /**
   * 
   */
  callWith?: any[];

  /**
   * 
   */
  fn(..._: any): any;
}

export interface IJavascriptFileOptions extends IJavascriptFunction {
  /**
   * 
   */
  textFileOptions?: TextFileOptions;
}

  /**
   * 
   */
export class JavascriptFile extends TextFile {
  private functions: IJavascriptFunction[];

  constructor(project: Project, path: string, options?: IJavascriptFileOptions) {
    super(project, path, options?.textFileOptions);

    this.functions = [];

    if (options?.fn) {
      this.appendFunction(options);
    }
  }

  appendFunction(fn: IJavascriptFunction): void {
    this.functions.push(fn);
  }

  prependFunction(fn: IJavascriptFunction): void {
    this.functions.unshift(fn);
  }

  preSynthesize() {
    if (this.readonly) {
      this.addLine(`// ${FileBase.PROJEN_MARKER}`);
    }

    const code = this.functions.map(f => getFunctionBody(f)).join('\n');

    this.addLine(js(code, {
      indent_level: 0,
      indent_empty_lines: false,
      indent_size: 2,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 2,
    }));
  }
}