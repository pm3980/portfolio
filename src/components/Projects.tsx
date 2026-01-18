import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Folder, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Client Connect (Billtrust Inc.)",
    description: "Designed and implemented automated accounts receivable solutions, helping businesses streamline invoicing and payment processes.",
    highlights: [
      "Developed a secure and scalable architecture supporting real-time analytics and transaction tracking",
      "Integrated with ERP and CRM platforms, enhancing data exchange and operational efficiency",
      "Built robust reporting and analytics modules for cash flow and aging reports"
    ],
    technologies: ["Laravel", "MySQL", "REST APIs", "Real-time Analytics"]
  },
  {
    title: "Formula Auctions",
    description: "Architected and deployed a high-performance online car auction platform, enabling real-time bidding for buyers and sellers.",
    highlights: [
      "Implemented real-time notifications using Laravel Broadcasting with Pusher",
      "Designed distance-based delivery cost calculator using Google Maps API",
      "Developed a reliable transaction system for seamless auction experiences"
    ],
    technologies: ["Laravel", "Pusher", "Google Maps API", "MySQL"]
  },
  {
    title: "Velospot (Bicycle Rental)",
    description: "Led the development of B2B and B2C bicycle rental solutions for France & Switzerland markets.",
    highlights: [
      "Integrated Stripe's 3DS2 payment gateway for enhanced security",
      "Built real-time GPS tracking system for bicycle locations",
      "Developed bulk CSV import processing 5,000+ employee records"
    ],
    technologies: ["Laravel", "Stripe", "GPS Tracking", "MySQL"]
  },
  {
    title: "McDonald's Campaign System",
    description: "Engineered and optimized a multi-national marketing campaign system handling over 10 million users simultaneously.",
    highlights: [
      "Developed engaging gamification mechanics including raffle prizes",
      "Designed real-time reporting dashboard tracking performance across regions",
      "Managed large-scale database optimizations for high-traffic interactions"
    ],
    technologies: ["PHP", "MySQL", "Microservices", "Real-time Reporting"]
  },
  {
    title: "ComplyHosted - HIPAA Compliance",
    description: "Led the creation of a fully automated risk assessment platform for HIPAA policy compliance.",
    highlights: [
      "Implemented real-time risk analysis and mitigation dashboards",
      "Developed custom examination system for compliance training",
      "Engineered multi-tiered document reader with secure processing"
    ],
    technologies: ["Laravel", "MySQL", "Security", "Document Processing"]
  },
  {
    title: "Purge Report System",
    description: "Developed a data purge tracking solution providing organizations with in-depth insights into archived records.",
    highlights: [
      "Implemented interactive bar charts and graphical reporting",
      "Built dynamic filtering and pagination for large datasets",
      "Designed secure API layer for third-party integrations"
    ],
    technologies: ["Python", "Flask", "Django", "Data Visualization"]
  },
  {
    title: "Search & Store (Flask Project)",
    description: "Created a search-optimized digital storage solution for storing and retrieving notes and files.",
    highlights: [
      "Engineered Google-style search capabilities with full-text searches",
      "Designed responsive UI with Flask and JavaScript",
      "Integrated role-based access control for data security"
    ],
    technologies: ["Flask", "Python", "JavaScript", "Full-text Search"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering impactful solutions across e-commerce, fintech, compliance, and enterprise platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 group h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg mt-3">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
