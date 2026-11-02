import type { Metadata } from "next";
import { CalendarDays, CloudSun, Flame, Gauge, Leaf, Snowflake, Sun, Wind } from "lucide-react";
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
  title: "HVAC Maintenance in Orange County, NJ",
  description:
    "Preventive HVAC maintenance in Orange County, NJ. JHI SERVICES LLC provides residential heating and cooling maintenance to support system performance through every season.",
  path: "/services/maintenance",
});

const faqs = [
  {
    question: "How often does a residential HVAC system need maintenance?",
    answer:
      "A practical approach is to check in before each comfort season — heating before fall and cooling before spring or early summer. Homes with pets, recent renovations, or heavy use may need more frequent filter attention.",
  },
  {
    question: "What does a preventive maintenance visit involve?",
    answer:
      "Typically a visual inspection of the equipment, an airflow and filter review, cleaning where appropriate, and a conversation about performance concerns. It is also a good opportunity to ask about noises or uneven rooms.",
  },
  {
    question: "Is maintenance necessary if the system seems fine?",
    answer:
      "Maintenance is how small changes are noticed before they become comfort problems. It is optional, but many homeowners find a seasonal check-in useful for planning and peace of mind.",
  },
  {
    question: "How often should I change my air filter?",
    answer:
      "Filter life depends on the filter type and your home. Pets, dust from renovations, and long run times shorten it. Check the filter monthly during heavy-use seasons and replace it when visibly loaded.",
  },
  {
    question: "Can maintenance help with uneven room temperatures?",
    answer:
      "It can help identify likely contributors such as restricted airflow or dirty components. Some uneven temperature issues relate to ductwork or insulation, which can be discussed during the visit.",
  },
];

const checklist = [
  {
    season: "Spring",
    months: "Cooling readiness",
    icon: Leaf,
    tone: "border-ice-100 bg-ice-50/60",
    tasks: [
      "Replace or clean the air filter",
      "Clear the outdoor unit of debris",
      "Test cooling on a mild day",
      "Review thermostat schedule",
    ],
  },
  {
    season: "Summer",
    months: "Peak cooling",
    icon: Sun,
    tone: "border-ice-100 bg-white",
    tasks: [
      "Check filter mid-season",
      "Keep vents unobstructed",
      "Watch for indoor humidity",
      "Note any new sounds",
    ],
  },
  {
    season: "Fall",
    months: "Heating readiness",
    icon: CloudSun,
    tone: "border-flame-100 bg-white",
    tasks: [
      "Schedule a heating check",
      "Test the heating cycle early",
      "Confirm thermostat mode",
      "Clear returns of dust and pet hair",
    ],
  },
  {
    season: "Winter",
    months: "Peak heating",
    icon: Snowflake,
    tone: "border-flame-100 bg-flame-50/60",
    tasks: [
      "Keep filters clean",
      "Watch for uneven warmth",
      "Keep outdoor equipment clear of snow",
      "Note run times and cycling",
    ],
  },
];

