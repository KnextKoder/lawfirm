import Link from "next/link";
import Image from "next/image";

const practiceAreas = [
  {
    title: "Litigation & Dispute Resolution",
    description:
      "Civil, commercial and criminal matters, election petitions, appeals, negotiation and ADR.",
    href: "/practice-areas#litigation-dispute-resolution",
  },
  {
    title: "Property & Real Estate",
    description:
      "Land transactions and recovery, title matters, property disputes, leases and development.",
    href: "/practice-areas#property-real-estate",
  },
  {
    title: "Asset & Debt Recovery",
    description:
      "Recovery of debts, assets, public revenue and possession; enforcement of obligations.",
    href: "/practice-areas#asset-debt-recovery",
  },
  {
    title: "Banking & Finance",
    description:
      "Banking disputes, mortgages, facility matters, security enforcement and financial advisory.",
    href: "/practice-areas#banking-finance",
  },
  {
    title: "Corporate & Commercial",
    description:
      "Corporate advisory, transactions, contracts, governance and regulatory compliance.",
    href: "/practice-areas#corporate-commercial",
  },
  {
    title: "Institutional & Government Advisory",
    description:
      "Advice and representation for government institutions, public bodies and organisations.",
    href: "/practice-areas#institutional-government-advisory",
  },
];

const trackRecordMattersCol1 = [
  "Asset, debt and public revenue recovery",
  "Land and property recovery and disputes",
  "Banking and financial disputes",
  "Civil and commercial litigation",
];

