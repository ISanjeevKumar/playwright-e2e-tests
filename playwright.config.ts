import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    browserName: "chromium",
    trace: "on-first-retry",
    headless: true,
  },
};

export default config;
