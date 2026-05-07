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
    <section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-md">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        {brands.map((brand) => (
          <div key={brand.label} className={`hover:opacity-100 transition-opacity ${brand.show}`}>
            <iconify-icon icon={brand.icon} width="64" height="64"></iconify-icon>
          </div>
        ))}
      </div>
    </section>
  );
}
