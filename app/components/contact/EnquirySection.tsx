"use client";
import React, { useState } from "react";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    area: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const practiceAreaOptions = [
    "Litigation & Dispute Resolution",
    "Corporate & Commercial Law",
    "Real Estate & Property Law",
    "Banking & Finance",
    "Asset & Debt Recovery",
    "Criminal Law",
    "Family & Matrimonial Law",
    "Employment & Labour Law",
    "Arbitration, Mediation & ADR",
    "Constitutional & Administrative Law",
    "Probate, Wills & Estate Administration",
    "Construction & Infrastructure Law",
    "Regulatory & Institutional Advisory",
    "Other Legal Assistance",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      area: "",
      description: "",
    });
    setSubmitted(false);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 text-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Chambers Directory & Location                */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Top dividing accent line */}
            <div className="w-full h-px bg-brand-gold/30 mb-6 sm:mb-8" />

            {/* Block 1: Chambers Address */}
            <div className="pb-5 sm:pb-6 border-b border-brand-gold/20">
              <span className="block text-sm md:text-base font-semibold tracking-[0.18em] text-brand-blue uppercase mb-2">
                Chambers
              </span>
              <address className="not-italic font-serif text-lg sm:text-xl text-brand-navy leading-relaxed font-normal">
                5A, Oke-Fia, Opposite Spices
                <br />
                Osogbo, Osun State, Nigeria
              </address>
            </div>

            {/* Block 2: Telephone & WhatsApp */}
            <div className="py-5 sm:py-6 border-b border-brand-gold/20">
              <span className="block text-sm md:text-base font-semibold tracking-[0.18em] text-brand-blue uppercase mb-2">
                Telephone
              </span>
              <p className="font-serif text-lg sm:text-xl text-brand-navy leading-relaxed font-normal">
                <a
                  href="tel:+2348037125633"
                  className="hover:text-brand-blue transition-colors"
                >
                  +234 803 712 5633
                </a>
              </p>
            </div>

            {/* Block 3: Email */}
            <div className="py-5 sm:py-6 border-b border-brand-gold/20">
              <span className="block text-sm md:text-base font-semibold tracking-[0.18em] text-brand-blue uppercase mb-2">
                Email
              </span>
              <p className="font-serif text-lg sm:text-xl text-brand-navy leading-relaxed font-normal">
                <a
                  href="mailto:salawusan@yahoo.com"
                  className="hover:text-brand-blue transition-colors"
                >
                  salawusan@yahoo.com
                </a>
              </p>
            </div>

            {/* Block 4: Office Hours */}
            <div className="py-5 sm:py-6 border-b border-brand-gold/20">
              <span className="block text-sm md:text-base font-semibold tracking-[0.18em] text-brand-blue uppercase mb-2">
                Office Hours
              </span>
              <p className="font-serif text-lg sm:text-xl text-brand-navy leading-relaxed font-normal">
                Monday &ndash; Friday, 08:30 &ndash; 17:30
              </p>
              <p className="text-xs text-brand-navy/60 mt-1 font-sans">
                Consultations arranged by appointment
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Send an Enquiry Card                        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-gold/30 p-7 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(10,27,51,0.03)]">
              <h2 className="font-serif text-3xl sm:text-[36px] text-brand-navy font-normal tracking-tight">
                Send an enquiry
              </h2>
              <p className="text-brand-navy/70 text-sm sm:text-[15px] mt-2 mb-8 sm:mb-10 font-normal">
                We will respond to confirm whether and how we can assist.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-navy mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-brand-navy/75 text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Thank you for contacting Habeeb Salawu Chambers. Our chambers
                    will review your enquiry and respond to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-block bg-brand-navy hover:bg-brand-blue text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-colors cursor-pointer border border-brand-gold/40"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
                  {/* Two-Column: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] font-semibold tracking-[0.14em] text-brand-navy uppercase mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-brand-gold/40 focus:border-brand-blue text-sm sm:text-base text-brand-navy pb-2 outline-none transition-colors rounded-none"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-[11px] font-semibold tracking-[0.14em] text-brand-navy uppercase mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border-b border-brand-gold/40 focus:border-brand-blue text-sm sm:text-base text-brand-navy pb-2 outline-none transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-semibold tracking-[0.14em] text-brand-navy uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-brand-gold/40 focus:border-brand-blue text-sm sm:text-base text-brand-navy pb-2 outline-none transition-colors rounded-none"
                    />
                  </div>

                  {/* Area of Legal Assistance */}
                  <div className="relative">
                    <label
                      htmlFor="area"
                      className="block text-[11px] font-semibold tracking-[0.14em] text-brand-navy uppercase mb-2"
                    >
                      Area of Legal Assistance
                    </label>
                    <div className="relative">
                      <select
                        id="area"
                        required
                        value={formData.area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-brand-gold/40 focus:border-brand-blue text-sm sm:text-base text-brand-navy pb-2 pr-8 outline-none transition-colors cursor-pointer appearance-none rounded-none"
                      >
                        <option value="" disabled>
                          Select an area
                        </option>
                        {practiceAreaOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {/* Chevron Arrow */}
                      <div className="pointer-events-none absolute right-0 bottom-2.5 flex items-center text-brand-gold">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-[11px] font-semibold tracking-[0.14em] text-brand-navy uppercase mb-2"
                    >
                      Brief Description
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      required
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full border border-brand-gold/40 focus:border-brand-blue text-sm sm:text-base text-brand-navy p-3 sm:p-3.5 outline-none transition-colors rounded-none resize-y bg-transparent"
                    />
                  </div>

                  {/* Legal Disclaimer Box */}
                  <div className="border-l-2 border-brand-blue pl-3.5 sm:pl-4 py-0.5">
                    <p className="text-xs text-brand-navy/70 leading-relaxed font-normal">
                      Submitting an enquiry does not by itself create a
                      solicitor&ndash;client relationship. Please do not send
                      confidential or time-sensitive information until the firm
                      confirms it is able to act.
                    </p>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="border-l-2 border-red-500 pl-3.5 py-0.5">
                      <p className="text-xs text-red-600 leading-relaxed">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 bg-brand-gold hover:bg-brand-navy active:bg-brand-navy text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-xs transition-all duration-150 border border-brand-gold/40 shadow-xs hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
