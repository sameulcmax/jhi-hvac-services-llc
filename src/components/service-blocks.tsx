import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Phone, type LucideIcon } from "lucide-react";
import { FaqSection, type Faq } from "@/components/FaqSection";
import { IconTile, SectionHeading, TextLink } from "@/components/ui";
import { accentStyles, business, services, type Accent } from "@/lib/site";

export function Section({
  children,
  id,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "mist" | "fog";
  className?: string;
}) {
  const bg = tone === "fog" ? "bg-fog" : tone === "mist" ? "bg-mist" : "bg-white";
  const border = tone === "white" ? "" : "border-y border-navy-900/8";
  return (
    <section id={id} className={`${bg} ${border} section-y ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function FeatureSplit({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
  accent = "ice",
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  accent?: Accent;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative h-[210px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 shadow-[0_22px_48px_-34px_rgba(9,43,80,0.5)] sm:h-[280px] lg:h-[330px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <span
          className={`absolute -top-2.5 ${reverse ? "-right-2.5" : "-left-2.5"} hidden size-12 items-center justify-center rounded-xl border border-white bg-white shadow-md sm:flex ${accentStyles[accent].text}`}
          aria-hidden="true"
        >
          <CheckCircle2 className="size-5" />
        </span>
      </div>
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} accent={accent} />
        <div className="mt-3 space-y-2.5">
          {body.map((paragraph) => (
            <p key={paragraph} className="text-[13.5px] leading-relaxed text-slate-600 md:text-[14.5px]">
              {paragraph}
            </p>
          ))}
        </div>
        {bullets?.length ? (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 rounded-lg border border-navy-900/8 bg-mist/70 px-2.5 py-2 text-[12px] font-medium text-navy-800"
              >
                <CheckCircle2
                  className={`mt-0.5 size-3.5 shrink-0 ${accentStyles[accent].text}`}
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        {cta ? (
          <div className="mt-4">
            <TextLink href={cta.href} tone={accent === "orange" ? "orange" : "ice"}>
              {cta.label}
            </TextLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function IconCardGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: {
    icon: LucideIcon;
    title: string;
    copy: string;
    accent: Accent;
    href?: string;
    linkLabel?: string;
    id?: string;
  }[];
}) {
  return (
    <>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        accent="ice"
      />
      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {items.map((item) => {
          const inner = (
            <>
              <div className="flex items-center justify-between">
                <IconTile icon={item.icon} accent={item.accent} size="md" />
                <span
                  className={`hidden rounded-full px-2.5 py-1 text-[9.5px] font-bold tracking-[0.1em] uppercase sm:inline-flex ${accentStyles[item.accent].chip}`}
                >
                  Residential
                </span>
              </div>
              <h3 className="mt-3 font-display text-[15.5px] font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                {item.copy}
              </p>
              {item.href ? (
                <span
                  className={`mt-3 inline-flex items-center gap-1 text-[12px] font-bold ${accentStyles[item.accent].text}`}
                >
                  {item.linkLabel ?? "Learn more"}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              ) : null}
            </>
          );

          const classes =
            "group flex scroll-mt-28 flex-col rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_12px_32px_-28px_rgba(9,43,80,0.5)] transition-all hover:-translate-y-1 hover:shadow-soft md:p-5";

          return item.href ? (
            <Link key={item.title} id={item.id} href={item.href} className={classes}>
              {inner}
            </Link>
          ) : (
            <article key={item.title} id={item.id} className={classes}>
              {inner}
            </article>
          );
        })}
      </div>
    </>
  );
}

export function ConcernPanel({
  eyebrow,
  title,
  intro,
  concerns,
  noteTitle,
  noteItems,
  accent = "ice",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  concerns: string[];
  noteTitle: string;
  noteItems: string[];
  accent?: "ice" | "orange";
}) {
  const tone =
    accent === "orange"
      ? { card: "border-flame-100 bg-flame-50/60", dot: "text-flame-600", title: "text-flame-700" }
      : { card: "border-ice-100 bg-ice-50/70", dot: "text-ice-600", title: "text-ice-700" };

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
      <div className="rounded-2xl border border-navy-900/10 bg-white p-4 md:p-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} accent={accent} />
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {concerns.map((concern) => (
            <li
              key={concern}
              className="flex items-start gap-2 rounded-lg border border-navy-900/8 bg-mist/70 px-2.5 py-2 text-[12px] font-medium text-navy-800"
            >
              <CheckCircle2 className={`mt-0.5 size-3.5 shrink-0 ${tone.dot}`} aria-hidden="true" />
              {concern}
            </li>
          ))}
        </ul>
      </div>
      <div className={`rounded-2xl border p-4 md:p-6 ${tone.card}`}>
        <h3 className={`font-display text-[15px] font-bold ${tone.title}`}>{noteTitle}</h3>
        <ul className="mt-3 space-y-2.5">
          {noteItems.map((note) => (
            <li key={note} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-navy-800">
              <ChevronRight className={`mt-0.5 size-3.5 shrink-0 ${tone.dot}`} aria-hidden="true" />
              {note}
            </li>
          ))}
        </ul>
        <a
          href={business.phoneHref}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[12px] font-bold text-navy-900 ring-1 ring-navy-900/10 hover:ring-navy-900/25"
        >
          <Phone className="size-3.5 text-flame-500" aria-hidden="true" />
          {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

export function DualImagePanel({
  items,
}: {
  items: {
    id: string;
    title: string;
    copy: string;
    bullets: string[];
    image: string;
    imageAlt: string;
    accent: "orange" | "ice";
    href: string;
    linkLabel: string;
  }[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
      {items.map((item) => (
        <article
          key={item.id}
          id={item.id}
          className={`scroll-mt-28 overflow-hidden rounded-2xl border bg-white ${
            item.accent === "orange" ? "border-flame-100" : "border-ice-100"
          }`}
        >
          <div className="relative h-[150px] sm:h-[180px]">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            <h3 className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 font-display text-[12.5px] font-bold text-navy-900 backdrop-blur">
              {item.title}
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <p className="text-[12.5px] leading-relaxed text-slate-600">{item.copy}</p>
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-1.5 text-[12px] text-navy-800">
                  <CheckCircle2
                    className={`mt-0.5 size-3.5 shrink-0 ${
                      item.accent === "orange" ? "text-flame-500" : "text-ice-500"
                    }`}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <Link
              href={item.href}
              className={`mt-3.5 inline-flex items-center gap-1 text-[12px] font-bold ${
                item.accent === "orange" ? "text-flame-600" : "text-ice-700"
              }`}
            >
              {item.linkLabel}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FaqBlock({
  faqs,
  title,
  description,
}: {
  faqs: Faq[];
  title: string;
  description: string;
}) {
  return (
    <FaqSection
      faqs={faqs}
      title={title}
      description={description}
      eyebrow="Frequently asked"
    />
  );
}

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = services.filter((service) => service.slug !== currentSlug).slice(0, 3);
  return (
    <div>
      <SectionHeading
        eyebrow="Keep exploring"
        title="Related residential services"
        description="Comfort concerns often overlap. These are the services homeowners ask about next."
      />
      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {related.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="group flex items-center gap-2.5 rounded-xl border border-navy-900/10 bg-white p-3 transition-all hover:-translate-y-0.5 hover:border-ice-300 hover:shadow-soft"
          >
            <IconTile icon={service.icon} accent={service.accent} size="sm" />
            <span className="min-w-0">
              <span className="block truncate text-[12.5px] font-bold text-navy-900">
                {service.navName}
              </span>
              <span className="block truncate text-[10.5px] text-slate-500">
                {service.tag}
              </span>
            </span>
            <ArrowRight
              className="ml-auto size-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-ice-600"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
