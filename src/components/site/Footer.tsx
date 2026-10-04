import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          <a href={site.github} className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={site.linkedin} className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
