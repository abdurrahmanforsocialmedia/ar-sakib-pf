import { Card } from "@/components/ui/card";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "700+", label: "Migrations" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "50+", label: "Daily Tickets" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-primary mb-3">// about me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Engineering reliable hosting, one server at a time.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a Technical Support Engineer with{" "}
              <span className="text-foreground font-medium">3+ years of experience</span> in hosting,
              server management, and customer support. I specialize in performance optimization, VPS
              management, and troubleshooting complex hosting issues.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Hands-on experience with CloudLinux, LiteSpeed, Apache, cPanel, and DNS systems. My focus
              is always on uptime, speed, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Card
                key={s.label}
                className="p-6 bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-smooth hover:shadow-glow"
              >
                <div className="text-4xl font-bold text-gradient-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
