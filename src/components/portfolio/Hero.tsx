import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://miaoda-conversation-file.s3cdn.medo.dev/user-85y5vg5s68e8/conv-85y647usmsxt/20251212/file-8600ckrcpurk.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm bg-card border border-border">
            👋 Welcome to my portfolio
          </Badge>

          <h1 className="text-6xl xl:text-8xl font-bold mb-6 max-sm:text-4xl">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>

          <p className="text-2xl xl:text-3xl mb-6 text-muted-foreground max-sm:text-xl">
            Full Stack Developer & UI/UX Enthusiast
          </p>

          <p className="text-lg mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            I craft beautiful, functional digital experiences that help businesses grow. Passionate about
            clean code, modern design, and creating impactful solutions.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="gap-2 btn-3d px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 btn-outline-3d px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 mt-16">
            <p className="text-sm text-muted-foreground">Scroll Down</p>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center justify-center transition-all duration-300 animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>

          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
