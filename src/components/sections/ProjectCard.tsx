"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`flex flex-col h-full bg-surface border border-white/5 rounded-xl p-6 transition-colors duration-200 hover:border-white/10 ${
        project.featured ? "border-t-accent border-t-2" : ""
      }`}
    >
      {/* Title */}
      <h3 className="font-display font-semibold text-primary text-lg leading-snug mb-1">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-secondary text-sm mb-3">{project.tagline}</p>

      {/* Description with Read more toggle */}
      <div className="mb-4">
        <p
          className={`text-secondary text-sm leading-relaxed ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {project.description}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-xs text-accent hover:text-accent-hover transition-colors duration-200 font-mono"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>

      {/* Tags — visually quieter than tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-secondary bg-elevated px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Spacer to push footer to bottom */}
      <div className="mt-auto" />

      {/* Footer: external links + project detail */}
      {(project.liveUrl || project.githubUrl || project.slug) && (
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors duration-200 ml-auto"
            >
              View Project
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
