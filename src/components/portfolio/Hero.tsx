import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sakib from "@/assets/sakib.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-12 items-center">
        <div>
          <Badge variant="outline" className="mb-6 border-accent/40 text-accent gap-1.5 py-1 px-3">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Available for Freelance Work
          </Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            High-Performance{" "}
            <span className="text-gradient-primary">Hosting & VPS</span>{" "}
            Expert
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I optimize servers for speed, security, and 99.9% uptime using{" "}
            <span className="text-foreground font-medium">CloudLinux, LiteSpeed,</span> and{" "}
            <span className="text-foreground font-medium">Apache</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Zap, label: "80% downtime reduced" },
              { icon: Server, label: "3+ years hosting" },
              { icon: ShieldCheck, label: "Trusted by clients" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-sm">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              <a href="#contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/8801521356780" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Get Free Consultation
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary blur-md opacity-60" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-elegant">
              <img src={sakib} alt="Abdur Rahman Sakib — Linux Server & Hosting Expert" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <div>
                <div className="text-xs text-muted-foreground">Uptime</div>
                <div className="font-bold text-success">99.9%</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant font-mono text-xs">
              <div className="text-success">$ uptime</div>
              <div className="text-muted-foreground">load avg: 0.02</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
