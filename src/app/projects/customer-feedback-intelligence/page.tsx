import type { Metadata } from "next"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/Badge"

const project = projects.find((p) => p.slug === "customer-feedback-intelligence")!

export const metadata: Metadata = {
  title: `${project.title} | Saksham Nagpal`,
  description: project.summary,
}

export default function CustomerFeedbackIntelligencePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary hover:text-accent transition-colors duration-200 mb-12"
      >
        ← Projects
      </Link>

      {/* Hero */}
      <header className="mb-14">
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

      {/* Content sections */}
      <div className="space-y-10 mb-14">
        {project.problem && (
          <section>
            <div className="border-l-2 border-accent pl-5">
              <h2 className="font-display font-semibold text-xl text-primary mb-3">
                The Problem
              </h2>
              <p className="text-secondary leading-relaxed">{project.problem}</p>
            </div>
          </section>
        )}
        {project.approach && (
          <section>
            <div className="border-l-2 border-accent pl-5">
              <h2 className="font-display font-semibold text-xl text-primary mb-3">
                Approach
              </h2>
              <p className="text-secondary leading-relaxed">{project.approach}</p>
            </div>
          </section>
        )}
        {project.outcome && (
          <section>
            <div className="border-l-2 border-accent pl-5">
              <h2 className="font-display font-semibold text-xl text-primary mb-3">
                Outcome
              </h2>
              <p className="text-secondary leading-relaxed">{project.outcome}</p>
            </div>
          </section>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 mb-10" />

      {/* Tech stack */}
      <div className="mb-6">
        <p className="font-mono text-xs text-secondary uppercase tracking-wider mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Tags */}
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
    </main>
  )
}
