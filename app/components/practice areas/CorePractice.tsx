"use client";

import React, { useEffect } from "react";

interface PracticeItem {
  id: string;
  aliases?: string[];
  number: string;
  title: string;
  description: string;
  col1: string[];
  col2: string[];
}

const corePractices: PracticeItem[] = [
  {
    id: "litigation-dispute-resolution",
    number: "01",
    title: "Litigation & Dispute Resolution",
    description:
      "Representation in contentious matters before the courts and other appropriate forums, from first instance through appeal.",
    col1: [
      "Civil litigation",
      "Land & property disputes",
      "Election petitions",
      "Injunctions",
      "Mediation & arbitration",
    ],
    col2: [
      "Commercial litigation",
      "Contractual disputes",
      "Appeals",
      "Enforcement of judgments",
      "Negotiation & settlement",
    ],
  },
  {
    id: "property-real-estate",
    aliases: ["real-estate-property"],
    number: "02",
    title: "Real Estate & Property",
    description:
      "Advice and representation on land, buildings, property transactions and disputes.",
    col1: [
      "Land acquisition & disposal",
      "Title investigation",
      "Leases & tenancy",
      "Boundary disputes",
    ],
    col2: [
      "Land recovery",
      "Perfection of title",
      "Recovery of possession",
      "Property development",
    ],
  },
  {
    id: "asset-debt-recovery",
    number: "03",
    title: "Asset & Debt Recovery",
    description:
      "Recovery and protection of financial and other assets for creditors, financial institutions and public bodies.",
    col1: [
      "Debt recovery",
      "Public revenue recovery",
      "Enforcement of securities",
      "Recovery litigation",
    ],
    col2: [
      "Asset recovery",
      "Loan recovery",
      "Judgment enforcement",
      "Negotiated settlement",
    ],
  },
  {
    id: "banking-finance",
    number: "04",
    title: "Banking & Finance",
    description:
      "Advice for financial institutions, businesses and private clients on banking and financial matters.",
    col1: [
      "Facility documentation",
      "Security documentation",
      "Enforcement of securities",
      "Regulatory matters",
    ],
    col2: [
      "Mortgage matters",
      "Banking litigation",
      "Financial recovery",
      "General advisory",
    ],
  },
  {
    id: "corporate-commercial",
    number: "05",
    title: "Corporate & Commercial",
    description:
      "Counsel on the legal and commercial affairs of businesses, companies and institutions.",
    col1: [
      "Corporate advisory",
      "Corporate governance",
      "Business structuring",
      "Regulatory compliance",
    ],
    col2: [
      "Contract drafting & review",
      "Shareholder matters",
      "Legal due diligence",
      "Commercial negotiations",
    ],
  },
  {
    id: "institutional-government-advisory",
    aliases: ["regulatory-institutional-advisory"],
    number: "06",
    title: "Regulatory & Institutional Advisory",
    description:
      "Legal support for government institutions, public bodies and organisations in regulated environments.",
    col1: [
      "Regulatory compliance",
      "Legal opinions",
      "Policy matters",
    ],
    col2: [
      "Government advisory",
      "Contract review",
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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e5e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center gap-4 pb-6 sm:pb-8 border-b border-[#ded9cc]">
          <span className="text-sm font-semibold tracking-wider text-[#1d6ea8]">
            &sect; I
          </span>
          <span className="text-xs font-semibold tracking-[0.22em] text-[#556377] uppercase">
            Core Practice
          </span>
        </div>

        {/* Practice Areas List */}
        <div>
          {corePractices.map((practice) => (
            <div
              key={practice.number}
              id={practice.id}
              className="scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-16 lg:py-20 border-b border-[#ded9cc] last:border-b-0 relative"
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
                {/* Left Column: Number, Title, Description */}
                <div className="lg:col-span-5 flex flex-col">
                  <span className="text-sm font-semibold tracking-wider text-[#1d6ea8] mb-3">
                    {practice.number}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-[#141d2e] leading-[1.2] tracking-tight mb-4">
                    {practice.title}
                  </h2>
                  <p className="text-slate-600 text-[14.5px] sm:text-[15px] leading-relaxed max-w-md font-normal">
                    {practice.description}
                  </p>
                </div>

                {/* Right Column: Work Scope List */}
                <div className="lg:col-span-7 flex flex-col pt-1">
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#556377] uppercase mb-5 sm:mb-6">
                    Our work includes
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 border-t border-[#ded9cc]">
                    {/* Sub-column 1 */}
                    <div className="divide-y divide-[#ded9cc]">
                      {practice.col1.map((item) => (
                        <div
                          key={item}
                          className="py-3.5 sm:py-4 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-[#1d6ea8] shrink-0 mt-2 rounded-[1px]" />
                          <span className="text-[#182846] text-[14px] sm:text-[14.5px] leading-snug font-normal">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Sub-column 2 */}
                    <div className="divide-y divide-[#ded9cc] border-t sm:border-t-0 border-[#ded9cc]">
                      {practice.col2.map((item) => (
                        <div
                          key={item}
                          className="py-3.5 sm:py-4 flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-[#1d6ea8] shrink-0 mt-2 rounded-[1px]" />
                          <span className="text-[#182846] text-[14px] sm:text-[14.5px] leading-snug font-normal">
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
      </div>
    </section>
  );
}
