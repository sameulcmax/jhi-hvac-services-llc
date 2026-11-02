import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ButtonLink, IconTile, JsonLd, SectionHeading, TextLink } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import {
  business,
  guideBySlug,
  guides,
  serviceBySlug,
} from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) {
    return pageMetadata({
      title: "Guide Not Found",
      description: "The requested home comfort guide could not be found.",
      path: "/guides",
    });
  }
  return pageMetadata({
    title: `${guide.title} Guide for Homeowners`,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const relatedService = serviceBySlug(guide.relatedServiceSlug);
  const otherGuides = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Home Comfort Guides", href: "/guides" },
            { name: guide.title, href: `/guides/${guide.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${guide.title} Guide for Homeowners`,
            description: guide.summary,
            articleSection: guide.title,
            url: `${business.siteUrl}/guides/${guide.slug}`,
            author: { "@type": "Organization", name: business.name },
            publisher: { "@type": "Organization", name: business.name },
            about: guide.topics,
          },
        ]}
      />

      <PageHero
        eyebrow="Home comfort guide"
        title={guide.title}
        intro={guide.summary}
        crumbs={[
          { name: "Home Comfort Guides", href: "/guides" },
          { name: guide.title, href: `/guides/${guide.slug}` },
        ]}
        highlights={guide.topics}
        primaryHref={business.phoneHref}
        primaryLabel={`Ask a question · ${business.phoneDisplay}`}
        secondary={{ href: "/guides", label: "All guides" }}
      />

      <section className="bg-white section-y">
        <div className="shell grid gap-7 lg:grid-cols-[0.32fr_0.68fr] lg:gap-10">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-navy-900/10 bg-mist p-4">
              <p className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.14em] text-ice-700 uppercase">
                <BookOpen className="size-3.5" aria-hidden="true" />
                In this guide
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {guide.sections.map((section, index) => (
                  <li key={section.heading} className="flex items-start gap-2 text-[12px] text-navy-800">
                    <span className="mt-0.5 text-[10px] font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    {section.heading}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-navy-900/10 pt-3.5">
                <p className="text-[11px] leading-relaxed text-slate-600">
                  Have a question this guide does not answer? Call and describe what you are
                  noticing at home.
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-flame-500 px-3 py-2.5 text-[12px] font-bold text-white hover:bg-flame-600"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
                <p className="mt-2 flex items-center justify-center gap-1 text-[10.5px] text-slate-500">
                  <MapPin className="size-3 text-ice-600" aria-hidden="true" />
                  {business.areaShort}
                </p>
              </div>
            </div>

            {relatedService ? (
              <div className="mt-3 rounded-2xl border border-navy-900/10 bg-white p-4">
                <p className="text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                  Related service
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <IconTile icon={relatedService.icon} accent={relatedService.accent} size="sm" />
                  <p className="text-[12.5px] font-bold text-navy-900">
                    {relatedService.navName}
                  </p>
                </div>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600">
                  {relatedService.summary}
                </p>
                <TextLink href={relatedService.href} className="mt-2 text-[12px]">
                  Explore service
                </TextLink>
              </div>
            ) : null}
          </aside>

          <article>
            <p className="rounded-xl border border-ice-100 bg-ice-50/60 px-3.5 py-3 text-[13px] leading-relaxed text-navy-900">
              {guide.intro}
            </p>

            <div className="mt-6 space-y-5">
              {guide.sections.map((section, index) => (
                <section key={section.heading} className="scroll-mt-24">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-navy-900 text-[11px] font-bold text-white">
                      0{index + 1}
                    </span>
                    <h2 className="font-display text-[1.15rem] leading-snug font-extrabold text-navy-900 sm:text-[1.35rem]">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="mt-2.5 space-y-2.5 pl-0 sm:pl-9.5">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[13.5px] leading-relaxed text-slate-600 md:text-[14.5px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets?.length ? (
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 rounded-lg border border-navy-900/8 bg-mist/70 px-2.5 py-2 text-[12px] font-medium text-navy-800"
                          >
                            <CheckCircle2
                              className="mt-0.5 size-3.5 shrink-0 text-ice-500"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-flame-100 bg-flame-50/50 p-4">
              <h2 className="font-display text-[15px] font-bold text-navy-900">
                When to call a professional
              </h2>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                This guide is general information, not a diagnosis. If your home is not
                heating or cooling as expected, or you notice smells, leaks, or electrical
                concerns, stop using the system and arrange service.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3.5 py-2 text-[12px] font-bold text-white hover:bg-navy-800"
                >
                  <Phone className="size-3.5 text-flame-400" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
                <ButtonLink href="/contact" variant="outline" size="sm">
                  Send a request
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-fog section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Keep reading"
            title="More home comfort guides"
            action={<TextLink href="/guides">All guides</TextLink>}
          />
          <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
            {otherGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}`}
                className="group flex items-center gap-2.5 rounded-xl border border-navy-900/10 bg-white p-3 hover:border-ice-300"
              >
                <IconTile icon={item.icon} accent={item.accent} size="sm" />
                <span className="min-w-0">
                  <span className="block truncate text-[12.5px] font-bold text-navy-900">
                    {item.title}
                  </span>
                  <span className="block truncate text-[10.5px] text-slate-500">
                    {item.topics[0]}
                  </span>
                </span>
                <ArrowRight
                  className="ml-auto size-3.5 shrink-0 text-slate-400 group-hover:text-ice-600"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="From guide to action"
        heading="Want help applying this to your home?"
        description="Call JHI SERVICES LLC and describe what you are seeing. We will help you decide whether a visit makes sense."
      />
    </>
  );
}
