"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: "strategy",
    eyebrow: "Legal Practice · Est. 2007",
    title: "Experienced Legal Counsel. Strategic Representation. Practical Solutions.",
    description:
      "Habeeb Salawu Chambers is a full-service Nigerian law firm with over 19 years of experience providing legal representation and advisory services to government institutions, financial institutions, corporate organisations and private clients.",
    ctaText: "Explore Our Practice",
    ctaLink: "/practice-areas",
    image: "/assets/columns.jpeg",
    alt: "Habeeb Salawu Chambers Legal Architecture",
  },
];

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

  const currentSlide = slides[0];

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

          {/* Rotated Vertical Firm Name (reads upwards, exactly like A&O Shearman) */}
          <div className="h-full flex items-center justify-center my-auto">
            <button
              className="-rotate-90 origin-center whitespace-nowrap text-2xl xl:text-[1.75rem] font-serif font-bold tracking-[0.26em] text-white uppercase transition-colors focus:outline-none"
              style={{ letterSpacing: "0.26em" }}
            >
              HABEEB SALAWU
            </button>
          </div>

          {/* Bottom Chambers Monogram / Subtitle */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase">
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
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-105 animate-hero-scale-in"
            />
            {/* Multi-layered cinematic gradient overlay: Deep navy on left where text sits, fading toward the columns on the right */}
            <div
              className="absolute inset-0 bg-linear-to-r from-brand-navy/75 via-brand-navy/40 to-brand-navy/20 lg:via-brand-navy/40 lg:to-brand-navy/0"
              aria-hidden="true"
            />
            {/* Top-and-bottom subtle vignette */}
            <div
              className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-transparent to-brand-navy/50"
              aria-hidden="true"
            />
          </div>

          {/* Editorial Content Stage (Overlaid Typography) */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-16 lg:mr-16 xl:mr-20">
            <div key={currentSlide.id} className="max-w-3xl animate-hero-fade-up">
              {/* Category Eyebrow in gold, regular font, wide letter spacing */}
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.24em] text-brand-gold uppercase mb-2.5 sm:mb-3.5">
                {currentSlide.eyebrow}
              </p>

              {/* High-Impact Editorial Serif Headline in white */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold text-white tracking-tight leading-[1.12]">
                Experienced Legal Counsel.{" "}
                <span className="text-slate-200 font-normal italic font-serif">
                  Strategic Representation. Practical Solutions.
                </span>
              </h1>

              {/* Narrative Description Subtitle */}
              <p className="mt-3.5 sm:mt-4.5 text-[15px] sm:text-base md:text-lg text-slate-200/90 font-sans leading-relaxed max-w-2xl font-normal">
                {currentSlide.description}
              </p>

              {/* Call To Action Button */}
              <div className="mt-5 sm:mt-6.5">
                <Link
                  href={currentSlide.ctaLink}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-gold hover:bg-white hover:text-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-200 border border-brand-gold/60 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  {currentSlide.ctaText}
                </Link>
              </div>
            </div>
          </div>

          {/* 3. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          {/* Starts covering 100% of stage on load/reload, wipes to the right, and docks as the right rail */}
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
