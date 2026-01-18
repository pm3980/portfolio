import { Mail, Phone, Linkedin, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-primary/30 shadow-xl overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Pradip Mondal" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Senior Software Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Pradip Mondal</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Results-driven Senior Software Engineer with <span className="text-foreground font-semibold">8+ years</span> of expertise in 
            <span className="text-foreground font-semibold"> PHP (Laravel, CodeIgniter)</span>, 
            <span className="text-foreground font-semibold"> Python (Django)</span>, 
            <span className="text-foreground font-semibold"> JavaScript</span>, and 
            <span className="text-foreground font-semibold"> SQL</span>. Adept at building scalable applications, RESTful APIs, microservices, and database management. 
            Passionate about cloud computing, technical documentation, and AI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:pm3980@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">pm3980@gmail.com</span>
            </a>
            <a href="tel:+918697052136" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91-8697052136</span>
            </a>
            <a href="https://github.com/pm3980" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-sm">github.com/pm3980</span>
            </a>
            <a href="https://www.linkedin.com/in/pm3980" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">linkedin.com/in/pm3980</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Kolkata, India</span>
            </span>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
