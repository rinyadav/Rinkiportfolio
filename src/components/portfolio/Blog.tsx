import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      excerpt: "A comprehensive guide to understanding and using React Hooks in your projects. Learn about useState, useEffect, and custom hooks.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Tutorial",
      tags: ["React", "JavaScript", "Hooks"]
    },
    {
      title: "My Journey Learning Web Development",
      excerpt: "From zero to frontend developer - sharing my learning path, resources, and tips for aspiring developers starting their journey.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      date: "Nov 28, 2023",
      readTime: "6 min read",
      category: "Personal",
      tags: ["Career", "Learning", "Web Dev"]
    },
    {
      title: "Building a Responsive E-Commerce Site",
      excerpt: "Case study of developing a full-featured e-commerce platform. Challenges faced, solutions implemented, and lessons learned.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "Nov 10, 2023",
      readTime: "12 min read",
      category: "Case Study",
      tags: ["React", "E-Commerce", "Project"]
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each layout system.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
      date: "Oct 22, 2023",
      readTime: "7 min read",
      category: "Tutorial",
      tags: ["CSS", "Layout", "Design"]
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Practical tips and techniques for improving React application performance, including memoization, lazy loading, and code splitting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      date: "Oct 5, 2023",
      readTime: "10 min read",
      category: "Tutorial",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      title: "My First Hackathon Experience",
      excerpt: "Reflections on participating in Smart India Hackathon 2023, the challenges we faced, and what I learned from the experience.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      date: "Sep 18, 2023",
      readTime: "5 min read",
      category: "Personal",
      tags: ["Hackathon", "Experience", "Team"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              Blog & <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing my knowledge, experiences, and insights about web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full gap-2 group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
