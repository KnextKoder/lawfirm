import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="font-serif grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-84px)] lg:min-h-165">
        {/* Left Text Panel */}
        <div className="flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
          <div>
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#425066] uppercase mb-6 sm:mb-8">
              Innovative Legal Strategy
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-[#141d2e] tracking-tight leading-[1.12]">
              We deliver the results that are best for you
            </h1>

            {/* Description Subtitle */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Innovative legal strategies paired with outstanding service. Our legal expertise and talent are tailored to meet the evolving needs.
            </p>

            {/* Call to Action */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-[#1a2d52] hover:bg-[#12203d] active:bg-[#0c162b] text-white text-[15px] font-medium tracking-wide rounded-xs shadow-sm hover:shadow-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2d52] focus-visible:ring-offset-2"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="relative w-full min-h-110 sm:min-h-135 lg:min-h-full h-full bg-slate-900">
          <Image
            src="/images/hero-lawyer.jpg"
            alt="Lead Legal Counsel at Habeeb Salawu Chambers"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
