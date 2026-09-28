"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface PracticeItem {
  id: string;
  aliases?: string[];
  number: string;
  title: string;
  description: string;
  note?: string;
  col1: string[];
  col2: string[];
}

const allPractices: PracticeItem[] = [
  {
    id: "litigation-dispute-resolution",
    number: "01",
    title: "Litigation & Dispute Resolution",
    description:
      "We represent clients in contentious matters before courts and other appropriate forums, from first instance through appeal.",
    col1: [
      "Civil litigation",
      "Commercial litigation",
      "Land and property disputes",
      "Contractual disputes",
      "Banking and financial disputes",
      "Debt and asset recovery proceedings",
      "Criminal litigation",
    ],
    col2: [
      "Election petitions",
      "Appeals",
      "Injunctions and interlocutory applications",
      "Enforcement of judgments",
      "Negotiation and settlement",
      "Mediation and conciliation",
      "Arbitration and other ADR proceedings",
    ],
  },
  {
    id: "corporate-commercial",
    number: "02",
    title: "Corporate & Commercial Law",
    description:
      "We advise businesses, companies and institutions on their legal and commercial affairs.",
    col1: [
      "Corporate advisory",
      "Commercial transactions",
      "Contract drafting and review",
      "Company matters",
      "Corporate governance",
      "Shareholder matters",
    ],
    col2: [
      "Business structuring",
      "Regulatory compliance",
      "Legal due diligence",
      "Commercial negotiations",
      "General corporate advisory",
    ],
  },
  {
    id: "property-real-estate",
    aliases: ["real-estate-property"],
    number: "03",
    title: "Real Estate & Property Law",
    description:
      "We advise and represent clients in relation to land, buildings, property transactions and disputes.",
    col1: [
      "Land acquisition and disposal",
      "Land recovery",
      "Land disputes",
      "Title investigation and verification",
      "Title regularisation",
      "Property documentation",
      "Perfection of title",
    ],
    col2: [
      "Leases and tenancy matters",
      "Property development",
      "Real estate transactions",
      "Recovery of possession",
      "Boundary disputes",
      "Estate-related property matters",
    ],
  },
  {
    id: "banking-finance",
    number: "04",
    title: "Banking & Finance",
    description:
      "We advise financial institutions, businesses and private clients on banking and financial matters.",
    col1: [
      "Banking transactions",
      "Loan and facility documentation",
      "Mortgage matters",
      "Security documentation",
      "Financial disputes",
      "Banking litigation",
    ],
    col2: [
      "Enforcement of securities",
      "Financial recovery",
      "Asset recovery",
      "Regulatory matters",
      "General banking and finance advisory",
    ],
  },
  {
    id: "asset-debt-recovery",
    number: "05",
    title: "Asset & Debt Recovery",
    description:
      "We advise and represent creditors, financial institutions, businesses and public institutions in matters involving the recovery and protection of financial and other assets.",
    note: "The firm's experience includes recovery-related engagements involving financial institutions, corporate organisations and public institutions, including work connected with the recovery and protection of government revenue and assets.",
    col1: [
      "Debt recovery",
      "Asset recovery",
      "Recovery of public revenue",
      "Recovery of possession",
      "Loan recovery",
    ],
    col2: [
      "Enforcement of contractual obligations",
      "Enforcement of securities",
      "Judgment enforcement",
      "Recovery-related litigation",
      "Negotiated recovery and settlement",
    ],
  },
  {
    id: "criminal-law",
    number: "06",
    title: "Criminal Law",
    description:
      "We provide representation and advisory services in criminal matters.",
    col1: [
      "Criminal defence",
      "Bail applications",
      "Criminal trials",
      "Appeals",
    ],
    col2: [
      "Representation during investigations",
      "Commercial and financial offences",
      "Regulatory and enforcement matters",
      "General criminal law advisory",
    ],
  },
  {
    id: "family-matrimonial",
    aliases: ["family-law"],
    number: "07",
    title: "Family & Matrimonial Law",
    description:
      "We provide legal assistance in family and matrimonial matters with appropriate discretion and sensitivity.",
    col1: [
      "Divorce proceedings",
      "Matrimonial disputes",
      "Custody and access",
      "Maintenance",
    ],
    col2: [
      "Family property disputes",
      "Matrimonial settlements",
      "Succession-related family disputes",
    ],
  },
  {
    id: "employment-labour",
    number: "08",
    title: "Employment & Labour Law",
    description:
      "We advise employers, employees and organisations on employment-related legal matters.",
    col1: [
      "Employment contracts",
      "Employment disputes",
      "Termination and dismissal",
      "Workplace claims",
      "Employer advisory",
    ],
    col2: [
      "Labour litigation",
      "Employment policies",
      "Regulatory compliance",
      "Negotiation and settlement",
    ],
  },
  {
    id: "arbitration-adr",
    aliases: ["arbitration-mediation-adr"],
    number: "09",
    title: "Arbitration, Mediation & ADR",
    description:
      "We assist clients in resolving disputes through mechanisms that may provide alternatives to conventional litigation.",
    col1: [
      "Arbitration",
      "Mediation",
      "Conciliation",
      "Negotiation",
    ],
    col2: [
      "Settlement",
      "Representation in ADR proceedings",
      "Enforcement of arbitral awards",
      "Dispute avoidance and early resolution",
    ],
  },
  {
    id: "constitutional-administrative",
    number: "10",
    title: "Constitutional & Administrative Law",
    description:
      "We advise clients on matters involving government, public authorities and the exercise of statutory or administrative powers.",
    col1: [
      "Constitutional matters",
      "Administrative law",
      "Judicial review",
      "Public authority disputes",
    ],
    col2: [
      "Regulatory disputes",
      "Government decisions and actions",
      "Statutory powers and obligations",
      "Fundamental rights-related proceedings",
    ],
  },
  {
    id: "probate-wills-estates",
    number: "11",
    title: "Probate, Wills & Estate Administration",
    description:
      "We assist individuals and families with succession and estate matters.",
    col1: [
      "Wills",
      "Probate",
      "Letters of administration",
      "Estate administration",
    ],
    col2: [
      "Succession matters",
      "Estate disputes",
      "Property transmission",
      "Family settlements",
    ],
  },
  {
    id: "construction-infrastructure",
    number: "12",
    title: "Construction & Infrastructure Law",
    description:
      "We advise clients involved in construction, property development and infrastructure projects.",
    col1: [
      "Construction contracts",
      "Project advisory",
      "Contractor and developer matters",
      "Procurement",
    ],
    col2: [
      "Infrastructure transactions",
      "Project-related disputes",
      "Construction claims",
      "Regulatory approvals",
    ],
  },
  {
    id: "regulatory-institutional",
    aliases: ["institutional-government-advisory", "regulatory-institutional-advisory"],
    number: "13",
    title: "Regulatory & Institutional Advisory",
    description:
      "We provide legal support to government institutions, public bodies, companies and other organisations operating within regulated environments.",
    col1: [
      "Regulatory compliance",
      "Institutional advisory",
      "Government advisory",
      "Corporate governance",
      "Legal opinions",
    ],
    col2: [
      "Contract review",
      "Regulatory disputes",
      "Policy and regulatory matters",
      "Institutional risk assessment",
    ],
  },
];

