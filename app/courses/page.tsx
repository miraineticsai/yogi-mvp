"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { detailedCourses } from "@/lib/data/programs";
import { Clock, CheckCircle, ArrowRight, Filter } from "lucide-react";

const CATEGORIES = ["All", "Foundational", "Dynamic", "Restorative", "Meditation", "Specialty"] as const;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredCourses = React.useMemo(() => {
    if (selectedCategory === "All") return detailedCourses;
    return detailedCourses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

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
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
            alt="Yoga practitioner in tranquil natural surroundings"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            STRUCTURED LEARNING PATHWAYS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Yoga Courses & Cohorts
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            From foundational alignment in Classical Hatha to restorative sound
            immersions, explore multi-week programs designed to nurture your
            practice with intention.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        COURSE LISTING & FILTERS
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-xs font-bold text-[#18201A] uppercase tracking-wider">
              <Filter className="w-4 h-4 text-forest" />
              <span>Filter by Focus:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-forest text-white shadow-xs"
                      : "bg-white border border-border text-[#263329] hover:bg-[#F2ECE0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                id={course.id}
                className="bg-white rounded-xl border border-border/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6]">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded bg-forest text-white shadow-xs">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-black/75 text-white backdrop-blur-xs shadow-xs">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-2xl font-medium text-forest leading-snug">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#4F5B51] font-medium pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-forest" />
                          {course.duration}
                        </span>
                        <span>•</span>
                        <span>{course.schedule}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border/60">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-forest-light block">
                        Key Elements:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#333E35]">
                        {course.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#4F5B51] block">
                      Estimated Tuition
                    </span>
                    <span className="text-sm font-bold text-forest">
                      {course.priceEstimate}
                    </span>
                  </div>

                  <Link
                    href={`/contact?type=${course.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-forest text-white hover:bg-forest-light transition-colors shadow-xs"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Retreats & Workshops note */}
          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#F2ECE0] border border-border text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-serif text-xl font-medium text-forest">
              Seeking a Customized Cohort or Private Shala Booking?
            </h3>
            <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
              We regularly host visiting groups, specialized teacher mentorships,
              and private corporate wellness retreats in Mandrem.
            </p>
            <div className="pt-1">
              <Link
                href="/contact?type=private"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-forest underline hover:text-forest-light"
              >
                <span>Speak with Our Programs Coordinator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
