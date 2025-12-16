import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, Code, FolderGit2, Award, GraduationCap, Mail, ChevronRight } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Force dark mode permanently
    document.documentElement.classList.add("dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Skills", id: "skills", icon: Code },
    { label: "Projects", id: "projects", icon: FolderGit2 },
    { label: "Experience", id: "experience", icon: Award },
    { label: "Education", id: "education", icon: GraduationCap },
    { label: "Contact", id: "contact", icon: Mail }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="font-bold text-primary text-[36px] animate-float"
          >RY</button>

          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="hidden xl:flex btn-3d px-6 py-2 rounded-lg font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-primary/10">
                  <Menu className="w-6 h-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/98 backdrop-blur-md border-l border-primary/20">
                <div className="flex flex-col gap-1 mt-6">
                  <div className="mb-4 pb-3 border-b border-primary/20">
                    <h2 className="text-2xl font-bold text-primary">Rinki's Portfolio</h2>
                  </div>
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-center justify-between text-left text-base font-semibold hover:text-primary transition-all duration-300 py-3 px-3 rounded-lg hover:bg-primary/10 hover:translate-x-2 border border-transparent hover:border-primary/30"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                  
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <Button
                      className="w-full btn-3d py-5 text-base font-semibold"
                      onClick={() => scrollToSection("contact")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Let's Talk
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
