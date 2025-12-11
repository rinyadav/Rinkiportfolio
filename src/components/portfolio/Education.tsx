import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "President of Computer Science Club"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and achievements
            </p>
          </div>

          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-[var(--gradient-hero)] p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
                    <CardDescription className="text-base text-foreground/80 mb-2">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <Badge variant="secondary">{edu.period}</Badge>
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
