import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [["html", { outputFolder: "test-report" }]],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: "https://the-internet.herokuapp.com",
  },
};

export default config;
