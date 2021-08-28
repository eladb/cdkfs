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
   * Creates a const with the given name and sets it equal to the given function
   * keepDeclaration must also be true.
   */
  setToValue?: string;

  /**
   * Use the given function declaration when written to a file
   *
   * @default false Function declaration is stripped
   */
  keepDeclaration?: boolean;

  /**
   * Text added before the given function text
   */
  prefix?: string;

  /**
   * Text added after the given function text
   */
  postfix?: string;

  /**
   * Represents the function as a call with the given string values. Values will be .toString()'d.
   * keepDeclaration must also be true.
   *
   * To call the function with no values, use an empty array.
   */
  callWith?: any[];

  /**
   * Function containing relevant code.
   * Arguments can be used to simulate the variables that would be available
   *
   * Note: This Javascript is not executed in Projen, and it should only use values that would be available in the scope it is executed in.
   */
  fn(..._: any): any;
}

export interface IJavascriptFileOptions extends IJavascriptFunction {
  /**
   * options passed to underlying TextFile
   */
  textFileOptions?: TextFileOptions;
}

/**
   * A Javascript file
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

  /**
   * Add new Javascript function to the end of the list
   */
  appendFunction(jsFunc: IJavascriptFunction): void {
    this.functions.push(jsFunc);
  }

  /**
   * Add new Javascript function to the beginning of the list
   */
  prependFunction(jsFunc: IJavascriptFunction): void {
    this.functions.unshift(jsFunc);
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
