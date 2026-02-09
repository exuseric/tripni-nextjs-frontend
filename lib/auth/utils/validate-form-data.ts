import {z} from "zod";

export const validateFormData = <S extends z.ZodTypeAny>({schema, formData}: {
    schema: S,
    formData: FormData
}) => {
    const validatedFields = schema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            data: null as null,
            error: z.treeifyError(validatedFields.error),
        };
    }

    return {
        data: validatedFields.data as z.infer<S>,
        error: null as null,
    };
};