"use client";

import { type MacroResults, type UserInputs } from "@/lib/nutrition";

interface Props {
  results: MacroResults;
  inputs: UserInputs;
}

export function MacroResults({ results, inputs }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden">
      <div className="bg-[#f07651] px-6 py-4">
        <h3 className="text-white font-bold text-lg">Your Daily Macros</h3>
        <p className="text-white/80 text-sm">Based on your personal stats and goals</p>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#fff4f0] rounded-xl p-4 text-center border border-[#fed7c2]">
            <p className="text-xs text-[#f07651] font-medium uppercase tracking-wide mb-1">Calories</p>
            <p className="text-3xl font-bold text-[#c2410c]">{results.targetCalories}</p>
            <p className="text-xs text-[#ea580c]">kcal / day</p>
          </div>
          <div className="bg-[#fff4f0] rounded-xl p-4 text-center border border-[#fed7c2]">
            <p className="text-xs text-[#f07651] font-medium uppercase tracking-wide mb-1">BMR</p>
            <p className="text-3xl font-bold text-[#c2410c]">{results.bmr}</p>
            <p className="text-xs text-[#ea580c]">kcal / day</p>
          </div>
          <div className="bg-[#f0f4ff] rounded-xl p-4 text-center border border-[#c7d7fe]">
            <p className="text-xs text-[#4f6ff0] font-medium uppercase tracking-wide mb-1">TDEE</p>
            <p className="text-3xl font-bold text-[#3730a3]">{results.tdee}</p>
            <p className="text-xs text-[#6366f1]">kcal / day</p>
          </div>
          <div className="bg-[#f5f0ff] rounded-xl p-4 text-center border border-[#e0c7fe]">
            <p className="text-xs text-[#8b5cf6] font-medium uppercase tracking-wide mb-1">Goal</p>
            <p className="text-lg font-bold text-[#6d28d9] capitalize">{inputs.goal}</p>
            <p className="text-xs text-[#a78bfa] text-center mt-1">{inputs.activityLevel.replace("-", " ")}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#1a1a2e] mb-3">Macronutrient Breakdown</h4>
          <div className="space-y-2">
            {[
              { label: "Protein", value: results.protein, unit: "g", cal: results.protein * 4, bg: "bg-[#fff4f0]", text: "text-[#c2410c]", bar: "bg-[#f07651]" },
              { label: "Carbs", value: results.carbs, unit: "g", cal: results.carbs * 4, bg: "bg-[#fff7ed]", text: "text-[#c2410c]", bar: "bg-[#f97316]" },
              { label: "Fat", value: results.fat, unit: "g", cal: results.fat * 9, bg: "bg-[#f0f4ff]", text: "text-[#3730a3]", bar: "bg-[#4f6ff0]" },
              { label: "Fiber", value: results.fiber, unit: "g", cal: 0, bg: "bg-[#f0fdf4]", text: "text-[#166534]", bar: "bg-[#22c55e]" },
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
                      <div className="flex items-center justify-between text-xs text-[#737373] mb-1">
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

        <div className="bg-[#fff4f0] border border-[#fed7c2] rounded-xl p-4 text-sm text-[#9a3412]">
          <p className="font-medium mb-0.5">Tip</p>
          <p className="text-[#c2410c]">Adjust your calories by ±100-200 based on your weekly progress. Weigh yourself weekly at the same time.</p>
        </div>
      </div>
    </div>
  );
}
