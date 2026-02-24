import type { Metadata } from "next";
import { Outfit, Inter, Noto_Serif_Telugu } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

const notoSerifTelugu = Noto_Serif_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600"],
  variable: "--font-noto-telugu",
});

export const metadata: Metadata = {
  title: "LandWorth భూమి | Satya Moolya. Sahi Bhumi.",
  description:
    "AI-powered land valuation for India. Honest real estate price estimates built on Andhra Pradesh government records, satellite data, and 10 years of market intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} ${notoSerifTelugu.variable} font-sans antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
