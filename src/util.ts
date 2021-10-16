import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as logging from './logging';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const decamelize = require('decamelize');

const MAX_BUFFER = 10 * 1024 * 1024;

/**
 * Executes a command with STDOUT > STDERR.
 */
export function exec(command: string, options: { cwd: string }): void {
  logging.verbose(command);
  child_process.execSync(command, {
    stdio: ['inherit', process.stderr, 'pipe'], // "pipe" for STDERR means it appears in exceptions
    maxBuffer: MAX_BUFFER,
    cwd: options.cwd,
  });
}

/**
 * Executes command and returns STDOUT. If the command fails (non-zero), throws an error.
 */
export function execCapture(command: string, options: { cwd: string }) {
  logging.verbose(command);
  return child_process.execSync(command, {
    stdio: ['inherit', 'pipe', 'pipe'], // "pipe" for STDERR means it appears in exceptions
    maxBuffer: MAX_BUFFER,
    cwd: options.cwd,
  });
}

/**
 * Executes `command` and returns its value or undefined if the command failed.
 */
export function execOrUndefined(command: string, options: { cwd: string }): string | undefined {
  try {
    const value = child_process.execSync(command, {
      stdio: ['inherit', 'pipe', 'pipe'], // "pipe" for STDERR means it appears in exceptions
      maxBuffer: MAX_BUFFER,
      cwd: options.cwd,
    }).toString('utf-8').trim();

    if (!value) { return undefined; } // an empty string is the same as undefined
    return value;
  } catch {
    return undefined;
  }
}

export interface WriteFileOptions {
  /**
   * Whether the generated file should be marked as executable.
   *
   * @default false
   */
  executable?: boolean;

  /**
   * Whether the generated file should be readonly.
   *
   * @default false
   */
  readonly?: boolean;
}

export function getFilePermissions(options: WriteFileOptions): string {
  const readonly = options.readonly ?? false;
  const executable = options.executable ?? false;
  if (readonly && executable) {
    return '500';
  } else if (readonly) {
    return '400';
  } else if (executable) {
    return '755';
  } else {
    return '644';
  }
}

export function writeFile(filePath: string, data: any, options: WriteFileOptions = {}) {
  if (fs.existsSync(filePath)) {
    fs.chmodSync(filePath, '600');
  }

  fs.mkdirpSync(path.dirname(filePath));
  fs.writeFileSync(filePath, data);

  fs.chmodSync(filePath, getFilePermissions(options));
}

/**
 * Decamelizes the keys of an object structure, recursing through child objects and arrays.
 * @experimental
 */
export interface DecamelizeRecursivelyOptions {
  /**
   * Max depth to recurse before erroring.
   * @default 10
   */
  maxDepth?: number;

  /**
   * Returns true when a key should be decamelized
   * @default - all keys are decamelized
   */
  shouldDecamelize?: (path: string[], value: any) => boolean;

  /**
   * Separator for decamelizing.
   * @default "_"
   */
  separator?: string;

  /**
   * Current path.
   * @internal
   */
  path?: string[];
}

export function decamelizeKeysRecursively(input: any, opt?: DecamelizeRecursivelyOptions): any {
  const shouldAlwaysDecamelize = () => true;
  const shouldDecamelize = opt?.shouldDecamelize ?? shouldAlwaysDecamelize;
  const separator = opt?.separator ?? '_';
  const path_ = opt?.path ?? [];
  const maxDepth = opt?.maxDepth ?? 10;

  if (path_.length > maxDepth) {
    throw new Error('Decamelled too deeply - check that the input has no circular references');
  }

  if (Array.isArray(input)) {
    return input.map((k, i) => decamelizeKeysRecursively(k, {
      ...opt,
      path: [...path_, i.toString()],
    }));
  }

  if (typeof input === 'object' && input !== null) {
    const mappedObject: Record<string, any> = {};
    for (const [key, value] of Object.entries(input)) {
      const transformedKey = shouldDecamelize([...path_, key], value)
        ? decamelize(key, separator)
        : key;

      mappedObject[transformedKey] = decamelizeKeysRecursively(value, {
        ...opt,
        path: [...path_, key],
      });
    }

    return mappedObject;
  }

  return input;
}

