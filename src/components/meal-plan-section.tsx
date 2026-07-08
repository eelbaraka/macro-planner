"use client";

import { useState } from "react";
import { type MacroResults, generateMealPlan } from "@/lib/nutrition";

interface Props {
  macros: MacroResults;
}

export function MealPlanSection({ macros }: Props) {
  const [mealPlan, setMealPlan] = useState(() => generateMealPlan(macros));

  const handleRegenerate = () => {
    setMealPlan(generateMealPlan(macros));
  };

  return (
    <div className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden">
      <div className="bg-[#f07651] px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">Your Meal Plan</h3>
          <p className="text-white/80 text-sm">Meals matching your exact macros</p>
        </div>
        <button
          onClick={handleRegenerate}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Regenerate
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Calories", value: mealPlan.totals.calories, bg: "bg-[#f5f5f5]", text: "text-[#1a1a2e]" },
            { label: "Protein", value: `${mealPlan.totals.protein}g`, bg: "bg-[#fff4f0]", text: "text-[#c2410c]" },
            { label: "Carbs", value: `${mealPlan.totals.carbs}g`, bg: "bg-[#fff7ed]", text: "text-[#c2410c]" },
            { label: "Fat", value: `${mealPlan.totals.fat}g`, bg: "bg-[#f0f4ff]", text: "text-[#3730a3]" },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-xl p-3 text-center`}>
              <p className="text-xs text-[#737373] mb-0.5">{s.label}</p>
              <p className={`text-lg font-bold ${s.text}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {mealPlan.meals.map((meal, i) => (
            <div key={i} className="border border-[#e5e5e5] rounded-xl p-4 hover:border-[#f07651] hover:bg-[#fff4f0]/30 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm text-[#1a1a2e]">
                    {["Breakfast", "Lunch", "Dinner", "Snack"][i]}
                  </p>
                  <p className="text-xs text-[#737373]">{meal.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-[#1a1a2e]">{meal.calories}</p>
                  <p className="text-xs text-[#737373]">kcal</p>
                </div>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="bg-[#fff4f0] text-[#c2410c] px-2 py-0.5 rounded">P:{meal.protein}g</span>
                <span className="bg-[#fff7ed] text-[#c2410c] px-2 py-0.5 rounded">C:{meal.carbs}g</span>
                <span className="bg-[#f0f4ff] text-[#3730a3] px-2 py-0.5 rounded">F:{meal.fat}g</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fff4f0] border border-[#fed7c2] rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-[#9a3412] mb-3">Need meal prep tools or supplements?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#fed7c2] text-[#c2410c] px-4 py-2 rounded-lg text-sm hover:bg-[#fff4f0] transition-colors">Protein Powders</a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#fed7c2] text-[#c2410c] px-4 py-2 rounded-lg text-sm hover:bg-[#fff4f0] transition-colors">Meal Prep Containers</a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#fed7c2] text-[#c2410c] px-4 py-2 rounded-lg text-sm hover:bg-[#fff4f0] transition-colors">Kitchen Scale</a>
          </div>
        </div>
      </div>
    </div>
  );
}
