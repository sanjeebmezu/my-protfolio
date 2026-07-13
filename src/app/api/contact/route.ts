import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendConsultationEmail } from "@/lib/email";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const rate = checkRateLimit(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json(
      { message: "Please review the form and try again.", errors },
      { status: 400 },
    );
  }

  if (parsed.data.websiteTrap) {
    return NextResponse.json({ message: "Thank you. Your request has been received." });
  }

  try {
    await sendConsultationEmail(parsed.data);
    return NextResponse.json({
      message: "Thank you. Your consultation request has been received.",
    });
  } catch (error) {
    console.error("Failed to send consultation email", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again or email MezuStudio directly." },
      { status: 500 },
    );
  }
}
