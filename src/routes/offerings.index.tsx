import { createFileRoute } from "@tanstack/react-router";
import living from "@/assets/living.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { OfferingCard } from "@/components/site/OfferingCard";
import { CtaBand } from "@/components/site/CtaBand";
import { offerings } from "@/lib/offerings";

export const Route = createFileRoute("/offerings/")({
  head: () => ({
    meta: [
      { title: "Our Offerings — Kitchens, Wardrobes & Complete Homes | Atelier Nord" },
      {
        name: "description",
        content: "Explore modular kitchens, wardrobes, living rooms, bedrooms, utility rooms and complete home interiors by Atelier Nord.",
      },
      { property: "og:title", content: "Our Offerings — Atelier Nord" },
      {
        property: "og:description",
        content: "Modular kitchens, wardrobes, living rooms, bedrooms, utility and complete home interiors.",
      },
    ],
  }),
  component: Offerings,
});

function Offerings() {
  return (
    <>
      <PageHero
        eyebrow="Our offerings"
        title="Every room, considered."
        text="Six disciplines, one design language. Choose a space to discover how we work."
        image={living}
      />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 2) * 120}>
              <OfferingCard offering={o} index={i} className="aspect-[4/3]" />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
