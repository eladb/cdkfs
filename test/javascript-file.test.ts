import { synthSnapshot } from "./util";
import { ICodeResolvable } from "../src/code-resolvable";
import { NodeProject } from "../src/javascript";
import {
  CJSJavascriptDependencies,
  ESMJavascriptDependencies,
  JavascriptDataStructure,
  JavascriptFile,
  JavascriptFunction,
  JavascriptRaw,
} from "../src/javascript-file";

test("JavascriptRaw can make js-type eslint output", () => {
  // make a dependencies object to track imports
  const dependencies = ESMJavascriptDependencies.value();

  // add a few imports
  const [jsdoc] = dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
  const [js] = dependencies.addImport("js", "@eslint/js");

  // create a files array to modify later
  const files: Array<string> = [];

  // make a data object
  const data = [
    {
      files,
      plugins: {
        jsdoc,
      },
      rules: {
        "jsdoc/require-description": "error",

        // insert a spread operator, value doesn't matter
        [`...${js}.blah`]: true,
        "jsdoc/check-values": "error",

        // insert a second spread operator, value doesn't matter
        [`...(${jsdoc}.fakeTest ? {"fakeTest": "warn"} : {})`]: true,
      },
    },
  ];

  // now make a file with that data, including any imports, but don't resolve it yet
  const unresolvedValue = JavascriptRaw.value(`${dependencies}

export default ${JavascriptDataStructure.value(data)};
`);

  // modify the data
  files.push("**/*.js");

  // now resolve the code into value
  const value = unresolvedValue.resolve();

  console.log(value);

  expect(value).toEqual(`import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';

export default [
  {
    files: [
      "**/*.js",
    ],
    plugins: {
      jsdoc: jsdoc,
    },
    rules: {
      "jsdoc/require-description": "error",
      ...js.blah,
      "jsdoc/check-values": "error",
      ...(jsdoc.fakeTest ? {"fakeTest": "warn"} : {}),
    },
  },
];
`);

  expect(value).not.toMatch(/\$\{Token\d+\}/);
});

test("JavascriptRaw value-type test", () => {
  const testValue = "testValue";

  const value = JavascriptRaw.value(
    `const token = "someValue";
  const test = ${JavascriptDataStructure.value({
    null: null,
    infinity: Infinity,
    date: new Date("2024-01-01T06:00:00.000Z"),
    banana: "bread",
    foo: "bar",
    number: 1,
    truth: false,
    undefined: undefined,
    "undefined Again": JavascriptRaw.value("undefined").toString(),
    array: [
      1,
      "string",
      true,
      {
        a: "b",
      },
      JavascriptRaw.value("token").toString(),
    ],
    emptyArray: [],
    emptyObject: {},
    object: {
      a: "b",
      sym: JavascriptRaw.value("__dirname"),
      func: JavascriptRaw.value("JSON.stringify(1)"),
    },
    function2: JavascriptFunction.named(
      "foo",
      [JavascriptRaw.value("a"), JavascriptRaw.value("b")],
      JavascriptRaw.value("return a + b;")
    ),
    functionArrow: JavascriptFunction.arrow(
      [JavascriptRaw.value("a"), JavascriptRaw.value("b")],
      [
        JavascriptRaw.value(
          `console.log(${JavascriptDataStructure.value({ testValue })});`
        ),
        JavascriptRaw.value("return a + b;"),
      ]
    ),
  })};`
  ).resolve();

  expect(value).toMatchInlineSnapshot(`
    "const token = "someValue";
      const test = {
      null: null,
      infinity: Infinity,
      date: new Date("2024-01-01T06:00:00.000Z"),
      banana: "bread",
      foo: "bar",
      number: 1,
      truth: false,
      "undefined Again": undefined,
      array: [
        1,
        "string",
        true,
        {
          a: "b",
        },
        token,
      ],
      emptyArray: [],
      emptyObject: {},
      object: {
        a: "b",
        sym: __dirname,
        func: JSON.stringify(1),
      },
      function2: function foo(a, b) {
        return a + b;
      },
      functionArrow: (a, b) => {
        console.log({ testValue: "testValue", });
        return a + b;
      },
    };"
  `);

  // double-check that there's no unresolved tokens
  expect(value).not.toMatch(/\$\{[a-zA-Z]+\d+\}/);
});

