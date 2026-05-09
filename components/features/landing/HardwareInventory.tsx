export function HardwareInventory() {
  const programs = [
    {
      title: "Bodybuilding",
      desc: "Develop your muscle mass with our intensive, scientifically-calibrated programs.",
      img: "/images/workout-8.jpg",
      icon: "solar:armchair-linear"
    },
    {
      title: "Cardio & HIIT",
      desc: "Improve your endurance and burn calories fast with high-intensity interval training.",
      img: "/images/fitness.jpg",
      icon: "solar:heart-pulse-linear"
    },
    {
      title: "Cross Training",
      desc: "Full body circuits designed for optimal conditioning and functional performance.",
      img: "/images/hero-yoga.jpg",
      icon: "solar:body-shape-linear"
    }
  ];

  return (
    <section id="live-classes" className="py-28 px-6 md:px-12 bg-background">
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex justify-center items-center gap-2 mb-4">
          <span className="w-7 h-px bg-primary"></span>
          <span>Discover our workouts</span>
          <span className="w-7 h-px bg-primary"></span>
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-foreground animate-on-scroll">
          TARGETED PROGRAMS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program, idx) => (
          <div key={idx} className="group relative h-[450px] overflow-hidden animate-on-scroll">
            <img 
              src={program.img} 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
              alt={program.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-10 h-10 bg-primary text-black flex items-center justify-center rounded-sm mb-4">
                <iconify-icon icon={program.icon} width="24" height="24"></iconify-icon>
              </div>
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-2 uppercase">
                {program.title}
              </h3>
              <p className="text-xs text-white/60 mb-4 font-dmsans">
                {program.desc}
              </p>
              <a href="#contact" className="text-[10px] tracking-[0.15em] uppercase text-primary font-bold hover:text-white transition-colors">
                Join this program →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
