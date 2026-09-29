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
            <div className="max-w-3xl">
              {/* Category Eyebrow */}
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.24em] text-brand-gold uppercase mb-2.5 sm:mb-3.5 flex items-center gap-2.5">
                <span>Legal Practice · Est. 2007</span>
              </p>

              {/* High-Impact Editorial Serif Headline in white */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-serif font-bold text-white tracking-tight leading-[1.12]">
                Experienced Legal Practitioners.{" "}
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
              </div>
            </div>
          </div>

          {/* 3. THE REVEAL WIPE CURTAIN & DOCKED RIGHT RAIL (Exact A&O Shearman Screen Animation) */}
          <aside
            aria-label="Firm Curtain & Story Reveal"
            className={`absolute top-0 bottom-0 right-0 z-20 bg-brand-navy text-white select-none border-l-[3px] border-brand-gold overflow-hidden transition-all duration-1800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              curtainPhase === "covering"
                ? "left-0"
                : "left-full lg:left-[calc(100%-4rem)] xl:left-[calc(100%-5rem)]"
            }`}
          >
            {/* Atmospheric Gavel Background during Logo Animation - Smoothly fades to transparent */}
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
              {/* Multi-layered cinematic navy gradient overlay */}
              <div className="absolute inset-0 bg-brand-navy/80" />
              <div className="absolute inset-0 bg-radial from-transparent via-brand-navy/60 to-brand-navy/95" />
            </div>

            {/* Centered Logo Animation Presentation (plays while wipe is paused) */}
            {logoState !== "hidden" && (
              <div
                className={`relative z-10 w-full h-full flex flex-col items-center justify-center px-4 transition-all duration-500 ease-out pointer-events-none ${
                  logoState === "fadeout"
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100 animate-hero-scale-in"
                }`}
              >
                <div className="relative flex flex-col items-center text-center max-w-lg mx-auto">
                  {/* Radiant Ambient Gold Glow Halo */}
                  <div
                    className="absolute -inset-16 bg-radial from-brand-gold/30 via-brand-gold/10 to-transparent blur-3xl rounded-full pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Emblem Container with Gold Rim & Subtle Light Sweep */}
                  <div className="relative mb-6 p-4 sm:p-5 rounded-xs bg-white border-2 border-brand-gold/80 shadow-[0_0_50px_rgba(199,162,75,0.4)] flex items-center justify-center overflow-hidden">
                    
                    <Image
                      src="/logo.png"
                      alt="Habeeb Salawu Chambers Emblem"
                      width={100}
                      height={80}
                      priority
                      className="h-14 sm:h-16 md:h-18 w-auto object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Delicate Gold Dividing Rule with Diamond */}
                  <div className="flex items-center gap-3 w-52 sm:w-64 mb-4">
                    <div className="flex-1 h-[1.5px] bg-linear-to-r from-transparent via-brand-gold/70 to-brand-gold" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold shrink-0 shadow-[0_0_8px_rgba(199,162,75,0.8)]" />
                    <div className="flex-1 h-[1.5px] bg-linear-to-l from-transparent via-brand-gold/70 to-brand-gold" />
                  </div>

                  {/* High-Impact Brand Typography */}
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.16em] uppercase text-white drop-shadow-md">
                    Habeeb Salawu
                  </h2>
                  <span className="font-serif text-lg sm:text-xl md:text-2xl font-normal tracking-[0.3em] uppercase text-brand-gold mt-1.5 drop-shadow-sm">
                    Chambers
                  </span>

                  {/* Subtitle with High-End Letter Tracking */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <span className="text-[10.5px] sm:text-xs font-semibold tracking-[0.32em] uppercase text-slate-200">
                      Barristers &amp; Solicitors
                    </span>
                    <span className="text-brand-gold text-xs" aria-hidden="true">·</span>
                    <span className="text-[10.5px] sm:text-xs font-medium tracking-[0.22em] uppercase text-brand-gold/90">
                      Est. 2007
                    </span>
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
