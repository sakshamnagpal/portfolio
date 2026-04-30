import { experiences } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold text-primary mb-3">
          Experience
        </h2>
        <div className="h-0.5 w-12 bg-accent mb-4 rounded-full" />
        <p className="text-secondary text-base">
          Where I&apos;ve built and shipped
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — hidden on mobile, visible md+ */}
        <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-accent/20" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 group">
              {/* Timeline marker — desktop only */}
              <div className="hidden md:flex flex-col items-center shrink-0 pt-1">
                <div className="w-3.5 h-3.5 rounded-full bg-accent shrink-0 ring-4 ring-base" />
              </div>

              {/* Card */}
              <div
                className="flex-1 bg-surface border border-white/5 rounded-xl p-6
                  group-hover:-translate-y-0.5 transition-transform duration-200
                  md:ml-0
                  border-l-2 border-l-accent md:border-l-0 md:border md:border-white/5"
              >
                {/* Role */}
                <h3 className="font-display font-semibold text-primary text-lg leading-snug">
                  {exp.role}
                </h3>

                {/* Company & location */}
                <p className="text-secondary text-sm mt-0.5">
                  {exp.company}
                  <span className="mx-1.5 text-secondary/40">|</span>
                  {exp.location}
                </p>

                {/* Period */}
                <p className="font-mono text-xs text-accent mt-1">
                  {exp.period}
                </p>

                {/* Summary */}
                <p className="text-secondary text-sm mt-3 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <ul className="mt-3 flex flex-col gap-1.5">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="text-accent mt-[3px] shrink-0 leading-none">—</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
