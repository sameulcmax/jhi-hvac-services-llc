import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Flame, Phone, Snowflake, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqSection, type Faq } from "@/components/FaqSection";
import { ButtonLink, IconTile, JsonLd, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { business, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Residential HVAC Services in Orange County, NJ",
  description:
    "Explore residential HVAC services from JHI SERVICES LLC: heating, air conditioning, heat pumps, installation & replacement, repairs, and preventive maintenance in Orange County, NJ.",
  path: "/services",
});

const faqs: Faq[] = [
  {
    question: "Do you work on both heating and cooling systems?",
    answer:
      "Yes. JHI SERVICES LLC focuses on residential heating and cooling, including heat pump systems that provide both. If you are unsure which category your concern falls under, describe it and we will point you in the right direction.",
  },
  {
    question: "My system still runs but the house is not comfortable. Is that a repair?",
    answer:
      "Not always. Uneven temperatures can come from airflow restrictions, thermostat settings, or equipment performance. A troubleshooting conversation is usually the best starting point before assuming a repair is needed.",
  },
  {
    question: "Can you help me plan a system replacement?",
    answer:
      "Yes. Replacement planning starts with a conversation about your home, existing equipment, and comfort goals, followed by an assessment and a discussion of realistic options.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our residential heating and cooling service area is Orange County, New Jersey. Call (914) 258-6101 to confirm service for your home.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Residential HVAC services"
        title={
          <>
            Complete home comfort, <span className="text-ice-700">from heat to cool.</span>
          </>
        }
        intro="Six focused service categories covering the heating and cooling needs of homes in Orange County, New Jersey — from a single repair visit to a full system replacement."
        crumbs={[{ name: "Services", href: "/services" }]}
        image="/hero.png"
        imageAlt="Residential HVAC technician checking airflow at a floor vent in a comfortable home"
        highlights={["Heating & cooling", "Repair & maintenance", "Installation support"]}
        secondary={{ href: "/contact", label: "Ask about your home" }}
      />

      <section className="bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Service categories"
            title="Residential Heating & Cooling Services."
            description="Every service below is centered on homes, not commercial buildings. Choose the category closest to your concern and explore what a visit involves."
            action={
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/12 bg-white px-4 py-2 text-[12.5px] font-bold text-navy-900 hover:border-navy-900/30"
              >
                <Phone className="size-3.5 text-flame-500" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            }
          />

          <div className="mt-7 space-y-4 md:space-y-5">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="group grid overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_14px_36px_-32px_rgba(9,43,80,0.5)] md:grid-cols-[0.85fr_1.15fr] md:items-stretch"
              >
                <div
                  className={`relative h-[165px] sm:h-[200px] md:h-full md:min-h-[220px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 38vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-navy-900 uppercase backdrop-blur">
                    <service.icon
                      className={`size-3 ${
                        service.accent === "orange"
                          ? "text-flame-600"
                          : service.accent === "ice"
                            ? "text-ice-600"
                            : "text-navy-700"
                      }`}
                      aria-hidden="true"
                    />
                    {service.tag}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-4 md:p-6">
                  <div className="flex items-center gap-2.5">
                    <IconTile icon={service.icon} accent={service.accent} size="sm" />
                    <h2 className="font-display text-[17px] leading-tight font-bold text-navy-900 md:text-[20px]">
                      {service.name}
                    </h2>
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-600 md:text-[13.5px]">
                    {service.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-1.5 text-[11.5px] font-medium text-navy-800"
                      >
                        <CheckCircle2 className="size-3.5 text-ice-500" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2.5 text-[12.5px] font-bold text-white transition-colors hover:bg-navy-800"
                    >
                      Explore {service.navName}
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-fog section-y">
        <div className="shell">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="How service works"
                title="Simple from the first phone call."
                description="No complicated intake process. We start with your observations and work toward a practical solution."
                accent="ice"
              />
              <div className="mt-5 flex flex-wrap gap-2.5">
                <ButtonLink href="/contact" variant="navy" size="md">
                  Start a conversation
                </ButtonLink>
                <ButtonLink href="/guides" variant="outline" size="md">
                  Browse comfort guides
                  <Sparkles className="size-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              <div className="rounded-xl border border-flame-100 bg-flame-50/60 p-4">
                <Flame className="size-5 text-flame-600" aria-hidden="true" />
                <p className="mt-2 text-[13px] font-bold text-navy-900">Heating season</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
                  Focus on warmth, even distribution, and system readiness before colder
                  weather settles in.
                </p>
              </div>
              <div className="rounded-xl border border-ice-100 bg-ice-50/70 p-4">
                <Snowflake className="size-5 text-ice-600" aria-hidden="true" />
                <p className="mt-2 text-[13px] font-bold text-navy-900">Cooling season</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
                  Focus on refreshing airflow, humidity comfort, and equipment performance
                  during warm months.
                </p>
              </div>
              <div className="sm:col-span-2 rounded-xl border border-navy-900/8 bg-white p-4">
                <p className="text-[12.5px] font-bold text-navy-900">
                  One team for both seasons
                </p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">
                  Because our services cover heating, cooling, and heat pumps, you can keep
                  the same contact as your home&apos;s needs change through the year.
                </p>
              </div>
            </div>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="shell">
          <FaqSection
            faqs={faqs}
            title="Questions about residential HVAC services."
            description="A few common questions about how service works. If yours is not here, a quick call is usually the fastest answer."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
