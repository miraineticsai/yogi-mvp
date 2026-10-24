"use client";

import * as React from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/lib/data/gallery";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { MapPin, Eye } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Imagery" },
  { id: "asana", label: "Asana Practice" },
  { id: "meditation", label: "Meditation & Breath" },
  { id: "shala", label: "Shala Spaces" },
  { id: "nature", label: "Goa Beach & Nature" },
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [activeLightboxItem, setActiveLightboxItem] = React.useState<GalleryItem | null>(null);

  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
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
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2000&q=80"
            alt="Yoga posture on Mandrem beach at sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/95 via-[#0A1F13]/90 to-[#07170E]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-4">
          <span className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-[#E0B46E] block">
            VISUAL SANCTUARY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-sm">
            Gallery & Moments of Practice
          </h1>
          <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            Quiet glimpses into daily sadhana, open-air shala architecture, and
            the timeless coastal nature of Mandrem, Goa.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        GALLERY GRID WITH INTERACTIVE LIGHTBOX
        ========================================================================
      */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-forest text-white shadow-xs"
                    : "bg-white border border-border text-[#263329] hover:bg-[#F2ECE0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-xl overflow-hidden border border-border bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 aspect-[4/3]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveLightboxItem(item);
                  }
                }}
                aria-label={`View enlarged photo: ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E0B46E] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-medium leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/90 mt-1">
                    <MapPin className="w-3 h-3 text-[#E0B46E]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="pt-2 flex items-center gap-1 text-[11px] text-[#E0B46E] font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view full image</span>
                  </div>
                </div>

                {/* Always-visible subtle badge on mobile */}
                <div className="sm:hidden absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs p-2 rounded text-white text-[11px]">
                  <span className="font-medium block truncate">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </div>
  );
}
