import { NextResponse } from "next/server";

// Notifies the office of a new newsletter signup. Uses the same Resend
// credentials as the contact form — see src/app/api/contact/route.ts.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let email = "";

  try {
    const body = await request.json();
    email = (body.email ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error("Newsletter signup is not configured: missing env vars.");
    return NextResponse.json(
      { error: "Subscriptions are unavailable right now." },
      { status: 500 }
    );
  }

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
        html: `<p>New subscriber from the website: <strong>${email.replace(
          /</g,
          "&lt;"
        )}</strong></p>`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the signup:", await response.text());
      return NextResponse.json(
        { error: "Could not subscribe you. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { error: "Could not subscribe you. Please try again." },
      { status: 500 }
    );
  }
}
