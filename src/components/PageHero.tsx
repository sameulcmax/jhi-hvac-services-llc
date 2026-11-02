import Image from "next/image";
import type { ReactNode } from "react";
import { CheckCircle2, MapPin, Phone, Snowflake, Flame } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ui";
import { business } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  imageAlt,
  highlights = [],
  primaryHref = business.phoneHref,
  primaryLabel,
  secondary,
  accent = "ice",
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  highlights?: string[];
  primaryHref?: string;
  primaryLabel?: string;
  secondary?: { href: string; label: string };
  accent?: "ice" | "orange" | "navy";
}) {
  const eyebrowTone =
    accent === "orange"
      ? "text-flame-600"
      : accent === "navy"
        ? "text-navy-800"
        : "text-ice-700";

  return (
    <section className="relative overflow-hidden border-b border-navy-900/8 bg-mist">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ice-50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-10 size-40 rounded-full bg-flame-50/80 blur-2xl"
        aria-hidden="true"
      />
      <div className="shell relative pt-4 pb-9 md:pt-5 md:pb-14">
        <Breadcrumbs items={crumbs} />
        <div
          className={`mt-4 grid items-center gap-6 md:mt-4 ${
            image ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-10" : ""
          }`}
        >
          <div>
            <p className={`eyebrow ${eyebrowTone}`}>
              {accent === "orange" ? (
                <Flame className="size-4" aria-hidden="true" />
              ) : (
                <Snowflake className="size-4" aria-hidden="true" />
              )}
              {eyebrow}
            </p>
            <h1 className="mt-2.5 text-[1.85rem] leading-[1.12] font-extrabold text-navy-900 sm:text-[2.4rem] lg:text-[2.9rem]">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-slate-600 md:text-[16px]">
              {intro}
            </p>

            {highlights.length ? (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[12.5px] font-semibold text-navy-800"
                  >
                    <CheckCircle2
                      className={`size-4 ${accent === "orange" ? "text-flame-500" : "text-ice-500"}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-5 py-3 text-[14px] font-bold text-white shadow-[0_12px_26px_-16px_rgba(242,140,40,0.95)] transition-all hover:-translate-y-0.5 hover:bg-flame-600"
              >
                <Phone className="size-4" aria-hidden="true" />
                {primaryLabel ?? `Call ${business.phoneDisplay}`}
              </a>
              {secondary ? (
                <ButtonLink href={secondary.href} variant="outline" size="md">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>

            <p className="mt-3.5 flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
              <MapPin className="size-3.5 text-ice-600" aria-hidden="true" />
              {business.tagline} &middot; {business.area}
            </p>
          </div>

          {image ? (
            <div className="relative">
              <div className="relative h-[188px] overflow-hidden rounded-2xl border border-white ring-1 ring-navy-900/10 shadow-[0_24px_50px_-32px_rgba(9,43,80,0.55)] sm:h-[260px] lg:h-[340px]">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-3 left-3 hidden items-center gap-2 rounded-xl border border-navy-900/8 bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:flex"
                aria-hidden="true"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-flame-50 text-flame-600">
                  <Flame className="size-3.5" />
                </span>
                <span className="flex size-7 items-center justify-center rounded-lg bg-ice-50 text-ice-600">
                  <Snowflake className="size-3.5" />
                </span>
                <span className="text-[11.5px] font-bold text-navy-900">
                  Year-round residential comfort
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
