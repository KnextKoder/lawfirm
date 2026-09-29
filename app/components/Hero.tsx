"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // curtainPhase: "covering" -> "revealing" -> "docked"
  const [curtainPhase, setCurtainPhase] = useState<"covering" | "revealing" | "docked">("covering");
  // logoStep: "enter" (spring pop from dot in center) -> "slide" (shifts left + text slides out to right) -> "fadeout" -> "hidden"
  const [logoStep, setLogoStep] = useState<"enter" | "slide" | "fadeout" | "hidden">("enter");

  // Orchestrate the exact animation sequence from public/logo animation.mp4 with vertical bottom-to-top reveal
  useEffect(() => {
    // Scroll lock while the logo animation and wipe are playing so the page stays clean
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // 1. At 850ms: Logo shifts left and firm name slides out from behind it (exact logo animation.mp4 choreography)
    const slideTimer = setTimeout(() => {
      setLogoStep("slide");
    }, 850);

    // 2. At 2400ms: Start graceful fadeout of the logo lockup
    const fadeoutTimer = setTimeout(() => {
      setLogoStep("fadeout");
    }, 2400);

    // 3. At 2700ms: Begin vertical bottom-to-top curtain wipe and hero upward entrance
    const revealTimer = setTimeout(() => {
      setLogoStep("hidden");
      setCurtainPhase("revealing");
    }, 2700);

    // 4. At 4500ms (2700ms + 1800ms wipe): Complete wipe, unveil nav, release scroll lock
    const dockTimer = setTimeout(() => {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      setCurtainPhase("docked");
    }, 4500);

    return () => {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      clearTimeout(slideTimer);
      clearTimeout(fadeoutTimer);
      clearTimeout(revealTimer);
      clearTimeout(dockTimer);
    };
  }, []);

  return (
    <>
      {/* 1. FULLSCREEN VERTICAL BOTTOM-TO-TOP WIPE CURTAIN & INTRO */}
      {/* Fixed inset-0 with z-[100] covers the whole screen (including Navbar) during logo & wipe animation */}
      {curtainPhase !== "docked" && (
        <aside aria-label="Firm Curtain & Intro Reveal">
          {/* A. Top Navbar Mask: Keeps the navbar completely hidden (solid white) during the initial logo animation */}
          <div
            className={`fixed top-0 inset-x-0 h-20 sm:h-22 md:h-24 lg:h-25 bg-white z-90 transition-opacity duration-600 ease-out ${curtainPhase === "covering" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            aria-hidden="true"
          />

          {/* B. Hero Wipe Curtain Container: Constrained strictly between navbar bottom and viewport bottom */}
          {/* overflow-hidden ensures the vertical wipe ends PRECISELY where the navbar meets the hero section without covering the navbar */}
          <div
            className="fixed inset-x-0 top-20 sm:top-22 md:top-24 lg:top-25 bottom-0 z-90 overflow-hidden pointer-events-none select-none"
            aria-hidden="true"
          >
            <div
              className={`w-full h-full bg-white transition-transform duration-1800 ease-[cubic-bezier(0.16,1,0.3,1)] ${curtainPhase === "covering"
                  ? "translate-y-0"
                  : "-translate-y-full border-b-[3px] border-brand-gold shadow-[0_25px_60px_rgba(10,27,51,0.3)]"
                }`}
            />
          </div>

          {/* C. Centered Logo Presentation - Exact choreography from public/logo animation.mp4 */}
          {logoStep !== "hidden" && (
            <div
              className={`fixed inset-0 z-100 flex items-center justify-center px-4 transition-all duration-500 ease-out pointer-events-none select-none ${logoStep === "fadeout"
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
                }`}
            >
              <div className="relative flex flex-col items-center justify-center sm:flex-row">
                {/* Subtle Ambient Gold Halo */}
                <div
                  className="absolute -inset-16 bg-radial from-brand-gold/20 via-brand-gold/5 to-transparent blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                {/* 1. Official Logo Emblem - Pops in with spring bounce from tiny center dot, then shifts left on desktop or up on mobile */}
                <div
                  className={`shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${logoStep === "slide"
                      ? "-translate-y-2.5 sm:translate-y-0 sm:-translate-x-4 md:-translate-x-5"
                      : "translate-y-0 translate-x-0"
                    }`}
                >
                  <div className="relative flex items-center justify-center animate-logo-pop">
                    <Image
                      src="/logo.png"
                      alt="Habeeb Salawu Chambers Logo"
                      width={280}
                      height={224}
                      priority
                      className="h-24 min-[380px]:h-28 sm:h-26 md:h-30 lg:h-34 w-auto object-contain drop-shadow-[0_12px_28px_rgba(10,27,51,0.08)]"
                    />
                  </div>
                </div>

                {/* 2. Firm Typography Mask - Slides out vertically below on mobile, horizontally on desktop */}
                <div
                  className={`overflow-hidden flex flex-col items-center sm:flex-row sm:items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${logoStep === "slide"
                      ? "max-h-40 sm:max-h-none max-w-xs min-[400px]:max-w-sm sm:max-w-137.5 opacity-100 pt-2 sm:pt-0 sm:pl-4 md:pl-5"
                      : "max-h-0 sm:max-h-none max-w-0 opacity-0 pt-0 sm:pl-0"
                    }`}
                >
                  {/* Gold Accent Divider Bar - Horizontal on mobile, vertical on desktop */}
                  <div
                    className={`h-0.5 w-12 sm:w-0.5 sm:h-12 md:h-14 lg:h-18 bg-brand-gold shrink-0 my-2 sm:my-0 transition-all duration-500 delay-100 ${logoStep === "slide"
                        ? "scale-100 opacity-100"
                        : "scale-0 sm:scale-y-0 opacity-0"
                      }`}
                    aria-hidden="true"
                  />

                  {/* Firm Name & Subtitle sliding out below on mobile, to the right on desktop */}
                  <div
                    className={`flex flex-col justify-center items-center sm:items-start text-center sm:text-left sm:pl-4 md:pl-5 shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${logoStep === "slide"
                        ? "translate-y-0 sm:translate-x-0 opacity-100"
                        : "-translate-y-4 sm:translate-y-0 sm:-translate-x-10 opacity-0"
                      }`}
                  >
                    <span className="font-serif text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-brand-navy leading-tight whitespace-nowrap">
                      Habeeb Salawu Chambers
                    </span>
                    <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm lg:text-[13px] font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-brand-navy/75 uppercase leading-none mt-1 sm:mt-1.5 whitespace-nowrap">
                      Barristers &amp; Solicitors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* 2. HERO SECTION */}
      <section
        aria-label="Firm Overview & Insights"
        className="relative w-full bg-brand-navy border-b border-brand-gold/30 overflow-hidden"
      >
        <div className="relative flex flex-col min-h-[calc(100dvh-80px)] sm:min-h-[calc(100vh-88px)] md:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-100px)]">
          {/* Main Stage Container with Full-Bleed Background Image & Overlaid Text */}
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

            {/* Overlaid Typography Stage - Emerges gracefully from the bottom upwards */}
            <div
              className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-[380px]:py-10 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center transition-all duration-1800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                curtainPhase === "covering"
                  ? "translate-y-24 opacity-75 scale-[0.98]"
                  : "translate-y-0 opacity-100 scale-100"
              }`}
            >
              <div className="max-w-4xl xl:max-w-5xl">
                {/* Category Eyebrow */}
                <p className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.26em] text-brand-gold uppercase mb-3.5 sm:mb-4.5 flex items-center gap-2.5">
                  <span>Legal Practice · Est. 2007</span>
                </p>

                {/* High-Impact Editorial Serif Headline in white - Enlarged and Commanding on mobile and desktop */}
                <h1 className="text-[2.25rem] min-[360px]:text-[2.5rem] min-[400px]:text-[2.85rem] sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.25rem] 2xl:text-[4.65rem] font-serif font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08]">
                  Experienced Legal Practitioners.{" "}
                  <span className="text-slate-100 font-normal italic font-serif">
                    Strategic Representation. Practical Solutions.
                  </span>
                </h1>

                {/* Narrative Description Subtitle - Scaled to fill vertical stage with prestigious clarity */}
                <p className="mt-5 sm:mt-6 md:mt-7 text-[15.5px] min-[380px]:text-[16.5px] sm:text-lg md:text-xl lg:text-[1.32rem] xl:text-[1.42rem] text-slate-100/95 font-sans leading-relaxed max-w-3xl xl:max-w-4xl font-normal">
                  Habeeb Salawu Chambers is a full-service Nigerian law firm with over 19 years of experience providing legal representation and advisory services to government institutions, financial institutions, corporate organisations and private clients.
                </p>

                {/* Call To Actions */}
                <div className="mt-6 min-[380px]:mt-7 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-gold hover:bg-white hover:text-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-200 border border-brand-gold/60 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    Explore Our Practice
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
