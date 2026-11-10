import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Offering } from "@/lib/offerings";
import { cn } from "@/lib/utils";

type Props = { offering: Offering; index: number; className?: string | undefined };

export function OfferingCard({ offering, index, className }: Props) {
  return (
    <Link
      to="/offerings/$slug"
      params={{ slug: offering.slug }}
      className={cn("group relative block overflow-hidden bg-muted", className)}
    >
      <img
        src={offering.image}
        alt={offering.title}
        loading="lazy"
        width={1280}
        height={960}
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105"
      />
      <div className="bg-card-overlay absolute inset-0 transition-opacity duration-700 group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-overlay-foreground md:p-8">
        <div className="flex items-start justify-between">
          <span className="text-xs tracking-[0.25em]">{String(index + 1).padStart(2, "0")}</span>
          <span className="flex size-11 items-center justify-center rounded-full border border-overlay-foreground/50 transition-all duration-500 ease-luxe group-hover:rotate-45 group-hover:bg-overlay-foreground group-hover:text-espresso">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl">{offering.title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-overlay-foreground/80 opacity-100 transition-all duration-700 ease-luxe md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            {offering.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
