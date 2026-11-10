import { createFileRoute } from "@tanstack/react-router";
import completeHome from "@/assets/complete-home.jpg";
import studio from "@/assets/studio.jpg";
import bedroom from "@/assets/bedroom.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Atelier Nord Interior Design" },
      {
        name: "description",
        content: "Meet Atelier Nord: our vision, expertise and design philosophy of calm, timeless, European-inspired interiors.",
      },
      { property: "og:title", content: "About Atelier Nord" },
      {
        property: "og:description",
        content: "Our vision, expertise and philosophy of calm, timeless interiors.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    n: "01",
    title: "Light first",
    text: "We begin every project by studying how daylight moves through the space, then design to honour it.",
  },
  {
    n: "02",
    title: "Honest materials",
    text: "Oak, stone, linen and plaster — materials that feel good to touch and grow more beautiful with time.",
  },
  {
    n: "03",
    title: "Edited calm",
    text: "Nothing superfluous. Every object, line and finish earns its place in the composition.",
  },
  {
    n: "04",
    title: "Made for life",
    text: "Beauty that works. We design for real routines, families and the decades ahead.",
  },
];

const expertise = [
  "Space planning & architecture",
  "Bespoke joinery & cabinetry",
  "Lighting design",
  "Material & colour curation",
  "Furniture sourcing",
  "Project management & delivery",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A studio devoted to quiet beauty."
        text="We are architects, designers and craftsmen united by a love of calm, considered spaces."
        image={completeHome}
      />

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 lg:px-10 lg:py-36">
        <SectionHeading eyebrow="Who we are" title="Fourteen years of making houses feel like home." />
        <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Atelier Nord was founded on a simple belief: that the spaces we live in shape how we feel. Since then
            we have designed hundreds of homes, each one a dialogue between the client, the architecture and the
            materials.
          </p>
          <p>
            Our multidisciplinary team handles everything from concept sketches to final styling, with in-house
            joinery partners who share our obsession with detail.
          </p>
        </Reveal>
      </section>

      {/* Vision */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-12 lg:px-10">
          <Reveal className="md:col-span-5">
            <img
              src={studio}
              alt="Material board with stone, oak and linen samples"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover shadow-soft"
            />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">Our vision</p>
            <Reveal>
              <blockquote className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                “To create interiors that feel <span className="italic">effortless</span> — where beauty and
                everyday life live in perfect balance.”
              </blockquote>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">— The Atelier Nord team</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <SectionHeading
          eyebrow="Design philosophy"
          title="Four principles guide every project."
          align="center"
        />
        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 100}
              className="group bg-background p-10 transition-colors duration-500 hover:bg-card"
            >
              <span className="font-display text-xl italic text-bronze">{p.n}</span>
              <h3 className="mt-8 text-3xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-28 md:grid-cols-2 lg:px-10 lg:pb-36">
        <div>
          <SectionHeading
            eyebrow="Our expertise"
            title="One studio, every discipline."
            text="We bring every skill a home needs under one roof, so your project is seamless from start to finish."
          />
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {expertise.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 60} className="flex items-center justify-between py-5">
                <span className="font-display text-2xl">{e}</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={150} className="overflow-hidden">
          <img
            src={bedroom}
            alt="Serene bedroom with linen bedding"
            loading="lazy"
            width={1280}
            height={960}
            className="h-full min-h-96 w-full object-cover transition-transform duration-[1400ms] ease-luxe hover:scale-105"
          />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
