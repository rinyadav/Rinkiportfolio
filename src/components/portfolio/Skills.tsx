import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Users, Lightbulb, Wrench } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 }
  ];

  const tools = [
    "Git", "VS Code", "Figma", "Webpack", "Docker", "Jest", "Tailwind CSS", "TypeScript"
  ];

  const softSkills = [
    { icon: Lightbulb, name: "Problem Solving", description: "Analytical thinking and debugging" },
    { icon: Palette, name: "Communication", description: "Clear and effective collaboration" },
    { icon: Users, name: "Leadership", description: "Team guidance and mentorship" },
    { icon: Users, name: "Teamwork", description: "Collaborative project execution" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8 mb-12">
            {/* Technical Skills Card */}
            <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group/skill hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-muted/50" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full pointer-events-none" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools & Technologies Card */}
            <Card className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">Tools & Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer font-medium"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills Section */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-center">
              <span className="gradient-text">Soft Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="group text-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                      <skill.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
