import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abdur Rahman Sakib — Linux Server & Hosting Expert" },
      { name: "description", content: "Hosting performance optimization expert. CloudLinux, LiteSpeed, Apache, cPanel — 99.9% uptime, zero-downtime migrations, server hardening." },
      { name: "author", content: "Abdur Rahman Sakib" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "BD" },
      { name: "geo.placename", content: "Bangladesh" },
      { property: "og:title", content: "Abdur Rahman Sakib — Linux Server & Hosting Expert" },
      { property: "og:description", content: "Hosting performance optimization expert. CloudLinux, LiteSpeed, Apache, cPanel — 99.9% uptime, zero-downtime migrations, server hardening." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@arsakibpro" },
      { name: "twitter:creator", content: "@arsakibpro" },
      { name: "twitter:title", content: "Abdur Rahman Sakib — Linux Server & Hosting Expert" },
      { name: "twitter:description", content: "Hosting performance optimization expert. CloudLinux, LiteSpeed, Apache, cPanel — 99.9% uptime, zero-downtime migrations, server hardening." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://ar-sakib-pf.lovable.app/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var d=document.documentElement;if(t==='dark'){d.classList.add('dark');}d.setAttribute('data-theme',t);d.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
