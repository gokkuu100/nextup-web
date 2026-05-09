export function FieldDeployment() {
  const services = [
    {
      num: "01",
      title: "Dynamic Programs",
      desc: "Modular fitness systems engineered for high-performance athletes in variable environments.",
      icon: "solar:clipboard-list-linear"
    },
    {
      num: "02",
      title: "AI Nutrition",
      desc: "Precision nutritional density selection calibrated to your unique biomechanical requirements.",
      icon: "solar:apple-linear"
    },
    {
      num: "03",
      title: "Live Classes",
      desc: "Real-time elite coaching sessions designed to push your limits and refine movement.",
      icon: "solar:play-circle-linear"
    },
    {
      num: "04",
      title: "Elite Equipment",
      desc: "Access to state-of-the-art strength and cardio architecture for optimal conditioning.",
      icon: "solar:dumbell-linear"
    }
  ];

  return (
    <section id="features" className="py-28 px-6 md:px-12 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-2 mb-4">
            <span className="w-7 h-px bg-primary"></span>
            <span>What we offer</span>
          </p>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-foreground animate-on-scroll">
            OUR PREMIUM<br/>SERVICES
          </h2>
        </div>
        <p className="text-sm text-foreground/60 leading-relaxed max-w-lg font-dmsans animate-on-scroll">
          Every element of the NextUp system exists to reduce friction, manage load, and extend endurance through precision engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-primary/10 border border-primary/10 overflow-hidden">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className="bg-background p-8 md:p-10 relative overflow-hidden group hover:bg-foreground/[0.03] transition-colors duration-300 min-w-[280px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-500 animate-on-scroll"
          >
            <span className="absolute top-4 right-6 font-bebas text-7xl text-primary/5 select-none">{service.num}</span>
            <div className="w-12 h-12 mb-8 text-primary flex items-center justify-center">
              <iconify-icon icon={service.icon} width="48" height="48"></iconify-icon>
            </div>
            <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-3 leading-tight uppercase">
              {service.title}
            </h3>
            <p className="text-xs text-foreground/50 leading-relaxed font-dmsans">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
