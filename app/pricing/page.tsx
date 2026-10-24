import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { samplePricingTiers } from "@/lib/data/pricing";
import { Check, ShieldAlert, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Packages in Goa",
  description:
    "Transparent illustrative demo pricing for yoga drop-ins, monthly passes, private sessions, teacher training, and retreats in Mandrem, Goa.",
};

const CATEGORY_TABS = [
  { id: "group", label: "Group Classes & Passes" },
  { id: "private", label: "Private 1-on-1 Guidance" },
  { id: "workshops", label: "Weekend Workshops" },
  { id: "retreats", label: "Retreats in Mandrem" },
  { id: "yttc", label: "Teacher Training (YTTC)" },
] as const;

export default function PricingPage() {
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
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Goa beach and retreat coastline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            INVESTMENT IN YOUR SADHANA
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Classes & Offerings Pricing
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Transparent illustrative pricing for drop-ins, seasonal passes,
            personalized instruction, and residential retreats in Mandrem, Goa.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        DEMO PRICING DISCLAIMER
        ========================================================================
      */}
      <div className="bg-[#EAE4D7] border-y border-[#D6CBB8] py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs text-[#1E3B29] font-medium text-center">
          <ShieldAlert className="w-4 h-4 text-forest shrink-0" />
          <span>
            <strong className="font-bold">Illustrative Demo Pricing:</strong> All fees are displayed in
            Indian Rupees (INR) for interface demonstration purposes. Please contact
            our front desk to confirm seasonal rates and batch dates.
          </span>
        </div>
      </div>

      {/* 
        ========================================================================
        PRICING CARDS BY CATEGORY
        ========================================================================
      */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {CATEGORY_TABS.map((cat) => {
            const tiers = samplePricingTiers.filter((t) => t.category === cat.id);
            if (tiers.length === 0) return null;

            return (
              <div key={cat.id} id={cat.id} className="space-y-8 scroll-mt-24">
                <div className="border-b border-border pb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
                    {cat.label}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`bg-white rounded-xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg ${
                        tier.isPopular
                          ? "border-forest ring-2 ring-forest/20 relative"
                          : "border-border/80"
                      }`}
                    >
                      {tier.isPopular && (
                        <div className="absolute -top-3 right-6">
                          <span className="px-3 py-1 rounded-full bg-[#D4A359] text-[#0C1E15] text-[10px] uppercase font-bold tracking-widest shadow-xs">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="font-serif text-xl font-medium text-forest">
                            {tier.name}
                          </h3>
                          <p className="text-xs text-[#4F5B51] font-medium">
                            {tier.description}
                          </p>
                        </div>

                        <div className="py-3 border-y border-border/60">
                          <span className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                            {tier.priceINR}
                          </span>
                          <span className="text-xs text-[#4F5B51] font-medium ml-2">
                            / {tier.period}
                          </span>
                        </div>

                        <div className="space-y-2.5 pt-2">
                          <span className="text-[11px] uppercase tracking-wider font-bold text-forest-light block">
                            Included in this tier:
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-[#333E35]">
                            {tier.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-border/60">
                        <Link
                          href={tier.ctaHref}
                          className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                            tier.isPopular
                              ? "bg-[#D4A359] text-[#0C1E15] hover:bg-[#E0B46E] shadow-sm"
                              : "border-2 border-forest text-forest hover:bg-forest hover:text-white"
                          }`}
                        >
                          <span>{tier.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Pricing FAQ / Payment Policy Box */}
          <div className="bg-white rounded-xl border border-border/80 p-8 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl font-medium text-forest">
              Payment & Cancellation Terms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#333E35]">
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-forest">
                  Drop-ins & Class Passes
                </h4>
                <p className="leading-relaxed">
                  Passes are activated on the date of your first attended session.
                  Passes can be transferred to a family member or travel partner
                  upon notification to front desk.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-forest">
                  Retreats & Teacher Training
                </h4>
                <p className="leading-relaxed">
                  Residential programs require a 25% deposit to hold your private or
                  shared cottage. Balance is payable upon check-in at Mandrem.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-sand/60 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-forest text-ivory hover:bg-forest-light transition-colors"
              >
                <span>Enquire About Current Seasonal Discounts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
