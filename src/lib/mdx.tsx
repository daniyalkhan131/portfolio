import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/**
 * Syntax highlighting runs at build time via Shiki, so no highlighter ships to
 * the browser. Both themes are emitted at once as CSS custom properties
 * (`--shiki-light` / `--shiki-dark`) which the `.prose` styles switch between,
 * so code blocks follow the site theme without a second render.
 */
const prettyCodeOptions: PrettyCodeOptions = {
  theme: { light: "github-light", dark: "github-dark" },
  // Let our own token drive the code block background instead of Shiki's.
  keepBackground: false,
};

/** Compiles an MDX body to a React element. Server-side only. */
export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        // GitHub-flavored markdown: tables, strikethrough, task lists, autolinks.
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return content;
}
