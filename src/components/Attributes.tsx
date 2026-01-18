import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Brain, Users, Rocket, Languages, CheckCircle } from "lucide-react";

const personalAttributes = [
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Excellent problem-solving and debugging skills"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Strong leadership and mentorship abilities"
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description: "Quick learner with a growth mindset"
  }
];

const additionalInfo = [
  "Strong experience in agile methodologies (Scrum, Kanban)",
  "Passionate about system design, cloud computing, and API security",
  "Experienced with AI-assisted development tools"
];

const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Bengali", level: "Native/Fluent" },
  { name: "Hindi", level: "Speak Fluently" }
];

const Attributes = () => {
  return (
    <section id="attributes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Attributes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core strengths and professional qualities
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Attributes */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Key Strengths
              </h3>
              <div className="grid gap-4">
                {personalAttributes.map((attr, index) => (
                  <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center gap-4 py-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <attr.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{attr.title}</h4>
                        <p className="text-sm text-muted-foreground">{attr.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Additional
                </h3>
                <Card className="glass-card">
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {additionalInfo.map((info, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {info}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Languages className="w-5 h-5 text-primary" />
                Languages
              </h3>
              <div className="grid gap-4">
                {languages.map((lang, index) => (
                  <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {lang.name.charAt(0)}
                          </span>
                        </div>
                        <h4 className="font-semibold">{lang.name}</h4>
                      </div>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attributes;
