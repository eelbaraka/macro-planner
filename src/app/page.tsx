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
              { value: "10K+", label: "Meals Planned", icon: "🍽️" },
              { value: "50K+", label: "Macros Calculated", icon: "📊" },
              { value: "4.9★", label: "User Rating", icon: "⭐" },
              { value: "100%", label: "Free Forever", icon: "🎯" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-2xl">{s.icon}</div>
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
              { step: "1", title: "Enter Your Details", desc: "Age, weight, height, activity level, and your goal.", icon: "📝" },
              { step: "2", title: "Get Your Macros", desc: "Instant protein, carbs, and fat targets customized for you.", icon: "📊" },
              { step: "3", title: "Eat the Plan", desc: "Generate meals that match your exact macro targets.", icon: "🍽️" },
            ].map((item) => (
              <div key={item.step} className="bg-[#fafafa] rounded-xl p-6 text-center border border-[#e5e5e5] hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
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
