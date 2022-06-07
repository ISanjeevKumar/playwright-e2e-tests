import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test.describe("Login - e2e test", () => {
  test("Should be able to login", async ({ page }) => {
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveTitle("The Internet");
    console.log(await page.title());
  });
});
