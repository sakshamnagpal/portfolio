import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "aus-super-calculator")!

export const metadata: Metadata = {
  title: `${project.title} | Saksham Nagpal`,
  description: project.summary,
}

function ProseSection({ heading, body }: { heading: string; body: string }) {
  return (
    <section>
      <div className="border-l-2 border-accent pl-4">
        <h2 className="font-display font-semibold text-xl text-primary mb-3">
          {heading}
        </h2>
        <p className="text-secondary leading-relaxed">{body}</p>
      </div>
    </section>
  )
}

export default function AusSuperCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* 1. Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary hover:text-accent transition-colors duration-200 mb-12"
      >
        ← Projects
      </Link>

      {/* 2. Hero */}
      <header className="mb-12">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl text-primary leading-snug mb-3">
          {project.title}
        </h1>
        {project.employer && project.period && (
          <p className="font-mono text-sm text-accent mb-5">
            {project.employer} · {project.period}
          </p>
        )}
        {project.summary && (
          <p className="text-secondary text-lg leading-relaxed">
            {project.summary}
          </p>
        )}
      </header>

      <div className="space-y-12">
        {/* 3. The problem */}
        {project.problem && (
          <ProseSection heading="The problem" body={project.problem} />
        )}

        {/* 4. Architecture */}
        <section>
          <h2 className="font-display font-semibold text-xl text-primary mb-4">
            Architecture
          </h2>
          <div className="bg-elevated rounded-xl p-6 overflow-x-auto">
            <svg width="100%" viewBox="0 0 680 600" role="img">
              <title>Australian Superannuation Calculator architecture</title>
              <desc>System architecture showing the client-side only data flow from user inputs through the ATO rules engine to projection outputs and chart visualisation.</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>

              {/* Input layer label */}
              <text x="40" y="52" fontSize="11" fill="#8888A0">User inputs</text>

              {/* Personal details */}
              <rect x="80" y="64" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="154" y="80" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Personal details</text>
              <text x="154" y="98" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Age, balance, retirement</text>

              {/* Income & salary */}
              <rect x="246" y="64" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="320" y="80" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Income</text>
              <text x="320" y="98" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Salary, SG, sacrifice</text>

              {/* Assumptions */}
              <rect x="412" y="64" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="486" y="80" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Assumptions</text>
              <text x="486" y="98" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Return, inflation, fees</text>

              {/* Arrows into rules engine */}
              <line x1="154" y1="108" x2="280" y2="180" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="320" y1="108" x2="320" y2="180" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="486" y1="108" x2="360" y2="180" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Rules engine label */}
              <text x="40" y="176" fontSize="11" fill="#8888A0">Rules engine</text>

              {/* ATO rules engine */}
              <rect x="160" y="188" width="320" height="56" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="320" y="210" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#9FE1CB">ATO rules engine</text>
              <text x="320" y="228" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5DCAA5">superRules.js — FY2025–26</text>

              {/* Arrow down to rules */}
              <line x1="320" y1="244" x2="320" y2="272" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* ATO rules dashed container */}
              <rect x="80" y="272" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* SG rate */}
              <rect x="100" y="284" width="140" height="44" rx="6" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text x="170" y="300" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#FAC775">SG rate</text>
              <text x="170" y="318" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#BA7517">11.5% → 12%</text>

              {/* Concessional cap */}
              <rect x="258" y="284" width="140" height="44" rx="6" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text x="328" y="300" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#FAC775">Concessional cap</text>
              <text x="328" y="318" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#BA7517">$30k limit + warnings</text>

              {/* Div 293 / LISTO */}
              <rect x="416" y="284" width="140" height="44" rx="6" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text x="486" y="300" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#FAC775">Div 293 / LISTO</text>
              <text x="486" y="318" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#BA7517">High earner &amp; low income</text>

              {/* Arrow down to output */}
              <line x1="320" y1="344" x2="320" y2="392" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Output label */}
              <text x="40" y="388" fontSize="11" fill="#8888A0">Output</text>

              {/* Output dashed container */}
              <rect x="80" y="400" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* Projected balance */}
              <rect x="100" y="412" width="148" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="174" y="428" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Projected balance</text>
              <text x="174" y="446" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Nominal + real</text>

              {/* Year-by-year table */}
              <rect x="266" y="412" width="148" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="340" y="428" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Year-by-year table</text>
              <text x="340" y="446" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Collapsible breakdown</text>

              {/* Scenario comparison */}
              <rect x="432" y="412" width="148" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="506" y="428" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Scenario comparison</text>
              <text x="506" y="446" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Baseline vs alternative</text>

              {/* Arrow down to chart */}
              <line x1="320" y1="472" x2="320" y2="520" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Chart visualisation label */}
              <text x="40" y="516" fontSize="11" fill="#8888A0">Visualisation</text>

              {/* Chart.js projection chart */}
              <rect x="160" y="528" width="320" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text x="320" y="544" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#B5D4F4">Chart.js projection chart</text>
              <text x="320" y="562" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#85B7EB">40-year balance over time</text>
            </svg>
          </div>
        </section>

        {/* 5. Approach */}
        {project.approach && (
          <ProseSection heading="Approach" body={project.approach} />
        )}

        {/* 6. Key decisions and trade-offs */}
        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-xl text-primary mb-4">
              Key decisions and trade-offs
            </h2>
            <div className="flex flex-col gap-4">
              {project.keyDecisions.map((d) => (
                <div key={d.decision} className="bg-elevated rounded-xl p-4">
                  <p className="font-mono text-sm text-accent mb-2">{d.decision}</p>
                  <p className="text-secondary leading-relaxed text-sm">{d.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-xl text-primary mb-4">
              Challenges
            </h2>
            <div className="flex flex-col gap-4">
              {project.challenges.map((c) => (
                <div key={c.title} className="bg-elevated rounded-xl p-4">
                  <p className="font-mono text-sm text-accent mb-2">{c.title}</p>
                  <p className="text-secondary leading-relaxed text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Outcome */}
        {project.outcome && (
          <ProseSection heading="Outcome" body={project.outcome} />
        )}

        {/* 9. My role */}
        {project.myRole && (
          <ProseSection heading="My role" body={project.myRole} />
        )}

        {/* 10. What I would do differently */}
        {project.whatIdDoDifferently && (
          <ProseSection
            heading="What I would do differently"
            body={project.whatIdDoDifferently}
          />
        )}
      </div>

      {/* 11. Footer: tags then stack pills */}
      <div className="mt-12 pt-8 border-t border-white/5 space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {(project.stack ?? project.techStack).map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </main>
  )
}
