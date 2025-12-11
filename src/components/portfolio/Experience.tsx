import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Code } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer Intern",
      organization: "Tech Solutions Inc.",
      period: "Jun 2023 - Aug 2023",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.",
      skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      type: "project",
      icon: Code,
      title: "Full Stack Developer",
      organization: "Freelance Project",
      period: "Jan 2023 - May 2023",
      description: "Built a complete e-commerce platform with payment integration, user authentication, and admin dashboard.",
      skills: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      type: "certification",
      icon: Award,
      title: "React Developer Certification",
      organization: "Meta (Coursera)",
      period: "Dec 2022",
      description: "Completed comprehensive React development course covering hooks, context, and advanced patterns.",
      skills: ["React", "JavaScript", "Web Development"]
    },
    {
      type: "project",
      icon: Code,
      title: "College Management System",
      organization: "Academic Project",
      period: "Aug 2022 - Nov 2022",
      description: "Developed a comprehensive system for managing student records, attendance, and grades with role-based access control.",
      skills: ["Python", "Flask", "SQL", "Bootstrap"]
    },
    {
      type: "certification",
      icon: Award,
      title: "JavaScript Algorithms",
      organization: "freeCodeCamp",
      period: "Jul 2022",
      description: "Mastered data structures and algorithms through 300+ coding challenges and projects.",
      skills: ["JavaScript", "Algorithms", "Problem Solving"]
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Web Development Intern",
      organization: "Digital Agency",
      period: "May 2022 - Jul 2022",
      description: "Assisted in developing client websites and landing pages. Learned version control and agile development practices.",
      skills: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return "text-primary";
      case "project":
        return "text-secondary";
      case "certification":
        return "text-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Experience & <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey, projects, and certifications
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  <div className={`absolute left-0 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center ${getIconColor(exp.type)}`}>
                    <exp.icon className="w-8 h-8" />
                  </div>

                  <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <CardDescription className="text-base font-medium">
                        {exp.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
