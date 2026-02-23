import {user} from '@/server/db/schema';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const UserModel = user;
export type UserModelSelect = InferSelectModel<typeof user>
export type UserModelInsert = InferInsertModel<typeof user>