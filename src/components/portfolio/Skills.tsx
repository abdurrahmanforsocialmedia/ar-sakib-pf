import { Server, Terminal, Globe, Network, Shield, Wrench, Headphones, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";

const groups = [
  { icon: Server, title: "Hosting Panels", items: ["cPanel", "WHM", "Plesk", "Webuzo", "DirectAdmin"] },
  { icon: Terminal, title: "Server & DevOps", items: ["Linux", "SSH", "Bash", "GitHub", "Ansible"] },
  { icon: Globe, title: "Web Server Stack", items: ["Apache", "LiteSpeed", "CloudLinux"] },
  { icon: Network, title: "Networking", items: ["DNS Management", "Domain Configuration"] },
];

const expertise = [
  { icon: Gauge, label: "Performance Optimization" },
  { icon: Shield, label: "Server Security" },
  { icon: Wrench, label: "Troubleshooting" },
  { icon: Headphones, label: "Customer Support" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">// stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Core Skills & Tools</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(({ icon: Icon, title, items }) => (
            <Card key={title} className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border font-mono">
                    {i}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50">
              <Icon className="h-5 w-5 text-accent" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
