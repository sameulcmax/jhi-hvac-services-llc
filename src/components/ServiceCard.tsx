import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { accentStyles, type Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const accent = accentStyles[service.accent];

  return (
    <Link
      href={service.href}
      className={`group relative flex flex-col overflow-hidden rounded-[18px] border border-navy-900/10 bg-white p-4 shadow-[0_1px_2px_rgba(9,43,80,0.04),0_10px_30px_-22px_rgba(9,43,80,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(9,43,80,0.05),0_28px_50px_-30px_rgba(9,43,80,0.4)] md:p-6 ${accent.ring}`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-[3px] ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 -right-10 size-24 rounded-full bg-ice-50/70 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex size-11 items-center justify-center rounded-xl ring-1 md:size-[52px] md:rounded-2xl ${accent.tile}`}
          aria-hidden="true"
        >
          <service.icon className="size-5 md:size-6" strokeWidth={1.9} />
        </span>
        <span
          className={`hidden rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase sm:inline-flex ${accent.chip}`}
        >
          {service.tag}
        </span>
      </div>

      <h3 className="mt-3 font-display text-[13px] leading-snug font-bold text-navy-900 sm:text-[15px] md:mt-4 md:text-[18px]">
        {service.name}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-slate-600 sm:text-[12px] md:mt-2 md:line-clamp-none md:text-[13.5px]">
        {service.summary}
      </p>

      <div className="mt-auto flex items-center justify-between pt-3.5 md:pt-5">
        <span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-navy-800 transition-colors group-hover:text-ice-600 md:text-[13px]">
          Learn More
          <span className="sr-only"> about {service.name}</span>
        </span>
        <span className="flex size-6 items-center justify-center rounded-full bg-fog text-navy-800 ring-1 ring-navy-900/6 transition-all duration-300 group-hover:bg-ice-500 group-hover:text-white md:size-7">
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
      <span className="sr-only">Service {index + 1}</span>
    </Link>
  );
}
