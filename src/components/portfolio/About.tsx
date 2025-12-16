import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rinki_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center items-center">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-85y5vg5s68e8/conv-85y647usmsxt/20251216/file-89sjpwsproxs.jpg"
                alt="Rinki Yadav - Professional Photo"
                className="rounded-lg shadow-[var(--shadow-card)] w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-500"
                style={{ 
                  aspectRatio: '16/9',
                  filter: 'brightness(1.15) contrast(1.1) saturate(1.1)',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with a keen eye for design and a love for creating 
                seamless user experiences. My journey in web development started during my college years, 
                where I discovered the perfect blend of creativity and logic in coding.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I've honed my skills in modern web technologies, working on diverse 
                projects ranging from responsive websites to complex web applications. I believe in 
                writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design patterns, contributing to 
                open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
              <Button size="lg" className="gap-2 btn-3d" onClick={handleDownloadResume}>
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
