import type { Metadata } from "next";
import { Gauge, Settings, Wrench } from "lucide-react";
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
  title: "Heating Services in Orange County, NJ",
  description:
    "Residential heating services in Orange County, NJ from JHI SERVICES LLC — heating repair, installation and replacement, and seasonal heating maintenance. Call (914) 258-6101.",
  path: "/services/heating",
  image: "/hero.png",
});

const faqs = [
  {
    question: "How do I know if my heating system needs professional attention?",
    answer:
      "Unusual noises, uneven warmth, longer run times, repeated cycling, or a system that will not hold temperature are all worth discussing. If you notice a burning smell or visible electrical concern, stop using the system and call for service.",
  },
  {
    question: "How often should residential heating equipment be serviced?",
    answer:
      "A practical rhythm is one seasonal check before heating season. Homes with pets, heavy use, or ongoing comfort concerns may benefit from additional attention during the season.",
  },
  {
    question: "Can a heating system be replaced without replacing the whole HVAC setup?",
    answer:
      "Often a heating component can be replaced on its own, while other projects make more sense as a full system pairing. The right answer depends on your existing equipment, ductwork, and goals — which is why we start with an assessment.",
  },
  {
    question: "Why is one room always colder than the rest of the house?",
    answer:
      "Uneven heating usually points to airflow, ductwork, insulation, or thermostat placement rather than a single failed part. Share which rooms are affected and when, and we can work through the likely causes.",
  },
  {
    question: "Do you also work on heat pumps for heating?",
    answer:
      "Yes. Heat pumps provide heating as well as cooling, and we cover them as their own residential service category. Visit our heat pump page for details.",
  },
];

export default function HeatingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Heating Services", href: "/services/heating" },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential Heating Services",
            "Residential heating repair, installation, replacement, and maintenance for homeowners in Orange County, New Jersey.",
            "/services/heating",
          ),
        ]}
      />

      <PageHero
        eyebrow="Residential heating services"
        title={
          <>
            Warmth that holds, <span className="text-flame-600">all season long.</span>
          </>
        }
        intro="Residential heating solutions to help maintain a comfortable home when temperatures drop in Orange County, New Jersey."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Heating Services", href: "/services/heating" },
        ]}
        image="/hero.png"
        imageAlt="Residential furnace and ductwork inspected during a home heating service visit"
        highlights={["Heating repair", "Installation & replacement", "Seasonal maintenance"]}
        secondary={{ href: "/contact", label: "Describe your heating concern" }}
        accent="orange"
      />

      <Section tone="white">
        <FeatureSplit
          eyebrow="Residential heating solutions"
          title="Comfort for Colder New Jersey Weather."
          body={[
            "A heating system should make the whole home feel even and settled. When it does not, the cause could be equipment performance, airflow, a thermostat setting, or the way a room is used.",
            "Our residential heating service starts with understanding what you are noticing — which rooms are affected, when the concern appears, and whether anything has changed recently in the home.",
          ]}
          bullets={[
            "Forced-air furnace systems",
            "Boilers and radiator heat",
            "Heat pump heating mode",
            "Thermostat and airflow checks",
          ]}
          image="https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Technician adjusting controls on residential heating equipment during a service call"
          accent="orange"
          cta={{ href: "/contact", label: "Talk through your heating needs" }}
        />
      </Section>

      <Section tone="fog">
        <IconCardGrid
          eyebrow="Heating services"
          title="Heating Support, Three Practical Ways."
          description="Whether the system needs attention, replacement planning, or a seasonal reset, each path starts with a conversation."
          items={[
            {
              icon: Wrench,
              title: "Heating Repair",
              copy: "Troubleshooting for heating systems that are not warming the home as expected, with clear notes on what we find.",
              accent: "orange",
              href: "/services/repairs#heating-troubleshooting",
              linkLabel: "Explore heating repair",
            },
            {
              icon: Settings,
              title: "Heating Installation & Replacement",
              copy: "Planning and installing residential heating equipment sized for your home, its ductwork, and your comfort goals.",
              accent: "navy",
              id: "heating-replacement",
              href: "/services/installation-replacement#heating-replacement",
              linkLabel: "Explore replacement",
            },
            {
              icon: Gauge,
              title: "Heating Maintenance",
              copy: "Seasonal heating checks to support performance before the cold weather arrives and your system runs constantly.",
              accent: "ice",
              href: "/services/maintenance#heating-maintenance",
              linkLabel: "Explore maintenance",
            },
          ]}
        />
      </Section>

      <Section tone="white">
        <ConcernPanel
          eyebrow="Common heating concerns"
          title="Common Heating Concerns"
          intro="Homeowners usually call about one of these patterns. If you recognize yours, it is worth a conversation."
          concerns={[
            "Rooms that never reach the thermostat setting",
            "Warm air from some vents, cool air from others",
            "System cycling on and off repeatedly",
            "Rattling, banging, or whistling sounds",
            "Higher energy use than previous winters",
            "Heating that runs but the house stays cold",
          ]}
          noteTitle="What helps us troubleshoot quickly"
          noteItems={[
            "Note when the concern started and whether it is constant or intermittent.",
            "Mention which rooms or floors are affected.",
            "Check whether the thermostat is set to heat and the filter is clean.",
            "Have the make and approximate age of the equipment ready if you know it.",
            "Stop using the system if you smell burning or see electrical concerns.",
          ]}
          accent="orange"
        />
      </Section>

      <Section tone="mist">
        <FaqBlock
          faqs={faqs}
          title="Heating questions, answered."
          description="Practical answers about residential heating repair, replacement, and maintenance in Orange County, NJ."
        />
      </Section>

      <Section tone="white">
        <RelatedServices currentSlug="heating" />
      </Section>

      <CtaBand
        eyebrow="Heating season support"
        heading="Cold spot in the house? Let's take a look."
        description="Tell us what your heating system is doing — and what it is not doing. We will help you decide on the next step."
      />
    </>
  );
}
