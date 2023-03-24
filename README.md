# playwright-e2e-tests [![Playwright Tests](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/ISanjeevKumar/playwright-e2e-tests/actions/workflows/playwright.yml)

This repository contains Playwright E2E Tests for testing web applications.The repository is intended to be used as a reference point for test automation projects using Playwright and Page Object Model.

Playwright is an open source Node.js library for automating the Chrome, Firefox, and WebKit browsers. It enables cross-platform end-to-end testing of web applications by providing APIs to control browsers and emulate user actions.

## Test framework Capabilities

- [x] Page Object Model Design Pattern
- [x] Data Driven Test using data modal objects
- [x] Parallel execution
- [x] Retry on failure
- [x] Cross browser testing
- [x] Enabled inbuilt report
- [x] Custom Wrapper methods

## How to run tests

```
npx playwright test --config=playwright.ui.config.ts
```

or

```
npm run test:e2e
```

## Page object model Design Pattern

### Test

```ts
import { test } from "../../config/custom-fixture";

test(`Should be able to login`, async ({ sauceDemoApp, standardUser }) => {
  await sauceDemoApp.loginPage.loadPage();
  await sauceDemoApp.loginPage.loginAsUser(standardUser);
});
```

### SauceDemoApp Class - Manages all page objects

```ts
export default class App {
  private readonly page: Page;
  private readonly envConfig: EnvConfig;

  private _loginPage: LoginPage;

  constructor(page: Page, envConfig: EnvConfig) {
    this.page = page;
    this.envConfig = envConfig;
  }

  public get loginPage(): LoginPage {
    return (
      this._loginPage ??
      (this._loginPage = new LoginPage(this.page, this.envConfig))
    );
  }
}
```

### Page Class Example

```ts
export default class LoginPage extends BasePage {
  protected get usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  protected get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  protected get loginBtn() {
    return this.page.locator('[data-test="login-button"]');
  }

  constructor(page: Page, config: EnvConfig) {
    super(page, config);
  }

  public async loadPage() {
    await this.page.goto(this.envConfig.baseUrl);
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async loginAsUser(userType: User) {
    await this.login(userType.username, userType.password);
  }

  private async login(username: string, password: string) {
    await this.pageActions.enterText(this.usernameInput, username);
    await this.pageActions.enterText(this.passwordInput, password);
    await this.pageActions.clickOnElement(this.loginBtn);
  }
}
```

### Extending Playwright Test Library with Additional Functionality

- The test function is imported from the Playwright Test Library.
- The Pages type is defined to represent the pages of the application.
- The Users type is defined to represent the users of the application.
- The environment variable is created to store the current environment or the default environment ("production").
- The envConfig variable is created to store the configuration object for the current environment.
- The test function is extended to add additional Fixture for the pages and users of the application.

```ts
type Pages = {
  sauceDemoApp: App;
};

type Users = {
  standardUser: User;
  lockedOutUser: User;
};

const users: User[] = Object.values(userdata).map(
  (data: any) => new User(data.username, data.password)
);

const environment = process.env.ENVIRONMENT || "production";
const uiConfig = getUiConfig(environment);

export const test = baseTest.extend<Pages & Users>({
  standardUser: async ({}, use) => {
    const user = users.find((data) => data.username === "standard_user");
    await use(new User(user?.username, user?.password));
  },
  lockedOutUser: async ({}, use) => {
    const user = users.find((data) => data.username === "locked_out_user");
    await use(new User(user?.username, user?.password));
  },
  sauceDemoApp: async ({ page }, use) => {
    await use(new App(page, uiConfig));
  },
});

export { expect } from "@playwright/test";
```

## API test Example

### Test

```ts
import { test, expect } from "../../config/api-base-test";

test(`Should be get the list of users`, async ({ request, apiActions, apiConfig, }) => {

    const response = await request.get(`${apiConfig.apiBaseUrl}${apiConfig.userEndpoint}`);

    const result = await apiActions.deserializeResponse<UserListResponse>(response);

    expect(result.total).toBeGreaterThan(0);
});
```

### API base test

```ts
import { test as baseTest } from "@playwright/test";
import { ApiAction } from "../libs/api-actions";
import { ApiConfig, getApiConfig } from "./api-env-config";

type ApiTestObjects = {
  apiActions: ApiAction;
  apiConfig: ApiConfig;
};
const environment = process.env.ENVIRONMENT || "production";
const apiConfig = getApiConfig(environment);

export const test = baseTest.extend<ApiTestObjects>({
  apiActions: async ({}, use) => {
    await use(new ApiAction());
  },
  apiConfig: async ({}, use) => {
    await use(apiConfig);
  },
});

export { expect } from "@playwright/test";
```

## How to run Playwright test in Docker Container

1. Navigate to the project directory and create a Dockerfile with the below content.

```dockerfile
FROM mcr.microsoft.com/playwright:v1.28.0-focal

RUN mkdir /workdir

WORKDIR /workdir

COPY . /workdir/

RUN npx playwright install

RUN npm install

CMD ["npm", "run", "test"]
```

2. Add all the necessary dependencies for your project in package.json

3. Run the command ‘docker build -f ./Dockerfile . -t playwright-image’ to build your docker image.

4. Finally, run the command ‘docker run -it --name=playwright_container2 playwright-image’ to run your Playwright test automation.

The repository is continually updated with new features and examples. Contributions and feedback are welcome!
