import { expect, test } from "@playwright/test";
import App from "../../page-objects/App";

test.describe("Register new user", function () {
  test("Should be able to register new user", async ({ page }) => {
    const app = new App(page);
    await app.RegisterPage.navigateToRegister();
    await expect(page).toHaveTitle("Register Account");
    await app.RegisterPage.registerAccount();
  });
});
