import { HttpClient } from "./http.client";
import { getToken } from "@/data/services/utils/get-token";

async function getAuthHeaders(): Promise<Record<string, string>> {
  const token = await getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_URL!, getAuthHeaders);
