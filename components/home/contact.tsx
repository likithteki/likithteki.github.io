"use client";

import { useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Mail, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/lib/gsap";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Apply scroll reveal animation
  useScrollReveal(".contact-card", {
    y: 30,
    start: "top 80%",
  });
  
  useScrollReveal(".social-item", {
    y: 20,
    stagger: 0.1,
    start: "top 90%",
  });
  
  // Initialize form with zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to an API
      // For demo purposes, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form data:", data);
      
      // Show success toast
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Show error toast
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Mail className="h-8 w-8 text-chart-5" />
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Fill out the form below and I'll get 
            back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <Card ref={formRef} className="contact-card border border-border bg-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Have a project in mind or want to discuss security solutions?
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project or security needs..."
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-chart-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:likithteki76@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      likithteki76@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-chart-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Social Profiles</p>
                    <p className="text-muted-foreground">Connect with me on these platforms</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="https://github.com/likithteki" className="social-item w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/likithteki/" className="social-item w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://x.com/likith_teki" className="social-item w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card flex-1">
              <CardHeader>
                <CardTitle className="text-xl">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Currently available for:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-1"></div>
                    <span>Contract work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-2"></div>
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-3"></div>
                    <span>Security consultations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chart-4"></div>
                    <span>Bug bounty programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}