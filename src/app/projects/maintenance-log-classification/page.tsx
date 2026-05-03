import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "maintenance-log-classification")!

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

export default function MaintenanceLogClassificationPage() {
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
              <title>Maintenance Log Classification and Fault Forecasting layered architecture diagram</title>
              <desc>Layered architecture showing Input, Pre-processing, NLP and ML Architecture, and Output stages of the maintenance log classification and fault forecasting system</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              <text fontSize="11" fill="#8888A0" x="54" y="88" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,88)">Input</text>
              <text fontSize="11" fill="#8888A0" x="54" y="230" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,230)">Pre-processing</text>
              <text fontSize="11" fill="#8888A0" x="54" y="460" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,460)">NLP and ML architecture</text>
              <text fontSize="11" fill="#8888A0" x="54" y="680" textAnchor="middle" dominantBaseline="central" transform="rotate(-90,54,680)">Output</text>
              <rect x="68" y="30" width="582" height="116" rx="12" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="200" y="50" width="260" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="330" y="72" textAnchor="middle" dominantBaseline="central">Maintenance management system</text>
              <text fontSize="12" fill="#8888A0" x="330" y="92" textAnchor="middle" dominantBaseline="central">Technician log entries + fault codes</text>
              <line x1="330" y1="146" x2="330" y2="167" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="168" width="582" height="148" rx="12" fill="#1C1C27" stroke="#7F77DD" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="88" y="186" width="158" height="52" rx="8" fill="#2a2a3a" stroke="#7F77DD" strokeWidth="0.5"/>
              <text fontSize="13" fontWeight="500" fill="#F0F0F5" x="167" y="206" textAnchor="middle" dominantBaseline="central">Text normalisation</text>
              <text fontSize="11" fill="#8888A0" x="167" y="224" textAnchor="middle" dominantBaseline="central">Lowercase, tokenise, filter</text>
              <rect x="262" y="186" width="158" height="52" rx="8" fill="#2a2a3a" stroke="#7F77DD" strokeWidth="0.5"/>
              <text fontSize="13" fontWeight="500" fill="#F0F0F5" x="341" y="206" textAnchor="middle" dominantBaseline="central">Stopword removal</text>
              <text fontSize="11" fill="#8888A0" x="341" y="224" textAnchor="middle" dominantBaseline="central">NLTK + aviation-specific</text>
              <rect x="88" y="252" width="158" height="52" rx="8" fill="#2a2a3a" stroke="#7F77DD" strokeWidth="0.5"/>
              <text fontSize="13" fontWeight="500" fill="#F0F0F5" x="167" y="272" textAnchor="middle" dominantBaseline="central">TF-IDF vectorisation</text>
              <text fontSize="11" fill="#8888A0" x="167" y="290" textAnchor="middle" dominantBaseline="central">Bigrams, 10k features</text>
              <rect x="262" y="252" width="158" height="52" rx="8" fill="#2a2a3a" stroke="#7F77DD" strokeWidth="0.5"/>
              <text fontSize="13" fontWeight="500" fill="#F0F0F5" x="341" y="272" textAnchor="middle" dominantBaseline="central">Back-translation</text>
              <text fontSize="11" fill="#8888A0" x="341" y="290" textAnchor="middle" dominantBaseline="central">TextBlob, tech-speak to English</text>
              <rect x="456" y="212" width="178" height="52" rx="8" fill="#2a2a3a" stroke="#D85A30" strokeWidth="0.5"/>
              <text fontSize="13" fontWeight="500" fill="#F0F0F5" x="545" y="232" textAnchor="middle" dominantBaseline="central">Fault code repository</text>
              <text fontSize="11" fill="#8888A0" x="545" y="250" textAnchor="middle" dominantBaseline="central">Structured feature extraction</text>
              <line x1="330" y1="316" x2="330" y2="337" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="337" width="582" height="280" rx="12" fill="#1C1C27" stroke="#1D9E75" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="190" y="357" width="280" height="52" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="330" y="377" textAnchor="middle" dominantBaseline="central">Feature engineering</text>
              <text fontSize="12" fill="#8888A0" x="330" y="395" textAnchor="middle" dominantBaseline="central">SME-informed, domain-specific features</text>
              <path d="M545 264 L545 383 L470 383" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M330 409 L210 409 L210 437" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M330 409 L460 409 L460 437" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="100" y="437" width="220" height="56" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="210" y="457" textAnchor="middle" dominantBaseline="central">NLP classifier</text>
              <text fontSize="12" fill="#8888A0" x="210" y="475" textAnchor="middle" dominantBaseline="central">Semi-supervised, log categorisation</text>
              <rect x="350" y="437" width="220" height="56" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="460" y="457" textAnchor="middle" dominantBaseline="central">LightGBM forecaster</text>
              <text fontSize="12" fill="#8888A0" x="460" y="475" textAnchor="middle" dominantBaseline="central">Fault pattern prediction</text>
              <path d="M210 493 L210 543 L290 543" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M460 493 L460 543 L380 543" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="190" y="530" width="280" height="56" rx="8" fill="#2a2a3a" stroke="#1D9E75" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="330" y="550" textAnchor="middle" dominantBaseline="central">Classified logs + forecasts</text>
              <text fontSize="12" fill="#8888A0" x="330" y="568" textAnchor="middle" dominantBaseline="central">Category labels + maintenance windows</text>
              <line x1="330" y1="586" x2="330" y2="617" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="68" y="617" width="582" height="136" rx="12" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.3"/>
              <path d="M330 617 L210 617 L210 645" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <path d="M330 617 L480 617 L480 645" fill="none" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <rect x="88" y="645" width="244" height="88" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="210" y="675" textAnchor="middle" dominantBaseline="central">Maintenance management system</text>
              <text fontSize="12" fill="#8888A0" x="210" y="695" textAnchor="middle" dominantBaseline="central">Classified logs + scheduling</text>
              <text fontSize="12" fill="#8888A0" x="210" y="713" textAnchor="middle" dominantBaseline="central">Parts procurement + spare aircraft</text>
              <rect x="358" y="645" width="244" height="88" rx="8" fill="#2a2a3a" stroke="#06B6D4" strokeWidth="0.5"/>
              <text fontSize="14" fontWeight="500" fill="#F0F0F5" x="480" y="675" textAnchor="middle" dominantBaseline="central">Power BI dashboard</text>
              <text fontSize="12" fill="#8888A0" x="480" y="695" textAnchor="middle" dominantBaseline="central">Critical tail reporting</text>
              <text fontSize="12" fill="#8888A0" x="480" y="713" textAnchor="middle" dominantBaseline="central">Predicted maintenance visibility</text>
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
