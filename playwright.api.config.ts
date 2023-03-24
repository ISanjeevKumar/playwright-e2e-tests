import type { PlaywrightTestConfig } from "@playwright/test";
import { getApiConfig } from "./config/api-env-config";

const environment = process.env.ENVIRONMENT || "production";
const apiConfig = getApiConfig(environment);

const config: PlaywrightTestConfig = {
  testDir: "./tests/api-tests",
  timeout: 60000,
  expect: {
    timeout: 45000,
  },
  workers: 3,
  reporter: [
    ["html", { open: "never", outputFolder: "test-report/api-report" }],
    ["github"],
    ["list", { printSteps: true }],
  ],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "on",
    baseURL: apiConfig.apiBaseUrl
  },
};

export default config;
