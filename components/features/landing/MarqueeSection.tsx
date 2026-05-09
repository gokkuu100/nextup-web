import React from "react";

export function MarqueeSection() {
  const items = [
    "KINETIC PERFORMANCE",
    "ELITE COACHING",
    "AI NUTRITION",
    "KINETIC PERFORMANCE",
    "ELITE COACHING",
    "AI NUTRITION",
  ];

  return (
    <div className="bg-primary py-3 overflow-hidden relative z-20 border-y border-primary/20">
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-4">
          {[...items, ...items].map((item, i) => (
            <React.Fragment key={i}>
              <span className="font-bebas text-xl tracking-[0.1em] uppercase text-black whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-black text-xl">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
