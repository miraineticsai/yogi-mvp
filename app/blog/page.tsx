import * as React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/blog-card";
import { sampleBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog & Thoughts on Mindful Living",
  description:
    "Reflections on Classical Hatha, Pranayama, nervous system science, and living with intentionality from our yoga shala in Goa.",
};

export default function BlogPage() {
  const featuredPost = sampleBlogPosts.find((p) => p.featured) || sampleBlogPosts[0];
  const standardPosts = sampleBlogPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="flex flex-col">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#07170E] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=2000&q=80"
            alt="Mindful yoga retreat and reading space"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            EDITORIAL REFLECTIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Thoughts on Yoga & Mindful Living
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Explorations into the subtle science of breath, somatic longevity,
            and cultivating stillness in a noisy world.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        FEATURED ARTICLE & LISTING
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured Article */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-sage-dark block">
              Featured Reading
            </span>
            <BlogCard post={featuredPost} variant="featured" />
          </div>

          {/* Regular Articles Grid */}
          <div className="space-y-8 pt-8 border-t border-sand">
            <div>
              <h2 className="font-serif text-3xl font-medium text-forest">
                Recent Perspectives
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70">
                Practical insights and traditional wisdom from our teaching faculty in Mandrem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
