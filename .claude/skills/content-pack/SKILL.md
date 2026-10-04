---
name: content-pack
description: "Turn a raw description of a new project or a new piece of writing into three finished outputs: an MDX file written into this site's content folder, a LinkedIn post, and a short video script. Use when Daniyal describes something he built or something he wants to write about and wants it formatted for publishing. Triggers on /content-pack, or on phrasings like 'I built X, write it up', 'turn this into a post', 'format this for the site'."
---

## What this does

Daniyal describes something in raw form — a project he shipped, or an idea he
wants to write about. This produces three things from that one input:

1. An `.mdx` file written into `content/projects/` or `content/notes/`
2. A LinkedIn post, written to `drafts/`
3. A video script of 60–130 seconds, written to `drafts/`

`drafts/` is gitignored. Only the `.mdx` file is committed.

## Step 1 — Decide which type this is

**Project** → `content/projects/`. A system he built, with an architecture and
ideally measurable outcomes. Gets the full case study treatment.

**Note** → `content/notes/`. An idea, a lesson, a weekly update, a technical
explanation. Shorter, one idea, no frontmatter metrics.

If genuinely ambiguous, ask. Don't guess — the two have different frontmatter
schemas and a wrong guess means rewriting.

## Step 2 — Find what's missing, and ask

This is the most important step. **Never invent a number, a dataset name, a
date, or a link.** The site already carries real metrics; a fabricated one
sitting next to them is worse than an omission.

Before writing, check whether you have:

- **For a project:** the problem it solves, the stack, at least one real metric,
  the timeframe, and a repo URL if one exists
- **For a note:** the central claim, and any specifics (numbers, code, names)
  that support it

Ask for anything missing in one batched set of questions. If he says to leave
something out, write around it rather than inserting a placeholder.

## Step 3 — Write the three outputs

Read the matching reference file before writing each one:

| Output | Reference |
| --- | --- |
| Project MDX | `references/project-case-study.md` |
| Note MDX | `references/note.md` |
| LinkedIn post | `references/linkedin.md` |
| Video script | `references/video-script.md` |

Read `references/voice.md` first, every time. It applies to all three.

Derive the slug from the title: lowercase, hyphenated, no filler words.
Use it for all three filenames so they stay associated:

```
content/notes/<slug>.mdx
drafts/<slug>-linkedin.md
drafts/<slug>-video.md
```

## Step 4 — Verify

Run `npm run build`. Frontmatter is validated by Zod at build time, so a schema
mistake fails the build with the offending file named. A successful build is the
check that the new content is actually publishable.

If the build fails, fix it before reporting back.

## Step 5 — Report

Tell him:
- Which files were created, and the URL the new page will live at
- Anything he still needs to fill in
- The video script's word count and target duration

Keep it short. He can read the files.
