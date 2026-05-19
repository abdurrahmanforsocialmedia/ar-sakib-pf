import { useEffect, useRef, useState } from "react";
import { X, TerminalSquare } from "lucide-react";

type Line = { type: "in" | "out"; text: string };

const SECTIONS: Record<string, string> = {
  about: "#about",
  skills: "#skills",
  services: "#services",
  experience: "#experience",
  cases: "#cases",
  "case-studies": "#cases",
  testimonials: "#testimonials",
  contact: "#contact",
  top: "#top",
  home: "#top",
};

const HELP = [
  "Available commands:",
  "  help                 — show this help",
  "  about                — who I am",
  "  skills               — tech stack",
  "  services             — what I offer",
  "  experience           — work history",
  "  cases                — case studies",
  "  contact              — reach out",
  "  ls                   — list sections",
  "  open <section>       — scroll to a section (e.g. open contact)",
  "  cd <section>         — alias for open",
  "  goto <section>       — alias for open",
  "  whoami               — current user",
  "  pwd                  — print working dir",
  "  date                 — current date/time",
  "  uname                — system info",
  "  uptime               — server uptime stats",
  "  neofetch             — system summary",
  "  history              — show command history",
  "  theme                — toggle light/dark",
  "  clear                — clear the screen",
  "  exit                 — close the terminal",
];

function scrollTo(hash: string) {
  if (typeof window === "undefined") return false;
  const el = document.querySelector(hash);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function toggleTheme() {
  if (typeof window === "undefined") return;
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  const next = isDark ? "light" : "dark";
  if (next === "dark") html.classList.add("dark");
  else html.classList.remove("dark");
  html.setAttribute("data-theme", next);
  html.style.colorScheme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* ignore */
  }
}

type Ctx = { onClose: () => void; history: string[] };

function run(raw: string, ctx: Ctx): string[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  const [head, ...rest] = trimmed.split(/\s+/);
  const cmd = head.toLowerCase();
  const arg = rest.join(" ").toLowerCase();

  switch (cmd) {
    case "help":
    case "?":
    case "man":
      return HELP;

    case "about":
      scrollTo("#about");
      return [
        "→ scrolled to About",
        "",
        "Abdur Rahman Sakib — Linux Server & Hosting Expert",
        "3+ years optimizing servers with CloudLinux, LiteSpeed, Apache.",
        "Focus: uptime, speed, client satisfaction.",
      ];

    case "skills":
      scrollTo("#skills");
      return [
        "→ scrolled to Skills",
        "",
        "Expert     : cPanel, WHM, LiteSpeed, CloudLinux, Linux, SSH, Apache, DNS",
        "Proficient : Plesk, Webuzo, DirectAdmin, Bash, PHP-FPM, MySQL, CSF, ModSecurity",
        "Familiar   : Ansible, GitHub, Docker, Server Monitoring",
      ];

    case "services":
      scrollTo("#services");
      return [
        "→ scrolled to Services",
        "",
        "1. VPS Setup & Full Management",
        "2. Server Performance Optimization",
        "3. Zero-Downtime Website Migration",
        "4. DNS & Email Troubleshooting",
        "5. CloudLinux & LiteSpeed Optimization",
        "6. Security Hardening & Monitoring",
      ];

    case "experience":
      scrollTo("#experience");
      return ["→ scrolled to Experience"];

    case "cases":
    case "case-studies":
    case "portfolio":
      scrollTo("#cases");
      return ["→ scrolled to Case Studies"];

    case "testimonials":
      scrollTo("#testimonials");
      return ["→ scrolled to Testimonials"];

    case "contact":
    case "hire":
      scrollTo("#contact");
      return [
        "→ scrolled to Contact",
        "",
        "WhatsApp : +880 1521356780",
        "Email    : arsakibpro@gmail.com",
        "LinkedIn : linkedin.com/in/md-abdur-rahman-sakib-206582203",
        "Status   : Available for freelance",
      ];

    case "ls":
    case "dir":
      return [
        "about/      skills/      services/    experience/",
        "cases/      testimonials/contact/",
      ];

    case "open":
    case "cd":
    case "goto":
    case "scroll": {
      if (!arg) return [`usage: ${cmd} <section>`, `sections: ${Object.keys(SECTIONS).join(", ")}`];
      const target = SECTIONS[arg];
      if (!target) return [`${cmd}: no such section: ${arg}`];
      const ok = scrollTo(target);
      return ok ? [`→ scrolled to ${arg}`] : [`${cmd}: target not found in DOM: ${arg}`];
    }

    case "whoami":
      return ["sakib"];

    case "pwd":
      return ["/home/sakib"];

    case "date":
      return [new Date().toString()];

    case "uname":
      return arg.includes("-a")
        ? ["Linux sakib-vps 6.1.0 #1 SMP x86_64 GNU/Linux"]
        : ["Linux"];

    case "uptime":
      return ["up 99.9%, load avg: 0.02, 0.04, 0.05"];

    case "neofetch":
      return [
        "          sakib@portfolio",
        "          ----------------",
        "  OS     : Linux (Hosting Expert Edition)",
        "  Host   : Bangladesh · UTC+6",
        "  Kernel : 3+ years experience",
        "  Stack  : CloudLinux · LiteSpeed · Apache · cPanel",
        "  Uptime : 99.9%",
        "  Status : Available for freelance",
      ];

    case "history":
      return ctx.history.length
        ? ctx.history.map((c, i) => `${String(i + 1).padStart(3, " ")}  ${c}`)
        : ["(empty)"];

    case "theme":
    case "dark":
    case "light":
      toggleTheme();
      return ["theme toggled."];

    case "echo":
      return [rest.join(" ")];

    case "sudo":
      return ["nice try 😎 — but you don't need root here."];

    case "rm":
      return ["rm: permission denied — this portfolio is read-only."];

    case "clear":
    case "cls":
      return ["__CLEAR__"];

    case "exit":
    case "quit":
    case "close":
      ctx.onClose();
      return ["bye 👋"];

    default:
      return [`command not found: ${cmd}. Type 'help' for available commands.`];
  }
}

export function Cli({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "Welcome to sakib@cli — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
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
    const value = input;
    const out = run(value, { onClose, history });
    if (value.trim()) {
      setHistory((h) => [...h, value.trim()]);
      setHistIdx(-1);
    }
    if (out[0] === "__CLEAR__") {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "in", text: value },
        ...out.map((t): Line => ({ type: "out", text: t })),
      ]);
    }
    setInput("");
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setLines([]);
    }
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
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-80 overflow-y-auto p-4 font-mono text-sm"
          style={{ color: "var(--color-terminal-foreground)" }}
        >
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {l.type === "in" ? (
                <div>
                  <span className="text-cyan-400">sakib@vps</span>
                  <span className="text-white/60">:~$</span> {l.text}
                </div>
              ) : (
                <div className="text-white/85">{l.text}</div>
              )}
            </div>
          ))}
          <form onSubmit={submit} className="flex items-center gap-2 mt-1">
            <span className="text-cyan-400">sakib@vps</span>
            <span className="text-white/60">:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onInputKey}
              className="flex-1 bg-transparent outline-none text-white caret-emerald-400"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              inputMode="text"
              aria-label="Terminal input"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
