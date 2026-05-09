"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#nutrition", label: "Nutrition" },
    { href: "#live-classes", label: "Live Classes" },
    { href: "#pricing", label: "Pricing" },
    { href: "#coaches", label: "Coaches" },
  ];

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 w-full z-[100] h-[72px] flex items-center justify-between px-6 md:px-10 transition-all duration-400 bg-background/80 backdrop-blur-md">
        <Link href="/" className="flex items-center group">
          <img 
            src="/logo/logo_mono_black_transparent.png" 
            alt="NextUp Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105 block dark:hidden"
          />
          <img 
            src="/logo/logo_mono_white_transparent.png" 
            alt="NextUp Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105 hidden dark:block"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
             <ThemeToggle />
             <Link href="/contact" className="border-[1.5px] border-primary text-primary text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-primary hover:text-black transition-all">
               Contact
             </Link>
          </div>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-[110] group" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <ul className="flex flex-col gap-8">
            {navLinks.map((link, idx) => (
              <li 
                key={link.href}
                className={`transition-all duration-500 delay-[${idx * 100}ms] ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-bebas text-5xl tracking-wide text-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pb-16 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-widest uppercase text-foreground/40 font-bold">Theme</span>
              <ThemeToggle />
            </div>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-primary text-black text-center font-bold text-[10px] tracking-widest uppercase py-5 rounded-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
