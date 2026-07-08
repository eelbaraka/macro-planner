import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "MacroPlanner — Free Macro Calculator & Meal Planner",
    template: "%s | MacroPlanner",
  },
  description:
    "Calculate your daily macros (protein, carbs, fat) and get a personalized meal plan for free.",
  openGraph: {
    title: "MacroPlanner — Free Macro Calculator & Meal Planner",
    description: "Calculate your daily macros and get a personalized meal plan in seconds.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://macro-planner-murex.vercel.app",
  },
  metadataBase: new URL("https://macro-planner-murex.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#f5f5f5] text-[#1a1a1a]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
