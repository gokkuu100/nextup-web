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

      {/* Right Image Grid (Bento Grid) */}
      <div className="flex-1 relative min-h-[600px] lg:min-h-screen p-4 lg:p-10">
        <div className="h-full grid grid-cols-2 grid-rows-4 gap-4">
          
          {/* Big Item 1 */}
          <div className="col-span-1 row-span-3 relative overflow-hidden group rounded-xl border border-foreground/5 shadow-2xl">
            <img 
              src="/images/hero-fit.jpg" 
              alt="Elite Athlete" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
               <span className="text-[10px] tracking-widest text-primary font-bold uppercase">System_01</span>
               <h4 className="font-bebas text-2xl text-white uppercase">Precision</h4>
            </div>
          </div>
          
          {/* Top Right Item 2 */}
          <div className="col-span-1 row-span-2 relative overflow-hidden group rounded-xl border border-foreground/5 shadow-xl">
            <img 
              src="/images/fit-female.jpg" 
              alt="Strength Training" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Bottom Middle Item 3 */}
          <div className="col-span-1 row-span-2 relative overflow-hidden group rounded-xl border border-foreground/5 shadow-xl">
            <img 
              src="/images/fitness.jpg" 
              alt="Gym Environment" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Bottom Left Small Item 4 */}
          <div className="col-span-1 row-span-1 relative overflow-hidden group rounded-xl border border-foreground/5 shadow-xl">
             <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-10 flex items-center justify-center p-4">
                <img src="/logo/nextup_icon_preview.png" className="h-12 w-auto opacity-80" />
             </div>
             <img 
              src="/images/workout-7.jpg" 
              alt="Gym Gear" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
