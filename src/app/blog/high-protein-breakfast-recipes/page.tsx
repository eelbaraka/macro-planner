import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "15 High-Protein Breakfast Recipes for Weight Loss (Under 400 Calories)",
  description:
    "Start your day right with 15 high-protein breakfast recipes for weight loss. Each meal has 25g+ protein, under 400 calories, and takes 15 minutes or less.",
  keywords: [
    "high protein breakfast",
    "weight loss breakfast",
    "protein recipes for weight loss",
    "healthy breakfast ideas",
    "low calorie high protein breakfast",
  ],
  openGraph: {
    title: "15 High-Protein Breakfast Recipes for Weight Loss",
    description: "Each meal has 25g+ protein, under 400 calories, and takes 15 minutes.",
    images: [{ url: "/images/blog/high-protein-breakfast.jpg", width: 1200, height: 800 }],
  },
};

export default function HighProteinBreakfast() {
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "RecipeCollection",
    name: "15 High-Protein Breakfast Recipes for Weight Loss",
    description: "High-protein breakfast recipes under 400 calories for weight loss.",
    recipes: [
      {
        "@type": "Recipe",
        name: "Protein-Packed Scrambled Eggs",
        recipeYield: "1 serving",
        recipeIngredient: ["3 eggs", "1/2 cup egg whites", "1/4 cup cottage cheese", "Salt and pepper"],
        nutrition: { calories: "340", proteinContent: "38g", carbohydrateContent: "3g", fatContent: "18g" },
      },
    ],
    author: { "@type": "Organization", name: "MacroPlanner" },
  };

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/images/blog/high-protein-breakfast.jpg"
              alt="High protein breakfast bowl with eggs, avocado, and fresh vegetables"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">Recipes</span>
                <span>·</span>
                <span>July 8, 2026</span>
                <span>·</span>
                <span>10 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                15 High-Protein Breakfast Recipes for Weight Loss (Under 400 Calories)
              </h1>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mb-8">
            Photo by Brooke Lark on Unsplash
          </p>

          {/* Article content */}
          <div className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl text-neutral-700 font-medium">
              Breakfast is the most important meal of the day — especially when you're trying to lose weight.
              A high-protein breakfast keeps you full, boosts your metabolism, and prevents mid-morning cravings.
            </p>

            <h2>Why High-Protein Breakfasts Work for Weight Loss</h2>
            <p>
              Studies show that eating 25-30g of protein at breakfast can reduce cravings by up to 60%
              and increase satiety throughout the day. Protein has the highest thermic effect of food (TEF),
              meaning your body burns more calories digesting protein than carbs or fat.
            </p>
            <ul>
              <li><strong>Boosts metabolism</strong> — Protein digestion burns 20-30% of its calories</li>
              <li><strong>Reduces cravings</strong> — High-protein breakfasts lower ghrelin (the hunger hormone)</li>
              <li><strong>Preserves muscle</strong> — Essential during a calorie deficit for weight loss</li>
              <li><strong>Increases satiety</strong> — Keeps you full for 3-4 hours longer than carb-heavy breakfasts</li>
            </ul>

            <h2>15 Protein-Packed Breakfast Recipes</h2>

            <h3>1. Protein-Packed Scrambled Eggs (38g Protein, 340 cal)</h3>
            <p>
              The ultimate high-protein breakfast. Whisk 3 eggs with ½ cup egg whites and ¼ cup cottage cheese
              for an incredibly fluffy, protein-dense scramble. Cook in a non-stick pan with a teaspoon of olive oil.
              Serve with a side of sautéed spinach.
            </p>
            <ul>
              <li>Calories: 340</li>
              <li>Protein: 38g</li>
              <li>Prep time: 8 minutes</li>
            </ul>

            <h3>2. Greek Yogurt Protein Bowl (32g Protein, 290 cal)</h3>
            <p>
              Combine 1 cup of plain Greek yogurt (2%) with 1 scoop vanilla protein powder, 
              ½ cup mixed berries, and 1 tablespoon of chia seeds. The yogurt provides casein protein
              while the protein powder adds fast-digesting whey — a perfect combo.
            </p>
            <ul>
              <li>Calories: 290</li>
              <li>Protein: 32g</li>
              <li>Prep time: 5 minutes</li>
            </ul>

            <h3>3. Cottage Cheese & Egg White Omelette (35g Protein, 310 cal)</h3>
            <p>
              Whisk 4 egg whites with ½ cup cottage cheese until smooth. Pour into a heated non-stick pan.
              Add chopped bell peppers, onions, and spinach. Fold and cook until golden. The cottage cheese
              adds extra protein and makes the omelette incredibly creamy.
            </p>
            <ul>
              <li>Calories: 310</li>
              <li>Protein: 35g</li>
              <li>Prep time: 10 minutes</li>
            </ul>

            <h3>4. Protein Oatmeal with Peanut Butter (36g Protein, 390 cal)</h3>
            <p>
              Cook ½ cup rolled oats with 1 cup milk of choice. Stir in 1 scoop vanilla or chocolate
              protein powder after cooking (don't cook the powder!). Top with 1 tablespoon peanut butter
              and sliced banana. This classic combination is satiating and delicious.
            </p>
            <ul>
              <li>Calories: 390</li>
              <li>Protein: 36g</li>
              <li>Prep time: 10 minutes</li>
            </ul>

            <h3>5. Turkey & Avocado Breakfast Wrap (40g Protein, 380 cal)</h3>
            <p>
              Fill a whole wheat tortilla with 4 oz sliced turkey breast, ¼ avocado, 2 scrambled egg whites,
              and a handful of arugula. Roll tightly and toast in a pan for 2 minutes per side. Perfect for
              meal prep — make 5 on Sunday for the week.
            </p>
            <ul>
              <li>Calories: 380</li>
              <li>Protein: 40g</li>
              <li>Prep time: 12 minutes</li>
            </ul>

            <h3>6-15: Quick Reference Table</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-green-50">
                    <th className="px-4 py-2 text-left font-medium">Recipe</th>
                    <th className="px-4 py-2 text-center font-medium">Protein</th>
                    <th className="px-4 py-2 text-center font-medium">Calories</th>
                    <th className="px-4 py-2 text-center font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="px-4 py-2">6. Smoked Salmon & Cream Cheese on Rye</td><td className="px-4 py-2 text-center">28g</td><td className="px-4 py-2 text-center">350</td><td className="px-4 py-2 text-center">5 min</td></tr>
                  <tr className="border-b bg-neutral-50"><td className="px-4 py-2">7. Tofu Scramble with Veggies</td><td className="px-4 py-2 text-center">25g</td><td className="px-4 py-2 text-center">280</td><td className="px-4 py-2 text-center">12 min</td></tr>
                  <tr className="border-b"><td className="px-4 py-2">8. Protein Pancakes (2 servings)</td><td className="px-4 py-2 text-center">42g</td><td className="px-4 py-2 text-center">380</td><td className="px-4 py-2 text-center">15 min</td></tr>
                  <tr className="border-b bg-neutral-50"><td className="px-4 py-2">9. Ham & Cheese Egg Muffins (3)</td><td className="px-4 py-2 text-center">33g</td><td className="px-4 py-2 text-center">320</td><td className="px-4 py-2 text-center">20 min</td></tr>
                  <tr className="border-b"><td className="px-4 py-2">10. Chicken Sausage & Sweet Potato Hash</td><td className="px-4 py-2 text-center">30g</td><td className="px-4 py-2 text-center">370</td><td className="px-4 py-2 text-center">15 min</td></tr>
                  <tr className="border-b bg-neutral-50"><td className="px-4 py-2">11. Protein Smoothie Bowl</td><td className="px-4 py-2 text-center">35g</td><td className="px-4 py-2 text-center">340</td><td className="px-4 py-2 text-center">5 min</td></tr>
                  <tr className="border-b"><td className="px-4 py-2">12. Ricotta Toast with Berries</td><td className="px-4 py-2 text-center">26g</td><td className="px-4 py-2 text-center">310</td><td className="px-4 py-2 text-center">5 min</td></tr>
                  <tr className="border-b bg-neutral-50"><td className="px-4 py-2">13. Ground Turkey Breakfast Bowl</td><td className="px-4 py-2 text-center">38g</td><td className="px-4 py-2 text-center">390</td><td className="px-4 py-2 text-center">12 min</td></tr>
                  <tr className="border-b"><td className="px-4 py-2">14. Egg White & Veggie Frittata</td><td className="px-4 py-2 text-center">34g</td><td className="px-4 py-2 text-center">300</td><td className="px-4 py-2 text-center">20 min</td></tr>
                  <tr className="bg-neutral-50"><td className="px-4 py-2">15. Protein Chia Pudding (prepped overnight)</td><td className="px-4 py-2 text-center">28g</td><td className="px-4 py-2 text-center">290</td><td className="px-4 py-2 text-center">5 min + overnight</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Tips for High-Protein Breakfast Success</h2>
            <ol>
              <li><strong>Prep ahead:</strong> Make egg muffins, chia puddings, or protein pancakes on Sunday for the week</li>
              <li><strong>Use protein powder:</strong> An easy way to add 20-30g protein without extra volume</li>
              <li><strong>Include protein from multiple sources:</strong> Combine eggs + dairy, or meat + eggs for complete amino acid profiles</li>
              <li><strong>Don't skip the veggies:</strong> Add spinach, peppers, or mushrooms for fiber and micronutrients</li>
              <li><strong>Stay hydrated:</strong> Drink a glass of water before breakfast to aid digestion</li>
            </ol>

            <h2>Frequently Asked Questions</h2>
            <h3>How much protein should I eat at breakfast?</h3>
            <p>Aim for 25-40g of protein at breakfast. Research shows this amount optimizes muscle protein synthesis and keeps you full until lunch. Use our <a href="/" className="text-green-600 underline">macro calculator</a> to find your exact daily targets.</p>
            <h3>Can I lose weight eating high-protein breakfasts?</h3>
            <p>Yes. Multiple studies show that high-protein breakfasts (30g+) lead to greater fat loss compared to low-protein or carb-heavy breakfasts, even at the same calorie intake.</p>
            <h3>What if I don't have time to cook?</h3>
            <p>Greek yogurt with protein powder, overnight oats, protein shakes, and pre-made egg muffins all take 5 minutes or less. Prep them the night before.</p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 my-8 text-center not-prose">
              <h3 className="text-2xl font-bold text-green-800 mb-3">🎯 Find Your Exact Macros</h3>
              <p className="text-green-700 mb-4">
                Use our free calculator to get your personalized protein, carb, and fat targets.
              </p>
              <a href="/" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Calculate My Macros Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />
    </article>
  );
}
