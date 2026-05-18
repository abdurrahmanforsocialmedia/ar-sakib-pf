import { useEffect, useState } from "react";
import { Moon, Sun, Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onOpenCli }: { onOpenCli: () => void }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-smooth ${
        scrolled || menuOpen ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold shrink-0">
          <span className="text-gradient-primary text-base sm:text-lg">~/sakib</span>
          <span className="cursor-blink" />
        </a>
        <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-smooth">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" onClick={onOpenCli} aria-label="Open CLI">
            <Terminal className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 hidden sm:inline-flex">
            <a href="#contact">Hire Me</a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-3 py-2 rounded-md text-sm text-center bg-gradient-primary text-primary-foreground font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
