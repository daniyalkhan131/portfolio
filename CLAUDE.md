# CLAUDE.md

Behavioral guidelines for working in this repo. Bias toward caution over speed; use judgment on trivial tasks.

## 1. Readability Above All

This is the top priority for this project. Code can be complex when the problem needs it, but it must always be **easy to understand when read later**.

- Add comments wherever they help a reader follow the logic — don't skip this for "obvious" code if it isn't actually obvious.
- Any complex, abstract, or unfamiliar operation (e.g. a non-trivial array/DOM/regex operation, an unusual API call) needs a comment explaining *what it does*, not just restating its name.
- For any function with non-trivial logic, add a short comment above it explaining its purpose and approach.
- If the logic is genuinely complex (an algorithm, a multi-step flow, a non-obvious interaction), explain it in the README (or another relevant `.md` file) in addition to inline comments — the comment handles "what's happening here," the doc handles "how the whole thing works."

## 2. Think Before Coding

- State assumptions explicitly; if uncertain, ask instead of guessing.
- If multiple reasonable interpretations exist, present them — don't silently pick one.
- If a simpler approach exists, say so, even if it means pushing back on the request.
- If something is unclear, stop and ask rather than proceeding on a guess.

## 3. Simplicity First

- Write the minimum code that solves the problem — nothing speculative.
- No features beyond what was asked, no unused flexibility/configurability, no error handling for scenarios that can't happen.
- If a change could be written in a quarter of the lines, rewrite it.

## 4. Surgical Changes

- Touch only what the task requires. Don't refactor or restyle unrelated code.
- Match existing style even if you'd personally do it differently.
- Remove only the imports/variables/functions your own change made unused — leave other dead code alone, just mention it.
- Every changed line should trace back to the actual request.

## 5. Goal-Driven Execution

- Turn vague tasks into verifiable goals (e.g. "fix the bug" → reproduce it, then confirm the fix resolves it).
- For multi-step work, state a brief plan with a verification step per item before diving in.

---

**Signal this is working:** diffs stay small and scoped, comments/docs actually explain the non-obvious parts, and questions come before implementation rather than after a wrong guess.
