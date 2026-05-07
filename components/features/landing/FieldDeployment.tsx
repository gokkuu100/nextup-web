import React from "react";
import Link from "next/link";

export function FieldDeployment() {
  return (
    <section className="bg-[#F4F6F8] text-[#1D2331] py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Engineered micro divider */}
        <div className="w-16 h-px bg-[#3F556B]/40 mx-auto mb-10"></div>

        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1D2331]/60 mb-6">
          Field Deployment
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-display leading-tight mb-8 uppercase tracking-tight">
          Built for movement beyond
          <br className="hidden md:block" />
          maintained ground.
        </h2>

        {/* Body */}
        <p className="text-lg text-[#1D2331]/70 leading-relaxed mb-12 max-w-[55ch] mx-auto">
          NextUp designs modular fitness systems engineered for field athletes
          operating in variable environments. Every element exists to reduce
          friction, manage load, and extend endurance.
        </p>

        {/* System categories */}
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3F556B] mb-12">
          Programs / AI Nutrition / Live Classes / Analytics
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Primary */}
          <Link
            href="#inventory"
            className="bg-[#1D2331] text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300"
          >
            Enter the System
          </Link>

          {/* Secondary */}
          <Link
            href="#inventory"
            className="text-xs font-semibold uppercase tracking-widest text-[#1D2331]/70 hover:text-[#3F556B] transition-colors"
          >
            View Inventory →
          </Link>
        </div>
      </div>
    </section>
  );
}
