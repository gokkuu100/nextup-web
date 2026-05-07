import React from "react";

export function AppCTA() {
  return (
    <section className="bg-[#1D2331] text-[#F2EFEA] py-32 section-container overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-6 h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          
          <div className="flex items-center gap-2 mb-8 opacity-50 uppercase tracking-[0.2em] text-xs font-semibold font-geist">
            <iconify-icon icon="solar:smartphone-device-linear" class="text-lg"></iconify-icon>
            Digital Command Center
          </div>

          <h2 className="text-5xl md:text-7xl tracking-tighter font-jakarta font-light mb-12">
            Start Your Fitness<br />Journey Today
          </h2>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#" className="flex items-center gap-3 bg-white text-[#1D2331] px-8 py-4 rounded-2xl hover:scale-105 transition-transform font-semibold">
              <iconify-icon icon="simple-icons:apple" class="text-3xl"></iconify-icon>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase opacity-50 font-geist">Download on the</p>
                <p className="text-lg font-jakarta">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-white text-[#1D2331] px-8 py-4 rounded-2xl hover:scale-105 transition-transform font-semibold">
              <iconify-icon icon="simple-icons:googleplay" class="text-3xl"></iconify-icon>
              <div className="text-left leading-tight">
                <p className="text-[10px] uppercase opacity-50 font-geist">Get it on</p>
                <p className="text-lg font-jakarta">Google Play</p>
              </div>
            </a>
          </div>
          <p className="text-lg md:text-xl opacity-70 font-normal leading-relaxed mb-12 font-geist">
            Instant trainer requests, real-time availability, and location-based meetup systems — all in one core performance app.
          </p>
        </div>
      </div>
    </section>
  );
}
