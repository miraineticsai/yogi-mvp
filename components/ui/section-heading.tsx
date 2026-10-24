import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-sans uppercase tracking-[0.2em] font-bold block",
            isDark ? "text-[#E0B46E]" : "text-forest-light"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-forest"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed font-sans",
            isDark ? "text-white/90" : "text-[#3B473E]"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "w-12 h-0.5 rounded-full",
          isDark ? "bg-[#E0B46E]/70" : "bg-forest/30",
          isCenter ? "mx-auto mt-4" : "mt-4"
        )}
      />
    </div>
  );
}
