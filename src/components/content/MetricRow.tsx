import type { ProjectFrontmatter } from "@/lib/schemas";

/**
 * The headline results for a project. These carry most of the weight on a
 * card — a number a reader can check beats a list of technologies.
 */
export function MetricRow({ metrics }: { metrics: ProjectFrontmatter["metrics"] }) {
  if (metrics.length === 0) return null;

  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dd className="font-mono text-xl font-semibold text-accent">{metric.value}</dd>
          <dt className="mt-0.5 text-xs tracking-wide text-ink-muted uppercase">
            {metric.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
