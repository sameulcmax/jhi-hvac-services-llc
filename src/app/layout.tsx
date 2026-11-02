import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileTabBar } from "@/components/MobileTabBar";
import { FloatingActions } from "@/components/FloatingActions";
import { JsonLd } from "@/components/ui";
import { localBusinessSchema } from "@/lib/seo";
import { business } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "JHI SERVICES LLC | Residential Heating & Cooling in Orange County, NJ",
    template: "%s | JHI SERVICES LLC",
  },
  description:
    "JHI SERVICES LLC provides residential heating and cooling services in Orange County, New Jersey — heating, air conditioning, heat pumps, installation, repairs, and maintenance.",
  applicationName: business.name,
  category: "Home Services",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: business.name,
    title: "JHI SERVICES LLC | Residential Heating & Cooling",
    description:
      "Reliable residential heating and cooling solutions for homeowners in Orange County, New Jersey.",
    url: business.siteUrl,
    locale: "en_US",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#092B50",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
        />
      </head>
      <body className="bg-white text-slate-700 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="h-[58px] md:hidden" aria-hidden="true" />
        <MobileTabBar />
        <FloatingActions />
        <JsonLd data={localBusinessSchema} />
      </body>
    </html>
  );
}
