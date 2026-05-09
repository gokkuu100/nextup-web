import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["300", "400", "500", "600"],
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
  icons: {
    icon: "/logo/nextup_icon_preview.png",
    apple: "/logo/nextup_icon_preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebas.variable} ${dmsans.variable} ${playfair.variable} bg-background text-foreground font-dmsans antialiased selection:bg-primary selection:text-black overflow-x-hidden transition-colors duration-500`}
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

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script
          src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
