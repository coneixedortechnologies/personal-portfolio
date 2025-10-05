import { SkillCard } from '../SkillCard';
import { Cloud } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <SkillCard
      icon={Cloud}
      title="Cloud Architecture"
      skills={["AWS, Azure, GCP", "VPC, EC2, IAM", "Multi-region deployments"]}
    />
  );
}
