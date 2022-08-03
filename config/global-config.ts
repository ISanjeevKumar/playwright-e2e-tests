import { FullConfig } from "@playwright/test";
const fse = require("fs-extra");

async function globalSetup(config: FullConfig) {
  await fse.remove("../test-report");
  console.log("Playwright config:", config);
}

export default globalSetup;
