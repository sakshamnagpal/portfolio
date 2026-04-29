import { projects } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/sections/ProjectCard";

const sorted = [...projects].sort((a, b) =>
  a.featured === b.featured ? 0 : a.featured ? -1 : 1
);

export function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold text-primary mb-3">
          Projects
        </h2>
        <div className="h-0.5 w-12 bg-accent mb-4 rounded-full" />
        <p className="text-secondary text-base">
          A selection of production systems, ML pipelines, and side projects
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
