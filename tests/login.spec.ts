import { App } from "../page-objects/App";
import { test, expect } from "../custom-fixtures/baseFixture";

test.describe("Login - e2e test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });
  test("Should be able to login with valid user credentials", async ({
    page,
    userCreds,
  }) => {
    const app = new App(page);
    await app.LoginPage.login(userCreds.username, userCreds.password);
    await expect(page).toHaveTitle("The Internet");
    await app.LoginPage.isUserlogged();
  });
});
