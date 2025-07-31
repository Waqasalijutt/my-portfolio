import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experienceData = [
    {
      role: "Founder & Instructor",
      company: "Islam Computer Academy",
      duration: "5+ Years",
      description: "Taught Computer Science, Math, English, Physics, and Chemistry to Matric & Inter students. Delivered practical and theory-based education with excellent results and satisfaction.",
    },
    {
      role: "Private Home Tutor",
      company: "Self-employed",
      duration: "5+ Years",
      description: "Provided customized subject support to students of multiple levels.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-12">
          <Briefcase className="inline-block mr-4 h-10 w-10" />
          Professional Experience
        </h2>
        <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full bg-primary" />
              <Card className="transform transition-all duration-500 hover:shadow-xl hover:border-accent hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                      <p className="font-body text-lg text-foreground/80 mt-1">{exp.company}</p>
                    </div>
                    <span className="font-body text-base font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground/70">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
