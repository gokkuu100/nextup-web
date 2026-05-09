export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[72px] relative overflow-hidden section-container">
      
      <div className="flex flex-col justify-center px-6 md:px-12 py-16 z-10 bg-background/80 lg:bg-transparent lg:backdrop-blur-none backdrop-blur-md">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary mb-6 animate-on-scroll">
          <div className="w-8 h-px bg-primary"></div>
          <span className="font-dmsans">Engineered for Results</span>
        </div>
        
        <h1 className="font-bebas text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-tight uppercase text-foreground animate-on-scroll">
          ENGINEERED<br/><span className="text-primary">PERFORMANCE</span><br/>SYSTEM
        </h1>
        
        <p className="mt-6 text-sm md:text-base text-foreground/60 leading-relaxed max-w-md font-dmsans animate-on-scroll">
          NextUp delivers precision-engineered personal training for those who demand real results. Expert coaches, AI nutrition, and elite protocols.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10 animate-on-scroll">
          <a href="#pricing" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-lime-300 hover:-translate-y-0.5 transition-all">
            Start Now
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 text-foreground text-[10px] font-bold tracking-widest opacity-80 hover:opacity-100 hover:gap-3 transition-all uppercase">
            See the Gym →
          </a>
        </div>
        
        <div className="flex gap-8 mt-12 pt-8 border-t border-foreground/10 animate-on-scroll">
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-3xl text-primary tracking-wide">7D/7</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-dmsans">Open</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-3xl text-primary tracking-wide">8AM–11PM</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-dmsans">Hours</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-3xl text-primary tracking-wide">100%</span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/40 font-dmsans">Personalised</span>
          </div>
        </div>
      </div>

      {/* Hero Photo Grid */}
      <div className="absolute inset-0 lg:relative grid grid-cols-3 grid-rows-3 gap-1 overflow-hidden h-full w-full z-0 lg:z-10 opacity-30 lg:opacity-100">
        <div className="col-span-2 row-span-1 overflow-hidden relative group">
          <img src="/images/hero-fit.jpg" alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        </div>
        <div className="col-start-3 col-span-1 row-span-2 overflow-hidden relative group">
          <img src="/images/fitness.jpg" alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        </div>
        <div className="col-span-1 row-span-2 row-start-2 overflow-hidden relative group">
          <img src="/images/fit-abs.jpg" alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        </div>
        <div className="col-start-2 row-start-2 overflow-hidden relative group">
          <img src="/images/workout-5.jpg" alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        </div>
        <div className="col-start-2 col-span-2 row-start-3 overflow-hidden relative group">
          <img src="/images/workout-7.jpg" alt="Prime Gym" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        </div>
      </div>
    </section>
  );
}
