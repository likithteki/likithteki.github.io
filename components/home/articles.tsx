"use client";

import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, ArrowUpRight } from "lucide-react";
import { useHoverAnimation, useScrollReveal } from "@/lib/gsap";

const articles = [
  {
    id: 2,
    title: "How I Got $250 For My Second Bug on HackerOne",
    description: "Hello everyone, I hope you all are doing Great! Today’s writeup explains how I earned $250 from my second bug report on HackerOne.If you haven’t read my first article, please check it out by clicking the link below",
    date: "Sep 1, 2024",
    readTime: "2 min read",
    tags: ["Web Security", "Session hijacking", "bugbounty"],
    link: "https://medium.com/@likithteki/how-i-got-250-for-my-second-bug-in-hackerone-35c75cbd84bd"
  },
  {
    id: 1,
    title: "How I Got $150 on HackerOne for My First Bug",
    description: "Hello everyone, I’m Likith Teki A bug bounty Hunter and Ethical Hacker Getting started in bug bounty hunting can be both thrilling and challenging. When I discovered my first vulnerability on a private program and reported it, I wasn’t just excited about finding a flaw..",
    date: "August 12, 2024",
    readTime: "3 min read",
    tags: ["2FaBypass", "Bugbounty", "Recoverycodes"],
    link: "#"
  }
];

export function Articles() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Apply scroll reveal animation
  useScrollReveal(".article-card", {
    y: 30,
    stagger: 0.2,
    start: "top 80%",
  });
  
  // Apply hover animation to article cards
  useHoverAnimation(".article-card", {
    scale: 1.02,
    y: -3,
    duration: 0.3
  });

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-chart-4" />
            Articles & Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge about cybersecurity trends, techniques, and best practices 
            to help build a more secure digital environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="article-card border border-border hover:border-primary/20 transition-colors bg-card"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {article.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full group">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}