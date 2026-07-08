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
    "Calculate your daily macros (protein, carbs, fat) and get a personalized meal plan for free. Used by thousands to reach their fitness goals — lose weight, build muscle, or maintain.",
  keywords: [
    "macro calculator",
    "meal planner",
    "protein calculator",
    "calorie counter",
    "fitness calculator",
    "weight loss calculator",
    "TDEE calculator",
    "BMR calculator",
  ],
  openGraph: {
    title: "MacroPlanner — Free Macro Calculator & Meal Planner",
    description:
      "Calculate your daily macros and get a personalized meal plan in seconds. Free, no signup required.",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-neutral-50 text-neutral-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
