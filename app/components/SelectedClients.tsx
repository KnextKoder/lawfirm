import React from "react";
import Image from "next/image";

interface ClientItem {
  name: string;
  logo?: string;
}

const clients: ClientItem[] = [
  {
    name: "Osun State Government",
    logo: "/clients/Osun State.jpg",
  },
  {
    name: "Kaduna State Government",
    logo: "/clients/Kaduna-State-1024x1024.png",
  },
  {
    name: "Industrial Training Fund",
    logo: "/clients/Industrial-Training-Fund-ITF-logo.png",
  },
  {
    name: "Nigeria Deposit Insurance Corporation",
    logo: "/clients/ndicLogo-02.png",
  },
  {
    name: "Osun State Internal Revenue Service",
    logo: "/clients/Osun Internal Revenue Service.png",
  },
  {
    name: "First Bank of Nigeria Limited",
    logo: "/clients/FirstBank.png",
  },
  {
    name: "Zenith Bank Plc",
    logo: "/clients/zenith-bank-logo.png",
  },
  {
    name: "LivingTrust Mortgage Bank Plc",
    logo: "/clients/living trust.png"
  },
  {
    name: "Ibadan Electricity Distribution Company",
    logo: "/clients/IBDEC.png",
  },
  {
    name: "Fatgbems Petroleum Company Limited",
    logo: "/clients/fatgbems.png",
  },
  {
    name: "WemaBod Nigeria Limited",
    logo: "/clients/wemabod.png",
  },
  {
    name: "And other institutions",
  },
];

const mobileClients = clients.filter(
  (client) => client.name !== "And other institutions"
);

export default function SelectedClients() {
  return (
    <section id="clients" className="w-full bg-white py-10 sm:py-12 lg:py-14 border-b border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <p className="text-[14px] sm:text-xs font-semibold tracking-[0.22em] text-brand-blue uppercase flex items-center gap-2">
            <span className="w-3.5 h-0.5 bg-brand-gold" aria-hidden="true" />
            <span>Selected Clients &amp; Engagements</span>
          </p>
        </div>

        {/* Mobile View: Vertical Marquee Showing 4 at a Time (sm:hidden) */}
        <div className="sm:hidden relative border border-brand-gold/25 bg-white overflow-hidden h-72 shadow-[0_1px_3px_rgba(10,27,51,0.03)]">
          {/* Subtle top & bottom edge fade masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-linear-to-b from-white via-white/70 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-linear-to-t from-white via-white/70 to-transparent z-10" />

          {/* Infinite Vertical Marquee Track */}
          <div className="animate-marquee-vertical flex flex-col">
            {[...mobileClients, ...mobileClients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="h-18 px-4 flex items-center gap-3.5 border-b border-brand-gold/20 shrink-0 active:bg-slate-50 transition-colors"
              >
                <div className="w-11 h-11 shrink-0 rounded-xs bg-white border border-brand-gold/30 p-1 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={38}
                      height={38}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-brand-blue">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="font-serif text-[15px] leading-snug text-brand-navy font-normal truncate">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / Tablet Grid (sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-gold/25 bg-white">
          {clients.map((client, index) => {
            const isLast = index === clients.length - 1;
            return (
              <div
                key={client.name}
                className="border-r border-b border-brand-gold/25 p-4 sm:p-5 lg:p-6 flex items-center gap-3.5 sm:gap-4 min-h-24 sm:min-h-26 lg:min-h-28 transition-colors duration-150 hover:bg-slate-50/80 group"
              >
                {isLast ? (
                  <span className="font-serif text-[15px] sm:text-[16px] lg:text-[17px] text-brand-navy/60 italic font-normal pl-1">
                    {client.name}
                  </span>
                ) : (
                  <>
                    <div className="w-12 h-12 sm:w-13 sm:h-13 shrink-0 rounded-xs bg-white border border-brand-gold/30 p-1.5 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-hover:border-brand-gold transition-colors">
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
                          <svg
                            className="w-5.5 h-5.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="font-serif text-[15px] sm:text-[15.5px] lg:text-[16.5px] leading-snug text-brand-navy font-normal">
                      {client.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
