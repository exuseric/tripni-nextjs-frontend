import {auth} from "@/lib/auth/server";
import {signUpZodSchema} from "@/shared/zod-schema";
import {redirect} from "next/navigation";
import {AUTH_CONSTANTS} from "@/shared/constants";
import {validateFormData} from "@/lib/auth/utils/validate-form-data";

export async function emailSignUp(formData: FormData) {
    const validatedFields = validateFormData({schema: signUpZodSchema, formData});

    if (validatedFields.error) {
        return {
            error: validatedFields.error
        };
    }

    const {email, password, name} = validatedFields.data;

    const {error} = await auth.signUp.email({
        email,
        password,
        name,
    });

    if (error) {
        return {serverError: "Email already exists."}
    }

    redirect(AUTH_CONSTANTS.redirectTo)
}