import test from "@playwright/test";
import { InternetHerokuApp } from "../../page-objects/InternetHerokuApp";

test.describe("geolocation tests", () => {
  test("Should be able to update geolocation", async ({ browser }) => {
    const context = await browser.newContext({
      geolocation: { longitude: 48.858455, latitude: 2.294474 },
      permissions: ["geolocation"],
    });
    const page = await context.newPage();
    const app = new InternetHerokuApp(page);
    await app.GeoLocationPage.visit();
    await app.GeoLocationPage.clickOnGeolocation();
    await app.GeoLocationPage.isGeolocationUpdated("2.294474", "48.858455");
  });
});
