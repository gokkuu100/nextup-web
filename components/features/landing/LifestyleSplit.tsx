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
            AI DRIVEN<br/><span className="text-primary">NUTRITION</span>
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-lg mb-10 font-dmsans">
            Our proprietary AI synthesis engine analyzes your biomechanical output to calibrate the optimal nutritional density for your specific training protocol.
          </p>

          <ul className="space-y-6 mb-12 font-dmsans">
            {[
              { title: "Dynamic Meal Planning", desc: "Adjusts in real-time based on your daily energy expenditure." },
              { title: "Macro Calibration", desc: "Precision protein, carb, and fat ratios for optimal recovery." },
              { title: "Supplements Protocol", desc: "Expertly curated micronutrient stacks for peak cognitive focus." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-bebas text-xl text-foreground tracking-wide uppercase mb-1">{item.title}</h4>
                  <p className="text-xs text-foreground/40 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#pricing" className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all self-start">
            View Nutrition Plans
          </a>
        </div>

      </div>
    </section>
  );
}
