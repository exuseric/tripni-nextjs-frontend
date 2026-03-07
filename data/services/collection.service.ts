import { LINKS } from "@/common/constants/url.constant";
import { BaseService } from "./base.service";
import { httpClient } from "./lib/create-http-client";

class CollectionService<TSelect, TInsert> extends BaseService<TSelect, TInsert> {
    constructor(path = LINKS.API.collections) {
        super(path, httpClient);
    }
}

export const collectionService = <TSelect, TInsert>(path?: string) => new CollectionService<TSelect, TInsert>(path);