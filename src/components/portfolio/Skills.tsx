import { Shield, Wrench, Headphones, Gauge } from "lucide-react";

const tiers = [
  {
    label: "Expert",
    pillClass:
      "bg-primary/15 text-primary border-primary/30",
    items: ["cPanel", "WHM", "LiteSpeed", "CloudLinux", "Linux", "SSH", "Apache", "DNS Management"],
  },
  {
    label: "Proficient",
    pillClass: "bg-info/15 text-info border-info/30",
    items: ["Plesk", "Webuzo", "DirectAdmin", "Bash", "PHP-FPM", "MySQL", "CSF Firewall", "ModSecurity"],
  },
  {
    label: "Familiar",
    pillClass: "bg-muted text-muted-foreground border-border",
    items: ["Ansible", "GitHub", "Docker (basics)", "Server Monitoring"],
  },
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

        <div className="space-y-6">
          {tiers.map((tier) => (
            <div key={tier.label}>
              <p className="text-sm font-mono text-muted-foreground mb-3">{tier.label}</p>
              <div className="flex flex-wrap gap-2">
                {tier.items.map((i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-md border font-mono ${tier.pillClass}`}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
