import { expect, test } from "@playwright/test";
import { WebButtonHelper } from "../../libs/WebButtonHelper";

test("Should be able to perform left click", async ({ page }) => {
  await page.goto("/");

  const componentLink = await page
    .getByRole("link", { name: "Components" })
    .first();
  await WebButtonHelper.click(componentLink);

  const monitorLink = await page.getByRole("link", { name: "Monitors (2)" });
  await WebButtonHelper.click(monitorLink);
  const appleMonitorLink = await page
    .getByRole("link", { name: 'Apple Cinema 30"' })
    .first();
  await WebButtonHelper.click(appleMonitorLink);
  await page.getByPlaceholder("Textarea").fill("This is textarea test!!");
});
