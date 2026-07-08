"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { calculateMacros, type UserInputs, getActivityLabel, type ActivityLevel } from "@/lib/nutrition";
import type { MacroResults as MacroResultsType } from "@/lib/nutrition";
import { MacroResults } from "@/components/macro-results";
import { MealPlanSection } from "@/components/meal-plan-section";
import { Dumbbell, ArrowRight, Calculator } from "lucide-react";

export default function Home() {
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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Free{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Macro Calculator
          </span>{" "}
          & Meal Planner
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Get your personalized daily protein, carbs, and fat targets in seconds.
          Then generate a custom meal plan — no signup, no spam, just results.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Input Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Calculator className="h-5 w-5 text-green-600" />
              Your Details
            </CardTitle>
            <CardDescription>
              Enter your stats and goals for a personalized calculation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Gender */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={inputs.gender}
                onValueChange={(v) => setInputs({ ...inputs, gender: v as "male" | "female" })}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Age + Weight + Height */}
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  min={10}
                  max={100}
                  value={inputs.age}
                  onChange={(e) => setInputs({ ...inputs, age: Number(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  min={30}
                  max={300}
                  step={0.5}
                  value={inputs.weight}
                  onChange={(e) => setInputs({ ...inputs, weight: Number(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  min={100}
                  max={250}
                  value={inputs.height}
                  onChange={(e) => setInputs({ ...inputs, height: Number(e.target.value) })}
                />
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <Label htmlFor="activity">Activity Level</Label>
              <Select
                value={inputs.activityLevel}
                onValueChange={(v) => setInputs({ ...inputs, activityLevel: v as ActivityLevel })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary</SelectItem>
                  <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                  <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                  <SelectItem value="very-active">Very Active (2x/day)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Goal */}
            <div className="space-y-2">
              <Label>Goal</Label>
              <RadioGroup
                value={inputs.goal}
                onValueChange={(v) => setInputs({ ...inputs, goal: v as "lose" | "maintain" | "gain" })}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="lose" id="lose" />
                  <Label htmlFor="lose">🔥 Lose Weight</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="maintain" id="maintain" />
                  <Label htmlFor="maintain">✅ Maintain</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="gain" id="gain" />
                  <Label htmlFor="gain">💪 Build Muscle</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleCalculate} className="w-full h-12 text-base gap-2" size="lg">
              Calculate My Macros <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {!calculated ? (
            <Card className="shadow-lg h-full flex items-center justify-center p-8">
              <div className="text-center text-neutral-400">
                <Dumbbell className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium">Enter your details and click calculate</p>
                <p className="text-sm mt-1">Your personalized macros will appear here</p>
              </div>
            </Card>
          ) : results ? (
            <>
              <MacroResults results={results} inputs={inputs} />
              <MealPlanSection macros={results} />
            </>
          ) : null}
        </div>
      </div>

      {/* Info Section */}
      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm bg-green-50">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold mb-2">1. Calculate</h3>
              <p className="text-sm text-neutral-600">Enter your stats and goals. We use the Mifflin-St Jeor equation for accurate BMR + TDEE.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-green-50">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">2. Get Your Macros</h3>
              <p className="text-sm text-neutral-600">See your daily protein, carbs, fat, and fiber targets tailored to your goal.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm bg-green-50">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">🍽️</div>
              <h3 className="font-semibold mb-2">3. Eat the Plan</h3>
              <p className="text-sm text-neutral-600">Generate a complete meal plan with recipes, then adjust as you like.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEO-friendly content */}
      <section className="max-w-3xl mx-auto mt-16 prose prose-neutral">
        <h2>What Is a Macro Calculator?</h2>
        <p>
          A macro calculator helps you determine your daily requirements for protein, carbohydrates, and fat
          based on your age, weight, height, activity level, and fitness goal. Unlike simple calorie counters,
          macro calculators give you a complete nutritional breakdown so you can optimize your diet for
          weight loss, muscle gain, or maintenance.
        </p>

        <h3>Why Use MacroPlanner?</h3>
        <ul>
          <li><strong>Accurate:</strong> Uses the scientifically validated Mifflin-St Jeor equation</li>
          <li><strong>Free:</strong> No signup, no credit card, no hidden fees</li>
          <li><strong>Integrated meal planner:</strong> Get meals that match your exact macros</li>
          <li><strong>Privacy-first:</strong> Your data never leaves your browser</li>
        </ul>
      </section>
    </div>
  );
}
