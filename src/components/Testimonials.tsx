import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { Reveal, SectionTag, staggerContainer, fadeUp } from './ui/Reveal';

export function Testimonials() {
  return (
    <section className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionTag>Témoignages</SectionTag>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
            La confiance de nos clients, notre meilleure preuve.
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:border-brand-200 hover:shadow-premium"
            >
              <Quote className="h-8 w-8 text-brand-300 transition-colors group-hover:text-brand-400" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-600">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <div className="font-display text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="mt-0.5 text-xs text-slate-400">{t.role} · {t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
