import { auth } from "@/lib/auth/server";
import { SignUpType } from "@/shared/types";

export async function emailSignUp({ email, password, name }: SignUpType) {
  const { data, error } = await auth.signUp.email({
    email,
    password,
    name,
  });
  return { data, error };
}
