import React from "react";

export function MetricsSection() {
  const metrics = [
    {
      value: "10K+",
      unit: "",
      label: "Exercise Library",
      delay: "0.1s",
    },
    {
      value: "500+",
      unit: "",
      label: "Certified Coaches",
      delay: "0.2s",
    },
    {
      value: "24/7",
      unit: "",
      label: "AI Performance Support",
      delay: "0.3s",
    },
    {
      value: "95",
      unit: "%",
      label: "Client Success Rate",
      delay: "0.4s",
    },];

  return (
    <section className="bg-[#1D2331] border-y border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 text-center">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_${metric.delay}_both]`}
            >
              <span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-4 drop-shadow-lg">
                {metric.value}
                <span className="text-3xl text-[#3F556B] ml-1">
                  {metric.unit}
                </span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
