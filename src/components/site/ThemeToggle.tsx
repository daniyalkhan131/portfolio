"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Switches between the light and dark palettes.
 *
 * The actual theme is stored as a `data-theme` attribute on <html>, which the
 * CSS in globals.css keys off. The inline script in layout.tsx has already set
 * that attribute before React mounts, so this component's only job is to read
 * the current value and flip it.
 */
export function ThemeToggle() {
  // Starts undefined because the real value lives in the DOM (set pre-paint by
  // the inline script) and in localStorage — neither is readable while the
  // component is being server-rendered. Reading it in an effect instead keeps
  // the server and client markup identical and avoids a hydration mismatch.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      // Before the effect runs we don't know the theme, so describe the control
      // generically rather than claiming the wrong direction.
      aria-label={theme ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Switch theme"}
      className="grid size-9 place-items-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Both icons are always rendered; CSS picks the right one per theme so
          the button shows the correct glyph even before JavaScript hydrates. */}
      <SunIcon className="size-4 dark:hidden" />
      <MoonIcon className="hidden size-4 dark:block" />
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
