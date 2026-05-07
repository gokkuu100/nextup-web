import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextUp Fitness — Engineered for Performance",
  description:
    "NextUp delivers precision-engineered personal training for those who demand real results. Expert coaches, AI nutrition, live sessions.",
  keywords: ["personal training", "fitness app", "online coach", "nutrition", "workout"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} ${playfair.variable} bg-[#F2EFEA] text-[#1D2331] antialiased selection:bg-[#1D2331] selection:text-[#F2EFEA] overflow-x-hidden`}
      >
        {/* Vertical container lines */}
        <div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
          <div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
            <div className="w-px h-full bg-current" />
            <div className="w-px h-full bg-current hidden md:block" />
            <div className="w-px h-full bg-current hidden lg:block" />
            <div className="w-px h-full bg-current" />
          </div>
        </div>

        {children}

        <Script
          src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
