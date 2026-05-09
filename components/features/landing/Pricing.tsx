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
    <section id="pricing" className="py-28 px-6 md:px-12 bg-background">
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex justify-center items-center gap-2 mb-4">
          <span className="w-7 h-px bg-primary"></span>
          <span>Choose your plan</span>
          <span className="w-7 h-px bg-primary"></span>
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-foreground animate-on-scroll">
          OUR MEMBERSHIP PLANS
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PLANS.map((plan, idx) => (
          <div 
            key={idx}
            className={`flex flex-col items-center text-center p-10 reveal animate-on-scroll
              ${plan.popular 
                ? "bg-primary scale-105 shadow-[0_0_40px_rgba(198,155,82,0.15)] z-10 relative" 
                : "bg-foreground/[0.02] border border-foreground/10"
              }
            `}
          >
            {plan.popular && <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>}
            <h3 className={`font-bold text-lg mb-2 tracking-wide uppercase font-dmsans ${plan.popular ? "text-black" : "text-foreground"}`}>
              {plan.name}
            </h3>
            <div className={`font-bebas text-6xl mb-6 ${plan.popular ? "text-black" : "text-primary"}`}>
              {plan.price}
              <span className={`text-xl uppercase tracking-widest ${plan.popular ? "text-black/60" : "text-foreground/40"}`}> USD /Month</span>
            </div>
            
            <ul className="space-y-4 text-xs w-full mb-8 flex-1 font-dmsans">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center justify-center gap-2 ${plan.popular ? "text-black font-medium" : "text-foreground/60"}`}>
                  <iconify-icon 
                    icon="solar:check-circle-linear" 
                    class={`text-base ${plan.popular ? "text-black" : "text-primary"}`}
                  ></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className={`w-full text-xs font-bold uppercase tracking-widest py-3.5 transition-colors font-dmsans
                ${plan.popular 
                  ? "bg-black text-primary hover:bg-neutral-900" 
                  : "border border-foreground/20 text-foreground hover:border-primary hover:text-primary"
                }
              `}
            >
              Choose {plan.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
