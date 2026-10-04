import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import portrait from "@/assets/dp.png";

/**
 * Opening section. Deliberately short — the role, the name, one sentence, and
 * the two actions that matter. Depth belongs in the case studies, not here.
 */
export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:gap-14">
        <div className="flex-1">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            {site.role}
          </p>

          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects" variant="solid">
              View work
            </Button>
            <Button href={site.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </Button>
            <Button href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src={portrait}
            alt={`${site.name}, ${site.role}`}
            // Rendered at 176px (and 224px from the sm breakpoint up); the
            // source is 1080px square so retina screens still get a sharp image.
            sizes="(min-width: 640px) 224px, 176px"
            priority
            className="size-44 rounded-3xl border border-hairline object-cover shadow-card sm:size-56"
          />
        </div>
      </div>
    </section>
  );
}
