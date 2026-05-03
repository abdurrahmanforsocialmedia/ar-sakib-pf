import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const WA_NUMBER = "8801521356780";

export function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("wa_chat_name");
    if (stored) setName(stored);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 100);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (name.length > 100 || phone.length > 30 || message.length > 1000) {
      setError("Input too long.");
      return;
    }
    setLoading(true);
    localStorage.setItem("wa_chat_name", name.trim());
    const text = `Hello, my name is ${name.trim()}.\nMy number is ${phone.trim()}.\nMessage: ${message.trim()}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
      setOpen(false);
      setMessage("");
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-success px-4 py-3 text-success-foreground shadow-glow transition-smooth hover:scale-105"
        aria-label="Open WhatsApp Live Chat"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Live Chat</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-0 sm:pointer-events-none"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="pointer-events-auto fixed bottom-0 inset-x-0 sm:bottom-24 sm:right-5 sm:inset-x-auto sm:w-[360px] max-h-[90vh] overflow-hidden rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-elegant animate-in slide-in-from-bottom-5 fade-in duration-200"
          >
            <div className="flex items-center justify-between bg-success px-4 py-3 text-success-foreground">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Abdur Rahman Sakib</div>
                  <div className="text-xs opacity-90 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Typically replies in minutes
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="opacity-80 hover:opacity-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 bg-muted/30">
              <div className="rounded-lg bg-card p-3 text-sm shadow-sm border border-border max-w-[85%]">
                👋 Hi! Send me your details and I'll continue the chat on WhatsApp.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-3 bg-card">
              <div>
                <Label htmlFor="wa-name" className="text-xs">Name</Label>
                <Input id="wa-name" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} maxLength={100} placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="wa-phone" className="text-xs">Phone</Label>
                <Input id="wa-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={30} placeholder="+880…" />
              </div>
              <div>
                <Label htmlFor="wa-msg" className="text-xs">Message</Label>
                <Textarea id="wa-msg" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} placeholder="How can I help?" rows={3} />
              </div>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full bg-success text-success-foreground hover:opacity-90">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Send className="h-4 w-4" /> Start Chat on WhatsApp</>}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
