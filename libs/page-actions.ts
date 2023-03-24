import { Locator, Page } from "playwright";

export class PageActions {
  private readonly page;
  constructor(page: Page) {
    this.page = page;
  }

  async enterText(element: Locator, text: string, options = {}) {
    await element.scrollIntoViewIfNeeded();
    await element.fill(text, options);
  }

  async clickOnElement(element: Locator, options = {}) {
    await element.scrollIntoViewIfNeeded();
    await element.click(options);
  }
}
