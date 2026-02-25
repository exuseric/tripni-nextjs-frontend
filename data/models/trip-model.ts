import { trip } from "@/server/db/schema";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const TripModel = trip;
export type TripModelSelect = Omit<InferSelectModel<typeof trip>, "userId">;
export type TripModelInsert = Omit<InferInsertModel<typeof trip>, "userId">;
export type TripModelUpdate = Partial<Omit<InferInsertModel<typeof trip>, "userId">>;
