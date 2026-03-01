import {HttpClient} from './lib/http.client';

export class BaseService<TSelect, TInsert> {
    constructor(
        protected path: string,
        protected client: HttpClient
    ) {}

    findAll(signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect[]>(this.path, { method: "GET", signal });
    }

    find(signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.path, { method: "GET", signal });
    }

    create(data: TInsert, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.path, { method: "POST", body: data, signal });
    }

    update(data: Partial<TInsert>, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.path, { method: "PATCH", body: data, signal });
    }

    replace(data: TInsert, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.path, { method: "PUT", body: data, signal });
    }

    remove(signal?: AbortSignal) {
        return this.client.authenticatedRequest<void>(this.path, { method: "DELETE", signal });
    }
}