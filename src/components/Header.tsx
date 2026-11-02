"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Flame,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { business, mainNav, megaMenu, services } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({
    pathname,
    megaOpen: false,
    mobileOpen: false,
  });
  const isCurrentPath = menuState.pathname === pathname;
  const megaOpen = isCurrentPath && menuState.megaOpen;
  const mobileOpen = isCurrentPath && menuState.mobileOpen;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuState({ pathname, megaOpen: true, mobileOpen: false });
  };

  const scheduleMegaClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(
      () => setMenuState({ pathname, megaOpen: false, mobileOpen: false }),
      180,
    );
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({ pathname, megaOpen: false, mobileOpen: false });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="hidden bg-navy-900 text-white md:block">
        <div className="shell flex h-9 items-center justify-between text-[11.5px] font-medium tracking-[0.01em]">
          <p className="flex items-center gap-2 text-navy-100">
            <MapPin className="size-3.5 text-ice-300" aria-hidden="true" />
            Residential heating &amp; cooling for {business.area}
          </p>
          <p className="flex items-center gap-4 text-navy-100">
            <span className="flex items-center gap-1.5">
              <Snowflake className="size-3.5 text-ice-300" aria-hidden="true" />
              Cooling
            </span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <Flame className="size-3.5 text-flame-400" aria-hidden="true" />
              Heating
            </span>
            <a
              href={business.phoneHref}
              className="ml-1 font-semibold text-white transition-colors hover:text-ice-300"
            >
              {business.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/95 backdrop-blur-md">
        <div className="shell flex h-[60px] items-center justify-between gap-3 md:h-[74px]">
          <Logo />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-navy-900"
                        : "text-slate-600 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-ice-500 to-flame-500 transition-opacity ${
                        isActive(item.href) ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
              <li
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={scheduleMegaClose}
              >
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="home-comfort-menu"
                  onClick={() =>
                    setMenuState({
                      pathname,
                      megaOpen: !megaOpen,
                      mobileOpen: false,
                    })
                  }
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                    pathname.startsWith("/guides")
                      ? "text-navy-900"
                      : "text-slate-600 hover:text-navy-900"
                  }`}
                >
                  Home Comfort
                  <ChevronDown
                    className={`size-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-current={isActive("/contact") ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                    isActive("/contact")
                      ? "text-navy-900"
                      : "text-slate-600 hover:text-navy-900"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-flame-500 py-2.5 pr-4 pl-3 text-[13px] font-bold text-white shadow-[0_10px_22px_-14px_rgba(242,140,40,0.95)] transition-all hover:-translate-y-0.5 hover:bg-flame-600 sm:inline-flex"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <Phone className="size-3.5" aria-hidden="true" strokeWidth={2.6} />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[9px] font-semibold tracking-[0.12em] text-white/85 uppercase">
                  Call Now
                </span>
                <span>{business.phoneDisplay}</span>
              </span>
            </a>
            <button
              type="button"
              onClick={() =>
                setMenuState({ pathname, megaOpen: false, mobileOpen: true })
              }
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-navy-900/15 text-navy-900 transition-colors hover:bg-navy-50 lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {megaOpen ? (
          <div
            className="absolute inset-x-0 top-full hidden lg:block"
            onMouseEnter={openMega}
            onMouseLeave={scheduleMegaClose}
          >
            <div className="shell pt-2">
              <div
                id="home-comfort-menu"
                className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_30px_70px_-30px_rgba(9,43,80,0.45)]"
              >
                <div className="flex items-center justify-between border-b border-navy-900/8 bg-mist px-6 py-3.5">
                  <p className="font-display text-sm font-bold text-navy-900">
                    Explore Home Comfort
                  </p>
                  <Link
                    href="/guides"
                    className="text-[12px] font-semibold text-ice-600 hover:text-ice-700"
                  >
                    View all comfort guides →
                  </Link>
                </div>
                <div className="grid grid-cols-4 gap-6 p-6">
                  {megaMenu.map((group) => (
                    <div key={group.title}>
                      <Link
                        href={group.href}
                        className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-navy-800 uppercase hover:text-ice-600"
                      >
                        {group.title}
                      </Link>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-2.5 rounded-xl px-2 py-2 transition-colors hover:bg-ice-50"
                            >
                              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-fog text-navy-800 ring-1 ring-navy-900/8 transition-colors group-hover:bg-white group-hover:text-ice-600">
                                <item.icon className="size-4" aria-hidden="true" />
                              </span>
                              <span>
                                <span className="block text-[12.5px] font-semibold text-navy-900">
                                  {item.label}
                                </span>
                                <span className="block text-[11.5px] text-slate-500">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 p-4 text-white">
                    <ShieldCheck className="size-6 text-ice-300" aria-hidden="true" />
                    <p className="mt-3 font-display text-[15px] font-bold">
                      Residential comfort, season after season.
                    </p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-navy-100">
                      Talk through your home&apos;s heating and cooling needs with our team.
                    </p>
                    <a
                      href={business.phoneHref}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-flame-500 px-3 py-2 text-[12px] font-bold text-white hover:bg-flame-600"
                    >
                      <Phone className="size-3.5" aria-hidden="true" />
                      {business.phoneDisplay}
                    </a>
                    <p className="mt-3 flex items-center gap-1.5 text-[11px] text-ice-100">
                      <MapPin className="size-3" aria-hidden="true" />
                      {business.areaShort}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ease-out lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
          <button
            type="button"
            aria-label="Close menu"
            className={`absolute inset-0 bg-navy-950/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() =>
              setMenuState({ pathname, megaOpen: false, mobileOpen: false })
            }
          />
          <div
            role="dialog"
            aria-modal={mobileOpen}
            aria-label="Mobile navigation menu"
            className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-navy-900/10 px-4">
              <Logo compact />
              <button
                type="button"
                onClick={() =>
                  setMenuState({ pathname, megaOpen: false, mobileOpen: false })
                }
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-navy-900/15 text-navy-900"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
              <nav aria-label="Mobile navigation">
                <ul className="divide-y divide-navy-900/8">
                  {mainNav.slice(0, 4).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-navy-900"
                      >
                        {item.label}
                        <ChevronRight className="size-4 text-slate-400" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl border border-navy-900/10 bg-mist p-3.5">
                  <p className="text-[10.5px] font-bold tracking-[0.14em] text-ice-700 uppercase">
                    Explore Home Comfort
                  </p>
                  {megaMenu.map((group) => (
                    <div key={group.title} className="mt-3">
                      <p className="text-[11px] font-bold tracking-[0.1em] text-slate-500 uppercase">
                        {group.title}
                      </p>
                      <ul className="mt-1.5 grid grid-cols-1 gap-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-[13px] font-medium text-navy-900 ring-1 ring-navy-900/6"
                            >
                              <item.icon className="size-3.5 text-ice-600" aria-hidden="true" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/guides"
                    className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-ice-600"
                  >
                    All comfort guides
                    <ChevronRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <ul className="mt-4 divide-y divide-navy-900/8">
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-navy-900"
                    >
                      Contact
                      <ChevronRight className="size-4 text-slate-400" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>

                <div className="mt-4 rounded-xl border border-navy-900/8 bg-white p-3">
                  <p className="text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                    Residential services
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-1.5">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-1.5 rounded-lg bg-fog px-2 py-1.5 text-[11.5px] font-medium text-navy-800"
                        >
                          <service.icon className="size-3.5 text-ice-600" aria-hidden="true" />
                          {service.navName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="shrink-0 border-t border-navy-900/10 bg-white p-3">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-flame-500 px-4 py-3 text-sm font-bold text-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now · {business.phoneDisplay}
              </a>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
                <MapPin className="size-3 text-ice-600" aria-hidden="true" />
                {business.area}
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
