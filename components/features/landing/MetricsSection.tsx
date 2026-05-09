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
    <section className="bg-foreground text-background border-y border-background/5 relative z-20 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-background/5 text-center">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_${metric.delay}_both]`}
            >
              <span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-background tracking-tighter mb-4 drop-shadow-lg">
                {metric.value}
                <span className="text-3xl opacity-30 ml-1">
                  {metric.unit}
                </span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-background/50 font-semibold">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
