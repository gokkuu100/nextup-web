import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-background relative overflow-hidden flex flex-col lg:flex-row pt-[72px]">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10">
        <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-primary mb-8 animate-on-scroll">
          <div className="w-8 h-px bg-primary"></div>
          <span className="font-bold font-dmsans">Engineered for Results</span>
        </div>
        
        <h1 className="font-bebas text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.85] tracking-tight uppercase text-foreground animate-on-scroll mb-8">
          ENGINEERED<br/>
          <span className="text-primary">PERFORMANCE</span><br/>
          SYSTEM
        </h1>
        
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-md font-dmsans animate-on-scroll mb-12">
          NextUp delivers precision-engineered personal training for those who demand real results. Expert coaches, AI nutrition, and elite protocols.
        </p>
        
        <div className="flex items-center gap-8 mb-20 animate-on-scroll">
          <Link href="/contact" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all">
            Start Now
          </Link>
          <a href="#gallery" className="text-foreground text-[10px] font-bold tracking-widest opacity-80 hover:opacity-100 hover:gap-3 transition-all uppercase inline-flex items-center gap-2">
            See the Gym →
          </a>
        </div>
        
        <div className="w-full h-px bg-foreground/10 mb-10 animate-on-scroll"></div>

        <div className="flex gap-12 animate-on-scroll">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">7D/7</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Open</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">8AM–11PM</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Hours</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-primary tracking-wide">100%</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 font-bold font-dmsans">Personalised</span>
          </div>
        </div>
      </div>

      {/* Right Image Grid (Three Vertical Panels) */}
      <div className="flex-1 relative min-h-[600px] lg:min-h-screen">
        <div className="absolute inset-0 flex gap-1 p-1">
          {/* Panel 1 */}
          <div className="flex-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-20 bg-[#06DC16]/20 z-10 flex items-end p-2 overflow-hidden">
               <img src="/images/workout-7.jpg" className="w-full h-full object-cover opacity-50" />
            </div>
            <img 
              src="/images/hero-fit.jpg" 
              alt="Elite Athlete" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Panel 2 */}
          <div className="flex-1 relative overflow-hidden group">
            <img 
              src="/images/fit-female.jpg" 
              alt="Strength Training" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Panel 3 */}
          <div className="flex-1 relative overflow-hidden group">
            <img 
              src="/images/fitness.jpg" 
              alt="Gym Environment" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#93c5fd]/50 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