export default function CorePractice() {
  // Handle cross-page direct hash navigation smoothly
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Quick Jump Links */}
        <div className="pb-8 sm:pb-10 border-b border-brand-gold/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold tracking-wider text-brand-blue">
              Complete Directory
            </span>
            <span className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
              All 13 Practice Disciplines
            </span>
          </div>

          <p className="text-brand-navy/75 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
            Our full-service practice enables us to advise and represent clients across a wide range of legal matters &mdash; from front-line court advocacy to high-stakes transactional and regulatory advisory.
          </p>

          {/* Quick-Jump Index for Mobile (< sm): Dropdown + Horizontal Snap Scroll */}
          <div className="sm:hidden space-y-3 pt-2">
            {/* 1-Tap Quick Select Dropdown */}
            <div className="relative">
              <select
                aria-label="Quick-jump to any of the 13 practice disciplines"
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) {
                    const el = document.getElementById(e.target.value);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="w-full bg-slate-50 border border-brand-gold/40 text-brand-navy py-3 px-3.5 pr-10 text-xs font-semibold uppercase tracking-wider rounded-xs appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue cursor-pointer shadow-2xs"
              >
                <option value="" disabled>
                  &darr; Jump directly to a practice area (01 &ndash; 13)...
                </option>
                {allPractices.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.number}. {p.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-brand-gold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Horizontal Swipeable Chip Rail with Snap */}
            <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden py-1 -mx-4 px-4 scroll-smooth snap-x snap-mandatory">
              {allPractices.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="shrink-0 snap-start inline-flex items-center gap-1.5 px-3 py-2 rounded-xs text-xs font-medium text-brand-navy bg-slate-50 border border-brand-gold/30 hover:border-brand-blue hover:text-brand-blue active:bg-brand-navy active:text-white transition-colors shadow-2xs"
                >
                  <span className="whitespace-nowrap">{p.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick-Jump Index Pills for Tablet & Desktop (sm and up) */}
          <div className="hidden sm:flex sm:flex-wrap gap-2 pt-2">
            {allPractices.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-medium text-brand-navy bg-slate-50 border border-brand-gold/30 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <span>{p.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Practice Areas Detailed List */}
        <div>
          {allPractices.map((practice) => (
            <div
              key={practice.number}
              id={practice.id}
              className="scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 lg:py-14 border-b border-brand-gold/20 last:border-b-0 relative"
            >
              {practice.aliases?.map((alias) => (
                <span
                  key={alias}
                  id={alias}
                  className="scroll-mt-24 sm:scroll-mt-28 absolute top-0 pointer-events-none"
                  aria-hidden="true"
                />
              ))}
              <span
                id={`practice-${practice.number}`}
                className="scroll-mt-24 sm:scroll-mt-28 absolute top-0 pointer-events-none"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left Column: Number, Title, Description, and Special Note */}
                <div className="lg:col-span-5 flex flex-col">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-brand-navy leading-[1.2] tracking-tight mb-4">
                    {practice.title}
                  </h2>
                  <p className="text-brand-navy/75 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-md font-normal">
                    {practice.description}
                  </p>

                  {practice.note && (
                    <div className="mt-5 border-l-2 border-brand-gold pl-4 py-1 max-w-md bg-slate-50/50">
                      <p className="text-xs sm:text-[13px] text-brand-navy/80 leading-relaxed font-normal italic">
                        {practice.note}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Work Scope List */}
                <div className="lg:col-span-7 flex flex-col pt-1">
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase mb-5 sm:mb-6">
                    Our work includes
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 border-t border-brand-gold/30">
                    {/* Sub-column 1 */}
                    <div className="divide-y divide-brand-gold/15">
                      {practice.col1.map((item) => (
                        <div
                          key={item}
                          className="py-3.5 sm:py-4 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                          <span className="text-brand-navy text-[14px] sm:text-[14.5px] leading-snug font-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Sub-column 2 */}
                    <div className="divide-y divide-brand-gold/15 border-t sm:border-t-0 border-brand-gold/15">
                      {practice.col2.map((item) => (
                        <div
                          key={item}
                          className="py-3.5 sm:py-4 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-blue shrink-0 mt-2 rounded-[1px]" />
                          <span className="text-brand-navy text-[14px] sm:text-[14.5px] leading-snug font-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure Where Your Matter Falls Callout Card */}
        <div className="mt-14 border border-brand-gold/30 bg-brand-navy text-white p-8 sm:p-10 lg:p-12 shadow-sm rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase block mb-2">
                Legal Advisory &amp; Assessment
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Not sure where your matter falls?
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-normal">
                Many legal issues span multiple areas of law. Contact our chambers with a brief summary of your circumstances, and our team will evaluate the right approach for you.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                Speak With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
