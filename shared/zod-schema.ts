import * as z from "zod";

export const signUpZodSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(8),
});
