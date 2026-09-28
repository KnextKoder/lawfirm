import React from "react";
import Link from "next/link";

interface FurtherPracticeItem {
  title: string;
  subtitle: string;
  details: string;
}

const furtherPractices: FurtherPracticeItem[] = [
  {
    title: "Criminal Law",
    subtitle: "Representation and advisory services in criminal matters.",
    details:
      "Criminal defence · Bail applications · Criminal trials · Appeals · Investigations · Financial offences",
  },
  {
    title: "Family & Matrimonial",
    subtitle: "Family matters handled with discretion and sensitivity.",
    details:
      "Divorce · Custody and access · Maintenance · Family property · Succession disputes",
  },
  {
    title: "Employment & Labour",
    subtitle: "Advice for employers, employees and organisations.",
    details:
      "Employment contracts · Termination · Workplace claims · Labour litigation · Policies",
  },
  {
    title: "Arbitration, Mediation & ADR",
    subtitle: "Resolving disputes outside conventional litigation.",
    details:
      "Arbitration · Mediation · Conciliation · Enforcement of awards",
  },
  {
    title: "Constitutional & Administrative",
    subtitle: "Matters involving the exercise of public power.",
    details:
      "Judicial review · Public authority disputes · Statutory powers · Fundamental rights",
  },
  {
    title: "Probate, Wills & Estates",
    subtitle: "Succession and estate matters for families.",
    details:
      "Wills · Probate · Letters of administration · Estate disputes",
  },
  {
    title: "Construction & Infrastructure",
    subtitle: "Construction, development and infrastructure projects.",
    details:
      "Construction contracts · Procurement · Project disputes · Regulatory approvals",
  },
];

export default function FurtherPractice() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e5e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center gap-4 pb-6 sm:pb-8 border-b border-[#ded9cc]">
          <span className="text-sm font-semibold tracking-wider text-[#1d6ea8]">
            &sect; II
          </span>
          <span className="text-xs font-semibold tracking-[0.22em] text-[#556377] uppercase">
            Further Areas of Practice
          </span>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#ded9cc] mt-8 sm:mt-10">
          {/* Items 1 to 7 */}
          {furtherPractices.map((practice) => (
            <div
              key={practice.title}
              className="border-r border-b border-[#ded9cc] p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-55 sm:min-h-60 transition-colors duration-150 hover:bg-[#ede9df]/40"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#141d2e] leading-snug tracking-tight mb-3">
                  {practice.title}
                </h3>
                <p className="text-slate-600 text-[14px] sm:text-[14.5px] leading-relaxed mb-6 font-normal">
                  {practice.subtitle}
                </p>
              </div>
              <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal pt-2">
                {practice.details}
              </p>
            </div>
          ))}

          {/* Item 8: Callout Card (Solid Midnight Navy) */}
          <div className="border-r border-b border-[#ded9cc] bg-[#18223c] text-white p-7 sm:p-8 lg:p-9 flex flex-col justify-between min-h-55 sm:min-h-60">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug tracking-tight mb-4">
                Not sure where your matter falls?
              </h3>
            </div>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block text-white text-sm font-semibold underline underline-offset-4 decoration-white/50 hover:text-[#38bdf8] hover:decoration-[#38bdf8] transition-colors duration-150"
              >
                Speak with us
              </Link>
            </div>
          </div>

          {/* Item 9: Empty Placeholder Grid Cell on Large Screens */}
          <div
            className="hidden lg:block border-r border-b border-[#ded9cc] bg-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
