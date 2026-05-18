import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "Fast and reliable support, solved my issue in minutes!", author: "Rashed K.", role: "WordPress Site Owner" },
  { quote: "Best support given by Sakib — calm under pressure and gets things done right the first time.", author: "Mahmud H.", role: "Hosting Reseller" },
  { quote: "Migrated my 12 sites to a new VPS without a single second of downtime. Truly professional.", author: "Anika R.", role: "Agency Founder" },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-mono text-primary mb-2">// testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Trusted by Clients</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="p-6 sm:p-7 bg-card border-border hover:shadow-glow transition-smooth relative">
              <Quote className="h-8 w-8 text-primary/40 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-5">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
