import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Dishoom Studio Contact Form <noreply@dishoomstudio.com>",
      to: ["hello@dishoomstudio.com"],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #111111;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background: #ffffff;
                border-radius: 4px;
                padding: 32px;
                border: 1px solid #e5e5e5;
              }
              .header {
                border-bottom: 2px solid #F5E000;
                padding-bottom: 16px;
                margin-bottom: 24px;
              }
              .field {
                margin-bottom: 16px;
              }
              .label {
                font-weight: 600;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #999999;
                margin-bottom: 4px;
              }
              .value {
                color: #111111;
              }
              .message-box {
                background: #f9f9f9;
                border-left: 3px solid #F5E000;
                padding: 16px;
                margin-top: 16px;
                border-radius: 4px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0; color: #111111;">New Project Inquiry</h2>
              </div>

              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="message-box">
                <div class="label" style="margin-bottom: 8px;">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>

              <p style="margin-top: 24px; font-size: 13px; color: #999999;">
                Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Contact form email error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}