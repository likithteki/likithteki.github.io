"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Hook for typing animation
export const useTypingAnimation = (
  text: string,
  selector: string,
  options: {
    delay?: number;
    speed?: number;
    repeat?: boolean;
  } = {}
) => {
  const { delay = 0, speed = 0.05, repeat = false } = options;

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: repeat ? -1 : 0,
      repeatDelay: repeat ? 1 : 0,
    });

    timeline.to(selector, {
      duration: text.length * speed,
      text: { value: text },
      ease: "none",
      delay,
    });

    return () => {
      timeline.kill();
    };
  }, [text, selector, delay, speed, repeat]);
};

// Hook for scroll reveal animations
export const useScrollReveal = (
  selector: string,
  options: {
    y?: number;
    opacity?: number;
    delay?: number;
    stagger?: number;
    duration?: number;
    start?: string;
    markers?: boolean;
  } = {}
) => {
  const {
    y = 50,
    opacity = 0,
    delay = 0,
    stagger = 0.1,
    duration = 0.8,
    start = "top 80%",
    markers = false,
  } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    gsap.fromTo(
      elements,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        delay,
        stagger,
        duration,
        scrollTrigger: {
          trigger: elements[0],
          start,
          markers,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, y, opacity, delay, stagger, duration, start, markers]);
};

// Hook for continuous logo scrolling
export const useLogoScroll = (selector: string, duration: number = 30) => {
  const loopRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const logos = document.querySelectorAll(selector);
    
    if (logos.length === 0) return;
    
    const totalWidth = Array.from(logos).reduce(
      (width, logo) => width + (logo as HTMLElement).offsetWidth,
      0
    );
    
    loopRef.current = gsap.timeline({
      repeat: -1,
      paused: false,
    });
    
    loopRef.current.to(logos, {
      xPercent: -100,
      ease: "none",
      duration,
    });
    
    return () => {
      if (loopRef.current) loopRef.current.kill();
    };
  }, [selector, duration]);
};

// Hook for navbar background change on scroll
export const useNavbarScroll = (threshold: number = 100) => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const updateNavbar = () => {
      if (window.scrollY > threshold) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // Initial check

    return () => {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, [threshold]);
};

// Hook for hover animation
export const useHoverAnimation = (
  selector: string,
  options: {
    scale?: number;
    y?: number;
    duration?: number;
  } = {}
) => {
  const { scale = 1.05, y = -5, duration = 0.3 } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale,
          y,
          duration,
          ease: "power2.out",
        });
      });
      
      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          y: 0,
          duration,
          ease: "power2.out",
        });
      });
    });
    
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, [selector, scale, y, duration]);
};