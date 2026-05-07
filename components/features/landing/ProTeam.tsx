import React from "react";

export function ProTeam() {
  return (
    <section id="coaches" className="py-32 section-container">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="max-w-md">
          <p className="text-sm font-medium tracking-tight opacity-50 mb-6 uppercase font-geist">
            ( Expert Synthesis )
          </p>
          <h2 className="text-5xl md:text-7xl tracking-tighter font-jakarta font-light text-[#1D2331] leading-[0.9] mb-8">
            Certified<br />Coaches
          </h2>
          <p className="text-lg opacity-60 font-geist leading-relaxed text-[#1D2331] mb-12">
            Our elite coaching team is available to calibrate your performance metrics precisely to your spatial and biomechanical requirements.
          </p>

          <div className="flex gap-8 items-start mb-12">
            <iconify-icon icon="solar:arrow-right-up-linear" class="text-6xl text-black/20 flex-shrink-0"></iconify-icon>
            
            <div className="">
              <p className="font-medium tracking-tight mb-4 text-sm uppercase opacity-50 font-geist">Consultation Protocols</p>
              <ul className="space-y-3 text-base font-medium opacity-90 tracking-tight">
                <li className="flex items-center gap-3 font-geist">
                  <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                  Biomechanical analysis & sizing
                </li>
                <li className="flex items-center gap-3 font-geist">
                  <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                  Nutritional density selection
                </li>
                <li className="flex items-center gap-3 font-geist">
                  <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                  Integration with existing routines
                </li>
                <li className="flex items-center gap-3 font-geist">
                  <span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                  Performance timeline review
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-8 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/5 text-[#1D2331]/50">
              <iconify-icon icon="solar:user-circle-bold-duotone" class="text-4xl"></iconify-icon>
            </div>
            <div>
              <p className="text-sm font-medium tracking-tight font-geist">"We refine every movement until it feels inevitable."</p>
              <p className="text-xs opacity-50 mt-1 uppercase tracking-wider font-geist">Elena R. — Lead Biomechanist</p>
            </div>
          </div>

          <a href="#" className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#1D2331] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium">
            <span className="font-geist">Initiate Request</span>
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
          </a>
        </div>

        <div className="h-full min-h-[500px] relative rounded-2xl overflow-hidden card-flashlight">
          <div className="card-content w-full h-full absolute inset-0">
             <img src="/images/workout-7.jpg" alt="Training Configuration" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>

      </div>
    </section>
  );
}
