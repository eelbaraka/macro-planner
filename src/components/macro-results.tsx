"use client";

import { type MacroResults, type UserInputs } from "@/lib/nutrition";

interface Props {
  results: MacroResults;
  inputs: UserInputs;
}

export function MacroResults({ results, inputs }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-4">
        <h3 className="text-white font-bold text-lg">📊 Your Daily Macros</h3>
        <p className="text-green-100 text-sm">Based on your personal stats and goals</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100">
            <p className="text-xs text-green-600 font-medium uppercase tracking-wide mb-1">Calories</p>
            <p className="text-3xl font-bold text-green-700">{results.targetCalories}</p>
            <p className="text-xs text-green-500">kcal / day</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 text-center border border-orange-100">
            <p className="text-xs text-orange-600 font-medium uppercase tracking-wide mb-1">BMR</p>
            <p className="text-3xl font-bold text-orange-600">{results.bmr}</p>
            <p className="text-xs text-orange-500">kcal / day</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-100">
            <p className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">TDEE</p>
            <p className="text-3xl font-bold text-blue-600">{results.tdee}</p>
            <p className="text-xs text-blue-500">kcal / day</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 text-center border border-purple-100">
            <p className="text-xs text-purple-600 font-medium uppercase tracking-wide mb-1">Goal</p>
            <p className="text-lg font-bold text-purple-700 capitalize">{inputs.goal}</p>
            <p className="text-xs text-purple-500 text-center mt-1">{inputs.activityLevel.replace("-", " ") }</p>
          </div>
        </div>

        {/* Macros Breakdown */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-700 mb-3">Macronutrient Breakdown</h4>
          <div className="space-y-2">
            {[
              { label: "Protein", value: results.protein, unit: "g", cal: results.protein * 4, color: "green", bg: "bg-green-50", text: "text-green-700", bar: "bg-green-500" },
              { label: "Carbs", value: results.carbs, unit: "g", cal: results.carbs * 4, color: "orange", bg: "bg-orange-50", text: "text-orange-600", bar: "bg-orange-500" },
              { label: "Fat", value: results.fat, unit: "g", cal: results.fat * 9, color: "blue", bg: "bg-blue-50", text: "text-blue-600", bar: "bg-blue-500" },
              { label: "Fiber", value: results.fiber, unit: "g", cal: 0, color: "emerald", bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-400" },
            ].map((m) => {
              const pct = Math.round((m.cal / results.targetCalories) * 100);
              return (
                <div key={m.label} className={`${m.bg} rounded-xl p-3`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-semibold ${m.text}`}>{m.label}</span>
                    <span className={`text-sm font-bold ${m.text}`}>{m.value}{m.unit}</span>
                  </div>
                  {m.cal > 0 && (
                    <>
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                        <span>{m.cal} kcal</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-white/60 rounded-full h-1.5">
                        <div className={`${m.bar} h-1.5 rounded-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
          <p className="font-medium mb-0.5">💡 Tip</p>
          <p className="text-amber-700">Adjust your calories by ±100-200 based on your weekly progress. Weigh yourself weekly at the same time.</p>
        </div>
      </div>
    </div>
  );
}
