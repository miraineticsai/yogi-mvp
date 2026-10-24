import * as React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { ContactForm } from "@/components/ui/contact-form";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Compass,
  ArrowUpRight,
  Plane,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Reach Our Shala in Goa",
  description:
    "Get in touch with Yogi Goals in Mandrem, Goa. Inquire about yoga teacher training, daily classes, private sessions, and retreat accommodations.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

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
            alt="Goa coastal palm trees and ocean shore"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            WE ARE HERE TO HELP
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Connect with Yogi Goals
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Whether you have questions regarding teacher training admission,
            daily class passes, or reaching our Mandrem sanctuary, our team is at
            your service.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        MAIN CONTACT & FORM SECTION
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details, WhatsApp CTA & Directions */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-sage-dark block">
                  COMMUNICATION CHANNELS
                </span>
                <h2 className="font-serif text-3xl font-medium text-forest">
                  Visit or Message Our Shala
                </h2>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Our front desk in Mandrem operates daily from early morning sadhana
                  through sunset meditation.
                </p>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="p-6 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 space-y-3">
                <div className="flex items-center gap-2.5 text-[#128C7E]">
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <h3 className="font-sans font-bold text-sm">
                    Prefer Instant Messaging?
                  </h3>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Connect with our reservations coordinator directly on WhatsApp for
                  instant response regarding daily class slots and current batch
                  availability.
                </p>
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-all shadow-xs"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="bg-white rounded-xl border border-sand p-6 space-y-5 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-sand/40 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                      Shala Location
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80">
                      {siteConfig.fullLocation}
                    </p>
                    <span className="text-[11px] text-sage-dark block pt-0.5">
                      (Approx. 7 min walk from Mandrem Beach shoreline)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-sand/40 pt-4">
                  <div className="w-9 h-9 rounded-full bg-sand/40 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                      Telephone / WhatsApp
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80">
                      {siteConfig.phonePlaceholder}
                    </p>
                    <span className="text-[11px] text-charcoal/50 block">
                      Lines open 07:00 AM – 07:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-sand/40 pt-4">
                  <div className="w-9 h-9 rounded-full bg-sand/40 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                      Email Inquiries
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80">
                      {siteConfig.emailPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-sand/40 pt-4">
                  <div className="w-9 h-9 rounded-full bg-sand/40 text-forest flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-charcoal">
                      Visiting & Class Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal/80">
                      {siteConfig.hoursPlaceholder}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* 
            ====================================================================
            GOA LOCATION & TRAVEL DIRECTIONS
            ====================================================================
          */}
          <div id="location" className="mt-20 pt-16 border-t border-sand space-y-8 scroll-mt-20">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-sage-dark block">
                FINDING YOUR WAY
              </span>
              <h2 className="font-serif text-3xl font-medium text-forest">
                Arriving at Our Goa Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/75">
                Mandrem is situated in northern Goa, known for its serene palm-fringed
                beaches and peaceful retreat atmosphere away from nightlife hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-sand space-y-3">
                <div className="flex items-center gap-2 text-forest">
                  <Plane className="w-5 h-5 text-forest" />
                  <h3 className="font-sans font-bold text-sm">
                    From Mopa Airport (GOX)
                  </h3>
                </div>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Approx. 40-50 minutes by prepaid taxi. This is the closest airport
                  to Mandrem, offering convenient domestic and international links.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-sand space-y-3">
                <div className="flex items-center gap-2 text-forest">
                  <Plane className="w-5 h-5 text-forest" />
                  <h3 className="font-sans font-bold text-sm">
                    From Dabolim Airport (GOI)
                  </h3>
                </div>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Approx. 75-90 minutes along the NH66 coastal route. Airport taxis
                  are available 24/7 from the official counter outside arrivals.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-sand space-y-3">
                <div className="flex items-center gap-2 text-forest">
                  <Compass className="w-5 h-5 text-forest" />
                  <h3 className="font-sans font-bold text-sm">
                    From Thivim Railway Station
                  </h3>
                </div>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  Approx. 35 minutes by car. Thivim connects directly to Mumbai,
                  Pune, and Bangalore via Konkan Railway services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
