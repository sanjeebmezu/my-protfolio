"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/ui/blog-card";
import type { BlogPost } from "@/types/content";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  const filtered = useMemo(() => {
    const value = query.toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        post.title.toLowerCase().includes(value) ||
        post.excerpt.toLowerCase().includes(value) ||
        post.category.toLowerCase().includes(value);
      return matchesCategory && matchesQuery;
    });
  }, [category, posts, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 md:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="min-h-11 w-full rounded-md border border-white/10 bg-[#111113] pl-10 pr-3 text-sm text-white outline-none focus:border-cyan-300"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`min-h-11 rounded-full px-4 text-sm font-medium transition ${
                category === item
                  ? "bg-cyan-300 text-zinc-950"
                  : "border border-white/10 text-zinc-300 hover:bg-white/[0.06]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed border-white/15 p-8 text-zinc-400">
          No articles match your search.
        </div>
      )}
      <p className="mt-8 text-sm text-zinc-500">Pagination-ready: add more posts to enable page ranges.</p>
    </div>
  );
}
