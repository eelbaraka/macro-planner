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
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">🍽️ Your Meal Plan</h3>
          <p className="text-emerald-100 text-sm">Meals matching your exact macros</p>
        </div>
        <button
          onClick={handleRegenerate}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          🔄 Regenerate
        </button>
      </div>

      <div className="p-6 space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Calories", value: mealPlan.totals.calories, color: "bg-neutral-100", text: "text-neutral-800" },
            { label: "Protein", value: `${mealPlan.totals.protein}g`, color: "bg-green-100", text: "text-green-700" },
            { label: "Carbs", value: `${mealPlan.totals.carbs}g`, color: "bg-orange-100", text: "text-orange-600" },
            { label: "Fat", value: `${mealPlan.totals.fat}g`, color: "bg-blue-100", text: "text-blue-600" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} rounded-xl p-3 text-center`}>
              <p className="text-xs text-neutral-500 mb-0.5">{s.label}</p>
              <p className={`text-lg font-bold ${s.text}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Meals */}
        <div className="space-y-3">
          {mealPlan.meals.map((meal, i) => (
            <div key={i} className="border border-neutral-100 rounded-xl p-4 hover:border-green-200 hover:bg-green-50/30 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{["🌅", "☀️", "🌙", "🥜"][i]}</span>
                  <div>
                    <p className="font-semibold text-sm text-neutral-800">
                      {["Breakfast", "Lunch", "Dinner", "Snack"][i]}
                    </p>
                    <p className="text-xs text-neutral-500">{meal.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-neutral-700">{meal.calories}</p>
                  <p className="text-xs text-neutral-400">kcal</p>
                </div>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">P:{meal.protein}g</span>
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded">C:{meal.carbs}g</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded">F:{meal.fat}g</span>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-amber-900 mb-3">🛒 Need meal prep tools or supplements?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm hover:bg-amber-50 transition-colors">🥤 Protein Powders</a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm hover:bg-amber-50 transition-colors">📦 Meal Prep Containers</a>
            <a href="https://amzn.to/3XW9Jk3" target="_blank" rel="noopener noreferrer" className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-sm hover:bg-amber-50 transition-colors">⚖️ Kitchen Scale</a>
          </div>
        </div>
      </div>
    </div>
  );
}
