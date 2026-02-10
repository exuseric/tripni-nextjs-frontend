import {
  pgTable,
  unique,
  pgPolicy,
  text,
  boolean,
  timestamp,
  foreignKey,
  serial,
  doublePrecision,
  jsonb,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { authenticatedRole } from "drizzle-orm/neon";

export const user = pgTable(
  "user",
  {
    id: text().primaryKey().notNull(),
    name: text(),
    email: text().notNull(),
    avatarUrl: text("avatar_url"),
    emailVerified: boolean("email_verified").default(false),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow(),
  },
  (table) => [
    unique("user_email_key").on(table.email),
    pgPolicy("manage_own_user", {
      as: "permissive",
      for: "all",
      to: authenticatedRole,
      using: sql`(id = auth.user_id())`,
      withCheck: sql`(id = auth.user_id())`,
    }),
  ],
);

export const trip = pgTable(
  "trip",
  {
    id: serial().primaryKey().notNull(),
    name: text().notNull(),
    description: text(),
    latitude: doublePrecision(),
    longitude: doublePrecision(),
    country: text(),
    startDate: timestamp("start_date", { withTimezone: true, mode: "string" }),
    endDate: timestamp("end_date", { withTimezone: true, mode: "string" }),
    coverImage: text("cover_image"),
    gallery: jsonb().default([]),
    isFavorite: boolean("is_favorite").default(false),
    isPublic: boolean("is_public").default(false),
    userId: text("user_id")
      .default(sql`(auth.user_id())`)
      .notNull(),
    parentTripId: integer("parent_trip_id"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "trip_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.parentTripId],
      foreignColumns: [table.id],
      name: "trip_parent_trip_id_fkey",
    }).onDelete("cascade"),
    pgPolicy("modify_own_trips", {
      as: "permissive",
      for: "all",
      to: authenticatedRole,
      using: sql`(user_id = auth.user_id())`,
      withCheck: sql`(user_id = auth.user_id())`,
    }),
    pgPolicy("view_trips", { as: "permissive", for: "select", to: ["public"] }),
  ],
);

export const destination = pgTable(
  "destination",
  {
    id: serial().primaryKey().notNull(),
    name: text().notNull(),
    description: text(),
    latitude: doublePrecision(),
    longitude: doublePrecision(),
    country: text(),
    coverImage: text("cover_image"),
    gallery: jsonb().default([]),
    isFavorite: boolean("is_favorite").default(false),
    tripId: integer("trip_id").notNull(),
    userId: text("user_id")
      .default(sql`(auth.user_id())`)
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.tripId],
      foreignColumns: [trip.id],
      name: "destination_trip_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "destination_user_id_fkey",
    }).onDelete("cascade"),
    pgPolicy("modify_own_destinations", {
      as: "permissive",
      for: "all",
      to: authenticatedRole,
      using: sql`(user_id = auth.user_id())`,
      withCheck: sql`(user_id = auth.user_id())`,
    }),
    pgPolicy("view_destinations", { as: "permissive", for: "select", to: ["public"] }),
  ],
);
