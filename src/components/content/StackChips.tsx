export function StackChips({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-full border border-hairline bg-surface-sunken px-2.5 py-1 font-mono text-[11px] text-ink-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
