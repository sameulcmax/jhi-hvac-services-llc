import { processSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <div className="relative mt-9">
      <div
        className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-ice-100 via-ice-300 to-flame-100 lg:block"
        aria-hidden="true"
      />
      <ol className="relative grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {processSteps.map((step, index) => (
          <li
            key={step.step}
            className="relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_10px_30px_-26px_rgba(9,43,80,0.5)] lg:bg-white/95 lg:p-5"
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex size-11 items-center justify-center rounded-full text-[13px] font-extrabold ring-4 ring-white ${
                  index % 2 === 0
                    ? "bg-navy-900 text-white"
                    : "bg-ice-500 text-white"
                }`}
              >
                {step.step}
              </span>
              <step.icon
                className={`size-5 ${index % 2 === 0 ? "text-ice-500" : "text-flame-500"}`}
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-3.5 font-display text-[15px] font-bold text-navy-900">
              {step.title}
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
