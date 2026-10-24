export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface ScheduleItem {
  id: string;
  day: WeekDay;
  time: string;
  className: string;
  instructor: string;
  format: "Open-Air Shala" | "Beach Deck" | "Garden Pavilion" | "Online Hybrid";
  intensity: "Gentle" | "Moderate" | "Vigorous";
  duration: string;
  description: string;
}

export const daysOfWeek: WeekDay[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const sampleSchedule: ScheduleItem[] = [
  // Monday
  {
    id: "mon-1",
    day: "Monday",
    time: "07:00 AM – 08:15 AM",
    className: "Classical Hatha Yoga",
    instructor: "Ananya Sharma",
    format: "Open-Air Shala",
    intensity: "Moderate",
    duration: "75 min",
    description: "Centering morning practice with steady holds and mindful breath synchronization.",
  },
  {
    id: "mon-2",
    day: "Monday",
    time: "09:00 AM – 10:15 AM",
    className: "Dynamic Vinyasa Flow",
    instructor: "David Moreau",
    format: "Garden Pavilion",
    intensity: "Vigorous",
    duration: "75 min",
    description: "Invigorating sequences linking breath to movement for strength and balance.",
  },
  {
    id: "mon-3",
    day: "Monday",
    time: "05:30 PM – 06:45 PM",
    className: "Sunset Yin & Sound Bath",
    instructor: "Meera Nair",
    format: "Beach Deck",
    intensity: "Gentle",
    duration: "75 min",
    description: "Deep fascial release accompanied by resonant Tibetan singing bowl vibrations.",
  },

  // Tuesday
  {
    id: "tue-1",
    day: "Tuesday",
    time: "07:00 AM – 08:30 AM",
    className: "Ashtanga Primary Guided",
    instructor: "David Moreau",
    format: "Open-Air Shala",
    intensity: "Vigorous",
    duration: "90 min",
    description: "Structured traditional series focusing on Ujjayi breath, Bandhas, and Drishti.",
  },
  {
    id: "tue-2",
    day: "Tuesday",
    time: "09:00 AM – 10:00 AM",
    className: "Gentle Somatic Flow",
    instructor: "Ananya Sharma",
    format: "Garden Pavilion",
    intensity: "Gentle",
    duration: "60 min",
    description: "Slow-paced mindful movement targeting spinal mobility and joint ease.",
  },
  {
    id: "tue-3",
    day: "Tuesday",
    time: "05:30 PM – 06:45 PM",
    className: "Pranayama & Seated Meditation",
    instructor: "Meera Nair",
    format: "Open-Air Shala",
    intensity: "Gentle",
    duration: "75 min",
    description: "Traditional breath regulation techniques followed by quiet guided mindfulness.",
  },

  // Wednesday
  {
    id: "wed-1",
    day: "Wednesday",
    time: "07:00 AM – 08:15 AM",
    className: "Classical Hatha Yoga",
    instructor: "Ananya Sharma",
    format: "Open-Air Shala",
    intensity: "Moderate",
    duration: "75 min",
    description: "Alignment-centric posture practice to balance solar and lunar bodily energies.",
  },
  {
    id: "wed-2",
    day: "Wednesday",
    time: "09:00 AM – 10:15 AM",
    className: "Vinyasa Core & Mobility",
    instructor: "David Moreau",
    format: "Online Hybrid",
    intensity: "Vigorous",
    duration: "75 min",
    description: "Grounding flow integrating core stability, hip opening, and conscious transitions.",
  },
  {
    id: "wed-3",
    day: "Wednesday",
    time: "05:30 PM – 06:45 PM",
    className: "Restorative Yoga & Yoga Nidra",
    instructor: "Meera Nair",
    format: "Garden Pavilion",
    intensity: "Gentle",
    duration: "75 min",
    description: "Supported floor postures followed by psychic sleep relaxation for nervous system rest.",
  },

  // Thursday
  {
    id: "thu-1",
    day: "Thursday",
    time: "07:00 AM – 08:30 AM",
    className: "Ashtanga Transitions & Arm Balances",
    instructor: "David Moreau",
    format: "Open-Air Shala",
    intensity: "Vigorous",
    duration: "90 min",
    description: "Workshop-style exploratory flow for steady arm balances and weight shifting.",
  },
  {
    id: "thu-2",
    day: "Thursday",
    time: "09:00 AM – 10:00 AM",
    className: "Morning Breathwork Sadhana",
    instructor: "Meera Nair",
    format: "Beach Deck",
    intensity: "Gentle",
    duration: "60 min",
    description: "Energizing Kapalabhati, Bhastrika, and calming Nadi Shodhana by the sea.",
  },
  {
    id: "thu-3",
    day: "Thursday",
    time: "05:30 PM – 06:45 PM",
    className: "Gentle Hatha Flow",
    instructor: "Ananya Sharma",
    format: "Open-Air Shala",
    intensity: "Moderate",
    duration: "75 min",
    description: "Unwinding evening sequence easing shoulder and hip tension accumulated through the day.",
  },

  // Friday
  {
    id: "fri-1",
    day: "Friday",
    time: "07:00 AM – 08:15 AM",
    className: "Sunrise Prana Flow",
    instructor: "David Moreau",
    format: "Beach Deck",
    intensity: "Moderate",
    duration: "75 min",
    description: "Fluid morning salutations bathed in golden coastal morning light.",
  },
  {
    id: "fri-2",
    day: "Friday",
    time: "09:00 AM – 10:15 AM",
    className: "Spine & Hip Alignment Lab",
    instructor: "Ananya Sharma",
    format: "Open-Air Shala",
    intensity: "Moderate",
    duration: "75 min",
    description: "Detailed biomechanical cues with strap and block support for spinal decompression.",
  },
  {
    id: "fri-3",
    day: "Friday",
    time: "05:30 PM – 07:00 PM",
    className: "Candlelight Yin & Singing Bowls",
    instructor: "Meera Nair",
    format: "Garden Pavilion",
    intensity: "Gentle",
    duration: "90 min",
    description: "A restorative weekend unwinding ritual surrounded by warm light and healing frequencies.",
  },

  // Saturday
  {
    id: "sat-1",
    day: "Saturday",
    time: "07:30 AM – 09:00 AM",
    className: "Community Weekend Masterclass",
    instructor: "Ananya & David",
    format: "Open-Air Shala",
    intensity: "Moderate",
    duration: "90 min",
    description: "Co-taught mixed-level celebration exploring breath, rhythm, and partner assists.",
  },
  {
    id: "sat-2",
    day: "Saturday",
    time: "10:30 AM – 12:00 PM",
    className: "Yoga Philosophy & Satsang",
    instructor: "Rohan Deshmukh",
    format: "Garden Pavilion",
    intensity: "Gentle",
    duration: "90 min",
    description: "Open inquiry circle into Patanjali's Ashtanga philosophy with chai and discourse.",
  },
  {
    id: "sat-3",
    day: "Saturday",
    time: "05:30 PM – 06:45 PM",
    className: "Sunset Beach Meditation",
    instructor: "Meera Nair",
    format: "Beach Deck",
    intensity: "Gentle",
    duration: "75 min",
    description: "Witnessing sunset over the Arabian Sea with gentle grounding and silent seated contemplation.",
  },

  // Sunday
  {
    id: "sun-1",
    day: "Sunday",
    time: "08:00 AM – 09:30 AM",
    className: "Sunday Slow Flow & Pranayama",
    instructor: "Ananya Sharma",
    format: "Open-Air Shala",
    intensity: "Gentle",
    duration: "90 min",
    description: "Unhurried mindful movement restoring clarity and energy for the coming week.",
  },
  {
    id: "sun-2",
    day: "Sunday",
    time: "05:00 PM – 06:30 PM",
    className: "Sound Healing & Deep Nidra",
    instructor: "Meera Nair",
    format: "Garden Pavilion",
    intensity: "Gentle",
    duration: "90 min",
    description: "Sensory stillness journey using Tibetan gong, Koshi chimes, and deep guided sleep meditation.",
  },
];
