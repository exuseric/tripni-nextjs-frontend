const TOP_LEVEL_PRIVATE_LINK = "/me";

const PUBLIC = {
  home: "/",
  feed: "/feed",
  search: "/search",
  feedTrips: "/feed/trips",
  feedRegions: "/feed/regions",
  feedCollections: "/feed/collections",
  auth: "/auth(.*)",
};

const PROTECTED = {
  trips: `${TOP_LEVEL_PRIVATE_LINK}/trips`,
  profile: `${TOP_LEVEL_PRIVATE_LINK}`,
  createTrip: `${TOP_LEVEL_PRIVATE_LINK}/trips/create`,
};

const API = {
  trips: "/trips",
  users: "/auth",
  destinations: "/destinations",
  generalCollections: "/general-collections",
  collections: "/collections",
  regions: "/regions",
};

const AUTH = {
  redirectTo: "/auth",
  redirectAfterSignIn: "/",
};

const PAGES = {
  PUBLIC,
  PROTECTED
};

export const LINKS = {
  PUBLIC,
  PROTECTED,
  API,
  AUTH,
  PAGES
}