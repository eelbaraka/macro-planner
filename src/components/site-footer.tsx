import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-neutral-900 text-neutral-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-white">Macro<span className="text-green-400">Planner</span></h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Free macro calculator and meal planner to help you reach your fitness goals.
              Used by thousands to lose weight, build muscle, and eat better.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Tools</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">Macro Calculator</Link></li>
              <li><Link href="/meal-planner" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">Meal Planner</Link></li>
              <li><Link href="/blog" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Latest Articles</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog/high-protein-breakfast-recipes" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">High Protein Breakfast</Link></li>
              <li><Link href="/blog/calorie-deficit-meal-prep" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">Calorie Deficit Meal Prep</Link></li>
              <li><Link href="/blog/how-to-count-macros-beginners" className="text-neutral-400 hover:text-green-400 transition-colors duration-200">How to Count Macros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Disclosure</h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
              As an Amazon Associate we earn from qualifying purchases.
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-10 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} MacroPlanner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
