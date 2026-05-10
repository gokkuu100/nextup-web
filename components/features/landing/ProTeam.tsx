export function ProTeam() {
  const coaches = [
    {
      name: "MJ.",
      role: "Lead Biomechanist",
      img: "/images/fit-female.jpg"
    },
    {
      name: "MJ",
      role: "Performance Engineer",
      img: "/images/hero-fit.jpg"
    },
    {
      name: "MJ",
      role: "Kinetic Coach",
      img: "/images/fit-abs.jpg"
    }
  ];

  return (
    <section id="coaches" className="py-28 px-6 md:px-12 bg-background">
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex justify-center items-center gap-2 mb-4">
          <span className="w-7 h-px bg-primary"></span>
          <span>Meet the team</span>
          <span className="w-7 h-px bg-primary"></span>
        </p>
        <h2 className="font-bebas text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-foreground animate-on-scroll">
          EXPERT COACHES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coaches.map((coach, idx) => (
          <div key={idx} className="group text-center animate-on-scroll">
            <div className="relative overflow-hidden mb-6 h-[450px]">
              <img 
                src={coach.img} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                alt={coach.name}
              />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="w-10 h-10 rounded-sm bg-primary text-black flex items-center justify-center hover:bg-white">
                  <iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
                </a>
              </div>
            </div>
            <h3 className="font-bebas text-3xl text-foreground tracking-wide mb-1 uppercase">{coach.name}</h3>
            <p className="text-[10px] tracking-widest text-primary uppercase font-bold font-dmsans">{coach.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
