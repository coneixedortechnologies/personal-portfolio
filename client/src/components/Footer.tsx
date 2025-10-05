import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl mb-2">Sumit Gaur</h3>
            <p className="text-muted-foreground">
              DevOps Lead & Cloud Consultant
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:sumitgaur1900@gmail.com"
              className="p-3 rounded-full hover-elevate active-elevate-2 border border-border transition-all"
              data-testid="link-footer-email"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/sumit-gaur-33ab75118"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover-elevate active-elevate-2 border border-border transition-all"
              data-testid="link-footer-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sumit Gaur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
