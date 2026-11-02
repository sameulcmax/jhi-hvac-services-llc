import type { Metadata } from "next";
import {
  AlertTriangle,
  Clock,
  Droplets,
  Flame,
  Phone,
  Snowflake,
  Volume2,
  Wind,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  FaqBlock,
  FeatureSplit,
  IconCardGrid,
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
import { business } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "HVAC Repairs & Troubleshooting in Orange County, NJ",
  description:
    "Residential HVAC repair and troubleshooting in Orange County, NJ. JHI SERVICES LLC helps homeowners diagnose heating and cooling concerns and decide on the next step.",
  path: "/services/repairs",
});

const faqs = [
  {
    question: "Can you tell what is wrong over the phone?",
    answer:
      "Some concerns can be narrowed down with a few questions, but heating and cooling diagnosis usually needs an in-person visit. What you describe helps us prepare and use the visit efficiently.",
  },
  {
    question: "Should I keep running a system that is not working well?",
    answer:
      "If you notice a burning smell, sparking, repeated breaker trips, or active water leaks, turn the system off and call. For less serious comfort complaints, note the behavior so it can be discussed.",
  },
  {
    question: "Is it better to repair or replace?",
    answer:
      "It depends on the equipment's age, condition, and repair history, plus your plans for the home. We can walk through both paths so the decision reflects your priorities rather than pressure.",
  },
  {
    question: "What details should I have ready when I call?",
    answer:
      "When the concern started, which rooms are affected, any sounds or smells you noticed, recent filter changes, and the approximate age of the equipment. Photos of the equipment and thermostat can help too.",
  },
  {
    question: "Do you troubleshoot both heating and cooling in one visit?",
    answer:
      "If both systems are showing concerns, let us know when you call so the visit can be planned appropriately. Heat pump systems handle both modes and are treated as a single system.",
  },
];

const problems = [
  {
    icon: Snowflake,
    title: "Not cooling",
    copy: "The system runs but the house stays warm, or airflow feels weak from some vents.",
    accent: "ice" as const,
  },
  {
    icon: Flame,
    title: "Not heating",
    copy: "Warm air never arrives, or the system shuts down before the home reaches temperature.",
    accent: "orange" as const,
  },
  {
    icon: Clock,
    title: "Short cycling",
    copy: "Repeated start-and-stop cycles that leave rooms uneven and equipment working harder.",
    accent: "navy" as const,
  },
  {
    icon: Volume2,
    title: "Unusual noises",
    copy: "Rattling, banging, humming, or whistling that was not part of the system's normal sound.",
    accent: "mixed" as const,
  },
  {
    icon: Droplets,
    title: "Water & moisture",
    copy: "Pooling near indoor equipment, dripping lines, or ice forming on refrigerant piping.",
    accent: "ice" as const,
  },
  {
    icon: Wind,
    title: "Airflow problems",
    copy: "Hot and cold spots, weak vents, or rooms that never match the thermostat setting.",
    accent: "orange" as const,
  },
];

const warningSigns = [
  {
    icon: AlertTriangle,
    title: "Burning or chemical smells",
    copy: "Turn the system off, ventilate the area, and call before using it again.",
  },
  {
    icon: Wrench,
    title: "Repeated breaker trips",
    copy: "Electrical concerns should be looked at rather than reset repeatedly.",
  },
  {
    icon: Droplets,
    title: "Active water leaks",
    copy: "Clear the area, place a towel down, and arrange service to check the source.",
  },
  {
    icon: Phone,
    title: "No response at all",
    copy: "Check thermostat batteries and the breaker, then call if the system stays silent.",
  },
];