/**
 * Returns false if value is unset or a falsey value, and true otherwise.
 * @param value an environment variable
 */
export function isTruthy(value: string | undefined): boolean {
  return !(value === undefined || ['null', 'undefined', '0', 'false', ''].includes(value.toLocaleLowerCase()));
}

/**
 * Type of a map mapping strings to some arbitrary type
 */
export type Obj<T> = { [key: string]: T };

/**
 * Return whether the given value is an object
 *
 * Even though arrays and instances of classes technically are objects, we
 * usually want to treat them differently, so we return false in those cases.
 */
export function isObject(x: any): x is Obj<any> {
  return x !== null && typeof x === 'object' && !Array.isArray(x)
    && x.constructor.name === 'Object';
}

/**
 * Recursively merge objects together
 *
 * The leftmost object is mutated and returned. Arrays are not merged
 * but overwritten just like scalars.
 *
 * If an object is merged into a non-object, the non-object is lost.
 *
 * `undefined`s will cause a value to be deleted if destructive is enabled.
 */
export function deepMerge(objects: Array<Obj<any> | undefined>, destructive: boolean = false) {
  function mergeOne(target: Obj<any>, source: Obj<any>) {
    for (const key of Object.keys(source)) {
      const value = source[key];

      if (isObject(value)) {
        // if the value at the target is not an object, override it with an
        // object so we can continue the recursion
        if (typeof(target[key]) !== 'object') {
          target[key] = value;
        }
        mergeOne(target[key], value);

        // if the result of the merge is an empty object, it's because the
        // eventual value we assigned is `undefined`, and there are no
        // sibling concrete values alongside, so we can delete this tree.
        const output = target[key];
        if (typeof(output) === 'object' && Object.keys(output).length === 0 && destructive) {
          delete target[key];
        }
      } else if (value === undefined && destructive) {
        delete target[key];
      } else if (typeof value !== 'undefined') {
        target[key] = value;
      }
    }
  }

  const others = objects.filter(x => x != null) as Array<Obj<any>>;

  if (others.length === 0) { return {}; }
  const into = others.splice(0, 1)[0];

  others.forEach(other => mergeOne(into, other));
  return into;
}

/*
 * Deduplicate values in a list, returning a new array.
 * @param array list of values
 */
export function dedupArray<T>(array: T[]): T[] {
  return array.filter((val, idx) => array.indexOf(val) === idx);
}

/**
 * Returns a sorted version of `x` or `undefined` if it is an empty array or object.
 */
export function sorted<T>(x: T) {
  if (x == null) { return undefined; }
  if (Array.isArray(x)) {
    if (x.length === 0) { return undefined; }
    return (x as unknown[]).sort();
  } else if (typeof x === 'object') {
    if (Object.keys(x).length === 0) { return undefined; }
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(x).sort(([l], [r]) => l.localeCompare(r))) {
      result[key] = value;
    }
    return result as T;
  } else {
    return x;
  }
}

export function formatAsPythonModule(name: string) {
  return name.replace(/-/g, '_').replace(/\./g, '_');
}

export function kebabCaseKeys<T = unknown>(obj: T, recursive = true): T {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    if (recursive) {
      obj = obj.map((v) => kebabCaseKeys(v, recursive)) as any;
    }
    return obj;
  }

  const result: Record<string, unknown> = {};
  for (let [k, v] of Object.entries(obj)) {
    if (recursive) {
      v = kebabCaseKeys(v, recursive);
    }
    result[decamelize(k).replace(/_/mg, '-')] = v;
  }
  return result as any;
}

export async function tryReadFile(file: string) {
  if (!(await fs.pathExists(file))) {
    return '';
  }

  return fs.readFile(file, 'utf8');
}
