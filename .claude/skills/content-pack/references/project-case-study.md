# Project case study format

Written to `content/projects/<slug>.mdx`.

## Frontmatter

Validated by `src/lib/schemas.ts` at build time. Required fields are required.

```yaml
---
title: Descriptive name, not a codename
summary: One sentence stating the problem it solves. Not a tech list.
stack: ["Python", "PyTorch", "Qdrant"]
metrics:
  - label: Precision
    value: "89%"
  - label: Audio Processed
    value: "100k+ hrs"
role: AI Research Engineer, YoyoAI     # or "Solo project"
timeframe: "2026"
github: https://github.com/...          # omit entirely if there isn't one
demo: https://...                       # omit entirely if there isn't one
featured: true                          # shows on the homepage
order: 1                                # lower sorts first
---
```

**On `metrics`:** two to three, and they must be real. Pick the ones a reader
can evaluate. If a number belongs to a larger system rather than this component,
either label it as such or leave it out and state it in the Results prose.

**On `order`:** check the existing files before choosing. Professional work
leads; personal projects follow. Renumber others if this one belongs at the top.

**On `featured`:** the homepage grid is two columns, so an even number of
featured projects looks right.

## Body structure

Use the sections that apply. Not every project has all of them, and padding an
empty section is worse than omitting it.

```
## Problem
What breaks, who it hurts, why the obvious approach fails.
The constraints that shaped everything downstream — as a list if there are
several, because they get referenced later.

## Data
What it looked like, and the properties that dictated design decisions.
Imbalance, noise, scale, labelling cost.

## Approach  /  ## Architecture
The actual system. Sub-headings per component. For each: what it does, and
why this choice over the alternative. Explain unfamiliar techniques inline.

## Experiments
What was tried, what moved the needle, what didn't. The negative results are
often more informative than the positive ones.

## Results
The numbers, attributed precisely. State weak spots plainly — they make the
strong numbers credible.

## Deployment
Scale, environment, what it took to get there. Skip if it never shipped.

## What I learned
Three or four bullets. Each should contain something genuinely surprising.
Not a summary of the sections above.
```

## Rules

- Open on the problem. Never on the technology.
- Cross-link related projects with a markdown link to `/projects/<slug>` when
  one exists to solve what another structurally couldn't.
- Code blocks only where they clarify something prose can't.
- If a specific is unknown, ask — do not write a placeholder.