export default function RepairsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Repairs & Troubleshooting", href: "/services/repairs" },
          ]),
          faqSchema(faqs),
          serviceSchema(
            "Residential HVAC Repairs & Troubleshooting",
            "Residential heating and cooling repair and troubleshooting in Orange County, New Jersey.",
            "/services/repairs",
          ),
        ]}
      />

      <PageHero
        eyebrow="HVAC repairs & troubleshooting"
        title={
          <>
            Something feels off? <span className="text-flame-600">Let&apos;s find the cause.</span>
          </>
        }
        intro="Assistance with common residential heating and cooling system concerns in Orange County, New Jersey — starting with a clear description of what your home is doing."
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Repairs & Troubleshooting", href: "/services/repairs" },
        ]}
        image="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="HVAC technician using manifold gauges to diagnose a residential air conditioning unit"
        highlights={["Heating troubleshooting", "Cooling diagnostics", "Practical next steps"]}
        secondary={{ href: "/contact", label: "Describe the concern" }}
        accent="orange"
      />

      <Section tone="white" id="heating-troubleshooting" className="scroll-mt-20">
        <FeatureSplit
          eyebrow="Heating troubleshooting"
          title="When the Heat Does Not Keep Up."
          body={[
            "Heating concerns often show up gradually: a room that used to be comfortable now is not, the system runs longer than it used to, or the air from the vents feels less warm than expected.",
            "We troubleshoot heating problems by working from the simple causes outward — thermostat settings, filters, airflow, and equipment condition — so the recommendation matches what is actually happening in your home.",
          ]}
          bullets={[
            "Thermostat and schedule review",
            "Filter and airflow checks",
            "Equipment performance assessment",
            "Repair options discussed",
          ]}
          image="/hero.png"
          imageAlt="Residential heating equipment and ductwork inspected for a heating troubleshooting visit"
          accent="orange"
          cta={{ href: "/services/heating", label: "More on heating services" }}
        />
      </Section>

      <Section tone="fog" id="cooling-troubleshooting" className="scroll-mt-20">
        <FeatureSplit
          eyebrow="Air conditioning troubleshooting"
          title="When Cooling Feels Weak or Uneven."
          body={[
            "A cooling complaint can come from the equipment, the airflow, or the way a room is used. One room that never cools points somewhere different than a whole house that stays warm.",
            "Our cooling troubleshooting starts with those distinctions, then reviews filters, vents, outdoor equipment, and system performance before recommending repair work.",
          ]}
          bullets={[
            "Room-by-room comfort review",
            "Outdoor unit condition check",
            "Filter and vent airflow review",
            "Moisture and drainage observations",
          ]}
          image="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1400"
          imageAlt="Technician repairing an outdoor residential air conditioning unit"
          reverse
          cta={{ href: "/services/air-conditioning", label: "More on cooling services" }}
        />
      </Section>

      <Section tone="white">
        <IconCardGrid
          eyebrow="Common HVAC problems"
          title="Common HVAC Problems We Hear About."
          description="If you recognize your situation below, note the details — they make the first conversation more useful."
          items={problems}
        />
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Safety and timing"
          title="When to Contact a Professional."
          description="Some concerns should not wait for a convenient day. Turn the system off and call if you notice any of the following."
          accent="orange"
        />
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {warningSigns.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-flame-100 bg-white p-4"
            >
              <IconTile icon={item.icon} accent="orange" size="sm" />
              <h3 className="mt-2.5 text-[13px] font-bold text-navy-900">{item.title}</h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2.5 rounded-xl border border-navy-900/10 bg-white p-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-slate-600">
            Not sure whether your situation is urgent? A quick call is the simplest way to
            find out.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-flame-500 px-4 py-2.5 text-[12.5px] font-bold text-white hover:bg-flame-600"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </Section>

      <Section tone="white">
        <FaqBlock
          faqs={faqs}
          title="Repair questions, answered."
          description="How residential HVAC troubleshooting works, and what to have ready before you call."
        />
      </Section>

      <Section tone="fog">
        <RelatedServices currentSlug="repairs" />
      </Section>

      <CtaBand
        eyebrow="Repair support"
        heading="Let's troubleshoot the comfort issue together."
        description="Describe the sounds, the rooms, and the timing. That information helps us get to a practical answer faster."
      />
    </>
  );
}
