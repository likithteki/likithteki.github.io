"use client";

import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Code, Database, ExternalLink, Lock } from "lucide-react";
import { useHoverAnimation, useScrollReveal } from "@/lib/gsap";

const projects = [
  {
    id: 1,
    title: "Pictorial Password Authentication",
    description: "Developed a two-factor authentication system using randomized emojis that is resistant to shoulder surfing, spyware, and dictionary attacks.",
    icon: <Lock className="h-6 w-6" />,
    date: "10/2022 - 12/2022",
    tags: ["Authentication", "Security", "Python", "React"],
    link: "#"
  },
  {
    id: 2,
    title: "Slow Loris Attack Detection & Prevention",
    description: "Created an ML-based detection system using Isolation Forest algorithm capable of processing over 100k packets per minute with high accuracy.",
    icon: <ShieldAlert className="h-6 w-6" />,
    date: "01/2024 - 04/2024",
    tags: ["ML", "Python", "Wireshark", "Network Security"],
    link: "#"
  },
  {
    id: 3,
    title: "Malicious URL Detection",
    description: "Built a real-time detection API using SVM, Random Forest, CNN, RNN, and BERT models to identify potentially harmful URLs with high precision.",
    icon: <Database className="h-6 w-6" />,
    date: "02/2025 - 04/2025",
    tags: ["Machine Learning", "Flask", "React", "API"],
    link: "#"
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Apply scroll reveal animation
  useScrollReveal(".project-card", {
    y: 50,
    stagger: 0.2,
    start: "top 80%",
  });
  
  // Apply hover animation to project cards
  useHoverAnimation(".project-card", {
    scale: 1.02,
    y: -5,
    duration: 0.3
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Code className="h-8 w-8 text-chart-2" />
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my key cybersecurity projects, showcasing my skills in 
            securing systems and developing innovative security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card border border-border bg-card overflow-hidden">
              <CardHeader className="relative overflow-hidden pb-0">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs font-mono">
                    {project.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button asChild variant="outline" size="sm" className="w-full mt-2 group">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-chart-1/5 rounded-full blur-3xl"></div>
    </section>
  );
}