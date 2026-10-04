import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

// Every enquiry is (1) saved to the database so it shows in /admin/messages
// and (2) emailed to the office via Resend. The request only fails if BOTH
// fail, so a lead is never lost to one broken service.
//   RESEND_API_KEY, CONTACT_TO, CONTACT_FROM, SUPABASE_SERVICE_ROLE_KEY
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

  // Limits match the CHECK constraints on the contact_messages table.
  if (
    name.length > 200 ||
    email.length > 320 ||
    phone.length > 40 ||
    subject.length > 200
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "That message is too long." },
      { status: 400 }
    );
  }

  // 1) Save to the database
  let saved = false;
  try {
    const { error } = await createServiceClient()
      .from("contact_messages")
      .insert({ name, email, phone, subject, message });
    if (error) console.error("Saving contact message failed:", error.message);
    else saved = true;
  } catch (error) {
    console.error("Saving contact message failed:", error);
  }

  // 2) Email the office
  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "Contact email not configured: missing RESEND_API_KEY, CONTACT_TO or CONTACT_FROM."
    );
  } else {
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

      if (response.ok) emailed = true;
      else console.error("Resend rejected the message:", await response.text());
    } catch (error) {
      console.error("Contact email failed:", error);
    }
  }

  if (!saved && !emailed) {
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
