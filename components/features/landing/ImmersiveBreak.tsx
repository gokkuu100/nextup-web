import React from "react";

export function ImmersiveBreak() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center group">
      <img
        src="/images/fitness.jpg"
        alt="Athlete training"
        className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-out brightness-50"
      />
      <div className="relative z-20 text-center px-6">
        <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-6 font-bold font-dmsans">The Booking Engine</p>
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] text-white font-bebas leading-none tracking-tight uppercase mb-8 drop-shadow-2xl">
          CONNECTING<br/><span className="text-primary">CHAMPIONS</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-primary/50" />
          <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-dmsans">Built for Real-Time Execution</p>
          <div className="w-12 h-px bg-primary/50" />
        </div>
      </div>
    </section>
  );
}
