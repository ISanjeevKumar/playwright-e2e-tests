import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class RegisterPage extends BasePage {
  protected get usernameField(): Locator {
    return this.page.locator('[placeholder="Username"]');
  }
  constructor(page: Page) {
    super(page);
  }

  public async visit() {
    await this.page.goto("/#/register");
    return this;
  }

  public async registerAsNewUser() {
    try {
      this.usernameField.fill("test");
      return this;
    } catch (error) {
      throw error;
    }
  }
}
