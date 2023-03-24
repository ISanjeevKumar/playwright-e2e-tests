import { test, expect } from "../../config/api-base-test";

test(`Should be get the list of users`, async ({ apiActions, apiConfig }) => {
    const response = await apiActions.getAndDeserializeJson<UserListResponse>(`${apiConfig.userEndpoint}`);
    expect(response.total).toBeGreaterThan(0);
});
