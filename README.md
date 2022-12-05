# playwright-e2e-tests [![Playwright Tests](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml)

This repository contains Playwright E2E Tests for testing web applications. It is intended to help developers quickly and easily set up automated end-to-end tests for their web applications.

Playwright is an open source Node.js library for automating the Chrome, Firefox, and WebKit browsers. It enables cross-platform end-to-end testing of web applications by providing APIs to control browsers and emulate user actions.

The repository is continually updated with new features and examples. Contributions and feedback are welcome!

## Test framework Capabilities

- [x] Page Object Model - App Design Pattern
- [x] Data Driven Test using data modal objects
- [x] Parallel execution
- [x] Retry on failure
- [x] Cross browser testing
- [x] Enabled inbuilt report
- [x] Custom Wrapper methods
- [x] Geolocation based tests

## Why Playwright ?

- Auto-wait capability which makes test more stable and reliable
- Works on all major browsers like Chrome, Firefox, Opera, Safari
- Works on any OS and supports native mobile emulation.
- Works with any language - Javascript , TypeScript , Java , Python , C#
- Inbuilt features called Traces which can take automatic screenshots , test video , flaky test retry and logging mechanism
- Provides inspector tool which help us to monitor and debug every step of execution
- Inbuilt API testing libraries to fire the network calls on fly within Web Application
- Provides browser context to share data between tests
- Provides codegen tool which generates test script by recording actions.

## How to install

### Run from your project's root directory

```
npm init playwright@latest
```

## How to run tests

```
npx playwright test
```

# Design Pattern

## Page object model for Internet-herokuapp

### Page Layer

```ts
export class LoginPage extends BasePage {
  protected get usernameInpt(): string {
    return "#username";
  }
  protected get passwordInpt(): string {
    return "#password";
  }
  protected get submitBtn(): Locator {
    return this.page.locator("button[type='submit']");
  }
  constructor(page: Page) {
    super(page);
  }

  public async login(username: string, password: string) {
    await this.page.type(this.usernameInpt, username);
    await this.page.type(this.passwordInpt, password);
    await WebButtonHelper.click(this.submitBtn, ButtonType.LEFT);
  }
}
```

### App Class

```ts
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
```

### Test layer

```ts
test.describe("Login - e2e test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });
  test("Should be able to login with valid user credentials", async ({  page,  userCreds, }) => {
    const app = new InternetHerokuApp(page);
    await app.LoginPage.login(userCreds.username, userCreds.password);
    await expect(page).toHaveTitle("The Internet");
    await app.LoginPage.isUserlogged();
  });
```
