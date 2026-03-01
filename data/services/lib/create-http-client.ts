import { HttpClient } from "./http.client";
import { getToken } from "@/data/services/utils/get-token";

async function getAuthHeaders(): Promise<Record<string, string>> {
  const token = await getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined");
}

export const httpClient = new HttpClient(apiUrl, getAuthHeaders);
