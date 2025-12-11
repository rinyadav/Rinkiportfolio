import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Professor, Computer Science",
      organization: "University of Technology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      quote: "John has been an exceptional student with a remarkable ability to grasp complex concepts quickly. His dedication to learning and problem-solving skills are truly outstanding."
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      organization: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      quote: "Working with John during his internship was a pleasure. He brought fresh ideas, wrote clean code, and was always eager to learn. A valuable team member who exceeded expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      organization: "Digital Agency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      quote: "John delivered our e-commerce project ahead of schedule with exceptional quality. His attention to detail and communication throughout the project was impressive."
    },
    {
      name: "Prof. David Williams",
      role: "Department Head",
      organization: "University of Technology",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      quote: "As a mentor, I've watched John grow from a curious student to a skilled developer. His passion for technology and willingness to help others makes him stand out."
    },
    {
      name: "Lisa Thompson",
      role: "Freelance Client",
      organization: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      quote: "John created a beautiful website for my business that perfectly captured my vision. Professional, responsive, and delivered exactly what I needed. Highly recommended!"
    },
    {
      name: "Robert Kumar",
      role: "Tech Lead",
      organization: "Startup Ventures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      quote: "John's technical skills combined with his collaborative approach make him an asset to any team. He consistently delivers high-quality work and brings positive energy."
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonials from teachers, clients, and mentors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
