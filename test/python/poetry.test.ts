import * as TOML from "@iarna/toml";
import { python } from "../../src";
import * as logging from "../../src/logging";
import { synthSnapshot } from "../util";

test("poetry enabled", () => {
  const p = new TestPythonProject({
    poetry: true,
    homepage: "http://www.example.com",
    description: "a short project description",
    license: "Apache-2.0",
    classifiers: ["Development Status :: 4 - Beta"],
  });

  const snapshot = synthSnapshot(p);
  expect(snapshot["pyproject.toml"]).toContain("First Last");
  expect(snapshot["pyproject.toml"]).toContain("email@example.com");
  expect(snapshot["pyproject.toml"]).toContain("http://www.example.com");
  expect(snapshot["pyproject.toml"]).toContain("a short project description");
  expect(snapshot["pyproject.toml"]).toContain("Apache-2.0");
  expect(snapshot["pyproject.toml"]).toContain(
    "Development Status :: 4 - Beta"
  );
  expect(snapshot["pyproject.toml"]).toContain('python = ">=3.8"');
});

test("poetry and venv fails", () => {
  expect(
    () =>
      new TestPythonProject({
        poetry: true,
        venv: true,
        homepage: "http://www.example.com",
        description: "a short project description",
        license: "Apache-2.0",
        classifiers: ["Development Status :: 4 - Beta"],
      })
  ).toThrowError();
});

test("poetry and pip fails", () => {
  expect(
    () =>
      new TestPythonProject({
        poetry: true,
        pip: true,
        homepage: "http://www.example.com",
        description: "a short project description",
        license: "Apache-2.0",
        classifiers: ["Development Status :: 4 - Beta"],
      })
  ).toThrowError();
});

test("poetry and setuptools fails", () => {
  expect(
    () =>
      new TestPythonProject({
        poetry: true,
        setuptools: true,
        homepage: "http://www.example.com",
        description: "a short project description",
        license: "Apache-2.0",
        classifiers: ["Development Status :: 4 - Beta"],
      })
  ).toThrowError();
});

test("poetry enabled", () => {
  const p = new TestPythonProject({
    poetry: true,
    homepage: "http://www.example.com",
    description: "a short project description",
    license: "Apache-2.0",
    classifiers: ["Development Status :: 4 - Beta"],
  });

  const snapshot = synthSnapshot(p);
  expect(snapshot["pyproject.toml"]).toContain("First Last");
  expect(snapshot["pyproject.toml"]).toContain("email@example.com");
  expect(snapshot["pyproject.toml"]).toContain("http://www.example.com");
  expect(snapshot["pyproject.toml"]).toContain("a short project description");
  expect(snapshot["pyproject.toml"]).toContain("Apache-2.0");
  expect(snapshot["pyproject.toml"]).toContain(
    "Development Status :: 4 - Beta"
  );
  expect(snapshot["pyproject.toml"]).toContain('python = ">=3.8"');
});

test("poetry enabled with specified python version", () => {
  const p = new TestPythonProject({
    poetry: true,
    requiresPython: "^3.8,<=3.11",
  });

  const snapshot = synthSnapshot(p);
  const actualTomlContent = snapshot["pyproject.toml"];
  const actualObjectContent = TOML.parse(actualTomlContent) as any;

  expect(actualObjectContent.tool.poetry.dependencies.python).toEqual(
    "^3.8,<=3.11"
  );
});

test("poetry enabled with poetry-specific options", () => {
  const p = new TestPythonProject({
    poetry: true,
    homepage: "http://www.example.com",
    description: "a short project description",
    license: "Apache-2.0",
    classifiers: ["Development Status :: 4 - Beta"],
    deps: ["package1@0.0.1", "package2@0.0.2", "package3"],
    poetryOptions: {
      maintainers: ["First-2 Last-2"],
      repository: "https://github.com/test-python-project",
      keywords: ["Keyword1"],
      packages: [
        {
          include: "my_package",
          format: "sdist",
        },
      ],
      include: ["CHANGELOG.md"],
      exclude: ["my_package/excluded.py"],
      source: [
        {
          name: "pypi_",
          url: "https://pypi.org/simple/",
          default: true,
        },
      ],
      scripts: {
        "test-python-cli": "test-python-project.cli:cli",
      },
      extras: {
        cli: ["package1", "package2"],
      },
      plugins: {
        "blogtool.parsers": {
          ".rst": "some_module:SomeClass",
        },
      },
      urls: {
        "bug tracker": "https://github.com/test-python-project/issues",
      },
    },
  });

  expect(synthSnapshot(p)).toMatchSnapshot();
});

