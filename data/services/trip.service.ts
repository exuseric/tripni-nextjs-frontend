import { CreateTrip, Trip } from "@/data/models/trip.model";
import { LINKS } from "@/common/constants/url.constant";
import { BaseService } from "@/data/services/base.service";
import { httpClient } from "@/data/services/lib/create-http-client";

class TripService extends BaseService<Trip, CreateTrip> {
  constructor(path = LINKS.API.trips) {
    super(path, httpClient);
  }

  private scope(subPath: string): TripService {
    return new TripService(`${this.path}/${subPath}`);
  }

  trip(tripId: Trip["id"]) {
    return this.scope(tripId);
  }
}

export const tripService = (path?: string) => new TripService(path);
