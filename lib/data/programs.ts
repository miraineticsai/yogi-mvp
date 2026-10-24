export interface ProgramOffering {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaText: string;
  tag: string;
}

export const programOfferings: ProgramOffering[] = [
  {
    id: "yttc",
    title: "Yoga Teacher Training Courses",
    shortDescription:
      "Immersive 200-hour and 300-hour training programs blending traditional lineage, functional anatomy, and compassionate teaching methodology.",
    description:
      "Deepen your practice and step into teaching with grounded wisdom. Our Goa trainings integrate daily asana, pranayama, philosophy, teaching practicums, and Ayurvedic lifestyle.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Yoga teacher guiding students through alignment in an open-air shala",
    href: "/yttc",
    ctaText: "Explore YTTC",
    tag: "Certification",
  },
  {
    id: "regular-courses",
    title: "Regular Yoga Courses",
    shortDescription:
      "Progressive multi-week journeys in Classical Hatha, dynamic Vinyasa, and restorative Yin to build lasting stability and mindfulness.",
    description:
      "Designed for dedicated practitioners seeking continuity. Cultivate strength, mobility, and somatic self-awareness over structured 4 to 8 week cohorts.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Yoga practitioner holding an intentional posture at dawn",
    href: "/courses",
    ctaText: "Explore Courses",
    tag: "Cohort Based",
  },
  {
    id: "workshops",
    title: "Specialized Workshops",
    shortDescription:
      "Focused weekend intensives covering breathwork, myofascial release, sound immersion, and backbend biomechanics.",
    description:
      "Dive into focused topics guided by resident teachers and visiting guest masters. Learn actionable techniques to refine your movement and calm your nervous system.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Mindful workshop group in deep meditation and breathwork",
    href: "/courses#workshops",
    ctaText: "View Workshops",
    tag: "Intensives",
  },
  {
    id: "retreats",
    title: "Yoga Retreats in Goa",
    shortDescription:
      "Nourishing multi-day sanctuary experiences among coastal palms, organic sattvic meals, daily silence, and gentle beach strolls.",
    description:
      "Disconnect from busyness and return to your natural cadence. Our 5-day and 7-day coastal retreats offer a rhythm of sunrise practice, nature immersion, and restorative rest.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Peaceful coastal beach at sunrise surrounded by tropical greenery in Goa",
    href: "/courses#retreats",
    ctaText: "Discover Retreats",
    tag: "Immersive",
  },
  {
    id: "online-classes",
    title: "Online Group Classes",
    shortDescription:
      "Live interactive classes connecting you to our Goa shala from anywhere in the world, streamed in high definition with personal adjustments.",
    description:
      "Maintain your daily rhythm wherever you are. Live interactive morning and evening flows with real-time cues, teacher check-ins, and an archive of recorded practices.",
    image:
      "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Mindful indoor yoga space with natural light and minimalist setup",
    href: "/schedule#online",
    ctaText: "View Online Schedule",
    tag: "Global Access",
  },
  {
    id: "private-sessions",
    title: "One-on-One Private Sessions",
    shortDescription:
      "Tailored individualized sessions addressing specific physical goals, injury recovery, pranayama development, or personal meditation.",
    description:
      "Experience bespoke 75-minute guidance tailored to your body's structural needs and energy. Ideal for injury rehabilitation, nervous system regulation, or deep alignment.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Private yoga guidance focusing on alignment and deep breath",
    href: "/pricing#private",
    ctaText: "Private Enquiries",
    tag: "Personalized",
  },
];

export interface DetailedCourse {
  id: string;
  title: string;
  category: "Foundational" | "Dynamic" | "Restorative" | "Meditation" | "Specialty";
  level: "All Levels" | "Beginner Friendly" | "Intermediate" | "Advanced";
  duration: string;
  schedule: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  priceEstimate: string;
}

