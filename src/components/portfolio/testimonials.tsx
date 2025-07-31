import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const testimonial = {
    quote: "Waqas delivered the project with consistency and great planning. We were satisfied with the output.",
    author: "Madni Traders",
  };

  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-12">
          <MessageSquareQuote className="inline-block mr-4 h-10 w-10" />
          Testimonial
        </h2>
        <div className="flex justify-center">
          <Card className="max-w-3xl w-full transform transition-all duration-500 hover:shadow-2xl hover:border-accent hover:-translate-y-2">
            <CardHeader>
                <MessageSquareQuote className="h-12 w-12 text-primary/50" />
            </CardHeader>
            <CardContent>
              <blockquote className="font-body text-xl italic text-foreground/80 border-l-4 border-primary pl-6">
                {testimonial.quote}
              </blockquote>
            </CardContent>
            <CardFooter>
              <p className="font-headline text-lg font-semibold text-primary w-full text-right">- {testimonial.author}</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
