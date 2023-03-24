import { test, expect } from "../../config/api-base-test";

test(`Should be create new user`, async ({ request, apiActions, apiConfig, }) => {
    const requestBody = {
        name: "morpheus",
        job: "leader",
    };
    const requestHeaders = {
        "Content-Type": "application/json",
    };

    const response = await request.post(
        `${apiConfig.createUserEndpoint}`,
        {
            data: { body: requestBody },
            headers: requestHeaders,
        }
    );

    // Assert that the response status code is 200 OK
    await expect(response.ok()).toBeTruthy();

    // Deserialize the response into a strongly-typed object
    const result = await apiActions.deserializeResponse<CreateUser>(response);

    // Assert that the user was created with the correct name
    expect(result.body.name).toBe("morpheus");
});
