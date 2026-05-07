import React from "react";

export function HardwareInventory() {
  return (
    <section id="live-classes" className="bg-[#1D2331] text-[#F2EFEA] py-32 section-container dark-section relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-6xl md:text-8xl tracking-tighter font-jakarta font-light">
            Live Classes
          </h2>
          <span className="text-xs font-geist opacity-30 mb-4 tracking-[0.2em]">SPEC_089</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-40 mb-6 font-geist">Live Features</p>
              <div className="space-y-8">
                {[
                  { num: "01", label: "Real-time Biometrics", sub: "Live heart-rate and effort tracking" },
                  { num: "02", label: "Form Synthesis", sub: "Instant AI visual form correction" },
                  { num: "03", label: "Global Leaderboards", sub: "Compete with athletes worldwide" },
                  { num: "04", label: "Direct Trainer Audio", sub: "Low-latency professional guidance" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 group cursor-default">
                    <span className="text-xs font-geist opacity-30 mt-1">{item.num}</span>
                    <div>
                      <h4 className="text-lg font-jakarta font-medium group-hover:text-[#C48C56] transition-colors">{item.label}</h4>
                      <p className="text-xs opacity-40 font-geist mt-1 uppercase tracking-wider">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5">
             <img 
               src="/images/workout-8.jpg" 
               alt="Live Session" 
               className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1D2331] via-transparent to-transparent opacity-60"></div>
             
             {/* Scanning effect */}
             <div className="absolute top-0 left-0 w-full h-px bg-[#C48C56] opacity-30 animate-scan pointer-events-none"></div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:pl-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-40 mb-6 font-geist">Performance Metrics</p>
              <div className="space-y-8">
                {[
                  { label: "Streaming Latency", val: "< 120ms" },
                  { label: "Trainer Certification", val: "Elite Tier" },
                  { label: "Visual Processing", val: "4K / 60fps" },
                  { label: "Telemetry Sync", val: "1000Hz" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-white/5 pb-6">
                    <h4 className="text-xs font-geist opacity-40 uppercase tracking-widest mb-2">{item.label}</h4>
                    <p className="text-2xl font-jakarta font-light text-[#F2EFEA] tracking-tight">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
