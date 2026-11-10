import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + ( ) - are allowed"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  requirements: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your project")
    .max(2000, "Please keep it under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
