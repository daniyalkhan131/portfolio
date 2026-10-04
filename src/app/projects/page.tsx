import type { Metadata } from "next";
import { ProjectCard } from "@/components/content/ProjectCard";
import { PageHeader } from "@/components/site/PageHeader";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Machine learning systems I've built, written up as case studies.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Selected Work"
        title="Things I've built"
        intro="Each of these is written up end to end — the problem, the approach, what the numbers came out at, and what I'd do differently."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
