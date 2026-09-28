import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-navy text-white pt-12 sm:pt-14 pb-8 sm:pb-10 border-t border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-brand-gold/20">
          {/* Column 1: Brand Logo & Tagline (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="Habeeb Salawu Chambers Home"
            >
              <span className="font-serif text-xl sm:text-[1.38rem] font-semibold text-white tracking-tight group-hover:text-brand-blue transition-colors">
                Habeeb Salawu Chambers
              </span>
            </Link>

            <p className="font-serif italic text-white/75 text-sm sm:text-[15px] mt-4 leading-relaxed font-normal">
              Legal Representation. Advisory. Dispute Resolution.
            </p>
          </div>

          {/* Column 2: THE FIRM (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase mb-2">
              The Firm
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-brand-blue text-sm transition-colors duration-150"
                >
                  About the Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-white/80 hover:text-brand-blue text-sm transition-colors duration-150"
                >
                  Experience &amp; Clientele
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/80 hover:text-brand-blue text-sm transition-colors duration-150"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="text-white/80 hover:text-brand-blue text-sm transition-colors duration-150"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-brand-blue text-sm transition-colors duration-150"
                >
                  Contact Chambers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase mb-2">
              Contact
            </p>
            <address className="not-italic text-sm text-white/80 space-y-2 leading-relaxed">
              <p>5A, Oke-Fia, Opposite Spices,</p>
              <p>Osogbo, Osun State, Nigeria</p>
              <p className="pt-2">
                <a
                  href="tel:+2348037125633"
                  className="hover:text-brand-blue transition-colors duration-150 block"
                >
                  +234 803 712 5633
                </a>
              </p>
              <p>
                <a
                  href="mailto:salawusan@yahoo.com"
                  className="hover:text-brand-blue transition-colors duration-150 block"
                >
                  salawusan@yahoo.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal Disclaimer Note */}
        <div className="pt-8 pb-4 text-xs sm:text-[13px] text-white/60 leading-relaxed max-w-5xl">
          <p>
            The information on this website is for general information only and does not constitute legal advice. Use of this website does not create a solicitor-client relationship.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs text-white/60">
          <p>
            &copy; {currentYear} Habeeb Salawu Chambers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
