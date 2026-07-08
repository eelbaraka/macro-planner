import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meal Planner — Free Customized Meal Plans",
  description:
    "Generate a free personalized meal plan based on your macro targets. High protein, balanced, or low carb options. No signup required.",
};

export default function MealPlannerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">🍽️ Meal Planner</h1>
        <p className="text-lg text-neutral-600 mb-8">
          First, use our{" "}
          <Link href="/" className="text-green-600 underline underline-offset-2 hover:text-green-700">
            macro calculator
          </Link>{" "}
          to get your daily targets. Then come back here to generate complete meal plans
          that match your exact protein, carbs, and fat goals.
        </p>

        <Card className="border-green-100 shadow-lg mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-700 font-bold shrink-0">1</div>
              <div>
                <h3 className="font-semibold">Calculate Your Macros</h3>
                <p className="text-sm text-neutral-600">Use the macro calculator to get your daily targets based on your stats and goals.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-700 font-bold shrink-0">2</div>
              <div>
                <h3 className="font-semibold">Get Your Meal Plan</h3>
                <p className="text-sm text-neutral-600">Generate a complete plan with breakfast, lunch, dinner, and snacks matching your macros.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-700 font-bold shrink-0">3</div>
              <div>
                <h3 className="font-semibold">Regenerate & Customize</h3>
                <p className="text-sm text-neutral-600">Not happy with the meals? Click regenerate for a new set. Premium users can fully customize.</p>
              </div>
            </div>

            <div className="pt-4">
            <Link href="/">
              <Button>Start with the Macro Calculator →</Button>
            </Link>
            </div>
          </CardContent>
        </Card>

        {/* SEO text */}
        <div className="prose prose-neutral max-w-none">
          <h2>Custom Meal Plans for Every Goal</h2>
          <p>
            Whether you're trying to <strong>lose weight</strong>, <strong>build muscle</strong>, or{" "}
            <strong>maintain your current physique</strong>, having a structured meal plan is the
            difference between guessing and knowing. MacroPlanner generates meal plans that
            match your exact nutritional targets.
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
  );
}
