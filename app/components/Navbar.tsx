"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  /** Optional custom logo image URL to override the SVG placeholder */
  logoSrc?: string;
  /** Active navigation link href (optional override) */
  activePath?: string;
}

/**
 * High-fidelity vector placeholder for the Habeeb Salawu Chambers (HSC) monogram emblem
 * Matches the deep navy 'H' with curved foundation arch, sky-blue 'S', and white 'C'.
 */
export function HSCLogoEmblem({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Habeeb Salawu Chambers Emblem"
    >
      {/* Curved foundation base / plinth */}
      <path
        d="M 6 72 Q 50 63 94 72 L 96 66 Q 50 56 4 66 Z"
        fill="#0A1B33"
      />

      {/* Main Navy 'H' Structure */}
      {/* Left Column of H */}
      <path
        d="M 12 18 L 30 18 L 30 24 L 25 24 L 25 64 L 31 64 L 31 70 L 8 70 L 8 64 L 14 64 L 14 24 L 9 24 L 9 18 Z"
        fill="#0A1B33"
      />

      {/* Right Column of H */}
      <path
        d="M 70 18 L 88 18 L 88 24 L 83 24 L 83 64 L 89 64 L 89 70 L 66 70 L 66 64 L 72 64 L 72 24 L 67 24 L 67 18 Z"
        fill="#0A1B33"
      />

      {/* Crossbar of H with navy backdrop for the lower segment */}
      <path
        d="M 25 38 L 72 38 L 72 64 L 25 64 Z"
        fill="#0A1B33"
      />

      {/* Light Blue 'S' nestled in the upper portion */}
      <text
        x="50"
        y="34"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="28"
        fontWeight="700"
        fill="#2D6CDF"
        letterSpacing="0"
      >
        S
      </text>

      {/* White 'C' centered in the lower dark field of the crossbar */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="24"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0"
      >
        C
      </text>
    </svg>
  );
}

/**
 * Full Brand Logo Component (Emblem + Divider + Firm Name + Subtitle)
 */
export function HSCBrandLogo({ logoSrc = "/logo.png" }: { logoSrc?: string }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 sm:gap-3.5 md:gap-4 transition-all duration-300 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 rounded-sm"
      aria-label="Habeeb Salawu Chambers - Home"
    >
      {/* Official Brand Logo - Prominently Scaled */}
      <div className="shrink-0 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt="Habeeb Salawu Chambers Logo"
          width={76}
          height={60}
          priority
          className="h-11 sm:h-12.5 md:h-14 lg:h-15.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Gold Divider */}
      <div
        className="h-10 sm:h-11.5 md:h-13 lg:h-14.5 w-0.5 bg-brand-gold shrink-0"
        aria-hidden="true"
      />

      {/* Firm Typography - Bigger, Commanding, Sophisticated */}
      <div className="flex flex-col justify-center select-none">
        <span className="font-serif text-[1.28rem] sm:text-[1.5rem] md:text-[1.72rem] lg:text-[1.92rem] font-bold tracking-[-0.018em] text-brand-navy leading-[1.12] group-hover:text-brand-blue transition-colors">
          Habeeb Salawu Chambers
        </span>
        <span className="text-[9.5px] sm:text-[10.5px] md:text-[11.5px] lg:text-[12px] font-semibold tracking-[0.24em] sm:tracking-[0.28em] md:tracking-[0.32em] text-brand-navy/75 uppercase leading-none mt-1 sm:mt-1.5">
          Barristers &amp; Solicitors
        </span>
      </div>
    </Link>
  );
}

export default function Navbar({ logoSrc = "/logo.png", activePath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentPath = activePath ?? pathname;

  // Monitor scroll position to apply subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Experience", href: "/experience" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled
          ? "border-b border-brand-gold/30 shadow-[0_4px_20px_rgba(10,27,51,0.06)]"
          : "border-b border-brand-gold/15"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-20 sm:h-22 md:h-24 lg:h-25">
          {/* Logo brand area */}
          <HSCBrandLogo logoSrc={logoSrc} />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9"
          >
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== "/" && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative py-2 text-[15px] font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-brand-navy font-semibold"
                      : "text-brand-navy/75 hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                  {/* Active/hover line indicator in Light Blue */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-200 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) in Deep Navy with Gold border & hover light blue */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-brand-navy hover:bg-brand-navy/5 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                // Close icon (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-19 sm:top-21 md:top-22.5 bottom-0 bg-brand-navy/60 backdrop-blur-[3px] z-40 transition-opacity">
          <div className="bg-white border-b border-brand-gold/30 shadow-xl px-5 pt-4 pb-8 space-y-4 max-h-[calc(100vh-90px)] overflow-y-auto">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-1 divide-y divide-brand-gold/15">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-brand-navy hover:text-brand-blue hover:bg-brand-navy/5 px-2 rounded transition-colors"
                >
                  <span>{link.label}</span>
                  <svg
                    className="w-4 h-4 text-brand-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Mobile Call to Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Quick Contact Info in Mobile Menu */}
            <div className="pt-4 border-t border-brand-gold/20 text-xs text-slate-500 space-y-2">
              <p className="font-semibold text-brand-navy uppercase tracking-wider text-[11px]">
                Habeeb Salawu Chambers
              </p>
              <p className="text-brand-navy/70">Legal Counsel &bull; Dispute Resolution &bull; Corporate Law</p>
              <p className="text-brand-navy font-medium">Tel: +234 803 712 5633</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
