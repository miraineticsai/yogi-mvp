export interface GalleryItem {
  id: string;
  title: string;
  category: "asana" | "meditation" | "shala" | "nature";
  categoryLabel: string;
  location: string;
  aspectRatio: "square" | "tall" | "wide";
  image: string;
  imageAlt: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Sunrise Warrior at Mandrem Beach",
    category: "asana",
    categoryLabel: "Asana Practice",
    location: "Mandrem Beach, North Goa",
    aspectRatio: "tall",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Practitioner in Virabhadrasana overlooking morning coastal horizon",
    caption: "Grounding through the feet while opening the chest to the morning ocean breeze.",
  },
  {
    id: "g2",
    title: "Morning Meditation by Coconut Palms",
    category: "meditation",
    categoryLabel: "Meditation",
    location: "Yogi Goals Garden Sanctuary",
    aspectRatio: "wide",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Seated silent meditation under lush tropical foliage",
    caption: "Cultivating inner stillness as the tropical morning unfolds.",
  },
  {
    id: "g3",
    title: "Breathwork & Singing Bowl Resonance",
    category: "shala",
    categoryLabel: "Nature & Shala",
    location: "Open Bamboo Shala",
    aspectRatio: "square",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mindful hands resting in chin mudra on a yoga mat",
    caption: "Subtle energy work blending conscious breathing with harmonic sound.",
  },
  {
    id: "g4",
    title: "Golden Hour Ocean Reflections",
    category: "nature",
    categoryLabel: "Goa Coast",
    location: "Arambol - Mandrem Shore",
    aspectRatio: "wide",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Serene Goa beach with gentle waves and warm sand at dusk",
    caption: "Mandrem's untouched shoreline invites contemplative evening walks.",
  },
  {
    id: "g5",
    title: "Mindful Alignment & Subtle Adjustments",
    category: "asana",
    categoryLabel: "Asana Practice",
    location: "Teacher Training Shala",
    aspectRatio: "square",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Yoga teacher demonstrating posture alignment with precision",
    caption: "Refining joint safety and breath flow in classical posture holding.",
  },
  {
    id: "g6",
    title: "Restorative Yin & Bolster Support",
    category: "meditation",
    categoryLabel: "Meditation",
    location: "Garden Pavilion",
    aspectRatio: "tall",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Supported restorative yoga pose with cotton bolsters",
    caption: "Releasing chronic tension through supported, long-held floor postures.",
  },
  {
    id: "g7",
    title: "Sacred Shala Architecture",
    category: "shala",
    categoryLabel: "Nature & Shala",
    location: "Main Yoga Shala",
    aspectRatio: "wide",
    image:
      "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Natural wood and woven bamboo eco-friendly yoga space",
    caption: "Natural timber decks and breathable thatched roofs designed for optimal prana flow.",
  },
  {
    id: "g8",
    title: "Sunset over the Arabian Sea",
    category: "nature",
    categoryLabel: "Goa Coast",
    location: "Mandrem Horizon",
    aspectRatio: "tall",
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sunset colors painting the sky over coastal greenery",
    caption: "Closing the day in silent appreciation of the setting sun.",
  },
  {
    id: "g9",
    title: "Teacher Training Sangha Circle",
    category: "shala",
    categoryLabel: "Nature & Shala",
    location: "Shala Courtyard",
    aspectRatio: "square",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students seated in a circle sharing reflections after morning sadhana",
    caption: "The warmth of communal learning and lifelong connections in Goa.",
  },
];
