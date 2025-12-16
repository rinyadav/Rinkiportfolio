import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
