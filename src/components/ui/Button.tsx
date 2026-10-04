import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  /** `solid` is the single primary action on a view; `outline` is everything else. */
  variant?: "solid" | "outline";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

const variants = {
  solid: "bg-accent text-accent-contrast hover:opacity-90",
  outline: "border border-hairline text-ink hover:border-accent hover:text-accent",
} as const;

export function Button({ variant = "outline", className = "", ...props }: ButtonProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
