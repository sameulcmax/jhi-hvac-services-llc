import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui";

export type Faq = { question: string; answer: string };

export function FaqSection({
  faqs,
  eyebrow = "Frequently asked",
  title = "Residential HVAC questions, answered.",
  description,
  accent = "ice",
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  description?: string;
  accent?: "ice" | "orange" | "navy";
}) {
  return (
    <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <div>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          accent={accent}
        />
      </div>
      <div className="space-y-2.5">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl border border-navy-900/10 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(9,43,80,0.03)] transition-colors open:border-ice-300/70 open:bg-ice-50/40 hover:border-navy-900/20 md:px-5 md:py-4"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
              <h3 className="text-[13.5px] leading-snug font-bold text-navy-900 md:text-[15px]">
                {faq.question}
              </h3>
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-fog text-navy-800 transition-all group-open:rotate-45 group-open:bg-ice-500 group-open:text-white">
                <Plus className="size-3.5" aria-hidden="true" />
              </span>
            </summary>
            <p className="mt-2.5 pr-8 text-[12.5px] leading-relaxed text-slate-600 md:text-[13.5px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
