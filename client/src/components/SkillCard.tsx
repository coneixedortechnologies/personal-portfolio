import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <Card className="hover-elevate active-elevate-2 transition-all duration-300" data-testid={`card-skill-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-2 text-muted-foreground">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span className="text-sm">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
