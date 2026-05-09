import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-background relative overflow-hidden flex flex-col lg:flex-row pt-[72px]">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10">
        <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-primary mb-8 animate-on-scroll">
          <div className="w-8 h-px bg-primary"></div>
          <span className="font-bold font-dmsans">System_01 // On-Demand</span>
        </div>
        
        <h1 className="font-bebas text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.85] tracking-tight uppercase text-foreground animate-on-scroll mb-8">
          FITNESS.<br/>
          <span className="text-primary">ON DEMAND.</span><br/>
          ENGINEERED.
        </h1>
        
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-md font-dmsans animate-on-scroll mb-12">
          The elite on-demand network for fitness professionals and serious athletes. Stop scheduling weeks in advance. Lock in local trainers instantly with dynamic pricing and a rapid 3-minute matchmaking protocol.
        </p>
        
        <div className="flex items-center gap-8 mb-20 animate-on-scroll">
          <Link href="/contact" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all">
            Book a Session
          </Link>
          <a href="#trainers" className="text-foreground text-[10px] font-bold tracking-widest opacity-80 hover:opacity-100 hover:gap-3 transition-all uppercase inline-flex items-center gap-2">
            Become a Trainer →
          </a>
        </div>
        
        <div className="w-full h-px bg-foreground/10 mb-10 animate-on-scroll"></div>

        <div className="flex gap-12 animate-on-scroll">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">100%</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Real-Time</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">&lt; 3 MIN</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Match Rate</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">24/7</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Availability</span>
          </div>
        </div>
      </div>

      {/* Right Image Grid (Three Image Bento) */}
      <div className="flex-1 relative min-h-[600px] lg:min-h-screen p-4 lg:p-10">
        <div className="h-full grid grid-cols-12 grid-rows-6 gap-4">
          
          {/* Main Large Image */}
          <div className="col-span-7 row-span-6 relative overflow-hidden group rounded-2xl shadow-2xl">
            <img 
              src="/images/hero-fit.jpg" 
              alt="Elite Performance" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
               <div className="flex items-center gap-3 mb-3">
                 <span className="w-8 h-px bg-primary"></span>
                 <span className="text-[10px] tracking-[0.3em] text-primary font-bold uppercase">Core_01</span>
               </div>
               <h4 className="font-bebas text-4xl text-white uppercase leading-none tracking-tight">Technical<br/>Superiority</h4>
            </div>
          </div>
          
          {/* Top Right Image */}
          <div className="col-span-5 row-span-3 relative overflow-hidden group rounded-2xl shadow-xl">
            <img 
              src="/images/fit-female.jpg" 
              alt="Structural Strength" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          
          {/* Bottom Right Image */}
          <div className="col-span-5 row-span-3 relative overflow-hidden group rounded-2xl shadow-xl">
            <img 
              src="/images/fitness.jpg" 
              alt="Elite Environment" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
