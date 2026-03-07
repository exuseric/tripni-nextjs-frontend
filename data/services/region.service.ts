import { LINKS } from "@/common/constants/url.constant";
import { httpClient } from "@/data/services/lib/create-http-client";
import { BaseService } from "./base.service";
import { CreateRegion, Region } from "@/data/models/region.model";

class RegionService extends BaseService<Region, CreateRegion> {
    constructor(path = LINKS.API.regions) {
        super(path, httpClient);
    }
}

export const regionService = (path?: string) => new RegionService(path);