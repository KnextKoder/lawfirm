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
      className="relative w-full bg-white border-b border-brand-navy/10 overflow-hidden"
    >
      <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-90px)]">
        {/* 1. Left Vertical Masthead Rail (Desktop A&O Shearman Signature Branding) */}
        <aside
          aria-label="Firm Masthead"
          className="hidden lg:flex flex-col justify-between items-center py-10 px-4 xl:px-6 select-none w-20 xl:w-24 shrink-0 bg-white border-r border-brand-navy/10 z-30"
        >
          {/* Top Gold Accent Bar */}
          <div className="w-1 h-8 bg-brand-gold" aria-hidden="true" />

          {/* Rotated Vertical Firm Name */}
          <div className="h-full flex items-center justify-center my-auto">
            <span
              className="-rotate-90 origin-center whitespace-nowrap text-2xl xl:text-[1.75rem] font-serif font-bold tracking-[0.26em] uppercase text-brand-navy"
              style={{ letterSpacing: "0.26em" }}
            >
              HABEEB SALAWU
            </span>
          </div>

          {/* Bottom Chambers Monogram / Subtitle */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-brand-blue">
              CHAMBERS
            </span>
            <span className="w-4 h-0.5 bg-brand-gold/50" aria-hidden="true" />
          </div>
        </aside>

        {/* 2. Main Stage Container */}
        <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-10 xl:px-16 py-8 sm:py-12 lg:py-14 lg:mr-16 xl:mr-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-14 items-center">
              {/* Center-Left: Framed Visual Exhibition Stage */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
                <div className="group relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-4/4.5 sm:aspect-[4/4.6] lg:aspect-[4/4.7] xl:aspect-[4/4.8] bg-brand-navy overflow-hidden shadow-[0_16px_40px_rgba(10,27,51,0.08)]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/side columns.jpeg"
                      alt="Habeeb Salawu Chambers Architectural Columns"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-brand-navy/40 via-transparent to-black/10 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Subtle Gold Corner Accents */}
                  <div
                    className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-brand-gold/70"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-brand-gold/70"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Center-Right: Editorial Story Stage */}
              <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center">
                <div>
                  {/* Category Eyebrow */}
                  <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-brand-blue uppercase mb-3 sm:mb-4 flex items-center gap-2.5">
                    <span>LEGAL PRACTICE · EST. 2007</span>
                  </p>

                  {/* High-Impact Editorial Serif Headline */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-serif font-bold text-brand-navy tracking-tight leading-[1.12]">
                    Experienced Legal Counsel. Strategic Representation. Practical Solutions.
                  </h1>

                  {/* Narrative Description Subtitle */}
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-brand-navy/80 font-sans leading-relaxed max-w-xl font-normal">
                    Habeeb Salawu Chambers is a full-service Nigerian law firm with over 19 years of experience providing legal representation and advisory services to government institutions, financial institutions, corporate organisations and private clients.
                  </p>

                  {/* Call To Actions */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                    <Link
                      href="/practice-areas"
                      className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      Explore Our Practice
                    </Link>
                  </div>
                </div>
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
