import { Page } from "@playwright/test";
import { RegisterPage } from "./RegisterPage";

export default class App {
  readonly page: Page;
  readonly registerPage: RegisterPage;

  constructor(page: Page) {
    this.page = page;
  }

  public get RegisterPage() {
    return this.registerPage ?? new RegisterPage(this.page);
  }
}
