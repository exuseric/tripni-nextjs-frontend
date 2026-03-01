import "server-only";
import { cache } from "react";
import { auth } from "@clerk/nextjs/server";

export const getToken = cache(async (): Promise<string | null> => {
    const { getToken } = await auth();
    return await getToken();
});