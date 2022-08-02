import { test as base } from "@playwright/test";
import { UserCreds } from "../modal-objects/UserCreds";
import * as userdata from "../data/user/user-creds.json";

export const test = base.extend<{ userCreds: UserCreds }>({
  userCreds: new UserCreds(userdata),
});

export const addInfo = (testDetails: object) => {
  for (const testInfo in testDetails) {
    base.info().annotations.push({
      type: testInfo,
      description: testDetails[testInfo],
    });
  }
};

export { expect } from "@playwright/test";
