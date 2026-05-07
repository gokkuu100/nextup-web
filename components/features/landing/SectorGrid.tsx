"use client";

import React, { useState } from 'react';

const ACCORDION_ITEMS = [
  {
    id: 1,
    title: 'Instant Requests',
    description: 'Connect with a certified professional in seconds through our high-speed dispatch system.',
    imageUrl: '/images/workout-5.jpg',
    spec: 'CORE_01'
  },
  {
    id: 2,
    title: 'Real-time Availability',
    description: 'Live status monitoring ensures you only see trainers ready for immediate engagement.',
    imageUrl: '/images/workout-7.jpg',
    spec: 'CORE_02'
  },
  {
    id: 3,
    title: 'Nearby Matching',
    description: 'Hyper-local proximity analysis connects you with the closest qualified trainers in your area.',
    imageUrl: '/images/workout-8.jpg',
    spec: 'CORE_03'
  },
  {
    id: 4,
    title: 'Profiles & Ratings',
    description: 'In-depth performance data and community validation for every certified trainer.',
    imageUrl: '/images/hero-fit.jpg',
    spec: 'CORE_04'
  },
  {
    id: 5,
    title: 'Precision Scheduling',
    description: 'Seamless calendar synchronization for future-dated technical training sessions.',
    imageUrl: '/images/fit-abs.jpg',
    spec: 'CORE_05'
  },
  {
    id: 6,
    title: 'Meetup Systems',
    description: 'Advanced location-based coordination for seamless in-person training rendezvous.',
    imageUrl: '/images/fit-female.jpg',
    spec: 'CORE_06'
  },
  {
    id: 7,
    title: 'Booking Confirmation',
    description: 'Instant in-app verification and secure session locking for every scheduled event.',
    imageUrl: '/images/workout-5.jpg',
    spec: 'CORE_07'
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
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)]
        w-full md:h-[550px]
        ${isActive 
          ? 'h-[350px] md:w-[450px]' 
          : 'h-[60px] md:w-[70px]'
        }
        group
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
          ${isActive ? 'grayscale-0 scale-100' : 'grayscale opacity-40 scale-110'}
        `}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#1D2331]/80 via-transparent to-transparent transition-opacity duration-500
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `}></div>

      {/* Content for Active State */}
      <div className={`absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 transition-all duration-500 delay-100
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        <span className="text-[10px] font-geist tracking-[0.2em] text-[#C48C56] uppercase mb-2 block">{item.spec}</span>
        <h3 className="text-xl md:text-2xl font-jakarta font-light text-white mb-2">{item.title}</h3>
        <p className="text-sm text-white/70 font-geist leading-relaxed line-clamp-2">{item.description}</p>
      </div>

      {/* Inactive State Text */}
      <div className={`absolute inset-0 flex items-center md:items-end justify-center md:pb-12 transition-all duration-500
        ${isActive ? 'opacity-0' : 'opacity-100'}
      `}>
        {/* Mobile: Horizontal centered text */}
        <span className="md:hidden text-[10px] font-geist font-semibold tracking-[0.3em] uppercase text-[#1D2331] opacity-60">
          {item.title}
        </span>
        {/* Desktop: Vertical rotated text */}
        <span className="hidden md:block whitespace-nowrap rotate-[-90deg] text-xs font-geist font-semibold tracking-[0.3em] uppercase text-[#1D2331] opacity-40">
          {item.title}
        </span>
      </div>
    </div>
  );
};

export function SectorGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-24 md:py-32 section-container bg-[#F2EFEA] overflow-hidden">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/3">
            <p className="text-sm font-medium tracking-tight opacity-50 mb-6 uppercase font-geist">
              ( Future Architecture )
            </p>
            <h2 className="text-5xl md:text-7xl tracking-tighter font-jakarta font-light text-[#1D2331] leading-[0.9] mb-8">
              Features
            </h2>
            <p className="text-lg opacity-60 font-geist leading-relaxed text-[#1D2331] max-w-md mb-12">
              The NextUp mobile platform bridge the gap between intent and action. Real-time trainer matching, secure scheduling, and location-based dispatch.
            </p>
            
            <a
              href="#contact"
              className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#1D2331] text-[#F2EFEA] px-10 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform"
            >
              <span className="font-geist">Inquire for Early Access</span>
              <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
            </a>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-2 md:p-4 min-h-[500px] md:min-h-[600px]">
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
