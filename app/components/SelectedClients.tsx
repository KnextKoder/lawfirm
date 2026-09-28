const clients = [
  "Osun State Government",
  "Kaduna State Government",
  "Industrial Training Fund",
  "Nigeria Deposit Insurance Corporation",
  "Osun State Internal Revenue Service",
  "First Bank of Nigeria Limited",
  "Zenith Bank Plc",
  "LivingTrust Mortgage Bank Plc",
  "Ibadan Electricity Distribution Company",
  "Fatgbems Petroleum Company Limited",
  "WemaBod Nigeria Limited",
  "And other institutions",
];

const mobileClients = clients.filter(
  (client) => client !== "And other institutions"
);

export default function SelectedClients() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e5e0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10">
          <p className="text-[14px] sm:text-xs font-semibold tracking-[0.22em] text-[#1d6ea8] uppercase">
            Selected Clients &amp; Engagements
          </p>
        </div>

        {/* Mobile View: Vertical Marquee Showing 4 at a Time (sm:hidden) */}
        <div className="sm:hidden relative border border-[#ded9cc] bg-white overflow-hidden h-64 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          {/* Subtle top & bottom edge fade masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-linear-to-b from-white via-white/70 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-linear-to-t from-white via-white/70 to-transparent z-10" />

          {/* Infinite Vertical Marquee Track */}
          <div className="animate-marquee-vertical flex flex-col">
            {[...mobileClients, ...mobileClients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="h-16 px-5 flex items-center border-b border-[#ded9cc] shrink-0 active:bg-[#ede9df]/40 transition-colors"
              >
                <span className="font-serif text-[15.5px] leading-snug text-[#182846] font-normal truncate">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / Tablet Grid (sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#ded9cc] bg-white">
          {clients.map((client, index) => {
            const isLast = index === clients.length - 1;
            return (
              <div
                key={client}
                className="border-r border-b border-[#ded9cc] p-6 sm:p-7 lg:p-8 flex items-center min-h-26.25 sm:min-h-30 transition-colors duration-150 hover:bg-[#ede9df]/50"
              >
                <span
                  className={`font-serif text-[17px] sm:text-[18px] lg:text-[19px] leading-[1.3] ${
                    isLast
                      ? "text-slate-600 italic font-normal"
                      : "text-[#182846] font-normal"
                  }`}
                >
                  {client}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
