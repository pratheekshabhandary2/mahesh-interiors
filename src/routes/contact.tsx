import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import kitchen from "@/assets/kitchen.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

const searchSchema = z.object({ service: z.string().max(100).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contact Us — Start Your Interior Project | Atelier Nord" },
      {
        name: "description",
        content: "Tell us about your space. Send an inquiry to Atelier Nord to book a design consultation.",
      },
      { property: "og:title", content: "Contact Atelier Nord" },
      {
        property: "og:description",
        content: "Send an inquiry and book a design consultation with our studio.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { service } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about your space."
        text="Share a few details about your project and our design team will be in touch."
        image={kitchen}
      />
      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-24 md:grid-cols-12 lg:px-10 lg:py-32">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">The studio</p>
          <h2 className="mt-5 text-4xl">Visit, call or write.</h2>
          <ul className="mt-10 space-y-8 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-bronze" />
              <span className="text-muted-foreground">
                Studio address
                <br />
                <span className="text-foreground">By appointment</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-bronze" />
              <span className="text-muted-foreground">
                Phone
                <br />
                <span className="text-foreground">Shared on request</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-bronze" />
              <span className="text-muted-foreground">
                Email
                <br />
                <span className="text-foreground">Use the form — we reply personally</span>
              </span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="md:col-span-8">
          <ContactForm defaultService={service ?? ""} />
        </Reveal>
      </section>
    </>
  );
}
