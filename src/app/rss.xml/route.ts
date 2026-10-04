import { getNotes } from "@/lib/content";
import { site } from "@/lib/site";

/** Escapes the five characters that are not legal as raw text in XML. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// All content is read from disk at build time, so the feed can be fully
// prerendered rather than regenerated per request.
export const dynamic = "force-static";

export function GET() {
  const notes = getNotes();

  const items = notes
    .map(
      (note) => `    <item>
      <title>${escapeXml(note.data.title)}</title>
      <link>${site.url}/notes/${note.slug}</link>
      <guid isPermaLink="true">${site.url}/notes/${note.slug}</guid>
      <description>${escapeXml(note.data.description)}</description>
      <pubDate>${note.data.pubDate.toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — Notes</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.tagline)}</description>
    <language>en</language>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
