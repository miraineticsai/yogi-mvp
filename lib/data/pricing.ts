export interface PricingTier {
  id: string;
  name: string;
  category: "group" | "private" | "workshops" | "retreats" | "yttc";
  priceINR: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export const samplePricingTiers: PricingTier[] = [
  // Group Classes
  {
    id: "drop-in",
    name: "Single Drop-in Class",
    category: "group",
    priceINR: "₹800",
    period: "per 75-90 min session",
    description: "Ideal for travelers and seasonal visitors in Goa exploring different styles.",
    features: [
      "Access to any scheduled morning or evening class",
      "Complimentary high-density mat & props usage",
      "Herbal tea following practice",
      "Valid for 7 days from purchase",
    ],
    ctaText: "Enquire for Drop-in",
    ctaHref: "/contact?type=drop-in",
  },
  {
    id: "class-pass-10",
    name: "10-Class Flexibility Pass",
    category: "group",
    priceINR: "₹6,800",
    period: "valid for 45 days",
    description: "Our most popular option for travelers staying in Mandrem or Arambol for a month.",
    features: [
      "Flexible booking across all open-air & beach classes",
      "Save ₹1,200 compared to individual drop-ins",
      "Transferable to a travel partner (up to 2 passes)",
      "Priority spot reservation during peak season",
    ],
    isPopular: true,
    ctaText: "Choose 10-Class Pass",
    ctaHref: "/contact?type=group-pass",
  },
  {
    id: "monthly-unlimited",
    name: "Monthly Unlimited Shala Pass",
    category: "group",
    priceINR: "₹12,500",
    period: "30 consecutive days",
    description: "For dedicated resident yogis and long-stay travelers committed to daily practice.",
    features: [
      "Unlimited access to all daily group classes (2x daily)",
      "Free access to Saturday philosophy & satsang",
      "10% concession on weekend workshops",
      "Dedicated shala mat storage space",
    ],
    ctaText: "Choose Monthly Pass",
    ctaHref: "/contact?type=monthly-pass",
  },

  // Private Sessions
  {
    id: "private-single",
    name: "Individual 1-on-1 Guidance",
    category: "private",
    priceINR: "₹2,800",
    period: "per 75 min session",
    description: "Bespoke personal attention focusing on alignment, injury recovery, or private pranayama.",
    features: [
      "Customized movement sequence tailored to your anatomy",
      "Hands-on posture assessment and video review",
      "Dedicated silent garden pavilion",
      "Take-home sequence notes for personal sadhana",
    ],
    ctaText: "Enquire for 1-on-1",
    ctaHref: "/contact?type=private",
  },
  {
    id: "private-package-5",
    name: "5-Session Personalized Journey",
    category: "private",
    priceINR: "₹12,000",
    period: "5 x 75 min sessions",
    description: "A focused series to overcome structural plateaus or develop a grounded home practice.",
    features: [
      "In-depth mobility and breath diagnostics",
      "Sequenced progression tailored over 2-3 weeks",
      "Ayurvedic lifestyle & daily routine (Dinacharya) guidance",
      "Priority scheduling with senior teachers",
    ],
    isPopular: true,
    ctaText: "Book 5-Session Journey",
    ctaHref: "/contact?type=private",
  },

  // Workshops
  {
    id: "weekend-intensive",
    name: "Weekend Special Intensive",
    category: "workshops",
    priceINR: "₹3,800 – ₹5,500",
    period: "2-Day Immersion (8 hours total)",
    description: "Deep dive workshops exploring topics like Backbend Mechanics, Sound Resonance, and Kundalini Pranayama.",
    features: [
      "Detailed theoretical workbooks and anatomical references",
      "Hands-on adjustments and somatic drills",
      "Sound healing immersion and breath ceremonies",
      "Certificate of participation (demo placeholder)",
    ],
    ctaText: "Enquire for Workshops",
    ctaHref: "/contact?type=workshop",
  },

  // Retreats
  {
    id: "retreat-5-day",
    name: "5-Day Restorative Coastal Retreat",
    category: "retreats",
    priceINR: "₹36,000",
    period: "per person (Twin Sharing)",
    description: "Rejuvenating seaside sanctuary among Mandrem's peaceful casuarina trees and golden sands.",
    features: [
      "4 nights boutique eco-cottage stay in Mandrem",
      "Twice-daily yoga & sunset beach meditations",
      "Organic sattvic farm-to-table breakfast and dinner",
      "1 restorative Ayurvedic Abhyanga massage included",
    ],
    ctaText: "Enquire for 5-Day Retreat",
    ctaHref: "/contact?type=retreat",
  },
  {
    id: "retreat-7-day",
    name: "7-Day Transformative Ocean Sanctuary",
    category: "retreats",
    priceINR: "₹48,000",
    period: "per person (Private Cottage ₹62,000)",
    description: "Our signature week-long immersion combining deep sadhana, silence, and nature reconnection.",
    features: [
      "6 nights boutique accommodation near the sea",
      "Daily asana, pranayama, philosophy, and sound bath",
      "All nutritious organic vegetarian meals & fresh coconuts",
      "Guided Mandrem backwater silent kayak excursion",
    ],
    isPopular: true,
    ctaText: "Enquire for 7-Day Retreat",
    ctaHref: "/contact?type=retreat",
  },

  // Teacher Training
  {
    id: "yttc-200",
    name: "200-Hour Residential Teacher Training",
    category: "yttc",
    priceINR: "₹95,000 – ₹1,25,000",
    period: "24-Day Immersive Residential",
    description: "Comprehensive foundational teacher training covering classical Hatha, Vinyasa, anatomy, and pedagogy.",
    features: [
      "24 days shared/private beachside accommodation",
      "Complete study manuals, alignment guides & journal",
      "Daily three sattvic meals prepared by in-house chef",
      "Live teaching practicums from Week 2",
    ],
    isPopular: true,
    ctaText: "Apply for 200hr YTTC",
    ctaHref: "/contact?type=yttc",
  },
  {
    id: "yttc-300",
    name: "300-Hour Advanced Master Training",
    category: "yttc",
    priceINR: "₹1,40,000",
    period: "28-Day Advanced Cohort",
    description: "For certified teachers seeking mastery in subtle body energetics, advanced sequencing, and therapeutics.",
    features: [
      "Advanced biomechanics, sequencing & nervous system science",
      "Subtle anatomy: Nadis, Chakras, Koshas & Bandhas",
      "Comprehensive mentor feedback on personal teaching style",
      "Includes private cottage accommodation & all meals",
    ],
    ctaText: "Apply for 300hr YTTC",
    ctaHref: "/contact?type=yttc",
  },
];
