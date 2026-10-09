import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/data/content';
import {
  Reveal,
  SectionTag,
  staggerContainer,
  fadeUp,
} from './ui/Reveal';

export function Industries() {
  return (
    <section
      id="Industries"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Décoration de fond */}
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête */}
        <Reveal className="max-w-2xl">
          <SectionTag>Métier</SectionTag>

          <h2 className="mt-6 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Des solutions adaptées à{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              chaque métier.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Nous comprenons les enjeux spécifiques de votre métier et adaptons
            nos technologies à votre réalité terrain.
          </p>
        </Reveal>

        {/* Cartes métiers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.article
              key={industry.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-premium"
            >
              {/* Ligne décorative animée */}
              <div className="absolute left-0 top-0 z-30 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-sky-400 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dégradé sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

                {/* Icône */}
                <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <industry.icon className="h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-blue-600" />
                </div>
              </div>

              {/* Contenu */}
              <div className="relative p-7">
                <h3 className="font-display text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {industry.description}
                </p>

                {/* Ligne de finition */}
                <div className="mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              {/* Halo subtil au survol */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-blue-100/60 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
