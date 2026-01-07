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
import ParticleBackground from "@/components/effects/ParticleBackground";
import SmoothScroll from "@/components/effects/SmoothScroll";

export default function Index() {
  return (
    <div className="relative">
      <SmoothScroll />
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
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
