# LinkedIn post format

Written to `drafts/<slug>-linkedin.md`. Gitignored — this is a copy-paste
artifact, not site content.

**The post teaches something technical.** It is not an announcement with a link
attached. A reader who never clicks through should still have learned one real
thing.

## Structure

```
HOOK — 1–2 lines
The counterintuitive claim, or the problem everyone hits. LinkedIn truncates
around 210 characters behind a "see more", so these lines have to earn the
click on their own. No question openers.

BODY — 100–180 words
The actual lesson, with specifics. Name the technique, say what it does, say
why it fits. Include the real number if there is one. Short paragraphs with
blank lines between them — LinkedIn renders dense text as a wall.

TAKEAWAY — 1–2 lines
The transferable principle. The thing that applies beyond this project.

CTA — 1 line
Soft. Link to the write-up, or an invitation to disagree. Not "DM me!"
```

Total: 150–250 words.

## Rules

- **Teach, don't announce.** "I shipped X" is not a post. "Here's why the
  obvious approach to X fails" is.
- One idea per post. If the project had three interesting parts, that's three
  posts, not one list.
- Specifics over adjectives. "Cut false merges 30%" beats "significantly
  improved accuracy."
- 3–5 hashtags maximum, at the end, real ones (`#MachineLearning`, `#MLOps`).
  No `#innovation`, no `#blessed`.
- No emoji bullets. A single emoji is tolerable; a bulleted list of them is not.
- No "Thoughts?" as the closing line.
- Line breaks matter more than on the site. Short paragraphs, generous spacing.

## File format

Write it as plain text ready to paste — no markdown headers, no code fences
around the post body, since neither renders on LinkedIn. Put a `---` separator
and a short note at the bottom with the character count and anything he should
check before posting.
