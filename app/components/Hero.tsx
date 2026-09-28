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
  secondaryCtaText: string;
  secondaryCtaLink: string;
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
    secondaryCtaText: "Contact the Firm",
    secondaryCtaLink: "/contact",
    image: "/assets/side columns.jpeg",
    alt: "Habeeb Salawu Chambers",
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
      className="relative w-full bg-white border-b border-brand-gold/30 overflow-hidden"
    >
      <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-84px)] lg:min-h-180 xl:min-h-190">
        {/* 1. Left Vertical Masthead Rail (Desktop A&O Shearman Signature Branding) */}
        <aside
          aria-label="Firm Masthead"
          className="hidden lg:flex flex-col justify-between items-center py-10 px-4 xl:px-6 select-none w-20 xl:w-24 shrink-0 bg-white z-30"
        >
          {/* Top Gold Accent Bar */}
          <div className="w-1 h-8 bg-brand-gold" aria-hidden="true" />

          {/* Rotated Vertical Firm Name (reads upwards, exactly like A&O Shearman) */}
          <div className="h-full flex items-center justify-center my-auto">
            <button
              className="-rotate-90 origin-center whitespace-nowrap text-2xl xl:text-[1.75rem] font-serif font-bold tracking-[0.26em] text-brand-navy uppercase transition-colors focus:outline-none"
              style={{ letterSpacing: "0.26em" }}
            >
              HABEEB SALAWU
            </button>
          </div>

          {/* Bottom Chambers Monogram / Subtitle */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-brand-blue uppercase">
              CHAMBERS
            </span>
            <span className="w-4 h-0.5 bg-brand-gold/50" aria-hidden="true" />
          </div>
        </aside>

        {/* 2. Main Stage Container (Holds Content Stage + Right Rail Dock Space) */}
        <div className="relative flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Editorial Content Stage (Framed Photography + High-Impact Typography) */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-10 xl:px-16 py-10 sm:py-14 lg:py-16 lg:mr-16 xl:mr-20">
            {/* Mobile Top Brand Masthead (< lg) */}
            <div className="lg:hidden flex items-center gap-2.5 mb-6 pb-3 border-b border-brand-navy/10">
              <span className="w-4 h-0.5 bg-brand-gold" aria-hidden="true" />
              <span className="text-xs font-serif font-bold tracking-[0.2em] text-brand-navy uppercase">
                Habeeb Salawu Chambers
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-14 items-center">
              {/* Center-Left: Framed Visual Exhibition Stage */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
                <div className="group relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-4/5 sm:aspect-[4/4.6] lg:aspect-[4/4.8] xl:aspect-[4/4.8] bg-brand-navy overflow-hidden shadow-[0_16px_40px_rgba(10,27,51,0.08)] border border-brand-navy/15">
                  {/* Framed Image with smooth transition and subtle hover zoom */}
                  <div key={currentSlide.id} className="relative w-full h-full animate-hero-scale-in">
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle luxury ambient vignette */}
                    <div
                      className="absolute inset-0 bg-linear-to-t from-brand-navy/40 via-transparent to-black/10 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Subtle Gold Corner Accents evoking classical craftsmanship */}
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
                <div key={currentSlide.id} className="animate-hero-fade-up">
                  {/* Category Eyebrow */}
                  <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-brand-blue uppercase mb-4 sm:mb-6 flex items-center gap-2.5">
                    <span className="w-5 h-0.5 bg-brand-gold shrink-0" aria-hidden="true" />
                    <span>{currentSlide.eyebrow}</span>
                  </p>

                  {/* High-Impact Editorial Serif Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.5rem] font-serif font-bold text-brand-navy tracking-tight leading-[1.08]">
                    {currentSlide.title}
                  </h1>

                  {/* Narrative Description Subtitle */}
                  <p className="mt-5 sm:mt-7 text-base sm:text-lg text-brand-navy/80 font-sans leading-relaxed max-w-xl font-normal">
                    {currentSlide.description}
                  </p>

                  {/* Call To Actions */}
                  <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-5 sm:gap-6">
                    {/* Primary Action Button */}
                    <Link
                      href={currentSlide.ctaLink}
                      className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      {currentSlide.ctaText}
                    </Link>

                    {/* Signature A&O Shearman Vertical Accent Line Link */}
                    <Link
                      href={currentSlide.secondaryCtaLink}
                      className="group inline-flex items-center gap-3 border-l-[3px] border-brand-gold pl-4 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-navy group-hover:text-brand-blue transition-colors duration-200">
                        {currentSlide.secondaryCtaText}
                      </span>
                      <span className="inline-flex items-center text-brand-gold group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-300 ease-out">
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

          {/* 3. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          {/* Starts covering 100% of stage on load/reload, wipes to the right, and docks as the right rail */}
          <aside
            aria-label="Next Story & Navigation"
            className={`absolute top-0 bottom-0 right-0 z-20 bg-brand-navy text-white select-none border-l-[3px] border-brand-gold overflow-hidden transition-all duration-3000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