describe("JavascriptDependencies support import (ESM) syntax", () => {
  test("default export", () => {
    const dependencies = ESMJavascriptDependencies.value();
    dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
    dependencies.addImport("js", "@eslint/js");

    const value = dependencies.resolve();
    expect(value).toEqual(`import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';`);
  });

  test("subvalues", () => {
    const dependencies = ESMJavascriptDependencies.value();
    dependencies.addImport(["subValue1, subValue2"], "eslint-plugin-jsdoc");
    dependencies.addImport(["t1", "t2"], "@eslint/js");

    const value = dependencies.resolve();
    expect(value)
      .toEqual(`import { subValue1, subValue2 } from 'eslint-plugin-jsdoc';
import { t1, t2 } from '@eslint/js';`);
  });

  test("default export and subvalues", () => {
    const dependencies = ESMJavascriptDependencies.value();
    const [jsdoc] = dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
    const [subValue1, subValue2] = dependencies.addImport(
      ["subValue1", "subValue2"],
      "eslint-plugin-jsdoc"
    );
    dependencies.addImport("js", "@eslint/js");
    dependencies.addImport(["t1", "t2"], "@eslint/js");

    const value = dependencies.resolve();
    expect(value)
      .toEqual(`import jsdoc, { subValue1, subValue2 } from 'eslint-plugin-jsdoc';
import js, { t1, t2 } from '@eslint/js';`);
    expect(jsdoc.resolve()).toEqual("jsdoc");
    expect(subValue1.resolve()).toEqual("subValue1");
    expect(subValue2.resolve()).toEqual("subValue2");
  });

  test("duplicated default export with different name", () => {
    const dependencies = ESMJavascriptDependencies.value();
    const [jsdocToken] = dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
    const [jsdocAgainToken] = dependencies.addImport(
      "jsdocAgain",
      "eslint-plugin-jsdoc"
    );

    expect(jsdocToken).toEqual(jsdocAgainToken);

    const value = JavascriptRaw.value(
      `${dependencies}
const x = ${jsdocToken};
const y = ${jsdocAgainToken};`
    ).resolve();
    expect(value).toEqual(`import jsdoc from 'eslint-plugin-jsdoc';
const x = jsdoc;
const y = jsdoc;`);
  });
});

describe("JavascriptDependencies support require (CJS) syntax", () => {
  test("default export", () => {
    const dependencies = CJSJavascriptDependencies.value();
    dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
    dependencies.addImport("js", "@eslint/js");

    const value = dependencies.resolve();
    expect(value).toEqual(`const jsdoc = require('eslint-plugin-jsdoc');
const js = require('@eslint/js');`);
  });

  test("subvalues", () => {
    const dependencies = CJSJavascriptDependencies.value();
    dependencies.addImport(["subValue1, subValue2"], "eslint-plugin-jsdoc");
    dependencies.addImport(["t1", "t2"], "@eslint/js");

    const value = dependencies.resolve();
    expect(value)
      .toEqual(`const { subValue1, subValue2 } = require('eslint-plugin-jsdoc');
const { t1, t2 } = require('@eslint/js');`);
  });

  test("default export and subvalues", () => {
    const dependencies = CJSJavascriptDependencies.value();
    const [jsdoc] = dependencies.addImport("jsdoc", "eslint-plugin-jsdoc");
    const [subValue1, subValue2] = dependencies.addImport(
      ["subValue1", "subValue2"],
      "eslint-plugin-jsdoc"
    );
    dependencies.addImport("js", "@eslint/js");
    dependencies.addImport(["t1", "t2"], "@eslint/js");

    const value = dependencies.resolve();
    expect(value).toEqual(`const jsdoc = require('eslint-plugin-jsdoc');
const { subValue1, subValue2 } = jsdoc;
const js = require('@eslint/js');
const { t1, t2 } = js;`);
    expect(jsdoc.resolve()).toEqual("jsdoc");
    expect(subValue1.resolve()).toEqual("subValue1");
    expect(subValue2.resolve()).toEqual("subValue2");
  });
});

describe("JavascriptFile", () => {
  test("can make a simple CJS JavascriptFile from an object", () => {
    // GIVEN
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "master",
      prettier: true,
    });

    const configFileName = "testFilename.js";

    new JavascriptFile(project, configFileName, {
      obj: {
        exportedValue: "value",
      },
      marker: true,
      allowComments: true,
      cjs: true,
    });

    // THEN
    const output = synthSnapshot(project);
    expect(output[configFileName]).toMatchInlineSnapshot(`
      "// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".

      module.exports = {
        exportedValue: "value",
      };
      "
    `);
  });

  test("can make a simple ESM JavascriptFile from an object", () => {
    // GIVEN
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "master",
      prettier: true,
    });

    const configFileName = "testFilename.mjs";

    new JavascriptFile(project, configFileName, {
      obj: {
        exportedValue: "value",
      },
      marker: true,
      allowComments: true,
      cjs: false,
    });

    // THEN
    const output = synthSnapshot(project);
    expect(output[configFileName]).toMatchInlineSnapshot(`
      "// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".

      export default {
        exportedValue: "value",
      };
      "
    `);
  });

  test("can override", () => {
    // GIVEN
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "master",
      prettier: true,
    });

    const configFileName = "testFilename.mjs";

    const file = new JavascriptFile(project, configFileName, {
      obj: {
        exportedValue: "value",
      },
      marker: true,
      allowComments: true,
      cjs: false,
    });
    file.addOverride("exportedValue", "newValue");

    // THEN
    const output = synthSnapshot(project);
    expect(output[configFileName]).toMatchInlineSnapshot(`
      "// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".

      export default {
        exportedValue: "newValue",
      };
      "
    `);
  });

  test("can override with an import", () => {
    // GIVEN
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "master",
      prettier: true,
    });

    const configFileName = "testFilename.mjs";

    const file = new JavascriptFile(project, configFileName, {
      obj: {
        exportedValue: "value",
      },
      marker: true,
      allowComments: true,
      cjs: false,
    });
    const [newValueToken] = file.dependencies.addImport("fs", "fs");
    file.addOverride(
      "exportedValue",
      JavascriptRaw.value(
        `${newValueToken}.readFileSync("file.txt")`
      ).toString()
    );

    // THEN
    const output = synthSnapshot(project);
    expect(output[configFileName]).toMatchInlineSnapshot(`
      "// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
      import fs from 'fs';
      export default {
        exportedValue: fs.readFileSync("file.txt"),
      };
      "
    `);
  });

  test("can override with an import that is computed later", () => {
    // GIVEN
    const project = new NodeProject({
      name: "test",
      defaultReleaseBranch: "master",
      prettier: true,
    });

    const configFileName = "testFilename.mjs";

    const file = new JavascriptFile(project, configFileName, {
      obj: {
        exportedValue: "value",
      },
      marker: true,
      allowComments: true,
      cjs: false,
    });
    const [newValueToken] = file.dependencies.addImport("fs", "fs");
    let readFileName = "default.txt";
    file.addOverride(
      "exportedValue",
      JavascriptRaw.value(
        `${newValueToken}.readFileSync(${JavascriptDataStructure.value(
          () => readFileName
        )})`
      ).toString()
    );
    readFileName = "finalValue.txt";

    // THEN
    const output = synthSnapshot(project);
    expect(output[configFileName]).toMatchInlineSnapshot(`
      "// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
      import fs from 'fs';
      export default {
        exportedValue: fs.readFileSync("finalValue.txt"),
      };
      "
    `);
  });
});

