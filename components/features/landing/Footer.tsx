import React from "react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-20 border-t border-foreground/5 transition-colors duration-500">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
        
        <div className="col-span-1 lg:col-span-1">
          <a href="#" className="flex items-center mb-6 group">
            <img 
              src="/logo/nextup_primary_logo_preview-removebg-preview.png" 
              alt="NextUp Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105 logo-green"
            />
          </a>
          <p className="text-xs text-foreground/50 leading-relaxed max-w-xs font-dmsans">
            The next generation of fitness performance. Engineered protocols for elite athletes and those who demand results.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-bebas text-lg tracking-widest uppercase mb-6 text-foreground">Navigation</h4>
          <ul className="space-y-3 text-xs tracking-widest uppercase text-foreground/50 font-dmsans">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#programs" className="hover:text-primary transition-colors">Programs</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#coaches" className="hover:text-primary transition-colors">Coaches</a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bebas text-lg tracking-widest uppercase mb-6 text-foreground">Contact</h4>
          <ul className="space-y-3 text-xs tracking-widest uppercase text-foreground/50 font-dmsans">
            <li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear" class="text-primary"></iconify-icon> +212 6 00 00 00 00</li>
            <li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear" class="text-primary"></iconify-icon> hello@nextup.com</li>
            <li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear" class="text-primary"></iconify-icon> 123 Performance Way</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-bebas text-lg tracking-widest uppercase mb-6 text-foreground">Newsletter</h4>
          <div className="flex border-b border-foreground/20 pb-2">
            <input type="email" placeholder="YOUR EMAIL" className="bg-transparent text-[10px] tracking-widest outline-none flex-1 font-dmsans"/>
            <button className="text-primary hover:text-white transition-colors">
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] tracking-[0.2em] uppercase text-foreground/30 font-dmsans">
        <p>© {new Date().getFullYear()} NextUp Fitness. Built for champions.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
