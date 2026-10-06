import { ArrowUpRight, Tag } from 'lucide-react';
import { PROJECTS } from '@/data/content';
import { Reveal, SectionTag } from './ui/Reveal';

export function Projects() {
  return (
    <section id="projects" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionTag>Réalisations</SectionTag>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
              Des projets qui parlent pour nous.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
          >
            Démarrer votre projet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-14 space-y-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <article
                className={`group grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-premium lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-brand-700 backdrop-blur">
                      <Tag className="h-3 w-3" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="font-display text-2xl font-bold leading-tight text-slate-900 lg:text-3xl text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                    <span className="text-slate-400">Solution :</span>
                    {project.solution}
                  </div>

                  <a
                    href="#contact"
                    className="group/btn mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
                  >
                    Voir le projet
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
