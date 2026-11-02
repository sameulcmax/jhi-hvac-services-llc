import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Handshake,
  House,
  MapPin,
  MessageSquare,
  Phone,
  Snowflake,
  ThermometerSun,
  Wind,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink, Eyebrow, IconTile, SectionHeading } from "@/components/ui";
import { JsonLd } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Our Residential HVAC Company",
  description:
    "Learn about JHI SERVICES LLC, a residential heating and cooling company serving homeowners in Orange County, New Jersey with practical, season-by-season comfort solutions.",
  path: "/about",
});

const approach = [
  {
    icon: House,
    title: "Listen to the home first",
    copy: "Layout, airflow, and daily routines all shape comfort. We start with questions before recommendations.",
    accent: "ice" as const,
  },
  {
    icon: ThermometerSun,
    title: "Match solutions to the season",
    copy: "Heating and cooling needs change through the year, and so does the support your system needs.",
    accent: "orange" as const,
  },
  {
    icon: MessageSquare,
    title: "Keep the conversation clear",
    copy: "We explain what we observed and the practical paths forward, in language that makes sense.",
    accent: "navy" as const,
  },
];

const expectations = [
  {
    icon: House,
    title: "A residential focus",
    copy: "Service conversations are built around homes in Orange County, NJ — not commercial facilities.",
  },
  {
    icon: MessageSquare,
    title: "Clear next steps",
    copy: "You should leave a conversation understanding the options available and what happens next.",
  },
  {
    icon: Handshake,
    title: "Respect for your home",
    copy: "Service visits are handled with care for floors, furnishings, and the spaces we work in.",
  },
  {
    icon: CheckCircle2,
    title: "Seasonal perspective",
    copy: "Recommendations consider the heating and cooling seasons ahead, not just today's symptom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ])}
      />

      <PageHero
        eyebrow="Local residential HVAC company"
        title={
          <>
            Residential comfort,{" "}
            <span className="text-ice-700">handled with care.</span>
          </>
        }
        intro="JHI SERVICES LLC is a residential heating and cooling company focused on the everyday comfort of homes throughout Orange County, New Jersey."
        crumbs={[{ name: "About Us", href: "/about" }]}
        image="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="HVAC technician performing a maintenance inspection on a home's outdoor HVAC unit"
        highlights={[
          "Residential heating & cooling",
          "Orange County, NJ",
          "Seasonal comfort support",
        ]}
        secondary={{ href: "/services", label: "Explore our services" }}
      />

      <section className="bg-white section-y">
        <div className="shell grid items-center gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div>
            <Eyebrow accent="navy">About JHI Services LLC</Eyebrow>
            <h2 className="mt-2.5 text-[1.6rem] leading-tight font-extrabold text-navy-900 sm:text-[2rem] md:text-[2.25rem]">
              A local company built around home comfort.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              JHI SERVICES LLC focuses on residential heating and cooling solutions for
              homeowners in {business.area}. From maintaining comfortable indoor
              temperatures to addressing heating and cooling concerns, we aim to provide
              practical solutions for your home.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              That means treating every home as its own project. Some homeowners come to us
              with a system that is not keeping up; others are planning a replacement or
              simply want a seasonal check-in before the weather changes. Each conversation
              starts the same way — with an understanding of what comfort looks like in your
              home.
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {[
                { icon: Flame, label: "Heating services", tone: "text-flame-600 bg-flame-50 ring-flame-100" },
                { icon: Snowflake, label: "Cooling services", tone: "text-ice-600 bg-ice-50 ring-ice-100" },
                { icon: ThermometerSun, label: "Heat pump support", tone: "text-navy-800 bg-navy-50 ring-navy-100" },
                { icon: Wind, label: "Maintenance care", tone: "text-ice-600 bg-ice-50 ring-ice-100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-navy-900/8 bg-mist/60 px-3 py-2.5"
                >
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg ring-1 ${item.tone}`}
                    aria-hidden="true"
                  >
                    <item.icon className="size-4" />
                  </span>
                  <span className="text-[12.5px] font-semibold text-navy-900">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <ButtonLink href="/services" variant="navy" size="md">
                Heating &amp; cooling services
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-4 py-2.5 text-[13px] font-semibold text-navy-900 hover:border-navy-900/30"
              >
                <Phone className="size-3.5 text-flame-500" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[230px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 shadow-[0_26px_54px_-36px_rgba(9,43,80,0.55)] sm:h-[320px] lg:h-[380px]">
              <Image
                src="https://images.pexels.com/photos/20648485/pexels-photo-20648485.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Comfortable residential living room with natural light and open seating area"
                fill
                sizes="(max-width: 1024px) 100vw, 47vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-3 flex items-center gap-2.5 rounded-xl border border-navy-900/8 bg-white p-2.5 shadow-lg sm:left-5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-ice-50 to-flame-50 text-navy-800 ring-1 ring-ice-100">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[11.5px] font-bold text-navy-900">
                  Orange County, New Jersey
                </span>
                <span className="block text-[10px] text-slate-500">
                  Residential service area
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-fog section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Our approach"
            title="Our Approach to Residential Comfort."
            description="Good HVAC work is part equipment and part conversation. Here is how we think about both."
            accent="ice"
            align="center"
          />
          <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
            {approach.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_14px_34px_-30px_rgba(9,43,80,0.5)] md:p-5"
              >
                <IconTile icon={item.icon} accent={item.accent} size="md" />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Heating & cooling solutions"
            title="Two Comfort Seasons, One Residential Team."
            description="Whether the concern is warmth in January or humidity in July, service begins with the same residential focus."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
            <Link
              href="/services/heating"
              className="group overflow-hidden rounded-2xl border border-flame-100 bg-white transition-shadow hover:shadow-soft"
            >
              <div className="relative h-[160px] sm:h-[200px]">
                <Image
                  src="/hero.png"
                  alt="Residential heating equipment and ductwork being inspected in a home"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-flame-700 uppercase">
                  <Flame className="size-3" aria-hidden="true" />
                  Heating
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-[17px] font-bold text-navy-900">
                  Residential Heating Solutions
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                  Heating evaluations, repairs, replacement planning, and seasonal
                  maintenance for Orange County homes.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-flame-600">
                  Explore heating
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <Link
              href="/services/air-conditioning"
              className="group overflow-hidden rounded-2xl border border-ice-100 bg-white transition-shadow hover:shadow-soft"
            >
              <div className="relative h-[160px] sm:h-[200px]">
                <Image
                  src="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Technician servicing a residential outdoor air conditioning unit"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-ice-700 uppercase">
                  <Snowflake className="size-3" aria-hidden="true" />
                  Cooling
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-[17px] font-bold text-navy-900">
                  Residential Cooling Solutions
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                  Air conditioning diagnostics, installation, and cooling maintenance for
                  the warmer months in New Jersey.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-ice-700">
                  Explore cooling
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-mist section-y">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading
            eyebrow="Homeowner experience"
            title="What Homeowners Can Expect."
            description="No inflated promises — just a clear, residential-minded service experience from the first call onward."
            accent="navy"
          />
          <div className="grid gap-2.5 sm:grid-cols-2">
            {expectations.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-navy-900/8 bg-white p-3.5"
              >
                <span className="flex items-center gap-2">
                  <IconTile icon={item.icon} accent="ice" size="sm" />
                  <h3 className="text-[13px] font-bold text-navy-900">{item.title}</h3>
                </span>
                <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600">
                  {item.copy}
                </p>
              </article>
            ))}
            <p className="sm:col-span-2 rounded-lg bg-navy-50 px-3 py-2.5 text-[11.5px] leading-relaxed text-navy-800">
              Have a question about what a visit involves? Call{" "}
              <a href={business.phoneHref} className="font-bold underline decoration-ice-300">
                {business.phoneDisplay}
              </a>{" "}
              and we will walk through it with you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="shell">
          <div className="relative overflow-hidden rounded-2xl border border-ice-100 bg-gradient-to-br from-ice-50/70 via-white to-flame-50/40 p-5 md:p-8">
            <div className="grid items-center gap-5 md:grid-cols-[1.15fr_0.85fr]">
              <div>
                <Eyebrow accent="ice">Where we work</Eyebrow>
                <h2 className="mt-2.5 text-[1.45rem] leading-tight font-extrabold text-navy-900 sm:text-[1.8rem]">
                  Local to {business.areaShort}
                </h2>
                <p className="mt-2.5 max-w-xl text-[13.5px] leading-relaxed text-slate-600">
                  Our residential heating and cooling service area is Orange County, New
                  Jersey. If you are unsure whether your home falls within the area we
                  serve, give us a call and we will help you find out.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <ButtonLink href="/service-areas" variant="navy" size="md">
                    View service area
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline" size="md">
                    Contact our team
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-xl border border-navy-900/8 bg-white p-4">
                <p className="flex items-center gap-2 text-[12px] font-bold text-navy-900">
                  <MapPin className="size-4 text-ice-600" aria-hidden="true" />
                  Service area
                </p>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600">
                  Residential heating &amp; cooling throughout Orange County, New Jersey.
                </p>
                <div className="mt-3 border-t border-navy-900/8 pt-3">
                  <p className="text-[10.5px] font-bold tracking-[0.12em] text-slate-500 uppercase">
                    Talk to someone
                  </p>
                  <a
                    href={business.phoneHref}
                    className="mt-1.5 inline-flex items-center gap-1.5 text-[14px] font-extrabold text-navy-900 hover:text-flame-600"
                  >
                    <Phone className="size-4 text-flame-500" aria-hidden="true" />
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to talk about your home's comfort?"
        description="Share what you are noticing and we will help you think through the next step for your heating or cooling system."
      />
    </>
  );
}
