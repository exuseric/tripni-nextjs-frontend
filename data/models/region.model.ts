export interface CreateRegion {
    name: string;
    description?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
}

export interface Region {
    id: string;
    name: string;
}