import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ZodType } from "zod";
import {
  noteSchema,
  projectSchema,
  type Entry,
  type NoteFrontmatter,
  type ProjectFrontmatter,
} from "./schemas";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Reads every `.mdx` file in one content folder and validates its frontmatter.
 *
 * This runs at build time on the server only. It's deliberately plain `fs` +
 * `gray-matter` rather than a content-collections build tool: the whole
 * pipeline is ~20 lines you can step through, which beats a black box when a
 * post fails to render.
 */
function readCollection<T>(folder: string, schema: ZodType<T>): Entry<T>[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      // `matter` splits the YAML frontmatter block from the MDX body.
      const { data, content } = matter(raw);

      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        // Fail loudly at build time, naming the offending file.
        throw new Error(
          `Invalid frontmatter in content/${folder}/${file}:\n${JSON.stringify(parsed.error.issues, null, 2)}`,
        );
      }

      return {
        slug: file.replace(/\.mdx$/, ""),
        data: parsed.data,
        body: content,
      };
    });
}

/** Drafts stay visible while developing and disappear from production builds. */
function isVisible(draft: boolean): boolean {
  return !draft || process.env.NODE_ENV !== "production";
}

export function getProjects(): Entry<ProjectFrontmatter>[] {
  return readCollection("projects", projectSchema)
    .filter((entry) => isVisible(entry.data.draft))
    .sort((a, b) => a.data.order - b.data.order);
}

export function getFeaturedProjects(): Entry<ProjectFrontmatter>[] {
  return getProjects().filter((entry) => entry.data.featured);
}

export function getProject(slug: string): Entry<ProjectFrontmatter> | undefined {
  return getProjects().find((entry) => entry.slug === slug);
}

export function getNotes(): Entry<NoteFrontmatter>[] {
  return readCollection("notes", noteSchema)
    .filter((entry) => isVisible(entry.data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getNote(slug: string): Entry<NoteFrontmatter> | undefined {
  return getNotes().find((entry) => entry.slug === slug);
}

/** Shared date formatting so every surface renders dates identically. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
