import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering high-quality work"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with great communication"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on achieving measurable outcomes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and what drives me
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center mb-12 xl:mb-16">
            <div className="flex justify-center items-center order-1 xl:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl"></div>
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-85y5vg5s68e8/conv-85y647usmsxt/20260107/file-8rq6y9m3fke8.png"
                  alt="Rinki Yadav - Professional Photo"
                  className="relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full h-auto object-cover border-2 border-primary/10 hover:border-primary/30 hover:scale-[1.02] transition-all duration-500"
                  style={{ 
                    aspectRatio: '4/5',
                    maxHeight: '500px',
                    objectPosition: 'center 20%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            <div className="space-y-4 xl:space-y-6 order-2 xl:order-2">
              <h3 className="text-2xl xl:text-3xl font-bold">My Journey</h3>
              <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with a keen eye for design and a love for creating 
                seamless user experiences. My journey in web development started during my college years, 
                where I discovered the perfect blend of creativity and logic in coding.
              </p>
              <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                Over the years, I've honed my skills in modern web technologies, working on diverse 
                projects ranging from responsive websites to complex web applications. I believe in 
                writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design patterns, contributing to 
                open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
                <CardContent className="p-4 xl:p-6 text-center">
                  <div className="w-12 h-12 xl:w-16 xl:h-16 mx-auto mb-3 xl:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 xl:w-8 xl:h-8 text-primary" />
                  </div>
                  <h4 className="text-lg xl:text-xl font-bold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-xs xl:text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
