import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-living.jpg";
import studio from "@/assets/studio.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { OfferingCard } from "@/components/site/OfferingCard";
import { CtaBand } from "@/components/site/CtaBand";
import { offerings } from "@/lib/offerings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Nord — Quiet Luxury Interior Design" },
      {
        name: "description",
        content: "Timeless, minimalist interiors crafted with natural materials. Kitchens, wardrobes, living rooms, bedrooms and complete homes.",
      },
      { property: "og:title", content: "Atelier Nord — Quiet Luxury Interior Design" },
      {
        property: "og:description",
        content: "Timeless, minimalist interiors crafted with natural materials and European craftsmanship.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "14+", label: "Years of practice" },
  { value: "480", label: "Homes completed" },
  { value: "6", label: "Design disciplines" },
  { value: "100%", label: "Bespoke" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Minimalist living room with bouclé sofa and travertine table"
          width={1920}
          height={1088}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 text-overlay-foreground lg:px-10 lg:pb-28">
          <p className="eyebrow animate-fade-up text-overlay-foreground/80">Interior design studio</p>
          <h1 className="animate-fade-up mt-6 max-w-5xl text-6xl [animation-delay:150ms] md:text-8xl lg:text-[8.5rem]">
            Spaces that <span className="italic">breathe.</span>
          </h1>
          <div className="animate-fade-up mt-10 flex flex-col gap-8 [animation-delay:300ms] md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-overlay-foreground/85 md:text-lg">
              Timeless interiors shaped by light, natural materials and quiet European craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get started</Link>
              </Button>
              <Link
                to="/offerings"
                className="link-underline inline-flex h-14 items-center gap-2 text-xs uppercase tracking-[0.22em]"
              >
                Explore offerings <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-12 lg:px-10 lg:py-36">
        <div className="md:col-span-5">
          <Reveal>
            <img
              src={studio}
              alt="Material samples of oak, marble, travertine and linen"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover shadow-soft"
            />
          </Reveal>
        </div>
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <SectionHeading
            eyebrow="The studio"
            title="Designed with restraint. Crafted to last."
            text="Atelier Nord creates homes of calm and character. We believe in fewer, better things — honest materials, careful proportions and details you feel more than see."
          />
          <Reveal delay={150} className="mt-10">
            <Button asChild variant="quiet" size="xl">
              <Link to="/about">Our philosophy</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="border-border py-12 text-center not-last:border-r max-md:[&:nth-child(2)]:border-r-0"
            >
              <p className="font-display text-5xl md:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our offerings"
            title="Every room, considered."
            text="From a single wardrobe to an entire home — explore how we can shape your space."
          />
          <Reveal>
            <Link
              to="/offerings"
              className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 3) * 120}>
              <OfferingCard offering={o} index={i} className="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
