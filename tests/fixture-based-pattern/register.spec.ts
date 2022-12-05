import { expect, test } from "../../custom-fixtures/page-fixture";

test.describe("Register new user", function () {
  test("Should be able to register new user", async ({
    page,
    RegisterPage,
  }) => {
    await RegisterPage.navigateToRegister();
    await expect(page).toHaveTitle("Register Account");
    await RegisterPage.registerAccount();
  });
});
