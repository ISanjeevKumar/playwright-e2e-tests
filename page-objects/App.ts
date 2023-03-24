import { Page } from "@playwright/test";
import { EnvConfig } from "../config/ui-env-config";
import LoginPage from "./login-page";

export default class App {
  private readonly page: Page;
  private readonly envConfig: EnvConfig;

  private _loginPage: LoginPage;

  constructor(page: Page, envConfig: EnvConfig) {
    this.page = page;
    this.envConfig = envConfig;
  }

  public get loginPage(): LoginPage {
    return (
      this._loginPage ??
      (this._loginPage = new LoginPage(this.page, this.envConfig))
    );
  }
}
