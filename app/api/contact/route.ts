import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("");
// const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "salawusan@yahoo.com";
// For testing: use "onboarding@resend.dev" (Resend's shared domain, no setup needed)
// For production: use a verified custom domain address, e.g. "enquiries@yourdomain.com"
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, area, description } = body;

    // Basic validation
    if (!fullName || !phoneNumber || !email || !area || !description) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Habeeb Salawu Chambers <${FROM_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New Enquiry: ${area} — ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0a1b33; padding: 32px 24px;">
          <div style="border-bottom: 2px solid #c5a55a; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 22px; font-weight: normal; margin: 0; letter-spacing: 0.02em;">Habeeb Salawu Chambers</h1>
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #1a3d6e; margin: 6px 0 0;">New Client Enquiry</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
            <tr style="border-bottom: 1px solid #e8d9b8;">
              <td style="padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #1a3d6e; width: 38%; vertical-align: top;">Full Name</td>
              <td style="padding: 10px 0; color: #0a1b33;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8d9b8;">
              <td style="padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #1a3d6e; vertical-align: top;">Phone Number</td>
              <td style="padding: 10px 0; color: #0a1b33;">${phoneNumber}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8d9b8;">
              <td style="padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #1a3d6e; vertical-align: top;">Email Address</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #1a3d6e;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e8d9b8;">
              <td style="padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #1a3d6e; vertical-align: top;">Area of Assistance</td>
              <td style="padding: 10px 0; color: #0a1b33;">${area}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #1a3d6e; vertical-align: top;">Description</td>
              <td style="padding: 10px 0; color: #0a1b33; white-space: pre-line;">${description}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 14px 16px; border-left: 3px solid #1a3d6e; background: #f7f4ef; font-size: 12px; color: #5a6a80; line-height: 1.6;">
            Reply directly to this email to reach the enquirer at <strong>${email}</strong>. This enquiry was submitted via the chambers website contact form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
