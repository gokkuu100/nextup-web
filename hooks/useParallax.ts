"use client";

import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const blinds = document.querySelectorAll<HTMLElement>('.js-hero-blind');
    const immersiveBg = document.querySelector<HTMLElement>('.js-immersive-bg');

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doParallax(scrollPos: number) {
      if (scrollPos < 1200) {
        blinds.forEach((blind, index) => {
          const distanceFromCenter = Math.abs(2 - index);
          const baseSpeed = 0.028;
          const stagger = distanceFromCenter * 0.02;

          const yMoveRaw = scrollPos * (baseSpeed + stagger);
          const yMoveClamped = Math.max(-180, Math.min(yMoveRaw, 180));

          blind.style.transform = `translate3d(0, ${yMoveClamped}px, 0)`;
        });
      }

      if (immersiveBg && immersiveBg.parentElement) {
        const rect = immersiveBg.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

          const yMoveRaw = (scrollPercent - 0.5) * -120;
          const yMoveClamped = Math.max(-100, Math.min(yMoveRaw, 100));

          const scale = 1.05 + (scrollPercent * 0.05);
          const finalScale = Math.min(scale, 1.12);

          immersiveBg.style.transform = `translateY(${yMoveClamped}px) scale(${finalScale})`;
        }
      }
    }

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          doParallax(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    doParallax(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
