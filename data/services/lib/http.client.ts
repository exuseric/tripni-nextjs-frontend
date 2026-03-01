import { APIResponse, RequestOptions } from "./types";

export class HttpClient {
    constructor(
        private baseUrl: string,
        private getAuthHeaders: () => Promise<Record<string, string>>
    ) {}

    async request<R>(path: string, options: RequestOptions): Promise<APIResponse<R>> {
        const { body, headers, signal, method } = options;

        const finalHeaders: Record<string, string> = {
            "Content-Type": "application/json",
            ...headers,
        };

        const res = await fetch(`${this.baseUrl}${path}`, {
            method,
            headers: finalHeaders,
            body: body !== undefined ? JSON.stringify(body) : undefined,
            signal,
        });

        if (!res.ok) {
            const fallback: APIResponse<null> = {
                error: true,
                message: res.statusText,
                statusCode: res.status,
                data: null,
            };
            return res.json().catch(() => fallback);
        }

        return { data: await res.json(), error: false };
    }

    async authenticatedRequest<R>(path: string, options: RequestOptions): Promise<APIResponse<R>> {
        const authHeaders = await this.getAuthHeaders();
        return this.request<R>(path, {
            ...options,
            headers: { ...authHeaders, ...options.headers },
        });
    }
}