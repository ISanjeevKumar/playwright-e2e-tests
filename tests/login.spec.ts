import { expect } from "@playwright/test";
import { App } from "../page-objects/App";
import test from "./fixtures/baseFixture";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test.describe("Login - e2e test", () => {
  test("Should be able to login", async ({ page, UserCreds }) => {
    const app = new App(page);
    await app.LoginPage.login(UserCreds.username, UserCreds.password);
    await expect(page).toHaveTitle("The Internet");
    await app.LoginPage.isUserlogged();
  });
});
