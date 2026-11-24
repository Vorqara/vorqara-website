import { Resend } from "resend";
import { NextResponse } from "next/server";


const allowedEnquiries = [
  "General enquiry",
  "Vorqara Endpoint beta access",
  "Technology partnership",
  "Business development",
  "Product support",
  "Investment and strategic opportunities",
  "Other",
];

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organisation?: unknown;
  enquiry?: unknown;
  message?: unknown;
  website?: unknown;
};

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 },
      );
    }

    // Reject oversized requests before parsing JSON.
    const contentLength = request.headers.get("content-length");

    if (contentLength !== null) {
      const declaredLength = Number(contentLength);

      if (!Number.isSafeInteger(declaredLength) || declaredLength < 0) {
        return NextResponse.json(
          { error: "Invalid request size." },
          { status: 400 },
        );
      }

      if (declaredLength > 16 * 1024) {
        return NextResponse.json(
          { error: "Your submission is too large." },
          { status: 413 },
        );
      }
    }

    const rawBody = await request.text();
    const actualLength = new TextEncoder().encode(rawBody).byteLength;

    if (actualLength > 16 * 1024) {
      return NextResponse.json(
        { error: "Your submission is too large." },
        { status: 413 },
      );
    }

    let parsedBody: unknown;

    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request." },
        { status: 400 },
      );
    }

    if (
      parsedBody === null ||
      typeof parsedBody !== "object" ||
      Array.isArray(parsedBody)
    ) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 },
      );
    }

    const body = parsedBody as ContactPayload;

    // Quietly accept honeypot submissions without sending email.
    if (isString(body.website) && body.website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const name = isString(body.name) ? body.name.trim() : "";
    const email = isString(body.email) ? body.email.trim() : "";
    const organisation = isString(body.organisation)
      ? body.organisation.trim()
      : "";
    const enquiry = isString(body.enquiry) ? body.enquiry.trim() : "";
    const message = isString(body.message) ? body.message.trim() : "";

    if (
      !name ||
      name.length > 120 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      organisation.length > 160 ||
      !allowedEnquiries.includes(enquiry) ||
      !message ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your details and message, then try again." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Contact email configuration is incomplete.");

      return NextResponse.json(
        { error: "The contact service is temporarily unavailable. Please email info@vorqara.com directly." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganisation = escapeHtml(organisation || "Not provided");
    const safeEnquiry = escapeHtml(enquiry);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website enquiry - ${enquiry}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organisation: ${organisation || "Not provided"}`,
        `Enquiry type: ${enquiry}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Vorqara website enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organisation:</strong> ${safeOrganisation}</p>
        <p><strong>Enquiry type:</strong> ${safeEnquiry}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    if (result.error) {
      console.error("Resend rejected a contact enquiry:", result.error.name);

      return NextResponse.json(
        { error: "We couldn't send your enquiry right now. Please try again or email info@vorqara.com." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't process your enquiry. Please try again or email info@vorqara.com." },
      { status: 500 },
    );
  }
}
