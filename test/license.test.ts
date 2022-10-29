import fs from "fs";
import { License } from "../src/license";
import { synthSnapshot, TestProject } from "./util";

function createCustomLicense(customPath: string, licenseContent: string) {
  if (!fs.existsSync(customPath)) {
    fs.mkdirSync(customPath);
  }
  fs.writeFile("CustomLicense.txt", licenseContent, function (err) {
    if (err) {
      throw err;
    }
  });
}

test("apache with defaults", () => {
  const project = new TestProject();

  new License(project, {
    spdx: "Apache-2.0",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("fails for MIT with no owner because substitution is required", () => {
  const project = new TestProject();

  expect(
    () =>
      new License(project, {
        spdx: "MIT",
      })
  ).toThrow(/The MIT license requires \"copyrightOwner\" to be specified/);
});

test("MIT with owner", () => {
  const project = new TestProject();

  new License(project, {
    spdx: "MIT",
    copyrightOwner: "John Doe",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("MIT with owner and period", () => {
  const project = new TestProject();

  new License(project, {
    spdx: "MIT",
    copyrightOwner: "John Doe",
    copyrightPeriod: "1900-1920",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("fails for MIT-0 with no owner because substitution is required", () => {
  const project = new TestProject();

  expect(
    () =>
      new License(project, {
        spdx: "MIT-0",
      })
  ).toThrow(/The MIT-0 license requires \"copyrightOwner\" to be specified/);
});

test("MIT-0 with owner", () => {
  const project = new TestProject();

  new License(project, {
    spdx: "MIT-0",
    copyrightOwner: "John Doe",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("MIT-0 with owner and period", () => {
  const project = new TestProject();

  new License(project, {
    spdx: "MIT-0",
    copyrightOwner: "John Doe",
    copyrightPeriod: "1900-1920",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("custom path license", () => {
  const project = new TestProject();
  const customPath = `${__dirname}/..`;

  createCustomLicense(customPath, "License Goes Here");

  new License(project, {
    spdx: "CustomLicense",
    licensePath: customPath,
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("custom path license with copyright owner and period", () => {
  const project = new TestProject();
  const customPath = `${__dirname}/..`;

  createCustomLicense(
    customPath,
    "License Goes Here\nCopyright $copyright_owner $copyright_period"
  );

  new License(project, {
    spdx: "CustomLicense",
    licensePath: customPath,
    copyrightOwner: "John Doe",
    copyrightPeriod: "1900-1920",
  });

  expect(synthSnapshot(project).LICENSE).toMatchSnapshot();
});

test("no spdx at custom path fails properly", () => {
  const project = new TestProject();

  expect(
    () =>
      new License(project, {
        spdx: "NothingHere",
        licensePath: `${__dirname}/..`,
      })
  ).toThrow(/license NothingHere.txt not found at .*/);
});
