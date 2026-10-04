import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="rounded-2xl border border-hairline bg-surface p-8 shadow-card sm:p-10">
        <p className="max-w-xl leading-relaxed text-ink-muted">
          Open to conversations about machine learning engineering roles, interesting problems,
          or anything on this site you'd like to dig into.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`} variant="solid">
            {site.email}
          </Button>
          <Button href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
          <Button href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
