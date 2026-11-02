import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  Flame,
  Mail,
  MapPin,
  Phone,
  Send,
  Snowflake,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink, IconTile, JsonLd, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { business, services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact JHI SERVICES LLC",
  description:
    "Contact JHI SERVICES LLC for residential heating and cooling in Orange County, NJ. Call (914) 258-6101 or send your home comfort request through our contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact our team"
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-ice-700">home&apos;s comfort.</span>
          </>
        }
        intro="Call for the fastest response, or send a few details about your heating and cooling needs and we will help you plan the next step."
        crumbs={[{ name: "Contact", href: "/contact" }]}
        highlights={["Residential HVAC", "Orange County, NJ", "Heating & cooling"]}
        primaryHref={business.phoneHref}
        primaryLabel={`Call ${business.phoneDisplay}`}
        secondary={{ href: "/services", label: "Browse services" }}
      />

      <section className="bg-white section-y">
        <div className="shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Two straightforward ways to reach us."
              description="There is no automated scheduling portal here — just a phone number and a request form that prepares an email draft for you."
            />

            <div className="mt-5 space-y-2.5">
              <a
                href={business.phoneHref}
                className="group flex items-start gap-3 rounded-2xl border border-flame-100 bg-flame-50/60 p-4 transition-colors hover:border-flame-400/70"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-flame-600 ring-1 ring-flame-100">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] font-bold tracking-[0.14em] text-flame-700 uppercase">
                    Call now
                  </span>
                  <span className="mt-0.5 block font-display text-[19px] font-extrabold text-navy-900 group-hover:text-flame-600">
                    {business.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-[12px] leading-relaxed text-slate-600">
                    The quickest way to reach the team. Tell us what your system is doing and
                    which rooms are affected.
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-navy-900/10 bg-white p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ice-50 text-ice-600 ring-1 ring-ice-100">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                    Service area
                  </span>
                  <span className="mt-0.5 block font-display text-[16px] font-bold text-navy-900">
                    {business.area}
                  </span>
                  <span className="mt-1 block text-[12px] leading-relaxed text-slate-600">
                    Residential heating and cooling for homeowners in Orange County, NJ.
                  </span>
                </span>
              </div>

              <div className="rounded-2xl border border-navy-900/10 bg-mist/70 p-4">
                <p className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                  <Clock className="size-3.5 text-ice-600" aria-hidden="true" />
                  How the form works
                </p>
                <ol className="mt-2.5 space-y-2">
                  {[
                    "Complete the fields and submit — details are validated first.",
                    "Your request is logged with a reference number.",
                    "Your email app opens with a pre-filled draft to send.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-2 text-[12px] text-navy-800">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-navy-900 text-[9px] font-bold text-white">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-white px-2.5 py-2 text-[11px] leading-relaxed text-slate-500">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-ice-600" aria-hidden="true" />
                  Nothing is sent automatically, and no payment information is requested.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-900/10 bg-white p-4">
                <p className="text-[10.5px] font-bold tracking-[0.14em] text-slate-500 uppercase">
                  Residential services
                </p>
                <ul className="mt-2 grid grid-cols-2 gap-1.5">
                  {services.map((service) => (
                    <li key={service.slug} className="flex items-center gap-1.5 text-[11.5px] text-navy-800">
                      <service.icon
                        className={`size-3.5 shrink-0 ${
                          service.accent === "orange" ? "text-flame-500" : "text-ice-600"
                        }`}
                        aria-hidden="true"
                      />
                      {service.navName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-flame-100 bg-flame-50/50 p-3">
                <IconTile icon={Flame} accent="orange" size="sm" />
                <p className="text-[11.5px] leading-relaxed text-navy-800">
                  Heating concerns? Mention which rooms feel cold and whether the system runs.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-ice-100 bg-ice-50/60 p-3">
                <IconTile icon={Snowflake} accent="ice" size="sm" />
                <p className="text-[11.5px] leading-relaxed text-navy-800">
                  Cooling concerns? Note whether airflow is weak or the air is not cold.
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 rounded-xl border border-navy-900/10 bg-mist/70 p-3.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-1.5 text-[12px] text-slate-600">
                <Mail className="size-3.5 text-ice-600" aria-hidden="true" />
                Prefer to email directly? Use the form to prepare your draft.
              </p>
              <ButtonLink href="/guides" variant="outline" size="sm">
                <Send className="size-3.5" aria-hidden="true" />
                Comfort guides
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Fastest response"
        heading="Need to speak with someone now?"
        description="Call JHI SERVICES LLC and describe what your heating or cooling system is doing. We will help you find the next practical step."
      />
    </>
  );
}
