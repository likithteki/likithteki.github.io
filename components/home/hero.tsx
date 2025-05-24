"use client";

import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/lib/gsap";
import { ArrowDown, Download, Shield, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  // Use typing animation for the header
  useTypingAnimation(
    "Cybersecurity Specialist & Ethical Hacker",
    ".typing-text",
    { delay: 0.5, speed: 0.05 }
  );
  
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  
  // Animation for hero elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        ".hero-content > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
      
      // Floating animation for the icon
      gsap.to(iconRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto hero-content">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-10 bg-chart-1"></span>
            <p className="text-muted-foreground font-mono text-sm">500+ on HackerOne</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-chart-1">Likith</span>
          </h1>
          
          <div className="h-8 md:h-10 mb-6">
            <p className="typing-text font-mono text-lg md:text-xl text-chart-2"></p>
          </div>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Final year CSE student specializing in Cyber Security. I find and fix security vulnerabilities 
            in web applications, APIs, and networks before attackers can exploit them.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="group">
              <Link href="/#contact">
                Hire Me
                <Shield className="ml-2 h-4 w-4 group-hover:animate-pulse" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download className="group">
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50"></span>
            <span className="font-mono text-xs">Scroll to explore</span>
          </div>
        </div>
      </div>
      
      {/* Animated down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link href="/#achievements">
          <div 
            ref={iconRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 cursor-pointer hover:bg-primary/20 transition-colors"
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </Link>
      </div>
      
      {/* Floating terminal icon */}
      <div className="hidden md:block absolute top-1/2 right-[10%] -translate-y-1/2 opacity-10">
        <Terminal className="h-80 w-80 text-chart-1" />
      </div>
    </div>
  );
}