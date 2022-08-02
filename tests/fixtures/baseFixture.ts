import { test as base } from "@playwright/test";
import { UserCreds } from "../../modal-objects/UserCreds";
import * as userdata from "../../data/user-creds.json";

const test = base.extend<{ userCreds: UserCreds }>({
  userCreds: new UserCreds(userdata),
});

export default test;
