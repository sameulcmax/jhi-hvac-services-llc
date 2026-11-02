"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/site";

const items = [
  {
    label: "Call Now",
    href: business.phoneHref,
    icon: Phone,
    accent: true,
  },
  { label: "Services", href: "/services", icon: LayoutGrid, accent: false },
  { label: "Location", href: "/service-areas", icon: MapPin, accent: false },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Quick mobile actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-900 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map((item) => {
          const active =
            !item.accent && item.href !== business.phoneHref
              ? pathname.startsWith(item.href)
              : false;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex h-[58px] flex-col items-center justify-center gap-1 text-[10.5px] font-semibold tracking-[0.03em] transition-colors ${
                  active ? "text-ice-300" : "text-white/90"
                }`}
              >
                <span
                  className={`flex size-7 items-center justify-center rounded-lg ${
                    item.accent
                      ? "bg-flame-500 text-white shadow-[0_6px_16px_-8px_rgba(242,140,40,0.9)]"
                      : active
                        ? "bg-white/10 text-ice-300"
                        : "bg-white/10 text-white"
                  }`}
                >
                  <item.icon className="size-4" aria-hidden="true" strokeWidth={2.2} />
                </span>
                <span className={item.accent ? "text-flame-400" : ""}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
