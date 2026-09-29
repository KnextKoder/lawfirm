import Link from "next/link";
import Image from "next/image";

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
              className="group flex items-center gap-2 min-[380px]:gap-2.5 sm:gap-3.5 md:gap-4 transition-all duration-300 hover:opacity-95 focus:outline-none"
              aria-label="Habeeb Salawu Chambers Home"
            >
              {/* Official Brand Logo - Scaled to match Navbar */}
              <div className="shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Habeeb Salawu Chambers Logo"
                  width={76}
                  height={60}
                  className="h-9 min-[380px]:h-10.5 sm:h-12.5 md:h-14 lg:h-15.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Gold Divider */}
              <div
                className="h-8 min-[380px]:h-9.5 sm:h-11.5 md:h-13 lg:h-14.5 w-0.5 bg-brand-gold shrink-0"
                aria-hidden="true"
              />

              {/* Firm Typography - Scaled to match Navbar */}
              <div className="flex flex-col justify-center select-none min-w-0">
                <span className="font-serif text-[0.96rem] min-[360px]:text-[1.06rem] min-[400px]:text-[1.18rem] sm:text-[1.45rem] md:text-[1.7rem] lg:text-[1.92rem] font-bold tracking-tight text-white leading-tight group-hover:text-brand-blue transition-colors whitespace-nowrap">
                  Habeeb Salawu Chambers
                </span>
                <span className="text-[7.5px] min-[360px]:text-[8.5px] min-[400px]:text-[9.5px] sm:text-[10.5px] md:text-[11.5px] lg:text-[12px] font-semibold tracking-[0.2em] min-[360px]:tracking-[0.24em] sm:tracking-[0.28em] md:tracking-[0.32em] text-brand-gold uppercase leading-none mt-0.5 sm:mt-1.5 whitespace-nowrap">
                  Barristers &amp; Solicitors
                </span>
              </div>
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
