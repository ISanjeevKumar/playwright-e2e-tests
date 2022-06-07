import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class App {
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  public get LoginPage() {
    return this.loginPage;
  }
}
