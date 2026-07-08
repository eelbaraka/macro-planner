import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Macro<span className="text-green-600">Planner</span></h3>
            <p className="text-sm text-neutral-500">
              Free macro calculator and meal planner to help you reach your fitness goals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Tools</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/" className="hover:text-green-600 transition-colors">Macro Calculator</Link></li>
              <li><Link href="/meal-planner" className="hover:text-green-600 transition-colors">Meal Planner</Link></li>
              <li><Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/blog/how-to-calculate-macros" className="hover:text-green-600 transition-colors">How to Calculate Macros</Link></li>
              <li><Link href="/blog/high-protein-meal-prep" className="hover:text-green-600 transition-colors">High Protein Meal Prep</Link></li>
              <li><Link href="/blog/calorie-deficit-guide" className="hover:text-green-600 transition-colors">Calorie Deficit Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Affiliate Disclosure</h4>
            <p className="text-xs text-neutral-400">
              Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} MacroPlanner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
