import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-3">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded transition-colors hover:text-ice-600"
          >
            <Home className="size-3.5" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className="size-3 text-slate-400" aria-hidden="true" />
              {isLast ? (
                <span aria-current="page" className="font-semibold text-navy-800">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-ice-600"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