// There are doing double duty: They serve as mildy redundant and simple tests,
// but also as a place to copy the documentation examples and paste them in the
// docs. This means they're formatted properly and working.
describe("JavascriptFile doc exmamples", () => {
  test("JavascriptFunction docs: JavascriptFunction.named example", () => {
    const name = "foo";
    const namedFunc = JavascriptFunction.named(
      name,
      ["a", "b=2"], // the "b=2" is just to show that these are used literally
      JavascriptRaw.value("return a + b;")
    );

    // Example of how to make a convenience function to call this function
    const namedFuncCaller = (...params: unknown[]) =>
      JavascriptFunction.call(name, ...params);

    // Use `namedFunc` to actually define the function
    // Use `namedFuncCaller()` to call the function
    const namedFuncUsage = JavascriptRaw.value(
      `const fooValue = ${namedFuncCaller(1, 2)};

${namedFunc}`
    ).resolve();

    expect(namedFuncUsage).toEqual(
      `const fooValue = foo(1, 2);

function foo(a, b=2) {
  return a + b;
}`
    );
  });

  test("JavascriptFunction docs: JavascriptFunction.arrow example", () => {
    const name = "foo";
    const arrowFun = JavascriptFunction.arrow(
      ["a", "...b"], // the ...b is just to show that these are used literally
      JavascriptRaw.value("return a + b[0];")
    );

    // Example of how to make a convenience function to call this function
    const arrowFuncCaller = (...params: unknown[]) =>
      JavascriptFunction.call(name, ...params);

    // Use `arrowFun` to actually define the function
    // Use `arrowFuncCaller()` to call the function
    const arrowFuncUsage = JavascriptRaw.value(
      `const ${name} = ${arrowFun};
const fooValue = ${arrowFuncCaller(1, 2)};
`
    ).resolve();

    expect(arrowFuncUsage).toEqual(
      `const foo = (a, ...b) => {
  return a + b[0];
};
const fooValue = foo(1, 2);
`
    );
  });

  test("JavascriptDataStructure docs: no-indent example", () => {
    const dataStructUsage = JavascriptDataStructure.value({
      a: 1,
      b: 2,
    }).resolve({ indentation: 0 });

    expect(dataStructUsage).toEqual(`{ a: 1, b: 2, }`);
  });

  test("JavascriptDataStructure docs: example", () => {
    const data = [
      {
        string: "value", // string vlaue
        number: 1234, // numebr value
        boolean: true, // boolean value
        null: null, // null value
        [`...${JavascriptRaw.value("spread")}`]: true, // spread, value of true ignored, except if it's undefined
        [`...${JavascriptRaw.value("dontSpread")}`]: undefined, // remove, since undefined
      },
    ];

    const dataStructUsage = JavascriptDataStructure.value(data).resolve();

    expect(dataStructUsage).toEqual(
      `[
  {
    string: "value",
    number: 1234,
    boolean: true,
    null: null,
    ...spread,
  },
]`
    );
  });

  test("JavascriptRaw docs", () => {
    const aCode: ICodeResolvable = JavascriptRaw.value("const a = 1;");
    const bCode: ICodeResolvable = JavascriptRaw.value("const b = 2;");
    const finalCode: ICodeResolvable = JavascriptRaw.value([
      aCode.toString(),
      bCode.toString(),
    ]);

    console.log(aCode.toString());

    const generatedJavascriptCode = finalCode.resolve();

    expect(generatedJavascriptCode).toEqual(`const a = 1;\nconst b = 2;`);
  });
});
