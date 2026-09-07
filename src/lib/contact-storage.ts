import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { ContactFormInput } from "@/lib/validation";

export async function saveContactSubmission(data: ContactFormInput) {
  const directory = path.join(process.cwd(), "contact-submissions");
  const file = path.join(directory, "submissions.jsonl");
  const submission = {
    receivedAt: new Date().toISOString(),
    fullName: data.fullName,
    email: data.email,
    phone: data.phone || "",
    company: data.company || "",
    website: data.website || "",
    service: data.service,
    budget: data.budget || "",
    preferredContact: data.preferredContact,
    projectDetails: data.projectDetails,
  };

  await mkdir(directory, { recursive: true });
  await appendFile(file, `${JSON.stringify(submission)}\n`, "utf8");
}
