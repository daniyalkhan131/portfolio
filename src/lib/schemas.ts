import { z } from "zod";

/**
 * Frontmatter contracts for the two content collections.
 *
 * These are validated at build time, so a typo in a `.mdx` file fails the build
 * with a precise message instead of rendering a broken page.
 */

/** A headline result, e.g. { label: "Quadratic Kappa", value: "0.82" }. */
const metricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const projectSchema = z.object({
  title: z.string(),
  /** One sentence stating the problem the project solves. */
  summary: z.string(),
  stack: z.array(z.string()),
  metrics: z.array(metricSchema).default([]),
  role: z.string(),
  timeframe: z.string(),
  github: z.string().optional(),
  demo: z.string().optional(),
  /** Featured projects surface on the homepage; the rest only on /projects. */
  featured: z.boolean().default(false),
  /** Lower numbers sort first. */
  order: z.number().default(99),
  draft: z.boolean().default(false),
});

export const noteSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type NoteFrontmatter = z.infer<typeof noteSchema>;

/** A parsed content file: validated frontmatter plus the raw MDX body. */
export type Entry<T> = {
  slug: string;
  data: T;
  body: string;
};
