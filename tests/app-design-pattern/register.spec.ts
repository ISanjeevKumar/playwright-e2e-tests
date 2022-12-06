import { expect, test } from "@playwright/test";
import App from "../../page-objects/App";
import * as userdata from "../../data/user/register-data.json";
import { RegisterModal } from "../../modal-objects/RegisterModal";

test.describe("Register new user", function () {
  let registerdata: RegisterModal;

  test.beforeEach(async () => {
    registerdata = new RegisterModal(userdata);
  });

  test("Should be able to register new user", async ({ page }) => {
    const app = new App(page);
    await app.RegisterPage.navigateToRegister();
    await expect(page).toHaveTitle("Register Account");
    await app.RegisterPage.fillRegisterDetails(registerdata);
    await app.RegisterPage.submitRegisterDetails();
  });
});
