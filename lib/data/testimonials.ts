export interface Testimonial {
  id: string;
  name: string;
  location: string;
  program: string;
  quote: string;
  isDemoPlaceholder: boolean;
}

export const sampleTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Rostova",
    location: "Berlin, Germany",
    program: "200-Hour Teacher Training (Demo)",
    quote:
      "The grounding energy of the shala and the meticulous attention to biomechanics gave me both physical confidence and genuine inner quiet. An exceptional teaching team in Mandrem.",
    isDemoPlaceholder: true,
  },
  {
    id: "t2",
    name: "Marcus Lindqvist",
    location: "Stockholm, Sweden",
    program: "7-Day Coastal Reset Retreat (Demo)",
    quote:
      "Waking up to birdsong and practicing asana to the rhythm of ocean waves completely dissolved my city stress. The organic meals and evening sound baths were unforgettable.",
    isDemoPlaceholder: true,
  },
  {
    id: "t3",
    name: "Pooja Hegde",
    location: "Bengaluru, India",
    program: "Regular Hatha & Pranayama Immersion (Demo)",
    quote:
      "Not your typical rushed commercial studio. Yogi Goals honors the authentic roots of yoga with patience, depth, and genuine personal care for every student's journey.",
    isDemoPlaceholder: true,
  },
];
