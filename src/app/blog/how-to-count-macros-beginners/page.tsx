import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Count Macros for Weight Loss: The Complete Beginner's Guide",
  description:
    "Learn how to count macros for weight loss. This complete beginner's guide covers calculating your targets, tracking food, best apps, and common mistakes to avoid.",
  keywords: [
    "how to count macros",
    "macro counting for beginners",
    "weight loss macros",
    "macro diet",
    "counting macros guide",
  ],
  openGraph: {
    title: "How to Count Macros for Weight Loss: Beginner's Guide",
    description: "Complete guide to counting macros for weight loss. Calculate targets, track food, avoid mistakes.",
    images: [{ url: "/images/blog/veggies.jpg", width: 800, height: 800 }],
  },
};

export default function CountMacrosBeginners() {
  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/blog/veggies.jpg"
              alt="Fresh vegetables and ingredients for macro counting meal prep"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">Guides</span>
                <span>·</span>
                <span>July 8, 2026</span>
                <span>·</span>
                <span>11 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                How to Count Macros for Weight Loss: The Complete Beginner's Guide
              </h1>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mb-8">Photo by Louis Hansel on Unsplash</p>

          <div className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl text-neutral-700 font-medium">
              Counting macros is the most effective way to lose weight and transform your body composition.
              Unlike simple calorie counting, macro tracking ensures you're eating the right balance of
              protein, carbs, and fat to preserve muscle while burning fat.
            </p>

            <h2>What Are Macros?</h2>
            <p>
              Macronutrients ("macros") are the three main nutrients your body needs in large amounts:
            </p>
            <div className="bg-green-50 rounded-xl p-6 not-prose">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-1">🥩</div>
                  <h4 className="font-bold text-sm">Protein</h4>
                  <p className="text-xs text-neutral-600">4 cal/g</p>
                  <p className="text-xs text-neutral-500">Builds &amp; repairs muscle</p>
                </div>
                <div>
                  <div className="text-3xl mb-1">🍚</div>
                  <h4 className="font-bold text-sm">Carbs</h4>
                  <p className="text-xs text-neutral-600">4 cal/g</p>
                  <p className="text-xs text-neutral-500">Primary energy source</p>
                </div>
                <div>
                  <div className="text-3xl mb-1">🥑</div>
                  <h4 className="font-bold text-sm">Fats</h4>
                  <p className="text-xs text-neutral-600">9 cal/g</p>
                  <p className="text-xs text-neutral-500">Hormones &amp; health</p>
                </div>
              </div>
            </div>

            <h2>Step 1: Calculate Your Calorie Target</h2>
            <p>
              First, find your Total Daily Energy Expenditure (TDEE) — the calories your body burns daily.
              Then adjust based on your goal:
            </p>
            <ul>
              <li><strong>Weight loss:</strong> TDEE − 500 calories (lose ~0.5kg/week)</li>
              <li><strong>Maintenance:</strong> Eat at TDEE</li>
              <li><strong>Muscle gain:</strong> TDEE + 300 calories</li>
            </ul>
            <p>
              Use our <a href="/" className="text-green-600 underline">free macro calculator</a> to get your exact TDEE and calorie target in seconds.
            </p>

            <h2>Step 2: Set Your Protein Target</h2>
            <p>
              Protein is the most important macro for weight loss. It preserves muscle, keeps you full,
              and has the highest thermic effect. Aim for:
            </p>
            <ul>
              <li><strong>Weight loss:</strong> 1.8-2.2g per kg of bodyweight</li>
              <li><strong>Maintenance:</strong> 1.4-1.8g per kg</li>
              <li><strong>Muscle gain:</strong> 1.6-2.0g per kg</li>
            </ul>

            <h2>Step 3: Set Your Fat Target</h2>
            <p>
              Fat is essential for hormone production and nutrient absorption. Don't go too low —
              it can negatively affect your hormones and mood. Aim for:
            </p>
            <ul>
              <li>20-30% of total calories from fat</li>
              <li>Minimum 0.5g per kg of bodyweight</li>
            </ul>

            <h2>Step 4: Fill the Rest with Carbs</h2>
            <p>
              After setting protein and fat, the remaining calories come from carbohydrates.
              Carbs fuel your workouts, brain function, and daily activity.
            </p>

            <h2>Example: 75kg Person Trying to Lose Weight</h2>
            <div className="bg-neutral-50 rounded-xl p-6 not-prose">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Calories: <strong className="text-green-700">2,000</strong></p>
                  <p className="text-sm">Protein: <strong>165g</strong> (2.2g/kg)</p>
                  <p className="text-sm">Carbs: <strong>200g</strong> (remaining cal)</p>
                  <p className="text-sm">Fat: <strong>55g</strong> (25% of cal)</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center flex flex-col justify-center">
                  <p className="text-xs text-neutral-500">Use our tool</p>
                  <a href="/" className="text-green-600 font-bold text-sm hover:underline">Calculate Your Macros →</a>
                </div>
              </div>
            </div>

            <h2>Best Apps for Tracking Macros</h2>
            <ul>
              <li><strong>MyFitnessPal</strong> — Largest food database, barcode scanner. Free version works well</li>
              <li><strong>Cronometer</strong> — Most accurate micronutrient tracking. Great for detailed tracking</li>
              <li><strong>MacroFactor</strong> — Adjusts your targets based on your actual weight changes. Premium but smart</li>
              <li><strong>Lose It!</strong> — User-friendly interface. Good for beginners</li>
            </ul>

            <h2>Common Macro Counting Mistakes</h2>
            <ol>
              <li><strong>Not using a food scale:</strong> "1 cup" of oats can vary by 30g. A $15 scale pays for itself in accuracy</li>
              <li><strong>Forgetting cooking oils:</strong> Olive oil adds 120 calories per tablespoon. Track everything</li>
              <li><strong>Not tracking drinks:</strong> Milk in coffee, juice, alcohol — all add up fast</li>
              <li><strong>Setting protein too low:</strong> On a deficit, high protein is essential to preserve muscle</li>
              <li><strong>Not adjusting:</strong> If you're not losing weight after 2 weeks, reduce calories by 100-200</li>
            </ol>

            <h2>Sample Day</h2>
            <div className="bg-neutral-50 rounded-xl p-6 not-prose">
              <h4 className="font-bold mb-2">1,800 Calorie Day for Weight Loss</h4>
              <div className="text-sm space-y-2">
                <p><strong>Breakfast:</strong> 3 eggs (210 cal) + 1 slice toast (80 cal) + ½ avocado (120 cal) = 410 cal, 24g protein</p>
                <p><strong>Lunch:</strong> Grilled chicken salad (150g chicken, greens, 2 tbsp dressing) = 450 cal, 38g protein</p>
                <p><strong>Dinner:</strong> Baked salmon (150g) + 1 cup roasted broccoli + ½ cup quinoa = 520 cal, 42g protein</p>
                <p><strong>Snack:</strong> Greek yogurt (150g) + protein shake = 350 cal, 42g protein</p>
                <p><strong>Total:</strong> 1,730 cal, 146g protein ✅</p>
              </div>
            </div>

            <h2>How Fast Will You See Results?</h2>
            <p>
              With a consistent 500-calorie deficit, you can expect to lose:
            </p>
            <ul>
              <li><strong>Week 1:</strong> 1-2kg (mostly water weight)</li>
              <li><strong>Weeks 2-4:</strong> 0.5-1kg per week of fat loss</li>
              <li><strong>Month 2+:</strong> Consistent 0.5-1kg per week</li>
            </ul>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 my-8 text-center not-prose">
              <h3 className="text-2xl font-bold text-green-800 mb-3">🎯 Start Counting Your Macros</h3>
              <p className="text-green-700 mb-4">
                Get your personalized macro targets in seconds — free, no signup required.
              </p>
              <a href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Calculate My Macros →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
