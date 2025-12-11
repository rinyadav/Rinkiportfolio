import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Blog", id: "blog" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/johndoe" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/johndoe" },
    { icon: Mail, label: "Email", url: "mailto:john.doe@example.com" }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">John Doe</h3>
            <p className="text-muted-foreground mb-4">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Francisco, CA</li>
              <li>
                <a href="mailto:john.doe@example.com" className="hover:text-primary transition-colors">
                  john.doe@example.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to get updates on my latest projects and blog posts.
            </p>
            <Button className="w-full" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            2025 John Doe Portfolio
            <span className="flex items-center gap-1">
              • Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
