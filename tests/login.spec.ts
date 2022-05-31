import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test.describe("Login - e2e test", () => {
  test("Should be able to login", async ({ page }) => {
    await page.locator("username").fill("tomsmith");
    await page.locator("password").fill("SuperSecretPassword!");
    await page.locator("submit").click();
  });
});
