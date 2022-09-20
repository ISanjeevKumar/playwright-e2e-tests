import { expect, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected async logAssert(
    expected: string,
    actual: string,
    exactMatch = false
  ) {
    console.log(`Expected: ${expected} and Actual: ${actual}`);
    if (!exactMatch) {
      await expect(actual).toContain(expected);
    } else {
      await expect(actual).toBe(expected);
    }
  }
  protected async assertPageURL(pageUrl) {
    console.log("Assertion for Page URL");
    await expect(this.page).toHaveURL(pageUrl);
  }
  protected async assertPageTitle(title) {
    console.log("Assertion for Page Title");
    await expect(this.page).toHaveTitle(title);
  }
}
