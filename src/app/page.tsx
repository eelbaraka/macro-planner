import type { Metadata } from "next";
import Link from "next/link";
import { MacroCalculator } from "@/components/macro-calculator";

export const metadata: Metadata = {
  title: "MacroPlanner — Free Macro Calculator & Meal Planner",
  description:
    "Calculate your daily macros (protein, carbs, fat) and get a personalized meal plan for free.",
};

export default function Home() {
  return (
    <div>
      {/* Simple Header Section */}
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
              Free Macro Calculator & Meal Planner
            </h1>
            <p className="text-[#737373] text-base">
              Get your personalized daily protein, carbs, and fat targets in seconds.
              Then generate a meal plan that matches your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section - Gray bg + white card */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MacroCalculator />
      </div>

      {/* How It Works */}
      <div className="bg-white border-t border-[#e5e5e5] mt-8">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Enter Your Details", desc: "Age, weight, height, activity level, and your goal." },
              { step: "2", title: "Get Your Macros", desc: "Instant protein, carbs, and fat targets customized for you." },
              { step: "3", title: "Eat the Plan", desc: "Generate meals that match your exact macro targets." },
            ].map((item) => (
              <div key={item.step} className="bg-[#f5f5f5] rounded-xl p-5">
                <div className="w-8 h-8 bg-[#16a34a] text-white rounded-lg flex items-center justify-center text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-1">{item.title}</h3>
                <p className="text-sm text-[#737373]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">What Is a Macro Calculator?</h2>
          <p className="text-[#737373] text-sm leading-relaxed mb-4">
            A macro calculator determines your daily protein, carbohydrate, and fat requirements based on your age, weight, height, activity level, and fitness goal. Unlike simple calorie counters, macro calculators give you a complete nutritional breakdown so you can optimize your diet for weight loss, muscle gain, or maintenance.
          </p>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li className="flex items-start gap-2"><span className="text-[#16a34a] mt-1">•</span><span><strong className="text-[#1a1a1a]">Accurate:</strong> Uses the Mifflin-St Jeor equation</span></li>
            <li className="flex items-start gap-2"><span className="text-[#16a34a] mt-1">•</span><span><strong className="text-[#1a1a1a]">Free:</strong> No signup, no credit card</span></li>
            <li className="flex items-start gap-2"><span className="text-[#16a34a] mt-1">•</span><span><strong className="text-[#1a1a1a]">Privacy-first:</strong> Your data never leaves your browser</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
