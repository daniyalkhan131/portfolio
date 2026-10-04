import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/motion/Reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="What I work with">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.05}>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">{group.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline bg-surface-sunken px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {item}
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
