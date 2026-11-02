import { getDb } from "@/db";
import { contactRequests } from "@/db/schema";

export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
};

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

function makeReference() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const random = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `JHI-${stamp}${random}`;
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = asText(payload.name);
  const phone = asText(payload.phone);
  const email = asText(payload.email);
  const service = asText(payload.service);
  const message = asText(payload.message);

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120) errors.name = "Please enter your full name.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) errors.email = "Enter a valid email address.";
  if (!service) errors.service = "Select the service you need.";
  if (message.length < 10 || message.length > 4000)
    errors.message = "Add a few details about your request.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const reference = makeReference();
    await getDb().insert(contactRequests).values({
      reference,
      name,
      phone,
      email,
      service,
      message,
    });
    return Response.json({ ok: true, reference });
  } catch {
    return Response.json(
      { ok: false, error: "Could not save the request right now." },
      { status: 500 },
    );
  }
}
