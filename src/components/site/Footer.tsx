import { Link } from "@tanstack/react-router";
import { offerings } from "@/lib/offerings";

export function Footer() {
  return (
    <footer className="bg-espresso text-overlay-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">
            Atelier <span className="italic">Nord</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-overlay-foreground/70">
            Interiors of quiet luxury — designed with restraint, crafted with care and made to be lived in.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Offerings</p>
          <ul className="space-y-3 text-sm text-overlay-foreground/75">
            {offerings.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/offerings/$slug"
                  params={{ slug: o.slug }}
                  className="transition-colors hover:text-overlay-foreground"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Studio</p>
          <ul className="space-y-3 text-sm text-overlay-foreground/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-overlay-foreground">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-overlay-foreground">
                Start a project
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-overlay-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-overlay-foreground/50 md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Atelier Nord. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Design · Craft · Calm</span>
        </div>
      </div>
    </footer>
  );
}
