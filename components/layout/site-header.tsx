"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Sync mobile menu close upon route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && href === "/#about";
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md",
        scrolled
          ? "bg-[#FAF8F5]/95 border-b border-border shadow-xs py-3"
          : "bg-[#FAF8F5]/90 border-b border-border/60 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-forest group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-sm"
          aria-label="Yogi Goals - Home"
        >
          <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-serif text-lg font-bold transition-transform group-hover:scale-105 shadow-xs">
            <span>Y</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight font-bold text-forest leading-none">
              Yogi Goals
            </span>
            <span className="text-[10px] uppercase tracking-widest text-forest-light font-sans font-bold mt-0.5">
              Goa • India
            </span>
          </div>
        </Link>

        {/* Desktop Horizontal Navigation (Exact ordered items) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Primary Navigation"
        >
          {siteConfig.navigation.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-1",
                  active
                    ? "text-forest font-bold border-b-2 border-forest"
                    : "text-[#2B382E] hover:text-forest hover:bg-sand/40"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#programs"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-md bg-forest text-white hover:bg-forest-light transition-all shadow-xs hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            Explore Programs
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-forest hover:bg-sand/40 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-ivory border-b border-sand shadow-lg max-h-[calc(100vh-65px)] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 flex flex-col space-y-1">
            <div className="pb-3 mb-2 border-b border-sand/60">
              <span className="text-xs uppercase tracking-widest font-semibold text-sage-dark">
                Navigation Menu
              </span>
            </div>
            {siteConfig.navigation.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-3 text-sm font-medium tracking-wide transition-colors rounded-md flex items-center justify-between",
                    active
                      ? "bg-sand/50 text-forest font-semibold"
                      : "text-charcoal hover:bg-sand/30 hover:text-forest"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.title}</span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                  )}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-sand/60 flex flex-col gap-2.5">
              <Link
                href="/#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs uppercase tracking-wider font-semibold rounded-md bg-forest text-ivory hover:bg-forest-light transition-colors"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs uppercase tracking-wider font-semibold rounded-md border border-forest text-forest hover:bg-sand/40 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
