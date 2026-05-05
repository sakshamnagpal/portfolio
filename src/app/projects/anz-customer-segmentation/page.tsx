import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "anz-customer-segmentation")!

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

export default function AnzCustomerSegmentationPage() {
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
            <svg width="100%" viewBox="0 0 680 760" role="img">
              <title>ANZ Plus customer segmentation architecture</title>
              <desc>System architecture showing data flow from Teradata and GCP BigQuery through feature engineering, clustering model evaluation, and phased ANZ Plus product adoption output.</desc>
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>

              {/* Data sources label */}
              <text x="40" y="52" fontSize="11" fill="#8888A0">Data sources</text>

              {/* Teradata */}
              <rect x="100" y="64" width="180" height="56" rx="8" fill="#2a2a3a" stroke="#8888A0" strokeWidth="0.5"/>
              <text x="190" y="86" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#F0F0F5">Teradata</text>
              <text x="190" y="104" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#8888A0">On-premises</text>

              {/* GCP BigQuery */}
              <rect x="400" y="64" width="180" height="56" rx="8" fill="#042C53" stroke="#378ADD" strokeWidth="0.5"/>
              <text x="490" y="86" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#B5D4F4">GCP BigQuery</text>
              <text x="490" y="104" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#85B7EB">Cloud data warehouse</text>

              {/* Arrows into unified feature store */}
              <line x1="190" y1="120" x2="310" y2="196" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
              <line x1="490" y1="120" x2="370" y2="196" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Data pipeline label */}
              <text x="40" y="188" fontSize="11" fill="#8888A0">Data pipeline</text>

              {/* Unified feature store */}
              <rect x="200" y="200" width="280" height="56" rx="8" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="340" y="222" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#9FE1CB">Unified feature store</text>
              <text x="340" y="240" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5DCAA5">GCP — merged, cleaned data</text>

              {/* Arrow down */}
              <line x1="340" y1="256" x2="340" y2="304" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Feature engineering label */}
              <text x="40" y="300" fontSize="11" fill="#8888A0">Feature engineering</text>

              {/* Feature engineering dashed container */}
              <rect x="80" y="312" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* Spending patterns */}
              <rect x="100" y="326" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="174" y="342" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Spending patterns</text>
              <text x="174" y="358" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Transactions, amounts</text>

              {/* Tech & app usage */}
              <rect x="266" y="326" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="340" y="342" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Tech &amp; app usage</text>
              <text x="340" y="358" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">PayID, mobile, checks</text>

              {/* Demographics */}
              <rect x="432" y="326" width="148" height="44" rx="6" fill="#1C1C27" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="506" y="342" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#F0F0F5">Demographics</text>
              <text x="506" y="358" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#8888A0">Age, account tenure</text>

              {/* Arrow down */}
              <line x1="340" y1="384" x2="340" y2="432" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Modelling label */}
              <text x="40" y="428" fontSize="11" fill="#8888A0">Modelling</text>

              {/* Modelling dashed container */}
              <rect x="80" y="440" width="520" height="72" rx="8" fill="none" stroke="#444" strokeWidth="0.5" strokeDasharray="4 3"/>

              {/* K-Means */}
              <rect x="100" y="454" width="148" height="44" rx="6" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text x="174" y="470" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#FAC775">K-Means</text>
              <text x="174" y="486" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#BA7517">Evaluated, rejected</text>

              {/* DBSCAN */}
              <rect x="266" y="454" width="148" height="44" rx="6" fill="#3a3010" stroke="#EF9F27" strokeWidth="0.5"/>
              <text x="340" y="470" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#FAC775">DBSCAN</text>
              <text x="340" y="486" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#BA7517">Evaluated, rejected</text>

              {/* Gaussian mixture */}
              <rect x="432" y="454" width="148" height="44" rx="6" fill="#085041" stroke="#1D9E75" strokeWidth="0.5"/>
              <text x="506" y="470" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#9FE1CB">Gaussian mixture</text>
              <text x="506" y="486" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="#5DCAA5">Selected — best separation</text>

              {/* Arrow from Gaussian mixture down to 12 cohorts */}
              <line x1="506" y1="512" x2="420" y2="556" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* 12 customer cohorts */}
              <rect x="200" y="560" width="280" height="56" rx="8" fill="#085041" stroke="#06B6D4" strokeWidth="0.8"/>
              <text x="340" y="582" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#9FE1CB">12 customer cohorts</text>
              <text x="340" y="600" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#5DCAA5">Distinct behavioural segments</text>

              {/* Arrow down to output nodes */}
              <line x1="340" y1="616" x2="340" y2="664" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>

              {/* Output label */}
              <text x="40" y="660" fontSize="11" fill="#8888A0">Output</text>

              {/* Phased rollout plan */}
              <rect x="100" y="672" width="220" height="56" rx="8" fill="#2a2a3a" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="210" y="690" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#F0F0F5">Phased rollout plan</text>
              <text x="210" y="708" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#8888A0">Beta → Alpha → MVP</text>

              {/* ANZ Plus roadmap */}
              <rect x="360" y="672" width="220" height="56" rx="8" fill="#2a2a3a" stroke="#06B6D4" strokeWidth="0.5"/>
              <text x="470" y="690" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#F0F0F5">ANZ Plus roadmap</text>
              <text x="470" y="708" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#8888A0">2.4M customers across phases</text>

              {/* Arrow between output nodes */}
              <line x1="320" y1="700" x2="358" y2="700" stroke="#8888A0" strokeWidth="1" markerEnd="url(#arrow)"/>
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
