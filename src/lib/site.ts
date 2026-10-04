/**
 * Single source of truth for identity and navigation.
 * Everything that appears in more than one place (header, footer, hero,
 * metadata) reads from here so there's exactly one line to edit.
 */
export const site = {
  name: "Daniyal Khan",
  role: "Machine Learning Engineer",
  // DRAFT — replace with Daniyal's own words.
  tagline:
    "I build and deploy machine learning systems — from first baseline to production monitoring.",
  email: "daniyalkhan131@gmail.com",
  github: "https://github.com/daniyalkhan131",
  linkedin: "https://www.linkedin.com/in/daniyal-khan-1389081a5/",
  resume: "/resume.pdf",
  // Used for absolute URLs in metadata; update once the domain is bought.
  url: "https://daniyalkhan.dev",
} as const;

export const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/notes", label: "Writing" },
  { href: "/about", label: "About" },
] as const;
