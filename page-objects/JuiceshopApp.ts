import { Page } from "@playwright/test";
import { LoginPage } from "./juiceshop-app/LoginPage";

export class JuiceshopApp {
  readonly loginPage: LoginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage() {
    return this.loginPage ?? new LoginPage(this.page);
  }
}
