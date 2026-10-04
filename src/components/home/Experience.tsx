import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="max-w-3xl">
        {experience.map((role) => (
          <Reveal key={`${role.company}-${role.role}`}>
            <div className="border-l-2 border-hairline py-1 pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-ink">{role.role}</h3>
                <span className="font-mono text-xs text-ink-muted">{role.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{role.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-sm leading-relaxed text-ink-muted before:absolute before:left-0 before:text-accent before:content-['\2014']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
