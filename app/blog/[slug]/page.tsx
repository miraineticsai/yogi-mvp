import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sampleBlogPosts } from "@/lib/data/blog";
import { ArrowLeft, Clock } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return sampleBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = sampleBlogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = sampleBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = sampleBlogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-forest text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              {post.category}
            </span>
            <span className="text-xs text-[#4F5B51] font-medium">{post.date}</span>
            <span className="text-xs text-[#4F5B51] font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-forest" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-forest leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#333E35] font-sans leading-relaxed italic border-l-3 border-[#C69246] pl-4">
            {post.excerpt}
          </p>

          {/* Author bar */}
          <div className="pt-4 flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-sand/60 border border-sand">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="block text-sm font-bold text-[#18201A]">
                {post.author.name}
              </span>
              <span className="block text-xs text-[#4F5B51] font-medium">
                {post.author.role} • Yogi Goals Shala
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-[#263329] leading-relaxed font-sans pt-4">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Demo Disclaimer on Blog */}
        <div className="p-4 bg-[#EAE4D7] rounded-xl border border-[#D6CBB8] text-xs text-[#1E3B29] font-medium">
          * This article is a sample editorial piece curated for demonstration on Yogi
          Goals website.
        </div>

        {/* Related Posts */}
        <div className="pt-12 border-t border-sand space-y-6">
          <h2 className="font-serif text-2xl font-medium text-forest">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group p-5 bg-white rounded-lg border border-sand hover:shadow-md transition-all space-y-2 block"
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-sage-dark block">
                  {related.category}
                </span>
                <h3 className="font-serif text-lg font-medium text-forest group-hover:text-forest-light transition-colors">
                  {related.title}
                </h3>
                <p className="text-xs text-charcoal/70 line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
