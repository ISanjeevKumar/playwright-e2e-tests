import { Page } from "@playwright/test";
import LoginPage from "./login-page";

export default class App {
  private readonly page: Page;

  private _loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
  }

  public get loginPage(): LoginPage {
    return this._loginPage ?? (this._loginPage = new LoginPage(this.page));
  }
}
