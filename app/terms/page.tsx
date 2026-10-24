import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions of participation for Yogi Goals in Goa, India.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-light"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <header className="space-y-2 border-b border-sand pb-4">
          <span className="text-xs uppercase tracking-widest text-sage-dark font-semibold">
            TERMS & CONDITIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-forest">
            Terms of Service
          </h1>
          <p className="text-xs text-charcoal/60">
            Last Updated: October 2026 (Demo Terms)
          </p>
        </header>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-sans">
          <p>
            Welcome to Yogi Goals. By using this website, you acknowledge that all class
            timings, instructor profiles, and tuition schedules presented here are
            illustrative demo materials designed for evaluation.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            1. Physical Activity Disclaimer
          </h2>
          <p>
            Yoga involves physical exertion and movement. Practitioners are advised to
            consult with a physician prior to participating in intensive physical sadhana,
            particularly if pregnant or managing acute musculoskeletal injuries. Always
            practice within your comfortable range of motion.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            2. Shala Conduct & Sanctuary Respect
          </h2>
          <p>
            Our Mandrem shala is a dedicated sanctuary for quiet practice and mindfulness.
            Visitors are kindly requested to maintain quiet demeanor, observe shala
            footwear policies, and honor mutual safety and boundaries during classes.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            3. Intellectual Property
          </h2>
          <p>
            The branding, curated editorial writings, and visual layout of Yogi Goals
            remain the property of Yogi Goals. Unsplash photography is utilized under the
            permissive Unsplash license for illustrative design purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
