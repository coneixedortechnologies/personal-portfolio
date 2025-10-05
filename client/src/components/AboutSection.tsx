export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            From Curiosity to Cloud Innovation
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              My DevOps journey began with a simple question — <span className="font-semibold">how can we make infrastructure run smoother, faster, and more efficiently?</span>
            </p>
            
            <p className="text-muted-foreground">
              Over the years, I've worked with organizations like <span className="font-semibold text-foreground">Gartner</span>, <span className="font-semibold text-foreground">Nagarro</span>, and <span className="font-semibold text-foreground">GlobalLogic</span> to design scalable, automated cloud systems.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
              <p className="text-foreground font-medium italic text-xl">
                "I believe technology should serve creativity — that belief drives everything I build: systems that scale with simplicity, not complexity."
              </p>
            </blockquote>
            
            <p className="text-muted-foreground">
              Today, I continue to help enterprises transform their infrastructure through automation, cloud-native technologies, and DevOps best practices that deliver real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
