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
    icon: "/logo/icon_N_standalone_mono_black.png",
    apple: "/logo/icon_N_standalone_mono_black.png",
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
