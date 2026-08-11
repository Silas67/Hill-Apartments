import { NextResponse } from "next/server";

// Where enquiries land. Set both in your hosting provider's env settings.
//   RESEND_API_KEY  – from https://resend.com/api-keys
//   CONTACT_TO      – inbox that should receive enquiries (e.g. info@ogwinners.com)
//   CONTACT_FROM    – a verified sender on your domain (e.g. website@ogwinners.com)
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in every field." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "That message is too long." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    // Never fail silently — a lost lead is worse than a visible error.
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY, CONTACT_TO or CONTACT_FROM."
    );
    return NextResponse.json(
      { error: "The contact form is not available right now." },
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
        reply_to: email,
        subject: `Website enquiry: ${subject}`,
        html: `
          <h2>New enquiry from the OG Winners Homes website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the message:", await response.text());
      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form failed:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
