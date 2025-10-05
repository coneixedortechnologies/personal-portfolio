import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Automated AMI Creation & Patching",
    description:
      "Developed a fully automated AMI creation and patching system using Terraform and Jenkins, streamlining deployment processes and reducing manual intervention.",
    metrics: [
      { value: "3 days → 1 hour", label: "Deployment Time" },
      { value: "100%", label: "Automation" },
    ],
    tags: ["Terraform", "Jenkins", "AWS", "Automation"],
  },
  {
    title: "CI/CD Pipeline Modernization",
    description:
      "Built robust CI/CD pipelines enabling continuous delivery with automated testing, security scanning, and deployment orchestration.",
    metrics: [
      { value: "50+/month", label: "Deployments" },
      { value: "30%", label: "Faster Releases" },
    ],
    tags: ["Jenkins", "GitHub Actions", "ArgoCD", "Kubernetes"],
  },
  {
    title: "AWS Cost Optimization",
    description:
      "Implemented Infrastructure as Code best practices and right-sizing strategies to optimize cloud spending while maintaining high availability.",
    metrics: [
      { value: "50%", label: "Cost Savings" },
      { value: "99.99%", label: "Uptime" },
    ],
    tags: ["Terraform", "AWS", "IaC", "CloudWatch"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Turning Infrastructure into Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A few examples of how I've helped teams scale faster, deploy safer, and cut costs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
