import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="bg-secondary">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-end lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Begin your project</p>
          <h2 className="mt-5 text-4xl md:text-6xl">
            Let's create a home that feels <span className="italic">unmistakably yours.</span>
          </h2>
        </div>
        <Button asChild variant="luxe" size="xl">
          <Link to="/contact">Book a consultation</Link>
        </Button>
      </Reveal>
    </section>
  );
}
