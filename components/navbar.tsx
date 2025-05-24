"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useNavbarScroll } from "@/lib/gsap";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Articles", href: "/#articles" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("/");
  
  // Apply scroll effect to navbar
  useNavbarScroll(50);
  
  // Handle scroll to sections and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      let currentActiveSection = "/";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");
        
        if (sectionTop < 100 && sectionId) {
          currentActiveSection = `/#${sectionId}`;
        }
      });
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold flex items-center gap-2 text-primary group"
        >
          <span className="w-2 h-2 bg-chart-1 rounded-full group-hover:animate-pulse"></span>
          <span className="w-2 h-2 bg-chart-2 rounded-full group-hover:animate-pulse delay-75"></span>
          <span className="w-2 h-2 bg-chart-3 rounded-full group-hover:animate-pulse delay-150"></span>
          Likith
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeSection === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => {
                setActiveSection(item.href);
                setIsOpen(false);
              }}
            >
              {activeSection === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
              {item.name}
            </Link>
          ))}
          <div className="flex items-center ml-4 gap-2">
            <ThemeToggle />
            <Button asChild size="sm" variant="default" className="ml-2">
              <Link href="/#contact">Hire Me</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-primary/10 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors px-2 py-1.5 rounded-md",
                  activeSection === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/5"
                )}
                onClick={() => {
                  setActiveSection(item.href);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" variant="default" className="mt-2">
              <Link href="/#contact" onClick={() => setIsOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}