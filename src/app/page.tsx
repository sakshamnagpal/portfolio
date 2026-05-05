import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Writing />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
