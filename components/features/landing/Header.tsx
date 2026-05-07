import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <nav className="absolute top-0 w-full z-40 py-8">
      <div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/logo/nextup_primary_logo_preview-removebg-preview.png" 
            alt="NextUp Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
          <Link href="#features" className="hover:opacity-100 transition-opacity font-geist">Features</Link>
          <Link href="#nutrition" className="hover:opacity-100 transition-opacity font-geist">Nutrition</Link>
          <Link href="#live-classes" className="hover:opacity-100 transition-opacity font-geist">Live Classes</Link>
          <Link href="#pricing" className="hover:opacity-100 transition-opacity font-geist">Pricing</Link>
          <Link href="#coaches" className="hover:opacity-100 transition-opacity font-geist">Coaches</Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button className="opacity-70 hover:opacity-100 transition-opacity">
            <iconify-icon icon="solar:magnifer-bold-duotone" class="text-2xl"></iconify-icon>
          </button>
          <button className="opacity-70 hover:opacity-100 transition-opacity relative">
            <iconify-icon icon="solar:bag-bold-duotone" class="text-2xl"></iconify-icon>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </nav>
  );
}
