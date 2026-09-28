"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
        fill="#1a2d52"
      />

      {/* Main Navy 'H' Structure */}
      {/* Left Column of H */}
      <path
        d="M 12 18 L 30 18 L 30 24 L 25 24 L 25 64 L 31 64 L 31 70 L 8 70 L 8 64 L 14 64 L 14 24 L 9 24 L 9 18 Z"
        fill="#1a2d52"
      />

      {/* Right Column of H */}
      <path
        d="M 70 18 L 88 18 L 88 24 L 83 24 L 83 64 L 89 64 L 89 70 L 66 70 L 66 64 L 72 64 L 72 24 L 67 24 L 67 18 Z"
        fill="#1a2d52"
      />

      {/* Crossbar of H with navy backdrop for the lower segment */}
      <path
        d="M 25 38 L 72 38 L 72 64 L 25 64 Z"
        fill="#1a2d52"
      />

      {/* Sky Blue 'S' nestled in the upper portion */}
      <text
        x="50"
        y="34"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="28"
        fontWeight="700"
        fill="#2997d8"
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
export function HSCBrandLogo({ logoSrc }: { logoSrc?: string }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3.5 sm:gap-4 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2d52]/30 rounded-sm"
      aria-label="Habeeb Salawu Chambers - Home"
    >
      {/* Emblem / Logo Graphic Placeholder */}
      <div className="shrink-0 flex items-center justify-center">
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt="Habeeb Salawu Chambers Logo"
            className="h-11 sm:h-13 w-auto object-contain"
          />
        ) : (
          <HSCLogoEmblem className="h-11 sm:h-13 w-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]" />
        )}
      </div>

      {/* Thin Vertical Divider */}
      <div
        className="h-10 sm:h-11 w-[1.5px] bg-[#cbd5e1] shrink-0"
        aria-hidden="true"
      />

      {/* Firm Typography */}
      <div className="flex flex-col justify-center select-none">
        <span className="font-serif text-[1.18rem] sm:text-[1.38rem] md:text-[1.48rem] font-semibold tracking-[-0.015em] text-[#1b2f56] leading-[1.18] group-hover:text-[#122240] transition-colors">
          Habeeb Salawu Chambers
        </span>
        <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-semibold tracking-[0.24em] sm:tracking-[0.28em] text-[#4b586e] uppercase leading-none mt-1 sm:mt-1.5">
          Barristers &amp; Solicitors
        </span>
      </div>
    </Link>
  );
}

export default function Navbar({ logoSrc, activePath }: NavbarProps) {
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
    { label: "The Firm", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${isScrolled
          ? "border-b border-slate-200/90 shadow-[0_4px_20px_rgba(20,35,65,0.06)]"
          : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-19 sm:h-21 md:h-22.5">
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
                  className={`group relative py-2 text-[15px] font-medium transition-colors duration-150 ${isActive
                      ? "text-[#1b2f56] font-semibold"
                      : "text-[#2b3a51] hover:text-[#16274a]"
                    }`}
                >
                  {link.label}
                  {/* Subtle active/hover line indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#1d8cd7] transition-all duration-200 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1a2d52] hover:bg-[#12203d] active:bg-[#0c162b] text-white text-[14px] font-medium tracking-wide rounded-xs shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1a2d52]"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1b2f56] hover:bg-slate-50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a2d52]/20 transition-colors"
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
        <div className="lg:hidden fixed inset-x-0 top-19 sm:top-21 md:top-22.5 bottom-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity">
          <div className="bg-white border-b border-slate-200 shadow-xl px-5 pt-4 pb-8 space-y-4 max-h-[calc(100vh-90px)] overflow-y-auto">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-base font-medium text-[#24334f] hover:text-[#14233e] hover:bg-slate-50/80 px-2 rounded transition-colors"
                >
                  <span>{link.label}</span>
                  <svg
                    className="w-4 h-4 text-slate-400"
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
                className="w-full flex items-center justify-center py-3.5 px-6 bg-[#1a2d52] hover:bg-[#12203d] active:bg-[#0c162b] text-white text-[15px] font-medium tracking-wide rounded-xs shadow-sm transition-colors text-center"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Quick Contact Info in Mobile Menu */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <p className="font-semibold text-slate-700 uppercase tracking-wider text-[11px]">
                Habeeb Salawu Chambers
              </p>
              <p>Legal Counsel &bull; Dispute Resolution &bull; Corporate Law</p>
              <p className="text-slate-600">Tel: +234 (0) 800-CHAMBERS</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
