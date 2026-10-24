import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProgramOffering } from "@/lib/data/programs";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  program: ProgramOffering;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group bg-white rounded-xl border border-border/80 hover:border-forest/30 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6]">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded bg-white/95 backdrop-blur-xs text-forest shadow-sm border border-sand/40">
            {program.tag}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-forest leading-snug group-hover:text-forest-light transition-colors">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed">
            {program.shortDescription}
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={program.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest group-hover:text-forest-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            <span>{program.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
