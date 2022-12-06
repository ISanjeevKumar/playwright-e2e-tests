import { expect, test } from "../../custom-fixtures/page-fixture";
import * as userdata from "../../data/user/register-data.json";
import { RegisterModal } from "../../modal-objects/RegisterModal";

test.describe("Register new user", function () {
  let registerdata: RegisterModal;

  test.beforeEach(async () => {
    registerdata = new RegisterModal(userdata);
  });

  test("Should be able to register new user", async ({
    page,
    RegisterPage,
  }) => {
    await RegisterPage.navigateToRegister();
    await expect(page).toHaveTitle("Register Account");
    await RegisterPage.fillRegisterDetails(registerdata);
    await RegisterPage.submitRegisterDetails();
  });
});
