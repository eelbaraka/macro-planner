import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nutrition Blog — Macro & Meal Prep Guides",
  description:
    "Science-backed guides on macros, calorie deficits, meal prep, high-protein diets, and weight loss.",
  openGraph: {
    title: "Nutrition Blog — Macro & Meal Prep Guides",
    description: "Science-backed guides on macros, meal prep, and weight loss.",
    type: "website",
  },
};

const posts = [
  {
    slug: "high-protein-breakfast-recipes",
    title: "15 High-Protein Breakfast Recipes for Weight Loss (Under 400 Calories)",
    excerpt: "Start your day right with these 15 delicious high-protein breakfast recipes. Each meal has 25g+ protein, under 400 calories, and takes less than 15 minutes.",
    date: "Jul 8, 2026",
    readTime: "10 min read",
    category: "Recipes",
    image: "/images/blog/high-protein-breakfast.jpg",
    imageCredit: "Brooke Lark",
  },
  {
    slug: "calorie-deficit-meal-prep",
    title: "7-Day Calorie Deficit Meal Prep: Lose Weight Without Starving",
    excerpt: "A complete 7-day meal prep plan designed for a calorie deficit. 1,500-1,800 calories per day with 120g+ protein. Includes grocery list and prep instructions.",
    date: "Jul 8, 2026",
    readTime: "12 min read",
    category: "Meal Prep",
    image: "/images/blog/meal-prep-bowls.jpg",
    imageCredit: "Anna Pelzer",
  },
  {
    slug: "how-to-count-macros-beginners",
    title: "How to Count Macros for Weight Loss: The Complete Beginner's Guide",
    excerpt: "Everything you need to know about counting macros for weight loss. Learn your protein, carb, and fat targets, plus the best apps and tools to track them.",
    date: "Jul 8, 2026",
    readTime: "11 min read",
    category: "Guides",
    image: "/images/blog/veggies.jpg",
    imageCredit: "Louis Hansel",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-green-100 text-sm font-medium mb-2">📝 Our Blog</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Nutrition & Fitness Guides
            </h1>
            <p className="text-green-100 text-lg max-w-xl">
              Science-backed guides on macros, meal prep, weight loss, and muscle building.
              Updated daily.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <div className="max-w-5xl mx-auto">
          <Link href={`/blog/${posts[0].slug}`} className="group block">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-[45%] relative h-56 md:h-auto">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-lg font-medium text-xs">
                      {posts[0].category}
                    </span>
                    <span>·</span>
                    <span>{posts[0].date}</span>
                    <span>·</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 group-hover:text-green-600 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
                  <span className="text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Remaining Posts */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 px-2.5 py-0.5 rounded-lg text-xs font-medium shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-base text-neutral-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-500 line-clamp-2 mb-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-green-600 font-medium text-xs flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                      Read Article <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
