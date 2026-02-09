"use server";
import {auth} from "@/lib/auth/server";
import {redirect} from "next/navigation";
import {AUTH_CONSTANTS} from "@/shared/constants";
import {signInSchema} from "@/shared/zod-schema";
import {validateFormData} from "@/lib/auth/utils/validate-form-data";

export async function signIn(formData: FormData) {
    const validatedFields = validateFormData({schema: signInSchema, formData});

    if(validatedFields.error) return {
        error: validatedFields.error
    }

    const {email, password} = validatedFields.data;

    const {error} = await auth.signIn.email({
        email,
        password
    });

    if (error) {
        return { serverError: "Invalid email or password." };
    }
    redirect(AUTH_CONSTANTS.redirectAfterSignIn);
}