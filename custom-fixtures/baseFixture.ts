import { test as base } from "@playwright/test";
import { UserModal } from "../modal-objects/internet-herokuapp/UserModal";
import * as userdata from "../data/user/user-creds.json";
import * as registerdata from "../data/realworld-data/register-user.json";
import { RegisterModal } from "../modal-objects/realworld/RegisterModal";
import { GeoLocation } from "../modal-objects/internet-herokuapp/GeoLocationModal";

export const test = base.extend<{
  userCreds: UserModal;
  register: RegisterModal;
  geoLocation: GeoLocation;
}>({
  userCreds: new UserModal(userdata),
  register: new RegisterModal(registerdata),
  geoLocation: new GeoLocation(null),
});

export { expect } from "@playwright/test";
