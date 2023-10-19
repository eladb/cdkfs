// inspired by https://github.com/cdk8s-team/cdk8s-core/blob/2.x/src/json-patch.ts
// under Apache 2.0 license
import {
  applyPatch,
  deepClone,
  Operation,
  AddOperation,
  RemoveOperation,
  ReplaceOperation,
  MoveOperation,
  CopyOperation,
  TestOperation,
  escapePathComponent,
  JsonPatchError,
} from "fast-json-patch";

export enum TestFailureBehavior {
  /**
   * Skip the patch operation and continue with the next operation.
   */
  SKIP_PATCH = "skip",
  /**
   * Throw an error and stop whole file synthesizes.
   */
  THROW = "throw",
  /**
   * Log an error and continue with the next operation.
   */
  LOG_ERROR = "log",
}

const TEST_FAILURE_BEHAVIOR_SYMBOL = Symbol.for("testFailureBehavior");

/**
 * Utility for applying RFC-6902 JSON-Patch to a document.
 *
 * Use the the `JsonPatch.apply(doc, ...ops)` function to apply a set of
 * operations to a JSON document and return the result.
 *
 * Operations can be created using the factory methods `JsonPatch.add()`,
 * `JsonPatch.remove()`, etc.
 *
 * @example
 *
 *const output = JsonPatch.apply(input,
 *  JsonPatch.replace('/world/hi/there', 'goodbye'),
 *  JsonPatch.add('/world/foo/', 'boom'),
 *  JsonPatch.remove('/hello'));
 *
 */
export class JsonPatch {
  /**
   * Applies a set of JSON-Patch (RFC-6902) operations to `document` and returns the result.
   * @param document The document to patch
   * @param ops The operations to apply
   * @returns The result document
   */
  public static apply(document: any, ...ops: JsonPatch[]): any {
    try {
      const result = applyPatch(
        document,
        deepClone(ops.map((o) => o._toJson()))
      );
      return result.newDocument;
    } catch (e) {
      if (e instanceof JsonPatchError && e.name === "TEST_OPERATION_FAILED") {
        const op = ops[e.index!];
        if (TEST_FAILURE_BEHAVIOR_SYMBOL in op) {
          const failureBehavior = op[TEST_FAILURE_BEHAVIOR_SYMBOL];
          if (failureBehavior === TestFailureBehavior.SKIP_PATCH) {
            return document;
          } else if (failureBehavior === TestFailureBehavior.LOG_ERROR) {
            console.error(
              `Test operation failed at index ${e.index}: ${JSON.stringify(
                op._toJson()
              )}`
            );
            return document;
          }
        }
      }
      throw e;
    }
  }

  /**
   * Adds a value to an object or inserts it into an array. In the case of an
   * array, the value is inserted before the given index. The - character can be
   * used instead of an index to insert at the end of an array.
   *
   * @example JsonPatch.add('/biscuits/1', { "name": "Ginger Nut" })
   */
  public static add(path: string, value: any) {
    return new JsonPatch({
      op: "add",
      path,
      value,
    } satisfies AddOperation<any>);
  }

  /**
   * Removes a value from an object or array.
   *
   * @example JsonPatch.remove('/biscuits')
   * @example JsonPatch.remove('/biscuits/0')
   */
  public static remove(path: string) {
    return new JsonPatch({ op: "remove", path } satisfies RemoveOperation);
  }

  /**
   * Replaces a value. Equivalent to a “remove” followed by an “add”.
   *
   * @example JsonPatch.replace('/biscuits/0/name', 'Chocolate Digestive')
   */
  public static replace(path: string, value: any) {
    return new JsonPatch({
      op: "replace",
      path,
      value,
    } satisfies ReplaceOperation<any>);
  }

  /**
   * Copies a value from one location to another within the JSON document. Both
   * from and path are JSON Pointers.
   *
   * @example JsonPatch.copy('/biscuits/0', '/best_biscuit')
   */
  public static copy(from: string, path: string) {
    return new JsonPatch({ op: "copy", from, path } satisfies CopyOperation);
  }

  /**
   * Moves a value from one location to the other. Both from and path are JSON Pointers.
   *
   * @example JsonPatch.move('/biscuits', '/cookies')
   */
  public static move(from: string, path: string) {
    return new JsonPatch({ op: "move", from, path } satisfies MoveOperation);
  }

  /**
   * Tests that the specified value is set in the document. If the test fails,
   * then the patch as a whole should not apply.
   *
   * @example JsonPatch.test('/best_biscuit/name', 'Choco Leibniz')
   */
  public static test(
    path: string,
    value: any,
    failureBehavior: TestFailureBehavior = TestFailureBehavior.SKIP_PATCH
  ) {
    const patch = new JsonPatch({
      op: "test",
      path,
      value,
    } satisfies TestOperation<any>);
    Object.defineProperty(patch, TEST_FAILURE_BEHAVIOR_SYMBOL, {
      writable: false,
      value: failureBehavior,
    });
    return patch;
  }

  /**
   * Escapes a json pointer path
   * @param path The raw pointer
   * @return the Escaped path
   */
  public static escapePath(path: string): string {
    return escapePathComponent(path);
  }

  private constructor(private readonly operation: Operation) {}

  /**
   * Returns the JSON representation of this JSON patch operation.
   *
   * @internal
   */
  public _toJson(): any {
    return this.operation;
  }
}
