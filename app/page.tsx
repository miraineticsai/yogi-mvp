import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProgramCard } from "@/components/ui/program-card";
import { InstructorCard } from "@/components/ui/instructor-card";
import { BlogCard } from "@/components/ui/blog-card";
import { programOfferings } from "@/lib/data/programs";
import { instructors } from "@/lib/data/instructors";
import { sampleSchedule } from "@/lib/data/schedule";
import { sampleBlogPosts } from "@/lib/data/blog";
import { sampleTestimonials } from "@/lib/data/testimonials";
import { galleryItems } from "@/lib/data/gallery";
import {
  ArrowRight,
  Clock,
  Feather,
  Sun,
  Trees,
} from "lucide-react";

export default function HomePage() {
  // Take top 3 instructors for the homepage preview
  const featuredInstructors = instructors.slice(0, 3);
  // Take first 5 classes for schedule preview
  const previewSchedule = sampleSchedule.slice(0, 5);
  // Take 6 gallery items for preview
  const previewGallery = galleryItems.slice(0, 6);
  // Top 3 blog posts
  const previewPosts = sampleBlogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 
        ========================================================================
        1. HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#07170E] text-white">
        {/* Full-width photograph of yoga practice with deep, contrast-preserving scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2000&q=85"
            alt="Mindful yoga practice overlooking nature in Goa at sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          {/* Deep multi-stop gradient overlay to ensure text is crystal clear and never washed out */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/85 to-[#07170E]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07170E] via-transparent to-[#07170E]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E0B46E]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F7E7CD] font-sans">
                YOUR YOGA JOURNEY STARTS HERE
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] drop-shadow-sm">
              Find Your Balance. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E0B46E]">
                Discover Your Practice.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/95 font-sans leading-relaxed max-w-xl drop-shadow-xs">
              Explore mindful yoga classes, transformative teacher training, and
              meaningful retreats in a peaceful natural setting in Goa.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md bg-[#D4A359] text-[#0C1E15] hover:bg-[#E0B46E] transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A359]"
              >
                Explore Our Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-white/80 text-white hover:bg-white/15 transition-all backdrop-blur-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Us
              </Link>
            </div>

            {/* Restrained Trust Section (3 items) */}
            <div className="pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 text-white/95 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 text-[#E0B46E]">
                  <Feather className="w-4 h-4" />
                </div>
                <span className="font-semibold">Mindful Yoga Practice</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/95 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 text-[#E0B46E]">
                  <Sun className="w-4 h-4" />
                </div>
                <span className="font-semibold">Experienced Instructors</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/95 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 text-[#E0B46E]">
                  <Trees className="w-4 h-4" />
                </div>
                <span className="font-semibold">A Welcoming Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        2. ABOUT SECTION (Section ID: about)
        ========================================================================
      */}
      <section
        id="about"
        className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-border relative scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column: Asymmetric editorial composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-xl overflow-hidden border border-border/80 shadow-md bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6]">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                  alt="Yoga practitioner in calm contemplation among coastal palms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Overlapping small accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 bg-white p-5 rounded-xl border border-border shadow-lg max-w-xs space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-forest-light block">
                  Mandrem, North Goa
                </span>
                <p className="font-serif text-base text-forest italic">
                  &ldquo;A quiet space where movement and stillness naturally meet.&rdquo;
                </p>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-forest-light block">
                OUR PHILOSOPHY & SPACE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-forest leading-[1.15]">
                A Space to Slow Down and Reconnect
              </h2>

              <p className="text-base text-[#263329] font-medium leading-relaxed font-sans">
                Discover a thoughtful approach to yoga that brings together
                movement, breath, mindfulness and personal growth.
              </p>

              <div className="space-y-4 text-sm text-[#333E35] leading-relaxed">
                <p>
                  At Yogi Goals, we believe true yoga is an intimate return to
                  yourself. Rooted along the quiet coastal stretches of Mandrem in
                  North Goa, our open-air bamboo shala invites you to step away
                  from the rush of modern life and tune into the rhythmic cadence of
                  ocean breezes and natural daylight.
                </p>
                <p>
                  Whether you are stepping onto the mat for the very first time,
                  seeking deeper physical alignment, or stepping toward teacher
                  certification, you will find a warm, non-competitive community
                  ready to welcome and support your unique journey.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-md bg-forest text-white hover:bg-forest-light transition-all shadow-sm"
                >
                  <span>Discover Our Approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        3. PROGRAMS SECTION (Section ID: programs)
        ========================================================================
      */}
      <section
        id="programs"
        className="py-20 sm:py-28 bg-[#F2ECE0] border-b border-border scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            eyebrow="OFFERINGS IN GOA"
            title="Explore Your Yoga Journey"
            description="Six balanced pathways designed for diverse aspirations, from multi-week teacher certifications to peaceful drop-in sunset flows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programOfferings.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-light border-b-2 border-forest pb-0.5"
            >
              <span>View All Detailed Courses & Cohort Dates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        4. INSTRUCTORS SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="GUIDING VOICES"
              title="Meet Your Instructors"
              description="Learn with dedicated resident guides who share their understanding of functional movement, classical philosophy, and breathwork with warmth and clarity."
            />
            <Link
              href="/instructors"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all shrink-0 self-start md:self-end"
            >
              <span>Meet the Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInstructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        5. SCHEDULE PREVIEW SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#F2ECE0] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="PRACTICE TIMINGS"
            title="Find Your Time to Practice"
            description="Our open-air Mandrem shala welcomes drop-ins and pass holders for morning revitalizations and peaceful evening unwind practices."
          />

          {/* Clean sample schedule card list */}
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 bg-[#E5DDCF] border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-forest">
                Sample Weekly Rhythm Preview
              </span>
              <span className="text-[11px] text-[#4F5B51] font-medium italic">
                * Illustrative sample schedule for demonstration purposes.
              </span>
            </div>

            <div className="divide-y divide-border/60">
              {previewSchedule.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-[#FAF8F5] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-sand/60 text-forest text-[11px] font-bold">
                        {item.day}
                      </span>
                      <span className="text-xs text-[#4F5B51] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-forest-light" />
                        {item.time}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-medium text-forest">
                      {item.className}
                    </h3>
                    <p className="text-xs text-[#333E35]">{item.description}</p>
                  </div>

                  <div className="sm:text-right shrink-0 space-y-1">
                    <span className="text-xs font-bold text-[#18201A] block">
                      {item.instructor}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-forest/10 text-forest text-[11px] font-bold">
                      {item.format}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#EAE4D7] border-t border-border text-center">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-bold rounded-md bg-forest text-white hover:bg-forest-light transition-all shadow-xs"
              >
                <span>View Full Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        6. WHY CHOOSE US SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            eyebrow="OUR FOUNDATIONS"
            title="Practice with Intention"
            description="We prioritize sustainable movement, mindful somatic exploration, and genuine human care over superficial athletic trends."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <div className="bg-white rounded-xl border border-border/80 p-8 space-y-4 shadow-xs">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
                  alt="Mindful movement pose with breath synchronization"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest">
                Mindful Movement
              </h3>
              <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                Postures are practiced with steady breath awareness and functional
                joint safety, allowing your physical practice to become an active,
                calming meditation rather than repetitive strain.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-white rounded-xl border border-border/80 p-8 space-y-4 shadow-xs">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                  alt="Teacher providing personalized alignment assistance"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest">
                Personal Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                With intimate class sizes capped at 18 practitioners, instructors
                offer personalized verbal cues, structural modifications, and prop
                adjustments honoring each student&apos;s unique skeletal anatomy.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-white rounded-xl border border-border/80 p-8 space-y-4 shadow-xs">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="Coastal Goa palm trees and natural beach sanctuary"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-forest">
                A Connection with Nature
              </h3>
              <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                Practicing surrounded by open air, rustling coconut palms, and salt
                air grounds the nervous system in ways air-conditioned indoor studios
                cannot match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. GALLERY PREVIEW SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#F2ECE0] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="ATMOSPHERE & SHALA"
            title="Moments of Practice"
            description="Glimpses into our daily practice in Mandrem, from sunrise salutations to quiet twilight reflections by the sea."
          />

          {/* Varied proportion grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {previewGallery.map((item, index) => (
              <div
                key={item.id}
                className={`relative rounded-xl overflow-hidden border border-border bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] group shadow-xs ${
                  index === 0 ? "col-span-2 md:col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-xs text-white font-bold drop-shadow-sm">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all"
            >
              <span>Explore the Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        8. TESTIMONIALS SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="STUDENT EXPERIENCES"
            title="Stories from the Journey"
            description="Reflections shared by practitioners who have visited our Mandrem shala. (Clearly marked demo placeholders)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl border border-border/80 p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-wider rounded bg-sand/60 text-forest font-bold">
                    Illustrative Review
                  </span>
                  <p className="font-serif text-base sm:text-lg text-[#18201A] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <h4 className="font-sans text-xs font-bold text-forest">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#4F5B51] font-medium">
                    {t.location} • {t.program}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        9. BLOG PREVIEW SECTION
        ========================================================================
      */}
      <section className="py-20 sm:py-28 bg-[#F2ECE0] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="EDITORIAL INSIGHTS"
              title="Thoughts on Yoga and Mindful Living"
              description="Practical perspectives on sadhana, nervous system health, and breath from our resident teachers."
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all shrink-0 self-start md:self-end"
            >
              <span>All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        10. FINAL CTA SECTION
        ========================================================================
      */}
      <section className="relative py-24 sm:py-32 bg-[#07170E] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=2000&q=80"
            alt="Warm sunset glow over coastal palms and calm retreat sanctuary"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            JOIN US IN MANDREM, GOA
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight drop-shadow-sm">
            Your Journey Begins with One Step
          </h2>

          <p className="text-sm sm:text-base text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-xs">
            Explore our programs and find a practice that fits your journey.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md bg-[#D4A359] text-[#0C1E15] hover:bg-[#E0B46E] transition-all shadow-md"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-white/80 text-white hover:bg-white/15 transition-all backdrop-blur-xs"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
