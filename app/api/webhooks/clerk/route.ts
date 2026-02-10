import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  const { id } = evt.data;

  if (evt.type === "user.created" || evt.type === "user.updated") {
    const data = evt.data;

    // Safely extract email
    const email = data.email_addresses?.[0]?.email_address;

    // Construct full name
    const firstName = data.first_name || "";
    const lastName = data.last_name || "";
    const fullName = [firstName, lastName].filter(Boolean).join(" ") || null;

    await db
      .insert(user)
      .values({
        id: id as string,
        email: email,
        name: fullName,
        avatarUrl: data.image_url || null,
      })
      .onConflictDoUpdate({
        target: user.id,
        set: {
          email: email,
          name: fullName,
          avatarUrl: data.image_url || null,
          updatedAt: new Date().toISOString(),
        },
      });
  }

  if (evt.type === "user.deleted") {
    await db.delete(user).where(eq(user.id, id as string));
  }

  return new Response("OK", { status: 200 });
}
