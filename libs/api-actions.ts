import { APIResponse } from "playwright";

export class ApiAction {
  async deserializeResponse<TResponse>(response: APIResponse) {
    return (await response.json()) as TResponse;
  }
}
