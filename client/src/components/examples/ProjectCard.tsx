import { ProjectCard } from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="Automated AMI Creation & Patching"
      description="Developed a fully automated AMI creation and patching system using Terraform and Jenkins, streamlining deployment processes."
      metrics={[
        { value: "3 days → 1 hour", label: "Deployment Time" },
        { value: "100%", label: "Automation" }
      ]}
      tags={["Terraform", "Jenkins", "AWS"]}
    />
  );
}
