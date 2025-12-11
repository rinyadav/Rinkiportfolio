import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type ProjectCategory = "All" | "E-Commerce" | "Web App" | "Dashboard" | "Design" | "API Integration";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-Commerce" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Web App" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts and interactive maps",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      category: "Dashboard" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop website builder for creating professional portfolios",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "CSS Grid"],
      category: "Design" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics and engagement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "REST API"],
      category: "Dashboard" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recipe Finder App",
      description: "Search and discover recipes with nutritional information and cooking instructions",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
      technologies: ["React", "API", "CSS Modules"],
      category: "API Integration" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Online Store",
      description: "Modern e-commerce solution with product catalog and secure checkout",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      category: "E-Commerce" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts, nutrition, and fitness goals with detailed analytics",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Charts"],
      category: "Web App" as ProjectCategory,
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories: ProjectCategory[] = ["All", "E-Commerce", "Web App", "Dashboard", "Design", "API Integration"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my recent work and personal projects
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {project.category}
                  </Badge>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
