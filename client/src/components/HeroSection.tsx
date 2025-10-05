import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@assets/Generated Image October 05, 2025 - 3_10PM.png";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Simplifying DevOps for{" "}
                <span className="text-primary">Scalable</span>,{" "}
                <span className="text-primary">Secure</span>, and{" "}
                <span className="text-primary">Automated</span> Cloud Systems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm <span className="font-semibold text-foreground">Sumit Gaur</span> — a DevOps Engineer with 10+ years of experience helping enterprises build cloud infrastructures that scale effortlessly, deploy reliably, and stay secure.
              </p>
              <p className="text-lg italic text-chart-2 font-medium">
                "I believe infrastructure should empower creativity — not restrict it."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-collaborate"
                className="gap-2"
              >
                Let's Collaborate
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                data-testid="button-view-work"
                className="gap-2"
              >
                View My Work
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Sumit Gaur - DevOps Lead & Cloud Consultant"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
