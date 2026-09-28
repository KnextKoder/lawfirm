import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-navy overflow-hidden py-12 sm:py-16 lg:py-18 text-white border-b border-brand-gold/30">
      {/* Giant Semi-Transparent Watermark Emblem on Right Background */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden pointer-events-none select-none flex items-center justify-end pr-0 sm:pr-4 lg:pr-8"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 80"
          className="h-[140%] sm:h-[160%] lg:h-[200%] w-auto text-white opacity-[0.055] transform translate-x-8 sm:translate-x-12 translate-y-4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Foundation Plinth */}
          <path d="M 6 72 Q 50 63 94 72 L 96 66 Q 50 56 4 66 Z" />
          {/* Left Stem */}
          <path d="M 12 18 L 30 18 L 30 24 L 25 24 L 25 64 L 31 64 L 31 70 L 8 70 L 8 64 L 14 64 L 14 24 L 9 24 L 9 18 Z" />
          {/* Right Stem */}
          <path d="M 70 18 L 88 18 L 88 24 L 83 24 L 83 64 L 89 64 L 89 70 L 66 70 L 66 64 L 72 64 L 72 24 L 67 24 L 67 18 Z" />
          {/* Crossbar */}
          <path d="M 25 38 L 72 38 L 72 64 L 25 64 Z" />
          {/* S */}
          <text
            x="50"
            y="34"
            textAnchor="middle"
            fontFamily="var(--font-serif), Georgia, serif"
            fontSize="28"
            fontWeight="700"
          >
            S
          </text>
          {/* C */}
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontFamily="var(--font-serif), Georgia, serif"
            fontSize="24"
            fontWeight="700"
          >
            C
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Breadcrumb & Page Heading */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/60 mb-6 sm:mb-8"
            >
              <Link
                href="/"
                className="hover:text-brand-blue transition-colors duration-150"
              >
                Home
              </Link>
              <span className="text-brand-gold/70 font-normal">/</span>
              <span className="text-brand-gold">Contact</span>
            </nav>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08]">
              Contact the firm
            </h1>
          </div>

          {/* Right Column: Narrative Statement */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end pb-1 lg:pb-2">
            <p className="text-white/80 text-base sm:text-lg lg:text-[1.0625rem] leading-relaxed max-w-xl font-normal">
              Representation, advice on a transaction or property matter,
              <br className="hidden lg:inline" /> assistance with recovery, or institutional support &mdash; contact our
              <br className="hidden lg:inline" /> office to discuss your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
