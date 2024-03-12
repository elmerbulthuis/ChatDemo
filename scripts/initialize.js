#!/usr/bin/env node

const cp = require("child_process");
const path = require("path");

const options = { shell: true, stdio: "inherit" };

cp.execFileSync(
  "npx",
  [
    "--package",
    "oa42-generator@0.9.11",
    "oa42-generator",
    "package",
    path.resolve("specifications", "chat-api.yaml"),
    "--package-directory",
    path.resolve("generated", "npm", "chat-common-oa42"),
    "--package-name",
    "chat-common-oa42",
    "--package-version",
    "0.0.0",
  ],
  options,
);

cp.execFileSync("npm", ["--workspace", "chat-common-oa42", "install"], options);
cp.execFileSync("npm", ["--workspace", "chat-common-oa42", "run", "build"], options);
