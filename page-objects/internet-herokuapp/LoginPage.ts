import { Locator, Page } from "@playwright/test";
import { ButtonType } from "../../data/enums/ButtonType";
import { WebButtonHelper } from "../../libs/WebButtonHelper";
import { BasePage } from "../BasePage";

export class LoginPage extends BasePage {
  protected get usernameInpt(): string {
    return "#username";
  }
  protected get passwordInpt(): string {
    return "#password";
  }
  protected get submitBtn(): Locator {
    return this.page.locator("button[type='submit']");
  }
  protected get flashMessages(): string {
    return "#flash-messages";
  }
  constructor(page: Page) {
    super(page);
  }

  public async visit() {
    await this.page.goto("/login");
  }

  public async login(username: string, password: string) {
    await this.page.type(this.usernameInpt, username);
    await this.page.type(this.passwordInpt, password);
    await WebButtonHelper.click(this.submitBtn, ButtonType.LEFT);
  }

  public async isUserlogged() {
    await this.page.waitForSelector(this.flashMessages);
    const text = await this.page.locator(this.flashMessages).innerText();
    this.logAssert("You logged into a secure area!", text);
  }
}
