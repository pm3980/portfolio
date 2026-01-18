import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import certificateHarjai from "@/assets/certificate-harjai.jpg";
import certificateFutureFocus from "@/assets/certificate-future-focus.jpg";

const appreciations = [
  {
    title: "Certificate of Appreciation",
    company: "Harjai Computers Pvt Ltd",
    period: "Oct - Nov - Dec 2021",
    description: "For outstanding performance and technical understanding of assigned area. Supportive nature & individual contribution were added factors.",
    image: certificateHarjai
  },
  {
    title: "Spot Award",
    company: "Future Focus Infotech Pvt Ltd",
    period: "May 2023",
    description: "For exhibiting extra-ordinary performance in the area of Software Development.",
    image: certificateFutureFocus
  }
];

const Appreciations = () => {
  return (
    <section id="appreciations" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Awards & Appreciations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition received for outstanding performance and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {appreciations.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} from ${item.company}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appreciations;
