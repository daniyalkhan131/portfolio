import Link from "next/link";
import { NoteCard } from "@/components/content/NoteCard";
import { Section } from "@/components/site/Section";
import { getNotes } from "@/lib/content";

export function Writing() {
  // Only the three most recent notes belong on the homepage; the rest live at /notes.
  const notes = getNotes().slice(0, 3);
  if (notes.length === 0) return null;

  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Recent notes"
      action={
        <Link
          href="/notes"
          className="font-mono text-xs text-accent transition-opacity hover:opacity-70"
        >
          All notes &rarr;
        </Link>
      }
    >
      <div className="max-w-3xl">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </Section>
  );
}
