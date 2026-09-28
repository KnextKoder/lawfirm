import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Careers | Habeeb Salawu Chambers",
  description:
    "Build your legal career with Habeeb Salawu Chambers. Opportunities for associate lawyers, junior lawyers, interns, NYSC graduates, and administrative roles in Osogbo, Nigeria.",
};

const opportunities = [
  {
    role: "Associate Lawyers",
    description:
      "Experienced practitioners with demonstrated courtroom advocacy, commercial drafting, and client advisory capabilities looking to handle substantive matters across our practice areas.",
    type: "Direct Practice",
    level: "Mid & Senior Level",
  },
  {
    role: "Junior Lawyers",
    description:
      "Recently called legal practitioners seeking disciplined exposure to civil and commercial litigation, property matters, legal research, and guided mentorship.",
    type: "Early Career",
    level: "0 - 3 Years PQE",
  },
  {
    role: "Legal Interns",
    description:
      "Law students and aspirants to the Bar who want hands-on exposure to active chambers practice, court proceedings, case analysis, and chambers administration.",
    type: "Internship",
    level: "Law Students & Bar Aspirants",
  },
  {
    role: "Graduate / NYSC Opportunities",
    description:
      "National Youth Service Corps (NYSC) law graduates seeking their primary place of assignment within a dynamic, full-service Nigerian law firm.",
    type: "NYSC Placement",
    level: "Corp Members",
  },
  {
    role: "Administrative & Support Roles",
    description:
      "Capable administrative officers, legal secretaries, registry clerks, and support personnel who keep chambers operations orderly, efficient, and client-focused.",
    type: "Chambers Operations",
    level: "Support Staff",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePath="/careers" />
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
                  <span className="text-brand-gold">Careers</span>
                </nav>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.08]">
                  Careers
                </h1>
              </div>

              <div className="lg:col-span-5 flex justify-start lg:justify-end pb-1 lg:pb-2">
                <p className="text-white/80 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-lg font-normal">
                  Build your legal career with Habeeb Salawu Chambers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Professional Commitment */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3 flex flex-col space-y-2 lg:space-y-3 pt-1">
                <span className="text-sm md:text-base font-semibold tracking-wider text-brand-blue">
                  Professional Growth
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-navy/70 uppercase">
                  Our Environment
                </p>
              </div>

              <div className="lg:col-span-9 flex flex-col space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight">
                  Build Your Legal Career With Us
                </h2>

                <p className="text-brand-navy/80 text-base sm:text-lg leading-relaxed font-normal">
                  Habeeb Salawu Chambers is committed to developing capable legal practitioners and maintaining a professional environment built around rigorous legal practice, continuous learning and client service.
                </p>

                <p className="text-brand-navy/75 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                  We welcome applications from lawyers and aspiring legal professionals interested in developing experience across our areas of practice &mdash; including litigation and dispute resolution, property and real estate, asset and debt recovery, banking and finance, corporate and commercial law, and institutional advisory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities List */}
        <section className="w-full bg-slate-50/70 py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-brand-gold/30">
              <div>
                <span className="text-sm md:text-base font-semibold tracking-wider text-brand-blue block mb-1">
                  Opportunities
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight">
                  Available Pathways
                </h3>
              </div>
              <p className="text-xs text-brand-navy/60 uppercase tracking-widest font-semibold">
                Practice &amp; Administrative Roles
              </p>
            </div>

            <div className="divide-y divide-brand-gold/20 border-t border-brand-gold/30 bg-white border rounded-xs shadow-xs">
              {opportunities.map((opp, idx) => (
                <div
                  key={opp.role}
                  className="p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-serif text-xl sm:text-2xl text-brand-navy">
                        {opp.role}
                      </h4>
                    </div>
                    <p className="text-brand-navy/75 text-sm sm:text-[15px] leading-relaxed font-normal mt-2">
                      {opp.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex md:flex-col items-end gap-2 self-start">
                    <span className="inline-block px-3 py-1 bg-brand-navy text-white text-[11px] font-semibold uppercase tracking-wider rounded-xs">
                      {opp.type}
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      {opp.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-brand-gold/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-navy text-white p-8 sm:p-12 lg:p-14 border border-brand-gold/40 rounded-xs shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold tracking-[0.22em] text-brand-gold uppercase block mb-3">
                  Application Procedure
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight mb-4">
                  Join Our Legal Team
                </h3>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                  To apply, please send your CV and a brief cover letter outlining your background, academic qualifications, and practice interests to our chambers recruitment address:
                </p>

                <div className="bg-white/10 border border-brand-gold/35 p-6 sm:p-8 rounded-xs inline-block max-w-xl">
                  <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
                    Send CV &amp; Cover Letter To:
                  </p>
                  <a
                    href="mailto:salawusan@yahoo.com"
                    className="font-serif text-2xl sm:text-3xl text-white hover:text-brand-blue underline underline-offset-4 decoration-brand-gold transition-colors block"
                  >
                    salawusan@yahoo.com
                  </a>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    Please indicate the role you are applying for in the email subject line (e.g., &ldquo;Application: Associate Lawyer &ndash; [Your Name]&rdquo;).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* General Inquiry Callout */}
        <section className="w-full bg-slate-50 py-12 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight mb-2">
                  Have questions regarding opportunities?
                </h4>
                <p className="text-brand-navy/75 text-sm sm:text-base font-normal">
                  You can reach our administrative team by telephone or through our general enquiry form.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  Contact Chambers
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-100 text-brand-navy text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shrink-0 border border-brand-gold/30"
                >
                  About the Firm
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
