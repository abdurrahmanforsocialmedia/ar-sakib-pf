export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground text-center sm:text-left">
        <p>© {new Date().getFullYear()} Abdur Rahman Sakib. All rights reserved.</p>
        <p className="font-mono text-xs">Built with care · Linux & Hosting Expert</p>
      </div>
    </footer>
  );
}
