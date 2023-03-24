import { expect } from "@playwright/test";
import { APIRequestContext, APIResponse } from "playwright";

export class ApiAction {
    private readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(endpoint: string, headers?: { [key: string]: string }) {
        return await this.request.get(`${endpoint}`, { headers: headers });
    }
    async getAndDeserializeJson<TResponse>(endpoint: string, headers?: { [key: string]: string }) {
        const response = await this.request.get(`${endpoint}`, { headers: headers });
        await expect(response, `Response should be OK`).toBeOK();
        return (await response.json()) as TResponse;
    }

    async post(endpoint: string, requestBody: any, headers?: { [key: string]: string }) {
        return await this.request.post(`${endpoint}`, {
            headers: headers,
            data: {
                body: requestBody,
            },
        });
    }

    async postAndDeserializedResponse<TResponse>(endpoint: string, body: any, headers?: { [key: string]: string }) {
        const response = await this.request.post(`${endpoint}`, {
            headers: headers,
            data: {
                body: body,
            },
        });
        await expect(response, `Response should be OK`).toBeOK();
        return (await response.json()) as TResponse;
    }
}
