export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "yttc" | "general" | "practical";
}

export const sampleFAQs: FAQItem[] = [
  {
    id: "faq-yttc-1",
    question: "What prior experience is recommended before joining the 200-Hour YTTC?",
    answer:
      "We recommend a minimum of 6 to 12 months of consistent personal yoga practice before undertaking our foundational 200-Hour training. This ensures your body is acclimated to basic posture alignment and ready for intensive daily sadhana. Both eager students wishing to teach and practitioners seeking personal depth are warmly welcomed.",
    category: "yttc",
  },
  {
    id: "faq-yttc-2",
    question: "What style of yoga is taught during the teacher training in Goa?",
    answer:
      "Our curriculum integrates Classical Hatha foundations with mindful Vinyasa sequencing. You will study functional alignment, skeletal variation, breath-movement mechanics, Patanjali's Yoga Sutras, subtle anatomy (pranayama and chakras), and hands-on adjustments with compassionate communication.",
    category: "yttc",
  },
  {
    id: "faq-yttc-3",
    question: "What is included in the residential tuition fee?",
    answer:
      "Residential tuition includes 24 nights accommodation at our partner eco-resort in Mandrem, three organic sattvic vegetarian meals daily (except Sundays), complete training manual binders, mats and props for practice, and all guided weekend cultural excursions.",
    category: "yttc",
  },
  {
    id: "faq-yttc-4",
    question: "Is certification guaranteed upon course completion?",
    answer:
      "Certification is awarded upon successful completion of all required attendance hours, passing the written anatomy and philosophy exam, and demonstrating competent, safe teaching methodology during peer practicums. (Note: This is illustrative demo curriculum information for demonstration purposes).",
    category: "yttc",
  },
  {
    id: "faq-gen-1",
    question: "Do I need to book drop-in classes in advance?",
    answer:
      "While drop-in practitioners are welcome, we recommend reserving your spot 24 hours in advance via WhatsApp or our contact form, particularly during peak coastal season (November through March), as our shala accommodates a maximum of 18 students to ensure personal attention.",
    category: "general",
  },
  {
    id: "faq-gen-2",
    question: "Where exactly in Goa is Yogi Goals located?",
    answer:
      "We are situated in Mandrem, North Goa, approximately a 7-minute walk from the quiet Mandrem beach shore. The location offers a peaceful sanctuary surrounded by coconut groves while remaining easily accessible from Dabolim (GOI) and Manohar Mopa (GOX) international airports.",
    category: "practical",
  },
];
