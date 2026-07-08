"use client";

import { useState } from "react";
import { calculateMacros, generateMealPlan, type UserInputs, type MacroResults as MacroResultsType, type ActivityLevel } from "@/lib/nutrition";
import { MacroResults } from "./macro-results";
import { MealPlanSection } from "./meal-plan-section";

export function MacroCalculator() {
  const [inputs, setInputs] = useState<UserInputs>({
    age: 30,
    gender: "male",
    weight: 75,
    height: 175,
    activityLevel: "moderate",
    goal: "maintain",
  });
  const [results, setResults] = useState<MacroResultsType | null>(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    const r = calculateMacros(inputs);
    setResults(r);
    setCalculated(true);
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left: Input Form */}
      <div className="bg-white rounded-xl border border-[#e5e5e5] p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#1a1a2e]">Your Details</h2>
          <p className="text-[#737373] text-sm mt-1">Enter your stats for a personalized calculation</p>
        </div>

        <div className="space-y-5">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Gender</label>
            <div className="flex gap-3">
              {["male", "female"].map((g) => (
                <button
                  key={g}
                  onClick={() => setInputs({ ...inputs, gender: g as "male" | "female" })}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    inputs.gender === g
                      ? "bg-[#f07651] text-white shadow-sm"
                      : "bg-[#f5f5f5] text-[#737373] hover:bg-[#e5e5e5]"
                  }`}
                >
                  {g === "male" ? "Male" : "Female"}
                </button>
              ))}
            </div>
          </div>

          {/* Age, Weight, Height */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "age", label: "Age", min: 10, max: 100, value: inputs.age, unit: "years" },
              { id: "weight", label: "Weight", min: 30, max: 300, value: inputs.weight, unit: "kg", step: 0.5 },
              { id: "height", label: "Height", min: 100, max: 250, value: inputs.height, unit: "cm" },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-xs font-medium text-[#737373] mb-1.5">{f.label}</label>
                <div className="relative">
                  <input
                    type="number"
                    min={f.min}
                    max={f.max}
                    step={f.step || 1}
                    value={f.value}
                    onChange={(e) => setInputs({ ...inputs, [f.id]: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f07651] focus:border-transparent transition-all"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#737373]">{f.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Activity Level</label>
            <div className="grid grid-cols-1 gap-2">
              {(["sedentary", "light", "moderate", "active", "very-active"] as ActivityLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setInputs({ ...inputs, activityLevel: level })}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                    inputs.activityLevel === level
                      ? "bg-[#f07651] text-white shadow-sm"
                      : "bg-[#f5f5f5] text-[#737373] hover:bg-[#e5e5e5]"
                  }`}
                >
                  {level === "sedentary" && "Sedentary - desk job, little exercise"}
                  {level === "light" && "Light - 1-3 days/week"}
                  {level === "moderate" && "Moderate - 3-5 days/week"}
                  {level === "active" && "Active - 6-7 days/week"}
                  {level === "very-active" && "Very Active - 2x/day or physical job"}
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Your Goal</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: "lose", label: "Lose Weight" },
                { key: "maintain", label: "Maintain" },
                { key: "gain", label: "Build Muscle" },
              ].map((g) => (
                <button
                  key={g.key}
                  onClick={() => setInputs({ ...inputs, goal: g.key as "lose" | "maintain" | "gain" })}
                  className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${
                    inputs.goal === g.key
                      ? "bg-[#f07651] text-white shadow-sm"
                      : "bg-[#f5f5f5] text-[#737373] hover:bg-[#e5e5e5]"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-3.5 bg-[#f07651] text-white rounded-lg font-semibold text-base hover:bg-[#e0633a] transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Calculate My Macros
          </button>
        </div>
      </div>

      {/* Right: Results */}
      <div id="results">
        {!calculated ? (
          <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#f5f5f5] rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#737373]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-[#737373] font-medium">Enter your details</p>
              <p className="text-sm text-[#a3a3a3] mt-1">Your personalized macros will appear here</p>
            </div>
          </div>
        ) : results ? (
          <div className="space-y-6">
            <MacroResults results={results} inputs={inputs} />
            <MealPlanSection macros={results} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
