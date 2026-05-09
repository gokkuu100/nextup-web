import React from "react";

export function LifestyleSplit() {
  return (
    <section id="nutrition" className="py-28 px-6 md:px-12 bg-background">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative h-[600px] overflow-hidden animate-on-scroll">
          <img 
            src="/images/nutrition.jpg" 
            alt="AI Nutrition" 
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          />
          <div className="absolute top-8 left-8 bg-primary text-black font-bebas text-2xl px-6 py-2 tracking-wide uppercase">
            Precision Fuel
          </div>
        </div>

        <div className="flex flex-col justify-center animate-on-scroll">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-2 mb-6">
            <span className="w-7 h-px bg-primary"></span>
            <span>Fuel your performance</span>
          </p>
          <h2 className="font-bebas text-6xl md:text-8xl leading-[0.85] tracking-tight text-foreground uppercase mb-8">
            SMART NUTRITION<br/><span className="text-primary">ANALYSIS</span>
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-lg mb-10 font-dmsans">
            Our AI analyzes your food and provides personalized recommendations based on your fitness goals. Whether you want to lose weight, build muscle, or maintain - we've got you covered.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 font-dmsans">
            {[
              "Instant nutritional breakdown",
              "Goal-aligned recommendations",
              "Track macros effortlessly",
              "Learn healthier alternatives"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                </div>
                <span className="text-xs text-foreground/70 uppercase tracking-wider font-bold pt-2">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#pricing" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all self-start">
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}
