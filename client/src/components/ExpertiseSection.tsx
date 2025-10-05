import { SkillCard } from "./SkillCard";
import {
  Cloud,
  Settings,
  GitBranch,
  Container,
  BarChart3,
  Shield,
  Users,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    skills: ["AWS, Azure, GCP", "VPC, EC2, IAM", "Multi-region deployments"],
  },
  {
    icon: Settings,
    title: "Infrastructure Automation",
    skills: ["Terraform, Ansible", "CloudFormation", "Infrastructure as Code"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    skills: ["Jenkins, Bitbucket", "GitHub Actions, ArgoCD", "Automated deployments"],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    skills: ["Docker, Kubernetes (EKS)", "Helm charts", "Container security"],
  },
  {
    icon: BarChart3,
    title: "Monitoring & Observability",
    skills: ["Datadog, Grafana", "Splunk, CloudWatch", "Performance optimization"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    skills: ["IAM, RBAC", "GuardDuty", "Cloud security best practices"],
  },
  {
    icon: Users,
    title: "SRE & Leadership",
    skills: ["Incident response", "Blameless postmortems", "99.99% uptime design"],
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What I Do Best</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designing automation-first cloud systems that scale securely and efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard {...area} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
