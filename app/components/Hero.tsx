"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // curtainPhase: "covering" (initial screen cover) -> "revealing" (wiping right) -> "docked" (settled into right rail)
  const [curtainPhase, setCurtainPhase] = useState<"covering" | "revealing" | "docked">("covering");

  // Trigger the dramatic A&O Shearman wipe curtain reveal on initial load / reload
  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setCurtainPhase("revealing");
    }, 180);

    const dockTimer = setTimeout(() => {
      setCurtainPhase("docked");
    }, 1550);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(dockTimer);
    };
  }, []);

  return (
    <section
      aria-label="Firm Overview & Insights"
      className="relative w-full bg-brand-navy border-b border-brand-gold/30 overflow-hidden"
    >
      <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-90px)]">
        {/* 1. Left Vertical Masthead Rail (Desktop A&O Shearman Signature Branding) */}
        <aside
          aria-label="Firm Masthead"
          className="hidden lg:flex flex-col justify-between items-center py-10 px-4 xl:px-6 select-none w-20 xl:w-24 shrink-0 bg-brand-navy/95 backdrop-blur-sm border-r border-brand-gold/30 z-30"
        >
          {/* Top Gold Accent Bar */}
          <div className="w-1 h-8 bg-brand-gold" aria-hidden="true" />

          {/* Rotated Vertical Firm Name */}
          <div className="h-full flex items-center justify-center my-auto">
            <span
              className="-rotate-90 origin-center whitespace-nowrap text-2xl xl:text-[1.75rem] font-serif font-bold tracking-[0.26em] uppercase text-white"
              style={{ letterSpacing: "0.26em" }}
            >
              HABEEB SALAWU
            </span>
          </div>

          {/* Bottom Chambers Monogram / Subtitle */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-brand-gold">
              CHAMBERS
            </span>
            <span className="w-4 h-0.5 bg-brand-gold/50" aria-hidden="true" />
          </div>
        </aside>

        {/* 2. Main Stage Container with Full-Bleed Background Image & Overlaid Text */}
        <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
          {/* Full-Bleed Background Neoclassical Columns Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/columns.jpeg"
              alt="Habeeb Salawu Chambers Legal Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
            {/* Multi-layered cinematic gradient overlay */}
            <div
              className="absolute inset-0 bg-linear-to-r from-brand-navy/85 via-brand-navy/55 to-brand-navy/30 lg:via-brand-navy/50 lg:to-brand-navy/15"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-navy/95 via-transparent to-brand-navy/60"
              aria-hidden="true"
            />
          </div>

          {/* Overlaid Typography Stage */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-14 lg:mr-16 xl:mr-20">
            <div className="max-w-3xl">
              {/* Category Eyebrow */}
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.24em] text-brand-gold uppercase mb-2.5 sm:mb-3.5 flex items-center gap-2.5">
                <span>Legal Practice · Est. 2007</span>
              </p>

              {/* High-Impact Editorial Serif Headline in white */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-serif font-bold text-white tracking-tight leading-[1.12]">
                Experienced Legal Counsel.{" "}
                <span className="text-slate-200 font-normal italic font-serif">
                  Strategic Representation. Practical Solutions.
                </span>
              </h1>

              {/* Narrative Description Subtitle */}
              <p className="mt-3.5 sm:mt-4.5 text-[15px] sm:text-base md:text-lg text-slate-200/90 font-sans leading-relaxed max-w-2xl font-normal">
                Habeeb Salawu Chambers is a full-service Nigerian law firm with over 19 years of experience providing legal representation and advisory services to government institutions, financial institutions, corporate organisations and private clients.
              </p>

              {/* Call To Actions */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-gold hover:bg-white hover:text-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-200 border border-brand-gold/60 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Explore Our Practice
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border-l-[3px] border-brand-gold pl-4 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors duration-200">
                    Contact the Firm
                  </span>
                  <span className="inline-flex items-center text-brand-gold group-hover:translate-x-1.5 transition-all duration-300 ease-out">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          <aside
            aria-label="Next Story & Navigation"
            className={`absolute top-0 bottom-0 right-0 z-20 bg-brand-navy text-white select-none border-l-[3px] border-brand-gold overflow-hidden transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              curtainPhase === "covering"
                ? "left-0"
                : "left-full lg:left-[calc(100%-4rem)] xl:left-[calc(100%-5rem)]"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
