import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  protected get myAccountLnk() {
    return this.page.locator('span:has-text("My Account")');
  }
  protected get registerLnk() {
    return this.page.locator("#top >> text=Register");
  }
  constructor(page: Page) {
    super(page);
  }
  public async navigateToRegister() {
    await this.page.goto("/");
    await this.myAccountLnk.click();
    await this.registerLnk.click();
  }

  public async registerAccount() {}
}
