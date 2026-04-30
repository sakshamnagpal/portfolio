import { CheckCircle2 } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold text-primary mb-3">
          Skills &amp; Tools
        </h2>
        <div className="h-0.5 w-12 bg-accent mb-4 rounded-full" />
        <p className="text-secondary text-base">
          Technologies I work with in production
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-8">
        {skillCategories.map(({ category, skills }) => {
          const isCerts = category === "Certifications";

          return (
            <div
              key={category}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6 items-start"
            >
              {/* Category label */}
              <span className="font-mono text-xs text-accent uppercase tracking-widest pt-1">
                {category}
              </span>

              {/* Skills */}
              {isCerts ? (
                <ul className="flex flex-col gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-accent shrink-0"
                      />
                      <span className="font-mono text-sm text-secondary">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-elevated border border-white/5 hover:border-accent/40 hover:text-primary text-secondary text-sm rounded-full px-3 py-1 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
