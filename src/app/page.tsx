import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { HowIBuild } from "@/components/home/HowIBuild";
import { Writing } from "@/components/home/Writing";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";
import { Contact } from "@/components/home/Contact";

/**
 * Section order follows the attention budget from the research: work and proof
 * first, approach second, everything else after.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <HowIBuild />
      <Writing />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
