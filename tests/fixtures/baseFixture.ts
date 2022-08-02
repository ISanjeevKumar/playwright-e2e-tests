import { test as base } from "@playwright/test";
import { UserCreds } from "../../modal-objects/UserCreds";
import * as userdata from "../../data/user-creds.json";

const test = base.extend<{ UserCreds: UserCreds }>({
  UserCreds: new UserCreds(userdata),
});

export default test;
