import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Cli } from "@/components/portfolio/Cli";
import { WhatsAppChat } from "@/components/portfolio/WhatsAppChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdur Rahman Sakib — Linux Server, VPS Management & Hosting Expert" },
      {
        name: "description",
        content:
          "Hosting performance optimization expert and full-managed VPS engineer. CloudLinux, LiteSpeed, Apache, cPanel — 99.9% uptime, zero-downtime migrations, server hardening.",
      },
      { name: "keywords", content: "VPS Management, Server Optimization, Hosting Support, Linux Server Expert, LiteSpeed Optimization, CloudLinux Expert, cPanel Migration" },
      { property: "og:title", content: "Abdur Rahman Sakib — Linux Server & Hosting Expert" },
      { property: "og:description", content: "I optimize servers for speed, security, and 99.9% uptime using CloudLinux, LiteSpeed, and Apache." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [cliOpen, setCliOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav onOpenCli={() => setCliOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Cli open={cliOpen} onClose={() => setCliOpen(false)} />
      <WhatsAppChat />
    </div>
  );
}
