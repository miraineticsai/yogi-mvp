import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1E14] text-white border-t border-[#183B27] relative overflow-hidden">
      {/* Subtle organic watermark / pattern */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-forest-light/20 pointer-events-none blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white group">
              <div className="w-9 h-9 rounded-full bg-[#D4A359] text-[#0B1E14] flex items-center justify-center font-serif text-xl font-bold shadow-xs">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E0B46E] font-bold">
                  {siteConfig.location}
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/85 leading-relaxed font-sans max-w-sm">
              A serene coastal sanctuary in Mandrem, Goa. Dedicated to mindful yoga
              practice, transformative teacher training, and grounding retreat
              experiences surrounded by tropical nature.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4A359] hover:text-[#0B1E14] text-white transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A359]"
                aria-label="Follow Yogi Goals on Instagram (Demo Link)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#D4A359] hover:text-[#0B1E14] text-white transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A359]"
                aria-label="Subscribe to Yogi Goals YouTube (Demo Link)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg tracking-wide text-[#E0B46E] font-medium border-b border-white/15 pb-2">
              Explore Pages
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[#E0B46E] hover:translate-x-1 inline-block transition-transform tracking-wide"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Goa Shala Location */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-lg tracking-wide text-[#E0B46E] font-medium border-b border-white/15 pb-2">
              Our Goa Sanctuary
            </h3>
            <ul className="space-y-3 text-xs text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E0B46E] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white block font-medium">Shala Location:</strong>
                  {siteConfig.fullLocation}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E0B46E] shrink-0" />
                <span>{siteConfig.phonePlaceholder} (Enquiries & WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E0B46E] shrink-0" />
                <span>{siteConfig.emailPlaceholder}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E0B46E] shrink-0" />
                <span>{siteConfig.hoursPlaceholder}</span>
              </li>
            </ul>

            <div className="p-3.5 bg-white/5 rounded-md border border-white/15 text-[11px] text-white/85">
              <span className="font-medium text-[#E0B46E] block mb-0.5">Note for Visitors:</span>
              Quiet hours are observed between 01:00 PM – 03:30 PM. Advance enquiry is
              encouraged during high coastal season.
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & demo notes */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {currentYear} Yogi Goals. All rights reserved. Goa, India.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#E0B46E] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#E0B46E] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Transparent Demo Disclaimer */}
        <div className="mt-6 text-center text-[11px] text-white/50">
          * This website is a design demonstration for Yogi Goals in Goa, India. Class schedules, instructor bios, and pricing represent illustrative demo content.
        </div>
      </div>
    </footer>
  );
}
