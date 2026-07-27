import React from "react";
import Link from "next/link";
import { Header } from "@/components/features/landing/Header";
import { Footer } from "@/components/features/landing/Footer";
import { LEGAL } from "@/lib/legal/site";

type LegalPageShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  relatedLinks?: { href: string; label: string }[];
};

export function LegalPageShell({
  title,
  subtitle,
  children,
  relatedLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/delete-data", label: "Delete My Data" },
  ],
}: LegalPageShellProps) {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24 font-dmsans">
      <Header />

      <section className="py-16 px-6 md:px-12 border-b border-foreground/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-4">
            Legal · {LEGAL.appName}
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-tight uppercase text-foreground mb-4">
            {title}
          </h1>
          <p className="text-sm text-foreground/60 leading-relaxed">{subtitle}</p>
          <p className="mt-4 text-xs text-foreground/40">
            Effective date: {LEGAL.effectiveDate} · Last updated: {LEGAL.effectiveDate}
          </p>

          <nav className="mt-8 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-widest uppercase px-4 py-2 border border-foreground/15 hover:border-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto legal-prose">{children}</div>
      </section>

      <Footer />
    </main>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <h2 className="font-bebas text-2xl tracking-wide uppercase text-foreground mb-4">{title}</h2>
      <div className="space-y-4 text-sm text-foreground/75 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
