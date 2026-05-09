import React from "react";

export function DoctrineSection() {
  return (
    <section className="relative w-full bg-background text-foreground overflow-hidden transition-colors duration-500">
      {/* subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      {/* top + bottom hairlines (keeps the break feeling engineered) */}
      <div className="absolute inset-x-0 top-0 h-px bg-foreground/10"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10"></div>

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 lg:py-32 text-center">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          <span className="h-px w-10 bg-foreground/20"></span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] opacity-55">
            NEXTUP DOCTRINE
          </span>
          <span className="h-px w-10 bg-foreground/20"></span>
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter uppercase text-foreground leading-[0.9] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          Engineered for the <span className="opacity-50">elite</span>
          <br />
          athlete
        </h2>

        <p className="mt-8 font-sans text-lg md:text-xl opacity-60 max-w-[40ch] mx-auto leading-relaxed animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
          NextUp develops personalized training systems for peak performance and
          unmatched athletic longevity.
        </p>

        {/* micro-divider */}
        <div className="mt-10 flex justify-center">
          <span className="h-px w-20 bg-foreground/20"></span>
        </div>
      </div>
    </section>
  );
}
