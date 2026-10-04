import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

// Saves the subscriber (so it appears in /admin/subscribers) and, if Resend
// is configured, also notifies the office. Succeeds if either step worked.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let email = "";

  try {
    const body = await request.json();
    email = String(body.email ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isEmail(email) || email.length > 320) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // 1) Save
  let saved = false;
  let alreadySubscribed = false;
  try {
    const { error } = await createServiceClient()
      .from("subscribers")
      .insert({ email });
    if (!error) saved = true;
    else if (error.code === "23505") {
      // Unique index on lower(email): they are already on the list.
      saved = true;
      alreadySubscribed = true;
    } else console.error("Saving subscriber failed:", error.message);
  } catch (error) {
    console.error("Saving subscriber failed:", error);
  }

  // 2) Notify the office (skip repeat signups)
  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!alreadySubscribed && apiKey && to && from) {
    try {
      const response = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: "New newsletter subscriber",
          html: `<p>New subscriber from the website: <strong>${escapeHtml(
            email
          )}</strong></p>`,
        }),
      });
      if (response.ok) emailed = true;
      else console.error("Resend rejected the signup:", await response.text());
    } catch (error) {
      console.error("Newsletter email failed:", error);
    }
  }

  if (!saved && !emailed) {
    return NextResponse.json(
      { error: "Could not subscribe you. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
