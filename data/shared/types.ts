export type OrderDirection = 'asc' | 'desc';

export type PaginationParams = {
    limit: number;
    offset?: number;
}

export type OrderParams = {
    column: string;
    direction?: OrderDirection;
}

export type FilterParams = {
    [key: string]: string | number | boolean | null | undefined;
}