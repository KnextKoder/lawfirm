import React from "react";
import Link from "next/link";
import Image from "next/image";

const practiceAreas = [
  {
    number: "01",
    title: "Litigation & Dispute Resolution",
    description:
      "Civil, commercial and criminal matters, election petitions, appeals, negotiation and ADR.",
    href: "/practice-areas#litigation-dispute-resolution",
  },
  {
    number: "02",
    title: "Property & Real Estate",
    description:
      "Land transactions and recovery, title matters, property disputes, leases and development.",
    href: "/practice-areas#property-real-estate",
  },
  {
    number: "03",
    title: "Asset & Debt Recovery",
    description:
      "Recovery of debts, assets, public revenue and possession; enforcement of obligations.",
    href: "/practice-areas#asset-debt-recovery",
  },
  {
    number: "04",
    title: "Banking & Finance",
    description:
      "Banking disputes, mortgages, facility matters, security enforcement and financial advisory.",
    href: "/practice-areas#banking-finance",
  },
  {
    number: "05",
    title: "Corporate & Commercial",
    description:
      "Corporate advisory, transactions, contracts, governance and regulatory compliance.",
    href: "/practice-areas#corporate-commercial",
  },
  {
    number: "06",
    title: "Institutional & Government Advisory",
    description:
      "Advice and representation for government institutions, public bodies and organisations.",
    href: "/practice-areas#institutional-government-advisory",
  },
];

const trackRecordMattersCol1 = [
  "Recovery of debts, assets and public revenue",
  "Banking and financial disputes",
  "Corporate and commercial advisory",
  "Construction and infrastructure matters",
];

const trackRecordMattersCol2 = [
  "Land and property recovery and disputes",
  "Civil and commercial litigation",
  "Government and institutional engagements",
  "Regulatory and administrative issues",
];

const approaches = [
  {
    roman: "i.",
    title: "Rigorous legal analysis",
    description: "Understanding the applicable law, documents, evidence and legal risks.",
  },
  {
    roman: "ii.",
    title: "Strategic representation",
    description: "A strategy built on the client's objectives and circumstances.",
  },
  {
    roman: "iii.",
    title: "Practical advice",
    description: "Solutions that account for commercial, institutional and practical realities.",
  },
  {
    roman: "iv.",
    title: "Professional integrity",
    description: "Confidentiality, professional responsibility and high standards of practice.",
  },
];

