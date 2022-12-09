import { expect, test } from "@playwright/test";

test("Should be able to upload a file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page
    .locator("#file-upload")
    .setInputFiles("data/upload-files/sample.pdf");
  await page.getByRole("button", { name: "Upload" }).click();
  await expect(await page.getByText("sample.pdf")).toHaveText("sample.pdf");
});
