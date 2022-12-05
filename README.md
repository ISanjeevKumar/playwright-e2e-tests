# playwright-e2e-tests [![Playwright Tests](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml)

This repository contains Playwright E2E Tests for testing web applications. It is intended to help developers/QAs quickly and easily set up automated end-to-end tests for their web applications.

Playwright is an open source Node.js library for automating the Chrome, Firefox, and WebKit browsers. It enables cross-platform end-to-end testing of web applications by providing APIs to control browsers and emulate user actions.

## Test framework Capabilities

- [x] Page Object Model - App Design Pattern
- [x] Page Object Model - Fixture based Design Pattern
- [x] Data Driven Test using data modal objects
- [x] Parallel execution
- [x] Retry on failure
- [x] Cross browser testing
- [x] Enabled inbuilt report
- [x] Custom Wrapper methods

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


## How to run tests

```
npx playwright test
```

# Page object model Design Pattern

## Approach 1 : App Design Pattern

### Page Layer

```ts
export class RegisterPage extends BasePage {
  protected get myAccountLnk() {
    return this.page.locator('span:has-text("My Account")');
  }
  protected get registerLnk() {
    return this.page.locator("#top >> text=Register");
  }
  constructor(page: Page) {
    super(page);
  }
  public async navigateToRegister() {
    await this.page.goto("/");
    await this.myAccountLnk.click();
    await this.registerLnk.click();
  }
}
```

### App Class

```ts
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
```

### Test layer

```ts
test("Should be able to register new user", async ({ page }) => {
  const app = new App(page);
  await app.RegisterPage.navigateToRegister();
  await expect(page).toHaveTitle("Register Account");
  await app.RegisterPage.registerAccount();
});
```

## Approach 2 : Predefined Page Objects using Fixture

### Custom fixture

```ts
type Pages = {
  RegisterPage: RegisterPage;
};

export const test = base.extend<Pages>({
  RegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});
```

### Test layer

```ts
test("Should be able to register new user", async ({ page, RegisterPage }) => {
  await RegisterPage.navigateToRegister();
  await expect(page).toHaveTitle("Register Account");
  await RegisterPage.registerAccount();
});
```

The repository is continually updated with new features and examples. Contributions and feedback are welcome!
