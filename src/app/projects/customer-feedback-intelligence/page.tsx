import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "customer-feedback-intelligence")!

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

export default function CustomerFeedbackIntelligencePage() {
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
            <svg width="100%" viewBox="0 0 680 700" role="img">
              <title>Customer Feedback Intelligence System layered architecture diagram</title>
              <desc>Layered architecture showing Input, Pre-processing, LLM Architecture, and Output stages of the customer feedback classification system</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              <text fontSize="11" fill="#8888A0" x="54" y="88" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,88)">Input</text>
              <text fontSize="11" fill="#8888A0" x="54" y="210" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,210)">Pre-processing</text>
              <text fontSize="11" fill="#8888A0" x="54" y="420" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,420)">LLM architecture</text>
              <text fontSize="11" fill="#8888A0" x="54" y="618" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,618)">Output</text>
              <rect x="68" y="30" width="582" height="116" rx="12" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="240" y="50" width="200" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="340" y="72" textAnchor="middle" dominantBaseline="central">CRM system</text>
              <text fontSize="12" fill="#8888A0" x="340" y="92" textAnchor="middle" dominantBaseline="central">Customer feedback + NPS scores</text>
              <line x1="340" y1="146" x2="340" y2="165" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="168" width="582" height="100" rx="12" fill="#1C1C27" stroke="#7F77DD" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="170" y="184" width="340" height="68" rx="8" fill="#2a2a3a" stroke="#7F77DD" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="340" y="208" textAnchor="middle" dominantBaseline="central">Data pre-processing</text>
              <text fontSize="12" fill="#8888A0" x="340" y="228" textAnchor="middle" dominantBaseline="central">NPS score deprioritised</text>
              <text fontSize="12" fill="#8888A0" x="340" y="244" textAnchor="middle" dominantBaseline="central">LightGBM reclassifies score from text signal</text>
              <line x1="340" y1="268" x2="340" y2="289" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="292" width="582" height="272" rx="12" fill="#1C1C27" stroke="#1D9E75" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="100" y="312" width="196" height="64" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="198" y="336" textAnchor="middle" dominantBaseline="central">Claude API</text>
              <text fontSize="12" fill="#8888A0" x="198" y="356" textAnchor="middle" dominantBaseline="central">Prompt-engineered classifier</text>
              <rect x="384" y="312" width="196" height="64" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="482" y="336" textAnchor="middle" dominantBaseline="central">KNN clustering</text>
              <text fontSize="12" fill="#8888A0" x="482" y="356" textAnchor="middle" dominantBaseline="central">Elbow method + silhouette score</text>
              <path d="M340 292 L198 292 L198 312" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M340 292 L482 292 L482 312" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M198 376 L198 432 L280 432" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M482 376 L482 432 L400 432" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="84" y="410" width="150" height="56" rx="8" fill="#2a2a3a" stroke="#D85A30" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="159" y="432" textAnchor="middle" dominantBaseline="central">RAG layer</text>
              <text fontSize="12" fill="#8888A0" x="159" y="450" textAnchor="middle" dominantBaseline="central">Internal knowledge</text>
              <line x1="234" y1="438" x2="268" y2="438" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="270" y="418" width="200" height="56" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="370" y="440" textAnchor="middle" dominantBaseline="central">Classification engine</text>
              <text fontSize="12" fill="#8888A0" x="370" y="458" textAnchor="middle" dominantBaseline="central">92% coverage across categories</text>
              <line x1="370" y1="474" x2="370" y2="508" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="270" y="510" width="200" height="44" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="370" y="528" textAnchor="middle" dominantBaseline="central">Complaint routing</text>
              <text fontSize="12" fill="#8888A0" x="370" y="544" textAnchor="middle" dominantBaseline="central">Category label assigned</text>
              <line x1="370" y1="554" x2="370" y2="578" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="580" width="582" height="96" rx="12" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="240" y="598" width="200" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="340" y="620" textAnchor="middle" dominantBaseline="central">ServiceNow</text>
              <text fontSize="12" fill="#8888A0" x="340" y="640" textAnchor="middle" dominantBaseline="central">Ticket created for respective team</text>
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
