import Link from "next/link";
import { ProjectCard } from "@/components/content/ProjectCard";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/motion/Reveal";
import { getFeaturedProjects } from "@/lib/content";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Things I've built"
      action={
        <Link
          href="/projects"
          className="font-mono text-xs text-accent transition-opacity hover:opacity-70"
        >
          All work &rarr;
        </Link>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
