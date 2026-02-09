"use server";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import {AUTH_CONSTANTS} from "@/shared/constants";

export async function signOut() {
  await auth.signOut();
  redirect(AUTH_CONSTANTS.redirectTo);
}