import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, Phone, type LucideIcon } from "lucide-react";
import { accentStyles, business, type Accent } from "@/lib/site";

type Variant = "flame" | "navy" | "ice" | "outline" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  flame:
    "bg-flame-500 text-white shadow-[0_10px_24px_-12px_rgba(242,140,40,0.85)] hover:bg-flame-600",
  navy: "bg-navy-900 text-white shadow-[0_10px_24px_-14px_rgba(9,43,80,0.8)] hover:bg-navy-800",
  ice: "bg-ice-500 text-white shadow-[0_10px_24px_-12px_rgba(34,169,232,0.8)] hover:bg-ice-600",
  outline:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/35 hover:bg-navy-50",
  light: "bg-white/10 text-white border border-white/25 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "text-[13px] px-4 py-2.5 gap-1.5",
  md: "text-sm px-5 py-3 gap-2",
  lg: "text-[15px] px-6 py-3.5 gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap";

export function ButtonLink({
  href,
  children,
  variant = "navy",
  size = "md",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function CallButton({
  variant = "flame",
  size = "md",
  className = "",
  label,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Phone className="size-4" aria-hidden="true" strokeWidth={2.4} />
      {label ?? (
        <>
          <span className="hidden sm:inline">Call Now &middot;</span>
          {business.phoneDisplay}
        </>
      )}
    </a>
  );
}

export function IconTile({
  icon: Icon,
  accent = "ice",
  size = "md",
  className = "",
}: {
  icon: LucideIcon;
  accent?: Accent;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims =
    size === "sm" ? "size-9" : size === "lg" ? "size-14" : "size-12";
  const iconSize = size === "sm" ? "size-4" : size === "lg" ? "size-6" : "size-[22px]";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl ring-1 ${dims} ${accentStyles[accent].tile} ${className}`}
      aria-hidden="true"
    >
      <Icon className={iconSize} strokeWidth={2} />
    </span>
  );
}

export function Eyebrow({
  children,
  accent = "ice",
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}) {
  const tone =
    accent === "orange"
      ? "text-flame-600"
      : accent === "navy"
        ? "text-navy-800"
        : "text-ice-700";
  return (
    <span className={`eyebrow ${tone} ${className}`}>
      <span className="inline-block h-[2px] w-5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "ice",
  action,
  inverse = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  accent?: Accent;
  action?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${action ? "md:flex-row md:items-end md:justify-between" : ""}`}
    >
      <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
        {eyebrow ? (
          <Eyebrow accent={inverse ? "ice" : accent} className={inverse ? "text-ice-300" : ""}>
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          className={`mt-3 text-[1.65rem] leading-[1.15] font-extrabold sm:text-[2rem] md:text-[2.35rem] ${
            inverse ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-3 text-[15px] leading-relaxed md:text-base ${
              inverse ? "text-navy-100" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  tone = "navy",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "navy" | "ice" | "orange";
}) {
  const color =
    tone === "ice"
      ? "text-ice-600 hover:text-ice-700"
      : tone === "orange"
        ? "text-flame-600 hover:text-flame-700"
        : "text-navy-800 hover:text-ice-600";
  return (
    <Link
      href={href}
      className={`group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${color} ${className}`}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.02em] text-navy-800 shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
