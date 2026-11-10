import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/contact.schema";
import { submitInquiry } from "@/lib/contact.functions";
import { offerings } from "@/lib/offerings";
import { cn } from "@/lib/utils";

const empty: ContactInput = { name: "", phone: "", email: "", service: "", requirements: "" };
type Errors = Partial<Record<keyof ContactInput, string>>;

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-foreground focus:outline-none";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const send = useServerFn(submitInquiry);
  const [values, setValues] = useState<ContactInput>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("idle");
      toast.error("We couldn't send your inquiry. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="animate-fade-up flex flex-col items-start gap-6 border border-border bg-card p-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" />
        </span>
        <h3 className="text-4xl">Thank you.</h3>
        <p className="max-w-md text-muted-foreground">
          Your inquiry has reached our studio. A member of our design team will be in touch with you soon.
        </p>
        <Button variant="quiet" size="xl" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8 md:grid-cols-2">
      <Field label="Full name" error={errors.name}>
        <input className={fieldClass} value={values.name} onChange={set("name")} placeholder="Your name" maxLength={100} autoComplete="name" />
      </Field>
      <Field label="Phone number" error={errors.phone}>
        <input className={fieldClass} value={values.phone} onChange={set("phone")} placeholder="+91 98765 43210" maxLength={20} type="tel" autoComplete="tel" />
      </Field>
      <Field label="Email" error={errors.email}>
        <input className={fieldClass} value={values.email} onChange={set("email")} placeholder="you@example.com" maxLength={255} type="email" autoComplete="email" />
      </Field>
      <Field label="Interested in" error={errors.service}>
        <select className={cn(fieldClass, "cursor-pointer")} value={values.service} onChange={set("service")}>
          <option value="">Select a service</option>
          {offerings.map((o) => (
            <option key={o.slug} value={o.title}>
              {o.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Project requirements" error={errors.requirements} className="md:col-span-2">
        <textarea
          className={cn(fieldClass, "min-h-32 resize-none")}
          value={values.requirements}
          onChange={set("requirements")}
          placeholder="Tell us about your space, timeline and the feeling you'd like to create…"
          maxLength={2000}
          rows={4}
        />
      </Field>
      <div className="md:col-span-2">
        <Button type="submit" variant="luxe" size="xl" disabled={status === "sending"}>
          {status === "sending" && <Loader2 className="animate-spin" />}
          {status === "sending" ? "Sending" : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
    </label>
  );
}
