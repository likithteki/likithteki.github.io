"use client";

import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  NetworkIcon, 
  ShieldCheck, 
  Code2, 
  CloudCog,
  ExternalLink
} from "lucide-react";
import { useHoverAnimation, useScrollReveal } from "@/lib/gsap";

const services = [
  {
    id: 1,
    title: "VAPT Services",
    description: "Comprehensive vulnerability assessment and penetration testing for web applications, mobile apps, and cloud infrastructure.",
    icon: <ShieldCheck className="h-8 w-8" />,
    badges: ["Web", "Mobile", "Cloud"]
  },
  {
    id: 2,
    title: "Contract Pen Testing",
    description: "On-demand and retainer-based penetration testing services to ensure your systems remain secure against evolving threats.",
    icon: <CloudCog className="h-8 w-8" />,
    badges: ["On-demand", "Retainer"]
  },
  {
    id: 3,
    title: "Reconnaissance",
    description: "Thorough passive and active reconnaissance to identify potential attack vectors and security gaps in your infrastructure.",
    icon: <Search className="h-8 w-8" />,
    badges: ["Passive", "Active"]
  },
  {
    id: 4,
    title: "API Security Testing",
    description: "In-depth security assessment of APIs to identify vulnerabilities like improper authentication, injection flaws, and data exposure.",
    icon: <Code2 className="h-8 w-8" />,
    badges: ["REST", "GraphQL", "SOAP"]
  },
  {
    id: 5,
    title: "Network Penetration Testing",
    description: "Comprehensive assessment of network infrastructure to identify and remediate vulnerabilities before they can be exploited.",
    icon: <NetworkIcon className="h-8 w-8" />,
    badges: ["Internal", "External", "Wireless"]
  }
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Apply scroll reveal animation
  useScrollReveal(".service-card", {
    y: 50,
    stagger: 0.1,
    start: "top 80%",
  });
  
  // Apply hover animation to service cards
  useHoverAnimation(".service-card", {
    scale: 1.03,
    y: -5,
    duration: 0.3
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <ShieldCheck className="h-8 w-8 text-chart-3" />
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized cybersecurity services to help organizations identify, address, 
            and mitigate security vulnerabilities across their systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="service-card border border-border hover:border-primary/20 transition-colors bg-card"
            >
              <CardHeader className="pb-2">
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-4 text-chart-2">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
                
                <Button variant="link" size="sm" className="mt-4 p-0 h-auto text-chart-2 hover:text-chart-2/80 group">
                  Learn more
                  <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}