import { test, expect } from "@playwright/test";

test.describe("Internet herokuapp - Dropdown", () => {
  test("Should be able to select an option with matching value", async ({
    page,
  }) => {
    await page.goto("/dropdown");
    await page.locator("#dropdown").selectOption("1");
    const selectOption = await page
      .locator("#dropdown [selected='selected']")
      .innerText();
    expect(selectOption).toBe("Option 1");
  });
});
