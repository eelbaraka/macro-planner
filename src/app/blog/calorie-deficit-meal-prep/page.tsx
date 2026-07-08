import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-white">
      {/* Hero with overlay */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/images/blog/meal-prep-bowls.jpg"
          alt="Colorful meal prep bowls with chicken, rice, and vegetables for weight loss"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 text-white/80 text-sm mb-3">
              <span className="bg-[#f07651] text-white px-3 py-1 rounded-lg text-xs font-medium">Meal Prep</span>
              <span>·</span>
              <span>July 8, 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              7-Day Calorie Deficit Meal Prep: Lose Weight Without Starving
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-xs text-neutral-400 mt-3 mb-8">Photo by Anna Pelzer on Unsplash</p>

        <article className="prose prose-lg prose-neutral max-w-none">
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            The secret to successful weight loss isn't willpower — it's preparation. 
            This 7-day calorie deficit meal prep plan takes the guesswork out of eating.
            Every meal is calculated to keep you in a deficit while maximizing protein and satisfaction.
          </p>

          <h2>Why Meal Prep Works for Calorie Deficits</h2>
          <p>
            When your meals are already prepared and portioned, you're far less likely to make impulsive
            food choices. Studies show that people who meal prep are <strong>3x more likely to stick</strong> to their
            calorie goals than those who decide what to eat on the spot.
          </p>
          <ul>
            <li><strong>Portion control</strong> — Every meal is precisely measured</li>
            <li><strong>Time savings</strong> — 2 hours of prep saves 7+ hours during the week</li>
            <li><strong>Money savings</strong> — Less takeout, less food waste</li>
            <li><strong>Consistent macros</strong> — You know exactly what you're eating</li>
          </ul>

          <h2>The 7-Day Meal Plan</h2>
          <p className="font-semibold text-neutral-700">Target: 1,500-1,800 calories · 120-150g protein · 50-60g fat · 150-180g carbs</p>

          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, i) => {
            const meals = [
              { b: "3-egg scramble with spinach and 1 slice whole wheat toast (340 cal, 38g protein)", l: "Grilled chicken breast (150g) with quinoa (150g) and roasted broccoli (200g) (450 cal, 42g protein)", d: "Baked salmon (150g) with sweet potato (200g) and asparagus (480 cal, 40g protein)", s: "Greek yogurt (150g) with blueberries (210 cal, 20g protein)", total: "1,480 cal · 140g protein" },
              { b: "Protein smoothie — 1 scoop whey, 1 cup almond milk, ½ banana, 1 tbsp peanut butter (310 cal, 32g protein)", l: "Turkey breast (150g) with brown rice (150g) and mixed vegetables (470 cal, 38g protein)", d: "Lean beef stir-fry (150g beef, 200g mixed veggies, soy sauce, ginger) (510 cal, 45g protein)", s: "Cottage cheese (150g) with pineapple (190 cal, 18g protein)", total: "1,480 cal · 133g protein" },
              { b: "Protein oatmeal — ½ cup oats, 1 scoop protein powder, 1 tbsp almond butter (380 cal, 35g protein)", l: "Tuna salad (1 can tuna, 2 tbsp Greek yogurt, celery, onion) with 2 rice cakes (440 cal, 36g protein)", d: "Baked chicken thigh (150g) with roasted vegetables and ½ cup quinoa (490 cal, 42g protein)", s: "Protein shake (1 scoop) + 10 almonds (200 cal, 22g protein)", total: "1,510 cal · 135g protein" },
              { b: "2 eggs + 2 turkey sausage links + 1 slice whole wheat toast (350 cal, 33g protein)", l: "Shrimp (150g) with zucchini noodles (300g) and pesto sauce (460 cal, 40g protein)", d: "Pork tenderloin (150g) with roasted Brussels sprouts and ½ cup wild rice (500 cal, 38g protein)", s: "Apple + 1 tbsp peanut butter (180 cal, 15g protein)", total: "1,490 cal · 126g protein" },
              { b: "Greek yogurt parfait — 200g yogurt, ½ cup berries, 1 tbsp granola (300 cal, 28g protein)", l: "Chicken Caesar salad (150g chicken, romaine, 2 tbsp light dressing, parmesan) (450 cal, 35g protein)", d: "Baked cod (180g) with lemon, herb-roasted potatoes (150g), and green beans (520 cal, 44g protein)", s: "1 hard-boiled egg + 1 string cheese (220 cal, 25g protein)", total: "1,490 cal · 132g protein" },
              { b: "3 egg-white omelette with turkey and cheese (370 cal, 40g protein)", l: "Leftover baked cod with roasted potatoes and green beans (430 cal, 34g protein)", d: "Chicken fajita bowl — 150g chicken, peppers, onions, ½ cup rice, salsa (480 cal, 38g protein)", s: "Cottage cheese (150g) + cucumber slices (200 cal, 20g protein)", total: "1,480 cal · 132g protein" },
              { b: "Protein pancakes (2) with sugar-free syrup (340 cal, 36g protein)", l: "Leftover chicken fajita bowl (460 cal, 42g protein)", d: "Lean ground turkey (150g) bolognese with whole wheat pasta (150g cooked) (500 cal, 40g protein)", s: "½ cup edamame (210 cal, 18g protein)", total: "1,510 cal · 136g protein" },
            ];
            const m = meals[i];
            return (
              <div key={day}>
                <h3>{day}</h3>
                <ul>
                  <li><strong>Breakfast:</strong> {m.b}</li>
                  <li><strong>Lunch:</strong> {m.l}</li>
                  <li><strong>Dinner:</strong> {m.d}</li>
                  <li><strong>Snack:</strong> {m.s}</li>
                  <li className="font-bold text-[#c2410c]">{m.total}</li>
                </ul>
              </div>
            );
          })}

          <h2>Sunday Prep Instructions (2 Hours)</h2>
          <ol>
            <li><strong>Cook proteins:</strong> Bake chicken breasts (3), salmon (1), cod (1), and ground turkey (1) — 45 min at 400°F</li>
            <li><strong>Cook grains:</strong> Make quinoa (1 cup dry), brown rice (1 cup dry), and wild rice (½ cup dry) — 20 min</li>
            <li><strong>Roast vegetables:</strong> Chop and roast broccoli, sweet potatoes, Brussels sprouts, and green beans — 25 min at 425°F</li>
            <li><strong>Portion:</strong> Divide into 7 containers using a food scale. Label with day of week</li>
            <li><strong>Prep breakfasts:</strong> Pre-portion oats, smoothie ingredients in bags, and hard-boil 6 eggs</li>
          </ol>

          <h2>Grocery List</h2>
          <div className="grid grid-cols-2 gap-6 not-prose bg-neutral-50 rounded-2xl p-6 md:p-8">
            <div>
              <h4 className="font-bold text-neutral-800 mb-3">Proteins</h4>
              <ul className="space-y-1.5 text-sm text-neutral-600">
                {["Chicken breast (1.5 lb)", "Chicken thighs (0.5 lb)", "Lean ground turkey (0.5 lb)", "Salmon fillet (0.5 lb)", "Cod fillet (0.5 lb)", "Pork tenderloin (0.5 lb)", "Shrimp (0.5 lb)", "Eggs (2 dozen)", "Turkey sausage (8 links)", "Protein powder (1 tub)"].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f07651] rounded-full" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 mb-3">Produce &amp; Pantry</h4>
              <ul className="space-y-1.5 text-sm text-neutral-600">
                {["Mixed vegetables (broccoli, asparagus, spinach, bell peppers)", "Sweet potatoes (2 large)", "Quinoa, brown rice, wild rice", "Greek yogurt (2 large tubs)", "Cottage cheese", "Almond milk", "Whole wheat bread/tortillas", "Berries, bananas, apples", "Peanut butter, almonds", "Olive oil, spices, sauces"].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f07651] rounded-full" />{item}</li>
                ))}
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
          <p>Use our <Link href="/" className="text-[#f07651] underline font-medium">free macro calculator</Link> to find your exact calorie target based on your age, weight, height, and activity level.</p>
        </article>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#f07651] to-[#d4532a] rounded-2xl p-8 md:p-10 my-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Get Your Personalized Plan</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Calculate your exact calorie deficit targets in seconds.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-[#c2410c] px-6 py-3 rounded-xl font-semibold hover:bg-[#fff4f0] transition-colors shadow-lg">
            Calculate My Calorie Deficit →
          </Link>
        </div>
      </div>
    </div>
  );
}
