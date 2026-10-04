# Video script format

Written to `drafts/<slug>-video.md`. Gitignored.

## Length: target words, not seconds

Normal speaking pace is roughly 150 words per minute. Write to a word count and
the duration follows:

| Duration | Words |
| --- | --- |
| 60s | ~150 |
| 90s | ~225 |
| 110s | ~275 |
| 130s | ~325 |

Default to **90 seconds / ~225 words** unless he asks otherwise. Longer is only
justified when the idea genuinely needs the room.

Count the words and put the real count in the file. Don't estimate.

## Structure

```
[HOOK — 0:00–0:08, ~20 words]
The counterintuitive claim, stated flatly. Or the problem, stated as a
problem. This is the whole video's success condition — people leave in the
first three seconds.

Not: "Today I want to talk about multimodal models."
Yes: "Concatenating audio and text features cannot represent sarcasm.
Here's why that matters."

[BODY — 0:08–1:20, ~170 words]
The technical substance in three beats:
  1. Why the obvious approach fails
  2. What actually works, and the mechanism
  3. The number, or the concrete outcome

[CTA — final 0:08, ~20 words]
One ask. Full write-up on the site, or follow for more. Not three asks.
```

## Writing for speech, not for reading

This is the part most scripts get wrong.

- **Short sentences.** If you run out of breath reading it aloud, cut it.
- **No subordinate clause pileups.** Written prose nests clauses; speech doesn't.
- **Say numbers the way you'd speak them.** "Eighty-nine percent", not "89%".
- **Repeat the key term.** A listener can't scroll back. If the whole video
  rests on "tensor fusion", say it three times.
- **No parentheticals.** They have no spoken equivalent.
- Read it back as if speaking before finalising. Anything that trips, rewrite.

## File format

```
# <Title>

**Target:** 90 seconds · **Actual word count:** 228

---

[HOOK — ~20 words]

<text>

[BODY — ~170 words]

<text>

[CTA — ~20 words]

<text>

---

**Notes:** anything he should check, b-roll suggestions if obvious, the
on-screen text if a line would land better written than spoken.
```
