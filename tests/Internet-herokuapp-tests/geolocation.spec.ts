import { test } from "../../custom-fixtures/baseFixture";
import { InternetHerokuApp } from "../../page-objects/InternetHerokuApp";

test.describe("geolocation tests", () => {
  test("Should be able to update geolocation", async ({
    browser,
    geoLocation,
  }) => {
    const context = await browser.newContext({
      geolocation: {
        longitude: parseFloat(geoLocation.longitude),
        latitude: parseFloat(geoLocation.latitude),
      },
      permissions: ["geolocation"],
    });
    const page = await context.newPage();
    const app = new InternetHerokuApp(page);
    await app.GeoLocationPage.visit();
    await app.GeoLocationPage.clickOnGeolocation();
    await app.GeoLocationPage.isGeolocationUpdated(
      geoLocation.latitude,
      geoLocation.longitude
    );
  });
});
