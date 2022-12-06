import { expect, test } from "../../custom-fixtures/page-fixture";

test.describe("Register new user", function () {
  test("Should be able to register new user", async ({
    page,
    RegisterPage,
    registerdata,
  }) => {
    await RegisterPage.navigateToRegister();
    await expect(page).toHaveTitle("Register Account");
    await RegisterPage.fillRegisterDetails(registerdata);
    await RegisterPage.submitRegisterDetails();
  });
});
