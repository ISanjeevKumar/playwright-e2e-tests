import { expect, test } from "@playwright/test";

test("Should be able to enter text into textarea", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Components" }).first().click();
  await page.getByRole("link", { name: "Monitors (2)" }).click();
  await page.getByRole("link", { name: 'Apple Cinema 30"' }).first().click();
  await page.getByPlaceholder("Textarea").fill("This is textarea test!!");
});

test("Should be able to enter date", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Components" }).first().click();
  await page.getByRole("link", { name: "Monitors (2)" }).click();
  await page.getByRole("link", { name: 'Apple Cinema 30"' }).first().click();
  await page.locator("#input-option-219").fill("2020-02-02");
});

test("Should be able to enter time", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Components" }).first().click();
  await page.getByRole("link", { name: "Monitors (2)" }).click();
  await page.getByRole("link", { name: 'Apple Cinema 30"' }).first().click();
  await page.locator("#input-option-221").fill("09:30");
  await page.locator("#input-option-221").fill("2020-03-02T05:15");
  await page.waitForTimeout(15000);
});
