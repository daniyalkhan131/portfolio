import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/Button";
import { achievements, certificates, education } from "@/data/experience";
import { site } from "@/lib/site";
import aboutPic from "@/assets/about-pic.png";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, ${site.role}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeader eyebrow="About" title="A bit more context" />

      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Image
          src={aboutPic}
          alt={site.name}
          sizes="160px"
          className="size-40 shrink-0 rounded-2xl border border-hairline object-cover shadow-card"
        />

        {/* PLACEHOLDER BIO — Daniyal, rewrite this in your own voice. */}
        <div className="prose">
          <p>
            I&apos;m a machine learning engineer. Most of my work sits in the gap between a model
            that performs well in a notebook and a system that keeps performing once real data
            is flowing through it.
          </p>
          <p>
            I came to this through a Master&apos;s in Computer Science, where I spent most of my
            time on deep learning and interpretability — particularly the question of how you
            justify a model&apos;s output to someone who has to act on it. That interest has
            stuck. I care a lot about evaluation design, reproducible pipelines, and knowing
            what a system does when it fails rather than only when it works.
          </p>
          <p>
            Outside of building, I write up what I learn — partly to think it through properly,
            partly because the explanation I wish I&apos;d found usually didn&apos;t exist.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-semibold text-ink">Education</h2>
        <div className="mt-5 space-y-5">
          {education.map((item) => (
            <div key={item.degree} className="border-l-2 border-hairline pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-ink">{item.degree}</h3>
                <span className="font-mono text-xs text-ink-muted">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-ink-muted">
                {item.institution} &middot; {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">Certifications</h2>
        <ul className="mt-4 space-y-2">
          {certificates.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-ink-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink">Achievements</h2>
        <ul className="mt-4 space-y-2">
          {achievements.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-ink-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button href={site.resume} target="_blank" rel="noopener noreferrer" variant="solid">
          Download resume
        </Button>
        <Button href={`mailto:${site.email}`}>Email me</Button>
      </div>
    </div>
  );
}
