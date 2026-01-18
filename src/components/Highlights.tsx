import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Cpu, FileCheck, Radio, Cloud, Code } from "lucide-react";

const highlights = [
  {
    icon: ShoppingCart,
    title: "E-commerce & High-Volume Systems",
    description: "Enhanced holley.com car parts platform. Engineered McDonald's campaign system handling 10M+ concurrent users with gamification and real-time reporting."
  },
  {
    icon: Cpu,
    title: "Microservices & API Development",
    description: "Developed 15+ RESTful APIs, improving integration efficiency by 30%. Led migration of monolithic applications to microservices architecture."
  },
  {
    icon: FileCheck,
    title: "Invoicing & Compliance Platforms",
    description: "Maintained Billtrust Invoicing Application. Led development of HIPAA-compliant risk assessment platform (ComplyHosted.com) with automated risk analysis."
  },
  {
    icon: Radio,
    title: "Real-Time Applications",
    description: "Architected Formula Auctions car auction platform with real-time notifications via Laravel Broadcasting. Developed GPS tracking for Velospot bicycle platform."
  },
  {
    icon: Cloud,
    title: "System Design & DevOps",
    description: "Designed complex system architectures across multiple projects. Managed CI/CD pipelines, leveraging AWS S3 and Elasticsearch for enterprise solutions."
  },
  {
    icon: Code,
    title: "Python & Shell Scripting",
    description: "Built database purge reporting solution using Python with Flask and Django frameworks. Automated data management with shell scripting."
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What I Bring</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key areas of expertise developed through diverse enterprise projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
