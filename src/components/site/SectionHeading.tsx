import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string | undefined;
  align?: "left" | "center";
  className?: string | undefined;
};

export function SectionHeading({ eyebrow, title, text, align = "left", className }: Props) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>}
    </Reveal>
  );
}
