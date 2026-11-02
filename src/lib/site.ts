import {
  AirVent,
  ArrowLeftRight,
  Clock,
  Flame,
  Gauge,
  House,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "JHI SERVICES LLC",
  tagline: "Residential Heating & Cooling",
  shortName: "JHI Services",
  phoneDisplay: "(914) 258-6101",
  phoneHref: "tel:+19142586101",
  phoneRaw: "+19142586101",
  email: "hello@jhiservicesllc.com",
  area: "Orange County, New Jersey",
  areaShort: "Orange County, NJ",
  region: "NJ",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jhiservicesllc.com",
} as const;

export type Accent = "orange" | "ice" | "navy" | "mixed";

export type Service = {
  slug: string;
  href: string;
  name: string;
  navName: string;
  icon: LucideIcon;
  accent: Accent;
  tag: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "heating",
    href: "/services/heating",
    name: "Heating Services",
    navName: "Heating Services",
    icon: Flame,
    accent: "orange",
    tag: "Warmth",
    summary:
      "Residential heating solutions to help maintain a comfortable home when temperatures drop.",
    description:
      "From routine heating maintenance to system replacement, JHI SERVICES LLC helps homeowners in Orange County, NJ stay warm through the colder months with practical residential heating solutions.",
    image:
      "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Technician checking the controls of a residential heating system during a home service visit",
    highlights: [
      "Heating system evaluation",
      "Repair and troubleshooting",
      "Installation and replacement",
    ],
  },
  {
    slug: "air-conditioning",
    href: "/services/air-conditioning",
    name: "Air Conditioning Services",
    navName: "Air Conditioning",
    icon: Snowflake,
    accent: "ice",
    tag: "Cooling",
    summary:
      "Cooling solutions to help create a refreshing and comfortable indoor environment.",
    description:
      "Residential air conditioning services focused on refreshing, consistent indoor comfort — including repairs, seasonal maintenance, and new cooling system installation.",
    image:
      "https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Residential outdoor air conditioning condenser unit installed beside a landscaped home",
    highlights: [
      "Cooling inspections",
      "AC repair support",
      "New system installation",
    ],
  },
  {
    slug: "heat-pumps",
    href: "/services/heat-pumps",
    name: "Heat Pump Services",
    navName: "Heat Pumps",
    icon: ThermometerSun,
    accent: "mixed",
    tag: "Year-round",
    summary:
      "Residential heat pump solutions for heating and cooling comfort.",
    description:
      "A single heat pump can support both heating and cooling. We help Orange County homeowners understand, service, and replace residential heat pump systems.",
    image:
      "https://images.pexels.com/photos/38067323/pexels-photo-38067323.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Modern residential heat pump unit installed outdoors next to a home exterior wall",
    highlights: [
      "System walkthroughs",
      "Cooling and heating modes",
      "Repair and replacement",
    ],
  },
  {
    slug: "installation-replacement",
    href: "/services/installation-replacement",
    name: "HVAC Installation & Replacement",
    navName: "Installation & Replacement",
    icon: Settings,
    accent: "navy",
    tag: "New systems",
    summary:
      "Residential heating and cooling system installation and replacement solutions.",
    description:
      "Planning a new HVAC system or replacing an aging unit? We help homeowners compare options and install equipment suited to their home and comfort goals.",
    image:
      "https://images.pexels.com/photos/8293646/pexels-photo-8293646.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "HVAC professional testing indoor airflow at a residential floor vent during an installation visit",
    highlights: [
      "In-home assessment",
      "Right-sized equipment",
      "Clear project planning",
    ],
  },
  {
    slug: "repairs",
    href: "/services/repairs",
    name: "HVAC Repairs & Troubleshooting",
    navName: "Repairs & Troubleshooting",
    icon: Wrench,
    accent: "orange",
    tag: "Diagnostics",
    summary:
      "Assistance with common residential heating and cooling system concerns.",
    description:
      "When your system is not heating or cooling as expected, we troubleshoot residential HVAC concerns and recommend the next practical step.",
    image:
      "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Technician using a manifold gauge to diagnose a residential air conditioning unit",
    highlights: [
      "Heating troubleshooting",
      "Cooling diagnostics",
      "Repair recommendations",
    ],
  },
  {
    slug: "maintenance",
    href: "/services/maintenance",
    name: "Preventive Maintenance",
    navName: "Maintenance",
    icon: Gauge,
    accent: "ice",
    tag: "Seasonal care",
    summary:
      "Maintenance solutions designed to support the performance of residential HVAC systems.",
    description:
      "Seasonal heating and cooling maintenance helps homeowners keep systems clean, supported, and ready for the season ahead.",
    image:
      "https://images.pexels.com/photos/36077581/pexels-photo-36077581.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Homeowner adjusting a digital thermostat on the wall of a bright modern home",
    highlights: [
      "Seasonal system checks",
      "Filter and airflow guidance",
      "Maintenance planning",
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export type Guide = {
  slug: string;
  title: string;
  icon: LucideIcon;
  accent: Accent;
  summary: string;
  intro: string;
  topics: string[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  relatedServiceSlug: string;
};

export const guides: Guide[] = [
  {
    slug: "heating-systems",
    title: "Heating Systems",
    icon: Flame,
    accent: "orange",
    summary:
      "Understand how residential heating systems work and what to watch for as seasons change.",
    intro:
      "A comfortable home in winter starts with understanding the system that keeps it warm. This guide covers the basics of residential heating and simple ways homeowners in Orange County, NJ can stay ahead of seasonal concerns.",
    topics: ["How heating works", "Performance signals", "Seasonal readiness"],
    sections: [
      {
        heading: "How residential heating works",
        body: [
          "Most New Jersey homes are warmed by a furnace, a boiler, or a heat pump. Furnaces heat air and distribute it through ductwork, boilers heat water for radiators or baseboards, and heat pumps move heat into the home instead of generating it.",
          "Understanding which type of system you have makes it easier to describe concerns clearly when you contact a heating professional.",
        ],
      },
      {
        heading: "Signals worth paying attention to",
        body: [
          "Small changes often show up before a system stops working altogether. Noting them early gives you useful information for a service conversation.",
        ],
        bullets: [
          "Uneven warmth between rooms or floors",
          "Longer run times than you remember in previous seasons",
          "Unusual noises, smells, or frequent cycling",
          "Rising energy use without a change in habits",
        ],
      },
      {
        heading: "Getting ready for colder weather",
        body: [
          "Before the first cold snap, replace the air filter if it is visibly loaded, keep vents and returns clear of furniture, and test the system early on a mild day so you are not troubleshooting in the middle of a cold night.",
          "If the system has not been checked in a while, schedule a seasonal heating maintenance visit so any concerns can be identified before peak demand.",
        ],
      },
    ],
    relatedServiceSlug: "heating",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    icon: Snowflake,
    accent: "ice",
    summary:
      "Practical guidance for keeping indoor cooling comfortable, efficient, and consistent.",
    intro:
      "Air conditioning is about more than lowering a number on a thermostat. Comfortable cooling depends on airflow, equipment condition, and how your home holds temperature. Here is a homeowner-friendly overview.",
    topics: ["Cooling basics", "Airflow", "Comfort checks"],
    sections: [
      {
        heading: "What good cooling looks like",
        body: [
          "A well-performing residential cooling system brings indoor temperatures down steadily, keeps humidity reasonable, and distributes air evenly. If one room never catches up, the cause can be airflow rather than the outdoor unit.",
        ],
      },
      {
        heading: "Airflow is part of the system",
        body: [
          "Ducted cooling depends on unobstructed returns and supply vents. Furniture, rugs, and closed interior doors can all limit how well cool air moves through the home.",
        ],
        bullets: [
          "Keep supply and return vents open and unobstructed",
          "Replace filters on a reasonable schedule for your home",
          "Check that outdoor units have room to release heat",
          "Notice whether humidity stays comfortable, not just temperature",
        ],
      },
      {
        heading: "When to call in a professional",
        body: [
          "If cooling performance drops noticeably, the outdoor unit runs constantly, or you see water where it should not be, a professional diagnostic visit is the practical next step. Describe what you observe — timing, sounds, and affected rooms all help.",
        ],
      },
    ],
    relatedServiceSlug: "air-conditioning",
  },
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    icon: ThermometerSun,
    accent: "mixed",
    summary:
      "A clear look at how heat pumps provide both heating and cooling comfort.",
    intro:
      "Heat pumps are increasingly common in American homes because one system can handle two jobs: keeping the house warm in winter and refreshing in summer. This guide explains the idea in plain language.",
    topics: ["Heating and cooling", "Modes", "Homeowner habits"],
    sections: [
      {
        heading: "One system, two seasons",
        body: [
          "A heat pump uses a refrigeration cycle to move thermal energy. In cooling mode it moves heat out of your home; in heating mode it reverses that process and moves heat into the home — even from cold outdoor air.",
          "That dual capability is why heat pump guidance often covers both comfort seasons at once.",
        ],
      },
      {
        heading: "Why mode changes matter",
        body: [
          "Seasonal changeovers are a good moment to confirm the thermostat is set to the right mode, that outdoor equipment is clear of debris, and that airflow is unobstructed indoors.",
        ],
        bullets: [
          "Keep outdoor clearances free during leaf season",
          "Confirm thermostat mode and schedule settings",
          "Watch for sustained auxiliary heat usage in mild weather",
          "Note any defrost cycles that seem unusually long",
        ],
      },
      {
        heading: "Planning a heat pump project",
        body: [
          "A heat pump should be matched to the home's size, insulation, and ductwork. An in-home assessment is the best way to talk through realistic options and expectations before equipment is chosen.",
        ],
      },
    ],
    relatedServiceSlug: "heat-pumps",
  },
  {
    slug: "hvac-installation",
    title: "HVAC Installation",
    icon: Settings,
    accent: "navy",
    summary:
      "What homeowners can expect when planning a heating or cooling system replacement.",
    intro:
      "A new HVAC system is a meaningful home investment. Knowing the general sequence helps you ask better questions and feel prepared for the project from assessment through start-up.",
    topics: ["Right-sizing", "Project steps", "Questions to ask"],
    sections: [
      {
        heading: "Start with the home, not the catalog",
        body: [
          "Equipment selection should follow an assessment of the home: square footage, layout, insulation, windows, existing ductwork, and how each space is used. A system that is too small or too large can both create comfort complaints.",
        ],
      },
      {
        heading: "A typical project sequence",
        body: [
          "While every home is different, most residential replacements follow a similar path.",
        ],
        bullets: [
          "Conversation about comfort concerns and goals",
          "Home and existing system assessment",
          "Options discussion for heating and cooling equipment",
          "Installation day planning and access notes",
          "Start-up checks and homeowner walkthrough",
        ],
      },
      {
        heading: "Questions worth asking",
        body: [
          "Ask how the proposed system is sized for your home, what the work will involve day to day, how the existing ductwork or connections will be handled, and what routine maintenance will look like afterward.",
        ],
      },
    ],
    relatedServiceSlug: "installation-replacement",
  },
  {
    slug: "hvac-repairs",
    title: "HVAC Repairs",
    icon: Wrench,
    accent: "orange",
    summary:
      "How to describe heating and cooling concerns clearly so diagnosis is efficient.",
    intro:
      "Two systems can show the same symptom for different reasons. Clear, specific observations help a technician troubleshoot efficiently and recommend the right repair path.",
    topics: ["Describe the symptom", "What to note", "When to stop using"],
    sections: [
      {
        heading: "Be specific about symptoms",
        body: [
          "Instead of saying the system 'is not working,' note what actually happens. Does it turn on at all? Does it run but not change temperature? Does the issue happen only in the morning, or after a long run cycle?",
        ],
      },
      {
        heading: "What to note before calling",
        body: [
          "A short list of observations can make a real difference during the first conversation about a repair.",
        ],
        bullets: [
          "When the concern started and whether it is consistent",
          "Which rooms or zones are affected",
          "Any sounds, smells, or visible moisture",
          "Recent filter changes or thermostat adjustments",
          "Whether any breaker or switch has been reset",
        ],
      },
      {
        heading: "When it is best to turn the system off",
        body: [
          "If you notice a burning smell, visible sparking, water actively leaking, or repeated breaker trips, stop running the system and arrange service before using it again.",
        ],
      },
    ],
    relatedServiceSlug: "repairs",
  },
  {
    slug: "hvac-maintenance",
    title: "HVAC Maintenance",
    icon: Gauge,
    accent: "ice",
    summary:
      "Seasonal maintenance habits that support residential heating and cooling performance.",
    intro:
      "Maintenance is the least dramatic part of home comfort, and often the most useful. A few seasonal habits keep equipment cleaner and make performance changes easier to spot.",
    topics: ["Seasonal rhythm", "Filter care", "What a visit covers"],
    sections: [
      {
        heading: "A simple seasonal rhythm",
        body: [
          "Think about HVAC twice a year: once before heating season and once before cooling season. Each check-in is a chance to clean, inspect, and ask questions before your home depends on the system.",
        ],
        bullets: [
          "Spring: cooling readiness and outdoor unit clearance",
          "Summer: filter check and airflow observation",
          "Fall: heating readiness and thermostat review",
          "Winter: basic observation and filter care",
        ],
      },
      {
        heading: "Filter care makes a difference",
        body: [
          "Filter maintenance is the simplest habit in home comfort. Homes with pets, renovation dust, or long run times may need more frequent changes. Keep a note of the size your system uses so replacements are easy.",
        ],
      },
      {
        heading: "What a maintenance visit can include",
        body: [
          "A preventive visit generally covers a visual inspection of equipment, a performance review, cleaning where appropriate, and a conversation about anything worth monitoring. It is also a good time to raise questions about odd sounds or uneven rooms.",
        ],
      },
    ],
    relatedServiceSlug: "maintenance",
  },
];

export const guideBySlug = (slug: string) =>
  guides.find((guide) => guide.slug === slug);

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const megaMenu = [
  {
    title: "Heating",
    href: "/services/heating",
    items: [
      {
        label: "Heating Systems",
        description: "Home heating overview",
        href: "/services/heating",
        icon: Flame,
      },
      {
        label: "Heating Installation",
        description: "New systems & replacement",
        href: "/services/installation-replacement#heating-replacement",
        icon: Settings,
      },
      {
        label: "Heating Repairs",
        description: "Troubleshooting support",
        href: "/services/repairs#heating-troubleshooting",
        icon: Wrench,
      },
    ],
  },
  {
    title: "Cooling",
    href: "/services/air-conditioning",
    items: [
      {
        label: "Air Conditioning",
        description: "Residential cooling comfort",
        href: "/services/air-conditioning",
        icon: Snowflake,
      },
      {
        label: "AC Installation",
        description: "Cooling system replacement",
        href: "/services/installation-replacement#cooling-replacement",
        icon: AirVent,
      },
      {
        label: "AC Maintenance",
        description: "Seasonal cooling checks",
        href: "/services/maintenance#cooling-maintenance",
        icon: Wind,
      },
    ],
  },
  {
    title: "Home Comfort",
    href: "/guides",
    items: [
      {
        label: "Heat Pumps",
        description: "Heating + cooling in one",
        href: "/services/heat-pumps",
        icon: ThermometerSun,
      },
      {
        label: "HVAC Maintenance",
        description: "Care for every season",
        href: "/services/maintenance",
        icon: Gauge,
      },
      {
        label: "Troubleshooting",
        description: "Common comfort concerns",
        href: "/services/repairs",
        icon: ArrowLeftRight,
      },
    ],
  },
];

export const trustItems: { label: string; caption: string; icon: LucideIcon }[] = [
  {
    label: "Residential HVAC Solutions",
    caption: "Homes, not industry",
    icon: House,
  },
  {
    label: "Heating & Cooling",
    caption: "Every season covered",
    icon: ThermometerSun,
  },
  {
    label: "Installation & Replacement",
    caption: "New system projects",
    icon: Settings,
  },
  {
    label: "Repair & Maintenance",
    caption: "Ongoing support",
    icon: ShieldCheck,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Call or send a message describing what is happening in your home. We start with a conversation.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Discuss Your Needs",
    description:
      "Share your comfort concerns, rooms affected, and any patterns you have noticed.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Find the Right Solution",
    description:
      "Talk through practical heating or cooling options for your home and your priorities.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Enjoy Home Comfort",
    description:
      "Move forward with a solution designed to support comfort throughout the seasons.",
    icon: House,
  },
];

export const accentStyles: Record<
  Accent,
  { tile: string; chip: string; ring: string; text: string; bar: string }
> = {
  orange: {
    tile: "bg-flame-50 text-flame-600 ring-flame-100",
    chip: "bg-flame-50 text-flame-700",
    ring: "group-hover:border-flame-400/60",
    text: "text-flame-600",
    bar: "bg-gradient-to-r from-flame-400 to-flame-600",
  },
  ice: {
    tile: "bg-ice-50 text-ice-600 ring-ice-100",
    chip: "bg-ice-50 text-ice-700",
    ring: "group-hover:border-ice-300",
    text: "text-ice-600",
    bar: "bg-gradient-to-r from-ice-300 to-ice-500",
  },
  navy: {
    tile: "bg-navy-50 text-navy-800 ring-navy-100",
    chip: "bg-navy-50 text-navy-800",
    ring: "group-hover:border-navy-700/40",
    text: "text-navy-800",
    bar: "bg-gradient-to-r from-navy-700 to-navy-900",
  },
  mixed: {
    tile: "bg-gradient-to-br from-ice-50 to-flame-50 text-navy-800 ring-ice-100",
    chip: "bg-gradient-to-r from-ice-50 to-flame-50 text-navy-800",
    ring: "group-hover:border-ice-300",
    text: "text-navy-800",
    bar: "bg-gradient-to-r from-ice-500 via-ice-300 to-flame-500",
  },
};

export const locationIcon = MapPin;
