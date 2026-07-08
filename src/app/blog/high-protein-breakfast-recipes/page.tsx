import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with overlay */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/images/blog/high-protein-breakfast.jpg"
          alt="High protein breakfast bowl with eggs, avocado, and fresh vegetables"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 text-white/80 text-sm mb-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-medium">Recipes</span>
              <span>·</span>
              <span>July 8, 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              15 High-Protein Breakfast Recipes for Weight Loss (Under 400 Calories)
            </h1>
          </div>
        </div>
      </div>

      {/* Image credit */}
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-xs text-neutral-400 mt-3 mb-8">Photo by Brooke Lark on Unsplash</p>

        <article className="prose prose-lg prose-neutral max-w-none">
          {/* Lead paragraph */}
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Breakfast is the most important meal of the day — especially when you're trying to lose weight.
            A high-protein breakfast keeps you full, boosts your metabolism, and prevents mid-morning cravings.
          </p>

          <h2>Why High-Protein Breakfasts Work for Weight Loss</h2>
          <p>
            Studies show that eating <strong>25-30g of protein at breakfast</strong> can reduce cravings by up to 60%
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
            Whisk 3 eggs with ½ cup egg whites and ¼ cup cottage cheese for an incredibly fluffy, protein-dense scramble. Cook in a non-stick pan with a teaspoon of olive oil. Serve with a side of sautéed spinach.
          </p>
          <ul>
            <li><strong>Calories:</strong> 340</li>
            <li><strong>Protein:</strong> 38g</li>
            <li><strong>Prep time:</strong> 8 minutes</li>
          </ul>

          <h3>2. Greek Yogurt Protein Bowl (32g Protein, 290 cal)</h3>
          <p>
            Combine 1 cup of plain Greek yogurt (2%) with 1 scoop vanilla protein powder, ½ cup mixed berries, and 1 tablespoon of chia seeds. The yogurt provides casein protein while the protein powder adds fast-digesting whey — a perfect combo.
          </p>
          <ul>
            <li><strong>Calories:</strong> 290</li>
            <li><strong>Protein:</strong> 32g</li>
            <li><strong>Prep time:</strong> 5 minutes</li>
          </ul>

          <h3>3. Cottage Cheese & Egg White Omelette (35g Protein, 310 cal)</h3>
          <p>
            Whisk 4 egg whites with ½ cup cottage cheese until smooth. Pour into a heated non-stick pan. Add chopped bell peppers, onions, and spinach. Fold and cook until golden.
          </p>
          <ul>
            <li><strong>Calories:</strong> 310</li>
            <li><strong>Protein:</strong> 35g</li>
            <li><strong>Prep time:</strong> 10 minutes</li>
          </ul>

          <h3>4. Protein Oatmeal with Peanut Butter (36g Protein, 390 cal)</h3>
          <p>
            Cook ½ cup rolled oats with 1 cup milk of choice. Stir in 1 scoop vanilla or chocolate protein powder after cooking (don't cook the powder!). Top with 1 tablespoon peanut butter and sliced banana.
          </p>
          <ul>
            <li><strong>Calories:</strong> 390</li>
            <li><strong>Protein:</strong> 36g</li>
            <li><strong>Prep time:</strong> 10 minutes</li>
          </ul>

          <h3>5. Turkey & Avocado Breakfast Wrap (40g Protein, 380 cal)</h3>
          <p>
            Fill a whole wheat tortilla with 4 oz sliced turkey breast, ¼ avocado, 2 scrambled egg whites, and a handful of arugula. Roll tightly and toast in a pan for 2 minutes per side.
          </p>
          <ul>
            <li><strong>Calories:</strong> 380</li>
            <li><strong>Protein:</strong> 40g</li>
            <li><strong>Prep time:</strong> 12 minutes</li>
          </ul>

          <h3>6–15: Quick Reference Table</h3>
          <div className="overflow-x-auto not-prose">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-3 text-left font-medium rounded-tl-xl">Recipe</th>
                  <th className="px-4 py-3 text-center font-medium">Protein</th>
                  <th className="px-4 py-3 text-center font-medium">Calories</th>
                  <th className="px-4 py-3 text-center font-medium rounded-tr-xl">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6. Smoked Salmon & Cream Cheese on Rye", "28g", "350", "5 min"],
                  ["7. Tofu Scramble with Veggies", "25g", "280", "12 min"],
                  ["8. Protein Pancakes (2 servings)", "42g", "380", "15 min"],
                  ["9. Ham & Cheese Egg Muffins (3)", "33g", "320", "20 min"],
                  ["10. Chicken Sausage & Sweet Potato Hash", "30g", "370", "15 min"],
                  ["11. Protein Smoothie Bowl", "35g", "340", "5 min"],
                  ["12. Ricotta Toast with Berries", "26g", "310", "5 min"],
                  ["13. Ground Turkey Breakfast Bowl", "38g", "390", "12 min"],
                  ["14. Egg White & Veggie Frittata", "34g", "300", "20 min"],
                  ["15. Protein Chia Pudding (prepped overnight)", "28g", "290", "5 min + overnight"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
                    <td className="px-4 py-2.5">{row[0]}</td>
                    <td className="px-4 py-2.5 text-center font-medium text-green-700">{row[1]}</td>
                    <td className="px-4 py-2.5 text-center">{row[2]}</td>
                    <td className="px-4 py-2.5 text-center text-neutral-500">{row[3]}</td>
                  </tr>
                ))}
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
          <p>Aim for <strong>25-40g of protein</strong> at breakfast. Research shows this amount optimizes muscle protein synthesis and keeps you full until lunch.</p>

          <h3>Can I lose weight eating high-protein breakfasts?</h3>
          <p>Yes. Multiple studies show that high-protein breakfasts (30g+) lead to greater fat loss compared to low-protein or carb-heavy breakfasts, even at the same calorie intake.</p>

          <h3>What if I don't have time to cook?</h3>
          <p>Greek yogurt with protein powder, overnight oats, protein shakes, and pre-made egg muffins all take 5 minutes or less. Prep them the night before.</p>
        </article>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 md:p-10 my-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Find Your Exact Macros</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Use our free calculator to get your personalized protein, carb, and fat targets.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Calculate My Macros Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
