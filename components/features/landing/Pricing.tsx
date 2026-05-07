import React from "react";

const PLANS = [
  {
    name: "Free",
    price: "0",
    description: "Essential access to the NextUp network.",
    features: ["Nearby Trainer Matching", "Basic Trainer Profiles", "Community Ratings", "Manual Scheduling"],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Basic",
    price: "7.99",
    description: "Enhanced capabilities for regular training.",
    features: ["Instant Trainer Requests", "Real-time Availability", "Meetup Coordination", "In-app Chat Support"],
    button: "Choose Basic",
    popular: true,
  },
  {
    name: "Pro",
    price: "14.99",
    description: "The ultimate performance architecture.",
    features: ["Priority Dispatch system", "Algorithmic Training Plans", "Secure Booking Locking", "Advanced Analytics"],
    button: "Go Pro",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 section-container bg-[#F2EFEA]">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-24">
          <p className="text-sm font-medium tracking-tight opacity-50 mb-4 uppercase font-geist">
            ( Value Architecture )
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tighter font-jakarta font-light text-[#1D2331]">
            Calibrated Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 border
                ${plan.popular 
                  ? "bg-[#1D2331] text-[#F2EFEA] border-[#1D2331] scale-105 z-10 shadow-2xl" 
                  : "bg-white/50 text-[#1D2331] border-black/5 hover:border-[#1D2331]/20"
                }
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-jakarta font-light mb-1">{plan.name}</h3>
                    <p className={`text-sm opacity-60 font-geist ${plan.popular ? "text-white/70" : ""}`}>
                      {plan.description}
                    </p>
                  </div>
                  {plan.popular && (
                    <span className="bg-[#C48C56] text-[#1D2331] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-jakarta font-light tracking-tighter">${plan.price}</span>
                    <span className="text-sm opacity-50 font-geist">/month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <iconify-icon 
                        icon="solar:check-read-linear" 
                        class={`text-xl ${plan.popular ? "text-[#C48C56]" : "text-[#1D2331]/30"}`}
                      ></iconify-icon>
                      <span className="text-sm font-geist opacity-80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 font-geist
                ${plan.popular 
                  ? "bg-[#F2EFEA] text-[#1D2331] hover:bg-white" 
                  : "border border-[#1D2331]/10 hover:bg-[#1D2331] hover:text-[#F2EFEA]"
                }
              `}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
