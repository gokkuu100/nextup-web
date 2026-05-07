import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#1D2331] text-[#F2EFEA] pt-24 pb-12 section-container dark-section border-t border-white/10">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
        
        <a href="#" className="flex items-start group relative">
          <img 
            src="/logo/nextup_primary_logo_dark_preview.png" 
            alt="NextUp Logo" 
            className="h-16 md:h-24 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        <div className="max-w-sm">
          <p className="text-lg opacity-70 font-normal leading-relaxed font-geist">
            We synthesize performance science with refined coaching. Every program is constructed using highly calibrated data to elevate physical mechanics and endure a lifetime of results.
          </p>
        </div>

      </div>

      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-12 text-xs font-medium tracking-tight opacity-50 uppercase border-t border-white/10 pt-8">
        
        <div className="flex justify-between w-full">
          <p className="font-geist">© {new Date().getFullYear()} NextUp Fitness. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="font-geist">Privacy</span>
            <span className="font-geist">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
