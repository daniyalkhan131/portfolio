import Link from "next/link";
import { MetricRow } from "./MetricRow";
import { StackChips } from "./StackChips";
import type { Entry, ProjectFrontmatter } from "@/lib/schemas";

export function ProjectCard({ project }: { project: Entry<ProjectFrontmatter> }) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="group relative flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-6 shadow-card transition-colors hover:border-accent sm:p-7">
      <div>
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {/* Stretched link: the whole card is the click target, but only this
              text goes into the accessibility tree as the link name. */}
          <Link href={href} className="after:absolute after:inset-0">
            {project.data.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
          {project.data.summary}
        </p>
      </div>

      <MetricRow metrics={project.data.metrics} />

      <div className="mt-auto flex flex-col gap-4">
        <StackChips stack={project.data.stack} />
        <span className="font-mono text-xs text-accent">
          Read case study{" "}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </div>
    </article>
  );
}
