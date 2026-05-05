import { articles } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExternalLink } from "lucide-react";

export function Writing() {
  return (
    <SectionWrapper id="writing">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-3">
            Writing
          </h2>
          <div className="h-0.5 w-12 bg-accent mb-4 rounded-full" />
        </div>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {articles.map((article, i) => (
          <FadeIn key={article.url} delay={i * 80}>
            <article className="bg-surface border border-white/5 rounded-xl p-6 transition-colors duration-200 hover:border-white/10">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2"
              >
                <h3 className="font-display font-semibold text-primary text-lg leading-snug group-hover:text-accent transition-colors duration-200">
                  {article.title}
                </h3>
                <ExternalLink
                  size={14}
                  className="mt-1.5 shrink-0 text-secondary group-hover:text-accent transition-colors duration-200"
                />
              </a>
              <p className="text-secondary text-sm leading-relaxed mt-2 mb-3">
                {article.description}
              </p>
              <span className="font-mono text-xs text-secondary">
                {article.publication} · {article.date}
              </span>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
