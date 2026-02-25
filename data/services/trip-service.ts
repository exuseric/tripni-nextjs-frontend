import "server-only";
import { TripModelInsert, TripModelSelect } from "@/data/models/trip-model";
import { API_URLS } from "@/shared/constants";
import { BaseService } from "@/data/services/base-service";

type Path = keyof typeof API_URLS | (string & {});

class TripService extends BaseService<TripModelSelect, TripModelInsert> {
  constructor(path = API_URLS.trips) {
    super(path);
  }

  trip(tripId: TripModelSelect["id"]): this {
    this._path = `${this._path}/${tripId}`;
    return this;
  }

  setFavorite(isFavorite: boolean) {
    return this.options({ method: "PATCH", body: { isFavorite } }).withAuth<{ success: boolean }>();
  }

  setPublic(isPublic: boolean) {
    return this.options({ method: "PATCH", body: { isPublic } }).withAuth<{ success: boolean }>();
  }
}

export const tripService = (path?: Path) => new TripService(path);
