import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getNote, getNotes } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";

export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata(props: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const note = getNote(slug);
  if (!note) return {};

  return {
    title: note.data.title,
    description: note.data.description,
    openGraph: {
      type: "article",
      publishedTime: note.data.pubDate.toISOString(),
      tags: [...note.data.tags],
    },
  };
}

export default async function NotePage(props: PageProps<"/notes/[slug]">) {
  const { slug } = await props.params;
  const note = getNote(slug);
  if (!note) notFound();

  const content = await renderMDX(note.body);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/notes"
        className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
      >
        &larr; All notes
      </Link>

      <header className="mt-6 border-b border-hairline pb-8">
        <time
          dateTime={note.data.pubDate.toISOString()}
          className="font-mono text-xs text-ink-muted"
        >
          {formatDate(note.data.pubDate)}
        </time>
        <h1 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
          {note.data.title}
        </h1>
        <p className="mt-4 leading-relaxed text-ink-muted">{note.data.description}</p>
      </header>

      <div className="prose mt-10">{content}</div>
    </article>
  );
}
