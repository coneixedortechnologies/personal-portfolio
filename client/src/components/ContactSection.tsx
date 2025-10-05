import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Reliable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to modernize infrastructure, automate deployments, or scale your DevOps practice — I can help you design systems that are secure, efficient, and future-ready.
          </p>
          <p className="text-lg font-medium text-foreground">
            Tell me about the toughest challenge your DevOps team is facing — let's solve it together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover-elevate active-elevate-2 transition-all">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your DevOps challenge..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full gap-2" data-testid="button-send-message">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:sumitgaur1900@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 border border-border transition-all"
                  data-testid="link-email"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">
                      sumitgaur1900@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/sumit-gaur-33ab75118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 border border-border transition-all"
                  data-testid="link-linkedin"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      Connect on LinkedIn
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                  data-testid="button-book-consultation"
                >
                  <a href="mailto:sumitgaur1900@gmail.com?subject=Consultation Request">
                    Book a Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                  data-testid="button-connect-linkedin"
                >
                  <a
                    href="https://linkedin.com/in/sumit-gaur-33ab75118"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
