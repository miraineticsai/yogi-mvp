import * as React from "react";
import Image from "next/image";
import { Instructor } from "@/lib/data/instructors";

interface InstructorCardProps {
  instructor: Instructor;
  showBioDetailed?: boolean;
}

export function InstructorCard({
  instructor,
  showBioDetailed = false,
}: InstructorCardProps) {
  return (
    <article className="group bg-white rounded-xl border border-border/80 hover:border-forest/30 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-tr from-[#E5DDCF] to-[#F4EFE6]">
        <Image
          src={instructor.image}
          alt={instructor.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-black/75 text-white backdrop-blur-xs shadow-xs">
            Demo Profile
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-medium text-forest">
              {instructor.name}
            </h3>
            <span className="text-xs text-forest-light font-bold">
              {instructor.experienceYears}+ yrs exp
            </span>
          </div>

          <p className="text-xs font-semibold text-forest-light uppercase tracking-wider">
            {instructor.role}
          </p>

          <p className="text-xs sm:text-sm text-[#333E35] leading-relaxed pt-1">
            {showBioDetailed ? instructor.longBio : instructor.bio}
          </p>
        </div>

        <div className="pt-2 border-t border-border/60 space-y-2.5">
          <div className="flex flex-wrap gap-1.5">
            {instructor.specialties.map((spec) => (
              <span
                key={spec}
                className="px-2.5 py-1 bg-sand/60 text-forest text-[11px] rounded-md font-semibold border border-sand/40"
              >
                {spec}
              </span>
            ))}
          </div>

          {instructor.philosophy && (
            <p className="italic text-[11px] text-[#4F5B51] font-medium pt-1 border-l-2 border-[#C69246] pl-2.5">
              &ldquo;{instructor.philosophy}&rdquo;
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