const trackRecordMattersCol2 = [
  "Government and institutional engagements",
  "Construction and infrastructure matters",
  "Regulatory and administrative issues",
  "Corporate and commercial advisory",
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
      {/* 01 | A FIRM BUILT ON EXPERIENCE (Overview & Library)         */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Split Section: Sidebar and Content - Locked precisely to 4-column client grid above */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 items-start">
            {/* Left Column / Metadata Sidebar (1 of 4 cols = exactly 25% matching Col 1 of client grid) */}
            <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start pt-1">
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.22em] text-brand-navy/70 uppercase">
                A Firm Built on Experience
              </p>
            </div>

            {/* Right Column / Headline & Two-Column Text (3 of 4 cols = exactly 75% starting at Col 2 line) */}
            <div className="lg:col-span-3 flex flex-col lg:pl-6 xl:pl-8">
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.18] tracking-tight">
                We combine technical legal expertise with a practical understanding of our clients&rsquo; objectives,{" "}
                <span className="italic font-normal">from initial assessment through to resolution.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 mt-6 sm:mt-8 lg:mt-10 pt-2">
                <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                  Since 2007, Habeeb Salawu Chambers has developed a broad legal practice serving clients across the public and private sectors. We have represented government institutions, financial institutions, corporate organisations and private clients in matters involving significant legal, financial, commercial and property interests.
                </p>
                <div className="flex flex-col justify-between">
                  <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal mb-5 sm:mb-6">
                    Our experience includes complex litigation and dispute resolution, asset and debt recovery, land and property disputes, banking and financial matters, corporate advisory, and institutional legal engagements.
                  </p>
                  <div>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-blue border-b-2 border-brand-gold pb-1 transition-colors"
                    >
                      <span>About the Firm</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chambers Library Photograph Banner (Wide Landscape Crop) */}
          <div className="mt-8 sm:mt-10 lg:mt-12 relative w-full aspect-video sm:aspect-21/9 lg:aspect-[2.6/1] max-h-105 overflow-hidden rounded-xs shadow-sm bg-brand-navy border border-brand-gold/30">
            <Image
              src="/assets/bookshelf.jpeg"
              alt="Habeeb Salawu Chambers Library and Private Consultation Suite"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1200px"
              quality={75}
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 | PRACTICE (Where we focus)                               */}
      {/* ============================================================ */}
      <section id="practice-areas" className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 items-start">
            {/* Left Column / Metadata Sidebar (1 of 4 cols = exactly 25%) */}
            <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start pt-1">
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.22em] text-brand-navy/70 uppercase">
                Practice Areas
              </p>
            </div>

            {/* Right Column / Content (3 of 4 cols = 75% starting at Col 2 line) */}
            <div className="lg:col-span-3 flex flex-col lg:pl-6 xl:pl-8">
              {/* Section Header: Title & Link */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6 pb-4 sm:pb-6 border-b border-brand-gold/30">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-brand-navy tracking-tight">
                  Where we focus
                </h2>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center gap-1.5 text-brand-navy text-xs sm:text-sm font-semibold underline underline-offset-4 decoration-brand-gold/60 hover:text-brand-blue hover:decoration-brand-blue transition-colors duration-150 shrink-0"
                >
                  <span>All 13 practice areas</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Practice Areas List: Clean, unnumbered, perfectly aligned */}
              <div className="divide-y divide-brand-gold/20">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.title}
                    href={area.href}
                    className="group block md:flex md:items-center md:justify-between py-3.5 sm:py-4 lg:py-4.5 md:gap-6 lg:gap-8 transition-colors duration-150 hover:bg-slate-50/80 px-2 sm:px-3 rounded-xs"
                  >
                    {/* Title with Arrow for Mobile */}
                    <div className="flex items-center justify-between gap-3 md:w-64 lg:w-72 shrink-0">
                      <h3 className="font-serif text-[17px] sm:text-lg lg:text-[1.32rem] text-brand-navy group-hover:text-brand-blue transition-colors font-normal leading-snug">
                        {area.title}
                      </h3>
                      {/* Arrow for mobile (< md) on the right of title */}
                      <div className="md:hidden shrink-0 text-brand-gold group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-150">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.75"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-1 md:mt-0 text-brand-navy/75 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed flex-1 md:px-2">
                      {area.description}
                    </p>

                    {/* Arrow for tablet & desktop (md and up) */}
                    <div className="hidden md:block shrink-0 text-brand-gold group-hover:text-brand-blue group-hover:translate-x-1.5 transition-all duration-150">
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
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 | TRACK RECORD (Experience across complex matters)        */}
      {/* ============================================================ */}
      <section id="experience" className="w-full bg-brand-navy py-12 sm:py-14 lg:py-16 text-white border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 items-start">
            {/* Left Column / Metadata Sidebar (1 of 4 cols = exactly 25%) */}
            <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start pt-1">
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.22em] text-brand-gold uppercase">
                Track Record
              </p>
            </div>

            {/* Right Column / Matters & Highlight Note (3 of 4 cols = 75% starting at Col 2 line) */}
            <div className="lg:col-span-3 flex flex-col lg:pl-6 xl:pl-8">
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6 sm:mb-8 lg:mb-10">
                Experience across complex matters
              </h2>

              {/* 2-Column Matters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-brand-gold/30 pt-2">
                {/* Column 1 */}
                <div className="divide-y divide-white/10">
                  {trackRecordMattersCol1.map((matter) => (
                    <div
                      key={matter}
                      className="py-3 sm:py-3.5 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                      <span className="text-slate-200 text-[14px] sm:text-[15.5px] leading-snug font-normal">
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
                      className="py-3 sm:py-3.5 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                      <span className="text-slate-200 text-[14px] sm:text-[15.5px] leading-snug font-normal">
                        {matter}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlighted Engagement Case Note */}
              <div className="mt-6 sm:mt-8 lg:mt-12 border-l-2 border-brand-gold pl-5 sm:pl-8 py-1.5 max-w-3xl">
                <p className="font-serif italic text-[16px] sm:text-lg md:text-[19px] text-slate-200 leading-relaxed font-normal">
                  Our engagement with the Osun State Government and the Osun State Internal Revenue Service on tax collection and asset recovery reflects our broader experience protecting and recovering financial and institutional interests.
                </p>
                <div className="mt-4 sm:mt-5">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-wider text-brand-gold hover:text-white uppercase transition-colors"
                  >
                    <span>View full clientele &amp; areas of experience</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 | OUR LEGAL PRACTITIONERS                                 */}
      {/* ============================================================ */}
      <section id="practitioners" className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Practitioners Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 items-start">
            {/* Left Column / Metadata Sidebar (1 of 4 cols = exactly 25%) */}
            <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start pt-1">
              <p className="text-xs sm:text-[13px] font-normal tracking-[0.22em] text-brand-navy/70 uppercase">
                Our Legal Practitioners
              </p>
            </div>

            {/* Right Column / Practitioners Narrative (3 of 4 cols = 75% starting at Col 2 line) */}
            <div className="lg:col-span-3 flex flex-col lg:pl-6 xl:pl-8">
              <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight">
                Our Legal Practitioners
              </h3>

              <p className="text-brand-navy/75 text-[14.5px] sm:text-[16px] leading-relaxed max-w-3xl mt-4 sm:mt-5 font-normal">
                Our practice is supported by a team of Solicitors and Advocates of the Supreme Court of Nigeria with experience across litigation, dispute resolution, property, banking and finance, corporate and commercial law, recovery matters and institutional legal advisory.
              </p>

              <p className="text-brand-navy/75 text-[14px] sm:text-[15.5px] leading-relaxed max-w-3xl mt-2.5 sm:mt-3 font-normal">
                Working collaboratively across different areas of practice, our lawyers combine legal research, advocacy, advisory and transactional capabilities to provide clients with comprehensive legal support.
              </p>

              {/* Principal Counsel Profile Block */}
              <div>
                <div className="mt-4 sm:mt-5">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-blue border-b-2 border-brand-gold pb-1 transition-colors"
                  >
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Our Approach */}
          <div className="mt-8 sm:mt-10 lg:mt-12 pt-5 sm:pt-7 lg:pt-8 border-t border-brand-gold/30">
            <p className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-brand-navy/70 uppercase mb-4 sm:mb-6">
              Our Approach
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {approaches.map((item) => (
                <div
                  key={item.roman}
                  className="p-3.5 sm:p-4.5 lg:p-5 bg-slate-50/70 border border-brand-gold/25 hover:border-brand-gold/50 rounded-xs flex flex-col justify-between transition-colors duration-150"
                >
                  <div>
                    <div className="flex items-baseline gap-2 mb-1.5">
                      {/* Roman Numeral in Gold */}
                      <span className="text-brand-gold italic font-serif text-base sm:text-lg font-normal shrink-0">
                        {item.roman}
                      </span>
                      <h4 className="font-serif text-[15.5px] sm:text-base lg:text-lg font-bold text-brand-navy leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-brand-navy/75 text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
