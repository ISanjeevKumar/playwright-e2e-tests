import { test as baseTest } from "@playwright/test";
import * as userdata from "../data/login-data.json";
import { User } from "../data/data-model/user-data";
import { getUiConfig } from "./ui-env-config";
import App from "../page-objects/App";

type Pages = {
  sauceDemoApp: App;
};

type Users = {
  standardUser: User;
  lockedOutUser: User;
  problemUser: User;
  performanceGlitchUser;
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
  problemUser: async ({}, use) => {
    const user = users.find((data) => data.username === "problem_user");
    await use(new User(user?.username, user?.password));
  },
  sauceDemoApp: async ({ page }, use) => {
    await use(new App(page, uiConfig));
  },
});

export { expect } from "@playwright/test";
