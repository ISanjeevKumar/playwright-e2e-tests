import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {
  protected get usernameInpt(): string {
    return "#username";
  }
  protected get passwordInpt(): string {
    return "#password";
  }
  protected get submitBtn(): string {
    return "button[type='submit']";
  }
  protected get flashMessages(): string {
    return "#flash-messages";
  }

  public async visit() {
    this.page.goto("/login");
  }

  public async login(username: string, password: string) {
    await this.page.type(this.usernameInpt, username);
    await this.page.type(this.passwordInpt, password);
    await this.page.click(this.submitBtn);
  }

  public async isUserlogged() {
    await this.page.waitForSelector(this.flashMessages);
    const text = await this.page.locator(this.flashMessages).innerText();
    this.logAssert("You logged into a secure area!", text);
  }
}
