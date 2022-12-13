import { expect, test } from "@playwright/test";
import { WebTextHelper } from "../../libs/web-text-helper";
test("Should be able to enter text into textarea", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/forgot_password");
  const inputBox = await page.locator("#email");
  await WebTextHelper.fill(inputBox, "sample@sample.com");
  expect(inputBox).toHaveValue("sample@sample.com");
});
