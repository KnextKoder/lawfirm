"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // curtainPhase: "covering" (initial screen cover) -> "revealing" (wiping right) -> "docked" (settled into right rail)
  const [curtainPhase, setCurtainPhase] = useState<"covering" | "revealing" | "docked">("covering");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev === 0 ? 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev === 0 ? 1 : 0));
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const isLight = currentSlideIndex === 0;

  return (
    <section
      aria-label="Firm Overview & Insights"
      className={`relative w-full border-b transition-colors duration-700 overflow-hidden ${
        isLight ? "bg-white border-brand-navy/10" : "bg-brand-navy border-brand-gold/30"
      }`}
    >
      <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-90px)]">
        {/* 1. Left Vertical Masthead Rail (Desktop A&O Shearman Signature Branding) */}
        <aside
          aria-label="Firm Masthead"
          className={`hidden lg:flex flex-col justify-between items-center py-10 px-4 xl:px-6 select-none w-20 xl:w-24 shrink-0 transition-colors duration-700 z-30 ${
            isLight
              ? "bg-white border-r border-brand-navy/10 text-brand-navy"
              : "bg-brand-navy/95 backdrop-blur-sm border-r border-brand-gold/30 text-white"
          }`}
        >
          {/* Top Gold Accent Bar */}
          <div className="w-1 h-8 bg-brand-gold" aria-hidden="true" />

          {/* Rotated Vertical Firm Name */}
          <div className="h-full flex items-center justify-center my-auto">
            <button
              onClick={nextSlide}
              className={`-rotate-90 origin-center whitespace-nowrap text-2xl xl:text-[1.75rem] font-serif font-bold tracking-[0.26em] uppercase transition-colors focus:outline-none ${
                isLight ? "text-brand-navy" : "text-white"
              }`}
              style={{ letterSpacing: "0.26em" }}
              title="Click to switch view"
            >
              HABEEB SALAWU
            </button>
          </div>

          {/* Bottom Chambers Monogram / Subtitle */}
          <div className="flex flex-col items-center gap-1">
            <span
              className={`text-[10px] font-sans font-bold tracking-[0.25em] uppercase transition-colors ${
                isLight ? "text-brand-blue" : "text-brand-gold"
              }`}
            >
              CHAMBERS
            </span>
            <span className="w-4 h-0.5 bg-brand-gold/50" aria-hidden="true" />
          </div>
        </aside>

        {/* 2. Main Stage Container (Holds Both Slides + Carousel Controls + Docked Rail) */}
        <div className="relative flex-1 flex flex-col justify-center overflow-hidden">
          {/* SLIDE 0: Previous Version (Framed 2-Panel Layout on White Background) */}
          <div
            aria-hidden={!isLight}
            className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-in-out ${
              isLight ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            } bg-white`}
          >
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-10 xl:px-16 py-8 sm:py-12 lg:py-14 lg:mr-16 xl:mr-20 overflow-y-auto lg:overflow-visible">
              {/* Mobile Top Brand Masthead (< lg) */}
              <div className="lg:hidden flex items-center gap-2.5 mb-5 pb-2.5 border-b border-brand-navy/10">
                <span className="w-4 h-0.5 bg-brand-gold" aria-hidden="true" />
                <span className="text-xs font-serif font-bold tracking-[0.2em] text-brand-navy uppercase">
                  Habeeb Salawu Chambers
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-14 items-center">
                {/* Center-Left: Framed Visual Exhibition Stage */}
                <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
                  <div className="group relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-4/4.5 sm:aspect-[4/4.6] lg:aspect-[4/4.7] xl:aspect-[4/4.8] bg-brand-navy overflow-hidden shadow-[0_16px_40px_rgba(10,27,51,0.08)] border border-brand-navy/15">
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
                      <span className="w-5 h-0.5 bg-brand-gold shrink-0" aria-hidden="true" />
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

                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 border-l-[3px] border-brand-gold pl-4 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                      >
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-navy group-hover:text-brand-blue transition-colors duration-200">
                          Contact the Firm
                        </span>
                        <span className="inline-flex items-center text-brand-gold group-hover:text-brand-blue group-hover:translate-x-1.5 transition-all duration-300 ease-out">
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
              </div>
            </div>
          </div>

          {/* SLIDE 1: Current Version (Fullscreen Background Image & Overlaid Text) */}
          <div
            aria-hidden={isLight}
            className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-in-out ${
              !isLight ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            } bg-brand-navy`}
          >
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
              {/* Mobile Top Brand Masthead (< lg) */}
              <div className="lg:hidden flex items-center gap-2.5 mb-5 pb-2.5 border-b border-white/10">
                <span className="w-4 h-0.5 bg-brand-gold" aria-hidden="true" />
                <span className="text-xs font-serif font-bold tracking-[0.2em] text-white uppercase">
                  Habeeb Salawu Chambers
                </span>
              </div>

              <div className="max-w-3xl">
                {/* Category Eyebrow */}
                <p className="text-xs sm:text-[13px] font-normal tracking-[0.24em] text-brand-gold uppercase mb-2.5 sm:mb-3.5 flex items-center gap-2.5">
                  <span className="w-5 h-0.5 bg-brand-gold shrink-0" aria-hidden="true" />
                  <span>Legal Practice · Est. 2007</span>
                </p>

                {/* High-Impact Editorial Serif Headline in white */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-serif font-bold text-white tracking-tight leading-[1.12]">
                  Experienced Legal Counsel.{" "}
                  <span className="text-slate-200 font-normal italic font-serif">
                    Strategic Representation. Practical Solutions.
                  </span>
                </h2>

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
          </div>

          {/* 3. Floating Carousel Navigation Controls */}
          <div
            aria-label="Carousel Navigation"
            className={`absolute bottom-5 sm:bottom-7 right-6 sm:right-10 lg:right-24 xl:right-28 z-30 flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all duration-700 shadow-md ${
              isLight
                ? "bg-white/95 border border-brand-navy/15 text-brand-navy shadow-brand-navy/5"
                : "bg-brand-navy/90 border border-brand-gold/40 text-white shadow-black/30"
            }`}
          >
            <button
              onClick={prevSlide}
              aria-label="Previous View"
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
                isLight
                  ? "border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:bg-brand-gold hover:text-white"
                  : "border-white/20 text-white hover:border-brand-gold hover:bg-brand-gold hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next View"
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
                isLight
                  ? "border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:bg-brand-gold hover:text-white"
                  : "border-white/20 text-white hover:border-brand-gold hover:bg-brand-gold hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pause / Play Button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
                isPaused
                  ? "border-brand-gold text-brand-gold"
                  : isLight
                  ? "border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold"
                  : "border-white/20 text-slate-300 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {isPaused ? (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
          </div>

          {/* 4. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          <aside
            aria-label="Next Story & Navigation"
            role="button"
            tabIndex={0}
            onClick={nextSlide}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") nextSlide();
            }}
            title="Click to toggle hero perspective"
            className={`absolute top-0 bottom-0 right-0 z-20 bg-brand-navy text-white select-none border-l-[3px] border-brand-gold overflow-hidden transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group ${
              curtainPhase === "covering"
                ? "left-0"
                : "left-full lg:left-[calc(100%-4rem)] xl:left-[calc(100%-5rem)]"
            }`}
          >
          </aside>
        </div>
      </div>
    </section>
  );
}