export default function TheFirm() {
  return (
    <div id="the-firm" className="w-full bg-white">
      {/* ============================================================ */}
      {/* § 01 | THE FIRM (Overview Narrative & Library Photograph)   */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Split Section: Sidebar and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column / Metadata Sidebar (3 cols on lg) */}
            <div className="lg:col-span-3 flex flex-col space-y-3 lg:space-y-4 pt-1">
              <span className="text-sm font-semibold tracking-wider text-brand-blue">
                &sect; 01
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                The Firm
              </p>
            </div>

            {/* Right Column / Headline & Two-Column Text (9 cols on lg) */}
            <div className="lg:col-span-9 flex flex-col">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.18] tracking-tight">
                We combine technical legal expertise with a practical understanding of our clients&rsquo; objectives &mdash;{" "}
                <span className="italic font-normal">from initial assessment through to resolution.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-10 lg:mt-10 pt-2">
                <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                  Since 2007, Habeeb Salawu Chambers has represented government institutions, financial institutions, corporate organisations and private clients in matters involving significant legal, financial, commercial and property interests.
                </p>
                <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                  Our experience spans complex litigation, asset and debt recovery, land and property disputes, banking and financial matters, corporate advisory and institutional engagements.
                </p>
              </div>
            </div>
          </div>

          {/* Chambers Library Photograph Banner */}
          <div className="mt-10 sm:mt-12 lg:mt-14 relative w-full h-80 sm:h-110 md:h-140 lg:h-155 overflow-hidden rounded-xs shadow-sm bg-brand-navy border border-brand-gold/30">
            <Image
              src="/assets/bookshelf.jpeg"
              alt="Habeeb Salawu Chambers Library and Private Consultation Suite"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* § 02 | PRACTICE (Where we focus)                            */}
      {/* ============================================================ */}
      <section id="practice-areas" className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-brand-gold/30">
            {/* Left badge */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-semibold tracking-wider text-brand-blue">
                &sect; 02
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                Practice Areas
              </p>
            </div>

            {/* Center title */}
            <div className="md:px-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight">
                Where we focus
              </h2>
            </div>

            {/* Right link */}
            <div>
              <Link
                href="/practice-areas"
                className="inline-block text-brand-navy text-sm font-semibold underline underline-offset-4 decoration-brand-gold/60 hover:text-brand-blue hover:decoration-brand-blue transition-colors duration-150"
              >
                All 13 practice areas
              </Link>
            </div>
          </div>

          {/* Practice Areas List */}
          <div className="divide-y divide-brand-gold/20">
            {practiceAreas.map((area) => (
              <Link
                key={area.number}
                href={area.href}
                className="group flex flex-col md:flex-row md:items-center py-5 sm:py-5.5 lg:py-6 gap-4 md:gap-8 transition-colors duration-150 hover:bg-slate-50/80 px-2 sm:px-4 rounded-xs"
              >
                {/* Number in Light Blue */}
                <span className="text-sm sm:text-base font-semibold tracking-wider text-brand-blue w-12 sm:w-16 shrink-0">
                  {area.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-brand-navy group-hover:text-brand-blue transition-colors w-full md:w-72 lg:w-84 shrink-0 font-normal">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-brand-navy/75 text-[14px] sm:text-[15px] leading-relaxed flex-1">
                  {area.description}
                </p>

                {/* Right Arrow in Gold */}
                <div className="shrink-0 pt-2 md:pt-0 text-brand-gold group-hover:text-brand-blue group-hover:translate-x-1.5 transition-all duration-150">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* § 03 | TRACK RECORD (Experience across complex matters)      */}
      {/* ============================================================ */}
      <section id="experience" className="w-full bg-brand-navy py-12 sm:py-14 lg:py-16 text-white border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column / Metadata Sidebar (3 cols on lg) */}
            <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
              <span className="text-sm font-semibold tracking-wider text-brand-blue">
                &sect; 03
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase">
                Track Record
              </p>
            </div>

            {/* Right Column / Matters & Highlight Note (9 cols on lg) */}
            <div className="lg:col-span-9 flex flex-col">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-8 sm:mb-10">
                Experience across complex matters
              </h2>

              {/* 2-Column Matters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-brand-gold/30 pt-2">
                {/* Column 1 */}
                <div className="divide-y divide-white/10">
                  {trackRecordMattersCol1.map((matter) => (
                    <div
                      key={matter}
                      className="py-3.5 sm:py-4 flex items-start gap-3.5"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                      <span className="text-slate-200 text-[14.5px] sm:text-[15.5px] leading-snug font-normal">
                        {matter}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="divide-y divide-white/10 border-t md:border-t-0 border-white/10">
                  {trackRecordMattersCol2.map((matter) => (
                    <div
                      key={matter}
                      className="py-3.5 sm:py-4 flex items-start gap-3.5"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                      <span className="text-slate-200 text-[14.5px] sm:text-[15.5px] leading-snug font-normal">
                        {matter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlighted Engagement Case Note */}
              <div className="mt-8 sm:mt-10 lg:mt-12 border-l-2 border-brand-gold pl-6 sm:pl-8 py-2 max-w-3xl">
                <p className="font-serif italic text-[17px] sm:text-lg md:text-[19px] text-slate-200 leading-relaxed font-normal">
                  Our engagement with the Osun State Government and the Osun State Internal Revenue Service on revenue collection and recovery reflects our broader experience protecting and recovering financial and institutional interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* § 04 | LEADERSHIP (Habeeb Salawu & Our Approach)            */}
      {/* ============================================================ */}
      <section id="leadership" className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Leadership Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column / Metadata Sidebar (3 cols on lg) */}
            <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
              <span className="text-sm font-semibold tracking-wider text-brand-blue">
                &sect; 04
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                Leadership
              </p>
            </div>

            {/* Right Column / Managing Partner Profile Narrative (9 cols on lg) */}
            <div className="lg:col-span-9 flex flex-col">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight">
                Habeeb Salawu
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-[11.5px] sm:text-xs font-semibold tracking-[0.16em] text-brand-navy/70 uppercase mt-3 sm:mt-4">
                <span>LL.B (ILORIN), 2005</span>
                <span className="text-brand-gold font-bold">&bull;</span>
                <span>CALLED TO THE NIGERIAN BAR, 2007</span>
              </div>

              <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-3xl mt-6 font-normal">
                Habeeb Salawu leads a team of Solicitors and Advocates of the Supreme Court of Nigeria. He has practised continuously since his call to the Bar, building extensive experience in litigation, property law, banking and finance, asset and debt recovery, corporate advisory and institutional legal services.
              </p>
            </div>
          </div>

          {/* Bottom Section: Our Approach */}
          <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-brand-gold/30">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase mb-6 sm:mb-8">
              Our Approach
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {approaches.map((item) => (
                <div key={item.roman} className="flex flex-col">
                  {/* Roman Numeral in Gold */}
                  <span className="text-brand-gold italic font-serif text-base sm:text-lg mb-2.5 font-normal">
                    {item.roman}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-2.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-brand-navy/75 text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
