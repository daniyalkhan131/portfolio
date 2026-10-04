# Note format

Written to `content/notes/<slug>.mdx`. Shorter and looser than a case study —
one idea, carried properly.

## Frontmatter

```yaml
---
title: A claim, not a topic
description: One sentence. Appears on the index page and in the RSS feed.
pubDate: 2026-10-14
tags: ["mlops", "weekly"]
draft: false
---
```

**On `title`:** a claim beats a topic. "Accuracy Is Usually the Wrong Target"
beats "Thoughts on Evaluation Metrics." If the title contains a colon or starts
with "Weekly Note:", wrap it in quotes so the YAML parses.

**On `pubDate`:** today's date unless specified otherwise.

**On `tags`:** two or three, lowercase. Use `weekly` for weekly updates.
Reuse existing tags where they fit rather than inventing near-duplicates.

## Structure

300–800 words. One idea. No section scaffolding for its own sake.

```
Open on the concrete thing — the problem hit, the result that didn't make
sense, the thing that changed how he works. No throat-clearing, no
"recently I've been thinking about."

## A heading or two
The substance. Code blocks where they make the point faster than prose.
If a technique is named, explain what it does and why it fits here.

## The takeaway  /  ## Next
What to actually do with this, or what he's testing next. Short.
```

For a weekly update specifically: what was worked on, the one thing that was
non-obvious, and what's next. The non-obvious thing is the whole post — the
rest is framing.

## Rules

- A note that only restates a definition isn't worth publishing. There has to
  be a position, a surprise, or a concrete result in it.
- Code blocks get a language tag so Shiki highlights them.
- Tables render — `remark-gfm` is enabled.
- Set `draft: true` to keep it local; drafts are excluded from production builds.
