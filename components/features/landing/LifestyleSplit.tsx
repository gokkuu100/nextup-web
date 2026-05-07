import React from "react";

export function LifestyleSplit() {
  return (
    <section id="nutrition" className="grid grid-cols-1 md:grid-cols-2 h-[80vh] w-full">
      {/* Left */}
      <div className="relative overflow-hidden group">
        <img
          src="/images/fit-abs.jpg"
          alt="Athlete in training"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Right */}
      <div className="relative overflow-hidden group">
        <img
          src="/images/fit-female.jpg"
          alt="Recovery and mobility"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute bottom-8 right-8 text-white/80 pointer-events-none text-4xl select-none">
          ✳
        </div>
      </div>
    </section>
  );
}
