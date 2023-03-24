import { test, expect } from "../../config/api-base-test";

test(`Should be get the list of users`, async ({ request, apiActions, apiConfig, }) => {

    const response = await request.get(`${apiConfig.userEndpoint}`);

    const result = await apiActions.deserializeResponse<UserListResponse>(response);

    expect(result.total).toBeGreaterThan(0);
});
