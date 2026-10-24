"use client";

import * as React from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/data/gallery";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface ImageLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export function ImageLightbox({
  item,
  items,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  React.useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-charcoal/70 text-white hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand"
        aria-label="Close lightbox modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-charcoal/70 text-white hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-charcoal/70 text-white hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-ivory rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
            className="object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-ivory border-t border-sand flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-sand/60 text-forest text-[11px] font-semibold uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-charcoal/60 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-forest">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80">{item.caption}</p>
          </div>

          <div className="text-right text-xs text-charcoal/50 shrink-0">
            {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
