"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // curtainPhase: "covering" (curtain covers hero stage + logo animation plays) -> "revealing" (wiping right) -> "docked" (settled into right rail)
  const [curtainPhase, setCurtainPhase] = useState<"covering" | "revealing" | "docked">("covering");
  // logoState: "animating" -> "fadeout" -> "hidden"
  const [logoState, setLogoState] = useState<"animating" | "fadeout" | "hidden">("animating");
  // gavelVisible: atmospheric legal gavel background during logo animation, smoothly fades to transparent
  const [gavelVisible, setGavelVisible] = useState(true);

  // Orchestrate the dramatic logo animation followed by the cinematic wipe curtain reveal
  useEffect(() => {
    // Scroll lock while the logo animation is playing so the user stays focused on the hero intro
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // 1. As the logo animation is ending, smoothly transition the gavel image to transparent
    const gavelFadeTimer = setTimeout(() => {
      setGavelVisible(false);
    }, 1600);

    // 2. Start graceful fadeout of the logo presentation
    const fadeoutTimer = setTimeout(() => {
      setLogoState("fadeout");
    }, 1900);

    // 3. Release scroll lock as the logo animation concludes and wipe reveal begins
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
    }, 2250);

    // 4. Mark logo as completely hidden so screen is a clean blank navy canvas during the wipe
    const hideTimer = setTimeout(() => {
      setLogoState("hidden");
    }, 2350);

    // 5. Begin the dramatic curtain wipe with extended duration (1800ms) with a completely blank screen
    const revealTimer = setTimeout(() => {
      setCurtainPhase("revealing");
    }, 2400);

    // 6. Complete wipe and settle into docked right rail
    const dockTimer = setTimeout(() => {
      setCurtainPhase("docked");
    }, 4400);

    return () => {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
      clearTimeout(gavelFadeTimer);
      clearTimeout(fadeoutTimer);
      clearTimeout(unlockTimer);
      clearTimeout(hideTimer);
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
          className="hidden lg:flex flex-col justify-between items-center py-10 px-4 xl:px-6 select-none w-14 xl:w-14 shrink-0 bg-brand-navy/95 backdrop-blur-sm border-r border-brand-gold/30 z-30"
        >
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
            <div className="max-w-4xl xl:max-w-5xl">
              {/* Category Eyebrow */}
              <p className="text-xs sm:text-sm md:text-[15px] font-medium tracking-[0.26em] text-brand-gold uppercase mb-3.5 sm:mb-4.5 flex items-center gap-2.5">
                <span>Legal Practice · Est. 2007</span>
              </p>

              {/* High-Impact Editorial Serif Headline in white - Enlarged and Commanding */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-[4.25rem] 2xl:text-[4.65rem] font-serif font-bold text-white tracking-tight leading-[1.08]">
                Experienced Legal Practitioners.{" "}
                <span className="text-slate-100 font-normal italic font-serif">
                  Strategic Representation. Practical Solutions.
                </span>
              </h1>

              {/* Narrative Description Subtitle - Enlarged for prestigious clarity */}
              <p className="mt-5 sm:mt-6 md:mt-7 text-base sm:text-lg md:text-xl lg:text-[1.32rem] xl:text-[1.42rem] text-slate-100/95 font-sans leading-relaxed max-w-3xl xl:max-w-4xl font-normal">
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
              </div>
            </div>
          </div>

          {/* 3. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          <aside
            aria-label="Firm Curtain & Story Reveal"
            className={`absolute top-0 bottom-0 right-0 z-20 select-none border-l-[3px] border-brand-gold overflow-hidden transition-all duration-1800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              curtainPhase === "covering"
                ? "left-0 bg-white"
                : curtainPhase === "revealing"
                ? "left-full lg:left-[calc(100%-4rem)] xl:left-[calc(100%-5rem)] bg-white"
                : "left-full lg:left-[calc(100%-4rem)] xl:left-[calc(100%-5rem)] bg-brand-navy transition-colors duration-500"
            }`}
          >
            {/* Atmospheric Gavel Background during Logo Animation - Soft high-key watermark that smoothly fades to transparent */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-800 ease-out ${
                gavelVisible ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              <Image
                src="/assets/gavel.jpg"
                alt="Law gavel and legal tome"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center scale-105"
              />
              {/* White-ish high-key wash so the background is light/white-ish and gavel texture is subtle and elegant */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-radial from-transparent via-white/50 to-white/95" />
            </div>

            {/* Centered Logo Presentation - Standalone Logo directly on white-ish canvas (no text, no background box) */}
            {logoState !== "hidden" && (
              <div
                className={`relative z-10 w-full h-full flex flex-col items-center justify-center px-4 transition-all duration-500 ease-out pointer-events-none ${
                  logoState === "fadeout"
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100 animate-hero-scale-in"
                }`}
              >
                <div className="relative flex flex-col items-center justify-center">
                  {/* Subtle Ambient Gold Halo */}
                  <div
                    className="absolute -inset-16 bg-radial from-brand-gold/25 via-brand-gold/5 to-transparent blur-3xl rounded-full pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Standalone Logo Mark - Big, Crisp, Direct on white-ish canvas */}
                  <div className="relative flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Habeeb Salawu Chambers Logo"
                      width={240}
                      height={192}
                      priority
                      className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-[0_12px_28px_rgba(10,27,51,0.08)]"
                    />
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