export default function MaintenancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Preventive Maintenance", href: "/services/maintenance" },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential HVAC Preventive Maintenance",
            "Seasonal heating and cooling maintenance for homeowners in Orange County, New Jersey.",
            "/services/maintenance",
          ),
        ]}
      />

      <PageHero
        eyebrow="Preventive maintenance"
        title={
          <>
            Small check-ins. <span className="text-ice-700">Better comfort all year.</span>
          </>
        }
        intro="Maintenance solutions designed to support the performance of residential HVAC systems for homeowners in Orange County, New Jersey."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Preventive Maintenance", href: "/services/maintenance" },
        ]}
        image="https://images.pexels.com/photos/36077581/pexels-photo-36077581.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Hand adjusting a digital thermostat on the wall of a modern home"
        highlights={["Seasonal system checks", "Airflow guidance", "Maintenance planning"]}
        secondary={{ href: "/contact", label: "Plan seasonal service" }}
      />

      <Section tone="white">
        <FeatureSplit
          eyebrow="Why maintenance matters"
          title="Why Preventive Maintenance Matters."
          body={[
            "Heating and cooling systems rarely fail without a warning. Filters load up, airflow changes, and small performance shifts become habits that are easy to miss until a room is uncomfortable.",
            "A seasonal maintenance visit is a chance to review those details before peak demand — when a small adjustment is simpler than an emergency repair.",
          ]}
          bullets={[
            "Cleaner airflow and filter care",
            "Season-start performance review",
            "Early notice of wear or changes",
            "Planning for the season ahead",
          ]}
          image="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Technician performing a seasonal maintenance inspection on residential HVAC equipment"
          cta={{ href: "/guides/hvac-maintenance", label: "Read the maintenance guide" }}
        />
      </Section>

      <Section tone="fog">
        <SectionHeading
          eyebrow="Heating & cooling maintenance"
          title="Maintenance for Both Comfort Seasons."
          description="Each side of the system has its own rhythm. Plan ahead for the one coming up."
          accent="ice"
        />
        <DualImagePanel
          items={[
            {
              id: "heating-maintenance",
              title: "Heating Maintenance",
              copy: "Fall is the practical window for heating checks — before the system runs all day and small concerns become urgent ones.",
              bullets: [
                "Heating cycle tested early",
                "Filter and return airflow reviewed",
                "Equipment and connections inspected",
                "Thermostat settings discussed",
              ],
              image: "/hero.png",
              imageAlt: "Residential heating equipment inspected during a preventive maintenance visit",
              accent: "orange",
              href: "/services/heating",
              linkLabel: "Heating services",
            },
            {
              id: "cooling-maintenance",
              title: "Cooling Maintenance",
              copy: "Spring checks focus on airflow, outdoor clearances, and cooling performance so the first hot week is not a surprise.",
              bullets: [
                "Cooling performance reviewed",
                "Outdoor unit clearance confirmed",
                "Indoor coil and filter area checked",
                "Moisture and drainage observed",
              ],
              image:
                "https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1400",
              imageAlt: "Outdoor residential air conditioning unit ready for a seasonal cooling check",
              accent: "ice",
              href: "/services/air-conditioning",
              linkLabel: "Air conditioning services",
            },
          ]}
        />
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Seasonal checklist"
          title="Seasonal Home Comfort Checklist."
          description="General guidance for homeowners — not a substitute for professional inspection, but a helpful way to stay organized."
          accent="orange"
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {checklist.map((season) => (
            <article
              key={season.season}
              className={`rounded-2xl border p-4 ${season.tone}`}
            >
              <div className="flex items-center justify-between">
                <IconTile
                  icon={season.icon}
                  accent={season.season === "Fall" || season.season === "Winter" ? "orange" : "ice"}
                  size="sm"
                />
                <span className="text-[10px] font-bold tracking-[0.1em] text-slate-500 uppercase">
                  {season.months}
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-[14.5px] font-bold text-navy-900">
                {season.season}
              </h3>
              <ul className="mt-2 space-y-1.5">
                {season.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-1.5 text-[11.5px] text-navy-800">
                    <CalendarDays className="mt-0.5 size-3 shrink-0 text-slate-400" aria-hidden="true" />
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {[
            { icon: Gauge, label: "Note filter sizes", copy: "Keep the size written down so replacements are easy." },
            { icon: Wind, label: "Watch airflow", copy: "Weak vents are easier to discuss early than late." },
            { icon: Flame, label: "Test before peak", copy: "Try heating or cooling on a mild day before you need it." },
          ].map((tip) => (
            <div
              key={tip.label}
              className="flex items-start gap-2 rounded-xl border border-navy-900/8 bg-mist/60 p-3"
            >
              <tip.icon className="mt-0.5 size-4 shrink-0 text-ice-600" aria-hidden="true" />
              <span>
                <span className="block text-[12px] font-bold text-navy-900">{tip.label}</span>
                <span className="block text-[11px] leading-relaxed text-slate-600">{tip.copy}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <FaqBlock
          faqs={faqs}
          title="Maintenance questions, answered."
          description="What preventive heating and cooling maintenance covers, and how often to plan it."
        />
      </Section>

      <Section tone="white">
        <RelatedServices currentSlug="maintenance" />
      </Section>

      <CtaBand
        eyebrow="Seasonal care"
        heading="Set up maintenance before the season starts."
        description="A short conversation now can make the next heating or cooling season easier on your home and your system."
      />
    </>
  );
}
