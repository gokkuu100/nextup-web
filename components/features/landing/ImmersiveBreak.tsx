import React from "react";

export function ImmersiveBreak() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center section-container group">
      <div className="absolute inset-0 bg-black/20 z-10 transition-colors group-hover:bg-black/10" />
      <img
        src="/images/fitness.jpg"
        alt="Athlete training"
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
      />
      <div className="relative z-20 text-center text-white max-w-3xl px-6">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight drop-shadow-lg font-jakarta font-light">
          Engineered around human mechanics, anticipating your movement before you make it.
        </h2>
        <div className="flex items-center justify-center gap-3 text-lg opacity-90 drop-shadow-md">
          <div className="w-8 h-[1px] bg-white/60" />
          <p className="font-geist">Metrics indicate 98% optimal performance alignment.</p>
          <div className="w-8 h-[1px] bg-white/60" />
        </div>
      </div>
    </section>
  );
}