test("poetry correctly handles dependencies with toml inline tables", () => {
  const p = new TestPythonProject({
    poetry: true,
    homepage: "http://www.example.com",
    description: "a short project description",
    license: "Apache-2.0",
    classifiers: ["Development Status :: 4 - Beta"],
    deps: [
      `package1@{ git = "https://github.com/numpy/numpy.git", tag = "v0.13.2" }`, // `git` dependencies
      `package2@{ path = "../my-package/", develop = false }`, // `path` dependencies
      `package3@{ version = "^20.1", extras = ["extra1", "extra2"] }`, // Dependency `extras`
      `package4@{ version = "^2.2", markers = "python_version <= '3.4' or sys_platform == 'win32'" }`, // Using environment markers
      `package5@[{ version = "<=1.9", python = ">=3.6,<3.8" }, { version = "^2.0", python = ">=3.8" }]`, // Multiple constraints dependencies
    ],
  });

  const snapshot = synthSnapshot(p);
  const actualTomlContent = snapshot["pyproject.toml"];
  const actualObjectContent = TOML.parse(actualTomlContent) as any;

  // Handles TOML table with strings
  expect(actualObjectContent.tool.poetry.dependencies.package1).toEqual({
    git: "https://github.com/numpy/numpy.git",
    tag: "v0.13.2",
  });

  // Handles TOML table with boolean
  expect(actualObjectContent.tool.poetry.dependencies.package2).toEqual({
    path: "../my-package/",
    develop: false,
  });

  // Handles TOML table with array
  expect(actualObjectContent.tool.poetry.dependencies.package3).toEqual({
    version: "^20.1",
    extras: ["extra1", "extra2"],
  });

  // Handles TOML table with both single and double quotes
  expect(actualObjectContent.tool.poetry.dependencies.package4).toEqual({
    version: "^2.2",
    markers: "python_version <= '3.4' or sys_platform == 'win32'",
  });

  // Handles multiple TOML tables
  expect(actualObjectContent.tool.poetry.dependencies.package5).toEqual([
    { version: "<=1.9", python: ">=3.6,<3.8" },
    { version: "^2.0", python: ">=3.8" },
  ]);

  expect(actualTomlContent).toMatchSnapshot();
});

test("poetry environment is setup with pythonExec", () => {
  // GIVEN
  const debug = jest.spyOn(logging, "debug");
  const p = new TestPythonProject({
    poetry: true,
    pythonExec: "python-exec-test-path",
  });

  // WHEN
  synthSnapshot(p);
  try {
    p.envManager.setupEnvironment();
  } catch {
    // we expect this to fail because of the nonsensical python executable
  }

  // THEN
  expect(debug).toBeCalledWith("poetry env use python-exec-test-path");

  // AFTER
  debug.mockRestore();
});

class TestPythonProject extends python.PythonProject {
  constructor(options: Partial<python.PythonProjectOptions> = {}) {
    super({
      ...options,
      clobber: false,
      name: "test-python-project",
      moduleName: "test_python_project",
      authorName: "First Last",
      authorEmail: "email@example.com",
      version: "0.1.0",
    });
  }
}

test("generates correct pyproject.toml content", () => {
  const project = new TestPythonProject({
    poetry: true,
    homepage: "http://www.example.com",
    description: "A short project description",
    license: "Apache-2.0",
    deps: ["aws-cdk-lib@^2.128.0"],
    devDeps: ["black@^24.2.0", "flake8@^7.0.0"],
  });

  const snapshot = synthSnapshot(project);
  const actualTomlContent = snapshot["pyproject.toml"];

  const actualContentObject = TOML.parse(actualTomlContent);

  const expectedContentObject = {
    tool: {
      poetry: {
        name: "test-python-project",
        version: "0.1.0",
        description: "A short project description",
        license: "Apache-2.0",
        authors: ["First Last <email@example.com>"],
        homepage: "http://www.example.com",
        readme: "README.md",
        dependencies: {
          "aws-cdk-lib": "^2.128.0",
          python: ">=3.8",
        },
        group: {
          dev: {
            dependencies: {
              black: "^24.2.0",
              flake8: "^7.0.0",
              projen: "99.99.99",
              pytest: "7.4.3",
            },
          },
        },
      },
    },
    "build-system": {
      requires: ["poetry-core"],
      "build-backend": "poetry.core.masonry.api",
    },
  };

  expect(actualContentObject).toEqual(expectedContentObject);
});
