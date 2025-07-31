import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "Bachelor in Computer Science (BSCS)",
      institution: "National College of Business Administration and Economics, Lahore",
      year: "2023",
      details: "Completed with a focus on software development and project management principles.",
    },
    {
      degree: "Intermediate (ICS)",
      institution: "Oxford College, Sheikhupura",
      year: "2017",
      details: "Specialized in Computer Science, Physics, and Mathematics.",
    },
    {
      degree: "Matric (Science)",
      institution: "Govt. High School, Mirza Virkan (Sheikhupura)",
      year: "2013",
      details: "Graduated with a strong foundation in science subjects.",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-12">
          <GraduationCap className="inline-block mr-4 h-10 w-10" />
          Education
        </h2>
        <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[35px] top-1 h-6 w-6 rounded-full bg-primary" />
              <Card className="transform transition-all duration-500 hover:shadow-xl hover:border-accent hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-2xl">{edu.degree}</CardTitle>
                      <p className="font-body text-lg text-foreground/80 mt-1">{edu.institution}</p>
                    </div>
                    <span className="font-body text-base font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground/70">{edu.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
