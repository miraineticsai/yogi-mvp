export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Practice" | "Pranayama" | "Mindfulness" | "Philosophy" | "Goa Living";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  imageAlt: string;
  featured?: boolean;
  content: string[];
}

export const sampleBlogPosts: BlogPost[] = [
  {
    slug: "building-a-consistent-yoga-practice",
    title: "Building a Consistent Yoga Practice: The Art of Showing Up",
    excerpt:
      "Why fifteen minutes of quiet, attentive daily movement yields deeper transformation than erratic two-hour weekend sessions, and how to cultivate longevity in your sadhana.",
    category: "Practice",
    date: "October 14, 2026",
    readTime: "6 min read",
    author: {
      name: "Ananya Sharma",
      role: "Lead Hatha Instructor",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Practitioner standing in tree pose with steady presence outdoors",
    featured: true,
    content: [
      "In classical yogic tradition, practice is referred to as 'Abhyasa'—the continuous, dedicated effort to rest in stillness. Yet in our fast-paced modern lives, consistency is often mistaken for rigidity or perfectionism. We tell ourselves that unless we have ninety uninterrupted minutes and pristine conditions, the practice isn't worth stepping onto the mat for.",
      "In reality, nervous system adaptation thrives on rhythmic predictability rather than sporadic intensity. When you unfurl your mat for just twenty minutes each morning—even if it is simply six rounds of Surya Namaskar followed by quiet seated breathing—you send a profound neurobiological signal to your body: 'I am here. I am listening.'",
      "To build longevity in your practice, shift from a performance mindset to an observational mindset. Some days, your body asks for the steady fiery discipline of warrior poses; on others, it craves the quiet surrender of Balasana (Child's Pose) and a supportive bolster. The practice remains consistent not because the physical shapes are identical, but because the underlying quality of attention never wavers.",
      "Here in Goa, where the tide moves with unhurried grace, nature reminds us of this truth. The ocean does not fight the shore; it arrives with patience, retreat, and return. Allow your daily sadhana to become your anchor—not another task on a to-do list, but a homecoming to your center.",
    ],
  },
  {
    slug: "the-role-of-breath-in-yoga",
    title: "The Role of Breath in Yoga: Regulating the Subtle Current",
    excerpt:
      "Understanding the neurobiology of pranayama, the dialogue between breath cadence and the vagus nerve, and simple breathing practices to anchor presence.",
    category: "Pranayama",
    date: "October 08, 2026",
    readTime: "5 min read",
    author: {
      name: "Meera Nair",
      role: "Pranayama & Yin Guide",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=400&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands in mudra during seated pranayama in natural light",
    featured: false,
    content: [
      "Patanjali observed thousands of years ago that the fluctuations of the mind ('citta vritti') and the rhythm of the breath ('prana') are inextricably coupled. Wherever the breath wanders, the mind follows; when the breath is steady, the mind becomes still.",
      "Modern autonomic neuroscience confirms this ancient insight. When we lengthen the exhalation relative to the inhalation—such as in a 1:2 ratio—we stimulate the vagal nerve complex, activating the parasympathetic branch of the nervous system. The heart rate slows, arterial tension softens, and cortisol synthesis drops.",
      "During physical asana, breath serves as our internal diagnostic meter. The moment our breath turns shallow, ragged, or held, we have moved beyond yoga into ego-driven strain. By choosing to back out of a posture until the breath flows like clear water, we cultivate discernment (viveka).",
      "Begin each day with three minutes of Nadi Shodhana (Alternate Nostril Breathing). Inhale gently through the left nostril, pause at the crest of the breath, and exhale smoothly through the right. This simple practice bridges the hemispheres of the brain, settling the nervous system into harmonious equilibrium before the world wakes up.",
    ],
  },
  {
    slug: "finding-stillness-through-meditation",
    title: "Finding Stillness Through Meditation: Resting as the Witness",
    excerpt:
      "Meditation is not about eliminating thought, but learning to rest as the open sky through which all passing weather moves without friction.",
    category: "Mindfulness",
    date: "September 29, 2026",
    readTime: "7 min read",
    author: {
      name: "David Moreau",
      role: "Movement & Meditation Facilitator",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Peaceful quiet meditation room with sunlight filtering through blinds",
    featured: false,
    content: [
      "The most common misconception newcomers bring to meditation is: 'My mind is too loud; I cannot stop my thoughts.' In yogic psychology, trying to forcefully stop the mind is like trying to smooth turbulent water with an iron—it only creates more disturbance.",
      "The meditative stance is not one of suppression, but of gentle witnessing (Sakshi Bhava). You do not need to silence the birds outside the window, nor the waves breaking against the sand, nor the thoughts floating across your awareness. You simply change your relationship to them: you stop hitching your identity to every passing cognitive cloud.",
      "When you sit in Mandrem at dusk, listening to the cicadas and the whisper of coconut palms, notice the quiet space in which all sounds occur. That boundless, welcoming stillness is not something you fabricate; it is already present, waiting underneath the surface noise of the everyday intellect.",
      "Start with five minutes of effortless sitting. Feel the touch of the mat beneath your sit bones, the cool air at the rim of your nostrils, and the warm rise of your chest. Whenever you notice you've wandered into a narrative of past or future, smile inwardly, release the story without judgment, and return home to this single breath.",
    ],
  },
  {
    slug: "the-rhythm-of-goa-retreat-living",
    title: "The Rhythm of Goa Retreat Living: Why Nature Heals",
    excerpt:
      "How immersing yourself in Mandrem's coastal sanctuary resets circadian rhythms, softens sensory overload, and invites genuine presence.",
    category: "Goa Living",
    date: "September 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Ananya Sharma",
      role: "Lead Hatha Instructor",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mandrem beach shoreline at golden sunset",
    featured: false,
    content: [
      "There is an unmistakable alchemy in Goa that cannot be replicated in city studios. The combination of salt-rich sea breezes, coconut canopy shadows, and the absence of sirens creates an immediate downward shift in the sympathetic nervous system.",
      "At Yogi Goals, our retreat philosophy honors the natural diurnal cycle. We wake with the first golden light over the palms for pranayama and meditation, nourish the body with fresh seasonal tropical fruits and Ayurvedic herbs, and spend the afternoon hours resting or journaling by the shore.",
      "When we remove constant digital notifications and artificial blue light, our melatonin production realigns with natural sunset and dusk. Guests frequently remark that their deepest sleep in years occurs within forty-eight hours of arriving in Goa.",
      "Whether you join us for a week-long immersion or a brief weekend workshop, the goal is always the same: to step out of reactive urgency, remember your natural rhythm, and return to your daily life renewed from within.",
    ],
  },
];
