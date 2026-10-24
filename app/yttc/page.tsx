import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstructorCard } from "@/components/ui/instructor-card";
import { instructors } from "@/lib/data/instructors";
import { sampleFAQs } from "@/lib/data/faq";
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga Teacher Training Courses (YTTC) in Goa",
  description:
    "Immersive 200-Hour and 300-Hour residential yoga teacher training in Mandrem, Goa. Classical Hatha, Vinyasa, functional anatomy, philosophy and mindful teaching practicums.",
};

const yttcHighlights = [
  {
    title: "Classical Lineage & Functional Anatomy",
    description:
      "Study foundational asana mechanics with emphasis on joint safety, skeletal variation, and hands-on tactile assists.",
  },
  {
    title: "Pranayama & Subtle Energy (Prana)",
    description:
      "Daily experiential exploration of classical breath ratios, bandhas, mudras, and autonomic nervous system regulation.",
  },
  {
    title: "Philosophy, Ethics & Yogic Lifestyle",
    description:
      "Contextual study of Patanjali's Yoga Sutras, the Eight Limbs (Ashtanga), and living the Yamas and Niyamas in modern times.",
  },
  {
    title: "Teaching Practicums from Week Two",
    description:
      "Gain confidence through progressive peer-teaching labs, receiving immediate, constructive mentor feedback on your voice and presence.",
  },
  {
    title: "Ayurvedic Nutrition & Sattvic Living",
    description:
      "Nutritious chef-prepared vegetarian meals designed to support cellular endurance and digestive clarity during training.",
  },
  {
    title: "Quiet Beachside Shala Environment",
    description:
      "Nestled inside a peaceful Mandrem palm grove, allowing focused study without the noise and distractions of commercial resort strips.",
  },
];

const curriculumModules = [
  {
    module: "Module 1",
    title: "Asana Alignment & Biomechanics",
    hours: "100 Hours",
    topics: [
      "Standing poses, forward folds, twists, hip openers, backbends, and arm balances",
      "Skeletal variations: understanding why every body moves differently",
      "Safe progressive modifications using blocks, straps, and wall assists",
      "Injury prevention and recovery principles for common yoga student concerns",
    ],
  },
  {
    module: "Module 2",
    title: "Yogic Philosophy, Lifestyle & Ethics",
    hours: "30 Hours",
    topics: [
      "Patanjali's Yoga Sutras: in-depth contemplation of Chitta Vritti Nirodha",
      "Historical evolution: Vedic roots, Upanishads, and the Bhagavad Gita",
      "Ethics of a modern teacher: student-teacher dynamics, consent, and boundaries",
      "Introduction to Ayurveda, Doshas, and seasonal dinacharya routines",
    ],
  },
  {
    module: "Module 3",
    title: "Pranayama, Meditation & Subtle Anatomy",
    hours: "30 Hours",
    topics: [
      "Prana, Nadis (Ida, Pingala, Sushumna), and the seven Chakra archetypes",
      "Breath techniques: Nadi Shodhana, Kapalabhati, Ujjayi, Bhramari, and Sitali",
      "Yoga Nidra architecture and systematic bodily relaxation",
      "Mindfulness techniques and silent meditation facilitation",
    ],
  },
  {
    module: "Module 4",
    title: "Teaching Methodology & Practicum",
    hours: "40 Hours",
    topics: [
      "Intelligent sequencing: peak pose arc, pacing, and energetic rhythm",
      "Vocal projection, inclusive language, and clear cueing economics",
      "Tactile versus verbal adjustments: ensuring safe and consensual guidance",
      "The business of yoga: studio teaching, workshops, retreats, and ethics",
    ],
  },
];

