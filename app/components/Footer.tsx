import React from "react";
import Link from "next/link";

export function HSCFooterEmblem({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Habeeb Salawu Chambers Inverted Emblem"
    >
      {/* White curved foundation plinth */}
      <path d="M 6 72 Q 50 63 94 72 L 96 66 Q 50 56 4 66 Z" fill="#ffffff" />

      {/* White 'H' Structure */}
      <path
        d="M 12 18 L 30 18 L 30 24 L 25 24 L 25 64 L 31 64 L 31 70 L 8 70 L 8 64 L 14 64 L 14 24 L 9 24 L 9 18 Z"
        fill="#ffffff"
      />
      <path
        d="M 70 18 L 88 18 L 88 24 L 83 24 L 83 64 L 89 64 L 89 70 L 66 70 L 66 64 L 72 64 L 72 24 L 67 24 L 67 18 Z"
        fill="#ffffff"
      />
      <path d="M 25 38 L 72 38 L 72 64 L 25 64 Z" fill="#ffffff" />

      {/* Sky Blue 'S' */}
      <text
        x="50"
        y="34"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="28"
        fontWeight="700"
        fill="#38bdf8"
        letterSpacing="0"
      >
        S
      </text>

      {/* Dark Navy 'C' centered in the white crossbar field */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="24"
        fontWeight="700"
        fill="#171f38"
        letterSpacing="0"
      >
        C
      </text>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#171f38] text-white pt-16 sm:pt-20 pb-12 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 border-b border-slate-700/60">
          {/* Column 1: Brand Logo & Tagline (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="Habeeb Salawu Chambers Home"
            >
              <HSCFooterEmblem className="h-10 sm:h-11 w-auto" />
              <span className="font-serif text-xl sm:text-[1.38rem] font-semibold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                Habeeb Salawu Chambers
              </span>
            </Link>

            <p className="font-serif italic text-slate-300 text-sm sm:text-[15px] mt-4 leading-relaxed font-normal">
              Legal Representation. Advisory. Dispute Resolution.
            </p>
          </div>

          {/* Column 2: FIRM (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-slate-200 uppercase mb-2">
              Firm
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#the-firm"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  The Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PRACTICE (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-slate-200 uppercase mb-2">
              Practice
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/practice-areas#litigation-dispute-resolution"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  Litigation &amp; Disputes
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#property-real-estate"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  Property &amp; Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#asset-debt-recovery"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  Asset &amp; Debt Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#banking-finance"
                  className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  Banking &amp; Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CHAMBERS (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-slate-200 uppercase mb-2">
              Chambers
            </p>
            <address className="not-italic text-sm text-slate-300 space-y-2 leading-relaxed">
              <p>5A, Oke-Fia, Opposite Spices,</p>
              <p>Osogbo, Osun State, Nigeria</p>
              <p className="pt-2">
                <a
                  href="tel:+2348037125633"
                  className="hover:text-white transition-colors duration-150 block"
                >
                  +234 803 712 5633
                </a>
              </p>
              <p>
                <a
                  href="mailto:salawusan@yahoo.com"
                  className="hover:text-white transition-colors duration-150 block"
                >
                  salawusan@yahoo.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal Disclaimer Note */}
        <div className="pt-8 pb-4 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-4xl">
          <p>
            The information on this website is for general information only and does not constitute legal advice. Use of this website does not create a solicitor-client relationship.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Habeeb Salawu Chambers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-white transition-colors duration-150"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
