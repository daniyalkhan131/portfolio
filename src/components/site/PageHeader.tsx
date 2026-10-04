export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-12">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {intro && <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{intro}</p>}
    </header>
  );
}
