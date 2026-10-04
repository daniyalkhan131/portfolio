import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricRow } from "@/components/content/MetricRow";
import { StackChips } from "@/components/content/StackChips";
import { getProject, getProjects } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";

/** Prerenders every case study at build time. */
export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  return { title: project.data.title, description: project.data.summary };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  // Route params are async in Next 16 — they must be awaited before use.
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const content = await renderMDX(project.body);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/projects"
        className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
      >
        &larr; All work
      </Link>

      <header className="mt-6 border-b border-hairline pb-10">
        <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
          {project.data.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{project.data.summary}</p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-muted">
          <span>{project.data.role}</span>
          <span>{project.data.timeframe}</span>
          {project.data.github && (
            <a
              href={project.data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-opacity hover:opacity-70"
            >
              GitHub &rarr;
            </a>
          )}
          {project.data.demo && (
            <a
              href={project.data.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-opacity hover:opacity-70"
            >
              Live demo &rarr;
            </a>
          )}
        </div>

        <div className="mt-8">
          <MetricRow metrics={project.data.metrics} />
        </div>

        <div className="mt-6">
          <StackChips stack={project.data.stack} />
        </div>
      </header>

      <div className="prose mt-10">{content}</div>
    </article>
  );
}
