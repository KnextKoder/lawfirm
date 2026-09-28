import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Experience & Clientele | Habeeb Salawu Chambers",
  description:
    "A track record spanning over 19 years representing state governments, federal institutions, premier banks, utilities, and corporate organisations.",
};

const clientGroups = [
  {
    category: "Government & Public Institutions",
    clients: [
      { name: "Osun State Government", logo: "/clients/Osun State.jpg" },
      { name: "Kaduna State Government", logo: "/clients/Kaduna-State-1024x1024.png" },
      { name: "Industrial Training Fund", logo: "/clients/Industrial-Training-Fund-ITF-logo.png" },
      { name: "Nigeria Deposit Insurance Corporation", logo: "/clients/ndicLogo-02.png" },
      { name: "Osun State Internal Revenue Service", logo: "/clients/Osun Internal Revenue Service.png" },
    ],
  },
  {
    category: "Banking & Financial Services",
    clients: [
      { name: "First Bank of Nigeria Limited", logo: "/clients/FirstBank.png" },
      { name: "Zenith Bank Plc", logo: "/clients/zenith-bank-logo.png" },
      { name: "LivingTrust Mortgage Bank Plc", logo: "/clients/living trust.png" },
    ],
  },
  {
    category: "Corporate & Commercial",
    clients: [
      { name: "Ibadan Electricity Distribution Company", logo: "/clients/IBDEC.png" },
      { name: "Fatgbems Petroleum Company Limited", logo: "/clients/fatgbems.png" },
      { name: "WemaBod Nigeria Limited", logo: "/clients/wemabod.png" },
    ],
  },
];

