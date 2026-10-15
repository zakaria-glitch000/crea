import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOLUTIONS } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Solutions() {
  return (
    <section id="solutions" className="relative bg-slate-50 py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>NOTRE SAVOIR-FAIRE</SectionTag>

          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Un écosystème complet pour votre activité
            Des solutions complémentaires pour accompagner la gestion et le développement de votre entreprise.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((solution) => (
            <motion.article
              key={solution.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-premium"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/0 to-accent-50/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-50/60 group-hover:to-accent-50/30 group-hover:opacity-100" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
                <solution.icon className="h-6 w-6 text-brand-600 transition-colors group-hover:text-brand-500" />
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                {solution.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {solution.description}
              </p>

              <ul className="mt-4 space-y-2">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <Check className="h-3.5 w-3.5 text-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Lien vers la page détail */}
              <Link
                to={`/solutions/${solution.slug}`}
                className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                En savoir plus

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}