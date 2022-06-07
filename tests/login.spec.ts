import { test, expect } from "@playwright/test";
import { App } from "../page-objects/App";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test.describe("Login - e2e test", () => {
  test("Should be able to login", async ({ page }) => {
    const app = new App(page);
    await app.LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(page).toHaveTitle("The Internet");
  });
});
