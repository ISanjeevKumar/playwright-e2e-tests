import { FullConfig } from "@playwright/test";
const fse = require("fs-extra");

async function globalSetup(config: FullConfig) {
  await fse.remove("/test-results");
  await fse.remove("/playwright-report");
}

export default globalSetup;
