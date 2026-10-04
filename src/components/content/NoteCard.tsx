import Link from "next/link";
import { formatDate } from "@/lib/content";
import type { Entry, NoteFrontmatter } from "@/lib/schemas";

export function NoteCard({ note }: { note: Entry<NoteFrontmatter> }) {
  return (
    <article className="group relative border-b border-hairline py-6 first:pt-0">
      <div className="flex flex-col gap-2">
        <time
          dateTime={note.data.pubDate.toISOString()}
          className="font-mono text-xs text-ink-muted"
        >
          {formatDate(note.data.pubDate)}
        </time>

        <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
          <Link href={`/notes/${note.slug}`} className="after:absolute after:inset-0">
            {note.data.title}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-ink-muted">{note.data.description}</p>

        {note.data.tags.length > 0 && (
          <ul className="mt-1 flex flex-wrap gap-1.5">
            {note.data.tags.map((tag) => (
              <li key={tag} className="font-mono text-[11px] text-ink-muted">
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
