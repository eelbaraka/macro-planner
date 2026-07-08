import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Calculate Your Macros — Complete Beginner's Guide",
  description:
    "Learn exactly how to calculate your daily protein, carbs, and fat targets for weight loss, muscle gain, or maintenance with our step-by-step guide.",
};

export default function HowToCalculateMacros() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto prose prose-neutral">
        <p className="text-sm text-neutral-500">July 7, 2026 · 8 min read</p>
        <h1>How to Calculate Your Macros: Complete Beginner&apos;s Guide</h1>

        <p>
          If you&apos;re serious about improving your body composition — whether that&apos;s losing fat,
          building muscle, or maintaining — you need to know your macronutrient targets. This guide
          will walk you through exactly how to calculate them.
        </p>

        <h2>What Are Macros?</h2>
        <p>
          Macronutrients (&quot;macros&quot;) are the three main nutrients your body needs in large amounts:
        </p>
        <ul>
          <li><strong>Protein</strong> — 4 calories per gram. Builds and repairs muscle tissue</li>
          <li><strong>Carbohydrates</strong> — 4 calories per gram. Your body&apos;s primary energy source</li>
          <li><strong>Fat</strong> — 9 calories per gram. Essential for hormone production and nutrient absorption</li>
        </ul>

        <h2>Step 1: Calculate Your BMR</h2>
        <p>
          Your Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest.
          We use the Mifflin-St Jeor equation, which is the most accurate for the general population:
        </p>
        <div className="bg-neutral-50 border rounded-lg p-4">
          <p className="font-mono text-sm">
            <strong>Men:</strong> BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(y) + 5<br />
            <strong>Women:</strong> BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age(y) − 161
          </p>
        </div>

        <h2>Step 2: Calculate Your TDEE</h2>
        <p>
          Your Total Daily Energy Expenditure (TDEE) is your BMR multiplied by your activity level:
        </p>
        <ul>
          <li><strong>Sedentary:</strong> BMR × 1.2 (desk job, little exercise)</li>
          <li><strong>Light:</strong> BMR × 1.375 (1-3 days/week)</li>
          <li><strong>Moderate:</strong> BMR × 1.55 (3-5 days/week)</li>
          <li><strong>Active:</strong> BMR × 1.725 (6-7 days/week)</li>
          <li><strong>Very Active:</strong> BMR × 1.9 (2x/day or physical job)</li>
        </ul>

        <h2>Step 3: Set Your Goal</h2>
        <ul>
          <li><strong>Lose weight:</strong> TDEE − 500 calories (~0.5kg/week)</li>
          <li><strong>Maintain:</strong> Eat at TDEE</li>
          <li><strong>Build muscle:</strong> TDEE + 300 calories (lean bulk)</li>
        </ul>

        <h2>Step 4: Calculate Your Macros</h2>
        <p>
          Once you have your target calories, split them into macros:
        </p>
        <ul>
          <li><strong>Protein:</strong> 1.6-2.2g per kg of bodyweight (higher on deficit to preserve muscle)</li>
          <li><strong>Fat:</strong> 25% of total calories ÷ 9</li>
          <li><strong>Carbs:</strong> Remaining calories ÷ 4</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 text-center">
          <h3 className="text-lg font-bold text-green-800 mb-2">🎯 Want the Easy Way?</h3>
          <p className="text-green-700 mb-4">
            Use our free calculator — enter your stats and get your macros instantly.
          </p>
          <Link href="/">
            <Button>Calculate My Macros Now →</Button>
          </Link>
        </div>

        <h2>Tracking Your Progress</h2>
        <p>
          Track your food with apps like MyFitnessPal or Cronometer for the first few weeks.
          Weigh yourself weekly at the same time (morning, after bathroom, before eating).
          Adjust calories by ±100-200 if you&apos;re not seeing progress after 2 weeks.
        </p>
      </div>
    </article>
  );
}
