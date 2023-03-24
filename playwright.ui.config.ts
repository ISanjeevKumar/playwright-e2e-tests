import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests/ui-tests",
  globalSetup: "./config/global-config.ts",
  timeout: 60000,
  expect: {
    timeout: 45000,
  },
  workers: 3,
  reporter: [["html", { open: "never" }], ["github"], ["list"]],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "on",
  },
};

export default config;
