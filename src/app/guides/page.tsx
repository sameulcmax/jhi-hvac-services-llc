import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink, JsonLd, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { business, guides, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Home Comfort Guides for Homeowners",
  description:
    "Practical home comfort guides from JHI SERVICES LLC covering residential heating, air conditioning, heat pumps, installation, repairs, and HVAC maintenance in Orange County, NJ.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Home Comfort Guides", href: "/guides" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Home Comfort Guides",
            description:
              "Residential heating and cooling guides for homeowners in Orange County, New Jersey.",
            url: `${business.siteUrl}/guides`,
          },
        ]}
      />

      <PageHero
        eyebrow="Home comfort library"
        title={
          <>
            Explore our <span className="text-ice-700">Home Comfort Guides.</span>
          </>
        }
        intro="Learn more about residential heating, cooling, and maintaining a comfortable home with practical guides written for homeowners, not technicians."
        crumbs={[{ name: "Home Comfort Guides", href: "/guides" }]}
        highlights={["Heating & cooling basics", "Seasonal habits", "No jargon"]}
        secondary={{ href: "/services", label: "Explore services" }}
      />

      <section className="bg-white section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Guides"
            title="Six guides to understand your home's comfort."
            description="Each guide covers the basics, what to watch for, and when a conversation with a professional makes sense."
            action={
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-navy-800">
                <BookOpen className="size-3.5 text-ice-600" aria-hidden="true" />6 guides
              </span>
            }
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {guides.map((guide) => {
              const tone =
                guide.accent === "orange"
                  ? "border-flame-100 bg-flame-50/40"
                  : guide.accent === "navy"
                    ? "border-navy-100 bg-navy-50/60"
                    : "border-ice-100 bg-ice-50/50";
              const iconTone =
                guide.accent === "orange"
                  ? "bg-white text-flame-600 ring-flame-100"
                  : guide.accent === "navy"
                    ? "bg-white text-navy-800 ring-navy-100"
                    : "bg-white text-ice-600 ring-ice-100";
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className={`group flex flex-col rounded-2xl border p-4 transition-all hover:-translate-y-1 hover:shadow-soft md:p-5 ${tone}`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex size-11 items-center justify-center rounded-xl ring-1 ${iconTone}`}
                      aria-hidden="true"
                    >
                      <guide.icon className="size-5" strokeWidth={1.9} />
                    </span>
                    <span className="rounded-full bg-white/80 px-2 py-1 text-[9.5px] font-bold tracking-[0.1em] text-slate-500 uppercase">
                      Guide
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-[16px] font-bold text-navy-900 md:text-[17px]">
                    {guide.title}
                  </h2>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                    {guide.summary}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {guide.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full bg-white/90 px-2 py-0.5 text-[9.5px] font-semibold text-navy-800 ring-1 ring-navy-900/6"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3.5 text-[12px] font-bold text-ice-700">
                    Explore Guide
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-7 grid items-center gap-4 rounded-2xl border border-navy-900/10 bg-mist p-4 md:grid-cols-[1.2fr_0.8fr] md:p-6">
            <div>
              <p className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.14em] text-ice-700 uppercase">
                <Sparkles className="size-3.5" aria-hidden="true" />
                From reading to doing
              </p>
              <h2 className="mt-2 text-[1.25rem] font-extrabold text-navy-900 sm:text-[1.45rem]">
                Guides are a starting point — not a diagnosis.
              </h2>
              <p className="mt-1.5 max-w-xl text-[12.5px] leading-relaxed text-slate-600">
                If something in your home does not match what you read here, call and
                describe it. We can help you decide whether a service visit makes sense.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ButtonLink href="/contact" variant="navy" size="sm">
                  Contact our team
                </ButtonLink>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 bg-white px-3.5 py-2 text-[12px] font-bold text-navy-900 hover:border-navy-900/30"
                >
                  <Phone className="size-3.5 text-flame-500" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </div>
            </div>
            <ul className="grid gap-1.5 sm:grid-cols-2 md:grid-cols-1">
              {services.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="flex items-center justify-between rounded-lg border border-navy-900/8 bg-white px-2.5 py-2 text-[11.5px] font-semibold text-navy-800 hover:border-ice-300"
                  >
                    {service.navName}
                    <ArrowRight className="size-3.5 text-slate-400" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need a hand?"
        heading="Reading is useful. A conversation is faster."
        description="Tell us what your heating or cooling system is doing and we will help you understand the next step."
      />
    </>
  );
}