export const detailedCourses: DetailedCourse[] = [
  {
    id: "classical-hatha",
    title: "Classical Hatha Sadhana",
    category: "Foundational",
    level: "All Levels",
    duration: "4 Weeks (12 Sessions)",
    schedule: "Mon, Wed, Fri | 07:00 AM – 08:30 AM",
    description:
      "A steady, breath-synchronized study of classical asana holding, bandhas, and internal focus to balance the solar (ha) and lunar (tha) energies.",
    highlights: [
      "Traditional asana holds and micro-adjustments",
      "Pranayama foundations: Nadi Shodhana & Kapalabhati",
      "Somatic grounding and joint health",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Instructor demonstrating steady classical hatha pose",
    priceEstimate: "₹6,800 demo fee",
  },
  {
    id: "ashtanga-vinyasa",
    title: "Dynamic Ashtanga Flow",
    category: "Dynamic",
    level: "Intermediate",
    duration: "6 Weeks (18 Sessions)",
    schedule: "Tue, Thu, Sat | 07:00 AM – 08:45 AM",
    description:
      "An energizing practice based on the primary series, synchronizing Ujjayi breath with purposeful transitions, core stability, and heat generation.",
    highlights: [
      "Progressive jump-throughs and transitions",
      "Drishti (gaze points) and Ujjayi breath mastery",
      "Strength building and mobility conditioning",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Graceful dynamic yoga flow movement",
    priceEstimate: "₹8,500 demo fee",
  },
  {
    id: "yin-somatic-rest",
    title: "Yin Yoga & Nervous System Restoration",
    category: "Restorative",
    level: "All Levels",
    duration: "4 Weeks (8 Sessions)",
    schedule: "Tue & Thu | 05:30 PM – 07:00 PM",
    description:
      "Long-held passive floor postures supporting deep fascial release, parasympathetic recovery, and gentle joint decompression in our garden shala.",
    highlights: [
      "3-5 minute mindful passive holds with props",
      "Meridian theory and deep fascial hydration",
      "Guided Yoga Nidra relaxation closing",
    ],
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Restorative yin yoga supported pose on a yoga mat",
    priceEstimate: "₹5,400 demo fee",
  },
  {
    id: "pranayama-meditation",
    title: "Pranayama, Mudra & Stillness",
    category: "Meditation",
    level: "Beginner Friendly",
    duration: "3 Weeks (9 Sessions)",
    schedule: "Mon, Wed, Fri | 06:00 PM – 07:15 PM",
    description:
      "Cultivate emotional regulation, lung capacity, and mental clarity through traditional yogic breath control and silent seated meditation.",
    highlights: [
      "Subtle anatomy of Ida, Pingala, and Sushumna",
      "Daily progressive breath ratios",
      "Antar Mouna and silent witnessing technique",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Seated meditation pose overlooking natural greenery",
    priceEstimate: "₹4,800 demo fee",
  },
  {
    id: "coastal-immersion-retreat",
    title: "7-Day Coastal Reset Retreat",
    category: "Specialty",
    level: "All Levels",
    duration: "7 Days / 6 Nights",
    schedule: "Seasonal cohorts (Oct – Apr)",
    description:
      "A complete restorative immersion in Mandrem, Goa. Daily double yoga sessions, organic coastal cuisine, beach meditations, and Ayurvedic consultation.",
    highlights: [
      "Twin-share eco-cottage accommodation included",
      "Three sattvic vegetarian meals daily",
      "Sound healing & sunset dolphin boat excursion",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Tropical palm grove and beach sanctuary in Goa",
    priceEstimate: "₹48,000 demo fee",
  },
  {
    id: "breathwork-soundbath-workshop",
    title: "Breath & Tibetan Singing Bowl Immersion",
    category: "Specialty",
    level: "All Levels",
    duration: "Weekend Intensive (2 Days)",
    schedule: "Saturday & Sunday | 02:00 PM – 06:00 PM",
    description:
      "A transformative weekend diving deep into conscious connected breathing followed by acoustic resonance therapy using authentic Tibetan bowls.",
    highlights: [
      "Deep cellular oxygenation and release",
      "Harmonic sound immersion with singing bowls",
      "Integrative journaling and herbal tea circle",
    ],
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Meditation bowls and mindful peaceful setting",
    priceEstimate: "₹3,800 demo fee",
  },
];
