type Props = { eyebrow: string; title: string; text?: string | undefined; image: string };

export function PageHero({ eyebrow, title, text, image }: Props) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        width={1920}
        height={1080}
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 text-overlay-foreground lg:px-10 lg:pb-24">
        <p className="eyebrow animate-fade-up text-overlay-foreground/80">{eyebrow}</p>
        <h1 className="animate-fade-up mt-5 max-w-4xl text-5xl [animation-delay:120ms] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {text && (
          <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-overlay-foreground/85 [animation-delay:240ms] md:text-lg">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
