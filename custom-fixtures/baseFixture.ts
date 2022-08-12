import { test as base } from "@playwright/test";
import { UserModal } from "../modal-objects/internet-herokuapp/UserModal";
import * as userdata from "../data/user/user-creds.json";
import * as registerdata from "../data/realworld-data/register-user.json";
import { RegisterModal } from "../modal-objects/realworld/RegisterModal";

export const test = base.extend<{
  userCreds: UserModal;
  register: RegisterModal;
}>({
  userCreds: new UserModal(userdata),
  register: new RegisterModal(registerdata),
});

export { expect } from "@playwright/test";
