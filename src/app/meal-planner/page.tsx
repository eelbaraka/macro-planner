import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meal Planner — Free Customized Meal Plans",
  description:
    "Generate a free personalized meal plan based on your macro targets. No signup required.",
};

export default function MealPlannerPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f07651] to-[#d4532a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm font-medium mb-2">Meal Planning</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Free Meal Planner
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Generate complete meal plans that match your exact protein, carbs, and fat goals.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-[#e5e5e5] p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { num: "01", title: "Calculate Your Macros", desc: "Use our macro calculator to get your daily targets based on your stats and goals." },
                { num: "02", title: "Get Your Meal Plan", desc: "Generate a complete plan with breakfast, lunch, dinner, and snacks matching your macros." },
                { num: "03", title: "Regenerate & Customize", desc: "Not happy with the meals? Click regenerate for a new set." },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#f07651] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e]">{step.title}</h3>
                    <p className="text-sm text-[#737373] mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#f07651] text-white px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-[#e0633a] transition-all"
              >
                Start with the Macro Calculator →
              </Link>
            </div>
          </div>

          {/* SEO content */}
          <div className="text-[#525252] text-sm leading-relaxed pb-16 space-y-4">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Custom Meal Plans for Every Goal</h2>
            <p>
              Whether you're trying to <strong className="text-[#1a1a2e]">lose weight</strong>, <strong className="text-[#1a1a2e]">build muscle</strong>, or <strong className="text-[#1a1a2e]">maintain</strong>,
              having a structured meal plan is the difference between guessing and succeeding.
            </p>
            <h3 className="text-lg font-bold text-[#1a1a2e]">What You Get</h3>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span>4 meals per day (breakfast, lunch, dinner, snack)</span></li>
              <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span>Complete ingredient lists with portion sizes</span></li>
              <li className="flex items-start gap-2"><span className="text-[#f07651] mt-1">•</span><span>Calories and macros for each meal</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
