import type { Metadata } from "next";
import { ClipboardCheck, Flame, Gauge, House, Ruler, Snowflake } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  DualImagePanel,
  FaqBlock,
  FeatureSplit,
  RelatedServices,
  Section,
} from "@/components/service-blocks";
import { IconTile, JsonLd, SectionHeading } from "@/components/ui";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Installation & Replacement in Orange County, NJ",
  description:
    "Residential HVAC installation and replacement in Orange County, NJ. JHI SERVICES LLC helps homeowners plan heating and cooling system replacements suited to their homes.",
  path: "/services/installation-replacement",
});

const faqs = [
  {
    question: "How long does a residential HVAC replacement take?",
    answer:
      "Many straightforward residential replacements are completed within a day, while projects involving ductwork changes or multiple components can take longer. The timeline should always be discussed before work begins.",
  },
  {
    question: "Do I have to replace the furnace and air conditioner at the same time?",
    answer:
      "Not always. Sometimes one component can be replaced on its own; other times pairing equipment makes more sense for efficiency and reliability. The recommendation depends on the age and condition of each part.",
  },
  {
    question: "What information helps at the first appointment?",
    answer:
      "Which rooms are uncomfortable, any history of repairs, the approximate age of the existing equipment, and your goals for the project. Photos of the equipment and thermostat can also be helpful.",
  },
  {
    question: "Can existing ductwork be reused?",
    answer:
      "Often yes, provided it is in reasonable condition and properly sized for the new equipment. Ductwork is assessed during the in-home evaluation so surprises are limited on installation day.",
  },
  {
    question: "What happens after a new system is installed?",
    answer:
      "The system is started up and checked, and you should receive a walkthrough of settings, filter care, and routine maintenance expectations so the equipment starts off on the right foot.",
  },
];

const considerations = [
  {
    icon: House,
    title: "The home itself",
    copy: "Square footage, layout, insulation, and window exposure all influence how much heating or cooling a home needs.",
    accent: "ice" as const,
  },
  {
    icon: Ruler,
    title: "Right-sized equipment",
    copy: "An oversized system can short-cycle and leave humidity behind; an undersized one may never catch up on extreme days.",
    accent: "orange" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Ductwork condition",
    copy: "Existing ducts and connections are reviewed so the new equipment can actually move the air it is meant to move.",
    accent: "navy" as const,
  },
  {
    icon: Gauge,
    title: "Ongoing maintenance",
    copy: "Plan for seasonal care from the start so performance is supported beyond the first week after installation.",
    accent: "mixed" as const,
  },
];

export default function InstallationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            {
              name: "Installation & Replacement",
              href: "/services/installation-replacement",
            },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential HVAC Installation & Replacement",
            "Residential heating and cooling system installation and replacement in Orange County, New Jersey.",
            "/services/installation-replacement",
          ),
        ]}
      />

      <PageHero
        eyebrow="HVAC installation & replacement"
        title={
          <>
            A new system, <span className="text-navy-700">planned around your home.</span>
          </>
        }
        intro="Residential heating and cooling system installation and replacement solutions for homeowners across Orange County, New Jersey."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Installation & Replacement", href: "/services/installation-replacement" },
        ]}
        image="https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="HVAC professional checking airflow at a residential floor vent during an installation visit"
        highlights={["In-home assessment", "Heating replacement", "Cooling replacement"]}
        secondary={{ href: "/contact", label: "Plan your project" }}
        accent="navy"
      />

      <Section tone="white">
        <FeatureSplit
          eyebrow="Residential system installation"
          title="Start With the Home, Not the Catalog."
          body={[
            "A replacement is a good moment to solve the comfort problems you have been living with. That starts with an assessment of the home — room sizes, layout, insulation, existing ductwork, and how each space is actually used.",
            "From there, equipment options make more sense. We talk through what different choices mean for comfort, upkeep, and the project itself, so you can make a decision that fits your home rather than a generic package.",
          ]}
          bullets={[
            "Comfort concerns reviewed",
            "Existing equipment assessed",
            "Options explained clearly",
            "Project steps planned ahead",
          ]}
          image="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Technician inspecting the outdoor portion of a residential HVAC system"
          cta={{ href: "/contact", label: "Request an installation conversation" }}
        />
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Replacement options"
          title="Heating and Cooling Replacements."
          description="Some homeowners replace one side of the system; others plan both together. Either way, the project is scoped before work begins."
          accent="navy"
        />
        <DualImagePanel
          items={[
            {
              id: "heating-replacement",
              title: "Heating System Replacement",
              copy: "Replacing a furnace, boiler, or heat pump heating component so the home holds temperature comfortably through winter.",
              bullets: [
                "Assessment of current heating performance",
                "Equipment options matched to the home",
                "Ductwork and venting reviewed",
                "Start-up and homeowner walkthrough",
              ],
              image: "/hero.png",
              imageAlt: "Residential heating system being serviced before replacement planning",
              accent: "orange",
              href: "/services/heating",
              linkLabel: "Heating services",
            },
            {
              id: "cooling-replacement",
              title: "Cooling System Replacement",
              copy: "Replacing air conditioning equipment to restore refreshing, consistent cooling before the next warm season.",
              bullets: [
                "Cooling performance and age reviewed",
                "Indoor and outdoor components matched",
                "Airflow and filter setup confirmed",
                "Mode and schedule walkthrough",
              ],
              image:
                "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1400",
              imageAlt: "Technician working on a residential outdoor air conditioning unit",
              accent: "ice",
              href: "/services/air-conditioning",
              linkLabel: "Air conditioning services",
            },
          ]}
        />
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Choosing your system"
          title="Choosing the Right HVAC Solution."
          description="These are the four considerations we work through with homeowners before equipment is selected."
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {considerations.map((item, index) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_12px_32px_-30px_rgba(9,43,80,0.5)]"
            >
              <span className="absolute top-3 right-3 text-[11px] font-extrabold text-slate-300">
                0{index + 1}
              </span>
              <IconTile icon={item.icon} accent={item.accent} size="md" />
              <h3 className="mt-3 font-display text-[14.5px] font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 rounded-xl border border-ice-100 bg-ice-50/60 p-3.5">
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-flame-700">
            <Flame className="size-3.5" aria-hidden="true" />
            Heating
          </span>
          <span className="h-3 w-px bg-navy-900/15" aria-hidden="true" />
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-ice-700">
            <Snowflake className="size-3.5" aria-hidden="true" />
            Cooling
          </span>
          <span className="text-[12px] text-slate-600">
            Both sides of the system can be planned together or addressed separately,
            depending on condition and budget.
          </span>
        </div>
      </Section>

      <Section tone="fog">
        <FaqBlock
          faqs={faqs}
          title="Installation questions, answered."
          description="What homeowners usually want to know before planning a residential HVAC replacement."
        />
      </Section>

      <Section tone="white">
        <RelatedServices currentSlug="installation-replacement" />
      </Section>

      <CtaBand
        eyebrow="Replacement planning"
        heading="Planning a new HVAC system? Let's talk it through."
        description="We will look at your home, your current equipment, and the comfort you are hoping for — then explain the practical options."
      />
    </>
  );
}
