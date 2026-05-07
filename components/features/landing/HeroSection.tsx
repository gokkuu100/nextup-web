import React from "react";

const WORD1 = "ENGINEERED".split("");
const WORD2 = "FOR".split("");
const WORD3 = "PERFORMANCE".split("");

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 min-h-screen flex flex-col justify-between overflow-hidden section-container">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">

        {/* Animated headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-8">
          <span className="flex">
            {WORD1.map((char, i) => (
              <span key={i} className="clip-text-container">
                <span className="animate-letter font-jakarta font-light" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  {char}
                </span>
              </span>
            ))}
          </span>
          <span className="flex text-black/30">
            {WORD2.map((char, i) => (
              <span key={i} className="clip-text-container">
                <span className="animate-letter font-jakarta font-light" style={{ animationDelay: `${0.65 + i * 0.05}s` }}>
                  {char}
                </span>
              </span>
            ))}
          </span>
          <span className="flex">
            {WORD3.map((char, i) => (
              <span key={i} className="clip-text-container">
                <span className="animate-letter font-jakarta font-light" style={{ animationDelay: `${0.8 + i * 0.045}s` }}>
                  {char}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Center hero image */}
        <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-90 mt-20">
          <img
            src="/images/hero-fit.jpg"
            alt="NextUp athlete in motion"
            className="w-full max-w-4xl object-contain h-[50vh] md:h-[70vh] mix-blend-multiply"
            style={{ maskImage: "linear-gradient(black 70%, transparent 100%)" }}
          />
        </div>

        {/* Bottom two-column text */}
        <div className="w-full flex flex-col md:flex-row justify-end items-start md:items-end mt-auto text-left gap-8">
          <div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
            <a
              href="#"
              className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#1D2331] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105"
            >
              <span className="font-geist">Start Training</span>
              <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-black/10 mt-16 pt-8">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm tracking-tight font-medium opacity-60">
          <div className="flex items-center gap-3 font-geist"><span className="opacity-50">01</span> KINETIC PERFORMANCE</div>
          <div className="flex items-center gap-3 md:justify-center font-geist"><span className="opacity-50">02</span> AI NUTRITION</div>
          <div className="flex items-center gap-3 md:justify-end font-geist"><span className="opacity-50">03</span> ELITE COACHING</div>
        </div>
      </div>
    </section>
  );
}
