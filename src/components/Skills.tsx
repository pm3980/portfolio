import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Terminal, Layers, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["PHP", "JavaScript", "Python", "SQL"],
    color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Laravel", "Django", "CodeIgniter", "jQuery", "AngularJS"],
    color: "bg-green-500/10 text-green-600 hover:bg-green-500/20"
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "ORM (Eloquent)", "Redis", "Elasticsearch"],
    color: "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20"
  },
  {
    title: "Tools & Technologies",
    icon: Terminal,
    skills: ["Docker", "AWS (EC2, RDS, S3)", "Git", "Jenkins", "Jira", "Confluence", "Pusher"],
    color: "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20"
  },
  {
    title: "Development Expertise",
    icon: Server,
    skills: ["REST APIs", "Microservices", "Performance Optimization", "System Architecture", "CI/CD Pipelines"],
    color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20"
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Linux", "Windows", "Mac"],
    color: "bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web development technologies and cloud platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} transition-colors`}
                    >
                      {skill}
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

export default Skills;
