import { TerminalWindow } from "@/components/TerminalWindow";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <TerminalWindow />
      <Contact />
    </div>
  );
}
