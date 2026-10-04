import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// Serif for display headings — carries the "engineering notebook" feel.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Sans for body and UI.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Mono for metrics, stack chips and code.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/**
 * Resolves the theme before the browser paints anything.
 *
 * This has to be a blocking inline script rather than a React effect: if the
 * theme were applied after hydration, every dark-mode visitor would see a
 * white flash first. Reading localStorage can throw in private-browsing modes,
 * hence the try/catch fallback to light.
 */
const themeScript = `
try {
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
} catch (e) {
  document.documentElement.dataset.theme = "light";
}
`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The inline script sets data-theme before React hydrates, so the server
      // and client markup legitimately differ on this element.
      suppressHydrationWarning
      // Opts into Next's scroll override: in-page anchors glide, route changes
      // jump instantly instead of scrolling the whole document.
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
