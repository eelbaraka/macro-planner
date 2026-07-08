// Nutrition calculation engine

export interface UserInputs {
  age: number
  gender: 'male' | 'female'
  weight: number // kg
  height: number // cm
  activityLevel: ActivityLevel
  goal: Goal
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active'
export type Goal = 'lose' | 'maintain' | 'gain'

export interface MacroResults {
  bmr: number
  tdee: number
  targetCalories: number
  protein: number  // grams
  carbs: number    // grams
  fat: number      // grams
  fiber: number    // grams
}

const activityMultipliers: Record<ActivityLevel, number> = {
  'sedentary': 1.2,
  'light': 1.375,
  'moderate': 1.55,
  'active': 1.725,
  'very-active': 1.9,
}

const activityLabels: Record<ActivityLevel, string> = {
  'sedentary': 'Sedentary (office job, little exercise)',
  'light': 'Light (1-3 days/week)',
  'moderate': 'Moderate (3-5 days/week)',
  'active': 'Active (6-7 days/week)',
  'very-active': 'Very Active (2x/day or physical job)',
}

export function getActivityLabel(level: ActivityLevel): string {
  return activityLabels[level]
}

export function calculateBMR(gender: 'male' | 'female', weight: number, height: number, age: number): number {
  // Mifflin-St Jeor Equation (most accurate)
  if (gender === 'male') {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5)
  } else {
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161)
  }
}

export function calculateMacros(inputs: UserInputs): MacroResults {
  const bmr = calculateBMR(inputs.gender, inputs.weight, inputs.height, inputs.age)
  const tdee = Math.round(bmr * activityMultipliers[inputs.activityLevel])

  // Adjust calories based on goal
  let targetCalories: number
  let proteinMultiplier: number
  let fatMultiplier: number

  switch (inputs.goal) {
    case 'lose':
      targetCalories = Math.round(tdee - 500) // 500 cal deficit = ~0.5kg/week
      proteinMultiplier = 2.2  // higher protein to preserve muscle
      fatMultiplier = 0.25
      break
    case 'gain':
      targetCalories = Math.round(tdee + 300) // 300 cal surplus = lean bulk
      proteinMultiplier = 1.8
      fatMultiplier = 0.25
      break
    case 'maintain':
    default:
      targetCalories = Math.round(tdee)
      proteinMultiplier = 1.6
      fatMultiplier = 0.25
      break
  }

  // Macros
  const protein = Math.round(inputs.weight * proteinMultiplier)
  const fat = Math.round((targetCalories * fatMultiplier) / 9) // 9 cal/g
  const remainingCalories = targetCalories - (protein * 4) - (fat * 9)
  const carbs = Math.round(Math.max(remainingCalories / 4, 0)) // 4 cal/g
  const fiber = Math.round(inputs.weight * 0.35) // 0.35g per kg bodyweight

  return {
    bmr,
    tdee,
    targetCalories,
    protein,
    carbs,
    fat,
    fiber,
  }
}

// Sample meal plan based on macros
export interface Meal {
  name: string
  ingredients: string[]
  calories: number
  protein: number
  carbs: number
  fat: number
}

export interface MealPlan {
  meals: Meal[]
  totals: { calories: number; protein: number; carbs: number; fat: number }
}

export function generateMealPlan(macros: MacroResults, dietType: string = 'balanced'): MealPlan {
  // Predefined meal templates — these are sample meals
  // In production, you'd connect to a recipe API or database
  const breakfasts: Meal[] = [
    { name: 'Protein Oatmeal', ingredients: ['Rolled oats 50g', 'Protein powder 1 scoop', 'Banana 1', 'Almond milk 200ml', 'Peanut butter 1 tbsp'], calories: 420, protein: 32, carbs: 45, fat: 14 },
    { name: 'Egg & Avocado Toast', ingredients: ['Whole grain bread 2 slices', 'Eggs 3', 'Avocado 1/2', 'Spinach handful', 'Olive oil 1 tsp'], calories: 480, protein: 28, carbs: 35, fat: 24 },
    { name: 'Greek Yogurt Bowl', ingredients: ['Greek yogurt 200g', 'Mixed berries 100g', 'Granola 30g', 'Honey 1 tbsp', 'Chia seeds 1 tbsp'], calories: 380, protein: 25, carbs: 40, fat: 12 },
  ]

  const lunches: Meal[] = [
    { name: 'Chicken & Rice Bowl', ingredients: ['Chicken breast 150g', 'Brown rice 150g', 'Broccoli 100g', 'Olive oil 1 tbsp', 'Lemon juice'], calories: 520, protein: 42, carbs: 50, fat: 16 },
    { name: 'Salmon Quinoa Salad', ingredients: ['Salmon fillet 150g', 'Quinoa 100g', 'Mixed greens 2 cups', 'Cherry tomatoes', 'Balsamic dressing'], calories: 490, protein: 38, carbs: 35, fat: 20 },
    { name: 'Turkey Wrap', ingredients: ['Turkey breast 120g', 'Whole wheat tortilla', 'Hummus 2 tbsp', 'Lettuce, tomato, onion', 'Feta cheese 30g'], calories: 450, protein: 35, carbs: 38, fat: 16 },
  ]

  const dinners: Meal[] = [
    { name: 'Lean Beef Stir Fry', ingredients: ['Lean beef 150g', 'Mixed vegetables 200g', 'Soy sauce 1 tbsp', 'Ginger & garlic', 'Sesame oil 1 tsp'], calories: 480, protein: 40, carbs: 25, fat: 22 },
    { name: 'Baked Chicken & Sweet Potato', ingredients: ['Chicken thigh 150g', 'Sweet potato 200g', 'Asparagus 100g', 'Garlic butter', 'Rosemary'], calories: 550, protein: 38, carbs: 40, fat: 22 },
    { name: 'Shrimp Pasta', ingredients: ['Shrimp 150g', 'Whole wheat pasta 100g', 'Tomato sauce 100ml', 'Parmesan 20g', 'Basil'], calories: 510, protein: 35, carbs: 50, fat: 16 },
  ]

  const snacks: Meal[] = [
    { name: 'Protein Shake', ingredients: ['Protein powder 1 scoop', 'Almond milk 300ml', 'Banana 1/2', 'Ice cubes'], calories: 210, protein: 28, carbs: 15, fat: 4 },
    { name: 'Apple & Almond Butter', ingredients: ['Apple 1', 'Almond butter 2 tbsp', 'Cinnamon'], calories: 250, protein: 7, carbs: 30, fat: 14 },
    { name: 'Cottage Cheese & Fruit', ingredients: ['Cottage cheese 150g', 'Pineapple 100g', 'Walnuts 15g'], calories: 220, protein: 20, carbs: 18, fat: 10 },
  ]

  // Pick random meals (seeded by the calories goal for reproducibility)
  const mealIndex = Math.floor(Math.abs(macros.targetCalories) % 3)

  const breakfast = breakfasts[mealIndex]
  const lunch = lunches[mealIndex]
  const dinner = dinners[mealIndex]
  const snack = snacks[mealIndex]

  const meals = [breakfast, lunch, dinner, snack]
  const totals = meals.reduce(
    (acc, m) => ({
      calories: acc.calories + m.calories,
      protein: acc.protein + m.protein,
      carbs: acc.carbs + m.carbs,
      fat: acc.fat + m.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  )

  return { meals, totals }
}
