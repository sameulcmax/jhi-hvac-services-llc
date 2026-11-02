import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, Settings, Snowflake, Wind, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  ConcernPanel,
  FaqBlock,
  FeatureSplit,
  IconCardGrid,
  RelatedServices,
  Section,
} from "@/components/service-blocks";
import { JsonLd } from "@/components/ui";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Air Conditioning Services in Orange County, NJ",
  description:
    "Residential air conditioning services in Orange County, NJ — AC repair, AC installation and replacement, and seasonal cooling maintenance from JHI SERVICES LLC. Call (914) 258-6101.",
  path: "/services/air-conditioning",
});

const faqs = [
  {
    question: "Why is my air conditioner running but not cooling the house?",
    answer:
      "Common causes include restricted airflow from a loaded filter, low refrigerant, a dirty outdoor coil, or a thermostat setting issue. Some of these are homeowner checks; refrigerant and equipment checks require a professional visit.",
  },
  {
    question: "How do I keep the outdoor unit working well?",
    answer:
      "Keep the area around it clear of leaves, grass clippings, and stored items, and avoid blocking airflow with fencing or plants. A seasonal cooling check can confirm the unit is running as intended.",
  },
  {
    question: "Is it worth replacing an older AC system before it fails?",
    answer:
      "That depends on the age and condition of the equipment, repair history, and your plans for the home. A replacement conversation can compare repairing now versus planning a new system on your own timeline.",
  },
  {
    question: "What does cooling maintenance include?",
    answer:
      "A preventive cooling visit generally covers a visual equipment inspection, airflow and filter review, cleaning where appropriate, and a conversation about performance concerns before summer demand peaks.",
  },
  {
    question: "Should I close vents in unused rooms to save energy?",
    answer:
      "Closing too many vents can affect system airflow and pressure, and sometimes makes comfort worse. If you want to condition fewer rooms, ask about it during a service conversation rather than closing several vents at once.",
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Air Conditioning Services", href: "/services/air-conditioning" },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential Air Conditioning Services",
            "Residential cooling repair, installation, replacement, and maintenance for homeowners in Orange County, New Jersey.",
            "/services/air-conditioning",
          ),
        ]}
      />

      <PageHero
        eyebrow="Residential cooling services"
        title={
          <>
            A refreshing home, <span className="text-ice-700">even on the hottest days.</span>
          </>
        }
        intro="Cooling solutions to help create a refreshing and comfortable indoor environment for your Orange County, New Jersey home."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Air Conditioning", href: "/services/air-conditioning" },
        ]}
        image="https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Residential outdoor air conditioning condenser beside a modern home with landscaping"
        highlights={["AC repair support", "Cooling installation", "AC maintenance"]}
        secondary={{ href: "/contact", label: "Describe your cooling concern" }}
      />

      <Section tone="white">
        <FeatureSplit
          eyebrow="Residential cooling solutions"
          title="Cooling That Feels Even, Not Forced."
          body={[
            "Good cooling is steady. The house comes down to temperature without one room freezing while another stays warm, and humidity stays comfortable rather than clammy.",
            "When cooling performance slips, we look at the whole picture: indoor airflow, filter condition, outdoor equipment, and thermostat settings. Sometimes a small adjustment makes the difference; sometimes a repair is the right next step.",
          ]}
          bullets={[
            "Central air conditioning systems",
            "Ductless and wall-mounted cooling",
            "Heat pump cooling mode",
            "Thermostat and airflow review",
          ]}
          image="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Technician using gauges to check refrigerant pressure on a residential air conditioning unit"
          reverse
          cta={{ href: "/contact", label: "Ask about your cooling system" }}
        />
      </Section>

      <Section tone="mist">
        <IconCardGrid
          eyebrow="Cooling services"
          title="Air Conditioning Care at Every Stage."
          description="From a mid-summer repair to planning a replacement before next season, these three services cover most homeowner calls."
          items={[
            {
              icon: Wrench,
              title: "AC Repair",
              copy: "Diagnostics for air conditioning systems that are not cooling properly, are making new sounds, or are short-cycling.",
              accent: "ice",
              href: "/services/repairs#cooling-troubleshooting",
              linkLabel: "Explore AC repair",
            },
            {
              icon: Settings,
              title: "AC Installation & Replacement",
              copy: "Replacement planning and installation of residential cooling equipment matched to your home and ductwork.",
              accent: "navy",
              id: "cooling-replacement",
              href: "/services/installation-replacement#cooling-replacement",
              linkLabel: "Explore replacement",
            },
            {
              icon: Gauge,
              title: "AC Maintenance",
              copy: "Seasonal cooling checks to support performance, airflow, and equipment condition before summer use.",
              accent: "orange",
              href: "/services/maintenance#cooling-maintenance",
              linkLabel: "Explore maintenance",
            },
          ]}
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
          <div className="relative h-[220px] overflow-hidden rounded-2xl ring-1 ring-navy-900/10 sm:h-[280px] lg:h-[320px]">
            <Image
              src="https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Wall-mounted indoor air conditioning unit in a bright contemporary room"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-ice-700 uppercase">
              <Snowflake className="size-3" aria-hidden="true" />
              Indoor comfort
            </span>
          </div>
          <div className="rounded-2xl border border-ice-100 bg-ice-50/50 p-4 md:p-6">
            <h2 className="font-display text-[1.3rem] font-extrabold text-navy-900 sm:text-[1.55rem]">
              A quick airflow check you can do today
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
              Before scheduling a cooling visit, three simple habits solve a surprising
              number of comfort complaints:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Replace a visibly loaded air filter and note the size for next time.",
                "Keep supply and return vents open and clear of furniture and rugs.",
                "Give the outdoor unit room to release heat — no stored items or overgrowth.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12.5px] text-navy-800">
                  <Wind className="mt-0.5 size-4 shrink-0 text-ice-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-lg bg-white px-3 py-2 text-[11.5px] leading-relaxed text-slate-600">
              If the house still will not cool down, a professional visit is the practical
              next step — especially for refrigerant or electrical concerns.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <ConcernPanel
          eyebrow="Common cooling concerns"
          title="Common Air Conditioning Concerns"
          intro="Cooling problems are not all the same. These patterns cover most of what homeowners describe."
          concerns={[
            "Air from the vents is not cold",
            "System runs constantly without reaching setpoint",
            "Noticeable humidity indoors",
            "Water pooling near indoor or outdoor equipment",
            "Ice forming on refrigerant lines",
            "New noises or a burning smell",
          ]}
          noteTitle="Before you call"
          noteItems={[
            "Check the thermostat mode and setpoint first.",
            "Look at the air filter — a loaded filter restricts airflow.",
            "Note whether the outdoor unit is running at all.",
            "If you see ice or smell burning, turn the system off and call.",
            "For water leaks, clear the area and place a towel down.",
          ]}
        />
      </Section>

      <Section tone="white">
        <FaqBlock
          faqs={faqs}
          title="Air conditioning questions, answered."
          description="Straightforward answers about residential cooling repair, replacement, and maintenance in Orange County, NJ."
        />
      </Section>

      <Section tone="mist">
        <RelatedServices currentSlug="air-conditioning" />
      </Section>

      <CtaBand
        eyebrow="Cooling season support"
        heading="Warm rooms? Let's get your cooling back on track."
        description="Describe what your air conditioning is doing and we will help you sort out the most practical next step."
      />
    </>
  );
}
