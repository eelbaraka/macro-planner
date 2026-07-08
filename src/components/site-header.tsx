"use client";

import Link from "next/link";
import { Calculator, Salad, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Salad className="h-6 w-6 text-green-600" />
          <span>Macro<span className="text-green-600">Planner</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Calculator
          </Link>
          <Link href="/meal-planner" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Meal Planner
          </Link>
          <Link href="/blog" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Blog
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white p-4 flex flex-col gap-3">
          <Link href="/" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Calculator</Link>
          <Link href="/meal-planner" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Meal Planner</Link>
          <Link href="/blog" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
        </div>
      )}
    </header>
  );
}
