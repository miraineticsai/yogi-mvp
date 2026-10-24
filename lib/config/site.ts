export interface NavItem {
  title: string;
  href: string;
}

export const siteConfig = {
  name: "Yogi Goals",
  tagline: "Find Your Balance. Discover Your Practice.",
  location: "Goa, India",
  fullLocation: "Mandrem Beach Road, North Goa, 403527, India",
  phonePlaceholder: "+91 98765 43210",
  emailPlaceholder: "namaste@yogigoals-goa.example",
  hoursPlaceholder: "Monday – Sunday: 06:30 AM – 07:30 PM IST",
  
  // WhatsApp configuration
  whatsappNumber: "+919876543210",
  whatsappDefaultMessage:
    "Namaste! I'd like to know more about Yogi Goals yoga programs in Goa.",
  
  // Social links (configurable placeholders)
  socials: {
    instagram: "https://instagram.com/yogi.goals.demo",
    youtube: "https://youtube.com/@yogigoalsdemo",
  },

  // Required exact navigation items in exact order
  navigation: [
    { title: "About", href: "/#about" },
    { title: "YTTC", href: "/yttc" },
    { title: "Courses", href: "/courses" },
    { title: "Instructors", href: "/instructors" },
    { title: "Schedule", href: "/schedule" },
    { title: "Pricing", href: "/pricing" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
};
