export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type RequestOptions<T = unknown> = {
    method: HttpMethod;
    body?: T;
    headers?: Record<string, string>;
    signal?: AbortSignal;
};

export type APIResponse<R> = {
    error: boolean;
    data: R | null;
    message?: string;
    statusCode?: number;
};