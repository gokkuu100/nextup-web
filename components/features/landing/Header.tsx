import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full z-50 h-[72px] flex items-center justify-between px-6 md:px-10 transition-all duration-400 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <Link href="/" className="flex items-center group">
        <img 
          src="/logo/nextup_primary_logo_preview-removebg-preview.png" 
          alt="NextUp Logo" 
          className="h-10 w-auto transition-transform group-hover:scale-105 block dark:hidden"
        />
        <img 
          src="/logo/nextup_primary_logo_dark_preview-removebg-preview.png" 
          alt="NextUp Logo" 
          className="h-10 w-auto transition-transform group-hover:scale-105 hidden dark:block"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        <li><Link href="#features" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Features</Link></li>
        <li><Link href="#nutrition" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Nutrition</Link></li>
        <li><Link href="#live-classes" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Live Classes</Link></li>
        <li><Link href="#pricing" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Pricing</Link></li>
        <li><Link href="#coaches" className="text-xs tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Coaches</Link></li>
      </ul>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-5">
           <ThemeToggle />
           <a href="#contact" className="border-[1.5px] border-primary text-primary text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-primary hover:text-black transition-all">
             Join Now
           </a>
        </div>
        
        <button className="md:hidden flex flex-col gap-1.5 p-2 z-50 group" id="hamburger" aria-label="Menu">
          <span className="block w-6 h-0.5 bg-foreground transition-transform origin-center"></span>
          <span className="block w-6 h-0.5 bg-foreground transition-opacity"></span>
          <span className="block w-6 h-0.5 bg-foreground transition-transform origin-center"></span>
        </button>
      </div>
    </nav>
  );
}
