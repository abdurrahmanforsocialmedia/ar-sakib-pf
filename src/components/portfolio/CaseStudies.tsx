import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "Performance",
    problem: "Slow hosting server with 4s+ load times",
    solution: "Deployed LiteSpeed + LSCache and tuned CloudLinux LVE limits",
    result: "60% faster load time",
    metric: "60%",
  },
  {
    tag: "Reliability",
    problem: "Frequent downtime impacting client business",
    solution: "Server tuning, kernel updates, and proactive monitoring",
    result: "80% downtime reduction",
    metric: "80%",
  },
  {
    tag: "Migration",
    problem: "High-risk migrations with potential data loss",
    solution: "Zero-downtime migration strategy with rsync + DNS pre-warming",
    result: "700+ successful migrations",
    metric: "700+",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">// case studies</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Real Results, Real Servers</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.tag} className="p-6 sm:p-7 bg-card border-border hover:border-accent/50 transition-smooth flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  {c.tag}
                </span>
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-5">{c.metric}</div>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Problem</div>
                  <p>{c.problem}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Solution</div>
                  <p>{c.solution}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Result</div>
                  <p className="text-success font-medium">{c.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
