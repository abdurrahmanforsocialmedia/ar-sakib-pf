import { Server, Gauge, MoveRight, Mail, Zap, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  { icon: Server, title: "VPS Setup & Full Management", desc: "End-to-end VPS provisioning, hardening, and 24/7 management for production workloads." },
  { icon: Gauge, title: "Server Performance Optimization", desc: "Tune Apache, LiteSpeed, MySQL, and PHP-FPM for blazing-fast TTFB and lower resource usage." },
  { icon: MoveRight, title: "Website Migration (Zero Downtime)", desc: "Seamless cPanel, WHM, and custom server migrations with zero data loss and no downtime." },
  { icon: Mail, title: "DNS & Email Troubleshooting", desc: "Fix mail deliverability, SPF/DKIM/DMARC, and resolve complex DNS propagation issues." },
  { icon: Zap, title: "CloudLinux & LiteSpeed Optimization", desc: "LSCache, LVE limits, and CageFS configuration for shared and reseller hosting environments." },
  { icon: ShieldCheck, title: "Security Hardening & Monitoring", desc: "Firewall (CSF), ModSecurity, malware scanning, and proactive uptime monitoring." },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">// services</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Can Do For You</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Premium hosting services trusted by businesses to keep their servers fast, secure, and online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="p-7 bg-card border-border hover:border-primary/60 transition-smooth hover:-translate-y-1 hover:shadow-elegant group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-smooth" />
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
