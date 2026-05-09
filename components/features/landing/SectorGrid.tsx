"use client";

import React, { useState } from 'react';

const ACCORDION_ITEMS = [
  {
    id: 1,
    title: 'Real-Time Radar',
    description: 'Instantly scan your perimeter for available trainers. Filter by discipline and connect locally. No waiting.',
    imageUrl: '/images/workout-5.jpg',
    spec: 'PROTOCOL_01'
  },
  {
    id: 2,
    title: 'Instant Booking',
    description: 'Send a connection request and get matched instantly. Our dynamic engine ensures you train within minutes.',
    imageUrl: '/images/workout-7.jpg',
    spec: 'PROTOCOL_02'
  },
  {
    id: 3,
    title: 'AI Intelligence',
    description: 'Unlock premium AI-generated training protocols based on your wearable data and past sessions.',
    imageUrl: '/images/nutrition.jpg',
    spec: 'PROTOCOL_03'
  },
  {
    id: 4,
    title: 'Total Control',
    description: 'Trainers monetize empty slots with custom hourly rates. Toggle availability and watch requests flow in.',
    imageUrl: '/images/hero-fit.jpg',
    spec: 'PROTOCOL_04'
  },
];

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  spec: string;
}

const AccordionItem = ({ 
  item, 
  isActive, 
  onMouseEnter 
}: { 
  item: FeatureItem; 
  isActive: boolean; 
  onMouseEnter: () => void; 
}) => {
  return (
    <div
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]
        w-full md:h-[550px]
        ${isActive 
          ? 'h-[350px] md:w-[400px]' 
          : 'h-[60px] md:w-[70px]'
        }
        group
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
          ${isActive ? 'scale-100' : 'opacity-40 scale-110'}
        `}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `}></div>

      {/* Content for Active State */}
      <div className={`absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 transition-all duration-500 delay-100
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        <span className="text-[10px] font-dmsans tracking-[0.2em] text-primary uppercase mb-2 block font-bold">{item.spec}</span>
        <h3 className="text-2xl md:text-3xl font-bebas text-white mb-2 uppercase tracking-wide">{item.title}</h3>
        <p className="text-xs text-white/60 font-dmsans leading-relaxed line-clamp-2">{item.description}</p>
      </div>

      {/* Inactive State Text */}
      <div className={`absolute inset-0 flex items-center md:items-end justify-center md:pb-12 transition-all duration-500
        ${isActive ? 'opacity-0' : 'opacity-100'}
      `}>
        {/* Mobile: Horizontal centered text */}
        <span className="md:hidden text-[10px] font-dmsans font-bold tracking-[0.3em] uppercase text-foreground opacity-60">
          {item.title}
        </span>
        {/* Desktop: Vertical rotated text */}
        <span className="hidden md:block whitespace-nowrap rotate-[-90deg] text-[10px] font-dmsans font-bold tracking-[0.3em] uppercase text-foreground opacity-40">
          {item.title}
        </span>
      </div>
    </div>
  );
};

export function SectorGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-28 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/3">
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-2 mb-6">
              <span className="w-7 h-px bg-primary"></span>
              <span>Network Capabilities</span>
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl leading-[0.85] tracking-tight text-foreground uppercase mb-8">
              THE<br/><span className="text-primary">PROTOCOL</span>
            </h2>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-md mb-12 font-dmsans">
              NextUp bridges the gap between intent and action. Frictionless real-time matchmaking, dynamic hourly rates, and AI-driven performance tracking.
            </p>
            
            <a
              href="#pricing"
              className="bg-primary text-black font-bold text-[10px] tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-white hover:-translate-y-1 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-2 md:p-4 min-h-[500px] md:min-h-[600px]">
              {ACCORDION_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
