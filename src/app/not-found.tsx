import Link from "next/link";
import { ArrowRight, Flame, House, Phone, Snowflake } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="hero-grid-bg relative overflow-hidden">
      <div className="shell flex flex-col items-center justify-center py-16 text-center md:py-24">
        <span className="flex size-14 items-center justify-center rounded-2xl border border-ice-100 bg-white text-ice-600 shadow-sm">
          <House className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-4 text-[11px] font-bold tracking-[0.16em] text-ice-700 uppercase">
          Page not found
        </p>
        <h1 className="mt-2 max-w-xl text-[1.8rem] leading-tight font-extrabold text-navy-900 sm:text-[2.3rem]">
          This page is not part of our home comfort guide.
        </h1>
        <p className="mt-2.5 max-w-md text-[14px] leading-relaxed text-slate-600">
          The page you were looking for may have moved. Explore our residential heating and
          cooling services, or call the team directly.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-5 py-3 text-[13.5px] font-bold text-white hover:bg-flame-600"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <ButtonLink href="/services" variant="navy" size="md">
            Explore services
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <Link
            href="/"
            className="text-[13px] font-semibold text-navy-800 underline decoration-ice-300 underline-offset-4 hover:text-ice-700"
          >
            Back to home
          </Link>
        </div>
        <div className="mt-7 flex items-center gap-3 text-[11px] font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Flame className="size-3.5 text-flame-500" aria-hidden="true" />
            Heating
          </span>
          <span className="h-3 w-px bg-navy-900/15" aria-hidden="true" />
          <span className="inline-flex items-center gap-1">
            <Snowflake className="size-3.5 text-ice-500" aria-hidden="true" />
            Cooling
          </span>
          <span className="h-3 w-px bg-navy-900/15" aria-hidden="true" />
          <span>{business.areaShort}</span>
        </div>
      </div>
    </section>
  );
}
