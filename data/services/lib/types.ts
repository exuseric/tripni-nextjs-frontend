export type Options<T> = {
    method: "GET" | "POST" | "PATCH" | "DELETE",
    body?: BodyInit | T,
    headers?: HeadersInit
}