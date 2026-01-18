import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Sikkim Manipal University",
    type: "Distance Education",
    period: "2009 - 2011",
    location: "Kolkata, India",
    gpa: "65/100",
    courses: ["Programming Languages", "Data Structures", "Mathematics"]
  },
  {
    degree: "Bachelor of Commerce",
    institution: "Calcutta University",
    type: "Full Time",
    period: "1998 - 2001",
    location: "Kolkata, India",
    gpa: "43/100",
    courses: ["Accountancy", "Economics", "Tax", "Business Organization"]
  },
  {
    degree: "Higher Secondary Education",
    institution: "West Bengal Council of Higher Secondary Education",
    type: "Full Time",
    period: "1996 - 1998",
    location: "Kolkata, India",
    gpa: "35.6/100",
    courses: ["Accountancy", "Economics", "Tax", "Business Organization"]
  },
  {
    degree: "Secondary Education",
    institution: "West Bengal Board of Secondary Education",
    type: "Full Time",
    period: "1994 - 1996",
    location: "Kolkata, India",
    gpa: "48.5/100",
    courses: ["Math", "Physics", "English", "Bengali", "Life Science"]
  }
];

const certifications = [
  {
    title: "Higher Diploma in Software Engineering",
    issuer: "Aptech",
    icon: Award
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Education
          </h3>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{edu.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <BookOpen className="w-4 h-4" />
                    Key Courses:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
