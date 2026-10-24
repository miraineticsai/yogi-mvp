export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
  timestamp: string;
}

export const SUGGESTED_QUESTIONS = [
  "What yoga programs do you offer?",
  "Tell me about teacher training.",
  "What classes are available?",
  "Where are you located?",
  "How can I contact you?",
];

export const INITIAL_BOT_MESSAGE: ChatMessage = {
  id: "welcome-1",
  sender: "bot",
  text: "Namaste! Welcome to Yogi Goals. How can we help you with your yoga journey?",
  links: [
    { label: "View Programs", href: "/courses" },
    { label: "Teacher Training", href: "/yttc" },
    { label: "Contact Us", href: "/contact" },
  ],
  timestamp: "Just now",
};

interface Rule {
  keywords: string[];
  response: string;
  links?: { label: string; href: string }[];
}

const KNOWLEDGE_RULES: Rule[] = [
  {
    keywords: ["program", "offering", "what do you offer", "courses", "retreat", "workshop"],
    response:
      "We offer 6 core pathways in Goa: 200/300-Hour Yoga Teacher Training (YTTC), Regular Multi-Week Yoga Courses (Hatha, Vinyasa, Yin), Specialized Weekend Workshops, 5 to 7-Day Coastal Yoga Retreats, Online Group Classes, and 1-on-1 Private Sessions.",
    links: [
      { label: "Browse All Courses", href: "/courses" },
      { label: "Explore YTTC", href: "/yttc" },
      { label: "View Pricing", href: "/pricing" },
    ],
  },
  {
    keywords: ["yttc", "teacher training", "200 hour", "300 hour", "certification", "curriculum", "syllabus"],
    response:
      "Our Yoga Teacher Training Courses (YTTC) in Mandrem, Goa feature immersive 200-Hour and 300-Hour residential programs. You will study Classical Hatha & Vinyasa alignment, functional anatomy, Patanjali philosophy, pranayama, and hands-on teaching methodology. (Demo content).",
    links: [
      { label: "Full YTTC Details", href: "/yttc" },
      { label: "Enquire for Admission", href: "/contact?type=yttc" },
    ],
  },
  {
    keywords: ["schedule", "timings", "hours", "when", "class available", "classes", "time"],
    response:
      "We offer daily morning practices (07:00 AM – 08:30 AM Classical Hatha, Ashtanga, or Sunrise Prana) and peaceful evening unwind sessions (05:30 PM – 07:00 PM Sunset Yin, Sound Bath & Meditation) across Monday through Sunday.",
    links: [
      { label: "View Full Weekly Schedule", href: "/schedule" },
      { label: "Book a Drop-in", href: "/contact?type=drop-in" },
    ],
  },
  {
    keywords: ["pricing", "price", "cost", "fee", "rate", "how much", "inr"],
    response:
      "Demo pricing overview: Single drop-in classes are ₹800, 10-Class passes are ₹6,800, Monthly unlimited passes are ₹12,500, 1-on-1 private guidance is ₹2,800, and 7-day all-inclusive coastal retreats start from ₹36,000 to ₹48,000 INR.",
    links: [
      { label: "See Complete Pricing", href: "/pricing" },
      { label: "Enquire via Contact", href: "/contact" },
    ],
  },
  {
    keywords: ["location", "located", "where", "address", "goa", "mandrem", "map", "reach"],
    response:
      "Yogi Goals is situated in Mandrem, North Goa, India (near Mandrem Beach Road, 403527). We are nestled in a peaceful palm grove, just 7 minutes' stroll from the pristine shoreline, easily accessible from Manohar Mopa (GOX) and Dabolim (GOI) airports.",
    links: [
      { label: "View Location & Directions", href: "/contact#location" },
    ],
  },
  {
    keywords: ["instructor", "teacher", "who teaches", "team", "ananya", "david", "meera"],
    response:
      "Our resident demo faculty includes Ananya Sharma (Lead Hatha & Functional Anatomy), David Moreau (Dynamic Vinyasa & Movement Flow), and Meera Nair (Yin Yoga, Breathwork & Sound Meditation).",
    links: [
      { label: "Meet the Instructors", href: "/instructors" },
    ],
  },
  {
    keywords: ["contact", "reach", "email", "phone", "whatsapp", "call", "talk"],
    response:
      "You can message us directly on WhatsApp using the button on the bottom right, send an enquiry through our contact form, or email us at namaste@yogigoals-goa.example.",
    links: [
      { label: "Go to Contact Form", href: "/contact" },
    ],
  },
  {
    keywords: ["retreat", "accommodation", "stay", "meals", "food"],
    response:
      "Our coastal retreats in Mandrem provide comfortable eco-cottage accommodation, three organic sattvic vegetarian meals daily, twice-daily yoga, beach meditations, and local excursions.",
    links: [
      { label: "Retreat Details", href: "/courses#retreats" },
      { label: "Pricing & Availability", href: "/pricing#retreats" },
    ],
  },
  {
    keywords: ["beginner", "new", "never done yoga", "level"],
    response:
      "All levels are warmly welcomed! If you are new to yoga, we recommend starting with our Classical Hatha or Gentle Somatic Flow classes, where instructors provide hands-on alignment and props support.",
    links: [
      { label: "Explore Foundational Courses", href: "/courses" },
      { label: "View Weekly Schedule", href: "/schedule" },
    ],
  },
];

/**
 * Modular chatbot response generator.
 * In a future phase, this can be swapped or augmented with a fetch call
 * to an n8n webhook or AI LLM endpoint.
 */
export async function getChatbotResponse(userInput: string): Promise<ChatMessage> {
  const normalized = userInput.toLowerCase().trim();

  // Search through rule base
  for (const rule of KNOWLEDGE_RULES) {
    const isMatch = rule.keywords.some((kw) => normalized.includes(kw));
    if (isMatch) {
      return {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: rule.response,
        links: rule.links,
        timestamp: "Just now",
      };
    }
  }

  // Graceful fallback response
  return {
    id: `bot-${Date.now()}`,
    sender: "bot",
    text:
      "Thank you for reaching out! While our automated assistant doesn't have an exact answer for that yet, our team in Goa would be delighted to assist you directly.",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Explore Schedule", href: "/schedule" },
      { label: "View Courses", href: "/courses" },
    ],
    timestamp: "Just now",
  };
}
