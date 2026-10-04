"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { pipelineStages } from "@/data/pipeline";

/**
 * Interactive walkthrough of how Daniyal builds ML systems.
 *
 * Each stage is a real <button> with `aria-expanded` and `aria-controls`, so
 * the whole thing is keyboard-operable and announces its state to screen
 * readers. Exactly one stage is open at a time — the first by default, so the
 * section is never an empty row of unexplained dots.
 *
 * The strip scrolls horizontally on narrow screens rather than wrapping, which
 * keeps the left-to-right pipeline metaphor intact on a phone.
 */
export function Pipeline() {
  const [activeId, setActiveId] = useState(pipelineStages[0].id);
  const prefersReducedMotion = useReducedMotion();

  const active = pipelineStages.find((stage) => stage.id === activeId) ?? pipelineStages[0];

  return (
    <div>
      {/* Negative margin + padding lets the scrollable strip bleed to the screen
          edge on mobile while staying aligned with the section on desktop. */}
      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        <ol className="relative flex min-w-max gap-2 sm:min-w-0 sm:justify-between">
          {/* The connecting rail, drawn behind the dots. */}
          <div
            aria-hidden="true"
            className="absolute top-[9px] right-4 left-4 h-px bg-hairline"
          />

          {pipelineStages.map((stage) => {
            const isActive = stage.id === active.id;

            return (
              <li key={stage.id} className="relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveId(stage.id)}
                  aria-expanded={isActive}
                  aria-controls="pipeline-detail"
                  className="flex w-full flex-col items-center gap-2 px-2 sm:px-1"
                >
                  <span
                    className={`block size-[18px] rounded-full border-2 transition-colors ${
                      isActive
                        ? "border-accent bg-accent"
                        : "border-hairline bg-canvas hover:border-accent"
                    }`}
                  />
                  <span
                    className={`font-mono text-[11px] tracking-wide whitespace-nowrap transition-colors ${
                      isActive ? "text-accent" : "text-ink-muted"
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        id="pipeline-detail"
        className="mt-6 rounded-2xl border border-hairline bg-surface p-6 shadow-card sm:p-8"
      >
        {/* `mode="wait"` lets the outgoing panel finish before the new one
            enters, so the two never overlap mid-transition. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {active.label}
            </p>

            <p className="mt-3 font-display text-lg leading-snug font-semibold text-ink sm:text-xl">
              {active.principle}
            </p>

            <p className="mt-3 leading-relaxed text-ink-muted">{active.detail}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ul className="flex flex-wrap gap-1.5">
                {active.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-hairline bg-surface-sunken px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              {active.seenIn && (
                <Link
                  href={`/projects/${active.seenIn.slug}`}
                  className="font-mono text-xs text-accent transition-opacity hover:opacity-70"
                >
                  Seen in: {active.seenIn.label} &rarr;
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
