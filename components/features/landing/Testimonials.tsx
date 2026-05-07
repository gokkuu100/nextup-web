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
    <section className="py-32 section-container bg-[#F2EFEA]">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <p className="text-sm font-medium tracking-tight opacity-50 mb-4 uppercase font-geist">
              ( Field Reports )
            </p>
            <h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light text-[#1D2331]">
              Elite Athlete<br />Validation
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-[#1D2331]/10 flex items-center justify-center hover:bg-[#1D2331] hover:text-[#F2EFEA] transition-all">
              <iconify-icon icon="solar:arrow-left-linear" class="text-xl"></iconify-icon>
            </button>
            <button className="w-12 h-12 rounded-full border border-[#1D2331]/10 flex items-center justify-center hover:bg-[#1D2331] hover:text-[#F2EFEA] transition-all">
              <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="card-flashlight p-8 min-h-[400px] flex flex-col justify-between group cursor-default">
              <div className="card-content">
                <iconify-icon 
                  icon="solar:quote-bold-duotone" 
                  class="text-4xl text-[#C48C56] mb-8 opacity-20 group-hover:opacity-100 transition-opacity"
                ></iconify-icon>
                <p className="text-2xl font-playfair italic leading-relaxed text-[#1D2331] mb-12">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="card-content flex items-end justify-between">
                <div>
                  <p className="font-semibold tracking-tight text-[#1D2331] font-jakarta">
                    {item.author}
                  </p>
                  <p className="text-sm opacity-50 font-geist uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs font-geist opacity-30">{item.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
