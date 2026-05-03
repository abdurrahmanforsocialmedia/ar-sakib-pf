import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const points = [
  "Managed Linux servers ensuring high uptime and stability",
  "Reduced downtime by 80% through optimization",
  "Handled 50+ client tickets daily with 95%+ satisfaction",
  "Completed 700+ cPanel migrations with zero data loss",
  "Managed VPS environments and server configurations",
  "Provided DNS, email, and hosting troubleshooting support",
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-primary mb-2">// experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
        </div>

        <Card className="p-8 bg-card border-border shadow-elegant">
          <div className="flex items-start gap-4 mb-6 flex-wrap">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold">Technical Support Operator</h3>
              <p className="text-primary font-medium">IT Nut Hosting</p>
            </div>
            <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md">
              Jul 2022 – Present
            </span>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
