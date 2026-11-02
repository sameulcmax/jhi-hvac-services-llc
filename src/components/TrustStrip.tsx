import { trustItems } from "@/lib/site";

export function TrustStrip() {
  return (
    <section aria-label="Residential HVAC service highlights" className="bg-white pb-10 md:pb-14">
      <div className="shell">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-4 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_18px_40px_-32px_rgba(9,43,80,0.5)] sm:p-5 md:grid-cols-4 md:divide-x md:divide-navy-900/8 md:gap-0">
          {trustItems.map((item, index) => (
            <li
              key={item.label}
              className={`flex items-start gap-2.5 md:items-center md:gap-3 md:px-4 ${
                index === 0 ? "md:pl-1" : ""
              }`}
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg ring-1 md:size-10 md:rounded-xl ${
                  index % 2 === 0
                    ? "bg-ice-50 text-ice-600 ring-ice-100"
                    : "bg-flame-50 text-flame-600 ring-flame-100"
                }`}
                aria-hidden="true"
              >
                <item.icon className="size-4 md:size-[18px]" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-[11.5px] leading-tight font-bold text-navy-900 md:text-[12.5px]">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[10px] leading-tight text-slate-500 md:text-[11px]">
                  {item.caption}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
