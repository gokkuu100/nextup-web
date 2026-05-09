import React from "react";

const brands = [
  { icon: "simple-icons:nike",         label: "Nike",          show: "" },
  { icon: "simple-icons:adidas",       label: "Adidas",        show: "hidden sm:block" },
  { icon: "simple-icons:underarmour",  label: "Under Armour",  show: "" },
  { icon: "simple-icons:garmin",       label: "Garmin",        show: "" },
  { icon: "simple-icons:apple",        label: "Apple Fitness", show: "hidden md:block" },
  { icon: "simple-icons:strava",       label: "Strava",        show: "hidden lg:block" },
  { icon: "simple-icons:peloton",      label: "Peloton",       show: "" },
  { icon: "simple-icons:whoop",        label: "WHOOP",         show: "hidden sm:block" },
];

export function TrustedBy() {
  return (
    <section className="py-20 bg-foreground/[0.03] dark:bg-[#111111] border-b border-foreground/5 overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
        <p className="text-center font-bebas text-sm tracking-[0.3em] uppercase text-foreground/30 mb-12">
          TRUSTED BY GLOBAL LEADERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <div key={brand.label} className={`hover:opacity-100 transition-opacity hover:text-primary ${brand.show}`}>
              <iconify-icon icon={brand.icon} width="40" height="40"></iconify-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
