import { useEffect, useRef, useState } from "react";
import { X, TerminalSquare } from "lucide-react";

type Line = { type: "in" | "out"; text: string };

const HELP = [
  "Available commands:",
  "  help       — show this help",
  "  about      — who I am",
  "  skills     — tech stack",
  "  services   — what I offer",
  "  contact    — reach out",
  "  clear      — clear the screen",
];

function run(cmd: string): string[] {
  const c = cmd.trim().toLowerCase();
  if (!c) return [];
  switch (c) {
    case "help":
      return HELP;
    case "about":
      return [
        "Abdur Rahman Sakib — Linux Server & Hosting Expert",
        "3+ years optimizing servers with CloudLinux, LiteSpeed, Apache.",
        "Focus: uptime, speed, client satisfaction.",
      ];
    case "skills":
      return [
        "Panels   : cPanel, WHM, Plesk, Webuzo, DirectAdmin",
        "DevOps   : Linux, SSH, Bash, GitHub, Ansible",
        "Stack    : Apache, LiteSpeed, CloudLinux",
        "Network  : DNS Management, Domain Configuration",
      ];
    case "services":
      return [
        "1. VPS Setup & Full Management",
        "2. Server Performance Optimization",
        "3. Zero-Downtime Website Migration",
        "4. DNS & Email Troubleshooting",
        "5. CloudLinux & LiteSpeed Optimization",
        "6. Security Hardening & Monitoring",
      ];
    case "contact":
      return [
        "WhatsApp : +880 1521356780",
        "Email    : arsakibpro@gmail.com",
        "Status   : Available for freelance",
      ];
    case "clear":
      return ["__CLEAR__"];
    default:
      return [`command not found: ${cmd}. Type 'help' for available commands.`];
  }
}

export function Cli({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "Welcome to sakib@cli — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const out = run(input);
    if (out[0] === "__CLEAR__") {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "in", text: input },
        ...out.map((t): Line => ({ type: "out", text: t })),
      ]);
    }
    setInput("");
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden border border-border shadow-elegant"
        style={{ backgroundColor: "var(--color-terminal)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-white/60 font-mono flex items-center gap-1.5">
              <TerminalSquare className="h-3.5 w-3.5" /> sakib@cli — zsh
            </span>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div ref={scrollRef} className="h-80 overflow-y-auto p-4 font-mono text-sm" style={{ color: "var(--color-terminal-foreground)" }}>
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {l.type === "in" ? (
                <div><span className="text-cyan-400">sakib@vps</span><span className="text-white/60">:~$</span> {l.text}</div>
              ) : (
                <div className="text-white/85">{l.text}</div>
              )}
            </div>
          ))}
          <form onSubmit={submit} className="flex items-center gap-2 mt-1">
            <span className="text-cyan-400">sakib@vps</span><span className="text-white/60">:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
