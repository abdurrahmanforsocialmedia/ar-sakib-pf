import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const LINKEDIN_URL = "https://www.linkedin.com/in/md-abdur-rahman-sakib-206582203";
const WA_URL = "https://wa.me/8801521356780";
const EMAIL = "arsakibpro@gmail.com";

const EMAILJS_SERVICE_ID = "service_xojx7fc";
const EMAILJS_TEMPLATE_ID = "template_7pujrsj";
const EMAILJS_PUBLIC_KEY = "ML7_Y7PgwnZCwNwYi";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      setError("Input too long.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
          to_name: "Sakib",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSuccess("Message sent! I'll get back to you shortly.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 border-success/40 text-success gap-1.5 py-1 px-3">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Available for Freelance Work
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Let's make your server <span className="text-gradient-primary">faster</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Whether you need full VPS management, a critical migration, or a one-time
            optimization — I'm one message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Quick contact */}
          <div className="space-y-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-success/60 transition-smooth"
            >
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center text-success shrink-0">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-sm text-muted-foreground">Fastest response · usually within minutes</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/60 transition-smooth"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">Send an Email</div>
                <div className="text-sm text-muted-foreground font-mono truncate">{EMAIL}</div>
              </div>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/60 transition-smooth"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Linkedin className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">Connect on LinkedIn</div>
                <div className="text-sm text-muted-foreground">Professional profile</div>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-elegant space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold">Send a Message</h3>
              <p className="text-sm text-muted-foreground mt-1">I'll get back to you shortly.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} placeholder="Tell me about your server or project…" rows={5} />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
