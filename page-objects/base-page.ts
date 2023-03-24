import { expect, Locator, Page } from "@playwright/test";
import { PageActions } from "../libs/page-actions";

export class BasePage {
  protected readonly page: Page;
  protected readonly pageActions: PageActions;
  constructor(page: Page) {
    this.page = page;
    this.pageActions = new PageActions(page);
  }

  protected async assertText(element: Locator, expectedText: string) {
    await expect(
      element,
      `Assert element must contain ${expectedText} text`
    ).toHaveText(expectedText);
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
