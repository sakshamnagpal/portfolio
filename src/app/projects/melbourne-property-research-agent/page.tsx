import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "melbourne-property-research-agent")!

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

export default function MelbournePropertyResearchAgentPage() {
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
            <svg width="100%" viewBox="0 0 680 820" role="img">
              <title>Melbourne Property Research Agent — system architecture</title>
              <desc>Full-stack agentic architecture showing React frontend on Vercel, FastAPI backend on Railway, LangGraph ReAct agent with four tools, Claude API, and data sources including VGV and ABS Census.</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>

              {/* Frontend label */}
              <text x="40" y="52" fontSize="11" fill="#8888A0">Frontend — Vercel</text>

              {/* React + Vite frontend */}
              <rect x="200" y="64" width="280" height="56" rx="8" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="340" y="86" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#F0F0F5">React + Vite frontend</text>
              <text x="340" y="104" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#8888A0">melbourne-property-tool.vercel.app</text>

              {/* Arrow + SSE label */}
              <line x1="340" y1="120" x2="340" y2="168" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <text x="356" y="148" fontSize="11" fill="#8888A0">SSE stream</text>

              {/* Backend label */}
              <text x="40" y="164" fontSize="11" fill="#8888A0">Backend — Railway</text>

              {/* FastAPI backend */}
              <rect x="200" y="176" width="280" height="56" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text x="340" y="198" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#B5D4F4">FastAPI backend</text>
              <text x="340" y="216" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#85B7EB">Streaming SSE + Haiku guardrail</text>

              {/* Arrow down to agent */}
              <line x1="340" y1="232" x2="340" y2="280" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Agent label */}
              <text x="40" y="276" fontSize="11" fill="#8888A0">Agent layer</text>

              {/* LangGraph ReAct agent */}
              <rect x="180" y="288" width="320" height="56" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="340" y="310" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#9FE1CB">LangGraph ReAct agent</text>
              <text x="340" y="328" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5DCAA5">State graph + conditional edges</text>

              {/* Arrow right to Claude API */}
              <line x1="500" y1="316" x2="556" y2="316" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Claude API */}
              <rect x="558" y="292" width="100" height="44" rx="8" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="608" y="308" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Claude API</text>
              <text x="608" y="324" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Reasoning LLM</text>

              {/* Arrow down to tools */}
              <line x1="340" y1="344" x2="340" y2="392" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Tools label */}
              <text x="40" y="388" fontSize="11" fill="#8888A0">Tool layer</text>

              {/* Tools dashed container */}
              <rect x="80" y="400" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* Suburb stats */}
              <rect x="96" y="412" width="112" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="152" y="428" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#F0F0F5">Suburb stats</text>
              <text x="152" y="444" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Medians, yields</text>

              {/* Demographics */}
              <rect x="224" y="412" width="112" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="280" y="428" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#F0F0F5">Demographics</text>
              <text x="280" y="444" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">ABS Census data</text>

              {/* Price trends */}
              <rect x="352" y="412" width="112" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="408" y="428" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#F0F0F5">Price trends</text>
              <text x="408" y="444" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">5-year chart</text>

              {/* Amenities */}
              <rect x="480" y="412" width="104" height="44" rx="6" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="532" y="428" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill="#F0F0F5">Amenities</text>
              <text x="532" y="444" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">In progress</text>

              {/* Arrow down to data sources */}
              <line x1="340" y1="472" x2="340" y2="520" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Data sources label */}
              <text x="40" y="516" fontSize="11" fill="#8888A0">Data sources</text>

              {/* Data dashed container */}
              <rect x="80" y="528" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* VGV */}
              <rect x="100" y="540" width="220" height="44" rx="6" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text x="210" y="556" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#B5D4F4">VGV sales data</text>
              <text x="210" y="572" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#85B7EB">Property prices, trends — SQLite</text>

              {/* ABS Census */}
              <rect x="340" y="540" width="240" height="44" rx="6" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text x="460" y="556" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#B5D4F4">ABS 2021 Census</text>
              <text x="460" y="572" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#85B7EB">Demographics, income — SQLite</text>

              {/* Arrow down to output */}
              <line x1="340" y1="600" x2="340" y2="648" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Output label */}
              <text x="40" y="644" fontSize="11" fill="#8888A0">Output</text>

              {/* Output dashed container */}
              <rect x="80" y="656" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* Streamed reasoning */}
              <rect x="100" y="668" width="220" height="44" rx="6" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="210" y="684" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#9FE1CB">Streamed reasoning</text>
              <text x="210" y="700" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5DCAA5">Tool calls visible in UI</text>

              {/* Inline chart */}
              <rect x="340" y="668" width="240" height="44" rx="6" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="460" y="684" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#9FE1CB">Inline Recharts chart</text>
              <text x="460" y="700" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5DCAA5">Price trend on trend queries</text>
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
