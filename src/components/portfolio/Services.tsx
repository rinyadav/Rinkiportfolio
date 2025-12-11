import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Plug, Globe, Smartphone, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, performant websites using modern frameworks and best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience"
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamlessly connecting frontend applications with backend services and third-party APIs"
    },
    {
      icon: Globe,
      title: "Portfolio Creation",
      description: "Designing and developing professional portfolio websites to showcase your work"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices, from mobile to desktop"
    },
    {
      icon: Wrench,
      title: "Software Development",
      description: "Full-stack development solutions tailored to your specific business needs"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
