import { Page } from "playwright";
import { EnvConfig } from "../config/ui-env-config";
import { User } from "../data/data-model/user-data";
import { BasePage } from "./base-page";

export default class LoginPage extends BasePage {
  protected get usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  protected get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  protected get loginBtn() {
    return this.page.locator('[data-test="login-button"]');
  }

  protected get errorLnk() {
    return this.page.locator('[data-test="error"]');
  }
  constructor(page: Page, config: EnvConfig) {
    super(page, config);
  }

  public async loadPage() {
    await this.page.goto(this.envConfig.baseUrl);
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async loginAsUser(userType: User) {
    await this.login(userType.username, userType.password);
  }

  public async verifyLockedOutErrorMessage(message: string) {
    await this.assertText(this.errorLnk, message);
  }

  private async login(username: string, password: string) {
    await this.pageActions.enterText(this.usernameInput, username);
    await this.pageActions.enterText(this.passwordInput, password);
    await this.pageActions.clickOnElement(this.loginBtn);
  }
}
