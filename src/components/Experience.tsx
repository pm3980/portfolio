import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Orion Innovations",
    project: "Holley Car Parts",
    projectUrl: "https://www.holley.com/",
    location: "Mumbai, India",
    period: "Feb 2025 - Oct 2025",
    highlights: [
      "Enhanced and maintained holley.com car parts reselling platform with PHP, MySQL, JavaScript, jQuery",
      "Worked as a senior team member driving technical decisions",
      "Developed features, fixed bugs, and optimized performance of parent site as well as reseller domains"
    ],
    technologies: ["PHP", "Python", "MySQL", "JavaScript", "jQuery", "Docker", "AWS EC2", "S3", "RDS", "Redis"]
  },
  {
    title: "Senior Software Developer",
    company: "Future Focus Infotech",
    project: "Billtrust Invoicing Application",
    projectUrl: "https://www.billtrust.com/",
    location: "Chennai, India",
    period: "Mar 2023 - Nov 2024",
    highlights: [
      "Enhanced and maintained Billtrust Invoicing Application with PHP (Laravel), MySQL",
      "Led Dockerfile creation and CI/CD automation to streamline deployment",
      "Developed features, fixed bugs, and optimized performance of CSR, Client Connect, and E-Invoice products"
    ],
    technologies: ["Laravel", "PHP", "Python", "MySQL", "Docker", "AWS", "Redis", "CI/CD"]
  },
  {
    title: "Senior Associate L1",
    company: "Ushankk Enterprises",
    project: "McDonald's Marketing Campaign",
    projectUrl: "https://www.publicissapient.com/",
    location: "Bengaluru, India",
    period: "May 2022 - Dec 2022",
    highlights: [
      "Worked on McDonald's campaign system, used by millions of users across 12+ countries",
      "Integrated game mechanics into the platform using a headless browser",
      "Designed database structure for new modules and optimized performance"
    ],
    technologies: ["PHP", "Python", "MySQL", "JavaScript", "Microservices", "Performance Optimization"]
  },
  {
    title: "Senior PHP Developer",
    company: "Harjai Computers",
    project: "Elsevier E-Book Platform",
    projectUrl: "https://www.learningmate.com/",
    location: "Kolkata, India",
    period: "Sep 2021 - Apr 2022",
    highlights: [
      "Developed 15+ REST APIs with TDD, improving integration efficiency by 30%",
      "Migrated monolithic applications to microservices architecture",
      "Implemented unit test cases, integration testing, and AWS services"
    ],
    technologies: ["PHP", "REST APIs", "TDD", "AWS", "ElasticSearch", "Microservices"]
  },
  {
    title: "Software Engineer",
    company: "Capital Numbers Infotech",
    project: "Formula Auctions",
    projectUrl: "https://www.capitalnumbers.com/",
    location: "Kolkata, India",
    period: "Jul 2020 - Jul 2021",
    highlights: [
      "Lead Developer on multiple projects, guiding 2-3 junior developers",
      "Designed system architecture and database models",
      "Implemented real-time notification with Laravel Broadcasting (Pusher)"
    ],
    technologies: ["Laravel", "Pusher", "MySQL", "AWS S3", "Elasticsearch"]
  },
  {
    title: "Senior Web Developer",
    company: "Matrix Media Solutions",
    project: "Velospot (Bicycle Hiring)",
    projectUrl: "https://www.matrixnmedia.com/",
    location: "Kolkata, India",
    period: "Apr 2019 - Jun 2020",
    highlights: [
      "Led development for Velospot, a bicycle hiring platform in France & Switzerland",
      "Created custom Laravel packages, MySQL stored procedures, and Stripe payment gateway",
      "Integrated GPS tracking for bicycle locations"
    ],
    technologies: ["Laravel", "MySQL", "Stripe", "GPS API", "Custom Packages"]
  },
  {
    title: "Senior Programmer",
    company: "Karmick Solutions",
    project: "ComplyHosted - HIPAA Compliance",
    projectUrl: "https://www.karmicksolutions.com/",
    location: "Kolkata, India",
    period: "Jun 2016 - Aug 2018",
    highlights: [
      "Led development of HIPAA compliance and risk assessment tool",
      "Created project architecture and database design",
      "Managed a small team of developers"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "HIPAA", "Security"]
  },
  {
    title: "Senior PHP Developer",
    company: "Eclectic Solutions",
    project: "WordPress Plugin & CodeIgniter",
    projectUrl: "https://www.eclecticsolutions.in/",
    location: "Kolkata, India",
    period: "Oct 2015 - Jun 2016",
    highlights: [
      "Developed a custom WordPress plugin and a project using CodeIgniter",
      "Worked on backend logic, API development, and database management"
    ],
    technologies: ["WordPress", "CodeIgniter", "PHP", "MySQL", "APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            8+ years of building scalable solutions for enterprise clients worldwide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="glass-card hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <a 
                          href={exp.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {exp.project}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
