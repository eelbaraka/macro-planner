import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7-Day Calorie Deficit Meal Prep: Lose Weight Without Starving",
  description:
    "A complete 7-day meal prep plan designed for a calorie deficit. 1,500-1,800 calories per day with 120g+ protein. Includes grocery list, recipes, and step-by-step prep instructions.",
  keywords: [
    "calorie deficit meal prep",
    "weight loss meal plan",
    "meal prep for weight loss",
    "7 day meal prep",
    "healthy meal prep ideas",
  ],
  openGraph: {
    title: "7-Day Calorie Deficit Meal Prep",
    description: "1,500-1,800 cal/day with 120g+ protein. Full grocery list included.",
    images: [{ url: "/images/blog/meal-prep-bowls.jpg", width: 1200, height: 800 }],
  },
};

export default function CalorieDeficitMealPrep() {
  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/blog/meal-prep-bowls.jpg"
              alt="Colorful meal prep bowls with chicken, rice, and vegetables for weight loss"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">Meal Prep</span>
                <span>·</span>
                <span>July 8, 2026</span>
                <span>·</span>
                <span>12 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                7-Day Calorie Deficit Meal Prep: Lose Weight Without Starving
              </h1>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mb-8">Photo by Anna Pelzer on Unsplash</p>

          <div className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl text-neutral-700 font-medium">
              The secret to successful weight loss isn't willpower — it's preparation. 
              This 7-day calorie deficit meal prep plan takes the guesswork out of eating.
              Every meal is calculated to keep you in a deficit while maximizing protein and satisfaction.
            </p>

            <h2>Why Meal Prep Works for Calorie Deficits</h2>
            <p>
              When your meals are already prepared and portioned, you're far less likely to make impulsive
              food choices. Studies show that people who meal prep are 3x more likely to stick to their
              calorie goals than those who decide what to eat on the spot.
            </p>
            <ul>
              <li><strong>Portion control</strong> — Every meal is precisely measured</li>
              <li><strong>Time savings</strong> — 2 hours of prep saves 7+ hours during the week</li>
              <li><strong>Money savings</strong> — Less takeout, less food waste</li>
              <li><strong>Consistent macros</strong> — You know exactly what you're eating</li>
            </ul>

            <h2>The 7-Day Meal Plan</h2>
            <p><strong>Target:</strong> 1,500-1,800 calories • 120-150g protein • 50-60g fat • 150-180g carbs</p>

            <h3>Day 1: Monday</h3>
            <ul>
              <li><strong>Breakfast (340 cal, 38g protein):</strong> 3-egg scramble with spinach and 1 slice whole wheat toast</li>
              <li><strong>Lunch (450 cal, 42g protein):</strong> Grilled chicken breast (150g) with quinoa (150g) and roasted broccoli (200g)</li>
              <li><strong>Dinner (480 cal, 40g protein):</strong> Baked salmon (150g) with sweet potato (200g) and asparagus</li>
              <li><strong>Snack (210 cal, 20g protein):</strong> Greek yogurt (150g) with blueberries</li>
              <li><strong>Total: 1,480 cal • 140g protein</strong></li>
            </ul>

            <h3>Day 2: Tuesday</h3>
            <ul>
              <li><strong>Breakfast (310 cal, 32g protein):</strong> Protein smoothie — 1 scoop whey, 1 cup almond milk, ½ banana, 1 tbsp peanut butter</li>
              <li><strong>Lunch (470 cal, 38g protein):</strong> Turkey breast (150g) with brown rice (150g) and mixed vegetables</li>
              <li><strong>Dinner (510 cal, 45g protein):</strong> Lean beef stir-fry (150g beef, 200g mixed veggies, soy sauce, ginger)</li>
              <li><strong>Snack (190 cal, 18g protein):</strong> Cottage cheese (150g) with pineapple</li>
              <li><strong>Total: 1,480 cal • 133g protein</strong></li>
            </ul>

            <h3>Day 3: Wednesday</h3>
            <ul>
              <li><strong>Breakfast (380 cal, 35g protein):</strong> Protein oatmeal — ½ cup oats, 1 scoop protein powder, 1 tbsp almond butter</li>
              <li><strong>Lunch (440 cal, 36g protein):</strong> Tuna salad (1 can tuna, 2 tbsp Greek yogurt, celery, onion) with 2 rice cakes</li>
              <li><strong>Dinner (490 cal, 42g protein):</strong> Baked chicken thigh (150g) with roasted vegetables and ½ cup quinoa</li>
              <li><strong>Snack (200 cal, 22g protein):</strong> Protein shake (1 scoop) + 10 almonds</li>
              <li><strong>Total: 1,510 cal • 135g protein</strong></li>
            </ul>

            <h3>Day 4: Thursday</h3>
            <ul>
              <li><strong>Breakfast (350 cal, 33g protein):</strong> 2 eggs + 2 turkey sausage links + 1 slice whole wheat toast</li>
              <li><strong>Lunch (460 cal, 40g protein):</strong> Shrimp (150g) with zucchini noodles (300g) and pesto sauce</li>
              <li><strong>Dinner (500 cal, 38g protein):</strong> Pork tenderloin (150g) with roasted Brussels sprouts and ½ cup wild rice</li>
              <li><strong>Snack (180 cal, 15g protein):</strong> Apple + 1 tbsp peanut butter</li>
              <li><strong>Total: 1,490 cal • 126g protein</strong></li>
            </ul>

            <h3>Day 5: Friday</h3>
            <ul>
              <li><strong>Breakfast (300 cal, 28g protein):</strong> Greek yogurt parfait — 200g yogurt, ½ cup berries, 1 tbsp granola</li>
              <li><strong>Lunch (450 cal, 35g protein):</strong> Chicken Caesar salad (150g chicken, romaine, 2 tbsp light dressing, parmesan)</li>
              <li><strong>Dinner (520 cal, 44g protein):</strong> Baked cod (180g) with lemon, herb-roasted potatoes (150g), and green beans</li>
              <li><strong>Snack (220 cal, 25g protein):</strong> 1 hard-boiled egg + 1 string cheese</li>
              <li><strong>Total: 1,490 cal • 132g protein</strong></li>
            </ul>

            <h3>Day 6: Saturday</h3>
            <ul>
              <li><strong>Breakfast (370 cal, 40g protein):</strong> 3 egg-white omelette with turkey and cheese</li>
              <li><strong>Lunch (430 cal, 34g protein):</strong> Leftover baked cod with roasted potatoes and green beans</li>
              <li><strong>Dinner (480 cal, 38g protein):</strong> Chicken fajita bowl — 150g chicken, peppers, onions, ½ cup rice, salsa</li>
              <li><strong>Snack (200 cal, 20g protein):</strong> Cottage cheese (150g) + cucumber slices</li>
              <li><strong>Total: 1,480 cal • 132g protein</strong></li>
            </ul>

            <h3>Day 7: Sunday</h3>
            <ul>
              <li><strong>Breakfast (340 cal, 36g protein):</strong> Protein pancakes (2) with sugar-free syrup</li>
              <li><strong>Lunch (460 cal, 42g protein):</strong> Leftover chicken fajita bowl</li>
              <li><strong>Dinner (500 cal, 40g protein):</strong> Lean ground turkey (150g) bolognese with whole wheat pasta (150g cooked)</li>
              <li><strong>Snack (210 cal, 18g protein):</strong> ½ cup edamame</li>
              <li><strong>Total: 1,510 cal • 136g protein</strong></li>
            </ul>

            <h2>Sunday Prep Instructions (2 Hours)</h2>
            <ol>
              <li><strong>Cook proteins:</strong> Bake chicken breasts (3), salmon (1), cod (1), and ground turkey (1) — 45 min at 400°F</li>
              <li><strong>Cook grains:</strong> Make quinoa (1 cup dry), brown rice (1 cup dry), and wild rice (½ cup dry) — 20 min</li>
              <li><strong>Roast vegetables:</strong> Chop and roast broccoli, sweet potatoes, Brussels sprouts, and green beans — 25 min at 425°F</li>
              <li><strong>Portion:</strong> Divide into 7 containers using a food scale. Label with day of week</li>
              <li><strong>Prep breakfasts:</strong> Pre-portion oats, smoothie ingredients in bags, and hard-boil 6 eggs</li>
            </ol>

            <h2>Grocery List</h2>
            <div className="grid grid-cols-2 gap-4 not-prose bg-neutral-50 rounded-xl p-6">
              <div>
                <h4 className="font-bold mb-2">Proteins</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Chicken breast (1.5 lb)</li>
                  <li>Chicken thighs (0.5 lb)</li>
                  <li>Lean ground turkey (0.5 lb)</li>
                  <li>Salmon fillet (0.5 lb)</li>
                  <li>Cod fillet (0.5 lb)</li>
                  <li>Pork tenderloin (0.5 lb)</li>
                  <li>Shrimp (0.5 lb)</li>
                  <li>Eggs (2 dozen)</li>
                  <li>Turkey sausage (8 links)</li>
                  <li>Protein powder (1 tub)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Produce &amp; Pantry</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Mixed vegetables (broccoli, asparagus, spinach, bell peppers)</li>
                  <li>Sweet potatoes (2 large)</li>
                  <li>Quinoa, brown rice, wild rice</li>
                  <li>Greek yogurt (2 large tubs)</li>
                  <li>Cottage cheese</li>
                  <li>Almond milk</li>
                  <li>Whole wheat bread/tortillas</li>
                  <li>Berries, bananas, apples</li>
                  <li>Peanut butter, almonds</li>
                  <li>Olive oil, spices, sauces</li>
                </ul>
              </div>
            </div>

            <h2>Tips for Staying in a Calorie Deficit</h2>
            <ol>
              <li><strong>Weigh your food</strong> — A food scale is more accurate than measuring cups</li>
              <li><strong>Don't drink your calories</strong> — Stick to water, black coffee, and unsweetened tea</li>
              <li><strong>Eat enough protein</strong> — Aim for 1.6-2.2g per kg of bodyweight</li>
              <li><strong>Include fiber</strong> — Vegetables, oats, and chia seeds keep you full longer</li>
              <li><strong>Be consistent</strong> — A 500-calorie deficit leads to 0.5kg (1lb) of fat loss per week</li>
            </ol>

            <h3>How many calories should I eat for a deficit?</h3>
            <p>Use our <a href="/" className="text-green-600 underline">free macro calculator</a> to find your exact calorie target based on your age, weight, height, and activity level.</p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 my-8 text-center not-prose">
              <h3 className="text-2xl font-bold text-green-800 mb-3">🎯 Get Your Personalized Plan</h3>
              <p className="text-green-700 mb-4">
                Calculate your exact calorie deficit targets in seconds.
              </p>
              <a href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Calculate My Calorie Deficit →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
