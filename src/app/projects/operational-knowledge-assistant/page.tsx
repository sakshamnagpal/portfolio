import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "operational-knowledge-assistant")!

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

export default function OperationalKnowledgeAssistantPage() {
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
            <svg width="100%" viewBox="0 0 680 780" role="img">
              <title>Operational Knowledge Assistant — Agent Architecture</title>
              <desc>Supervisor pattern multi-agent architecture using Strands Agents on Amazon Bedrock, with a Bedrock Knowledge Base connected to S3 policy documents, and integration with Navitaire NewSkies via MCP and AgentCore Gateway. Observability via Datadog.</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              {/* Layer labels */}
              <text fontSize="11" fill="#8888A0" x="4" y="58" textAnchor="start" dominantBaseline="central">Input</text>
              <text fontSize="11" fill="#8888A0" x="4" y="155" textAnchor="start" dominantBaseline="central">Guard</text>
              <text fontSize="11" fill="#8888A0" x="4" y="169" textAnchor="start" dominantBaseline="central">rail</text>
              <text fontSize="11" fill="#8888A0" x="4" y="308" textAnchor="start" dominantBaseline="central">Agent</text>
              <text fontSize="11" fill="#8888A0" x="4" y="322" textAnchor="start" dominantBaseline="central">layer</text>
              <text fontSize="11" fill="#8888A0" x="4" y="530" textAnchor="start" dominantBaseline="central">Know</text>
              <text fontSize="11" fill="#8888A0" x="4" y="544" textAnchor="start" dominantBaseline="central">ledge</text>
              <text fontSize="11" fill="#8888A0" x="4" y="558" textAnchor="start" dominantBaseline="central">layer</text>
              <text fontSize="11" fill="#8888A0" x="4" y="670" textAnchor="start" dominantBaseline="central">Output</text>
              {/* Layer dividers */}
              <line x1="52" y1="88" x2="640" y2="88" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4"/>
              <line x1="52" y1="196" x2="640" y2="196" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4"/>
              <line x1="52" y1="460" x2="640" y2="460" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4"/>
              <line x1="52" y1="620" x2="640" y2="620" stroke="#444" strokeWidth="0.5" strokeDasharray="4 4"/>
              {/* Input */}
              <rect x="206" y="30" width="220" height="44" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="316" y="48" textAnchor="middle" dominantBaseline="central">Staff traveller query</text>
              <text fontSize="12" fill="#8888A0" x="316" y="66" textAnchor="middle" dominantBaseline="central">Flight manifest + allocation request</text>
              {/* Guardrail */}
              <line x1="316" y1="74" x2="316" y2="108" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="178" y="108" width="276" height="44" rx="8" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#FAC775" x="316" y="126" textAnchor="middle" dominantBaseline="central">Qualifier guardrail</text>
              <text fontSize="12" fill="#BA7517" x="316" y="144" textAnchor="middle" dominantBaseline="central">Scope filter · ambiguity check · hallucination block</text>
              {/* Strands container */}
              <rect x="58" y="204" width="410" height="248" rx="12" fill="none" stroke="#8888A0" strokeWidth="0.8" strokeDasharray="6 3"/>
              <text fontSize="12" fill="#8888A0" x="74" y="222" dominantBaseline="central">Strands Agents — supervisor pattern</text>
              {/* Claude Sonnet */}
              <rect x="58" y="236" width="76" height="44" rx="8" fill="#26215C" stroke="#534AB7" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#CECBF6" x="96" y="254" textAnchor="middle" dominantBaseline="central">Claude</text>
              <text fontSize="12" fill="#AFA9EC" x="96" y="270" textAnchor="middle" dominantBaseline="central">Sonnet</text>
              {/* Orchestrator */}
              <line x1="316" y1="152" x2="316" y2="236" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="166" y="236" width="160" height="44" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="246" y="254" textAnchor="middle" dominantBaseline="central">Orchestrator agent</text>
              <text fontSize="12" fill="#5DCAA5" x="246" y="270" textAnchor="middle" dominantBaseline="central">Routes and coordinates</text>
              {/* Sub-agent connectors row 1 */}
              <line x1="220" y1="280" x2="176" y2="306" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="246" y1="280" x2="278" y2="306" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="270" y1="280" x2="380" y2="306" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              {/* Sub-agents row 1 */}
              <rect x="68" y="306" width="148" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="142" y="324" textAnchor="middle" dominantBaseline="central">Disruption handler</text>
              <text fontSize="12" fill="#85B7EB" x="142" y="340" textAnchor="middle" dominantBaseline="central">Irregular ops routing</text>
              <rect x="228" y="306" width="130" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="293" y="324" textAnchor="middle" dominantBaseline="central">Priority manager</text>
              <text fontSize="12" fill="#85B7EB" x="293" y="340" textAnchor="middle" dominantBaseline="central">Staff priority rules</text>
              <rect x="368" y="306" width="92" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="414" y="320" textAnchor="middle" dominantBaseline="central">Business</text>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="414" y="335" textAnchor="middle" dominantBaseline="central">rules</text>
              <text fontSize="12" fill="#85B7EB" x="414" y="350" textAnchor="middle" dominantBaseline="central">Policy checks</text>
              {/* Sub-agent connectors row 2 */}
              <line x1="200" y1="350" x2="170" y2="376" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="246" y1="350" x2="306" y2="376" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              {/* Sub-agents row 2 */}
              <rect x="68" y="376" width="148" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="142" y="394" textAnchor="middle" dominantBaseline="central">Seating optimisation</text>
              <text fontSize="12" fill="#85B7EB" x="142" y="410" textAnchor="middle" dominantBaseline="central">Seat assignment logic</text>
              <rect x="228" y="376" width="130" height="44" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#B5D4F4" x="293" y="394" textAnchor="middle" dominantBaseline="central">Explanation agent</text>
              <text fontSize="12" fill="#85B7EB" x="293" y="410" textAnchor="middle" dominantBaseline="central">Human-readable output</text>
              {/* Business rules → Knowledge Base */}
              <line x1="460" y1="328" x2="510" y2="328" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              {/* Bedrock Knowledge Base */}
              <rect x="510" y="306" width="122" height="44" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="571" y="322" textAnchor="middle" dominantBaseline="central">Bedrock</text>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="571" y="336" textAnchor="middle" dominantBaseline="central">Knowledge Base</text>
              {/* Bedrock Data Automation */}
              <line x1="571" y1="350" x2="571" y2="468" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="496" y="468" width="150" height="44" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="571" y="484" textAnchor="middle" dominantBaseline="central">Bedrock Data</text>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="571" y="498" textAnchor="middle" dominantBaseline="central">Automation</text>
              {/* S3 */}
              <line x1="571" y1="512" x2="571" y2="540" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="496" y="540" width="150" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="571" y="558" textAnchor="middle" dominantBaseline="central">S3 buckets</text>
              <text fontSize="12" fill="#8888A0" x="571" y="574" textAnchor="middle" dominantBaseline="central">Operator manuals</text>
              <text fontSize="12" fill="#8888A0" x="571" y="588" textAnchor="middle" dominantBaseline="central">Policies &amp; conditions</text>
              {/* MCP */}
              <line x1="468" y1="258" x2="510" y2="258" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="510" y="236" width="56" height="44" rx="8" fill="#26215C" stroke="#534AB7" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#CECBF6" x="538" y="258" textAnchor="middle" dominantBaseline="central">MCP</text>
              {/* AgentCore Gateway */}
              <line x1="566" y1="258" x2="592" y2="258" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="592" y="236" width="44" height="44" rx="8" fill="#26215C" stroke="#534AB7" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#CECBF6" x="614" y="252" textAnchor="middle" dominantBaseline="central">Agent</text>
              <text fontSize="14" fontWeight="500" fill="#CECBF6" x="614" y="265" textAnchor="middle" dominantBaseline="central">Core</text>
              <text fontSize="12" fill="#AFA9EC" x="614" y="277" textAnchor="middle" dominantBaseline="central">GW</text>
              {/* Navitaire NewSkies */}
              <line x1="614" y1="236" x2="614" y2="228" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="592" y="172" width="44" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="614" y="188" textAnchor="middle" dominantBaseline="central">Navitaire</text>
              <text fontSize="12" fill="#8888A0" x="614" y="204" textAnchor="middle" dominantBaseline="central">New</text>
              <text fontSize="12" fill="#8888A0" x="614" y="218" textAnchor="middle" dominantBaseline="central">Skies</text>
              {/* Observability */}
              <line x1="263" y1="420" x2="263" y2="636" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="110" y="636" width="160" height="44" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="190" y="651" textAnchor="middle" dominantBaseline="central">AgentCore</text>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="190" y="668" textAnchor="middle" dominantBaseline="central">Observability</text>
              {/* OTEL */}
              <line x1="270" y1="660" x2="286" y2="660" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="286" y="648" width="72" height="24" rx="8" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text fontSize="12" fill="#FAC775" x="322" y="661" textAnchor="middle" dominantBaseline="central">OTEL logs</text>
              {/* Datadog */}
              <line x1="358" y1="660" x2="390" y2="660" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="390" y="636" width="120" height="44" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="450" y="651" textAnchor="middle" dominantBaseline="central">Datadog</text>
              <text fontSize="12" fill="#8888A0" x="450" y="667" textAnchor="middle" dominantBaseline="central">SaaS observability</text>
              {/* Output */}
              <line x1="246" y1="452" x2="246" y2="696" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="110" y="696" width="272" height="56" rx="8" fill="#085041" stroke="#06B6D4" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#9FE1CB" x="246" y="714" textAnchor="middle" dominantBaseline="central">Seat allocation decision</text>
              <text fontSize="12" fill="#5DCAA5" x="246" y="732" textAnchor="middle" dominantBaseline="central">Assignment + human-readable explanation</text>
              <text fontSize="12" fill="#5DCAA5" x="246" y="746" textAnchor="middle" dominantBaseline="central">~1.6s runtime per flight</text>
            </svg>
          </div>
        </section>

        {/* 5. Approach */}
        {project.approach && (
          <ProseSection heading="Approach" body={project.approach} />
        )}

        {/* 6. Key decisions and trade-offs */}
        {project.decisions && project.decisions.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-xl text-primary mb-4">
              Key decisions and trade-offs
            </h2>
            <div className="flex flex-col gap-4">
              {project.decisions.map((d) => (
                <div key={d.title} className="bg-elevated rounded-xl p-4">
                  <p className="font-mono text-sm text-accent mb-2">{d.title}</p>
                  <p className="text-secondary leading-relaxed text-sm">{d.body}</p>
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
        {project.role && (
          <ProseSection heading="My role" body={project.role} />
        )}

        {/* 10. What I would do differently */}
        {project.retrospective && (
          <ProseSection heading="What I would do differently" body={project.retrospective} />
        )}
      </div>

      {/* 11. Footer: tags then tech stack pills */}
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
          {project.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </main>
  )
}