const areasOfExperience = [
  {
    number: "01",
    title: "Public Revenue & Asset Recovery",
    description:
      "Our experience includes engagements concerning the collection and recovery of government revenue and assets, including work undertaken in connection with the Osun State Government and Osun State Internal Revenue Service.",
    highlights: [
      "Revenue collection strategy & enforcement",
      "Statutory compliance & debt audits",
      "Inter-agency recovery proceedings",
      "Asset recovery & protection of public revenue",
    ],
  },
  {
    number: "02",
    title: "Financial Recovery",
    description:
      "We have acted in matters involving the recovery of debts, financial obligations, assets and enforcement of creditor rights.",
    highlights: [
      "Secured & unsecured facility recovery",
      "Enforcement of mortgages & debentures",
      "Insolvency & judgment execution",
      "Negotiated settlements & restructured facilities",
    ],
  },
  {
    number: "03",
    title: "Property & Land",
    description:
      "Our experience includes land recovery, property disputes, title-related matters and property transactions.",
    highlights: [
      "Commercial & residential land recovery",
      "Investigation & perfection of titles",
      "Boundary & ownership disputes before state courts",
      "Development agreements & commercial leases",
    ],
  },
  {
    number: "04",
    title: "Litigation",
    description:
      "The firm has represented clients in civil, commercial, property, criminal and other contentious matters.",
    highlights: [
      "Civil & commercial disputes at Trial and Appellate courts",
      "Injunctions & urgent protective applications",
      "Election petition representation",
      "Arbitration & alternative dispute resolution",
    ],
  },
  {
    number: "05",
    title: "Institutional Advisory",
    description:
      "We provide legal advice and representation to public institutions and corporate organisations on contractual, regulatory, commercial and institutional matters.",
    highlights: [
      "Statutory compliance & policy frameworks",
      "High-value commercial contracts & procurement",
      "Institutional governance & risk management",
      "Formal legal opinions for public boards & executives",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePath="/experience" />
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
                  <span className="text-brand-gold">Experience &amp; Clientele</span>
                </nav>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08]">
                  Experience &amp; Clientele
                </h1>
              </div>

              <div className="lg:col-span-5 flex justify-start lg:justify-end pb-1 lg:pb-2">
                <p className="text-white/80 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-lg font-normal">
                  Over 19 years representing government bodies, financial institutions, and leading corporate entities across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Overview */}
        <section className="w-full bg-white py-12 sm:py-16 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase block mb-3">
                Track Record &amp; Institutional Trust
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy tracking-tight mb-6">
                For over 19 years, Habeeb Salawu Chambers has represented clients across the public and private sectors.
              </h2>
              <p className="text-brand-navy/80 text-base sm:text-lg leading-relaxed font-normal">
                Our experience includes working with government institutions, financial institutions, corporate organisations and public bodies on matters involving litigation, financial recovery, property, commercial transactions and institutional legal advisory.
              </p>
            </div>
          </div>
        </section>

        {/* Categorized Clients Section */}
        <section className="w-full bg-slate-50/70 py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-brand-gold/30">
              <div>
                <span className="text-sm font-semibold tracking-wider text-brand-blue block mb-1">
                  Clientele
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight">
                  Selected Clients by Sector
                </h2>
              </div>
              <p className="text-xs text-brand-navy/60 uppercase tracking-widest font-semibold">
                Representative Mandates
              </p>
            </div>

            <div className="space-y-12">
              {clientGroups.map((group) => (
                <div key={group.category} className="space-y-4">
                  <h3 className="font-serif text-lg sm:text-xl text-brand-navy flex items-center gap-2.5">
                    <span className="w-3 h-0.5 bg-brand-gold" aria-hidden="true" />
                    <span>{group.category}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {group.clients.map((client) => (
                      <div
                        key={client.name}
                        className="bg-white border border-brand-gold/25 p-5 sm:p-6 flex items-center gap-4 rounded-xs shadow-[0_1px_3px_rgba(10,27,51,0.03)] hover:border-brand-gold transition-colors"
                      >
                        <div className="w-13 h-13 shrink-0 rounded-xs bg-white border border-brand-gold/20 p-1.5 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                          {client.logo ? (
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              width={48}
                              height={48}
                              className="max-h-full max-w-full object-contain"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-brand-blue">
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-serif text-base text-brand-navy leading-snug font-medium">
                            {client.name}
                          </span>
                          <span className="text-[10.5px] font-sans font-medium text-brand-navy/55 uppercase tracking-wider mt-1">
                            {group.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed 5 Areas of Experience */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold tracking-wider text-brand-blue block mb-2">
                Focus &amp; Capability
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
                Five Key Areas of Experience
              </h2>
              <p className="text-brand-navy/75 text-base font-normal">
                Substantive legal capability developed through long-standing mandates across contentious and advisory practice.
              </p>
            </div>

            <div className="divide-y divide-brand-gold/20 border-t border-brand-gold/30">
              {areasOfExperience.map((area) => (
                <div key={area.number} className="py-10 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  <div className="lg:col-span-5 flex flex-col">
                    <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight mb-4">
                      {area.title}
                    </h3>
                    <p className="text-brand-navy/75 text-[15px] sm:text-base leading-relaxed font-normal">
                      {area.description}
                    </p>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50/70 border border-brand-gold/25 p-6 sm:p-8 rounded-xs">
                    <p className="text-xs font-semibold tracking-[0.2em] text-brand-navy/70 uppercase mb-4">
                      Key Highlights &amp; Engagements
                    </p>
                    <ul className="space-y-3">
                      {area.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-gold shrink-0 mt-2 rounded-[1px]" />
                          <span className="text-brand-navy/85 text-[14.5px] leading-snug font-normal">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Quote on Osun State Engagement */}
        <section className="w-full bg-brand-navy py-12 sm:py-16 text-white border-b border-brand-gold/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="w-8 h-0.5 bg-brand-gold block mx-auto mb-6" aria-hidden="true" />
            <blockquote className="font-serif italic text-xl sm:text-2xl md:text-[1.65rem] text-slate-100 leading-relaxed font-normal">
              &ldquo;Our engagement with the Osun State Government and the Osun State Internal Revenue Service in matters relating to revenue collection and recovery is part of our broader experience in protecting and recovering financial and institutional interests.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-brand-gold uppercase mt-6">
              Habeeb Salawu Chambers &bull; Institutional Counsel
            </p>
          </div>
        </section>

        {/* Consultation Callout */}
        <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-brand-gold/30 p-8 sm:p-10 rounded-xs bg-slate-50/50">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight mb-2">
                  Require institutional legal counsel or representation?
                </h3>
                <p className="text-brand-navy/75 text-sm sm:text-base font-normal">
                  Contact our chambers to discuss your legal, transactional, or dispute requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-navy hover:bg-brand-blue text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shrink-0 shadow-xs border border-brand-gold/40"
              >
                Contact the Firm
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
