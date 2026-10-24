import * as React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling principles for Yogi Goals in Goa, India.",
};

export default function PrivacyPage() {
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
            LEGAL & PRIVACY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-forest">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal/60">
            Last Updated: October 2026 (Demo Policy)
          </p>
        </header>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-sans">
          <p>
            At Yogi Goals, located in Mandrem, Goa, we respect your privacy and are
            committed to maintaining the confidentiality of any information you share
            with us through this demonstration website.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            1. Information Collection
          </h2>
          <p>
            In this website preview phase, form submissions are handled on the client side
            for user experience evaluation. No customer banking data or payment records
            are processed or stored on remote servers without explicit user confirmation.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            2. Communication Preferences
          </h2>
          <p>
            When you initiate contact via WhatsApp or our enquiry form, we use your
            supplied email and telephone number solely to reply to your specific
            inquiries regarding teacher training, retreats, or class schedules.
          </p>

          <h2 className="font-serif text-xl font-medium text-forest pt-2">
            3. Cookies & Analytics
          </h2>
          <p>
            This website does not employ intrusive third-party cross-site tracking cookies.
            Local browser storage is used solely to maintain interface preferences such as
            chatbot session state and navigation accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}
