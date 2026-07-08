import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog — Nutrition & Fitness Guides",
  description:
    "Learn how to calculate macros, meal prep for the week, create calorie deficits, and more. Free nutrition guides from MacroPlanner.",
};

const posts = [
  {
    slug: "how-to-calculate-macros",
    title: "How to Calculate Your Macros: Complete Beginner's Guide",
    excerpt:
      "Learn exactly how to calculate your daily protein, carbs, and fat targets for weight loss, muscle gain, or maintenance.",
    date: "2026-07-07",
    readTime: "8 min",
    category: "Guides",
  },
  {
    slug: "high-protein-meal-prep",
    title: "High Protein Meal Prep: 7 Days of Easy Meals",
    excerpt:
      "A complete high-protein meal prep guide with 7 days of recipes. Each meal has 40g+ of protein and takes under 30 minutes to prepare.",
    date: "2026-07-05",
    readTime: "12 min",
    category: "Meal Prep",
  },
  {
    slug: "calorie-deficit-guide",
    title: "Calorie Deficit Guide: Lose Weight Without Starving",
    excerpt:
      "Everything you need to know about creating a sustainable calorie deficit. How to eat enough to feel full while losing weight consistently.",
    date: "2026-07-03",
    readTime: "10 min",
    category: "Weight Loss",
  },
  {
    slug: "best-protein-sources",
    title: "The 15 Best Protein Sources for Muscle Building",
    excerpt:
      "From lean meats to plant-based options, discover the most protein-dense foods to help you hit your daily targets.",
    date: "2026-07-01",
    readTime: "7 min",
    category: "Nutrition",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">📝 Nutrition Blog</h1>
        <p className="text-lg text-neutral-600 mb-8">
          Science-backed guides on macros, meal prep, weight loss, and muscle building.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-neutral-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>· {post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold hover:text-green-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-neutral-600 text-sm">{post.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
