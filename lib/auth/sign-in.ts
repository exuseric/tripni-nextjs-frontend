"use server";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const { data, error } = await auth.signIn.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (error) return { error: error.message };
  redirect("/dashboard");
}
