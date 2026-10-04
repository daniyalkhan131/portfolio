/**
 * Single source of truth for identity and navigation.
 * Everything that appears in more than one place (header, footer, hero,
 * metadata) reads from here so there's exactly one line to edit.
 */
export const site = {
  name: "Daniyal Khan",
  role: "AI Research Engineer",
  tagline:
    "I turn unstructured speech and text into production systems — speech processing, NLP and generative AI, taken from research prototype to deployed product.",
  email: "daniyalkhan131@gmail.com",
  github: "https://github.com/daniyalkhan131",
  linkedin: "https://www.linkedin.com/in/daniyalkhan131",
  resume: "/resume.pdf",
  // Used for absolute URLs in metadata; update once the domain is bought.
  url: "https://daniyalkhan.dev",
} as const;

export const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/notes", label: "Writing" },
  { href: "/about", label: "About" },
] as const;
