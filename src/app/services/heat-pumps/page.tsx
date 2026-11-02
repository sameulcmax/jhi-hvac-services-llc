import type { Metadata } from "next";
import Image from "next/image";
import { Flame, Gauge, Settings, Snowflake, ThermometerSun, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  FaqBlock,
  FeatureSplit,
  IconCardGrid,
  RelatedServices,
  Section,
} from "@/components/service-blocks";
import { JsonLd, SectionHeading } from "@/components/ui";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Heat Pump Services in Orange County, NJ",
  description:
    "Residential heat pump services in Orange County, NJ — system guidance, repairs, maintenance, and installation or replacement of heat pumps for year-round home comfort.",
  path: "/services/heat-pumps",
  image: "https://images.pexels.com/photos/38067323/pexels-photo-38067323.jpeg?auto=compress&cs=tinysrgb&w=1200",
});

const faqs = [
  {
    question: "Does a heat pump really heat a home in a New Jersey winter?",
    answer:
      "Modern heat pumps are designed to move heat from outdoor air into the home even in cold conditions, and many systems use supplemental heating during extreme cold. How comfortable a specific system feels depends on the equipment, the home, and how it is set up.",
  },
  {
    question: "What is the difference between a heat pump and a regular AC?",
    answer:
      "An air conditioner only moves heat out of the home. A heat pump uses a reversing valve to move heat in either direction, which is why it can cool in summer and heat in winter.",
  },
  {
    question: "Why does my heat pump seem to run for long periods?",
    answer:
      "Longer, steadier run times are often normal for heat pumps because they are designed to maintain temperature rather than blast heat in short bursts. If run times are paired with poor comfort or unusual sounds, it is worth a conversation.",
  },
  {
    question: "Should I keep the outdoor unit clear in winter?",
    answer:
      "Yes. Keep snow, leaves, and debris clear of the unit so air can move freely. Do not pile snow against the equipment or cover it while it is operating.",
  },
  {
    question: "Can you replace just part of a heat pump system?",
    answer:
      "Some components can be replaced individually, while others are best matched as a complete system. An assessment of the existing indoor and outdoor equipment is the best way to know which applies to your home.",
  },
];

export default function HeatPumpsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Heat Pump Services", href: "/services/heat-pumps" },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential Heat Pump Services",
            "Residential heat pump guidance, repairs, maintenance, and installation for homeowners in Orange County, New Jersey.",
            "/services/heat-pumps",
          ),
        ]}
      />

      <PageHero
        eyebrow="Residential heat pump services"
        title={
          <>
            One system. <span className="text-ice-700">Two comfort seasons.</span>
          </>
        }
        intro="Residential heat pump solutions for heating and cooling comfort, explained in practical terms for Orange County, New Jersey homeowners."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Heat Pumps", href: "/services/heat-pumps" },
        ]}
        image="https://images.pexels.com/photos/38067323/pexels-photo-38067323.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Modern residential heat pump outdoor unit installed beside a home exterior wall"
        highlights={["Heating + cooling in one", "Repairs & maintenance", "Replacement planning"]}
        secondary={{ href: "/contact", label: "Ask about heat pumps" }}
      />

      <Section tone="white">
        <FeatureSplit
          eyebrow="Understanding heat pumps"
          title="How a Heat Pump Handles Both Seasons."
          body={[
            "A heat pump moves thermal energy rather than generating it from fuel. In cooling mode it moves heat out of your home; in heating mode it reverses the process and moves heat in — even from cold outdoor air.",
            "That dual capability makes heat pumps a popular residential choice, but it also means settings and seasonal habits matter. Knowing which mode your system is in helps you interpret what you are seeing and feeling.",
          ]}
          bullets={[
            "Year-round heating and cooling",
            "Reversing valve changes mode",
            "Outdoor unit runs in both seasons",
            "Defrost cycles are normal",
          ]}
          image="https://images.pexels.com/photos/36077581/pexels-photo-36077581.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Homeowner adjusting a digital thermostat inside a bright modern home"
          accent="mixed"
          cta={{ href: "/guides/heat-pumps", label: "Read the heat pump guide" }}
        />

        <div className="mt-7 grid gap-3 sm:grid-cols-2 md:gap-4">
          <div className="rounded-2xl border border-flame-100 bg-flame-50/60 p-4 md:p-5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-flame-600 ring-1 ring-flame-100">
              <Flame className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 font-display text-[15.5px] font-bold text-navy-900">
              Heating mode
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
              The system absorbs heat from outside air and transfers it indoors. Longer run
              times at a steady temperature are typical, especially on colder days.
            </p>
          </div>
          <div className="rounded-2xl border border-ice-100 bg-ice-50/70 p-4 md:p-5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-ice-600 ring-1 ring-ice-100">
              <Snowflake className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 font-display text-[15.5px] font-bold text-navy-900">
              Cooling mode
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
              The cycle reverses, moving heat and humidity out of the home. Airflow and
              filter condition matter as much here as with a dedicated air conditioner.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <IconCardGrid
          eyebrow="Residential heat pump solutions"
          title="Residential Heat Pump Solutions."
          description="Support for the system that carries your home through both seasons."
          items={[
            {
              icon: Settings,
              title: "Installation & Replacement",
              copy: "Replacement planning and installation of residential heat pump equipment, considering the home, ductwork, and climate.",
              accent: "navy",
              href: "/services/installation-replacement",
              linkLabel: "Explore installation",
            },
            {
              icon: Wrench,
              title: "Repairs & Troubleshooting",
              copy: "Diagnostics for heat pumps that are not heating, not cooling, cycling oddly, or making unfamiliar sounds.",
              accent: "orange",
              href: "/services/repairs",
              linkLabel: "Explore repairs",
            },
            {
              icon: Gauge,
              title: "Routine Maintenance",
              copy: "Seasonal checks that cover airflow, outdoor clearances, and mode changes before each comfort season.",
              accent: "ice",
              href: "/services/maintenance",
              linkLabel: "Explore maintenance",
            },
          ]}
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div>
            <SectionHeading
              eyebrow="Planning ahead"
              title="Thinking About a Heat Pump for Your Home?"
              description="A heat pump project is more than swapping a box outside. Equipment has to suit the home's size, insulation, ductwork, and how each room is used."
              accent="navy"
            />
            <ul className="mt-4 space-y-2">
              {[
                "Share which comfort problems you want to solve first.",
                "Mention any recent insulation, window, or ductwork changes.",
                "Ask how heating and cooling performance will be balanced.",
                "Talk through maintenance expectations for both seasons.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-navy-900/8 bg-mist/60 px-2.5 py-2 text-[12.5px] text-navy-800"
                >
                  <ThermometerSun className="mt-0.5 size-4 shrink-0 text-ice-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[210px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 sm:h-[260px] lg:h-[300px]">
            <Image
              src="https://images.pexels.com/photos/38067246/pexels-photo-38067246.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Row of modern outdoor heat pump units installed along a building exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <FaqBlock
          faqs={faqs}
          title="Heat pump questions, answered."
          description="Common questions about residential heat pumps, seasonal modes, and replacement planning."
        />
      </Section>

      <Section tone="white">
        <RelatedServices currentSlug="heat-pumps" />
      </Section>

      <CtaBand
        eyebrow="Heat pump support"
        heading="Heat pump questions? Start with a conversation."
        description="Whether your system needs attention or you are considering a change, we can help you understand the options."
      />
    </>
  );
}
