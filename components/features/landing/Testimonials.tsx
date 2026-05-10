import React from "react";

const TESTIMONIALS = [
  {
    quote: "The precision in their training programs is unmatched. It's not just fitness; it's biomechanical engineering for the body.",
    author: "Marcus Chen",
    role: "Elite Triathlete",
    id: "01",
  },
  {
    quote: "Finally, a platform that understands the synthesis between high-level nutrition and actual performance metrics.",
    author: "Sarah Jenkins",
    role: "Performance Director",
    id: "02",
  },
  {
    quote: "The live coaching feels more like a technical consultation. Every rep is calibrated for maximum structural efficiency.",
    author: "David Thorne",
    role: "Professional Athlete",
    id: "03",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6 md:px-12 bg-foreground/[0.03] dark:bg-[#111111]">
      <div className="max-w-[88rem] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-2 mb-4">
              <span className="w-7 h-px bg-primary"></span>
              <span>Validated Results</span>
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl leading-[0.85] tracking-tight text-foreground uppercase">
              FIELD<br/><span className="text-primary">REPORTS</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <iconify-icon icon="solar:arrow-left-linear" class="text-xl"></iconify-icon>
            </button>
            <button className="w-12 h-12 border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-foreground/5 border border-foreground/5 overflow-hidden font-dmsans">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#111111] p-10 min-h-[400px] flex flex-col justify-between group hover:bg-foreground/[0.02] transition-all animate-on-scroll">
              <div>
                <iconify-icon 
                  icon="solar:quote-bold-duotone" 
                  class="text-4xl text-primary mb-8 opacity-20 group-hover:opacity-100 transition-opacity"
                ></iconify-icon>
                <p className="text-xl italic leading-relaxed text-foreground/80 mb-12">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              
              <div className="flex items-end justify-between">
                <div>
                  <h4 className="font-bebas text-2xl text-foreground tracking-wide uppercase mb-1">
                    {item.author}
                  </h4>
                  <p className="text-[10px] tracking-widest text-primary uppercase font-bold">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs font-bebas text-foreground/20">{item.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
