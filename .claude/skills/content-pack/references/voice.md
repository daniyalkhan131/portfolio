# Voice

Technical only for now. Daniyal will extend this file as he develops a view.

## The core move

**Lead with the constraint, not the solution.** The interesting part of any of
his work is why the obvious approach doesn't work. Open there.

Weak: "I used tensor fusion to combine audio and text features."

Strong: "Concatenating two feature vectors only ever lets a network learn
additive combinations. But 'these words mean the opposite in this tone' is
multiplicative. Concatenation structurally cannot represent sarcasm."

## Rules

**Explain why, not just what.** Naming a technique is worthless on its own.
Anyone can list Pyannote and Silero. Explaining that denoising runs *before* VAD
because VAD is trained on clean speech and misfires on retail noise — that shows
you understood the system rather than assembled it.

**Define the unfamiliar term, briefly, inline.** HyDE, RAPTOR, CLAHE, quadratic
kappa, mel scale. One or two sentences on what it does and why it fits. Assume a
competent engineer who doesn't work in this specific subfield.

**Name the tradeoff.** Every technique costs something. Tensor fusion explodes
dimensionality. KNN isn't the strongest classifier. Say so. A write-up with no
costs in it reads like marketing.

**Use real numbers, and attribute them correctly.** 89% precision belongs to the
combined system, not to one pipeline. Getting this wrong is the kind of thing an
interviewer probes.

**End on what you'd do differently.** The "what I learned" section is where
judgment shows. It should contain something that was genuinely surprising, not a
restatement of the summary.

## Register

Plain declarative sentences. Technical vocabulary where it's load-bearing,
never for decoration. Comfortable saying "this is the weak point" — the
retinopathy recall number and the VFP recall number are both stated plainly,
and that honesty is what makes the good numbers credible.

No hedging into vagueness ("somewhat improved"), no inflation ("revolutionary").

## Never write

- "Excited to share", "thrilled to announce", "humbled to"
- "Game-changer", "deep dive", "unlock", "supercharge", "seamless"
- "Leverage" as a verb
- Exclamation marks
- Rhetorical questions as openers ("Ever wondered how...?")
- Emoji as bullet points
- "In today's fast-paced world"
- Any sentence that would survive being deleted
