import { expect, test } from "@playwright/test";

test("Should be able to select by value", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").selectOption("1");
  await expect(page.locator('option[selected="selected"]')).toHaveText(
    "Option 1"
  );
});
test("Should be able to select by index", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").selectOption({ index: 2 });
  await expect(page.locator('option[selected="selected"]')).toHaveText(
    "Option 2"
  );
});

test("Should be able to select by label", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").selectOption({ label: "Option 2" });
  await expect(page.locator('option[selected="selected"]')).toHaveText(
    "Option 2"
  );
});
