import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About the Firm | Habeeb Salawu Chambers",
  description:
    "A full-service Nigerian law firm based in Osogbo, Osun State, with over 19 years of legal practice serving public and private sector clients.",
};

const approaches = [
  {
    roman: "i.",
    title: "Rigorous Legal Analysis",
    description: "Understanding the applicable law, documents, evidence and legal risks.",
  },
  {
    roman: "ii.",
    title: "Strategic Representation",
    description: "Developing an appropriate strategy based on the client's objectives and circumstances.",
  },
  {
    roman: "iii.",
    title: "Practical Advice",
    description: "Providing solutions that take account of commercial, institutional and practical realities.",
  },
  {
    roman: "iv.",
    title: "Professional Integrity",
    description: "Maintaining confidentiality, professional responsibility and high standards of legal practice.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePath="/about" />
      <main className="flex-1">
        {/* Page Hero Banner */}
        <section className="relative w-full bg-brand-navy overflow-hidden py-12 sm:py-16 lg:py-18 text-white border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7 flex flex-col">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-white/60 mb-6 sm:mb-8"
                >
                  <Link href="/" className="hover:text-brand-blue transition-colors duration-150">
                    Home
                  </Link>
                  <span className="text-brand-gold/70 font-normal">/</span>
                  <span className="text-brand-gold">About the Firm</span>
                </nav>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08]">
                  About the Firm
                </h1>
              </div>

              <div className="lg:col-span-5 flex justify-start lg:justify-end pb-1 lg:pb-2">
                <p className="text-white/80 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-lg font-normal">
                  Over 19 years of continuous practice providing rigorous counsel, strategic advocacy, and practical solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Overview & History */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
                <span className="text-sm font-semibold tracking-wider text-brand-blue">
                  &sect; Overview
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                  Founded in 2007
                </p>
              </div>

              <div className="lg:col-span-9 flex flex-col space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
                  Habeeb Salawu Chambers is a full-service Nigerian law firm based in Osogbo, Osun State, with over 19 years of legal practice.
                </h2>

                <p className="text-brand-navy/80 text-base sm:text-lg leading-relaxed font-normal">
                  Since 2007, we have provided legal representation, advisory and dispute-resolution services to government institutions, financial institutions, corporate organisations and private clients.
                </p>

                <p className="text-brand-navy/75 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  Our practice has developed through extensive work in litigation and dispute resolution, property and real estate, asset and debt recovery, banking and finance, corporate and commercial law, construction and infrastructure, and institutional advisory.
                </p>
              </div>
            </div>

            {/* Library / Office Photo Accent */}
            <div className="mt-12 sm:mt-16 relative w-full h-72 sm:h-96 md:h-120 overflow-hidden rounded-xs border border-brand-gold/30 shadow-sm bg-brand-navy">
              <Image
                src="/assets/bookshelf.jpeg"
                alt="Chambers Law Library"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Our Lawyers & Leadership */}
        <section className="w-full bg-slate-50/70 py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
                <span className="text-sm font-semibold tracking-wider text-brand-blue">
                  &sect; Practitioners
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                  Our Lawyers
                </p>
              </div>

              <div className="lg:col-span-9 flex flex-col space-y-8">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy tracking-tight mb-5">
                    Advocates &amp; Legal Advisers
                  </h2>
                  <p className="text-brand-navy/80 text-base sm:text-[17px] leading-relaxed font-normal mb-4">
                    Our team comprises Solicitors and Advocates of the Supreme Court of Nigeria with experience across various areas of Nigerian legal practice.
                  </p>
                  <p className="text-brand-navy/75 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                    Our lawyers work collaboratively on complex matters, combining litigation, legal research, advisory, negotiation and transactional capabilities to provide clients with comprehensive and practical legal solutions.
                  </p>
                </div>

                {/* Principal Counsel Card */}
                <div className="bg-white border border-brand-gold/35 p-8 sm:p-10 lg:p-12 shadow-sm rounded-xs">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-brand-gold/25">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase block mb-1">
                        Principal Counsel
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight">
                        Habeeb Salawu
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-brand-navy/70 uppercase bg-slate-50 px-3.5 py-2 border border-brand-gold/20 rounded-xs">
                      <span>LL.B (ILORIN), 2005</span>
                      <span className="text-brand-gold font-bold">&bull;</span>
                      <span>CALLED TO THE NIGERIAN BAR, 2007</span>
                    </div>
                  </div>

                  <p className="text-brand-navy/75 text-[15px] sm:text-[16px] leading-relaxed mt-6 font-normal">
                    The firm is led by Habeeb Salawu, who obtained his LL.B from the University of Ilorin in 2005 and was called to the Nigerian Bar in 2007. He has practised continuously since then and has developed extensive experience in litigation, dispute resolution, property law, banking and finance, asset and debt recovery, corporate advisory and institutional legal services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Experience */}
        <section className="w-full bg-brand-navy py-12 sm:py-16 lg:py-20 text-white border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
                <span className="text-sm font-semibold tracking-wider text-brand-blue">
                  &sect; Track Record
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase">
                  Our Experience
                </p>
              </div>

              <div className="lg:col-span-9 flex flex-col space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  Matters with substantial financial, commercial, property and institutional interests.
                </h2>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                  Our work over the years has involved matters with substantial financial, commercial, property and institutional interests. We have acted for and advised public institutions and private organisations in matters ranging from litigation and land recovery to financial recovery, commercial transactions and regulatory issues.
                </p>

                <div className="border-l-2 border-brand-gold pl-6 py-2 my-2">
                  <p className="font-serif italic text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
                    In particular, our experience in asset, debt and revenue recovery has involved engagements requiring legal strategy, enforcement, negotiation and dispute resolution.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-brand-gold hover:text-white transition-colors"
                  >
                    <span>View detailed client portfolio &amp; areas of experience</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Approach */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12">
              <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
                <span className="text-sm font-semibold tracking-wider text-brand-blue">
                  &sect; Methodology
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                  Our Approach
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
                  Guided by principle, focused on outcomes.
                </h2>
                <p className="text-brand-navy/75 text-base sm:text-[17px] leading-relaxed max-w-2xl font-normal">
                  We approach every matter by first understanding the client&rsquo;s objectives and the practical circumstances surrounding the issue.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-brand-gold/30 pt-10">
              {approaches.map((item) => (
                <div key={item.roman} className="flex flex-col">
                  <span className="text-brand-gold italic font-serif text-lg mb-2.5 font-normal">
                    {item.roman}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-brand-navy/75 text-[14px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="w-full bg-slate-50 py-12 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight mb-2">
                  Discuss your requirements with our team.
                </h3>
                <p className="text-brand-navy/75 text-sm sm:text-base font-normal">
                  Contact our office in Osogbo to arrange an initial consultation.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors border border-brand-gold/40 shadow-xs"
                >
                  Contact Us
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-100 text-brand-navy text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors border border-brand-gold/30"
                >
                  Explore Practice
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
