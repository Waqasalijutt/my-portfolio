'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, User, Cake, Users, Award } from "lucide-react";

export function Hero() {
  const bioDetails = [
    { icon: User, label: "Full Name", value: "Waqas Ahmad" },
    { icon: User, label: "Father’s Name", value: "Liaqat Ali" },
    { icon: Cake, label: "Date of Birth", value: "06 April 1998" },
    { icon: Users, label: "Marital Status", value: "Married" },
    { icon: Mail, label: "Email", value: "eng.waqasahmad1@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 301 6345874" },
    { icon: MapPin, label: "Address", value: "Village Gopi Rai, City Sheikhupura, District Sheikhupura, Punjab, Pakistan" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="flex justify-center md:col-span-1">
            <Avatar className="h-48 w-48 shadow-lg border-4 border-primary">
              <AvatarImage src="https://i.ibb.co/NnF01yJ7/Waqas-Ahmad.jpg" alt="Waqas Ahmad" />
              <AvatarFallback>WA</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">Waqas Ahmad</h1>
            <p className="mt-4 font-body text-xl md:text-2xl text-foreground/80">
              "Dedicated Digital Solutions Provider | Teacher | Learner | Freelancer"
            </p>
            <p className="mt-6 max-w-2xl mx-auto md:mx-0 font-body text-lg text-foreground/70">
              I’m an organized and detail-oriented professional with hands-on experience in managing tasks, coordinating teams, and maintaining project timelines. With a background in Computer Science and 5+ years of teaching and system development experience, I’m now pursuing roles that utilize my leadership and technical skills.
            </p>
             <p className="mt-4 max-w-2xl mx-auto md:mx-0 font-body text-lg font-semibold text-primary">
              I am ready to take on new challenges and contribute to dynamic teams as an Assistant Project Manager.
            </p>
          </div>
        </div>

        <Card className="mt-16 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center text-primary">Bio Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 font-body text-base">
            {bioDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <detail.icon className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground/90">{detail.label}</p>
                  <p className="text-foreground/70">{detail.value}</p>
                </div>
              </div>
            ))}
             <div className="flex items-center gap-4">
                <Award className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground/90">Student of the Year</p>
                  <p className="text-foreground/70">NCBA&E College</p>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
