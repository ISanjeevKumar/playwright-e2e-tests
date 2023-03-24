import { test, expect } from "../../config/api-base-test";

test(`Should be create new user`, async ({ request, apiActions, apiConfig, }) => {
    const requestBody = {
        "name": "morpheus",
        "job": "leader"
    }
    const response = await request.post(`${apiConfig.apiBaseUrl}${apiConfig.createUserEndpoint}`, {
        data: {
            body: requestBody
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    await expect(response.ok()).toBeTruthy();
    const createdUser = await apiActions.deserializeResponse<CreateUser>(response);
    await expect(createdUser).toMatchObject({
        body: { name: "morpheus", job: "leader" }
    });
});
