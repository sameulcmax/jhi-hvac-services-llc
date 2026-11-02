import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Flame,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaBand } from "@/components/CtaBand";
import {
  ButtonLink,
  Eyebrow,
  IconTile,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { business, guides, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Residential Heating & Cooling in Orange County, NJ",
  description:
    "JHI SERVICES LLC offers residential heating and cooling in Orange County, NJ — heating services, AC services, heat pumps, installation, repairs, and preventive maintenance. Call (914) 258-6101.",
  path: "/",
});

const aboutHighlights = [
  {
    icon: House,
    title: "Residential-Focused Solutions",
    copy: "Guidance built around how a home actually lives, room by room.",
    accent: "ice" as const,
  },
  {
    icon: ThermometerSun,
    title: "Heating & Cooling",
    copy: "One point of contact for both comfort seasons.",
    accent: "mixed" as const,
  },
  {
    icon: CalendarCheck,
    title: "Comfort Throughout the Seasons",
    copy: "Practical support from the first cold snap to the last warm day.",
    accent: "orange" as const,
  },
];

const whyCards = [
  {
    icon: House,
    title: "Residential-Focused Solutions",
    copy: "Every recommendation starts with the home in front of us — its layout, airflow, and the rooms that never quite feel right.",
    wrap: "border-ice-100 bg-ice-50/70",
    iconWrap: "bg-white text-ice-600 ring-ice-100",
  },
  {
    icon: ThermometerSun,
    title: "Heating & Cooling Services",
    copy: "Heating, cooling, and heat pump support from one team, so seasonal questions do not need a new phone number.",
    wrap: "border-flame-100 bg-flame-50/70",
    iconWrap: "bg-white text-flame-600 ring-flame-100",
  },
  {
    icon: CalendarCheck,
    title: "Comfort Across Every Season",
    copy: "From fall heating readiness to summer cooling care, service timing follows the New Jersey weather calendar.",
    wrap: "border-navy-100 bg-navy-50",
    iconWrap: "bg-white text-navy-800 ring-navy-100",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service Approach",
    copy: "Clear communication about what we observed, which options exist, and what the next practical step looks like.",
    wrap: "border-navy-900/10 bg-white",
    iconWrap: "bg-fog text-navy-800 ring-navy-900/8",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid-bg relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-20 -left-24 size-72 rounded-full bg-ice-50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 right-0 hidden h-2/3 w-1/3 dot-field opacity-40 lg:block"
          aria-hidden="true"
        />

        <div className="shell relative pt-4 pb-7 md:pt-9 md:pb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-12">
            <div className="lg:col-start-1 lg:row-start-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ice-100 bg-white/95 py-1.5 pr-2.5 pl-1.5 text-[9px] font-bold tracking-[0.1em] text-navy-800 uppercase shadow-[0_2px_10px_-4px_rgba(9,43,80,0.25)] sm:text-[10px]">
                <span className="flex size-5 items-center justify-center rounded-full bg-ice-50 text-ice-600">
                  <ShieldCheck className="size-3" aria-hidden="true" />
                </span>
                Your local residential HVAC professionals
              </span>

              <h1 className="mt-3 text-[1.8rem] leading-[1.1] font-extrabold text-navy-900 sm:text-[2.25rem] md:text-[2.65rem] lg:text-[3.05rem]">
                Comfort Starts at Home.{" "}
                <span className="bg-gradient-to-r from-navy-800 via-navy-700 to-ice-600 bg-clip-text text-transparent">
                  We Keep It That Way.
                </span>
              </h1>

              <p className="mt-2.5 max-w-lg text-[13.5px] leading-relaxed text-slate-600 sm:text-[15px] md:text-base">
                Reliable residential heating and cooling solutions to help keep your home
                comfortable throughout every season.
              </p>
              <div className="mt-5 hidden lg:block">
                <ButtonLink href="/services" variant="outline" size="md">
                  Explore Our Services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>

            <div className="relative mt-4 sm:mt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <div
                className="absolute -inset-1.5 rounded-[24px] bg-gradient-to-br from-ice-100 via-white to-flame-100 opacity-80"
                aria-hidden="true"
              />
              <div className="relative h-[178px] overflow-hidden rounded-[20px] border border-white ring-1 ring-navy-900/10 shadow-[0_22px_46px_-30px_rgba(9,43,80,0.6)] sm:h-[250px] lg:h-[412px] lg:rounded-[22px]">
                <Image
                  src="/hero.png"
                  alt="Residential HVAC technician using a diagnostic meter at a floor vent inside a bright modern home"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 47vw"
                  className="object-cover object-[50%_45%]"
                />
                <div
                  className="absolute inset-x-2.5 bottom-2.5 hidden items-center justify-between gap-2 rounded-xl border border-white/60 bg-white/92 px-2.5 py-1.5 backdrop-blur sm:flex lg:inset-x-4 lg:bottom-4 lg:px-3 lg:py-2"
                >
                  <span className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-md bg-flame-50 text-flame-600">
                      <Flame className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="flex size-6 items-center justify-center rounded-md bg-ice-50 text-ice-600">
                      <Snowflake className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[10.5px] leading-tight font-bold text-navy-900 lg:text-[11.5px]">
                      Year-round residential comfort
                    </span>
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-navy-900 px-2 py-1 text-[9.5px] font-semibold text-white">
                    <MapPin className="size-2.5 text-ice-300" aria-hidden="true" />
                    Orange County, NJ
                  </span>
                </div>
              </div>

              <div
                className="absolute -top-2.5 -left-2.5 hidden items-center gap-2 rounded-xl border border-navy-900/8 bg-white px-2.5 py-2 shadow-[0_14px_30px_-18px_rgba(9,43,80,0.5)] md:flex lg:-top-3 lg:-left-4"
                aria-hidden="true"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-ice-50 text-ice-600 ring-1 ring-ice-100">
                  <Wind className="size-4" />
                </span>
                <span className="text-[10.5px] leading-tight font-bold text-navy-900">
                  Heating
                  <br />
                  <span className="text-slate-500">&amp; cooling care</span>
                </span>
              </div>
            </div>

            <div className="mt-4 lg:col-start-1 lg:row-start-2 lg:mt-6">
              <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-[12px]">
                <MapPin className="size-3.5 shrink-0 text-ice-600" aria-hidden="true" />
                Residential Heating &amp; Cooling <span className="text-slate-300">|</span>{" "}
                {business.area}
              </p>

              <ul className="mt-3 flex flex-wrap gap-1.5 lg:hidden">
                {[
                  { icon: Flame, label: "Heating" },
                  { icon: Snowflake, label: "Cooling" },
                  { icon: House, label: "Residential homes" },
                ].map((chip) => (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-1 rounded-full border border-navy-900/10 bg-white px-2 py-1 text-[10px] font-semibold text-navy-800"
                  >
                    <chip.icon
                      className={`size-3 ${
                        chip.label === "Heating" ? "text-flame-500" : "text-ice-600"
                      }`}
                      aria-hidden="true"
                    />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="relative overflow-hidden bg-white pb-12 md:pb-16">
        <div className="shell grid items-center gap-7 md:gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[220px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 shadow-[0_24px_50px_-34px_rgba(9,43,80,0.55)] sm:h-[300px] md:h-[360px]">
                <Image
                  src="https://images.pexels.com/photos/20648485/pexels-photo-20648485.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Bright residential living room with large windows and comfortable seating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-2 -bottom-6 hidden w-32 overflow-hidden rounded-xl border-4 border-white shadow-lg sm:block md:w-40">
                <div className="relative h-24 md:h-28">
                  <Image
                    src="https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Digital thermostat mounted on a home wall showing temperature settings"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-3 left-3 flex items-center gap-2 rounded-xl border border-navy-900/8 bg-white/95 px-2.5 py-1.5 shadow-md backdrop-blur">
                <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-ice-50 to-flame-50 text-navy-800 ring-1 ring-ice-100">
                  <ThermometerSun className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-[10.5px] font-bold text-navy-900">
                  Home comfort, season after season
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow accent="ice">About JHI Services LLC</Eyebrow>
            <h2 className="mt-2.5 text-[1.6rem] leading-tight font-extrabold text-navy-900 sm:text-[2rem] md:text-[2.3rem]">
              Your Home Comfort Is Our Priority.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 md:text-[15.5px]">
              JHI SERVICES LLC focuses on residential heating and cooling solutions for
              homeowners in {business.area}. From maintaining comfortable indoor
              temperatures to addressing heating and cooling concerns, we aim to provide
              practical solutions for your home.
            </p>

            <ul className="mt-5 space-y-2.5">
              {aboutHighlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-mist/70 p-2.5 pr-3"
                >
                  <IconTile icon={item.icon} accent={item.accent} size="sm" />
                  <span>
                    <span className="block text-[13px] font-bold text-navy-900">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] leading-relaxed text-slate-600">
                      {item.copy}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ButtonLink href="/about" variant="navy" size="md">
                Learn More About Us
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <a
                href={business.phoneHref}
                className="text-[13px] font-semibold text-navy-800 hover:text-ice-600"
              >
                Or call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-fog section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Our services"
            title="Complete Heating & Cooling Solutions for Your Home."
            description="Explore residential heating and cooling services designed to support your home's comfort throughout the year."
            action={<TextLink href="/services">View all services</TextLink>}
          />
          <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-navy-900/8 bg-white px-4 py-3">
            <p className="text-[12.5px] text-slate-600">
              Not sure which service fits your home? Start with a conversation.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-ice-700 hover:text-ice-600"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Heating & cooling"
            title="Comfort Through Every Season."
            description="Two dedicated comfort seasons, one residential team. Explore the side of the year your home needs most right now."
            accent="orange"
            align="center"
          />
          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
            <article className="group relative overflow-hidden rounded-2xl border border-flame-100 bg-white shadow-[0_20px_40px_-34px_rgba(9,43,80,0.5)]">
              <div className="relative h-[180px] overflow-hidden sm:h-[210px]">
                <Image
                  src="/hero.png"
                  alt="Residential furnace and ductwork being serviced in a clean home utility space"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/5 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-flame-700 uppercase backdrop-blur">
                  <Flame className="size-3" aria-hidden="true" />
                  Heating
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-display text-[19px] font-extrabold text-navy-900 md:text-[22px]">
                  Stay Warm When It Matters.
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 md:text-[14px]">
                  Keep your home warm and comfortable during colder weather with
                  residential heating solutions.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <TextLink href="/services/heating" tone="orange">
                    Explore Heating Services
                  </TextLink>
                  <span className="flex size-8 items-center justify-center rounded-full bg-flame-50 text-flame-600 ring-1 ring-flame-100">
                    <Flame className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-ice-100 bg-white shadow-[0_20px_40px_-34px_rgba(9,43,80,0.5)]">
              <div className="relative h-[180px] overflow-hidden sm:h-[210px]">
                <Image
                  src="https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Residential outdoor air conditioning unit beside a landscaped home wall"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-navy-950/5 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-ice-700 uppercase backdrop-blur">
                  <Snowflake className="size-3" aria-hidden="true" />
                  Cooling
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-display text-[19px] font-extrabold text-navy-900 md:text-[22px]">
                  Enjoy a Refreshing Home.
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 md:text-[14px]">
                  Maintain a comfortable indoor environment with residential air
                  conditioning solutions.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <TextLink href="/services/air-conditioning" tone="ice">
                    Explore Cooling Services
                  </TextLink>
                  <span className="flex size-8 items-center justify-center rounded-full bg-ice-50 text-ice-600 ring-1 ring-ice-100">
                    <Snowflake className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-navy-900/8 bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Why JHI Services LLC"
            title="A Better Approach to Home Comfort."
            description="Residential comfort is not a one-size-fits-all product. Our approach centers on the home, the season, and the people living in it."
            accent="navy"
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4 lg:grid-cols-4">
            {whyCards.map((card) => (
              <article
                key={card.title}
                className={`flex flex-col rounded-2xl border p-4 transition-shadow hover:shadow-soft md:p-5 ${card.wrap}`}
              >
                <span
                  className={`flex size-10 items-center justify-center rounded-xl ring-1 ${card.iconWrap}`}
                  aria-hidden="true"
                >
                  <card.icon className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-3 font-display text-[14.5px] font-bold text-navy-900">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog section-y">
        <div className="shell">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our process"
              title="A Simple Approach to Better Home Comfort."
              description="Four straightforward steps, starting with a conversation about what your home needs."
            />
            <div className="flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-navy-800">
              <Phone className="size-3.5 text-flame-500" aria-hidden="true" />
              {business.phoneDisplay}
            </div>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white section-y">
        <div className="shell">
          <div className="relative overflow-hidden rounded-3xl border border-ice-100 bg-gradient-to-br from-ice-50/80 via-white to-flame-50/50 p-4 md:p-7 lg:p-9">
            <div
              className="pointer-events-none absolute -top-12 -right-10 size-40 rounded-full bg-ice-100/50 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <Eyebrow accent="ice">Home comfort library</Eyebrow>
                <h2 className="mt-2.5 text-[1.55rem] leading-tight font-extrabold text-navy-900 sm:text-[1.9rem]">
                  Explore Our Home Comfort Guides.
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600 md:text-[14.5px]">
                  Learn more about residential heating, cooling, and maintaining a
                  comfortable home.
                </p>
              </div>
              <TextLink href="/guides">All guides</TextLink>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col rounded-xl border border-navy-900/8 bg-white p-3.5 shadow-[0_1px_2px_rgba(9,43,80,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-ice-300 hover:shadow-soft md:p-4"
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-lg ring-1 md:size-10 ${
                      guide.accent === "orange"
                        ? "bg-flame-50 text-flame-600 ring-flame-100"
                        : guide.accent === "navy"
                          ? "bg-navy-50 text-navy-800 ring-navy-100"
                          : "bg-ice-50 text-ice-600 ring-ice-100"
                    }`}
                    aria-hidden="true"
                  >
                    <guide.icon className="size-4 md:size-[18px]" />
                  </span>
                  <h3 className="mt-2.5 font-display text-[13px] font-bold text-navy-900 md:text-[15px]">
                    {guide.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-600 md:text-[12px]">
                    {guide.summary}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1 text-[10.5px] font-bold text-ice-700 md:text-[11.5px]">
                    Explore Guide
                    <ArrowRight
                      className="size-3 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy-900/8 bg-mist section-y">
        <div className="shell grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Eyebrow accent="navy">Service area</Eyebrow>
            <h2 className="mt-2.5 text-[1.55rem] leading-tight font-extrabold text-navy-900 sm:text-[1.95rem] md:text-[2.2rem]">
              Proudly Serving Orange County, New Jersey.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              JHI SERVICES LLC provides residential heating and cooling solutions for
              homeowners throughout {business.area}.
            </p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Residential heating support",
                "Residential cooling support",
                "Installation & replacement planning",
                "Repairs, troubleshooting & maintenance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-navy-900/8 bg-white px-2.5 py-2 text-[12px] font-medium text-navy-800"
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-ice-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <ButtonLink href="/contact" variant="navy" size="md">
                Contact Our Team
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/service-areas" variant="outline" size="md">
                Service area details
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[210px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 sm:h-[280px] lg:h-[330px]">
              <Image
                src="https://images.pexels.com/photos/10847173/pexels-photo-10847173.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Suburban New Jersey home exterior surrounded by trees during autumn"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/10 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/95 p-2.5 backdrop-blur">
                <span className="flex size-9 items-center justify-center rounded-lg bg-ice-50 text-ice-600 ring-1 ring-ice-100">
                  <MapPin className="size-4.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[12px] font-bold text-navy-900">
                    Orange County, New Jersey
                  </span>
                  <span className="block text-[10.5px] text-slate-500">
                    Residential heating &amp; cooling service area
                  </span>
                </span>
              </div>
            </div>
            <div
              className="absolute -top-3 -right-3 hidden size-16 items-center justify-center rounded-2xl border border-ice-100 bg-white text-ice-600 shadow-md sm:flex"
              aria-hidden="true"
            >
              <House className="size-7" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
