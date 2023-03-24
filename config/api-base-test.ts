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
