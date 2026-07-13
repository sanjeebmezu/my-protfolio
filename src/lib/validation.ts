import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(120).optional(),
  website: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\/.+\..+/.test(value), {
      message: "Please include a full URL, such as https://example.com.",
    }),
  service: z.string().trim().min(1, "Please choose a service."),
  budget: z.string().trim().max(80).optional(),
  projectDetails: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters about your project.")
    .max(2500),
  preferredContact: z.string().trim().min(1, "Please choose a contact method."),
  consent: z.literal(true, {
    error: "Please confirm your consent before submitting.",
  }),
  websiteTrap: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
