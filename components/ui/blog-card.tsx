import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/data/blog";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  variant?: "standard" | "featured";
}

export function BlogCard({ post, variant = "standard" }: BlogCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group bg-white rounded-xl border border-border/80 hover:border-forest/30 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex ${
        isFeatured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] ${
          isFeatured ? "lg:w-1/2 aspect-[16/10] lg:aspect-auto" : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded bg-forest text-white shadow-xs">
            {post.category}
          </span>
        </div>
      </div>

      <div
        className={`p-6 flex-1 flex flex-col justify-between space-y-4 ${
          isFeatured ? "lg:p-8" : ""
        }`}
      >
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-xs text-[#4F5B51] font-medium">
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3
            className={`font-serif font-medium text-forest group-hover:text-forest-light transition-colors leading-tight ${
              isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-border/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-sand/60 border border-sand">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <span className="block text-xs font-semibold text-[#18201A]">
                {post.author.name}
              </span>
              <span className="block text-[10px] text-[#4F5B51] font-medium">
                {post.author.role}
              </span>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest group-hover:text-forest-light transition-colors"
          >
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
