const TOP_LEVEL_PRIVATE_LINK = "/me";

const PUBLIC = {
  home: "/",
  feed: "/feed",
  search: "/search",
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
};

const AUTH = {
  redirectTo: "/auth",
  redirectAfterSignIn: "/",
};

export const LINKS = {
  PUBLIC,
  PROTECTED,
  API,
  AUTH,
};