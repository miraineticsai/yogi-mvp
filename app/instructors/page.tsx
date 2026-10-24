import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InstructorCard } from "@/components/ui/instructor-card";
import { instructors } from "@/lib/data/instructors";
import { ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Instructors & Guides in Goa",
  description:
    "Meet our resident yoga teachers in Mandrem, Goa. Specialists in Classical Hatha, Vinyasa Flow, functional anatomy, and restorative sound meditation.",
};

export default function InstructorsPage() {
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
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
            alt="Yoga instructor leading a group in an open air shala"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            FACULTY & TEACHING SANGHA
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Meet Your Instructors
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Our guides share a devotion to safe biomechanics, classical lineage,
            and gentle encouragement, creating an inclusive sanctuary where every
            practitioner can flourish.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        DEMO NOTICE
        ========================================================================
      */}
      <div className="bg-[#EAE4D7] border-y border-[#D6CBB8] py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs text-[#1E3B29] font-medium text-center">
          <ShieldAlert className="w-4 h-4 text-forest shrink-0" />
          <span>
            <strong className="font-bold">Demo Profiles Notice:</strong> These instructor profiles represent
            illustrative demo personas for website design demonstration. Real teacher
            biographies will be updated upon final onboarding.
          </span>
        </div>
      </div>

      {/* 
        ========================================================================
        INSTRUCTORS GRID
        ========================================================================
      */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {instructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                showBioDetailed={true}
              />
            ))}
          </div>

          {/* Philosophy callout */}
          <div className="mt-16 bg-white rounded-xl border border-border/80 p-8 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-4 text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-forest-light block">
              OUR TEACHING ETHOS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
              Guidance Rooted in Compassion and Science
            </h2>
            <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed max-w-2xl mx-auto">
              We reject high-pressure dogmatism. Our teachers meet you where your
              body is today, honoring joint health, nervous system capacity, and the
              quiet joy of breath.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold rounded-md bg-forest text-white hover:bg-forest-light transition-colors shadow-xs"
              >
                <span>Connect with an Instructor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
