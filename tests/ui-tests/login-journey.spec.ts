import { test } from "../../config/ui-base-test.ts";
import { LOCKED_OUT_ERROR_MESSAGE } from "../../libs/constants";

test(`Should be able to login`, async ({ sauceDemoApp, standardUser }) => {
  await sauceDemoApp.loginPage.loadPage();
  await sauceDemoApp.loginPage.loginAsUser(standardUser);
});

test(`Should not be able to login with locked out user`, async ({
  sauceDemoApp,
  lockedOutUser,
}) => {
  await sauceDemoApp.loginPage.loadPage();
  await sauceDemoApp.loginPage.loginAsUser(lockedOutUser);
  await sauceDemoApp.loginPage.verifyLockedOutErrorMessage(
    LOCKED_OUT_ERROR_MESSAGE
  );
});
