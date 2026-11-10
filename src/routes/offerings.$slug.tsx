import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { offerings, getOffering } from "@/lib/offerings";

export const Route = createFileRoute("/offerings/$slug")({
  loader: ({ params }) => {
    const offering = getOffering(params.slug);
    if (!offering) throw notFound();
    return { offering };
  },
  head: ({ loaderData }) => {
    const o = loaderData?.offering;
    if (!o) return { meta: [{ title: "Offering not found — Atelier Nord" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${o.title} — Atelier Nord Interior Design` },
        { name: "description", content: o.summary },
        { property: "og:title", content: `${o.title} — Atelier Nord` },
        { property: "og:description", content: o.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="eyebrow">Not found</p>
      <h1 className="mt-4 text-5xl">This offering doesn't exist.</h1>
      <Button asChild variant="luxe" size="xl" className="mt-8">
        <Link to="/offerings">View all offerings</Link>
      </Button>
    </div>
  ),
  component: OfferingDetail,
});

function OfferingDetail() {
  const { offering: o } = Route.useLoaderData();
  const idx = offerings.findIndex((x) => x.slug === o.slug);
  const next = offerings[(idx + 1) % offerings.length] ?? offerings[0]!;

  return (
    <>
      <PageHero eyebrow={o.tagline} title={o.title} text={o.summary} image={o.image} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
        <Link
          to="/offerings"
          className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          <ArrowLeft className="size-4" /> All offerings
        </Link>
      </div>

      {/* Description */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 lg:px-10 lg:py-28">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="Overview" title={o.tagline} />
        </div>
        <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
          {o.description.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-5 lg:px-10">
        {o.gallery.map((img, i) => (
          <Reveal
            key={img + i}
            delay={i * 120}
            className={i === 0 ? "overflow-hidden md:col-span-3" : "overflow-hidden md:col-span-2"}
          >
            <img
              src={img}
              alt={`${o.title} inspiration ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe hover:scale-105 md:aspect-auto md:min-h-[28rem]"
            />
          </Reveal>
        ))}
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading eyebrow="Features" title="What sets it apart." />
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {o.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="bg-background p-8 transition-colors duration-500 hover:bg-card">
              <span className="font-display text-xl italic text-bronze">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Includes + CTA */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="eyebrow">What's included</p>
            <ul className="mt-8 space-y-5">
              {o.includes.map((item) => (
                <li key={item} className="flex items-center gap-4 font-display text-2xl">
                  <span className="flex size-8 items-center justify-center rounded-full border border-foreground/30">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl">
              Ready to begin your <span className="italic">{o.title.toLowerCase()}</span>?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Share a few details and our studio will reach out to arrange a consultation.
            </p>
            <div className="mt-8">
              <Button asChild variant="luxe" size="xl">
                <Link to="/contact" search={{ service: o.title }}>
                  Enquire now
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next */}
      <Link
        to="/offerings/$slug"
        params={{ slug: next.slug }}
        className="group block border-t border-border"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-16 lg:px-10">
          <div>
            <p className="eyebrow">Next offering</p>
            <p className="mt-3 font-display text-4xl transition-transform duration-500 ease-luxe group-hover:translate-x-2 md:text-6xl">
              {next.title}
            </p>
          </div>
          <ArrowRight className="size-8 transition-transform duration-500 ease-luxe group-hover:translate-x-2" />
        </div>
      </Link>
    </>
  );
}
