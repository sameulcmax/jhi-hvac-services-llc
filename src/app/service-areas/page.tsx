import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CloudSun,
  Flame,
  House,
  MapPin,
  Phone,
  Snowflake,
  Snowflake as SnowIcon,
  Sun,
  Wind,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqSection, type Faq } from "@/components/FaqSection";
import {
  ButtonLink,
  Eyebrow,
  IconTile,
  JsonLd,
  SectionHeading,
} from "@/components/ui";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { business, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Service Area — Orange County, NJ",
  description:
    "JHI SERVICES LLC provides residential heating and cooling services in Orange County, New Jersey. Explore our service area and residential HVAC categories.",
  path: "/service-areas",
});

const faqs: Faq[] = [
  {
    question: "What area does JHI SERVICES LLC serve?",
    answer:
      "Our residential heating and cooling service area is Orange County, New Jersey. Call (914) 258-6101 to confirm service for your specific home.",
  },
  {
    question: "Do you provide commercial HVAC service?",
    answer:
      "Our focus is residential heating and cooling for homeowners. If you are unsure whether your property fits, give us a call and we can talk it through.",
  },
  {
    question: "Can you help with seasonal timing?",
    answer:
      "Yes. New Jersey homes see meaningful heating and cooling seasons. We can help you plan heating checks before fall and cooling checks before summer.",
  },
];

const seasons = [
  {
    icon: Snowflake,
    season: "Winter",
    copy: "Heating performance, even warmth, and system readiness during the coldest stretch of the year.",
    accent: "orange" as const,
  },
  {
    icon: CloudSun,
    season: "Spring",
    copy: "Cooling readiness checks, outdoor unit clearance, and airflow review before warm weather sets in.",
    accent: "ice" as const,
  },
  {
    icon: Sun,
    season: "Summer",
    copy: "Comfortable cooling, humidity balance, and filter care during the heaviest cooling season.",
    accent: "ice" as const,
  },
  {
    icon: Wind,
    season: "Fall",
    copy: "Heating tune-ups, thermostat changes, and seasonal planning ahead of the first cold snap.",
    accent: "orange" as const,
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/service-areas" },
          ]),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: business.name,
            telephone: business.phoneRaw,
            url: business.siteUrl,
            areaServed: {
              "@type": "AdministrativeArea",
              name: business.area,
            },
          },
        ]}
      />

      <PageHero
        eyebrow="Our service area"
        title={
          <>
            Residential Heating &amp; Cooling in{" "}
            <span className="text-ice-700">Orange County, NJ.</span>
          </>
        }
        intro="JHI SERVICES LLC provides residential heating and cooling solutions for homeowners throughout Orange County, New Jersey."
        crumbs={[{ name: "Service Areas", href: "/service-areas" }]}
        image="https://images.pexels.com/photos/10847173/pexels-photo-10847173.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Suburban American home surrounded by autumn trees in a residential neighborhood"
        highlights={["Local to Orange County", "Residential only", "Heating & cooling"]}
        secondary={{ href: "/contact", label: "Contact our team" }}
      />

      <section className="bg-white section-y">
        <div className="shell grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Eyebrow accent="ice">Service area</Eyebrow>
            <h2 className="mt-2.5 text-[1.55rem] leading-tight font-extrabold text-navy-900 sm:text-[1.9rem] md:text-[2.15rem]">
              A local service area, handled locally.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              Our residential heating and cooling work is focused on {business.area}. That
              focus keeps service practical: we are working with the same seasonal
              conditions our neighbors are, from humid summer afternoons to long winter
              nights.
            </p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              We do not list town-by-town coverage here because we would rather confirm it
              directly. If you are in Orange County, New Jersey, call{" "}
              <a
                href={business.phoneHref}
                className="font-semibold text-navy-900 underline decoration-ice-300 underline-offset-2 hover:text-ice-700"
              >
                {business.phoneDisplay}
              </a>{" "}
              and we will confirm whether your home falls within the area we serve.
            </p>

            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                { icon: House, label: "Homeowners" },
                { icon: MapPin, label: "Orange County, NJ" },
                { icon: Flame, label: "Heating & cooling" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-navy-900/8 bg-mist/60 px-2.5 py-2 text-[12px] font-semibold text-navy-800"
                >
                  <item.icon className="size-4 text-ice-600" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-flame-500 px-5 py-3 text-[13.5px] font-bold text-white hover:bg-flame-600"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phoneDisplay}
              </a>
              <ButtonLink href="/services" variant="outline" size="md">
                Explore service categories
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[230px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 shadow-[0_24px_50px_-32px_rgba(9,43,80,0.5)] sm:h-[300px] lg:h-[340px]">
              <Image
                src="https://images.pexels.com/photos/10847170/pexels-photo-10847170.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="American suburban home with green lawn and mature trees in a residential neighborhood"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/95 p-2.5 backdrop-blur">
                <span className="flex size-9 items-center justify-center rounded-lg bg-ice-50 text-ice-600 ring-1 ring-ice-100">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[12px] font-bold text-navy-900">
                    {business.area}
                  </span>
                  <span className="block text-[10.5px] text-slate-500">
                    Residential heating &amp; cooling
                  </span>
                </span>
              </div>
            </div>
            <div
              className="absolute -top-3 -left-3 hidden items-center gap-1.5 rounded-full border border-navy-900/8 bg-white px-2.5 py-1.5 text-[10.5px] font-bold text-navy-900 shadow-md sm:flex"
              aria-hidden="true"
            >
              <SnowIcon className="size-3.5 text-ice-500" />
              <Flame className="size-3.5 text-flame-500" />
              Every season
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-fog section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Residential HVAC solutions"
            title="What We Cover Locally."
            description="Residential heating and cooling categories available for homeowners in Orange County, NJ."
            action={
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[12.5px] font-bold text-ice-700 hover:text-ice-600"
              >
                All services
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Local seasons"
            title="Comfort Needs Change Through the Year."
            description="New Jersey has real seasonal swings. Planning HVAC care around them keeps service practical rather than reactive."
            accent="orange"
          />
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((item) => (
              <article
                key={item.season}
                className="rounded-2xl border border-navy-900/10 bg-white p-4"
              >
                <IconTile icon={item.icon} accent={item.accent} size="sm" />
                <h3 className="mt-2.5 font-display text-[14px] font-bold text-navy-900">
                  {item.season}
                </h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-ice-100 bg-gradient-to-br from-ice-50/70 via-white to-flame-50/40 p-4 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-[16px] font-bold text-navy-900 md:text-[18px]">
                  Serving homeowners in Orange County, New Jersey
                </h3>
                <p className="mt-1 text-[12.5px] text-slate-600">
                  Call to confirm service for your home and talk through your heating or
                  cooling concern.
                </p>
              </div>
              <a
                href={business.phoneHref}
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-4 py-2.5 text-[12.5px] font-bold text-white hover:bg-navy-800"
              >
                <Phone className="size-3.5 text-flame-400" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-mist section-y">
        <div className="shell">
          <FaqSection
            faqs={faqs}
            title="Service area questions."
            description="Clear answers about where we work and how to confirm service for your home."
            accent="navy"
          />
        </div>
      </section>

      <CtaBand
        eyebrow="Local comfort support"
        heading="Serving Orange County, New Jersey."
        description="If you are a homeowner in Orange County, NJ, we are ready to talk about your heating and cooling needs."
      />
    </>
  );
}
