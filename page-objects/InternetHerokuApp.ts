import { Page } from "@playwright/test";
import { GeoLocationPage } from "./internet-herokuapp/GeoLocationPage";
import { LoginPage } from "./internet-herokuapp/LoginPage";

export class InternetHerokuApp {
  private loginPage: LoginPage;
  private geoLocationPage: GeoLocationPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage() {
    return this.loginPage ?? (this.loginPage = new LoginPage(this.page));
  }
  public get GeoLocationPage() {
    return (
      this.geoLocationPage ??
      (this.geoLocationPage = new GeoLocationPage(this.page))
    );
  }
}
