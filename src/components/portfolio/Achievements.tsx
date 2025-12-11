import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2023",
      organization: "Government of India",
      description: "Winner - Developed an AI-powered solution for traffic management",
      date: "Sep 2023",
      type: "Hackathon"
    },
    {
      icon: Award,
      title: "Google Cloud Certified",
      organization: "Google Cloud",
      description: "Associate Cloud Engineer certification",
      date: "Aug 2023",
      type: "Certification"
    },
    {
      icon: Medal,
      title: "University Hackathon",
      organization: "University of Technology",
      description: "First Place - Built a student collaboration platform",
      date: "Mar 2023",
      type: "Hackathon"
    },
    {
      icon: Star,
      title: "Meta Frontend Developer",
      organization: "Meta (Coursera)",
      description: "Professional Certificate in Frontend Development",
      date: "Jan 2023",
      type: "Certification"
    },
    {
      icon: Trophy,
      title: "Code Sprint 2022",
      organization: "Tech Community",
      description: "Runner Up - 24-hour coding competition",
      date: "Nov 2022",
      type: "Hackathon"
    },
    {
      icon: Award,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      description: "Foundational cloud computing certification",
      date: "Oct 2022",
      type: "Certification"
    },
    {
      icon: Star,
      title: "freeCodeCamp Certifications",
      organization: "freeCodeCamp",
      description: "Responsive Web Design & JavaScript Algorithms",
      date: "Jul 2022",
      type: "Certification"
    },
    {
      icon: Medal,
      title: "College Fest Hackathon",
      organization: "Tech Fest 2022",
      description: "Third Place - Developed a campus navigation app",
      date: "Apr 2022",
      type: "Hackathon"
    }
  ];

  const getIconColor = (type: string) => {
    return type === "Hackathon" ? "text-secondary" : "text-primary";
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Achievements & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and credentials earned throughout my journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 ${getIconColor(achievement.type)}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                        <Badge variant="outline" className="flex-shrink-0">
                          {achievement.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {achievement.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
