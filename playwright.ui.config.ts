import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests/ui-tests",
  timeout: 60000,
  expect: {
    timeout: 45000,
  },
  workers: 3,
  reporter: [
    ["html", { open: "never", outputFolder: "test-report/ui-report" }],
    ["github"],
    ["list", { printSteps: true }],
  ],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "on",
  },
};

export default config;
