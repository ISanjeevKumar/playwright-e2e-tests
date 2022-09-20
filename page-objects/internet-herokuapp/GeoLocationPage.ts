import { expect, Page } from "@playwright/test";
import { WebElementHelper } from "../../libs/WebElementHelper";
import { BasePage } from "../BasePage";

export class GeoLocationPage extends BasePage {
  protected get Latitude() {
    return this.page.locator("#lat-value");
  }
  protected get Longitude() {
    return this.page.locator("#long-value");
  }
  constructor(page: Page) {
    super(page);
  }
  public async visit() {
    await this.page.goto("/geolocation");
  }
  public async clickOnGeolocation() {
    await this.page.locator("text=Where am I?").click();
  }
  public async isGeolocationUpdated(
    expecteLatValue: string,
    expectedLongValue: string
  ) {
    let lat = await WebElementHelper.getText(this.Latitude);
    let longValue = await WebElementHelper.getText(this.Longitude);
    this.logAssert(expecteLatValue, lat, true);
    this.logAssert(expectedLongValue, longValue, true);
  }
}
