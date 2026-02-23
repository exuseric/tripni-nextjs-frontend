import {boolean, doublePrecision, integer, jsonb, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';
import {sql} from 'drizzle-orm';


export const user = pgTable(
  "user",
  {
    userId: text("user_id").primaryKey().notNull(),
    firstName: text("first_name").default(""),
    lastName: text("last_name").default(""),
    email: text().notNull(),
    avatarUrl: text("avatar_url"),
    emailVerified: boolean("email_verified").default(false),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow(),
  }
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
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).defaultNow(),
  }
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
  }
);