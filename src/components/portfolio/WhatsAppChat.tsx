import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";

const WA_NUMBER = "8801521356780";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.117.554 4.184 1.605 6.004L4 28l7.21-1.578A11.94 11.94 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 21.818c-1.83 0-3.625-.49-5.197-1.42l-.372-.22-4.28.937.91-4.17-.243-.385A9.79 9.79 0 0 1 6.182 15c0-5.41 4.41-9.818 9.82-9.818 5.41 0 9.817 4.408 9.817 9.818s-4.408 9.818-9.817 9.818zm5.39-7.358c-.295-.148-1.748-.862-2.018-.96-.27-.098-.467-.148-.664.148-.197.295-.762.96-.935 1.157-.172.197-.345.222-.64.074-.295-.148-1.246-.46-2.373-1.467-.877-.783-1.47-1.75-1.642-2.046-.172-.296-.018-.456.13-.604.133-.133.296-.345.444-.518.148-.173.197-.296.295-.493.098-.197.05-.37-.025-.518-.074-.148-.664-1.6-.91-2.19-.24-.575-.484-.497-.665-.506l-.566-.01c-.197 0-.518.074-.79.37-.27.296-1.034 1.01-1.034 2.464 0 1.454 1.058 2.86 1.206 3.058.148.197 2.083 3.18 5.043 4.46.705.304 1.255.486 1.684.622.708.225 1.352.193 1.86.118.567-.085 1.748-.715 1.996-1.405.247-.69.247-1.282.173-1.405-.074-.123-.27-.197-.566-.345z" />
    </svg>
  );
}

export function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const handleSend = () => {
    const msg = text.trim() || "Hi Sakib, I'd like to talk about my server.";
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Chat"
          className="mb-3 w-[calc(100vw-32px)] max-w-[320px] rounded-2xl overflow-hidden border border-border bg-card shadow-elegant animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between px-4 py-3" style={{ background: "#25D366" }}>
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative h-10 w-10 rounded-full bg-white/25 flex items-center justify-center text-white font-bold shrink-0">
                S
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-white border-2 border-[#25D366]" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold text-sm leading-tight">Sakib</div>
                <div className="text-white/90 text-xs leading-tight">Usually replies in minutes</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/90 hover:text-white p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="bg-muted/40 px-3 py-4">
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-secondary text-secondary-foreground border border-border px-3 py-2 text-sm shadow-sm">
              👋 Hi! How can I help you today?
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 border-t border-border bg-card">
            <input
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              maxLength={1000}
              placeholder="Type a message…"
              className="flex-1 rounded-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={handleSend}
              aria-label="Send message on WhatsApp"
              className="h-9 w-9 rounded-full flex items-center justify-center text-white shrink-0 hover:opacity-90 transition-smooth"
              style={{ background: "#25D366" }}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Sakib on WhatsApp"
        className="wa-ring relative h-14 w-14 rounded-full flex items-center justify-center text-white shadow-elegant hover:scale-105 transition-smooth"
        style={{ background: "#25D366" }}
      >
        {open ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </div>
  );
}
