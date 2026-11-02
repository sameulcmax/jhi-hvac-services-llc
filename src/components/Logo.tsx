import Image from "next/image";
import Link from "next/link";

export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo1.png"
      alt="JHI Services logo"
      width={220}
      height={76}
      className={className}
      priority
    />
  );
}

export function Logo({
  compact = false,
}: {
  brand?: string;
  suffix?: string;
  tagline?: string;
  inverse?: boolean;
  compact?: boolean;
}) {
  const imageClassName = compact ? "h-10 w-auto md:h-11" : "h-12 w-auto md:h-14";

  return (
    <Link
      href="/"
      aria-label="JHI SERVICES LLC — home"
      className="group inline-flex items-center"
    >
      <LogoMark className={imageClassName} />
    </Link>
  );
}
