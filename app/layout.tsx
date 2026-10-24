import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActions } from "@/components/floating/floating-actions";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yogi Goals — Mindful Yoga & Teacher Training in Goa, India",
    template: "%s | Yogi Goals Goa",
  },
  description:
    "Discover mindful yoga classes, transformative 200-hour and 300-hour teacher training, and peaceful yoga retreats in Goa, India. Connect with nature and practice with intention.",
  keywords: [
    "Yoga in Goa",
    "Yogi Goals",
    "Goa Yoga Teacher Training",
    "YTTC Goa",
    "Yoga Retreats India",
    "Hatha Yoga",
    "Vinyasa Flow",
    "Mindfulness Meditation Goa",
  ],
  authors: [{ name: "Yogi Goals" }],
  creator: "Yogi Goals",
  metadataBase: new URL("https://yogigoals-goa.example"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yogigoals-goa.example",
    title: "Yogi Goals — Mindful Yoga & Teacher Training in Goa",
    description:
      "Find balance in the coastal stillness of Goa. Mindful yoga courses, certified teacher trainings, and peaceful retreats.",
    siteName: "Yogi Goals",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Yogi Goals - Yoga practice in peaceful natural surroundings in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogi Goals — Mindful Yoga & Teacher Training in Goa",
    description:
      "Find balance in the coastal stillness of Goa. Mindful yoga courses, certified teacher trainings, and peaceful retreats.",
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#203B2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        cormorant.variable,
        plusJakarta.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-sand selection:text-forest">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-ivory focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
