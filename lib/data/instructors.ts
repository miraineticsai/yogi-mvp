export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  longBio: string;
  image: string;
  imageAlt: string;
  experienceYears: number;
  featured: boolean;
  philosophy: string;
}

export const instructors: Instructor[] = [
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    role: "Lead Hatha & Anatomy Instructor (Demo Profile)",
    specialties: ["Classical Hatha", "Functional Anatomy", "Alignment Lab"],
    bio: "Focuses on steady alignment, breath-linked posture holding, and biomechanics grounded in traditional Indian lineage.",
    longBio:
      "Ananya has guided practitioners for over a decade across Rishikesh and Goa. Her teaching bridges classical yogic texts with contemporary musculoskeletal safety, creating a secure environment where students develop enduring strength and anatomical awareness without strain.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Instructor Ananya Sharma seated peacefully in natural light",
    experienceYears: 11,
    featured: true,
    philosophy:
      "Yoga is not about touching your toes; it is about what you learn on the way down.",
  },
  {
    id: "david-moreau",
    name: "David Moreau",
    role: "Vinyasa & Movement Flow Facilitator (Demo Profile)",
    specialties: ["Dynamic Vinyasa", "Breath-Movement Cadence", "Inversions"],
    bio: "Brings a fluid, compassionate approach to dynamic movement, cultivating focus, ease in transitions, and playful curiosity.",
    longBio:
      "Trained in classical Ashtanga and somatic movement, David specializes in mindful sequencing that respects individual skeletal variations. His classes in Goa balance rigorous cardiovascular vitality with quiet grounding and deep presence.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Instructor David Moreau demonstrating mindful movement outdoors",
    experienceYears: 8,
    featured: true,
    philosophy:
      "Movement becomes meditation when breath and intention guide every transition.",
  },
  {
    id: "meera-nair",
    name: "Meera Nair",
    role: "Yin Yoga, Pranayama & Meditation Guide (Demo Profile)",
    specialties: ["Pranayama", "Yin & Restorative", "Yoga Nidra", "Sound Bath"],
    bio: "Guides restful, introspective practices designed to regulate the autonomic nervous system and cultivate quiet mental clarity.",
    longBio:
      "Meera draws deeply from classical Pranayama treatises and sound resonance therapy. In her restorative sunset sessions in Mandrem, she curates sensory-calming spaces using authentic singing bowls, conscious breathing ratios, and guided Yoga Nidra.",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Instructor Meera Nair leading a gentle restorative meditation",
    experienceYears: 9,
    featured: true,
    philosophy:
      "In the space between inhalation and exhalation lies our truest sanctuary.",
  },
  {
    id: "rohan-deshmukh",
    name: "Rohan Deshmukh",
    role: "Yoga Philosophy & Sanskrit Study Lead (Demo Profile)",
    specialties: ["Patanjali Yoga Sutras", "Mantra Chanting", "Bhagavad Gita Study"],
    bio: "Passionate about demystifying ancient Indian philosophical frameworks for contemporary practitioners with clarity and humility.",
    longBio:
      "Rohan leads our philosophical modules for teacher training in Goa. His interactive discourses explore how ancient ethical precepts (Yamas and Niyamas) provide practical emotional equilibrium in modern daily life.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Instructor Rohan Deshmukh discussing yoga philosophy in an open pavilion",
    experienceYears: 12,
    featured: false,
    philosophy:
      "Philosophy is not theory; it is how you speak, act, and breathe when no one is watching.",
  },
];
