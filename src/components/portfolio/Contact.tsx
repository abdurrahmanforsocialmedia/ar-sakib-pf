import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6 border-success/40 text-success gap-1.5 py-1 px-3">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          Available for Freelance Work
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Let's make your server <span className="text-gradient-primary">faster</span>.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Whether you need full VPS management, a critical migration, or a one-time optimization — I'm
          one message away.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button size="lg" asChild className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-glow">
            <a href="https://wa.me/8801521356780" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:arsakibpro@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Send Email
            </a>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          <a href="https://wa.me/8801521356780" className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-smooth flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-success" />
            <div>
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="font-mono font-medium">01521356780</div>
            </div>
          </a>
          <a href="mailto:arsakibpro@gmail.com" className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-smooth flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-mono font-medium text-sm">arsakibpro@gmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
