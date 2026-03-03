import { changePasswordSchema, signUpZodSchema } from "@/common/zod-schema";
import * as z from "zod";

export type SignUpType = z.input<typeof signUpZodSchema>;
export type ChangePasswordType = z.input<typeof changePasswordSchema>;

export type MainNavigationLinksType = {
  label: string;
  href: string;
}[];
