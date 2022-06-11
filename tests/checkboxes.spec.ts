import { test } from "@playwright/test";

test("Should be able to select checkbox", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("/checkboxes");
  // Check input[type="checkbox"] >> nth=0
  await page.locator('input[type="checkbox"]').first().check();
  // Uncheck input[type="checkbox"] >> nth=1
  await page.locator('input[type="checkbox"]').nth(1).uncheck();
});
