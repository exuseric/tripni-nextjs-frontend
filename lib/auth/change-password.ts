import {auth} from "@/lib/auth/server";
import {validateFormData} from "@/lib/auth/utils/validate-form-data";
import {changePasswordSchema} from "@/shared/zod-schema";
import {redirect} from "next/navigation";
import {AUTH_CONSTANTS} from "@/shared/constants";

export async function changePassword(formData: FormData) {
  const validatedFields = validateFormData({schema: changePasswordSchema, formData})

  if(validatedFields.error) return { error: validatedFields.error }

  const { currentPassword, newPassword } = validatedFields.data;

  const { error } = await auth.changePassword({
    currentPassword,
    newPassword,
    revokeOtherSessions: true,
  });

  if(error) return { serverError: "Invalid current password." }

  redirect(AUTH_CONSTANTS.redirectTo)
}