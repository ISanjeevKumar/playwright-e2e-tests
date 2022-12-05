import { test as base } from "@playwright/test";
import { RegisterPage } from "../page-objects/RegisterPage";

type Pages = {
  RegisterPage: RegisterPage;
};

export const test = base.extend<Pages>({
  RegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from "@playwright/test";
