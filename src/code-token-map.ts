import {
  isCodeResolvable,
  ICodeResolutionContext,
  ICodeResolvable,
} from "./code-resolvable";

// Much of this code is borrowed from the AWS CDK project
// The AWS CDK usage is significantly more complex, as it can handle tokens in
// data structures that expect numbers or arrays. This is a simplified version
// that only handles strings.
// See: https://github.com/aws/aws-cdk/blob/main/packages/aws-cdk-lib/core/lib/private/token-map.ts

const glob = global as unknown & { __ProjenCodeTokenMap?: CodeTokenMap };

const STRING_SYMBOL = Symbol.for("projen.TokenMap.STRING");
/**
 * Central place where we keep a mapping from Tokens to their String representation
 *
 * The string representation is used to embed token into strings,
 * and stored to be able to reverse that mapping.
 *
 * All instances of TokenStringMap share the same storage, so that this process
 * works even when different copies of the library are loaded.
 */
export class CodeTokenMap {
  /**
   * Singleton instance of the token string map
   */
  public static get instance(): CodeTokenMap {
    if (!glob.__ProjenCodeTokenMap) {
      glob.__ProjenCodeTokenMap = new CodeTokenMap();
    }
    return glob.__ProjenCodeTokenMap;
  }

  private readonly stringTokenMap = new Map<string, ICodeResolvable>();

  /**
   * Counter to assign unique IDs to tokens
   *
   * Start at a random number to prevent people from accidentally taking
   * dependencies on token values between runs.
   *
   * This is most prominent in tests, where people will write:
   *
   * ```ts
   * sha256("... some string that can contain tokens ...")
   * ```
   *
   * This should have been:
   *
   * ```ts
   * sha256(CodeTokenMap.instance.resolve("... some string that can contain tokens ..."))
   * ```
   *
   * The hash value is hard to inspect for correctness. It will LOOK consistent
   * during testing, but will break as soon as someone stringifies another
   * token before the run.
   *
   * By changing the starting number for tokens, we ensure that the hash is almost
   * guaranteed to be different during a few test runs, so the hashing of unresolved
   * tokens can be detected.
   */
  private tokenCounter = Math.floor(Math.random() * 10);

  /**
   * Generate a unique string for this Token, returning a key
   *
   * Every call for the same Token will produce a new unique string, no
   * attempt is made to deduplicate. Token objects should cache the
   * value themselves, if required.
   *
   * The token can choose (part of) its own representation string with a
   * hint. This may be used to produce aesthetically pleasing and
   * recognizable token representations for humans.
   */
  public registerString(token: ICodeResolvable, displayHint?: string): string {
    return cachedValue(token, STRING_SYMBOL, () => {
      const key = this.registerStringKey(token, displayHint);
      return `${BEGIN_STRING_TOKEN_MARKER}${key}${END_TOKEN_MARKER}`;
    });
  }

  /**
   * Reverse a string representation into an array of alternating string and
   * ICodeResolvable objects.
   *
   * Note that String.split(RegExp) will *always* return an array of strings,
   * with the RegExp matches as the even elements. We lookup those tokens and
   * replace them in the array with the actual ICodeResolvable objects.
   *
   * This means, the odd elements are always strings, and the even elements are
   * always ICodeResolvable objects.
   */
  public lookupString(s: string): Array<string | ICodeResolvable> | undefined {
    const fragments = s.split(STRING_TOKEN_REGEX);
    return fragments.map((item, i) => {
      if (i % 2 === 1) {
        return this.lookupToken(item);
      }
      return item;
    });
  }

  /**
   * Resolve all of the token markers in the string, with the given context, to either a string or an ICodeResolvable.
   *
   * If `fullyResolved` is `false` the default)` then if there is only the one token with nothing around it, the return
   * value will the resolvable object itself.
   *
   * Otherwise the return value will be a string with the tokens fully resolved.
   */
  public resolve(
    s: string,
    context: ICodeResolutionContext,
    fullyResolved?: boolean
  ): string | ICodeResolvable | undefined;
  public resolve(
    s: string,
    context: ICodeResolutionContext,
    fullyResolved: true
  ): string | undefined;
  public resolve(
    s: string,
    context: ICodeResolutionContext,
    fullyResolved = false
  ): string | ICodeResolvable | undefined {
    const fragments = this.lookupString(s);
    if (!fragments) {
      return undefined;
    }
    if (
      fragments.length === 3 &&
      fragments[0] === "" &&
      fragments[2] === "" &&
      isCodeResolvable(fragments[1])
    ) {
      if (fullyResolved && isCodeResolvable(fragments[1])) {
        return fragments[1].resolve(context);
      }
      return fragments[1];
    }
    for (const [i, fragment] of fragments.entries()) {
      // See note above about how
      if (i % 2 === 1 && isCodeResolvable(fragment)) {
        fragments[i] = fragment.resolve(context);
      }
    }
    return fragments.join("");
  }

  /**
   * Find a Token by key.
   *
   * This excludes the token markers.
   */
  public lookupToken(key: string): ICodeResolvable {
    const token = this.stringTokenMap.get(key);
    if (!token) {
      throw new Error(`Unrecognized token key: ${key}`);
    }
    return token;
  }

  private registerStringKey(
    token: ICodeResolvable,
    displayHint?: string
  ): string {
    const counter = this.tokenCounter++;
    const representation = (displayHint || "TOKEN").replace(
      new RegExp(`[^${VALID_KEY_CHARS}]`, "g"),
      "."
    );
    const key = `${representation}.${counter}`;
    this.stringTokenMap.set(key, token);
    return key;
  }
}

/**
 * Returns true if obj is a ICodeResolvable (i.e. has the resolve() method or is a string
 * that includes token markers), or it's a listifictaion of a Token string.
 *
 * @param obj The object to test.
 */
export function unresolved(obj: unknown): boolean {
  if (typeof obj === "string") {
    STRING_TOKEN_REGEX.lastIndex = 0; // Reset
    return STRING_TOKEN_REGEX.test(obj);
  } else if (obj && isCodeResolvable(obj)) {
    return true;
  }
  return false;
}

/**
 * Get a cached value for an object, storing it on the object in a symbol
 */
function cachedValue<A extends object, B>(x: A, sym: symbol, prod: () => B) {
  let cached = (x as any)[sym as any];
  if (cached === undefined) {
    cached = prod();
    Object.defineProperty(x, sym, { value: cached });
  }
  return cached;
}

export const BEGIN_STRING_TOKEN_MARKER = "${Token[";
export const END_TOKEN_MARKER = "]}";

export const VALID_KEY_CHARS = "a-zA-Z0-9:._-";
const QUOTED_BEGIN_STRING_TOKEN_MARKER = regexQuote(BEGIN_STRING_TOKEN_MARKER);
const QUOTED_END_TOKEN_MARKER = regexQuote(END_TOKEN_MARKER);
export const STRING_TOKEN_REGEX = new RegExp(
  `${QUOTED_BEGIN_STRING_TOKEN_MARKER}([${VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`,
  "g"
);

/**
 * Quote a string for use in a regex
 */
function regexQuote(s: string) {
  return s.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
