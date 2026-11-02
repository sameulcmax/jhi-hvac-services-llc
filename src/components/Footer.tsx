import Link from "next/link";
import { ArrowUpRight, Flame, MapPin, Phone, Snowflake } from "lucide-react";
import { Logo } from "@/components/Logo";
import { business, guides, services } from "@/lib/site";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Home Comfort Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-ice-500/12 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-1/4 size-64 rounded-full bg-flame-500/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="grid gap-9 py-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.35fr_0.75fr_1fr_1fr] lg:py-16">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-navy-100">
              JHI SERVICES LLC provides residential heating and cooling solutions for
              homeowners throughout {business.area}.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white">
                <Flame className="size-3.5 text-flame-400" aria-hidden="true" />
                Heating
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white">
                <Snowflake className="size-3.5 text-ice-300" aria-hidden="true" />
                Cooling
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-ice-300 uppercase">
              Company
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-navy-100 transition-colors hover:text-ice-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-ice-300 uppercase">
              Services
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-[13.5px] text-navy-100 transition-colors hover:text-ice-300"
                  >
                    {service.navName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.16em] text-ice-300 uppercase">
              Get in touch
            </h3>
            <div className="mt-3.5 space-y-3">
              <p className="flex items-start gap-2 text-[13.5px] text-navy-100">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ice-300" aria-hidden="true" />
                {business.area}
              </p>
              <a
                href={business.phoneHref}
                className="flex items-start gap-2 text-[13.5px] font-semibold text-white transition-colors hover:text-flame-400"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-flame-400" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-4 py-2 text-[12.5px] font-bold text-white transition-colors hover:bg-flame-600"
              >
                Request a call back
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[10.5px] font-bold tracking-[0.14em] text-white/60 uppercase">
                Comfort guides
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                {guides.slice(0, 4).map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-[12px] text-navy-100 transition-colors hover:text-ice-300"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[11.5px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-ice-300" aria-hidden="true" />
            {business.tagline} &middot; {business.areaShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
