import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meal Planner — Free Customized Meal Plans",
  description:
    "Generate a free personalized meal plan based on your macro targets. No signup required.",
};

export default function MealPlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-emerald-100 text-sm font-medium mb-2">🍽️ Meal Planning</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Free Meal Planner
            </h1>
            <p className="text-emerald-100 text-lg max-w-xl">
              Generate complete meal plans that match your exact protein, carbs, and fat goals.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { num: "01", title: "Calculate Your Macros", desc: "Use our macro calculator to get your daily targets based on your stats and goals." },
                { num: "02", title: "Get Your Meal Plan", desc: "Generate a complete plan with breakfast, lunch, dinner, and snacks matching your macros." },
                { num: "03", title: "Regenerate & Customize", desc: "Not happy with the meals? Click regenerate for a new set." },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">{step.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-100">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-200 hover:shadow-xl transition-all"
              >
                Start with the Macro Calculator →
              </Link>
            </div>
          </div>

          {/* SEO content */}
          <div className="prose prose-neutral max-w-none pb-16">
            <h2>Custom Meal Plans for Every Goal</h2>
            <p>
              Whether you're trying to <strong>lose weight</strong>, <strong>build muscle</strong>, or <strong>maintain</strong>,
              having a structured meal plan is the difference between guessing and succeeding. MacroPlanner generates meal plans
              that match your exact nutritional targets.
            </p>
            <h3>What You Get</h3>
            <ul>
              <li>4 meals per day (breakfast, lunch, dinner, snack)</li>
              <li>Complete ingredient lists with portion sizes</li>
              <li>Calories and macros for each meal</li>
              <li>Sample recipes you can rotate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
