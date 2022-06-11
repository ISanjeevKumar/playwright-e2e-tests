import { expect, Page } from "@playwright/test";
export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async visit() {
    this.page.goto("/login");
  }

  public async login(username: string, password: string) {
    await this.page.type("#username", username);
    await this.page.type("#password", password);
    await this.page.click("button[type='submit']");
  }

  public async isUserlogged() {
    await this.page.waitForSelector("#flash-messages");
    const text = await this.page.locator("#flash-messages").innerText();
    expect(text).toContain("You logged into a secure area!");
  }
}
