import { App } from "../page-objects/App";
import { test, expect } from "../custom-fixtures/baseFixture";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test.describe("Login - e2e test", () => {
  test("Should be able to login", async ({ page, userCreds }) => {
    const app = new App(page);
    await app.LoginPage.login(userCreds.username, userCreds.password);
    await expect(page).toHaveTitle("The Internet");
    await app.LoginPage.isUserlogged();
  });
});
