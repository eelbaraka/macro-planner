import type { Metadata } from "next";
import Link from "next/link";
import { MacroCalculator } from "@/components/macro-calculator";

export const metadata: Metadata = {
  title: "MacroPlanner — Free Macro Calculator & Meal Planner",
  description:
    "Create personalized meal plans tailored to your preferences and goals. Free macro calculator, meal planner, and nutrition tools.",
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f07651] to-[#e8633a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Put your nutrition on <span className="italic">autopilot.</span>
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Get your personalized macros and meal plan in seconds. Free macro calculator, 
              meal planner, and nutrition tools — no signup required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#calculator" className="inline-flex items-center gap-2 bg-white text-[#f07651] px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Calculate My Macros
              </a>
              <Link href="/meal-planner" className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                Meal Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10K+", label: "Meals Planned", icon: "calendar" },
              { value: "50K+", label: "Macros Calculated", icon: "trending" },
              { value: "4.9★", label: "User Rating", icon: "star" },
              { value: "100%", label: "Free Forever", icon: "check" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-2xl">{s.icon === "calendar" ? <svg className="w-6 h-6 mx-auto text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/></svg> : s.icon === "trending" ? <svg className="w-6 h-6 mx-auto text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2"/></svg> : s.icon === "star" ? <svg className="w-6 h-6 mx-auto text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2"/></svg> : <svg className="w-6 h-6 mx-auto text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div>
                <div className="text-xl font-bold text-[#1a1a2e]">{s.value}</div>
                <div className="text-sm text-[#737373]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator */}
      <div id="calculator" className="max-w-6xl mx-auto px-4 py-10">
        <MacroCalculator />
      </div>

      {/* How It Works */}
      <div className="bg-white border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Enter Your Details", desc: "Age, weight, height, activity level, and your goal.", icon: "user" },
              { step: "2", title: "Get Your Macros", desc: "Instant protein, carbs, and fat targets customized for you.", icon: "chart" },
              { step: "3", title: "Eat the Plan", desc: "Generate meals that match your exact macro targets.", icon: "food" },
            ].map((item) => (
              <div key={item.step} className="bg-[#fafafa] rounded-xl p-6 text-center border border-[#e5e5e5] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#fff4f0] flex items-center justify-center">
                  {item.icon === "user" ? <svg className="w-6 h-6 text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeWidth="2"/><circle cx="12" cy="7" r="4" strokeWidth="2"/></svg> : item.icon === "chart" ? <svg className="w-6 h-6 text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 20V10M12 20V4M6 20v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> : <svg className="w-6 h-6 text-[#f07651]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeWidth="2"/><path d="M8 12h8M12 8v8" strokeWidth="2"/></svg>}
                </div>
                <div className="w-8 h-8 bg-[#f07651] text-white rounded-lg flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-1">{item.title}</h3>
                <p className="text-sm text-[#737373]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">Free Macro Calculator</h2>
          <p className="text-[#737373] text-sm leading-relaxed mb-4">
            Our free macro calculator helps you determine your daily protein, carbohydrate, and fat requirements. 
            Unlike simple calorie counters, our calculator gives you a complete nutritional breakdown.
          </p>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span><strong className="text-[#1a1a2e]">Science-based:</strong> Uses Mifflin-St Jeor equation</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span><strong className="text-[#1a1a2e]">Free:</strong> No signup, no credit card</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span><strong className="text-[#1a1a2e]">Privacy-first:</strong> Your data never leaves your browser</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
