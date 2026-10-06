import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Industries() {
  return (
    <section className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Secteurs</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            Des solutions adaptées à chaque secteur.
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Nous comprenons les enjeux spécifiques de votre métier et adaptons nos technologies à votre réalité terrain.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-7 transition-all duration-300 hover:border-brand-200 hover:shadow-premium"
            >
              {/* Decorative gradient line */}
              <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                <industry.icon className="h-7 w-7 text-slate-500 transition-colors group-hover:text-brand-600" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
