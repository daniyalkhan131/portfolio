import type { Metadata } from "next";
import { NoteCard } from "@/components/content/NoteCard";
import { PageHeader } from "@/components/site/PageHeader";
import { getNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical notes and weekly updates on what I'm building and reading.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <PageHeader
        eyebrow="Writing"
        title="Notes"
        intro="Short technical write-ups and weekly notes on what I've been building, reading and getting wrong."
      />

      {notes.length === 0 ? (
        <p className="text-ink-muted">Nothing published yet.</p>
      ) : (
        <div>
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
