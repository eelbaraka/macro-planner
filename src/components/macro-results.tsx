"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type MacroResults, type UserInputs } from "@/lib/nutrition";

interface Props {
  results: MacroResults;
  inputs: UserInputs;
}

export function MacroResults({ results, inputs }: Props) {
  return (
    <Card className="shadow-lg border-green-100">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
        <CardTitle className="text-xl">📊 Your Daily Macros</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-wide">Calories</p>
            <p className="text-2xl font-bold text-green-700">{results.targetCalories}</p>
            <p className="text-xs text-neutral-400">kcal / day</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-wide">BMR</p>
            <p className="text-2xl font-bold text-orange-600">{results.bmr}</p>
            <p className="text-xs text-neutral-400">kcal / day</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-wide">TDEE</p>
            <p className="text-2xl font-bold text-blue-600">{results.tdee}</p>
            <p className="text-xs text-neutral-400">kcal / day</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-wide">Goal</p>
            <p className="text-lg font-bold text-purple-700 capitalize">{inputs.goal}</p>
            <p className="text-xs text-neutral-400">{inputs.activityLevel.replace("-", " ")}</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-100">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Macro</th>
                <th className="px-4 py-2 text-center font-medium">Grams</th>
                <th className="px-4 py-2 text-center font-medium">Calories</th>
                <th className="px-4 py-2 text-center font-medium">%</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2.5 font-medium">🥩 Protein</td>
                <td className="px-4 py-2.5 text-center font-semibold text-green-700">{results.protein}g</td>
                <td className="px-4 py-2.5 text-center">{results.protein * 4} kcal</td>
                <td className="px-4 py-2.5 text-center">{Math.round((results.protein * 4 / results.targetCalories) * 100)}%</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">🍚 Carbs</td>
                <td className="px-4 py-2.5 text-center font-semibold text-orange-600">{results.carbs}g</td>
                <td className="px-4 py-2.5 text-center">{results.carbs * 4} kcal</td>
                <td className="px-4 py-2.5 text-center">{Math.round((results.carbs * 4 / results.targetCalories) * 100)}%</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-medium">🥑 Fat</td>
                <td className="px-4 py-2.5 text-center font-semibold text-blue-600">{results.fat}g</td>
                <td className="px-4 py-2.5 text-center">{results.fat * 9} kcal</td>
                <td className="px-4 py-2.5 text-center">{Math.round((results.fat * 9 / results.targetCalories) * 100)}%</td>
              </tr>
              <tr className="bg-green-50/50">
                <td className="px-4 py-2.5 font-medium">🌾 Fiber</td>
                <td className="px-4 py-2.5 text-center font-semibold text-emerald-600">{results.fiber}g</td>
                <td className="px-4 py-2.5 text-center" colSpan={2}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
          <strong>💡 Tip:</strong> Adjust your calories by ±100-200 based on your weekly progress.
          Weigh yourself weekly and track your energy levels.
        </div>
      </CardContent>
    </Card>
  );
}
