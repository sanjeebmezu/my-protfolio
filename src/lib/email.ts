import nodemailer from "nodemailer";
import type { ContactFormInput } from "@/lib/validation";
import { siteConfig } from "@/data/site";

function escapeHtml(value: string | undefined) {
  return (value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendConsultationEmail(data: ContactFormInput) {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || siteConfig.email;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || user;

  if (!pass) {
    return sendViaFormSubmit(data, to);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await withTimeout(
      transporter.sendMail({
        to,
        from,
        replyTo: data.email,
        subject: `New MezuStudio consultation request from ${data.fullName}`,
        text: formatConsultationText(data),
        html: formatConsultationHtml(data),
      }),
      20000,
    );
  } catch (error) {
    console.error("SMTP delivery failed, trying FormSubmit fallback", error);
    return sendViaFormSubmit(data, to);
  }

  return { delivered: true };
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timeout = setTimeout(
          () => reject(new Error(`Email delivery timed out after ${timeoutMs}ms`)),
          timeoutMs,
        );
      }),
    ]);
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}

function formatConsultationHtml(data: ContactFormInput) {
  return `
    <h2>New consultation request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Website:</strong> ${escapeHtml(data.website)}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(data.preferredContact)}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.projectDetails).replaceAll("\n", "<br />")}</p>
  `;
}

function formatConsultationText(data: ContactFormInput) {
  return [
    "New consultation request",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Company: ${data.company || "Not provided"}`,
    `Website: ${data.website || "Not provided"}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget || "Not provided"}`,
    `Preferred contact: ${data.preferredContact}`,
    "",
    "Project details:",
    data.projectDetails,
  ].join("\n");
}

async function sendViaFormSubmit(data: ContactFormInput, to: string) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify({
      _subject: `New MezuStudio consultation request from ${data.fullName}`,
      _template: "table",
      _captcha: "false",
      name: data.fullName,
      email: data.email,
      phone: data.phone || "Not provided",
      company: data.company || "Not provided",
      website: data.website || "Not provided",
      service: data.service,
      budget: data.budget || "Not provided",
      preferredContact: data.preferredContact,
      projectDetails: data.projectDetails,
    }),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit delivery failed with status ${response.status}`);
  }

  return { delivered: true };
}
