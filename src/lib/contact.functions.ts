import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact.schema";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service || null,
      requirements: data.requirements,
    });
    if (error) {
      console.error("Inquiry insert failed", error.message);
      throw new Error("We couldn't send your inquiry. Please try again.");
    }
    return { ok: true };
  });
