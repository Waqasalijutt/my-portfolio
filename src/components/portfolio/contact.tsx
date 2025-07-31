'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to a backend.
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I will get back to you shortly.",
    });
    form.reset();
  }

  const contactInfo = [
    { icon: Mail, text: "eng.waqasahmad1@gmail.com", href: "mailto:eng.waqasahmad1@gmail.com" },
    { icon: Phone, text: "+92 301 6345874", href: "https://wa.me/923016345874" },
  ];

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-4">Get In Touch</h2>
        <p className="text-center font-body text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            I aim to expand my freelancing and digital teaching services globally while helping others learn with simplicity and clarity. My focus is on practical learning, consistency, and delivering results with sincerity. Let's connect!
        </p>

        <Card className="max-w-4xl mx-auto transform transition-all duration-500 hover:shadow-2xl hover:border-accent">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-secondary/50 rounded-l-lg">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
              <p className="font-body text-foreground/70 mb-8">
                Feel free to reach out via email or WhatsApp. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <info.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-125" />
                    <span className="font-body text-foreground/90 transition-colors group-hover:text-primary">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="font-body" />
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
                        <FormLabel className="font-body">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email" {...field} className="font-body" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your Message" {...field} rows={5} className="font-body" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full group transition-transform hover:scale-105">
                    Send Message
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
