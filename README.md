# Portfolio — Daniyal Khan

Personal site and technical notebook for an ML engineer. Static Next.js site with
markdown-driven project case studies and writing.

**Live:** not deployed yet · **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · Motion

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — also type-checks and validates all frontmatter
```

Node 20.9+ required.

---

## Project structure

```
content/
  projects/*.mdx    Case studies — the substance of the site
  notes/*.mdx       Technical notes and weekly updates
public/
  resume.pdf        Linked from the hero and About page
src/
  app/              Routes (App Router)
  components/
    site/           Header, Footer, ThemeToggle, Section, PageHeader
    home/           Homepage sections
    content/        ProjectCard, NoteCard, MetricRow, StackChips
    motion/         Reveal — the scroll animation wrapper
    ui/             Button
  data/             skills, pipeline stages, experience/education
  lib/
    site.ts         Name, links, tagline — single source of truth
    schemas.ts      Zod frontmatter contracts
    content.ts      Reads and validates the content folders
    mdx.tsx         Compiles MDX with syntax highlighting
  assets/           Images imported by components (optimized by next/image)
```

---

## Adding content

### A new note (weekly update, technical write-up)

Create `content/notes/my-post.mdx`. The filename becomes the URL: `/notes/my-post`.

```mdx
---
title: What I Learned About Batch Normalization
description: One sentence shown on the index page and in the RSS feed.
pubDate: 2026-10-14
tags: ["deep-learning", "weekly"]
---

Body goes here. Standard markdown plus GFM — tables, task lists, strikethrough.

```python
# Code blocks get syntax highlighting automatically, in both themes.
model.eval()
```
```

Set `draft: true` to keep a post visible locally but excluded from production builds.

### A new project case study

Create `content/projects/my-project.mdx`:

```mdx
---
title: Project Name
summary: One sentence stating the problem it solves.
stack: ["Python", "PyTorch", "Docker"]
metrics:
  - label: F1 Score
    value: "0.91"
  - label: Latency
    value: "120ms"
role: Solo project
timeframe: "2026"
github: https://github.com/daniyalkhan131/repo
demo: https://example.com     # optional, omit if there isn't one
featured: true                # show on the homepage
order: 1                      # lower sorts first
---
```

Case studies follow a consistent structure: **Problem → Data → Approach →
Architecture → Experiments → Results → Deployment → What I learned.** Lead with
the problem and the numbers, not the technology list.

Frontmatter is validated against `src/lib/schemas.ts` at build time, so a typo
fails the build with the offending file named rather than rendering a broken page.

---

## How the non-obvious parts work

### Theming

Colors are **semantic tokens**, not shades. Components say `bg-canvas text-ink
border-hairline` and never `bg-stone-50`. Each token is defined twice in
`src/app/globals.css` — once under `:root` (light), once under
`[data-theme="dark"]` — so a single utility class resolves correctly in both
themes and no component needs a `dark:` variant just to recolor itself.

The mechanism that makes this work is `@theme inline`. Tailwind normally bakes
the literal color value into each generated utility; `inline` makes it keep the
`var()` reference instead, so reassigning the variable under a selector
re-themes the whole site without generating a second stylesheet.

**Why the theme script is inline and blocking:** `src/app/layout.tsx` injects a
small script into `<head>` that reads `localStorage` and sets `data-theme` on
`<html>` before the browser paints. If this ran as a React effect instead, every
dark-mode visitor would see a white flash first. `<html>` carries
`suppressHydrationWarning` because that script legitimately makes the server and
client markup differ on that one attribute.

With JavaScript disabled the toggle can't run, so a `prefers-color-scheme` media
query re-declares the same dark values as a fallback.

### Content pipeline

`src/lib/content.ts` reads the content folders with plain `fs`, splits
frontmatter from body with `gray-matter`, and validates against a Zod schema.
This is deliberately not a content-collections build tool — the whole pipeline
is about twenty lines you can step through, which beats debugging a black box
when a post won't render.

Drafts are filtered by `isVisible()`, which only hides them when
`NODE_ENV === "production"`. So drafts are visible while you write and vanish
from the deployed site.

### MDX rendering

`src/lib/mdx.tsx` compiles MDX on the server via `compileMDX`. Two plugins:

- **`remark-gfm`** — GitHub-flavored markdown, which is what enables tables.
  Without it a markdown table silently renders as paragraph text.
- **`rehype-pretty-code`** — Shiki syntax highlighting at build time, so no
  highlighter ships to the browser. It's configured with *both* a light and a
  dark theme, which makes it emit `--shiki-light` and `--shiki-dark` custom
  properties on each token. The `.prose` styles in `globals.css` pick whichever
  matches the active theme, so code blocks follow the toggle without re-rendering.

### The interactive pipeline

`src/components/home/Pipeline.tsx` is one of only two client components on the
site. Each stage is a real `<button>` with `aria-expanded` and `aria-controls`
so it's keyboard-operable and announced correctly. Exactly one stage is open at
a time, defaulting to the first so the section never renders as an unexplained
row of dots.

On narrow screens the strip scrolls horizontally rather than wrapping, which
preserves the left-to-right pipeline metaphor on a phone. Stage copy lives in
`src/data/pipeline.ts` so it can be edited without touching the component.

### Motion

Animation is confined to thin leaf components (`Reveal`, `Pipeline`) marked
`"use client"`. Pages and content stay server-rendered. Both honor
`prefers-reduced-motion` — `Reveal` returns its children unwrapped entirely when
reduced motion is requested, rather than animating faster.

---

## Placeholder content to replace

Content was refreshed from the 2025 resume, so role, experience, skills,
education and the two Yoyo case studies are real. What's still filler:

| What | Where |
| --- | --- |
| GitHub repo URLs — all three personal projects point at the profile root | frontmatter in `content/projects/{diabetic-retinopathy,multimodal-sentiment,movie-recommender}.mdx` |
| Dataset names and result figures for the personal projects | `TODO(daniyal)` comments at the top of those three files |
| All three blog posts are sample content | `content/notes/*.mdx` |
| Domain (`site.url`) is a guess | `src/lib/site.ts` |
| Hero tagline — derived from the resume profile, worth a read-through | `src/lib/site.ts` |

Not yet built: favicon, OG image, `robots.txt`, custom 404 page.

## Deployment

Push to GitHub, import the repo on Vercel, deploy. No configuration needed —
Vercel detects Next.js automatically. Add the custom domain in the Vercel
dashboard under Settings → Domains, and update `site.url` in `src/lib/site.ts`
so metadata, the sitemap and the RSS feed emit correct absolute URLs.
