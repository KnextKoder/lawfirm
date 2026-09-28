import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-20 sm:py-24 lg:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-[11.5px] sm:text-xs font-semibold tracking-[0.22em] text-[#1d6ea8] uppercase mb-6">
              Speak With Us
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#141d2e] leading-[1.15] tracking-tight">
              Discuss your matter with our team.
            </h2>

            <p className="mt-6 sm:mt-8 text-slate-600 text-[15px] sm:text-base leading-relaxed max-w-xl font-normal">
              Representation in a dispute, a property or recovery matter, advice on a commercial transaction, or ongoing institutional support &mdash; we will advise on the right approach.
            </p>
          </div>

          {/* Right Column: Contact Channels with Clear Visual Hierarchy */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* 1. Primary Action: Direct Call (Solid Navy) */}
            <a
              href="tel:+2348037125633"
              className="group flex items-center justify-between px-7 py-5 sm:py-5.5 bg-[#1b2b4c] hover:bg-[#14213d] active:bg-[#0d162a] text-white rounded-xs transition-all duration-150 shadow-sm hover:shadow"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-wide">
                Call +234 803 712 5633
              </span>
              <svg
                className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-150 shrink-0"
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

            {/* 2. Secondary Action: WhatsApp (Dark Navy Outlined) */}
            <a
              href="https://wa.me/2348037125633?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20Habeeb%20Salawu%20Chambers."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-7 py-5 sm:py-5.5 bg-white hover:bg-slate-50/80 active:bg-slate-100 border border-[#1b2b4c] text-[#1b2b4c] rounded-xs transition-all duration-150 shadow-sm"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-wide">
                Message on WhatsApp
              </span>
              <svg
                className="w-4 h-4 text-[#1b2b4c] group-hover:translate-x-1 transition-transform duration-150 shrink-0"
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

            {/* 3. Tertiary Action: Written Enquiry (Muted Slate Outlined) */}
            <Link
              href="/contact"
              className="group flex items-center justify-between px-7 py-5 sm:py-5.5 bg-white hover:bg-slate-50/80 active:bg-slate-100 border border-[#ded9cc] text-[#1b2b4c] rounded-xs transition-all duration-150"
            >
              <span className="text-[14.5px] sm:text-[15px] font-medium tracking-wide">
                Send a written enquiry
              </span>
              <svg
                className="w-4 h-4 text-[#1b2b4c] group-hover:translate-x-1 transition-transform duration-150 shrink-0"
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
