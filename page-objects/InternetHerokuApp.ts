import { Page } from "@playwright/test";
import { LoginPage } from "./internet-herokuapp/LoginPage";

export class InternetHerokuApp {
  readonly loginPage: LoginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage() {
    return this.loginPage ?? new LoginPage(this.page);
  }
}
