import { test as testModule } from "@playwright/test";
import { RegisterPage } from "../page-objects/RegisterPage";
import * as userdata from "../data/user/register-data.json";
import { RegisterModal } from "../modal-objects/RegisterModal";

type Pages = {
  RegisterPage: RegisterPage;
};

type Testdata = {
  registerdata: RegisterModal;
};
export const test = testModule.extend<Pages & Testdata>({
  registerdata: async ({}, use) => {
    await use(new RegisterModal(userdata));
  },
  RegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from "@playwright/test";