export default function YttcPage() {
  const yttcInstructors = instructors.slice(0, 3);
  const yttcFAQs = sampleFAQs.filter((f) => f.category === "yttc");

  return (
    <div className="flex flex-col">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden bg-[#07170E] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2000&q=80"
            alt="Yoga teacher training students practicing in open bamboo shala"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F7E7CD]">
              MANDREM • GOA • RESIDENTIAL
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight drop-shadow-sm">
            200-Hour & 300-Hour <br />
            <span className="italic font-normal text-[#E0B46E]">
              Yoga Teacher Training
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/95 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Step into the art of teaching with grounded wisdom, functional anatomy,
            and an authentic reverence for classical yogic tradition in Goa.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#curriculum"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md bg-[#D4A359] text-[#0C1E15] hover:bg-[#E0B46E] transition-all shadow-md"
            >
              View Curriculum
            </Link>
            <Link
              href="/contact?type=yttc"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md border-2 border-white/80 text-white hover:bg-white/15 transition-all backdrop-blur-xs"
            >
              Enquire for Upcoming Cohorts
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        DEMO DISCLAIMER BANNER
        ========================================================================
      */}
      <div className="bg-[#EAE4D7] border-y border-[#D6CBB8] py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs text-[#1E3B29] font-medium text-center">
          <ShieldAlert className="w-4 h-4 text-forest shrink-0" />
          <span>
            <strong className="font-bold">Illustrative Curriculum Demo:</strong> Yogi Goals presents this
            structured syllabus for website demonstration purposes. Actual accreditation
            details will be supplied upon program verification.
          </span>
        </div>
      </div>

      {/* 
        ========================================================================
        INTRODUCTION TO TEACHER TRAINING
        ========================================================================
      */}
      <section className="py-20 bg-[#FAF8F5] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-forest-light block">
                IMMERSIVE SADHANA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-forest leading-tight">
                Deepen Your Practice. Learn to Guide Others with Humility.
              </h2>
              <p className="text-sm sm:text-base text-[#263329] font-medium leading-relaxed">
                Teacher training is far more than memorizing sequences or earning a
                title—it is a personal transformation. Over 24 days in Mandrem, you
                will awaken early with the morning birds, immerse yourself in daily
                two-hour morning asana sadhana, and cultivate the voice and composure
                needed to hold compassionate space for others.
              </p>
              <p className="text-sm text-[#333E35] leading-relaxed">
                We maintain an intimate teacher-to-student ratio, ensuring you
                receive continuous 1-on-1 feedback on your alignment, vocal cueing,
                and hands-on assists. Whether your intention is to teach
                professionally or simply immerse in classical wisdom, this journey
                will anchor your understanding of self.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-md bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6]">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Students practicing hands-on alignment in Goa yoga teacher training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        PROGRAM HIGHLIGHTS
        ========================================================================
      */}
      <section className="py-20 bg-[#F2ECE0] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="COURSE PILLARS"
            title="Training Program Highlights"
            description="Our structured program balances physical discipline with introspective stillness and practical teaching skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yttcHighlights.map((hl) => (
              <div
                key={hl.title}
                className="bg-white rounded-xl border border-border/80 p-6 space-y-2.5 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-forest/10 text-forest flex items-center justify-center font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                </div>
                <h3 className="font-serif text-lg font-medium text-forest">
                  {hl.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SAMPLE CURRICULUM SECTIONS
        ========================================================================
      */}
      <section id="curriculum" className="py-20 bg-[#FAF8F5] border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="200-HOUR BREAKDOWN"
            title="Curriculum Modules"
            description="Four comprehensive pillars built according to international foundational yoga education standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumModules.map((cm) => (
              <div
                key={cm.module}
                className="bg-white rounded-xl border border-border/80 p-6 sm:p-8 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-forest-light block">
                      {cm.module}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-forest">
                      {cm.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-forest/10 text-forest text-xs font-bold rounded-full">
                    {cm.hours}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#333E35]">
                  {cm.topics.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        INSTRUCTOR PREVIEW
        ========================================================================
      */}
      <section className="py-20 bg-[#F2ECE0] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="TRAINING MENTORS"
            title="Learn from Dedicated Practitioners"
            description="Our resident demo faculty guides each module with personal attention, structural safety, and depth."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yttcInstructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FAQ SECTION
        ========================================================================
      */}
      <section className="py-20 bg-[#FAF8F5] border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            description="Important details about prerequisites, daily schedules, and life in Mandrem during your training."
          />

          <div className="space-y-4">
            {yttcFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-border/80 p-6 space-y-2 shadow-xs"
              >
                <h3 className="font-serif text-lg font-medium text-forest">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FINAL CONTACT CTA
        ========================================================================
      */}
      <section className="py-20 bg-[#07170E] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            READY TO EMBARK ON THIS JOURNEY?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white drop-shadow-sm">
            Apply for Our Next YTTC Cohort
          </h2>
          <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-xl mx-auto">
            Cohorts are strictly limited to 18 practitioners to guarantee personal
            guidance. Connect with our admissions team to verify current batch dates
            and accommodation availability in Mandrem.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=yttc"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-bold rounded-md bg-[#D4A359] text-[#0C1E15] hover:bg-[#E0B46E] transition-all shadow-md"
            >
              <span>Submit Training Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
