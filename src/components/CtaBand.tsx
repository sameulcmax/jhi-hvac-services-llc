import { Phone, Snowflake, Flame, MapPin } from "lucide-react";
import { business } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

export function CtaBand({
  heading = "Let's Make Your Home More Comfortable.",
  description = "Looking for residential heating or cooling assistance? Get in touch with JHI SERVICES LLC.",
  eyebrow = "Talk to our team",
}: {
  heading?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] dot-field"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-ice-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 size-64 rounded-full bg-flame-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="shell relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="hidden size-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-ice-300 sm:flex">
            <Phone className="size-6" aria-hidden="true" />
          </div>
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-ice-300 uppercase">
              <Flame className="size-3.5 text-flame-400" aria-hidden="true" />
              {eyebrow}
              <Snowflake className="size-3.5 text-ice-300" aria-hidden="true" />
            </p>
            <h2 className="mt-2.5 text-[1.55rem] leading-tight font-extrabold text-white sm:text-[2rem]">
              {heading}
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-navy-100">
              {description}
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-[12px] font-medium text-white/70">
              <MapPin className="size-3.5 text-ice-300" aria-hidden="true" />
              Serving homeowners in {business.area}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-flame-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_16px_34px_-18px_rgba(242,140,40,0.95)] transition-all hover:-translate-y-0.5 hover:bg-flame-600"
          >
            <Phone className="size-4.5" aria-hidden="true" strokeWidth={2.5} />
            Call {business.phoneDisplay}
          </a>
          <ButtonLink href="/contact" variant="light" size="lg">
            Contact our team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
