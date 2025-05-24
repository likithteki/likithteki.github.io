"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLogoScroll, useScrollReveal } from "@/lib/gsap";
import { Shield, Award } from "lucide-react";

// Company logos where vulnerabilities were reported
const companies = [
  { name: "Nextdoor", logo: "/logos/nextdoor.svg" },
  { name: "Sentry", logo: "/logos/sentry.svg" },
  { name: "RevenueCat", logo: "/logos/revenuecat.svg" },
  { name: "DanswerAI", logo: "/logos/danswer.svg" },
  { name: "W&B AI", logo: "/logos/wandb.svg" },
  { name: "Flat.io", logo: "/logos/flat.svg" },
  { name: "EdgeApp", logo: "/logos/edge.svg" },
  { name: "Archblock", logo: "/logos/archblock.svg" },
  { name: "Zaymo", logo: "/logos/zaymo.svg" },
  { name: "Inflectra", logo: "/logos/inflectra.svg" },
  { name: "Achmea", logo: "/logos/achmea.svg" },
  { name: "Polarity.io", logo: "/logos/polarity.svg" },
];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use scrolling animation for logos
  useLogoScroll(".logo-scroll", 30);
  
  // Apply scroll reveal animation
  useScrollReveal(".achievement-item", {
    y: 30,
    stagger: 0.1,
    start: "top 80%",
  });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-chart-1" />
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've discovered and responsibly reported security vulnerabilities to companies 
            across various industries, helping protect user data and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="achievement-item bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-chart-1/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-chart-1" />
              </div>
              <h3 className="font-semibold text-xl">500+ HackerOne</h3>
            </div>
            <p className="text-muted-foreground">
                  500+ reputation points in Hackerone Platform
            </p>
          </div>
          
          <div className="achievement-item bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-chart-2/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-chart-2" />
              </div>
              <h3 className="font-semibold text-xl">Multiple Bounties</h3>
            </div>
            <p className="text-muted-foreground">
              Received numerous bounties for discovering critical vulnerabilities in production systems.
            </p>
          </div>
          
          <div className="achievement-item bg-card p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-chart-3/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-chart-3" />
              </div>
              <h3 className="font-semibold text-xl">Recognition & Swag</h3>
            </div>
            <p className="text-muted-foreground">
              Acknowledged in various Hall of Fame listings and received recognition packages from companies.
            </p>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Companies Secured</h3>
        </div>
        
        {/* Scrolling logo ticker */}
        <div className="w-full overflow-hidden">
          <div className="logo-scroll-container relative">
            <div className="logo-scroll inline-flex gap-12 whitespace-nowrap">
              {companies.map((company, index) => (
                <div 
                  key={`logo-${index}`} 
                  className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="h-8 w-auto">
                    {/* For the demo, we're showing the company name instead of the actual logo */}
                    <div className="py-2 px-4 bg-card rounded-md border border-border font-mono text-sm">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless scrolling */}
            <div className="logo-scroll inline-flex gap-12 whitespace-nowrap">
              {companies.map((company, index) => (
                <div 
                  key={`logo-dup-${index}`} 
                  className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="h-8 w-auto">
                    <div className="py-2 px-4 bg-card rounded-md border border-border font-mono text-sm">
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}