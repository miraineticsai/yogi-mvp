"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  sampleSchedule,
  daysOfWeek,
  WeekDay,
} from "@/lib/data/schedule";
import { Clock, User, MapPin, ShieldAlert, ArrowRight } from "lucide-react";

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = React.useState<WeekDay | "All">("All");

  const filteredSchedule = React.useMemo(() => {
    if (selectedDay === "All") return sampleSchedule;
    return sampleSchedule.filter((item) => item.day === selectedDay);
  }, [selectedDay]);

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
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80"
            alt="Students practicing in peaceful Goa morning sunlight"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            DAILY SHALA & BEACH TIMINGS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Class Schedule
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Join us for morning revitalizations and evening restorative flows
            surrounded by coastal palms in Mandrem, Goa.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        STATIC DATA DISCLAIMER NOTICE
        ========================================================================
      */}
      <div className="bg-[#EAE4D7] border-y border-[#D6CBB8] py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs text-[#1E3B29] font-medium text-center">
          <ShieldAlert className="w-4 h-4 text-forest shrink-0" />
          <span>
            <strong className="font-bold">Illustrative Demo Schedule:</strong> This schedule is static demo
            content for previewing layout and design. Actual seasonal class schedules
            will be confirmed via WhatsApp or enquiry.
          </span>
        </div>
      </div>

      {/* 
        ========================================================================
        SCHEDULE CONTENT
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Day Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-6">
            <button
              type="button"
              onClick={() => setSelectedDay("All")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedDay === "All"
                  ? "bg-forest text-white shadow-xs"
                  : "bg-white border border-border text-[#263329] hover:bg-[#F2ECE0]"
              }`}
            >
              Full Week (All)
            </button>
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedDay === day
                    ? "bg-forest text-white shadow-xs"
                    : "bg-white border border-border text-[#263329] hover:bg-[#F2ECE0]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-xl border border-border overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#E5DDCF] border-b border-border text-forest font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="py-4 px-6">Day & Time</th>
                  <th scope="col" className="py-4 px-6">Class Name</th>
                  <th scope="col" className="py-4 px-6">Instructor</th>
                  <th scope="col" className="py-4 px-6">Format / Shala</th>
                  <th scope="col" className="py-4 px-6">Pace</th>
                  <th scope="col" className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/40">
                {filteredSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-ivory/60 transition-colors">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="font-semibold text-forest block">
                        {item.day}
                      </span>
                      <span className="text-xs text-charcoal/60 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <strong className="font-serif text-base text-forest block">
                        {item.className}
                      </strong>
                      <span className="text-xs text-charcoal/70 line-clamp-1">
                        {item.description}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-charcoal">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sage-dark" />
                        {item.instructor}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sand/40 text-forest text-xs font-medium">
                        <MapPin className="w-3 h-3" />
                        {item.format}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                          item.intensity === "Gentle"
                            ? "bg-emerald-100 text-emerald-800"
                            : item.intensity === "Moderate"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {item.intensity}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <Link
                        href={`/contact?type=drop-in&class=${encodeURIComponent(item.className)}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-forest text-ivory text-xs font-semibold hover:bg-forest-light transition-colors"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-sand p-5 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-sand/40 text-forest text-xs font-semibold">
                    {item.day}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      item.intensity === "Gentle"
                        ? "bg-emerald-100 text-emerald-800"
                        : item.intensity === "Moderate"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {item.intensity} Pace
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-medium text-forest">
                    {item.className}
                  </h3>
                  <p className="text-xs text-charcoal/60 flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time} ({item.duration})
                  </p>
                </div>

                <p className="text-xs text-charcoal/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-sand/40 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase text-charcoal/50 block">Guide & Space</span>
                    <span className="font-medium text-forest">
                      {item.instructor} • {item.format}
                    </span>
                  </div>

                  <Link
                    href={`/contact?type=drop-in&class=${encodeURIComponent(item.className)}`}
                    className="px-3 py-1.5 rounded bg-forest text-ivory text-xs font-semibold hover:bg-forest-light transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Shala Etiquette & Arrival Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-white rounded-lg border border-sand space-y-2">
              <h4 className="font-serif text-lg font-medium text-forest">
                Arrive 10 Minutes Early
              </h4>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Allow time to wash feet, silence digital devices, and settle onto
                your mat in calm silence before the opening chant.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-sand space-y-2">
              <h4 className="font-serif text-lg font-medium text-forest">
                Mats & Props Provided
              </h4>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Organic cotton bolsters, cork blocks, straps, and sanitized yoga
                mats are available free of charge for all practitioners.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-sand space-y-2">
              <h4 className="font-serif text-lg font-medium text-forest">
                Pre-Practice Fasting
              </h4>
              <p className="text-xs text-charcoal/75 leading-relaxed">
                Avoid heavy meals for at least 2 hours prior to active practice.
                Warm herbal chai and filtered water are available post-session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
