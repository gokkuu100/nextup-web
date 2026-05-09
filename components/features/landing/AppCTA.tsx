import React from "react";
import Link from "next/link";

export function AppCTA() {
  return (
    <section className="py-28 px-6 md:px-12 relative overflow-hidden group">
      <img src="/images/hero-yoga.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" alt="CTA Background"/>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-6 font-bold font-dmsans">Ready for the change?</p>
        <h2 className="font-bebas text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight text-white uppercase mb-10 animate-on-scroll">
          READY TO<br/><span className="text-primary">TRANSFORM?</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-12 max-w-xl mx-auto font-dmsans">
          Join the NextUp elite performance system today and experience precision-engineered training that delivers real results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <Link href="/contact" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all">
            Contact us now
          </Link>
          <a href="tel:+2120000000" className="text-white text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors font-dmsans">
            Or call us: +212 6 00 00 00 00
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-on-scroll">
          <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-sm transition-all w-full sm:w-auto">
            <iconify-icon icon="tabler:brand-apple" class="text-3xl text-white"></iconify-icon>
            <div className="text-left">
              <p className="text-[8px] text-white/40 uppercase tracking-widest leading-none">Download on</p>
              <p className="text-lg font-bebas text-white leading-none mt-1">App Store</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-sm transition-all w-full sm:w-auto">
            <iconify-icon icon="tabler:brand-google-play" class="text-3xl text-white"></iconify-icon>
            <div className="text-left">
              <p className="text-[8px] text-white/40 uppercase tracking-widest leading-none">Get it on</p>
              <p className="text-lg font-bebas text-white leading-none mt-1">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
