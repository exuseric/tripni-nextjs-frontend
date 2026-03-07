import { FilterParams, OrderParams, PaginationParams } from "@/data/shared/types";

export class QueryBuilder {
    private params: URLSearchParams;

    constructor(existing?: URLSearchParams) {
        this.params = new URLSearchParams(existing);
    }

    /** Append or overwrite a single key/value pair */
    set(key: string, value: string | number | boolean): this {
        this.params.set(key, String(value));
        return this;
    }

    /** Append a value to a key (allows duplicate keys, e.g. ids[]=1&ids[]=2) */
    append(key: string, value: string | number | boolean): this {
        this.params.append(key, String(value));
        return this;
    }

    /** Remove a key entirely */
    delete(key: string): this {
        this.params.delete(key);
        return this;
    }

    pagination({ limit, offset = 0 }: PaginationParams): this {
        this.params.set('limit', String(limit));
        this.params.set('offset', String(offset));
        return this;
    }

    order({ column, direction = 'asc' }: OrderParams): this {
        this.params.set('order', column);
        this.params.set('direction', direction);
        return this;
    }

    /** Apply a plain object of filters — undefined/null values are skipped */
    filter(filters: FilterParams): this {
        for (const [key, value] of Object.entries(filters)) {
            if (value === undefined || value === null) continue;
            this.params.set(key, String(value));
        }
        return this;
    }

    /** Produce the final query string (without leading "?") */
    build(): string {
        return this.params.toString();
    }

    /** Produce a full path string, appending the query string when non-empty */
    buildPath(basePath: string): string {
        const qs = this.build();
        return qs ? `${basePath}?${qs}` : basePath;
    }
}