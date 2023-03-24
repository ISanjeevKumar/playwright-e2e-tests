import { expect, test } from "../../config/custom-fixture";

test(`Should be get the list of users`, async ({ request, apiActions }) => {
  const response = await request.get(`https://reqres.in/api/users?page=2`);
  const result = await apiActions.deserializeResponse<UserListResponse>(
    response
  );
  expect(result.total).toBeGreaterThan(0);
});
