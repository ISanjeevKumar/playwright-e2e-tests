import { expect, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected logAssert(expected: string, actual: string, exactMatch = false) {
    console.log(`Expected: ${expected} and Actual: ${actual}`);
    if (!exactMatch) expect(actual).toContain(expected);
    else expect(actual).toBe(expected);
  }
}
