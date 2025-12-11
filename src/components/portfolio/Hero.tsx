import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-[var(--shadow-glow)]">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Rinki Yadav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl xl:text-7xl font-bold mb-6 max-sm:text-4xl">
            Hi, I'm <span className="gradient-text">Rinki Yadav</span>
          </h1>

          <p className="text-xl xl:text-2xl mb-8 text-muted-foreground max-sm:text-lg">Frontend Developer | Designer </p>

          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Passionate about creating beautiful, functional, and user-friendly web experiences.
            I turn ideas into reality through clean code and innovative design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 btn-3d"
              onClick={() => scrollToSection("projects")}
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 btn-3d"
              onClick={() => scrollToSection("resume")}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 btn-3d"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="mt-16 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
