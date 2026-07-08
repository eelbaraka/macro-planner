import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nutrition Blog — Macro & Meal Prep Guides",
  description:
    "Science-backed guides on macros, calorie deficits, meal prep, high-protein diets, and weight loss. Free nutrition advice from MacroPlanner.",
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
    excerpt:
      "Start your day right with these 15 delicious high-protein breakfast recipes. Each meal has 25g+ protein, under 400 calories, and takes less than 15 minutes to prepare.",
    date: "2026-07-08",
    readTime: "10 min",
    category: "Recipes",
    image: "/images/blog/high-protein-breakfast.jpg",
    imageCredit: "Photo by Brooke Lark on Unsplash",
    keywords: ["high protein breakfast", "weight loss breakfast", "protein recipes"],
  },
  {
    slug: "calorie-deficit-meal-prep",
    title: "7-Day Calorie Deficit Meal Prep: Lose Weight Without Starving",
    excerpt:
      "A complete 7-day meal prep plan designed for a calorie deficit. 1,500-1,800 calories per day with 120g+ protein. Includes grocery list and prep instructions.",
    date: "2026-07-08",
    readTime: "12 min",
    category: "Meal Prep",
    image: "/images/blog/meal-prep-bowls.jpg",
    imageCredit: "Photo by Anna Pelzer on Unsplash",
    keywords: ["calorie deficit meal prep", "weight loss meal plan", "meal prep for weight loss"],
  },
  {
    slug: "how-to-count-macros-beginners",
    title: "How to Count Macros for Weight Loss: The Complete Beginner's Guide",
    excerpt:
      "Everything you need to know about counting macros for weight loss. Learn your protein, carb, and fat targets, plus the best apps and tools to track them.",
    date: "2026-07-08",
    readTime: "11 min",
    category: "Guides",
    image: "/images/blog/veggies.jpg",
    imageCredit: "Photo by Louis Hansel on Unsplash",
    keywords: ["how to count macros", "macro counting for beginners", "weight loss macros"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            📝 <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Nutrition</span> Blog
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Science-backed guides on macros, meal prep, weight loss, and muscle building.
            Updated daily with expert-reviewed content.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link href={`/blog/${posts[0].slug}`} className="group">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {posts[0].category}
                    </span>
                    <span>·</span>
                    <span>{posts[0].date}</span>
                    <span>·</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-neutral-600 mb-4">{posts[0].excerpt}</p>
                  <span className="text-green-600 font-medium text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest of Posts - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-600 line-clamp-2 mb-3 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-green-600 font-medium text-xs group-hover:underline mt-auto">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Schema structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "MacroPlanner Nutrition Blog",
              description: "Science-backed nutrition and fitness guides.",
              url: "https://macro-planner-murex.vercel.app/blog",
            }),
          }}
        />
      </div>
    </div>
  );
}
