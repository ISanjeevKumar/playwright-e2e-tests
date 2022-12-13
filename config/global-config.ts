import { FullConfig } from "@playwright/test";
const fse = require("fs-extra");

async function globalSetup(config: FullConfig) {
  await fse.remove("/test-results");
  console.log("Playwright config:", config);
}

export default globalSetup;
