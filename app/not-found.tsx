import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-sand/40 text-forest mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 text-forest" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-sage-dark">
            PATH NOT FOUND
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-forest">
            Peace in the Unknown
          </h1>
          <p className="text-sm text-charcoal/75 leading-relaxed">
            The page you are seeking has drifted away like morning mist over
            Mandrem beach. Let us gently guide you back to your practice.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-md bg-forest text-ivory hover:bg-forest-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-md border border-forest text-forest hover:bg-sand/30 transition-colors"
          >
            <span>Explore Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
