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
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmE0MWEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Free • No signup • Used by 10,000+
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Calculate Your{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 bg-clip-text text-transparent">
                Daily Macros
              </span>
              <br />
              <span className="text-neutral-800">Build Your Perfect Meal Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get your personalized protein, carb, and fat targets in seconds.
              Then generate a custom meal plan tailored to your goals — no signup, no spam, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Calculate My Macros
              </Link>
              <Link
                href="/meal-planner"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-neutral-200 hover:border-green-300 hover:text-green-600 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                Explore Meal Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-100 bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10K+", label: "Users", icon: "👥" },
              { value: "50K+", label: "Meals Planned", icon: "🍽️" },
              { value: "4.9★", label: "User Rating", icon: "⭐" },
              { value: "100%", label: "Free", icon: "🎯" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-2xl">{stat.icon}</div>
                <div className="text-xl font-bold text-neutral-800">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <MacroCalculator />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works in 3 Simple Steps</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              No complicated forms. No accounts. Just enter your details and get results instantly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Enter Your Details", description: "Age, weight, height, activity level, and your fitness goal.", color: "from-green-500 to-emerald-400" },
              { step: "02", title: "Get Your Macros", description: "Instant BMR, TDEE, and personalized protein/carbs/fat targets.", color: "from-emerald-500 to-teal-400" },
              { step: "03", title: "Eat the Plan", description: "Generate a complete meal plan matching your exact macros.", color: "from-teal-500 to-cyan-400" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white font-bold text-lg mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2>Free Macro Calculator — Track Your Nutrition</h2>
          <p>
            Our free macro calculator helps you determine your daily requirements for protein, carbohydrates, and fat
            based on your unique body metrics and fitness goals. Whether you want to lose weight, build muscle, or maintain,
            knowing your macros is the first step to success.
          </p>
          <ul>
            <li><strong>Science-based:</strong> Uses the Mifflin-St Jeor equation — the gold standard for BMR calculation</li>
            <li><strong>Personalized:</strong> Adjusts macros for your specific goal (weight loss, maintenance, or muscle gain)</li>
            <li><strong>Privacy-first:</strong> All calculations happen in your browser — nothing is stored or shared</li>
            <li><strong>Integrated meal planner:</strong> Get meals that match your exact macro targets</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Nutrition?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Join thousands of users who have already improved their diet with MacroPlanner.
          </p>
          <a href="#calculator" className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Get Started Now — It's Free
          </a>
        </div>
      </section>
    </div>
  );
}
