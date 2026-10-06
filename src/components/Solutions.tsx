import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { SOLUTIONS } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Solutions() {
  return (
    <section id="solutions" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Nos solutions</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Une gamme complète au service de votre performance.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            De la caisse enrichie à l'infrastructure sécurisée, nous couvrons l'ensemble de vos besoins technologiques avec des solutions éprouvées.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((solution) => (
            <motion.article
              key={solution.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-premium"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/0 to-accent-50/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-50/60 group-hover:to-accent-50/30 group-hover:opacity-100" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
                <solution.icon className="h-6 w-6 text-brand-600 transition-colors group-hover:text-brand-500" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {solution.description}
              </p>

              <ul className="mt-5 space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-3.5 w-3.5 text-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                En savoir plus
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
