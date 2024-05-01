import { CodeTokenMap } from "./code-token-map";

export interface ICodeResolvable {
  stringify(level: number, idt: string): string;
  resolve(context: ICodeResolutionContext): string;
  toString(): string;
}

export interface ICodeResolutionContext {
  /**
   * How much to indent the code for each level, in spaces.
   *
   * @default 2
   */
  indentation?: number;

  /**
   * The indention string to use for each level. Overrides indentation if both
   * are provided.
   *
   * @default undefined
   */
  idt?: string;

  /**
   * The current level of indentation.
   *
   * @default 0
   */
  level?: number;
}

export abstract class CodeResolvableBase implements ICodeResolvable {
  abstract stringify(level: number, idt: string): string;

  resolve(context?: ICodeResolutionContext): string {
    const idt: string = context?.idt ?? " ".repeat(context?.indentation ?? 2);
    let value = this.stringify(0, idt) ?? "";
    // let count = 0;
    // while (!CodeToken.isResolved(value) && count++ < 10) {
    //   value = CodeToken.resolve(value, 0, idt);
    // }
    return value;
  }

  toString(): string {
    return CodeTokenMap.instance.registerString(this);
  }
}

export function isCodeResolvable(value: any): value is ICodeResolvable {
  return (
    value &&
    typeof value.resolve === "function" &&
    typeof value.stringify === "function"
  );
}
