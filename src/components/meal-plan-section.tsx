"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type MacroResults, generateMealPlan } from "@/lib/nutrition";
import { Shuffle, Download } from "lucide-react";

interface Props {
  macros: MacroResults;
}

export function MealPlanSection({ macros }: Props) {
  const [mealPlan, setMealPlan] = useState(() => generateMealPlan(macros));
  const [dietType, setDietType] = useState("balanced");

  const handleRegenerate = () => {
    setMealPlan(generateMealPlan(macros, dietType));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="shadow-lg border-green-100">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg flex flex-row items-center justify-between">
        <CardTitle className="text-xl">🍽️ Your Meal Plan</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleRegenerate} className="gap-1">
            <Shuffle className="h-3 w-3" /> Regenerate
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint} className="gap-1">
            <Download className="h-3 w-3" /> Save
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        {/* Summary bar */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="bg-neutral-100 rounded py-2">
            <p className="font-bold text-base text-neutral-800">{mealPlan.totals.calories}</p>
            <p className="text-neutral-500">Calories</p>
          </div>
          <div className="bg-green-100 rounded py-2">
            <p className="font-bold text-base text-green-700">{mealPlan.totals.protein}g</p>
            <p className="text-green-600">Protein</p>
          </div>
          <div className="bg-orange-100 rounded py-2">
            <p className="font-bold text-base text-orange-600">{mealPlan.totals.carbs}g</p>
            <p className="text-orange-500">Carbs</p>
          </div>
          <div className="bg-blue-100 rounded py-2">
            <p className="font-bold text-base text-blue-600">{mealPlan.totals.fat}g</p>
            <p className="text-blue-500">Fat</p>
          </div>
        </div>

        <Separator />

        {/* Meal list */}
        {mealPlan.meals.map((meal, i) => (
          <div key={i} className="border rounded-lg p-4 hover:bg-neutral-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-sm">
                {["🌅 Breakfast", "☀️ Lunch", "🌙 Dinner", "🥜 Snack"][i]}
              </h4>
              <div className="text-xs text-neutral-500 space-x-2">
                <span className="font-medium text-neutral-700">{meal.calories} kcal</span>
                <span>P:{meal.protein}g</span>
                <span>C:{meal.carbs}g</span>
                <span>F:{meal.fat}g</span>
              </div>
            </div>
            <h5 className="font-medium text-neutral-800 mb-1">{meal.name}</h5>
            <ul className="text-xs text-neutral-500 list-disc list-inside columns-2">
              {meal.ingredients.map((ing, j) => (
                <li key={j}>{ing}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
          <strong>💡 Pro tip:</strong> These samples match your macro targets.
          Click <strong>"Regenerate"</strong> for a different set. For full customization,
          subscribe to our premium plan (coming soon).
        </div>

        {/* Affiliate call-to-action */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-amber-900 mb-2">
            🛒 Need supplements or meal prep tools?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-white">🥤 Best Protein Powders</Button>
            </a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-white">📦 Meal Prep Containers</Button>
            </a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="bg-white">⚖️ Kitchen Scale</Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
