import { test, expect } from "../../config/api-base-test";

test(`Should be create new user`, async ({ apiActions, apiConfig }) => {
    const requestBody = {
        name: "morpheus",
        job: "leader",
    };
    const requestHeaders = {
        "Content-Type": "application/json",
    };
    // Deserialize the response into a strongly-typed object
    const response = await apiActions.postAndDeserializedResponse<CreateUser>(
        apiConfig.createUserEndpoint,
        requestBody,
        requestHeaders
    );
    // Assert that the user was created with the correct name
    expect(response.body.name).toBe("morpheus");
});
