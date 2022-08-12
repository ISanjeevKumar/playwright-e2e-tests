import { Page } from "@playwright/test";
import { RegisterPage } from "./real-world-app/RegisterPage";

export class RealWorldApp {
  readonly registerPage: RegisterPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get RegisterPage() {
    return this.registerPage ?? new RegisterPage(this.page);
  }
}
