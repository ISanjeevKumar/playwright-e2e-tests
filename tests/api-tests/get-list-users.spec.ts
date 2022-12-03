import { expect, test } from "@playwright/test";

test("should be able to get list of users", async ({ request }) => {
  // Create a request for client to interact with the server
  const responseBody = await request.get("/api/users?page=2", {
    headers: {
      accept: "application/xml",
    },
  });
  console.log(responseBody);
  expect(responseBody.ok()).toBeTruthy();
});
