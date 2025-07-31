import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Users, Calendar, CheckCircle, Wrench } from "lucide-react";

export function Projects() {
  const project = {
    client: "Madni Traders",
    title: "Offline Sales & Recovery Management System (Urdu + English)",
    role: "Assistant PM (Self-Managed Project)",
    tech: ["C# (.NET WPF)", "SQLite", "MS Excel"],
    duration: "Feb 2024 – May 2024",
    responsibilities: [
      "Coordinated feature planning and client feedback",
      "Managed task deadlines using Excel",
      "Supervised UI/UX changes and testing",
      "Handled communication with client directly",
    ],
    result: "Project was delivered on time, fully functional, and in daily use by client.",
  };

  return (
    <section id="projects" className="py-20 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-12">
          <Rocket className="inline-block mr-4 h-10 w-10" />
          Featured Project
        </h2>
        <div className="flex justify-center">
          <Card className="max-w-3xl w-full transform transition-all duration-500 hover:shadow-2xl hover:border-accent hover:-translate-y-2">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="font-headline text-3xl">{project.title}</CardTitle>
              </div>
              <CardDescription className="font-body text-lg flex flex-col sm:flex-row sm:items-center flex-wrap gap-4">
                <span className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />{project.client}</span>
                <span className="flex items-center gap-2"><Wrench className="h-5 w-5 text-primary" />{project.role}</span>
                <span className="flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />{project.duration}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-headline text-xl font-semibold mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 font-body text-foreground/80">
                  {project.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-headline text-xl font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Outcome
                </h4>
                <p className="font-body text-foreground/80">{project.result}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tech.map((item, index) => (
                <Badge key={index} variant="secondary" className="font-body text-sm bg-accent/20 text-accent-foreground">{item}</Badge>
              ))}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
