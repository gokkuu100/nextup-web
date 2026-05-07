import React from "react";

export function MarqueeSection() {
  const items = [
    "ENGINEERED PERFORMANCE",
    "ARCHITECTURAL COACHING",
    "STRUCTURAL INTEGRITY",
    "ENGINEERED PERFORMANCE",
    "ARCHITECTURAL COACHING",
    "STRUCTURAL INTEGRITY",
  ];

  return (
    <section className="bg-[#0F1219] text-[#F2EFEA] py-8 overflow-hidden marquee-mask">
      <div className="animate-marquee flex items-center gap-8 text-5xl md:text-7xl font-medium tracking-tighter whitespace-nowrap opacity-20">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className="font-jakarta font-light">{item}</span>
            <iconify-icon icon="solar:asterisk-bold-duotone" class="text-3xl"></iconify-icon>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
