import { QueryBuilder } from '../builders/query.builder';
import { FilterParams, OrderParams, PaginationParams } from '@/data/shared/types';
import { HttpClient } from './lib/http.client';

export class BaseService<TSelect, TInsert> {
    private query: QueryBuilder;

    constructor(
        protected path: string,
        protected client: HttpClient,
        query?: QueryBuilder
    ) {
        this.query = query ? new QueryBuilder(new URLSearchParams(query.build())) : new QueryBuilder();
    }

    private _scope(mutate: (qb: QueryBuilder) => void): BaseService<TSelect, TInsert> {
        const next = new QueryBuilder(new URLSearchParams(this.query.build()));
        mutate(next);
        return new BaseService<TSelect, TInsert>(this.path, this.client, next);
    }

    pagination(params: PaginationParams): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.pagination(params));
    }

    order(params: OrderParams): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.order(params));
    }

    filter(filters: FilterParams): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.filter(filters));
    }

    /** Low-level escape hatch: set any arbitrary key/value */
    param(key: string, value: string | number | boolean): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.set(key, value));
    }

    /** Low-level escape hatch: append a repeated key */
    appendParam(key: string, value: string | number | boolean): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.append(key, value));
    }

    /** Remove a previously set param */
    removeParam(key: string): BaseService<TSelect, TInsert> {
        return this._scope(qb => qb.delete(key));
    }

    private get requestPath(): string {
        return this.query.buildPath(this.path);
    }

    findAll(signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect[]>(this.requestPath, { method: "GET", signal });
    }

    find(signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.requestPath, { method: "GET", signal });
    }

    create(data: TInsert, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.requestPath, { method: "POST", body: data, signal });
    }

    update(data: Partial<TInsert>, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.requestPath, { method: "PATCH", body: data, signal });
    }

    replace(data: TInsert, signal?: AbortSignal) {
        return this.client.authenticatedRequest<TSelect>(this.requestPath, { method: "PUT", body: data, signal });
    }

    remove(signal?: AbortSignal) {
        return this.client.authenticatedRequest<void>(this.requestPath, { method: "DELETE", signal });
    }
}