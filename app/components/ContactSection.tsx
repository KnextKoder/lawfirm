import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-brand-blue uppercase mb-4 sm:mb-5 flex items-center gap-2">
              <span>Speak With Us</span>
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.15] tracking-tight">
              Discuss your matter with our team.
            </h2>

            <p className="mt-6 sm:mt-8 text-brand-navy/75 text-[15px] sm:text-base leading-relaxed max-w-xl font-normal">
              Whether you require representation in a dispute, assistance with a property or recovery matter, advice on a commercial transaction, or ongoing institutional legal support, our team is available to discuss your requirements.
            </p>
          </div>

          {/* Right Column: Contact Channels with Clear Visual Hierarchy */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* 1. Primary Action: Direct Call (Deep Navy with Gold Border) */}
            <a
              href="tel:+2348037125633"
              className="group flex items-center justify-between px-7 py-5 sm:py-5.5 bg-brand-navy hover:bg-brand-blue active:bg-brand-navy text-white rounded-xs transition-all duration-150 shadow-sm hover:shadow border border-brand-gold/40"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-wide">
                Call +234 803 712 5633
              </span>
              <svg
                className="w-4 h-4 text-brand-gold group-hover:text-white group-hover:translate-x-1 transition-all duration-150 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            {/* 2. Secondary Action: Written Enquiry */}
            <Link
              href="/contact"
              className="group flex items-center justify-between px-7 py-5 sm:py-5.5 bg-white hover:bg-slate-50/80 active:bg-slate-100 border border-brand-gold/30 hover:border-brand-gold text-brand-navy rounded-xs transition-all duration-150"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-wide">
                Send a written enquiry
              </span>
              <svg
                className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform duration-150 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
