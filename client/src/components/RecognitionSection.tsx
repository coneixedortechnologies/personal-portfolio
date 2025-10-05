import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Cog, MessageSquare, Cloud } from "lucide-react";
import { SiAmazon, SiKubernetes, SiTerraform } from "react-icons/si";

const highlights = [
  {
    icon: Award,
    text: "Reduced AWS Cloud Costs by 50%",
  },
  {
    icon: Cog,
    text: "Multiple Excellence Awards for Automation & Reliability",
  },
  {
    icon: MessageSquare,
    text: "Leadership Recognition for DevOps Transformation",
  },
];

const certifications = [
  {
    icon: SiAmazon,
    name: "AWS Certified Solutions Architect",
    level: "Professional",
  },
  {
    icon: SiKubernetes,
    name: "Certified Kubernetes Administrator",
    level: "CKA",
  },
  {
    icon: SiTerraform,
    name: "HashiCorp Terraform",
    level: "Associate",
  },
  {
    icon: Cloud,
    name: "Microsoft Azure",
    level: "Administrator",
  },
  {
    icon: Award,
    name: "ITIL 4",
    level: "Foundation",
  },
];

export function RecognitionSection() {
  return (
    <section id="recognition" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted. Certified. Proven.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Recognition & Awards</h3>
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-award-${index}`}
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-chart-2/10 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-chart-2" />
                  </div>
                  <p className="text-lg font-medium flex-1">{highlight.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-cert-${index}`}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{cert.name}</h4>
                      <Badge variant="secondary" className="mt-1 font-code text-xs">
                        {cert.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
