import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests/real-world-tests",
  timeout: 60000,
  reporter: [["html", { outputFolder: "test-report" }]],
  use: {
    viewport: { width: 1280, height: 720 },
    baseURL: "https://demo.realworld.io/",
    headless: true,
    screenshot: "only-on-failure",
  },
};

export default config;
