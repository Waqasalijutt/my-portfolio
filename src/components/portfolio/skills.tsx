import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, FileText, HardDrive, Presentation, Type, Languages as LanguagesIcon, Code, Clock, CheckSquare, Users, MessageSquare, BarChart, Shield, File, DollarSign, Tool, Briefcase } from "lucide-react";

export function Skills() {
  const skillsData = {
    "Project Management": [
      { name: "Time Management", icon: Clock },
      { name: "Task Tracking (MS Project, Excel, Trello, etc.)", icon: CheckSquare },
      { name: "Team Coordination", icon: Users },
      { name: "Communication & Reporting", icon: MessageSquare },
      { name: "Risk Assessment", icon: Shield },
      { name: "Documentation & File Management", icon: File },
      { name: "Budget Awareness", icon: DollarSign },
      { name: "Technical Understanding", icon: Code },
    ],
    "Tools I Use": [
      { name: "MS Excel (Project timelines, budgets)", icon: FileText },
      { name: "MS Word (Project reports)", icon: FileText },
      { name: "Trello / Asana / Notion", icon: Briefcase },
      { name: "Email & Communication tools", icon: MessageSquare },
      { name: "Google Workspace", icon: HardDrive },
    ],
    "Technical Skills": [
      { name: "MS Office (Word, Excel, PowerPoint)", icon: FileText },
      { name: "Computer Hardware & Troubleshooting", icon: HardDrive },
      { name: "Online Teaching & Assessment", icon: Presentation },
      { name: "Digital Composing (English/Urdu)", icon: Type },
      { name: "C# (.NET WPF)", icon: Code },
      { name: "SQLite", icon: Code }
    ],
    "Languages": [
      { name: "Urdu (Fluent)", icon: LanguagesIcon },
      { name: "Punjabi (Fluent)", icon: LanguagesIcon },
      { name: "English (Fluent)", icon: LanguagesIcon },
    ],
    "Certifications": [
      { name: "Office Automation & Computer Course (A+ Grade)", icon: FileText, description: "Covered: MS Office, Office Accounts, Office Management, File Systems, Internet Apps, English Composing & Communication" }
    ]
  };

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-4xl font-bold text-primary mb-12">
          <Wrench className="inline-block mr-4 h-10 w-10" />
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="transform transition-all duration-500 hover:shadow-xl hover:border-accent hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <skill.icon className="h-6 w-6 mt-1 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-body font-semibold">{skill.name}</h3>
                      {skill.description && <p className="text-sm text-foreground/70 mt-1">{skill.description}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
