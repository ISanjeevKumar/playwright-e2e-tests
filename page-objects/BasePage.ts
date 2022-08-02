import { expect, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public logAssert(expected: string, actual: string) {
    console.log(`Expected: ${expected} and Actual: ${actual}`);
    expect(actual).toContain(expected);
  }
}
