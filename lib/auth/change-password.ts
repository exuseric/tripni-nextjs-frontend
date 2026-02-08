import { auth } from "@/lib/auth/server";
import { ChangePasswordType } from "@/shared/types";

export async function changePassword({ currentPassword, newPassword }: ChangePasswordType) {
  const { data, error } = await auth.changePassword({
    currentPassword,
    newPassword,
    revokeOtherSessions: true,
  });

  return { data, error };
}
